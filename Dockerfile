# MIRROR Interactive Sales Academy — hosted image.
#
# The product has no native dependencies and no build step: Node 22.5+ provides
# the datastore (node:sqlite), and express/cors/uuid are pure JavaScript. That
# is why this file is short, and why it will keep working.
FROM node:22-alpine

ENV NODE_ENV=production \
    MIRROR_MODE=hosted \
    PORT=8080 \
    MIRROR_DB=/data/mirror.db

WORKDIR /app

# Dependencies first, so a content change does not reinstall them.
COPY package.json package-lock.json* ./
RUN npm install --omit=dev --omit=optional --no-audit --no-fund

COPY server ./server
COPY public ./public
COPY build.json ./

# The database lives on a mounted volume, never in the image layer.
RUN mkdir -p /data && chown -R node:node /data /app
VOLUME ["/data"]
USER node

EXPOSE 8080

# Boot fails loudly rather than silently serving a tenant with burned
# credentials: server/seed.js refuses to start in hosted mode unless every
# seed password is supplied by environment variable and none of them is one of
# the three published to the public repository.
HEALTHCHECK --interval=30s --timeout=4s --start-period=10s --retries=3 \
  CMD node -e "require('http').get({host:'127.0.0.1',port:process.env.PORT||8080,path:'/api/health',timeout:3000},r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

CMD ["node", "server/index.js"]

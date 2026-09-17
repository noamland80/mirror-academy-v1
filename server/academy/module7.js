/**
 * MODULE 7 — OBJECTIONS
 * Book: Ch.12 (O — Overcome) — permission, not price: the three hidden
 *       objections; Ch.14 for the translations of "expensive"; Ch.13 for
 *       accepting a decline. Threads: Orit, Esther, Claudia, Dana.
 * Canonical: Phase 7 Decision Support; Trust Standards 5–6; Toolkit #6.
 */
const T = (en, es) => ({ en, es });

module.exports = {
  id: 'm7', n: 7,
  phase: 'decisionSupport',
  accent: 'rose',
  title: T('Objections', 'Objeciones'),
  strapline: T('Diagnose before you respond — the three hidden objections and the full library',
               'Diagnostica antes de responder — las tres objeciones ocultas y la biblioteca completa'),
  summary: T(
    'Almost no objection means what it says. This module separates the stated objection from the three that hide beneath every one of them, gives you the diagnostic you run in the room before you answer, works through the two objections that decide most consultations — "I need to think about it" and "I need to ask my husband" — and teaches the two hardest skills: recognising the objection you caused, and accepting a no in a way that keeps the relationship.',
    'Casi ninguna objeción significa lo que dice. Este módulo separa la objeción enunciada de las tres que se esconden bajo todas ellas, te da el diagnóstico que ejecutas en la sala antes de responder, trabaja las dos objeciones que deciden la mayoría de las consultas —«necesito pensarlo» y «tengo que consultarlo con mi marido»— y enseña las dos habilidades más difíciles: reconocer la objeción que causaste tú y aceptar un no de forma que conserve la relación.'),
  outcome: T('Hear which of the three hidden objections a client is speaking, and ask the one question that makes her say it out loud instead of defending the price.',
             'Oír cuál de las tres objeciones ocultas está hablando una clienta, y hacer la única pregunta que consigue que la diga en voz alta en lugar de defender el precio.'),
  source: T('The Beauty Sales Secrets — Chapter 12 (O — Overcome), with Chapters 13 and 14; MIRROR Phase 7, Toolkit #6',
            'The Beauty Sales Secrets — Capítulo 12 (O — Superar), con los capítulos 13 y 14; MIRROR Fase 7, Toolkit #6'),
  minutes: 68,
  status: 'available',
  lessons: [
    // -----------------------------------------------------------------
    {
      id: 'm7l1', n: 1, minutes: 11,
      title: T('The three hidden objections', 'Las tres objeciones ocultas'),
      objective: T('Separate permission, trust and authority beneath any stated objection.',
                   'Separar permiso, confianza y autoridad bajo cualquier objeción enunciada.'),
      provenance: {
        chapter: 12,
        principle: T('Behind every objection is a hidden belief: "too expensive" is permission, "I need to think about it" is trust, and "I need to ask my husband" is authority.',
                     'Detrás de cada objeción hay una creencia oculta: «es caro» es permiso, «me lo tengo que pensar» es confianza y «tengo que consultarlo con mi marido» es autoridad.'),
        phase: 'decisionSupport',
        trustStage: 'safety',
        standard: 1,
        duty: 2,
        toolkit: 6
      },
      depth: {
        whyItGoesWrong: T(
          'The objection turns up as a whole sentence with a plain subject, and a competent specialist takes people at their word. Treating "it is expensive" as a remark about money is elementary courtesy; manufacturing a secret meaning behind a client\'s own sentence would be arrogant anywhere else in the room, and quite rightly. What sets this sentence apart is that she is picking from three available reasons, and money is the only one that costs her nothing to utter. Doubt about the result obliges her to admit she has been let down before. Doubt about her own authority obliges her to admit she cannot choose alone. Price is the socially free reason, which is precisely why it is the one that reaches you.',
          'La objeción se presenta como una frase entera con un sujeto llano, y una especialista competente toma a la gente por su palabra. Tratar «es caro» como un comentario sobre dinero es cortesía elemental; fabricar un sentido secreto detrás de la frase de una clienta sería arrogante en cualquier otro punto de la sala, y con toda la razón. Lo que separa a esta frase es que ella está eligiendo entre tres motivos disponibles, y el dinero es el único que no le cuesta nada pronunciar. La duda sobre el resultado la obliga a admitir que ya la han decepcionado. La duda sobre su propia autoridad la obliga a admitir que no puede elegir sola. El precio es el motivo socialmente gratuito, y justo por eso es el que te llega.'),
        sheIsThinking: T(
          'Expensive is the safest thing available to me. True enough to hold up if she presses, blurred enough that nobody asks me a follow-up.',
          'Caro es lo más seguro que tengo a mano. Lo bastante cierto como para aguantar si insiste, lo bastante borroso como para que nadie me repregunte.'),
        ladder: {
          weak:    { line: T('"It is an investment, but it is worth every euro — and we can fraction it if that helps."',
                     '«Es una inversión, pero vale cada euro, y podemos fraccionarlo si eso ayuda».'),
                     effect: T('Defends the figure and, in defending it, announces out loud that a price difficulty exists. From here everything is a haggle about money that she never opened.',
                               'Defiende la cifra y, al defenderla, anuncia en voz alta que existe un problema de precio. A partir de aquí todo es un regateo sobre dinero que ella nunca abrió.') },
          average: { line: T('"I do understand. Would it help to run through what is included one more time?"',
                     '«Lo entiendo de verdad. ¿Ayudaría repasar una vez más qué incluye?»'),
                     effect: T('Polite, and it reads her sentence as a request for detail rather than a duel. It is the right reply to one of the three buried objections and the wrong reply to the other two, and nothing in it reveals which one is in the chair.',
                               'Educado, y lee su frase como una petición de detalle y no como un duelo. Es la réplica correcta a una de las tres objeciones enterradas y la equivocada a las otras dos, y nada en ella revela cuál está sentada enfrente.') },
          strong:  { line: T('"When you say expensive — is it the figure itself, or is it more that you are unsure it is worth it for you?"',
                     '«Cuando dices caro, ¿es la cifra en sí, o es más bien que dudas de que a ti te compense?»'),
                     effect: T('Two branches, both easy to own up to, and permission lives down the second one. Whichever she takes has labelled the category, and the category dictates everything you say from there.',
                               'Dos ramas, las dos fáciles de reconocer, y el permiso vive por la segunda. La que tome ya ha etiquetado la categoría, y la categoría dicta todo lo que digas a partir de ahí.') }
        }
      },
      treatments: [
        {
          name:   T("Hyaluronic acid filler — tear trough, 1 ml",
                     "Relleno de ácido hialurónico — surco lagrimal, 1 ml"),
          price:  T("€390 for 1 ml",
                     "390 € el mililitro"),
          why:    T("The under-eye is the thing she has looked at every morning for three years and mentioned to nobody. \"Expensive\" is the respectable way of putting down something she is not sure she is allowed to want.",
                     "La ojera es eso que lleva tres años mirándose cada mañana y no le ha contado a nadie. «Caro» es la forma presentable de soltar algo que no está segura de tener permiso para querer."),
          moment: T("You say €390. She says yes, it is a bit expensive, and starts putting her phone back into her bag.",
                     "Dices 390 €. Ella dice que sí, que es un poco caro, y empieza a guardar el móvil en el bolso."),
          weak:   {
            line: T("\"It is €390, but it is a single syringe rather than a course — over a year that is a few euros a week.\"",
                     "«Son 390 €, pero es una jeringa sola, no un bono: en un año te sale a unos pocos euros a la semana.»"),
            cost: T("The per-week frame is the right answer to a woman who has told you the amount is the problem. She has not. Landed on a permission objection it becomes a reason why she ought to, and \"ought to\" is the pressure she was already applying to herself.",
                     "El reparto por semanas es la respuesta correcta para una mujer que te ha dicho que el problema es la cantidad. Ella no lo ha dicho. Caído sobre una objeción de permiso se convierte en un motivo por el que debería, y ese «debería» es la presión que ya se estaba metiendo ella sola.")
          },
          strong: {
            line: T("\"When you say expensive — is it the €390, or is it more that it is for your face and not for anybody else's?\"",
                     "«Cuando dices caro, ¿son los 390 € o es más bien que es para tu cara y no para la de nadie más?»"),
            gain: T("Offers her a second door that costs nothing to walk through, and the under-eye is behind it. Four words in, the figure has stopped being the subject.",
                     "Le ofrece una segunda puerta que no le cuesta nada cruzar, y la ojera está detrás. A las cuatro palabras la cifra ha dejado de ser el tema.")
          }
        },
        {
          name:   T("Laser resurfacing — full face, single session",
                     "Láser de rejuvenecimiento — cara completa, sesión única"),
          price:  T("€890 for one session",
                     "890 € la sesión"),
          why:    T("One session at €890 with a week of skin behaving badly is the shape of the treatment she has most often paid for elsewhere and not got what she was told she would. \"Expensive\" here is the trust objection.",
                     "Una sesión de 890 € con una semana de piel revuelta es la forma exacta del tratamiento que más veces ha pagado en otro sitio sin recibir lo que le dijeron. Aquí «caro» es la objeción de confianza."),
          moment: T("She hears €890 and says that is a lot for one session, and the word she leans on is \"one\".",
                     "Oye 890 € y dice que es mucho para una sesión, y la palabra que recalca es «una»."),
          weak:   {
            line: T("\"It is one session, but it is a strong one — you would need four or five of something gentler to be in the same place.\"",
                     "«Es una sesión, pero es potente: necesitarías cuatro o cinco de algo más suave para estar donde estarías con esta.»"),
            cost: T("Compares your session with other sessions, which is an answer about value for money. What she stressed was \"one\", and what she is asking is what happens if she pays €890 and cannot see anything afterwards.",
                     "Compara tu sesión con otras sesiones, que es una respuesta sobre relación calidad-precio. Lo que ella ha recalcado es «una», y lo que pregunta es qué pasa si paga 890 € y luego no ve nada.")
          },
          strong: {
            line: T("\"Is the €890 the worry, or is it what happens if you pay it and then cannot see anything?\"",
                     "«¿Lo que te preocupa son los 890 € o lo que pasa si los pagas y luego no ves nada?»"),
            gain: T("Names the disappointment she was never going to volunteer. Once it is in the room you can talk about the review at six weeks, which is the only thing that answers it.",
                     "Nombra la decepción que ella nunca iba a sacar. Con eso ya dentro de la sala se puede hablar de la revisión a las seis semanas, que es lo único que responde a eso.")
          }
        },
        {
          name:   T("Cryolipolysis — four areas",
                     "Criolipólisis — cuatro zonas"),
          price:  T("€1,240 for four areas",
                     "1.240 € las cuatro zonas"),
          why:    T("Four figures is the threshold at which most households start calling it \"our money\", and a woman who has never said that out loud will say \"expensive\" instead.",
                     "Las cuatro cifras son el umbral en el que en casi todas las casas se empieza a decir «nuestro dinero», y una mujer que nunca lo ha dicho en voz alta dirá «caro» en su lugar."),
          moment: T("€1,240. She says it is more than she expected, and then adds, without being asked, that things have been tight this year.",
                     "1.240 €. Dice que es más de lo que esperaba y luego añade, sin que nadie le pregunte, que este año han ido justos."),
          weak:   {
            line: T("\"I completely understand. We can do two areas now for €680 and look at the rest later in the year when things are easier.\"",
                     "«Lo entiendo perfectamente. Podemos hacer dos zonas ahora por 680 € y vemos el resto más adelante, cuando estéis más desahogados.»"),
            cost: T("Kind, practical, and it halves the plan on evidence she has not given you. \"Things have been tight\" was her way of saying this is not a figure she decides on alone, and the plan has now been cut instead of the right conversation being had.",
                     "Amable, práctico, y parte el plan por la mitad con una prueba que ella no ha dado. «Hemos ido justos» era su manera de decir que esta no es una cifra que decida sola, y lo que se ha recortado es el plan en lugar de tenerse la conversación que tocaba.")
          },
          strong: {
            line: T("\"Is it that €1,240 is too much, or that €1,240 is not a number you would decide on by yourself?\"",
                     "«¿Es que 1.240 € es demasiado o es que 1.240 € no es una cifra que decidas tú sola?»"),
            gain: T("Puts the authority objection into words so that she does not have to. She almost always says yes to the second, and from there you are talking about how she gets to a decision instead of shrinking the treatment.",
                     "Pone en palabras la objeción de autoridad para que no tenga que ponerlas ella. Casi siempre dice que sí a la segunda, y a partir de ahí habláis de cómo llega ella a decidir en vez de encoger el tratamiento.")
          }
        }
      ],
      conversation: {
        setting: T("End of a consultation, hyaluronic acid filler, tear trough, 1 ml, €390. She has her bag on her lap.",
                   "Final de una consulta, relleno de ácido hialurónico, surco lagrimal, 1 ml, 390 €. Tiene el bolso en el regazo."),
        before: [
          { who: 'client', line: T("\"Yes… it is a bit expensive, is it not.\"",
                                    "«Ya… es un poco caro, ¿no?»") },
          { who: 'practitioner', line: T("\"It is €390, but that is a single syringe rather than a course of anything, so there is nothing to keep paying for afterwards. Spread across the year it is a few euros a week.\"",
                                    "«Son 390 €, pero es una jeringa sola, no un bono, así que después no hay que seguir pagando nada. Repartido en el año son unos pocos euros a la semana.»") },
          { who: 'client', line: T("\"No, I know. It is not really the money.\"",
                                    "«Ya, si lo sé. Si no es el dinero de verdad.»") },
          { who: 'practitioner', line: T("\"Well, there is no hurry at all. It is the sort of thing people often come back to in a few months, and the price will be the same then.\"",
                                    "«Bueno, no hay ninguna prisa. Es de esas cosas a las que la gente vuelve al cabo de unos meses, y el precio seguirá siendo el mismo.»") },
          { who: 'client', line: T("\"That is good to know.\"",
                                    "«Me lo apunto.»") },
          { who: 'practitioner', line: T("\"I will put the details on a card for you, and you have my number if anything comes up in the meantime.\"",
                                    "«Te apunto los datos en una tarjeta y tienes mi teléfono por si te surge algo mientras tanto.»") },
          { who: 'client', line: T("\"Thank you. You have been really lovely.\"",
                                    "«Gracias. Has sido majísima.»") }
        ],
        after: [
          { who: 'client', line: T("\"Yes… it is a bit expensive, is it not.\"",
                                    "«Ya… es un poco caro, ¿no?»") },
          { who: 'practitioner', line: T("\"When you say expensive — is it the €390, or is it more that it is for your face and not for anybody else's?\"",
                                    "«Cuando dices caro, ¿son los 390 € o es más bien que es para tu cara y no para la de nadie más?»") },
          { who: 'client', line: T("(pause) \"…The second one, probably.\"",
                                    "(silencio) «…Lo segundo, probablemente.»") },
          { who: 'practitioner', line: T("\"Go on.\"",
                                    "«Cuéntame.»") },
          { who: 'client', line: T("\"I have looked at these every morning since my father died. I have never said it to anyone. It seems such a stupid thing to spend money on.\"",
                                    "«Me miro esto cada mañana desde que murió mi padre. Nunca se lo he dicho a nadie. Parece una tontería gastarse dinero en eso.»") },
          { who: 'practitioner', line: T("\"Three years of looking at something every morning is not a stupid thing. It is the longest-running thing you have told me about today.\"",
                                    "«Tres años mirándote algo cada mañana no es una tontería. Es lo más largo que me has contado hoy.»") },
          { who: 'client', line: T("\"…Right.\"",
                                    "«…Ya.»") },
          { who: 'practitioner', line: T("\"€390 is the millilitre and a review at three weeks. I am not going to tell you whether you should — but I would rather you decided about the three years than about the €390.\"",
                                    "«390 € son el mililitro y una revisión a las tres semanas. No te voy a decir yo si debes o no, pero prefiero que decidas sobre los tres años y no sobre los 390 €.»") }
        ],
        whatChanged: T("The first version answered the word. It was accurate about the syringe, generous about the timing, and every sentence of it confirmed that they were discussing money — which meant the only thing she could do with the real reason was carry it out of the building. The second version split the word in two and made both halves easy to own, and she took the half that had nothing to do with €390. Notice what the practitioner does not do afterwards: she does not tell her she deserves it, and she does not close. She restates the price and hands back a decision that is now about something real.",
                       "La primera versión respondió a la palabra. Fue exacta con la jeringa, generosa con los plazos, y cada una de sus frases confirmó que estaban hablando de dinero, con lo cual lo único que ella podía hacer con el motivo verdadero era sacarlo del edificio. La segunda versión partió la palabra en dos y dejó fáciles las dos mitades, y ella cogió la que no tenía nada que ver con 390 €. Fíjate en lo que la profesional no hace después: no le dice que se lo merece y no cierra. Repite el precio y le devuelve una decisión que ahora va de algo real."),
        cost: T("€390 today, and the appointments that follow a first syringe. The heavier cost is that the sentence about her father is still unsaid, and the clinic where she finally says it gets everything after it.",
                "390 € hoy y las citas que vienen después de una primera jeringa. El coste más gordo es que la frase sobre su padre sigue sin decirse, y la clínica en la que por fin la diga se queda con todo lo que venga detrás.")
      },
      blocks: [
        { kind: 'passage',
          title: T('Three, under all of them', 'Tres, debajo de todas'),
          body: [
            T('Whatever a client says, one of three things is usually underneath. Permission: am I allowed to want this, spend this, care about this? Trust: will this work, on me, with you? Authority: is this decision actually mine to make?',
              'Diga lo que diga la clienta, normalmente hay una de tres cosas debajo. Permiso: ¿tengo derecho a querer esto, a gastar esto, a que me importe? Confianza: ¿funcionará, en mí, contigo? Autoridad: ¿es esta decisión realmente mía?'),
            T('Almost every stated objection — price, timing, thinking about it, asking someone — is one of these three wearing a socially acceptable coat.',
              'Casi toda objeción enunciada —precio, momento, pensarlo, consultarlo— es una de esas tres con un abrigo socialmente aceptable.')
          ] },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 12', 'The Beauty Sales Secrets — Capítulo 12'),
          quote: T('An objection is not resistance to your recommendation. It is the first honest thing she has said in ten minutes.',
                   'Una objeción no es resistencia a tu recomendación. Es lo primero honesto que ha dicho en diez minutos.'),
          note: T('This is why the method treats Phase 7 as information rather than obstacle, and why Toolkit #6 requires the surface objection and the underlying concern to be written in separate fields before any response is given.',
                  'Por eso el método trata la Fase 7 como información y no como obstáculo, y por eso el Toolkit #6 exige escribir la objeción de superficie y la preocupación subyacente en campos separados antes de dar ninguna respuesta.') },
        { kind: 'signal',
          name: T('Fragment — the shop, a €480 set, Phase 7', 'Fragmento — la tienda, un set de 480 €, Fase 7'),
          client: T('"It\'s beautiful, but… that\'s expensive." — Beautiful came first. She has not asked what is in the set, has not asked whether it would suit her, and has not stepped away from the counter.',
                    '«Es precioso, pero… es caro». — Lo de precioso ha venido primero. No ha preguntado qué lleva el set, no ha preguntado si le iría bien y no se ha apartado del mostrador.'),
          prompt: T('Permission, trust or authority — which is underneath, and which words give it away?',
                    'Permiso, confianza o autoridad: ¿cuál hay debajo y qué palabras lo delatan?'),
          notice: [
            T('She did not say "too much" or "over what I can spend". She praised the set and condemned the price in one breath, which is a sentence about herself.',
              'No ha dicho «demasiado» ni «se me va de lo que puedo gastar». Ha elogiado el set y condenado el precio de una tirada, que es una frase sobre ella misma.'),
            T('No trust signal is present: nothing on whether it works, how long it takes, or what happened to anyone else.',
              'No hay señal de confianza: nada sobre si funciona, cuánto tarda o qué le pasó a otra persona.'),
            T('No authority signal either. No second person exists in her sentence, and no household decision has entered the shop with her.',
              'Tampoco hay señal de autoridad. En su frase no existe ninguna segunda persona, y con ella no ha entrado en la tienda ninguna decisión doméstica.'),
            T('Permission is what remains, and Chapter 12 predicts the confirmation: ask whether the figure is the problem, and the reply is a version of "I am not used to spending like that on myself".',
              'Queda el permiso, y el Capítulo 12 predice la confirmación: pregunta si el problema es la cifra y la respuesta será una versión de «no estoy acostumbrada a gastar así en mí».')
          ] },
        { kind: 'match',
          prompt: T('Match each stated objection to the hidden objection most likely underneath it.',
                    'Empareja cada objeción enunciada con la objeción oculta que probablemente hay debajo.'),
          left: [
            { id: 'o1', text: T('"That\'s a lot of money for something so vain."', '«Es mucho dinero para algo tan vanidoso».') },
            { id: 'o2', text: T('"My friend had this and it didn\'t last three weeks."', '«Una amiga se lo hizo y no le duró ni tres semanas».') },
            { id: 'o3', text: T('"I\'d have to check what we\'ve got going out this month."', '«Tendría que mirar qué gastos tenemos este mes».') },
            { id: 'o4', text: T('"Is this the sort of thing that works on someone my age?"', '«¿Esto funciona en alguien de mi edad?»') },
            { id: 'o5', text: T('"I never spend anything on myself, that\'s the problem."', '«Nunca gasto nada en mí, ese es el problema».') }
          ],
          right: [
            { id: 'permission', text: T('Permission', 'Permiso') },
            { id: 'trust', text: T('Trust', 'Confianza') },
            { id: 'authority', text: T('Authority', 'Autoridad') }
          ],
          pairs: { o1: 'permission', o2: 'trust', o3: 'authority', o4: 'trust', o5: 'permission' },
          why: T('Note that three of these five mention money and none of them is about money. o3 is the only real budget sentence in the group and even that one is authority — "what we\'ve got going out" is a household decision, not a price complaint.',
                 'Fíjate en que tres de estas cinco mencionan dinero y ninguna trata del dinero. La o3 es la única frase de presupuesto real del grupo, y aun así es de autoridad: «qué gastos tenemos» es una decisión doméstica, no una queja de precio.') },
        { kind: 'spot',
          prompt: T('Classifying is one skill. Answering the one you classified is another. One turn here answers the wrong hidden objection. Which turn?',
                    'Clasificar es una habilidad. Responder a la que has clasificado es otra. Aquí una intervención responde a la objeción oculta equivocada. ¿Cuál?'),
          lines: [
            { who: 'client', text: T('"It is beautiful. But that is a lot of money for something so… vain, really."',
                                     '«Es precioso. Pero es mucho dinero para algo tan… presumido, la verdad».') },
            { who: 'you', text: T('"It is a real investment, yes."', '«Es una inversión de verdad, sí».') },
            { who: 'client', text: T('"My daughter would think I had lost my mind."',
                                     '«Mi hija pensaría que se me ha ido la cabeza».') },
            { who: 'you', text: T('"Honestly, the evidence on this one is very good — we have had it four years and nothing else we stock holds up like it. It is not a vanity purchase, it is skin health."',
                                  '«De verdad, la evidencia de este es muy buena: lo tenemos desde hace cuatro años y no hay nada en la casa que aguante igual. No es un capricho de presumida, es salud de la piel».') },
            { who: 'client', text: T('"No, no, I am sure it is very good. Let me have a think."',
                                     '«No, no, seguro que es buenísimo. Déjame pensarlo».') }
          ],
          answerIndex: 3,
          why: T('She never asked whether it works. Both her sentences are permission — am I the kind of woman who is allowed to buy this — and the second one even names whose verdict she is braced for. Note that the daughter does not make it authority: nobody is being asked for a decision, so what is at stake is sanction, not power. Turn 4 is the most competent-looking wrong move on the table. It is accurate, it is your actual expertise, and it answers a trust objection she did not make — which tells her, precisely, which of her two sentences you did not hear. A permission objection answered with evidence sounds like you were not listening. A trust objection answered with encouragement sounds evasive. An authority objection answered by persuading harder puts her in a position she cannot occupy. Her last line is what a courteous person says when she has been answered on the wrong question.',
                 'Ella nunca ha preguntado si funciona. Sus dos frases son de permiso —si es de las mujeres que pueden comprarse esto— y la segunda hasta nombra de quién teme el veredicto. Fíjate en que la hija no lo convierte en autoridad: a nadie se le está pidiendo una decisión, así que lo que está en juego es la aprobación, no el poder. La intervención 4 es el movimiento equivocado con mejor aspecto profesional de todos. Es exacto, es tu especialidad de verdad y responde a una objeción de confianza que ella no ha planteado, lo que le dice exactamente cuál de sus dos frases no escuchaste. Una objeción de permiso respondida con evidencia suena a que no la escuchabas. Una de confianza respondida con ánimo suena evasiva. Una de autoridad respondida presionando más la coloca en una posición que no puede ocupar. Su última frase es lo que dice una persona educada cuando le han respondido a otra pregunta.'),
          principle: T('The three are not interchangeable, and answering the wrong one is worse than not answering. Classify before you respond, because the wrong answer also publishes which sentence of hers you skipped.',
                       'Las tres no son intercambiables, y responder a la equivocada es peor que no responder. Clasifica antes de contestar, porque la respuesta equivocada además publica qué frase suya te saltaste.') },
        { kind: 'choose',
          prompt: T('"I never spend anything on myself, that\'s the problem." What does MIRROR answer?',
                    '«Nunca gasto nada en mí, ese es el problema». ¿Qué responde MIRROR?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"You deserve it, though. You really do."', '«Pero te lo mereces. De verdad que sí».'),
              why: T('You granted the permission she was asking for, which sounds correct and lands as a sales line — because it is the sentence every salesperson says. Permission granted by the person selling is worth nothing to her.',
                     'Le has concedido el permiso que pedía, lo que suena correcto y aterriza como una frase de venta, porque es la frase que dice todo vendedor. Un permiso concedido por quien vende no le vale nada.') },
            { id: 'b', verdict: 'best',
              label: T('"Who taught you that spending on yourself was a problem?"', '«¿Quién te enseñó que gastar en ti misma era un problema?»'),
              why: T('You did not grant permission — you asked where the prohibition came from, which is the only route to her granting it herself. It is also the question that usually produces a mother, a marriage or a specific year, and that answer reframes the whole consultation.',
                     'No has concedido permiso: has preguntado de dónde viene la prohibición, que es la única vía para que se lo conceda ella. Además es la pregunta que suele producir una madre, un matrimonio o un año concreto, y esa respuesta reencuadra toda la consulta.') },
            { id: 'c', verdict: 'weak',
              label: T('"Lots of my clients say that. It\'s very common in women who\'ve raised families."',
                       '«Muchas clientas mías dicen eso. Es muy común en mujeres que han criado una familia».'),
              why: T('Normalising a permission objection dissolves it into a category. She is not asking whether other women feel this; she is asking whether she is allowed to act on it.',
                     'Normalizar una objeción de permiso la disuelve en una categoría. No pregunta si otras mujeres sienten esto: pregunta si a ella le está permitido actuar.') }
          ],
          principle: T('Permission is never granted by the person who benefits from the decision. It is only ever recovered by the client.',
                       'El permiso nunca lo concede quien se beneficia de la decisión. Solo lo recupera la clienta.'),
          retry: {
            note: T('That one announced itself as permission. This sounds like permission and is not, and the permission remedy would deepen it.',
                    'Aquella se anunciaba como permiso. Esta suena a permiso y no lo es, y el remedio del permiso la agravaría.'),
            prompt: T('Lucía, closing minutes, no figure yet questioned: "I\'d love to. But I bought a whole routine two years ago and used none of it. I\'d probably waste it again."',
                      'Lucía, últimos minutos, sin que se haya cuestionado ninguna cifra: «Me encantaría. Pero hace dos años me compré una rutina entera y no usé nada. Seguramente lo volvería a desaprovechar».'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"This one is three steps, and I\'ll write the order out for you — four minutes in the morning, that\'s all."',
                         '«Esta son tres pasos, y te apunto el orden: cuatro minutos por la mañana y ya está».'),
                why: T('Logistics answering a doubt about herself. All of it is true and none of it touches what she said, so she leaves with a shorter routine and an unchanged prediction.',
                       'Logística respondiendo a una duda sobre ella misma. Todo es cierto y nada toca lo que ha dicho, así que se va con una rutina más corta y la misma predicción.') },
              { id: 'b', verdict: 'best',
                label: T('"Good reason to hesitate. Can I ask what was different back then — did anyone explain why each item was in there?"',
                         '«Buen motivo para dudar. ¿Te puedo preguntar qué fue distinto entonces? ¿Alguien te explicó por qué estaba cada producto ahí?»'),
                why: T('She has named the block herself, and it is trust pointed at her own follow-through. Chapter 13 answers it by locating what is different this time rather than by reassuring her — and "nobody explained anything" is her own evidence, not your claim.',
                       'Ha nombrado ella el bloqueo, y es confianza apuntada a su propia constancia. El Capítulo 13 lo responde localizando qué es distinto esta vez en lugar de tranquilizarla, y «nadie me explicó nada» es evidencia suya, no una afirmación tuya.') },
              { id: 'c', verdict: 'harmful',
                label: T('"You won\'t this time — I\'ll check in and keep you on track."',
                         '«Esta vez no: yo te escribo y te voy siguiendo para que no lo dejes».'),
                why: T('You have promised to supply the discipline she doubts she owns, which makes her routine your project and her next lapse your fault. When she stops, she will be too embarrassed to reply.',
                       'Has prometido poner tú la constancia que ella duda tener, lo que convierte su rutina en un proyecto tuyo y su próximo abandono en culpa tuya. Cuando lo deje, le dará vergüenza contestarte.') }
            ],
            principle: T('"Expensive", "I\'ll think about it" and "I need to ask" are coats. A sentence about her own past behaviour is almost always trust, aimed at herself.',
                         '«Caro», «me lo pensaré» y «tengo que consultarlo» son abrigos. Una frase sobre su propia conducta pasada es casi siempre confianza, apuntada hacia ella misma.'),
            changes: {
              axis: 'objection',
              detail: T('The objection stops being about money at all. "I bought a whole routine two years ago and used none of it" puts her own past behaviour on the table, so the sentence that sounded like permission is the trust objection aimed at herself — and the permission question would now land as a reproach.',
                        'La objeción deja de ir del dinero. «Compré una rutina entera hace dos años y no usé nada» pone sobre la mesa su propia conducta pasada, así que la frase que sonaba a permiso es la objeción de confianza apuntada hacia ella misma, y la pregunta de permiso aterrizaría ahora como un reproche.')
            } } }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm7l2', n: 2, minutes: 10,
      title: T('Diagnose before you respond', 'Diagnostica antes de responder'),
      objective: T('Run Toolkit #6 in the room, before answering, and know which Trust Standard the gap sits in.',
                   'Ejecutar el Toolkit #6 en la sala, antes de responder, y saber en qué Estándar de Confianza está la brecha.'),
      provenance: {
        chapter: 12,
        principle: T('Never defend the price — ask instead, because the objection is not the real conversation and what is underneath it is.',
                     'No defiendas nunca el precio: pregunta, porque la objeción no es la conversación de verdad y lo que hay debajo sí lo es.'),
        phase: 'decisionSupport',
        trustStage: 'understanding',
        standard: 2,
        duty: 3,
        toolkit: 6
      },
      depth: {
        whyItGoesWrong: T(
          'Silence after an objection feels like ground being lost, so the practitioner answers within a second to keep the consultation moving. Speed reads as competence in every other part of clinical work — a professional who has to think for five seconds about a common question looks unsure of her own field. Here the first second is the only one in which a diagnosis can still be made, because the moment she answers she has chosen a category on the client\'s behalf, and the conversation reorganises itself around that choice. Everything said afterwards is evidence for a case nobody has established, and the client now has to interrupt her to correct the record.',
          'El silencio tras una objeción se siente como terreno perdido, así que la profesional responde en un segundo para que la consulta no se pare. La rapidez se lee como competencia en todo el resto del trabajo clínico: una profesional que necesita cinco segundos para pensar una pregunta habitual parece insegura de su propio campo. Aquí el primer segundo es el único en el que todavía se puede diagnosticar, porque en el momento en que responde ya ha elegido una categoría en nombre de la clienta, y la conversación se reorganiza alrededor de esa elección. Todo lo que se diga después son pruebas de un caso que nadie ha establecido, y ahora la clienta tiene que interrumpirla para corregir el acta.'),
        sheIsThinking: T(
          'She answered so fast that she cannot have been listening to me. She was waiting for me to finish so she could say the thing she says to everybody.',
          'Ha respondido tan rápido que no puede haberme estado escuchando. Estaba esperando a que terminara para poder soltar lo que le dice a todo el mundo.'),
        ladder: {
          weak:    { line: T('"Let me explain why it costs what it costs."',
                     '«Déjame explicarte por qué cuesta lo que cuesta».'),
                     effect: T('Opens a defence before anyone has made a diagnosis. Every sentence after it is an argument, and she now has to interrupt you to say that money was not what she meant.',
                               'Abre una defensa antes de que nadie haya hecho un diagnóstico. Cada frase posterior es un argumento, y ahora ella tiene que interrumpirte para decir que no se refería al dinero.') },
          average: { line: T('"Of course — what is making you unsure?"',
                     '«Claro. ¿Qué es lo que te hace dudar?»'),
                     effect: T('A genuine question and a large improvement on defending. It is broad enough that she can give the socially easy answer again, and most clients do: it is just the money.',
                               'Una pregunta de verdad y una mejora enorme respecto a defenderse. Es lo bastante amplia como para que ella vuelva a dar la respuesta socialmente cómoda, y la mayoría de las clientas lo hacen: que es solo el dinero.') },
          strong:  { line: T('"Before I answer that — is it the amount, or whether it will work, or that it is not only your decision to make?"',
                     '«Antes de responderte: ¿es el importe, o si va a funcionar, o que la decisión no es solo tuya?»'),
                     effect: T('Names the three and makes each of them cheap to choose. Putting the third one into words is what makes the absent husband sayable, and that is the objection least likely to arrive on its own.',
                               'Nombra las tres y hace barato elegir cualquiera. Poner la tercera en palabras es lo que vuelve decible al marido ausente, y esa es la objeción que menos veces llega sola.') }
        }
      },
      treatments: [
        {
          name:   T("Botulinum toxin — three areas",
                     "Toxina botulínica — tres zonas"),
          price:  T("€320, three areas",
                     "320 €, tres zonas"),
          why:    T("At €320 the reply is loaded before her sentence has finished, because the figure is small and the answer feels obvious. Fast is exactly how the diagnosis gets lost.",
                     "A 320 € la respuesta ya está cargada antes de que ella termine la frase, porque la cifra es pequeña y la contestación parece evidente. Rápido es justo como se pierde el diagnóstico."),
          moment: T("\"€320? I thought it would be less than that.\" Half a second later you are already explaining units.",
                     "«¿320 €? Pensaba que sería menos.» Medio segundo después ya estás explicando unidades."),
          weak:   {
            line: T("\"It depends on the units, really — three areas at a proper dose is more product than people expect, so €320 is about right for Madrid.\"",
                     "«Depende de las unidades, la verdad: tres zonas a dosis correcta es más producto del que la gente se imagina, así que 320 € está en lo normal para Madrid.»"),
            cost: T("Accurate, informed, and a defence. It chooses \"you think we are overpriced\" out of three possible complaints, and the other two have now lost their chance to speak.",
                     "Exacto, documentado y una defensa. Elige «te parece que cobramos de más» entre tres quejas posibles, y las otras dos acaban de perder su turno de palabra.")
          },
          strong: {
            line: T("\"Before I answer that — is it the amount, or whether it will do what you want, or is it not only your decision?\"",
                     "«Antes de contestarte: ¿es la cantidad, o si va a hacer lo que quieres, o es que no lo decides solo tú?»"),
            gain: T("Three doors, all cheap to walk through, offered before you have committed to a theory. The third one is the one that never arrives on its own.",
                     "Tres puertas, las tres fáciles de cruzar, ofrecidas antes de comprometerte con ninguna teoría. La tercera es la que nunca llega sola.")
          }
        },
        {
          name:   T("Pigmentation programme — IPL, course of four",
                     "Programa de pigmentación — luz pulsada, bono de cuatro sesiones"),
          price:  T("€760 for four sessions",
                     "760 € el bono de cuatro"),
          why:    T("A programme with a name she does not recognise produces objections that are genuinely ambiguous, and ambiguity is where a fast answer does the most damage.",
                     "Un programa con un nombre que ella no reconoce produce objeciones genuinamente ambiguas, y la ambigüedad es donde más daño hace una respuesta rápida."),
          moment: T("\"Hmm. I will have to think about it.\" — said within a second of the €760.",
                     "«Mmm. Me lo tengo que pensar», dicho un segundo después de los 760 €."),
          weak:   {
            line: T("\"Of course. Would it help if I went through the four sessions again, so you have it clear in your head?\"",
                     "«Claro. ¿Te ayudaría si te repaso otra vez las cuatro sesiones, para que lo tengas claro?»"),
            cost: T("A generous offer and a diagnosis all the same: it decides she did not understand. If she understood perfectly and is worried about July, she now has to sit through an explanation before she can say so.",
                     "Un ofrecimiento generoso y aun así un diagnóstico: decide que ella no lo ha entendido. Si lo ha entendido perfectamente y lo que le preocupa es julio, ahora tiene que aguantar una explicación antes de poder decirlo.")
          },
          strong: {
            line: T("\"Of course. What is the part you want to think about? I might be able to settle it now.\"",
                     "«Claro. ¿Qué parte es la que te quieres pensar? Igual te la puedo resolver ahora.»"),
            gain: T("Costs one sentence and commits you to nothing. She names something concrete, and with a pigmentation programme it is almost always the sun or the holiday in July — which is a question with an answer.",
                     "Cuesta una frase y no te compromete a nada. Ella nombra algo concreto, y en un programa de pigmentación casi siempre es el sol o el viaje de julio, que es una pregunta con respuesta.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('The four seconds you owe the objection', 'Los cuatro segundos que le debes a la objeción'),
          body: [
            T('The instinct is to answer immediately, because an unanswered objection feels like an unfilled silence. The method inserts one step: name the surface, name the underlying, identify which Trust Standard the gap sits in, choose a response category, and only then speak.',
              'El instinto es responder de inmediato, porque una objeción sin responder parece un silencio sin llenar. El método inserta un paso: nombra la superficie, nombra lo subyacente, identifica en qué Estándar de Confianza está la brecha, elige una categoría de respuesta y solo entonces habla.'),
            T('There are five response categories and only five: acknowledge, educate, recommit, restructure the commitment, and accept the decline. Most practitioners have two — educate and recommit — which is why so many objections are answered with facts and enthusiasm.',
              'Hay cinco categorías de respuesta y solo cinco: reconocer, educar, recomprometer, reestructurar el compromiso y aceptar el rechazo. La mayoría de los profesionales tiene dos —educar y recomprometer—, y por eso tantas objeciones se responden con datos y entusiasmo.'),
            T('The diagnostic takes about four seconds of thought. The alternative costs the consultation.',
              'El diagnóstico cuesta unos cuatro segundos de pensamiento. La alternativa cuesta la consulta.')
          ] },
        { kind: 'signal',
          avatar: 'carmen',
          name: T('Fragment — Carmen, Phase 7', 'Fragmento — Carmen, Fase 7'),
          client: T('"It\'s not the money. I just… I want to talk to my husband about it first." — She has already told you, twice, that his opinion does not matter.',
                    '«No es el dinero. Es que… quiero hablarlo con mi marido primero». — Ya te ha dicho dos veces que su opinión no importa.'),
          prompt: T('Run the diagnostic. What is the surface, and what is underneath?',
                    'Ejecuta el diagnóstico. ¿Qué es la superficie y qué hay debajo?'),
          notice: [
            T('Surface: an authority objection — she needs someone else to agree.',
              'Superficie: una objeción de autoridad; necesita que otra persona esté de acuerdo.'),
            T('Underlying: not authority at all. She twice dismissed his opinion, which means she is not seeking his permission — she is protecting herself from his reaction. The concern is being seen as someone who has "had work done".',
              'Subyacente: no es autoridad en absoluto. Descartó su opinión dos veces, así que no busca su permiso: se protege de su reacción. La preocupación es que la vean como alguien que «se ha hecho cosas».'),
            T('Trust Standard 1 — Create Psychological Safety. The gap is not information and not credibility; it is that the outcome she fears has never been said out loud in this room.',
              'Estándar de Confianza 1 — Crear Seguridad Psicológica. La brecha no es de información ni de credibilidad: es que el resultado que teme nunca se ha dicho en voz alta en esta sala.'),
            T('Response category: acknowledge. Not educate, not recommit.',
              'Categoría de respuesta: reconocer. Ni educar ni recomprometer.')
          ] },
        { kind: 'choose',
          prompt: T('Same moment. What do you actually say?', 'El mismo momento. ¿Qué dices realmente?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Of course. Would it help if I put the plan in writing so you can go through it together?"',
                       '«Por supuesto. ¿Te ayudaría si te paso el plan por escrito para que lo veáis juntos?»'),
              why: T('Reasonable, helpful, and it answers the surface. You have just made her go home and have the conversation she is afraid of, with a document. She will not come back, and you will never know why.',
                     'Razonable, útil, y responde a la superficie. Acabas de hacer que se vaya a casa y tenga la conversación que teme, con un documento. No volverá, y nunca sabrás por qué.') },
            { id: 'b', verdict: 'best',
              label: T('"If the choice were only yours, what would you want to do? I ask because your answer changes what I\'d suggest next — not because I\'m trying to move you past him."',
                       '«Si la decisión fuera solo tuya, ¿qué querrías hacer? Lo pregunto porque tu respuesta cambia lo que sugeriría después, no porque quiera pasar por encima de él».'),
              why: T('The question separates her decision from his reaction, and the second clause removes the manipulation reading before she can have it. Her answer tells you whether this is authority or exposure — and if she says "I\'d do it", the objection was never about him.',
                     'La pregunta separa su decisión de la reacción de él, y la segunda oración retira la lectura manipuladora antes de que pueda tenerla. Su respuesta te dice si esto es autoridad o exposición, y si dice «lo haría», la objeción nunca fue sobre él.') },
            { id: 'c', verdict: 'harmful',
              label: T('"You said earlier that his opinion doesn\'t matter to you, though."',
                       '«Pero antes has dicho que su opinión no te importa».'),
              why: T('You are right, and you have used a contradiction as a challenge rather than a mirror. The wording makes it an accusation of inconsistency, and she will defend rather than explain. This is Module 4\'s instrument used as a weapon.',
                     'Tienes razón, y has usado una contradicción como desafío en lugar de como espejo. La formulación la convierte en una acusación de incoherencia, y ella se defenderá en lugar de explicar. Es el instrumento del Módulo 4 usado como arma.') }
          ],
          principle: T('Toolkit #6, field 2. The underlying concern is not a better-worded version of the surface — it is usually a different concern entirely.',
                       'Toolkit #6, campo 2. La preocupación subyacente no es una versión mejor redactada de la superficie: suele ser una preocupación completamente distinta.'),
          retry: {
            note: T('That diagnostic found a concern she had never said aloud. Here the surface and the underlying are the same thing — and having just been taught to look underneath, you will be tempted to invent a floor.',
                    'Ese diagnóstico encontró una preocupación que ella nunca había dicho en voz alta. Aquí la superficie y lo subyacente son lo mismo, y como acabas de aprender a mirar debajo, tendrás la tentación de inventarte un sótano.'),
            prompt: T('Phase 7, a different client. She has already asked three precise questions about downtime. Now: "I don\'t understand why it\'s four sessions and not two. Two would be within what I can do." Nothing in the hour has suggested permission, authority or fear. What does the diagnostic return?',
                      'Fase 7, otra clienta. Ya ha hecho tres preguntas precisas sobre el tiempo de recuperación. Ahora: «No entiendo por qué son cuatro sesiones y no dos. Dos sí entrarían en lo que puedo». Nada en la última hora ha apuntado a permiso, autoridad ni miedo. ¿Qué devuelve el diagnóstico?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Surface and underlying differ: "within what I can do" is the permission objection surfacing. Ask what she would do if cost were not a consideration.',
                         'La superficie y lo subyacente difieren: «lo que puedo» es la objeción de permiso asomando. Pregúntale qué haría si el coste no fuera un factor.'),
                why: T('It is the move that worked an hour ago, applied to a woman who asked a technical question. You have converted "why four?" into a conversation about her own worth, and she will notice that the number of sessions was never explained. She will not ask a second time.',
                       'Es el movimiento que funcionó hace una hora, aplicado a una mujer que ha hecho una pregunta técnica. Has convertido «¿por qué cuatro?» en una conversación sobre su propio valor, y ella se dará cuenta de que nunca se le explicó el número de sesiones. No lo preguntará una segunda vez.') },
              { id: 'b', verdict: 'best',
                label: T('Surface and underlying match: she is missing the reason for the number. Category — educate. "Two would give you about a third of it, and it fades by the spring. Here is why the fourth one is the one that holds it."',
                         'La superficie y lo subyacente coinciden: le falta el motivo del número. Categoría: educar. «Dos te darían alrededor de un tercio, y se pierde en primavera. Te explico por qué la cuarta es la que lo sostiene».'),
                why: T('The diagnostic looks for the gap, not for a secret, and here the gap is information. Educate is one of the five categories precisely for this, and answering it directly is also the only version in which she can still choose two on purpose rather than by default.',
                       'El diagnóstico busca la brecha, no un secreto, y aquí la brecha es de información. Educar es una de las cinco categorías precisamente para esto, y responder directamente es además la única versión en la que ella todavía puede elegir dos a conciencia y no por defecto.') },
              { id: 'c', verdict: 'harmful',
                label: T('Restructure the commitment: give her the two sessions she named and review after the second.',
                         'Reestructurar el compromiso: dale las dos sesiones que ha nombrado y lo revisáis después de la segunda.'),
                why: T('She named a budget and you delivered a course you have just implied will not hold — without saying so. She gets a third of a result, concludes the treatment does not work, and the sentence she repeats to her friends is about you. Restructure is a real category; it is not a substitute for the answer she asked for.',
                       'Ha nombrado un presupuesto y tú le has dado un tratamiento que acabas de dar a entender que no se sostiene, sin decírselo. Obtiene un tercio del resultado, concluye que el tratamiento no funciona, y la frase que repetirá a sus amigas es sobre ti. Reestructurar es una categoría real; no es un sustituto de la respuesta que ella ha pedido.') }
            ],
            principle: T('Toolkit #6 has five response categories and educate is one of them. The diagnostic can fail in both directions — answering a hidden concern with facts, and answering a factual question with a hidden concern.',
                         'El Toolkit #6 tiene cinco categorías de respuesta y educar es una de ellas. El diagnóstico puede fallar en las dos direcciones: responder con datos a una preocupación oculta, y responder con una preocupación oculta a una pregunta de datos.'),
            changes: {
              axis: 'objection',
              detail: T('The objection arrives with its own reason attached. She names the number of sessions rather than the money, and nothing earlier in the hour contradicts her, so the diagnostic returns a surface and an underlying that match — and the response category moves from acknowledge to educate.',
                        'La objeción llega con su propio motivo pegado. Nombra el número de sesiones y no el dinero, y nada de la hora anterior la contradice, así que el diagnóstico devuelve una superficie y un subyacente que coinciden, y la categoría de respuesta pasa de reconocer a educar.')
            } } },
        { kind: 'drill',
          toolkit: 6,
          prompt: T('Complete the Objection Diagnostic for the fragment above, before you would respond.',
                    'Completa el Diagnóstico de Objeciones para el fragmento anterior, antes de responder.'),
          transcript: [
            T('"It\'s not the money. I just want to talk to my husband about it first."', '«No es el dinero. Solo quiero hablarlo con mi marido primero».'),
            T('Earlier: "His opinion doesn\'t come into it, honestly."', 'Antes: «Su opinión no entra en esto, de verdad».'),
            T('Earlier still: "He made a joke at dinner about a friend who\'d had work done."', 'Antes aún: «Hizo una broma en una cena sobre una amiga que se había hecho cosas».')
          ],
          fields: [
            { name: 'surface', label: T('Surface objection — her exact words', 'Objeción de superficie — sus palabras exactas') },
            { name: 'underlying', label: T('Underlying concern — what she is protecting', 'Preocupación subyacente — qué está protegiendo') },
            { name: 'proposedResponse', label: T('Your proposed response', 'Tu respuesta propuesta') }
          ],
          depthCheck: [
            { key: 'different', label: T('My underlying concern is not a restatement of the surface', 'Mi preocupación subyacente no es una reformulación de la superficie'), supported: true },
            { key: 'evidence', label: T('The underlying concern is supported by something she actually said', 'La preocupación subyacente está respaldada por algo que ella dijo realmente'), supported: true },
            { key: 'priced', label: T('This is a price objection', 'Esto es una objeción de precio'), supported: false,
              note: T('She opened by ruling money out. Recording price here would send you into Module 6 for a problem that lives in Module 2.',
                      'Empezó descartando el dinero. Registrar precio aquí te llevaría al Módulo 6 por un problema que vive en el Módulo 2.') },
            { key: 'category', label: T('My response category is Acknowledge, not Educate', 'Mi categoría de respuesta es Reconocer, no Educar'), supported: true }
          ],
          rule: T('The validator rejects a diagnostic whose surface and underlying are the same statement. If they match, nothing has been diagnosed.',
                  'El validador rechaza un diagnóstico cuya superficie y subyacente son la misma afirmación. Si coinciden, no se ha diagnosticado nada.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm7l3', n: 3, minutes: 12,
      title: T('"I need to think about it"', '«Necesito pensarlo»'),
      objective: T('Identify which of six meanings the sentence carries, and respond to that one.',
                   'Identificar cuál de seis significados lleva la frase y responder a ese.'),
      provenance: {
        chapter: [12, 13],
        principle: T('"I need to think about it" is a trust objection — underneath it sits the fear of disappointment — and the book answers it with a question: what do you need to think about, maybe I can help.',
                     '«Me lo tengo que pensar» es una objeción de confianza —debajo está el miedo a la decepción— y el libro la responde con una pregunta: qué tienes que pensar, quizá pueda ayudarte.'),
        phase: 'decisionSupport',
        trustStage: 'credibility',
        standard: 3,
        duty: 4,
        toolkit: 6
      },
      depth: {
        whyItGoesWrong: T(
          '"I need to think about it" is the most courteous thing anybody says all day, and meeting it with a question resembles declining to accept an answer. A woman who has resolved never to lean on a client hears her own training in it and withdraws, and withdrawing is the correct impulse almost anywhere else. Chapter 13 is unusually blunt about the bill: a consultant let Elena go on "take all the time you want", learned a fortnight later that she had gone to a competitor, and realised that a single question would have opened the true discussion. Asking is not leaning. The question disputes nothing; it asks what the thinking is made of.',
          '«Necesito pensarlo» es lo más cortés que dice nadie en todo el día, y salirle al paso con una pregunta se parece a negarse a aceptar una respuesta. Una mujer que ha resuelto no apretar jamás a una clienta oye ahí su propia formación y se retira, y retirarse es el impulso correcto en casi cualquier otro sitio. El Capítulo 13 es inusualmente crudo sobre la factura: una consultora dejó marchar a Elena con un «tómate todo el tiempo que quieras», supo quince días después que se había ido a la competencia y comprendió que una sola pregunta habría abierto la discusión verdadera. Preguntar no es apretar. La pregunta no disputa nada: pregunta de qué está hecho ese pensar.'),
        sheIsThinking: T(
          'There is nothing here for me to think about. I simply will not say the true thing to her face, and this finishes the visit without either of us blushing.',
          'Aquí no tengo nada que pensar. Simplemente no voy a decirle lo verdadero a la cara, y esto termina la visita sin que ninguna de las dos se sonroje.'),
        ladder: {
          weak:    { line: T('"Of course — take a card, have a think, and telephone me if you decide to go ahead."',
                     '«Claro. Coge una tarjeta, piénsatelo y me telefoneas si decides seguir adelante».'),
                     effect: T('She departs with nothing to think about and the matter precisely where it stood. Reopening it now demands that she restart a visit she found awkward enough to end.',
                               'Se marcha sin nada que pensar y con el asunto exactamente donde estaba. Reabrirlo ahora le exige reiniciar una visita que le resultó lo bastante violenta como para terminarla.') },
          average: { line: T('"Absolutely. Shall I put the plan in writing so you have it all in one piece?"',
                     '«Por supuesto. ¿Te paso el plan por escrito para que lo tengas todo junto?»'),
                     effect: T('Thorough, generous and what a well-run clinic does. It takes her sentence at face value all the same, so whatever she was unsure of departs with her, unnamed.',
                               'Minucioso, generoso y lo que hace una clínica bien llevada. Aun así toma su frase al pie de la letra, de modo que aquello de lo que dudaba se marcha con ella, sin nombrar.') },
          strong:  { line: T('"Of course. What is it you want to think about? There may be a piece of it I can settle right now."',
                     '«Claro. ¿Qué es lo que quieres pensar? A lo mejor hay una parte que puedo resolverte ahora mismo».'),
                     effect: T('Accepts the decision and asks what is inside it. She nearly always names one concrete item, and that item is seldom the money — it is the six weeks after the last treatment, or her skin at her daughter\'s wedding.',
                               'Acepta la decisión y pregunta qué hay dentro. Casi siempre nombra un asunto concreto, y ese asunto rara vez es el dinero: son las seis semanas posteriores al último tratamiento, o su piel en la boda de su hija.') }
        }
      },
      treatments: [
        {
          name:   T("PDO threads — midface",
                     "Hilos tensores de PDO — tercio medio"),
          price:  T("€1,750",
                     "1.750 €"),
          why:    T("Threads are where \"I need to think about it\" is most often true and least often about money, because what she is thinking about is whether she wants to be a woman who has had her face lifted at all.",
                     "Con hilos es donde «me lo tengo que pensar» es más veces verdad y menos veces dinero, porque lo que se está pensando es si quiere ser una mujer a la que le han tensado la cara."),
          moment: T("The plan is agreed and the date is nearly set. She says she would like to think about it.",
                     "El plan está acordado y la fecha casi puesta. Dice que se lo quiere pensar."),
          weak:   {
            line: T("\"Of course — no rush at all. I will email you everything tonight and you take all the time you need.\"",
                     "«Claro, sin ninguna prisa. Te lo mando todo por correo esta noche y te tomas el tiempo que necesites.»"),
            cost: T("She leaves with a document and nothing to think about that she was not already thinking. Reopening it now means restarting a visit she found uncomfortable enough to end, and she will not.",
                     "Se va con un documento y sin nada que pensar que no estuviera ya pensando. Reabrirlo ahora significa reiniciar una visita que le resultó lo bastante incómoda como para terminarla, y no lo va a hacer.")
          },
          strong: {
            line: T("\"Of course. What is it you want to think about? If it is the months afterwards I can tell you now, and if it is something else I would still rather know.\"",
                     "«Claro. ¿Qué es lo que te quieres pensar? Si son los meses de después te lo cuento ahora, y si es otra cosa también prefiero saberlo.»"),
            gain: T("Accepts the decision and asks what is inside it. At €1,750 what is inside it is nearly always a person she has seen, not a sum, and a person is something the two of you can actually discuss.",
                     "Acepta la decisión y pregunta qué hay dentro. A 1.750 € lo que hay dentro casi siempre es alguien a quien ha visto, no una suma, y de una persona sí se puede hablar entre las dos.")
          }
        },
        {
          name:   T("Chemical peel — medium depth, single session",
                     "Peeling químico — profundidad media, sesión única"),
          price:  T("€240 a session",
                     "240 € la sesión"),
          why:    T("At €240 the money is rarely the delay. The thinking is almost always about the four days when her face is visibly peeling and there is something in the diary.",
                     "A 240 € el dinero casi nunca es lo que la frena. Lo que se está pensando son casi siempre los cuatro días con la cara pelándose a la vista y algo en la agenda."),
          moment: T("\"It is not the price. I just need to think about it.\"",
                     "«No es el precio. Es que me lo tengo que pensar.»"),
          weak:   {
            line: T("\"Absolutely, have a think. Shall I put you down for a provisional slot and you can always move it?\"",
                     "«Por supuesto, piénsatelo. ¿Te dejo una cita provisional y ya la mueves si eso?»"),
            cost: T("Turns a real hesitation into an administrative one, so the thing she is hesitating about never gets named. She moves the provisional slot once and then cancels it, and nobody ever learns what the four days were about.",
                     "Convierte una duda real en una duda administrativa, así que aquello que la frena no llega a nombrarse. Mueve la cita provisional una vez y luego la anula, y nadie llega a enterarse de qué iban esos cuatro días.")
          },
          strong: {
            line: T("\"Fair enough. Is what you are thinking about the four days afterwards, or something else?\"",
                     "«Me parece bien. Lo que te estás pensando, ¿son los cuatro días de después o es otra cosa?»"),
            gain: T("Names the likeliest content of the thinking, which frees her to correct you. Either way you learn in one sentence what a card in her handbag would have taken three weeks to fail to find out.",
                     "Nombra lo más probable que haya en ese pensárselo, lo que la deja libre para corregirte. Pase lo que pase, te enteras en una frase de aquello que una tarjeta en el bolso habría tardado tres semanas en no averiguar.")
          }
        },
        {
          name:   T("Laser hair removal — full body, course of six",
                     "Depilación láser — cuerpo entero, bono de seis"),
          price:  T("€1,290 for six sessions",
                     "1.290 € el bono de seis"),
          why:    T("A course is six dates, and on a course \"I need to think about it\" is very often a diary problem wearing a money coat.",
                     "Un bono son seis fechas, y en un bono «me lo tengo que pensar» es muchísimas veces un problema de agenda con abrigo de dinero."),
          moment: T("She has been enthusiastic for twenty minutes, and then, at the point of booking the first of six, she wants to think.",
                     "Lleva veinte minutos entusiasmada y, justo al reservar la primera de las seis, se lo quiere pensar."),
          weak:   {
            line: T("\"Of course. The course does not expire for eighteen months, so there really is no hurry at all.\"",
                     "«Claro. El bono no caduca hasta dentro de dieciocho meses, así que prisa ninguna.»"),
            cost: T("Removes the only structure that was helping her — six sessions have to be spaced — and replaces it with eighteen months of nothing happening. She will think about it for eighteen months.",
                     "Le quita la única estructura que la estaba ayudando —seis sesiones hay que espaciarlas— y la sustituye por dieciocho meses en los que no pasa nada. Se lo va a pensar dieciocho meses.")
          },
          strong: {
            line: T("\"Of course. Is the thinking about the €1,290, or about finding six mornings between now and the spring?\"",
                     "«Claro. Lo que te piensas, ¿son los 1.290 € o encontrar seis mañanas de aquí a la primavera?»"),
            gain: T("Separates the two objections a course produces, and the diary one is the one she can actually solve while she is sitting in front of you with her phone in her hand.",
                     "Separa las dos objeciones que produce un bono, y la de la agenda es la que sí puede resolver ahí sentada delante de ti con el móvil en la mano.")
          }
        }
      ],
      conversation: {
        setting: T("End of a first consultation, PDO threads, midface, €1,750. Everything agreed, nothing booked.",
                   "Final de una primera consulta, hilos tensores de PDO, tercio medio, 1.750 €. Todo hablado, nada reservado."),
        before: [
          { who: 'client', line: T("\"It all sounds good. I think I just need to think about it.\"",
                                    "«Suena todo bien. Creo que me lo tengo que pensar.»") },
          { who: 'practitioner', line: T("\"Of course — this is not the sort of thing anybody should decide in a hurry. I will put the whole plan in an email tonight so you have it in writing.\"",
                                    "«Claro, esto no es algo que nadie deba decidir con prisa. Esta noche te mando el plan entero por correo para que lo tengas por escrito.»") },
          { who: 'client', line: T("\"That would be great, thank you.\"",
                                    "«Genial, gracias.»") },
          { who: 'practitioner', line: T("\"And there is no pressure from my side at all. Take a week, take a month — the €1,750 does not change.\"",
                                    "«Y por mi parte ninguna presión. Tómate una semana o un mes: los 1.750 € no cambian.»") },
          { who: 'client', line: T("\"Perfect.\"",
                                    "«Perfecto.»") },
          { who: 'practitioner', line: T("\"I will send it over this evening then. And if anything comes up at all, you have my number.\"",
                                    "«Pues te lo mando esta tarde. Y si te surge cualquier cosa, tienes mi teléfono.»") },
          { who: 'client', line: T("\"I will. Thank you, you have been so kind.\"",
                                    "«Vale. Gracias, has sido amabilísima.»") }
        ],
        after: [
          { who: 'client', line: T("\"It all sounds good. I think I just need to think about it.\"",
                                    "«Suena todo bien. Creo que me lo tengo que pensar.»") },
          { who: 'practitioner', line: T("\"Of course. Can I ask what it is you want to think about? There might be a piece of it I can settle right now.\"",
                                    "«Claro. ¿Te puedo preguntar qué es lo que te quieres pensar? Igual hay una parte que te la puedo resolver ahora mismo.»") },
          { who: 'client', line: T("\"I do not know, really. It is just… it is a lot.\"",
                                    "«No sé, la verdad. Es que… es mucho.»") },
          { who: 'practitioner', line: T("\"The €1,750, or the idea of it?\"",
                                    "«¿Los 1.750 € o la idea?»") },
          { who: 'client', line: T("\"The idea. My mother had something done at sixty and she never looked like herself again. I have said for years that I never would.\"",
                                    "«La idea. Mi madre se hizo algo a los sesenta y ya nunca volvió a parecerse a ella. Llevo años diciendo que yo jamás.»") },
          { who: 'practitioner', line: T("\"So what you are deciding is not the threads. It is whether you are breaking a promise you made about yourself.\"",
                                    "«Entonces lo que estás decidiendo no son los hilos. Es si estás rompiendo una promesa que te hiciste a ti misma.»") },
          { who: 'client', line: T("\"…Yes. That is exactly it.\"",
                                    "«…Sí. Es exactamente eso.»") },
          { who: 'practitioner', line: T("\"Then I would rather you did not decide today. Come back in a fortnight and tell me what you decided about your mother, and we will talk about the €1,750 after that — or not at all, which is also a good outcome.\"",
                                    "«Pues prefiero que hoy no decidas. Vuelve en quince días y me cuentas qué has decidido sobre lo de tu madre, y después hablamos de los 1.750 €, o no hablamos, que también es un buen resultado.»") }
        ],
        whatChanged: T("The first version was faultless and it emptied the room of everything that mattered. Every sentence in it agreed with her, and agreement is what you offer when you have decided not to find out. She left holding a document about threads and a private argument about her mother, and the document is no use against the argument. The second version asked one question and then, crucially, asked a second — \"the €1,750, or the idea of it?\" — which is the question that makes the difference between a price objection and an identity one. The practitioner then does the thing that looks like losing: she tells her not to decide today. That sentence is why she comes back in a fortnight, and why she comes back with an answer rather than an excuse.",
                       "La primera versión fue impecable y vació la sala de todo lo que importaba. Cada frase le daba la razón, y dar la razón es lo que ofreces cuando has decidido no averiguar nada. Se fue con un documento sobre hilos y una discusión privada sobre su madre, y el documento no sirve de nada contra la discusión. La segunda versión hizo una pregunta y después, y esto es lo decisivo, hizo una segunda —«¿los 1.750 € o la idea?»—, que es la pregunta que separa una objeción de precio de una de identidad. Después la profesional hace lo que parece perder: le dice que hoy no decida. Esa frase es por la que vuelve a los quince días, y por la que vuelve con una respuesta en lugar de con una excusa."),
        cost: T("€1,750 that never becomes a no and never becomes a yes, and a woman who spends the next two years walking past your window with an unfinished argument she has never said out loud to anybody.",
                "1.750 € que no llegan a ser un no ni un sí, y una mujer que se pasa los dos años siguientes pasando por delante de tu escaparate con una discusión sin terminar que nunca le ha dicho a nadie en voz alta.")
      },
      blocks: [
        { kind: 'passage',
          title: T('Six sentences wearing one coat', 'Seis frases con un mismo abrigo'),
          body: [
            T('"I need to think about it" is the most common sentence in aesthetic consultation and the least informative. It carries at least six meanings: I am not convinced it will work; I cannot afford it and will not say so; I need someone else to agree; you went too fast and I am overwhelmed; I have decided no and am being polite; and — genuinely — I make decisions slowly and this is how I make them.',
              '«Necesito pensarlo» es la frase más común de la consulta estética y la menos informativa. Lleva al menos seis significados: no me convence que funcione; no puedo permitírmelo y no lo voy a decir; necesito que otra persona esté de acuerdo; has ido demasiado rápido y estoy abrumada; ya he decidido que no y estoy siendo educada; y —de verdad— tomo las decisiones despacio y así es como las tomo.'),
            T('Only the last one is what the sentence literally says. Treating all six as the last one is why so many follow-up sequences chase people who had already decided.',
              'Solo el último es lo que la frase dice literalmente. Tratar los seis como el último es la razón de que tantas secuencias de seguimiento persigan a gente que ya había decidido.'),
            T('The diagnostic question is the same in every case, and it is not "what are your concerns?" — that returns the same polite sentence. It is: "What would you be thinking about?"',
              'La pregunta diagnóstica es la misma en todos los casos, y no es «¿qué dudas tienes?», que devuelve la misma frase educada. Es: «¿Sobre qué estarías pensando?»')
          ],
          diagram: null },
        { kind: 'sort',
          prompt: T('Four clients say the same sentence. Sort what each one said immediately before it.',
                    'Cuatro clientas dicen la misma frase. Clasifica lo que cada una dijo justo antes.'),
          client: T('"I need to think about it."', '«Necesito pensarlo».'),
          buckets: [
            { id: 'convince', label: T('Not convinced it will work', 'No la convence que funcione') },
            { id: 'afford', label: T('Cannot afford it, will not say so', 'No puede permitírselo y no lo dirá') },
            { id: 'decided', label: T('Has decided no, being polite', 'Ya ha decidido que no, por educación') }
          ],
          items: [
            { id: 'p1', text: T('"And how long did you say it lasts? Three months. Right."', '«¿Y cuánto dices que dura? Tres meses. Ya».'), bucket: 'convince' },
            { id: 'p2', text: T('"That\'s… fine, that\'s about what I expected." (does not ask about payment options)', '«Eso… vale, es más o menos lo que esperaba». (no pregunta por formas de pago)'), bucket: 'afford' },
            { id: 'p3', text: T('"You\'ve been very helpful, thank you so much for your time."', '«Has sido muy amable, muchísimas gracias por tu tiempo».'), bucket: 'decided' },
            { id: 'p4', text: T('"Would there be anything you could do on the price?" then, after your answer, nothing.', '«¿Habría algo que pudieras hacer con el precio?» y, tras tu respuesta, nada.'), bucket: 'afford' },
            { id: 'p5', text: T('"My friend had something similar and honestly I couldn\'t see any difference."', '«Una amiga se hizo algo parecido y sinceramente no le noté nada».'), bucket: 'convince' },
            { id: 'p6', text: T('"Let me take a card." (already standing)', '«Dame una tarjeta». (ya de pie)'), bucket: 'decided' }
          ],
          why: T('The tell is almost never in the sentence itself; it is in the thirty seconds before it and whether she is still seated. The politeness cluster — thanking you for your time, asking for a card, standing up — is the one practitioners most often mistake for warmth and follow up hardest.',
                 'La señal casi nunca está en la frase: está en los treinta segundos anteriores y en si sigue sentada. El grupo de cortesía —agradecerte el tiempo, pedir una tarjeta, ponerse de pie— es el que más se confunde con calidez y al que con más insistencia se hace seguimiento.') },
        { kind: 'compare',
          prompt: T('Which response diagnoses rather than defends?', '¿Qué respuesta diagnostica en lugar de defender?'),
          a: { label: T('Response A', 'Respuesta A'),
               text: T('"Absolutely, take your time. Is there anything I can clear up for you before you go?"',
                       '«Por supuesto, tómate tu tiempo. ¿Hay algo que pueda aclararte antes de que te vayas?»') },
          b: { label: T('Response B', 'Respuesta B'),
               text: T('"Of course. Can I ask what you\'d be thinking about? Not to change your mind — if I\'ve left something unclear I\'d rather fix it now than have you decide around it."',
                       '«Claro. ¿Puedo preguntarte sobre qué estarías pensando? No para cambiar tu opinión: si he dejado algo poco claro, prefiero arreglarlo ahora a que decidas rodeándolo».') },
          answer: 'b',
          why: T('A invites her to confirm she has no questions, which is what a polite person always confirms. B asks about the content of the thinking, states its own motive, and gives her a reason to answer honestly. It is also the version that surfaces "I couldn\'t afford it this month" — the answer A will never produce.',
                 'A la invita a confirmar que no tiene preguntas, que es lo que una persona educada siempre confirma. B pregunta por el contenido del pensamiento, expone su propio motivo y le da una razón para responder con honestidad. Es también la versión que hace aflorar «este mes no podría permitírmelo», la respuesta que A nunca producirá.') },
        { kind: 'choose',
          prompt: T('You asked what she would be thinking about, and she tells you the truth: "Honestly? Whether I can do it this month." What do you do with that?',
                    'Le has preguntado sobre qué estaría pensando y te dice la verdad: «¿Sinceramente? Si puedo este mes». ¿Qué haces con eso?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"That\'s no problem at all — we can split it across three months, so it\'s €320 at a time."',
                       '«No hay ningún problema: lo repartimos en tres meses y se queda en 320 € cada vez».'),
              why: T('A payment plan is a real instrument and you reached for it before she had finished her sentence. "This month" can mean a bad month, a bad year, or a decision she would rather make in spring; you have solved one of the three and closed the subject before finding out which one she said.',
                     'Un plan de pago es un instrumento real y has tirado de él antes de que ella terminara la frase. «Este mes» puede significar un mes malo, un año malo o una decisión que prefiere tomar en primavera; has resuelto uno de los tres casos y has cerrado el tema antes de averiguar cuál te ha dicho.') },
            { id: 'b', verdict: 'best',
              label: T('"Thank you for telling me — that\'s the most useful thing you could have said. Do you want the version that waits, or the version that starts smaller? Either is fine, and I\'d rather you chose than me."',
                       '«Gracias por decírmelo: es lo más útil que podías contarme. ¿Quieres la versión que espera o la que empieza más pequeña? Cualquiera me parece bien, y prefiero que elijas tú y no yo».'),
              why: T('She spent something to stop being polite, and the response neither rewards it with a discount nor spends it on a close. Two routes, both intact in value, and she picks — which also tells you what "this month" meant, because a client who takes the waiting version was talking about timing and one who starts smaller was talking about size.',
                     'Le ha costado algo dejar de ser educada, y la respuesta ni lo premia con un descuento ni lo gasta en un cierre. Dos vías, las dos con el valor intacto, y elige ella, lo que además te dice qué significaba «este mes»: quien se lleva la versión que espera hablaba de momento, y quien empieza más pequeña hablaba de tamaño.') },
            { id: 'c', verdict: 'harmful',
              label: T('"I can hold today\'s price for you until the end of the month, so you don\'t lose anything by waiting."',
                       '«Te puedo mantener el precio de hoy hasta final de mes, así no pierdes nada por esperar».'),
              why: T('She told you money was tight and you answered with a deadline. It reads as generosity and works as pressure: the decision she now makes is a decision about the date, taken by someone who has just admitted she is stretched, and that is the decision most likely to be cancelled in the second week.',
                     'Te ha dicho que anda justa y le has respondido con un plazo. Se lee como generosidad y funciona como presión: la decisión que tome ahora es una decisión sobre la fecha, tomada por alguien que acaba de reconocer que va apretada, y esa es la decisión que más se cancela en la segunda semana.') }
          ],
          principle: T('The diagnostic question only works if the honest answer is safe to give. What you do in the ten seconds after the truth decides whether you ever get one again.',
                       'La pregunta diagnóstica solo funciona si es seguro responderla con honestidad. Lo que hagas en los diez segundos posteriores a la verdad decide si alguna vez vuelves a recibir una.'),
          retry: {
            note: T('That client was still seated and still deciding. This one is not — and the sentence is identical.',
                    'Aquella clienta seguía sentada y seguía decidiendo. Esta no, y la frase es idéntica.'),
            prompt: T('Teresa is already on her feet, bag on her shoulder: "You\'ve been so helpful. Let me take a card and have a think."',
                      'Teresa ya está de pie, con el bolso al hombro: «Has sido amabilísima. Dame una tarjeta y me lo pienso».'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Of course. Take all the time you need — you know where we are."',
                         '«Claro. Tómate el tiempo que necesites, ya sabes dónde estamos».'),
                why: T('This is the mistake Chapter 13 records with Elena: a perfect consultation ended by a consultant who accepted the polite sentence and walked her to the door. Elena did not need to think. She needed one more question, and she had the treatment somewhere else two weeks later.',
                       'Este es el error que el Capítulo 13 registra con Elena: una consulta impecable terminada por una consultora que aceptó la frase educada y la acompañó a la puerta. Elena no necesitaba pensarlo. Necesitaba una pregunta más, y dos semanas después se hizo el tratamiento en otro sitio.') },
              { id: 'b', verdict: 'best',
                label: T('"Of course — one thing before you go. Was there something in what I said that didn\'t land, or had you already decided before you came in that today wasn\'t the day? Either answer is genuinely useful to me."',
                         '«Claro. Una cosa antes de que te vayas: ¿hubo algo de lo que dije que no te encajó, o ya venías decidida a que hoy no era el día? Cualquiera de las dos respuestas me sirve de verdad».'),
                why: T('One question, asked standing, with both answers made equally acceptable — including the one that closes the consultation. It is not a second attempt, because neither branch leads anywhere except information, and the branch she picks is the difference between a follow-up worth making and a follow-up that would annoy her.',
                       'Una pregunta, hecha de pie, con las dos respuestas igual de aceptables, incluida la que cierra la consulta. No es un segundo intento, porque ninguna de las dos ramas lleva a otro sitio que no sea información, y la rama que elija marca la diferencia entre un seguimiento que merece la pena y uno que le molestaría.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Before you do — can I just show you what it looks like split over three payments?"',
                         '«Antes de irte, ¿te enseño cómo queda en tres pagos?»'),
                why: T('She is standing, and you have answered her exit with an offer. A decision that had been made quietly now has to be refused out loud, which is the one thing politeness was protecting you both from — and it is the version of the afternoon she will describe to other people.',
                       'Está de pie y has respondido a su salida con una oferta. Una decisión que estaba tomada en silencio ahora tiene que rechazarse en voz alta, que es justo de lo que la cortesía os estaba protegiendo a las dos, y es la versión de la tarde que ella le contará a otras personas.') }
            ],
            principle: T('Asking once at the door is not pressure; leaving without asking is not respect. The posture tells you which question to ask, never whether to ask one.',
                         'Preguntar una vez en la puerta no es presión; irse sin preguntar no es respeto. La postura te dice qué pregunta hacer, nunca si hacerla.'),
            changes: {
              axis: 'clientResponse',
              detail: T('The honest sentence is replaced by a polite formula. Instead of "whether I can do it this month" you get "let me take a card and have a think", said standing, with her bag already on her shoulder — so the same hesitation reaches you with one sentence left in which to ask for it.',
                        'La frase honesta queda sustituida por una fórmula de cortesía. En lugar de «si puedo hacerlo este mes» recibes «me llevo una tarjeta y lo pienso», dicho de pie y con el bolso ya al hombro, así que el mismo contenido llega ahora con una sola frase disponible para pedirlo.')
            } } },
        { kind: 'check',
          prompt: T('She answers: "Honestly? I think I\'d decided before I came in that I wasn\'t going to do anything today." What is the MIRROR response?',
                    'Ella responde: «¿Sinceramente? Creo que ya había decidido antes de venir que hoy no me iba a hacer nada». ¿Cuál es la respuesta MIRROR?'),
          options: [
            { id: 'a', text: T('Restructure — offer a smaller first step she could commit to today.', 'Reestructurar: ofrecer un primer paso más pequeño al que pueda comprometerse hoy.') },
            { id: 'b', text: T('Accept — thank her, give her the written summary, and agree one contact she chooses.', 'Aceptar: darle las gracias, entregarle el resumen por escrito y acordar un solo contacto que elija ella.') },
            { id: 'c', text: T('Educate — make sure she leaves knowing the full value of what was offered.', 'Educar: asegurarte de que se va conociendo todo el valor de lo ofrecido.') }
          ],
          answer: 'b',
          why: T('She has just told you something true at cost to herself. Answering it with a smaller offer teaches her that honesty produces another attempt. Accepting it is what makes her a client later, and it is also what produces the referral in the meantime.',
                 'Acaba de decirte algo verdadero a un coste propio. Responder con una oferta más pequeña le enseña que la honestidad produce otro intento. Aceptarlo es lo que la convierte en clienta más adelante, y también lo que produce la recomendación entretanto.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm7l4', n: 4, minutes: 11,
      title: T('"I need to ask my husband"', '«Tengo que consultarlo con mi marido»'),
      objective: T('Handle a genuine authority objection without excluding, flattering or bypassing the absent person.',
                   'Gestionar una objeción de autoridad real sin excluir, adular ni esquivar a la persona ausente.'),
      provenance: {
        chapter: 12,
        principle: T('"I need to ask my husband" is an authority objection: ask what she would decide if the choice were only hers, and hand her back her own authority instead of handing her a card.',
                     '«Tengo que consultarlo con mi marido» es una objeción de autoridad: pregúntale qué decidiría si la elección fuera solo suya y devuélvele su propia autoridad en lugar de darle una tarjeta.'),
        phase: 'decisionSupport',
        trustStage: 'alignment',
        standard: 5,
        duty: 2,
        toolkit: 6
      },
      depth: {
        whyItGoesWrong: T(
          'Accepting "I need to ask my husband" instantly looks like respect for a marriage, and pushing past it looks like driving a wedge into one. So the practitioner steps back, hands over a brochure and wishes her well — and in doing so quietly agrees with the thing the client is most afraid of, which is that this is not hers to decide. The question was never whether he gets consulted; most couples discuss a four-figure decision and should. The question is whether she walks out with an opinion of her own to bring him, or with a leaflet and a hope that somebody else will decide for her.',
          'Aceptar «tengo que consultarlo con mi marido» al instante parece respeto por un matrimonio, y insistir parece meter cuña en uno. Así que la profesional da un paso atrás, entrega un folleto y le desea suerte, y con eso está dando la razón en voz baja a aquello que más teme la clienta: que esto no le corresponde decidirlo a ella. La cuestión nunca fue si él participa; la mayoría de las parejas hablan una decisión de cuatro cifras, y hacen bien. La cuestión es si ella sale con una opinión propia que llevarle o con un folleto y la esperanza de que decida otro.'),
        sheIsThinking: T(
          'He is not going to say no. I just do not want to be the one who decided, in case it turns out to have been a waste of money.',
          'Él no va a decir que no. Lo que pasa es que no quiero ser yo la que lo decidió, por si resulta que fue tirar el dinero.'),
        ladder: {
          weak:    { line: T('"Of course — take the brochure home, talk it over with him and give us a ring if he is happy with it."',
                     '«Claro. Llévate el folleto a casa, lo habláis y nos llamas si a él le parece bien».'),
                     effect: T('Hands the decision to somebody who was not in the room and confirms that she does not get to make it. It also puts him in the position of approving money spent on her face.',
                               'Entrega la decisión a alguien que no estaba en la sala y confirma que a ella no le toca tomarla. Además lo coloca a él en la posición de autorizar dinero gastado en la cara de ella.') },
          average: { line: T('"That makes sense. Shall I put it all in writing so the two of you can go through it together?"',
                     '«Tiene sentido. ¿Te lo pongo todo por escrito para que podáis verlo juntos?»'),
                     effect: T('Thoughtful, and it treats the couple as a couple. It also treats the sentence as a logistics problem, so if what she actually lacks is confidence in her own judgement, she leaves with the same gap and a printout.',
                               'Considerado, y trata a la pareja como pareja. También trata la frase como un problema de logística, así que si lo que de verdad le falta es confianza en su propio criterio, se va con el mismo hueco y con una copia impresa.') },
          strong:  { line: T('"Of course. Can I ask — if the choice were only yours to make, would you do it?"',
                     '«Claro. ¿Puedo preguntarte una cosa? Si la decisión fuera solo tuya, ¿lo harías?»'),
                     effect: T('She answers honestly, usually yes, and hears herself do it. The conversation at home stops being a request for permission and becomes something she is bringing to him.',
                               'Ella responde con sinceridad, normalmente que sí, y se oye hacerlo. La conversación en casa deja de ser una petición de permiso y pasa a ser algo que ella le lleva a él.') }
        }
      },
      treatments: [
        {
          name:   T("Facial radiofrequency — course of six",
                     "Radiofrecuencia facial — bono de seis sesiones"),
          price:  T("€1,180 for six sessions",
                     "1.180 € el bono de seis"),
          why:    T("At just over a thousand euros the sentence is genuinely ambiguous: it may be the household budget, or it may be that she has never made a four-figure decision about herself alone. Only one of those is a logistics problem.",
                     "Por encima de los mil euros la frase es genuinamente ambigua: puede ser el presupuesto familiar o puede ser que nunca haya tomado sola una decisión de cuatro cifras sobre sí misma. Solo una de las dos es un problema de logística."),
          moment: T("\"I would love to, but I will have to run it past my husband.\"",
                     "«Me encantaría, pero lo tengo que hablar con mi marido.»"),
          weak:   {
            line: T("\"Of course — take this home, show him the plan, and ring me when you have both had a look at it.\"",
                     "«Claro, llévate esto a casa, le enseñas el plan y me llamas cuando lo hayáis mirado los dos.»"),
            cost: T("Turns a woman who has just spent forty minutes deciding into a messenger, and puts a man who has never seen her face in the mirror at seven in the morning in charge of what happens to it.",
                     "Convierte en mensajera a una mujer que acaba de pasar cuarenta minutos decidiendo, y pone al mando de su cara a un hombre que nunca la ha visto en el espejo a las siete de la mañana.")
          },
          strong: {
            line: T("\"Of course. Can I ask — if it were only your decision, would you do it?\"",
                     "«Claro. ¿Te puedo preguntar una cosa? Si lo decidieras solo tú, ¿lo harías?»"),
            gain: T("She answers, usually yes, and hears herself do it. What she takes home is a position rather than a question, and the conversation at the kitchen table is an entirely different conversation.",
                     "Responde, normalmente que sí, y se oye a sí misma decirlo. Lo que se lleva a casa es una postura y no una pregunta, y la conversación en la cocina es otra conversación completamente distinta.")
          }
        },
        {
          name:   T("Hyaluronic acid filler — lips, 1 ml",
                     "Relleno de ácido hialurónico — labios, 1 ml"),
          price:  T("€360 for 1 ml",
                     "360 € el mililitro"),
          why:    T("On lips at €360 the husband is almost never the budget-holder. He is the person whose opinion of her face she is genuinely unsure about, and the sentence is doing completely different work from the one it does at €3,000.",
                     "En labios y a 360 € el marido casi nunca es quien lleva el dinero. Es la persona cuya opinión sobre su cara ella no tiene clara, y la frase está haciendo un trabajo completamente distinto del que hace a 3.000 €."),
          moment: T("She says she would have to ask her husband — a woman who booked this appointment herself and did not ask anybody about a €300 coat last month.",
                     "Dice que lo tiene que hablar con su marido. Una mujer que ha reservado esta cita ella sola y que el mes pasado no le preguntó a nadie por un abrigo de 300 €."),
          weak:   {
            line: T("\"Of course. A lot of people like to talk these things over at home — I will put the details on a card for you.\"",
                     "«Claro. Hay mucha gente a la que le gusta hablar estas cosas en casa. Te apunto los datos en una tarjeta.»"),
            cost: T("Takes at face value a sentence that has just contradicted everything else she has told you. Nothing about the budget is in question; what is in question is whether he will like it, and a card does not answer that.",
                     "Se toma al pie de la letra una frase que acaba de contradecir todo lo demás que te ha contado. Del presupuesto no hay nada en duda: lo que está en duda es si a él le va a gustar, y eso una tarjeta no lo responde.")
          },
          strong: {
            line: T("\"You booked this yourself. Is it the money you would be asking him about, or what he will think of it?\"",
                     "«Esta cita la has pedido tú sola. Lo que le vas a preguntar, ¿es el dinero o qué le va a parecer?»"),
            gain: T("Uses something she has already shown you as the evidence, so the question cannot be waved away. Once \"what he will think\" is in the room, you can talk about starting with half a syringe for a reason that is hers.",
                     "Usa como prueba algo que ella ya te ha enseñado, así que la pregunta no se puede esquivar. Con «qué le va a parecer» dentro de la sala, ya se puede hablar de empezar con media jeringa por un motivo que es suyo.")
          }
        },
        {
          name:   T("Cryolipolysis — abdomen and flanks, two areas",
                     "Criolipólisis — abdomen y flancos, dos zonas"),
          price:  T("€680 for two areas",
                     "680 € las dos zonas"),
          why:    T("Body treatments carry the sharpest version of this, because what she would have to explain at home is not the €680 but why she minds about her own stomach.",
                     "Los tratamientos corporales llevan la versión más afilada de esto, porque lo que tendría que explicar en casa no son los 680 € sino por qué le importa su propia barriga."),
          moment: T("\"I will have to see what my husband says.\" — said while she is still holding the photograph you took ten minutes ago.",
                     "«Tendré que ver qué dice mi marido», dicho mientras todavía tiene en la mano la foto que le hiciste hace diez minutos."),
          weak:   {
            line: T("\"Of course, have a chat with him. He will probably tell you to go for it — that is usually how it goes, in my experience.\"",
                     "«Claro, háblalo con él. Seguro que te dice que adelante, suele pasar eso por lo que yo veo.»"),
            cost: T("Predicts a man's reply on no evidence and makes light of a sentence she may have meant very seriously. If he does say no, you were wrong in a way she will remember and repeat.",
                     "Predice la respuesta de un hombre sin ninguna prueba y se toma a la ligera una frase que ella puede haber dicho muy en serio. Si él dice que no, te habrás equivocado de una manera que ella recordará y contará.")
          },
          strong: {
            line: T("\"Of course. What do you think he will say?\" — and then let her get to the end of it.",
                     "«Claro. ¿Qué crees que va a decir?» Y después la dejas llegar hasta el final."),
            gain: T("Costs four words and produces the entire marriage in about ninety seconds. Whatever she is really deciding is in that answer, and almost none of it is about €680.",
                     "Cuesta cuatro palabras y produce el matrimonio entero en unos noventa segundos. Lo que de verdad está decidiendo está en esa respuesta, y casi nada de ello va de 680 €.")
          }
        }
      ],
      conversation: {
        setting: T("End of a consultation, facial radiofrequency, course of six, €1,180. She has agreed with everything for forty minutes.",
                   "Final de una consulta, radiofrecuencia facial, bono de seis, 1.180 €. Lleva cuarenta minutos dándote la razón en todo."),
        before: [
          { who: 'client', line: T("\"I would love to, but I will have to run it past my husband.\"",
                                    "«Me encantaría, pero lo tengo que hablar con mi marido.»") },
          { who: 'practitioner', line: T("\"Of course — it is a decision for the two of you. Let me print the plan so he can see exactly what is in it and what it costs.\"",
                                    "«Claro, es una decisión de los dos. Te imprimo el plan para que vea exactamente qué lleva y cuánto cuesta.»") },
          { who: 'client', line: T("\"That would help, thank you. He is the one who does the accounts.\"",
                                    "«Eso me viene bien, gracias. Él es el que lleva las cuentas.»") },
          { who: 'practitioner', line: T("\"Completely understandable, and there is no rush. The plan stands for a month and I will hold the €1,180 for you.\"",
                                    "«Lo entiendo perfectamente, y sin prisa. El presupuesto te vale un mes y te guardo los 1.180 €.»") },
          { who: 'client', line: T("\"Great. I will talk to him this weekend.\"",
                                    "«Estupendo. Lo hablo con él este fin de semana.»") },
          { who: 'practitioner', line: T("\"Perfect. Give me a ring on Monday either way and we will take it from there.\"",
                                    "«Perfecto. Me llamas el lunes, sea lo que sea, y seguimos desde ahí.»") },
          { who: 'client', line: T("\"I will. Thank you so much.\"",
                                    "«Te llamo. Muchísimas gracias.»") }
        ],
        after: [
          { who: 'client', line: T("\"I would love to, but I will have to run it past my husband.\"",
                                    "«Me encantaría, pero lo tengo que hablar con mi marido.»") },
          { who: 'practitioner', line: T("\"Of course. Can I ask you something first — if it were only your decision, would you do it?\"",
                                    "«Claro. ¿Te pregunto una cosa antes? Si lo decidieras solo tú, ¿lo harías?»") },
          { who: 'client', line: T("\"Honestly? Yes. I would.\"",
                                    "«¿Sinceramente? Sí. Lo haría.»") },
          { who: 'practitioner', line: T("\"Then you already know. What is the part you would be asking him about — whether the €1,180 is there, or whether he would think it is silly?\"",
                                    "«Entonces ya lo sabes. ¿Qué parte le ibas a preguntar: si están los 1.180 € o si le va a parecer una tontería?»") },
          { who: 'client', line: T("\"…The second one. He would say I look fine as I am.\"",
                                    "«…Lo segundo. Me diría que estoy bien como estoy.»") },
          { who: 'practitioner', line: T("\"He probably does think that. Does he know you look at your neck every morning before you put your make-up on?\"",
                                    "«Seguramente lo piensa de verdad. ¿Él sabe que te miras el cuello cada mañana antes de maquillarte?»") },
          { who: 'client', line: T("\"No. I have never said it.\"",
                                    "«No. Nunca se lo he dicho.»") },
          { who: 'practitioner', line: T("\"Then that is what you are taking home, not a quotation. Ring me when you have told him that part, and I will hold the €1,180 and the first Thursday in November until then.\"",
                                    "«Pues eso es lo que te llevas a casa, no un presupuesto. Me llamas cuando le hayas contado esa parte y hasta entonces te guardo los 1.180 € y el primer jueves de noviembre.»") }
        ],
        whatChanged: T("The first version treated the sentence as a logistics problem and solved it beautifully: a printed plan, a held price, a date to ring. Everything it did confirmed the one thing she was most afraid was true — that this was not hers to decide — and it handed a man who has never looked at her neck the casting vote on it. The second version asked what she would do if it were only hers — she answers honestly, in four words — and then asked the question that separates the two possible meanings of the sentence. What she takes home in the second version is not a quotation but something she has never told her husband. Whether he says yes or no, she is bringing him a position instead of a request.",
                       "La primera versión trató la frase como un problema de logística y lo resolvió estupendamente: plan impreso, precio guardado, fecha para llamar. Todo lo que hizo confirmó justo aquello que ella más temía que fuera cierto —que esto no le tocaba decidirlo a ella— y le entregó el voto de calidad a un hombre que nunca le ha mirado el cuello. La segunda versión preguntó qué haría si dependiera de ella —lo contesta con sinceridad en cuatro palabras— y después hizo la pregunta que separa los dos significados posibles de la frase. Lo que se lleva a casa en la segunda versión no es un presupuesto sino algo que nunca le ha dicho a su marido. Diga él que sí o que no, ella le lleva una postura y no una petición."),
        cost: T("€1,180 and the Monday call that never comes, because a woman who left as a messenger has nothing to ring about. The clinic hears nothing and records it as a price objection.",
                "1.180 € y la llamada del lunes que nunca llega, porque una mujer que se fue de mensajera no tiene por qué llamar. La clínica no oye nada y lo apunta como objeción de precio.")
      },
      blocks: [
        { kind: 'passage',
          title: T('Three people in the room, one of them absent', 'Tres personas en la sala, una de ellas ausente'),
          body: [
            T('Sometimes the authority objection is exactly what it says: the decision is shared, and she is not going to make it alone. This is not an obstacle and it is not weakness. It is a household, and households decide together.',
              'A veces la objeción de autoridad es exactamente lo que dice: la decisión es compartida y no la va a tomar sola. No es un obstáculo ni una debilidad. Es un hogar, y los hogares deciden juntos.'),
            T('There are three ways to lose it. Excluding him — "this is really your decision, not his". Flattering him — "I\'m sure he\'ll want you to have what makes you happy". Bypassing him — offering something small enough not to need the conversation. Each treats the absent person as an obstacle, and she will notice, because she is married to him.',
              'Hay tres maneras de perderla. Excluirle: «esta es tu decisión, no la suya». Adularle: «seguro que él quiere que tengas lo que te haga feliz». Esquivarle: ofrecer algo lo bastante pequeño como para no necesitar la conversación. Las tres tratan al ausente como un obstáculo, y ella lo notará, porque está casada con él.'),
            T('The method does the opposite: it equips her to have the conversation accurately. What she lacks is not permission — it is the words, the number, and the honest limitation in a form she can repeat.',
              'El método hace lo contrario: la equipa para tener esa conversación con precisión. Lo que le falta no es permiso: son las palabras, la cifra y la limitación honesta en un formato que pueda repetir.')
          ] },
        { kind: 'order',
          prompt: T('Order the four things she should leave with, so the conversation at home is accurate.',
                    'Ordena las cuatro cosas con las que debería irse para que la conversación en casa sea precisa.'),
          items: [
            { id: 'a_why', text: T('Why she wants it, in her own words — written down, because she will not say it as clearly at home.', 'Por qué lo quiere, con sus palabras, escrito, porque en casa no lo dirá con tanta claridad.') },
            { id: 'a_what', text: T('What is being recommended, and specifically what is not.', 'Qué se recomienda y, en concreto, qué no.') },
            { id: 'a_limit', text: T('The honest limitation — what it will not do and how long it lasts.', 'La limitación honesta: qué no hará y cuánto dura.') },
            { id: 'a_number', text: T('The number, once, with nothing attached to it.', 'La cifra, una vez, sin nada adjunto.') }
          ],
          correct: ['a_why', 'a_what', 'a_limit', 'a_number'],
          why: T('The order is deliberate: at home the conversation almost always starts at the number, and a number arriving before the reason sounds like an expense. Written in this order, she can hand it over and the reason arrives first.',
                 'El orden es deliberado: en casa la conversación casi siempre empieza por la cifra, y una cifra que llega antes que el motivo suena a gasto. Escrito en este orden, puede entregarlo y el motivo llega primero.') },
        { kind: 'choose',
          prompt: T('She says: "He\'ll say it\'s a waste of money." What is the MIRROR-consistent response?',
                    'Ella dice: «Dirá que es tirar el dinero». ¿Cuál es la respuesta coherente con MIRROR?'),
          options: [
            { id: 'a', verdict: 'harmful',
              label: T('"It\'s your money too, though. You work as hard as he does."',
                       '«Pero también es tu dinero. Trabajas tanto como él».'),
              why: T('You have taken a side in her marriage, in a room she will leave in ten minutes. Even if she agrees with you, you have made the treatment part of an argument, and she now has to win that argument to book.',
                     'Has tomado partido en su matrimonio, en una sala de la que se irá en diez minutos. Aunque esté de acuerdo, has convertido el tratamiento en parte de una discusión, y ahora tiene que ganar esa discusión para reservar.') },
            { id: 'b', verdict: 'best',
              label: T('"Then let\'s make sure he\'s objecting to the real thing. What would he say it is a waste of money for?"',
                       '«Entonces asegurémonos de que objeta a lo real. ¿Para qué diría él que es tirar el dinero?»'),
              why: T('You accepted his position as legitimate and asked her to state it precisely. Almost always the answer reveals he is objecting to something that is not being proposed — a package, a permanence, a vanity — and she can correct that at home with your written summary.',
                     'Has aceptado su postura como legítima y le has pedido que la enuncie con precisión. Casi siempre la respuesta revela que él objeta a algo que no se está proponiendo —un paquete, una permanencia, una vanidad— y ella puede corregirlo en casa con tu resumen escrito.') },
            { id: 'c', verdict: 'weak',
              label: T('"Would it help if he came to a consultation himself?"',
                       '«¿Ayudaría si él viniera a una consulta?»'),
              why: T('Sometimes genuinely useful, and here it is premature: you have offered a logistics solution before knowing what he objects to. Offer it after the diagnostic, if what he objects to turns out to be safety or technique.',
                     'A veces es útil de verdad, y aquí es prematuro: has ofrecido una solución logística antes de saber a qué objeta. Ofrécelo después del diagnóstico, si resulta que objeta a la seguridad o a la técnica.') }
          ],
          principle: T('Ethical Duty 2 — Respect Autonomy. Her autonomy includes the right to decide with someone else.',
                       'Deber Ético 2 — Respetar la Autonomía. Su autonomía incluye el derecho a decidir con otra persona.'),
          retry: {
            note: T('That was the objection he would make. This is what she asks you to do about it — and the easy answer sends the number into the house without the reason.',
                    'Aquella era la objeción que haría él. Esto es lo que ella te pide que hagas al respecto, y la respuesta fácil mete la cifra en casa sin el motivo.'),
            prompt: T('Rocío, already reaching for her coat: "Just email my husband the price and he can tell me if we can do it."',
                      'Rocío, ya cogiendo el abrigo: «Mándale el precio por correo a mi marido y él me dice si podemos».'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Of course — what\'s his email address?"', '«Claro, ¿cuál es su correo?»'),
                why: T('You have agreed to send a figure to a man who was not here, with none of the four things that make a figure mean anything. He will open it between two other emails and decide about an amount, which is the only information he has — and she will be told the answer rather than take part in it.',
                       'Has aceptado enviar una cifra a un hombre que no estaba aquí, sin ninguna de las cuatro cosas que hacen que una cifra signifique algo. La abrirá entre otros dos correos y decidirá sobre un importe, que es la única información que tiene, y a ella le comunicarán la respuesta en lugar de participar en ella.') },
              { id: 'b', verdict: 'best',
                label: T('"I\'d rather send it to you — with the reason you gave me at the top, what it will and won\'t do underneath, and the number at the end. Then you\'re showing him something rather than being asked about it."',
                         '«Prefiero mandártelo a ti: arriba el motivo que me has dado, debajo lo que hará y lo que no, y la cifra al final. Así tú le enseñas algo, en lugar de que te lo pregunten a ti».'),
                why: T('Same document, same number, opposite conversation. She arrives holding the reason instead of defending a total, and the limitation reaches him from you rather than being the thing he discovers later and blames her for missing.',
                       'El mismo documento, la misma cifra, la conversación contraria. Ella llega con el motivo en la mano en lugar de defender un total, y la limitación le llega a él de tu parte y no como algo que descubre después y le reprocha a ella no haber visto.') },
              { id: 'c', verdict: 'harmful',
                label: T('"I could give him a ring now and explain it properly, if that\'s easier?"',
                         '«Si quieres le llamo yo ahora y se lo explico bien».'),
                why: T('You have offered to be more persuasive than she is about her own face, over her head, to someone who did not ask to speak to you. Whatever he decides, the message delivered is that she could not explain it herself — and if he says no to you, she cannot reopen it.',
                       'Te has ofrecido a ser más convincente que ella sobre su propia cara, por encima de ella, ante alguien que no ha pedido hablar contigo. Decida lo que decida, el mensaje que llega es que ella no supo explicarlo, y si te dice que no a ti, ella ya no puede reabrirlo.') }
            ],
            principle: T('You never speak to the absent person. You equip the person in front of you to speak accurately, in the order that puts the reason before the number.',
                         'Nunca hablas con la persona ausente. Equipas a la persona que tienes delante para que hable con precisión, en el orden que pone el motivo antes que la cifra.'),
            changes: {
              axis: 'continuation',
              detail: T('What is now at stake is the document that leaves the room. She has asked you to send the figure to an address you have never met, so the follow-up becomes a written summary addressed to her — her own reason at the top, what it will and will not do underneath, the number last — which she carries into a conversation you will not be in.',
                        'Lo que está en juego ahora es el documento que sale de la sala. Te ha pedido que envíes la cifra a una dirección que no conoces, así que el seguimiento se convierte en un resumen escrito dirigido a ella —su propio motivo arriba, qué hará y qué no hará debajo, y la cifra al final— que se lleva a una conversación en la que tú no vas a estar.')
            } } },
        { kind: 'reveal',
          prompt: T('She answers your diagnostic. What has just changed?', 'Responde a tu diagnóstico. ¿Qué acaba de cambiar?'),
          client: T('"He\'d say it because his sister spent four thousand on a package and looked strange for a year. That\'s what he thinks this is."',
                    '«Lo diría porque su hermana se gastó cuatro mil en un paquete y estuvo un año con una cara rara. Eso es lo que él cree que es esto».'),
          guesses: [
            { id: 'a', text: T('Nothing — it is still an authority objection.', 'Nada: sigue siendo una objeción de autoridad.') },
            { id: 'b', text: T('It became a price objection.', 'Se ha convertido en una objeción de precio.') },
            { id: 'c', text: T('It became a trust objection belonging to someone who is not in the room.', 'Se ha convertido en una objeción de confianza que pertenece a alguien que no está en la sala.') }
          ],
          answer: 'c',
          truth: T('He is not objecting to spending. He is objecting to a package that changed how someone looked for a year — which is not what you recommended. The authority objection was a container for a trust objection held by a third party, and it is answerable, because you declined exactly that in field 8 of your recommendation.',
                   'Él no objeta al gasto. Objeta a un paquete que cambió el aspecto de alguien durante un año, que no es lo que has recomendado. La objeción de autoridad era el envase de una objeción de confianza de un tercero, y sí tiene respuesta, porque tú descartaste exactamente eso en el campo 8 de tu recomendación.'),
          why: T('This is why field 8 — what you are intentionally not recommending — exists. It is the only part of the recommendation that survives being repeated at a kitchen table by someone who was not here.',
                 'Por eso existe el campo 8: lo que deliberadamente no recomiendas. Es la única parte de la recomendación que sobrevive a ser repetida en la mesa de una cocina por alguien que no estuvo aquí.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm7l5', n: 5, minutes: 10,
      title: T('The objection you caused', 'La objeción que causaste tú'),
      objective: T('Recognise objections manufactured by your own Phase 5 or 6, and repair them without defending.',
                   'Reconocer objeciones fabricadas por tu propia Fase 5 o 6 y repararlas sin defenderte.'),
      provenance: {
        chapter: 12,
        principle: T('Resistance is created earlier, in a weak M or I, and not at O — so at this stage you are healing an earlier failure of your own rather than meeting a client who is difficult.',
                     'La resistencia se crea antes, en una M o una I flojas, y no en la O: en esta etapa estás curando un fallo tuyo anterior, no encontrándote con una clienta difícil.'),
        phase: 'decisionSupport',
        trustStage: 'understanding',
        standard: 6,
        duty: 4,
        toolkit: 6
      },
      depth: {
        whyItGoesWrong: T(
          'An objection feels as though it begins at the moment it is spoken, so the practitioner looks for its cause in the last two minutes of the conversation. Diagnosing a symptom where you found it is what a careful clinician does, and it is usually correct. The book locates resistance somewhere else: in a weak opening or a thin set of questions, thirty minutes before the objection surfaced. What arrives at this stage as "I am not sure about the price" is very often a question that was never asked at the start, or an outcome nobody checked in the middle. Repairing it where it appeared cannot work, because nothing there is broken.',
          'Una objeción parece empezar en el momento en que se pronuncia, así que la profesional busca su causa en los dos últimos minutos de la conversación. Diagnosticar el síntoma donde se encuentra es lo que hace una clínica cuidadosa, y suele ser lo correcto. El libro sitúa la resistencia en otra parte: en una apertura floja o en un interrogatorio pobre, treinta minutos antes de que la objeción aflorara. Lo que llega a esta fase como «no estoy segura del precio» es muchas veces una pregunta que nunca se hizo al principio, o un resultado que nadie comprobó por el medio. Repararlo donde aparece no puede funcionar, porque ahí no hay nada roto.'),
        sheIsThinking: T(
          'She is telling me again why the treatment is good. I never said it was not. I said I do not know what happens when it wears off, and she has not answered that once.',
          'Me está contando otra vez por qué el tratamiento es bueno. Yo nunca he dicho que no lo fuera. He dicho que no sé qué pasa cuando deja de hacer efecto, y eso no me lo ha respondido ni una vez.'),
        ladder: {
          weak:    { line: T('"I think there has been a misunderstanding — let me take you through the whole plan again from the beginning."',
                     '«Creo que ha habido un malentendido. Déjame repasarte el plan entero desde el principio».'),
                     effect: T('Repeats, louder, the phase that produced the objection. It is the third explanation of something she has never disputed, and she will stop objecting and start agreeing — which is how a consultation ends with no decision in it.',
                               'Repite, más alto, la fase que produjo la objeción. Es la tercera explicación de algo que ella nunca ha discutido, y dejará de objetar y empezará a darte la razón, que es como termina una consulta sin ninguna decisión dentro.') },
          average: { line: T('"Let me answer that one properly," and take the newest objection seriously, in detail.',
                     '«Deja que te responda bien a eso», y tomarse en serio y con detalle la objeción más reciente.'),
                     effect: T('Diligent, and any one of those answers may be entirely correct. Answering them in the order she raises them means answering until she runs out of energy, because they are all being produced by one place you have not been back to.',
                               'Diligente, y cualquiera de esas respuestas puede ser del todo correcta. Responderlas en el orden en que ella las plantea significa responder hasta que se le agote la energía, porque todas las produce un mismo punto al que no has vuelto.') },
          strong:  { line: T('"Can I go back a step? When you told me what was bothering you, I do not think I ever asked what you had already tried."',
                     '«¿Puedo retroceder un paso? Cuando me contaste lo que te molestaba, creo que no llegué a preguntarte qué habías probado ya».'),
                     effect: T('Returns to the phase where the gap actually is, and names your own omission instead of her resistance. The objections generally stop, because the thing generating them has been dealt with.',
                               'Vuelve a la fase donde está de verdad el hueco y nombra tu propia omisión en lugar de la resistencia de ella. Las objeciones suelen pararse, porque se ha atendido lo que las generaba.') }
        }
      },
      treatments: [
        {
          name:   T("Skin boosters — course of three",
                     "Skin boosters — pauta de tres sesiones"),
          price:  T("€660 for three sessions",
                     "660 € las tres sesiones"),
          why:    T("Boosters get recommended fast, because they are what a practitioner reaches for when the skin looks tired and nothing else is obviously indicated. Fast recommendation is exactly where the missing question usually is.",
                     "Los boosters se recomiendan rápido, porque son a lo que echa mano una profesional cuando la piel se ve cansada y nada más se impone de forma evidente. La recomendación rápida es justo donde suele estar la pregunta que faltó."),
          moment: T("Third objection in five minutes: first the €660, then the three appointments, now whether it is uncomfortable.",
                     "Tercera objeción en cinco minutos: primero los 660 €, luego las tres citas, ahora si duele."),
          weak:   {
            line: T("\"They are honestly very tolerable — we use a topical anaesthetic and most people find it completely fine.\"",
                     "«Se llevan muy bien, de verdad. Ponemos anestesia tópica y a casi todo el mundo le parece llevadero.»"),
            cost: T("A correct answer to the third objection in a row, and there will be a fourth. Each one is being manufactured by something thirty minutes upstream that nobody has been back to.",
                     "Una respuesta correcta a la tercera objeción seguida, y habrá una cuarta. Cada una la está fabricando algo que pasó treinta minutos antes y a lo que nadie ha vuelto.")
          },
          strong: {
            line: T("\"Can I stop a second? I do not think I ever asked what you have already had done. Have you had anything like this before?\"",
                     "«¿Puedo parar un momento? Creo que no te he preguntado qué te has hecho ya. ¿Te habías hecho algo parecido antes?»"),
            gain: T("Goes back to the phase where the gap actually is and names your own omission rather than her resistance. The objections usually stop, because what was producing them has finally been dealt with.",
                     "Vuelve a la fase donde está el hueco de verdad y nombra tu propia omisión en lugar de su resistencia. Las objeciones suelen parar, porque por fin se ha atendido lo que las producía.")
          }
        },
        {
          name:   T("Fractional laser — course of three",
                     "Láser fraccionado — pauta de tres sesiones"),
          price:  T("€1,290 for three sessions",
                     "1.290 € las tres sesiones"),
          why:    T("When a client asks the same question three times in three different shapes, she is not failing to understand the answer. She is asking something she has not managed to say, and the repetition is the only signal you get.",
                     "Cuando una clienta hace la misma pregunta tres veces con tres formas distintas, no es que no entienda la respuesta. Está preguntando algo que no ha conseguido decir, y la repetición es la única señal que te da."),
          moment: T("She keeps circling back to the days of redness afterwards. Each time you answer, she nods and then asks it again slightly differently.",
                     "Vuelve una y otra vez a los días de rojez de después. Cada vez que respondes, asiente y lo pregunta otra vez un poco distinto."),
          weak:   {
            line: T("\"As I said, it really is only two or three days — I have had it done myself and I was back at work on the Monday.\"",
                     "«Como te decía, son dos o tres días de verdad. Yo me lo he hecho y el lunes estaba trabajando.»"),
            cost: T("The third version of an answer she has already accepted twice, now backed by your own face. She is not disputing the number of days, and your experience is not what she was asking about.",
                     "La tercera versión de una respuesta que ya ha aceptado dos veces, ahora respaldada por tu propia cara. Ella no discute el número de días, y tu experiencia no es lo que estaba preguntando.")
          },
          strong: {
            line: T("\"You have asked me about the days off three times now. What is in those days — is there something coming up?\"",
                     "«Me has preguntado tres veces por los días de baja. ¿Qué hay en esos días? ¿Tienes algo?»"),
            gain: T("Treats the repetition as the evidence it is. What comes out is a date — a wedding, a first day at a new job, a hearing — and that date reorganises the whole plan, including whether you quote three sessions at all.",
                     "Trata la repetición como la prueba que es. Lo que sale es una fecha —una boda, el primer día en un trabajo nuevo, un juicio— y esa fecha reorganiza el plan entero, incluido si llegas a presupuestar tres sesiones.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('Some objections are receipts', 'Algunas objeciones son recibos'),
          body: [
            T('Not every objection belongs to the client. Some are produced by the consultation itself: a menu of options given to someone who asked for one thing, a number said before any value existed, a promise that outran the evidence, a plan printed before she sat down.',
              'No todas las objeciones son de la clienta. Algunas las produce la propia consulta: un menú de opciones dado a quien pidió una cosa, una cifra dicha antes de que existiera ningún valor, una promesa que corrió más que la evidencia, un plan impreso antes de que ella se sentara.'),
            T('These are recognisable because they appear immediately after a specific thing you did, and because they are worded as her problem. "It\'s a lot to take in" is almost never about her capacity.',
              'Se reconocen porque aparecen justo después de algo concreto que hiciste y porque están formuladas como problema suyo. «Es mucha información» casi nunca trata de su capacidad.'),
            T('The repair has one rule: name what you did, do not explain why you did it, and return to the phase you skipped. Explaining is defence, and defence confirms the objection.',
              'La reparación tiene una regla: nombra lo que hiciste, no expliques por qué lo hiciste y vuelve a la fase que te saltaste. Explicar es defenderse, y defenderse confirma la objeción.')
          ] },
        { kind: 'match',
          prompt: T('Match each objection to the practitioner behaviour that manufactured it.',
                    'Empareja cada objeción con la conducta del profesional que la fabricó.'),
          left: [
            { id: 'x1', text: T('"It\'s a lot to take in. I\'ll have a think."', '«Es mucha información. Me lo pensaré».') },
            { id: 'x2', text: T('"Is it really going to be worth that?"', '«¿De verdad va a valer la pena?»') },
            { id: 'x3', text: T('"I don\'t want to end up looking like everyone else."', '«No quiero acabar pareciéndome a todo el mundo».') },
            { id: 'x4', text: T('"How do I know it will actually work on me?"', '«¿Cómo sé que en mí va a funcionar?»') }
          ],
          right: [
            { id: 'menu', text: T('You presented a menu instead of a recommendation', 'Presentaste un menú en vez de una recomendación') },
            { id: 'price', text: T('You said the number before the value structure existed', 'Dijiste la cifra antes de que existiera la estructura de valor') },
            { id: 'generic', text: T('Your recommendation was not traceable to anything she said', 'Tu recomendación no era trazable a nada que ella dijera') },
            { id: 'oversell', text: T('You promised an outcome the condition does not support', 'Prometiste un resultado que la condición no respalda') }
          ],
          pairs: { x1: 'menu', x2: 'price', x3: 'generic', x4: 'oversell' },
          why: T('x4 is the cruel one: overselling produces doubt rather than confidence, because a promise larger than the evidence invites the client to test it. The more you claimed, the harder she now needs proof.',
                 'La x4 es la cruel: sobrevender produce duda en lugar de confianza, porque una promesa mayor que la evidencia invita a la clienta a comprobarla. Cuanto más afirmaste, más pruebas necesita ahora.') },
        { kind: 'spot',
          prompt: T('Find the line where the practitioner manufactured the objection that arrives at the end.',
                    'Encuentra la línea en la que el profesional fabricó la objeción que llega al final.'),
          lines: [
            { who: 'client', text: T('"I just want something for these two lines here."', '«Solo quiero algo para estas dos líneas de aquí».') },
            { who: 'you', text: T('"We can definitely treat those. While we\'re looking — have you considered the nasolabial folds and a little skin boosting? Most clients do all three together."', '«Eso lo podemos tratar sin problema. Ya que estamos, ¿has pensado en los surcos nasogenianos y algo de skinbooster? La mayoría se hace las tres cosas a la vez».') },
            { who: 'client', text: T('"Oh. I hadn\'t thought about the rest of it."', '«Ah. No había pensado en el resto».') },
            { who: 'you', text: T('"There\'s no obligation at all — I just want you to have the full picture."', '«No hay ninguna obligación, solo quiero que tengas la foto completa».') },
            { who: 'client', text: T('"It\'s a lot to take in, isn\'t it. Let me think about it."', '«Es mucha información, ¿no? Déjame pensarlo».') }
          ],
          answerIndex: 1,
          why: T('She asked for two lines. Line 2 added two treatments and a social proof, and line 4 tried to undo it with permission language that cannot undo it — the picture is already larger than the thing she came for. Her closing line is not indecision; it is a receipt for the expansion.',
                 'Pidió dos líneas. La línea 2 añadió dos tratamientos y una prueba social, y la línea 4 intentó deshacerlo con lenguaje de permiso que no puede deshacerlo: la foto ya es mayor que aquello por lo que vino. Su frase final no es indecisión: es el recibo de la ampliación.'),
          principle: T('"You don\'t need everything" is not modesty. It is the instrument that prevents this exact objection.',
                       '«No necesitas todo» no es modestia. Es el instrumento que evita exactamente esta objeción.') },
        { kind: 'choose',
          prompt: T('You have just recognised that you caused it. What repairs it?',
                    'Acabas de reconocer que la causaste tú. ¿Qué la repara?'),
          options: [
            { id: 'a', verdict: 'best',
              label: T('"I added things you didn\'t ask about, and that made this bigger than it needed to be. You came in about two lines. Can we go back to that?"',
                       '«He añadido cosas que no pediste y eso ha hecho esto más grande de lo necesario. Viniste por dos líneas. ¿Volvemos a eso?»'),
              why: T('Names the behaviour, does not explain the motive, returns to her original request. It also does something rare: it makes the recommendation smaller in front of her, which is the fastest credibility instrument in the method.',
                     'Nombra la conducta, no explica el motivo y vuelve a su petición original. Además hace algo poco común: encoge la recomendación delante de ella, que es el instrumento de credibilidad más rápido del método.') },
            { id: 'b', verdict: 'weak',
              label: T('"I only mentioned them so you\'d have the complete picture — there\'s genuinely no pressure."',
                       '«Solo los mencioné para que tuvieras la foto completa, de verdad que no hay presión».'),
              why: T('This is an explanation of your motive, which is defence. Saying "no pressure" twice is itself pressure, and the size of the recommendation has not changed.',
                     'Es una explicación de tu motivo, es decir, defensa. Decir «sin presión» dos veces es en sí presión, y el tamaño de la recomendación no ha cambiado.') },
            { id: 'c', verdict: 'weak',
              label: T('"Let\'s park everything else and just do the two lines today."',
                       '«Aparquemos todo lo demás y hacemos hoy solo las dos líneas».'),
              why: T('The right destination, reached by skipping the acknowledgement. She will accept, and she will still leave knowing that the room expands when she is in it. Say the sentence first.',
                     'El destino correcto, alcanzado saltándose el reconocimiento. Aceptará, y aun así se irá sabiendo que la sala se expande cuando ella está dentro. Di antes la frase.') }
          ],
          principle: T('Trust Standard 6 — Protect Trust After Decision starts before the decision, with the willingness to make your own recommendation smaller.',
                       'El Estándar de Confianza 6 —Proteger la Confianza Después de la Decisión— empieza antes de la decisión, con la disposición a encoger tu propia recomendación.'),
          retry: {
            note: T('That wound was an expanded recommendation. This one is an oversold one, and the repair is not the same shape.',
                    'Aquella herida era una recomendación ampliada. Esta es una recomendación sobrevendida, y la reparación no tiene la misma forma.'),
            prompt: T('Ten minutes ago you said, "Honestly, you\'ll be amazed — it takes ten years off." Now Inés says: "How do I know it\'ll actually work on me, though?"',
                      'Hace diez minutos dijiste: «De verdad, te vas a quedar impresionada, te quita diez años». Ahora Inés dice: «Pero ¿cómo sé que en mí va a funcionar?»'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"I\'ve got photographs of three clients with almost exactly your skin — let me show you."',
                         '«Tengo fotos de tres clientas con la piel prácticamente como la tuya, te las enseño».'),
                why: T('Evidence answering a doubt your own claim manufactured. The photographs may be excellent, and they arrive in the same voice that promised ten years, so she now has to work out how much to discount these as well. More proof is not the repair for having said too much.',
                       'Evidencia respondiendo a una duda que fabricó tu propia afirmación. Las fotos pueden ser excelentes, y llegan con la misma voz que prometió diez años, así que ahora ella tiene que calcular cuánto descontar también de esto. Más pruebas no es la reparación de haber dicho de más.') },
              { id: 'b', verdict: 'best',
                label: T('"You don\'t — and I made that harder a minute ago by overselling it. What I can tell you honestly is what I see: most people look less tired, a few see very little, and nobody looks ten years younger. Does that change what you want to do?"',
                         '«No lo sabes, y hace un minuto lo he puesto más difícil al sobrevenderlo. Lo que sí te puedo decir con honestidad es lo que veo: la mayoría parece menos cansada, unas pocas notan muy poco y nadie aparenta diez años menos. ¿Eso cambia lo que quieres hacer?»'),
                why: T('Names what you did, does not explain why you did it, and replaces the promise with the ceiling. A smaller true claim from the same person is the only thing that restores the size of everything else you said, and the closing question hands the decision back with the new information in it.',
                       'Nombra lo que hiciste, no explica por qué lo hiciste y sustituye la promesa por el techo. Una afirmación más pequeña y verdadera de la misma persona es lo único que devuelve su tamaño a todo lo demás que dijiste, y la pregunta final le devuelve la decisión con la información nueva dentro.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Well, nothing\'s guaranteed in aesthetics — everyone responds differently."',
                         '«Bueno, en estética no hay nada garantizado, cada persona responde de una manera».'),
                why: T('A retreat dressed as honesty. Inside two minutes you have promised everything and then promised nothing, and the only stable conclusion available to her is that neither sentence was about her face. Vagueness after an oversell reads as the beginning of an excuse.',
                       'Una retirada disfrazada de honestidad. En dos minutos has prometido todo y luego nada, y la única conclusión estable que le queda es que ninguna de las dos frases hablaba de su cara. La vaguedad después de una sobreventa se lee como el principio de una excusa.') }
            ],
            principle: T('The repair is symmetrical to the damage. An expansion is repaired by going back to what she asked for; an oversell is repaired by a smaller true claim, never by a larger pile of evidence.',
                         'La reparación es simétrica al daño. Una ampliación se repara volviendo a lo que ella pidió; una sobreventa se repara con una afirmación más pequeña y verdadera, nunca con un montón mayor de pruebas.'),
            changes: {
              axis: 'recommendation',
              detail: T('The recommendation itself is no longer the wound. Its size is right and she has not questioned it; what is damaged is the claim you attached to it ten minutes ago, so the repair is a smaller true statement about what you can actually see on her — not a return to what she asked for.',
                        'La recomendación ya no es la herida. Su tamaño es el correcto y ella no lo ha cuestionado; lo dañado es la afirmación que le pegaste encima hace diez minutos, así que la reparación es una declaración más pequeña y verdadera sobre lo que de verdad ves en su piel, no una vuelta a lo que ella pidió.')
            } } }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm7l6', n: 6, minutes: 14,
      title: T('When the answer is no', 'Cuando la respuesta es no'),
      objective: T('Accept a decline in a way that keeps the relationship, the referral, and your own standard intact.',
                   'Aceptar un rechazo de forma que se conserven la relación, la recomendación y tu propio estándar.'),
      provenance: {
        chapter: [12, 13],
        principle: T('Either way, O lets you finish with respect — closing is not pressure, but abandoning her at the door is not respect either.',
                     'Pase lo que pase, la O te permite terminar con respeto: cerrar no es presionar, pero abandonarla en la puerta tampoco es respetar.'),
        phase: 'decisionSupport',
        trustStage: 'safety',
        standard: 1,
        duty: 2,
        toolkit: 8
      },
      depth: {
        whyItGoesWrong: T(
          'A refusal lands as a verdict on you, and there are two ways of surviving a verdict: dispute it, or step out of the room emotionally. The second passes for good manners — kind words, brisk tempo, no pressure, an escort to the door — and the consultant doing it believes she is being elegant. What the client registers is the temperature dropping. She cannot always say what altered, but she notices that forty minutes of interest expired the instant she said no, and that is the account of you she gives when a friend asks her whether this clinic is any good.',
          'Un rechazo aterriza como un veredicto sobre ti, y solo hay dos formas de sobrevivir a un veredicto: discutirlo o salir emocionalmente de la sala. La segunda pasa por buena educación —palabras amables, ritmo ágil, ninguna presión, acompañamiento hasta la puerta— y la consultora que lo hace cree estar siendo elegante. Lo que registra la clienta es que baja la temperatura. No siempre sabe decir qué ha cambiado, pero nota que cuarenta minutos de interés caducaron en el instante en que dijo que no, y ese es el relato tuyo que cuenta cuando una amiga le pregunta si esta clínica es buena.'),
        sheIsThinking: T(
          'She could not have been nicer for forty minutes and she has been a stranger since I said no. So it was the sale all along.',
          'No podría haber sido más encantadora durante cuarenta minutos y lleva siendo una desconocida desde que dije que no. Así que era la venta, desde el principio.'),
        ladder: {
          weak:    { line: T('"That is absolutely fine. You know where to find us." — said standing, already halfway to the door.',
                     '«Perfecto, sin más. Ya sabes dónde encontrarnos», dicho de pie y ya a medio camino de la puerta.'),
                     effect: T('The wording is right and the relationship shuts anyway. What travels home with her is the drop in temperature, not the wording.',
                               'La formulación es correcta y la relación se cierra igual. Lo que viaja a casa con ella es la bajada de temperatura, no la formulación.') },
          average: { line: T('"Of course. Would you like me to send the plan over, in case it is useful later on?"',
                     '«Claro. ¿Quieres que te mande el plan, por si te sirve más adelante?»'),
                     effect: T('Kind, practical, and about as well as most consultants manage here. It parks every later step with her, so a client who has just decided against it will never have an occasion to get in touch.',
                               'Amable, práctico y más o menos lo mejor que logran aquí la mayoría de las consultoras. Aparca en ella todos los pasos posteriores, así que una clienta que acaba de decidir que no nunca tendrá una ocasión para escribir.') },
          strong:  { line: T('"I respect that. Can I ask what it was about, so I know whether I missed something? And I am here if anything crops up later on."',
                     '«Lo respeto. ¿Puedo preguntarte de qué iba, para saber si se me escapó algo? Y aquí estoy si te surge algo más adelante».'),
                     effect: T('Treats a refusal as information and the relationship as ongoing. She walks out as a woman who was advised rather than a woman who did not buy, and that is the state she refers her friend from.',
                               'Trata el rechazo como información y la relación como algo vigente. Sale como una mujer a la que han asesorado y no como una mujer que no compró, y ese es el estado desde el que recomienda la clínica a una amiga.') }
        }
      },
      treatments: [
        {
          name:   T("Hyaluronic acid filler — midface, 2 ml",
                     "Relleno de ácido hialurónico — tercio medio, 2 ml"),
          price:  T("€720 for 2 ml",
                     "720 € los 2 ml"),
          why:    T("A clear no after a good consultation is the hardest thing in the room to receive well, because forty minutes of warmth are now on the table and everybody can see whether they were free.",
                     "Un no claro después de una buena consulta es lo más difícil de recibir bien, porque cuarenta minutos de calidez están ahora encima de la mesa y se ve perfectamente si eran gratis."),
          moment: T("She says no. Not \"I will think about it\" — a clear, courteous no, and she is reaching for her coat.",
                     "Dice que no. No un «me lo pienso»: un no claro y educado, y ya está cogiendo el abrigo."),
          weak:   {
            line: T("\"That is absolutely fine. You know where we are if you change your mind.\" — said standing, already half turned towards the door.",
                     "«Sin ningún problema. Ya sabes dónde estamos si cambias de idea», dicho de pie y ya medio girada hacia la puerta."),
            cost: T("The wording is right and the temperature is the message. She notices that forty minutes of interest expired the second she declined, and that is the account of this clinic she gives when a friend asks her.",
                     "Las palabras están bien y el mensaje es la temperatura. Ella nota que cuarenta minutos de interés caducaron en el segundo en que dijo que no, y esa es la versión de esta clínica que da cuando una amiga le pregunta.")
          },
          strong: {
            line: T("\"I respect that. Can I ask what it was about, so I know whether I missed something? And I am here if anything comes up later.\"",
                     "«Lo respeto. ¿Te puedo preguntar por qué, para saber si se me ha escapado algo? Y aquí estoy si te surge cualquier cosa más adelante.»"),
            gain: T("Treats the refusal as information and the relationship as ongoing. She leaves as a woman who was advised rather than a woman who did not buy, and that is the state she refers her friend from.",
                     "Trata el no como información y la relación como algo que sigue. Se va como una mujer a la que han asesorado y no como una que no compró, y desde ahí es desde donde te recomienda a su amiga.")
          }
        },
        {
          name:   T("Acne programme — six sessions",
                     "Programa de acné — seis sesiones"),
          price:  T("€690 for six sessions",
                     "690 € las seis sesiones"),
          why:    T("When the person paying and the person being treated are two different people, a no has two authors — and the one who did not say it is the one who comes back on her own in eighteen months.",
                     "Cuando quien paga y quien se trata son dos personas distintas, un no tiene dos autores, y la que no lo ha dicho es la que vuelve sola dentro de dieciocho meses."),
          moment: T("The mother says they will leave it for now. The daughter, who is nineteen, has not said anything for ten minutes.",
                     "La madre dice que de momento lo dejan. La hija, que tiene diecinueve, lleva diez minutos sin decir nada."),
          weak:   {
            line: T("\"Of course, no problem at all. Here is a card — have a think and come back to us whenever you like.\"",
                     "«Claro, ningún problema. Toma una tarjeta, os lo pensáis y volvéis cuando queráis.»"),
            cost: T("Accepts a decision from the person who was not going to have the treatment, and lets the other one leave without being addressed once. Whatever she was going to say stays unsaid, and she has no reason to come back alone.",
                     "Acepta una decisión de la persona que no se iba a tratar y deja marcharse a la otra sin dirigirle la palabra ni una vez. Lo que fuera a decir se queda sin decir, y no tiene ningún motivo para volver sola.")
          },
          strong: {
            line: T("\"That is fine. Before you go — Lucía, is there anything you wanted to ask me while you are here?\"",
                     "«Vale, perfecto. Antes de que os vayáis: Lucía, ¿hay algo que quisieras preguntarme ya que estás aquí?»"),
            gain: T("Addresses the person whose skin it is, once, in front of the person paying. She may say nothing today. She knows where the room is that spoke to her, and at twenty-one she books it herself.",
                     "Se dirige una vez a la persona de quien es la piel, delante de quien paga. Hoy quizá no diga nada. Sabe cuál es la consulta en la que le hablaron a ella, y a los veintiuno la pide ella sola.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('The outcome you are not allowed to fight', 'El resultado contra el que no puedes pelear'),
          body: [
            T('A no is a legitimate outcome of a well-run consultation. Sometimes the honest answer to her question is that this will not do what she wants, or not at a price she should pay, or not now. A method that cannot produce a no is a sales script.',
              'Un no es un resultado legítimo de una consulta bien hecha. A veces la respuesta honesta a su pregunta es que esto no hará lo que ella quiere, o no a un precio que deba pagar, o no ahora. Un método que no puede producir un no es un guion de ventas.'),
            T('What you do in the ninety seconds after a no decides two things you will never see on today\'s figures: whether she returns in eighteen months, and what she says about your clinic to the three people who ask her.',
              'Lo que haces en los noventa segundos posteriores a un no decide dos cosas que nunca verás en las cifras de hoy: si vuelve dentro de dieciocho meses y qué dice de tu clínica a las tres personas que le pregunten.'),
            T('The structure: accept it once, without a second attempt. Give her what she is entitled to keep — the assessment, the honest limitation, the lower-risk alternative — with no offer attached. Record the closure. Stop.',
              'La estructura: acéptalo una vez, sin un segundo intento. Dale lo que tiene derecho a conservar —la valoración, la limitación honesta, la alternativa de menor riesgo— sin ninguna oferta adjunta. Registra el cierre. Para.')
          ] },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 13', 'The Beauty Sales Secrets — Capítulo 13'),
          quote: T('The client who leaves without buying, and tells someone else she trusted you, is not a lost consultation.',
                   'La clienta que se va sin comprar y le cuenta a alguien que confió en ti no es una consulta perdida.'),
          note: T('The Decision Engine treats NO as a first-class outcome: Toolkit #8 still governs it, Toolkit #16 and #17 are refused, and the relationship closes as Consulted, Paused or Referred–Discharged rather than being left Active. Closure is a state, not an absence.',
                  'El Motor de Decisión trata el NO como un resultado de primera clase: el Toolkit #8 sigue gobernándolo, los Toolkits #16 y #17 se deniegan, y la relación se cierra como Consultada, En pausa o Derivada, en lugar de dejarse Activa. El cierre es un estado, no una ausencia.') },
        { kind: 'choose',
          prompt: T('She says it plainly, kindly, and for a reason you cannot fix: "I\'ve been weighing it up while you talked, and I\'m not doing it." What comes out of your mouth in the ten seconds that follow?',
                    'Lo dice con claridad, con amabilidad y por un motivo que no puedes arreglar: «Le he estado dando vueltas mientras hablabas y no lo voy a hacer». ¿Qué sale de tu boca en los diez segundos siguientes?'),
          options: [
            { id: 'a', verdict: 'harmful',
              label: T('"Of course. Would it be worth doing a single session, so you can judge it yourself?"',
                       '«Claro. ¿No merecería la pena hacer una sola sesión y así lo juzgas tú misma?»'),
              why: T('A second attempt ten seconds after a clear decision. You have made her refuse twice, and a second refusal is always blunter than the first — which is where a consultation stops being an hour she would describe kindly to anyone.',
                     'Un segundo intento diez segundos después de una decisión clara. La has obligado a rechazar dos veces, y un segundo rechazo siempre es más seco que el primero, y ahí es donde una consulta deja de ser una hora que ella describiría con cariño a nadie.') },
            { id: 'b', verdict: 'best',
              label: T('"That\'s a reasonable decision, and I\'m glad you said it straight. May I ask what it was about? Not to shift it — so I learn whether it was me or the plan."',
                       '«Es una decisión razonable y te agradezco que me lo digas claro. ¿Te puedo preguntar por qué? No para moverla, sino para saber si fui yo o el plan».'),
              why: T('Acceptance lands first and carries no condition, so the question behind it can only be information. Chapter 15 records a consultant whose conversions rose once she started to ask it: clients answer, and the answers correct a practice that was otherwise being adjusted against guesswork.',
                     'La aceptación llega primero y no lleva condición, así que la pregunta que viene detrás solo puede ser información. El Capítulo 15 recoge a una consultora cuya conversión subió en cuanto empezó a hacerla: las clientas responden, y esas respuestas corrigen una práctica que, si no, se ajusta a base de suposiciones.') },
            { id: 'c', verdict: 'weak',
              label: T('"Absolutely fine — most people say no the first round."',
                       '«No pasa nada: casi todo el mundo dice que no la primera vez».'),
              why: T('Kind, and it files her decision as a phase of a process she has not enrolled in. Every later contact from your clinic now reads as attempt two.',
                     'Amable, y archiva su decisión como una etapa de un proceso en el que ella no se ha inscrito. Cualquier contacto posterior de tu clínica se leerá ya como el intento número dos.') }
          ],
          principle: T('Accepting and enquiring are two separate acts, and the order is everything: acceptance must be unconditional, or the question is simply a second attempt.',
                       'Aceptar y preguntar son dos actos separados, y el orden lo es todo: la aceptación debe ser incondicional o la pregunta no pasa de ser un segundo intento.'),
          retry: {
            note: T('You handled the no as material to use. Here it is settled, and she wants the one answer you can only give once your own interest has gone.',
                    'Trataste el no como material aprovechable. Aquí ya está zanjado, y ella quiere la única respuesta que solo puedes dar cuando tu interés ya no existe.'),
            prompt: T('Two minutes on, at the door: "Can I ask you something? Since you won\'t be seeing me again — where would you go, if you were me?"',
                      'Dos minutos después, en la puerta: «¿Te puedo preguntar una cosa? Ya que no me vas a volver a ver: ¿adónde irías tú, si fueras yo?»'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"I couldn\'t say — I\'d hate to send you somewhere I don\'t know."',
                         '«No sabría decirte; me daría apuro mandarte a un sitio que no conozco».'),
                why: T('Cautious, and the caution is all yours. What she learns is that once she is not buying, this room holds nothing for her — and that is the line she repeats when a friend asks about your clinic.',
                       'Prudente, y la prudencia es toda tuya. Lo que aprende es que, cuando no compra, esta sala no guarda nada para ella, y esa es la frase que repetirá cuando una amiga le pregunte por tu clínica.') },
              { id: 'b', verdict: 'best',
                label: T('"For what you have, the cheapest honest route is a dermatologist and a prescription. That isn\'t us, and it may be all you require. If you want what we do afterwards, you know where we are."',
                         '«Para lo que tienes, la vía honesta más barata es una dermatóloga y una receta. Eso no somos nosotras, y puede que sea todo lo que necesitas. Si después quieres lo que hacemos aquí, ya sabes dónde estamos».'),
                why: T('The lower-risk route, including the one that bypasses you, handed over with nothing attached. It is the only statement of the day she can verify, and it spends revenue you had already lost.',
                       'La vía de menor riesgo, incluida la que te esquiva a ti, entregada sin nada adjunto. Es la única afirmación del día que ella puede verificar, y gasta unos ingresos que ya habías perdido.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Anywhere decent, I suppose. Though be careful — there are one or two places round here I\'d steer clear of."',
                         '«A cualquier sitio decente, supongo. Aunque ten cuidado: hay un par de sitios por aquí de los que yo me alejaría».'),
                why: T('Steering her off rivals at the door is the last commercial act left to you, and she will read it as one. She leaves with a vague fear and no route, worse informed than when she enquired.',
                       'Alejarla de la competencia en la puerta es el último acto comercial que te queda, y ella lo leerá así. Se va con un miedo difuso y sin ninguna vía, peor informada que cuando preguntó.') }
            ],
            principle: T('A no strips out your commercial interest and leaves the clinical obligation standing. What she is entitled to keep, she keeps — including the route that bypasses you.',
                         'Un no elimina tu interés comercial y deja en pie la obligación clínica. Lo que ella tiene derecho a conservar, lo conserva, incluida la vía que te esquiva a ti.'),
            changes: {
              axis: 'trust',
              detail: T('Because the decline was accepted without a second attempt, Trust Stage 1, Safety, survives the refusal — and she puts a question to you that nobody puts to a person who is still selling: where she should go instead.',
                        'Como la negativa se aceptó sin un segundo intento, la Etapa de Confianza 1, Seguridad, sobrevive al rechazo, y ella te hace una pregunta que nadie le hace a quien sigue vendiendo: adónde debería ir en su lugar.')
            } } },
        { kind: 'compare',
          prompt: T('She has declined. Which response protects the relationship?',
                    'Ha declinado. ¿Qué respuesta protege la relación?'),
          a: { label: T('Response A', 'Respuesta A'),
               text: T('"That\'s absolutely fine. I\'ll send you the plan anyway, and I\'ll check in with you in a few weeks in case anything changes."',
                       '«Perfecto, sin problema. Te mando el plan igualmente y te escribo en unas semanas por si algo cambia».') },
          b: { label: T('Response B', 'Respuesta B'),
               text: T('"That\'s a reasonable decision. I\'ll send you the assessment and the honest limits, including the option that doesn\'t involve us — no offer attached. I won\'t follow up; if you want to come back, you know where we are."',
                       '«Es una decisión razonable. Te envío la valoración y los límites honestos, incluida la opción que no pasa por nosotros, sin ninguna oferta. No haré seguimiento; si quieres volver, sabes dónde estamos».') },
          answer: 'b',
          why: T('A sounds warmer and contains a follow-up she did not agree to, which converts her no into a pending yes. B gives her more (the alternative that does not involve you) and asks for nothing. B is also the only one of the two she can repeat to a friend without it sounding like a sales process.',
                 'A suena más cálida y contiene un seguimiento que ella no acordó, lo que convierte su no en un sí pendiente. B le da más —la alternativa que no pasa por ti— y no pide nada. B es además la única de las dos que puede repetir a una amiga sin que suene a proceso de venta.') },
        { kind: 'sort',
          prompt: T('After a NO, sort what belongs in the follow-up plan and what does not.',
                    'Tras un NO, clasifica qué corresponde al plan de seguimiento y qué no.'),
          client: T('Toolkit #8 on a NO outcome, with MBOK Ch.6 — End Relationships Responsibly.',
                    'Toolkit #8 con resultado NO, con MBOK Cap.6 — Terminar Relaciones con Responsabilidad.'),
          buckets: [
            { id: 'in', label: T('Belongs in the plan', 'Corresponde al plan') },
            { id: 'out', label: T('Rejected by the validator', 'Rechazado por el validador') }
          ],
          items: [
            { id: 'n1', text: T('Same-day: send the assessment, the honest limitation and the lower-risk alternative, with no offer attached.', 'Mismo día: enviar la valoración, la limitación honesta y la alternativa de menor riesgo, sin oferta adjunta.'), bucket: 'in' },
            { id: 'n2', text: T('A documented closure note in her words, and the closure state recorded.', 'Una nota de cierre con sus palabras y el estado de cierre registrado.'), bucket: 'in' },
            { id: 'n3', text: T('A three-month reactivation sequence.', 'Una secuencia de reactivación a tres meses.'), bucket: 'out' },
            { id: 'n4', text: T('An explicit stop condition — what ends contact.', 'Una condición de cierre explícita: qué termina el contacto.'), bucket: 'in' },
            { id: 'n5', text: T('A win-back offer at a lower price in six weeks.', 'Una oferta de recuperación a menor precio en seis semanas.'), bucket: 'out' },
            { id: 'n6', text: T('Adding her to the clinic\'s nurture campaign.', 'Añadirla a la campaña de nutrición de la clínica.'), bucket: 'out' }
          ],
          why: T('The three rejected items are rejected by the validator itself, not by preference: Toolkit #16 is not eligible at an immediate NO. If your CRM does any of them automatically, the method is being overridden by your software — which is worth checking this week.',
                 'Los tres elementos rechazados los rechaza el propio validador, no una preferencia: el Toolkit #16 no es elegible en un NO inmediato. Si tu CRM hace alguno automáticamente, el software está anulando el método, y merece la pena comprobarlo esta semana.') },
        { kind: 'reflect',
          prompt: T('Think of the last client who declined. What did your clinic do in the following six weeks — and would she describe it as respectful?',
                    'Piensa en la última clienta que declinó. ¿Qué hizo tu clínica en las seis semanas siguientes, y ella lo describiría como respetuoso?'),
          placeholder: T('Include what happened automatically, not only what you did deliberately.',
                         'Incluye lo que pasó automáticamente, no solo lo que hiciste a propósito.') },

        { kind: 'compare',
          prompt: T('A NO in Phase 7 and a responsible ending in Phase 8 look alike from the outside and are not the same object. Which of these is the Phase 8 one?',
                    'Un NO en la Fase 7 y un cierre responsable en la Fase 8 se parecen por fuera y no son el mismo objeto. ¿Cuál de estos es el de la Fase 8?'),
          a: { label: T('She declined today', 'Hoy ha dicho que no'),
               text: T('She has heard the recommendation, said no, and left with the plan on record, the reason written down and the door open.',
                       'Ha escuchado la recomendación, ha dicho que no y se ha ido con el plan registrado, el motivo anotado y la puerta abierta.') },
          b: { label: T('You are ending the relationship', 'Eres tú quien cierra la relación'),
               text: T('She has been your client for two years, and you are telling her that what she now wants is not something you should keep providing.',
                       'Lleva dos años siendo clienta tuya, y le estás diciendo que lo que ahora quiere no es algo que tú debas seguir proporcionándole.') },
          answer: 'b',
          why: T('The first is a decision that did not go your way while the relationship continues: on the Continuum she moves to Considering, not out of it, and Toolkit #8 still applies. The second is a relationship state change under MBOK Chapter 6, taken on your initiative because continuing would breach Do No Avoidable Harm — that is Module 9\'s subject, not this one. Collapsing the two is how a practitioner starts treating every decline as a discharge, or keeps treating someone she should have referred a year ago.',
                 'El primero es una decisión que no salió como querías mientras la relación continúa: en el Continuo ella pasa a Considerando, no queda fuera, y el Toolkit #8 sigue aplicando. El segundo es un cambio de estado de la relación según el capítulo 6 del MBOK, tomado por iniciativa tuya porque continuar vulneraría No Causar Daño Evitable: ese es el tema del Módulo 9, no de este. Fundir los dos es como una profesional acaba tratando cada rechazo como un alta, o siguiendo con alguien a quien debería haber derivado hace un año.') }

      ]
    }
  ],
  apply: {
    assignment: T('At the next objection you meet, ask one diagnostic question before you answer — and write down the surface objection and the underlying concern as two separate sentences before you respond.',
                  'Ante la próxima objeción, haz una pregunta diagnóstica antes de responder, y escribe la objeción de superficie y la preocupación subyacente como dos frases separadas antes de contestar.'),
    prompt: T('What was the objection underneath? Write both sentences, and say what you would have answered if you had responded to the surface.',
              '¿Cuál era la objeción de debajo? Escribe las dos frases y di qué habrías respondido si hubieras contestado a la superficie.')
  }
};

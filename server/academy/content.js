/**
 * MIRROR INTERACTIVE SALES ACADEMY — CURRICULUM CONTENT
 *
 * Source of substance : The Beauty Sales Secrets (Noam Landman) — M.I.R.R.O.R.
 * Source of structure : the canonical MIRROR architecture (8 phases, 7 trust
 *                       stages, 6 trust standards, 4 ethical duties, Toolkits).
 * See BOOK_MIRROR_CONTENT_MAP.md for the per-module provenance table.
 *
 * No framework in this file is invented. Every lesson traces to the book.
 *
 * Every client-facing string is a {en, es} leaf; scenario/index.js localize()
 * resolves it at the API boundary.
 */

const T = (en, es) => ({ en, es });

const canon = require('../framework/canonical');
const method = require('../framework/method');

// ---------------------------------------------------------------------------
// THE TWO MIRROR LAYERS — built from framework/method.js so the Academy's
// mapping table can never drift from the frozen canonical names. This is a
// JOIN of two source-traced tables, not a third framework.
// ---------------------------------------------------------------------------
const METHOD_TABLE = method.methodTable();
const joinLeaf = (arr, fn) => ({
  en: arr.map(x => fn(x, 'en')).join(' · '),
  es: arr.map(x => fn(x, 'es')).join(' · ')
});

const methodMatrixBlock = () => ({
  kind: 'matrix',
  prompt: T('Read it across, one letter at a time. Each row says: this behaviour from the book lives in these phases, forms this trust, is governed by these duties, and is recorded by these Toolkits.',
            'Léela en horizontal, letra a letra. Cada fila dice: este comportamiento del libro vive en estas fases, forma esta confianza, se rige por estos deberes y queda registrado en estos Toolkits.'),
  rowHeader: T('Method step', 'Paso del método'),
  columns: [
    T('Phase moments', 'Momentos de fase'),
    T('Trust Stages', 'Etapas de Confianza'),
    T('Trust Standards', 'Estándares de Confianza'),
    T('Ethical Duties', 'Deberes Éticos'),
    T('Toolkits', 'Toolkits')
  ],
  provenanceLabel: T('Provenance', 'Procedencia'),
  rows: METHOD_TABLE.map(r => ({
    letter: r.letter,
    step: r.name,
    cells: [
      joinLeaf(r.phases,    (p, l) => `${p.n} ${p.name[l]}`),
      joinLeaf(r.stages,    (s, l) => `${s.n} ${s.name[l]}`),
      joinLeaf(r.standards, (s, l) => `${s.n} ${s.name[l]}`),
      joinLeaf(r.duties,    (d, l) => `${d.n} ${d.name[l]}`),
      joinLeaf(r.toolkits,  (t, l) => `#${t.n} ${t.name[l]}`)
    ],
    provenance: { en: `${r.book.en} ${r.mbok.en}`, es: `${r.book.es} ${r.mbok.es}` }
  })),
  gapsTitle: T('Where the six do not cover the eight',
               'Dónde los seis no cubren las ocho'),
  gaps: method.ARCHITECTURE_ONLY.map(a => ({ phase: canon.phaseLabel(a.phase), note: a.note }))
});

// ===========================================================================
// MODULE 1 — THE PSYCHOLOGY OF THE CONSULTATION
// Book: Prologue, Ch.1 (What she is really deciding), Ch.2 (Three entrances),
//       Ch.3 (Three Layers), Ch.4 (Five Drives).
// Canonical: Phase 1 Preparation, Phase 2 Connection; Trust Stages 1–2.
// ===========================================================================
const module1 = {
  id: 'm1', n: 1,
  phase: 'connection',
  accent: 'sage',
  title: T('The Psychology of the Consultation', 'La psicología de la consulta'),
  strapline: T('What she is actually deciding while you are describing treatments',
               'Qué está decidiendo ella en realidad mientras tú describes tratamientos'),
  summary: T(
    'Before a client evaluates a treatment, she evaluates you. This module establishes what is actually being decided in the room, the three ways clients enter it, the three layers underneath every request, and the five drives that bring someone to a clinic at all.',
    'Antes de evaluar un tratamiento, la clienta te evalúa a ti. Este módulo establece qué se decide realmente en la sala, las tres formas de entrar en ella, las tres capas que hay bajo cada petición y los cinco motores que llevan a alguien a una clínica.'),
  outcome: T(
      'Name the decision a client is actually making in the first minutes, and open with a question that does not evaluate her.',
      'Nombrar la decisión que la clienta está tomando de verdad en los primeros minutos y abrir con una pregunta que no la evalúe.'),
  source: T('The Beauty Sales Secrets — Prologue, Chapters 1, 3, 4 and 7, with the six-step method of Chapters 8 to 13; MBOK v0.17 Chapter 1 s1.16 (the eight phases), MIRROR Phases 1–2, Trust Stages 1–2',
            'The Beauty Sales Secrets — Prólogo, capítulos 1, 3, 4 y 7, con el método de seis pasos de los capítulos 8 a 13; MBOK v0.17 capítulo 1 s1.16 (las ocho fases), MIRROR Fases 1–2, Etapas de Confianza 1–2'),
  minutes: 63,
  status: 'available',
  lessons: [
    // -------------------------------------------------------------------
    {
      id: 'm1l1', n: 1, minutes: 10,
      treatments: [
                    {
                      name: T('Botulinum toxin — upper face', 'Toxina botulínica — tercio superior'),
                      price: T('€320, three areas', '320 €, tres zonas'),
                      why: T(
                             'A toxin appointment arrives pre-decided. She booked a procedure by its name, which makes it look as though the deciding is finished and only the injecting is left.',
                             'Una cita de toxina llega ya decidida. Ha reservado un procedimiento por su nombre, y eso hace parecer que lo decidido ya está decidido y que solo queda pinchar.'),
                      moment: T(
                                'She sits down and says she wants the forehead and the glabella, nothing else, and puts her phone face down as though the consultation were an administrative step between her and the needle.',
                                'Se sienta y dice que quiere la frente y el entrecejo, nada más, y deja el móvil boca abajo como si la consulta fuera un trámite entre ella y la aguja.'),
                      weak: {
                              line: T(
                                      '"Perfect — forehead and glabella, and we can leave the crow\'s feet for another time if you\'d rather."',
                                      '«Perfecto: frente y entrecejo, y si lo prefieres dejamos la patita de gallo para otra vez.»'),
                              cost: T(
                                      'Accepts her order and confirms that the appointment was about units and areas. What she has not said — that she has been asked twice this month whether something is wrong — never enters the room, and the only thing left to compare is your price against the clinic on Velázquez.',
                                      'Acepta su pedido y confirma que la cita iba de unidades y de zonas. Lo que no ha dicho —que este mes le han preguntado dos veces si le pasa algo— no llega a entrar en la sala, y lo único que queda por comparar es tu precio con el de la clínica de Velázquez.')
                            },
                      strong: {
                                line: T(
                                        '"Before we talk areas — what did you see that made you pick up the phone?"',
                                        '«Antes de hablar de zonas: ¿qué viste que te hizo coger el teléfono?»'),
                                gain: T(
                                        'Treats the booking as the end of a private argument rather than the beginning of an order. What she answers is rarely the forehead, and it is the thing she comes back for.',
                                        'Trata la reserva como el final de una discusión privada y no como el principio de un pedido. Lo que contesta casi nunca es la frente, y es aquello por lo que vuelve.')
                              }
                    },
                    {
                      name: T('Hyaluronic acid filler — lips', 'Relleno de ácido hialurónico — labios'),
                      price: T('€350 for 1 ml', '350 € por 1 ml'),
                      why: T(
                             'Lips are the one treatment she expects to be judged for wanting. The decision being made in front of you is whether she is allowed to admit she wants them.',
                             'Los labios son el único tratamiento por el que espera que la juzguen por quererlo. La decisión que se está tomando delante de ti es si le está permitido reconocer que los quiere.'),
                      moment: T(
                                'Before you have asked her anything, she says she wants something very natural, nothing obvious, and that she does not want to end up looking like anyone.',
                                'Antes de que le hayas preguntado nada, dice que quiere algo muy natural, que no se note, y que no quiere acabar pareciéndose a nadie.'),
                      weak: {
                              line: T(
                                      '"You won\'t end up looking overdone — natural is how we work here, and nobody would be able to tell."',
                                      '«No vas a acabar con cara de hecha: aquí trabajamos natural y nadie sería capaz de notarlo.»'),
                              cost: T(
                                      'Answers the fear before she has named it, which confirms that the fear was visible from the door. She spends the rest of the appointment managing your impression of her instead of telling you what she wants.',
                                      'Responde al miedo antes de que ella lo haya nombrado, lo que confirma que el miedo se veía desde la puerta. Se pasa el resto de la cita gestionando la impresión que te causa en lugar de contarte qué quiere.')
                            },
                      strong: {
                                line: T(
                                        '"You said that before I asked. Who were you expecting me to think you were?"',
                                        '«Eso lo has dicho antes de que preguntara. ¿Por quién esperabas que te tomara?»'),
                                gain: T(
                                        'Names the defence instead of soothing it. The answer is almost always a specific woman — a sister, a colleague, someone she follows — and that woman is the brief.',
                                        'Nombra la defensa en lugar de calmarla. La respuesta es casi siempre una mujer concreta —una hermana, una compañera, alguien a quien sigue— y esa mujer es el encargo.')
                              }
                    },
                    {
                      name: T(
                              'Laser hair removal — course of six',
                              'Depilación láser — bono de seis sesiones'),
                      price: T(
                               '€690 for six sessions, full legs and bikini',
                               '690 € el bono de seis, piernas enteras e ingles'),
                      why: T(
                             'Nobody arrives at a hair removal course ashamed, so this is the appointment where the deciding is assumed to be nothing more than diary and finance.',
                             'Nadie llega avergonzada a un bono de depilación, así que es la cita en la que se da por hecho que lo único que se decide es agenda y dinero.'),
                      moment: T(
                                'She is still at reception with her coat on, asking what the course costs and whether the sessions expire.',
                                'Sigue en recepción con el abrigo puesto, preguntando qué vale el bono y si las sesiones caducan.'),
                      weak: {
                              line: T(
                                      '"It\'s €690 for the six, and you have eighteen months to use them — shall I put you in for the first one?"',
                                      '«Son 690 € las seis y tienes dieciocho meses para gastarlas. ¿Te apunto ya a la primera?»'),
                              cost: T(
                                      'Both questions answered accurately, and a woman converted into a booking. She attends twice and stops, because nothing was ever established about why six Saturday mornings were worth giving up.',
                                      'Las dos preguntas contestadas con exactitud, y una mujer convertida en una reserva. Viene dos veces y lo deja, porque nunca se estableció por qué merecía la pena entregar seis sábados por la mañana.')
                            },
                      strong: {
                                line: T(
                                        '"I\'ll give you the number in a second. What made you look into this now rather than last summer?"',
                                        '«El número te lo doy ahora mismo. ¿Qué ha hecho que te lo mires ahora y no el verano pasado?»'),
                                gain: T(
                                        'A course is six appointments she has to keep choosing. The reason she started is the only thing that brings her to the fourth, and it has to be said out loud before it can do that work.',
                                        'Un bono son seis citas que tiene que seguir eligiendo. El motivo por el que empezó es lo único que la trae a la cuarta, y para que haga ese trabajo tiene que decirse en voz alta.')
                              }
                    }
                  ],
      conversation: {
                      setting: T(
                                 'First consultation, botulinum toxin, upper face, €320 for three areas. Minute two — her coat is still over the back of the chair.',
                                 'Primera consulta, toxina botulínica, tercio superior, 320 € tres zonas. Minuto dos: el abrigo sigue en el respaldo de la silla.'),
                      before: [
                                {
                                  who: 'client',
                                  line: T(
                                          '"I just want the forehead done. I don\'t want to end up looking frozen."',
                                          '«Solo quiero la frente. No quiero acabar con la cara congelada.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"That\'s the most common thing anyone says to me, and it\'s a fair thing to be careful about. We dose conservatively here, so you would keep your movement."',
                                          '«Es lo que más me dicen, y es razonable tener cuidado con eso. Aquí dosificamos de forma conservadora, así que conservarías el movimiento.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"That\'s what they told me at the last place as well."',
                                          '«Eso mismo me dijeron en el sitio anterior.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Then let\'s do it in stages. Three areas is €320, I\'d review you at two weeks, and if you want anything more we add it then rather than all at once."',
                                          '«Pues lo hacemos por fases. Tres zonas son 320 €, te reviso a las dos semanas y si quieres algo más lo añadimos entonces, no todo de golpe.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"And if I don\'t like it?"', '«¿Y si no me gusta?»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"It settles gradually and you\'d have the review in the diary. Honestly, almost everyone is more worried beforehand than afterwards."',
                                          '«Se va asentando poco a poco y tendrías la revisión en la agenda. Sinceramente, casi todo el mundo está más preocupada antes que después.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"Right. Let me think about it and I\'ll call you."',
                                          '«Vale. Me lo pienso y te llamo.»')
                                }
                              ],
                      after: [
                               {
                                 who: 'client',
                                 line: T(
                                         '"I just want the forehead done. I don\'t want to end up looking frozen."',
                                         '«Solo quiero la frente. No quiero acabar con la cara congelada.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Frozen. Is that somebody you know, or something you\'ve seen?"',
                                         '«Congelada. ¿Es alguien que conoces o algo que has visto por ahí?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"My sister-in-law. Nobody says anything to her, but everybody has noticed."',
                                         '«Mi cuñada. A ella nadie le dice nada, pero lo hemos notado todos.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"So the part you\'d hate isn\'t the forehead. It\'s people noticing and not saying."',
                                         '«Entonces lo que odiarías no es la frente. Es que la gente lo note y no lo diga.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"…Yes. I\'d rather nobody knew I\'d been at all."',
                                         '«…Sí. Preferiría que nadie supiera que he venido siquiera.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Then that\'s the brief, and it changes what I\'d do. Three areas at €320 is what most people have. For what you\'ve just told me I\'d do two, and we look again at two weeks before we touch the third."',
                                         '«Pues ese es el encargo, y cambia lo que haría. Tres zonas a 320 € es lo que se lleva la mayoría. Por lo que me acabas de contar, yo haría dos y volvemos a mirarlo a las dos semanas antes de tocar la tercera.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"You\'d do less than I asked for?"',
                                         '«¿Me harías menos de lo que te he pedido?»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"For what you told me, yes. Shall we put the review in the diary now, so it exists?"',
                                         '«Por lo que me has contado, sí. ¿Dejamos la revisión puesta en la agenda ahora, para que exista?»')
                               }
                             ],
                      whatChanged: T(
                                     'The first version treated "frozen" as an objection and answered it with technique, dose and staging — all accurate, all of it addressed to a worry she had already heard answered somewhere else. The second version treated the word as evidence and asked where it came from. Once the sister-in-law was in the room, the thing being bought stopped being three areas and became not being found out, which is a brief a practitioner can actually work to. Recommending less than she asked for is only available to the second version, and it is the moment she believes the price.',
                                     'La primera versión trató «congelada» como una objeción y la respondió con técnica, dosis y fases: todo exacto y todo dirigido a una inquietud cuya respuesta ella ya había oído en otro sitio. La segunda trató la palabra como una prueba y preguntó de dónde venía. Con la cuñada dentro de la sala, lo que se compraba dejó de ser tres zonas y pasó a ser que no la pillen, que sí es un encargo con el que se puede trabajar. Recomendar menos de lo que ha pedido solo está disponible en la segunda versión, y es el momento en que ella se cree el precio.'),
                      cost: T(
                              '€320 not taken, and the more expensive loss: she goes to the third clinic still carrying the sentence about her sister-in-law, and whoever finally asks about it gets the toxin, the review and every appointment after it.',
                              '320 € que no se cobran y una pérdida más cara: se va a la tercera clínica llevando todavía encima la frase de la cuñada, y quien por fin le pregunte por ella se queda con la toxina, con la revisión y con todas las citas siguientes.')
                    },
      title: T('What she is actually deciding', 'Qué está decidiendo ella en realidad'),
      objective: T('Name the decision the client is making in the first minutes — and why it is not about the treatment.',
                   'Nombrar la decisión que toma la clienta en los primeros minutos — y por qué no trata del tratamiento.'),
      provenance: {
        chapter: 1,
        principle: T('She did not come to be sold to. She came to be seen.',
                     'No vino a que le vendieran. Vino a que la vieran.'),
        phase: 'connection',
        trustStage: 'safety',
        standard: 1,
        duty: 2,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Answering the question you were asked is not carelessness — it is training doing its job. In every other corridor of the clinic somebody asks about a fee, an active ingredient, a recovery time, and giving the accurate reply is exactly what you are paid for. But an opening remark about the website, the price list or the brochure is almost never a request for data. It is a small, cheap test of whether it is safe to risk the expensive question. Reply with an excellent fee comparison and you have passed an exam nobody was setting, while the door she was knocking on closes behind you.',
            'Responder a la pregunta que te han hecho no es dejadez: es la formación haciendo su trabajo. En cualquier otro pasillo de la clínica alguien pregunta por una tarifa, por un activo, por el tiempo de recuperación, y dar la respuesta exacta es justo aquello por lo que te pagan. Pero un comentario de apertura sobre la web, la lista de tarifas o el folleto casi nunca es una petición de datos. Es una prueba pequeña y barata para ver si aquí es seguro arriesgarse con la pregunta cara. Contesta con una comparativa de tarifas impecable y habrás aprobado un examen que nadie te estaba poniendo, mientras la puerta a la que ella llamaba se cierra a tu espalda.'),
        sheIsThinking: T(
            'I have not decided yet whether to tell you why I am really here. I will float something small and watch where you take it.',
            'Todavía no he decidido si te voy a contar por qué estoy aquí de verdad. Lanzo algo pequeño y miro adónde lo llevas.'),
        ladder: {
          weak: {
            line:   T(
                '"They\'re actually very competitive for the technology we use."',
                '«En realidad son muy competitivos para la tecnología que usamos.»'),
            effect: T(
                'Defends a fee nobody attacked. She learns that you heard a haggle, and the reason for the booking goes back in her bag.',
                'Defiende una tarifa que nadie ha atacado. Ella aprende que has oído un regateo, y el motivo de la cita vuelve a guardarse en su bolso.')
          },
          average: {
            line:   T(
                '"Let me talk you through what\'s included in that."',
                '«Déjame que te explique qué incluye eso.»'),
            effect: T(
                'Competent, and it keeps both of you inside the tariff. A tariff is the one document in the building that can say nothing about why she picked up the phone.',
                'Es competente y os mantiene a las dos dentro del tarifario. El tarifario es el único documento del edificio que no puede decir nada sobre por qué ella cogió el teléfono.')
          },
          strong: {
            line:   T(
                '"That is real money, yes. Before we get to it — what made today the day you called?"',
                '«Sí, es dinero de verdad. Antes de llegar ahí: ¿qué ha hecho que hoy fuera el día en que llamaste?»'),
            effect: T(
                'Concedes the amount instead of arguing with it, then asks for the trigger. What comes back is usually a date, a photograph or an event — the thing the plan will have to fit around.',
                'Concede la cifra en lugar de discutirla y después pide el detonante. Lo que vuelve suele ser una fecha, una foto o un acontecimiento: aquello a lo que el plan tendrá que amoldarse.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Two consultations, one room', 'Dos consultas, una sala'),
          body: [
            T('There are always two consultations running at the same time. In the first, you assess a face, a condition, a history. In the second — the one that decides everything — she assesses whether it is safe to tell you the truth.',
              'Siempre hay dos consultas ocurriendo a la vez. En la primera, tú evalúas un rostro, una condición, un historial. En la segunda —la que lo decide todo— ella evalúa si es seguro contarte la verdad.'),
            T('Almost every consultation that ends in "I need to think about it" ended much earlier, in the second consultation, at a moment the practitioner never registered.',
              'Casi toda consulta que termina en «necesito pensarlo» terminó mucho antes, en la segunda consulta, en un momento que el profesional nunca registró.'),
            T('This is why technique alone does not convert. A client can believe you are excellent and still decline, because excellence was never the question she was answering.',
              'Por eso la técnica por sí sola no convierte. Una clienta puede creer que eres excelente y aun así declinar, porque la excelencia nunca fue la pregunta que ella estaba respondiendo.')
          ],
          diagram: 'two-consultations' },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Prologue', 'The Beauty Sales Secrets — Prólogo'),
          quote: T('She is not deciding about the treatment. She is deciding about you.',
                   'Ella no está decidiendo sobre el tratamiento. Está decidiendo sobre ti.'),
          note: T('The book opens here because everything else depends on it. The MIRROR architecture makes it operational: Trust Stage 1 (Safety) must exist before Discovery can produce anything true.',
                  'El libro comienza aquí porque todo lo demás depende de ello. La arquitectura MIRROR lo hace operativo: la Etapa de Confianza 1 (Seguridad) debe existir antes de que el Descubrimiento produzca algo verdadero.') },
        { kind: 'reveal',
          prompt: T('A client says this in minute two. What is she actually asking?',
                    'Una clienta dice esto en el minuto dos. ¿Qué está preguntando en realidad?'),
          client: T('"I saw your prices online. They\'re quite high, aren\'t they?"',
                    '«Vi vuestros precios en la web. Son bastante altos, ¿no?»'),
          guesses: [
            { id: 'a', text: T('She wants a discount.', 'Quiere un descuento.') },
            { id: 'b', text: T('She wants to know whether she can trust you before she invests anything.', 'Quiere saber si puede confiar en ti antes de invertir nada.') },
            { id: 'c', text: T('She cannot afford the treatment.', 'No puede permitirse el tratamiento.') }
          ],
          answer: 'b',
          truth: T('She is testing the room, not the number. Price raised in minute two is almost never a budget statement — it is a safety probe. She is checking whether you become defensive, whether you push, and whether she is about to be sold to.',
                   'Está probando la sala, no la cifra. El precio planteado en el minuto dos casi nunca es una declaración de presupuesto: es un sondeo de seguridad. Comprueba si te pones a la defensiva, si presionas y si está a punto de que le vendan algo.'),
          why: T('Answering the number here answers a question she did not ask. The MIRROR response is to acknowledge and return to understanding: "It\'s a fair thing to ask. Before I put a number to anything, can I understand what brought you in?"',
                 'Responder a la cifra aquí responde a una pregunta que ella no hizo. La respuesta MIRROR es reconocer y volver a comprender: «Es justo preguntarlo. Antes de poner cifra a nada, ¿puedo entender qué te ha traído hoy?»') },
        { kind: 'check',
          prompt: T('In MIRROR terms, what must exist before Discovery can produce reliable information?',
                    'En términos MIRROR, ¿qué debe existir antes de que el Descubrimiento produzca información fiable?'),
          options: [
            { id: 'a', text: T('A completed medical history form', 'Un historial médico completado') },
            { id: 'b', text: T('Trust Stage 1 — Safety', 'Etapa de Confianza 1 — Seguridad') },
            { id: 'c', text: T('A price range the client has accepted', 'Un rango de precios que la clienta haya aceptado') },
            { id: 'd', text: T('A clear clinical diagnosis', 'Un diagnóstico clínico claro') }
          ],
          answer: 'b',
          why: T('Information given without safety is edited information. The form gets filled in either way; what changes is whether what is written on it is true.',
                 'La información dada sin seguridad es información editada. El formulario se rellena igualmente; lo que cambia es si lo escrito en él es verdad.') },

        { kind: 'compare',
          prompt: T('Minute two. She says: "I don\'t want to look done." Two replies. Which one answers what she is actually deciding?',
                    'Minuto dos. Ella dice: «No quiero que se me note». Dos respuestas. ¿Cuál responde a lo que ella está decidiendo en realidad?'),
          a: { label: T('Answers the treatment', 'Responde al tratamiento'),
               text: T('"Nothing overfilled — I work very conservatively. We would start with half a syringe and see."',
                       '«Nada recargado: yo trabajo de forma muy conservadora. Empezaríamos con media jeringa y vemos».') },
          b: { label: T('Answers the decision', 'Responde a la decisión'),
               text: T('"What does \'done\' look like to you? I want to be sure I am avoiding the same thing you are."',
                       '«¿Qué es para ti que "se note"? Quiero asegurarme de que estoy evitando lo mismo que tú».') },
          answer: 'b',
          why: T('The first reply is accurate, reassuring, and answers a question about product. The second answers the question she actually asked — whether you and she mean the same thing by the word she is most afraid of. Chapter 1\'s claim is testable in the room: the reply that answers the real decision is the one after which she says more, not less. If she answers the first with "okay, that sounds fine", the consultation has just gone quiet and you will not find out why until Phase 7.',
                 'La primera respuesta es exacta, tranquilizadora y responde a una pregunta sobre producto. La segunda responde a la pregunta que ella hizo de verdad: si tú y ella entendéis lo mismo por la palabra que más teme. La afirmación del capítulo 1 se puede comprobar en la sala: la respuesta que atiende a la decisión real es aquella tras la cual ella dice más, no menos. Si responde a la primera con «vale, me parece bien», la consulta acaba de quedarse en silencio y no sabrás por qué hasta la Fase 7.') },

        { kind: 'choose',
          prompt: T('Marta, 46, has just sat down. Her first sentence is: "I\'ve read everything on your website, so you probably don\'t need to explain the basics." What is the first thing you say?',
                    'Marta, 46, acaba de sentarse. Su primera frase es: «Me he leído toda vuestra web, así que no hace falta que me expliques lo básico». ¿Qué es lo primero que dices?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Perfect — then let\'s go straight to it. Which of the treatments were you looking at?"',
                       '«Perfecto, entonces vamos directas al grano. ¿Cuál de los tratamientos estabas mirando?»'),
              why: T('You accepted her framing and moved to the catalogue. Reading a website is preparation, not a decision, and treating it as one means everything that follows is built on the version of herself she assembled for a stranger. The second consultation — the one where she decides about you — has not started.',
                     'Has aceptado su marco y has pasado al catálogo. Leerse una web es preparación, no una decisión, y tratarla como tal significa que todo lo que venga después se construirá sobre la versión de sí misma que montó para una desconocida. La segunda consulta, aquella en la que decide sobre ti, no ha empezado.') },
            { id: 'b', verdict: 'best',
              label: T('"Then I\'ll skip the brochure. Can I ask you something the website can\'t — what made you read it in the first place?"',
                       '«Entonces me salto el folleto. ¿Puedo preguntarte algo que la web no puede: qué te llevó a leerla?»'),
              why: T('You honoured the preparation in six words and then asked about the decision rather than the treatment. Nothing clinical has happened, and yet the only question in the room is now one she cannot answer from research. What she says next is the material the whole consultation will be built on.',
                     'Has honrado su preparación en seis palabras y luego has preguntado por la decisión y no por el tratamiento. No ha pasado nada clínico y, sin embargo, la única pregunta que hay en la sala es una que ella no puede responder desde lo que ha leído. Lo que diga a continuación es el material sobre el que se construirá toda la consulta.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Websites do simplify a lot, so let me take you through it properly — there\'s more to it than it looks."',
                       '«Las webs simplifican mucho, así que déjame explicártelo bien: tiene más miga de lo que parece».'),
              why: T('In one sentence you have told her that the work she did was inadequate and that the expertise in the room is yours. She will stop offering what she knows, and the consultation will proceed with you talking and her nodding — which is the shape of every consultation that ends in "I\'ll think about it".',
                     'En una frase le has dicho que el trabajo que hizo no valía y que el conocimiento de esta sala es tuyo. Dejará de ofrecer lo que sabe y la consulta seguirá contigo hablando y ella asintiendo, que es la forma de toda consulta que termina en «me lo voy a pensar».') }
          ],
          principle: T('Two consultations run at once. The one that decides the outcome is the one where she is assessing whether it is safe to tell you the truth — and it is answered by what you do with her first sentence, not with her file.',
                       'Hay dos consultas a la vez. La que decide el resultado es aquella en la que ella valora si es seguro contarte la verdad, y se responde con lo que haces con su primera frase, no con su ficha.'),
          retry: {
            note: T('The same decision, at the other end of a consultation.',
                    'La misma decisión, en el otro extremo de una consulta.'),
            prompt: T('End of a different appointment. Pilar, 52, has heard a clear, accurate, well-evidenced plan. She picks up her coat and says: "Thank you, that was all really clear. I\'ll think about it." What do you do with the next thirty seconds?',
                      'Final de otra cita. Pilar, 52, ha escuchado un plan claro, exacto y bien fundamentado. Recoge el abrigo y dice: «Gracias, ha quedado todo clarísimo. Me lo voy a pensar». ¿Qué haces con los siguientes treinta segundos?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Of course — take all the time you need. I\'ll email the plan tonight so you have it in writing."',
                         '«Claro, tómate el tiempo que necesites. Esta noche te mando el plan por correo para que lo tengas por escrito».'),
                why: T('Courteous, and it takes the sentence at face value. Those four words are the receipt for a consultation that informed her and never saw her; sending the same information again in writing is more of exactly what already failed. She will not think about it.',
                       'Cortés, y toma la frase al pie de la letra. Esas palabras son el recibo de una consulta que la informó y nunca la vio; enviarle la misma información otra vez por escrito es más de lo que ya ha fallado. No se lo va a pensar.') },
              { id: 'b', verdict: 'best',
                label: T('"Before you go — can I ask you the thing I should have asked at the beginning? What made today the day you came in?"',
                         '«Antes de que te vayas: ¿puedo preguntarte lo que debería haberte preguntado al principio? ¿Qué ha hecho que hoy fuera el día de venir?»'),
                why: T('Thirty seconds spent reopening the consultation at the place it never started. Whatever she answers, you find out whether the plan was aimed at her or at her skin — and the question is only askable while she is still standing in the room.',
                       'Treinta segundos empleados en reabrir la consulta por donde nunca empezó. Responda lo que responda, descubres si el plan iba dirigido a ella o a su piel, y la pregunta solo se puede hacer mientras siga de pie en la sala.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Is it the price? I have a little flexibility if that\'s the sticking point."',
                         '«¿Es el precio? Tengo algo de margen si es ahí donde está el problema».'),
                why: T('You named a reason she did not give and offered money against it. She now has a costless way to end the conversation, and you have taught her that the number was negotiable all along — which turns everything you said before it into a position rather than an opinion.',
                       'Has nombrado un motivo que ella no dio y has ofrecido dinero contra él. Ahora tiene una salida que no le cuesta nada, y le has enseñado que la cifra siempre fue negociable, lo que convierte todo lo dicho antes en una postura y no en una opinión.') }
            ],
            principle: T('"I\'ll think about it" is not a decision. It is what a client says when she was informed and not seen — and it stays answerable for about thirty seconds.',
                         '«Me lo voy a pensar» no es una decisión. Es lo que dice una clienta a la que se informó y no se vio, y sigue siendo respondible durante unos treinta segundos.'),
            changes: {
              axis: 'disclosure',
              detail: T('With her coat over her arm she answers it: her sister’s sixtieth is in November, and she has not stood in a photograph since her mother died. The plan you spent twenty minutes building was aimed at her skin, and you find that out while she is still in the room.',
                        'Con el abrigo en el brazo, responde: el sesenta cumpleaños de su hermana es en noviembre y no sale en una foto desde que murió su madre. El plan que has tardado veinte minutos en construir iba dirigido a su piel, y lo descubres mientras ella sigue en la sala.')
            }
          } }

      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm1l2', n: 2, minutes: 9,
      treatments: [
                    {
                      name: T('Chemical peel — course of four', 'Peeling químico — bono de cuatro'),
                      price: T(
                               '€480 for four sessions, or €140 single',
                               '480 € el bono de cuatro, o 140 € la sesión suelta'),
                      why: T(
                             'A peel is the cheapest way into a clinic, so it collects the quiet entrance: the woman who booked the smallest thing on the list to find out what the place is like.',
                             'Un peeling es la entrada más barata a una clínica, así que recoge la entrada silenciosa: la mujer que ha reservado lo más pequeño de la lista para ver cómo es el sitio.'),
                      moment: T(
                                'She comes in half a step behind you, keeps her bag on her lap, and says she only wants to try one and see.',
                                'Entra medio paso por detrás de ti, se deja el bolso en el regazo y dice que solo quiere probar una y ver.'),
                      weak: {
                              line: T(
                                      '"Of course — most people start with a single one. Though the four together is much better value, if you think you\'ll carry on."',
                                      '«Claro, la mayoría empieza con una suelta. Aunque el bono de cuatro sale mucho mejor de precio, si crees que vas a seguir.»'),
                              cost: T(
                                      'Warm, correct and commercially sensible, and it asks the quiet entrance to commit before it has decided it is safe. She takes the single session and does not rebook.',
                                      'Es cordial, correcto y comercialmente sensato, y le pide a la entrada silenciosa que se comprometa antes de haber decidido que está a salvo. Se lleva la sesión suelta y no vuelve a pedir cita.')
                            },
                      strong: {
                                line: T(
                                        '"One and see is exactly right. Leave your bag on the chair, we have the room for an hour."',
                                        '«Una y ver está perfecto. Deja el bolso en la silla, que la sala es nuestra durante una hora.»'),
                                gain: T(
                                        'Reads the entrance and answers the entrance. Ratifying her small step, and giving her back the hour, is the whole of M for this woman, and she is the one who buys the course at session two.',
                                        'Lee la entrada y responde a la entrada. Ratificar su paso pequeño y devolverle la hora es todo M para esta mujer, y es ella la que compra el bono en la segunda sesión.')
                              }
                    },
                    {
                      name: T('Tensor threads — mid-face', 'Hilos tensores — tercio medio'),
                      price: T(
                               '€1,400–1,600 depending on the number of threads',
                               '1.400–1.600 € según el número de hilos'),
                      why: T(
                             'Threads attract the confident entrance: she has read, priced and compared, and she arrives conducting the appointment.',
                             'Los hilos atraen la entrada segura: ha leído, ha mirado precios y ha comparado, y llega dirigiendo la cita ella.'),
                      moment: T(
                                'She sits before you have offered the chair, names the thread brand she has researched, and asks how many you would use and what you charge per thread.',
                                'Se sienta antes de que le ofrezcas la silla, nombra la marca de hilos que ha investigado y pregunta cuántos pondrías y cuánto cobras por hilo.'),
                      weak: {
                              line: T(
                                      '"You\'ve clearly done your homework. Let me take you through how we do it here and what\'s included in the €1,400."',
                                      '«Se nota que vienes con los deberes hechos. Te explico cómo lo hacemos aquí y qué incluyen los 1.400 €.»'),
                              cost: T(
                                      'Meets expertise with expertise, which is what she has set up, and the appointment becomes a comparison of two informed parties. She leaves able to quote you accurately to the next clinic.',
                                      'Responde a la competencia con competencia, que es justo lo que ella ha montado, y la cita se convierte en la comparación de dos partes informadas. Se va pudiendo citarte con exactitud en la clínica siguiente.')
                            },
                      strong: {
                                line: T(
                                        '"You already know more than most people who sit there. What are you not sure about?"',
                                        '«Ya sabes más que la mayoría de la gente que se sienta ahí. ¿De qué no estás segura?»'),
                                gain: T(
                                        'The confident entrance is a defence like any other, and the way to answer it is to grant the competence and ask for the gap. What she is unsure about is never the thread count.',
                                        'La entrada segura es una defensa como cualquier otra, y la forma de responderla es conceder la competencia y pedir el hueco. Aquello de lo que no está segura nunca es el número de hilos.')
                              }
                    },
                    {
                      name: T('Cryolipolysis — abdomen', 'Criolipólisis — abdomen'),
                      price: T(
                               '€760 for two applicators in one session',
                               '760 € dos aplicadores en una sesión'),
                      why: T(
                             'Body work collects the stormy entrance, because she has usually been told no, or been made to feel foolish, somewhere before she got to you.',
                             'El trabajo corporal recoge la entrada tormentosa, porque normalmente le han dicho que no, o la han hecho sentirse ridícula, en algún sitio antes de llegar a ti.'),
                      moment: T(
                                'She is talking before she is seated: the last place took her money, nothing happened, and she wants to know what makes this any different.',
                                'Está hablando antes de sentarse: en el sitio anterior le cobraron, no pasó nada, y quiere saber en qué se diferencia esto.'),
                      weak: {
                              line: T(
                                      '"I\'m sorry you had that experience. We work differently here — let me explain how our protocol is set up and what the two applicators cover."',
                                      '«Siento que tuvieras esa experiencia. Aquí trabajamos de otra manera; te explico cómo tenemos montado el protocolo y qué cubren los dos aplicadores.»'),
                              cost: T(
                                      'Apologises for another clinic and defends your own in the same breath, which is two moves too early. The storm has not finished, and a defence tells her it will not be allowed to.',
                                      'Se disculpa por otra clínica y defiende la tuya en la misma frase, que son dos movimientos demasiado pronto. La tormenta no ha terminado, y una defensa le dice que no se le va a permitir terminar.')
                            },
                      strong: {
                                line: T(
                                        '"Tell me what they promised you. I want to hear the whole thing before I say anything about us."',
                                        '«Cuéntame qué te prometieron. Quiero oírlo entero antes de decir nada de nosotros.»'),
                                gain: T(
                                        'The stormy entrance needs to finish, not to be met. Asking for the whole story spends the anger on the last clinic rather than on you, and she arrives at her own question about what is realistic.',
                                        'La entrada tormentosa necesita terminar, no que le respondan. Pedir la historia entera gasta el enfado en la clínica anterior y no en ti, y ella llega sola a su propia pregunta sobre qué es realista.')
                              }
                    }
                  ],
      title: T('Three entrances: quiet, confident, stormy', 'Tres entradas: silenciosa, segura, tormentosa'),
      objective: T('Recognise which of the three entrances a client is making, and adjust the opening without changing the method.',
                   'Reconocer cuál de las tres entradas hace una clienta y ajustar la apertura sin cambiar el método.'),
      provenance: {
        chapter: 7,
        principle: T('M — Make Safe — is not a script. It is a read-and-respond.',
                     'M —Crear Seguridad— no es un guion. Es leer y responder.'),
        phase: 'connection',
        trustStage: 'safety',
        standard: 1,
        duty: 2,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Most consultants have one opening they have polished over years, and it is a fine one: warm, unhurried, identical for everybody, which feels admirably even-handed. Treat every arrival the same way and nobody is short-changed. The difficulty is that the quiet arrival, the armoured arrival and the fast-talking arrival are three different nervous systems in three different states. Warmth that settles a hesitant woman lands on an armoured one as sales pressure; the respectful distance that unclenches the armoured woman leaves the hesitant one standing in the doorway with nothing at all to hold.',
            'La mayoría de las asesoras tiene una apertura pulida durante años, y es buena: cálida, sin prisa, idéntica para todo el mundo, lo que resulta admirablemente ecuánime. Si tratas igual a todas las que llegan, ninguna sale perdiendo. La dificultad es que la llegada silenciosa, la llegada blindada y la llegada acelerada son tres sistemas nerviosos distintos en tres estados distintos. La calidez que asienta a una mujer dubitativa aterriza sobre una mujer blindada como presión comercial; y la distancia respetuosa que afloja a la mujer blindada deja a la dubitativa plantada en la puerta sin absolutamente nada a lo que agarrarse.'),
        sheIsThinking: T(
            'I came in with a printout and a plan. The second you start correcting my homework I will finish this politely and go elsewhere.',
            'He venido con un papel impreso y un plan. En cuanto empieces a corregirme los deberes, termino esto con educación y me voy a otro sitio.'),
        ladder: {
          weak: {
            line:   T(
                '"Let me check a few things first — what people read online is often not what they need."',
                '«Déjame que compruebe un par de cosas primero: lo que se lee en internet no suele ser lo que se necesita.»'),
            effect: T(
                'Disputes her homework in the first minute. Armour thickens: she works from her printout for the rest of the hour and adds nothing to it.',
                'Le discute los deberes en el primer minuto. La armadura se espesa: trabaja desde su papel impreso durante el resto de la hora y no añade nada a él.')
          },
          average: {
            line:   T(
                '"Great — tell me which treatments you were looking at."',
                '«Muy bien, dime qué tratamientos estabas mirando.»'),
            effect: T(
                'Respectful and perfectly workable. It also adopts her printout as the agenda, so the hour stays inside the research she did alone at midnight.',
                'Es respetuoso y funciona perfectamente. También adopta su papel impreso como orden del día, así que la hora se queda dentro de la búsqueda que ella hizo sola a medianoche.')
          },
          strong: {
            line:   T(
                '"You came prepared. I respect that. I\'ll answer everything honestly — including what you don\'t need."',
                '«Has venido preparada. Lo respeto. Te voy a responder a todo con honestidad, incluido lo que no necesitas.»'),
            effect: T(
                'Chapter 7\'s own reply to Orly. It salutes the control rather than wrestling for it, and in the chapter the armour splits open a minute later with no one pushing at it.',
                'Es la respuesta que el capítulo 7 le da a Orly. Saluda al control en vez de forcejear con él, y en el capítulo la armadura se abre un minuto después sin que nadie la empuje.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The same method, three doors', 'El mismo método, tres puertas'),
          body: [
            T('Clients arrive through one of three doors. The quiet entrance: minimal speech, closed posture, answers that end early. The confident entrance: she names the treatment, the product, sometimes the dose. The stormy entrance: she arrives already carrying a complaint, a bad result, or an argument she has had elsewhere.',
              'Las clientas llegan por una de tres puertas. La entrada silenciosa: habla poco, postura cerrada, respuestas que terminan pronto. La entrada segura: nombra el tratamiento, el producto, a veces la dosis. La entrada tormentosa: llega ya con una queja, un mal resultado o una discusión que ha tenido en otro sitio.'),
            T('The entrance does not change the method. It changes only where you begin inside it. Quiet needs permission before questions. Confident needs respect before redirection. Stormy needs the story told fully before anything else happens.',
              'La entrada no cambia el método. Solo cambia dónde empiezas dentro de él. La silenciosa necesita permiso antes de preguntas. La segura necesita respeto antes de redirección. La tormentosa necesita que el relato se cuente entero antes de que ocurra nada más.'),
            T('The commonest error is treating the confident entrance as easy. She sounds decided, so the practitioner agrees and books. What she named is a surface request; her actual concern is still unspoken, and it surfaces later as an objection nobody can answer.',
              'El error más común es tratar la entrada segura como fácil. Suena decidida, así que el profesional acepta y agenda. Lo que ella nombró es una petición de superficie; su preocupación real sigue sin decirse y aflora luego como una objeción que nadie puede responder.')
          ],
          diagram: 'three-entrances' },
        { kind: 'choose',
          prompt: T('A client sits down and says, before you have spoken: "I want the same filler my friend had. Half a syringe, lips only, and I don\'t want to look done." Which opening does MIRROR support?',
                    'Una clienta se sienta y dice, antes de que tú hables: «Quiero el mismo relleno que se puso mi amiga. Media jeringa, solo labios, y no quiero parecer operada». ¿Qué apertura respalda MIRROR?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Perfect — half a syringe in the lips is exactly what most clients start with."',
                       '«Perfecto: media jeringa en labios es justo con lo que empieza la mayoría».'),
              why: T('You agreed with a surface request in four seconds. Nothing has been understood, so nothing you recommend later can be traced to anything she values. This is the confident entrance treated as an order form.',
                     'Has aceptado una petición de superficie en cuatro segundos. No se ha comprendido nada, así que nada de lo que recomiendes después podrá trazarse a algo que ella valore. Es la entrada segura tratada como un pedido.') },
            { id: 'b', verdict: 'best',
              label: T('"You\'ve clearly thought about this. Before we talk about syringes — tell me what you want people to notice, and what you\'d hate them to notice."',
                       '«Se nota que lo has pensado. Antes de hablar de jeringas: dime qué quieres que la gente note y qué odiarías que notara».'),
              why: T('You honoured her preparation (respect), then opened the layer beneath it. "What you\'d hate them to notice" is the identity layer, and she raised it herself with "I don\'t want to look done". You followed her own word.',
                     'Has honrado su preparación (respeto) y luego has abierto la capa que hay debajo. «Qué odiarías que notara» es la capa de identidad, y ella misma la planteó con «no quiero parecer operada». Has seguido su propia palabra.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Honestly, your friend\'s plan isn\'t right for your anatomy. Let me show you what you actually need."',
                       '«Sinceramente, el plan de tu amiga no es adecuado para tu anatomía. Déjame enseñarte lo que realmente necesitas».'),
              why: T('Correct clinically, catastrophic relationally. In the first minute you have overruled her preparation and her friend. She will stop offering information, and you will spend the rest of the consultation working from an edited version of the truth.',
                     'Clínicamente correcto, relacionalmente catastrófico. En el primer minuto has invalidado su preparación y a su amiga. Dejará de ofrecer información y pasarás el resto de la consulta trabajando con una versión editada de la verdad.') }
          ],
          principle: T('Trust Standard 1 — Create Psychological Safety. Redirection is possible later; it is not available in the first ninety seconds.',
                       'Estándar de Confianza 1 — Crear Seguridad Psicológica. La redirección es posible después; no está disponible en los primeros noventa segundos.'),
          retry: {
            note: T('Same lesson, a different door.', 'La misma lección, otra puerta.'),
            prompt: T('A quiet entrance. Nuria, 58, is sitting on the edge of the chair with her coat still on and her bag on her knees. She has answered two questions with four words each. You have nine minutes left. What do you do?',
                      'Una entrada silenciosa. Nuria, 58, está sentada en el borde de la silla, con el abrigo puesto y el bolso sobre las rodillas. Ha respondido a dos preguntas con cuatro palabras cada vez. Te quedan nueve minutos. ¿Qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Move to the structured clinical questions — she is not a talker, and a clear framework will be a relief to her.',
                         'Pasar a las preguntas clínicas estructuradas: no es de hablar mucho, y un marco claro le va a aliviar.'),
                why: T('Structure is genuinely kind to some clients and it answers a different problem. The bag on her knees says she has not yet decided it is safe to stay; a structured intake gives her four more questions to answer in four words each, and you will leave with a complete file and nothing in it.',
                       'La estructura es realmente amable con algunas clientas y responde a otro problema. El bolso sobre las rodillas dice que aún no ha decidido que sea seguro quedarse; una entrevista estructurada le da cuatro preguntas más para responder con cuatro palabras cada una, y saldrás con una ficha completa y vacía.') },
              { id: 'b', verdict: 'best',
                label: T('Slow down further. Ask nothing professional at all: "Take a moment. Did you come far today?" — and let her answer before anything else happens.',
                         'Bajar aún más el ritmo. No preguntar nada profesional: «Tómate un momento. ¿Vienes de lejos?», y dejar que responda antes de que pase nada más.'),
                why: T('Your slowness is the instrument. In the book\'s quiet-entrance dialogue the consultant asks about the day, not the face, and the visible result is the bag moving from the knees to the chair. That movement is your permission to begin; a question asked before it arrives is a question spent.',
                       'Tu lentitud es el instrumento. En el diálogo de entrada silenciosa del libro la profesional pregunta por el día, no por el rostro, y el resultado visible es que el bolso pasa de las rodillas a la silla. Ese movimiento es tu permiso para empezar; una pregunta hecha antes de que llegue es una pregunta gastada.') },
              { id: 'c', verdict: 'harmful',
                label: T('Name what you can see: "You seem quite nervous — honestly, there\'s nothing to be nervous about here."',
                         'Nombrar lo que ves: «Te noto bastante nerviosa; de verdad que aquí no hay nada por lo que estarlo».'),
                why: T('You diagnosed her interior four minutes after meeting her, and then corrected the feeling. Two costs arrive together: she now knows she is being read, and she has been told her nervousness is unwarranted. The coat stays on.',
                       'Has diagnosticado su interior cuatro minutos después de conocerla y luego has corregido el sentimiento. Llegan dos costes a la vez: ahora sabe que la están leyendo y le han dicho que su nerviosismo no tiene fundamento. El abrigo se queda puesto.') }
            ],
            principle: T('The quiet entrance needs warmth before questions, and the bag is the receipt. You are not waiting for her to relax — you are waiting for the evidence that she has.',
                         'La entrada silenciosa necesita calidez antes que preguntas, y el bolso es el recibo. No esperas a que se relaje: esperas la prueba de que ya lo ha hecho.'),
            changes: {
              axis: 'clientResponse',
              detail: T('For the first time she answers with more than four words — the bus, the change at the station, the granddaughter she collects on Wednesdays — and somewhere in the middle of it the bag goes from her knees to the chair beside her.',
                        'Por primera vez responde con más de cuatro palabras —el autobús, el transbordo, la nieta a la que recoge los miércoles— y en algún punto de esa respuesta el bolso pasa de sus rodillas a la silla de al lado.')
            }
          } },
        { kind: 'compare',
          prompt: T('Stormy entrance. She begins: "I had this done two years ago and it was a disaster. I don\'t even know why I\'m here." Which response opens the consultation?',
                    'Entrada tormentosa. Empieza: «Me hice esto hace dos años y fue un desastre. Ni sé por qué estoy aquí». ¿Qué respuesta abre la consulta?'),
          a: { label: T('Response A', 'Respuesta A'),
               text: T('"I\'m sorry that happened. We work very differently here — our protocols are much more conservative, and I think you\'ll see the difference immediately."',
                       '«Siento que ocurriera. Aquí trabajamos de forma muy distinta: nuestros protocolos son mucho más conservadores y creo que notarás la diferencia enseguida».') },
          b: { label: T('Response B', 'Respuesta B'),
               text: T('"Then let\'s start there and nowhere else. Tell me what happened — all of it, including the part where you found out something was wrong."',
                       '«Entonces empecemos por ahí y por ningún otro sitio. Cuéntame qué pasó, todo, incluida la parte en que descubriste que algo iba mal».') },
          answer: 'b',
          why: T('A defends the clinic against a story she has not finished telling. B lets the story finish, which is the only thing that lowers the guard. Note that B asks specifically for the moment of discovery — that is where the fear actually lives, and it is the detail she will otherwise carry silently into Phase 7.',
                 'A defiende a la clínica frente a un relato que ella no ha terminado de contar. B deja que el relato termine, que es lo único que baja la guardia. Fíjate en que B pide expresamente el momento del descubrimiento: ahí es donde vive el miedo, y es el detalle que si no llevará en silencio hasta la Fase 7.') },
        { kind: 'reflect',
          prompt: T('Which entrance do you personally handle worst — and what do you tend to do in the first thirty seconds that makes it worse?',
                    '¿Qué entrada gestionas peor personalmente y qué sueles hacer en los primeros treinta segundos que la empeora?'),
          placeholder: T('Be specific about the behaviour, not the feeling.', 'Sé específico sobre la conducta, no sobre el sentimiento.') }
      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm1l3', n: 3, minutes: 12,
      treatments: [
                    {
                      name: T('Skin boosters — face', 'Bioestimulación con ácido hialurónico — rostro'),
                      price: T('€650 for the two sessions', '650 € las dos sesiones'),
                      why: T(
                             'A booster request comes dressed in vocabulary she has learned — hydration, glow, quality — which is layer one wearing a lab coat and is very easy to answer on its own terms.',
                             'Una petición de bioestimulación viene vestida con vocabulario aprendido —hidratación, luminosidad, calidad de piel—, que es la capa uno con bata blanca y resulta facilísima de responder en sus propios términos.'),
                      moment: T(
                                'She says her skin looks dull and she wants that glass-skin thing, and she says it the way you say a line you have rehearsed.',
                                'Dice que tiene la piel apagada y que quiere ese efecto de piel de cristal, y lo dice como se dice una frase ensayada.'),
                      weak: {
                              line: T(
                                      '"Dullness is usually hydration. Two sessions of boosters at €650, four weeks apart, would be where I\'d start."',
                                      '«Lo apagado suele ser hidratación. Dos sesiones de bioestimulación, 650 €, separadas cuatro semanas, es por donde yo empezaría.»'),
                              cost: T(
                                      'Accurate, and it retires the conversation at the altitude where she already knew her lines. Layers two and three go home in her coat pocket, and the plan she buys is worth €650 rather than the year she was contemplating.',
                                      'Es exacto, y jubila la conversación a la altura en la que ella ya se sabía el papel. Las capas dos y tres se van a casa en el bolsillo del abrigo, y el plan que compra vale 650 € en lugar del año que estaba contemplando.')
                            },
                      strong: {
                                line: T(
                                        '"Dull to you, or dull in a particular photograph?"',
                                        '«Apagada para ti, ¿o apagada en una foto concreta?»'),
                                gain: T(
                                        'Rehearsed vocabulary collapses the moment it is asked for an occasion. There is nearly always a photograph, and the photograph belongs to layer two.',
                                        'El vocabulario ensayado se cae en cuanto se le pide una ocasión. Casi siempre hay una foto, y la foto pertenece a la capa dos.')
                              }
                    },
                    {
                      name: T(
                              'Fractional CO2 laser resurfacing — full face',
                              'Láser CO2 fraccionado — rostro completo'),
                      price: T(
                               '€950 per session, typically one to three',
                               '950 € la sesión, normalmente entre una y tres'),
                      why: T(
                             'A four-figure laser session makes layer one sound serious enough to act on, and the technical brief is so detailed that going underneath it feels like a digression.',
                             'Una sesión de láser de cuatro cifras hace que la capa uno suene lo bastante seria como para actuar sobre ella, y el encargo técnico es tan detallado que bajar por debajo parece irse por las ramas.'),
                      moment: T(
                                'She points at her cheeks and says she wants the texture sorted, she has downtime booked, and she has a week free in November.',
                                'Se señala los pómulos y dice que quiere arreglar la textura, que ya ha contado con los días de recuperación y que tiene libre una semana de noviembre.'),
                      weak: {
                              line: T(
                                      '"A week in November works well. One session at €950, and we\'d plan the downtime around those dates."',
                                      '«Una semana de noviembre va bien. Una sesión, 950 €, y planificamos la recuperación en torno a esas fechas.»'),
                              cost: T(
                                      'She has handed you a schedule and you have accepted it, so the appointment becomes logistics. Nobody finds out why a woman arranges a week of hiding in November, and that is the sentence the recommendation should have been built on.',
                                      'Te ha entregado un calendario y lo has aceptado, así que la cita se convierte en logística. Nadie averigua por qué una mujer organiza una semana de esconderse en noviembre, y esa es la frase sobre la que debía construirse la recomendación.')
                            },
                      strong: {
                                line: T(
                                        '"You\'ve already cleared a week. What\'s in December?"',
                                        '«Ya has despejado una semana. ¿Qué hay en diciembre?»'),
                                gain: T(
                                        'The diary is the tell. A cleared week is planning, and planning has a reason attached to it — a wedding, a return to work, a first Christmas on her own — which is layer three arriving without being asked for directly.',
                                        'La agenda es la pista. Una semana despejada es planificación, y la planificación lleva un motivo pegado —una boda, una vuelta al trabajo, unas primeras Navidades sola—, que es la capa tres llegando sin que se la pida de frente.')
                              }
                    }
                  ],
      title: T('The Three Layers', 'Las Tres Capas'),
      objective: T('Separate the surface request, the emotional reason and the identity concern in a single client sentence.',
                   'Separar la petición de superficie, la razón emocional y la preocupación de identidad en una sola frase de la clienta.'),
      provenance: {
        chapter: 4,
        principle: T('Most sellers hear only the surface layer; an excellent seller hears all three.',
                     'La mayoría de los vendedores solo oyen la capa de superficie; un vendedor excelente oye las tres.'),
        phase: 'discovery',
        trustStage: 'understanding',
        standard: 2,
        duty: 3,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'A request about refreshing tired-looking skin is a genuine clinical statement, and meeting it is genuinely useful: the condition is visible, the protocol is known, and she did ask. The flaw is not laziness but speed. Layer one is the only layer she has rehearsed — it is the line composed in the car park, edited twice on the way up the stairs, and designed to sound reasonable. A brisk, accurate reply retires the conversation at precisely the altitude where she already knew her lines.',
            'Una petición sobre refrescar una piel de aspecto cansado es una afirmación clínica auténtica, y atenderla sirve de verdad: la condición se ve, el protocolo se conoce y ella lo ha pedido. El fallo no es pereza, es velocidad. La capa uno es la única que ella ha ensayado: es la frase compuesta en el aparcamiento, corregida dos veces subiendo las escaleras y diseñada para sonar razonable. Una respuesta ágil y exacta jubila la conversación justo a la altura en la que ella ya se sabía el papel.'),
        sheIsThinking: T(
            'That was the presentable version. Whether you get the other two depends on where this one lands.',
            'Esa era la versión presentable. Que te lleves las otras dos depende de dónde aterrice esta.'),
        ladder: {
          weak: {
            line:   T(
                '"Refreshed — so a brightening course and a good SPF. Let me show you the protocol."',
                '«Refrescada: entonces un programa iluminador y una buena protección solar. Te enseño el protocolo.»'),
            effect: T(
                'Layer one, answered and shut. She nods at the protocol, and layers two and three go home with her exactly as they arrived.',
                'La capa uno, respondida y cerrada. Ella asiente al protocolo, y las capas dos y tres se van a casa con ella exactamente igual que llegaron.')
          },
          average: {
            line:   T(
                '"How long has it been looking like that?"',
                '«¿Cuánto tiempo lleva viéndose así?»'),
            effect: T(
                'A fair enquiry, and it requests more history of the complexion. She replies with a season, and the altitude has not changed.',
                'Es una indagación justa y pide más historia del cutis. Ella responde con una estación del año, y la altura no ha cambiado.')
          },
          strong: {
            line:   T(
                '"What would it feel like to look in the mirror and see exactly what you want to see?"',
                '«¿Qué sensación te daría mirarte al espejo y ver exactamente lo que quieres ver?»'),
            effect: T(
                'Chapter 4\'s own one-layer-deeper question. It asks for a feeling in front of a mirror rather than a history of a complexion, and the reply belongs to layer three.',
                'Es la pregunta de una capa más abajo del propio capítulo 4. Pide una sensación frente al espejo en lugar de una historia del cutis, y la respuesta pertenece a la capa tres.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Every request has three floors', 'Toda petición tiene tres plantas'),
          body: [
            T('The surface layer is what she asks for: a treatment, an area, a price. The emotional layer is why it matters now: an event, a photograph, a comment, a change she has noticed. The identity layer is what she is protecting: who she is, how she is recognised, what she is afraid of becoming.',
              'La capa de superficie es lo que pide: un tratamiento, una zona, un precio. La capa emocional es por qué importa ahora: un acontecimiento, una fotografía, un comentario, un cambio que ha notado. La capa de identidad es lo que protege: quién es, cómo la reconocen, en qué teme convertirse.'),
            T('Consultations are lost at the surface and won at the identity layer. A recommendation built only on the surface is technically defensible and emotionally irrelevant — and irrelevant recommendations are declined politely.',
              'Las consultas se pierden en la superficie y se ganan en la capa de identidad. Una recomendación construida solo sobre la superficie es técnicamente defendible y emocionalmente irrelevante; y las recomendaciones irrelevantes se rechazan con educación.'),
            T('You do not reach the identity layer by asking about identity. You reach it by staying with her sentence one question longer than feels comfortable.',
              'A la capa de identidad no se llega preguntando por la identidad. Se llega quedándose con su frase una pregunta más de lo que resulta cómodo.')
          ],
          diagram: 'three-layers' },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 4', 'The Beauty Sales Secrets — Capítulo 4'),
          quote: T('Nobody comes to a clinic for a syringe. They come because something they used to recognise has changed.',
                   'Nadie va a una clínica por una jeringa. Van porque algo que solían reconocer ha cambiado.'),
          note: T('This maps directly to Toolkit #3, the Emotional Drivers Map: field 1 is the surface, field 2 is the emotional reason, and field 6 — her exact words — is where the identity layer survives your paraphrase.',
                  'Esto se corresponde directamente con el Toolkit #3, el Mapa de Motores Emocionales: el campo 1 es la superficie, el campo 2 es la razón emocional y el campo 6 —sus palabras exactas— es donde la capa de identidad sobrevive a tu paráfrasis.') },
        { kind: 'signal',
          avatar: 'teresa',
          name: T('Opening two minutes — Teresa, 51', 'Primeros dos minutos — Teresa, 51'),
          client: T('"I want to refresh a little. Tiredness around the eyes." Then, after a pause nobody filled: "Since I took early retirement, every day I\'m at home. And I look in the mirror and I see an old woman. I\'m not old — in my head I\'m thirty-five. My face doesn\'t say that."',
                    '«Quiero refrescarme un poco. Cansancio alrededor de los ojos». Y luego, tras una pausa que nadie llenó: «Desde que me prejubilé, todos los días estoy en casa. Y me miro al espejo y veo a una mujer mayor. No soy mayor: en mi cabeza tengo treinta y cinco. Mi cara no dice eso».'),
          prompt: T('Three layers are in front of you. Where does each one begin?',
                    'Tienes tres capas delante. ¿Dónde empieza cada una?'),
          notice: [
            T('The first sentence is the whole of the surface: an area and an adjective. Nine words, and a recommendation could be written from it this afternoon.',
              'La primera frase es toda la superficie: una zona y un adjetivo. Nueve palabras, y esta misma tarde podría escribirse una recomendación con ellas.'),
            T('The second sentence is not about eyes. "Every day I\'m at home" is the emotional layer — the change that made this the year it mattered rather than the year before.',
              'La segunda frase no va de ojos. «Todos los días estoy en casa» es la capa emocional: el cambio que hizo que importara este año y no el anterior.'),
            T('"I\'m not old — in my head I\'m thirty-five" is the identity layer, and she reached it herself inside two minutes, because nobody interrupted the pause between the two sentences.',
              '«No soy mayor: en mi cabeza tengo treinta y cinco» es la capa de identidad, y llegó a ella sola en dos minutos, porque nadie interrumpió la pausa entre las dos frases.'),
            T('Notice what she did not say. She never said she wanted to look younger. She said her face does not say what she is — and a plan aimed at youth answers a request she did not make.',
              'Fíjate en lo que no dijo. En ningún momento dijo que quisiera parecer más joven. Dijo que su cara no dice lo que ella es, y un plan orientado a la juventud responde a una petición que no hizo.')
          ] },
        { kind: 'sort',
          prompt: T('Read the client\'s sentence, then assign each fragment to its layer.',
                    'Lee la frase de la clienta y asigna cada fragmento a su capa.'),
          client: T('"I want something for these lines around my mouth. My daughter got engaged and there will be photographs everywhere — and I look tired in all of them. I don\'t mind ageing, I just don\'t want to look like I\'ve given up."',
                    '«Quiero algo para estas líneas alrededor de la boca. Mi hija se ha comprometido y habrá fotos por todas partes, y en todas salgo cansada. No me importa envejecer, solo no quiero parecer que me he rendido».'),
          buckets: [
            { id: 'surface', label: T('Surface — what she asks for', 'Superficie — lo que pide') },
            { id: 'emotional', label: T('Emotional — why now', 'Emocional — por qué ahora') },
            { id: 'identity', label: T('Identity — what she protects', 'Identidad — lo que protege') }
          ],
          items: [
            { id: 'i1', text: T('"something for these lines around my mouth"', '«algo para estas líneas alrededor de la boca»'), bucket: 'surface' },
            { id: 'i2', text: T('"my daughter got engaged — there will be photographs"', '«mi hija se ha comprometido, habrá fotos»'), bucket: 'emotional' },
            { id: 'i3', text: T('"I look tired in all of them"', '«en todas salgo cansada»'), bucket: 'emotional' },
            { id: 'i4', text: T('"I don\'t want to look like I\'ve given up"', '«no quiero parecer que me he rendido»'), bucket: 'identity' },
            { id: 'i5', text: T('"I don\'t mind ageing"', '«no me importa envejecer»'), bucket: 'identity' }
          ],
          why: T('Note that two fragments belong to identity, and they are the two a busy practitioner skips because they sound like small talk. "I don\'t mind ageing" is a boundary: it tells you that a plan aimed at looking younger will be refused. "Given up" is the word your recommendation must eventually answer — not "lines".',
                 'Fíjate en que dos fragmentos pertenecen a la identidad, y son los dos que un profesional con prisa se salta porque suenan a conversación de cortesía. «No me importa envejecer» es un límite: te dice que un plan orientado a parecer más joven será rechazado. «Rendida» es la palabra que tu recomendación deberá responder, no «líneas».') },
        { kind: 'spot',
          prompt: T('An identity layer opened in this exchange and one turn shut it again. Which turn?',
                    'En este intercambio se abrió una capa de identidad y una intervención la volvió a cerrar. ¿Cuál?'),
          lines: [
            { who: 'client', text: T('"I\'d like something around the eyes. I look tired the whole time."',
                                     '«Querría algo para los ojos. Tengo cara de cansada todo el rato».') },
            { who: 'you', text: T('"Before we get to that — what made you ring this month rather than last year?"',
                                  '«Antes de eso: ¿qué hizo que llamaras este mes y no el año pasado?»') },
            { who: 'client', text: T('"My son moved to Valencia in March. The flat is very quiet now. I catch myself in the hall mirror and I don\'t look like a woman who has anything on."',
                                     '«Mi hijo se fue a Valencia en marzo. El piso está ahora muy callado. Me pillo en el espejo de la entrada y no tengo cara de mujer con planes».') },
            { who: 'you', text: T('"That is so common once they leave home, honestly. And the good news is that tired eyes are one of the most straightforward things we do — shall I show you what I\'d suggest?"',
                                  '«Eso es tan común cuando se van de casa, de verdad. Y la buena noticia es que los ojos cansados son de lo más sencillo que hacemos. ¿Te enseño lo que propondría?»') },
            { who: 'client', text: T('"Yes. Go on, then."', '«Sí. Venga, cuéntame».') }
          ],
          answerIndex: 3,
          why: T('Turn 2 was right and it worked: her next sentence carries the emotional layer and the identity layer in one breath, because "a woman who has anything on" is the thing she is protecting. Turn 4 then does two harmful things in one friendly sentence. "So common once they leave home" files her sentence under a category, and categories are not what anyone treats. Then it answers the request she made ninety seconds earlier, which tells her the last thing she said was not the business of this appointment. A layer stays open for roughly one turn. Hers was spent on reassurance and a diary.',
                 'La intervención 2 estuvo bien y funcionó: su frase siguiente lleva la capa emocional y la de identidad de una tirada, porque «mujer con planes» es lo que ella protege. La intervención 4 hace entonces dos cosas dañinas en una sola frase amable. «Tan común cuando se van de casa» archiva su frase en una categoría, y las categorías no se tratan. Y después responde a la petición que hizo noventa segundos antes, lo que le dice que lo último que ha contado no era el asunto de esta cita. Una capa se queda abierta más o menos una intervención. La suya se gastó en consuelo y en una agenda.'),
          principle: T('You do not reach the identity layer by asking about identity. You reach it by staying with her sentence one question longer than feels comfortable — and every layer she opens shuts again if the next thing she hears is a treatment.',
                       'A la capa de identidad no se llega preguntando por la identidad. Se llega quedándose con su frase una pregunta más de lo que resulta cómodo, y toda capa que ella abre se vuelve a cerrar si lo siguiente que oye es un tratamiento.') },
        { kind: 'choose',
          prompt: T('Same client. Which single question moves from her emotional layer to her identity layer?',
                    'La misma clienta. ¿Qué única pregunta pasa de su capa emocional a su capa de identidad?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"When is the wedding? We can plan the timeline backwards from the date."',
                       '«¿Cuándo es la boda? Podemos planificar el calendario hacia atrás desde la fecha».'),
              why: T('Useful and premature. It converts her story into logistics, which closes the layer you had just been offered. Ask it later, in Phase 5.',
                     'Útil y prematuro. Convierte su relato en logística, lo que cierra la capa que acababan de ofrecerte. Pregúntalo después, en la Fase 5.') },
            { id: 'b', verdict: 'best',
              label: T('"You said you don\'t want to look like you\'ve given up. What would giving up look like, to you?"',
                       '«Has dicho que no quieres parecer que te has rendido. ¿Qué aspecto tendría rendirse, para ti?»'),
              why: T('You returned her own word and asked her to define it. This is the reflection form the book calls staying with the sentence: it produces her private definition, and that definition is the criterion your recommendation will be judged against.',
                     'Le has devuelto su propia palabra y le has pedido que la defina. Es la forma de reflejo que el libro llama quedarse con la frase: produce su definición privada, y esa definición es el criterio con el que se juzgará tu recomendación.') },
            { id: 'c', verdict: 'weak',
              label: T('"So the main concern is the perioral lines — is that the only area bothering you?"',
                       '«Entonces la preocupación principal son las líneas periorales, ¿es la única zona que te molesta?»'),
              why: T('This is an audit of the surface. It is the question most consultations run on, and it is why most recommendations sound like a catalogue.',
                     'Es una auditoría de la superficie. Es la pregunta sobre la que funcionan la mayoría de las consultas, y por eso la mayoría de las recomendaciones suenan a catálogo.') }
          ],
          principle: T('Reflection form 2 — return the client\'s own word as a question. It is the cheapest instrument in the method and the most consistently skipped.',
                       'Forma de reflejo 2 — devolver la palabra de la clienta como pregunta. Es el instrumento más barato del método y el que más sistemáticamente se omite.'),
          retry: {
            note: T('A different client, and an emotional layer that has just opened on its own.',
                    'Otra clienta, y una capa emocional que acaba de abrirse sola.'),
            prompt: T('Shirley, 42, arrived with a written list of three treatments she had researched. You asked what started the research; she said it just felt like it was time. You asked what changed. She has just said: "My husband… he left. Three months ago." What do you say next?',
                      'Shirley, 42, llegó con una lista escrita de tres tratamientos que había investigado. Le preguntaste qué inició esa búsqueda; dijo que simplemente le pareció que era el momento. Le preguntaste qué había cambiado. Acaba de decir: «Mi marido… se fue. Hace tres meses». ¿Qué dices ahora?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"I\'m sorry. Let\'s take the list you brought and go through the three properly — you\'ve clearly done the work."',
                         '«Lo siento. Cojamos la lista que has traído y repasemos los tres como es debido: se nota que lo has trabajado».'),
                why: T('Kind, and it hands her back the list. She put the list down in order to say that sentence; picking it up for her tells her the sentence was a detour and the three treatments are the business. Everything from here is priced.',
                       'Amable, y le devuelve la lista. Ella soltó la lista para poder decir esa frase; recogérsela le dice que la frase era un desvío y que el asunto son los tres tratamientos. A partir de aquí todo se tarifica.') },
              { id: 'b', verdict: 'best',
                label: T('"That\'s a huge shift." — then nothing. And when she speaks again: "What did you feel when you looked at yourself?"',
                         '«Eso es un cambio enorme». — y nada más. Y cuando vuelva a hablar: «¿Qué sentiste cuando te miraste?»'),
                why: T('Two moves and neither of them is about her face. The first acknowledges the size of what she said without interpreting it; the second asks about the looking rather than the lines, which is the step from what happened to who she is now. In the book\'s dialogue this is the exact question after which she says she no longer knows who that woman is.',
                       'Dos movimientos y ninguno va de su cara. El primero reconoce el tamaño de lo que ha dicho sin interpretarlo; el segundo pregunta por el mirarse y no por las líneas, que es el paso de lo que pasó a quién es ahora. En el diálogo del libro es justo la pregunta tras la cual ella dice que ya no sabe quién es esa mujer.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Three months. That explains a lot — a change like that shows in the face very quickly, and it\'s very treatable."',
                         '«Tres meses. Eso explica mucho: un cambio así se nota en la cara muy rápido, y es muy tratable».'),
                why: T('You converted her divorce into a clinical finding and then reassured her about it. She will agree, because disagreeing would mean explaining herself to someone who has just demonstrated that he was listening for a symptom.',
                       'Has convertido su divorcio en un hallazgo clínico y luego la has tranquilizado al respecto. Estará de acuerdo, porque discrepar implicaría explicarse ante alguien que acaba de demostrar que escuchaba buscando un síntoma.') }
            ],
            principle: T('The identity layer is not reached by asking about identity. It is reached by asking about the looking rather than the face — and by leaving enough silence that the second question gets an honest answer.',
                         'A la capa de identidad no se llega preguntando por la identidad. Se llega preguntando por el mirarse y no por el rostro, y dejando silencio suficiente para que la segunda pregunta reciba una respuesta honesta.'),
            changes: {
              axis: 'disclosure',
              detail: T('She puts the researched list back in her bag and says the sentence it was covering: that she knew who she was as his wife and as a mother, and does not yet know who she is on her own.',
                        'Guarda en el bolso la lista que traía investigada y dice la frase que esa lista tapaba: que sabía quién era como esposa y como madre, y que todavía no sabe quién es por su cuenta.')
            }
          } }
      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm1l4', n: 4, minutes: 9,
      treatments: [
                    {
                      name: T(
                              'Facial radiofrequency — course of six',
                              'Radiofrecuencia facial — bono de seis'),
                      price: T(
                               '€1,140 for the course of six, €210 single',
                               '1.140 € el bono de seis, 210 € la sesión suelta'),
                      why: T(
                             'A six-session course is bought by Drive 3, the life transition, far more often than by anything on her face: it is a commitment to a calendar, and women commit to calendars when something has just ended.',
                             'Un bono de seis sesiones lo compra el Motor 3, el cambio vital, mucho más a menudo que cualquier cosa de su cara: es un compromiso con un calendario, y una mujer se compromete con un calendario cuando algo acaba de terminar.'),
                      moment: T(
                                'She asks whether the sessions can be Thursday mornings, and mentions in passing that Thursdays are free now.',
                                'Pregunta si las sesiones pueden ser los jueves por la mañana, y menciona de paso que los jueves ahora los tiene libres.'),
                      weak: {
                              line: T(
                                      '"Thursday mornings are usually our quietest, so that works well. Shall I block the six now so you keep the same slot?"',
                                      '«Los jueves por la mañana solemos tenerlos tranquilos, así que va bien. ¿Te bloqueo ya las seis para que conserves la misma hora?»'),
                              cost: T(
                                      'Efficient, and it walks past the only sentence she volunteered. Thursdays being free now is the transition, and a course bought without it is a course she cancels in week four when the diary refills.',
                                      'Es eficiente, y pasa de largo por la única frase que ella ha ofrecido. Que los jueves ahora los tenga libres es el cambio vital, y un bono comprado sin eso es un bono que cancela en la cuarta semana, cuando la agenda se vuelve a llenar.')
                            },
                      strong: {
                                line: T('"Free now — what changed?"', '«Ahora libres. ¿Qué ha cambiado?»'),
                                gain: T(
                                        'Two words, and the drive comes out on its own. Whatever emptied her Thursdays is what the course is really for, and naming it is what gets her to session six.',
                                        'Dos palabras, y el motor sale solo. Lo que le haya vaciado los jueves es para lo que sirve de verdad el bono, y nombrarlo es lo que la lleva hasta la sexta sesión.')
                              }
                    },
                    {
                      name: T(
                              'Hyaluronic acid filler — mid-face',
                              'Relleno de ácido hialurónico — tercio medio'),
                      price: T('€780 for 2 ml', '780 € por 2 ml'),
                      why: T(
                             'Volume work sits on Drive 4, the fear of disappearing, and Drive 4 is the one drive that never says its own name because saying it out loud sounds vain.',
                             'El volumen se apoya en el Motor 4, el miedo a desaparecer, y el Motor 4 es el único que jamás dice su propio nombre, porque decirlo en voz alta suena a vanidad.'),
                      moment: T(
                                'She says she looks tired in photographs even when she is not tired, and then laughs at herself for minding.',
                                'Dice que en las fotos sale cansada aunque no lo esté, y luego se ríe de sí misma por darle importancia.'),
                      weak: {
                              line: T(
                                      '"You\'re allowed to mind. Photographs flatten the mid-face, and two millilitres there would give you back some of that."',
                                      '«Tienes derecho a que te importe. Las fotos aplanan el tercio medio, y dos mililitros ahí te devolverían parte de eso.»'),
                              cost: T(
                                      'Kind, technically right, and it takes her self-deprecating laugh at face value. The laugh was a test of whether wanting this is permitted here, and answering with anatomy leaves the test unanswered.',
                                      'Es amable, técnicamente correcto, y se toma en serio su risa de autodesprecio. La risa era una prueba para ver si aquí está permitido querer esto, y responder con anatomía deja la prueba sin contestar.')
                            },
                      strong: {
                                line: T(
                                        '"You laughed. Who taught you this was a silly thing to want?"',
                                        '«Te has reído. ¿Quién te enseñó que esto es una tontería de querer?»'),
                                gain: T(
                                        'Goes at the permission rather than the millilitres. Drive 4 can only be worked with once she is allowed to say she is frightened of becoming invisible, and the laugh is the door to it.',
                                        'Va al permiso y no a los mililitros. Con el Motor 4 solo se puede trabajar cuando ella tiene permiso para decir que le da miedo volverse invisible, y la risa es la puerta.')
                              }
                    },
                    {
                      name: T('PRP — facial, course of three', 'PRP — facial, tres sesiones'),
                      price: T('€780 for three sessions', '780 € las tres sesiones'),
                      why: T(
                             'Drawing her own blood makes PRP the treatment women describe as natural, and that word almost always belongs to Drive 1 — identity, wanting to be herself rather than someone modified.',
                             'Sacarse su propia sangre hace que el PRP sea el tratamiento que las mujeres describen como natural, y esa palabra casi siempre pertenece al Motor 1: la identidad, querer ser ella y no alguien retocado.'),
                      moment: T(
                                'She says she does not want anything injected into her that is not hers, and that she would rather do things slowly.',
                                'Dice que no quiere que le metan nada que no sea suyo, y que prefiere hacer las cosas despacio.'),
                      weak: {
                              line: T(
                                      '"That\'s exactly why people choose this one — it\'s your own plasma, and three sessions spread over three months is as gradual as it gets."',
                                      '«Por eso justamente la gente elige este: es tu propio plasma, y tres sesiones repartidas en tres meses es lo más gradual que hay.»'),
                              cost: T(
                                      'Agrees with her enthusiastically and closes the subject. Her sentence was about who she is willing to become, not about plasma, and a practitioner who agrees too quickly never finds out who that is.',
                                      'Le da la razón con entusiasmo y cierra el tema. Su frase iba sobre en quién está dispuesta a convertirse, no sobre plasma, y quien le da la razón demasiado rápido nunca averigua quién es esa.')
                            },
                      strong: {
                                line: T(
                                        '"Not yours. What would it mean if you did something that wasn\'t?"',
                                        '«Que no sea tuyo. ¿Qué significaría que te hicieras algo que no lo fuera?»'),
                                gain: T(
                                        'Holds the word she chose and asks what is behind it. Drive 1 answers in the first person — she does not want to be a woman who has had things done — and every recommendation afterwards has to fit that sentence.',
                                        'Sostiene la palabra que ha elegido y pregunta qué hay detrás. El Motor 1 responde en primera persona —no quiere ser una mujer que se ha hecho cosas— y toda recomendación posterior tiene que caber en esa frase.')
                              }
                    }
                  ],
      title: T('The Five Drives', 'Los Cinco Motores'),
      objective: T('Identify which drive brought this client in — and why a recommendation aimed at the wrong drive is declined politely.',
                   'Identificar qué motor ha traído a esta clienta y por qué una recomendación dirigida al motor equivocado se rechaza con educación.'),
      provenance: {
        chapter: 4,
        principle: T('Behind every cosmetic purchase five deep drives are working, and most of them are invisible.',
                     'Detrás de cada compra estética actúan cinco motores profundos, y la mayoría son invisibles.'),
        phase: 'discovery',
        trustStage: 'understanding',
        standard: 2,
        duty: 2,
        toolkit: 3
      },
      depth: {
        whyItGoesWrong: T(
            'Frightened people get comforted. That is a decent human being operating on a lifetime of evidence that comfort is what distress requires, and in the treatment room, mid-procedure, it is entirely correct. Chapter 4 refuses to treat dread of ageing that way. It files that dread as one of the five drives — as fuel, not as damage. Soothe it and you have drained the tank she arrived with, and the chapter is blunt about the sequel: women who buy because somebody calmed them down are the ones who ring up afterwards regretting it.',
            'A quien está asustado se le consuela. Eso es una persona decente operando con toda una vida de pruebas de que el consuelo es lo que pide la angustia y, en la cabina, a mitad de un procedimiento, es del todo correcto. El capítulo 4 se niega a tratar así el pavor a envejecer. Archiva ese pavor como uno de los cinco motores: como combustible, no como daño. Si lo calmas, le has vaciado el depósito con el que llegó, y el capítulo es tajante sobre la secuela: las mujeres que compran porque alguien las tranquilizó son las que después llaman arrepentidas.'),
        sheIsThinking: T(
            'I did not come here to be told I look fine. I came to find out whether anything can still be done, and I am frightened of the answer.',
            'No he venido a que me digan que estoy bien. He venido a averiguar si todavía se puede hacer algo, y me da miedo la respuesta.'),
        ladder: {
          weak: {
            line:   T(
                '"Don\'t worry, treatments today are amazing — you\'ll look great."',
                '«No te preocupes, los tratamientos de hoy son increíbles, vas a estar estupenda.»'),
            effect: T(
                'Chapter 4\'s own example of what does not work. It retires the topic and substitutes a promise for a decision. She agrees pleasantly and reserves nothing.',
                'Es el ejemplo del propio capítulo 4 de lo que no funciona. Jubila el tema y sustituye una decisión por una promesa. Ella se muestra de acuerdo con amabilidad y no reserva nada.')
          },
          average: {
            line:   T(
                '"A lot of women say exactly the same thing at this stage."',
                '«Muchas mujeres dicen exactamente lo mismo en esta etapa.»'),
            effect: T(
                'Normalising, and it does lift the weight for a moment. It also dissolves her into a cohort, and being one of a cohort is what she has been afraid of.',
                'Normaliza, y durante un momento le quita peso de verdad. También la disuelve dentro de un colectivo, y ser una más del colectivo es justo lo que le da miedo.')
          },
          strong: {
            line:   T(
                '"You\'re telling me something is shifting and you don\'t want to lose who you are. You\'re not going to lose yourself — you\'re going to choose how you feel in the next chapter. That choice is in your hands."',
                '«Me estás diciendo que algo se está moviendo y que no quieres perder quién eres. No vas a perderte: vas a elegir cómo te sientes en el próximo capítulo. Esa elección está en tus manos.»'),
            effect: T(
                'Chapter 4\'s empowerment wording, set against its reassurance wording. Dread becomes an act of choosing, and choosers are the women the chapter records coming back and sending friends.',
                'Es la formulación de empoderamiento del capítulo 4, puesta frente a su formulación de consuelo. El pavor se convierte en un acto de elegir, y las que eligen son las mujeres que el capítulo registra volviendo y enviando amigas.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Five reasons anyone books', 'Cinco razones por las que alguien pide cita'),
          body: [
            T('Recognition — she no longer recognises the face in photographs. Control — something is changing and she wants a hand on it. Belonging — a group, a partner, a workplace where she feels increasingly visible in the wrong way. Renewal — a life transition: divorce, promotion, illness recovered from. Relief — a specific discomfort she wants gone.',
              'Reconocimiento — ya no reconoce el rostro de las fotos. Control — algo está cambiando y quiere poner una mano encima. Pertenencia — un grupo, una pareja, un entorno laboral donde se siente cada vez más visible del modo equivocado. Renovación — una transición vital: divorcio, ascenso, una enfermedad superada. Alivio — una molestia concreta que quiere que desaparezca.'),
            T('Two clients can ask for the identical treatment from opposite drives, and the recommendation that satisfies one will offend the other. Relief accepts an efficient single procedure. Recognition experiences that same efficiency as being processed.',
              'Dos clientas pueden pedir el mismo tratamiento desde motores opuestos, y la recomendación que satisface a una ofenderá a la otra. Alivio acepta un procedimiento único y eficiente. Reconocimiento vive esa misma eficiencia como ser procesada.')
          ],
          diagram: 'five-drives' },
        { kind: 'signal',
          avatar: 'nuria',
          name: T('First exchange — Ronit, 45', 'Primer intercambio — Ronit, 45'),
          client: T('"What brought you here?" — "I don\'t know. A friend dragged me here." — "What do you feel you need?" — "Nothing, honestly. It was a crazy year. We moved, my husband changed jobs, the kids started a new school. I was last on the list." Then, after a pause: "You know what? I don\'t need a cream. I need someone to tell me I still exist. That I didn\'t disappear into all the chaos."',
                    '«¿Qué te trae por aquí?» — «No sé. Una amiga me ha arrastrado». — «¿Qué sientes que necesitas?» — «Nada, de verdad. Ha sido un año de locos. Nos mudamos, mi marido cambió de trabajo, los niños empezaron en un colegio nuevo. Yo era la última de la lista». Y tras una pausa: «¿Sabes qué? No necesito una crema. Necesito que alguien me diga que sigo existiendo. Que no he desaparecido en todo ese caos».'),
          prompt: T('Which of the five drives is this, and where exactly does it announce itself?',
                    '¿Cuál de los cinco motores es este y en qué punto exacto se anuncia?'),
          notice: [
            T('Her first two answers are refusals: she does not know, and she needs nothing. Both are true, and neither is the drive.',
              'Sus dos primeras respuestas son negativas: no sabe y no necesita nada. Las dos son ciertas y ninguna es el motor.'),
            T('"I was last on the list" is the whole of it. She is not describing her skin; she is describing a year in which every decision belonged to somebody else.',
              '«Yo era la última de la lista» lo contiene todo. No describe su piel: describe un año en el que todas las decisiones fueron de otros.'),
            T('This is Renewal, not Relief. Nothing on her face changed — what changed is who was doing the choosing, and one act chosen by her is what restores the sense of control.',
              'Esto es Renovación, no Alivio. En su cara no cambió nada: lo que cambió es quién elegía, y un solo acto elegido por ella es lo que devuelve la sensación de control.'),
            T('What she is buying is not a product. It is a moment in which somebody stopped and said: I see you. Offer an efficient single procedure here and you have answered a request she never made.',
              'Lo que compra no es un producto. Es un momento en el que alguien se detuvo y le dijo: te veo. Ofrécele aquí un procedimiento único y eficiente y habrás respondido a una petición que nunca hizo.')
          ] },
        { kind: 'match',
          prompt: T('Match each client sentence to the drive underneath it.',
                    'Empareja cada frase de clienta con el motor que hay debajo.'),
          left: [
            { id: 'q1', text: T('"I stopped putting photos of myself up. That\'s not like me."', '«He dejado de subir fotos mías. Eso no es propio de mí».') },
            { id: 'q2', text: T('"My mother\'s neck went first, and I can see it starting."', '«A mi madre le empezó por el cuello, y ya veo que me empieza».') },
            { id: 'q3', text: T('"I\'m the oldest one in every meeting now, and I feel it."', '«Ahora soy la mayor en todas las reuniones, y se me nota».') },
            { id: 'q4', text: T('"The divorce is finished. I want to look like the next part of my life."', '«El divorcio está cerrado. Quiero parecerme a la siguiente parte de mi vida».') },
            { id: 'q5', text: T('"This one spot. It catches the light and I hate it."', '«Esta mancha. Le da la luz y la odio».') }
          ],
          right: [
            { id: 'recognition', text: T('Recognition', 'Reconocimiento') },
            { id: 'control', text: T('Control', 'Control') },
            { id: 'belonging', text: T('Belonging', 'Pertenencia') },
            { id: 'renewal', text: T('Renewal', 'Renovación') },
            { id: 'relief', text: T('Relief', 'Alivio') }
          ],
          pairs: { q1: 'recognition', q2: 'control', q3: 'belonging', q4: 'renewal', q5: 'relief' },
          why: T('Q2 is the one most often misread as Relief. She is not describing a current complaint; she is describing a trajectory she has watched in someone else. A recommendation for what is visible today will feel to her like being told her real concern is imaginary.',
                 'La Q2 es la que más se malinterpreta como Alivio. No describe una molestia actual: describe una trayectoria que ha visto en otra persona. Una recomendación para lo que hoy es visible le sonará a que le dicen que su preocupación real es imaginaria.') },
        { kind: 'check',
          prompt: T('A Renewal-driven client is offered a single efficient procedure with a clear price and a fast appointment. Most likely outcome?',
                    'A una clienta movida por Renovación se le ofrece un procedimiento único, eficiente, con precio claro y cita rápida. ¿Resultado más probable?'),
          options: [
            { id: 'a', text: T('She accepts — efficiency respects her time.', 'Acepta: la eficiencia respeta su tiempo.') },
            { id: 'b', text: T('She defers politely and does not rebook.', 'Aplaza con educación y no vuelve a pedir cita.') },
            { id: 'c', text: T('She negotiates the price.', 'Negocia el precio.') }
          ],
          answer: 'b',
          why: T('Renewal is a story about a threshold. Offering a transaction where she brought a transition is not offensive enough to argue with — which is precisely why it produces a polite deferral rather than an objection you could have worked with.',
                 'Renovación es un relato sobre un umbral. Ofrecer una transacción donde ella trajo una transición no es lo bastante ofensivo como para discutirlo, y por eso mismo produce un aplazamiento educado en lugar de una objeción con la que podrías haber trabajado.') },
        { kind: 'choose',
          prompt: T('A Control-driven client asks: "How long will this last?" What is she actually asking?',
                    'Una clienta movida por Control pregunta: «¿Cuánto me va a durar?». ¿Qué está preguntando en realidad?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Three to four months, then we top it up." — answer the question she asked.',
                       '«Tres o cuatro meses, y luego lo retocamos». — responder a la pregunta que hizo.'),
              why: T('Accurate and it answers the duration. For a Control client the question underneath is whether she will be able to stop, and an answer that ends in "then we top it up" tells her she will not. Expect a deferral you cannot trace.',
                     'Exacto y responde a la duración. Para una clienta de Control la pregunta de debajo es si podrá parar, y una respuesta que termina en «luego lo retocamos» le dice que no. Espera un aplazamiento que no podrás rastrear.') },
            { id: 'b', verdict: 'best',
              label: T('"Three to four months — and when it wears off you are exactly where you are now. Nothing accumulates and nothing is committed."',
                       '«Tres o cuatro meses, y cuando pase estarás exactamente donde estás ahora. No se acumula nada y no compromete a nada».'),
              why: T('You answered the duration and the real question in one sentence: reversibility. A Control-driven client is asking whether the change can be undone, and telling her the exit exists is what allows her to enter.',
                     'Has respondido a la duración y a la pregunta real en una frase: la reversibilidad. Una clienta movida por Control pregunta si el cambio puede deshacerse, y decirle que la salida existe es lo que le permite entrar.') },
            { id: 'c', verdict: 'weak',
              label: T('"Most clients find they want to maintain it once they see the difference."',
                       '«La mayoría de las clientas quiere mantenerlo cuando ve la diferencia».'),
              why: T('A prediction about her future desires, delivered to the one drive that is most alert to being managed. She hears a subscription, and she is right to.',
                     'Una predicción sobre sus deseos futuros, dirigida al motor más alerta a que lo manejen. Ella oye una suscripción, y tiene razón.') }
          ],
          principle: T('The drive changes the question underneath an identical sentence. Answer the drive, not only the words.',
                       'El motor cambia la pregunta que hay bajo una frase idéntica. Responde al motor, no solo a las palabras.'),
          retry: {
            note: T('A different client, and the drive nobody names out loud.',
                    'Otra clienta, y el motor que nadie nombra en voz alta.'),
            prompt: T('Pilar, 49, has been in the room ninety seconds. She says: "I feel silly even being here. I mean — spending money on my face? There are more important things." What do you say?',
                      'Pilar, 49, lleva noventa segundos en la sala. Dice: «Me siento ridícula por estar aquí siquiera. O sea, ¿gastarme dinero en mi cara? Hay cosas más importantes». ¿Qué dices?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"You\'d be surprised how many women say exactly that. It\'s completely normal to feel that way."',
                         '«Te sorprendería cuántas mujeres dicen justo eso. Es completamente normal sentirse así».'),
                why: T('Normalising answers the embarrassment and misses the drive. She did not ask whether other women feel silly; she asked, without asking, whether she is allowed to matter. A category cannot answer that, and she will move on politely.',
                       'Normalizar responde a la vergüenza y se salta el motor. No preguntó si otras mujeres se sienten ridículas: preguntó, sin preguntar, si tiene derecho a contar. Una categoría no puede responder a eso, y ella pasará página con educación.') },
              { id: 'b', verdict: 'best',
                label: T('Let the sentence sit for a moment. Then, with warmth: "And what if you do matter?"',
                         'Dejar que la frase se asiente un momento. Luego, con calidez: «¿Y si tú sí importas?»'),
                why: T('It is a question rather than a reassurance, which is exactly why it cannot be argued with. It returns the thing underneath "there are more important things" — the ranking she has put herself at the bottom of — and hands the decision about it back to her. Expect a long silence, and do not fill it.',
                       'Es una pregunta y no una tranquilización, y justo por eso no se puede discutir. Devuelve lo que hay bajo «hay cosas más importantes» —el orden en el que ella se ha colocado la última— y le devuelve la decisión al respecto. Espera un silencio largo y no lo llenes.') },
              { id: 'c', verdict: 'harmful',
                label: T('"There are more important things, absolutely — but looking after yourself makes you better for everyone else too."',
                         '«Hay cosas más importantes, por supuesto, pero cuidarte también te hace estar mejor para los demás».'),
                why: T('You agreed with the ranking and then justified her on somebody else\'s behalf. She is now permitted to spend money on her face because it serves her family, which leaves the belief that she does not count entirely intact and attaches a condition to it.',
                       'Has dado por bueno ese orden y luego la has justificado en nombre de otros. Ahora tiene permiso para gastar en su cara porque eso sirve a su familia, lo que deja intacta la creencia de que ella no cuenta y además le añade una condición.') }
            ],
            principle: T('The fifth drive is the simple wish for somebody to look at her and see a person. It is answered with a question, not with permission handed down.',
                         'El quinto motor es el deseo simple de que alguien la mire y vea a una persona. Se responde con una pregunta, no con un permiso concedido desde arriba.'),
            changes: {
              axis: 'clientResponse',
              detail: T('She stops apologising for being there. After a long pause she says it has been a long time since anyone asked her that — and the rest of the appointment is no longer spent establishing that she is allowed to want something.',
                        'Deja de disculparse por estar allí. Tras una pausa larga dice que hace mucho que nadie le preguntaba eso, y el resto de la cita ya no se gasta en establecer que tiene derecho a querer algo.')
            }
          } }
      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm1l5', n: 5, minutes: 11,
      treatments: [
                    {
                      name: T(
                              'Botulinum toxin — one area, first time',
                              'Toxina botulínica — una zona, primera vez'),
                      price: T('€190 for a single area', '190 € una sola zona'),
                      why: T(
                             'A first-time toxin appointment is the shortest consultation in the clinic, so the ninety seconds are a larger proportion of it than anywhere else, and the temptation to use them on paperwork is enormous.',
                             'Una primera cita de toxina es la consulta más corta de la clínica, así que los noventa segundos pesan más aquí que en ningún otro sitio, y la tentación de gastarlos en papeleo es enorme.'),
                      moment: T(
                                'She comes through the door and the consent form and the photograph are both waiting on the desk, because the appointment is twenty minutes and the paperwork has to happen.',
                                'Cruza la puerta y el consentimiento y la foto ya esperan sobre la mesa, porque la cita es de veinte minutos y el papeleo hay que hacerlo.'),
                      weak: {
                              line: T(
                                      '"Come in, have a seat — if you can fill this in while I get the camera, we\'ll have more time for the actual consultation."',
                                      '«Pasa, siéntate. Si me vas rellenando esto mientras cojo la cámara, nos queda más tiempo para la consulta en sí.»'),
                              cost: T(
                                      'Buys four minutes and spends the only four that were structurally irreplaceable. She fills in a form with her coat on, and the appointment establishes itself as a procedure she is being processed through.',
                                      'Compra cuatro minutos y gasta los únicos cuatro estructuralmente irreemplazables. Rellena un formulario con el abrigo puesto, y la cita se establece como un procedimiento por el que la están pasando.')
                            },
                      strong: {
                                line: T(
                                        '"Come in. Leave your coat, the form can wait — first time here, isn\'t it?"',
                                        '«Pasa. Deja el abrigo, el papel puede esperar. Es tu primera vez aquí, ¿verdad?»'),
                                gain: T(
                                        'Costs ninety seconds and buys the rest of the appointment. She answers a first-time question honestly, and honesty in the first ninety seconds is the only kind that survives to the end.',
                                        'Cuesta noventa segundos y compra el resto de la cita. Contesta con sinceridad a una pregunta de primera vez, y la sinceridad de los primeros noventa segundos es la única que sobrevive hasta el final.')
                              }
                    },
                    {
                      name: T(
                              'Melasma programme — six months',
                              'Programa de pigmentación (melasma) — seis meses'),
                      price: T(
                               '€1,200–1,400 across six months, home care included',
                               '1.200–1.400 € repartidos en seis meses, con cuidado domiciliario incluido'),
                      why: T(
                             'A pigmentation programme is a long relationship, and a woman with melasma has usually been looked at closely by strangers for years before she reaches your door.',
                             'Un programa de pigmentación es una relación larga, y una mujer con melasma lleva normalmente años siendo mirada de cerca por desconocidos antes de llegar a tu puerta.'),
                      moment: T(
                                'She walks in already turning her cheek towards the window, presenting the side, before anyone has said hello.',
                                'Entra ya girando la mejilla hacia la ventana, ofreciendo el lado, antes de que nadie haya dicho hola.'),
                      weak: {
                              line: T(
                                      '"Come over to the light for a moment and let me have a proper look at what we\'re dealing with."',
                                      '«Acércate un momento a la luz y déjame ver bien con qué estamos tratando.»'),
                              cost: T(
                                      'Accepts the invitation she offered, which is the clinically sensible thing, and makes the first ninety seconds an inspection. She has spent years being inspected, and now the clinic does it too.',
                                      'Acepta la invitación que ella ha ofrecido, que es lo clínicamente sensato, y convierte los primeros noventa segundos en una inspección. Lleva años siendo inspeccionada, y ahora la clínica también lo hace.')
                            },
                      strong: {
                                line: T(
                                        '"Sit down first. We\'ll get to your skin, we have six months — how was the traffic on Príncipe de Vergara?"',
                                        '«Siéntate primero. Ya llegaremos a la piel, tenemos seis meses. ¿Qué tal el tráfico en Príncipe de Vergara?»'),
                                gain: T(
                                        'Declines the inspection without refusing her. The programme lasts half a year, and the first ninety seconds decide whether she will describe her own skin to you in month three or keep presenting the good side.',
                                        'Rechaza la inspección sin rechazarla a ella. El programa dura medio año, y los primeros noventa segundos deciden si en el tercer mes te describirá su propia piel o seguirá ofreciendo el lado bueno.')
                              }
                    }
                  ],
      conversation: {
                      setting: T(
                                 'Reception, 9:40. She has come for a first laser hair removal session, course of six, full legs and bikini, €690. The first ninety seconds.',
                                 'Recepción, 9:40. Viene a la primera sesión de depilación láser, bono de seis, piernas enteras e ingles, 690 €. Los primeros noventa segundos.'),
                      before: [
                                {
                                  who: 'client',
                                  line: T(
                                          '"Hi — sorry, I think I\'m a bit early."',
                                          '«Hola. Perdona, creo que llego un poco pronto.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"No problem at all. If you want to take a seat, I\'ll get your file up and we\'ll get you started as soon as the room is free."',
                                          '«Sin problema. Si quieres siéntate, abro tu ficha y empezamos en cuanto se libere la sala.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"Thanks. Do I need to do anything first?"',
                                          '«Gracias. ¿Tengo que hacer algo antes?»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Just this consent and the test patch form — take your time with them, and I\'ll call you through in five minutes."',
                                          '«Solo este consentimiento y la hoja de la prueba. Tómate tu tiempo con ellos y te aviso en cinco minutos.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"Okay."', '«Vale.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Perfect. And the six sessions are on the account, so there\'s nothing to pay today — it\'s all settled."',
                                          '«Perfecto. Y las seis sesiones ya están en la cuenta, así que hoy no hay nada que pagar: está todo arreglado.»')
                                }
                              ],
                      after: [
                               {
                                 who: 'client',
                                 line: T(
                                         '"Hi — sorry, I think I\'m a bit early."',
                                         '«Hola. Perdona, creo que llego un poco pronto.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"You\'re not early, you\'re on time for me. Come through — the room\'s ours, we don\'t need the waiting area."',
                                         '«Pronto no llegas, para mí llegas a la hora. Pasa, que la sala es nuestra y no hace falta la sala de espera.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"Thanks. Do I need to do anything first?"',
                                         '«Gracias. ¿Tengo que hacer algo antes?»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Sit down and tell me one thing first: is this your first time with laser anywhere, or have you done it before?"',
                                         '«Siéntate y cuéntame una cosa primero: ¿es tu primera vez con láser en cualquier sitio o ya lo has hecho antes?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"I did three sessions somewhere else about four years ago and then I stopped going."',
                                         '«Hice tres sesiones en otro sitio hace unos cuatro años y luego dejé de ir.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Then that\'s worth two minutes before we do anything. What made you stop at three?"',
                                         '«Pues eso merece dos minutos antes de hacer nada. ¿Qué hizo que lo dejaras en la tercera?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"Honestly, they never remembered who I was. I felt like a leg."',
                                         '«La verdad, nunca se acordaban de quién era. Me sentía como una pierna.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Understood. You\'ll have me for all six, and I\'ll know what we did last time without looking it up. The paperwork can wait until after — let\'s start."',
                                         '«Entendido. Me vas a tener a mí las seis, y sabré qué hicimos la vez anterior sin mirarlo. El papeleo puede esperar a después. Empezamos.»')
                               }
                             ],
                      whatChanged: T(
                                     'Nothing in the first version is wrong. The greeting is polite, the consent is necessary, the account is in order, and a practitioner running eight sessions a day has every reason to use the waiting minutes for paperwork. What the second version noticed is that the ninety seconds were going to be spent either way, and that a form filled in the waiting area establishes exactly the thing this client abandoned a course over four years ago. Two minutes of asking produced the one sentence — she felt like a leg — that predicts whether she reaches session six, and it arrived before the first pulse rather than after the third cancellation.',
                                     'En la primera versión no hay nada mal. El saludo es correcto, el consentimiento es necesario, la cuenta está en orden y un profesional que hace ocho sesiones al día tiene todas las razones para aprovechar los minutos de espera en papeleo. Lo que ve la segunda versión es que los noventa segundos se iban a gastar igualmente, y que un formulario rellenado en la sala de espera establece exactamente aquello por lo que esta clienta abandonó un bono hace cuatro años. Dos minutos de preguntar produjeron la única frase —se sentía como una pierna— que predice si llega a la sexta sesión, y llegó antes del primer disparo y no después de la tercera cancelación.'),
                      cost: T(
                              'The €690 was already paid, so the first version loses nothing today. It loses session four onwards, the course she would have bought for her underarms, and the friend she would have sent in October.',
                              'Los 690 € ya estaban pagados, así que la primera versión hoy no pierde nada. Pierde de la cuarta sesión en adelante, el bono de axilas que habría comprado y la amiga que habría mandado en octubre.')
                    },
      title: T('The first ninety seconds', 'Los primeros noventa segundos'),
      objective: T('Identify the four behaviours that withdraw safety before the consultation has started.',
                   'Identificar las cuatro conductas que retiran la seguridad antes de que la consulta haya empezado.'),
      provenance: {
        chapter: 7,
        principle: T('The consultation does not start when you ask the first question. It starts the moment she comes through the door.',
                     'La consulta no empieza cuando haces la primera pregunta. Empieza en el momento en que ella cruza la puerta.'),
        phase: 'connection',
        trustStage: 'safety',
        standard: 1,
        duty: 3,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Closing the previous woman\'s record before greeting the next one is conscientious. The notes matter, medico-legally they matter a great deal, and the keyboard is being used to protect somebody who has only just left the building. What Chapter 7 exposes is the cost of those three seconds at the monitor. They are the three seconds in which the arriving woman works out whether she is worth interrupting for, and she settles that question from the top of a bowed head, long before the friendly words arrive.',
            'Cerrar la historia de la mujer anterior antes de saludar a la siguiente es ser concienzuda. Las notas importan, jurídicamente importan muchísimo, y el teclado se está usando para proteger a alguien que acaba de salir del edificio. Lo que el capítulo 7 destapa es el coste de esos tres segundos delante del monitor. Son los tres segundos en los que la mujer que entra calcula si merece que la interrumpan por ella, y resuelve esa cuestión mirando una cabeza agachada, mucho antes de que lleguen las palabras amables.'),
        sheIsThinking: T(
            'She is in the middle of something. I will be quick and not take up more room than I have to.',
            'Está en mitad de algo. Voy a ser rápida y a no ocupar más espacio del imprescindible.'),
        ladder: {
          weak: {
            line:   T(
                '"One second, I\'m just finishing this and I\'ll be with you."',
                '«Un segundo, termino esto y estoy contigo.»'),
            effect: T(
                'Michal\'s habit, recorded in Chapter 7. Three seconds at the monitor, and the visitor files herself under interruption. Everything she offers afterwards is abbreviated.',
                'Es la costumbre de Michal, registrada en el capítulo 7. Tres segundos frente al monitor, y la visitante se archiva a sí misma bajo la etiqueta de interrupción. Todo lo que ofrece después va abreviado.')
          },
          average: {
            line:   T(
                '"Hi, come in, have a seat — I\'ll be right with you."',
                '«Hola, pasa, siéntate, ahora mismo estoy contigo.»'),
            effect: T(
                'An improvement: she is received. Your hands are still in the previous appointment, though, and she settles into a room where nothing has paused on her account.',
                'Es una mejora: la recibes. Aun así, tus manos siguen en la cita anterior y ella se instala en una sala donde nada se ha detenido por su causa.')
          },
          strong: {
            line:   T(
                '"Hi. I\'m glad you came. I\'m Michal."',
                '«Hola. Me alegro de que hayas venido. Soy Michal.»'),
            effect: T(
                'Chapter 7\'s instruction to Michal, word for word: monitor dark, on your feet, before anything else. The record can be written at six o\'clock. The greeting has no second take.',
                'Es la instrucción que el capítulo 7 le da a Michal, palabra por palabra: monitor apagado, de pie, antes que ninguna otra cosa. La historia se puede escribir a las seis. El saludo no tiene segunda toma.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Safety is withdrawn, not granted', 'La seguridad se retira, no se concede'),
          body: [
            T('You do not build safety in ninety seconds. You either avoid removing it or you remove it. The four common removals: assessing her face before she has spoken, naming a treatment before she has finished her reason, reassuring her about something she has not yet said she fears, and correcting her language.',
              'No construyes seguridad en noventa segundos. O evitas retirarla o la retiras. Las cuatro retiradas habituales: evaluar su rostro antes de que hable, nombrar un tratamiento antes de que ella termine su razón, tranquilizarla sobre algo que aún no ha dicho que teme y corregir su lenguaje.'),
            T('Each is well-intentioned. Each tells the client the same thing: this room has already decided what I am.',
              'Cada una es bienintencionada. Cada una le dice a la clienta lo mismo: esta sala ya ha decidido lo que soy.')
          ] },
        { kind: 'spot',
          prompt: T('One line withdrew safety. Which one?', 'Una línea retiró la seguridad. ¿Cuál?'),
          lines: [
            { who: 'you', text: T('"Come in, take a seat wherever you like."', '«Pasa, siéntate donde prefieras».') },
            { who: 'client', text: T('"Thank you. I\'ve been meaning to come for about a year, honestly."', '«Gracias. Llevo como un año queriendo venir, la verdad».') },
            { who: 'you', text: T('"A year — that\'s very common. And don\'t worry, whatever it is, it\'s almost certainly easier to treat than you think."', '«Un año, es muy habitual. Y no te preocupes, sea lo que sea, seguro que es más fácil de tratar de lo que crees».') },
            { who: 'client', text: T('"...Right. Yes. It\'s not a big thing really."', '«...Ya. Sí. Tampoco es nada importante».') }
          ],
          answerIndex: 2,
          why: T('"Don\'t worry" reassured her about a fear she had not disclosed. Watch what it cost: her next line downgrades her own reason from a year of hesitation to "not a big thing". You have just been told less than you were about to be told, and it will not come back in this consultation.',
                 '«No te preocupes» la tranquilizó sobre un miedo que no había revelado. Fíjate en lo que costó: su siguiente frase rebaja su propia razón de un año de dudas a «nada importante». Acaban de contarte menos de lo que iban a contarte, y no volverá en esta consulta.'),
          principle: T('Premature reassurance is the single most expensive habit in aesthetic consultation. Module 3 gives it a full lesson.',
                       'La tranquilización prematura es el hábito más caro de la consulta estética. El Módulo 3 le dedica una lección entera.') },
        { kind: 'reflect',
          prompt: T('Which of the four removals is yours? Write the exact sentence you catch yourself saying.',
                    '¿Cuál de las cuatro retiradas es la tuya? Escribe la frase exacta que te oyes decir.'),
          placeholder: T('Write it in the words you actually use.', 'Escríbela con las palabras que realmente usas.') },
        { kind: 'sort',
          prompt: T('Sort each opening line: does it preserve safety, or remove it?',
                    'Clasifica cada frase de apertura: ¿preserva la seguridad o la retira?'),
          client: T('Six first lines, recorded in the first thirty seconds of real consultations.',
                    'Seis primeras frases, registradas en los primeros treinta segundos de consultas reales.'),
          buckets: [
            { id: 'keep', label: T('Preserves safety', 'Preserva la seguridad') },
            { id: 'lose', label: T('Removes it', 'La retira') }
          ],
          items: [
            { id: 'o1', text: T('"What made you decide to come in?"', '«¿Qué te hizo decidir venir?»'), bucket: 'keep' },
            { id: 'o2', text: T('"I can already see what we could do about the cheeks."', '«Ya veo lo que podríamos hacer con los pómulos».'), bucket: 'lose' },
            { id: 'o3', text: T('"Take your time — there\'s no rush at all."', '«Tómate tu tiempo, no hay ninguna prisa».'), bucket: 'keep' },
            { id: 'o4', text: T('"Don\'t worry, whatever it is, it\'s easier to treat than you think."', '«No te preocupes, sea lo que sea, es más fácil de tratar de lo que crees».'), bucket: 'lose' },
            { id: 'o5', text: T('"You mean the nasolabial folds — that\'s the correct name for them."', '«Te refieres a los surcos nasogenianos, ese es el nombre correcto».'), bucket: 'lose' },
            { id: 'o6', text: T('"Tell me what\'s been happening, in whatever order it comes."', '«Cuéntame qué ha estado pasando, en el orden que salga».'), bucket: 'keep' }
          ],
          why: T('o5 is the one practitioners defend. Correcting her vocabulary is helpful, accurate, and it teaches her that her way of describing her own face is wrong — after which she will use fewer of her own words, which are the only words Discovery can work with.',
                 'La o5 es la que los profesionales defienden. Corregir su vocabulario es útil, exacto, y le enseña que su forma de describir su propia cara está mal, tras lo cual usará menos palabras suyas, que son las únicas con las que puede trabajar el Descubrimiento.') },

        { kind: 'choose',
          prompt: T('Nuria, 41, is through the door and already talking: "I tried a place near work and I didn\'t like it at all, a friend told me I had to come here, and honestly I\'d like to decide something today because I never have time." She has not sat down. What do you do first?',
                    'Nuria, 41, entra por la puerta y ya viene hablando: «Probé un sitio cerca del trabajo y no me gustó nada, una amiga me dijo que tenía que venir aquí y, la verdad, me gustaría decidir algo hoy porque nunca tengo tiempo». No se ha sentado. ¿Qué haces primero?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Let\'s take those one at a time. Start with the other place — what was it you didn\'t like?"',
                       '«Vamos por partes. Empecemos por el otro sitio: ¿qué fue lo que no te gustó?»'),
              why: T('Orderly, and it sounds like listening. It also adopts her agenda at her speed and puts a place you have never seen at the top of the agenda. A stormy entrance is anxiety looking for a way out; matching its pace gives the anxiety a destination, and twenty minutes later you will know a great deal about another practice and almost nothing about her.',
                     'Es ordenado y suena a escucha. También asume su agenda a su velocidad y coloca en cabeza un sitio que no has visto nunca. Una entrada tormentosa es ansiedad buscando una salida; seguirle el ritmo le da a esa ansiedad un destino, y veinte minutos después sabrás muchísimo de otro centro y casi nada de ella.') },
            { id: 'b', verdict: 'best',
              label: T('Sit down, drop your own pace well below hers, and ask one short question: "Before anything else — how are you today?"',
                       'Sentarte, bajar tu propio ritmo muy por debajo del suyo y hacer una sola pregunta corta: «Antes de nada, ¿tú cómo estás hoy?»'),
              why: T('Chapter 7\'s instruction for this entrance is an anchor, not a topic. Your slowness is doing the work: she cannot hold her pace against a room that has none, and the shortest question available is the only one she cannot answer at speed. Watch her sentences get longer and fewer.',
                     'La indicación del capítulo 7 para esta entrada es un ancla, no un tema. El trabajo lo hace tu lentitud: ella no puede sostener su ritmo contra una sala que no tiene ninguno, y la pregunta más corta disponible es la única que no puede responder deprisa. Fíjate en cómo sus frases se vuelven más largas y menos numerosas.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Don\'t worry — whatever they did, this is almost always fixable, and we\'ll certainly get you sorted today."',
                       '«No te preocupes: hicieran lo que hicieran, esto casi siempre tiene arreglo, y hoy te dejamos algo cerrado seguro».'),
              why: T('Two removals in one sentence. You reassured her about a result you have not looked at, and you accepted her deadline before knowing what she came for. She will stop describing the problem, because you have already told her it is small, and the appointment now contains a decision neither of you has earned.',
                     'Dos retiradas en una frase. La has tranquilizado sobre un resultado que no has mirado y has aceptado su plazo antes de saber a qué viene. Dejará de describir el problema, porque ya le has dicho que es pequeño, y ahora la cita lleva dentro una decisión que ninguno de los dos se ha ganado.') }
          ],
          principle: T('The stormy entrance is not confidence and it is not rudeness. It is anxiety looking for a way out, and what answers it is your pace, not your words.',
                       'La entrada tormentosa no es seguridad ni mala educación. Es ansiedad buscando una salida, y lo que la responde es tu ritmo, no tus palabras.'),
          retry: {
            note: T('The same ninety seconds, with the opposite body in the chair.',
                    'Los mismos noventa segundos, con el cuerpo contrario en la silla.'),
            prompt: T('A different morning. Begoña, 58, knocks rather than opens, sits on the edge of the chair and keeps her bag on her knees. You offer her water; she says "No, I\'m fine" in a flat voice without looking up. Forty seconds have passed and she has not said why she is here. What do you do?',
                      'Otra mañana. Begoña, 58, llama a la puerta en vez de abrirla, se sienta en el borde de la silla y no suelta el bolso de las rodillas. Le ofreces agua y responde «No, estoy bien» con voz plana, sin levantar la vista. Han pasado cuarenta segundos y aún no ha dicho a qué viene. ¿Qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Tell me what brought you in — take as long as you like."',
                         '«Cuéntame qué te trae por aquí, con toda la calma del mundo».'),
                why: T('The right question, forty seconds early. Warmth is attached to it and it is still a request that she perform the hardest sentence of the appointment with the bag on her knees. What comes back will be true and small — "just a general check, really" — and that is now the reason on file.',
                       'La pregunta correcta, cuarenta segundos antes de tiempo. Lleva calidez pegada y sigue siendo pedirle que pronuncie la frase más difícil de la cita con el bolso en las rodillas. Lo que vuelva será verdad y será pequeño —«una revisión general, nada más»—, y ese queda como el motivo registrado.') },
              { id: 'b', verdict: 'best',
                label: T('Ask nothing about her face or her reason. "How has your day been?" — then wait, and give her something ordinary back.',
                         'No preguntar nada sobre su cara ni sobre su motivo. «¿Qué tal te ha ido el día?», esperar, y devolverle algo corriente.'),
                why: T('Nothing evaluated, nothing named, nothing reassured. Chapter 7\'s own version is exactly this — a question about her day, then "long days are the hardest; good that you took the time for yourself". You are not filling time, you are watching for one specific thing, and you will see it before you hear it.',
                       'Nada evaluado, nada nombrado, nada tranquilizado. La versión del propio capítulo 7 es exactamente esta: una pregunta por su día y después «los días largos son los peores; qué bien que te hayas sacado un rato». No estás rellenando tiempo: estás vigilando una cosa concreta, y la vas a ver antes de oírla.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Come and sit under the light a second and I\'ll take a quick look while you settle in."',
                         '«Ponte un momento bajo la luz y te echo un vistazo rápido mientras te acomodas».'),
                why: T('Removal one, presented as efficiency. You have assessed a face whose owner has not yet spoken, in a room she has not yet agreed to be in, and the first information she receives about herself is clinical. The bag will not move again for the rest of the appointment.',
                       'La retirada número uno, presentada como eficacia. Has valorado una cara cuya dueña todavía no ha hablado, en una sala en la que aún no ha aceptado estar, y la primera información que recibe sobre sí misma es clínica. El bolso ya no se moverá en toda la cita.') }
            ],
            principle: T('A quiet entrance does not need a better question. It needs the question held back until her body has answered a different one.',
                         'Una entrada silenciosa no necesita una pregunta mejor. Necesita que la pregunta espere hasta que su cuerpo haya respondido a otra.'),
            changes: {
              axis: 'clientResponse',
              detail: T('She moves the bag from her knees to the chair beside her and smiles — the first real one. That is the signal Chapter 7 tells you to wait for, and the answer to "what brought you in" arrives about forty seconds later as three sentences about her sister\'s photographs, not as "a general check, really".',
                        'Pasa el bolso de las rodillas a la silla de al lado y sonríe: la primera sonrisa de verdad. Esa es la señal que el capítulo 7 te dice que esperes, y la respuesta a «qué te trae por aquí» llega unos cuarenta segundos después en tres frases sobre las fotos de su hermana, no en «una revisión general, nada más».')
            }
          } },

        { kind: 'translate',
          prompt: T('Three openings, straight from the client. Write your first sentence back to each. One rule: nothing evaluated, nothing named, nothing reassured.',
                    'Tres aperturas, dichas por la clienta. Escribe tu primera frase de respuesta a cada una. Una regla: no evalúes nada, no nombres nada, no tranquilices nada.'),
          items: [
            { id: 'a',
              client: T('"I know I probably don\'t need anything, I just wanted to see what you\'d say."',
                        '«Ya sé que seguramente no necesito nada, solo quería ver qué me dices».'),
              model: T('"Then let\'s start with what made you book. You can decide about needing anything afterwards."',
                       '«Entonces empecemos por lo que te hizo pedir cita. Lo de si necesitas algo lo decides después».'),
              note: T('She has invited you to evaluate her, and the polite move is to accept the invitation — "well, let\'s have a look". That is removal one. The reply declines the evaluation without contradicting her, and moves to the only fact she has not yet given you: why today.',
                      'Te ha invitado a evaluarla, y lo educado es aceptar la invitación: «bueno, vamos a ver». Esa es la retirada número uno. La respuesta rechaza la evaluación sin contradecirla y va al único dato que aún no te ha dado: por qué hoy.') },
            { id: 'b',
              client: T('"My friend had this done and it looked awful, so I\'m nervous."',
                        '«A una amiga se lo hicieron y le quedó fatal, así que estoy nerviosa».'),
              model: T('"Tell me what looked awful about it. I would rather know exactly what we are avoiding than guess."',
                       '«Cuéntame qué le quedó fatal. Prefiero saber exactamente qué estamos evitando a tener que adivinarlo».'),
              note: T('"That won\'t happen here" is removal three: reassurance about a fear she has not described yet. It also throws away the criterion you will need in Phase 6, because "awful" means something specific to her and you do not know what it is.',
                      '«Aquí eso no pasa» es la retirada número tres: tranquilizar sobre un miedo que ella todavía no ha descrito. Además tira el criterio que necesitarás en la Fase 6, porque «fatal» significa algo concreto para ella y tú no sabes qué.') },
            { id: 'c',
              client: T('"I hate my nasolabial folds. Sorry — is that the right word?"',
                        '«Odio mis surcos nasogenianos. Perdona, ¿se dice así?»'),
              model: T('"Say it however you like, I\'ll follow you. What is it about them that made today the day?"',
                       '«Dilo como quieras, yo te sigo. ¿Qué tienen que hoy haya sido el día?»'),
              note: T('Confirming the term is removal four wearing a helpful face. It is accurate and it teaches her that her way of describing her own face was wrong, after which she uses fewer of her own words — the only words Discovery can work with.',
                      'Confirmar el término es la retirada número cuatro con cara de amabilidad. Es exacto, y le enseña que su forma de describir su propia cara estaba mal; a partir de ahí usará menos palabras suyas, que son las únicas con las que puede trabajar el Descubrimiento.') }
          ] }

      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm1l6', n: 6, minutes: 12,
      treatments: [
                    {
                      name: T(
                              'Microneedling with radiofrequency — course of three',
                              'Microagujas con radiofrecuencia — tres sesiones'),
                      price: T('€840 for three sessions', '840 € las tres sesiones'),
                      why: T(
                             'A three-session course crosses four months, which means the method has to survive being run twice: once in the consultation and once, differently, at every session after it.',
                             'Un bono de tres sesiones cruza cuatro meses, lo que significa que el método tiene que sobrevivir a ejecutarse dos veces: una en la consulta y otra, distinta, en cada sesión posterior.'),
                      moment: T(
                                'She arrives for session two and says it is looking a bit better, which is the sentence every practitioner is pleased to hear and nobody examines.',
                                'Llega a la segunda sesión y dice que se ve algo mejor, que es la frase que todo profesional se alegra de oír y que nadie examina.'),
                      weak: {
                              line: T(
                                      '"Good — that\'s about where we\'d expect to be at session two. Let\'s get you settled and we\'ll do the same parameters as last time."',
                                      '«Bien, es más o menos donde tocaría estar en la segunda. Vamos poniéndonos cómodas y repetimos los mismos parámetros que la otra vez.»'),
                              cost: T(
                                      'Treats session two as a treatment rather than a consultation, which is precisely the collapse the six steps exist to prevent. A bit better is a layer-one sentence, and it goes unexamined because the relationship is now assumed.',
                                      'Trata la segunda sesión como un tratamiento y no como una consulta, que es justo el derrumbe que existen para impedir los seis pasos. «Algo mejor» es una frase de capa uno, y se queda sin examinar porque la relación ya se da por supuesta.')
                            },
                      strong: {
                                line: T(
                                        '"A bit better. Has anybody said anything, or is it only you who can see it?"',
                                        '«Algo mejor. ¿Te ha dicho alguien algo o lo ves solo tú?»'),
                                gain: T(
                                        'Runs the method again inside an appointment that was not supposed to need it. Whether anyone has noticed is the whole of what she is measuring, and it is the difference between a course finished and a course renewed.',
                                        'Vuelve a ejecutar el método dentro de una cita que no debía necesitarlo. Si alguien lo ha notado es todo lo que ella está midiendo, y es la diferencia entre un bono terminado y un bono renovado.')
                              }
                    },
                    {
                      name: T('Vascular laser — rosacea and redness', 'Láser vascular — rosácea y rojeces'),
                      price: T(
                               '€600 for the course of three, €230 single',
                               '600 € el bono de tres, 230 € la sesión suelta'),
                      why: T(
                             'Facial redness is the condition most often dismissed by other people as nothing, so the person and the complaint have been separated for years by the time she books.',
                             'Las rojeces faciales son la afección que más a menudo despachan los demás como si no fuera nada, así que para cuando pide cita la persona y el motivo llevan años separados.'),
                      moment: T(
                                'She says everyone tells her it is barely noticeable, and she says it in a flat voice, as a fact she has stopped arguing with.',
                                'Dice que todo el mundo le dice que casi no se le nota, y lo dice con voz plana, como un hecho con el que ha dejado de discutir.'),
                      weak: {
                              line: T(
                                      '"Well, they\'re not entirely wrong — it\'s mild. But I can see what you mean, and it\'s something we can work on."',
                                      '«Bueno, tampoco van muy desencaminados: es leve. Pero entiendo a qué te refieres y es algo que se puede trabajar.»'),
                              cost: T(
                                      'Splits the difference between her and everyone who has dismissed her, which puts you on their side with better manners. She agrees to the course and never tells you what happens to her at dinner parties.',
                                      'Reparte la razón entre ella y todos los que la han despachado, lo que te coloca en el bando de ellos con mejores modales. Acepta el bono y nunca te cuenta qué le pasa en las cenas.')
                            },
                      strong: {
                                line: T(
                                        '"Everyone tells you that. What is it you see that they don\'t?"',
                                        '«Eso te lo dice todo el mundo. ¿Qué ves tú que ellos no ven?»'),
                                gain: T(
                                        'Puts the question to the only person qualified to answer it. Seeing the woman before recommending anything is the single principle underneath all six steps, and this is what it looks like when the complaint is small.',
                                        'Le hace la pregunta a la única persona cualificada para contestarla. Ver a la persona antes de recomendarle nada es el único principio que hay debajo de los seis pasos, y así es como se ve cuando el motivo es pequeño.')
                              }
                    }
                  ],
      title: T('The two MIRRORs', 'Los dos MIRROR'),
      objective: T('Hold the six-step method and the eight-phase architecture apart, and place each letter inside the phases, trust and duties it actually lives in.',
                   'Mantener separados el método de seis pasos y la arquitectura de ocho fases, y situar cada letra dentro de las fases, la confianza y los deberes en los que realmente vive.'),
      provenance: {
        chapter: [1, 6],
        principle: T('Six steps, and one principle underneath all of them: see the person before you sell to them.',
                     'Seis pasos y un solo principio debajo de todos ellos: ver a la persona antes de venderle nada.'),
        phase: 'preparation',
        trustStage: 'credibility',
        standard: 3,
        duty: 3,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Six letters in a row look like a checklist, and someone who has just memorised them naturally wants to execute them in order. That is conscientiousness turning a method into a procedure. The letters name behaviours, not a queue; the eight phases name where a conversation currently stands. Fold either into the other and you are handed a tidy running order and robbed of the only live question in the room, which is: of these six, which does this particular woman need from me in the next ten seconds?',
            'Seis letras en fila parecen una lista de verificación, y quien acaba de memorizarlas quiere, con toda naturalidad, ejecutarlas en orden. Eso es la escrupulosidad convirtiendo un método en un procedimiento. Las letras nombran conductas, no una cola; las ocho fases nombran dónde está una conversación en este momento. Si pliegas una cosa dentro de la otra, te entregan un guion ordenado y te quitan la única pregunta viva de la sala, que es: de estas seis, ¿cuál necesita de mí esta mujer concreta en los próximos diez segundos?'),
        sheIsThinking: T(
            'There is a shape to this. I cannot yet tell whether the shape is built for me or for you.',
            'Esto tiene una forma. Todavía no sé si la forma está hecha para mí o para ti.'),
        ladder: {
          weak: {
            line:   T(
                '"Good. So the next thing I wanted to ask you is —"',
                '«Bien. Entonces, lo siguiente que quería preguntarte es…»'),
            effect: T(
                'The running order drives straight over the disclosure. What she just risked shuts, and it is not offered twice.',
                'El guion pasa por encima de la confidencia sin frenar. Lo que acaba de arriesgar se cierra, y no se ofrece dos veces.')
          },
          average: {
            line:   T(
                '"Thank you for telling me that." (and on to the prepared question)',
                '«Gracias por contármelo.» (y a por la pregunta preparada)'),
            effect: T(
                'Acknowledgement, then onward. Courteous, and the material stays unused: she has been thanked for something you then declined to explore.',
                'Reconocimiento y a seguir. Es cortés, y el material se queda sin usar: le has dado las gracias por algo que después has renunciado a explorar.')
          },
          strong: {
            line:   T(
                '(a silence, and then) "Say more about that."',
                '(un silencio, y luego) «Cuéntame más de eso.»'),
            effect: T(
                'Make Safe and Inquire arrive together, because the six letters are a read-and-respond, not a running order. Where you now stand was settled by her, not by the sheet in your head.',
                'Crear Seguridad e Indagar llegan a la vez, porque las seis letras son leer y responder, no un guion. Dónde estás ahora lo ha decidido ella, no la hoja que llevas en la cabeza.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('You will meet the name twice', 'Vas a encontrarte el nombre dos veces'),
          body: [
            T('MIRROR names two different things in this Academy, and confusing them is the single most common way a practitioner ends up doing the right behaviour in the wrong place.',
              'MIRROR nombra dos cosas distintas en esta Academia, y confundirlas es la forma más habitual de que una profesional acabe haciendo el comportamiento correcto en el lugar equivocado.'),
            T('The first is the method from the book: six steps, one per letter, taught across Chapters 8 to 13. It is built to be remembered while a client is sitting in front of you. The second is the professional architecture: eight phases, from Preparation to Relationship Continuation. It is built to be audited — it says where each behaviour belongs, what trust it forms, which duty governs it and which Toolkit records it.',
              'La primera es el método del libro: seis pasos, uno por letra, enseñados entre los capítulos 8 y 13. Está hecho para recordarse mientras tienes a una clienta delante. La segunda es la arquitectura profesional: ocho fases, de la Preparación a la Continuidad de la Relación. Está hecha para auditarse: dice dónde pertenece cada comportamiento, qué confianza forma, qué deber lo rige y qué Toolkit lo registra.'),
            T('The book does not teach the eight phases. It never claimed to. Nothing is gained by pretending otherwise, and something important is lost: the moment you flatten six into eight, you stop being able to say which of the two you failed.',
              'El libro no enseña las ocho fases. Nunca dijo que lo hiciera. No se gana nada fingiendo lo contrario y se pierde algo importante: en cuanto aplastas seis en ocho, dejas de poder decir en cuál de las dos fallaste.')
          ],
          diagram: 'two-mirrors' },

        { kind: 'signal',
          avatar: 'isabel',
          name: T('Feedback call — Isabel, 47, two weeks after her consultation',
                  'Llamada de seguimiento — Isabel, 47, dos semanas después de su consulta'),
          client: T('"She was lovely. She really listened — she even repeated back the thing about my sister\'s wedding, word for word, which I wasn\'t expecting. I just never understood what the treatment actually does. So I didn\'t book."',
                    '«Fue encantadora. Escuchó de verdad; hasta me repitió lo de la boda de mi hermana, palabra por palabra, cosa que no me esperaba. Lo que pasa es que nunca llegué a entender qué hace el tratamiento. Así que no reservé».'),
          prompt: T('Two layers, one consultation. Which one failed?',
                    'Dos capas, una consulta. ¿Cuál falló?'),
          notice: [
            T('The letter R — Reflect — ran, and it landed. "Word for word" is the client\'s own evidence that she was heard, and she volunteered it two weeks later without being asked.',
              'La letra R —Reflejar— se ejecutó y funcionó. «Palabra por palabra» es la prueba que aporta la propia clienta de que la escucharon, y la ofreció dos semanas después sin que se lo preguntaran.'),
            T('Nothing in her account describes a failure of the method. Every letter the book teaches was arguably performed, in order, and performed well.',
              'Nada en su relato describe un fallo del método. Se puede sostener que todas las letras que enseña el libro se ejecutaron, en orden y bien.'),
            T('What is missing is Phase 5 — Education. She cannot say what the treatment does, which means nothing was ever explained in a form she could carry out of the room.',
              'Lo que falta es la Fase 5 —Educación—. No sabe decir qué hace el tratamiento, lo que significa que nada se explicó nunca de una forma que pudiera llevarse consigo al salir.'),
            T('This is the whole reason the two layers are held apart. Reviewed as a method, the consultation was good. Reviewed as an architecture, it failed at a named phase — and the phase tells you exactly what to do differently next Tuesday.',
              'Esta es toda la razón por la que las dos capas se mantienen separadas. Revisada como método, la consulta fue buena. Revisada como arquitectura, falló en una fase con nombre, y la fase te dice exactamente qué hacer distinto el martes que viene.')
          ] },

        { kind: 'layers',
          prompt: T('Two legitimate layers. Related, not interchangeable.',
                    'Dos capas legítimas. Relacionadas, no intercambiables.'),
          layers: [
            { tag: T('Learner-facing method', 'Método de la profesional'),
              name: T('The 6-step MIRROR Method', 'El Método MIRROR de 6 pasos'),
              source: T('The Beauty Sales Secrets — Chapters 8–13',
                        'The Beauty Sales Secrets — capítulos 8–13'),
              items: METHOD_TABLE.map(r => ({
                k: { en: `${r.letter} — ${r.name.en}`, es: `${r.letter} — ${r.name.es}` },
                v: r.promise
              })),
              role: T('Six behaviours you can hold in your head mid-consultation. This is what you run.',
                      'Seis comportamientos que puedes sostener en la cabeza durante la consulta. Esto es lo que ejecutas.') },
            { tag: T('Professional architecture', 'Arquitectura profesional'),
              name: T('The 8-phase MIRROR Consultation Architecture', 'La Arquitectura de Consulta MIRROR de 8 fases'),
              source: T('MBOK v0.17 — Chapter 1 § 1.16', 'MBOK v0.17 — capítulo 1 § 1.16'),
              items: canon.PHASES.map(p => ({
                k: { en: `${p.n} ${p.name}`, es: `${p.n} ${canon.ES.phases[p.key].name}` },
                v: canon.phaseObjective(p.key)
              })),
              role: T('Eight places a consultation can succeed or fail, each with its own trust, duty and Toolkit. This is what gets reviewed.',
                      'Ocho lugares donde una consulta puede acertar o fallar, cada uno con su confianza, su deber y su Toolkit. Esto es lo que se revisa.') }
          ],
          statement: T('The 6-step MIRROR Method is the memorable practitioner method from The Beauty Sales Secrets. The 8-phase MIRROR Consultation Architecture is the deeper professional operating system that shows where those behaviors live across a complete consultation.',
                       'El Método MIRROR de 6 pasos es el método memorable de la profesional que viene de The Beauty Sales Secrets. La Arquitectura de Consulta MIRROR de 8 fases es el sistema operativo profesional más profundo que muestra dónde viven esos comportamientos a lo largo de una consulta completa.') },

        methodMatrixBlock(),

        { kind: 'spot',
          prompt: T('Read this as an auditor, not as a colleague. Every letter of the method is being run, and run well. One turn still crosses a phase boundary with nothing in between. Which turn?',
                    'Lee esto como auditora, no como compañera. Todas las letras del método se están ejecutando, y bien. Aun así, una intervención cruza el límite entre dos fases sin nada en medio. ¿Cuál?'),
          lines: [
            { who: 'you', text: T('"So what I\'ve heard is this: it isn\'t the lines themselves. It is that photographs of you have started coming out looking like somebody tired. Have I got that right?"',
                                  '«Entonces lo que te he oído es esto: no son las líneas en sí. Es que en las fotos empiezas a salir con cara de cansada. ¿Lo he entendido bien?»') },
            { who: 'client', text: T('"Yes. That is exactly it."', '«Sí. Es exactamente eso».') },
            { who: 'you', text: T('"Good. Then what I would recommend is three sessions of skin boosters, four weeks apart, and we review at twelve weeks. It is €990 for the three."',
                                  '«Bien. Entonces lo que te recomendaría son tres sesiones de bioestimulación, cada cuatro semanas, y revisamos a las doce. Son 990 € las tres».') },
            { who: 'client', text: T('"Right. And that is… the injections?"', '«Vale. ¿Y eso es… lo de las inyecciones?»') },
            { who: 'you', text: T('"That\'s it. Nothing dramatic — you would look like someone who had slept."',
                                  '«Eso es. Nada llamativo: tendrías cara de haber dormido».') }
          ],
          answerIndex: 2,
          why: T('Nothing here is a method failure, and that is the difficulty. Turn 1 is the letter R — Reflect, performed well, and she confirms it. Turn 3 is a clear recommendation with a number and a review date. Audited in letters, this consultation passes. Audited in phases, turn 3 steps from the end of Phase 4 — Understanding straight into Phase 6 — Recommendation, and turn 4 is the client supplying the evidence: she is asking what the treatment is, after being told what it costs. Phase 5 — Education never happened, so she leaves with a price and a word. Turn 5 then answers her question with reassurance instead of a mechanism, which is why in two weeks she will still not be able to say what it does.',
                 'Aquí nada es un fallo del método, y esa es la dificultad. La intervención 1 es la letra R —Reflejar—, bien hecha, y ella lo confirma. La intervención 3 es una recomendación clara, con cifra y con revisión. Auditada en letras, esta consulta aprueba. Auditada en fases, la intervención 3 pasa del final de la Fase 4 —Comprensión— directamente a la Fase 6 —Recomendación—, y la intervención 4 es la clienta aportando la prueba: pregunta qué es el tratamiento después de que le digan lo que cuesta. La Fase 5 —Educación— no ocurrió nunca, así que se va con un precio y una palabra. La intervención 5 responde entonces a su pregunta con tranquilidad en vez de con un mecanismo, y por eso dentro de dos semanas seguirá sin saber decir qué hace.'),
          principle: T('The method is what you run; the architecture is what says where it landed. A letter performed perfectly can still leave a phase empty, and the empty phase is the one she notices a fortnight later, on the telephone, to somebody else.',
                       'El método es lo que ejecutas; la arquitectura es lo que dice dónde aterrizó. Una letra ejecutada a la perfección puede dejar una fase vacía igualmente, y la fase vacía es la que ella nota quince días después, por teléfono y con otra persona.') },

        { kind: 'match',
          prompt: T('Place each step of the book\'s method in the phase where it does its main work. One of them does its main work in two phases at once — choose the one it opens.',
                    'Sitúa cada paso del método del libro en la fase donde hace su trabajo principal. Uno de ellos trabaja en dos fases a la vez: elige la que abre.'),
          left: [
            { id: 'M',  text: T('M — Make Safe', 'M — Hacer Sentir Segura') },
            { id: 'I',  text: T('I — Inquire', 'I — Indagar') },
            { id: 'R1', text: T('R — Reflect', 'R — Reflejar') },
            { id: 'R2', text: T('R — Recommend', 'R — Recomendar') },
            { id: 'O',  text: T('O — Overcome', 'O — Superar') },
            { id: 'R3', text: T('R — Resolve & Rise', 'R — Resolver y Elevar') }
          ],
          right: [
            { id: 'p2', text: T('Phase 2 — Connection', 'Fase 2 — Conexión') },
            { id: 'p3', text: T('Phase 3 — Discovery', 'Fase 3 — Descubrimiento') },
            { id: 'p4', text: T('Phase 4 — Understanding', 'Fase 4 — Comprensión') },
            { id: 'p5', text: T('Phase 5 — Education', 'Fase 5 — Educación') },
            { id: 'p7', text: T('Phase 7 — Decision Support', 'Fase 7 — Acompañamiento de la Decisión') },
            { id: 'p8', text: T('Phase 8 — Relationship Continuation', 'Fase 8 — Continuidad de la Relación') }
          ],
          pairs: { M: 'p2', I: 'p3', R1: 'p4', R2: 'p5', O: 'p7', R3: 'p8' },
          why: T('Notice what the exercise could not ask you. There is no letter to place in Phase 1 or Phase 6, because the book folds preparation into Make Safe and folds recommending into the same letter as teaching. Resolve & Rise had to be placed in Phase 8 even though it starts in Phase 7 — it is one letter doing two phases of work. That mismatch is the point: six behaviours mapped onto eight places will never be a clean row-for-row translation, and any table that shows it as one is lying to you.',
                 'Fíjate en lo que el ejercicio no ha podido preguntarte. No hay ninguna letra que colocar en la Fase 1 ni en la Fase 6, porque el libro integra la preparación en Hacer Sentir Segura e integra el recomendar en la misma letra que el enseñar. Resolver y Elevar ha tenido que ir a la Fase 8 aunque empieza en la Fase 7: es una letra haciendo el trabajo de dos fases. Ese desajuste es justamente el asunto: seis comportamientos sobre ocho lugares nunca será una traducción limpia fila a fila, y cualquier tabla que lo presente así te está mintiendo.') },

        { kind: 'check',
          prompt: T('A colleague tells you she has "finished the R of the method, so Phase 6 is done". What is wrong with the sentence?',
                    'Una compañera te dice que ha «terminado la R del método, así que la Fase 6 está hecha». ¿Qué falla en esa frase?'),
          options: [
            { id: 'a', text: T('Nothing — Recommend is Phase 6, so completing one completes the other.',
                               'Nada: Recomendar es la Fase 6, así que completar una completa la otra.') },
            { id: 'b', text: T('She has named the right behaviour but assumed it closes a phase it only partly covers — Recommend spans Education and Recommendation, and the architecture is what says whether both were actually done.',
                               'Ha nombrado el comportamiento correcto pero ha dado por cerrada una fase que solo cubre en parte: Recomendar abarca Educación y Recomendación, y es la arquitectura la que dice si de verdad se hicieron las dos.') },
            { id: 'c', text: T('The method has no R for recommending, so she has misremembered the book.',
                               'El método no tiene ninguna R para recomendar, así que ha recordado mal el libro.') },
            { id: 'd', text: T('Phases cannot be "done" at all — only trust stages can.',
                               'Las fases no se pueden «hacer»: solo las etapas de confianza.') }
          ],
          answer: 'b',
          why: T('The method tells you what to do. The architecture tells you whether it landed. She may well have recommended well and still have skipped the teaching that would have made the recommendation legible — which is exactly the failure Phase 5 exists to catch, and which no amount of running the letter R will surface on its own.',
                 'El método te dice qué hacer. La arquitectura te dice si funcionó. Puede que haya recomendado bien y aun así se haya saltado la explicación que habría hecho legible la recomendación, que es justo el fallo que existe para detectar la Fase 5 y que ninguna cantidad de ejecutar la letra R sacará a la luz por sí sola.') },

        { kind: 'choose',
          prompt: T('Your clinic lead reads Isabel\'s feedback and asks what you would change. Which answer is usable?',
                    'La responsable de tu clínica lee el comentario de Isabel y te pregunta qué cambiarías. ¿Qué respuesta sirve?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"I\'d reflect less and explain more. I spent too long on her sister\'s wedding."',
                       '«Reflejaría menos y explicaría más. Me alargué demasiado con la boda de su hermana».'),
              why: T('You have traded a letter that worked for a phase that did not, as though there were a fixed budget between them. The reflection is the reason she rang back at all. Removing it does not build Phase 5; it removes the only part of the consultation that worked.',
                     'Has cambiado una letra que funcionó por una fase que no, como si hubiera un presupuesto fijo entre ambas. El reflejo es la razón por la que ella llegó a llamar. Quitarlo no construye la Fase 5: elimina lo único de la consulta que funcionó.') },
            { id: 'b', verdict: 'best',
              label: T('"The method ran. Phase 5 did not — she left unable to say what the treatment does. Next time I\'d stop after the summary and explain the mechanism in one sentence she could repeat at home."',
                       '«El método se ejecutó. La Fase 5 no: se fue sin saber decir qué hace el tratamiento. La próxima vez pararía después del resumen y explicaría el mecanismo en una frase que ella pudiera repetir en casa».'),
              why: T('You named the letter that worked, named the phase that failed, and converted the phase into a single behaviour with a test attached — can she repeat it. That is what the architecture is for: the method tells you what to do, the architecture tells you where it landed.',
                     'Has nombrado la letra que funcionó, has nombrado la fase que falló y has convertido la fase en una sola conducta con una prueba asociada: si ella puede repetirlo. Para eso está la arquitectura: el método te dice qué hacer, la arquitectura te dice dónde aterrizó.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Honestly, she just wasn\'t ready. Some clients need more time than one appointment can give them."',
                       '«Sinceramente, no estaba preparada. Algunas clientas necesitan más tiempo del que da una sola cita».'),
              why: T('Plausible, unfalsifiable, and it deletes the finding. A client who volunteers the exact sentence that failed her has told you where the gap is; explaining it as her readiness guarantees that the same consultation happens again next week with somebody else.',
                     'Plausible, infalsable y borra el hallazgo. Una clienta que te ofrece la frase exacta que le falló te ha dicho dónde está el hueco; explicarlo por su falta de preparación garantiza que la misma consulta vuelva a ocurrir la semana que viene con otra persona.') }
          ],
          principle: T('Six behaviours mapped onto eight places will never be a row-for-row translation. The method is what you run; the architecture is what says which of the two you failed.',
                       'Seis comportamientos sobre ocho lugares nunca será una traducción fila a fila. El método es lo que ejecutas; la arquitectura es lo que dice en cuál de las dos fallaste.'),
          retry: {
            note: T('The same distinction, applied to a consultation that appears to have gone well.',
                    'La misma distinción, aplicada a una consulta que parece haber ido bien.'),
            prompt: T('"Marta booked the full course and paid today," a colleague tells you. "M, I, R, R, O and R — all six, textbook." Three weeks later Marta cancels the remaining sessions and does not rebook. Which layer answers why?',
                      '«Marta ha reservado el ciclo completo y ha pagado hoy», te dice una compañera. «M, I, R, R, O y R: las seis, de manual». Tres semanas después Marta anula las sesiones que quedan y no vuelve a reservar. ¿Qué capa responde al porqué?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('The method. One of the six letters must have been run badly, and the one to examine is O — Overcome, since the objection clearly survived.',
                         'El método. Alguna de las seis letras se ejecutó mal, y la que hay que examinar es la O —Superar—, porque está claro que la objeción sobrevivió.'),
                why: T('A reasonable instinct searching the wrong layer. Overcome handles resistance in the room, and there was none — she booked and paid. A letter that was never needed cannot be the one that failed.',
                       'Un instinto razonable buscando en la capa equivocada. Superar gestiona la resistencia en la sala, y no hubo ninguna: reservó y pagó. Una letra que nunca hizo falta no puede ser la que falló.') },
              { id: 'b', verdict: 'best',
                label: T('The architecture. The six letters end at the decision; Phase 8 — Relationship Continuation — is a place the method has no letter for, and "all six, textbook" says nothing about it.',
                         'La arquitectura. Las seis letras terminan en la decisión; la Fase 8 —Continuidad de la Relación— es un lugar para el que el método no tiene letra, y «las seis, de manual» no dice nada de ella.'),
                why: T('This is the gap the two-layer view exists to expose. Resolve & Rise starts in Phase 7 and is asked to cover Phase 8 as well, which is why a consultation can be a textbook six and still have nothing in place for week three. Naming the phase produces a behaviour: a review appointment that exists before she needs a reason for one.',
                       'Este es el hueco que la visión de dos capas existe para sacar a la luz. Resolver y Elevar empieza en la Fase 7 y se le pide que cubra también la Fase 8, y por eso una consulta puede ser un seis de manual y no tener nada previsto para la tercera semana. Nombrar la fase produce una conducta: una cita de revisión que existe antes de que ella necesite un motivo.') },
              { id: 'c', verdict: 'harmful',
                label: T('Neither. She paid, so the consultation succeeded — what happened afterwards is a retention problem, not a consultation problem.',
                         'Ninguna. Pagó, así que la consulta funcionó: lo que pasó después es un problema de fidelización, no de consulta.'),
                why: T('This is the sentence that keeps the two layers collapsed. It defines success as the transaction, which is precisely the definition the architecture was built to replace, and it guarantees that the phase where the loss occurred is never reviewed by anyone.',
                       'Esta es la frase que mantiene las dos capas aplastadas en una. Define el éxito como la transacción, que es justamente la definición que la arquitectura vino a sustituir, y garantiza que la fase en la que se perdió nunca la revise nadie.') }
            ],
            principle: T('One letter doing the work of two phases is where consultations quietly leak. When somebody reports success in letters, ask which phase they are describing — and which one they are not.',
                         'Una letra haciendo el trabajo de dos fases es por donde las consultas pierden en silencio. Cuando alguien informa de un éxito en letras, pregunta qué fase está describiendo, y cuál no.'),
            changes: {
              axis: 'continuation',
              detail: T('The three-week call nobody scheduled becomes schedulable. Naming Phase 8 as the place with no letter is what puts a Toolkit #8 follow-up in the diary before Marta decides on her own that the course is not working.',
                        'La llamada de las tres semanas que nadie programó pasa a ser programable. Nombrar la Fase 8 como el lugar sin letra es lo que mete en la agenda un seguimiento del Toolkit #8 antes de que Marta decida por su cuenta que el tratamiento no funciona.')
            }
          } },

        { kind: 'reflect',
          prompt: T('Take the last consultation you remember clearly that did not go the way you wanted. Name the letter of the method you ran well in it, and the phase of the architecture where it still failed. Write both, in that order.',
                    'Piensa en la última consulta que recuerdes con claridad que no salió como querías. Nombra la letra del método que ejecutaste bien en ella y la fase de la arquitectura en la que aun así falló. Escribe las dos, en ese orden.'),
          note: T('If you cannot separate the two, that is the finding — and it is the reason this lesson exists before Discovery rather than after it.',
                  'Si no puedes separar las dos, ese es el hallazgo, y es la razón por la que esta lección viene antes del Descubrimiento y no después.') }
      ]
    }
  ],
  apply: {
    assignment: T('In your next three consultations, say nothing evaluative for the first ninety seconds. Open with one question, then let her finish twice — including the pause after she appears to have finished.',
                  'En tus próximas tres consultas, no digas nada evaluativo durante los primeros noventa segundos. Abre con una pregunta y déjala terminar dos veces, incluida la pausa tras la que parece haber terminado.'),
    prompt: T('What happened when you tried it? What did she say in the second pause that she would not have said otherwise?',
              '¿Qué pasó cuando lo probaste? ¿Qué dijo en la segunda pausa que no habría dicho de otro modo?')
  }
};

// ===========================================================================
// MODULE 3 — DISCOVERY  (the deepest module in the Academy)
// Book: Ch.5 (Inquire), Ch.6 (The five questions), Ch.7 (Reflection),
//       Ch.8 (What she does not say), Shira / Elena & Sofía / Miriam threads.
// Canonical: Phase 3 Discovery; Trust Stages 2–3; Toolkit #1.
// ===========================================================================
const module3 = {
  id: 'm3', n: 3,
  phase: 'discovery',
  accent: 'champagne',
  title: T('Discovery', 'Descubrimiento'),
  strapline: T('The phase that decides the outcome — and the one most practitioners finish in ninety seconds',
               'La fase que decide el resultado — y la que la mayoría de profesionales termina en noventa segundos'),
  summary: T(
    'Discovery is not history-taking. It is the deliberate production of information the client had not planned to give you. This module is the deepest in the Academy: seven lessons on why discovery fails, the five questions that open a consultation, the reflection forms that make a client continue, what silence does, what a body says before a sentence does, and the Discovery Canvas that carries all of it into Phase 4.',
    'El Descubrimiento no es una anamnesis. Es la producción deliberada de información que la clienta no había planeado darte. Este es el módulo más profundo de la Academia: siete lecciones sobre por qué falla el descubrimiento, las cinco preguntas que abren una consulta, las formas de reflejo que hacen que una clienta continúe, qué hace el silencio, qué dice un cuerpo antes que una frase y el Lienzo de Descubrimiento que lo traslada todo a la Fase 4.'),
  outcome: T(
      'Ask the five questions in the order her answers dictate, wait through the silence after each one, and leave Discovery holding her sentences rather than a completed form.',
      'Hacer las cinco preguntas en el orden que dicten sus respuestas, sostener el silencio después de cada una y salir del Descubrimiento con las frases de ella en la mano, no con un formulario relleno.'),
  source: T('The Beauty Sales Secrets — Chapter 9 (I — Inquire), with Chapters 6 and 7; MIRROR Phase 3, Toolkit #1',
            'The Beauty Sales Secrets — Capítulo 9 (I — Indagar), con los capítulos 6 y 7; MIRROR Fase 3, Toolkit #1'),
  minutes: 77,
  status: 'available',
  lessons: [
    // -------------------------------------------------------------------
    {
      id: 'm3l1', n: 1, minutes: 8,
      treatments: [
                    {
                      name: T('Botulinum toxin — upper face', 'Toxina botulínica — tercio superior'),
                      price: T('€320, three areas', '320 €, tres zonas'),
                      why: T(
                             'Toxin has a named indication, a named dose and a named area, which means the clinical questions are all answerable and the one that matters is never on the form.',
                             'La toxina tiene una indicación con nombre, una dosis con nombre y una zona con nombre, así que las preguntas clínicas se pueden contestar todas y la que importa no está en el formulario.'),
                      moment: T(
                                'You have covered allergies, previous treatments, pregnancy and the date of her last session, and she is waiting for you to finish the form.',
                                'Has cubierto alergias, tratamientos previos, embarazo y la fecha de su última sesión, y ella espera a que termines el formulario.'),
                      weak: {
                              line: T(
                                      '"Last one was in March, so we\'re about due. Same three areas as before, €320?"',
                                      '«La última fue en marzo, así que ya toca. ¿Las mismas tres zonas de siempre, 320 €?»'),
                              cost: T(
                                      'A complete clinical history and no discovery at all. Nobody asked what is different about this autumn, so the recommendation can only repeat last time, and a repeat is the easiest thing in Madrid for another clinic to undercut.',
                                      'Una historia clínica completa y ningún descubrimiento. Nadie ha preguntado qué tiene de distinto este otoño, así que la recomendación solo puede repetir la anterior, y una repetición es lo más fácil de abaratar para cualquier otra clínica de Madrid.')
                            },
                      strong: {
                                line: T(
                                        '"That\'s the form done. Now the question that isn\'t on it — what made you book this one?"',
                                        '«El formulario, hecho. Ahora la pregunta que no está en él: ¿qué te hizo pedir esta cita?»'),
                                gain: T(
                                        'Marks the seam between the history and the discovery out loud, so she knows a different kind of question has started. The answer to this one is what makes a repeat appointment into a plan.',
                                        'Marca en voz alta la costura entre la historia y el descubrimiento, para que ella sepa que ha empezado otro tipo de pregunta. La respuesta a esta es lo que convierte una cita de repetición en un plan.')
                              }
                    },
                    {
                      name: T('Cryolipolysis — flanks', 'Criolipólisis — flancos'),
                      price: T('€720 for two applicators', '720 € dos aplicadores'),
                      why: T(
                             'Body consultations come with measurements, photographs and a weight, so there is an unusual amount of legitimate data collection available to hide in.',
                             'Las consultas corporales vienen con medidas, fotos y un peso, así que hay una cantidad insólita de recogida de datos legítima en la que esconderse.'),
                      moment: T(
                                'The tape measure is in your hand and she has just said, to nobody in particular, that she has tried everything.',
                                'Tienes la cinta métrica en la mano y ella acaba de decir, sin dirigirse a nadie, que lo ha probado todo.'),
                      weak: {
                              line: T(
                                      '"Most people have by the time they get here. Let me take the measurements and then we\'ll talk about what\'s realistic."',
                                      '«Casi todo el mundo llega así. Déjame tomar las medidas y luego hablamos de qué es realista.»'),
                              cost: T(
                                      'Sympathetic, orderly and it defers the only sentence she has volunteered. By the time the measurements are done she has stopped offering, and the appointment continues on numbers you can get from anybody.',
                                      'Es empático, ordenado y aplaza la única frase que ella ha ofrecido. Para cuando terminan las medidas ya ha dejado de ofrecer, y la cita sigue sobre números que se le pueden sacar a cualquiera.')
                            },
                      strong: {
                                line: T(
                                        '"Everything. What\'s the one that came closest?"',
                                        '«Todo. ¿Cuál fue el que más cerca estuvo?»'),
                                gain: T(
                                        'Takes the offered sentence at the moment it is offered. What came closest tells you what she believes in, what she can sustain, and what she will compare €720 against.',
                                        'Coge la frase ofrecida en el momento en que se ofrece. Lo que más cerca estuvo te dice en qué cree, qué puede sostener y contra qué va a comparar los 720 €.')
                              }
                    }
                  ],
      title: T('Why discovery fails', 'Por qué falla el descubrimiento'),
      objective: T('Distinguish information collection from information production, and identify the moment discovery ends prematurely.',
                   'Distinguir la recogida de información de la producción de información, e identificar el momento en que el descubrimiento termina antes de tiempo.'),
      provenance: {
        chapter: 9,
        principle: T('The question you did not ask is always the one you lost the sale on.',
                     'La pregunta que no hiciste es siempre aquella por la que perdiste la venta.'),
        phase: 'discovery',
        trustStage: 'attention',
        standard: 2,
        duty: 3,
        toolkit: 1
      },
      depth: {
        whyItGoesWrong: T(
            'Enquiry stops early because it feels done. You have a complaint, a duration, a history — enough to prescribe — and pressing on when you could already prescribe feels like squandering her afternoon, or worse, like cross-examining her. Restraint is the virtue at fault. Chapter 9 insists the phase is not harvesting but excavation: the line that alters what you prescribe is hardly ever inside reply number one, because reply number one was drafted before she arrived.',
            'La indagación se detiene pronto porque parece terminada. Tienes un motivo de consulta, una duración, unos antecedentes: suficiente para prescribir. Y seguir insistiendo cuando ya podrías prescribir parece malgastarle la tarde o, peor, parece someterla a un interrogatorio. La virtud culpable aquí es la contención. El capítulo 9 insiste en que la fase no es cosechar, sino excavar: la línea que altera lo que prescribes casi nunca está dentro de la respuesta número uno, porque la respuesta número uno se redactó antes de que ella llegara.'),
        sheIsThinking: T(
            'That was the short version. Nobody asked for the long one, so presumably the short one was what was wanted.',
            'Esa era la versión corta. Nadie ha pedido la larga, así que se ve que la corta era la que querían.'),
        ladder: {
          weak: {
            line:   T(
                '"Perfect — we have an excellent treatment for exactly that."',
                '«Perfecto, tenemos un tratamiento excelente justo para eso.»'),
            effect: T(
                'Chapter 9\'s number one killer: replying where you should be excavating. Enquiry is over inside ninety seconds and the prescription rests on the draft she brought with her.',
                'Es el asesino número uno del capítulo 9: contestar donde deberías estar excavando. La indagación se acaba en noventa segundos y la prescripción descansa sobre el borrador que ella trajo consigo.')
          },
          average: {
            line:   T(
                '"And is there anything else that\'s been bothering you?"',
                '«¿Y hay alguna otra cosa que te esté molestando?»'),
            effect: T(
                'Genuine, and it opens an inventory. She contributes a second complaint at exactly the depth of the first, so you now hold two drafts instead of one.',
                'Es genuina y abre un inventario. Ella aporta un segundo motivo de consulta exactamente a la profundidad del primero, así que ahora tienes dos borradores en vez de uno.')
          },
          strong: {
            line:   T(
                '"When did that start bothering you?"',
                '«¿Cuándo empezó eso a molestarte?»'),
            effect: T(
                'Chapter 9\'s question two. It swaps what for when, and a date is a door into narrative: she stops issuing facts and begins telling you something that happened.',
                'Es la pregunta dos del capítulo 9. Cambia el qué por el cuándo, y una fecha es una puerta al relato: ella deja de emitir datos y empieza a contarte algo que pasó.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Two different activities', 'Dos actividades distintas'),
          body: [
            T('Collecting information means receiving what the client planned to say. She rehearsed it in the car. It is accurate, incomplete, and safe. Producing information means creating the conditions in which she says the part she had not planned to say.',
              'Recoger información significa recibir lo que la clienta tenía previsto decir. Lo ensayó en el coche. Es exacto, incompleto y seguro. Producir información significa crear las condiciones para que diga la parte que no tenía previsto decir.'),
            T('Discovery fails in one of three ways. It ends early, because the practitioner heard enough to recommend something. It stays on the surface, because every question was about the treatment rather than the person. Or it collapses into reassurance, because the practitioner became uncomfortable with what was being said.',
              'El descubrimiento falla de tres maneras. Termina pronto, porque el profesional escuchó lo suficiente para recomendar algo. Se queda en la superficie, porque todas las preguntas fueron sobre el tratamiento y no sobre la persona. O se derrumba en tranquilización, porque el profesional se incomodó con lo que se estaba diciendo.'),
            T('The cost is never visible in Phase 3. It arrives in Phase 7 as an objection you cannot answer, because the answer was the thing she never said.',
              'El coste nunca se ve en la Fase 3. Llega en la Fase 7 como una objeción que no puedes responder, porque la respuesta era lo que ella nunca dijo.')
          ],
          diagram: 'discovery-funnel' },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 9', 'The Beauty Sales Secrets — Capítulo 9'),
          quote: T('The consultation was not lost at the price. It was lost at the third question you did not ask.',
                   'La consulta no se perdió en el precio. Se perdió en la tercera pregunta que no hiciste.'),
          note: T('The MIRROR architecture enforces this: Phase 3 has a gate. Toolkit #1\'s six-item Depth Check must be met before Phase 4 opens, and it cannot be satisfied by a completed form — two of its items can only be ticked honestly if the client actually disclosed something.',
                  'La arquitectura MIRROR lo impone: la Fase 3 tiene una compuerta. La Comprobación de Profundidad de seis puntos del Toolkit #1 debe cumplirse antes de que se abra la Fase 4, y no basta con un formulario completado: dos de sus puntos solo pueden marcarse honestamente si la clienta reveló algo.') },
        { kind: 'check',
          prompt: T('Which of these is the clearest evidence that discovery has actually produced information rather than collected it?',
                    '¿Cuál de estas es la evidencia más clara de que el descubrimiento ha producido información en lugar de recogerla?'),
          options: [
            { id: 'a', text: T('The intake form is complete and legible.', 'El formulario de admisión está completo y legible.') },
            { id: 'b', text: T('She said something and then said "I haven\'t told anyone that" or "sorry, that\'s not really relevant".', 'Ella dijo algo y luego añadió «no se lo he contado a nadie» o «perdona, esto no viene al caso».') },
            { id: 'c', text: T('She agreed with your summary of her concern.', 'Estuvo de acuerdo con tu resumen de su preocupación.') },
            { id: 'd', text: T('She asked about pricing, which shows engagement.', 'Preguntó por precios, lo que muestra interés.') }
          ],
          answer: 'b',
          why: T('Both phrases are disclosure markers: she has just crossed from the rehearsed account into the real one. When you hear either, do not move on and do not reassure — stay exactly where you are and ask one more question about that.',
                 'Ambas frases son marcadores de revelación: acaba de cruzar del relato ensayado al real. Cuando oigas cualquiera de las dos, no avances y no tranquilices: quédate exactamente donde estás y haz una pregunta más sobre eso.') },
        { kind: 'compare',
          prompt: T('Two Discoveries of the same client. Which one produced information?',
                    'Dos Descubrimientos de la misma clienta. ¿Cuál produjo información?'),
          a: { label: T('Discovery A', 'Descubrimiento A'),
               text: T('Eleven questions in six minutes: areas, duration, previous treatments, skincare, sun exposure, medication, allergies, budget range, availability, preferred days, how she heard of us. Complete file.',
                       'Once preguntas en seis minutos: zonas, duración, tratamientos previos, cosmética, exposición solar, medicación, alergias, rango de presupuesto, disponibilidad, días preferidos, cómo nos conoció. Ficha completa.') },
          b: { label: T('Discovery B', 'Descubrimiento B'),
               text: T('Four questions in nine minutes, two of them the same question asked again after a pause. One sentence recorded verbatim: "I stopped putting photos up. That\'s not like me." Two fields of the file still blank.',
                       'Cuatro preguntas en nueve minutos, dos de ellas la misma pregunta repetida tras una pausa. Una frase registrada literal: «Dejé de subir fotos. Eso no es propio de mí». Dos campos de la ficha aún en blanco.') },
          answer: 'b',
          why: T('A has a complete record and no material. Every answer in it was available before she arrived, and none of it tells you what a recommendation should be measured against. B has gaps and one sentence — and that sentence is the criterion every later phase will be judged by. The blank fields can be filled at any time; the sentence had one window.',
                 'A tiene un registro completo y ningún material. Cada respuesta estaba disponible antes de que ella llegara, y ninguna te dice con qué debe medirse una recomendación. B tiene huecos y una frase, y esa frase es el criterio con el que se juzgarán todas las fases posteriores. Los campos en blanco pueden rellenarse en cualquier momento; la frase tenía una sola ventana.') },
        { kind: 'choose',
          prompt: T('Minute four. She has said: "I want something for my skin — my face looks tired." You already have a clear clinical picture. What is the next thing out of your mouth?',
                    'Minuto cuatro. Ha dicho: «Quiero algo para mi piel, tengo la cara cansada». Ya tienes una imagen clínica clara. ¿Qué es lo siguiente que sale de tu boca?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Let\'s have a proper look, and then I can tell you what would actually help."',
                       '«Vamos a mirarlo bien y luego te digo qué te ayudaría de verdad».'),
              why: T('This is the exact sequence the chapter is built on: examine, recommend, price, "I\'ll think about it" — and two weeks later she is in another clinic explaining that somebody there asked her something you did not. Nothing in it is incompetent. It simply collects what she planned to say and then stops.',
                     'Esta es exactamente la secuencia sobre la que se construye el capítulo: explorar, recomendar, poner precio, «me lo voy a pensar», y dos semanas después ella está en otra clínica explicando que allí le preguntaron algo que tú no le preguntaste. No hay nada incompetente en ello. Simplemente recoge lo que ella tenía previsto decir y se detiene.') },
            { id: 'b', verdict: 'best',
              label: T('"Before we look at anything — tell me, what\'s been happening in your life lately?"',
                       '«Antes de mirar nada: cuéntame, ¿qué ha estado pasando en tu vida últimamente?»'),
              why: T('It is deliberately not about skin, which is why it cannot be answered from the rehearsed version. It moves the conversation from what to when and then to why, and that is the only route by which "my face looks tired" becomes "since the divorce I don\'t recognise myself".',
                     'No trata deliberadamente de la piel, y por eso no puede responderse desde la versión ensayada. Lleva la conversación del qué al cuándo y luego al porqué, y esa es la única vía por la que «tengo la cara cansada» se convierte en «desde el divorcio no me reconozco».') },
            { id: 'c', verdict: 'weak',
              label: T('"What is it about your skin that bothers you most?"',
                       '«¿Qué es lo que más te molesta de tu piel?»'),
              why: T('A good question aimed one layer too shallow. It produces a more precise surface answer — the under-eyes, the texture, the jawline — and a more precise surface answer feels like progress while leaving the consultation exactly where it was.',
                     'Una buena pregunta apuntada una capa demasiado arriba. Produce una respuesta de superficie más precisa —las ojeras, la textura, el óvalo— y una respuesta de superficie más precisa parece un avance mientras deja la consulta exactamente donde estaba.') }
          ],
          principle: T('Discovery that collects is not shorter than discovery that produces. It is the same length, and it ends with a complete file and nothing to build on.',
                       'El descubrimiento que recoge no es más corto que el que produce. Dura lo mismo y termina con una ficha completa y nada sobre lo que construir.'),
          retry: {
            note: T('Discovery failing the second way: not too early, but too shallow.',
                    'El descubrimiento fallando de la segunda manera: no demasiado pronto, sino demasiado en superficie.'),
            prompt: T('A different client, eleven minutes in. She has answered everything: the area, when she noticed it, what she has tried, what she can spend. Nothing has gone wrong and nothing has surprised you. You have four minutes left. What does that tell you, and what do you do with them?',
                      'Otra clienta, minuto once. Ha respondido a todo: la zona, cuándo lo notó, qué ha probado, cuánto puede gastar. No ha ido nada mal y nada te ha sorprendido. Te quedan cuatro minutos. ¿Qué te dice eso y qué haces con ellos?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Discovery is complete. Use the four minutes to summarise everything back to her and then move to the examination.',
                         'El descubrimiento está completo. Usar los cuatro minutos para resumirle todo y pasar a la exploración.'),
                why: T('A Discovery in which nothing surprised you has produced nothing you did not have before she arrived. The summary will be accurate, she will agree with it, and the agreement will feel like a gate opening. It is the third failure mode wearing the clothes of the first two being avoided.',
                       'Un Descubrimiento en el que nada te ha sorprendido no ha producido nada que no tuvieras antes de que ella llegara. El resumen será exacto, ella estará de acuerdo y el acuerdo parecerá una compuerta abriéndose. Es el tercer modo de fallo vestido con la ropa de haber evitado los dos primeros.') },
              { id: 'b', verdict: 'best',
                label: T('It tells you the consultation has stayed on the surface. Spend the four minutes on one question about her life rather than her face — and then say nothing for three seconds.',
                         'Te dice que la consulta se ha quedado en la superficie. Emplear los cuatro minutos en una sola pregunta sobre su vida y no sobre su cara, y luego no decir nada durante tres segundos.'),
                why: T('Every answer so far was available to her in the car. The question that has not been asked is the one that connects the face to the year, and the three seconds afterwards are not politeness — the second answer is composed in that pause, and any input at all replaces it with a reaction.',
                       'Todas las respuestas hasta ahora las tenía disponibles en el coche. La pregunta que no se ha hecho es la que conecta el rostro con el año, y los tres segundos posteriores no son cortesía: la segunda respuesta se compone en esa pausa, y cualquier intervención la sustituye por una reacción.') },
              { id: 'c', verdict: 'harmful',
                label: T('It tells you she is an easy case. Use the four minutes to present two options so that she leaves with something concrete.',
                         'Te dice que es un caso fácil. Usar los cuatro minutos para presentarle dos opciones y que se vaya con algo concreto.'),
                why: T('"Easy" here means she has told you nothing you could be wrong about. Options presented now will be evaluated against a criterion you never heard, and the decision will be made later, at home, using information you never asked for.',
                       '«Fácil» aquí significa que no te ha dicho nada en lo que pudieras equivocarte. Las opciones presentadas ahora se evaluarán con un criterio que nunca oíste, y la decisión se tomará después, en casa, con información que nunca pediste.') }
            ],
            principle: T('The gate is not a completed form. Two of the six Depth Check items can only be ticked if she actually disclosed something — and a consultation in which nothing surprised you cannot tick either of them.',
                         'La compuerta no es un formulario completo. Dos de los seis puntos de la Comprobación de Profundidad solo pueden marcarse si ella reveló algo de verdad, y una consulta en la que nada te sorprendió no puede marcar ninguno de los dos.'),
            changes: {
              axis: 'disclosure',
              detail: T('One question about her life rather than her face produces the first thing in eleven minutes she had not prepared: she stopped swimming two years ago, and she has told nobody why.',
                        'Una pregunta sobre su vida en lugar de sobre su cara produce lo primero en once minutos que ella no traía preparado: dejó de nadar hace dos años y no le ha contado a nadie por qué.')
            }
          } }
      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm3l2', n: 2, minutes: 10,
      treatments: [
                    {
                      name: T(
                              'Hyaluronic acid filler — tear trough',
                              'Relleno de ácido hialurónico — surco lagrimal'),
                      price: T('€450 for 1 ml', '450 € por 1 ml'),
                      why: T(
                             'Under-eye work is requested in the most literal vocabulary in the clinic — dark circles, hollows, bags — and literal vocabulary is the hardest to hear past.',
                             'El trabajo de ojeras se pide con el vocabulario más literal de la clínica —ojeras, surcos, bolsas— y el vocabulario literal es el más difícil de trascender.'),
                      moment: T(
                                'She says she looks exhausted all the time, and that people keep telling her she looks tired.',
                                'Dice que tiene cara de agotada todo el rato, y que la gente no para de decirle que se la ve cansada.'),
                      weak: {
                              line: T(
                                      '"A millilitre in the tear trough softens exactly that. It\'s €450, and it\'s one of the treatments people are happiest with."',
                                      '«Un mililitro en el surco lagrimal suaviza justo eso. Son 450 €, y es de los tratamientos con los que la gente queda más contenta.»'),
                              cost: T(
                                      'Correctly matches a product to a complaint, and buys the vehicle without ever asking for the destination. She is not troubled by a hollow; she is troubled by being described out loud by colleagues, and that is not on the price list.',
                                      'Empareja correctamente un producto con un motivo, y compra el vehículo sin preguntar nunca por el destino. No le preocupa un surco: le preocupa que sus compañeros la describan en voz alta, y eso no está en la lista de precios.')
                            },
                      strong: {
                                line: T('"Who keeps telling you?"', '«¿Quién no para de decírtelo?»'),
                                gain: T(
                                        'Two words that move the subject from her face to her life. The answer is a named person in a named room, and the recommendation afterwards is about being seen accurately rather than about a millilitre.',
                                        'Dos palabras que mueven el asunto de su cara a su vida. La respuesta es una persona con nombre en una sala con nombre, y la recomendación posterior va de que la vean bien y no de un mililitro.')
                              }
                    },
                    {
                      name: T(
                              'Laser hair removal — underarms and bikini, course of six',
                              'Depilación láser — axilas e ingles, bono de seis'),
                      price: T('€390 for the course of six', '390 € el bono de seis'),
                      why: T(
                             'Hair removal looks like the one treatment with no feeling underneath it, which is why the translation is skipped here more reliably than anywhere else in the clinic.',
                             'La depilación parece el único tratamiento sin ningún sentimiento debajo, y por eso la traducción se salta aquí con más fiabilidad que en ninguna otra parte de la clínica.'),
                      moment: T(
                                'She says she is sick of thinking about it, and that she wants to stop having to plan around it.',
                                'Dice que está harta de pensar en ello y que quiere dejar de tener que planificar a su alrededor.'),
                      weak: {
                              line: T(
                                      '"Six sessions at €390 and most of that planning goes away. We\'d space them six weeks apart through the winter."',
                                      '«Seis sesiones, 390 €, y esa planificación desaparece en gran parte. Las separaríamos seis semanas durante el invierno.»'),
                              cost: T(
                                      'Sells the vehicle competently. Planning around it is a sentence about spontaneity — about swimming, about staying over, about not checking before she leaves the house — and none of that is said, so nothing distinguishes you from the offer on the corner.',
                                      'Vende el vehículo con solvencia. «Planificar a su alrededor» es una frase sobre espontaneidad —sobre bañarse, sobre quedarse a dormir, sobre no comprobar nada antes de salir de casa— y nada de eso se dice, así que no hay nada que te distinga de la oferta de la esquina.')
                            },
                      strong: {
                                line: T(
                                        '"Plan around it how? Give me an actual week."',
                                        '«¿Planificar cómo? Dame una semana de verdad.»'),
                                gain: T(
                                        'Asks for the week rather than the concept, and a week has events in it. Once the destination is a particular Saturday she was not spontaneous on, six sessions stop being a price and start being the route there.',
                                        'Pide la semana en vez del concepto, y una semana tiene cosas dentro. Cuando el destino es un sábado concreto en el que no fue espontánea, seis sesiones dejan de ser un precio y pasan a ser el camino hasta allí.')
                              }
                    },
                    {
                      name: T('Skin boosters — neck and décolleté', 'Bioestimulación con ácido hialurónico — cuello y escote'),
                      price: T('€700 for two sessions', '700 € las dos sesiones'),
                      why: T(
                             'The neck is almost never the first thing named, so when a woman brings it up unprompted she has usually been thinking about it for a long time in private.',
                             'El cuello casi nunca es lo primero que se nombra, así que cuando una mujer lo saca sin que se lo pidan es que lleva mucho tiempo pensándolo en privado.'),
                      moment: T(
                                'She says the face is fine, it is the neck that gives it away.',
                                'Dice que la cara está bien, que es el cuello lo que la delata.'),
                      weak: {
                              line: T(
                                      '"The neck is often the area people notice last and mind most. Two sessions of boosters there is €700."',
                                      '«El cuello suele ser la zona que la gente nota la última y que más le molesta. Dos sesiones de bioestimulación ahí son 700 €.»'),
                              cost: T(
                                      'Agrees with her and prices the area. Gives it away is the whole sentence, and it contains a gap between a face she is satisfied with and a truth she believes it is concealing.',
                                      'Le da la razón y le pone precio a la zona. «La delata» es la frase entera, y contiene una distancia entre una cara con la que está conforme y una verdad que cree que esa cara oculta.')
                            },
                      strong: {
                                line: T('"Gives what away?"', '«¿Que te delata de qué?»'),
                                gain: T(
                                        'Holds her own word up and asks it to finish. What it gives away is her age, or her exhaustion, or that she is older than her partner, and whichever it is decides everything about what you recommend and in which order.',
                                        'Sostiene su palabra y le pide que la termine. Lo que la delata es la edad, o el agotamiento, o que es mayor que su pareja, y sea lo que sea decide todo lo que recomiendes y en qué orden.')
                              }
                    }
                  ],
      conversation: {
                      setting: T(
                                 'Consultation, tear trough filler, €450 for 1 ml. Minute four, Discovery. She has come with a clear request.',
                                 'Consulta, relleno de surco lagrimal, 450 € por 1 ml. Minuto cuatro, Descubrimiento. Llega con una petición clara.'),
                      before: [
                                {
                                  who: 'client',
                                  line: T(
                                          '"I want something done about these. I look exhausted even when I\'ve slept."',
                                          '«Quiero hacerme algo en esto. Tengo cara de agotada aunque haya dormido.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"I can see what you mean. Can I ask how long that\'s been the case — is it recent, or has it been building for a while?"',
                                          '«Entiendo a qué te refieres. ¿Te puedo preguntar desde cuándo? ¿Es reciente o lleva un tiempo acumulándose?»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"A couple of years, I suppose. It\'s worse this year."',
                                          '«Un par de años, supongo. Este año está peor.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"That fits with what I\'m seeing. There\'s some hollowing, and a millilitre of filler in the tear trough would soften it — that\'s €450, and it lasts well."',
                                          '«Encaja con lo que veo. Hay algo de hundimiento, y un mililitro de relleno en el surco lo suavizaría. Son 450 € y aguanta bien.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"And does it look obvious?"', '«¿Y se nota mucho?»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Not when it\'s done conservatively, which is how I\'d do it. I\'d rather under-fill and see you again at three weeks."',
                                          '«No si se hace de forma conservadora, que es como lo haría yo. Prefiero quedarme corta y volver a verte a las tres semanas.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"Okay. Can you send me the details by email and I\'ll decide?"',
                                          '«Vale. ¿Me lo mandas por correo y lo decido?»')
                                }
                              ],
                      after: [
                               {
                                 who: 'client',
                                 line: T(
                                         '"I want something done about these. I look exhausted even when I\'ve slept."',
                                         '«Quiero hacerme algo en esto. Tengo cara de agotada aunque haya dormido.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Even when you\'ve slept. Is that you deciding that, or is somebody telling you?"',
                                         '«Aunque hayas dormido. ¿Eso lo decides tú o te lo dice alguien?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"My team, mostly. Somebody asked if I was okay in a meeting last week. In front of everyone."',
                                         '«Mi equipo, sobre todo. La semana pasada alguien me preguntó en una reunión si estaba bien. Delante de todos.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"In front of everyone. What did you do for the rest of that meeting?"',
                                         '«Delante de todos. ¿Y qué hiciste el resto de la reunión?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"Talked less. I kept thinking about my face instead of the numbers I was supposed to be presenting."',
                                         '«Hablé menos. Estuve pensando en mi cara en lugar de en los números que tenía que presentar.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"So this isn\'t really about the hollow. It\'s that you want to be in a meeting and be the only thing anyone is reading."',
                                         '«Entonces esto no va del hundimiento. Va de que quieres estar en una reunión y ser tú lo único que la gente lee.»')
                               },
                               {
                                 who: 'client',
                                 line: T('"Yes. God, yes."', '«Sí. Madre mía, sí.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Then let me tell you what I\'d do and what I wouldn\'t. A millilitre in the tear trough is €450, and on its own I don\'t think it does what you just described — I\'d want to talk about the whole of how you arrive in that room."',
                                         '«Pues te digo qué haría y qué no. Un mililitro en el surco son 450 €, y por sí solo no creo que haga lo que acabas de describir: querría hablar de cómo llegas entera a esa sala.»')
                               }
                             ],
                      whatChanged: T(
                                     'The first practitioner asked a good question — how long — and got a season back, which is the answer that question always gets. She then matched a product to a visible finding, priced it honestly and offered a conservative approach, and everything she said was true. What she never acquired was a destination, so the €450 had nothing to be weighed against except other clinics\' €450. The second version treated "even when I\'ve slept" as a clue that somebody else was doing the assessing, and followed it into a meeting room. The treatment discussed at the end is the same treatment. The difference is that it is now being measured against talking less in front of her team, and that is a comparison no competitor has access to.',
                                     'La primera profesional hizo una buena pregunta —desde cuándo— y recibió una estación del año, que es la respuesta que siempre da esa pregunta. Después emparejó un producto con un hallazgo visible, lo cobró con honestidad y ofreció un enfoque conservador, y todo lo que dijo era cierto. Lo que nunca consiguió fue un destino, así que los 450 € no tenían con qué medirse salvo con los 450 € de otras clínicas. La segunda versión trató «aunque haya dormido» como la pista de que estaba valorando otra persona, y la siguió hasta una sala de reuniones. El tratamiento del que se habla al final es el mismo. La diferencia es que ahora se mide contra hablar menos delante de su equipo, y esa es una comparación a la que ningún competidor tiene acceso.'),
                      cost: T(
                              '€450 sent by email, where it is a number on a screen next to three other numbers on three other screens. And the meeting is now the property of whoever asks the second question.',
                              '450 € mandados por correo, donde son una cifra en una pantalla junto a otras tres cifras en otras tres pantallas. Y la reunión pasa a ser propiedad de quien haga la segunda pregunta.')
                    },
      title: T('Translate the sentence', 'Traduce la frase'),
      objective: T('Convert a surface request into the emotional and identity material underneath it, live.',
                   'Convertir una petición de superficie en el material emocional y de identidad que hay debajo, en directo.'),
      provenance: {
        chapter: [3, 9],
        principle: T('Stop selling the treatment and start translating the feeling: the treatment is the vehicle, the feeling is the destination.',
                     'Deja de vender el tratamiento y empieza a traducir el sentimiento: el tratamiento es el vehículo, el sentimiento es el destino.'),
        phase: 'discovery',
        trustStage: 'understanding',
        standard: 2,
        duty: 3,
        toolkit: 3
      },
      depth: {
        whyItGoesWrong: T(
            'Naming out loud what a symptom means emotionally can feel like an impertinence — telling a grown woman what she really meant — so the cautious course is to stay inside the vocabulary she supplied. That caution is respect for her own account of herself, and it is misplaced. Chapter 3\'s translation is not a ruling handed down; it is a draft offered up for her to amend. Nor is literalism neutral. It notifies her that the vehicle was all you wanted, and that the destination is none of your business.',
            'Nombrar en voz alta lo que un síntoma significa emocionalmente puede parecer una impertinencia —decirle a una mujer adulta lo que en realidad quería decir—, así que lo prudente es quedarse dentro del vocabulario que ella ha suministrado. Esa prudencia es respeto por el relato que ella hace de sí misma, y está mal colocada. La traducción del capítulo 3 no es un veredicto dictado desde arriba: es un borrador que se ofrece para que ella lo enmiende. Y el literalismo tampoco es neutral. Le notifica que el vehículo era todo lo que querías y que el destino no es asunto tuyo.'),
        sheIsThinking: T(
            'I phrased it the way it is supposed to be phrased. For the other part I genuinely have no vocabulary.',
            'Lo he formulado como se supone que hay que formularlo. Para la otra parte, de verdad que no tengo vocabulario.'),
        ladder: {
          weak: {
            line:   T(
                '"Tired skin — so dehydration, some loss of elasticity. We have three options."',
                '«Piel cansada: entonces deshidratación, algo de pérdida de elasticidad. Tenemos tres opciones.»'),
            effect: T(
                'Chapter 3\'s standard approach, printed alongside the alternative. Technically flawless, emotionally over, and she leaves holding three figures to set against three figures elsewhere.',
                'Es el enfoque estándar del capítulo 3, impreso junto a la alternativa. Técnicamente impecable, emocionalmente acabado, y ella se marcha con tres cifras para contrastar con otras tres cifras de otro sitio.')
          },
          average: {
            line:   T(
                '"What have you tried so far?"',
                '«¿Qué has probado hasta ahora?»'),
            effect: T(
                'Clinically worth knowing, and it parks the exchange among jars and tubes. You end up acquainted with her bathroom shelf rather than with what put anything on it.',
                'Clínicamente vale la pena saberlo, y aparca el intercambio entre botes y tubos. Acabas conociendo el estante de su baño y no aquello que puso ahí lo que hay.')
          },
          strong: {
            line:   T(
                '"Tell me — when do you feel your skin looks least like how you feel on the inside?"',
                '«Dime: ¿cuándo sientes que tu piel se parece menos a cómo te sientes por dentro?»'),
            effect: T(
                'Chapter 3\'s MIRROR alternative, printed against the standard one. It asks for an occasion rather than a condition, so what returns has other human beings in it.',
                'Es la alternativa MIRROR del capítulo 3, impresa frente a la estándar. Pide una ocasión y no una condición, así que lo que vuelve trae dentro a otros seres humanos.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The client speaks in surface', 'La clienta habla en superficie'),
          body: [
            T('Clients rarely present their real concern first, and not because they are hiding it. They present the version that is socially acceptable to say to a stranger in a clinical room. Your job is not to expose them; it is to make the second version safe to say.',
              'Las clientas rara vez presentan primero su preocupación real, y no porque la escondan. Presentan la versión que es socialmente aceptable decirle a un desconocido en una sala clínica. Tu trabajo no es exponerlas; es hacer que la segunda versión sea segura de decir.'),
            T('The translation instrument is simple: take the noun she used, and ask what it does to her life. "Lines" becomes "what do the lines change for you?". "Tired" becomes "who tells you that you look tired?".',
              'El instrumento de traducción es simple: toma el sustantivo que usó y pregunta qué le hace a su vida. «Líneas» se convierte en «¿qué te cambian esas líneas?». «Cansada» se convierte en «¿quién te dice que pareces cansada?».')
          ] },
        { kind: 'translate',
          prompt: T('For each surface sentence, write the question that opens the layer beneath it. Then compare with the model answer.',
                    'Para cada frase de superficie, escribe la pregunta que abre la capa que hay debajo. Luego compárala con la respuesta modelo.'),
          items: [
            { id: 't1',
              client: T('"I just want to look less tired."', '«Solo quiero parecer menos cansada».'),
              model: T('"Who has said you look tired — or is it you, in photographs?"', '«¿Quién te ha dicho que pareces cansada, o eres tú, en las fotos?»'),
              note: T('The word "tired" almost always came from someone else\'s mouth first. Finding out whose changes the whole recommendation.',
                      'La palabra «cansada» casi siempre salió antes de la boca de otra persona. Descubrir de quién cambia toda la recomendación.') },
            { id: 't2',
              client: T('"I want it to look natural."', '«Quiero que quede natural».'),
              model: T('"What would unnatural look like, to you? Have you seen it on someone?"', '«¿Qué aspecto tendría lo poco natural, para ti? ¿Se lo has visto a alguien?»'),
              note: T('"Natural" is not a description, it is a fear with a specific face attached — usually a friend, a colleague, or a public figure. Ask for the face.',
                      '«Natural» no es una descripción, es un miedo con un rostro concreto detrás: normalmente una amiga, una colega o una figura pública. Pide el rostro.') },
            { id: 't3',
              client: T('"I\'m probably being vain."', '«Seguramente soy una vanidosa».'),
              model: T('"You\'re allowed to want this. What made you decide to come now, after thinking about it for a while?"',
                       '«Tienes derecho a quererlo. ¿Qué te hizo decidir venir ahora, después de darle vueltas un tiempo?»'),
              note: T('This is a permission objection appearing early. Answer the permission first; if you go straight to "why now", she will hear it as agreement that she is vain.',
                      'Es una objeción de permiso que aparece pronto. Responde primero al permiso; si vas directo al «por qué ahora», lo oirá como una confirmación de que es vanidosa.') },
            { id: 't4',
              client: T('"My friend had it done here and it was fine."', '«Una amiga se lo hizo aquí y quedó bien».'),
              model: T('"And what did you notice about hers that you\'d want — or would not want?"',
                       '«¿Y qué notaste en el suyo que querrías, o que no querrías?»'),
              note: T('A referral sentence is also a comparison she has already run. She has an opinion about the result and has not offered it.',
                      'Una frase de recomendación es también una comparación que ella ya ha hecho. Tiene una opinión sobre el resultado y no la ha ofrecido.') }
          ] },
        { kind: 'choose',
          prompt: T('She says: "It\'s not that bad. I know women with much worse." What is the MIRROR-consistent next move?',
                    'Ella dice: «Tampoco es para tanto. Conozco a mujeres que lo tienen mucho peor». ¿Cuál es el siguiente paso coherente con MIRROR?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"It\'s not about comparing — if it bothers you, it\'s worth treating."',
                       '«No se trata de comparar: si te molesta, merece tratarse».'),
              why: T('Kind, and it closes the door. You answered her self-deprecation with a principle instead of following it. She was minimising to check whether you would let her.',
                     'Amable, y cierra la puerta. Has respondido a su autocrítica con un principio en lugar de seguirla. Estaba minimizando para comprobar si se lo permitías.') },
            { id: 'b', verdict: 'best',
              label: T('"You\'ve compared yourself to other women before coming here. How long has that been going on?"',
                       '«Te has comparado con otras mujeres antes de venir. ¿Cuánto tiempo llevas con eso?»'),
              why: T('You did not argue with the minimisation — you took it seriously as data. The comparison habit is the actual material, and the duration answer is almost always longer than the presenting complaint suggests.',
                     'No has discutido la minimización: la has tomado en serio como dato. El hábito de compararse es el material real, y la respuesta sobre el tiempo casi siempre es más larga de lo que sugiere el motivo de consulta.') },
            { id: 'c', verdict: 'weak',
              label: T('"Let\'s have a look and I\'ll tell you honestly how significant it is."',
                       '«Vamos a verlo y te digo con honestidad cómo de significativo es».'),
              why: T('You transferred the judgement to the mirror and the clinical eye. She will now wait for your verdict on whether she is allowed to care, which is the opposite of what Discovery is for.',
                     'Has transferido el juicio al espejo y al ojo clínico. Ahora esperará tu veredicto sobre si tiene derecho a que le importe, que es lo contrario de para lo que sirve el Descubrimiento.') }
          ],
          principle: T('Minimisation is an invitation, not a conclusion. Follow it; never correct it.',
                       'La minimización es una invitación, no una conclusión. Síguela; nunca la corrijas.'),
          retry: {
            note: T('The same translation, on a client who is being efficient rather than defensive.',
                    'La misma traducción, con una clienta que está siendo eficiente y no defensiva.'),
            prompt: T('Second appointment of the morning. Rocío, 44, has now given you the same sentence twice: "It\'s the pigmentation, that\'s all. I just want it evened out." Every answer is one line, pleasant and complete. Which question do you ask next?',
                      'Segunda cita de la mañana. Rocío, 44, ya te ha dado dos veces la misma frase: «Es la pigmentación, nada más. Solo quiero que se unifique». Todas sus respuestas son de una línea, amables y completas. ¿Qué preguntas ahora?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"How long have you had it? And has it changed at all over the summer?"',
                         '«¿Cuánto tiempo llevas con ella? ¿Y ha cambiado algo este verano?»'),
                why: T('A good clinical question arriving too early. She will give you a date and a season, both accurate, and the consultation will have acquired a history and no person. Chapter 9\'s move is not "when did it appear" but "when did it start bothering you" — the two sound almost identical and return completely different material.',
                       'Una buena pregunta clínica que llega demasiado pronto. Te dará una fecha y una estación, las dos exactas, y la consulta se habrá quedado con un historial y sin persona. El movimiento del capítulo 9 no es «cuándo apareció», sino «cuándo empezó a molestarte»: suenan casi igual y devuelven material completamente distinto.') },
              { id: 'b', verdict: 'best',
                label: T('"Is there anything you do differently because of it — something you\'ve stopped doing, or always do first?"',
                         '«¿Hay algo que hagas distinto por eso: algo que hayas dejado de hacer, o que hagas siempre antes?»'),
                why: T('This is the third of Chapter 9\'s five questions, and it is the one that works on a client who is not going to volunteer a feeling. It asks about behaviour, which she can answer as fact without feeling exposed, and behaviour is where the feeling is kept. A woman who never leaves the house without foundation has just told you what pigmentation costs her without saying anything about herself.',
                       'Es la tercera de las cinco preguntas del capítulo 9, y es la que funciona con una clienta que no va a ofrecer un sentimiento. Pregunta por la conducta, que ella puede responder como dato sin sentirse expuesta, y la conducta es donde se guarda el sentimiento. Una mujer que no sale de casa sin base de maquillaje te acaba de decir lo que le cuesta la pigmentación sin decir nada de sí misma.') },
              { id: 'c', verdict: 'harmful',
                label: T('"It\'s very treatable, honestly — most of that will lift in about three sessions."',
                         '«Se trata muy bien, de verdad: la mayor parte se va en unas tres sesiones».'),
                why: T('Encouraging, probably accurate, and it ends the discovery. You answered a question she did not ask, before any examination, with a number of sessions attached. She now has a price to think about and no motive to say anything further — and if the pigment turns out to be melasma, the sentence has become an undertaking you will have to walk back.',
                       'Alentador, probablemente exacto, y termina el descubrimiento. Has respondido a una pregunta que no hizo, antes de cualquier valoración, y con un número de sesiones pegado. Ahora tiene un precio en la cabeza y ningún motivo para decir nada más; y si el pigmento resulta ser un melasma, la frase se ha convertido en una promesa que tendrás que retirar.') }
            ],
            principle: T('The noun she repeats is the vehicle. Ask what the noun makes her do, and she hands you the destination without ever having to name a feeling.',
                         'El sustantivo que repite es el vehículo. Pregunta qué le hace hacer ese sustantivo y te entregará el destino sin tener que nombrar ningún sentimiento.'),
            changes: {
              axis: 'disclosure',
              detail: T('She answers with two facts and no feelings: she puts foundation on before she takes the bins out, and she has not been swimming since 2019. Neither would have come from a date. Both go into Toolkit #3 in her own words, and the second one is the yardstick her Phase 6 recommendation will be judged by.',
                        'Responde con dos datos y ningún sentimiento: se pone base antes de bajar la basura y no se ha metido en una piscina desde 2019. Ninguno de los dos habría salido de una fecha. Los dos entran en el Toolkit #3 con sus palabras, y el segundo es la vara con la que se medirá su recomendación de la Fase 6.')
            }
          } },
        { kind: 'reveal',
          prompt: T('She has just corrected herself. What did that tell you?',
                    'Acaba de corregirse. ¿Qué te ha dicho eso?'),
          client: T('"It makes me look angry all the time. Well — not angry. Tired. It makes me look tired."',
                    '«Hace que parezca enfadada todo el rato. Bueno, enfadada no. Cansada. Hace que parezca cansada».'),
          guesses: [
            { id: 'a', text: T('She has clarified, and "tired" is the accurate word to record.', 'Ha aclarado, y «cansada» es la palabra exacta que hay que registrar.') },
            { id: 'b', text: T('The first version was the true one; the correction was made for your benefit.', 'La primera versión era la verdadera; la corrección la hizo para ti.') },
            { id: 'c', text: T('She is uncertain about what bothers her.', 'No tiene claro qué le molesta.') }
          ],
          answer: 'b',
          truth: T('"Angry" arrived first and was withdrawn within two seconds, which is the shape of a word that felt too exposing to leave in the room. "Tired" is socially safe: everyone is tired. Somebody has told her she looks angry, and that is the sentence the consultation is actually about.',
                   '«Enfadada» llegó primero y se retiró en dos segundos, que es la forma de una palabra que resultó demasiado expuesta para dejarla en la sala. «Cansada» es socialmente segura: todo el mundo está cansado. Alguien le ha dicho que parece enfadada, y esa es la frase de la que trata realmente la consulta.'),
          why: T('The move is the self-correction mirror: "You said angry first. Can we stay with that?" Recording "tired" in Toolkit #3 field 6 would preserve the safe version and lose the real one — and every later phase would be built on it.',
                 'El movimiento es el espejo de autocorrección: «Primero has dicho enfadada. ¿Nos quedamos con eso?». Registrar «cansada» en el campo 6 del Toolkit #3 conservaría la versión segura y perdería la real, y todas las fases posteriores se construirían sobre ella.') }
      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm3l3', n: 3, minutes: 13,
      treatments: [
                    {
                      name: T('Chemical peel — course of four', 'Peeling químico — bono de cuatro'),
                      price: T('€520 for four sessions', '520 € el bono de cuatro'),
                      why: T(
                             'A peel course is short, cheap and clinically straightforward, which is exactly why it gets a two-question discovery instead of a five-question one.',
                             'Un bono de peelings es corto, barato y clínicamente sencillo, y por eso mismo recibe un descubrimiento de dos preguntas en lugar de uno de cinco.'),
                      moment: T(
                                'She has answered what brought her in and when it started, and the form has enough on it to proceed.',
                                'Ya ha contestado qué la trae y desde cuándo, y el formulario tiene lo suficiente para seguir adelante.'),
                      weak: {
                              line: T(
                                      '"That\'s everything I need. Four sessions at €520, one a month, and I\'ll write out the home care for between them."',
                                      '«Con eso ya tengo todo. Cuatro sesiones, 520 €, una al mes, y te escribo el cuidado de casa para el intermedio.»'),
                              cost: T(
                                      'Stops at question two, which is where the facts live. Questions three, four and five are where the reason she attends all four lives, and a course bought on facts is abandoned after the second one.',
                                      'Se detiene en la pregunta dos, que es donde viven los hechos. Las preguntas tres, cuatro y cinco son donde vive el motivo por el que acude a las cuatro, y un bono comprado sobre hechos se abandona después de la segunda.')
                            },
                      strong: {
                                line: T(
                                        '"One more before I write anything. What happens in your life because of this?"',
                                        '«Una más antes de que escriba nada. ¿Qué pasa en tu vida por culpa de esto?»'),
                                gain: T(
                                        'Question three is the one that changes the register from skin to living. Her answer is the sentence you will repeat at session three when she is tired of coming.',
                                        'La pregunta tres es la que cambia el registro de la piel a la vida. Su respuesta es la frase que le repetirás en la tercera sesión, cuando esté cansada de venir.')
                              }
                    },
                    {
                      name: T('Tensor threads — jawline', 'Hilos tensores — óvalo facial'),
                      price: T('€1,600, six to eight threads', '1.600 €, de seis a ocho hilos'),
                      why: T(
                             'At €1,600 the five questions are the only thing standing between a recommendation and a quotation, because a quotation is what she will take to two other clinics.',
                             'A 1.600 €, las cinco preguntas son lo único que separa una recomendación de un presupuesto, porque un presupuesto es lo que se va a llevar a otras dos clínicas.'),
                      moment: T(
                                'She has told you she wants her jawline back, and you have everything you need to describe the procedure.',
                                'Te ha dicho que quiere recuperar su óvalo, y ya tienes todo lo necesario para describir el procedimiento.'),
                      weak: {
                              line: T(
                                      '"Then threads are what I\'d recommend. Six to eight, around €1,600, done under local anaesthetic in about an hour."',
                                      '«Pues yo te recomendaría hilos. De seis a ocho, unos 1.600 €, con anestesia local y en una hora más o menos.»'),
                              cost: T(
                                      'A professional answer to the question she asked. It also completes the appointment at question one, and what she takes away is a specification that can be shopped.',
                                      'Es una respuesta profesional a la pregunta que ha hecho. También cierra la cita en la pregunta uno, y lo que se lleva es una especificación que se puede ir a comparar.')
                            },
                      strong: {
                                line: T(
                                        '"Back. What would you like to feel — not look like, but feel?"',
                                        '«Recuperar. ¿Qué te gustaría sentir? No verte: sentir.»'),
                                gain: T(
                                        'Question four is the bridge, and the word back was the invitation to cross it. The answer is always about identity, and identity is the one thing another clinic cannot quote for.',
                                        'La pregunta cuatro es el puente, y la palabra «recuperar» era la invitación a cruzarlo. La respuesta va siempre de identidad, y la identidad es lo único que otra clínica no puede presupuestar.')
                              }
                    }
                  ],
      title: T('The five questions', 'Las cinco preguntas'),
      objective: T('Run the five-question sequence in order, and know what each one is for.',
                   'Ejecutar la secuencia de cinco preguntas en orden y saber para qué sirve cada una.'),
      provenance: {
        chapter: 9,
        principle: T('You do not need fifty questions. You need five, and the ability to listen deeply to the answers.',
                     'No necesitas cincuenta preguntas. Necesitas cinco y la capacidad de escuchar a fondo las respuestas.'),
        phase: 'discovery',
        trustStage: 'attention',
        standard: 2,
        duty: 2,
        toolkit: 1
      },
      depth: {
        whyItGoesWrong: T(
            'Five questions on a page resemble a questionnaire, and anyone determined to do the job properly will put all five, in sequence, and minute the replies. Diligence converts excavation into admissions paperwork. The sequence in Chapter 9 works because each question is manufactured out of the reply preceding it. Fired off a page instead of off her last clause, the fourth arrives while the second is still working, and she meets it with something plausible and false.',
            'Cinco preguntas sobre una hoja se parecen a un cuestionario, y quien esté decidida a hacer bien su trabajo las planteará las cinco, en secuencia, y levantará acta de las respuestas. La diligencia convierte la excavación en papeleo de admisión. La secuencia del capítulo 9 funciona porque cada pregunta se fabrica a partir de la respuesta que la precede. Disparada desde una hoja y no desde la última frase de ella, la cuarta llega mientras la segunda aún está trabajando, y la clienta la recibe con algo plausible y falso.'),
        sheIsThinking: T(
            'These are good questions. She will put the next one whatever I reply, so I shall keep my replies neat.',
            'Son buenas preguntas. Va a plantear la siguiente responda yo lo que responda, así que mantendré mis respuestas aseadas.'),
        ladder: {
          weak: {
            line:   T(
                '"Right. And what would you like to feel when you look in the mirror?"',
                '«Muy bien. ¿Y qué te gustaría sentir cuando te miras al espejo?»'),
            effect: T(
                'Question four, arriving on schedule. It strides over the fact she has just handed you, and she meets it from the surface because nothing has opened up yet.',
                'Es la pregunta cuatro, llegando puntual. Pasa por encima del dato que ella acaba de entregarte, y lo recibe desde la superficie porque todavía no se ha abierto nada.')
          },
          average: {
            line:   T(
                '"And how has all that been?"',
                '«¿Y cómo ha ido todo eso?»'),
            effect: T(
                'Wide open, friendly and unfocused. What returns is a précis of the year rather than the particular week inside the year that produced the booking.',
                'Es amplia, amable y sin foco. Lo que vuelve es un compendio del año en lugar de la semana concreta dentro de ese año que produjo la reserva.')
          },
          strong: {
            line:   T(
                '"What happened around then?"',
                '«¿Qué pasó por esa época?»'),
            effect: T(
                'Question two, manufactured out of her own last clause. A date is where narrative lives, and Shira\'s whole disclosure in Chapter 9 hangs off this exact move.',
                'Es la pregunta dos, fabricada a partir de su propia frase anterior. Una fecha es donde vive el relato, y toda la confidencia de Shira en el capítulo 9 cuelga justo de este movimiento.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('A sequence, not a list', 'Una secuencia, no una lista'),
          body: [
            T('The five questions are ordered deliberately. Each one is only answerable because the previous one was asked. Delivered out of order, they read as an interrogation; delivered in order, the client experiences them as being taken seriously.',
              'Las cinco preguntas están ordenadas de forma deliberada. Cada una solo puede responderse porque se hizo la anterior. Fuera de orden, suenan a interrogatorio; en orden, la clienta las vive como que se la toma en serio.')
          ] },
        { kind: 'order',
          prompt: T('Put the five discovery questions into the order the method uses.',
                    'Ordena las cinco preguntas de descubrimiento según el orden que usa el método.'),
          items: [
            { id: 'q_what', text: T('"What made you decide to come in?" — the opening, deliberately about the decision and not the face.',
                                     '«¿Qué te hizo decidir venir?» — la apertura, deliberadamente sobre la decisión y no sobre el rostro.') },
            { id: 'q_why', text: T('"Why now, rather than last year?" — locates the event that turned a thought into an appointment.',
                                    '«¿Por qué ahora y no el año pasado?» — localiza el acontecimiento que convirtió un pensamiento en una cita.') },
            { id: 'q_tried', text: T('"What have you already tried, and what happened?" — surfaces prior experience, including the bad one.',
                                      '«¿Qué has probado ya y qué pasó?» — hace aflorar la experiencia previa, incluida la mala.') },
            { id: 'q_change', text: T('"If this went well, what would actually be different for you?" — converts a treatment into a life outcome.',
                                       '«Si esto saliera bien, ¿qué sería distinto para ti de verdad?» — convierte un tratamiento en un resultado de vida.') },
            { id: 'q_worry', text: T('"What would worry you about doing something?" — invites the objection now, while it is still cheap.',
                                      '«¿Qué te preocuparía de hacerte algo?» — invita a la objeción ahora, mientras todavía es barata.') }
          ],
          correct: ['q_what', 'q_why', 'q_tried', 'q_change', 'q_worry'],
          why: T('The fifth question is the one practitioners drop, because inviting an objection feels like manufacturing one. It is the opposite: an objection raised in Phase 3 is information, and an objection raised in Phase 7 is a refusal with a reason attached. You are choosing which one you get.',
                 'La quinta pregunta es la que los profesionales suprimen, porque invitar a una objeción parece fabricarla. Es al contrario: una objeción planteada en la Fase 3 es información, y una planteada en la Fase 7 es un rechazo con motivo. Estás eligiendo cuál de las dos recibes.') },
        { kind: 'signal',
          avatar: 'shira',
          name: T('Practice fragment — Shira, 44', 'Fragmento de práctica — Shira, 44'),
          client: T('"Why now? I don\'t know. No particular reason. I just had a free morning." — She looks at the window while she says it, and her hand goes to the side of her neck.',
                    '«¿Por qué ahora? No sé. Por nada en concreto. Tenía la mañana libre». — Lo dice mirando a la ventana y se lleva la mano al lateral del cuello.'),
          prompt: T('What have you just been told?', '¿Qué te acaban de decir?'),
          notice: [
            T('The verbal answer is a deflection: "no particular reason" is almost never true of someone who booked, travelled and sat down.',
              'La respuesta verbal es una evasiva: «por nada en concreto» casi nunca es cierto en alguien que pidió cita, se desplazó y se sentó.'),
            T('The hand answered a different question than the mouth. She touched the neck — an area she has not mentioned once.',
              'La mano respondió a una pregunta distinta que la boca. Se tocó el cuello: una zona que no ha mencionado ni una vez.'),
            T('Looking away is not evasion here; it is the standard behaviour of someone deciding whether to say the real answer. The next few seconds decide which version you get.',
              'Apartar la mirada aquí no es evasión: es la conducta típica de quien decide si dice la respuesta real. Los siguientes segundos deciden qué versión recibes.')
          ] },
        { kind: 'choose',
          prompt: T('Shira, immediately after. What do you do?', 'Shira, justo después. ¿Qué haces?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"That\'s fine — plenty of people come with no specific trigger. Shall we look at the areas that bother you?"',
                       '«No pasa nada, mucha gente viene sin un motivo concreto. ¿Miramos las zonas que te molestan?»'),
              why: T('You accepted the deflection and moved to the face. Everything after this point will be built on the rehearsed version. Note that she will be perfectly pleasant for the rest of the consultation — that is what makes this error so hard to notice.',
                     'Has aceptado la evasiva y has pasado al rostro. Todo lo que venga después se construirá sobre la versión ensayada. Fíjate en que ella será perfectamente amable el resto de la consulta: eso es lo que hace tan difícil detectar este error.') },
            { id: 'b', verdict: 'best',
              label: T('Say nothing for three seconds. Then: "You touched your neck just then."',
                       'No decir nada durante tres segundos. Luego: «Te has tocado el cuello ahora mismo».'),
              why: T('You named the body\'s answer without interpreting it, and left the sentence open. This is the highest-yield instrument in Discovery: it is not a question, so it cannot be answered "no", and it gives her permission to say the thing she came for.',
                     'Has nombrado la respuesta del cuerpo sin interpretarla y has dejado la frase abierta. Es el instrumento de mayor rendimiento del Descubrimiento: no es una pregunta, así que no puede responderse «no», y le da permiso para decir aquello por lo que vino.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Is it the neck that\'s really bothering you? A lot of women your age find that\'s the first thing to go."',
                       '«¿Es el cuello lo que de verdad te molesta? A muchas mujeres de tu edad es lo primero que se les nota».'),
              why: T('You were right about the neck and you destroyed the moment anyway. You diagnosed her privately-held concern out loud, attached an age category to it, and told her what happens to women like her. She will now confirm politely and disclose nothing further.',
                     'Has acertado con el cuello y aun así has destruido el momento. Has diagnosticado en voz alta su preocupación privada, le has puesto una categoría de edad y le has dicho lo que les pasa a las mujeres como ella. Ahora confirmará con educación y no revelará nada más.') }
          ],
          principle: T('Name the signal, not the meaning. The client supplies the meaning, and the meaning she supplies is the one your recommendation can be built on.',
                       'Nombra la señal, no el significado. El significado lo aporta la clienta, y el significado que ella aporta es sobre el que puede construirse tu recomendación.'),
          retry: {
            note: T('A different client, and the first of the five questions still not landed.',
                    'Otra clienta, y la primera de las cinco preguntas todavía sin acertar.'),
            prompt: T('Marta, 39. You asked what brought her in. She said: "I\'ve been meaning to come for about two years, honestly." She is waiting for the next question. What is it?',
                      'Marta, 39. Le preguntaste qué la traía. Dijo: «Llevo como dos años diciendo que tengo que venir, la verdad». Espera la siguiente pregunta. ¿Cuál es?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Two years is a long time to think about something. What was stopping you?"',
                         '«Dos años es mucho tiempo dándole vueltas. ¿Qué te lo impedía?»'),
                why: T('A real question pointing backwards, into the reasons for not coming. She will give you a list of true and practical ones — money, time, the children — and none of them is the trigger. You will learn why the last two years happened and nothing about why today did.',
                       'Una pregunta de verdad que apunta hacia atrás, a los motivos para no venir. Te dará una lista de razones ciertas y prácticas —dinero, tiempo, los niños— y ninguna es el detonante. Averiguarás por qué ocurrieron los dos últimos años y nada sobre por qué ocurrió hoy.') },
              { id: 'b', verdict: 'best',
                label: T('"Two years. So why today, rather than any of the other days in those two years?"',
                         '«Dos años. ¿Y por qué hoy, y no cualquiera de los otros días de esos dos años?»'),
                why: T('The word doing the work is today. Two years of thinking is the background; something moved in the last few weeks and turned a thought into an appointment. The answer to why now is the emotional trigger, and it is what your recommendation will eventually have to be measured against.',
                       'La palabra que hace el trabajo es hoy. Dos años de darle vueltas son el fondo; algo se movió en las últimas semanas y convirtió un pensamiento en una cita. La respuesta al por qué ahora es el detonante emocional, y es aquello con lo que tendrá que medirse tu recomendación.') },
              { id: 'c', verdict: 'weak',
                label: T('"Well, I\'m glad you finally did. What would you like us to look at?"',
                         '«Pues me alegro de que por fin vinieras. ¿Qué te gustaría que miráramos?»'),
                why: T('Warm, and it closes the door she just opened. She volunteered a two-year delay — an unusually generous piece of information — and received an invitation to name an area. From here the consultation runs on the surface and stays there.',
                       'Cálido, y cierra la puerta que ella acaba de abrir. Te ofreció una espera de dos años —una información inusualmente generosa— y recibió una invitación a nombrar una zona. A partir de aquí la consulta corre por la superficie y ahí se queda.') }
            ],
            principle: T('Question one is not "what brought you in". It is "what made TODAY the day". The difference between those two is the difference between a history and a trigger.',
                         'La primera pregunta no es «qué te trae». Es «qué ha hecho que HOY sea el día». La diferencia entre las dos es la diferencia entre un historial y un detonante.'),
            changes: {
              axis: 'disclosure',
              detail: T('The two years become a date. She tells you about the photograph taken three weeks ago for the new staff page — the trigger, which no amount of history would have produced.',
                        'Los dos años se convierten en una fecha. Te cuenta la foto que le hicieron hace tres semanas para la nueva página del equipo: el detonante, que ningún historial habría producido.')
            }
          } },
        { kind: 'reveal',
          prompt: T('You named the signal and waited. Shira says: "God, do I do that? ... It\'s my neck, yes. My daughter filmed me at her birthday and I saw it from the side. I haven\'t told anyone that." What is the operative sentence?',
                    'Nombraste la señal y esperaste. Shira dice: «Madre mía, ¿hago eso? ... Es mi cuello, sí. Mi hija me grabó en su cumpleaños y me vi de perfil. No se lo he contado a nadie». ¿Cuál es la frase operativa?'),
          client: T('"I haven\'t told anyone that."', '«No se lo he contado a nadie».'),
          guesses: [
            { id: 'a', text: T('"My neck" — the treatment area is now identified.', '«Mi cuello» — la zona de tratamiento ya está identificada.') },
            { id: 'b', text: T('"My daughter filmed me" — the trigger event.', '«Mi hija me grabó» — el acontecimiento desencadenante.') },
            { id: 'c', text: T('"I haven\'t told anyone that" — the disclosure marker.', '«No se lo he contado a nadie» — el marcador de revelación.') }
          ],
          answer: 'c',
          truth: T('All three matter, but only one tells you where you are. The disclosure marker means she has just moved from the rehearsed account into the real one, and it comes with a short window. What you say next either keeps the window open or closes it for the rest of the consultation.',
                   'Las tres importan, pero solo una te dice dónde estás. El marcador de revelación significa que acaba de pasar del relato ensayado al real, y viene con una ventana breve. Lo que digas a continuación mantiene esa ventana abierta o la cierra para el resto de la consulta.'),
          why: T('The correct next move is almost nothing: "Thank you for telling me." Then silence. Practitioners lose this moment by immediately becoming useful.',
                 'El siguiente movimiento correcto es casi nada: «Gracias por contármelo». Y silencio. Los profesionales pierden este momento por ponerse a ser útiles de inmediato.') }
      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm3l4', n: 4, minutes: 10,
      treatments: [
                    {
                      name: T('Botulinum toxin — forehead only', 'Toxina botulínica — solo frente'),
                      price: T('€190 for one area', '190 € una zona'),
                      why: T(
                             'Toxin generates more anxious questions than anything else in the clinic, and every one of them has a reassuring answer available immediately.',
                             'La toxina genera más preguntas ansiosas que ninguna otra cosa de la clínica, y todas tienen una respuesta tranquilizadora disponible al instante.'),
                      moment: T(
                                'She asks, carefully, whether she will still be able to look surprised.',
                                'Pregunta, con cuidado, si va a poder seguir poniendo cara de sorpresa.'),
                      weak: {
                              line: T(
                                      '"Yes — with the dose I\'d use in the forehead you keep expression. You\'d still have your face, it just softens the lines at rest."',
                                      '«Sí. Con la dosis que usaría en la frente conservas expresión. Sigues teniendo tu cara, solo se suavizan las líneas en reposo.»'),
                              cost: T(
                                      'Accurate, calming and it closes the subject in one move. Behind that question there was a reason she chose the word surprised, and the reassurance has now made it impossible to ask for.',
                                      'Es exacto, calma y cierra el tema de una sola vez. Detrás de esa pregunta había un motivo para elegir la palabra «sorpresa», y la tranquilización ha hecho imposible pedirlo.')
                            },
                      strong: {
                                line: T(
                                        '"I\'ll answer that properly in a second. Why surprised, out of everything?"',
                                        '«Te lo contesto bien ahora mismo. ¿Por qué sorprendida, de entre todo?»'),
                                gain: T(
                                        'Promises the reassurance and defers it by ten seconds, which is the whole technique. The word was chosen for a reason — a photograph, a comment, a woman she does not want to resemble — and the reason is worth more than the answer.',
                                        'Promete la tranquilización y la aplaza diez segundos, que es toda la técnica. La palabra estaba elegida por algo —una foto, un comentario, una mujer a la que no quiere parecerse— y ese algo vale más que la respuesta.')
                              }
                    },
                    {
                      name: T('Melasma programme — six months', 'Programa de melasma — seis meses'),
                      price: T('€1,300 across six months', '1.300 € repartidos en seis meses'),
                      why: T(
                             'Pigmentation is the area where a client most often asks whether it will come back, and where the honest answer is complicated enough that reassurance is tempting.',
                             'La pigmentación es el terreno donde la clienta pregunta más a menudo si volverá, y donde la respuesta honesta es lo bastante complicada como para que tranquilizar resulte tentador.'),
                      moment: T(
                                'She asks whether it will come back next summer, and she asks it looking at the floor.',
                                'Pregunta si le volverá el verano que viene, y lo pregunta mirando al suelo.'),
                      weak: {
                              line: T(
                                      '"With good protection and the home routine, most people manage it well over the summer. It\'s something we keep an eye on together."',
                                      '«Con buena protección y la rutina de casa, la mayoría lo lleva bien durante el verano. Es algo que vigilamos juntas.»'),
                              cost: T(
                                      'A careful, defensible answer to a question that was not really a request for information. She asked it at the floor, which means it was a question about whether six months of her life are worth spending, and that question is still unanswered.',
                                      'Es una respuesta cuidadosa y defendible a una pregunta que no era realmente una petición de información. La ha hecho mirando al suelo, o sea que era una pregunta sobre si merece la pena gastar seis meses de su vida, y esa pregunta sigue sin contestar.')
                            },
                      strong: {
                                line: T('"Has it come back before?"', '«¿Te ha vuelto otras veces?»'),
                                gain: T(
                                        'Turns the question round to where the real history is. If she has done this twice already, the six months are being weighed against two previous disappointments, and no amount of reassurance addresses that.',
                                        'Le da la vuelta a la pregunta hacia donde está la historia real. Si ya lo ha hecho dos veces, los seis meses se están pesando contra dos decepciones anteriores, y no hay tranquilización que resuelva eso.')
                              }
                    }
                  ],
      conversation: {
                      setting: T(
                                 'Consultation, botulinum toxin, forehead only, €190. Minute six. Her first injectable treatment.',
                                 'Consulta, toxina botulínica, solo frente, 190 €. Minuto seis. Su primer inyectable.'),
                      before: [
                                {
                                  who: 'client',
                                  line: T(
                                          '"My husband says I don\'t need it. He says I\'ll end up looking like everyone else."',
                                          '«Mi marido dice que no me hace falta. Dice que voy a acabar pareciéndome a todas.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"That\'s a very common worry, and it isn\'t how we work. Done properly, nobody looks like anybody else — it\'s your own anatomy, just calmer."',
                                          '«Es una preocupación muy común, y no es así como trabajamos. Bien hecho, nadie se parece a nadie: es tu propia anatomía, solo que más tranquila.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"He means well. He just doesn\'t really understand it."',
                                          '«Lo dice con buena intención. Es que no lo entiende muy bien.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Most partners don\'t, until they see it. And the forehead alone at €190 is a very small starting point — it\'s not a commitment to anything."',
                                          '«A casi ninguna pareja le entra hasta que lo ve. Y solo la frente, 190 €, es un punto de partida pequeñísimo: no compromete a nada.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"That\'s true."', '«Es verdad.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Shall we go ahead today, then? You could always leave it at that and see how you feel in a fortnight."',
                                          '«¿Lo hacemos hoy, entonces? Siempre puedes quedarte ahí y ver cómo te sientes en quince días.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"I think I\'ll talk to him first."',
                                          '«Creo que voy a hablarlo con él primero.»')
                                }
                              ],
                      after: [
                               {
                                 who: 'client',
                                 line: T(
                                         '"My husband says I don\'t need it. He says I\'ll end up looking like everyone else."',
                                         '«Mi marido dice que no me hace falta. Dice que voy a acabar pareciéndome a todas.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T('"And what do you say?"', '«¿Y tú qué dices?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"…I don\'t know. I suppose I say he doesn\'t have to look at it every morning."',
                                         '«…No sé. Supongo que digo que no es él quien tiene que mirárselo cada mañana.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Every morning. What happens in the mornings?"',
                                         '«Cada mañana. ¿Qué pasa por las mañanas?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"I do my makeup and I think, that\'s not the face I have in my head. And then I go to work being that."',
                                         '«Me maquillo y pienso: esa no es la cara que tengo en la cabeza. Y luego me voy a trabajar siendo esa.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"So the argument at home isn\'t really about whether you need it. It\'s about whether you\'re allowed to want it."',
                                         '«Entonces la discusión en casa no va de si te hace falta. Va de si tienes permiso para quererlo.»')
                               },
                               {
                                 who: 'client',
                                 line: T('"Nobody has put it like that."', '«Nadie lo había dicho así.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"To your husband\'s point — one area is €190, and I\'d agree with him that you don\'t need it. Nobody needs it. That isn\'t the question you came in with."',
                                         '«Y sobre lo de tu marido: una zona son 190 €, y le doy la razón en que no te hace falta. A nadie le hace falta. Esa no es la pregunta con la que has venido.»')
                               }
                             ],
                      whatChanged: T(
                                     'The first practitioner heard an objection and answered it, twice, with genuinely good material: the anatomy point is true, the small starting point is true, and the fortnight is a fair way to lower the stakes. But the husband was never an objection. He was the client saying out loud that she does not have permission, and each reassurance took the permission question further out of reach — by the end she has been agreed with so comprehensively that the only remaining move is to go home and consult him. The second version answered nothing for six turns. It asked what she thought, then what the mornings were like, and then said the sentence she had not been able to say. The price appears in the last line and is smaller than the first version\'s, and it is the only version in which she is the one deciding.',
                                     'La primera profesional oyó una objeción y la respondió, dos veces, con material genuinamente bueno: lo de la anatomía es cierto, lo del punto de partida pequeño es cierto y los quince días son una forma razonable de bajar la apuesta. Pero el marido nunca fue una objeción. Era la clienta diciendo en voz alta que no tiene permiso, y cada tranquilización alejó un poco más la cuestión del permiso: al final le han dado la razón de forma tan completa que el único movimiento que le queda es irse a casa a consultarlo. La segunda versión no respondió nada durante seis turnos. Preguntó qué pensaba ella, luego cómo eran las mañanas, y después dijo la frase que ella no había podido decir. El precio aparece en la última línea y es más pequeño que el de la primera versión, y es la única versión en la que decide ella.'),
                      cost: T(
                              '€190 today, and with it the three appointments a year for the next decade that a first injectable normally opens. She will have this conversation again somewhere else, and the clinic that asks what she says will keep her.',
                              '190 € hoy y, con ellos, las tres citas al año durante la próxima década que suele abrir un primer inyectable. Esta conversación la va a tener otra vez en otro sitio, y la clínica que pregunte qué dice ella se la queda.')
                    },
      title: T('The premature reassurance trap', 'La trampa de la tranquilización prematura'),
      objective: T('Recognise reassurance offered before understanding, and know what it costs in measurable terms.',
                   'Reconocer la tranquilización ofrecida antes de comprender y saber lo que cuesta en términos medibles.'),
      provenance: {
        chapter: 9,
        principle: T('The mistake that kills sales is answering when you should be asking.',
                     'El error que mata las ventas es responder cuando deberías estar preguntando.'),
        phase: 'discovery',
        trustStage: 'attention',
        standard: 2,
        duty: 4,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Soothing is the reflex of a kind colleague, and nearly everywhere else in the building it is the correct reflex: an anxious woman on the couch mid-needle does need to hear that this is normal. Delivered in the consulting chair, the identical words land before comprehension and settle a question she had not finished putting. The person saying them experiences tenderness. The person hearing them experiences a subject being closed, and is far too well brought up to prise it open again.',
            'Apaciguar es el reflejo de una compañera amable y, en casi todo el resto del edificio, es el reflejo correcto: una mujer nerviosa en la camilla, con la aguja a medio camino, necesita oír que eso es normal. Pronunciadas en la butaca de la consulta, esas mismas palabras aterrizan antes que la comprensión y zanjan una cuestión que ella no había terminado de plantear. Quien las dice experimenta ternura. Quien las oye experimenta el cierre de un tema, y está demasiado bien educada como para volver a abrirlo con palanca.'),
        sheIsThinking: T(
            'Apparently it is very common. So it is nothing, and if I raise it again I am a woman making a fuss about nothing.',
            'Por lo visto es muy común. Entonces no es nada, y si lo vuelvo a sacar soy una mujer montando un drama por nada.'),
        ladder: {
          weak: {
            line:   T(
                '"Don\'t worry, that\'s very common."',
                '«No te preocupes, eso es muy común.»'),
            effect: T(
                'Closes it. She now knows her concern is ordinary, so raising it a second time would be making a fuss.',
                'Lo cierra. Ahora sabe que su preocupación es corriente, así que sacarla por segunda vez sería montar un drama.')
          },
          average: {
            line:   T(
                '"It\'s not silly at all — a lot of women feel exactly that."',
                '«No es ninguna tontería, muchas mujeres sienten exactamente eso.»'),
            effect: T(
                'Gentler, and still a verdict. It rules on whether she is entitled to the feeling and walks briskly past the feeling itself.',
                'Es más suave, y sigue siendo un veredicto. Dictamina si tiene derecho a esa emoción y pasa de largo, con paso ligero, por delante de la emoción misma.')
          },
          strong: {
            line:   T(
                '"You said silly. What is it that makes it feel silly?"',
                '«Has dicho tontería. ¿Qué es lo que hace que te parezca una tontería?»'),
            effect: T(
                'Returns her own apology to her as a question. The word a woman apologises with is nearly always fastened to whatever made her pick up the phone.',
                'Le devuelve su propia disculpa convertida en pregunta. La palabra con la que una mujer se disculpa está casi siempre abrochada a aquello que la hizo coger el teléfono.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The most expensive kindness', 'La amabilidad más cara'),
          body: [
            T('Reassurance is the reflex of a practitioner who cares. It is also the single behaviour most reliably associated with a client withholding information for the rest of the consultation.',
              'La tranquilización es el reflejo de un profesional que se implica. Es también la conducta que con más fiabilidad se asocia a que una clienta se guarde información durante el resto de la consulta.'),
            T('The mechanism is precise. To reassure, you must first assume what she is afraid of. If you assume correctly, you have taken her disclosure from her. If you assume incorrectly, you have told her that this room does not understand her — and she will not correct you, because correcting a professional is socially expensive.',
              'El mecanismo es preciso. Para tranquilizar, primero tienes que suponer qué teme. Si supones bien, le has quitado su revelación. Si supones mal, le has dicho que esta sala no la entiende, y no te corregirá, porque corregir a un profesional sale caro socialmente.'),
            T('Reassurance is not forbidden. It is sequenced: it belongs after understanding, in Phase 4, where it is earned rather than assumed.',
              'La tranquilización no está prohibida. Está secuenciada: pertenece a después de comprender, en la Fase 4, donde se gana en lugar de suponerse.')
          ] },
        { kind: 'spot',
          prompt: T('Four exchanges. Identify the line where the consultation stopped producing information.',
                    'Cuatro intercambios. Identifica la línea en la que la consulta dejó de producir información.'),
          lines: [
            { who: 'client', text: T('"I had something done at another clinic and I wasn\'t happy with it."', '«Me hice algo en otra clínica y no quedé contenta».') },
            { who: 'you', text: T('"Tell me what happened."', '«Cuéntame qué pasó».') },
            { who: 'client', text: T('"It was uneven for months. And nobody would say whether it would settle. I kept calling and—"', '«Estuvo asimétrico durante meses. Y nadie me decía si se asentaría. Yo llamaba y llamaba y—»') },
            { who: 'you', text: T('"That must have been awful. I can promise you that would never happen here — we review every patient at two weeks."', '«Debió de ser horrible. Te puedo prometer que aquí eso no pasaría: revisamos a cada paciente a las dos semanas».') },
            { who: 'client', text: T('"Good. That\'s reassuring. So — what would you suggest?"', '«Bien. Me tranquiliza. Entonces, ¿qué me sugerirías?»') }
          ],
          answerIndex: 3,
          why: T('She was mid-sentence at the part that mattered: not the unevenness, but that nobody would tell her the truth while it was happening. Your promise answered the clinical complaint and skipped the actual injury, which was abandonment. Her final line looks like progress — she is asking for a recommendation — but she has stopped telling you anything and moved to the transactional register.',
                 'Estaba a mitad de frase en la parte que importaba: no la asimetría, sino que nadie le decía la verdad mientras ocurría. Tu promesa respondió a la queja clínica y se saltó el daño real, que fue el abandono. Su última frase parece progreso —pide una recomendación— pero ha dejado de contarte nada y ha pasado al registro transaccional.'),
          principle: T('Trust Standard 2 — Demonstrate Attentive Understanding. Understanding is demonstrated by continuing, not by comforting.',
                       'Estándar de Confianza 2 — Demostrar Comprensión Atenta. La comprensión se demuestra continuando, no consolando.') },
        { kind: 'compare',
          prompt: T('Same moment, rewritten. Which line keeps the consultation open?',
                    'El mismo momento, reescrito. ¿Qué línea mantiene abierta la consulta?'),
          a: { label: T('Response A', 'Respuesta A'),
               text: T('"That must have been awful. I can promise you that would never happen here."',
                       '«Debió de ser horrible. Te puedo prometer que aquí eso no pasaría».') },
          b: { label: T('Response B', 'Respuesta B'),
               text: T('"You kept calling. What did they say when you did?"',
                       '«Llamabas y llamabas. ¿Qué te decían cuando lo hacías?»') },
          answer: 'b',
          why: T('B returns her last four words and asks for the next detail. It offers no comfort at all, and it is the response that produces the sentence she came in carrying. Comfort given here is comfort spent on a wound you have not yet located.',
                 'B le devuelve sus últimas palabras y pide el detalle siguiente. No ofrece ningún consuelo, y es la respuesta que produce la frase con la que ella entró. El consuelo dado aquí es consuelo gastado en una herida que aún no has localizado.') },
        { kind: 'check',
          prompt: T('In the MIRROR client-state ledger, what does premature reassurance typically do?',
                    'En el registro de estado de la clienta de MIRROR, ¿qué suele hacer la tranquilización prematura?'),
          options: [
            { id: 'a', text: T('Raises Safety, because the client feels comforted.', 'Sube la Seguridad, porque la clienta se siente reconfortada.') },
            { id: 'b', text: T('Leaves trust unchanged but keeps information withheld, so later phases run on incomplete material.', 'Deja la confianza sin cambios pero mantiene información retenida, así que las fases posteriores funcionan con material incompleto.') },
            { id: 'c', text: T('Raises Willingness enough to compensate.', 'Sube la Disposición lo suficiente como para compensar.') }
          ],
          answer: 'b',
          why: T('This is exactly what you will see in the simulation: the trust bar barely moves, nothing appears to have gone wrong, and the withheld item stays in the ledger until Phase 7 — where it arrives as an objection your recommendation cannot answer.',
                 'Es exactamente lo que verás en la simulación: la barra de confianza apenas se mueve, nada parece haber ido mal, y el elemento retenido permanece en el registro hasta la Fase 7, donde llega como una objeción que tu recomendación no puede responder.') },
        { kind: 'choose',
          prompt: T('She has just said: "I know this is going to sound ridiculous, but I haven\'t let anyone photograph me in about four years." Your instinct is to tell her it is not ridiculous. What do you actually say?',
                    'Acaba de decir: «Sé que va a sonar ridículo, pero llevo unos cuatro años sin dejar que nadie me haga una foto». Tu instinto es decirle que no es ridículo. ¿Qué dices en realidad?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"That\'s not ridiculous at all — you\'d be amazed how common that is."',
                       '«No es nada ridículo; te sorprendería lo común que es».'),
              why: T('Two reassurances in one breath: the feeling is corrected and then made ordinary. She offered you four years of a specific behaviour and received a statement about other people. The next detail — who asked, what happened, what she said instead — will not now arrive.',
                     'Dos tranquilizaciones en la misma frase: se corrige el sentimiento y luego se vuelve ordinario. Te ofreció cuatro años de una conducta concreta y recibió una afirmación sobre otras personas. El siguiente detalle —quién se lo pidió, qué pasó, qué dijo ella en su lugar— ya no va a llegar.') },
            { id: 'b', verdict: 'best',
              label: T('"Four years." Then nothing. And if she does not continue: "What happens when someone tries?"',
                       '«Cuatro años». Y nada más. Y si no continúa: «¿Qué pasa cuando alguien lo intenta?»'),
              why: T('The echo takes the number seriously without judging the feeling, and it asks nothing, so there is no version of it she can deflect. The follow-up is about behaviour rather than emotion, which is why it is answerable: she can describe what she does at a family party far more easily than what she feels about herself.',
                     'El eco toma la cifra en serio sin juzgar el sentimiento y no pregunta nada, así que no hay versión que ella pueda esquivar. La pregunta siguiente va de conducta y no de emoción, y por eso se puede responder: le resulta mucho más fácil describir qué hace en una comida familiar que qué siente sobre sí misma.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Honestly, that\'s exactly the kind of thing we can fix. By the summer you\'d be the one asking for the photograph."',
                       '«Sinceramente, eso es justo lo que sí podemos arreglar. Para el verano serías tú la que pide la foto».'),
              why: T('Reassurance and a promise in one sentence, aimed at a concern you have not located. If the four years are about a photograph somebody else took and commented on, nothing in your plan touches it — and she will be polite and unavailable for the rest of the consultation.',
                     'Tranquilización y promesa en una sola frase, dirigidas a una preocupación que no has localizado. Si esos cuatro años tienen que ver con una foto que hizo otra persona y comentó en voz alta, nada de tu plan la toca, y ella será amable e inaccesible el resto de la consulta.') }
          ],
          principle: T('To reassure, you must first assume what she is afraid of. Assume correctly and you have taken her disclosure from her; assume wrongly and she will not correct you.',
                       'Para tranquilizar, primero tienes que suponer qué teme. Si aciertas, le has quitado su revelación; si te equivocas, no te corregirá.'),
          retry: {
            note: T('The same reflex, arriving in the middle of a story rather than at the start of one.',
                    'El mismo reflejo, llegando a mitad de un relato en lugar de al principio.'),
            prompt: T('She is describing a treatment elsewhere that went wrong: "...and it was lopsided for four months. I stopped going out. I kept calling them and—" She stops, and looks at you. What do you say?',
                      'Está describiendo un tratamiento de otro sitio que salió mal: «...y estuvo torcido cuatro meses. Dejé de salir. Yo llamaba y llamaba y—». Se para y te mira. ¿Qué dices?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"That should never have happened. Four months without anyone taking responsibility is not acceptable."',
                         '«Eso no debería haber pasado nunca. Cuatro meses sin que nadie se haga responsable no es aceptable».'),
                why: T('You took her side, which is generous and which ends the account. She stopped mid-sentence at the part that mattered, and she stopped in order to see what you would do with it. Judging the other clinic answers the complaint and steps over the injury.',
                       'Te has puesto de su parte, lo cual es generoso y da por terminado el relato. Se detuvo a mitad de frase justo en la parte que importaba, y se detuvo para ver qué hacías con ella. Juzgar a la otra clínica responde a la queja y pasa por encima del daño.') },
              { id: 'b', verdict: 'best',
                label: T('"You kept calling. What did they say when you did?"',
                         '«Llamabas y llamabas. ¿Qué te decían cuando lo hacías?»'),
                why: T('Her last four words, returned, with a request for the next detail. It offers no comfort at all, and it is the only response that produces what she actually came in carrying — not the asymmetry, but the months of being told nothing while it was happening. That is what your review point will have to answer.',
                       'Sus últimas palabras, devueltas, con una petición del siguiente detalle. No ofrece ningún consuelo y es la única respuesta que produce aquello con lo que ella entró de verdad: no la asimetría, sino los meses sin que nadie le dijera nada mientras ocurría. Eso es lo que tendrá que responder tu punto de revisión.') },
              { id: 'c', verdict: 'harmful',
                label: T('"I\'m so sorry. Let\'s not dwell on it — what matters is what we do from here, and I promise it will be handled completely differently."',
                         '«Cuánto lo siento. No nos quedemos en eso: lo que importa es lo que hagamos a partir de ahora, y te prometo que aquí se lleva de forma completamente distinta».'),
                why: T('"Let\'s not dwell on it" is the whole failure in five words. The dwelling is the consultation: she has one unfinished story and it is the reason she is sitting in front of you rather than at the clinic that did it. Moved past, it stays intact and unspoken, and it returns in Phase 7 as a hesitation you cannot trace.',
                       '«No nos quedemos en eso» es todo el fallo en cinco palabras. Quedarse ahí es la consulta: tiene un relato sin cerrar y es la razón por la que está sentada delante de ti y no en la clínica que se lo hizo. Si la pasas de largo, queda intacto y sin decir, y vuelve en la Fase 7 como una duda que no puedes rastrear.') }
            ],
            principle: T('Trust Standard 2 — Demonstrate Attentive Understanding. Understanding is demonstrated by continuing, not by comforting — and the place to continue is her last four words.',
                         'Estándar de Confianza 2 — Demostrar Comprensión Atenta. La comprensión se demuestra continuando, no consolando, y el sitio por donde continuar son sus últimas palabras.'),
            changes: {
              axis: 'disclosure',
              detail: T('She tells you what the other clinic said when she rang: first that it would settle, and then that she was being difficult. That second sentence is why she has already asked you twice today whether she can change her mind.',
                        'Te cuenta lo que le dijeron en la otra clínica cuando llamó: primero que se asentaría y después que estaba siendo complicada. Esa segunda frase es la razón por la que hoy ya te ha preguntado dos veces si puede cambiar de opinión.')
            }
          } }
      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm3l5', n: 5, minutes: 10,
      treatments: [
                    {
                      name: T(
                              'Facial radiofrequency — course of six',
                              'Radiofrecuencia facial — bono de seis'),
                      price: T('€1,200 for six sessions', '1.200 € el bono de seis'),
                      why: T(
                             'Radiofrequency consultations are usually run by a practitioner with a device to demonstrate, and a device in the room makes three seconds of silence feel unbearable.',
                             'Las consultas de radiofrecuencia las suele llevar un profesional con un aparato que enseñar, y un aparato en la sala hace insoportables tres segundos de silencio.'),
                      moment: T(
                                'You have asked what she would like to feel, and nothing has come back for two seconds.',
                                'Has preguntado qué le gustaría sentir, y llevan dos segundos sin venir nada de vuelta.'),
                      weak: {
                              line: T(
                                      '"Or if it\'s easier, I can show you what the handpiece does first and you can tell me what appeals."',
                                      '«O si te resulta más fácil, te enseño primero qué hace el cabezal y me dices qué te llama.»'),
                              cost: T(
                                      'A helpful alternative offered out of consideration, and it cancels the question. She takes the easier route you have just handed her, and answers about a machine instead of about herself.',
                                      'Es una alternativa útil ofrecida por consideración, y anula la pregunta. Coge la vía fácil que le acabas de dar y contesta sobre una máquina en lugar de sobre ella.')
                            },
                      strong: {
                                line: T(
                                        '(Nothing. Three full seconds, hands still, eyes on her.)',
                                        '(Nada. Tres segundos enteros, las manos quietas, la mirada en ella.)'),
                                gain: T(
                                        'Nothing said for three seconds. Two of those seconds are the practitioner\'s discomfort and the third is hers, and the sentence that arrives at the end of it is the one worth €1,200.',
                                        'No se dice nada durante tres segundos. Dos de esos segundos son la incomodidad del profesional y el tercero es la de ella, y la frase que llega al final es la que vale 1.200 €.')
                              }
                    },
                    {
                      name: T(
                              'Facial microneedling — course of four',
                              'Microagujas faciales — bono de cuatro'),
                      price: T('€700 for four sessions', '700 € el bono de cuatro'),
                      why: T(
                             'Microneedling consultations run to twenty minutes, and when the diary is tight the three seconds feel like a luxury the appointment cannot afford.',
                             'Las consultas de microagujas duran veinte minutos, y cuando la agenda aprieta esos tres segundos parecen un lujo que la cita no se puede permitir.'),
                      moment: T(
                                'She has started an answer, stopped halfway, and is looking at the corner of the desk.',
                                'Ha empezado a contestar, se ha parado a la mitad y está mirando la esquina de la mesa.'),
                      weak: {
                              line: T(
                                      '"It\'s alright, you don\'t have to explain it — I think I know what you mean, and it\'s more common than you\'d think."',
                                      '«Tranquila, no hace falta que lo expliques. Creo que sé a qué te refieres y es más común de lo que parece.»'),
                              cost: T(
                                      'Rescues her from a difficult moment, which is a decent instinct and takes the sentence away from her. She agrees that you know what she means, and neither of you does.',
                                      'La rescata de un momento difícil, que es un instinto decente y le quita la frase. Ella acepta que sabes a qué se refiere, y no lo sabe ninguna de las dos.')
                            },
                      strong: {
                                line: T(
                                        '"Take your time. I\'ve got nowhere to be."',
                                        '«Sin prisa. No tengo que estar en ningún sitio.»'),
                                gain: T(
                                        'Keeps the sentence with its owner and removes the clock as a reason to abandon it. A woman who finishes a difficult sentence in your room has given you something she cannot easily give again elsewhere.',
                                        'Deja la frase en manos de su dueña y retira el reloj como motivo para abandonarla. Una mujer que termina una frase difícil en tu sala te ha dado algo que no puede dar con facilidad en otro sitio.')
                              }
                    }
                  ],
      title: T('Ask, then wait', 'Pregunta y espera'),
      objective: T('Use silence as a deliberate instrument, and recognise the second answer.',
                   'Usar el silencio como instrumento deliberado y reconocer la segunda respuesta.'),
      provenance: {
        chapter: 9,
        principle: T('After you ask, wait three seconds before you say anything else. That is not technique — it is respect.',
                     'Después de preguntar, espera tres segundos antes de decir nada más. Eso no es técnica: es respeto.'),
        phase: 'discovery',
        trustStage: 'attention',
        standard: 2,
        duty: 2,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Quiet after a question reads as a defective question — as though it had been put clumsily and now needs rescuing. Hospitality is the culprit: nobody wants to abandon a guest mid-air. So it gets rephrased, or illustrated, or two empty seconds get plugged with a helpful suggestion. Every one of those manoeuvres is generous, and every one retrieves the reply before it is finished. Chapter 9\'s three seconds are not an interval in the exchange. They are the span during which reply number two gets assembled.',
            'El silencio después de una pregunta se lee como una pregunta defectuosa, como si se hubiera formulado con torpeza y ahora hubiera que rescatarla. La culpable es la hospitalidad: nadie quiere dejar a una invitada suspendida en el aire. Así que se reformula, o se ilustra, o se tapan dos segundos vacíos con una sugerencia servicial. Cada una de esas maniobras es generosa, y cada una retira la respuesta antes de que esté terminada. Los tres segundos del capítulo 9 no son un intervalo dentro del intercambio. Son el lapso durante el cual se ensambla la respuesta número dos.'),
        sheIsThinking: T(
            'I was one breath away from saying the true thing. She has moved along, so the tidy version will do.',
            'Estaba a un respiro de decir lo verdadero. Ella ya ha seguido, así que con la versión aseada vale.'),
        ladder: {
          weak: {
            line:   T(
                '"— or is it more about looking less tired?"',
                '«…¿o es más bien una cuestión de parecer menos cansada?»'),
            effect: T(
                'Supplies a reply she can simply agree with. She takes it, because agreement is easier than finishing a thought that was still under construction.',
                'Le suministra una respuesta con la que basta estar de acuerdo. La coge, porque asentir es más fácil que terminar un pensamiento que aún estaba en obras.')
          },
          average: {
            line:   T(
                '"Take your time."',
                '«Tómate el tiempo que necesites.»'),
            effect: T(
                'Generous, and still your voice occupying the gap. It implies the gap required authorising, which makes it hers to fill rather than yours to keep open.',
                'Es generoso, y sigue siendo tu voz ocupando el hueco. Da a entender que el hueco necesitaba autorización, lo que lo convierte en suyo para rellenarlo en vez de tuyo para mantenerlo abierto.')
          },
          strong: {
            line:   T(
                '(not a word, for three whole seconds, eyes steady on her)',
                '(ni una palabra, durante tres segundos enteros, con la mirada firme en ella)'),
            effect: T(
                'Chapter 9\'s golden rule. On the third second out comes the unplanned thing, and often an astonished remark that she had no idea she was about to say it.',
                'Es la regla de oro del capítulo 9. En el tercer segundo sale lo no previsto, y muchas veces un comentario de asombro diciendo que no tenía ni idea de que iba a decirlo.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The second answer', 'La segunda respuesta'),
          body: [
            T('Almost every client gives two answers to a real question. The first is the prepared one and arrives immediately. The second arrives between two and five seconds later, and it is the one you came for.',
              'Casi toda clienta da dos respuestas a una pregunta real. La primera es la preparada y llega de inmediato. La segunda llega entre dos y cinco segundos después, y es la que buscabas.'),
            T('The second answer only exists if the silence exists. Practitioners fill the gap because a pause in a professional room feels like a failure of hosting. It is not; it is the room doing its work.',
              'La segunda respuesta solo existe si existe el silencio. Los profesionales llenan el hueco porque una pausa en una sala profesional se siente como un fallo de anfitrión. No lo es: es la sala haciendo su trabajo.'),
            T('The practical rule from the book: ask, then count to three before you speak. Not as a technique for pressure — as a courtesy that leaves room.',
              'La regla práctica del libro: pregunta y cuenta hasta tres antes de hablar. No como técnica de presión, sino como cortesía que deja espacio.')
          ] },
        { kind: 'timedPause',
          prompt: T('You asked: "If this went well, what would actually be different for you?" She answers immediately. Hold the silence — then read what arrives.',
                    'Has preguntado: «Si esto saliera bien, ¿qué sería distinto para ti de verdad?». Responde de inmediato. Sostén el silencio y lee lo que llega.'),
          first: T('"I suppose I\'d just feel a bit better about myself. Nothing dramatic."',
                   '«Supongo que me sentiría un poco mejor conmigo misma. Nada dramático».'),
          seconds: 4,
          second: T('"...Actually, that\'s not it. I\'d stop turning my head away when someone takes a photo. My son said last month that I always ruin the picture. He was joking."',
                    '«...En realidad no es eso. Dejaría de girar la cara cuando alguien hace una foto. Mi hijo dijo el mes pasado que siempre estropeo la foto. Lo decía en broma».'),
          why: T('The first answer was a summary written for a stranger. The second contains the event, the person, the exact sentence and the defence of that person — "he was joking" — which tells you it hurt and that she has decided not to blame him. Every element of your later recommendation should trace to the second answer, not the first.',
                 'La primera respuesta fue un resumen escrito para un desconocido. La segunda contiene el acontecimiento, la persona, la frase exacta y la defensa de esa persona —«lo decía en broma»—, lo que te dice que dolió y que ha decidido no culparle. Cada elemento de tu recomendación posterior debería trazarse a la segunda respuesta, no a la primera.') },
        { kind: 'reflect',
          prompt: T('Estimate honestly: in your consultations, how long is your average pause after a question? What do you usually say to fill it?',
                    'Estima con honestidad: en tus consultas, ¿cuánto dura tu pausa media tras una pregunta? ¿Qué sueles decir para llenarla?'),
          placeholder: T('e.g. "About a second. I usually add \'…or anything else, really\'."',
                         'p. ej.: «Como un segundo. Suelo añadir “…o cualquier otra cosa, vamos”».') },
        { kind: 'check',
          prompt: T('Why does the second answer arrive only after silence, and not after a follow-up question?',
                    '¿Por qué la segunda respuesta llega solo tras el silencio y no tras una pregunta de seguimiento?'),
          options: [
            { id: 'a', text: T('Because a follow-up question gives her something new to answer, and answering it replaces the sentence she was assembling.', 'Porque una pregunta de seguimiento le da algo nuevo que responder, y responderlo sustituye a la frase que estaba montando.') },
            { id: 'b', text: T('Because silence is more polite.', 'Porque el silencio es más educado.') },
            { id: 'c', text: T('Because clients dislike being asked more than one question.', 'Porque a las clientas no les gusta que les hagan más de una pregunta.') }
          ],
          answer: 'a',
          why: T('This is the mechanism, and it is why a well-intentioned "or anything else?" is as costly as an interruption. The second answer is being composed in the pause; any input at all replaces it with a response. The instrument is not politeness — it is leaving the channel empty.',
                 'Este es el mecanismo, y por eso un bienintencionado «¿o alguna otra cosa?» cuesta tanto como una interrupción. La segunda respuesta se está componiendo en la pausa; cualquier entrada la sustituye por una reacción. El instrumento no es la cortesía: es dejar el canal vacío.') },

        { kind: 'choose',
          prompt: T('You asked, then held four seconds. She fills the silence herself: "Sorry, I\'m rambling. Anyway — whatever you think is best."',
                    'Preguntaste y sostuviste cuatro segundos. Ella llena el silencio: «Perdona, me estoy enrollando. En fin, lo que tú veas mejor».'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Not at all. So, from what you\'ve told me, I\'d suggest…"',
                       '«Para nada. Entonces, por lo que me cuentas, yo te propondría…»'),
              why: T('You accepted the handover. She offered you the decision because the silence became uncomfortable for her, not because she had finished — and taking it ends Discovery at the exact moment it was working.',
                     'Has aceptado el traspaso. Te ofreció la decisión porque el silencio se le hizo incómodo, no porque hubiera terminado, y aceptarlo cierra el Descubrimiento justo en el momento en que estaba funcionando.') },
            { id: 'b', verdict: 'best',
              label: T('"You\'re not rambling. You said something a second ago about the photographs — can you go back to that?"',
                       '«No te estás enrollando. Hace un momento has dicho algo de las fotos, ¿puedes volver a eso?»'),
              why: T('It declines the handover, names the thing she moved past, and hands her back the floor with somewhere specific to put it. In Chapter 9 the second answer usually arrives immediately after the apology, not before it.',
                     'Rechaza el traspaso, nombra aquello por lo que ella pasó de largo y le devuelve la palabra con un sitio concreto donde ponerla. En el capítulo 9 la segunda respuesta suele llegar justo después de la disculpa, no antes.') },
            { id: 'c', verdict: 'weak',
              label: T('"Take your time. There\'s no rush at all."',
                       '«Tómate tu tiempo. No hay ninguna prisa».'),
              why: T('Kind, and empty. It gives her more silence without giving her anywhere to put it, so she will usually repeat the handover — and the second time it will sound like a decision rather than discomfort.',
                     'Amable y vacío. Le das más silencio sin darle dónde ponerlo, así que lo normal es que repita el traspaso, y la segunda vez sonará a decisión y no a incomodidad.') }
          ],
          principle: T('Silence is not the instrument. Silence plus a place to go is the instrument. An apology in the pause is evidence the pause worked, not evidence it failed.',
                       'El silencio no es el instrumento. El instrumento es el silencio más un sitio al que ir. Una disculpa dentro de la pausa es prueba de que la pausa funcionó, no de que fracasó.'),
          retry: {
            note: T('The same four seconds, with something different arriving in them.',
                    'Los mismos cuatro segundos, con otra cosa llegando dentro.'),
            prompt: T('You asked why now rather than last year, then held the silence. At three seconds she laughs and says: "God, this is like therapy." What do you do?',
                      'Preguntaste por qué ahora y no el año pasado, y sostuviste el silencio. A los tres segundos se ríe y dice: «Madre mía, esto es como una terapia». ¿Qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Laugh with her and move on: "I know — occupational hazard. Shall we look at the areas that are bothering you?"',
                         'Reírte con ella y seguir: «Ya ves, gajes del oficio. ¿Miramos las zonas que te molestan?»'),
                why: T('The laugh was a check, and laughing back answers it: this is a place where difficult things get softened. She will be excellent company for the rest of the consultation, and she will not finish the sentence she had started composing.',
                       'La risa era una comprobación, y reírte con ella la responde: este es un sitio donde las cosas difíciles se suavizan. Será una compañía estupenda el resto de la consulta y no terminará la frase que había empezado a componer.') },
              { id: 'b', verdict: 'best',
                label: T('Do not laugh. Say: "A bit. You were about to say something." And wait again.',
                         'No reírte. Decir: «Un poco. Estabas a punto de decir algo». Y volver a esperar.'),
                why: T('The laugh at the end of a sentence is the signal that something true was on its way and is being softened in case it lands badly. Declining to soften it with her — while naming, without interpreting, that she was mid-thought — is what keeps the channel empty long enough for the second answer to arrive.',
                       'La risa al final de una frase es la señal de que algo verdadero venía de camino y se está suavizando por si cae mal. Negarte a suavizarlo con ella —nombrando, sin interpretar, que estaba a media idea— es lo que mantiene el canal vacío el tiempo suficiente para que llegue la segunda respuesta.') },
              { id: 'c', verdict: 'harmful',
                label: T('"It\'s not therapy — I just need to understand the clinical picture properly before I recommend anything."',
                         '«No es una terapia: solo necesito entender bien el cuadro clínico antes de recomendar nada».'),
                why: T('You corrected her joke with a justification. She now knows the questions had a purpose and that the purpose was your assessment, which converts the whole of Discovery into an intake in her mind. The honest answer is that it is a bit like therapy, and saying so costs nothing.',
                       'Has corregido su broma con una justificación. Ahora sabe que las preguntas tenían un propósito y que el propósito era tu valoración, lo que convierte todo el Descubrimiento en un trámite de admisión en su cabeza. La respuesta honesta es que sí se parece un poco a una terapia, y decirlo no cuesta nada.') }
            ],
            principle: T('The pause does not fail when she fills it. It fails when you accept what she filled it with. A laugh, an apology and a handover are all evidence that the silence was working.',
                         'La pausa no fracasa cuando ella la llena. Fracasa cuando aceptas aquello con lo que la llenó. Una risa, una disculpa y un traspaso son, las tres, pruebas de que el silencio estaba funcionando.'),
            changes: {
              axis: 'clientResponse',
              detail: T('She does not change the subject. After the second pause she finishes the sentence the laugh interrupted — that she does not want to be the one people describe afterwards as having looked tired at her son’s wedding.',
                        'No cambia de tema. Tras la segunda pausa termina la frase que la risa interrumpió: que no quiere ser aquella de la que luego digan que se la veía cansada en la boda de su hijo.')
            }
          } }

      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm3l6', n: 6, minutes: 11,
      treatments: [
                    {
                      name: T('Hyaluronic acid filler — lips', 'Relleno de ácido hialurónico — labios'),
                      price: T('€360 for 1 ml', '360 € por 1 ml'),
                      why: T(
                             'Lip consultations are conducted in front of a mirror, which means her hands and her posture are as available to you as her words, and usually more honest.',
                             'Las consultas de labios se hacen delante de un espejo, así que sus manos y su postura están tan disponibles para ti como sus palabras, y suelen ser más sinceras.'),
                      moment: T(
                                'She says she is completely sure, and while she says it she puts two fingers over her mouth.',
                                'Dice que está completamente segura, y mientras lo dice se pone dos dedos sobre la boca.'),
                      weak: {
                              line: T(
                                      '"Good — then let\'s get you comfortable and I\'ll talk you through the numbing while we set up."',
                                      '«Bien. Pues ponte cómoda y te voy explicando lo de la anestesia mientras lo preparo todo.»'),
                              cost: T(
                                      'Takes the spoken sentence and disregards the one made of fingers. She proceeds while unsure, and an unsure client at review is the most expensive appointment in the building.',
                                      'Coge la frase hablada y desatiende la que está hecha de dedos. Sigue adelante sin estar segura, y una clienta insegura en la revisión es la cita más cara del edificio.')
                            },
                      strong: {
                                line: T(
                                        '"Your hand went up when you said that. What\'s the bit you\'re not sure about?"',
                                        '«Se te ha subido la mano al decirlo. ¿Cuál es la parte de la que no estás segura?»'),
                                gain: T(
                                        'Reports the body neutrally rather than interpreting it, which leaves her free to confirm or correct. Naming the gesture is how a practitioner reaches the unspoken half without accusing her of lying.',
                                        'Informa del cuerpo con neutralidad en lugar de interpretarlo, lo que la deja libre para confirmar o corregir. Nombrar el gesto es la forma de llegar a la mitad no dicha sin acusarla de mentir.')
                              }
                    },
                    {
                      name: T(
                              'Vascular laser — rosacea, course of three',
                              'Láser vascular — rosácea, bono de tres'),
                      price: T('€630 for three sessions', '630 € el bono de tres'),
                      why: T(
                             'Redness responds to embarrassment in real time, so this is the one consultation where the client\'s own skin narrates the conversation while it is happening.',
                             'Las rojeces responden a la vergüenza en tiempo real, así que es la única consulta donde la propia piel de la clienta va narrando la conversación mientras ocurre.'),
                      moment: T(
                                'You have asked when it bothers her most, and her neck and chest have gone red while she answers that it does not really bother her much.',
                                'Le has preguntado cuándo le molesta más, y se le han puesto rojos el cuello y el escote mientras contesta que en realidad no le molesta mucho.'),
                      weak: {
                              line: T(
                                      '"That\'s good to hear. A lot of people find it bothers them more than they expected, so we\'ll take it at your pace."',
                                      '«Me alegra oírlo. A mucha gente le molesta más de lo que esperaba, así que iremos a tu ritmo.»'),
                              cost: T(
                                      'Generous and non-intrusive, and it accepts an answer the room has just contradicted. Nothing true will be said about this subject for the rest of the consultation, because it has been agreed that nothing needs to be.',
                                      'Es generoso y poco invasivo, y acepta una respuesta que la sala acaba de contradecir. Sobre este asunto no se dirá nada verdadero en el resto de la consulta, porque se ha acordado que no hace falta.')
                            },
                      strong: {
                                line: T(
                                        '"Right now, as you\'re telling me it doesn\'t — is this what happens?"',
                                        '«Ahora mismo, mientras me dices que no: ¿es esto lo que pasa?»'),
                                gain: T(
                                        'Uses the live evidence in the room without judgement, and lets her answer the question her own skin has just asked. This is the moment the course stops being cosmetic and becomes the thing she has been managing alone for years.',
                                        'Usa la prueba en vivo que hay en la sala sin juzgar, y le deja contestar la pregunta que acaba de hacer su propia piel. Es el momento en que el bono deja de ser estético y pasa a ser eso que lleva años gestionando sola.')
                              }
                    }
                  ],
      title: T('Reading what she does not say', 'Leer lo que no dice'),
      objective: T('Read the seven body signals as information, and respond to them without diagnosing them aloud.',
                   'Leer las siete señales corporales como información y responder a ellas sin diagnosticarlas en voz alta.'),
      provenance: {
        chapter: [7, 9],
        principle: T('Part of Inquire happens without words: the consultant who listens to the body hears twice as much.',
                     'Parte de Indagar ocurre sin palabras: el profesional que escucha al cuerpo oye el doble.'),
        phase: 'discovery',
        trustStage: 'attention',
        standard: 2,
        duty: 3,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Someone trained to read bodies wants credit for having read them, so she reports her observation aloud: you look tense, your hand keeps going to your cheek. Transparency is the virtue, and in most clinical work stating an observation is good practice. Here it issues a description of herself that she neither commissioned nor can easily refute, and her first move is to administer the signal. Hand down, spine straight, chin level. The channel closes and nothing more comes through it.',
            'Quien está entrenada para leer cuerpos quiere que se le reconozca haberlos leído, así que informa de su observación en voz alta: te veo tensa, la mano se te va todo el rato a la mejilla. La virtud es la transparencia y, en la mayor parte del trabajo clínico, enunciar una observación es buena práctica. Aquí emite una descripción de ella misma que no ha encargado y que no puede rebatir con facilidad, y su primer movimiento es administrar la señal. Mano abajo, espalda recta, barbilla nivelada. El canal se cierra y ya no pasa nada más por él.'),
        sheIsThinking: T(
            'I am being observed. I shall sit properly and keep my hands where they belong.',
            'Me están observando. Me voy a sentar como es debido y a dejar las manos donde toca.'),
        ladder: {
          weak: {
            line:   T(
                '"You keep touching there — is that the area that bothers you?"',
                '«No dejas de tocarte ahí. ¿Es esa la zona que te molesta?»'),
            effect: T(
                'Reports the signal back to its owner. The hand comes down, the answer is no, and you have forfeited both the gesture and what it was aimed at.',
                'Le informa de la señal a su propia dueña. La mano baja, la respuesta es que no, y has perdido a la vez el gesto y aquello a lo que apuntaba.')
          },
          average: {
            line:   T(
                '"Is there anything in particular you\'d like me to look at?"',
                '«¿Hay algo en concreto que quieras que mire?»'),
            effect: T(
                'A fair, unobtrusive invitation to point. She points at whatever she had already resolved to own up to, which need not be where the hand went.',
                'Es una invitación justa y discreta a que señale. Ella señala aquello que ya había resuelto reconocer, que no tiene por qué ser adonde iba la mano.')
          },
          strong: {
            line:   T(
                '"You mentioned photographs a minute ago. Which photograph?"',
                '«Hace un momento has mencionado unas fotos. ¿Qué foto?»'),
            effect: T(
                'Spends the signal without announcing it: you pursue the topic the hand belongs to. The body indicated, and you enquired about the thing indicated.',
                'Gasta la señal sin anunciarla: persigues el tema al que pertenece esa mano. El cuerpo ha indicado y tú has preguntado por lo indicado.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Seven signals', 'Siete señales'),
          body: [
            T('The body answers before the sentence does. Seven signals recur in aesthetic consultation: the covering hand, the mirror avoided, the phone photograph she does not show, the shortened answer, the laugh at the end of a sentence, the correction of her own words, and the pause before "no".',
              'El cuerpo responde antes que la frase. Siete señales se repiten en la consulta estética: la mano que cubre, el espejo que se evita, la foto en el móvil que no enseña, la respuesta acortada, la risa al final de una frase, la corrección de sus propias palabras y la pausa antes del «no».'),
            T('Each is an invitation, and each is destroyed by interpretation. "You seem anxious" is a diagnosis of her interior delivered by someone she met four minutes ago.',
              'Cada una es una invitación, y cada una se destruye al interpretarla. «Pareces nerviosa» es un diagnóstico de su interior emitido por alguien a quien conoció hace cuatro minutos.')
          ],
          diagram: 'seven-signals' },
        { kind: 'signalGallery',
          prompt: T('Select each signal to see what it usually means and the one sentence that works.',
                    'Selecciona cada señal para ver qué suele significar y la única frase que funciona.'),
          signals: [
            { id: 's1', icon: 'hand',
              name: T('The covering hand', 'La mano que cubre'),
              means: T('She has told you where the concern is before naming it. Often it is not the area she booked for.',
                       'Te ha dicho dónde está la preocupación antes de nombrarla. A menudo no es la zona por la que pidió cita.'),
              say: T('"You touched there just now." — then wait.', '«Te has tocado ahí ahora mismo». — y esperar.') },
            { id: 's2', icon: 'mirror',
              name: T('The mirror avoided', 'El espejo evitado'),
              means: T('Looking is not neutral for her. Handing her a mirror early is a demand, not an aid.',
                       'Mirarse no es neutral para ella. Darle un espejo pronto es una exigencia, no una ayuda.'),
              say: T('"We don\'t need the mirror yet." — and put it down.', '«Todavía no necesitamos el espejo». — y dejarlo.') },
            { id: 's3', icon: 'phone',
              name: T('The photograph not shown', 'La foto que no enseña'),
              means: T('She has a reference image and is afraid it will be judged as unrealistic or vain.',
                       'Tiene una imagen de referencia y teme que se juzgue como poco realista o vanidosa.'),
              say: T('"If you have a photo, I\'d genuinely like to see it — including one you think is silly."',
                     '«Si tienes una foto, me gustaría verla de verdad, incluida alguna que te parezca una tontería».') },
            { id: 's4', icon: 'short',
              name: T('The shortened answer', 'La respuesta acortada'),
              means: T('Something in the previous exchange withdrew safety. The shortening is the receipt.',
                       'Algo del intercambio anterior retiró seguridad. El acortamiento es el recibo.'),
              say: T('"I think I moved too fast a moment ago. Can we go back?"', '«Creo que he ido demasiado rápido hace un momento. ¿Volvemos atrás?»') },
            { id: 's5', icon: 'laugh',
              name: T('The laugh at the end', 'La risa al final'),
              means: T('She has said something true and is softening it in case it landed badly.',
                       'Ha dicho algo verdadero y lo está suavizando por si ha caído mal.'),
              say: T('Do not laugh with her. "That sounded like it matters."', 'No reírse con ella. «Eso ha sonado a que importa».') },
            { id: 's6', icon: 'correct',
              name: T('The self-correction', 'La autocorrección'),
              means: T('The first version was the true one. The correction is for your benefit.',
                       'La primera versión era la verdadera. La corrección es en tu beneficio.'),
              say: T('"You said [first version] first. Can we stay with that?"', '«Primero has dicho [primera versión]. ¿Nos quedamos con eso?»') },
            { id: 's7', icon: 'pause',
              name: T('The pause before "no"', 'La pausa antes del «no»'),
              means: T('It is not a no. It is a not-yet with an unspoken condition attached.',
                       'No es un no. Es un todavía-no con una condición no dicha.'),
              say: T('"What would have to be true for that to be a yes?"', '«¿Qué tendría que ser cierto para que eso fuera un sí?»') }
          ] },
        { kind: 'choose',
          prompt: T('She has taken her phone out twice and put it away without showing you anything. What do you do?',
                    'Ha sacado el móvil dos veces y lo ha guardado sin enseñarte nada. ¿Qué haces?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Ignore it — she will show you if she wants to.', 'Ignorarlo: ya te lo enseñará si quiere.'),
              why: T('She wants to and cannot. The photograph is almost always the clearest statement of her expectation, and without it your Phase 5 education is aimed at a target you have not seen.',
                     'Quiere y no puede. La foto casi siempre es la declaración más clara de su expectativa, y sin ella tu educación de la Fase 5 apunta a un objetivo que no has visto.') },
            { id: 'b', verdict: 'best',
              label: T('"If there\'s a photo on there, I\'d rather see it than guess. It doesn\'t have to be realistic — I just want to know what you\'re seeing."',
                       '«Si ahí hay una foto, prefiero verla a adivinar. No hace falta que sea realista: solo quiero saber qué estás viendo».'),
              why: T('You removed both fears at once: judgement of the image, and judgement of her for having it. "I\'d rather see it than guess" also states your reason, which is what makes the request feel professional rather than intrusive.',
                     'Has retirado los dos miedos a la vez: el juicio sobre la imagen y el juicio sobre ella por tenerla. «Prefiero verla a adivinar» también expone tu motivo, que es lo que hace que la petición se sienta profesional y no intrusiva.') },
            { id: 'c', verdict: 'weak',
              label: T('"Do you have a photo of what you\'re looking for?"', '«¿Tienes una foto de lo que buscas?»'),
              why: T('A fair question that will get "no". You have asked her to volunteer the thing she is embarrassed about, without removing the embarrassment first.',
                     'Una pregunta razonable que recibirá un «no». Le has pedido que ofrezca voluntariamente aquello que le da vergüenza, sin retirar antes la vergüenza.') }
          ],
          principle: T('Name the signal, state your reason, remove the judgement. In that order.',
                       'Nombra la señal, expón tu motivo, retira el juicio. En ese orden.'),
          retry: {
            note: T('A different signal, and the same rule about naming it.',
                    'Otra señal, y la misma regla sobre cómo nombrarla.'),
            prompt: T('You have suggested a staged plan. She does not answer for about two seconds, and then says: "No, I don\'t think so." What do you do?',
                      'Has propuesto un plan por etapas. Tarda unos dos segundos en responder y luego dice: «No, creo que no». ¿Qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Accept it and offer the smaller version: "That\'s completely fine — would something less involved feel better?"',
                         'Aceptarlo y ofrecer la versión menor: «No pasa nada, ¿te vendría mejor algo más ligero?»'),
                why: T('You answered the no by shrinking the plan, which assumes the objection was size. The two seconds said otherwise: a refusal that needed composing is a not-yet with a condition attached, and you have just replaced the condition with a reduction in scale.',
                       'Has respondido al no encogiendo el plan, lo que da por hecho que la objeción era el tamaño. Los dos segundos decían otra cosa: un rechazo que necesitó componerse es un todavía-no con una condición detrás, y acabas de sustituir la condición por una rebaja de escala.') },
              { id: 'b', verdict: 'best',
                label: T('"What would have to be true for that to be a yes?"',
                         '«¿Qué tendría que ser cierto para que eso fuera un sí?»'),
                why: T('It takes the no seriously enough not to argue with it, and asks her to name a condition rather than defend an objection. It is answerable — people describe a requirement far more easily than a fear — and what comes back is usually a person, a date or a sum, none of which she would have volunteered.',
                       'Toma el no lo bastante en serio como para no discutirlo y le pide que nombre una condición en vez de defender una objeción. Se puede responder —a la gente le resulta mucho más fácil describir un requisito que un miedo— y lo que vuelve suele ser una persona, una fecha o una cantidad, y ninguna de las tres la habría ofrecido por su cuenta.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Can I ask what\'s making you hesitate? There\'s usually something specific behind a no."',
                         '«¿Puedo preguntarte qué te frena? Detrás de un no suele haber algo concreto».'),
                why: T('You have told her that her no has been read as hesitation and that you expect something underneath it. She is now defending a position rather than describing a condition, and the commonest way out of that is a reason that ends the conversation: the price, or her husband.',
                       'Le has dicho que su no se ha leído como duda y que esperas que haya algo debajo. Ahora defiende una postura en lugar de describir una condición, y la salida más habitual es un motivo que cierra la conversación: el precio, o su marido.') }
            ],
            principle: T('The pause before a no is the seventh signal. Name what it opens, never what you think it means — the condition is hers to state, and once stated it is workable.',
                         'La pausa antes de un no es la séptima señal. Nombra lo que abre, nunca lo que crees que significa: la condición le toca enunciarla a ella, y una vez enunciada se puede trabajar.'),
            changes: {
              axis: 'objection',
              detail: T('The flat no becomes a condition: she cannot keep asking for mornings off, and three appointments is two more than she can take. What would have closed the consultation is now a scheduling problem you can actually solve.',
                        'El no seco se convierte en una condición: no puede seguir pidiendo mañanas libres, y tres citas son dos más de las que puede permitirse. Lo que habría cerrado la consulta es ahora un problema de agenda que sí puedes resolver.')
            }
          } },
        { kind: 'spot',
          prompt: T('One line interpreted a signal instead of naming it. Which?',
                    'Una línea interpretó una señal en vez de nombrarla. ¿Cuál?'),
          lines: [
            { who: 'client', text: T('"...and that\'s really the only thing, I think." (laughs, looks away)', '«...y creo que es lo único, la verdad». (se ríe, aparta la mirada)') },
            { who: 'you', text: T('"That sounded like it matters."', '«Eso ha sonado a que importa».') },
            { who: 'client', text: T('"I mean — it does, a bit. More than a bit."', '«Bueno, sí que importa, un poco. Más que un poco».') },
            { who: 'you', text: T('"I can see it\'s been weighing on you for a long time."', '«Veo que llevas mucho tiempo cargando con esto».') },
            { who: 'client', text: T('"...Yes. Anyway, what would you suggest?"', '«...Sí. En fin, ¿qué me sugerirías?»') }
          ],
          answerIndex: 3,
          why: T('Line 2 named the signal and it worked — she upgraded her own statement twice. Line 4 then told her what she has been feeling and for how long, on four minutes of evidence. It is warm, it is probably true, and it is a conclusion she did not reach out loud. Her closing line is the receipt: she confirms politely and moves to the transactional register.',
                 'La línea 2 nombró la señal y funcionó: ella subió su propia afirmación dos veces. La línea 4 le dijo entonces qué ha estado sintiendo y durante cuánto tiempo, con cuatro minutos de evidencia. Es cálida, probablemente sea cierta y es una conclusión a la que ella no llegó en voz alta. Su última frase es el recibo: confirma con educación y pasa al registro transaccional.'),
          principle: T('Name the signal, not the meaning — and when she upgrades her own statement, say nothing at all.',
                       'Nombra la señal, no el significado, y cuando ella suba su propia afirmación, no digas nada.') }
      ]
    },
    // -------------------------------------------------------------------
    {
      id: 'm3l7', n: 7, minutes: 15,
      treatments: [
                    {
                      name: T(
                              'Body contouring programme — ten sessions',
                              'Programa de remodelación corporal — diez sesiones'),
                      price: T('€1,800 for ten sessions', '1.800 € las diez sesiones'),
                      why: T(
                             'A ten-session body programme is the recommendation most likely to arrive as a list, because there are genuinely several modalities and all of them are defensible.',
                             'Un programa corporal de diez sesiones es la recomendación que más fácilmente llega como lista, porque de verdad hay varias modalidades y todas son defendibles.'),
                      moment: T(
                                'You are about to present the plan, and you have her measurements, her history and three of her own sentences written down.',
                                'Estás a punto de presentar el plan y tienes sus medidas, su historia y tres frases suyas apuntadas.'),
                      weak: {
                              line: T(
                                      '"So the programme is ten sessions at €1,800, combining radiofrequency and drainage, and we review at session five."',
                                      '«El programa son diez sesiones, 1.800 €, combinando radiofrecuencia y drenaje, y revisamos en la quinta.»'),
                              cost: T(
                                      'Complete, professional and indistinguishable from the same programme four streets away. None of her three sentences appear in it, so there is nothing in the plan that could only have been written for her.',
                                      'Es completo, profesional e indistinguible del mismo programa que hay cuatro calles más allá. Ninguna de sus tres frases aparece, así que no hay nada en el plan que solo se hubiera podido escribir para ella.')
                            },
                      strong: {
                                line: T(
                                        '"You said you stopped swimming three years ago. The whole programme is built around getting you back in that pool by June."',
                                        '«Me has dicho que dejaste de nadar hace tres años. Todo el programa está montado para devolverte a esa piscina en junio.»'),
                                gain: T(
                                        'Puts her own sentence at the head of the plan, which is what the canvas is for. The ten sessions become a route to a specific June, and a route cannot be price-matched.',
                                        'Pone su propia frase a la cabeza del plan, que es para lo que sirve el lienzo. Las diez sesiones se convierten en un camino hacia un junio concreto, y un camino no se puede igualar en precio.')
                              }
                    },
                    {
                      name: T('PRP — facial, course of three', 'PRP — facial, tres sesiones'),
                      price: T('€810 for three sessions', '810 € las tres sesiones'),
                      why: T(
                             'PRP has no dramatic before-and-after to point at, so if the canvas is empty the only remaining argument is the mechanism, and the mechanism is not why anybody buys it.',
                             'El PRP no tiene un antes y después espectacular que señalar, así que si el lienzo está vacío el único argumento que queda es el mecanismo, y el mecanismo no es por lo que lo compra nadie.'),
                      moment: T(
                                'She has asked what it actually does, and you have a full canvas in front of you.',
                                'Ha preguntado qué hace exactamente, y tienes delante un lienzo completo.'),
                      weak: {
                              line: T(
                                      '"We take your own plasma, concentrate it and reintroduce it — three sessions at €810, spaced a month apart."',
                                      '«Cogemos tu propio plasma, lo concentramos y lo reintroducimos. Tres sesiones, 810 €, separadas un mes.»'),
                              cost: T(
                                      'An honest description of a procedure, offered to a woman who asked a different question. What it actually does, from her, means what it will do for the thing she told you about twenty minutes ago.',
                                      'Es una descripción honesta de un procedimiento, ofrecida a una mujer que ha preguntado otra cosa. «Qué hace exactamente», dicho por ella, significa qué hará con aquello que te contó hace veinte minutos.')
                            },
                      strong: {
                                line: T(
                                        '"It does the thing you described — slow, nothing anyone could point at. That\'s why I\'m putting it first rather than something faster."',
                                        '«Hace lo que tú has descrito: lento y sin que nadie pueda señalar nada. Por eso lo pongo el primero y no algo más rápido.»'),
                                gain: T(
                                        'Answers the mechanism question with her own criteria, and explains the ordering. A plan that says why this one is first is a plan she can defend to her husband on Thursday.',
                                        'Contesta la pregunta del mecanismo con los criterios de ella, y explica el orden. Un plan que dice por qué este va primero es un plan que ella puede defender ante su marido el jueves.')
                              }
                    },
                    {
                      name: T(
                              'Fractional CO2 laser resurfacing — full face',
                              'Láser CO2 fraccionado — rostro completo'),
                      price: T('€990 per session', '990 € la sesión'),
                      why: T(
                             'Resurfacing requires her to disappear for a week, and a week of her life is not something a product list has any standing to request.',
                             'El láser CO2 exige que desaparezca una semana, y una semana de su vida no es algo que una lista de productos tenga legitimidad para pedir.'),
                      moment: T(
                                'You are recommending it and the downtime is the part she has to accept.',
                                'Se lo estás recomendando y la recuperación es la parte que tiene que aceptar.'),
                      weak: {
                              line: T(
                                      '"It\'s €990 and you\'d want about seven days where you\'re not seeing people. Most clients take a week off or work from home."',
                                      '«Son 990 € y necesitarías unos siete días sin ver a nadie. La mayoría se coge una semana o teletrabaja.»'),
                              cost: T(
                                      'States the cost in money and days, which is the whole of what a product list can state. She weighs a week of hiding against a hollow finding, and a week of hiding usually wins.',
                                      'Expone el coste en dinero y en días, que es todo lo que puede exponer una lista de productos. Ella pesa una semana escondida contra un hallazgo clínico, y la semana escondida suele ganar.')
                            },
                      strong: {
                                line: T(
                                        '"Seven days out of sight, and €990. You told me you\'ve been avoiding the camera for two years — I\'m asking for one week to end the two years."',
                                        '«Siete días sin dejarte ver y 990 €. Me dijiste que llevas dos años esquivando la cámara: te pido una semana para terminar con los dos años.»'),
                                gain: T(
                                        'Sets the cost against the canvas instead of against the calendar. The week is the same week; what changed is what it is being weighed against.',
                                        'Pone el coste frente al lienzo y no frente al calendario. La semana es la misma; lo que ha cambiado es contra qué se pesa.')
                              }
                    }
                  ],
      title: T('The Discovery Canvas', 'El Lienzo de Descubrimiento'),
      objective: T('Complete Toolkit #1 honestly, and pass the six-item Depth Check that gates Phase 4.',
                   'Completar el Toolkit #1 con honestidad y superar la Comprobación de Profundidad de seis puntos que da paso a la Fase 4.'),
      provenance: {
        chapter: 9,
        principle: T('Without Inquire, your recommendation is only a product list.',
                     'Sin Indagar, tu recomendación no es más que una lista de productos.'),
        phase: 'discovery',
        trustStage: 'understanding',
        standard: 2,
        duty: 4,
        toolkit: 1
      },
      depth: {
        whyItGoesWrong: T(
            'Anyone completing a canvas wants it complete, because a half-empty one looks like slack work and whoever opens it next will see the hole. So the empty box receives a reasonable deduction: she never actually said what she wants to feel, but from everything else it was plainly confidence, and confidence goes in. Thoroughness is the culprit. The output is a plan whose foundation is a line she never uttered, and when it comes back to her later it will not ring true in her ear.',
            'Quien rellena un lienzo lo quiere completo, porque uno medio vacío parece trabajo flojo y quien lo abra a continuación verá el agujero. Así que la casilla vacía recibe una deducción razonable: ella nunca llegó a decir qué quiere sentir, pero por todo lo demás estaba claro que era seguridad, y seguridad es lo que se escribe. La culpable es la escrupulosidad. El producto es un plan cuyo cimiento es una línea que ella nunca pronunció, y cuando más adelante se la devuelvan no le va a sonar auténtica al oído.'),
        sheIsThinking: T(
            'Not quite my phrasing, but near enough, and she has evidently typed it in already, so I shall let that stand.',
            'No es del todo mi manera de decirlo, pero se acerca, y está claro que ya lo ha tecleado, así que lo voy a dejar estar.'),
        ladder: {
          weak: {
            line:   T(
                '(types into box four: "wants to feel confident again")',
                '(teclea en la casilla cuatro: «quiere volver a sentirse segura»)'),
            effect: T(
                'Finishes the canvas with a deduction dressed as a quotation. Whoever builds on that box inherits the guess with no way of spotting that it was one.',
                'Termina el lienzo con una deducción disfrazada de cita. Quien construya sobre esa casilla hereda la suposición sin manera alguna de detectar que lo era.')
          },
          average: {
            line:   T(
                '(leaves box four empty and closes the canvas)',
                '(deja la casilla cuatro vacía y cierra el lienzo)'),
            effect: T(
                'Straight, and it squanders the last sixty seconds you still had with her in the chair. The box stays hollow when it could have been asked for aloud.',
                'Es recto, y malgasta los últimos sesenta segundos que todavía tenías con ella en la butaca. La casilla se queda hueca cuando se podía haber pedido en voz alta.')
          },
          strong: {
            line:   T(
                '"One more before you go — what would you like to feel when you look at yourself? Not look like. Feel."',
                '«Una última cosa antes de que te vayas: ¿qué te gustaría sentir cuando te miras? No qué aspecto tener. Qué sentir.»'),
            effect: T(
                'Chapter 9\'s bridge question, put late rather than never. If it still yields nothing, the box is stamped as not supplied, and everything downstream is visibly built without it.',
                'Es la pregunta puente del capítulo 9, planteada tarde en lugar de nunca. Si aun así no rinde nada, la casilla se sella como no aportada, y todo lo que venga después se construye sin ella, a la vista.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The artifact that carries Discovery forward', 'El artefacto que traslada el Descubrimiento'),
          body: [
            T('Toolkit #1 is not a form to complete after the client leaves. It is the record that Phases 4 to 8 are built from — and its Depth Check is the gate: fewer than four criteria met, and Phase 4 does not open.',
              'El Toolkit #1 no es un formulario para rellenar cuando la clienta se va. Es el registro sobre el que se construyen las Fases 4 a 8, y su Comprobación de Profundidad es la compuerta: con menos de cuatro criterios cumplidos, la Fase 4 no se abre.'),
            T('Two of the six items cannot be ticked from your own confidence. "I understand why it matters now" requires that she actually said why. "The client feels heard" requires evidence in her behaviour, not in your intention. The Academy rejects both if the record does not support them.',
              'Dos de los seis puntos no pueden marcarse desde tu propia confianza. «Entiendo por qué le importa ahora» exige que ella lo haya dicho. «La clienta se siente escuchada» exige evidencia en su conducta, no en tu intención. La Academia rechaza ambos si el registro no los respalda.')
          ] },
        { kind: 'signal',
          avatar: 'beatriz',
          name: T('Toolkit #1 as it was actually filled in — Beatriz, 46',
                  'El Toolkit #1 tal y como se rellenó — Beatriz, 46'),
          client: T('Situation: "Wants to address lower-face laxity." · What has been tried: "Home skincare." · Expectations: "Natural result." · Prior experience: "None noted." · Depth Check: six of six ticked.',
                    'Situación: «Quiere tratar la flacidez del tercio inferior». · Qué ha probado: «Cosmética en casa». · Expectativas: «Resultado natural». · Experiencia previa: «Nada reseñable». · Comprobación de Profundidad: seis de seis marcados.'),
          prompt: T('A complete canvas, filled in neatly. What is wrong with it?',
                    'Un lienzo completo, rellenado con pulcritud. ¿Qué falla en él?'),
          notice: [
            T('Not one word in it is hers. Every entry is a clinical translation of something she said, and a translation is the first thing to be believed and the last thing anyone can check.',
              'Ni una sola palabra es suya. Cada entrada es una traducción clínica de algo que ella dijo, y una traducción es lo primero que se cree y lo último que alguien puede comprobar.'),
            T('"None noted" is not the same as none. It records that nobody asked — and in three weeks it will be read as a fact about the client rather than a fact about the consultation.',
              '«Nada reseñable» no es lo mismo que nada. Registra que nadie preguntó, y dentro de tres semanas se leerá como un hecho sobre la clienta y no como un hecho sobre la consulta.'),
            T('Six of six ticked. "I know her decision criteria" and "She feels heard" cannot be supported by anything written above them; both have been filled in from the practitioner\'s own confidence.',
              'Seis de seis marcados. «Conozco sus criterios de decisión» y «Se siente escuchada» no los respalda nada de lo escrito encima; los dos se han rellenado desde la seguridad del propio profesional.'),
            T('A canvas like this passes every completeness test and fails the only one that matters. Phases 4 to 8 will now be built on four sentences no client would recognise as her own.',
              'Un lienzo así supera todas las pruebas de exhaustividad y falla la única que importa. Las Fases 4 a 8 se construirán ahora sobre cuatro frases que ninguna clienta reconocería como suyas.')
          ] },
        { kind: 'drill',
          toolkit: 1,
          prompt: T('Practice drill. You have just run Discovery with Shira (Lesson 3). Complete the canvas from what she actually said.',
                    'Ejercicio práctico. Acabas de hacer el Descubrimiento con Shira (Lección 3). Completa el lienzo con lo que ella dijo realmente.'),
          transcript: [
            T('"I just had a free morning." → hand to the neck.', '«Tenía la mañana libre». → mano al cuello.'),
            T('"It\'s my neck, yes. My daughter filmed me at her birthday and I saw it from the side. I haven\'t told anyone that."',
              '«Es mi cuello, sí. Mi hija me grabó en su cumpleaños y me vi de perfil. No se lo he contado a nadie».'),
            T('"I tried a firming cream for about eight months. I don\'t think it did anything, but I kept buying it."',
              '«Probé una crema reafirmante unos ocho meses. No creo que hiciera nada, pero la seguía comprando».'),
            T('"I don\'t want anything that means people ask me what I\'ve had done."',
              '«No quiero nada que haga que la gente me pregunte qué me he hecho».')
          ],
          fields: [
            { name: 'situation', label: T('Situation in her own words', 'La situación en sus propias palabras') },
            { name: 'tried', label: T('What has been tried, and what happened', 'Qué ha probado y qué pasó') },
            { name: 'constraints', label: T('Expectations and constraints', 'Expectativas y limitaciones') },
            { name: 'priorExperience', label: T('Prior experience risk', 'Riesgo por experiencia previa') }
          ],
          depthCheck: [
            { key: 'wantsToChange', label: T('I understand what she wants to change', 'Entiendo qué quiere cambiar'), supported: true },
            { key: 'whyNow', label: T('I understand why it matters now', 'Entiendo por qué le importa ahora'), supported: true },
            { key: 'whatTried', label: T('I know what has been tried', 'Sé qué ha probado'), supported: true },
            { key: 'expectations', label: T('I know her expectations and constraints', 'Conozco sus expectativas y limitaciones'), supported: true },
            { key: 'decisionCriteria', label: T('I know her decision criteria', 'Conozco sus criterios de decisión'), supported: false,
              note: T('She never said how she will decide, or who else is involved. Ticking this is an invention.',
                      'Nunca dijo cómo decidirá ni quién más participa. Marcarlo es una invención.') },
            { key: 'feelsHeard', label: T('She feels heard', 'Se siente escuchada'), supported: true,
              note: T('Supported here — but only because of the disclosure marker. Without "I haven\'t told anyone that", this is a self-assessment.',
                      'Aquí sí está respaldado, pero solo por el marcador de revelación. Sin «no se lo he contado a nadie», esto sería una autoevaluación.') }
          ],
          rule: T('The Academy validates honesty, not completeness. A canvas with four honest ticks passes; a canvas with six ticks and one invention does not.',
                  'La Academia valida la honestidad, no la exhaustividad. Un lienzo con cuatro marcas honestas pasa; un lienzo con seis marcas y una invención, no.') },
        { kind: 'choose',
          prompt: T('A different client, and this time your own canvas, just finished. It has four honest ticks. The fifth — "I know her decision criteria" — is arguable: she said in passing that she would want to talk it over with her daughter first. Do you tick it?',
                    'Otra clienta y, esta vez, tu propio lienzo recién terminado. Tiene cuatro marcas honestas. La quinta —«Conozco sus criterios de decisión»— es discutible: comentó de pasada que querría hablarlo antes con su hija. ¿La marcas?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Tick it, and write the reasoning in the margin: "Daughter involved — treat as a joint decision. To check next visit."',
                       'Marcarla y anotar el razonamiento al margen: «Hija implicada; tratar como decisión conjunta. Comprobar en la próxima visita».'),
              why: T('Careful, qualified, and almost certainly right. But the tick is what opens Phase 4 and the tick does not carry the margin: in three weeks the note reads as something she said, and the qualifier is gone. You have also spent the question — nobody asks what is already written down.',
                     'Cuidadoso, matizado y casi con seguridad acertado. Pero lo que abre la Fase 4 es la marca, y la marca no arrastra el margen: dentro de tres semanas la nota se leerá como algo que ella dijo, y el matiz habrá desaparecido. Además has gastado la pregunta: nadie pregunta lo que ya está escrito.') },
            { id: 'b', verdict: 'best',
              label: T('Leave it unticked and write the question you did not ask: "Not disclosed. She raised her daughter\'s view of her own accord. Next time: how will you and your daughter decide this, and what would she need to hear?"',
                       'Dejarla sin marcar y escribir la pregunta que no hiciste: «No revelado. Ella sacó por su cuenta la opinión de su hija. La próxima vez: ¿cómo lo decidiréis tu hija y tú, y qué necesitaría oír ella?»'),
              why: T('Four ticks opens Phase 4, so nothing is lost operationally, and the fifth item is now a task rather than a fiction. The unticked line is the most useful thing on the canvas, because it is the only one that tells the next person in the room — including you in three weeks — what is missing and how to get it.',
                     'Con cuatro marcas la Fase 4 se abre, así que no se pierde nada operativo, y el quinto punto pasa a ser una tarea en vez de una ficción. La línea sin marcar es lo más útil del lienzo, porque es lo único que le dice a quien entre después en la sala —tú incluida dentro de tres semanas— qué falta y cómo conseguirlo.') },
            { id: 'c', verdict: 'harmful',
              label: T('Tick it and record the criterion as you understand it: "Decides jointly with daughter; budget-sensitive."',
                       'Marcarla y registrar el criterio tal y como lo entiendes: «Decide junto a su hija; sensible al presupuesto».'),
              why: T('Two inventions in six words. Nothing she said supports "budget-sensitive", and the record now contains a claim about her finances she never made. Everyone who reads it afterwards will treat it as something she told you, and the recommendation will arrive pre-shrunk to a number she never named — which she will experience as being offered the cheap version.',
                     'Dos invenciones en seis palabras. Nada de lo que dijo respalda «sensible al presupuesto», y el registro contiene ya una afirmación sobre sus finanzas que ella nunca hizo. Todo el que lo lea después lo tomará por algo que ella contó, y la recomendación llegará encogida de antemano hasta una cifra que nunca nombró, lo cual ella vivirá como que le ofrecen la versión barata.') }
          ],
          principle: T('The Depth Check records the consultation, not your confidence. An unticked item names the next question; a ticked one that nothing supports deletes it.',
                       'La Comprobación de Profundidad registra la consulta, no tu seguridad. Un punto sin marcar nombra la siguiente pregunta; uno marcado sin respaldo la borra.'),
          retry: {
            note: T('The same canvas, read by somebody who was not there.',
                    'El mismo lienzo, leído por alguien que no estuvo.'),
            prompt: T('Six weeks on, a colleague covers your list and sees Shira for her review. She has your canvas and four minutes to read it before Shira walks in. Which entry earns its place most?',
                      'Seis semanas después, una compañera cubre tu agenda y atiende la revisión de Shira. Tiene tu lienzo y cuatro minutos para leerlo antes de que Shira entre. ¿Qué entrada se gana más su sitio?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Situation: wants to address neck laxity and lower-face contour. Expectations realistic. Tolerates slow progress."',
                         '«Situación: quiere tratar la flacidez del cuello y el contorno del tercio inferior. Expectativas realistas. Tolera un progreso lento».'),
                why: T('Accurate, professional, and readable in four seconds — which is why it is the entry most practitioners write. It tells your colleague what to treat and nothing about what Shira will be checking when she is handed the mirror. She will get a competent appointment from a stranger who knows her neck and not her.',
                       'Exacta, profesional y legible en cuatro segundos, que es justo por lo que es la entrada que escribe la mayoría. Le dice a tu compañera qué tratar y nada sobre qué va a comprobar Shira cuando le den el espejo. Tendrá una cita competente con una desconocida que conoce su cuello y no a ella.') },
              { id: 'b', verdict: 'best',
                label: T('"My daughter filmed me at her birthday and I saw it from the side. I haven\'t told anyone that." — word for word, with the disclosure marker kept.',
                         '«Mi hija me grabó en su cumpleaños y me vi de perfil. No se lo he contado a nadie»: palabra por palabra, conservando el marcador de revelación.'),
                why: T('In one line your colleague learns what brought her in, the condition the result has to survive — being seen from the side, in a recording — and that this was told to nobody else, which is why to handle it carefully. Everything clinical sits in the treatment notes; this sentence cannot be got back from anywhere.',
                       'En una línea tu compañera sabe qué la trajo, la condición que el resultado tiene que superar —verse de perfil, en una grabación— y que esto no se lo ha contado a nadie más, que es por lo que hay que tratarlo con cuidado. Todo lo clínico está en la hoja de tratamiento; esta frase no se recupera de ningún sitio.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Depth Check: 6/6. Client fully understood and engaged; good rapport established."',
                         '«Comprobación de Profundidad: 6/6. Clienta plenamente comprendida e implicada; buena sintonía establecida».'),
                why: T('A summary of your own confidence, handed to somebody who was not there to check it. Six of six tells your colleague she may proceed on Phase 4 material, and she will — on a record containing no evidence for it. When Shira does not recognise herself in the conversation, the colleague will conclude that Shira has changed her mind.',
                       'Un resumen de tu propia seguridad, entregado a alguien que no estuvo para comprobarlo. Seis de seis le dice a tu compañera que puede avanzar sobre material de Fase 4, y lo hará, sobre un registro que no contiene ninguna prueba de ello. Cuando Shira no se reconozca en la conversación, la compañera concluirá que Shira ha cambiado de opinión.') }
            ],
            principle: T('The canvas is written for the person who was not in the room. Her own sentence travels; your translation of it does not.',
                         'El lienzo se escribe para quien no estuvo en la sala. Su frase viaja; tu traducción de esa frase, no.'),
            changes: {
              axis: 'continuation',
              detail: T('At the six-week review the colleague opens with "you said you saw yourself from the side" instead of with the neck, and Shira does not have to tell a stranger, a second time, the thing she has told nobody, in order to be understood.',
                        'En la revisión de las seis semanas la compañera abre con «dijiste que te viste de perfil» en lugar de con el cuello, y Shira no tiene que contarle a una desconocida, por segunda vez, lo que no le ha contado a nadie para que la entiendan.')
            }
          } },
        { kind: 'check',
          prompt: T('Which entry belongs in "Prior experience risk" for Shira?',
                    '¿Qué entrada corresponde al «Riesgo por experiencia previa» de Shira?'),
          options: [
            { id: 'a', text: T('Nothing — she has had no previous treatments.', 'Nada: no se ha hecho tratamientos previos.') },
            { id: 'b', text: T('Eight months of a firming cream she kept buying although she believed it did nothing.', 'Ocho meses de crema reafirmante que siguió comprando aunque creía que no hacía nada.') },
            { id: 'c', text: T('Her daughter filming her at the birthday.', 'Que su hija la grabara en el cumpleaños.') }
          ],
          answer: 'b',
          why: T('Prior experience is not limited to procedures. Eight months of paying for something she did not believe in tells you two things you will need in Phase 6: she tolerates slow, invisible progress, and she has already spent money on hope. Price her plan without knowing that and you will misread her hesitation as budget.',
                 'La experiencia previa no se limita a los procedimientos. Ocho meses pagando por algo en lo que no creía te dicen dos cosas que necesitarás en la Fase 6: tolera un progreso lento e invisible, y ya ha gastado dinero en esperanza. Si presupuestas su plan sin saberlo, malinterpretarás su duda como presupuesto.') },
        { kind: 'reflect',
          prompt: T('Think of your last consultation. Which of the six Depth Check items would you have ticked that the record would not have supported?',
                    'Piensa en tu última consulta. ¿Cuál de los seis puntos de la Comprobación de Profundidad habrías marcado sin que el registro lo respaldara?'),
          placeholder: T('Name the item, and what you would have needed to ask.', 'Nombra el punto y qué habrías necesitado preguntar.') }
      ]
    }
  ],
  apply: {
    assignment: T('In your next consultation, ask "why now, rather than last year?" and then say nothing for three full seconds. Write down the second answer, verbatim, before you write anything clinical.',
                  'En tu próxima consulta, pregunta «¿por qué ahora y no el año pasado?» y no digas nada durante tres segundos completos. Anota la segunda respuesta, literal, antes de escribir nada clínico.'),
    prompt: T('What happened when you tried it? Write the second answer in her exact words — and what you would have recommended if you had only heard the first.',
              '¿Qué pasó cuando lo probaste? Escribe la segunda respuesta con sus palabras exactas, y qué habrías recomendado si solo hubieras oído la primera.')
  }
};

// ===========================================================================
// MODULES 2, 4–10 — curriculum spine.
// Lesson titles, objectives and source chapters are fixed; lesson interiors are
// authored in sequence. Status is stated honestly in the interface: nothing is
// presented as available until its lessons exist.
// ===========================================================================
const outline = (id, n, phase, accent, title, strapline, source, minutes, lessons, apply) => ({
  id, n, phase, accent, title, strapline, source, minutes, status: 'production',
  summary: strapline, lessons: lessons.map((l, i) => ({
    id: id + 'l' + (i + 1), n: i + 1, minutes: l.m, title: l.t, objective: l.o, blocks: []
  })), apply
});

const module2 = require('./module2');

const module4 = require('./module4');

const module5 = require('./module5');

const module6 = require('./module6');

const module7 = require('./module7');

const module8 = require('./module8');

const module9 = require('./module9');

const module10 = require('./module10');

const MODULES = [module1, module2, module3, module4, module5, module6, module7, module8, module9, module10];

// ---------------------------------------------------------------------------
function curriculum() {
  return MODULES.map(m => ({
    id: m.id, n: m.n, phase: m.phase, accent: m.accent,
    title: m.title, strapline: m.strapline, summary: m.summary,
    // What she can DO afterwards. It is the reason to open a module at all, so
    // it travels with every projection of one, not only with the full record.
    outcome: m.outcome,
    source: m.source, minutes: m.minutes, status: m.status,
    lessonCount: m.lessons.length,
    lessons: m.lessons.map(l => ({ id: l.id, n: l.n, title: l.title, objective: l.objective, minutes: l.minutes, built: (l.blocks || []).length > 0 })),
    apply: m.apply
  }));
}

function getModule(id) { return MODULES.find(m => m.id === id) || null; }
function getLesson(moduleId, lessonId) {
  const m = getModule(moduleId);
  if (!m) return null;
  const l = m.lessons.find(x => x.id === lessonId);
  if (!l) return null;
  return {
    module: {
      id: m.id, n: m.n, title: m.title, accent: m.accent,
      phase: m.phase, status: m.status, outcome: m.outcome
    },
    lesson: l
  };
}

function stats() {
  const built = MODULES.filter(m => m.status === 'available');
  return {
    modules: MODULES.length,
    modulesBuilt: built.length,
    lessons: MODULES.reduce((s, m) => s + m.lessons.length, 0),
    lessonsBuilt: MODULES.reduce((s, m) => s + m.lessons.filter(l => (l.blocks || []).length).length, 0),
    // Minutes that exist to be studied today, and the full plan, stated separately.
    learningMinutes: built.reduce((s, m) => s + m.minutes, 0),
    curriculumMinutes: MODULES.reduce((s, m) => s + m.minutes, 0)
  };
}

module.exports = { MODULES, curriculum, getModule, getLesson, stats, T };

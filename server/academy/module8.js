/**
 * MODULE 8 — DECISION SUPPORT
 * Book: Ch.13 (R — Resolve & Rise: the three closes, the partnership close,
 *       Ruti's real block, Dana's clinic close, the thirty seconds after yes,
 *       Elena — "abandoning is not respect either").
 * Canonical: Phase 7 Decision Support; the Decision Engine's derived tri-state
 *            YES / DEFER / NO; Trust Stage 7 (Confirmation); Ethical Duty 2.
 */
const T = (en, es) => ({ en, es });

module.exports = {
  id: 'm8', n: 8,
  phase: 'decisionSupport',
  accent: 'mercury',
  title: T('Decision Support', 'Acompañamiento de la Decisión'),
  strapline: T('Three closes, and why the outcome is derived rather than chosen',
               'Tres cierres, y por qué el resultado se deriva en lugar de elegirse'),
  summary: T(
    'By the time you reach the decision, it has largely been made — by everything that happened in the seven phases before it. This module separates the three closes practitioners actually use, teaches the partnership close as a sentence rather than a technique, works the two failures that look opposite and cost the same (pushing and abandoning), covers the thirty seconds after a yes that decide whether it survives the week, and shows how to read the client-state ledger well enough to predict the outcome before the engine derives it.',
    'Cuando llegas a la decisión, ya está tomada en gran parte, por todo lo que ocurrió en las siete fases anteriores. Este módulo separa los tres cierres que los profesionales usan de verdad, enseña el cierre en colaboración como una frase y no como una técnica, trabaja los dos fallos que parecen opuestos y cuestan lo mismo (presionar y abandonar), cubre los treinta segundos posteriores al sí que deciden si sobrevive a la semana, y muestra cómo leer el registro de estado lo bastante bien para predecir el resultado antes de que lo derive el motor.'),
  outcome: T('Ask for a decision in a way that leaves it hers — state your position, hand the choice over, and use the thirty seconds after yes to make it survive the week.',
             'Pedir una decisión de forma que siga siendo suya: enunciar tu posición, entregarle la elección y usar los treinta segundos posteriores al sí para que aguante toda la semana.'),
  source: T('The Beauty Sales Secrets — Chapter 13 (R — Resolve & Rise); MIRROR Phase 7, Decision Engine, Ethical Duty 2',
            'The Beauty Sales Secrets — Capítulo 13 (R — Resolver y Elevarse); MIRROR Fase 7, Motor de Decisión, Deber Ético 2'),
  minutes: 63,
  status: 'available',
  lessons: [
    // -----------------------------------------------------------------
    {
      id: 'm8l1', n: 1, minutes: 11,
      title: T('Pressure, passive, partnership', 'Presión, pasivo, colaboración'),
      objective: T('Recognise all three closes in your own language, and know what each one costs after the client leaves.',
                   'Reconocer los tres cierres en tu propio lenguaje y saber qué cuesta cada uno después de que la clienta se va.'),
      provenance: {
        chapter: 13,
        principle: T('There are three closes — pressure, passive and partnership — and only the third one leaves her feeling heard rather than manipulated or abandoned.',
                     'Hay tres cierres —presión, pasivo y colaboración— y solo el tercero la deja sintiéndose escuchada en lugar de manipulada o abandonada.'),
        phase: 'decisionSupport',
        trustStage: 'alignment',
        standard: 5,
        duty: 2,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
          'Nearly everyone who refuses the pressure close lands in the passive one, and lands there on purpose. She has watched a woman be pushed into a treatment, she has seen the cancellation and the review that arrived afterwards, and she has resolved never to be that consultant. The passive close is an ethical stance, not idleness. What it overlooks is that the missing request is itself a statement: if she believed in this, she would have asked me for my yes. The scruple travels across the desk and arrives as doubt about the plan, and the client carries out of the building a hesitation that began on your side of it.',
          'Casi todo el que rechaza el cierre a presión acaba en el pasivo, y acaba ahí a propósito. Ha visto empujar a una mujer hacia un tratamiento, ha visto la cancelación y la reseña que llegaron después, y ha resuelto no ser nunca esa consultora. El cierre pasivo es una postura ética, no desidia. Lo que pasa por alto es que la petición ausente es en sí misma una declaración: si creyera en esto, me habría pedido el sí. El escrúpulo cruza la mesa y llega convertido en duda sobre el plan, y la clienta saca del edificio una vacilación que empezó en tu lado.'),
        sheIsThinking: T(
          'She has not asked me for my yes. Either she assumes I cannot afford it or she is unsure it works, and neither of those is a reason for me to commit.',
          'No me ha pedido el sí. O da por hecho que no puedo permitírmelo o no las tiene todas consigo, y ninguna de las dos cosas es un motivo para que yo me comprometa.'),
        ladder: {
          weak:    { line: T('"Shall we get you in the book? I have got this week\'s pricing until Friday."',
                     '«¿Te metemos en la agenda? Tengo el precio de esta semana hasta el viernes».'),
                     effect: T('It can manufacture today\'s yes and then manufacture Wednesday\'s cancellation, because what she agreed to was the Friday, not the treatment.',
                               'Puede fabricar el sí de hoy y después fabricar la cancelación del miércoles, porque a lo que accedió fue al viernes, no al tratamiento.') },
          average: { line: T('"Have a think about it and ring me whenever you are ready."',
                     '«Piénsatelo y me llamas cuando lo tengas claro».'),
                     effect: T('The kindest-sounding line in the trade and the commonest. It hands her the decision plus the labour of reopening a discussion, and she reads it as the specialist in the chair opposite having no view.',
                               'La frase que mejor suena del oficio y la más frecuente. Le entrega la decisión más el trabajo de reabrir una conversación, y ella la lee como que la especialista sentada enfrente no tiene opinión.') },
          strong:  { line: T('"Based on everything we have talked about, I believe this is right for you. What feels right to you?"',
                     '«Por todo lo que hemos hablado, creo que esto es lo adecuado para ti. ¿Qué te parece a ti?»'),
                     effect: T('Puts your view on the table and then hands the choice across intact. She is replying to a question about fit rather than parrying a request, and a yes given that way is one she can justify to herself on Thursday.',
                               'Pone tu criterio sobre la mesa y después entrega la elección intacta. Ella responde a una pregunta sobre si le encaja y no para un ataque, y un sí dado así es uno que podrá justificarse a sí misma el jueves.') }
        }
      },
      treatments: [
        {
          name:   T("Radiofrequency microneedling — course of three",
                     "Microneedling con radiofrecuencia — pauta de tres sesiones"),
          price:  T("€940 for three sessions",
                     "940 € las tres sesiones"),
          why:    T("A course with a promotion attached is where the pressure close lives, because the deadline is real and mentioning it feels like giving her information rather than applying force.",
                     "Un bono con una promoción encima es donde vive el cierre a presión, porque la fecha límite es real y mencionarla parece darle información y no apretar."),
          moment: T("The consultation is finished and she is waiting for whatever comes next. There is a package price on until Friday that you could mention.",
                     "La consulta ha terminado y ella espera lo que venga ahora. Hay un precio de bono hasta el viernes que podrías mencionar."),
          weak:   {
            line: T("\"There is a package price on this until Friday, so if you booked today it would be €850 rather than €940.\"",
                     "«Hay precio de bono hasta el viernes, así que si lo reservas hoy serían 850 € en lugar de 940 €.»"),
            cost: T("Buys Friday's yes and Wednesday's cancellation, because what she agreed to was the deadline and not the three sessions. It also teaches her that your figures are a function of the week.",
                     "Compra el sí del viernes y la anulación del miércoles, porque a lo que dijo que sí fue a la fecha límite y no a las tres sesiones. Además le enseña que tus cifras dependen de la semana.")
          },
          strong: {
            line: T("\"From everything you have told me, three is what I would do. €940. What feels right to you?\"",
                     "«Por todo lo que me has contado, tres es lo que yo haría. 940 €. ¿Qué sientes tú que encaja?»"),
            gain: T("Puts your view on the table and hands the choice across intact. A yes given that way is one she can still justify to herself on Wednesday, which is the only kind worth having on a three-session course.",
                     "Pone tu criterio encima de la mesa y le pasa la elección entera. Un sí dado así es uno que el miércoles todavía se puede justificar a sí misma, que es el único que merece la pena en una pauta de tres.")
          }
        },
        {
          name:   T("Botulinum toxin — three areas",
                     "Toxina botulínica — tres zonas"),
          price:  T("€320, three areas",
                     "320 €, tres zonas"),
          why:    T("At €320 the passive close feels harmless — it is only €320, she will ring if she wants it — and it is where most careful practitioners quietly stay.",
                     "A 320 € el cierre pasivo parece inofensivo —son solo 320 €, ya llamará si lo quiere— y ahí es donde se queda, sin ruido, la mayoría de las profesionales cuidadosas."),
          moment: T("She has agreed with every word for twenty minutes. You hear yourself telling her to have a think and ring when she is ready.",
                     "Lleva veinte minutos dándote la razón en todo. Te oyes diciéndole que se lo piense y que llame cuando lo tenga claro."),
          weak:   {
            line: T("\"Have a think about it and give us a ring whenever you are ready — there is no rush at all.\"",
                     "«Piénsatelo y nos llamas cuando lo tengas claro, sin ninguna prisa.»"),
            cost: T("The kindest-sounding sentence in the trade. It hands her the decision plus the labour of reopening it, and what she reads across the desk is a specialist who has no view of her own.",
                     "La frase que mejor suena de todo el oficio. Le entrega la decisión más el trabajo de volver a abrirla, y lo que ella lee al otro lado de la mesa es una profesional que no tiene criterio propio.")
          },
          strong: {
            line: T("\"I think three areas is right for you and I would do it now rather than in the spring. €320. What do you think?\"",
                     "«Creo que tres zonas es lo tuyo, y yo lo haría ahora y no en primavera. 320 €. ¿Tú qué dices?»"),
            gain: T("States a position and then asks about fit rather than about buying. At €320 she can answer it there and then, and the ones who say not now say it for a reason you get to hear.",
                     "Enuncia una postura y después pregunta por el encaje, no por la compra. A 320 € puede contestar en el momento, y las que dicen que ahora no lo dicen por un motivo que tú llegas a oír.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('Two of them fail in opposite directions', 'Dos de ellos fallan en direcciones opuestas'),
          body: [
            T('The pressure close manufactures a reason to decide now: a price that rises, a slot that disappears, an offer that ends this week. It works often enough to survive in the industry, and its cost arrives later — as a cancellation, a chargeback, or a review written by someone who felt handled.',
              'El cierre por presión fabrica una razón para decidir ya: un precio que sube, un hueco que desaparece, una oferta que acaba esta semana. Funciona lo bastante a menudo como para sobrevivir en el sector, y su coste llega después: una cancelación, una devolución o una reseña escrita por alguien que se sintió manejada.'),
            T('The passive close abandons: "think about it and call me if you want". It feels respectful and it reads as absence. If you believed in the recommendation, you would ask. Your uncertainty becomes her doubt, and she takes it to whoever asks her a question.',
              'El cierre pasivo abandona: «piénsalo y llámame si quieres». Parece respetuoso y se lee como ausencia. Si creyeras en la recomendación, preguntarías. Tu incertidumbre se convierte en su duda, y se la lleva a quien sí le haga una pregunta.'),
            T('The partnership close does neither: it states your professional position, then hands her the decision. "Based on everything we\'ve talked about, I believe this is right for you. What feels right to you?" Nothing is manufactured, and nothing is abandoned.',
              'El cierre en colaboración no hace ninguna de las dos cosas: enuncia tu posición profesional y luego le entrega la decisión. «Por todo lo que hemos hablado, creo que esto es lo adecuado para ti. ¿Qué te parece a ti?». No se fabrica nada y no se abandona nada.')
          ],
          diagram: 'three-closes' },
        { kind: 'signal',
          name: T('Fragment — the last ninety seconds of a consultation that went well',
                  'Fragmento — los últimos noventa segundos de una consulta que fue bien'),
          client: T('"You\'ve been amazing, honestly. But I do need to think about it." — An hour of connection, a clear recommendation, and she is still in the chair. She has not picked up her bag.',
                    '«Has sido encantadora, de verdad. Pero necesito pensarlo». — Una hora de conexión, una recomendación clara, y sigue sentada. No ha cogido el bolso.'),
          prompt: T('Three closes are available in this moment. What in the room tells you which one it is about to be?',
                    'En este momento hay tres cierres disponibles. ¿Qué hay en la sala que te dice cuál va a ser?'),
          notice: [
            T('Nothing she said is a refusal. It is a request for time, made by someone who is still seated — and still seated is the whole of the signal.',
              'Nada de lo que ha dicho es un rechazo. Es una petición de tiempo, hecha por alguien que sigue sentada, y seguir sentada es toda la señal.'),
            T('The pressure close would answer her sentence with a deadline: a price that rises on Friday, a slot about to go. It would work often enough, and the cost would arrive as a cancellation on Thursday.',
              'El cierre por presión respondería a su frase con un plazo: un precio que sube el viernes, un hueco a punto de irse. Funcionaría bastante a menudo, y el coste llegaría como una cancelación el jueves.'),
            T('The passive close would answer it with "of course, take your time" and a walk to the door. That is the Elena consultation in Chapter 13 — a client who did not need to think, and had the treatment somewhere else two weeks later.',
              'El cierre pasivo respondería con «claro, tómate tu tiempo» y un acompañamiento hasta la puerta. Esa es la consulta de Elena del Capítulo 13: una clienta que no necesitaba pensarlo y que dos semanas después se hizo el tratamiento en otro sitio.'),
            T('The third is neither. It states your position once and keeps something real available to her without requiring a decision — which is the only one of the three that leaves the decision where it started.',
              'El tercero no es ninguno de los dos. Enuncia tu posición una vez y mantiene algo real disponible para ella sin exigirle una decisión, que es el único de los tres que deja la decisión donde estaba.')
          ] },
        { kind: 'sort',
          prompt: T('Sort each closing sentence into the close it belongs to.',
                    'Clasifica cada frase de cierre en el tipo al que pertenece.'),
          client: T('Six sentences recorded at the end of real consultations.',
                    'Seis frases registradas al final de consultas reales.'),
          buckets: [
            { id: 'pressure', label: T('Pressure', 'Presión') },
            { id: 'passive', label: T('Passive', 'Pasivo') },
            { id: 'partnership', label: T('Partnership', 'Colaboración') }
          ],
          items: [
            { id: 'c1', text: T('"Have a think about it and get in touch if you decide to go ahead."', '«Piénsatelo y me dices si al final te decides».'), bucket: 'passive' },
            { id: 'c2', text: T('"I believe this is right for you. What feels right to you?"', '«Creo que esto es lo adecuado para ti. ¿Qué te parece a ti?»'), bucket: 'partnership' },
            { id: 'c3', text: T('"I can hold this price until Friday, but after that it goes up."', '«Puedo mantenerte este precio hasta el viernes; después sube».'), bucket: 'pressure' },
            { id: 'c4', text: T('"No pressure at all — I\'m here whenever you\'re ready."', '«Sin ninguna presión: aquí estoy cuando estés lista».'), bucket: 'passive' },
            { id: 'c5', text: T('"I\'ve got a Tuesday slot. Want me to hold it while you decide?"', '«Tengo un hueco el martes. ¿Quieres que te lo reserve mientras decides?»'), bucket: 'partnership' },
            { id: 'c6', text: T('"Most of my clients book on the day — you don\'t want to lose the momentum."', '«La mayoría de mis clientas reservan el mismo día; no querrás perder el impulso».'), bucket: 'pressure' }
          ],
          why: T('c4 is the one people argue about. It contains no pressure at all, which is precisely why it fails: "no pressure" plus "whenever you\'re ready" gives her nothing to respond to, and a client with nothing to respond to leaves. c5 is its opposite twin — it holds something real for her without requiring a decision, which is what partnership means in practice.',
                 'La c4 es la que genera discusión. No contiene ninguna presión, y justo por eso falla: «sin presión» más «cuando estés lista» no le da nada a lo que responder, y una clienta sin nada a lo que responder se va. La c5 es su gemela opuesta: guarda algo real para ella sin exigir una decisión, que es lo que significa colaboración en la práctica.') },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 13', 'The Beauty Sales Secrets — Capítulo 13'),
          quote: T('Closing isn\'t pressure. But abandoning is not respect either.',
                   'Cerrar no es presionar. Pero abandonar tampoco es respetar.'),
          note: T('This comes from the author\'s account of Elena: a full hour of connection, a clear recommendation, and at "I need to think" he said "of course, take your time" and walked her to the door. She had the treatment elsewhere two weeks later. She did not need to think — she needed one more question.',
                  'Viene del relato del autor sobre Elena: una hora entera de conexión, una recomendación clara, y ante «necesito pensarlo» él dijo «claro, tómate tu tiempo» y la acompañó a la puerta. Se hizo el tratamiento en otro sitio dos semanas después. No necesitaba pensar: necesitaba una pregunta más.') },
        { kind: 'choose',
          prompt: T('Same client, same chair. You have stated your position — "I think this is right for you." She says: "I do need to think about it, though." Which of these is the partnership close and not one of the other two?',
                    'La misma clienta, la misma silla. Has enunciado tu posición: «creo que esto es lo adecuado para ti». Ella dice: «pero necesito pensarlo». ¿Cuál de estas es el cierre en colaboración y no uno de los otros dos?'),
          options: [
            { id: 'a', verdict: 'harmful',
              label: T('"I can hold today\'s price until Friday, so have a think and let me know before then."',
                       '«Te puedo mantener el precio de hoy hasta el viernes, así que piénsalo y me dices antes».'),
              why: T('You attached a deadline to her thinking time, so what she is now deciding is the date. A decision taken against a clock is the one most often cancelled, and she will recognise afterwards exactly what happened to her — which costs you the referral as well as the booking.',
                     'Le has pegado un plazo a su tiempo para pensar, así que lo que decide ahora es la fecha. Una decisión tomada contra un reloj es la que más se cancela, y después ella reconocerá perfectamente lo que le hicieron, lo que te cuesta la recomendación además de la reserva.') },
            { id: 'b', verdict: 'best',
              label: T('"That\'s fair. I\'ve got a Tuesday that would fit the plan — shall I hold it while you decide? It costs you nothing, and I\'ll release it on Friday if I haven\'t heard from you."',
                       '«Me parece bien. Tengo un martes que encajaría con el plan: ¿te lo reservo mientras decides? No te compromete a nada, y si el viernes no sé nada de ti lo suelto».'),
              why: T('Something real is held for her and no decision is required to hold it, which is what partnership means in practice. Saying out loud when you will release it is what stops the hold becoming a quiet obligation — she can let Friday pass and nothing bad happens, and she knows that before she leaves.',
                     'Se guarda algo real para ella y no hace falta ninguna decisión para guardarlo, que es lo que significa colaboración en la práctica. Decir en voz alta cuándo lo sueltas es lo que impide que la reserva se convierta en una obligación silenciosa: puede dejar pasar el viernes sin que ocurra nada, y lo sabe antes de irse.') },
            { id: 'c', verdict: 'weak',
              label: T('"Of course — no pressure at all. I\'m here whenever you\'re ready."',
                       '«Claro, sin ninguna presión. Aquí estoy cuando estés lista».'),
              why: T('There is nothing in this for her to answer, and a client with nothing to answer leaves. It reads as the professional stepping back from her own recommendation, and your uncertainty becomes her doubt on the drive home.',
                     'Aquí no hay nada a lo que ella pueda responder, y una clienta sin nada a lo que responder se va. Se lee como la profesional apartándose de su propia recomendación, y tu incertidumbre se convierte en su duda de camino a casa.') }
          ],
          principle: T('Partnership is not a tone of voice. It is a position stated plus something real she is free to decline — pressure manufactures a reason to decide now, and passivity removes every reason to answer at all.',
                       'La colaboración no es un tono de voz. Es una posición enunciada más algo real que ella puede rechazar: la presión fabrica un motivo para decidir ya, y la pasividad elimina cualquier motivo para responder.'),
          retry: {
            note: T('Here the pressure is not yours: the clinic is running a campaign, the deadline is real, and you have been told to mention it.',
                    'Aquí la presión no es tuya: la clínica tiene una campaña, el plazo es real y te han dicho que lo menciones.'),
            prompt: T('Cristina has just said she will think about it. The package price genuinely does rise on the first of next month. What do you say?',
                      'Cristina acaba de decir que se lo va a pensar. El precio del paquete sube de verdad el día uno del mes que viene. ¿Qué dices?'),
            options: [
              { id: 'a', verdict: 'best',
                label: T('"One thing you should know, because it\'s your money: the package price does go up on the first. I\'m not telling you that so you\'ll decide today — I\'d rather you decided about the treatment."',
                         '«Una cosa que deberías saber, porque es tu dinero: el precio del paquete sube el día uno. No te lo digo para que decidas hoy, prefiero que decidas sobre el tratamiento».'),
                why: T('A true and material fact, stated once, with the instruction deliberately removed. She now has the same information you have and no reason to feel steered by it, which is the only form in which a real deadline can be passed on without becoming the pressure close.',
                       'Un hecho cierto y relevante, dicho una vez, con la instrucción retirada a propósito. Ahora tiene la misma información que tú y ningún motivo para sentirse dirigida por ella, que es la única forma en la que un plazo real puede transmitirse sin convertirse en el cierre por presión.') },
              { id: 'b', verdict: 'weak',
                label: T('Say nothing about the campaign. She is thinking about it, and you do not want the price to be the reason she decides.',
                         'No decir nada de la campaña. Se lo está pensando y no quieres que el precio sea el motivo de su decisión.'),
                why: T('Withholding is not restraint. If the figure changes on the first, she is entitled to know that before she chooses a date, and finding out afterwards — from a receptionist, from a poster — tells her you managed what she was allowed to know. You protected your own comfort with her money.',
                       'Ocultar no es contención. Si la cifra cambia el día uno, ella tiene derecho a saberlo antes de elegir fecha, y enterarse después —por recepción, por un cartel— le dice que gestionaste lo que podía saber. Has protegido tu comodidad con el dinero de ella.') },
              { id: 'c', verdict: 'harmful',
                label: T('"…so honestly, if I were you I\'d get it booked this week and save yourself the €200."',
                         '«…así que, sinceramente, yo en tu lugar lo reservaría esta semana y me ahorraría los 200 €».'),
                why: T('The same fact with an instruction welded to it, which converts information into a countdown. She is now deciding about €200 rather than about her face, under a clock, having already said she wanted to think — and that is the sequence that produces the cancellation and the review.',
                       'El mismo hecho con una instrucción soldada, lo que convierte la información en una cuenta atrás. Ahora decide sobre 200 € y no sobre su cara, con un reloj en marcha y después de haber dicho que quería pensarlo, y esa es la secuencia que produce la cancelación y la reseña.') }
            ],
            principle: T('A deadline that exists is information. The same deadline aimed at her is pressure. The difference is not the fact — it is whether you attach an instruction to it.',
                         'Un plazo que existe es información. Ese mismo plazo apuntado hacia ella es presión. La diferencia no está en el hecho, sino en si le pegas una instrucción.'),
            changes: {
              axis: 'disclosure',
              detail: T('A material fact now exists that she does not have: the package price genuinely rises on the first of next month. Her hesitation is word for word the same, but saying nothing now costs her €200 — so the question stops being how to close and becomes what she is entitled to know before she leaves.',
                        'Ahora existe un dato material que ella no tiene: el precio del paquete sube de verdad el día uno del mes que viene. Su duda es palabra por palabra la misma, pero callarse ahora le cuesta 200 €, así que la pregunta deja de ser cómo cerrar y pasa a ser qué tiene derecho a saber antes de irse.')
            } } },
        { kind: 'check',
          prompt: T('Why does the pressure close remain common if its cost is high?',
                    '¿Por qué el cierre por presión sigue siendo común si su coste es alto?'),
          options: [
            { id: 'a', text: T('Because it converts more consultations on the day, and the cost lands in a different month and a different metric.', 'Porque convierte más consultas el mismo día, y el coste cae en otro mes y en otra métrica.') },
            { id: 'b', text: T('Because clients prefer certainty.', 'Porque las clientas prefieren la certeza.') },
            { id: 'c', text: T('Because it is more efficient in a short appointment.', 'Porque es más eficiente en una cita corta.') }
          ],
          answer: 'a',
          why: T('This is the honest answer, and it is why a manager view that only reports conversion will keep rewarding it. Cancellations, refunds and non-returning clients are recorded elsewhere, usually by someone else, usually later. The method\'s manager view exists to put the two back in the same sentence.',
                 'Esta es la respuesta honesta, y por eso una vista de dirección que solo informa de conversión seguirá premiándolo. Las cancelaciones, las devoluciones y las clientas que no vuelven se registran en otro sitio, normalmente por otra persona y normalmente más tarde. La vista de dirección del método existe para volver a poner ambas cosas en la misma frase.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm8l2', n: 2, minutes: 10,
      title: T('The partnership close', 'El cierre en colaboración'),
      objective: T('Deliver the partnership close, and hold the two-word answer when she says the investment is large.',
                   'Ejecutar el cierre en colaboración y sostener la respuesta de dos palabras cuando ella dice que la inversión es grande.'),
      provenance: {
        chapter: 13,
        principle: T('The partnership close states your position and hands her the decision — "based on everything we have talked about, I believe this is right for you; what feels right to you?"',
                     'El cierre en colaboración enuncia tu posición y le entrega la decisión: «por todo lo que hemos hablado, creo que esto es lo adecuado para ti; ¿qué sientes tú que encaja?».'),
        phase: 'decisionSupport',
        trustStage: 'alignment',
        standard: 4,
        duty: 2,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
          'When a client says the investment is large, agreeing plainly feels like agreeing that it is too large, so the practitioner adds something to soften the agreement: a justification, a payment option, a comparison with what things cost elsewhere. The addition is meant to help her over an obstacle. But she did not raise an obstacle; she stated a fact about her own life, and the only answer that does not argue with her is the fact returned. Anything longer tells her the size of the number is something you were braced for, and a practitioner who is braced for the number is a practitioner who is not sure about it.',
          'Cuando una clienta dice que la inversión es grande, darle la razón sin más parece darle la razón en que es demasiado grande, así que la profesional añade algo para suavizar ese acuerdo: una justificación, una forma de pago, una comparación con lo que cuestan las cosas fuera. El añadido pretende ayudarla a superar un obstáculo. Pero ella no ha planteado un obstáculo: ha enunciado un hecho sobre su propia vida, y la única respuesta que no discute con ella es ese hecho devuelto. Cualquier cosa más larga le dice que el tamaño de la cifra era algo para lo que venías preparada, y una profesional preparada para la cifra es una profesional que no la tiene clara.'),
        sheIsThinking: T(
          'I want her to admit it is a lot. If she starts telling me it is not really that much, I will know she is selling.',
          'Quiero que admita que es mucho. Como empiece a decirme que tampoco es tanto, sabré que me está vendiendo.'),
        ladder: {
          weak:    { line: T('"It is, but if you break it down over the year it works out at less than you spend on coffee."',
                     '«Lo es, pero si lo repartes en el año sale por menos de lo que te gastas en café».'),
                     effect: T('Contradicts her with arithmetic she did not ask for. The per-day frame works when she has told you the amount is the problem; used here it rebuts something she was not arguing.',
                               'La contradice con unas cuentas que no ha pedido. El reencuadre por días funciona cuando ella ya te ha dicho que el problema es el importe; usado aquí rebate algo que ella no estaba discutiendo.') },
          average: { line: T('"It is a significant amount — and there is a three-payment option, with no interest."',
                     '«Es una cantidad importante, y existe la opción de tres pagos, sin intereses».'),
                     effect: T('True, useful, and the payment option is something she may genuinely want. Offered in the same breath as the agreement, it turns "it is" into "but", and a concession arrives before she has asked for anything.',
                               'Cierto, útil, y la opción de pago es algo que ella puede querer de verdad. Ofrecida en la misma frase que el acuerdo, convierte el «lo es» en un «pero», y llega una concesión antes de que ella haya pedido nada.') },
          strong:  { line: T('"It is." — and then wait.',
                     '«Lo es». Y esperar.'),
                     effect: T('Two words that respect what it costs without minimising it. The next thing she says is almost always the real question — when will I see results, how long does it hold — and that question is the one you can answer.',
                               'Dos palabras que respetan lo que cuesta sin minimizarlo. Lo siguiente que ella diga será casi siempre la pregunta real —cuándo veré resultados, cuánto dura— y esa pregunta sí puedes responderla.') }
        }
      },
      treatments: [
        {
          name:   T("PDO threads — midface",
                     "Hilos tensores de PDO — tercio medio"),
          price:  T("€1,750",
                     "1.750 €"),
          why:    T("Threads produce the plainest version of the sentence — \"that is a lot of money\" — because it is one appointment and one figure, with nothing to divide it into.",
                     "Los hilos producen la versión más desnuda de la frase —«es mucho dinero»— porque son una cita y una cifra, sin nada entre lo que repartirla."),
          moment: T("You have made the recommendation and handed her the decision. She says, quietly, that it is a lot of money.",
                     "Has hecho la recomendación y le has pasado la decisión. Dice, en voz baja, que es mucho dinero."),
          weak:   {
            line: T("\"It is — although it is a single appointment rather than a course, so there is nothing to keep paying for afterwards.\"",
                     "«Lo es, aunque es una sola cita y no un bono, así que después no hay que seguir pagando nada.»"),
            cost: T("True, useful, and it argues. She stated a fact about her own life and got a counter-argument, so the next thing she says will defend the fact instead of being the question she was about to ask.",
                     "Es verdad, es útil y discute. Ella ha enunciado un hecho sobre su propia vida y ha recibido un contraargumento, así que lo siguiente que diga defenderá el hecho en lugar de ser la pregunta que iba a hacer.")
          },
          strong: {
            line: T("\"It is.\" — and then wait.",
                     "«Lo es». Y después esperas."),
            gain: T("Two words that respect what it costs without shrinking it. What she says next is almost always the real question, and at €1,750 the real question is rarely about money.",
                     "Dos palabras que respetan lo que cuesta sin encogerlo. Lo siguiente que diga es casi siempre la pregunta de verdad, y a 1.750 € la pregunta de verdad rara vez va de dinero.")
          }
        },
        {
          name:   T("Body contouring programme — twelve sessions",
                     "Programa de remodelación corporal — doce sesiones"),
          price:  T("€2,900 for twelve sessions across four months",
                     "2.900 € las doce sesiones en cuatro meses"),
          why:    T("At €2,900 the payment plan is genuinely something she may want, which is exactly why offering it in the same breath as the agreement is so tempting and so expensive.",
                     "A 2.900 € el fraccionamiento es algo que ella puede querer de verdad, y por eso mismo ofrecerlo en el mismo aliento que el acuerdo resulta tan tentador y tan caro."),
          moment: T("€2,900. She looks at the quotation and says that is a serious amount of money.",
                     "2.900 €. Mira el presupuesto y dice que es una cantidad seria de dinero."),
          weak:   {
            line: T("\"It is a serious amount. There is a four-payment option with no interest, though, if that makes it sit better.\"",
                     "«Es una cantidad seria. Aunque hay opción de cuatro pagos sin intereses, si así se lleva mejor.»"),
            cost: T("The payment option may be exactly what she wants. Offered in the same breath as the agreement, it turns \"it is\" into \"but\", and a concession has arrived before she asked for anything — so now she knows one is available.",
                     "El fraccionamiento puede ser justo lo que ella quiere. Ofrecido en el mismo aliento que el acuerdo, convierte el «lo es» en un «pero», y llega una concesión antes de que ella haya pedido nada, así que ya sabe que las hay.")
          },
          strong: {
            line: T("\"It is a serious amount of money.\" — said back to her, and then nothing.",
                     "«Es una cantidad seria de dinero», devuelto tal cual. Y después nada."),
            gain: T("Agrees without minimising and without conceding. At €2,900 what she says into the gap is almost always the question that decides it, and it is usually about whether you will tell her the truth halfway through.",
                     "Le da la razón sin minimizar y sin conceder. A 2.900 € lo que ella mete en ese hueco es casi siempre la pregunta que lo decide todo, y suele ir de si le vas a decir la verdad a mitad de camino.")
          }
        },
        {
          name:   T("Fractional laser resurfacing — course of six",
                     "Láser fraccionado de rejuvenecimiento — bono de seis sesiones"),
          price:  T("€1,980 for six sessions",
                     "1.980 € el bono de seis"),
          why:    T("Clients compare a four-figure course to the one other four-figure thing they buy for themselves, and the comparison is usually offered lightly. Answering it seriously is how the moment gets lost.",
                     "Las clientas comparan un bono de cuatro cifras con la única otra cosa de cuatro cifras que se compran para ellas mismas, y la comparación suele soltarse a la ligera. Responderla en serio es como se pierde el momento."),
          moment: T("\"€1,980. God. That is more than my holiday.\"",
                     "«1.980 €. Madre mía. Es más que mis vacaciones.»"),
          weak:   {
            line: T("\"It is, but it is six sessions — and a holiday is a week, whereas this is something you have with you all year.\"",
                     "«Lo es, pero son seis sesiones, y unas vacaciones son una semana, mientras que esto lo llevas contigo todo el año.»"),
            cost: T("A remark she made lightly, answered with a serious comparison. She now has to either agree that her holiday was poor value or drop the subject, and neither leaves room for what she was actually going to say.",
                     "Un comentario que ella ha soltado a la ligera, respondido con una comparación seria. Ahora tiene que darte la razón en que sus vacaciones salieron caras o cambiar de tema, y ninguna de las dos deja sitio para lo que iba a decir.")
          },
          strong: {
            line: T("\"More than your holiday, yes.\" — and let her finish the thought.",
                     "«Más que tus vacaciones, sí». Y la dejas terminar el pensamiento."),
            gain: T("Returns the comparison unargued, which is the only way she gets to the end of it. The end of it is usually a sentence about what she does and does not spend on herself, and that is the conversation worth having.",
                     "Le devuelve la comparación sin discutirla, que es la única forma de que llegue al final. El final suele ser una frase sobre lo que se gasta y lo que no se gasta en sí misma, y esa es la conversación que merece la pena.")
          }
        }
      ],
      conversation: {
        setting: T("End of a consultation, body contouring programme, twelve sessions across four months, €2,900. The quotation is on the desk between you.",
                   "Final de una consulta, programa de remodelación corporal, doce sesiones en cuatro meses, 2.900 €. El presupuesto está encima de la mesa, entre las dos."),
        before: [
          { who: 'client', line: T("\"That is a serious amount of money.\"",
                                    "«Es una cantidad seria de dinero.»") },
          { who: 'practitioner', line: T("\"It is a serious amount. Although if you split it into four you are at €725 a month with no interest, and most people find that a lot easier to look at.\"",
                                    "«Es una cantidad seria. Aunque si lo partes en cuatro te quedas en 725 € al mes sin intereses, y a casi todo el mundo le resulta mucho más llevadero de ver.»") },
          { who: 'client', line: T("\"Right.\"",
                                    "«Ya.»") },
          { who: 'practitioner', line: T("\"And twelve sessions sounds like more than it is — they are forty minutes each, and plenty of people do them on the way home from work.\"",
                                    "«Y doce sesiones suenan a más de lo que son: son cuarenta minutos cada una y mucha gente las hace de camino a casa desde el trabajo.»") },
          { who: 'client', line: T("\"Mm.\"",
                                    "«Mmm.»") },
          { who: 'practitioner', line: T("\"I know it is a big number. But it is four months of your life and then it is behind you.\"",
                                    "«Ya sé que es una cifra grande. Pero son cuatro meses de tu vida y luego lo tienes hecho.»") },
          { who: 'client', line: T("\"Let me look at the finances and I will let you know.\"",
                                    "«Déjame mirar las cuentas y te digo.»") }
        ],
        after: [
          { who: 'client', line: T("\"That is a serious amount of money.\"",
                                    "«Es una cantidad seria de dinero.»") },
          { who: 'practitioner', line: T("\"It is.\"",
                                    "«Lo es.»") },
          { who: 'client', line: T("(pause) \"…I have never spent anything like that on myself.\"",
                                    "(silencio) «…Nunca me he gastado nada parecido en mí.»") },
          { who: 'practitioner', line: T("\"No.\"",
                                    "«Ya.»") },
          { who: 'client', line: T("\"Is it worth it for somebody like me? I am not twenty-five.\"",
                                    "«¿Merece la pena para alguien como yo? No tengo veinticinco años.»") },
          { who: 'practitioner', line: T("\"That is the real question, and it is the one I can do something about. Here is how I would run it: we measure and photograph at the start and again at session six. If at session six I do not think the last six are worth your money, I say so and we stop there.\"",
                                    "«Esa es la pregunta de verdad, y es con la que sí puedo hacer algo. Así lo llevaría yo: medimos y fotografiamos al principio y otra vez en la sesión seis. Si en la seis creo que las últimas seis no merecen tu dinero, te lo digo y paramos ahí.»") },
          { who: 'client', line: T("\"You would stop halfway?\"",
                                    "«¿Pararías a la mitad?»") },
          { who: 'practitioner', line: T("\"At €2,900 I would rather stop halfway than take money for six sessions I do not believe in. Shall we start on the eighth?\"",
                                    "«A 2.900 € prefiero parar a la mitad antes que cobrarte seis sesiones en las que no creo. ¿Empezamos el día ocho?»") }
        ],
        whatChanged: T("The first version agreed and then took the agreement back three times: the instalments, the forty minutes, the four months of her life. Each addition was true and each one told her the same thing, which is that the size of the number was something the practitioner had come prepared for. A woman being reassured about a figure concludes that the figure needs reassuring about. The second version said two words and stopped, and the two seconds of nothing produced the sentence that was actually blocking the decision — whether this is for somebody like her. That is not a price objection and no payment plan reaches it. What answers it is a named moment at session six where the clinic may tell her to stop paying, and she buys that sentence, not the twelve sessions.",
                       "La primera versión dio la razón y después se la quitó tres veces: los plazos, los cuarenta minutos, los cuatro meses de su vida. Cada añadido era cierto y cada uno le dijo lo mismo: que el tamaño de la cifra era algo para lo que la profesional venía preparada. Una mujer a la que tranquilizan sobre una cifra concluye que esa cifra necesitaba que la tranquilizaran. La segunda versión dijo dos palabras y paró, y los dos segundos de nada produjeron la frase que de verdad bloqueaba la decisión: si esto es para alguien como ella. Eso no es una objeción de precio y ningún fraccionamiento llega hasta ahí. Lo que la responde es un momento con nombre en la sesión seis en el que la clínica puede decirle que deje de pagar, y lo que compra es esa frase, no las doce sesiones."),
        cost: T("€2,900, and something worse: a woman who has just told you she has never spent this on herself, and who leaves having been talked at about instalments instead of answered.",
                "2.900 € y algo peor: una mujer que acaba de decirte que nunca se ha gastado esto en sí misma y que se va habiendo recibido un discurso sobre plazos en lugar de una respuesta.")
      },
      blocks: [
        { kind: 'passage',
          title: T('State your position, then give her the decision', 'Enuncia tu posición y luego dale la decisión'),
          body: [
            T('The structure is three moves. Summarise the partnership — "we went deep today, I heard what you want and I understand what your skin needs". State your professional position — "the recommendation is real". Then place the decision where it belongs: "and now it\'s your choice."',
              'La estructura son tres movimientos. Resume la colaboración: «hoy hemos profundizado, he escuchado lo que quieres y entiendo lo que necesita tu piel». Enuncia tu posición profesional: «la recomendación es real». Y luego coloca la decisión donde corresponde: «y ahora es tu elección».'),
            T('What makes it work is that the position is stated before the decision is handed over. A practitioner who hands over the decision without stating a position has performed the passive close with better manners.',
              'Lo que lo hace funcionar es que la posición se enuncia antes de entregar la decisión. Un profesional que entrega la decisión sin enunciar una posición ha hecho el cierre pasivo con mejores modales.')
          ] },
        { kind: 'spot',
          prompt: T('One line here is doing something most practitioners cannot do. Which?',
                    'Una línea aquí hace algo que la mayoría de profesionales no sabe hacer. ¿Cuál?'),
          lines: [
            { who: 'you', text: T('"We went deep today. I heard what you want, and I understand what your skin needs. The recommendation is real. And now it\'s your choice."', '«Hoy hemos profundizado. He escuchado lo que quieres y entiendo lo que necesita tu piel. La recomendación es real. Y ahora es tu elección».') },
            { who: 'client', text: T('"It\'s a big investment."', '«Es una inversión grande».') },
            { who: 'you', text: T('"It is."', '«Lo es».') },
            { who: 'client', text: T('"...When would I see results?"', '«...¿Cuándo vería resultados?»') },
            { who: 'you', text: T('"First week to ten days you\'ll feel the difference. By the end, when you look in the mirror, you\'ll see you — refreshed."', '«En la primera semana o diez días notarás la diferencia. Al final, cuando te mires al espejo, te verás a ti, descansada».') }
          ],
          answerIndex: 2,
          why: T('Two words. No defence, no justification, no rush to add value. "It is" says: I respect what this costs you and I am not going to minimise it. Watch what it produces — her next line is a planning question, which is what a client asks when she has moved from whether to when. Almost every practitioner fills that gap instead, and filling it turns her statement into an objection that now has to be answered.',
                 'Dos palabras. Sin defensa, sin justificación, sin prisa por añadir valor. «Lo es» dice: respeto lo que esto te cuesta y no voy a minimizarlo. Fíjate en lo que produce: su siguiente frase es una pregunta de planificación, que es lo que pregunta una clienta que ha pasado del si al cuándo. Casi todos los profesionales llenan ese hueco, y llenarlo convierte su afirmación en una objeción que ahora hay que responder.'),
            principle: T('An acknowledgement is not an agreement to discount. "It is" costs nothing and concedes nothing.',
                         'Un reconocimiento no es un compromiso de descuento. «Lo es» no cuesta nada y no concede nada.') },
        { kind: 'choose',
          prompt: T('She has gone quiet after the number. Eight seconds. What do you do?',
                    'Se ha quedado callada tras la cifra. Ocho segundos. ¿Qué haces?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"And of course we can look at splitting it, or starting with something smaller."',
                       '«Y por supuesto podemos ver un fraccionamiento, o empezar con algo más pequeño».'),
              why: T('You negotiated against yourself in a silence that was not an objection. She was doing arithmetic, or deciding, or feeling something. Now she knows the first number was not the real one, and the smaller option has replaced your recommendation.',
                     'Has negociado contra ti mismo en un silencio que no era una objeción. Ella estaba haciendo cuentas, o decidiendo, o sintiendo algo. Ahora sabe que la primera cifra no era la real, y la opción menor ha sustituido a tu recomendación.') },
            { id: 'b', verdict: 'best',
              label: T('Nothing. Let the silence finish, and let her speak first.',
                       'Nada. Dejar que el silencio termine y que hable ella primero.'),
              why: T('The silence after a price is processing time, and it belongs to her. Whoever speaks first tells the other what the number means. Say nothing and she tells you — which is the information you need to respond to what she actually feels.',
                     'El silencio tras un precio es tiempo de procesamiento y le pertenece a ella. Quien habla primero le dice al otro qué significa la cifra. No digas nada y te lo dirá ella, que es la información que necesitas para responder a lo que siente de verdad.') },
            { id: 'c', verdict: 'weak',
              label: T('"Does that feel manageable?"', '«¿Te parece asumible?»'),
              why: T('A softer version of the same error. You have asked her to evaluate the price out loud before she has decided what she thinks, and the honest answer to "is this manageable" is almost always "not really" — even from clients who would have booked.',
                     'Una versión más suave del mismo error. Le has pedido que evalúe el precio en voz alta antes de decidir qué piensa, y la respuesta honesta a «¿es asumible?» casi siempre es «la verdad es que no», incluso en clientas que habrían reservado.') }
          ],
          principle: T('The silence after the number is the most valuable four seconds in Phase 7. It is also the one practitioners find hardest to survive.',
                       'El silencio tras la cifra son los cuatro segundos más valiosos de la Fase 7. Y son los que a los profesionales más les cuesta sobrevivir.'),
          retry: {
            note: T('The same close one step earlier, before any figure has been named.',
                    'El mismo cierre un paso antes, cuando todavía no se ha dicho ninguna cifra.'),
            prompt: T('Another client, and no figure has been quoted yet. She has listened to the entire recommendation, nodded throughout, and offers: "That all seems very sensible." Then she waits. What comes out of your mouth next?',
                      'Otra clienta, y todavía no has dicho ninguna cifra. Ha escuchado la recomendación entera, ha asentido de principio a fin y suelta: «Todo esto parece muy razonable». Y se queda esperando. ¿Qué sale de tu boca a continuación?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Lovely — I\'ll print this off and you can mull it over at your own pace."',
                         '«Estupendo: te lo imprimo y le vas dando vueltas con toda la calma».'),
                why: T('Thoughtful, and it is the passive close wearing better manners. She offered an accurate remark about what you had laid out and got a sheet of paper in exchange; nothing in the room has revealed what you believe ought to happen. From where she sits, a professional who gave her forty minutes surely holds an opinion, and an opinion withheld does not register as neutrality. It registers as uncertainty.',
                       'Considerado, y es el cierre pasivo con mejores modales. Ella ha hecho una observación exacta sobre lo que acabas de exponer y ha recibido a cambio un folio; nada en la sala le ha revelado qué crees tú que debería ocurrir. Desde donde está sentada, un profesional que le ha dedicado cuarenta minutos tendrá por fuerza una opinión, y una opinión que no aparece no se registra como neutralidad. Se registra como inseguridad.') },
              { id: 'b', verdict: 'best',
                label: T('"Then let me say where I stand. Everything we\'ve covered points the same way, and I believe this is right for you. What feels right to you?"',
                         '«Entonces te digo dónde me sitúo yo. Todo lo que hemos visto apunta en la misma dirección y creo que esto es lo adecuado para ti. ¿Qué sientes tú que encaja?»'),
                why: T('Position first, decision second, and the order is the entire instrument. She now knows what you believe, which is the one judgement she could not reach alone, and she has been asked for her own answer rather than for a yes. Either reply is usable: agreement books it, reluctance names the obstacle.',
                       'Primero la posición, después la decisión, y el orden es todo el instrumento. Ahora sabe qué crees tú, que es el único juicio al que no podía llegar sola, y le has pedido su propia respuesta en vez de un sí. Cualquiera de las dos réplicas sirve: si acepta, se agenda; si se resiste, nombra el obstáculo.') },
              { id: 'c', verdict: 'harmful',
                label: T('"It is — and I\'d begin fairly soon; there is very little left in April."',
                         '«Lo es, y yo empezaría pronto: en abril ya queda muy poco libre».'),
                why: T('A deadline manufactured from your schedule rather than from anything she has shown you. The pressure close is precise in its effects: she may well commit, and what she has bought is a decision taken against a countdown, which is the one most often unpicked the following week. Invented urgency is also the single claim she can verify afterwards, and appointment slots are easy to verify.',
                       'Un plazo fabricado con tu agenda y no con nada que ella te haya mostrado. El cierre a presión es preciso en sus efectos: es muy posible que se comprometa, y lo que ha comprado es una decisión tomada contra una cuenta atrás, que es la que con más frecuencia se deshace a la semana siguiente. Además, la urgencia inventada es la única afirmación que ella puede comprobar después, y los huecos de agenda se comprueban fácilmente.') }
            ],
            principle: T('"That all seems sensible" is not a decision. It is a client waiting to discover whether you hold one — and the three closes are separated by whether a position was stated, not by how gentle they feel.',
                         '«Todo esto parece razonable» no es una decisión. Es una clienta esperando a descubrir si tú tienes una, y los tres cierres se distinguen por si se enunció una posición, no por lo suaves que resulten.'),
            changes: {
              axis: 'clientResponse',
              detail: T('Her next remark ceases to be an appraisal of your proposal and turns into a decision about herself: "I think the first one, and then I want to see it before I commit to the rest." That is a genuine yes to something smaller, and it is worth more than the courteous yes to everything the printout would have produced.',
                        'Su siguiente observación deja de ser una valoración de tu propuesta y se convierte en una decisión sobre ella misma: «Creo que el primero, y luego quiero verlo antes de comprometerme con el resto». Eso es un sí auténtico a algo más pequeño, y vale más que el sí cortés a todo que habría producido el folio impreso.')
            }
          } },
        { kind: 'translate',
          prompt: T('Rewrite each close as a partnership close. Then compare with the model.',
                    'Reescribe cada cierre como un cierre en colaboración. Luego compara con el modelo.'),
          items: [
            { id: 'k1',
              client: T('"So — shall we get you booked in?"', '«Entonces, ¿te agendo?»'),
              model: T('"Based on everything we\'ve talked about, I think this is right for you. What feels right to you?"',
                       '«Por todo lo que hemos hablado, creo que esto es lo adecuado para ti. ¿Qué te parece a ti?»'),
              note: T('The original is not aggressive; it is simply about your process. The rewrite states a position and then asks for hers, in that order.',
                      'El original no es agresivo: simplemente trata de tu proceso. La reescritura enuncia una posición y luego pide la suya, en ese orden.') },
            { id: 'k2',
              client: T('"Take your time, no rush, just let me know."', '«Tómate tu tiempo, sin prisa, ya me dirás».'),
              model: T('"Take the time you need. Can I ask what you\'d be weighing up? If I\'ve left something unclear, I\'d rather fix it now than have you decide around it."',
                       '«Tómate el tiempo que necesites. ¿Puedo preguntarte qué estarías sopesando? Si he dejado algo poco claro, prefiero arreglarlo ahora a que decidas rodeándolo».'),
              note: T('Both give her time. Only the second stays in the room with her while she takes it. This is the Elena correction.',
                      'Ambas le dan tiempo. Solo la segunda se queda con ella en la sala mientras lo toma. Esta es la corrección de Elena.') },
            { id: 'k3',
              client: T('"If you go ahead today I can include the review for free."', '«Si te decides hoy, te incluyo la revisión gratis».'),
              model: T('"The review is included either way — it\'s part of the treatment, not an incentive. What feels right to you?"',
                       '«La revisión está incluida en cualquier caso: es parte del tratamiento, no un incentivo. ¿Qué te parece a ti?»'),
              note: T('Turning a clinical component into a same-day incentive tells her the component was optional. Remove the deadline, keep the component, ask the question.',
                      'Convertir un componente clínico en un incentivo del día le dice que ese componente era opcional. Quita el plazo, conserva el componente y haz la pregunta.') }
          ] },
        { kind: 'reflect',
          prompt: T('Write your current closing line, word for word. Read it back: does it state a position, hand over a decision, or do neither?',
                    'Escribe tu frase de cierre actual, palabra por palabra. Reléela: ¿enuncia una posición, entrega una decisión, o ninguna de las dos?'),
          placeholder: T('Most closing lines do neither — they describe the practitioner\'s next administrative step.',
                         'La mayoría de las frases de cierre no hacen ninguna: describen el siguiente paso administrativo del profesional.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm8l3', n: 3, minutes: 10,
      title: T('The block underneath the hesitation', 'El bloqueo bajo la duda'),
      objective: T('Find the real block when a client hesitates, including the one that is not about you at all.',
                   'Encontrar el bloqueo real cuando una clienta duda, incluido el que no tiene nada que ver contigo.'),
      provenance: {
        chapter: 13,
        principle: T('When she hesitates the block is rarely the price or the product — ask what is different this time, and let her be the one who names it.',
                     'Cuando ella duda, el bloqueo casi nunca es el precio ni el producto: pregúntale qué es distinto esta vez y deja que sea ella quien lo nombre.'),
        phase: 'decisionSupport',
        trustStage: 'understanding',
        standard: 2,
        duty: 2,
        toolkit: 6
      },
      depth: {
        whyItGoesWrong: T(
          'Hesitation at the end of a good consultation feels like a verdict on the recommendation, so the practitioner goes back to the recommendation and strengthens it. Troubleshooting your own work first is exactly right when the fault is in your own work, and it often is. But the client in Chapter 13 was not hesitating about the plan at all. She was afraid of herself: she had bought things like this before and never used them, and no quantity of evidence about the products can reach a block that is about her. A better explanation of the serum is an answer to a question she has not asked, and now she has to disagree with your evidence in order to tell you what is actually wrong.',
          'Que una clienta dude al final de una consulta que ha ido bien se siente como un veredicto sobre la recomendación, así que la profesional vuelve a la recomendación y la refuerza. Revisar primero el propio trabajo es exactamente lo correcto cuando el fallo está en el propio trabajo, y muchas veces lo está. Pero la clienta del Capítulo 13 no dudaba del plan en absoluto. Se tenía miedo a sí misma: ya había comprado cosas así antes y no las había usado, y ninguna cantidad de pruebas sobre los productos alcanza un bloqueo que va de ella. Una explicación mejor del sérum es la respuesta a una pregunta que no ha hecho, y ahora tiene que llevarle la contraria a tus pruebas para poder decirte qué falla de verdad.'),
        sheIsThinking: T(
          'I have a drawer full of things I bought with somebody standing over me being enthusiastic. I do not want to be that person again.',
          'Tengo un cajón lleno de cosas que compré con alguien al lado entusiasmándose. No quiero volver a ser esa persona.'),
        ladder: {
          weak:    { line: T('"I really do think this is right for you — the concentration in that serum alone is…"',
                     '«De verdad creo que esto es lo tuyo. Solo la concentración de ese sérum ya es…»'),
                     effect: T('Answers a question about the products that nobody asked. To explain herself now she has to argue against your evidence, and most clients will simply stop explaining.',
                               'Responde a una pregunta sobre los productos que nadie ha hecho. Para explicarse, ella tiene ahora que discutir con tus pruebas, y la mayoría de las clientas sencillamente dejan de explicarse.') },
          average: { line: T('"That is completely fine — would you rather start with just the one and see how you get on?"',
                     '«Sin problema. ¿Prefieres empezar solo con uno y ver qué tal?»'),
                     effect: T('Kind, and lowering the commitment is a real tool with a real place. Offered before you know what the block is, it shrinks the recommendation to solve a problem that may have nothing to do with size.',
                               'Amable, y bajar el compromiso es una herramienta real con un sitio real. Ofrecida antes de saber cuál es el bloqueo, encoge la recomendación para resolver un problema que puede no tener nada que ver con el tamaño.') },
          strong:  { line: T('"That makes sense. What is the hesitation about?" — and when she names it: "What is different this time?"',
                     '«Tiene sentido. ¿De qué va la duda?». Y cuando la nombre: «¿Qué es distinto esta vez?»'),
                     effect: T('The first question gets the block named; the second makes her the one who answers it. She says "you explained why each thing was there", and that sentence is worth more coming from her than from you.',
                               'La primera pregunta consigue que el bloqueo se nombre; la segunda hace que sea ella quien lo responda. Dice «me explicaste para qué era cada cosa», y esa frase vale más dicha por ella que dicha por ti.') }
        }
      },
      treatments: [
        {
          name:   T("Skin boosters — course of three",
                     "Skin boosters — pauta de tres sesiones"),
          price:  T("€680 for three sessions",
                     "680 € las tres sesiones"),
          why:    T("Boosters are the closest thing in the clinic to the drawer full of half-used products at home, and a woman with that drawer knows exactly what she is afraid of, even if she will not say it first.",
                     "Los boosters son lo más parecido que hay en la clínica al cajón lleno de productos a medias que tiene en casa, y una mujer con ese cajón sabe perfectamente a qué le tiene miedo, aunque no vaya a decirlo la primera."),
          moment: T("Everything is agreed, and then: \"I do not know. I am hesitating.\"",
                     "Está todo hablado y de repente: «No sé. Me está dando cosa»."),
          weak:   {
            line: T("\"I really do think this is right for you — the three sessions are spaced exactly so that each one builds on the last, which is why…\"",
                     "«Yo de verdad creo que esto es lo tuyo. Las tres sesiones van espaciadas justo para que cada una se apoye en la anterior, que es por lo que…»"),
            cost: T("Answers a question about the product that nobody asked. To explain herself now she has to argue against your evidence, and most clients will simply stop explaining.",
                     "Responde a una pregunta sobre el producto que nadie ha hecho. Para explicarse ahora tendría que discutir con tus argumentos, y casi todas las clientas simplemente dejan de explicarse.")
          },
          strong: {
            line: T("\"That makes sense. What is the hesitation about?\" — and when she names it: \"What is different this time?\"",
                     "«Tiene sentido. ¿Por qué te da cosa?» Y cuando lo nombre: «¿Qué es distinto esta vez?»"),
            gain: T("The first question gets the block named, the second makes her the one who answers it. She says \"because you told me why each one is there\", and that sentence is worth more coming from her than from you.",
                     "La primera pregunta consigue que nombre el bloqueo, la segunda hace que sea ella quien lo responda. Dice «porque me has explicado para qué es cada una», y esa frase vale más dicha por ella que por ti.")
          }
        },
        {
          name:   T("Laser hair removal — course of six",
                     "Depilación láser — bono de seis sesiones"),
          price:  T("€690 for six sessions",
                     "690 € el bono de seis"),
          why:    T("On a course the block is very often neither the money nor the treatment. It is that she has done this before and stopped, and she does not want to say out loud that she does not trust herself.",
                     "En un bono el bloqueo muchísimas veces no es ni el dinero ni el tratamiento. Es que ya lo hizo antes y lo dejó, y no quiere decir en voz alta que no se fía de sí misma."),
          moment: T("\"I have done this before. I did four and never went back for the last two.\"",
                     "«Esto ya lo hice. Me hice cuatro y no volví a por las dos últimas.»"),
          weak:   {
            line: T("\"That happens a lot, honestly. The good news is the course here does not expire for eighteen months, so there would be no pressure to fit them all in.\"",
                     "«Eso pasa mucho, de verdad. La buena noticia es que aquí el bono no caduca hasta dentro de dieciocho meses, así que no habría presión por meterlas todas.»"),
            cost: T("Solves the expiry, which was not the problem. She has just told you she is afraid of herself and you have answered with terms and conditions.",
                     "Resuelve la caducidad, que no era el problema. Acaba de decirte que le tiene miedo a sí misma y le has respondido con las condiciones del bono.")
          },
          strong: {
            line: T("\"So what happened after the fourth one?\"",
                     "«¿Y qué pasó después de la cuarta?»"),
            gain: T("Six words, and the answer is nearly always that she could not see anything yet and felt foolish for having spent the money. That is a block with a practical remedy, and the remedy goes into the plan.",
                     "Seis palabras, y la respuesta casi siempre es que todavía no veía nada y se sintió tonta por haberse gastado el dinero. Eso es un bloqueo con solución práctica, y la solución entra en el plan.")
          }
        },
        {
          name:   T("Hyaluronic acid filler — lips, 1 ml",
                     "Relleno de ácido hialurónico — labios, 1 ml"),
          price:  T("€360 for 1 ml",
                     "360 € el mililitro"),
          why:    T("Lips produce the hesitation that arrives last and fastest, because the block is almost never the treatment and almost always a specific person who will see her on Sunday.",
                     "Los labios producen la duda que llega la última y la más rápida, porque el bloqueo casi nunca es el tratamiento y casi siempre es una persona concreta que la va a ver el domingo."),
          moment: T("She has wanted this for two years, the plan is agreed, and at the very last moment she stops.",
                     "Lleva dos años queriéndolo, el plan está acordado y en el último momento se frena."),
          weak:   {
            line: T("\"We can do half a syringe if you would rather — €200, and you see how you feel about it before we do any more.\"",
                     "«Podemos hacer media jeringa si lo prefieres: 200 €, y ves qué tal te sientes antes de hacer más.»"),
            cost: T("Shrinks the plan to solve a problem nobody has identified. If the block is her daughter's opinion, half a millilitre does not touch it, and now the treatment is smaller as well as undecided.",
                     "Encoge el plan para resolver un problema que nadie ha identificado. Si el bloqueo es la opinión de su hija, medio mililitro no lo roza, y ahora el tratamiento es más pequeño y además sigue sin decidirse.")
          },
          strong: {
            line: T("\"Something just changed. What is it?\"",
                     "«Algo ha cambiado justo ahora. ¿Qué es?»"),
            gain: T("Names the moment rather than the plan. The answer is a person, and once the person is in the room the question becomes what she wants to be able to say to them, which is a question half a syringe cannot answer.",
                     "Nombra el momento en lugar del plan. La respuesta es una persona, y con esa persona dentro de la sala la pregunta pasa a ser qué quiere ella poder decirle, que es una pregunta que media jeringa no responde.")
          }
        }
      ],
      conversation: {
        setting: T("First consultation, laser hair removal, full legs and bikini, course of six, €690. She has just sat down.",
                   "Primera consulta, depilación láser, piernas enteras e ingles, bono de seis, 690 €. Se acaba de sentar."),
        before: [
          { who: 'client', line: T("\"I did this before. I got to the fourth session and just… stopped going.\"",
                                    "«Esto ya lo hice. Llegué a la cuarta sesión y sencillamente… dejé de ir.»") },
          { who: 'practitioner', line: T("\"That is really common, honestly — life gets in the way. The good news is that the course here does not expire for eighteen months, so there would be no pressure to fit them all in.\"",
                                    "«Eso es muy normal, de verdad, la vida se mete por medio. La buena noticia es que aquí el bono no caduca hasta dentro de dieciocho meses, así que no habría presión por meterlas todas.»") },
          { who: 'client', line: T("\"That is good.\"",
                                    "«Eso está bien.»") },
          { who: 'practitioner', line: T("\"And we can book all six now so they are in your diary, or you can ring each time — whichever suits you better.\"",
                                    "«Y podemos reservar las seis ahora para que las tengas en la agenda, o me llamas cada vez, lo que te venga mejor.»") },
          { who: 'client', line: T("\"I will ring each time, I think.\"",
                                    "«Creo que te llamo cada vez.»") },
          { who: 'practitioner', line: T("\"Perfect. So it is €690 for the six, legs and bikini, and you can start whenever you like.\"",
                                    "«Perfecto. Pues son 690 € las seis, piernas e ingles, y empiezas cuando quieras.»") },
          { who: 'client', line: T("\"Let me have a think about it.\"",
                                    "«Me lo voy a pensar.»") }
        ],
        after: [
          { who: 'client', line: T("\"I did this before. I got to the fourth session and just… stopped going.\"",
                                    "«Esto ya lo hice. Llegué a la cuarta sesión y sencillamente… dejé de ir.»") },
          { who: 'practitioner', line: T("\"What happened after the fourth one?\"",
                                    "«¿Qué pasó después de la cuarta?»") },
          { who: 'client', line: T("\"Nothing, really. I could not see any difference yet and I felt stupid for having spent the money.\"",
                                    "«Nada, la verdad. Todavía no veía diferencia y me sentí tonta por haberme gastado el dinero.»") },
          { who: 'practitioner', line: T("\"So you stopped because you thought you had wasted it.\"",
                                    "«O sea, lo dejaste porque pensaste que lo habías tirado.»") },
          { who: 'client', line: T("\"…I suppose so, yes.\"",
                                    "«…Pues sí, supongo.»") },
          { who: 'practitioner', line: T("\"Then the thing to fix is not your diary. Before the fourth session here I would put the photograph from the first one in front of you, because nobody can judge week to week on their own legs. €690 for the six, and that photograph at session four is part of it.\"",
                                    "«Pues lo que hay que arreglar no es tu agenda. Aquí, antes de la cuarta sesión, te pongo delante la foto de la primera, porque nadie puede juzgar semana a semana sus propias piernas. 690 € las seis, y esa foto en la cuarta va dentro.»") },
          { who: 'client', line: T("\"Nobody did that last time.\"",
                                    "«Eso la otra vez no me lo hizo nadie.»") },
          { who: 'practitioner', line: T("\"I know. Shall I put the first one in for the fourteenth?\"",
                                    "«Lo sé. ¿Te pongo la primera el día catorce?»") }
        ],
        whatChanged: T("The first version heard a logistics problem and solved it twice over: no expiry, book as you go, total flexibility. Every one of those answers made it easier for her to stop again, because what she had actually described was not a scheduling failure but a moment at session four when she decided she had wasted €690. The second version asked what happened after the fourth session, which is six words, and got the block in one sentence. The remedy is not a discount and not a smaller course. It is a photograph at session four, and it costs the clinic nothing — but it is the only thing in either conversation that addresses the thing she is actually afraid of.",
                       "La primera versión oyó un problema de logística y lo resolvió dos veces: sin caducidad, reservas sobre la marcha, flexibilidad total. Cada una de esas respuestas le puso más fácil volver a dejarlo, porque lo que ella había descrito no era un fallo de agenda sino un momento en la cuarta sesión en el que decidió que había tirado 690 €. La segunda versión preguntó qué pasó después de la cuarta, que son seis palabras, y consiguió el bloqueo en una frase. El remedio no es un descuento ni un bono más corto. Es una foto en la cuarta sesión, y a la clínica no le cuesta nada, pero es lo único en las dos conversaciones que atiende aquello a lo que ella de verdad tiene miedo."),
        cost: T("€690 now, and the six sessions she books somewhere else next spring — where she will very probably stop at four again, for the same reason, which nobody will have asked her about.",
                "690 € ahora y las seis sesiones que reserva en otro sitio la primavera que viene, donde con toda probabilidad volverá a parar en la cuarta, por el mismo motivo, que nadie le habrá preguntado.")
      },
      blocks: [
        { kind: 'passage',
          title: T('Sometimes she is not afraid of the treatment', 'A veces no teme al tratamiento'),
          body: [
            T('Practitioners are trained to expect three blocks: price, trust and authority. There is a fourth that is invisible from the outside, and it is common: she is afraid of herself. She has bought things like this before and not used them, started routines and abandoned them, paid for a course of treatments and stopped after two.',
              'A los profesionales se les enseña a esperar tres bloqueos: precio, confianza y autoridad. Hay un cuarto invisible desde fuera y es frecuente: se teme a sí misma. Ya ha comprado cosas así y no las ha usado, ha empezado rutinas y las ha abandonado, ha pagado una tanda de tratamientos y ha parado a las dos.'),
            T('You cannot answer that with evidence about the treatment, because the treatment is not the doubtful party. The only thing that answers it is a difference she can point to between this time and last time.',
              'Eso no se responde con evidencia sobre el tratamiento, porque el tratamiento no es la parte dudosa. Lo único que lo responde es una diferencia que ella pueda señalar entre esta vez y la anterior.')
          ] },
        { kind: 'reveal',
          prompt: T('She says this at the end of a consultation that went well. What is the block?',
                    'Dice esto al final de una consulta que fue bien. ¿Cuál es el bloqueo?'),
          client: T('"It all sounds good, but... I\'m hesitant. I\'ve bought things like this before and never used them."',
                    '«Todo suena bien, pero... dudo. Ya he comprado cosas así antes y nunca las he usado».'),
          guesses: [
            { id: 'a', text: T('Price — she is softening a budget objection.', 'Precio: está suavizando una objeción de presupuesto.') },
            { id: 'b', text: T('Trust — she doubts the products will work.', 'Confianza: duda de que los productos funcionen.') },
            { id: 'c', text: T('She doubts herself, not you or the treatment.', 'Duda de sí misma, no de ti ni del tratamiento.') }
          ],
          answer: 'c',
          truth: T('She has told you the failure she is predicting, and she is the subject of it. Nothing about the plan is in question; her ability to follow it is. Reassuring her that the products are excellent answers a question she did not ask and confirms that you were not listening.',
                   'Te ha contado el fracaso que predice, y ella es su protagonista. Nada del plan está en cuestión: lo está su capacidad de seguirlo. Tranquilizarla diciendo que los productos son excelentes responde a una pregunta que no hizo y confirma que no la escuchabas.'),
          why: T('The move is one question: "what\'s different this time?" In the book\'s exchange the client answers it herself — "you explained why each thing; nobody has done that before" — and that answer, in her words, is the only durable one. Then the practitioner adds a real exit: try it for two weeks, come back if it is not working.',
                 'El movimiento es una pregunta: «¿qué es distinto esta vez?». En el intercambio del libro la clienta se responde sola —«me has explicado el porqué de cada cosa; nadie lo había hecho»— y esa respuesta, con sus palabras, es la única duradera. Luego el profesional añade una salida real: pruébalo dos semanas y vuelve si no funciona.') },
        { kind: 'match',
          prompt: T('Match each hesitation to the block underneath it.',
                    'Empareja cada duda con el bloqueo que hay debajo.'),
          left: [
            { id: 'h1', text: T('"I\'d need to move some things around financially."', '«Tendría que mover algunas cosas económicamente».') },
            { id: 'h2', text: T('"My friend had this and saw nothing."', '«Una amiga se lo hizo y no notó nada».') },
            { id: 'h3', text: T('"I never finish anything I start."', '«Nunca termino nada de lo que empiezo».') },
            { id: 'h4', text: T('"I\'d want to run it past my husband first."', '«Querría comentárselo antes a mi marido».') }
          ],
          right: [
            { id: 'price', text: T('Price — genuinely about the amount', 'Precio: realmente sobre la cantidad') },
            { id: 'trust', text: T('Trust — will it work, on me', 'Confianza: si funcionará, en mí') },
            { id: 'self', text: T('Self-doubt — will I follow through', 'Duda sobre sí misma: si lo cumpliré') },
            { id: 'authority', text: T('Authority — the decision is shared', 'Autoridad: la decisión es compartida') }
          ],
          pairs: { h1: 'price', h2: 'trust', h3: 'self', h4: 'authority' },
          why: T('h1 is the only genuine price objection in the group, and it is the one practitioners least often hear as one, because it is phrased as logistics rather than complaint. Note that h3 and h4 both get answered with discounts in most clinics, and a discount answers neither.',
                 'La h1 es la única objeción de precio real del grupo, y es la que menos se oye como tal, porque está formulada como logística y no como queja. Fíjate en que la h3 y la h4 se responden con descuentos en la mayoría de clínicas, y un descuento no responde a ninguna de las dos.') },
        { kind: 'choose',
          prompt: T('"I never finish anything I start." What does the method do?',
                    '«Nunca termino nada de lo que empiezo». ¿Qué hace el método?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"That\'s why we\'ve built in the reviews — I\'ll keep you on track."',
                       '«Por eso hemos puesto las revisiones: yo te mantendré en el camino».'),
              why: T('Well meant, and it makes you responsible for her follow-through. If she stops, she will now avoid you rather than call you, because stopping has become a thing she does to you.',
                     'Bienintencionado, y te hace responsable de su constancia. Si lo deja, ahora te evitará en lugar de llamarte, porque dejarlo se ha convertido en algo que te hace a ti.') },
            { id: 'b', verdict: 'best',
              label: T('"That\'s a good reason to be careful. What would be different this time?"',
                       '«Es una buena razón para tener cuidado. ¿Qué sería distinto esta vez?»'),
              why: T('You validated the concern as reasonable rather than arguing with it, and then asked her for the evidence. Her answer becomes the commitment, in her own words, and it is the only version that holds in week three when nobody is watching.',
                     'Has validado la preocupación como razonable en vez de discutirla y luego le has pedido la evidencia. Su respuesta se convierte en el compromiso, con sus palabras, y es la única versión que aguanta en la tercera semana cuando nadie mira.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Then let\'s start smaller — just the one product, and see how you get on."',
                       '«Entonces empecemos con menos: solo un producto, y vemos qué tal».'),
              why: T('You agreed with her prediction about herself and shrank the plan to match it. She now has a smaller plan and a confirmed belief, and the smaller plan is the one she is most likely to abandon — which will prove her right.',
                     'Has estado de acuerdo con su predicción sobre sí misma y has encogido el plan para ajustarlo. Ahora tiene un plan menor y una creencia confirmada, y el plan menor es el que más probablemente abandonará, lo que le dará la razón.') }
          ],
          principle: T('When the block is the client herself, the answer must be produced by the client. Nothing you assert about her can be evidence about her.',
                       'Cuando el bloqueo es la propia clienta, la respuesta tiene que producirla ella. Nada que tú afirmes sobre ella puede ser evidencia sobre ella.'),
          retry: {
            note: T('That hesitation said what it was about. This one does not — it arrives dressed as a calendar.',
                    'Aquella duda decía de qué iba. Esta no: llega disfrazada de calendario.'),
            prompt: T('Marisol has been nodding at the plan for ten minutes. Then: "I think I\'d rather wait until after the summer."',
                      'Marisol lleva diez minutos asintiendo al plan. Y entonces: «Creo que prefiero esperar a después del verano».'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Actually summer is the worst time to start this, so now is genuinely the better window."',
                         '«En realidad el verano es la peor época para empezar esto, así que ahora es mejor momento de verdad».'),
                why: T('You answered a sentence about her year with a technical argument, and you may even win it. What you will not find out is what "after the summer" was carrying — and if it was carrying a wedding, a divorce or a bill, you have just told her that the calendar she lives in is a misunderstanding.',
                       'Has respondido a una frase sobre su año con un argumento técnico, y hasta puedes tener razón. Lo que no vas a averiguar es qué llevaba dentro «después del verano», y si llevaba una boda, un divorcio o una factura, acabas de decirle que el calendario en el que vive es un malentendido.') },
              { id: 'b', verdict: 'best',
                label: T('"That might well be right. What happens after the summer that doesn\'t happen now?"',
                         '«Puede que tengas razón. ¿Qué pasa después del verano que no pase ahora?»'),
                why: T('The same instrument as before, pointed at a different sentence: ask her to name the difference instead of supplying one. If the honest answer is "nothing, really", she has heard herself say it; if it is "we have three weddings and I don\'t want to be mid-course", that is clinical scheduling information you needed and were not going to be given.',
                       'El mismo instrumento que antes, apuntado a otra frase: pídele que nombre la diferencia en vez de ponerla tú. Si la respuesta honesta es «nada, en realidad», se ha oído decirlo; y si es «tenemos tres bodas y no quiero estar a media tanda», eso es información de planificación clínica que necesitabas y que no te iban a dar.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Of course — I\'ll pencil you in for September and give you a ring in August."',
                         '«Claro, te dejo apuntada para septiembre y te llamo en agosto».'),
                why: T('You booked the deferral before finding out what it was. If the summer was standing in for a doubt, it is now diarised and unexamined, and the August call will reach a woman who has had eight weeks to decide alone against whatever you never asked about.',
                       'Has agendado el aplazamiento antes de averiguar qué era. Si el verano estaba haciendo de tapadera de una duda, ahora está en la agenda y sin examinar, y la llamada de agosto llegará a una mujer que ha tenido ocho semanas para decidir sola frente a aquello que nunca preguntaste.') }
            ],
            principle: T('Every hesitation contains a difference the client can name and you cannot. Ask her for the difference — whether the block is her own follow-through or a month of the year.',
                         'Toda duda contiene una diferencia que la clienta puede nombrar y tú no. Pídele a ella la diferencia, tanto si el bloqueo es su propia constancia como si es un mes del año.'),
            changes: {
              axis: 'objection',
              detail: T('The hesitation no longer names itself. Instead of "I never finish anything I start" you get "I\'d rather wait until after the summer" — a month rather than a fear — so there is nothing to reflect back and the block has to be reached through a date.',
                        'La duda ya no se nombra a sí misma. En lugar de «nunca termino nada de lo que empiezo» recibes «prefiero esperar a después del verano»: un mes en vez de un miedo, así que no hay nada que devolver como espejo y hay que llegar al bloqueo a través de una fecha.')
            } } }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm8l4', n: 4, minutes: 12,
      title: T('Never ask "do you want"', 'Nunca preguntes «¿lo quieres?»'),
      objective: T('Use the short forms — when, which, shall I — where a full close is not appropriate.',
                   'Usar las formas breves —cuándo, cuál, ¿te lo hago?— donde un cierre completo no procede.'),
      provenance: {
        chapter: 13,
        principle: T('Never ask "do you want it?" — ask "when?", "which?" or "shall I?", because those words assume a decision that everything before them has already made.',
                     'No preguntes nunca «¿lo quieres?»: pregunta «¿cuándo?», «¿cuál?» o «¿te lo preparo?», porque esas palabras dan por hecha una decisión que ya ha tomado todo lo anterior.'),
        phase: 'decisionSupport',
        trustStage: 'alignment',
        standard: 5,
        duty: 2,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
          '"Do you want it?" feels like the non-pushy question. It appears to leave her completely free, which is why careful practitioners reach for it precisely at the moment they are most worried about pressure. What it actually does is reopen a decision that everything before it has already made, and it asks her to declare wanting out loud — which is the single hardest thing for a woman who has spent the last ten minutes managing guilt about spending on herself. The alternative is not a trick. It is a question about process rather than desire, and it leaves the door out exactly where it was.',
          '«¿Lo quieres?» parece la pregunta que no presiona. Da la impresión de dejarla completamente libre, y por eso los profesionales cuidadosos recurren a ella justo en el momento en que más les preocupa presionar. Lo que hace en realidad es reabrir una decisión que ya han tomado todos los pasos anteriores, y le pide que declare en voz alta que quiere algo, que es lo más difícil del mundo para una mujer que lleva diez minutos gestionando la culpa de gastar en sí misma. La alternativa no es un truco: es una pregunta sobre el procedimiento y no sobre el deseo, y deja la puerta de salida exactamente donde estaba.'),
        sheIsThinking: T(
          'Do I want it? I have said yes three times already. Now she is asking me to want it out loud in front of her, and suddenly I am not sure.',
          '¿Que si lo quiero? Ya he dicho que sí tres veces. Ahora me pide que lo quiera en voz alta delante de ella, y de repente ya no lo tengo claro.'),
        ladder: {
          weak:    { line: T('"So… do you want to take it?"',
                     '«Entonces… ¿te lo llevas?»'),
                     effect: T('Reopens everything. Wanting now has to be declared and paid for in the same movement, and a good proportion of clients at this exact point say they will have a think.',
                               'Reabre todo. Ahora hay que declarar el deseo y pagarlo en el mismo movimiento, y buena parte de las clientas dicen justo en ese punto que se lo van a pensar.') },
          average: { line: T('"Would you like me to ring that up for you?"',
                     '«¿Quieres que te lo cobre?»'),
                     effect: T('Polite, normal and a long way better than asking whether she wants it. It is still a yes-or-no about buying, which invites the reflexive no that shoppers give without thinking about it.',
                               'Educado, normal y muchísimo mejor que preguntarle si lo quiere. Sigue siendo un sí o un no sobre comprar, lo que invita al no reflejo que la gente suelta sin pensarlo.') },
          strong:  { line: T('"Shall I ring this up?"',
                     '«¿Te lo voy cobrando?»'),
                     effect: T('Assumes a decision that has in fact already been made, and leaves her with a question about process. She can still say "not today", and the ones who mean it do.',
                               'Da por hecha una decisión que de hecho ya está tomada y le deja una pregunta sobre el procedimiento. Todavía puede decir «hoy no», y las que lo piensan de verdad lo dicen.') }
        }
      },
      treatments: [
        {
          name:   T("Chemical peel — single session, added on",
                     "Peeling químico — sesión suelta, añadida"),
          price:  T("€110 a session",
                     "110 € la sesión"),
          why:    T("An add-on at the end of another appointment is the purest version of this, because she is tired, she is already treated, and any question containing the option of doing nothing will be answered with nothing.",
                     "Un añadido al final de otra cita es la versión más pura de esto, porque ella está cansada, ya está tratada, y cualquier pregunta que contenga la opción de no hacer nada se responderá con nada."),
          moment: T("She is still on the couch. The toxin is done, and you have suggested a peel before the wedding in June.",
                     "Sigue en la camilla. La toxina está puesta y le has propuesto un peeling antes de la boda de junio."),
          weak:   {
            line: T("\"So do you want to add the peel, or shall we leave it for now?\"",
                     "«¿Entonces quieres que añadamos el peeling o lo dejamos de momento?»"),
            cost: T("Two options, one of which is doing nothing, offered to a woman who has just been injected and would quite like the afternoon to be over. Most people take the door.",
                     "Dos opciones, una de las cuales es no hacer nada, ofrecidas a una mujer a la que acaban de pinchar y a la que le apetece que la tarde termine. Casi todo el mundo coge la puerta.")
          },
          strong: {
            line: T("\"Shall I put you in for the peel on the third, so it is before the wedding?\"",
                     "«¿Te apunto el peeling el día tres, para que sea antes de la boda?»"),
            gain: T("A question about the diary rather than about wanting, and €110 on a date that has a reason attached to it. She can still say not this time, and the ones who mean it do.",
                     "Una pregunta de agenda y no de querer, y 110 € en una fecha que tiene un motivo detrás. Puede seguir diciendo que hoy no, y las que lo dicen en serio lo dicen.")
          }
        },
        {
          name:   T("Microneedling — course of three",
                     "Microneedling — pauta de tres sesiones"),
          price:  T("€540 for three sessions",
                     "540 € las tres sesiones"),
          why:    T("On a short course the decision has usually been made twice already by the time this moment arrives, and asking whether she would like to go ahead reopens both of them.",
                     "En una pauta corta la decisión ya se ha tomado dos veces cuando llega este momento, y preguntarle si quiere seguir adelante vuelve a abrir las dos."),
          moment: T("She has said yes to the plan in every way except the words.",
                     "Ha dicho que sí al plan de todas las formas posibles menos con palabras."),
          weak:   {
            line: T("\"Would you like to go ahead with the three, then?\"",
                     "«¿Quieres entonces que hagamos las tres?»"),
            cost: T("A yes-or-no about buying, which invites the reflexive no that shoppers give without thinking. It also asks her to want it out loud, which is the hardest thing for a woman who has spent ten minutes managing guilt.",
                     "Un sí o un no sobre comprar, que invita al no reflejo que la gente da sin pensar. Además le pide que quiera en voz alta, que es lo más difícil para una mujer que lleva diez minutos gestionando culpa.")
          },
          strong: {
            line: T("\"Which suits you better for the first one — Tuesday mornings or Thursday evenings?\"",
                     "«¿Qué te viene mejor para la primera: los martes por la mañana o los jueves por la tarde?»"),
            gain: T("Assumes a decision that everything before it has already made and asks about process instead. On a three-session course the answer also tells you whether the diary is going to be the problem.",
                     "Da por hecha una decisión que ya ha tomado todo lo anterior y pregunta por el procedimiento. En una pauta de tres, además, la respuesta te dice si la agenda va a ser el problema.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('Not every decision needs a consultation', 'No toda decisión necesita una consulta'),
          body: [
            T('At a counter, at a desk, on the phone, the full partnership close is too large for the moment. The principle survives in miniature: never ask whether she wants it — ask when, or which, or shall I. Those forms assume the decision she has already visibly made and leave her free to correct you.',
              'En un mostrador, en una mesa, al teléfono, el cierre completo en colaboración es demasiado grande para el momento. El principio sobrevive en miniatura: nunca preguntes si lo quiere; pregunta cuándo, o cuál, o si se lo preparas. Esas formas dan por hecha la decisión que ella ya ha tomado visiblemente y la dejan libre para corregirte.'),
            T('The distinction matters because "do you want it?" asks her to justify a desire, and desire is exactly the thing she has been taught to be careful about admitting.',
              'La distinción importa porque «¿lo quieres?» le pide justificar un deseo, y el deseo es justo lo que le han enseñado a admitir con cautela.')
          ] },
        { kind: 'order',
          prompt: T('She is holding the product, nodding, and has asked two practical questions. Order what happens next.',
                    'Tiene el producto en la mano, asiente y ha hecho dos preguntas prácticas. Ordena lo que viene después.'),
          items: [
            { id: 'n_read', text: T('Read the signal: practical questions mean she has moved from whether to how.', 'Lee la señal: las preguntas prácticas significan que ha pasado del si al cómo.') },
            { id: 'n_ask', text: T('"Shall I get this ready for you?"', '«¿Te lo preparo?»') },
            { id: 'n_wait', text: T('Stop talking and let her answer.', 'Deja de hablar y deja que responda.') },
            { id: 'n_after', text: T('After yes: one sentence that makes the decision hers — "you made a good choice."', 'Tras el sí: una frase que haga suya la decisión: «has elegido bien».') }
          ],
          correct: ['n_read', 'n_ask', 'n_wait', 'n_after'],
          why: T('The step people drop is the third. Having asked a closing question, the practitioner keeps talking — adding a benefit, a reassurance, an alternative — and the question dissolves. A closing question needs silence after it or it was not a question.',
                 'El paso que se salta la gente es el tercero. Tras hacer una pregunta de cierre, el profesional sigue hablando —añade un beneficio, una tranquilización, una alternativa— y la pregunta se disuelve. Una pregunta de cierre necesita silencio detrás o no era una pregunta.') },
        { kind: 'compare',
          prompt: T('On the phone, she has asked her questions and received answers. Which line?',
                    'Al teléfono, ha hecho sus preguntas y ha recibido respuestas. ¿Qué frase?'),
          a: { label: T('Line A', 'Frase A'),
               text: T('"So, are you interested in booking something in?"', '«Entonces, ¿te interesa reservar algo?»') },
          b: { label: T('Line B', 'Frase B'),
               text: T('"It sounds like you\'re ready. I have Thursday at ten or Friday at two — which works better?"',
                       '«Suena a que estás lista. Tengo el jueves a las diez o el viernes a las dos: ¿cuál te viene mejor?»') },
          answer: 'b',
          why: T('A asks her to declare interest, which is a status she has to defend. B names what it heard, offers two real times and asks which — a question she can answer in one word, or correct in one sentence if you have misread her. Note that B is not more pushy; it is more specific, and specificity is what makes it easy to say no to.',
                 'A le pide declarar interés, que es un estatus que tiene que defender. B nombra lo que ha oído, ofrece dos horas reales y pregunta cuál: una pregunta que puede responder con una palabra, o corregir con una frase si la has malinterpretado. Fíjate en que B no es más insistente: es más concreta, y la concreción es lo que hace fácil decir que no.') },
        { kind: 'check',
          prompt: T('Which of these short closes is NOT consistent with Respect Autonomy?',
                    '¿Cuál de estos cierres breves NO es coherente con el Respeto a la Autonomía?'),
          options: [
            { id: 'a', text: T('"Shall I get this ready for you?"', '«¿Te lo preparo?»') },
            { id: 'b', text: T('"Thursday at ten or Friday at two — which works?"', '«Jueves a las diez o viernes a las dos, ¿cuál te viene?»') },
            { id: 'c', text: T('"I\'ll put you down for Thursday and you can always cancel."', '«Te apunto el jueves y siempre puedes cancelar».') }
          ],
          answer: 'c',
          why: T('The first two assume a decision and remain answerable with "actually, no". The third makes the decision on her behalf and hands her the work of undoing it. The escape hatch is what gives it away: an option that requires her to take an action to decline is not a choice she made.',
                 'Las dos primeras dan por hecha una decisión y siguen siendo respondibles con «pues no». La tercera decide por ella y le pasa el trabajo de deshacerlo. La salida de emergencia es lo que lo delata: una opción que exige que ella actúe para rechazarla no es una elección suya.') },

        { kind: 'choose',
          prompt: T('At the counter. She has had the serum in her hand for two minutes, has asked how long a bottle lasts and whether it goes with the retinol she already uses. Then she stops talking and turns the box over again. What do you say?',
                    'En el mostrador. Lleva dos minutos con el sérum en la mano, ha preguntado cuánto dura un frasco y si se puede usar con el retinol que ya tiene. Luego se calla y le da otra vuelta a la caja. ¿Qué dices?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Do you want to take it today, or would you rather have a think about it?"',
                       '«¿Te lo llevas hoy o prefieres pensártelo?»'),
              why: T('Kind, and it performs two jobs at once. It asks her to declare a desire aloud, which is precisely what she has been taught to be careful about, and then it hands her the postponement in the same breath — so the easier of the two replies is also the one you named last. Her practical questions had already shown you she was past whether.',
                     'Amable, y hace dos trabajos a la vez. Le pide declarar un deseo en voz alta, que es justo lo que le han enseñado a admitir con cautela, y en la misma frase le entrega el aplazamiento, con lo que la respuesta más cómoda es además la que has nombrado la última. Sus preguntas prácticas ya te habían mostrado que había pasado del si.') },
            { id: 'b', verdict: 'best',
              label: T('"Shall I get this ready for you?" — and then nothing at all until she answers.',
                       '«¿Te lo preparo?». Y después, nada en absoluto hasta que responda.'),
              why: T('A shall-I assumes the decision her own questions have already shown, and stays completely answerable with "actually, not today". The silence is the working part: a closing question with a benefit or a reassurance attached to the end of it has been withdrawn by the person who asked it.',
                     '«¿Te lo preparo?» da por hecha la decisión que ya muestran sus propias preguntas y sigue siendo respondible con «pues hoy no». El silencio es la parte que trabaja: una pregunta de cierre con un beneficio o una tranquilización pegados al final la ha retirado quien la hizo.') },
            { id: 'c', verdict: 'harmful',
              label: T('"I\'d take it now if I were you — we\'ve only got two left and they go quickly."',
                       '«Yo me lo llevaría ahora: solo quedan dos y vuelan».'),
              why: T('A motive for hurrying that has no bearing on her skin. If it is accurate she has been rushed; if she returns next week to a full shelf, everything you explained about the product beforehand becomes a sales line in retrospect. You have burned the credibility of your advice to gain a few days.',
                     'Un motivo para correr que no tiene nada que ver con su piel. Si es cierto, la has metido prisa; y si vuelve la semana que viene y ve el estante lleno, todo lo que le contaste del producto antes se convierte, retroactivamente, en argumentario. Has quemado la credibilidad de tu criterio para ganar unos días.') }
          ],
          principle: T('Never ask whether she wants it. Ask when, or which, or shall I — and then stop talking, because a closing question needs silence after it or it was not a question.',
                       'Nunca preguntes si lo quiere. Pregunta cuándo, cuál o si se lo preparas, y luego cállate, porque una pregunta de cierre necesita silencio detrás o no era una pregunta.'),
          retry: {
            note: T('The same forms, at the desk, with a woman who has already agreed.',
                    'Las mismas formas, en la mesa, con una mujer que ya ha dicho que sí.'),
            prompt: T('Another woman, at the desk, coat already on. The appointment has gone well and she announces: "Yes — let\'s do it." You have Tuesday at ten and Thursday at six. What do you say?',
                      'Otra mujer, en la mesa, ya con el abrigo puesto. La cita ha ido bien y anuncia: «Sí, vamos a hacerlo». Tienes el martes a las diez y el jueves a las seis. ¿Qué dices?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Wonderful. Check your calendar this evening and message me a couple of dates that suit you."',
                         '«Estupendo. Miras tu agenda esta noche y me escribes un par de fechas que te vengan bien».'),
                why: T('Flexible, unpressured, and it converts an agreement she has just reached into homework she must complete afterwards. Between now and that message the agreement has to hold up alone, with you absent, and the message is the first casualty of any difficult week. Nothing here is pushy, and it is the commonest way a yes evaporates.',
                       'Flexible, sin presión, y convierte un acuerdo que acaba de alcanzar en unos deberes que tiene que hacer luego. Desde ahora hasta ese mensaje, el acuerdo tiene que aguantar solo, sin ti delante, y el mensaje es la primera baja de cualquier semana complicada. Nada de esto es insistente, y es la forma más habitual en que un sí se evapora.') },
              { id: 'b', verdict: 'best',
                label: T('"I\'ve got Tuesday at ten or Thursday at six — which is easier?"',
                         '«Tengo el martes a las diez o el jueves a las seis: ¿cuál te viene mejor?»'),
                why: T('Two genuine slots, one word to answer, and a form she can correct instead of decline. The which-question does not ask her to decide twice; it carries what she has already settled into the calendar, and if you have misjudged anything it gives her the cheapest available way to say so.',
                       'Dos huecos reales, una palabra para responder y una forma que puede corregir en vez de rechazar. La pregunta de «cuál» no le pide decidir dos veces: lleva a la agenda lo que ya ha zanjado y, si has calculado mal algo, le da la manera más barata que existe de decirlo.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Perfect. And while you\'re here — shall I add the peel we talked about, so it\'s all done in one go?"',
                         '«Perfecto. Y ya que estás, ¿te añado el peeling del que hemos hablado y lo dejamos todo hecho de una vez?»'),
                why: T('You reopened your advice in the very instant she closed it. The addition may be clinically justified, and it lands at the one moment she is unable to weigh it — teaching her that a yes here gets treated as an opening bid. The next agreement will come slower, and she will want it in writing.',
                       'Has reabierto tu criterio en el instante exacto en que ella lo cerraba. El añadido puede estar clínicamente justificado y aterriza en el único momento en que ella no puede sopesarlo, enseñándole que aquí un sí se trata como una puja de salida. El próximo acuerdo llegará más despacio, y lo querrá por escrito.') }
            ],
            principle: T('The short forms are not gentler ways of asking for the sale. They are the ones a woman can correct in a single word, which is exactly why they respect an agreement she has already reached.',
                         'Las formas breves no son maneras más suaves de pedir la venta. Son las que una mujer puede corregir con una sola palabra, y justo por eso respetan un acuerdo que ella ya ha alcanzado.'),
            changes: {
              axis: 'disclosure',
              detail: T('She corrects you rather than assenting: Tuesdays are her mother\'s hospital transport, and nothing can begin until after the second week of March. That constraint would never have surfaced in an emailed date, and it explains why the last two courses she paid for were abandoned halfway.',
                        'Te corrige en lugar de asentir: los martes lleva a su madre al hospital y no se puede empezar nada hasta pasada la segunda semana de marzo. Esa limitación no habría aflorado nunca en una fecha por correo, y explica por qué los dos últimos ciclos que pagó se quedaron a medias.')
            }
          } },

        { kind: 'translate',
          prompt: T('Three consultations, each already at the point of decision. Write the closing line you would actually say — a when, a which, or a shall I. Never a "do you want".',
                    'Tres consultas, las tres ya en el punto de decisión. Escribe la frase de cierre que dirías de verdad: un cuándo, un cuál o un «te reservo». Nunca un «¿quieres?».'),
          items: [
            { id: 'a',
              client: T('"That sounds good, yes. I think that\'s what I want to do."',
                        '«Suena bien, sí. Creo que es lo que quiero hacer».'),
              model: T('"Then let\'s get you booked. Are mornings or afternoons easier for you?"',
                       '«Pues te lo dejamos reservado. ¿Te va mejor por la mañana o por la tarde?»'),
              note: T('She has already decided. "Do you want to book something?" reopens a decision she closed, and a reopened decision is answered more cautiously than it was made. The which-question moves to logistics without asking her to decide twice.',
                      'Ella ya ha decidido. «¿Quieres reservar algo?» reabre una decisión que ella cerró, y una decisión reabierta se responde con más cautela de la que se tomó. La pregunta de «cuál» pasa a la logística sin pedirle que decida dos veces.') },
            { id: 'b',
              client: T('"Okay… and how soon could I actually start?"',
                        '«Vale… ¿y cuándo podría empezar en realidad?»'),
              model: T('"We could start next week. Shall I hold Tuesday at ten while you check the date?"',
                       '«Podríamos empezar la semana que viene. ¿Te reservo el martes a las diez mientras miras la fecha?»'),
              note: T('"How soon" is a buying question, not an information question. The shall-I form gives her a real thing to say yes to and an explicit way to say no — the hold is reversible, so it respects autonomy while still moving.',
                      '«¿Cuándo podría empezar?» es una pregunta de compra, no de información. La forma «te reservo» le da algo real a lo que decir que sí y una vía explícita para decir que no: la reserva es reversible, así que respeta la autonomía y aun así avanza.') },
            { id: 'c',
              client: T('"I\'d want to do the peel first and see how it goes before anything else."',
                        '«Querría hacer primero el peeling y ver cómo va antes de nada más».'),
              model: T('"That\'s the right order — I\'d have suggested the same. Which week suits you for the first one?"',
                       '«Ese es el orden correcto, yo habría propuesto lo mismo. ¿Qué semana te viene bien para el primero?»'),
              note: T('She has just made a smaller decision than the one you recommended, and the temptation is to re-sell the rest. Confirming her order first is Duty 2 in one sentence; the which-question then closes the part she has already agreed to instead of reopening the part she has not.',
                      'Acaba de tomar una decisión más pequeña que la que recomendaste, y la tentación es volver a vender el resto. Confirmar primero su orden es el Deber 2 en una frase; la pregunta de «cuál» cierra después la parte que ya ha aceptado en lugar de reabrir la que no.') }
          ] }

      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm8l5', n: 5, minutes: 10,
      title: T('The thirty seconds after yes', 'Los treinta segundos después del sí'),
      objective: T('Use the moment after commitment to make the decision survive the week.',
                   'Usar el momento posterior al compromiso para que la decisión sobreviva a la semana.'),
      provenance: {
        chapter: 13,
        principle: T('Closing does not end with yes: what you do in the thirty seconds after it decides whether she comes back or cancels in two days.',
                     'El cierre no termina con el sí: lo que haces en los treinta segundos siguientes decide si vuelve o si anula dos días después.'),
        phase: 'continuation',
        trustStage: 'reliability',
        standard: 6,
        duty: 4,
        toolkit: 8
      },
      depth: {
        whyItGoesWrong: T(
          'The yes feels like the end of the work, and relief makes people efficient: card, dates, bag, door. In the practitioner\'s mind that efficiency is service — she is not wasting a client\'s afternoon. What she cannot see is that the doubt window opens the moment the client is alone with the amount, somewhere between the car park and Thursday, and the only material available to fight it with is whatever was handed over in the last thirty seconds. A receipt is not material. A timeline, a named next contact and a sentence about the decision being a decision are.',
          'El sí parece el final del trabajo, y el alivio vuelve eficiente a cualquiera: tarjeta, fechas, bolsa, puerta. En la cabeza de la profesional esa eficiencia es servicio: no le está haciendo perder la tarde a nadie. Lo que no ve es que la ventana de la duda se abre en cuanto la clienta se queda a solas con el importe, en algún punto entre el aparcamiento y el jueves, y que el único material disponible para pelear contra ella es lo que se le entregó en los últimos treinta segundos. Un recibo no es material. Un calendario, un próximo contacto con nombre y una frase que reconozca que la decisión ha sido una decisión, sí.'),
        sheIsThinking: T(
          'I have just spent more on myself than I have ever spent, and she is already looking at the diary. I hope I have not just been talked into something.',
          'Acabo de gastarme en mí más de lo que me he gastado nunca, y ella ya está mirando la agenda. Espero no haberme dejado convencer sin más.'),
        ladder: {
          weak:    { line: T('"Brilliant — you will not regret it. Card or cash?"',
                     '«¡Genial! No te vas a arrepentir. ¿Tarjeta o efectivo?»'),
                     effect: T('Names regret and makes it yours to guarantee, then turns straight into a transaction. She leaves with a receipt and nothing to hold on to when the doubt arrives.',
                               'Nombra el arrepentimiento y lo convierte en algo que tú garantizas, y acto seguido se vuelve una transacción. Ella se va con un recibo y sin nada a lo que agarrarse cuando llegue la duda.') },
          average: { line: T('"Lovely. I will book you in for the fourth, and I will put the aftercare in the bag for you."',
                     '«Estupendo. Te dejo cita para el día cuatro y te meto los cuidados posteriores en la bolsa».'),
                     effect: T('Competent, organised and what most good practitioners do. It says what happens next and says nothing about the decision she has just made, so the decision goes home unattended.',
                               'Competente, ordenado y lo que hace la mayoría de los buenos profesionales. Dice qué pasa a continuación y no dice nada de la decisión que ella acaba de tomar, así que la decisión se va a casa sin que nadie la atienda.') },
          strong:  { line: T('"That took something. Here is what happens next: first session on the fourth, and I ring you three days after it to hear how the skin has settled." — and put the dates in her hand.',
                     '«Eso ha costado algo. Esto es lo que viene ahora: primera sesión el día cuatro, y te llamo tres días después para que me cuentes cómo se ha asentado la piel». Y ponerle las fechas en la mano.'),
                     effect: T('Names the act as hers, replaces vagueness with a timeline, and gives her something physical that says this is real. Clarity is what the doubt has to get past on Thursday.',
                               'Nombra el acto como suyo, sustituye la vaguedad por un calendario y le da algo físico que dice que esto es real. La claridad es lo que la duda tendrá que sortear el jueves.') }
        }
      },
      treatments: [
        {
          name:   T("Body contouring programme — twelve sessions",
                     "Programa de remodelación corporal — doce sesiones"),
          price:  T("€2,900 for twelve sessions",
                     "2.900 € las doce sesiones"),
          why:    T("This is the largest sum most clients will ever spend on themselves in one decision, which means the doubt window between the car park and Thursday is at its widest here.",
                     "Esta es la mayor cantidad que casi ninguna clienta se gastará nunca en sí misma en una sola decisión, lo que significa que aquí la ventana de la duda entre el aparcamiento y el jueves es la más ancha de todas."),
          moment: T("She has said yes to €2,900. The card machine is already in your hand.",
                     "Ha dicho que sí a 2.900 €. Ya tienes el datáfono en la mano."),
          weak:   {
            line: T("\"Brilliant. You will not regret it — shall we do the card now and I will send you the dates?\"",
                     "«¡Estupendo! No te vas a arrepentir. ¿Pasamos la tarjeta y te mando las fechas?»"),
            cost: T("Names regret and makes it yours to underwrite, then turns straight into a transaction. She leaves with a receipt and nothing at all to hold on to when the doubt arrives on Thursday.",
                     "Nombra el arrepentimiento y lo convierte en algo que tú avalas, y acto seguido se pasa a la transacción. Se va con un recibo y con nada a lo que agarrarse cuando llegue la duda el jueves.")
          },
          strong: {
            line: T("\"That took something. Here is what happens: first session Tuesday the eighth, we measure and photograph before we start, and you see me every week until December. I will write the twelve dates down for you now.\"",
                     "«Esto tiene su cosa. Lo que va a pasar: primera sesión el martes ocho, medimos y fotografiamos antes de empezar y me ves cada semana hasta diciembre. Te apunto ahora las doce fechas.»"),
            gain: T("Names the act as hers, replaces vagueness with a timeline and puts something physical in her hand. Twelve written dates are what the doubt has to get past, and a receipt is not.",
                     "Nombra el acto como suyo, sustituye la vaguedad por un calendario y le pone algo físico en la mano. Doce fechas escritas son lo que la duda tiene que sortear, y un recibo no lo es.")
          }
        },
        {
          name:   T("Hyaluronic acid filler — midface, 2 ml",
                     "Relleno de ácido hialurónico — tercio medio, 2 ml"),
          price:  T("€720 for 2 ml",
                     "720 € los 2 ml"),
          why:    T("With filler the thirty seconds happen after the treatment rather than after the decision, and she is walking out with a face she has not yet decided how she feels about.",
                     "Con relleno los treinta segundos ocurren después del tratamiento y no después de la decisión, y ella se va con una cara sobre la que todavía no ha decidido cómo se siente."),
          moment: T("Treated, paid, coat on, and she is at the door with a mirror still going in her head.",
                     "Tratada, pagada, con el abrigo puesto y en la puerta, con un espejo todavía funcionándole en la cabeza."),
          weak:   {
            line: T("\"Lovely. Any swelling is completely normal, and the aftercare sheet is in the bag. See you soon.\"",
                     "«Genial. La hinchazón es completamente normal y las indicaciones van en la bolsa. Nos vemos pronto.»"),
            cost: T("Correct aftercare and an open-ended goodbye. Tonight she will look in a bathroom mirror with nobody to check it against, and the person she tells about it will be her sister rather than you.",
                     "Indicaciones correctas y una despedida sin fecha. Esta noche se mirará en el espejo del baño sin nadie con quien contrastarlo, y la persona a la que se lo cuente será su hermana y no tú.")
          },
          strong: {
            line: T("\"Two things before you go: it will look different tonight from how it looks in ten days, and I am going to message you on Thursday to hear how it is settling. Your review is the twenty-ninth, here it is written down.\"",
                     "«Dos cosas antes de irte: esta noche se verá distinto de como se vea dentro de diez días, y el jueves te escribo para ver cómo va asentando. Tu revisión es el veintinueve, aquí te la apunto.»"),
            gain: T("Gives her a named person to tell and a date to tell them on, before she has anything to say. The woman who has a Thursday message coming does not ring her sister on Wednesday.",
                     "Le da una persona concreta a la que contárselo y una fecha para hacerlo, antes de que tenga nada que contar. La mujer que sabe que el jueves le llega un mensaje no llama a su hermana el miércoles.")
          }
        },
        {
          name:   T("Pigmentation programme — IPL, course of four",
                     "Programa de pigmentación — luz pulsada, bono de cuatro sesiones"),
          price:  T("€760 for four sessions",
                     "760 € el bono de cuatro"),
          why:    T("On a four-session programme the decision has to survive not one week but three months, and the moment it is most likely to die is the week after the first session.",
                     "En un programa de cuatro sesiones la decisión tiene que sobrevivir no a una semana sino a tres meses, y el momento en que más probablemente se muere es la semana siguiente a la primera sesión."),
          moment: T("She has just committed to four sessions across the spring. The next sixty seconds decide whether session two happens.",
                     "Acaba de comprometerse a cuatro sesiones a lo largo de la primavera. Los sesenta segundos siguientes deciden si hay segunda sesión."),
          weak:   {
            line: T("\"Perfect — I will put all four in the diary now and send you the dates by email this afternoon.\"",
                     "«Perfecto, te dejo las cuatro puestas en la agenda y esta tarde te mando las fechas por correo.»"),
            cost: T("Efficient, correct and entirely administrative. She leaves with four appointments and nothing whatever about the decision she just made, which is the thing that has to survive her husband asking what she spent.",
                     "Eficiente, correcto y completamente administrativo. Se va con cuatro citas y con nada en absoluto sobre la decisión que acaba de tomar, que es lo que tiene que sobrevivir a que su marido le pregunte cuánto se ha gastado.")
          },
          strong: {
            line: T("\"Four dates, in your hand. And one thing to expect: the week after the first session is the week people decide it is not working. I will ring you in that week.\"",
                     "«Cuatro fechas, en tu mano. Y una cosa que va a pasar: la semana siguiente a la primera sesión es la semana en la que la gente decide que esto no funciona. Esa semana te llamo yo.»"),
            gain: T("Puts the likely moment of doubt into the plan before it happens, so when it arrives she recognises it instead of acting on it. The call is already agreed, so it is not a rescue — it is a fixture.",
                     "Mete en el plan el momento probable de la duda antes de que llegue, así que cuando llega ella lo reconoce en lugar de actuar en consecuencia. La llamada ya está acordada, así que no es un rescate: es una cita.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('The sale does not end at yes', 'La venta no termina en el sí'),
          body: [
            T('Most practitioners relax at yes, move to the diary and start processing. What happens in the next thirty seconds decides whether she is still coming in two days, and whether she tells anyone about it.',
              'La mayoría de los profesionales se relaja en el sí, pasa a la agenda y empieza a tramitar. Lo que ocurre en los siguientes treinta segundos decide si sigue viniendo dentro de dos días y si se lo cuenta a alguien.'),
            T('The book gives four moves: strengthen the decision ("that was brave"), tell her exactly what happens next, make her feel it was action rather than expenditure, and give her something tangible to hold — a card, the written summary, the booking confirmation.',
              'El libro da cuatro movimientos: reforzar la decisión («eso ha sido valiente»), decirle exactamente qué pasa a continuación, hacer que lo sienta como una acción y no como un gasto, y darle algo tangible que llevarse: una tarjeta, el resumen escrito, la confirmación de la cita.'),
            T('The tangible object is not sentimental. Buyer\'s doubt arrives in the evening, and a piece of paper that says what was agreed is the only thing present in the room when it does.',
              'El objeto tangible no es sentimental. La duda posterior a la compra llega por la noche, y un papel que dice lo acordado es lo único presente en la habitación cuando eso ocurre.')
          ] },
        { kind: 'sort',
          prompt: T('Sort what belongs in the thirty seconds after yes.',
                    'Clasifica qué corresponde a los treinta segundos posteriores al sí.'),
          client: T('She has just said yes to a staged plan with a review.',
                    'Acaba de decir que sí a un plan por etapas con revisión.'),
          buckets: [
            { id: 'in', label: T('Belongs here', 'Corresponde aquí') },
            { id: 'out', label: T('Does not', 'No corresponde') }
          ],
          items: [
            { id: 'y1', text: T('"That took some deciding. I\'m glad you did."', '«Esto tenía su decisión. Me alegro de que la hayas tomado».'), bucket: 'in' },
            { id: 'y2', text: T('"Here\'s exactly what happens: session one on the 14th, then the review at two weeks."', '«Esto es exactamente lo que pasa: primera sesión el 14 y luego la revisión a las dos semanas».'), bucket: 'in' },
            { id: 'y3', text: T('"And while we\'re here — most clients add the skin series at this point."', '«Y ya que estamos, la mayoría de las clientas añade aquí la serie de piel».'), bucket: 'out' },
            { id: 'y4', text: T('The written summary and the card, handed over before she stands up.', 'El resumen escrito y la tarjeta, entregados antes de que se levante.'), bucket: 'in' },
            { id: 'y5', text: T('"You won\'t regret it — you\'re going to love the results."', '«No te vas a arrepentir: te van a encantar los resultados».'), bucket: 'out' },
            { id: 'y6', text: T('"If anything comes up before the 14th, message me directly."', '«Si surge algo antes del 14, escríbeme directamente».'), bucket: 'in' }
          ],
          why: T('y3 is the expensive one. An addition offered inside the thirty seconds after a yes converts the entire consultation retrospectively into a sales process, and clients feel it immediately — this is the commonest cause of a cancellation from a client who was genuinely committed. y5 is milder and still wrong: a promise about how she will feel is an overclaim, delivered at the exact moment she is most inclined to believe it.',
                 'La y3 es la cara. Un añadido ofrecido dentro de los treinta segundos posteriores a un sí convierte retrospectivamente toda la consulta en un proceso de venta, y las clientas lo notan de inmediato: es la causa más común de cancelación en una clienta genuinamente comprometida. La y5 es más suave y también incorrecta: una promesa sobre cómo se va a sentir es una sobrepromesa, dicha justo en el momento en que más dispuesta está a creerla.') },
        { kind: 'choose',
          prompt: T('She has just said yes to €2,400 across four sessions. The diary is open on your screen and she is reaching for her bag. What is the first thing out of your mouth?',
                    'Acaba de decir que sí a 2.400 € en cuatro sesiones. Tienes la agenda abierta en la pantalla y ella está cogiendo el bolso. ¿Qué es lo primero que dices?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Lovely — if you give me a card I\'ll take the deposit and get the first one in the diary."',
                       '«Perfecto. Si me das una tarjeta, te cobro la señal y dejamos la primera cita puesta».'),
              why: T('Nothing dishonest, and nothing that makes the decision hers either. The first thing she hears after the largest decision of her month is a payment request, so what the moment teaches her is that the yes was the end of your process — and when the doubt arrives that evening there is nothing in her hand to argue with it.',
                     'Nada deshonesto, y tampoco nada que haga suya la decisión. Lo primero que oye tras la mayor decisión de su mes es que le pidan pagar, así que lo que le enseña el momento es que el sí era el final de tu proceso, y cuando le llegue la duda esa noche no tendrá nada en la mano con lo que rebatirla.') },
            { id: 'b', verdict: 'best',
              label: T('"That took some deciding, and I think you\'ve chosen well. Here\'s exactly what happens: the 14th, then the review two weeks after — I\'ll write it down before you go."',
                       '«Esto tenía su decisión, y creo que has elegido bien. Esto es exactamente lo que pasa: el día 14 y la revisión dos semanas después. Te lo apunto antes de que te vayas».'),
              why: T('The four moves in one breath: the decision is acknowledged as an act rather than an expenditure, the next steps remove the uncertainty that doubt feeds on, and something written leaves the room with her. The paper is not sentimental — it is the only version of the agreement present at eleven o\'clock at night.',
                     'Los cuatro movimientos en una sola frase: se reconoce la decisión como un acto y no como un gasto, los siguientes pasos retiran la incertidumbre de la que se alimenta la duda, y algo escrito sale de la sala con ella. El papel no es sentimental: es la única versión del acuerdo presente a las once de la noche.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Great. Now — I should warn you, the first fortnight can look worse before it looks better, and some people bruise, so don\'t panic."',
                       '«Genial. Ahora, te aviso: las dos primeras semanas puede verse peor antes de mejorar, y hay gente que sale con moratones, así que no te asustes».'),
              why: T('That information is true and belonged before the decision, not thirty seconds after it. Arriving now it reads as something held back until she had committed, which is the fastest way to turn a confident yes into a cancellation — and it is a consent failure as well as a trust one.',
                     'Esa información es cierta y su sitio estaba antes de la decisión, no treinta segundos después. Llegando ahora se lee como algo que te guardaste hasta que ella se comprometió, que es la vía más rápida para convertir un sí convencido en una cancelación, y es un fallo de consentimiento además de un fallo de confianza.') }
          ],
          principle: T('The thirty seconds after yes are neither admin nor a second sale. Their entire purpose is to make the decision survive the evening.',
                       'Los treinta segundos posteriores al sí no son gestión ni una segunda venta. Su única finalidad es que la decisión sobreviva a esa noche.'),
          retry: {
            note: T('That was the moment you control. This is the one where the doubt arrives before she is even out of the room.',
                    'Aquel era el momento que tú controlas. Este es aquel en el que la duda llega antes de que ella haya salido de la sala.'),
            prompt: T('Two minutes after yes, coat half on, she says: "God. I hope I\'ve done the right thing."',
                      'Dos minutos después del sí, con el abrigo a medio poner, dice: «Ay. Espero haber hecho lo correcto».'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"You definitely have. Honestly, you\'re going to love it."',
                         '«Claro que sí. De verdad, te va a encantar».'),
                why: T('A promise handed to a doubt, by the person who was just paid. It is warm and weightless, and because it cannot be checked it leaves her exactly where she was — only now the reassurance itself is one more thing to distrust at midnight.',
                       'Una promesa entregada a una duda por la persona que acaba de cobrar. Es cálida y no pesa nada, y como no se puede comprobar la deja donde estaba, solo que ahora la propia tranquilización es una cosa más de la que desconfiar a medianoche.') },
              { id: 'b', verdict: 'best',
                label: T('"You decided with everything in front of you, including what it won\'t do. And if it turns out not to be right at the review, we stop and I\'ll say so — that\'s part of the arrangement, not a favour."',
                         '«Has decidido con todo delante, incluido lo que no va a hacer. Y si en la revisión resulta que no es lo adecuado, paramos y te lo digo yo: eso forma parte del acuerdo, no es un favor».'),
                why: T('It returns her to the basis of her own decision instead of adding a new claim to it, and it names the exit out loud. Doubt cannot be argued away, but it can be answered with the record and the reversibility — and both of those were true before she doubted.',
                       'La devuelve a la base de su propia decisión en lugar de añadirle una afirmación nueva, y nombra la salida en voz alta. La duda no se discute, pero sí se responde con el registro y con la reversibilidad, y las dos cosas ya eran ciertas antes de que dudara.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Everyone says that! Honestly, nobody has ever regretted it."',
                         '«¡Eso lo dice todo el mundo! De verdad, nadie se ha arrepentido nunca».'),
                why: T('"Nobody ever" is a claim she cannot check and you cannot support, and it files her feeling under a category instead of answering it. If one thing later goes less well than she hoped, that sentence is the one she will remember and repeat.',
                       '«Nadie nunca» es una afirmación que ella no puede comprobar y tú no puedes sostener, y archiva su sentimiento en una categoría en lugar de responderlo. Si más adelante algo sale menos bien de lo que esperaba, esa es la frase que recordará y repetirá.') }
            ],
            principle: T('Doubt after a yes is not evidence of a wrong decision; it is what a real decision feels like. Answer it with the record and the exit, never with a promise.',
                         'La duda después de un sí no es prueba de una mala decisión: es lo que se siente al tomar una decisión de verdad. Respóndela con el registro y con la salida, nunca con una promesa.'),
            changes: {
              axis: 'clientResponse',
              detail: T('She says the doubt out loud, in the room, two minutes after the yes — "I hope I\'ve done the right thing" — so instead of thirty seconds you control, you are answering a sentence that was going to be said to somebody this evening whatever you did.',
                        'Dice la duda en voz alta, en la sala, dos minutos después del sí: «espero haber hecho lo correcto». Así que, en lugar de treinta segundos que tú gobiernas, estás respondiendo a una frase que esta noche se le iba a decir a alguien hicieras lo que hicieras.')
            } } },
        { kind: 'timedPause',
          prompt: T('You have said "that took some deciding — I\'m glad you did", and stopped. Wait.',
                    'Has dicho «esto tenía su decisión, me alegro de que la hayas tomado» y te has parado. Espera.'),
          first: T('"Thank you."', '«Gracias».'),
          seconds: 4,
          second: T('"...I nearly cancelled this appointment twice, you know. I\'m glad I didn\'t."',
                    '«...Casi cancelo esta cita dos veces, ¿sabes? Me alegro de no haberlo hecho».'),
          why: T('This sentence is worth more than the booking. It tells you what the consultation was actually competing against, it is the sentence she will repeat to a friend, and it belongs in her record — because at the review appointment, "you nearly cancelled twice" is the benchmark you are measuring against, not a photograph.',
                 'Esta frase vale más que la reserva. Te dice contra qué competía realmente la consulta, es la frase que repetirá a una amiga, y pertenece a su ficha, porque en la revisión «casi cancelas dos veces» es el punto de referencia contra el que mides, no una fotografía.') },
        { kind: 'check',
          prompt: T('A client cancels forty-eight hours after a confident yes. Where does the method look first?',
                    'Una clienta cancela cuarenta y ocho horas después de un sí convencido. ¿Dónde mira primero el método?'),
          options: [
            { id: 'a', text: T('At the price — she reconsidered the amount.', 'Al precio: reconsideró la cantidad.') },
            { id: 'b', text: T('At the thirty seconds after the yes, and at whether anything was added there.', 'A los treinta segundos posteriores al sí y a si allí se añadió algo.') },
            { id: 'c', text: T('At the client — some people simply change their minds.', 'A la clienta: hay gente que simplemente cambia de opinión.') }
          ],
          answer: 'b',
          why: T('Price reconsideration usually shows up as a question, not a cancellation. A silent cancellation after a confident yes most often traces to something that happened after the decision — an upsell, an overclaim, or an administrative ending with no acknowledgement in it — and it is the one part of the consultation nobody reviews.',
                 'La reconsideración del precio suele aparecer como una pregunta, no como una cancelación. Una cancelación silenciosa tras un sí convencido se traza casi siempre a algo ocurrido después de la decisión —un añadido, una sobrepromesa o un cierre administrativo sin reconocimiento— y es la parte de la consulta que nadie revisa.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm8l6', n: 6, minutes: 10,
      title: T('DEFER is not failure', 'APLAZAR no es un fracaso'),
      objective: T('Read the client-state ledger well enough to predict the derived outcome, and run a legitimate deferral.',
                   'Leer el registro de estado lo bastante bien para predecir el resultado derivado y gestionar un aplazamiento legítimo.'),
      provenance: {
        chapter: 13,
        principle: T('Real closing is staying present with the client while she decides — closing is not pressure, but abandoning is not respect either.',
                     'Cerrar de verdad es quedarte presente mientras ella decide: cerrar no es presionar, pero abandonar tampoco es respetar.'),
        phase: 'decisionSupport',
        trustStage: 'reliability',
        standard: 6,
        duty: 2,
        toolkit: 8
      },
      depth: {
        whyItGoesWrong: T(
          'A deferral is marked internally as a defeat, and a woman who has just been defeated tidies up: she asks nothing further, agrees rapidly, and lets the client go. It is the same defensive courtesy that follows a refusal, and here it turns a live choice into a dead one. A deferral is not a missing reply; it is a position with a date inside it, and the only thing that makes it real is that both women know when it is next examined. Undated, it becomes a visit the client must begin again from the beginning, which is the one labour she has already shown she cannot face today.',
          'Un aplazamiento se anota por dentro como una derrota, y una mujer a la que acaban de derrotar recoge: no pregunta nada más, accede deprisa y deja marchar a la clienta. Es la misma cortesía defensiva que sigue a un rechazo y aquí convierte una elección viva en una muerta. Un aplazamiento no es una respuesta que falta: es una posición con una fecha dentro, y lo único que la vuelve real es que las dos mujeres sepan cuándo se examina otra vez. Sin fecha se convierte en una visita que la clienta tendrá que empezar de nuevo desde el principio, que es el único trabajo que ya ha demostrado que hoy no puede afrontar.'),
        sheIsThinking: T(
          'I do want this, only not today, and if I say so she will hear a polite refusal. So I will say I must think, and then it falls to me to chase her.',
          'Sí que lo quiero, solo que hoy no, y si lo digo así ella va a oír un rechazo educado. Así que diré que tengo que pensarlo, y luego me tocará a mí perseguirla.'),
        ladder: {
          weak:    { line: T('"No problem, whenever suits — just give us a ring."',
                     '«Sin problema, cuando te venga bien. Nos das un toque y ya».'),
                     effect: T('Turns a deferral into an open-ended nothing. Reopening it falls entirely to the woman who has just said she is not ready to conclude it.',
                               'Convierte el aplazamiento en una nada indefinida. Reabrirlo recae por completo en la mujer que acaba de decir que no está lista para concluirlo.') },
          average: { line: T('"That is fine. Shall I come back to you in a couple of weeks?"',
                     '«Perfecto. ¿Te retomo dentro de un par de semanas?»'),
                     effect: T('A genuine improvement and the standard professional move. "A couple of weeks" is your calendar rather than hers, so the contact stays a favour you are extending rather than a fixture the two of you set.',
                               'Una mejora genuina y la jugada profesional estándar. «Un par de semanas» es tu calendario y no el suyo, así que el contacto sigue siendo un favor que tú extiendes y no un compromiso que habéis fijado las dos.') },
          strong:  { line: T('"That is a position, not a delay, so let us treat it as one. You said you would know once your daughter\'s exams were over — shall I ring you that week, on the twelfth?"',
                     '«Eso es una posición, no un retraso, así que tratémosla como tal. Dijiste que lo sabrías cuando pasaran los exámenes de tu hija: ¿te llamo esa semana, el doce?»'),
                     effect: T('Marks the deferral as a legitimate result, borrows her own date instead of imposing yours, and concludes with a single agreed contact — so the call is something she consented to rather than something performed on her.',
                               'Marca el aplazamiento como un resultado legítimo, toma prestada su propia fecha en vez de imponer la tuya y concluye con un único contacto acordado, de modo que la llamada es algo que ella ha consentido y no algo que se le practica.') }
        }
      },
      treatments: [
        {
          name:   T("Fractional laser resurfacing — course of six",
                     "Láser fraccionado de rejuvenecimiento — bono de seis sesiones"),
          price:  T("€1,980 for six sessions",
                     "1.980 € el bono de seis"),
          why:    T("This is the treatment with a genuine season attached to it, so a deferral here is not hesitation at all — it is the correct clinical answer, and it still gets recorded as a loss.",
                     "Este es el tratamiento que sí tiene una temporada asociada, así que aquí un aplazamiento no es dudar: es la respuesta correcta, y aun así se apunta como una pérdida."),
          moment: T("She wants it and she cannot start now — she is at the beach every weekend until September.",
                     "Lo quiere y no puede empezar ahora: está en la playa todos los fines de semana hasta septiembre."),
          weak:   {
            line: T("\"No problem at all — just give us a ring when the summer is over and we will sort something out.\"",
                     "«Sin problema, nos llamas cuando acabe el verano y lo organizamos.»"),
            cost: T("Turns a correct clinical decision into an open-ended nothing, and hands the work of reopening it to the woman who is about to have three months of other things to think about.",
                     "Convierte una decisión clínica correcta en una nada abierta, y le pasa el trabajo de reabrirla a la mujer que está a punto de tener tres meses de otras cosas en la cabeza.")
          },
          strong: {
            line: T("\"That is not a delay, it is a plan. You said after the first week of September. Shall I ring you on the eighth, and we start the week after?\"",
                     "«Eso no es un retraso, es un plan. Has dicho después de la primera semana de septiembre. ¿Te llamo el día ocho y empezamos la semana siguiente?»"),
            gain: T("Marks the deferral as a legitimate result with a date inside it, and the date is hers rather than yours. The €1,980 is not lost, it is scheduled.",
                     "Marca el aplazamiento como un resultado legítimo con una fecha dentro, y la fecha es suya y no tuya. Los 1.980 € no se pierden: se agendan.")
          }
        },
        {
          name:   T("PRP — course of three",
                     "PRP — pauta de tres sesiones"),
          price:  T("€690 for three sessions",
                     "690 € las tres sesiones"),
          why:    T("At €690 a deferral is rarely about money, which means the date that would make it real is almost always sitting in something she said earlier about her own life.",
                     "A 690 € un aplazamiento rara vez va de dinero, lo que significa que la fecha que lo haría real casi siempre está metida en algo que ella ha contado antes sobre su vida."),
          moment: T("She says she is not ready to decide today, and she means it.",
                     "Dice que hoy no está para decidir, y lo dice en serio."),
          weak:   {
            line: T("\"That is fine. Shall I check back in with you in a couple of weeks?\"",
                     "«Vale, perfecto. ¿Te escribo dentro de un par de semanas?»"),
            cost: T("A real improvement on nothing, and the fortnight is your calendar rather than hers. The contact stays a favour you are extending instead of a fixture the two of you set, and it is the first thing to fall off a busy Tuesday.",
                     "Una mejora real frente a nada, y las dos semanas son tu calendario y no el suyo. El contacto sigue siendo un favor que haces y no una cita que habéis puesto las dos, y es lo primero que se cae de un martes cargado.")
          },
          strong: {
            line: T("\"That is a position, not a no. You said you would know once you had seen how the first month in the new job goes — shall I ring you on the fifth of October?\"",
                     "«Eso es una postura, no un no. Has dicho que lo sabrás cuando veas cómo va el primer mes en el trabajo nuevo. ¿Te llamo el cinco de octubre?»"),
            gain: T("Borrows her own date instead of imposing one, and ends with a single agreed contact. The call is something she consented to rather than something performed on her.",
                     "Toma prestada su propia fecha en lugar de imponer una, y termina con un único contacto acordado. La llamada es algo a lo que ella ha accedido y no algo que se le hace encima.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('The outcome is derived, not chosen', 'El resultado se deriva, no se elige'),
          body: [
            T('In the simulator you never select the outcome. The Decision Engine derives it from the ledger your own choices produced: trust stage values, willingness, posture, and whether the required toolkit artifacts hold. This is not a scoring device — it is a statement about how consultations actually work. The decision was made before the decision moment.',
              'En el simulador nunca eliges el resultado. El Motor de Decisión lo deriva del registro que produjeron tus propias decisiones: los valores de las etapas de confianza, la disposición, la postura y si los artefactos de toolkit exigidos se sostienen. No es un dispositivo de puntuación: es una afirmación sobre cómo funcionan realmente las consultas. La decisión se tomó antes del momento de decidir.'),
            T('DEFER is the most instructive of the three. It is what you get when trust is intact and one threshold is not met — and the commonest way to reach it from a good consultation is to do everything well and then never actually recommend anything.',
              'APLAZAR es el más instructivo de los tres. Es lo que obtienes cuando la confianza está intacta y un umbral no se cumple, y la forma más común de llegar ahí desde una buena consulta es hacerlo todo bien y luego no recomendar nada en realidad.')
          ] },
        { kind: 'reveal',
          prompt: T('Here is a ledger at the end of Phase 6. What will the engine derive?',
                    'Este es un registro al final de la Fase 6. ¿Qué derivará el motor?'),
          client: T('Safety 3, Attention 3, Understanding 3, Credibility 3, Alignment 1, Reliability 3. Willingness 83/100. Posture: opening. All required toolkits valid.',
                    'Seguridad 3, Atención 3, Comprensión 3, Credibilidad 3, Alineación 1, Fiabilidad 3. Disposición 83/100. Postura: abriéndose. Todos los toolkits exigidos válidos.'),
          guesses: [
            { id: 'a', text: T('YES — willingness is high and trust is strong everywhere it matters.', 'SÍ: la disposición es alta y la confianza es fuerte donde importa.') },
            { id: 'b', text: T('DEFER — Alignment is below threshold, and alignment is the one that cannot be compensated for.', 'APLAZAR: la Alineación está por debajo del umbral, y es la que no puede compensarse.') },
            { id: 'c', text: T('NO — a single low stage is enough to lose it.', 'NO: una sola etapa baja basta para perderlo.') }
          ],
          answer: 'b',
          truth: T('DEFER. Five stages at three and willingness at 83 cannot compensate for Alignment at 1, because alignment is the stage that answers "is this plan about me?". A client who trusts you completely and cannot locate her own goal in the plan does not say no — she says she needs to think, and she means it.',
                   'APLAZAR. Cinco etapas a tres y una disposición de 83 no pueden compensar una Alineación de 1, porque la alineación es la etapa que responde a «¿este plan trata de mí?». Una clienta que confía plenamente en ti y no encuentra su objetivo en el plan no dice que no: dice que necesita pensarlo, y lo dice en serio.'),
          why: T('This is the signature of the passive close and of the generic recommendation. Both produce warm consultations, high willingness, and a client who leaves. If your own history shows repeated DEFERs with strong trust, the phase to work on is 6, not 7.',
                 'Esta es la firma del cierre pasivo y de la recomendación genérica. Ambos producen consultas cálidas, disposición alta y una clienta que se va. Si tu historial muestra APLAZAR repetidos con confianza alta, la fase que hay que trabajar es la 6, no la 7.') },
        { kind: 'choose',
          prompt: T('The outcome is DEFER and she has said "can we speak again in two weeks?". What does Phase 8 require?',
                    'El resultado es APLAZAR y ella ha dicho «¿podemos hablar dentro de dos semanas?». ¿Qué exige la Fase 8?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Put her into the clinic\'s two-week follow-up sequence and let the system handle it.',
                       'Meterla en la secuencia de seguimiento de dos semanas de la clínica y dejar que el sistema se encargue.'),
              why: T('A sequence is not an agreement. She proposed a specific conversation and received an automated campaign, and the difference is visible from the first message. Toolkit #16 is also not eligible at an immediate DEFER — the validator will reject reactivation language here.',
                     'Una secuencia no es un acuerdo. Ella propuso una conversación concreta y recibió una campaña automatizada, y la diferencia se nota desde el primer mensaje. Además el Toolkit #16 no es elegible en un APLAZAR inmediato: el validador rechazará aquí el lenguaje de reactivación.') },
            { id: 'b', verdict: 'best',
              label: T('Record the specific agreed moment, send the written summary and the do-nothing alternative today, and set a stop condition.',
                       'Registrar el momento acordado concreto, enviar hoy el resumen escrito y la alternativa de no hacer nada, y fijar una condición de cierre.'),
              why: T('This is Toolkit #8 on a DEFER: one agreed contact, at a time she named, with the material she needs to decide without you in the room. The stop condition is what keeps the plan from becoming pressure with a schedule.',
                     'Esto es el Toolkit #8 en un APLAZAR: un contacto acordado, en un momento que ella nombró, con el material que necesita para decidir sin ti delante. La condición de cierre es lo que evita que el plan se convierta en presión con calendario.') },
            { id: 'c', verdict: 'harmful',
              label: T('Ask what would need to change for it to be a yes today, and offer to hold the price for two weeks.',
                       'Preguntar qué tendría que cambiar para que fuera un sí hoy y ofrecer mantener el precio dos semanas.'),
              why: T('The first half is a reasonable question. The second half attaches a deadline to a deferral she asked for, which converts her legitimate outcome into a countdown. She will read the whole exchange as the pressure close arriving late.',
                     'La primera mitad es una pregunta razonable. La segunda pega un plazo a un aplazamiento que ella pidió, lo que convierte su resultado legítimo en una cuenta atrás. Leerá todo el intercambio como el cierre por presión llegando tarde.') }
          ],
          principle: T('Toolkit #8 governs all three outcomes. Toolkit #16 is never eligible at an immediate DEFER, and Toolkits #16 and #17 are never eligible at an immediate NO.',
                       'El Toolkit #8 gobierna los tres resultados. El Toolkit #16 nunca es elegible en un APLAZAR inmediato, y los Toolkits #16 y #17 nunca lo son en un NO inmediato.'),
          retry: {
            note: T('You set the plan. Now the part of it nobody executes: the day the stop condition is supposed to fire.',
                    'Has fijado el plan. Ahora la parte que nadie ejecuta: el día en que debe dispararse la condición de cierre.'),
            prompt: T('The agreed day arrives. You call Elvira at the time she chose herself; no answer, so you leave one message. Four days later there is still nothing. What does the stop condition require?',
                      'Llega el día acordado. Llamas a Elvira a la hora que eligió ella; no contesta, así que le dejas un mensaje. Cuatro días después sigue sin haber nada. ¿Qué exige la condición de cierre?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Call again next week, and once more the week after. Three attempts is normal practice.',
                         'Volver a llamar la semana que viene y una vez más a la siguiente. Tres intentos es lo normal.'),
                why: T('Normal in a call centre, and it quietly replaces her agreement with your process. She agreed to one conversation at a time she named; each further attempt is about your pipeline, and by the third she has to either answer a call she does not want or feel rude for not doing so.',
                       'Normal en un centro de llamadas, y sustituye en silencio su acuerdo por tu proceso. Ella aceptó una conversación en un momento que nombró; cada intento adicional trata de tu cartera, y al tercero tiene que escoger entre coger una llamada que no quiere o sentirse maleducada por no cogerla.') },
              { id: 'b', verdict: 'best',
                label: T('Send one short message that closes the loop and names the ending — "no problem at all; I\'ll leave it there rather than keep messaging. Everything we discussed is in the summary, and you\'re welcome back whenever" — then record the closure state.',
                         'Enviar un mensaje breve que cierra el bucle y nombra el final —«sin ningún problema; lo dejo aquí en lugar de seguir escribiéndote. Todo lo que hablamos está en el resumen y puedes volver cuando quieras»— y registrar el estado de cierre.'),
                why: T('Silence is an answer, and this is the answer to the answer. Saying the ending out loud is what separates a respectful closure from a queue she cannot get out of, and it is also the message that makes coming back in a year possible — because she leaves owing you nothing.',
                       'El silencio es una respuesta, y esto es la respuesta a esa respuesta. Decir el final en voz alta es lo que separa un cierre respetuoso de una cola de la que no puede salir, y es además el mensaje que hace posible que vuelva dentro de un año, porque se va sin deberte nada.') },
              { id: 'c', verdict: 'harmful',
                label: T('Send her the clinic\'s reactivation offer with the returning-client discount, since she has gone quiet.',
                         'Mandarle la oferta de reactivación de la clínica con el descuento de clienta que vuelve, ya que se ha quedado callada.'),
                why: T('The validator refuses reactivation here, and the client will refuse it for a better reason: a price that drops the moment she stops replying tells her the first number was aspirational and that silence is what gets rewarded. You have also taught her that not answering produces more contact, not less.',
                       'El validador rechaza aquí la reactivación, y la clienta la rechazará por un motivo mejor: un precio que baja en cuanto deja de contestar le dice que la primera cifra era aspiracional y que lo que se premia es el silencio. Además le has enseñado que no responder produce más contacto, no menos.') }
            ],
            principle: T('The stop condition is not a courtesy. It is the part of the follow-up plan that makes the rest of it consent rather than pursuit, and it only counts if you execute it on the day it feels wrong to.',
                         'La condición de cierre no es una cortesía. Es la parte del plan de seguimiento que convierte el resto en consentimiento y no en persecución, y solo cuenta si la ejecutas el día en que da reparo hacerlo.'),
            changes: {
              axis: 'continuation',
              detail: T('The plan is behind you and the agreed day has arrived without her. What is being executed now is the ending you wrote — one message that closes the loop and names the stop — rather than the schedule you wrote it into, and Toolkit #16 is still refused.',
                        'El plan ya está hecho y el día acordado ha llegado sin ella. Lo que se ejecuta ahora es el final que escribiste —un mensaje que cierra el círculo y nombra el punto final— y no el calendario en el que lo escribiste, y el Toolkit #16 sigue sin ser elegible.')
            } } },
        { kind: 'check',
          prompt: T('Which single ledger reading most often turns a DEFER into a NO?',
                    '¿Qué lectura del registro convierte más a menudo un APLAZAR en un NO?'),
          options: [
            { id: 'a', text: T('Willingness falling below 70.', 'Que la Disposición caiga por debajo de 70.') },
            { id: 'b', text: T('Posture moving to withdrawn.', 'Que la postura pase a retraída.') },
            { id: 'c', text: T('Credibility falling below 2.', 'Que la Credibilidad caiga por debajo de 2.') }
          ],
          answer: 'b',
          why: T('Withdrawn posture derives NO on its own, whatever the other values say, because a client who has stopped participating cannot give informed consent to anything. In practice it is produced by one behaviour more than any other: pressure applied to a client who was already deciding.',
                 'La postura retraída deriva un NO por sí sola, digan lo que digan los demás valores, porque una clienta que ha dejado de participar no puede dar un consentimiento informado a nada. En la práctica la produce una conducta más que ninguna otra: presión aplicada a una clienta que ya estaba decidiendo.') },
        { kind: 'reflect',
          prompt: T('Think of your last three deferrals. In how many did you agree a specific moment with the client — a day and a time she chose — rather than saying you would be in touch?',
                    'Piensa en tus tres últimos aplazamientos. ¿En cuántos acordaste un momento concreto con la clienta —un día y una hora elegidos por ella— en vez de decir que ya la contactarías?'),
          placeholder: T('"I said I\'d follow up" counts as none.', '«Le dije que la contactaría» cuenta como ninguno.') }
      ]
    }
  ],
  apply: {
    assignment: T('Use the partnership close once, exactly as written: state your position, then ask "what feels right to you?" — and say nothing until she answers. If the answer is a deferral, agree a specific day and time with her before she leaves.',
                  'Usa una vez el cierre en colaboración, exactamente como está escrito: enuncia tu posición y luego pregunta «¿qué te parece a ti?», y no digas nada hasta que responda. Si la respuesta es un aplazamiento, acuerda con ella un día y una hora concretos antes de que se vaya.'),
    prompt: T('What did she say first? Write her exact words, and say how long the silence lasted before she spoke.',
              '¿Qué dijo primero? Escribe sus palabras exactas y di cuánto duró el silencio antes de que hablara.')
  }
};

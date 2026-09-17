/**
 * MODULE 6 — PRICE, VALUE AND INVESTMENT
 * Book: Ch.14 (The Price Moment) — the four laws of the price conversation, the
 *       five translations of "expensive", the five mistakes that kill the sale,
 *       Orly at the counter, Michal's clinic comparison, Dana's guilt moment,
 *       Maria and belief. Ch.11 (Recommend), rule 5 — price with zero apology.
 * Canonical: Phase 6 Recommendation; Trust Stage 5 Alignment; Trust Standards
 *       3–5; Ethical Duties 2 and 4; Toolkit #5.
 */
const T = (en, es) => ({ en, es });

module.exports = {
  id: 'm6', n: 6,
  phase: 'recommendation',
  accent: 'gold',
  title: T('Price, Value and Investment', 'Precio, Valor e Inversión'),
  strapline: T('The four price laws, and the five translations of "expensive"',
               'Las cuatro leyes del precio y las cinco traducciones de «caro»'),
  summary: T(
    '"That\'s expensive" is almost never about money. It is about trust, permission, clarity, comparison or commitment — five different sentences wearing one word, each needing a different answer. This module teaches the four laws that govern the price moment, the diagnostic that tells you which translation she is speaking, the five mistakes that all happen in the two seconds around the number, and the planner that puts the honest limitation above the investment line.',
    '«Es caro» casi nunca trata del dinero. Trata de confianza, permiso, claridad, comparación o compromiso: cinco frases distintas con una sola palabra encima, y cada una necesita otra respuesta. Este módulo enseña las cuatro leyes que gobiernan el momento del precio, el diagnóstico que te dice qué traducción está hablando, los cinco errores que suceden todos en los dos segundos alrededor de la cifra, y el planificador que coloca la limitación honesta por encima de la línea de la inversión.'),
  outcome: T('Say a price once, without apologising for it or explaining past it, and hear what the silence afterwards is actually about.',
             'Decir un precio una sola vez, sin disculparte por él ni seguir explicando por encima, y escuchar de qué va en realidad el silencio que viene después.'),
  source: T('The Beauty Sales Secrets — Chapter 14 (The Price Moment) and Chapter 11 (Recommend); MIRROR Phase 6, Toolkit #5',
            'The Beauty Sales Secrets — Capítulo 14 (El Momento del Precio) y Capítulo 11 (Recomendar); MIRROR Fase 6, Toolkit #5'),
  minutes: 63,
  status: 'available',
  lessons: [
    // -----------------------------------------------------------------
    {
      id: 'm6l1', n: 1, minutes: 10,
      title: T('The four price laws', 'Las cuatro leyes del precio'),
      objective: T('Put the number in the only position it survives, and answer hesitation with options instead of discounts.',
                   'Colocar la cifra en la única posición en la que sobrevive, y responder a la duda con opciones en lugar de descuentos.'),
      provenance: {
        chapter: 14,
        principle: T('Options, not discounts: an option lets her control how much she commits to; a discount tells her the price was inflated from the start and that you are desperate.',
                     'Opciones, no descuentos: una opción le deja controlar cuánto se compromete; un descuento le dice que el precio venía inflado desde el principio y que estás desesperada.'),
        phase: 'recommendation',
        trustStage: 'alignment',
        standard: 5,
        duty: 4,
        toolkit: 5
      },
      depth: {
        whyItGoesWrong: T(
          'Answering a direct query straight away is what an honest clinician does, and it is what she does with every other query in the room: what does it involve, how long does it take, will it hurt. "How much?" earns the same plain reply for the same sound reason, and withholding a figure resembles the opening manoeuvre of a sales trick she has decided never to use. The damage is invisible. A figure released before the outcome, the elements and the honest limitation has nothing beside it to be judged against except her current account, so the only thought available to her is whether she has that much. Law 1 does not govern phrasing. It governs the point in the appointment at which a figure is permitted to appear.',
          'Responder de inmediato a una pregunta directa es lo que hace una clínica honesta, y es lo que hace con todas las demás preguntas de la sala: qué implica, cuánto dura, si duele. «¿Cuánto?» se gana la misma respuesta llana por la misma razón sólida, y retener una cifra se parece a la maniobra inicial de un truco de ventas que ella ha decidido no usar jamás. El daño es invisible. Una cifra soltada antes del resultado, los elementos y la limitación honesta no tiene nada al lado con lo que juzgarse salvo su cuenta corriente, así que el único pensamiento disponible para ella es si tiene esa cantidad. La Ley 1 no gobierna la formulación. Gobierna el punto de la cita en el que a una cifra se le permite aparecer.'),
        sheIsThinking: T(
          'I asked the price so I can work out whether to keep sitting here. If it is beyond me I would sooner learn that now than be charmed for another half an hour by a woman I will end up refusing.',
          'He preguntado el precio para saber si sigo aquí sentada. Si está fuera de mi alcance, prefiero enterarme ya y no pasar otra media hora dejándome encantar por una mujer a la que voy a acabar diciéndole que no.'),
        ladder: {
          weak:    { line: T('"It is €480 — though there is a lighter version if that is beyond what you had in mind."',
                     '«Son 480 €, aunque hay una versión más ligera si se sale de lo que tenías pensado».'),
                     effect: T('The figure and the escape hatch land in one sentence, so the first thing she learns about your plan is that you expect her to turn it down.',
                               'La cifra y la vía de escape aterrizan en una sola frase, así que lo primero que ella aprende de tu plan es que esperas que lo rechace.') },
          average: { line: T('"It is €480 for the whole routine."',
                     '«Son 480 € la rutina entera».'),
                     effect: T('Accurate, unapologetic and what most of us say. It also releases the figure while she has nothing beside it to weigh, so €480 is judged against her current account rather than against what it buys.',
                               'Exacto, sin disculpas y lo que decimos casi todas. También suelta la cifra cuando ella no tiene nada al lado que sopesar, así que los 480 € se juzgan contra su cuenta corriente y no contra lo que compran.') },
          strong:  { line: T('"You will have the figure before you leave this chair. Let me first describe what I would actually do, because a number only means anything next to that."',
                     '«Tendrás la cifra antes de levantarte de esa silla. Déjame describirte primero qué haría exactamente, porque un número solo significa algo al lado de eso».'),
                     effect: T('Not a refusal to answer: it sets a boundary she can hold you to, which is why it does not read as evasion, and it buys the ninety seconds in which the figure acquires something beside it.',
                               'No es una negativa a responder: fija un límite que ella puede exigirte, por eso no se lee como evasiva, y compra los noventa segundos en los que la cifra adquiere algo al lado.') }
        }
      },
      treatments: [
        {
          name:   T("Chemical peel — single session",
                     "Peeling químico — sesión suelta"),
          price:  T("€110 a session; €380 for a course of four",
                     "110 € la sesión; 380 € el bono de cuatro"),
          why:    T("At €110 the figure survives arriving first, because there is almost nothing it could be judged against that would make it sound wrong. That is exactly where the habit is learned, and the habit is then carried intact into the conversation where the figure does not survive.",
                     "A 110 € la cifra sobrevive a llegar la primera, porque casi nada con lo que pueda compararse la hace sonar mal. Ahí es justo donde se aprende la costumbre, y la costumbre se arrastra intacta hasta la conversación en la que la cifra ya no sobrevive."),
          moment: T("She has booked one peel for Friday and, with her coat already on, asks what the course of four would come to.",
                     "Ha reservado un peeling para el viernes y, ya con el abrigo puesto, pregunta cuánto saldría el bono de cuatro."),
          weak:   {
            line: T("\"The four are €380, so it works out cheaper per session than taking them one at a time.\"",
                     "«El bono de cuatro son 380 €, así que te sale más barata la sesión que cogiéndolas sueltas.»"),
            cost: T("A course is priced before one word has been said about what four sessions are for, so the only difference available to her is arithmetic. She takes the single one on Friday and there is no reason on earth for her to come back for a second.",
                     "Se pone precio a un bono antes de decir una sola palabra sobre para qué sirven cuatro sesiones, así que la única diferencia que ella puede sopesar es aritmética. Se queda con la suelta del viernes y no hay motivo alguno para que vuelva a por la segunda.")
          },
          strong: {
            line: T("\"€380. Before I take that, though — what is it you are hoping four would do that Friday on its own will not?\"",
                     "«380 €. Pero antes de cogerte el bono: ¿qué esperas que hagan cuatro que no vaya a hacer el viernes solo?»"),
            gain: T("The figure is given — Law 1 is not a refusal to answer — and then ninety seconds are bought in which it acquires something to stand beside. What she answers decides whether you quote four at all.",
                     "La cifra se da —la Ley 1 no es negarse a responder— y después se compran noventa segundos en los que esa cifra consigue algo al lado. Lo que ella conteste decide si llegas siquiera a presupuestar cuatro.")
          }
        },
        {
          name:   T("Radiofrequency microneedling — course of three",
                     "Microneedling con radiofrecuencia — pauta de tres sesiones"),
          price:  T("€940 for three; €350 for a single session",
                     "940 € las tres; 350 € la sesión suelta"),
          why:    T("Three sessions is the smallest plan where Law 4 has something honest to work with: there is a genuine option between one and three, so for once the discount reflex has an alternative that costs you nothing.",
                     "Tres sesiones es el plan más pequeño en el que la Ley 4 tiene con qué trabajar honestamente: existe una opción real entre una y tres, así que por una vez el reflejo del descuento tiene una alternativa que a ti no te cuesta nada."),
          moment: T("You have said €940. She goes quiet, then says she was not expecting that, and you can feel the ten per cent forming in your mouth.",
                     "Has dicho 940 €. Ella se queda callada, luego dice que no se esperaba eso, y tú ya notas el diez por ciento formándose en la boca."),
          weak:   {
            line: T("\"I could leave the three at €850 if you book all of them today.\"",
                     "«Te puedo dejar las tres en 850 € si me las reservas hoy las tres.»"),
            cost: T("Buys the yes and prices every quotation you will ever give her. She has learned that your figures move on the day, so the next time she hesitates she will hesitate deliberately.",
                     "Compra el sí y pone precio a todos los presupuestos que le des en tu vida. Ha aprendido que tus cifras se mueven en el día, así que la próxima vez que dude, dudará a propósito.")
          },
          strong: {
            line: T("\"We do not have to start with three. One is €350, we look at it together at four weeks and decide about the other two then — or you take the three. Which sits better?\"",
                     "«No hace falta empezar por tres. Una son 350 €, la miramos juntas a las cuatro semanas y ahí decidimos las otras dos, o te llevas las tres. ¿Qué te encaja mejor?»"),
            gain: T("An option lets her set her own exposure without a single euro moving. The woman who takes one session at €350 books the other two herself, and she never asks you for a reduction.",
                     "Una opción le deja decidir cuánto se expone sin que se mueva un solo euro. La que se lleva una sesión a 350 € se reserva las otras dos ella sola, y nunca te pide una rebaja.")
          }
        },
        {
          name:   T("Botulinum toxin — three areas",
                     "Toxina botulínica — tres zonas"),
          price:  T("€320, three areas; €160 for one area",
                     "320 €, tres zonas; 160 € una zona"),
          why:    T("Toxin is the treatment whose price is asked at reception, by a woman who has not sat down, before her coat is off. It is the purest test of Law 1, because there is no consultation yet to put the number after.",
                     "La toxina es el tratamiento cuyo precio se pregunta en recepción, de pie, antes de quitarse el abrigo. Es la prueba más pura de la Ley 1, porque todavía no hay consulta detrás de la que colocar la cifra."),
          moment: T("She is at the desk with her phone in her hand: how much is the botox?",
                     "Está en el mostrador con el móvil en la mano: ¿cuánto vale el bótox?"),
          weak:   {
            line: T("\"Three areas is €320, and one area on its own would be €160 if you would rather start smaller.\"",
                     "«Tres zonas son 320 €, y una zona sola serían 160 € por si prefieres empezar con menos.»"),
            cost: T("Answers accurately, then hands her a cheaper version of a plan that nobody has made. From here she compares €320 with €160, and neither figure is being compared with the thing she came in about.",
                     "Responde con exactitud y acto seguido le entrega una versión barata de un plan que nadie ha hecho. A partir de ahí compara 320 € con 160 €, y ninguna de las dos cifras se compara con aquello por lo que ha venido.")
          },
          strong: {
            line: T("\"€320 for three areas. Come through for ten minutes and I will tell you whether three is what I would actually do for you.\"",
                     "«320 € las tres zonas. Pasa diez minutos y te digo si tres es lo que yo te haría a ti.»"),
            gain: T("The number is not withheld, which is why it does not read as evasion. What the ten minutes buy is a chance that three is the wrong answer, and a woman who is told that will pay €320 to somebody who told her.",
                     "La cifra no se esconde, y por eso no suena a evasiva. Lo que compran esos diez minutos es la posibilidad de que tres sea la respuesta equivocada, y a una mujer a la que le dicen eso le sale de dentro pagar 320 € a quien se lo ha dicho.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('Three of the four laws are about what surrounds the number',
                   'Tres de las cuatro leyes tratan de lo que rodea a la cifra'),
          body: [
            T('Chapter 14 gives four laws. Context before number: never say the price until she understands what she is buying. Say it and own it: the number, once, then silence. Differentiate, don\'t compare: when she names another clinic you describe yours, you do not defend. Options, not discounts: she controls the level of commitment, never the value of the work.',
              'El Capítulo 14 da cuatro leyes. Contexto antes que cifra: no digas nunca el precio hasta que ella entienda qué está comprando. Dilo y sostenlo: la cifra, una vez, y luego silencio. Diferencia, no compares: cuando nombre otra clínica describes la tuya, no te defiendes. Opciones, no descuentos: ella controla el nivel de compromiso, nunca el valor del trabajo.'),
            T('Only the second law is about how you speak. The other three are about position — what has to exist before the number, what you do with a comparison, and what you offer instead of taking money off. Practitioners work hard on the wording and leave the position untouched, which is why the same sentence lands differently in two consultations.',
              'Solo la segunda ley trata de cómo hablas. Las otras tres tratan de posición: qué tiene que existir antes de la cifra, qué haces con una comparación y qué ofreces en lugar de rebajar. Los profesionales trabajan mucho la formulación y dejan la posición intacta, y por eso la misma frase aterriza distinto en dos consultas.'),
            T('"€480" said first sounds high, because a number with nothing attached can only be measured against her bank balance. The same €480 said after the outcome, the elements, the evidence and the honest limitation sounds like an exchange, because by then it is being measured against something.',
              '«480 €» dicho primero suena alto, porque una cifra sin nada al lado solo puede medirse contra su cuenta corriente. Esos mismos 480 € dichos después del resultado, los elementos, la evidencia y la limitación honesta suenan a intercambio, porque para entonces se miden contra algo.')
          ],
          diagram: 'price-trust' },
        { kind: 'compare',
          prompt: T('The same recommendation and the same €480. Which order does Law 1 require?',
                    'La misma recomendación y los mismos 480 €. ¿Qué orden exige la Ley 1?'),
          a: { label: T('Number first', 'Primero la cifra'),
               text: T('"So the whole routine comes to €480. I know that sounds like a lot for five products, but if you break it down the serum alone is normally €180 and it lasts four months, so it actually works out very reasonable."',
                       '«En total la rutina completa sale a 480 €. Sé que suena a mucho para cinco productos, pero si lo desglosas el sérum solo ya vale 180 € y dura cuatro meses, así que en realidad sale muy bien de precio».') },
          b: { label: T('Value first', 'Primero el valor'),
               text: T('"What you\'re buying is the thing you described — not having to guess every morning. Five products: the cleanser and the sunscreen do most of the work, the serum is for the pigmentation you pointed at, and the toner and the mask are there because you told me the mornings are rushed. It will not remove the pigmentation you already have; it stops it deepening. The investment is €480."',
                       '«Lo que compras es aquello que describiste: dejar de adivinar cada mañana. Cinco productos: el limpiador y el protector solar hacen la mayor parte del trabajo, el sérum es para la pigmentación que me señalaste, y el tónico y la mascarilla están porque me dijiste que las mañanas van con prisa. No va a eliminar la pigmentación que ya tienes; evita que se acentúe. La inversión es de 480 €».') },
          answer: 'b',
          why: T('A defends before anything has been attacked, and "I know that sounds like a lot" is your own verdict on your own price — she will adopt it, because you are the expert in the room. B never argues. It makes €480 the last four words of a sentence about her mornings, and it says the limitation out loud before the number, so the number is attached to something honest. Same figure; in A she is deciding about a figure, in B about her mornings.',
                 'A se defiende antes de que nadie ataque, y «sé que suena a mucho» es tu propio veredicto sobre tu propio precio: ella lo adoptará, porque la experta en la sala eres tú. B no discute en ningún momento. Convierte los 480 € en las últimas palabras de una frase sobre sus mañanas, y enuncia la limitación en voz alta antes de la cifra, de modo que la cifra queda unida a algo honesto. La misma cantidad: en A ella decide sobre una cantidad, en B sobre sus mañanas.') },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 14', 'The Beauty Sales Secrets — Capítulo 14'),
          quote: T('The higher the trust, the less price matters. The lower the trust, the more she will obsess over cost.',
                   'Cuanta más confianza, menos importa el precio. Cuanta menos confianza, más se obsesionará con el coste.'),
          note: T('This is the trust-versus-price curve, and it is why a price objection in Phase 6 is so often a debt contracted in Phases 2 to 4. If she is arguing about the figure, check first whether she was ever understood — Trust Standard 2, Demonstrate Attentive Understanding — because no wording of a number pays off a deficit created earlier.',
                  'Esta es la curva de confianza frente a precio, y por eso una objeción de precio en la Fase 6 es tantas veces una deuda contraída en las Fases 2 a 4. Si ella discute la cantidad, comprueba primero si en algún momento se sintió comprendida —Estándar de Confianza 2, Demostrar Comprensión Atenta—, porque ninguna formulación de una cifra salda una deuda contraída antes.') },
        { kind: 'order',
          prompt: T('Put the price moment into the order Law 1 and Toolkit #5 require.',
                    'Ordena el momento del precio según exigen la Ley 1 y el Toolkit #5.'),
          items: [
            { id: 'p_outcome', text: T('What she is actually buying — the outcome, in her words, not the name of the procedure.', 'Qué está comprando en realidad: el resultado, con sus palabras, no el nombre del procedimiento.') },
            { id: 'p_elements', text: T('What it consists of, and why each element matters to this client specifically.', 'En qué consiste y por qué cada elemento le importa a esta clienta en concreto.') },
            { id: 'p_evidence', text: T('The basis for the expectation — what you have seen, and on whom.', 'La base de la expectativa: qué has visto y en quién.') },
            { id: 'p_limit', text: T('The honest limitation — what it will not do, and how long it lasts.', 'La limitación honesta: qué no hará y cuánto dura.') },
            { id: 'p_number', text: T('The number. Once. Followed by nothing.', 'La cifra. Una vez. Y nada después.') }
          ],
          correct: ['p_outcome', 'p_elements', 'p_evidence', 'p_limit', 'p_number'],
          why: T('The two that move in real consultations are the last two, and they move together. The limitation said after the number reads as a reason to reconsider — you have sold her something and then reduced it. The same limitation said before the number is the evidence that the number is honest, and it is the single cheapest piece of credibility available in Phase 6.',
                 'Los dos que se mueven en las consultas reales son los dos últimos, y se mueven juntos. La limitación dicha después de la cifra se lee como un motivo para replantearse la decisión: le has vendido algo y luego lo has encogido. Esa misma limitación dicha antes de la cifra es la prueba de que la cifra es honesta, y es el elemento de credibilidad más barato de toda la Fase 6.') },
        { kind: 'choose',
          prompt: T('You have said the number. She goes quiet, then: "Mm. It\'s more than I had in mind." What does Law 4 require?',
                    'Has dicho la cifra. Ella se queda callada y luego: «Mm. Es más de lo que tenía en mente». ¿Qué exige la Ley 4?'),
          options: [
            { id: 'a', verdict: 'harmful',
              label: T('"I can do ten per cent off if you book today."', '«Te puedo hacer un diez por ciento si reservas hoy».'),
              why: T('You have told her three things in nine words: the price was inflated, you were the one inflating it, and the way to get a better one is to hesitate. She may well book. She will also negotiate every price you quote her for the rest of her life, and she will tell one friend that your list price is not real.',
                     'Le has dicho tres cosas en nueve palabras: el precio estaba inflado, tú eras quien lo inflaba y la manera de conseguir uno mejor es dudar. Es muy posible que reserve. También negociará todos los precios que le des durante el resto de su vida, y le contará a alguna amiga que tu tarifa no es real.') },
            { id: 'b', verdict: 'best',
              label: T('"We can start with two sessions and look again after the second, or take the four as planned. Which of those feels manageable?"',
                       '«Podemos empezar con dos sesiones y volver a mirarlo después de la segunda, o hacer las cuatro como está previsto. ¿Cuál de las dos te parece asumible?»'),
              why: T('The value of the work has not moved; only the size of the commitment has, and she is the one who sets it. Her answer is also a diagnostic: a client who takes two sessions was worried it would not work, and a client who says "neither, really" was never speaking about the amount at all.',
                     'El valor del trabajo no se ha movido; solo el tamaño del compromiso, y quien lo fija es ella. Su respuesta es además un diagnóstico: una clienta que se lleva dos sesiones temía que no funcionara, y una clienta que dice «ninguna de las dos, la verdad» nunca estaba hablando de la cantidad.') },
            { id: 'c', verdict: 'weak',
              label: T('"If it\'s too much, we do have a smaller version we could look at instead."',
                       '«Si es demasiado, tenemos una versión más pequeña que podríamos mirar».'),
              why: T('This is Mistake 3, the backup plan, and it arrives before she has actually objected. You have just withdrawn your own recommendation, so she now has to wonder why you proposed the first one — and the honest answer, as far as she can see, is that it was for you.',
                     'Este es el Error 3, el plan alternativo, y llega antes de que ella haya objetado de verdad. Acabas de retirar tu propia recomendación, así que ahora ella tiene que preguntarse por qué propusiste la primera, y la respuesta honesta, desde donde ella lo ve, es que era para ti.') }
          ],
          principle: T('Law 4. A discount changes what the work is worth. An option changes only how much of it she commits to today — and she is entitled to decide the second, never asked to judge the first.',
                       'Ley 4. Un descuento cambia lo que vale el trabajo. Una opción cambia solo cuánto se compromete hoy, y ella tiene derecho a decidir lo segundo, nunca se le pide que juzgue lo primero.'),
          retry: {
            note: T('You reached for the price. Here is the same law tested from the other side — this time she asks for the discount out loud, and politely.',
                    'Has tirado del precio. Aquí tienes la misma ley puesta a prueba desde el otro lado: esta vez es ella quien pide el descuento en voz alta, y con buenos modos.'),
            prompt: T('Nuria, four sessions, €1,640. Her card is already out of her bag: "And if I pay for the whole thing today, in one go — what can you do for me on the price?"',
                      'Nuria, cuatro sesiones, 1.640 €. Ya ha sacado la tarjeta del bolso: «¿Y si te lo pago hoy entero, de una vez, qué me puedes hacer en el precio?»'),
            options: [
              { id: 'a', verdict: 'harmful',
                label: T('"Paying in full does help us, so I can take five per cent off for that."',
                         '«Pagar del tirón nos viene bien, así que por eso te puedo quitar un cinco por ciento».'),
                why: T('You answered a question about money with money, and confirmed that the figure had eighty euros of slack sitting inside it. She pays less today and asks the same question at every appointment for the next three years — and so does the friend she tells, because the only thing you priced was her willingness to ask.',
                       'Has respondido a una pregunta sobre dinero con dinero, y has confirmado que la cifra llevaba ochenta euros de holgura dentro. Hoy paga menos y hará la misma pregunta en cada cita durante los próximos tres años, y también la amiga a la que se lo cuente, porque lo único que has puesto en precio es su disposición a preguntar.') },
              { id: 'b', verdict: 'best',
                label: T('"The price is the same however you pay it. What you can choose is how much you take on today — the four sessions, or two now and we look again after the second, at the same price per session."',
                         '«El precio es el mismo lo pagues como lo pagues. Lo que sí puedes elegir es cuánto asumes hoy: las cuatro sesiones, o dos ahora y lo volvemos a mirar después de la segunda, al mismo precio por sesión».'),
                why: T('You did not refuse her; you moved the choice off the value of the work and onto the size of the commitment, which is the only variable she was ever entitled to set. Paying in full stays what it is — a convenience — instead of becoming a bargaining position, and the number she was given at the start is still the number.',
                       'No le has dicho que no; has movido la elección del valor del trabajo al tamaño del compromiso, que es la única variable que le corresponde fijar a ella. Pagar de una vez sigue siendo lo que es, una comodidad, en lugar de convertirse en una baza de negociación, y la cifra que le diste al principio sigue siendo la cifra.') },
              { id: 'c', verdict: 'weak',
                label: T('"Let me ask the owner and see what I can get you."',
                         '«Déjame preguntarle a la dueña a ver qué consigo».'),
                why: T('You have told her two things you cannot take back: that there is a better price somewhere behind you, and that you are not the person who sets it. Whatever comes back — a discount or a no — she will negotiate from now on with someone who is not in the room, and your recommendation weighs less than it did a minute ago.',
                       'Le has dicho dos cosas que ya no puedes retirar: que hay un precio mejor en algún lugar detrás de ti y que tú no eres quien lo fija. Vuelvas con lo que vuelvas —descuento o negativa—, a partir de ahora negociará con alguien que no está en la sala, y tu recomendación pesa menos que hace un minuto.') }
            ],
            principle: T('Law 4 holds under a direct request, not only under a silence. What she may choose is how much she commits to today; what the work is worth was never on the table.',
                         'La Ley 4 se sostiene ante una petición directa, no solo ante un silencio. Ella puede elegir cuánto se compromete hoy; lo que vale el trabajo nunca estuvo en juego.'),
            changes: {
              axis: 'objection',
              detail: T('The objection stops being a murmur you have to interpret. She names it out loud — "what can you do for me on the price?" — with her card already out, so Law 4 is tested against an explicit request from a willing buyer instead of against a silence.',
                        'La objeción deja de ser un murmullo que tengas que interpretar. Ella la enuncia en voz alta —«¿qué me puedes hacer en el precio?»— con la tarjeta ya fuera, así que la Ley 4 se pone a prueba frente a una petición explícita de una clienta dispuesta, y no frente a un silencio.')
            } } }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm6l2', n: 2, minutes: 11,
      title: T('The five translations of "expensive"', 'Las cinco traducciones de «caro»'),
      objective: T('Diagnose which of the five sentences she is actually speaking before you answer any of them.',
                   'Diagnosticar cuál de las cinco frases está diciendo realmente antes de responder a ninguna.'),
      provenance: {
        chapter: 14,
        principle: T('"Expensive" is a code, and a practitioner who answers the word instead of the translation behind it is a doctor prescribing antibiotics for a headache.',
                     '«Caro» es un código, y la profesional que responde a la palabra en lugar de a la traducción que hay detrás es una médica que receta antibióticos para un dolor de cabeza.'),
        phase: 'decisionSupport',
        trustStage: 'understanding',
        standard: 2,
        duty: 3,
        toolkit: 6
      },
      depth: {
        whyItGoesWrong: T(
          '"Expensive" registers as a fault, and a capable specialist repairs faults quickly — that reflex is why she is trusted with everything else in the room. Her remedy is loaded before the word has finished, and it is usually a decent remedy: instalments, a justification, a lighter option. The reflex is sound in any clinical exchange and unsound in this one, because "expensive" is a symptom with five separate conditions beneath it, and Chapter 14 is brutal about what treating the word makes of you — a doctor who hears "I have a headache" and writes a prescription for antibiotics. Diagnosis precedes remedy. Here the diagnosis costs one sentence.',
          '«Caro» se registra como una avería, y una especialista capaz repara averías deprisa: ese reflejo es la razón por la que se le confía todo lo demás en la sala. Su remedio está cargado antes de que la palabra termine, y suele ser un remedio decente: plazos, una justificación, una opción más ligera. El reflejo es sólido en cualquier intercambio clínico e insensato en este, porque «caro» es un síntoma con cinco cuadros distintos debajo, y el Capítulo 14 es brutal sobre en qué te convierte tratar la palabra: en una médica que oye «me duele la cabeza» y extiende una receta de antibióticos. El diagnóstico precede al remedio. Aquí el diagnóstico cuesta una frase.'),
        sheIsThinking: T(
          '"Expensive" is the one word I have that demands no explanation from me. If I say the true thing — that I was let down last time, or that I have never paid this for my own skin — I have to reveal myself.',
          '«Caro» es la única palabra que tengo que no me exige ninguna explicación. Si digo lo verdadero —que la última vez me decepcionaron, o que jamás he pagado esto por mi propia piel—, tengo que descubrirme.'),
        ladder: {
          weak:    { line: T('"I know, and I do understand — we can spread it across three months if that makes it easier."',
                     '«Lo sé, y lo entiendo de verdad. Podemos repartirlo en tres meses si así resulta más llevadero».'),
                     effect: T('Picks one of the five meanings by accident and commits the exchange to money, which is the one thing she has not told you is wrong.',
                               'Elige uno de los cinco sentidos por accidente y compromete el intercambio con el dinero, que es justo lo único que ella no te ha dicho que falle.') },
          average: { line: T('"May I run through what is in it? The serum on its own is normally €180 and it lasts four months."',
                     '«¿Repaso qué lleva dentro? El sérum solo cuesta normalmente 180 € y dura cuatro meses».'),
                     effect: T('Careful, informed and entirely correct as a reply to meaning number two — you did not make it clear enough. Which makes it the wrong reply four times in five, and to those four it sounds like a defence.',
                               'Cuidadosa, documentada y del todo correcta como réplica al sentido número dos: no lo dejaste claro. Lo que la convierte en la réplica equivocada cuatro de cada cinco veces, y a esas cuatro les suena a defensa.') },
          strong:  { line: T('"Tell me what feels expensive — the figure itself, or the worry that it will not work?"',
                     '«Dime qué es lo que te resulta caro: ¿la cifra en sí, o la preocupación de que no funcione?»'),
                     effect: T('Splits the word in half and makes her pick, and both halves are easy to own. Whichever she takes has told you which of the five you are in.',
                               'Parte la palabra por la mitad y la obliga a elegir, y las dos mitades son fáciles de reconocer. La que tome ya te ha dicho en cuál de los cinco estás.') }
        }
      },
      treatments: [
        {
          name:   T("Hyaluronic acid filler — midface, 2 ml",
                     "Relleno de ácido hialurónico — tercio medio, 2 ml"),
          price:  T("€720 for 2 ml",
                     "720 € los 2 ml"),
          why:    T("Midface filler is the treatment most women have already paid for once, somewhere else, and not liked. When \"expensive\" arrives here it is translation one — not the money, the memory of the money.",
                     "El relleno del tercio medio es el tratamiento que más mujeres ya han pagado una vez, en otro sitio, y no les ha gustado. Cuando aquí aparece «caro» es la traducción uno: no el dinero, sino el recuerdo del dinero."),
          moment: T("You say €720. She says it is expensive, and then adds, as if it were a separate remark, that she had something similar done two years ago.",
                     "Dices 720 €. Ella dice que es caro y luego añade, como si fuera un comentario aparte, que hace dos años se hizo algo parecido."),
          weak:   {
            line: T("\"I know it sounds a lot — two millilitres really is the minimum for that area, and the product we use is one of the better ones.\"",
                     "«Ya sé que suena a mucho, pero dos mililitros son el mínimo real para esa zona, y el producto que usamos es de los buenos.»"),
            cost: T("Answers translation two — you did not explain it clearly — with product detail, when what she has just put on the table is money she feels she already wasted. She hears a clinic defending a price instead of a clinician interested in what went wrong last time.",
                     "Responde a la traducción dos —no lo has explicado bien— con detalles de producto, cuando lo que ella acaba de poner encima de la mesa es un dinero que siente que ya tiró. Oye a una clínica defendiendo un precio en lugar de a una profesional interesada en qué pasó la vez anterior.")
          },
          strong: {
            line: T("\"You said that right after telling me about the last time. Which is the expensive part — the €720, or paying it twice?\"",
                     "«Eso lo has dicho justo después de contarme lo de la vez anterior. ¿Cuál es la parte cara: los 720 € o pagarlo dos veces?»"),
            gain: T("Puts the two halves of the word in front of her and lets her choose. She takes the second one almost every time, and the second one is a conversation about what she was told before, which you can do something with.",
                     "Le pone delante las dos mitades de la palabra y la deja elegir. Casi siempre coge la segunda, y la segunda es una conversación sobre lo que le contaron entonces, con la que sí se puede hacer algo.")
          }
        },
        {
          name:   T("Facial mesotherapy — course of four",
                     "Mesoterapia facial — bono de cuatro sesiones"),
          price:  T("€440 for four sessions (€120 singly)",
                     "440 € el bono de cuatro (120 € suelta)"),
          why:    T("Mesotherapy is the treatment she cannot picture. \"Expensive\" here is usually the politest available way of saying she does not know what she would be buying.",
                     "La mesoterapia es el tratamiento que ella no consigue imaginarse. Aquí «caro» suele ser la forma más educada que tiene de decir que no sabe qué estaría comprando."),
          moment: T("You have recommended four sessions at €440. She has nodded the whole way through, and then says it seems expensive for what it is.",
                     "Le has recomendado cuatro sesiones a 440 €. Ha ido asintiendo todo el rato y luego dice que le parece caro para lo que es."),
          weak:   {
            line: T("\"It is honestly good value over four — it comes to €120 a session, which is less than a single peel here.\"",
                     "«La verdad es que en bono sale bien: son 120 € por sesión, menos que un peeling suelto aquí.»"),
            cost: T("Argues arithmetic against a sentence that was about comprehension. The four words that carried the complaint were \"for what it is\", and they go straight past.",
                     "Discute con aritmética contra una frase que iba de entender. Las cuatro palabras que llevaban la queja eran «para lo que es», y pasan de largo.")
          },
          strong: {
            line: T("\"You said for what it is. Tell me what you think it is — I would rather find out I explained it badly.\"",
                     "«Has dicho para lo que es. Dime qué crees tú que es; prefiero descubrir que lo he explicado mal.»"),
            gain: T("Picks up the exact three words that carried the real complaint and puts the fault on your side of the desk, which is the only move that will get her to describe what she actually understood.",
                     "Recoge las palabras exactas que llevaban la queja de verdad y pone la culpa en tu lado de la mesa, que es lo único que consigue que ella describa qué ha entendido en realidad.")
          }
        },
        {
          name:   T("Body contouring programme — cryolipolysis and radiofrequency, twelve sessions",
                     "Programa de remodelación corporal — criolipólisis y radiofrecuencia, doce sesiones"),
          price:  T("€2,900 for twelve sessions across four months",
                     "2.900 € las doce sesiones en cuatro meses"),
          why:    T("A four-month programme is the clearest case of translation five. The figure is not what she is looking at; the calendar is, and the two problems have entirely different answers.",
                     "Un programa de cuatro meses es el caso más claro de la traducción cinco. No está mirando la cifra: está mirando el calendario, y los dos problemas tienen respuestas completamente distintas."),
          moment: T("€2,900, twelve appointments, four months. She says it is a lot of money while looking at the diary on the wall and not at the quotation.",
                     "2.900 €, doce citas, cuatro meses. Dice que es mucho dinero mientras mira el calendario de la pared y no el presupuesto."),
          weak:   {
            line: T("\"It is a lot, yes. We can split it into four payments with no interest, if that makes it easier to take.\"",
                     "«Sí que es mucho. Lo podemos dejar en cuatro pagos sin intereses, si así se lleva mejor.»"),
            cost: T("Answers a money question she was not asking. Instalments make a large number smaller and do nothing whatever about twelve Thursday afternoons, which is the thing she was staring at.",
                     "Responde a una pregunta de dinero que ella no ha hecho. Los plazos hacen pequeña una cifra grande y no hacen absolutamente nada con doce jueves por la tarde, que es lo que estaba mirando.")
          },
          strong: {
            line: T("\"Is it the €2,900, or is it the four months? Because those are two different problems and only one of them is mine to fix.\"",
                     "«¿Son los 2.900 € o son los cuatro meses? Porque son dos problemas distintos y solo uno de los dos me toca resolverlo a mí.»"),
            gain: T("Splits the sentence into the two things it could mean and makes both cheap to admit. If it is the four months, the plan changes shape; if it is the money, you have not spent a discount finding out.",
                     "Parte la frase en las dos cosas que puede significar y hace fácil reconocer cualquiera de las dos. Si son los cuatro meses, el plan cambia de forma; si es el dinero, no has gastado un descuento en averiguarlo.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('One word, five sentences', 'Una palabra, cinco frases'),
          body: [
            T('"Expensive" is a code, and a code you do not break is a message you did not receive. Chapter 14 lists five things the word carries: I don\'t trust this will work; you didn\'t explain it clearly enough; I feel guilty spending on myself; I can get this cheaper somewhere else; this feels too big to commit to.',
              '«Caro» es un código, y un código que no descifras es un mensaje que no has recibido. El Capítulo 14 enumera cinco cosas que lleva esa palabra: no me fío de que funcione; no me lo explicaste con claridad; me siento culpable gastando en mí; puedo conseguirlo más barato en otro sitio; esto es un compromiso demasiado grande.'),
            T('Only one of the five is about the amount, and even that one — the comparison — is usually about two things she believes are the same and are not. The other four are answered by a different question each. A practitioner who hears "expensive" and offers a discount is a doctor who hears "I have a headache" and prescribes antibiotics: wrong diagnosis, wrong remedy.',
              'Solo una de las cinco trata de la cantidad, e incluso esa —la comparación— suele tratar de dos cosas que ella cree iguales y no lo son. Las otras cuatro se responden con una pregunta distinta cada una. Un profesional que oye «caro» y ofrece un descuento es un médico que oye «me duele la cabeza» y receta antibióticos: diagnóstico equivocado, remedio equivocado.'),
            T('The diagnosis costs one question, and the chapter gives it: "Tell me what feels expensive — the amount itself, or wondering whether it will actually work?" It separates the only two things the word can mean at the surface, and most of the time the honest answer is the second.',
              'El diagnóstico cuesta una pregunta, y el capítulo la da: «Dime qué te parece caro: ¿la cantidad en sí, o la duda de si va a funcionar?». Separa las dos únicas cosas que la palabra puede significar en superficie, y la mayoría de las veces la respuesta honesta es la segunda.')
          ] },
        { kind: 'signalGallery',
          prompt: T('Select each translation to see what she is really saying and the one response that fits it.',
                    'Selecciona cada traducción para ver qué está diciendo en realidad y la única respuesta que le corresponde.'),
          signals: [
            { id: 'x1', icon: 'mirror',
              name: T('"I don\'t trust this will work"', '«No me fío de que funcione»'),
              means: T('She has invested before and been disappointed. The figure is not high — her confidence is low, and low confidence surfaces at the price, because that is the only place it is socially acceptable to appear.',
                       'Ya invirtió antes y se llevó una decepción. La cifra no es alta: su confianza es baja, y la confianza baja aflora en el precio, porque es el único sitio donde es socialmente aceptable que aparezca.'),
              say: T('"Tell me — is it the amount, or is it wondering whether this will actually work?"',
                     '«Dime: ¿es la cantidad, o es la duda de si esto va a funcionar de verdad?»') },
            { id: 'x2', icon: 'short',
              name: T('"You didn\'t explain it clearly enough"', '«No me lo explicaste con claridad»'),
              means: T('Your recommendation was vague, or it listed features rather than outcomes, so there is nothing for the number to attach itself to. The price is not unjustifiable — it is simply unjustified, because nobody did the work of justifying it.',
                       'Tu recomendación fue vaga, o enumeró características en lugar de resultados, así que la cifra no tiene a qué agarrarse. El precio no es injustificable: sencillamente está sin justificar, porque nadie hizo el trabajo de justificarlo.'),
              say: T('Take her back through it item by item, naming what each one is for in her words — then say the number again, unchanged.',
                     'Repásalo con ella elemento por elemento, nombrando para qué sirve cada uno con las palabras de ella, y luego di la cifra otra vez, sin cambiarla.') },
            { id: 'x3', icon: 'hand',
              name: T('"I feel guilty spending on myself"', '«Me siento culpable gastando en mí»'),
              means: T('"I don\'t usually spend like that on myself" is not a budget sentence. It is permission, and no amount is low enough to solve a permission problem — halving the price only confirms that the spending was excessive.',
                       '«No suelo gastar así en mí» no es una frase de presupuesto. Es permiso, y ninguna cantidad es lo bastante baja para resolver un problema de permiso: reducir el precio a la mitad solo confirma que el gasto era excesivo.'),
              say: T('"When you buy things for your home or your family, do you feel guilty? So why when it\'s for you?"',
                     '«Cuando compras cosas para tu casa o para tu familia, ¿te sientes culpable? ¿Y por qué sí cuando es para ti?»') },
            { id: 'x4', icon: 'phone',
              name: T('"I can get this cheaper somewhere else"', '«Puedo conseguirlo más barato en otro sitio»'),
              means: T('She is comparing, and often comparing two things that are not the same thing — same category, different content. She does not know that yet, and telling her she is wrong will not teach it to her.',
                       'Está comparando, y a menudo comparando dos cosas que no son la misma cosa: misma categoría, contenido distinto. Todavía no lo sabe, y decirle que se equivoca no se lo va a enseñar.'),
              say: T('"I can\'t speak to other places. Let me tell you exactly what you get here."',
                     '«No puedo hablar de otros sitios. Déjame contarte exactamente qué recibes aquí».') },
            { id: 'x5', icon: 'pause',
              name: T('"This feels too big to commit to"', '«Es un compromiso demasiado grande»'),
              means: T('A four-figure package is not a money problem. It is the ongoing relationship, the appointments in the diary, the year of her life it implies, and the change at the end of it.',
                       'Un paquete de cuatro cifras no es un problema de dinero. Es la relación continuada, las citas en la agenda, el año de su vida que implica y el cambio que hay al final.'),
              say: T('"We don\'t have to start with the whole thing. Two treatments, a month apart, and then we look again. Does that feel more manageable?"',
                     '«No tenemos que empezar por todo. Dos tratamientos, con un mes entre ellos, y volvemos a mirarlo. ¿Te parece más asumible?»') }
          ] },
        { kind: 'match',
          prompt: T('Five clients, five sentences said immediately after the number. Which translation is each one speaking?',
                    'Cinco clientas, cinco frases dichas justo después de la cifra. ¿Qué traducción está hablando cada una?'),
          left: [
            { id: 'm1', text: T('"I did a course of something like this years ago and honestly I couldn\'t see anything."', '«Me hice hace años un ciclo de algo parecido y sinceramente no noté nada».') },
            { id: 'm2', text: T('"Sorry — remind me what the second one was actually for?"', '«Perdona, ¿qué era exactamente el segundo?»') },
            { id: 'm3', text: T('"It\'s not that. I just… I don\'t usually spend like this on myself."', '«No es eso. Es que… no suelo gastar así en mí».') },
            { id: 'm4', text: T('"I\'ve seen that exact serum online for less than half."', '«He visto ese mismo sérum en internet por menos de la mitad».') },
            { id: 'm5', text: T('"Four sessions. And then what, I just keep coming forever?"', '«Cuatro sesiones. ¿Y luego qué, vengo para siempre?»') }
          ],
          right: [
            { id: 'trust', text: T('Doesn\'t trust it will work', 'No se fía de que funcione') },
            { id: 'unclear', text: T('You didn\'t explain it clearly', 'No lo explicaste con claridad') },
            { id: 'guilt', text: T('Guilt about spending on herself', 'Culpa por gastar en sí misma') },
            { id: 'cheaper', text: T('Saw it cheaper elsewhere', 'Lo ha visto más barato en otro sitio') },
            { id: 'commitment', text: T('The commitment feels too big', 'El compromiso le parece demasiado grande') }
          ],
          pairs: { m1: 'trust', m2: 'unclear', m3: 'guilt', m4: 'cheaper', m5: 'commitment' },
          why: T('Notice that only m4 mentions an amount, and notice what happens if you answer all five with a payment plan. m1 hears that you had no answer to her disappointment. m2 hears that the confusion was hers. m3 hears that the spending really was too much. m5 hears that you did not understand the question. One instrument, four wrong patients.',
                 'Fíjate en que solo la m4 menciona una cantidad, y fíjate en qué pasa si respondes a las cinco con un plan de pago. La m1 oye que no tenías respuesta a su decepción. La m2 oye que la confusión era suya. La m3 oye que el gasto sí era excesivo. La m5 oye que no entendiste la pregunta. Un solo instrumento, cuatro pacientes equivocados.') },
        { kind: 'reveal',
          prompt: T('She has just compared your price with another clinic\'s. Which translation is she actually speaking?',
                    'Acaba de comparar tu precio con el de otra clínica. ¿Qué traducción está hablando en realidad?'),
          client: T('"The other place quoted me €3,200 for the same four treatments. I mean — how would I even tell the difference?"',
                    '«En el otro sitio me han dado 3.200 € por los mismos cuatro tratamientos. O sea, ¿cómo voy a notar yo la diferencia?»'),
          guesses: [
            { id: 'a', text: T('Comparison — she saw it cheaper and wants the gap closed.', 'Comparación: lo ha visto más barato y quiere que salves la diferencia.') },
            { id: 'b', text: T('Trust — she cannot see what she would be buying with the extra €1,000.', 'Confianza: no ve qué compraría con esos 1.000 € de más.') },
            { id: 'c', text: T('Commitment — four treatments is more than she wants to take on.', 'Compromiso: cuatro tratamientos es más de lo que quiere asumir.') }
          ],
          answer: 'b',
          truth: T('Her second sentence is the real one. She is not asking you to match a price; she is telling you that from where she sits the two packages look identical, and if they are identical then the cheaper one is simply correct. That is a clarity problem, and it is yours: she was never told what the extra €1,000 consists of.',
                   'Su segunda frase es la de verdad. No te está pidiendo que iguales un precio: te está diciendo que desde donde ella está los dos paquetes parecen idénticos, y si son idénticos, entonces el más barato es sencillamente el correcto. Eso es un problema de claridad, y es tuyo: nadie le contó en qué consisten esos 1.000 € de más.'),
          why: T('If you answer the first sentence you will discount, match or badmouth, and all three confirm that the two things really were the same and only the price differed. If you answer the second you describe your package — evaluation before each session, direct access between them, the pivot without penalty — and the comparison collapses on its own, because she can finally see two different things.',
                 'Si respondes a la primera frase, rebajarás, igualarás o hablarás mal del otro sitio, y las tres cosas confirman que los dos paquetes eran iguales y solo cambiaba el precio. Si respondes a la segunda, describes el tuyo —valoración antes de cada sesión, acceso directo entre ellas, el cambio de plan sin penalización— y la comparación se cae sola, porque por fin ve dos cosas distintas.') },
        { kind: 'choose',
          prompt: T('She says "That\'s expensive" and you have no idea which of the five she means. What is your first sentence?',
                    'Dice «es caro» y no tienes ni idea de cuál de las cinco quiere decir. ¿Cuál es tu primera frase?'),
          options: [
            { id: 'a', verdict: 'best',
              label: T('"Tell me what feels expensive — the amount itself, or wondering whether it will actually work?"',
                       '«Dime qué te parece caro: ¿la cantidad en sí, o la duda de si va a funcionar de verdad?»'),
              why: T('It is a question, so nothing has been conceded and nothing defended. It also offers her a way to say the true thing without admitting to a budget, which is why the usual answer is "well — both, I suppose", and the word that follows "both" is the diagnosis.',
                     'Es una pregunta, así que no has concedido nada ni has defendido nada. Además le ofrece una manera de decir lo verdadero sin reconocer un problema de presupuesto, y por eso la respuesta habitual es «bueno, las dos cosas, supongo», y la palabra que viene después de «las dos» es el diagnóstico.') },
            { id: 'b', verdict: 'weak',
              label: T('"I understand. Let me go back through exactly what\'s included, because I don\'t think I explained it well."',
                       '«Te entiendo. Déjame repasar exactamente qué incluye, porque creo que no lo expliqué bien».'),
              why: T('You have chosen translation 2 for her, before checking. If she was speaking translation 3, you have answered a guilt sentence with a product list, and she will sit politely through it and leave. Explaining is the right remedy for exactly one of the five.',
                     'Has elegido la traducción 2 por ella, sin comprobarlo. Si estaba hablando la traducción 3, has respondido a una frase de culpa con una lista de productos, y ella lo escuchará educadamente y se irá. Explicar es el remedio correcto para exactamente una de las cinco.') },
            { id: 'c', verdict: 'harmful',
              label: T('"I know. But honestly, for what you get, I think it\'s worth every euro."',
                       '«Lo sé. Pero sinceramente, por lo que recibes, creo que vale cada euro».'),
              why: T('You agreed it was expensive and then argued with her about it in the same breath. Defending the price confirms that there is a price problem — she raised a word, and you have just turned it into the subject of the rest of the consultation.',
                     'Has admitido que es caro y en la misma frase se lo has discutido. Defender el precio confirma que hay un problema de precio: ella soltó una palabra y tú acabas de convertirla en el tema del resto de la consulta.') }
          ],
          principle: T('Diagnose, then respond. The word "expensive" is the beginning of the sentence, never the whole of it.',
                       'Diagnostica y luego responde. La palabra «caro» es el principio de la frase, nunca la frase entera.'),
          retry: {
            note: T('You picked a translation for her instead of asking for it. Here is a sentence that sounds like a budget and is not one.',
                    'Has elegido una traducción por ella en lugar de preguntársela. Aquí tienes una frase que suena a presupuesto y no lo es.'),
            prompt: T('Marta, straight after the number for a €1,950 plan: "Hm. That\'s quite a bit more than I\'d pictured spending today."',
                      'Marta, justo después de la cifra de un plan de 1.950 €: «Mm. Es bastante más de lo que me había imaginado gastar hoy».'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"We can split it into three payments, if that makes it easier to picture."',
                         '«Lo podemos dividir en tres pagos, si así te lo imaginas mejor».'),
                why: T('A payment plan answers exactly one of the five translations, and you have not established that it is hers. If what she pictured was built on a friend\'s bill or a price she saw online, you have quietly agreed that your figure needs making easier to bear, and the comparison she walked in with is still sitting there, unexamined.',
                       'Un plan de pago responde exactamente a una de las cinco traducciones, y no has comprobado que sea la suya. Si lo que se había imaginado venía de la factura de una amiga o de un precio visto en internet, acabas de reconocer sin decirlo que tu cifra necesita hacerse más llevadera, y la comparación con la que entró sigue ahí, sin tocar.') },
              { id: 'b', verdict: 'best',
                label: T('"Can I ask what you had pictured? What someone expects is usually built on something, and I\'d like to know what yours was built on."',
                         '«¿Te puedo preguntar qué te habías imaginado? Lo que una espera suele estar construido sobre algo, y me gustaría saber sobre qué está construido lo tuyo».'),
                why: T('This is the chapter\'s second phrase — what would you be comparing this to — and it concedes nothing, defends nothing and explains nothing. Her answer names the source of the expectation, and the source is the diagnosis: a friend\'s treatment, a website, a figure from four years ago, or nothing at all beyond the size of the last thing she bought for herself.',
                       'Es la segunda frase del capítulo —con qué lo estás comparando— y no concede nada, no defiende nada y no explica nada. Su respuesta nombra el origen de la expectativa, y el origen es el diagnóstico: el tratamiento de una amiga, una web, una cifra de hace cuatro años, o nada en absoluto salvo el tamaño de lo último que se compró para ella.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Honestly, you won\'t find this protocol for less anywhere that does it properly."',
                         '«Sinceramente, este protocolo no lo vas a encontrar más barato en ningún sitio que lo haga bien».'),
                why: T('You answered a sentence about her expectations with a claim about the market, and asked her to take it on the word of the person selling. She will not argue. She will finish the appointment politely and check the claim on her phone in the car, where you are not there to be asked about it.',
                       'Has respondido a una frase sobre sus expectativas con una afirmación sobre el mercado, y le pides que se fíe de la palabra de quien vende. No te va a discutir: terminará la cita con educación y comprobará la afirmación en el móvil dentro del coche, donde tú no estás para que te pregunte.') }
            ],
            principle: T('The remedy is chosen after the diagnosis, never before it. One question about where the expectation came from separates a comparison from a permission problem — and the two need opposite answers.',
                         'El remedio se elige después del diagnóstico, nunca antes. Una sola pregunta sobre de dónde viene la expectativa separa una comparación de un problema de permiso, y las dos necesitan respuestas opuestas.'),
            changes: {
              axis: 'disclosure',
              detail: T('She has now put a fact on the table that the first client withheld: she arrived with a figure already in her head. The word "expensive" discloses nothing, but "more than I\'d pictured" discloses that a comparison exists somewhere — and that is the thing the diagnostic question can reach.',
                        'Ahora ha puesto sobre la mesa un dato que la primera clienta no dio: llegó con una cifra ya en la cabeza. La palabra «caro» no revela nada, pero «más de lo que me había imaginado» revela que en algún sitio existe una comparación, y eso es justo lo que la pregunta diagnóstica puede alcanzar.')
            } } },
        { kind: 'check',
          prompt: T('Why does Chapter 14 call the immediate discount the wrong remedy rather than simply a weak one?',
                    '¿Por qué el Capítulo 14 llama al descuento inmediato el remedio equivocado y no simplemente un remedio flojo?'),
          options: [
            { id: 'a', text: T('Because it costs the clinic margin that a payment plan would not.', 'Porque le cuesta a la clínica un margen que un plan de pago no costaría.') },
            { id: 'b', text: T('Because it treats a symptom with no diagnosis — four of the five translations are not about the amount, so the discount answers a question she did not ask.', 'Porque trata un síntoma sin diagnóstico: cuatro de las cinco traducciones no tratan de la cantidad, así que el descuento responde a una pregunta que ella no ha hecho.') },
            { id: 'c', text: T('Because clients rarely accept the first discount they are offered.', 'Porque las clientas rara vez aceptan el primer descuento que se les ofrece.') }
          ],
          answer: 'b',
          why: T('Margin is the least of it. The discount does two things at once: it fails to touch whatever was actually wrong, and it teaches her that the number was negotiable — so every figure you quote her from now on is an opening position, including the one she would have paid today.',
                 'El margen es lo de menos. El descuento hace dos cosas a la vez: no toca en absoluto lo que iba mal de verdad, y le enseña que la cifra era negociable, de modo que toda cantidad que le des a partir de ahora será una posición de salida, incluida la que hoy habría pagado.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm6l3', n: 3, minutes: 11,
      title: T('Saying the number', 'Decir la cifra'),
      objective: T('Deliver a price with no apology, no backup plan and no avalanche — and survive the silence that follows it.',
                   'Dar un precio sin disculpa, sin plan alternativo y sin avalancha, y sobrevivir al silencio posterior.'),
      provenance: {
        chapter: 14,
        principle: T('Say the number, stop, and give silence — because what you believe your work is worth is audible in how you say the price, and she can hear it.',
                     'Di la cifra, para y deja silencio, porque lo que tú crees que vale tu trabajo se oye en cómo dices el precio, y ella lo oye.'),
        phase: 'recommendation',
        trustStage: 'credibility',
        standard: 3,
        duty: 4,
        toolkit: 5
      },
      depth: {
        whyItGoesWrong: T(
          'Filling the silence after a number is not weakness. It is the identical reflex that makes her explain a treatment thoroughly, confirm that the woman opposite has followed her, and volunteer a little more help than was requested. Everywhere else that reflex separates an excellent clinician from an adequate one. This is the single spot in the whole appointment where the useful act is saying nothing, because the woman opposite is in the middle of a private calculation and every added sentence has to be absorbed before the calculation can resume. Nobody talks through that gap out of greed. They talk because holding position in front of somebody else\'s discomfort is genuinely difficult.',
          'Llenar el silencio posterior a una cifra no es debilidad. Es el mismo reflejo que la lleva a explicar un tratamiento a fondo, a confirmar que la mujer de enfrente la ha seguido y a ofrecer algo más de ayuda de la que le han pedido. En todo lo demás ese reflejo separa a una clínica excelente de una correcta. Este es el único punto de toda la cita en el que el acto útil es no decir nada, porque la mujer de enfrente está en mitad de un cálculo privado y cada frase añadida hay que absorberla antes de que el cálculo pueda reanudarse. Nadie habla por encima de ese hueco por codicia. Se habla porque mantener la posición delante de la incomodidad ajena es genuinamente difícil.'),
        sheIsThinking: T(
          'I am not doing arithmetic. I am working out whether I am the sort of woman who spends this on herself, and I am not saying that aloud to anybody in this room.',
          'No estoy haciendo cuentas. Estoy viendo si soy de las mujeres que se gastan esto en sí mismas, y eso no se lo digo en voz alta a nadie de esta sala.'),
        ladder: {
          weak:    { line: T('"…and naturally we could split it across three months if that would help."',
                     '«…y, por supuesto, podríamos repartirlo en tres meses si eso ayudara».'),
                     effect: T('Answers a question about money that she never put, and announces that the figure was negotiable from the start.',
                               'Responde a una pregunta sobre dinero que ella nunca planteó, y anuncia que la cifra era negociable desde el principio.') },
          average: { line: T('"That is the investment for the whole series. Does that work for you?"',
                     '«Esa es la inversión de la serie completa. ¿Te encaja?»'),
                     effect: T('Correct and safe. It also demands a yes or a no about money before she has finished deciding about the treatment.',
                               'Correcto y seguro. También le exige un sí o un no sobre dinero antes de que haya terminado de decidir sobre el tratamiento.') },
          strong:  { line: T('"One thousand nine hundred and eighty." — and then nothing at all.',
                     '«Mil novecientos ochenta». Y después nada de nada.'),
                     effect: T('Leaves the silence with its owner. Whatever she puts into it is the true objection, and it is usually not the figure.',
                               'Deja el silencio con su dueña. Lo que sea que ella meta ahí es la objeción verdadera, y casi nunca es la cifra.') }
        }
      },
      treatments: [
        {
          name:   T("Fractional laser resurfacing — course of six",
                     "Láser fraccionado de rejuvenecimiento — bono de seis sesiones"),
          price:  T("€1,980 for six sessions (€330 a session)",
                     "1.980 € el bono de seis (330 € la sesión)"),
          why:    T("€1,980 is the first figure in most clinics that produces a genuine pause, and the pause runs long enough for a practitioner to lose her nerve inside it.",
                     "1.980 € es la primera cifra que en casi todas las clínicas produce una pausa de verdad, y la pausa dura lo suficiente para que a una profesional le falle el pulso dentro."),
          moment: T("You have described the six sessions and the two days of redness. She asks what the whole thing comes to. You say it, and then she says nothing at all for four seconds.",
                     "Has descrito las seis sesiones y los dos días de rojeces. Ella pregunta cuánto sale todo. Lo dices, y después se queda cuatro segundos sin decir nada."),
          weak:   {
            line: T("\"…one thousand nine hundred and eighty. Which is not nothing, I know — although it is six sessions, so per session it is really about €330.\"",
                     "«…mil novecientos ochenta. Que ya sé que no es poco, aunque son seis sesiones, así que por sesión salen unos 330 €.»"),
            cost: T("Divides the figure for a woman who has not complained about it. The division announces that you expected it to be a problem, and from that moment it is one.",
                     "Divide la cifra para una mujer que no se ha quejado de ella. La división anuncia que esperabas que fuera un problema, y desde ese momento lo es.")
          },
          strong: {
            line: T("\"One thousand nine hundred and eighty.\" — and then let the four seconds happen.",
                     "«Mil novecientos ochenta». Y después deja que pasen los cuatro segundos."),
            gain: T("The four seconds belong to her. What she says at the end of them is the real question, and with a course of six it is almost always about the redness or the calendar, both of which you can answer.",
                     "Los cuatro segundos son suyos. Lo que diga al final de ellos es la pregunta de verdad, y en un bono de seis casi siempre va de las rojeces o del calendario, y las dos tienen respuesta.")
          }
        },
        {
          name:   T("Botulinum toxin — masseters",
                     "Toxina botulínica — maseteros"),
          price:  T("€380",
                     "380 €"),
          why:    T("A small number is where the apologising habit is learned, because nothing bad ever happens when you soften a figure that was never going to frighten anybody.",
                     "Con una cifra pequeña es donde se aprende la costumbre de disculparse, porque nunca pasa nada malo por suavizar un número que no iba a asustar a nadie."),
          moment: T("She asks what it costs to have the jaw done. It is €380, and you hear yourself starting the sentence with the word \"only\".",
                     "Pregunta cuánto vale hacerse la mandíbula. Son 380 €, y te oyes a ti misma empezando la frase con la palabra «solo»."),
          weak:   {
            line: T("\"It is only €380, which for the jaw is really very reasonable compared with most places around here.\"",
                     "«Son solo 380 €, que para la mandíbula está la verdad muy bien comparado con la mayoría de sitios de por aquí.»"),
            cost: T("\"Only\" and \"very reasonable\" are both your opinion of your own price, volunteered before she had formed one. You have told her what to think about the figure, and what you told her is that it is small.",
                     "«Solo» y «muy bien» son las dos tu opinión sobre tu propio precio, ofrecida antes de que ella tuviera ninguna. Le has dicho qué pensar de la cifra, y lo que le has dicho es que es pequeña.")
          },
          strong: {
            line: T("\"€380.\" — and wait for her next question.",
                     "«380 €». Y esperas a su siguiente pregunta."),
            gain: T("A price stated flat is a price you are not arguing about. Her next sentence is almost always about the treatment rather than the money, which is the conversation you wanted in the first place.",
                     "Un precio dicho a secas es un precio sobre el que no estás discutiendo. Su siguiente frase casi siempre va del tratamiento y no del dinero, que es la conversación que querías desde el principio.")
          }
        },
        {
          name:   T("PDO threads — midface",
                     "Hilos tensores de PDO — tercio medio"),
          price:  T("€1,750",
                     "1.750 €"),
          why:    T("Threads carry a figure and a fear in the same breath, so the silence after the number is doing two jobs at once — and it is nearly always misread as being about the money.",
                     "Los hilos llevan una cifra y un miedo en el mismo aliento, así que el silencio después del número está haciendo dos trabajos a la vez, y casi siempre se lee como si fuera por el dinero."),
          moment: T("€1,750. She exhales slowly and looks at the window.",
                     "1.750 €. Suelta el aire despacio y mira hacia la ventana."),
          weak:   {
            line: T("\"I know. It is a big number. Shall I talk you through how we actually do them, so it feels less abstract?\"",
                     "«Ya lo sé. Es una cifra alta. ¿Te cuento cómo los ponemos, para que te resulte menos abstracto?»"),
            cost: T("Calls it a big number on her behalf and then fills the gap with technique. She never gets to the end of what she was building up to, which was about her mother's face and not about €1,750.",
                     "Lo llama cifra alta en su nombre y luego rellena el hueco con técnica. Ella nunca llega al final de lo que estaba cogiendo carrerilla para decir, que iba de la cara de su madre y no de los 1.750 €.")
          },
          strong: {
            line: T("\"One thousand seven hundred and fifty.\" — then nothing at all until she speaks, however long that takes.",
                     "«Mil setecientos cincuenta». Y después nada de nada hasta que hable ella, tarde lo que tarde."),
            gain: T("At this price the thing she puts into the silence is almost never arithmetic. It is a person she has seen, and that person is the brief for everything you do next.",
                     "A este precio, lo que ella mete en el silencio casi nunca son cuentas. Es alguien a quien ha visto, y ese alguien es el encargo de todo lo que hagas después.")
          }
        }
      ],
      conversation: {
        setting: T("Second consultation, fractional laser resurfacing, course of six, €1,980. Minute thirty-one, just after you have finished describing the six sessions.",
                   "Segunda consulta, láser fraccionado de rejuvenecimiento, bono de seis, 1.980 €. Minuto treinta y uno, justo al terminar de describir las seis sesiones."),
        before: [
          { who: 'client', line: T("\"So what are we talking about for the whole thing?\"",
                                    "«¿Y cuánto estamos hablando por todo?»") },
          { who: 'practitioner', line: T("\"For the six it is €1,980, which I know sounds like a lot in one go — it works out at €330 a session, and we can spread it over three months if that is easier.\"",
                                    "«Las seis son 1.980 €, que ya sé que de golpe suena a mucho: sale a 330 € la sesión y lo podemos repartir en tres meses si así se lleva mejor.»") },
          { who: 'client', line: T("\"Right. Three months.\"",
                                    "«Ya. Tres meses.»") },
          { who: 'practitioner', line: T("\"With no interest on it. And honestly, if six feels like too much to commit to, plenty of people start with three and see how they get on.\"",
                                    "«Sin intereses. Y de verdad, si seis se te hace mucho compromiso, hay mucha gente que empieza con tres y ve qué tal.»") },
          { who: 'client', line: T("\"Mm. And the redness afterwards — how long is that, sorry?\"",
                                    "«Mmm. Y las rojeces de después, ¿cuánto duran? Perdona.»") },
          { who: 'practitioner', line: T("\"Two days, three at the outside. Most people book it for a Thursday and they are fine by Monday. It really is very manageable.\"",
                                    "«Dos días, tres como mucho. La mayoría lo coge en jueves y el lunes está perfecta. Se lleva muy bien, de verdad.»") },
          { who: 'client', line: T("\"Okay. Let me look at my diary and I will come back to you.\"",
                                    "«Vale. Miro la agenda y te digo.»") }
        ],
        after: [
          { who: 'client', line: T("\"So what are we talking about for the whole thing?\"",
                                    "«¿Y cuánto estamos hablando por todo?»") },
          { who: 'practitioner', line: T("\"One thousand nine hundred and eighty.\"",
                                    "«Mil novecientos ochenta.»") },
          { who: 'client', line: T("(four seconds) \"…Right. And the redness afterwards — how long is that?\"",
                                    "(cuatro segundos) «…Ya. Y las rojeces de después, ¿cuánto duran?»") },
          { who: 'practitioner', line: T("\"Two days looking like a bad afternoon in the sun, and a third where make-up covers it. Why — what is in the diary?\"",
                                    "«Dos días con cara de tarde mala de sol y un tercero en el que el maquillaje lo tapa. ¿Por qué? ¿Qué tienes en la agenda?»") },
          { who: 'client', line: T("\"My son's communion is on the seventeenth of May.\"",
                                    "«La comunión de mi hijo es el diecisiete de mayo.»") },
          { who: 'practitioner', line: T("\"Then we are not starting in May. If we begin the first week of June you would have four of the six done before you go away in August, and the seventeenth is not in it at all.\"",
                                    "«Pues en mayo no empezamos. Si arrancamos la primera semana de junio llevarías cuatro de las seis antes de irte en agosto, y el diecisiete se queda fuera del todo.»") },
          { who: 'client', line: T("\"You would wait?\"",
                                    "«¿Esperarías?»") },
          { who: 'practitioner', line: T("\"For the seventeenth, yes. Shall I pencil the first one for the fourth of June so it exists, and you tell me by the end of the month?\"",
                                    "«Por el diecisiete, sí. ¿Te dejo la primera apuntada a lápiz el cuatro de junio, para que exista, y me dices a final de mes?»") }
        ],
        whatChanged: T("The first version was accurate and generous and it answered four questions she had not asked: whether the figure was large, whether it could be split, whether six was too many, and whether the recovery was tolerable. Every one of those answers told her that €1,980 was something you were braced for. The second version put the number down and left it alone, and the four seconds of silence produced the only question that mattered — the redness — which turned out not to be about recovery at all but about the seventeenth of May. Nothing was discounted, nothing was halved, and the plan that got booked is better than the one that was quoted, because it has her son's communion in it.",
                       "La primera versión fue exacta y generosa, y respondió a cuatro preguntas que ella no había hecho: si la cifra era alta, si se podía fraccionar, si seis eran demasiadas y si la recuperación se llevaba bien. Cada una de esas respuestas le dijo que los 1.980 € eran algo para lo que tú venías preparada. La segunda versión dejó el número encima de la mesa y lo dejó en paz, y los cuatro segundos de silencio produjeron la única pregunta que importaba —las rojeces—, que no iba de recuperación sino del diecisiete de mayo. No se rebajó nada, no se partió nada, y el plan que se reserva es mejor que el que se presupuestó, porque lleva dentro la comunión de su hijo."),
        cost: T("€1,980 not taken, and a second cost that is harder to see: she now believes that a course of six is a thing you have to be talked into, which is what she will tell the friend who asks her about it.",
                "1.980 € que no se cobran y un segundo coste más difícil de ver: ahora ella cree que un bono de seis es algo a lo que hay que convencerte, y eso es lo que le contará a la amiga que le pregunte.")
      },
      blocks: [
        { kind: 'passage',
          title: T('Five mistakes, all in the same two seconds', 'Cinco errores, todos en los mismos dos segundos'),
          body: [
            T('The five mistakes are not spread across the consultation. They all live in the seconds around the number. The preemptive apology — "it\'s €520, but…". The discount panic — she hesitates and you move first. The backup plan — "if that\'s too much, we have a smaller option". The word avalanche — ingredients, studies, testimonials, your own story. And making it about your feelings — defending, or retreating with "no pressure at all".',
              'Los cinco errores no están repartidos por la consulta. Viven todos en los segundos que rodean a la cifra. La disculpa anticipada: «son 520 €, pero…». El pánico del descuento: ella duda y tú te mueves primero. El plan alternativo: «si es demasiado, tenemos una opción más pequeña». La avalancha de palabras: ingredientes, estudios, testimonios, tu propia historia. Y hacerlo sobre tus sentimientos: defenderte, o retirarte con un «sin ninguna presión».'),
            T('The word "but" is the whole of the first mistake. It is an apology issued before she has objected, and what she takes from it is simple arithmetic: if the professional thinks this is expensive, then it is expensive. She is not being difficult when she agrees with you. She is deferring to the expert.',
              'La palabra «pero» es todo el primer error. Es una disculpa emitida antes de que ella objete, y lo que ella saca de ahí es una cuenta sencilla: si la profesional cree que esto es caro, es que es caro. No está siendo difícil cuando te da la razón: está deferiendo a la experta.'),
            T('Chapter 11 states the rule without softening it: present price with zero apology. "The investment is €4,200." No "I know it\'s…". No excuses. Then stop, and let the silence say the thing you are not allowed to say out loud — that you are confident in the recommendation and in what it costs.',
              'El Capítulo 11 enuncia la regla sin suavizarla: presenta el precio con cero disculpas. «La inversión es de 4.200 €». Sin «sé que es…». Sin excusas. Luego para, y deja que el silencio diga lo que no puedes decir en voz alta: que tienes confianza en la recomendación y en lo que cuesta.')
          ] },
        { kind: 'match',
          prompt: T('Match each line to the mistake it commits.', 'Empareja cada frase con el error que comete.'),
          left: [
            { id: 'e1', text: T('"So it\'s €520, but we do have payment options if that helps at all."', '«Son 520 €, pero tenemos formas de pago si eso ayuda».') },
            { id: 'e2', text: T('(she pauses for two seconds) "…I could probably do something on the price for you."', '(ella hace una pausa de dos segundos) «…Seguramente podría hacerte algo en el precio».') },
            { id: 'e3', text: T('"Obviously if the four is too much, there\'s a shorter version we could do instead."', '«Claro que si las cuatro es demasiado, hay una versión más corta que podríamos hacer».') },
            { id: 'e4', text: T('"…and the device is Italian, and it\'s the same protocol they use in the clinics in Milan, and I\'ve had it done myself, and honestly the results in the literature are…"', '«…y el equipo es italiano, y es el mismo protocolo que usan en las clínicas de Milán, y yo misma me lo he hecho, y de verdad que los resultados en la literatura son…»') },
            { id: 'e5', text: T('"No pressure at all from me, honestly. I hate this part of the job."', '«De mi parte, ninguna presión, de verdad. Odio esta parte del trabajo».') }
          ],
          right: [
            { id: 'apology', text: T('Preemptive apology', 'Disculpa anticipada') },
            { id: 'panic', text: T('Discount panic', 'Pánico del descuento') },
            { id: 'backup', text: T('The backup plan', 'El plan alternativo') },
            { id: 'avalanche', text: T('The word avalanche', 'La avalancha de palabras') },
            { id: 'feelings', text: T('Making it about your feelings', 'Hacerlo sobre tus sentimientos') }
          ],
          pairs: { e1: 'apology', e2: 'panic', e3: 'backup', e4: 'avalanche', e5: 'feelings' },
          why: T('e5 is the one practitioners defend hardest, because it sounds like kindness. It is not: it hands her your discomfort to manage, in a moment when she is managing her own. Every word after the number that is about you is a word she has to spend attention on instead of deciding.',
                 'La e5 es la que más defienden los profesionales, porque suena a amabilidad. No lo es: le entrega tu incomodidad para que la gestione ella, en un momento en el que está gestionando la suya. Cada palabra posterior a la cifra que trate de ti es una palabra en la que tiene que gastar atención en vez de decidir.') },
        { kind: 'spot',
          prompt: T('One turn destroyed a price moment that was working. Which one?',
                    'Una intervención destruyó un momento del precio que iba bien. ¿Cuál?'),
          lines: [
            { who: 'you', text: T('"Four sessions, one every four weeks. By the third you should see the redness you described start to settle. It will not clear the broken capillaries — those need a different device. The investment is €1,480."', '«Cuatro sesiones, una cada cuatro semanas. Para la tercera deberías notar que la rojez que me describiste empieza a calmarse. No va a eliminar las arañas vasculares: eso necesita otro equipo. La inversión es de 1.480 €».') },
            { who: 'client', text: T('(nothing — three seconds)', '(nada — tres segundos)') },
            { who: 'you', text: T('"It is a lot, I know. There\'s a three-payment option, and honestly, if four feels like too much we could always start with two and see how you get on."', '«Es mucho, lo sé. Hay una opción en tres pagos y, sinceramente, si cuatro te parece demasiado siempre podemos empezar con dos y ver qué tal».') },
            { who: 'client', text: T('"Hm. Let me have a think about it."', '«Mm. Déjame pensarlo».') },
            { who: 'you', text: T('"Of course, take all the time you need."', '«Claro, tómate el tiempo que necesites».') }
          ],
          answerIndex: 2,
          why: T('Your first turn was correct in every respect — outcome, timeline, honest limitation, number, stop. The three seconds that followed were arithmetic, not rejection; she was working out whether she could do it. Your second turn spent three mistakes in one breath: the apology ("it is a lot"), a payment plan she had not asked for, and the backup plan. Her "let me think about it" is not indecision. It is what a person says when the seller has just downgraded her own recommendation in front of her.',
                 'Tu primera intervención era correcta en todo: resultado, plazos, limitación honesta, cifra y parada. Los tres segundos siguientes eran cálculo, no rechazo: ella estaba viendo si podía. Tu segunda intervención gastó tres errores de una vez: la disculpa («es mucho»), un plan de pago que ella no había pedido y el plan alternativo. Su «déjame pensarlo» no es indecisión: es lo que dice una persona cuando la vendedora acaba de rebajar su propia recomendación delante de ella.'),
          principle: T('The silence after a number belongs to the client. The moment you fill it, it becomes yours — and so does the doubt in it.',
                       'El silencio posterior a una cifra es de la clienta. En el momento en que lo llenas, pasa a ser tuyo, y la duda que hay dentro también.') },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 14', 'The Beauty Sales Secrets — Capítulo 14'),
          quote: T('Your client can feel how you feel about your own value.',
                   'Tu clienta percibe cómo te sientes tú respecto a tu propio valor.'),
          note: T('Maria, a consultant in Spain, was excellent at listening and lost every consultation at the number: her voice dropped, she apologised, she offered the cheaper option before anyone asked. Asked what she actually felt when she said €3,000, she answered, "That it\'s a lot." For the client, or for you? "For me." Nothing about her technique was changed and the price never moved; two months later her conversion was up thirty-five per cent. Before your next big number, take thirty seconds and ask whether you believe it is fair exchange. If the answer is no, fix the belief, not the wording.',
                  'Maria, una consultora en España, escuchaba de maravilla y perdía todas las consultas en la cifra: le bajaba la voz, se disculpaba, ofrecía la opción barata antes de que nadie la pidiera. Cuando le preguntaron qué sentía de verdad al decir 3.000 €, respondió: «Que es mucho». ¿Para la clienta o para ti? «Para mí». No se cambió nada de su técnica y el precio no se movió; dos meses después su conversión había subido un treinta y cinco por ciento. Antes de tu próxima cifra grande, dedica treinta segundos a preguntarte si crees que es un intercambio justo. Si la respuesta es no, arregla la creencia, no la formulación.') },
        { kind: 'choose',
          prompt: T('You have said "The investment is €1,980" and stopped. Six seconds. She is looking at the plan on the desk, not at you. What do you do?',
                    'Has dicho «La inversión es de 1.980 €» y has parado. Seis segundos. Ella mira el plan que hay sobre la mesa, no a ti. ¿Qué haces?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Would it help if I went back through what each of the four sessions involves?"',
                       '«¿Te vendría bien que repasáramos otra vez qué incluye cada una de las cuatro sesiones?»'),
              why: T('Nothing was asked of you. You have offered more information as a way out of your own discomfort, and taken the number off the table at the exact moment she was weighing it. Six seconds of arithmetic has become four more minutes of explaining, and the decision is now further away than it was when you stopped talking.',
                     'Nadie te ha pedido nada. Has ofrecido más información como salida a tu propia incomodidad y has retirado la cifra de la mesa justo en el momento en que ella la estaba sopesando. Seis segundos de cálculo se han convertido en cuatro minutos más de explicación, y la decisión está ahora más lejos que cuando dejaste de hablar.') },
            { id: 'b', verdict: 'best',
              label: T('Nothing. Stay still, keep your posture open, and let her be the next person who speaks.',
                       'Nada. Quédate quieta, con la postura abierta, y deja que la siguiente en hablar sea ella.'),
              why: T('She is not resisting; she is calculating, and calculation is silent. The silence also says the one thing you are not allowed to say out loud — that you are confident in the recommendation and in what it costs — and it is heard exactly that way, because you were not the one who blinked.',
                     'No se está resistiendo: está calculando, y el cálculo es silencioso. El silencio además dice lo único que no puedes decir en voz alta —que tienes confianza en la recomendación y en lo que cuesta— y se oye exactamente así, porque quien no ha parpadeado has sido tú.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Honestly, no pressure at all from me — this is the part of the job I hate."',
                       '«De verdad, de mi parte ninguna presión: esta es la parte del trabajo que odio».'),
              why: T('Mistake 5. You have handed her your discomfort to manage while she was managing her own, and you have told her the recommendation was something you were uneasy about making. No client is more confident in a plan than the person who proposed it.',
                     'Error 5. Le has entregado tu incomodidad para que la gestione ella mientras gestionaba la suya, y le has dicho que la recomendación era algo que te daba apuro hacer. Ninguna clienta confía en un plan más que la persona que se lo propuso.') }
          ],
          principle: T('Mistakes 4 and 5 live in the same six seconds, and both are attempts to end them. The silence after a number is processing time, and it belongs to her.',
                       'Los errores 4 y 5 viven en los mismos seis segundos, y los dos son intentos de terminarlos. El silencio posterior a una cifra es tiempo de procesar, y es de ella.'),
          retry: {
            note: T('You filled the silence. This time she fills it herself — and what comes out is a question, not an objection.',
                    'Has llenado el silencio. Esta vez lo llena ella, y lo que sale es una pregunta, no una objeción.'),
            prompt: T('Different client, same six seconds. Beatriz looks up from the plan: "Sorry — how much was it again?"',
                      'Otra clienta, los mismos seis segundos. Beatriz levanta la vista del plan: «Perdona, ¿cuánto era?»'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"€1,980 — which across four sessions is under €500 each, and given how long the effect holds that\'s really not much a month."',
                         '«1.980 €, que repartidos en cuatro sesiones son menos de 500 € cada una y, con lo que dura el efecto, al mes no es nada».'),
                why: T('She asked for a figure and you gave her an argument. Breaking the number into portions is a legitimate reframe once she has told you the amount is the problem; offered unasked it says the whole figure makes you uncomfortable, and she hears that before she hears the arithmetic.',
                       'Te ha pedido una cifra y le has dado un argumento. Trocear la cantidad es un reencuadre legítimo cuando ella ya te ha dicho que el problema es el importe; ofrecido sin que lo pida, dice que la cifra entera te incomoda, y ella oye eso antes que las cuentas.') },
              { id: 'b', verdict: 'best',
                label: T('"€1,980 for the four sessions." And stop again.',
                         '«1.980 € las cuatro sesiones». Y vuelve a parar.'),
                why: T('A question is a question. Repeating the figure in the same words, at the same volume, with nothing added is the only evidence available in that room that the number is fixed rather than an opening position — and it hands the silence back to her intact.',
                       'Una pregunta es una pregunta. Repetir la cifra con las mismas palabras, al mismo volumen y sin añadir nada es la única prueba disponible en esa sala de que la cantidad es firme y no una posición de salida, y además le devuelve el silencio intacto.') },
              { id: 'c', verdict: 'harmful',
                label: T('"€1,980. Although — if we get you booked in this week, I can probably do something on that."',
                         '«1.980 €. Aunque, si te dejamos la cita cerrada esta semana, seguramente pueda hacerte algo».'),
                why: T('She asked you to repeat a price and you replied that the price was never firm. You have also attached a deadline to it, so whatever she decides now is a decision about the deadline rather than the treatment — and the regret afterwards will have your name on it.',
                       'Te ha pedido que repitieras un precio y le has contestado que el precio nunca fue firme. Además le has puesto un plazo, así que lo que decida ahora será una decisión sobre el plazo y no sobre el tratamiento, y el arrepentimiento posterior llevará tu nombre.') }
            ],
            principle: T('A number said twice in the same voice is a number. A number said twice in two different voices is an opening offer.',
                         'Una cifra dicha dos veces con la misma voz es una cifra. Una cifra dicha dos veces con dos voces distintas es una oferta de salida.'),
            changes: {
              axis: 'clientResponse',
              detail: T('She breaks the silence herself this time, and what comes out is a request for the figure rather than a verdict on it — "how much was it again?" — so the six seconds end without you having spent anything, and the whole test becomes whether the second telling sounds like the first.',
                        'Esta vez el silencio lo rompe ella, y lo que sale es una petición de la cifra y no un veredicto sobre ella: «perdona, ¿cuánto era?». Los seis segundos terminan sin que tú hayas gastado nada, y toda la prueba pasa a ser si la segunda vez suena igual que la primera.')
            } } },
        { kind: 'timedPause',
          prompt: T('You have said "The investment is €4,200." and stopped. Four seconds. Do not fill them.',
                    'Has dicho «La inversión es de 4.200 €» y has parado. Cuatro segundos. No los llenes.'),
          first: T('"That\'s… that\'s a lot of money."', '«Eso es… es mucho dinero».'),
          seconds: 4,
          second: T('"...I\'m not saying no. I\'ve never spent that on myself, that\'s all. I think I need to hear myself say it out loud before I can agree to it."',
                    '«...No estoy diciendo que no. Es que nunca he gastado eso en mí. Creo que necesito oírme decirlo en voz alta antes de poder aceptarlo».'),
          why: T('The first sentence is the amount, because the amount is the socially acceptable thing to name. The second sentence is the translation, and it took four seconds to arrive. Every practitioner who answers the first one answers about money — a payment plan, a discount, a justification — and the conversation never reaches the sentence that was actually about permission.',
                 'La primera frase es la cantidad, porque la cantidad es lo socialmente aceptable de nombrar. La segunda es la traducción, y tardó cuatro segundos en llegar. Todo profesional que responde a la primera responde sobre dinero —un plan de pago, un descuento, una justificación— y la conversación nunca alcanza la frase que en realidad trataba de permiso.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm6l4', n: 4, minutes: 11,
      title: T('When she is comparing', 'Cuando ella está comparando'),
      objective: T('Differentiate without defending, without matching, and without a single word against the other provider.',
                   'Diferenciar sin defenderse, sin igualar y sin una sola palabra contra el otro proveedor.'),
      provenance: {
        chapter: 14,
        principle: T('Do not compare — differentiate: you are not defending a price, you are explaining why the price is different, because they sell a package and you guide a journey.',
                     'No compares: diferencia. No estás defendiendo un precio, estás explicando por qué el precio es distinto, porque ellos venden un paquete y tú acompañas un recorrido.'),
        phase: 'recommendation',
        trustStage: 'alignment',
        standard: 5,
        duty: 4,
        toolkit: 5
      },
      depth: {
        whyItGoesWrong: T(
          'A cheaper quotation from down the road lands as an allegation of overcharging, and the reflex of somebody who does not overcharge is to prove it. Mounting a defence is what an innocent party does, and it looks like the only truthful reply on offer. The snag is that a defence swallows her premise — that these are one thing at two prices — and inside that premise only two moves remain: match the figure, or cast doubt on the other clinic. Both cost more than the booking. Michal\'s move is smaller and harder: set out in detail what your own package contains, and say not one word about theirs.',
          'Un presupuesto más barato de la calle de al lado aterriza como una acusación de cobrar de más, y el reflejo de quien no cobra de más es demostrarlo. Montar una defensa es lo que hace una parte inocente, y parece la única réplica veraz disponible. La pega es que la defensa se traga su premisa —que son una misma cosa a dos precios— y dentro de esa premisa solo quedan dos jugadas: igualar la cifra o sembrar dudas sobre la otra clínica. Las dos cuestan más que la reserva. La jugada de Michal es más pequeña y más difícil: exponer con detalle qué contiene tu propio paquete y no decir ni una palabra del suyo.'),
        sheIsThinking: T(
          'I am not trying to trap you. I hold two figures and no means of telling what separates them, and you are the only one here who could explain it. If you will not, I decide on the figures.',
          'No intento tenderte una trampa. Tengo dos cifras y ninguna manera de saber qué las separa, y tú eres la única aquí que podría explicármelo. Si no lo haces, decido por las cifras.'),
        ladder: {
          weak:    { line: T('"I would be wary of that quote — you do not really know who is operating the device for that money."',
                     '«Yo desconfiaría de ese presupuesto: no sabes en realidad quién maneja el equipo por ese dinero».'),
                     effect: T('Makes you the one who disparaged a colleague. She will repeat the line somewhere else, and it will be the only fragment of the appointment she quotes.',
                               'Te convierte en la que desacreditó a una colega. Repetirá la frase en otro sitio, y será el único fragmento de la cita que cite.') },
          average: { line: T('"Ours has more in it than theirs — the reviews between treatments, the adjustments, direct access to me."',
                     '«El nuestro lleva más que el suyo: las revisiones entre tratamientos, los ajustes, el acceso directo a mí».'),
                     effect: T('True, and the sort of reply a well-run clinic offers. It still ranges your inclusions against theirs, so she goes on comparing two packages item by item, with yours a thousand euros higher.',
                               'Cierto, y el tipo de réplica que ofrece una clínica bien llevada. Aun así alinea tus inclusiones frente a las suyas, así que ella sigue comparando dos paquetes punto por punto, con el tuyo mil euros por encima.') },
          strong:  { line: T('"May I ask what is included in theirs?" — and then: "Let me set out precisely what is in ours, and I will be completely transparent."',
                     '«¿Puedo preguntarte qué incluye el suyo?». Y después: «Déjame exponer con precisión qué incluye el nuestro, y voy a ser del todo transparente».'),
                     effect: T('The question puts the comparing back in her hands, and what follows is a description, not a defence. They sell a package; you guide a journey, and she is the one who spots the difference.',
                               'La pregunta le devuelve a ella la comparación, y lo que sigue es una descripción, no una defensa. Ellos venden un paquete; tú guías un proceso, y es ella quien detecta la diferencia.') }
        }
      },
      treatments: [
        {
          name:   T("Laser hair removal — full legs and bikini, course of six",
                     "Depilación láser — piernas enteras e ingles, bono de seis"),
          price:  T("€690 for six sessions",
                     "690 € el bono de seis sesiones"),
          why:    T("Hair removal is the most comparable thing a clinic sells: same areas, same session count, two figures. That is precisely why the description has to do all the work and the defence none of it.",
                     "La depilación es lo más comparable que vende una clínica: mismas zonas, mismo número de sesiones, dos cifras. Justo por eso la descripción tiene que hacer todo el trabajo y la defensa ninguno."),
          moment: T("She has the other clinic's message open on her phone. Same six sessions, same areas, €390.",
                     "Tiene abierto en el móvil el mensaje de la otra clínica. Las mismas seis sesiones, las mismas zonas, 390 €."),
          weak:   {
            line: T("\"For €390 you are usually looking at a different kind of machine, and you do not always know who is holding it.\"",
                     "«Por 390 € normalmente hablamos de otro tipo de máquina, y no siempre sabes quién la está manejando.»"),
            cost: T("One sentence about a colleague, and it is the sentence she repeats to her sister that evening. It also concedes her premise — that the only difference worth naming is the equipment — and on that ground you cannot win.",
                     "Una frase sobre una compañera, y es la frase que ella le repite a su hermana esa noche. Además concede la premisa —que la única diferencia que merece nombrarse es el aparato— y en ese terreno no se gana.")
          },
          strong: {
            line: T("\"May I see what theirs includes? … Right. Let me tell you exactly what is in ours, and I will not say a word about theirs.\"",
                     "«¿Me dejas ver qué incluye el suyo? … Vale. Te cuento exactamente qué lleva el nuestro y de lo suyo no digo ni una palabra.»"),
            gain: T("The question hands the comparing back to her, and what follows is a description rather than a defence. She is the one who notices that two lists are not the same list, and she is the only one entitled to.",
                     "La pregunta le devuelve a ella la comparación, y lo que viene después es una descripción y no una defensa. Es ella quien se da cuenta de que dos listas no son la misma lista, y es la única con derecho a darse cuenta.")
          }
        },
        {
          name:   T("Hyaluronic acid filler — lips, 1 ml",
                     "Relleno de ácido hialurónico — labios, 1 ml"),
          price:  T("€360 for 1 ml",
                     "360 € el mililitro"),
          why:    T("On lips the comparison is not really about money. She is trying to ask whether the cheap one is safe, and she has no acceptable way of asking that.",
                     "En labios la comparación no va realmente de dinero. Está intentando preguntar si el barato es seguro y no tiene forma aceptable de preguntarlo."),
          moment: T("\"I have seen €190 for a millilitre on Instagram. Why is it €360 here?\"",
                     "«He visto el mililitro a 190 € en Instagram. ¿Por qué aquí son 360 €?»"),
          weak:   {
            line: T("\"Because with lips you really do get what you pay for. I would not go near a €190 syringe myself, honestly.\"",
                     "«Porque en labios lo barato sale caro. Yo no me acercaría a una jeringa de 190 €, de verdad te lo digo.»"),
            cost: T("A caution delivered instead of a description, and a caution is the one thing she cannot check. She came for information about your €360 and leaves with an opinion about somebody else's €190.",
                     "Una advertencia en lugar de una descripción, y una advertencia es justo lo que ella no puede comprobar. Vino a por información sobre tus 360 € y se va con una opinión sobre los 190 € de otro.")
          },
          strong: {
            line: T("\"Fair question, and I cannot speak for them. Here, €360 is the millilitre, my assessment, and a review at three weeks — and I would rather add at the review than start big.\"",
                     "«Buena pregunta, y por ellos no puedo hablar. Aquí 360 € son el mililitro, mi valoración y una revisión a las tres semanas, y prefiero añadir en la revisión antes que empezar fuerte.»"),
            gain: T("Describes rather than defends, and gives her two items — the review and the restraint — that she can lay next to the other quotation herself. Nobody has been criticised and the difference is still visible.",
                     "Describe en lugar de defender, y le da dos cosas —la revisión y la contención— que puede poner ella misma al lado del otro presupuesto. No se ha criticado a nadie y la diferencia se sigue viendo.")
          }
        },
        {
          name:   T("Cryolipolysis — two areas",
                     "Criolipólisis — dos zonas"),
          price:  T("€680 for two areas",
                     "680 € las dos zonas"),
          why:    T("Cryolipolysis is the treatment most heavily discounted on voucher sites, so the comparison she brings is not another clinic at all — it is a coupon, and coupons cannot contain a relationship.",
                     "La criolipólisis es el tratamiento más rebajado en webs de cupones, así que la comparación que trae no es otra clínica: es un cupón, y en un cupón no cabe una relación."),
          moment: T("She has a voucher on her phone for €199 and asks whether you will match it.",
                     "Tiene un cupón en el móvil por 199 € y pregunta si se lo igualas."),
          weak:   {
            line: T("\"We cannot match that, I am afraid. Those offers are usually one small applicator and they are hoping you buy more on the day.\"",
                     "«Eso no te lo puedo igualar, lo siento. Esas ofertas suelen ser un aplicador pequeño y cuentan con que compres más ese mismo día.»"),
            cost: T("Declines and then explains the other offer to her, which is a defence wearing a description's coat. She now has a theory about the coupon and still nothing at all about your €680.",
                     "Dice que no y después le explica la oferta ajena, que es una defensa disfrazada de descripción. Ahora tiene una teoría sobre el cupón y sigue sin tener nada sobre tus 680 €.")
          },
          strong: {
            line: T("\"No, I will not match it. What €680 is here: two areas, measured and photographed before we start and again at twelve weeks, and me telling you straight at twelve weeks if I do not think a second round is worth your money.\"",
                     "«No, no te lo igualo. Lo que son 680 € aquí: dos zonas, medidas y fotografiadas antes de empezar y otra vez a las doce semanas, y yo diciéndote a las doce semanas si creo que una segunda ronda no merece tu dinero.»"),
            gain: T("Declines without apology and replaces the comparison with a description containing something a coupon cannot contain — a named moment at which you might tell her to stop spending.",
                     "Dice que no sin disculparse y sustituye la comparación por una descripción que contiene algo que un cupón no puede contener: un momento con fecha en el que quizá le digas que deje de gastar.")
          }
        }
      ],
      conversation: {
        setting: T("First consultation, laser hair removal, full legs and bikini, course of six, €690. Minute twenty-two, and she has just picked up her phone.",
                   "Primera consulta, depilación láser, piernas enteras e ingles, bono de seis, 690 €. Minuto veintidós, y acaba de coger el móvil."),
        before: [
          { who: 'client', line: T("\"I have a quote here for the same six sessions for €390. Why is yours €690?\"",
                                    "«Tengo aquí un presupuesto por las mismas seis sesiones a 390 €. ¿Por qué el tuyo son 690 €?»") },
          { who: 'practitioner', line: T("\"That is a fair question. The honest answer is that €390 for six sessions on legs and bikini is hard to do unless something is different — the machine, the number of shots, who is operating it.\"",
                                    "«Es una pregunta justa. La respuesta honesta es que 390 € por seis sesiones de piernas e ingles es difícil de hacer salvo que algo sea distinto: la máquina, el número de disparos, quién la maneja.»") },
          { who: 'client', line: T("\"It is a clinic on Bravo Murillo. They told me it is the same laser.\"",
                                    "«Es una clínica de Bravo Murillo. Me han dicho que es el mismo láser.»") },
          { who: 'practitioner', line: T("\"They may well be right about the laser. What I can tell you is that ours is serviced twice a year and I do the sessions myself rather than passing them to an auxiliary.\"",
                                    "«Puede que tengan razón con el láser. Lo que sí te puedo decir es que el nuestro se revisa dos veces al año y que las sesiones las hago yo, no las paso a una auxiliar.»") },
          { who: 'client', line: T("\"So it is €300 for you doing it instead of somebody else.\"",
                                    "«O sea, 300 € por que lo hagas tú y no otra persona.»") },
          { who: 'practitioner', line: T("\"It is more than that — the assessment, the follow-up, being able to ring me between sessions. But yes, that is part of it.\"",
                                    "«Es más que eso: la valoración, el seguimiento, poder llamarme entre sesiones. Pero sí, en parte es eso.»") },
          { who: 'client', line: T("\"Right. Thank you — let me think about it.\"",
                                    "«Ya. Gracias, me lo pienso.»") }
        ],
        after: [
          { who: 'client', line: T("\"I have a quote here for the same six sessions for €390. Why is yours €690?\"",
                                    "«Tengo aquí un presupuesto por las mismas seis sesiones a 390 €. ¿Por qué el tuyo son 690 €?»") },
          { who: 'practitioner', line: T("\"May I see it? … Six sessions, legs and bikini. On paper that is the same as ours.\"",
                                    "«¿Me dejas verlo? … Seis sesiones, piernas e ingles. Sobre el papel es lo mismo que el nuestro.»") },
          { who: 'client', line: T("\"So why is yours €690?\"",
                                    "«¿Entonces por qué el tuyo son 690 €?»") },
          { who: 'practitioner', line: T("\"I am not going to say anything about them, because I do not know them. Let me tell you what €690 is here and you put the two side by side yourself.\"",
                                    "«De ellos no voy a decir nada, porque no los conozco. Te cuento qué son 690 € aquí y pones las dos cosas una al lado de la otra tú misma.»") },
          { who: 'client', line: T("\"Go on.\"",
                                    "«Dime.»") },
          { who: 'practitioner', line: T("\"Six sessions. Before each one I look at the area and change the settings if your skin has changed, and after a summer it always has. Between sessions you have my number. And if after three I do not think the other three are worth your money, I say so and we stop there and move you onto something else, with no penalty.\"",
                                    "«Seis sesiones. Antes de cada una miro la zona y cambio los parámetros si tu piel ha cambiado, y después de un verano siempre ha cambiado. Entre sesiones tienes mi teléfono. Y si después de tres creo que las otras tres no merecen tu dinero, te lo digo, paramos ahí y te paso a otra cosa sin penalización.»") },
          { who: 'client', line: T("\"You would tell me to stop?\"",
                                    "«¿Me dirías que pare?»") },
          { who: 'practitioner', line: T("\"That is inside the €690. It is a good part of what makes it €690 and not €390. Do you want to start the first week of October?\"",
                                    "«Eso va dentro de los 690 €. Es buena parte de lo que hace que sean 690 € y no 390 €. ¿Quieres empezar la primera semana de octubre?»") }
        ],
        whatChanged: T("The first version was truthful, and every sentence in it was a defence. Because it accepted her premise — one treatment, two prices — the only moves left were to cast doubt on the other clinic or to justify the gap, and both of those reduced €300 to a question of who holds the handpiece. The second version asked to see the other quotation, which is the opposite of defensive, and then described its own without once mentioning theirs. What she is finally comparing is not two prices but two lists, and one of them contains a sentence the other cannot contain: a point at which the clinic tells her to stop paying.",
                       "La primera versión decía la verdad y cada una de sus frases era una defensa. Como aceptaba su premisa —un tratamiento, dos precios—, los únicos movimientos que quedaban eran sembrar dudas sobre la otra clínica o justificar la diferencia, y los dos reducían 300 € a quién sostiene el cabezal. La segunda versión pidió ver el otro presupuesto, que es lo contrario de ponerse a la defensiva, y después describió el propio sin nombrar el ajeno ni una vez. Lo que ella acaba comparando no son dos precios sino dos listas, y una de ellas contiene una frase que la otra no puede contener: un momento en el que la clínica le dice que deje de pagar."),
        cost: T("€690 this autumn, six more sessions next year, and one sentence about a clinic on Bravo Murillo now circulating with your name attached to it.",
                "690 € este otoño, seis sesiones más el año que viene, y una frase sobre una clínica de Bravo Murillo circulando por ahí con tu nombre pegado.")
      },
      blocks: [
        { kind: 'passage',
          title: T('Two different things, not two prices', 'Dos cosas distintas, no dos precios'),
          body: [
            T('Comparison is the translation where your instinct is most reliably wrong. The instinct is to defend your number or to undermine theirs, and both accept the premise you must refuse: that these are two versions of one product and the only variable is price.',
              'La comparación es la traducción en la que tu instinto se equivoca con más fiabilidad. El instinto es defender tu cifra o desacreditar la suya, y las dos cosas aceptan la premisa que debes rechazar: que se trata de dos versiones de un mismo producto y que la única variable es el precio.'),
            T('Orly, at a cosmetics counter, is shown a phone: the same serum, online, for less than half. She does not rush. "That\'s a smart question. I can\'t control what\'s sold online or how it\'s priced. What I can tell you is exactly what you get here." She points at the bottle — this one, fresh, recommended a hundred times. Then she points at herself: next month, when you want to know whether to keep using it, you don\'t email a website. She did not say "we\'re better". She said "here = relationship".',
              'A Orly, en un mostrador de cosmética, le enseñan un móvil: el mismo sérum, en internet, por menos de la mitad. No se precipita. «Es una buena pregunta. No puedo controlar qué se vende en internet ni a qué precio. Lo que sí puedo contarte es exactamente qué recibes aquí». Señala el frasco: este, fresco, recomendado cien veces. Después se señala a sí misma: el mes que viene, cuando quieras saber si sigues usándolo, no le escribes un correo a una web. No dijo «somos mejores». Dijo «aquí hay una relación».'),
            T('Orly was at a counter, with one bottle. The harder version is a clinic, four treatments and a thousand euros of daylight between two quotations — and there the order of what you say does as much work as the words.',
              'Orly estaba en un mostrador, con un frasco. La versión difícil es una clínica, cuatro tratamientos y mil euros de diferencia entre dos presupuestos, y ahí el orden de lo que dices trabaja tanto como las palabras.')
          ] },
        { kind: 'order',
          prompt: T('Michal, in the clinic. A client says another provider quoted her €3,200 for the same four treatments. Michal does not discount and does not say one word against them. She makes four moves. Put them in the order she made them.',
                    'Michal, en la clínica. Una clienta le dice que otro centro le ha presupuestado 3.200 € por los mismos cuatro tratamientos. Michal no rebaja y no dice ni una palabra en contra de ellos. Hace cuatro movimientos. Ponlos en el orden en que los hizo.'),
          items: [
            { id: 'lay', text: T('Lay her own out completely: an evaluation before each session, direct access between them, and a change of approach after the second if it is not working, with no penalty.',
                                 'Expone el suyo entero: una valoración antes de cada sesión, acceso directo entre ellas y un cambio de enfoque tras la segunda si no está funcionando, sin penalización.') },
            { id: 'name', text: T('Name the difference in one sentence: "They sell a package. I guide a journey."',
                                  'Nombra la diferencia en una frase: «Ellos venden un paquete. Yo acompaño un proceso».') },
            { id: 'credit', text: T('Credit the comparison without conceding the premise: "I appreciate you doing your homework."',
                                    'Reconoce la comparación sin aceptar la premisa: «Me parece muy bien que te hayas informado».') },
            { id: 'ask', text: T('Ask one clarifying question: "Can I ask what is included in their package?"',
                                 'Hace una sola pregunta aclaratoria: «¿Puedo preguntarte qué incluye su paquete?».') }
          ],
          correct: ['credit', 'ask', 'lay', 'name'],
          why: T('Credit first, because the alternative is a pause while you think, and a pause here reads as having been caught out. The question comes second and it is the move nearly everybody skips: you cannot differentiate from a package you have not heard described, and the description has to arrive in her voice — the same facts in yours are a claim about a competitor. Yours goes third and goes out whole, including the parts that sound too small to mention, because those are the parts that are genuinely not in the other quotation. The sentence goes last. Said first it is a slogan she has nothing to check against; said after two descriptions she has just heard, it is a summary of a difference she has already noticed, which is why it survives the drive home. Notice what never appears anywhere in the four: a discount, and a word against them. The €3,200 was not mentioned again.',
                 'Primero el reconocimiento, porque la alternativa es una pausa mientras piensas, y una pausa aquí se lee como que te han pillado. La pregunta va segunda y es el movimiento que casi todo el mundo se salta: no puedes diferenciarte de un paquete que no has oído describir, y la descripción tiene que llegar en su voz, porque los mismos datos en la tuya son una afirmación sobre la competencia. El tuyo va tercero y va entero, incluidas las partes que parecen demasiado pequeñas para mencionarlas, porque son justo las que de verdad no están en el otro presupuesto. La frase va la última. Dicha la primera es un eslogan sin nada con lo que contrastarla; dicha después de dos descripciones que ella acaba de oír, es el resumen de una diferencia que ya ha notado, y por eso aguanta el camino de vuelta a casa. Fíjate en lo que no aparece en ninguno de los cuatro: una rebaja y una palabra en contra de ellos. Los 3.200 € no se volvieron a mencionar.') },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 14', 'The Beauty Sales Secrets — Capítulo 14'),
          quote: T('They sell a package. I guide a journey. One is cheaper. One works better.',
                   'Ellos venden un paquete. Yo acompaño un proceso. Uno es más barato. El otro funciona mejor.'),
          note: T('Michal then adds the line that decided it: "If I think this treatment won\'t work for you, I\'ll tell you. Even if it costs me the sale." The client\'s answer was "You\'re the first clinic that ever said that." This is Ethical Duty 4, Communicate Truthfully, spoken aloud as a condition of the relationship — and it is the only claim in the whole exchange that the other clinic had not also made.',
                  'Michal añade después la frase que lo decidió: «Si creo que este tratamiento no te va a funcionar, te lo diré. Aunque me cueste la venta». La clienta respondió: «Sois la primera clínica que dice eso». Esto es el Deber Ético 4, Comunicar con Veracidad, enunciado en voz alta como condición de la relación, y es la única afirmación de todo el intercambio que la otra clínica no había hecho también.') },
        { kind: 'signal',
          name: T('Fragment — Orly at the counter, the phone comes out', 'Fragmento — Orly en el mostrador, aparece el móvil'),
          client: T('"I see this exact serum online for €160. Why is it €230 here?" — The bottle is in her left hand. The phone is in her right, screen rotated towards you. She has made no move towards the door.',
                    '«Veo este mismo sérum en internet por 160 €. ¿Por qué aquí son 230 €?» — El frasco lo tiene en la mano izquierda. El móvil, en la derecha, con la pantalla girada hacia ti. No ha hecho ademán de irse.'),
          prompt: T('Before you answer: what has she done, and what has she avoided doing?',
                    'Antes de responder: ¿qué ha hecho y qué ha evitado hacer?'),
          notice: [
            T('She put the question. A woman who had already chosen the internet version turns no screen round: she says nothing at all and walks out empty-handed.',
              'Ha planteado la duda. Una mujer que ya se ha quedado con la versión de internet no gira ninguna pantalla: no dice absolutamente nada y sale con las manos vacías.'),
            T('The bottle is still in her hand. Say what the screen may, the object she came for is being held.',
              'El frasco sigue en su mano. Diga lo que diga la pantalla, el objeto por el que vino lo tiene cogido.'),
            T('Her question rests on a premise — one object, two prices — and that premise is the only untrue part of it.',
              'Su pregunta se apoya en una premisa —un objeto, dos precios— y esa premisa es la única parte falsa de todo lo que ha dicho.'),
            T('She brought evidence, not an opinion. Meeting it with a suspicion about storage or counterfeits trades her screenshot for your word.',
              'Ha traído una prueba, no una opinión. Responderle con una sospecha sobre la conservación o las falsificaciones cambia su captura de pantalla por tu palabra.')
          ] },
        { kind: 'choose',
          prompt: T('Orly\'s moment. She turns the phone round: "I see this exact serum online for €160. Why is it €230 here?"',
                    'El momento de Orly. Ella gira el móvil: «Veo este mismo sérum en internet por 160 €. ¿Por qué aquí son 230 €?»'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Online you never know how it\'s been stored, and a lot of that stock is either counterfeit or close to expiry."',
                       '«En internet nunca sabes cómo se ha conservado, y buena parte de ese stock o es falsificación o está a punto de caducar».'),
              why: T('It may even be true, and it asks her to distrust her own research on your word alone. She came with a fact and you gave her a suspicion, so the conversation is now about the internet — a subject on which she will believe her phone over you, because her phone is not selling her anything.',
                     'Puede incluso ser verdad, y le pide que desconfíe de su propia búsqueda solo porque tú lo dices. Vino con un dato y le has dado una sospecha, así que la conversación va ahora de internet, un tema en el que creerá a su móvil antes que a ti, porque su móvil no le está vendiendo nada.') },
            { id: 'b', verdict: 'best',
              label: T('"That\'s a fair question, and I honestly can\'t control what\'s sold online or how it\'s priced. What I can tell you is exactly what you get here — this bottle, which I know is fresh, and me in a month when you want to know whether to keep going with it."',
                       '«Es una buena pregunta, y sinceramente no puedo controlar qué se vende en internet ni a qué precio. Lo que sí puedo contarte es exactamente qué recibes aquí: este frasco, que sé que está fresco, y a mí dentro de un mes, cuando quieras saber si sigues con él».'),
              why: T('You conceded the comparison instead of contesting it, which costs nothing, and then described something that genuinely is not on the website. She is no longer choosing between €160 and €230; she is choosing between a bottle and a bottle plus a person who will still be there in a month.',
                     'Has concedido la comparación en lugar de discutirla, lo que no cuesta nada, y luego has descrito algo que efectivamente no está en la web. Ya no elige entre 160 € y 230 €: elige entre un frasco y un frasco más una persona que seguirá ahí dentro de un mes.') },
            { id: 'c', verdict: 'harmful',
              label: T('"I can match it, if that helps."', '«Te lo puedo igualar, si eso ayuda».'),
              why: T('In four words you have confirmed her suspicion that the price was arbitrary, and established that the only difference between you and a website is the size of the discount you are willing to give. There is no version of you that wins that competition next time.',
                     'En cuatro palabras has confirmado su sospecha de que el precio era arbitrario y has establecido que la única diferencia entre tú y una web es el tamaño del descuento que estás dispuesta a hacer. No hay ninguna versión de ti que gane esa competición la próxima vez.') }
          ],
          principle: T('Law 3. You are not defending a price. You are describing what she gets here, and letting her notice that it is a different thing.',
                       'Ley 3. No estás defendiendo un precio. Estás describiendo qué recibe aquí, y dejando que ella note que es otra cosa.'),
          retry: {
            note: T('Differentiating is easy with her in front of you. This is the version that costs you money.',
                    'Diferenciar es fácil con ella delante. Esta es la versión que te cuesta dinero.'),
            prompt: T('Four days after a strong appointment, another woman rings: "Thanks for your time — I\'m going ahead with the other clinic. They were a thousand euros less." She is not asking you for anything. What do you say?',
                      'Cuatro días después de una cita que fue bien, otra mujer llama: «Gracias por tu tiempo; voy a hacerlo con la otra clínica. Eran mil euros menos». No te está pidiendo nada. ¿Qué dices?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"I completely understand. If anything changes, you know where we are."',
                         '«Lo entiendo perfectamente. Si algo cambia, ya sabes dónde estamos».'),
                why: T('Gracious, final, and it gives her nothing usable. You spent an hour building a judgement about her skin and then withheld all of it on her way out, which from her side reads as the judgement being part of the invoice. There is nothing in this conversation she will remember by August.',
                       'Elegante, definitivo, y no le entrega nada que pueda usar. Dedicaste una hora a formarte un criterio sobre su piel y luego te negaste a darle nada de él al salir, lo que desde su lado se lee como que el criterio formaba parte del precio. No hay nada de esta conversación que ella siga recordando llegado agosto.') },
              { id: 'b', verdict: 'best',
                label: T('"Then I hope it goes really well, and I mean that. One thing before you go: ask them what they do if, two treatments in, it is not working — whether you can switch approach, and what that costs. And however they answer, if you ever want a second pair of eyes on your photographs, ring me. No fee and no strings."',
                         '«Entonces espero de verdad que te vaya muy bien. Una cosa antes de colgar: pregúntales qué hacen si con dos tratamientos hechos la cosa no funciona, si se puede virar de enfoque y qué cuesta eso. Y respondan lo que respondan, si algún día quieres una segunda mirada sobre tus fotos, llámame. Sin coste y sin compromiso».'),
                why: T('You differentiated at the only moment where the claim can be tested, by handing over the part of it that is free. The question you gave her is the precise difference between selling a package and guiding a journey, and she will now put it to them. You have not competed on price and you have not said one word against them.',
                       'Has diferenciado en el único momento en que la afirmación se puede verificar: regalando la parte que es gratis. La pregunta que le has dado es exactamente la diferencia entre vender un paquete y acompañar un proceso, y ahora se la hará a ellos. No has competido en precio y no has dicho ni una palabra contra ellos.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Before you commit — let me see what I can do on our price."',
                         '«Antes de que te comprometas, déjame ver qué puedo hacer con nuestro precio».'),
                why: T('The number moved after she said no, which shows her what the number was. Everything you set out about the two proposals being different in kind has just been retracted in one sentence: if a thousand euros of gap can be bargained down, it was never a description of what she gets, it was a bid. She may even book — and she will bargain from the first minute every time after that.',
                       'La cifra se ha movido después de su no, lo que le dice qué era la cifra. Todo lo que expusiste sobre que las dos propuestas eran cosas de distinta naturaleza queda retirado en una frase: si mil euros de diferencia se pueden regatear, nunca fueron una descripción de lo que recibe, eran una puja. Puede incluso reservar, y a partir de ahí regateará desde el primer minuto todas las veces.') }
            ],
            principle: T('Law 3 at the point where it costs you the sale. You are not defending a price; you are describing what you provide — and the description is only credible if a client who has chosen somebody else still gets it.',
                         'La Ley 3 en el punto en el que te cuesta la venta. No estás defendiendo un precio: estás describiendo lo que ofreces, y la descripción solo es creíble si una clienta que ha elegido a otro también la recibe.'),
            changes: {
              axis: 'continuation',
              detail: T('In August she rings again. The other clinic has done two treatments, nothing has moved, and no one has re-examined her. She has the answer to the question you gave her and she has the photographs, so you begin at the examination rather than at the price.',
                        'En agosto vuelve a llamar. La otra clínica ha hecho dos tratamientos, nada se ha movido y nadie la ha vuelto a examinar. Tiene la respuesta a la pregunta que le diste y tiene las fotos, así que empezáis por la exploración y no por el precio.')
            }
          } },
        { kind: 'translate',
          prompt: T('Three comparisons. Write the differentiation — no defence, no attack, no matching. Then compare with the model.',
                    'Tres comparaciones. Escribe la diferenciación: sin defensa, sin ataque, sin igualar precios. Luego compara con el modelo.'),
          items: [
            { id: 'd1',
              client: T('"The clinic down the road quoted me €3,200 for the same four treatments."',
                        '«La clínica de al lado me ha presupuestado 3.200 € por los mismos cuatro tratamientos».'),
              model: T('"I appreciate you doing your homework. Can I ask what\'s included in theirs? — Then let me tell you exactly what\'s in ours, and I\'ll be completely transparent."',
                       '«Me parece muy bien que te hayas informado. ¿Puedo preguntarte qué incluye el suyo? Y luego te cuento exactamente qué incluye el nuestro, con total transparencia».'),
              note: T('Michal\'s move, and note that it is a question. You cannot differentiate against a package you have not heard described, and asking her to describe it makes her the one who notices the difference.',
                      'El movimiento de Michal, y fíjate en que es una pregunta. No puedes diferenciarte de un paquete que no has oído describir, y pedirle que lo describa hace que sea ella quien note la diferencia.') },
            { id: 'd2',
              client: T('"My colleague paid half this somewhere else and she says it was completely fine."',
                        '«Una compañera pagó la mitad en otro sitio y dice que estuvo perfectamente».'),
              model: T('"Then it may well have been the right thing for her. What I can tell you is what I\'d be doing for you, and why it costs what it costs."',
                       '«Entonces es muy posible que fuera lo adecuado para ella. Lo que yo te puedo contar es qué haría contigo y por qué cuesta lo que cuesta».'),
              note: T('Never argue with an absent friend\'s result — you will lose, and you will look like someone who needs to. Concede it entirely in one clause, then return the conversation to this face and this plan.',
                      'No discutas nunca el resultado de una amiga ausente: perderás, y parecerás alguien que lo necesita. Concédelo entero en una oración y devuelve la conversación a este rostro y a este plan.') },
            { id: 'd3',
              client: T('"Why would I pay more here for something with the same name on the box?"',
                        '«¿Por qué voy a pagar aquí más por algo que lleva el mismo nombre en la caja?»'),
              model: T('"You wouldn\'t, if the box were all of it. What you\'re paying the difference for is that I evaluate your skin before each session and change the plan if it isn\'t working. If you don\'t want that part, the cheaper option is genuinely the better buy."',
                       '«No lo harías, si la caja fuera todo. La diferencia la pagas porque yo valoro tu piel antes de cada sesión y cambio el plan si no está funcionando. Si esa parte no la quieres, la opción barata es realmente la mejor compra».'),
              note: T('The last sentence is the one that closes it, and it is the one that feels dangerous to say. Naming the client for whom the cheaper option is correct is what proves you are describing a difference rather than manufacturing one.',
                      'La última frase es la que lo cierra, y es la que da miedo decir. Nombrar a la clienta para quien la opción barata es la correcta es lo que demuestra que estás describiendo una diferencia y no fabricándola.') }
          ] },
        { kind: 'check',
          prompt: T('Michal adds: "If I think this treatment won\'t work for you, I\'ll tell you. Even if it costs me the sale." Why does that sentence close a gap of €1,000?',
                    'Michal añade: «Si creo que este tratamiento no te va a funcionar, te lo diré. Aunque me cueste la venta». ¿Por qué esa frase cierra una diferencia de 1.000 €?'),
          options: [
            { id: 'a', text: T('It is a guarantee, and guarantees reduce the client\'s perceived risk.', 'Es una garantía, y las garantías reducen el riesgo percibido por la clienta.') },
            { id: 'b', text: T('It puts Michal\'s own interest visibly second, once, in front of the client — the only evidence of professional judgement a client can actually verify in the room.', 'Coloca el interés de Michal visiblemente en segundo lugar, una vez, delante de la clienta: la única prueba de criterio profesional que una clienta puede verificar en la sala.') },
            { id: 'c', text: T('It implies, without saying it, that the cheaper clinic would not be honest with her.', 'Da a entender, sin decirlo, que la clínica barata no sería honesta con ella.') }
          ],
          answer: 'b',
          why: T('It is not a guarantee: nothing is promised, nothing is refunded, and no outcome is underwritten. What has happened is that she has said out loud that she will act against her own revenue when the assessment requires it — Trust Standard 3, Establish Credibility. A price can be matched by anyone. That sentence cannot, because the cheaper clinic would have to mean it.',
                 'No es una garantía: no se promete nada, no se reembolsa nada y no se avala ningún resultado. Lo que ha ocurrido es que ha dicho en voz alta que actuará contra sus propios ingresos cuando la valoración lo exija: Estándar de Confianza 3, Establecer Credibilidad. Un precio lo puede igualar cualquiera. Esa frase no, porque la clínica barata tendría que decirla en serio.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm6l5', n: 5, minutes: 10,
      title: T('The guilt moment', 'El momento de la culpa'),
      objective: T('Answer "I don\'t usually spend like this on myself" without granting permission yourself.',
                   'Responder a «no suelo gastar así en mí» sin conceder tú el permiso.'),
      provenance: {
        chapter: 14,
        principle: T('You do not tell her she is worthy — you ask her why she feels unworthy, and let her answer her own objection.',
                     'No le dices que se lo merece: le preguntas por qué siente que no se lo merece y dejas que responda ella misma a su propia objeción.'),
        phase: 'decisionSupport',
        trustStage: 'safety',
        standard: 1,
        duty: 2,
        toolkit: 6
      },
      depth: {
        whyItGoesWrong: T(
          '"I do not usually spend like this on myself" sounds like an admission of low self-worth, and the decent human reply to an admission is reassurance. Telling her she deserves it is meant generously and it is generous. It is also the wrong tool, because it disputes with her a judgement about her own value that only she can settle, and it pours encouragement onto guilt she is already carrying. If she pays after being told she deserves it, a share of that choice belongs to you, and so will the second thoughts in the car park. The counter assistant in Chapter 14 grants no permission at all. She poses a question and lets the client issue the permission herself.',
          '«No suelo gastar así en mí» suena a una confesión de poca autoestima, y la respuesta humana decente ante una confesión es tranquilizar. Decirle que se lo merece se dice con generosidad y es generoso. También es la herramienta equivocada, porque le discute un juicio sobre su propio valor que solo ella puede zanjar, y echa ánimo encima de una culpa que ya viene cargando. Si paga después de que le digan que se lo merece, una parte de esa elección es tuya, y también lo serán las dudas en el aparcamiento. La dependienta del Capítulo 14 no concede ningún permiso. Formula una pregunta y deja que sea la clienta quien emita el permiso.'),
        sheIsThinking: T(
          'Do not tell me I deserve it. If I believed that I would never have said it aloud. I want somebody to tell me it is not absurd to pay for my own face.',
          'No me digas que me lo merezco. Si me lo creyera, no lo habría dicho en voz alta. Quiero que alguien me diga que no es absurdo pagar por mi propia cara.'),
        ladder: {
          weak:    { line: T('"You deserve it — you look after everybody else all year round."',
                     '«Te lo mereces: te pasas el año entero cuidando de todos los demás».'),
                     effect: T('Debates her out of a conviction she has held for twenty years. She concedes politely in order to end the exchange, and the choice is now half yours.',
                               'La saca a base de argumentos de una convicción que lleva veinte años teniendo. Ella cede por educación para terminar el intercambio, y la elección pasa a ser medio tuya.') },
          average: { line: T('"Lots of women say precisely that. It is a very ordinary figure for a routine like this one."',
                     '«Muchísimas mujeres dicen justo eso. Es una cifra muy corriente para una rutina como esta».'),
                     effect: T('Making it ordinary is generous and it does lower the heat. It also replies about the figure when what she raised was permission, so the confession she actually made goes unanswered.',
                               'Volverlo corriente es generoso y de hecho baja la temperatura. También contesta sobre la cifra cuando lo que ella ha planteado es el permiso, así que la confesión que de verdad ha hecho se queda sin respuesta.') },
          strong:  { line: T('"When you pay for things for your house, or for your children — are you guilty then?"',
                     '«Cuando pagas cosas para tu casa, o para tus hijos, ¿te sientes culpable entonces?»'),
                     effect: T('Returns the judgement to the only person entitled to make it. She listens to herself explain why, and a conviction she talked herself into is the one that survives the car park.',
                               'Devuelve el juicio a la única persona con derecho a emitirlo. Se escucha a sí misma explicar por qué, y una convicción a la que ella sola ha llegado hablando es la que sobrevive al aparcamiento.') }
        }
      },
      treatments: [
        {
          name:   T("Chemical peel — course of four",
                     "Peeling químico — bono de cuatro sesiones"),
          price:  T("€380 for four sessions",
                     "380 € el bono de cuatro"),
          why:    T("€380 is small enough that she can plainly afford it, which makes this the cleanest demonstration available that the objection was never about money.",
                     "380 € es lo bastante poco como para que claramente pueda pagarlo, y eso lo convierte en la demostración más limpia posible de que la objeción nunca fue el dinero."),
          moment: T("She has agreed to everything. Then, with her card already out of her purse: \"I do not usually spend like this on myself.\"",
                     "Ha dicho que sí a todo. Y entonces, con la tarjeta ya fuera del monedero: «Es que yo no suelo gastarme esto en mí»."),
          weak:   {
            line: T("\"Honestly, €380 over four months is nothing — and you look after everybody else all year round.\"",
                     "«De verdad, 380 € en cuatro meses no es nada, y tú te pasas el año cuidando de todo el mundo.»"),
            cost: T("Argues her out of a conviction she has held for twenty years, using her own generosity as the evidence. She agrees politely in order to end the exchange, and half of the decision now belongs to you.",
                     "La saca a base de argumentos de una convicción que lleva veinte años teniendo, usando su propia generosidad como prueba. Ella cede por educación para terminar la conversación, y la mitad de la decisión pasa a ser tuya.")
          },
          strong: {
            line: T("\"Can I ask you something first? When you pay for things for the house — the boiler, the kids' shoes — is that spending, or is that just what things cost?\"",
                     "«¿Te puedo preguntar una cosa antes? Cuando pagas cosas de la casa —la caldera, los zapatos de los niños—, ¿eso es gastar o eso es lo que valen las cosas?»"),
            gain: T("Returns the judgement to the only person entitled to make it. She hears herself put her own face into a category she has already decided is not indulgence, and a conviction she talked herself into survives the car park.",
                     "Devuelve el juicio a la única persona con derecho a hacerlo. Se oye a sí misma meter su propia cara en una categoría que ya ha decidido que no es un capricho, y una convicción a la que llega hablando ella sobrevive al aparcamiento.")
          }
        },
        {
          name:   T("Skin boosters — course of three",
                     "Skin boosters — pauta de tres sesiones"),
          price:  T("€680 for three sessions",
                     "680 € las tres sesiones"),
          why:    T("Boosters have no visible event attached to them — no wedding, no holiday, no repair. Spending €680 on something with no occasion is the version of the guilt that is hardest for her to justify to anybody, including herself.",
                     "Los boosters no llevan asociado ningún acontecimiento visible: ni boda, ni viaje, ni arreglar nada. Gastarse 680 € en algo sin ocasión es la versión de la culpa que más le cuesta justificar ante nadie, ella incluida."),
          moment: T("She wants the three. She repeats the figure back to you twice, the second time more slowly, and then says her husband would think she had lost her mind.",
                     "Quiere las tres. Te repite la cifra dos veces, la segunda más despacio, y luego dice que su marido pensaría que se le ha ido la cabeza."),
          weak:   {
            line: T("\"He would not, I promise. Plenty of people spend this and a great deal more on their skin without thinking twice about it.\"",
                     "«Qué va, te lo digo yo. Hay muchísima gente que se gasta esto y bastante más en su piel sin pensárselo dos veces.»"),
            cost: T("Argues with a man who is not in the room, using other people's spending as evidence. She now has to defend him, and the rest of the appointment is about her marriage rather than her skin.",
                     "Discute con un hombre que no está en la sala, usando como prueba lo que se gasta otra gente. Ahora ella tiene que defenderlo a él, y el resto de la cita va de su matrimonio y no de su piel.")
          },
          strong: {
            line: T("\"Would he say it is too much money, or too much money for you?\"",
                     "«¿Él diría que es demasiado dinero, o demasiado dinero para ti?»"),
            gain: T("Separates the household budget from the permission question in seven words. The answer she gives is the one she has been arguing with herself about since the waiting room, and it is not a budget answer.",
                     "Separa el presupuesto familiar de la cuestión del permiso en siete palabras. La respuesta que da es la que lleva discutiendo consigo misma desde la sala de espera, y no es una respuesta de presupuesto.")
          }
        },
        {
          name:   T("Facial radiofrequency — course of six",
                     "Radiofrecuencia facial — bono de seis sesiones"),
          price:  T("€1,290 for six sessions",
                     "1.290 € el bono de seis"),
          why:    T("A six-session course is six afternoons taken back from other people, so here the guilt is about time as much as money — and it is the version most often answered as though it were only money.",
                     "Un bono de seis son seis tardes que le quita a otras personas, así que aquí la culpa va tanto de tiempo como de dinero, y es la versión que más veces se responde como si solo fuera dinero."),
          moment: T("\"It is not even the money, really. It is that I would have to come here six times.\"",
                     "«Si es que no es el dinero, de verdad. Es que tendría que venir aquí seis veces.»"),
          weak:   {
            line: T("\"We can do them first thing, before the clinic gets busy — most people manage it around work without too much trouble.\"",
                     "«Te las podemos poner a primera hora, antes de que se llene la clínica. Casi todo el mundo las encaja con el trabajo sin demasiado lío.»"),
            cost: T("Solves the diary problem she named, which is a real service, and leaves untouched the thing the diary problem stands for: that six deliberate afternoons for herself is more than she has taken in a decade.",
                     "Resuelve el problema de agenda que ella ha nombrado, que es un servicio real, y deja intacto aquello que ese problema representa: que seis tardes deliberadas para ella misma es más de lo que se ha cogido en diez años.")
          },
          strong: {
            line: T("\"Six afternoons is the part that feels like a lot. When did you last take six afternoons for something that was only yours?\"",
                     "«Las seis tardes es la parte que se te hace mucho. ¿Cuándo fue la última vez que te cogiste seis tardes para algo que fuera solo tuyo?»"),
            gain: T("Names the real size of what she is being asked to spend, which is not €1,290. She answers with a year, and after she has heard herself say the year, the six afternoons stop being the obstacle.",
                     "Nombra el tamaño real de lo que se le está pidiendo que gaste, que no son 1.290 €. Ella responde con un año, y después de oírse decir ese año las seis tardes dejan de ser el obstáculo.")
          }
        }
      ],
      conversation: {
        setting: T("End of a first consultation, chemical peel, course of four, €380. She has said yes to everything and her card is already in her hand.",
                   "Final de una primera consulta, peeling químico, bono de cuatro, 380 €. Ha dicho que sí a todo y ya tiene la tarjeta en la mano."),
        before: [
          { who: 'client', line: T("\"It is all fine, it is just… I do not usually spend like this on myself.\"",
                                    "«Está todo bien, es que… yo no suelo gastarme esto en mí.»") },
          { who: 'practitioner', line: T("\"You would be amazed how many women say exactly that to me. And €380 over four months really is not much for what it is — it is less than most people spend on their hair in the same time.\"",
                                    "«No te imaginas la de mujeres que me dicen exactamente eso. Y 380 € en cuatro meses no es tanto para lo que es: es menos de lo que se gasta casi todo el mundo en la peluquería en ese tiempo.»") },
          { who: 'client', line: T("\"I suppose that is true.\"",
                                    "«Visto así, sí.»") },
          { who: 'practitioner', line: T("\"And you do deserve it. You have told me you have your mother at home and the two boys — you are allowed one thing that is just yours.\"",
                                    "«Y te lo mereces. Me has contado que tienes a tu madre en casa y a los dos niños; tienes derecho a una cosa que sea solo tuya.»") },
          { who: 'client', line: T("\"You are right. You are right.\"",
                                    "«Tienes razón. Tienes razón.»") },
          { who: 'practitioner', line: T("\"So shall I put the first one in for the twelfth? It is four sessions, €380, and then we look at where we are.\"",
                                    "«¿Te pongo entonces la primera el día doce? Son cuatro sesiones, 380 €, y luego vemos cómo vamos.»") },
          { who: 'client', line: T("\"Let me just look at the month and I will call you tomorrow.\"",
                                    "«Déjame mirar el mes y te llamo mañana.»") }
        ],
        after: [
          { who: 'client', line: T("\"It is all fine, it is just… I do not usually spend like this on myself.\"",
                                    "«Está todo bien, es que… yo no suelo gastarme esto en mí.»") },
          { who: 'practitioner', line: T("\"Can I ask you something before we go any further? When you pay for things for the house — the boiler, the boys' shoes — does that feel like spending?\"",
                                    "«¿Te puedo preguntar una cosa antes de seguir? Cuando pagas cosas de la casa —la caldera, los zapatos de los niños—, ¿eso lo sientes como gastar?»") },
          { who: 'client', line: T("\"No. That is just what things cost.\"",
                                    "«No. Eso es lo que valen las cosas.»") },
          { who: 'practitioner', line: T("\"And €380 for your own face is not?\"",
                                    "«¿Y 380 € por tu propia cara no?»") },
          { who: 'client', line: T("(pause) \"…No. That feels like something else.\"",
                                    "(silencio) «…No. Eso se siente de otra manera.»") },
          { who: 'practitioner', line: T("\"What does it feel like?\"",
                                    "«¿Cómo se siente?»") },
          { who: 'client', line: T("\"Like I would be the kind of woman who spends money on her own face.\"",
                                    "«Como si fuera de esas mujeres que se gastan dinero en su propia cara.»") },
          { who: 'practitioner', line: T("\"Then that is what you are deciding, and it is not the €380. I am not going to tell you what to think about it — it is not mine to decide. I will hold the twelfth until Friday either way.\"",
                                    "«Pues eso es lo que estás decidiendo, y no son los 380 €. No te voy a decir yo qué pensar de eso; no me toca a mí. Te guardo el doce hasta el viernes, decidas lo que decidas.»") }
        ],
        whatChanged: T("The first version did three kind things and lost the room with all of them: it made the figure small, it compared her with other women, and it told her she deserved it. That last sentence is the expensive one, because it takes a judgement she has held about herself for twenty years and disputes it with a stranger's authority. She agreed, out of politeness, and then took the decision away to somewhere she could make it privately. The second version never granted permission at all. It asked one question about the boiler, and the answer she gave put her own face into a category she has already decided is not a luxury. What she decides now, she decided herself, and it is the only version of this decision that survives her husband asking what she spent.",
                       "La primera versión hizo tres cosas amables y con las tres perdió la sala: hizo pequeña la cifra, la comparó con otras mujeres y le dijo que se lo merecía. Esa última frase es la cara, porque coge un juicio que ella tiene sobre sí misma desde hace veinte años y lo discute con la autoridad de una desconocida. Ella cedió por educación y después se llevó la decisión a un sitio donde poder tomarla en privado. La segunda versión no concedió ningún permiso. Hizo una pregunta sobre la caldera, y la respuesta que dio metió su propia cara en una categoría que ella ya ha decidido que no es un lujo. Lo que decida ahora lo ha decidido ella, y es la única versión de esta decisión que sobrevive a que su marido le pregunte cuánto se ha gastado."),
        cost: T("€380 that were already agreed, and a woman who leaves believing that wanting this needed to be justified to somebody. She will not raise it again, here or anywhere.",
                "380 € que ya estaban cerrados y una mujer que se va creyendo que querer esto había que justificárselo a alguien. Ya no lo vuelve a sacar, ni aquí ni en ningún sitio.")
      },
      blocks: [
        { kind: 'passage',
          title: T('Permission is not yours to give', 'El permiso no es tuyo para darlo'),
          body: [
            T('Dana has recommended a complete routine — cleanser, toner, serum, moisturiser, sunscreen. €340. The client picks the products up, hesitates, and looks troubled. "I… I don\'t usually spend like this on myself." Nothing in that sentence is about €340. It is about permission.',
              'Dana ha recomendado una rutina completa: limpiador, tónico, sérum, hidratante y protector solar. 340 €. La clienta coge los productos, duda y se le pone cara de apuro. «Yo… no suelo gastar así en mí». Nada de esa frase trata de 340 €. Trata de permiso.'),
            T('The forbidden response is the one everybody reaches for. "You deserve it" is gas on the fire of the guilt she is already feeling, and it is worth nothing anyway, because it is issued by the person who benefits from her agreeing. Permission granted by the seller is not permission; it is a sales line she has heard before.',
              'La respuesta prohibida es la que todo el mundo usa. «Te lo mereces» es gasolina sobre el fuego de la culpa que ya siente, y además no vale nada, porque la emite la persona que se beneficia de que ella acepte. Un permiso concedido por quien vende no es permiso: es una frase de venta que ya ha oído antes.'),
            T('Dana asks instead. "When you buy things for your family — your kids\' clothes, your home, your partner\'s birthday — do you feel guilty about spending money?" "No. Not really." "So why when it\'s for you?" Then she says nothing at all, and the client answers her own objection: "Because I put myself last. Always. It feels wrong to spend on myself first."',
              'Dana, en cambio, pregunta. «Cuando compras cosas para tu familia —la ropa de tus hijos, la casa, el cumpleaños de tu pareja—, ¿te sientes culpable por gastar dinero?» «No. La verdad es que no». «¿Y por qué sí cuando es para ti?» Después no dice absolutamente nada, y la clienta responde a su propia objeción: «Porque yo me pongo la última. Siempre. Me parece mal gastar en mí primero».')
          ] },
        { kind: 'signal',
          avatar: 'dana',
          name: T('Fragment — Dana at the counter, Phase 6', 'Fragmento — Dana en el mostrador, Fase 6'),
          client: T('"I… I don\'t usually spend like this on myself." — She is holding the products. She has not asked the price of anything since you said the total, and she has not put anything down.',
                    '«Yo… no suelo gastar así en mí». — Tiene los productos en las manos. No ha preguntado el precio de nada desde que dijiste el total, y no ha dejado nada en el mostrador.'),
          prompt: T('What is this sentence, and what is it not?', '¿Qué es esta frase y qué no es?'),
          notice: [
            T('It is not a price objection. She has not asked what anything costs, has not asked for a smaller selection, and has not put a single product back.',
              'No es una objeción de precio. No ha preguntado cuánto cuesta nada, no ha pedido una selección más pequeña y no ha devuelto ni un producto.'),
            T('It is translation 3 — guilt about self-spending — and the tell is the word "usually". She is describing a habit of self-denial, not a limit on her account.',
              'Es la traducción 3 —culpa por gastar en sí misma— y la señal está en el «no suelo». Está describiendo una costumbre de privarse, no un límite de su cuenta.'),
            T('She is still holding them. In this translation, that is the whole diagnosis: she wants them, and she is waiting for something that is not a discount.',
              'Sigue teniéndolos en las manos. En esta traducción, ese es todo el diagnóstico: los quiere, y está esperando algo que no es un descuento.'),
            T('What she is waiting for is not permission from you. It is a reason to stop treating her own maintenance as a different category from her family\'s.',
              'Lo que espera no es tu permiso. Es un motivo para dejar de tratar su propio cuidado como una categoría distinta de la de su familia.')
          ] },
        { kind: 'choose',
          prompt: T('She has gone quiet, then: "Because I put myself last. Always." What now?',
                    'Se ha quedado callada y luego: «Porque yo me pongo la última. Siempre». ¿Y ahora?'),
          options: [
            { id: 'a', verdict: 'harmful',
              label: T('"And that\'s exactly why you deserve this."', '«Y por eso mismo te lo mereces».'),
              why: T('She spent something to tell you that, and you converted it into a closing line in nine words. What she learns is that a disclosure produces a sale, which is precisely the lesson that stops the next one. It also grants her the permission she was not asking you for.',
                     'Le ha costado algo decirte eso, y tú lo has convertido en una frase de cierre en nueve palabras. Lo que aprende es que una revelación produce una venta, que es justo la lección que impide la siguiente. Además le concede el permiso que no te estaba pidiendo.') },
            { id: 'b', verdict: 'best',
              label: T('"That makes sense — a lot of women were taught that looking after themselves is selfish. But this isn\'t indulgence; it\'s maintenance, the same as everything else you look after. And I\'m not here to convince you. If today is the day, good. If it isn\'t, that\'s fine too."',
                       '«Tiene sentido: a muchas mujeres nos enseñaron que cuidarse es egoísta. Pero esto no es un capricho, es mantenimiento, igual que todo lo demás que cuidas. Y no estoy aquí para convencerte. Si hoy es el día, bien. Y si no, también».'),
              why: T('Three moves, in order: the feeling is received without being fixed, the purchase is moved out of the category where the guilt lives, and the pressure is removed entirely. The last part is what makes the rest credible — a person who says "if not, that\'s fine too" and means it is the only person whose reframe she can accept.',
                     'Tres movimientos, en orden: se recibe el sentimiento sin arreglarlo, se saca la compra de la categoría donde vive la culpa y se retira la presión por completo. La última parte es lo que hace creíble el resto: una persona que dice «y si no, también» y lo dice en serio es la única persona cuyo reencuadre ella puede aceptar.') },
            { id: 'c', verdict: 'weak',
              label: T('"Let\'s make it easier then — I\'ll take the toner out and that brings it down to €270."',
                       '«Pues lo ponemos más fácil: quito el tónico y se queda en 270 €».'),
              why: T('You answered a permission sentence with arithmetic. Making the basket smaller confirms her verdict on herself — that the spending really was excessive — so she leaves with fewer products and the belief intact, which is the one thing you could have changed today.',
                     'Has respondido a una frase de permiso con aritmética. Encoger la cesta confirma el veredicto que ella tiene sobre sí misma —que el gasto sí era excesivo—, así que se va con menos productos y con la creencia intacta, que era lo único que hoy podías cambiar.') }
          ],
          principle: T('Permission is never granted by the person who benefits from the decision. Your job is to ask where the prohibition came from, and then to be quiet while she answers.',
                       'El permiso nunca lo concede quien se beneficia de la decisión. Tu trabajo es preguntar de dónde viene la prohibición y luego callarte mientras ella responde.'),
          retry: {
            note: T('That one had a counter and a number on it. Here the permission arrives before any figure has been said, and it is wearing somebody else\'s face.',
                    'Aquella tenía un mostrador y una cifra encima. Aquí el permiso llega antes de que se haya dicho ninguna cantidad, y viene con la cara de otra persona.'),
            prompt: T('Pilar, sixty-one, in the consultation room, before you have quoted anything at all: "I should tell you now — my daughter thinks this is ridiculous at my age."',
                      'Pilar, sesenta y un años, en la sala de consulta, antes de que hayas dado ninguna cifra: «Te lo digo ya: mi hija piensa que esto es una ridiculez a mi edad».'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"She\'ll change her mind when she sees you afterwards."',
                         '«Cambiará de opinión cuando te vea después».'),
                why: T('You have taken the daughter on as an opponent and promised a verdict you do not control. Pilar now has two things to be anxious about instead of one — the treatment and the conversation at home about it — and she has learned that the way to be comfortable here is not to mention her daughter again.',
                       'Has convertido a la hija en adversaria y has prometido un veredicto que no controlas. Pilar pasa a tener dos motivos de inquietud en lugar de uno —el tratamiento y la conversación en casa sobre el tratamiento— y ha aprendido que aquí se está más cómoda si no vuelve a mencionar a su hija.') },
              { id: 'b', verdict: 'best',
                label: T('"And what do you think, at your age?" — then wait.',
                         '«¿Y tú qué piensas, a tu edad?». Y esperas.'),
                why: T('It returns the question to the only person entitled to answer it, without arguing with the daughter, agreeing with her, or granting Pilar anything. What she says next is the real material of the consultation: either she has an answer she has never said out loud, or she finds out she has been using her daughter to say something of her own.',
                       'Devuelve la pregunta a la única persona con derecho a responderla, sin discutir con la hija, sin darle la razón y sin concederle nada a Pilar. Lo que diga a continuación es el material de verdad de la consulta: o tiene una respuesta que nunca ha dicho en voz alta, o descubre que ha estado usando a su hija para decir algo suyo.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Age has nothing to do with it — I see women twenty years older than you for this all the time."',
                         '«La edad no tiene nada que ver: veo aquí a mujeres veinte años mayores que tú para esto continuamente».'),
                why: T('A statistic answering a feeling. She did not ask whether other women do it; she told you that the people whose opinion she cares about think she should not. Being told her concern is irrational, by the person who profits from her ignoring it, guarantees the next honest sentence stays in her head.',
                       'Una estadística respondiendo a un sentimiento. No te ha preguntado si otras mujeres lo hacen: te ha dicho que las personas cuya opinión le importa creen que no debería. Que le digan que su preocupación es irracional, y que se lo diga quien se beneficia de que la ignore, garantiza que la siguiente frase honesta se quede dentro de su cabeza.') }
            ],
            principle: T('A permission question is answered by the person who needs the permission. Your job is to ask the question that makes her say her own answer out loud — even when the prohibition is wearing somebody else\'s face.',
                         'Una pregunta de permiso la responde quien necesita el permiso. Tu trabajo es hacer la pregunta que la lleve a decir su propia respuesta en voz alta, incluso cuando la prohibición lleva la cara de otra persona.'),
            changes: {
              axis: 'disclosure',
              detail: T('The prohibition is disclosed before any figure exists, and it is attributed to her daughter rather than to herself — so there is no price on the table to reframe and no guilt of her own yet admitted, only a borrowed verdict you have been handed to agree with.',
                        'La prohibición se enuncia antes de que exista ninguna cifra, y se atribuye a su hija y no a ella misma: no hay precio sobre la mesa que reencuadrar ni culpa propia todavía admitida, solo un veredicto prestado que te ofrecen para que lo suscribas.')
            } } },
        { kind: 'compare',
          prompt: T('Two responses to "I don\'t usually spend like this on myself". Which one does Chapter 14 require?',
                    'Dos respuestas a «no suelo gastar así en mí». ¿Cuál exige el Capítulo 14?'),
          a: { label: T('Grant the permission', 'Conceder el permiso'),
               text: T('"You should, though. You really do deserve it — you look after everyone else all year."',
                       '«Pues deberías. De verdad que te lo mereces: te pasas el año cuidando de todos los demás».') },
          b: { label: T('Ask where the prohibition came from', 'Preguntar de dónde viene la prohibición'),
               text: T('"When you buy things for your family — your kids\' clothes, your home, your partner\'s birthday — do you feel guilty about spending money? … So why when it\'s for you?"',
                       '«Cuando compras cosas para tu familia —la ropa de tus hijos, la casa, el cumpleaños de tu pareja—, ¿te sientes culpable por gastar dinero? … ¿Y por qué sí cuando es para ti?»') },
          answer: 'b',
          why: T('A is warm, it is true, and it will be politely absorbed and forgotten, because it is an opinion from an interested party. B is a question with only one honest answer, and the person who has to say it out loud is her. That is the difference between being told you are worth it and hearing yourself notice that you applied a rule to yourself you apply to nobody else.',
                 'A es cálida, es verdad, y será educadamente absorbida y olvidada, porque es la opinión de una parte interesada. B es una pregunta con una sola respuesta honesta, y quien tiene que decirla en voz alta es ella. Esa es la diferencia entre que te digan que vales y oírte a ti misma darte cuenta de que te has aplicado una norma que no aplicas a nadie más.') },
        { kind: 'reflect',
          prompt: T('When did you last say "you deserve it" to a client? Write what she did in the ten seconds afterwards.',
                    '¿Cuándo fue la última vez que le dijiste «te lo mereces» a una clienta? Escribe qué hizo ella en los diez segundos siguientes.'),
          placeholder: T('If she smiled and said nothing, that is the answer — write it down anyway.',
                         'Si sonrió y no dijo nada, esa es la respuesta: escríbela igualmente.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm6l6', n: 6, minutes: 10,
      title: T('Toolkit #5 — value before number', 'Toolkit #5 — valor antes que cifra'),
      objective: T('Build a price presentation whose limitation sits above the investment line, and commit in advance to what you will not do to close.',
                   'Construir una presentación de precio cuya limitación esté por encima de la línea de la inversión, y comprometerte de antemano con lo que no harás para cerrar.'),
      provenance: {
        chapter: [14, 11],
        principle: T('"You do not need everything — here is what you actually need" is the strongest sentence in selling: every time you name something she does not need, what you do recommend doubles in power.',
                     '«No necesitas todo; esto es lo que de verdad necesitas» es la frase más potente de la venta: cada vez que nombras algo que ella no necesita, lo que sí recomiendas duplica su fuerza.'),
        phase: 'recommendation',
        trustStage: 'alignment',
        standard: 5,
        duty: 2,
        toolkit: 5
      },
      depth: {
        whyItGoesWrong: T(
          'Naming what the treatment will not do feels like handing her a reason to refuse, so the honest limitation drifts to the end — after the number, into the aftercare sheet, into the consent form she signs at the door. The practitioner is not hiding anything; she is sequencing it kindly, keeping the difficult sentence back until the plan has had a fair hearing. But a limitation that arrives after the number reads as a caveat attached to something already sold, while the same sentence placed above the number is the evidence that you are not selling her everything. That is what makes the rest of the recommendation credible: every time you name something she does not need, what you do recommend doubles in weight.',
          'Nombrar lo que el tratamiento no va a hacer parece entregarle un motivo para negarse, así que la limitación honesta se desplaza al final: después de la cifra, a la hoja de cuidados, al consentimiento que firma en la puerta. La profesional no oculta nada; está ordenando con delicadeza, guardándose la frase difícil hasta que el plan haya tenido una oportunidad justa. Pero una limitación que llega después de la cifra se lee como una salvedad pegada a algo ya vendido, mientras que esa misma frase colocada por encima de la cifra es la prueba de que no le estás vendiendo todo. Eso es lo que hace creíble el resto de la recomendación: cada vez que nombras algo que ella no necesita, lo que sí recomiendas pesa el doble.'),
        sheIsThinking: T(
          'Everybody tells me what it will do. Nobody has ever told me what it will not do. If she names the one thing it cannot fix, I will believe her about the rest of it.',
          'Todo el mundo me cuenta lo que va a hacer. Nunca nadie me ha contado lo que no va a hacer. Si me nombra la única cosa que no puede arreglar, me creeré todo lo demás.'),
        ladder: {
          weak:    { line: T('"This is going to transform the whole area — and we can always look at the capillaries further down the line."',
                     '«Esto va a transformar toda la zona, y las arañas vasculares siempre podemos verlas más adelante».'),
                     effect: T('Promises everything and postpones the limitation. She books on a picture you cannot deliver, and session four is where she finds that out.',
                               'Promete todo y aplaza la limitación. Ella reserva con una imagen que no puedes cumplir, y la cuarta sesión es donde se entera.') },
          average: { line: T('"Four sessions, €1,480. There are a couple of things it will not touch — I will go through the consent form with you before we start."',
                     '«Cuatro sesiones, 1.480 €. Hay un par de cosas que no va a tocar; repasamos el consentimiento contigo antes de empezar».'),
                     effect: T('Honest, standard and legally sound: the limitation is delivered. It is delivered after the decision, by a document, so what she remembers is that you were confident and the paperwork was cautious.',
                               'Honesto, habitual y jurídicamente correcto: la limitación se entrega. Se entrega después de la decisión y a través de un documento, así que lo que ella recuerda es que tú estabas segura y el papeleo era prudente.') },
          strong:  { line: T('"It will settle the redness. It will not clear the broken capillaries — those need a different device, and I would rather tell you that now than in session four. Four sessions, €1,480."',
                     '«Va a calmar la rojez. No va a eliminar las arañas vasculares: eso necesita otro equipo, y prefiero decírtelo ahora y no en la cuarta sesión. Cuatro sesiones, 1.480 €».'),
                     effect: T('The limitation sits above the investment line, so the number arrives attached to a claim she can check against her own face in eight weeks.',
                               'La limitación queda por encima de la línea de la inversión, así que la cifra llega pegada a una afirmación que ella podrá comprobar en su propia cara dentro de ocho semanas.') }
        }
      },
      treatments: [
        {
          name:   T("Vascular laser — facial redness, four sessions",
                     "Láser vascular — rojeces faciales, cuatro sesiones"),
          price:  T("€1,480 for four sessions",
                     "1.480 € las cuatro sesiones"),
          why:    T("Facial redness is the condition where a client most often measures the outcome against the wrong thing, because what she sees in the mirror is one red face and what you are treating is only part of it.",
                     "Las rojeces faciales son el cuadro en el que la clienta mide el resultado contra lo que no debe con más frecuencia, porque lo que ella ve en el espejo es una cara roja y lo que tú tratas es solo una parte."),
          moment: T("She keeps touching the side of her nose while you talk. You are about to say four sessions, €1,480.",
                     "No para de tocarse el lateral de la nariz mientras hablas. Estás a punto de decir cuatro sesiones, 1.480 €."),
          weak:   {
            line: T("\"Four sessions, €1,480, and it will make a real difference to all of that. We will go through the consent form together before we start.\"",
                     "«Cuatro sesiones, 1.480 €, y a todo eso le va a venir muy bien. El consentimiento lo vemos juntas antes de empezar.»"),
            cost: T("The claim is generous, the limitation is delegated to a document, and session four is where she finds out which parts of her face you were talking about. She will not be wrong to feel misled.",
                     "La promesa es generosa, la limitación se delega en un documento, y la sesión cuatro es donde ella descubre de qué parte de su cara estabas hablando. Y no le faltará razón al sentirse engañada.")
          },
          strong: {
            line: T("\"It will settle the diffuse redness across the cheeks. The threaded vessels at the side of your nose are a different device and I am not going to touch them with this. Four sessions, €1,480.\"",
                     "«Va a calmar el rojo difuso de las mejillas. Las arañitas del lateral de la nariz son otro aparato y con esto no las voy a tocar. Cuatro sesiones, 1.480 €.»"),
            gain: T("The limitation sits above the investment line, so the number arrives attached to a claim she can check against her own face in eight weeks. Naming what you will not touch is what makes the rest of it credible.",
                     "La limitación se coloca por encima de la línea de la inversión, así que la cifra llega pegada a una afirmación que ella puede comprobar en su propia cara en ocho semanas. Nombrar lo que no vas a tocar es lo que hace creíble todo lo demás.")
          }
        },
        {
          name:   T("Microneedling — course of three, acne scarring",
                     "Microneedling — pauta de tres sesiones, marcas de acné"),
          price:  T("€540 for three sessions",
                     "540 € las tres sesiones"),
          why:    T("Acne marks are not one thing, and she does not know that. She is looking at two deep marks on her cheek and hearing you talk about texture, and unless somebody separates them she will judge €540 by the two marks.",
                     "Las marcas de acné no son una sola cosa, y ella no lo sabe. Está mirando dos marcas hundidas en la mejilla y te oye hablar de textura, y si nadie las separa juzgará los 540 € por esas dos marcas."),
          moment: T("She points at her cheek, at the two marks she has been pointing at since she was nineteen, and asks whether three sessions will be enough.",
                     "Se señala la mejilla, las dos marcas que lleva señalándose desde los diecinueve, y pregunta si con tres sesiones bastará."),
          weak:   {
            line: T("\"Three sessions, €540, and we should see a real improvement in the texture overall.\"",
                     "«Tres sesiones, 540 €, y la textura en general debería mejorar bastante.»"),
            cost: T("\"Overall\" is doing a limitation's job without being one. She will measure the result against the two marks on her cheek, because nobody told her those were not on the list.",
                     "«En general» está haciendo el trabajo de una limitación sin serlo. Ella medirá el resultado contra las dos marcas de la mejilla, porque nadie le ha dicho que esas no estaban en la lista.")
          },
          strong: {
            line: T("\"The fine texture across the cheek is what these three are for. These two deeper marks are not — with this I would not promise you anything about those. Three sessions, €540.\"",
                     "«La textura fina de la mejilla es para lo que son estas tres. Estas dos marcas más hundidas no: con esto yo no te prometería nada sobre ellas. Tres sesiones, 540 €.»"),
            gain: T("The one thing she has cared about since she was nineteen is addressed honestly before a figure is named, so the figure attaches to something true. Clients buy the sentence about the two marks, not the three sessions.",
                     "Lo único que le importa desde los diecinueve se aborda con honestidad antes de nombrar una cifra, así que la cifra se pega a algo verdadero. Las clientas compran la frase de las dos marcas, no las tres sesiones.")
          }
        },
        {
          name:   T("Botulinum toxin — upper face",
                     "Toxina botulínica — tercio superior"),
          price:  T("€320, three areas",
                     "320 €, tres zonas"),
          why:    T("Toxin is bought on a photograph she has taken of herself with her face completely still, which is the one state it has least to say about. The limitation has to be named before the number or she will find it in the mirror.",
                     "La toxina se compra sobre una foto que se ha hecho ella con la cara completamente quieta, que es justo el estado sobre el que menos tiene que decir. La limitación hay que nombrarla antes de la cifra o la encontrará ella en el espejo."),
          moment: T("She pulls her hair back, holds her face perfectly still and points at the vertical line between her brows: will this go?",
                     "Se recoge el pelo, deja la cara completamente quieta y señala la línea vertical del entrecejo: ¿esto se va?"),
          weak:   {
            line: T("\"That is exactly what we treat — three areas, €320, and you will see it soften over the first fortnight.\"",
                     "«Eso es justo lo que tratamos: tres zonas, 320 €, y a lo largo de las dos primeras semanas lo verás más suave.»"),
            cost: T("Answers the photograph she is holding with a promise about the face she is not making. In two weeks she will hold her face still again, see the line, and conclude that you told her something that was not so.",
                     "Responde a la foto que ella tiene en la mano con una promesa sobre la cara que no está poniendo. En dos semanas volverá a dejar la cara quieta, verá la línea y concluirá que le contaste algo que no era.")
          },
          strong: {
            line: T("\"I can work on the movement that deepens it. The line that is there when your face is completely still is a different conversation, and €320 does not buy that one. I would rather you knew today.\"",
                     "«Puedo trabajar sobre el movimiento que la marca más. La línea que está ahí con la cara completamente quieta es otra conversación, y 320 € no compran esa. Prefiero que lo sepas hoy.»"),
            gain: T("Puts the limit above the figure, so the figure pays for something whose edges she has been shown. It also makes you the first person who ever told her, which is what she remembers in four months when it is time to come back.",
                     "Pone el límite por encima de la cifra, así que la cifra paga por algo cuyos bordes le han enseñado. Además te convierte en la primera persona que se lo dijo, y eso es lo que recuerda dentro de cuatro meses cuando toca volver.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('Eight entries, and the order is the instrument', 'Ocho entradas, y el orden es el instrumento'),
          body: [
            T('The Price & Value Presentation Planner has eight entries: what is actually being purchased (the outcome, not the procedure), the elements included, why each element matters to THIS client, the evidence behind the expectation, the investment, the lower-cost alternative with its honest trade-off, the honest limitation stated before the number, and how she keeps the decision — what you will NOT do to close.',
              'El Planificador de Presentación de Precio y Valor tiene ocho entradas: qué se compra realmente (el resultado, no el procedimiento), los elementos incluidos, por qué cada elemento le importa a ESTA clienta, la evidencia que sostiene la expectativa, la inversión, la alternativa más económica con su contrapartida honesta, la limitación honesta enunciada antes de la cifra, y cómo conserva ella la decisión: qué NO vas a hacer para cerrar.'),
            T('Two entries are the ones practitioners quietly skip. The lower-cost alternative has to be a genuinely different route — sometimes one that does not involve you at all — because a downsell of the same thing is not an alternative, it is a discount with extra steps, and the validator refuses it. And the limitation is not a disclaimer to be read out afterwards; it is the sentence that makes the number believable, which is why it belongs above it.',
              'Dos entradas son las que los profesionales se saltan en silencio. La alternativa más económica tiene que ser una vía realmente distinta —a veces una que no pasa por ti en absoluto—, porque una versión rebajada de lo mismo no es una alternativa: es un descuento con pasos añadidos, y el validador la rechaza. Y la limitación no es una advertencia para leer después: es la frase que hace creíble la cifra, y por eso va encima de ella.'),
            T('The last entry is a commitment, not a plan, and it is written before the consultation because in the moment the discount will feel like generosity. The validator also rejects manufactured urgency outright — "today only", "if you book by Friday" — as a breach of Ethical Duty 2, Respect Autonomy. A deadline is a discount with the money taken out.',
              'La última entrada es un compromiso, no un plan, y se escribe antes de la consulta porque en el momento el descuento parecerá generosidad. El validador rechaza además de plano la urgencia fabricada —«solo hoy», «si reservas antes del viernes»— como incumplimiento del Deber Ético 2, Respetar la Autonomía. Un plazo es un descuento al que se le ha quitado el dinero.')
          ] },
        { kind: 'signal',
          name: T('Fragment — the sentence that dictates the planner', 'Fragmento — la frase que dicta el planificador'),
          client: T('"Before you tell me anything else — say it straight. What won\'t it do? Everyone tells me what it will do." — Minute eleven, and no figure has been spoken aloud by either of you.',
                    '«Antes de que me cuentes nada más, dímelo claro: ¿qué es lo que no va a hacer? Todo el mundo me cuenta lo que sí hace». — Minuto once, y ninguna cantidad se ha dicho en voz alta por ninguna de las dos.'),
          prompt: T('What has she handed you, and where does it belong in the planner?',
                    '¿Qué te ha entregado y en qué lugar del planificador va?'),
          notice: [
            T('She has requested entry 7 by name. Here the honest limitation is not a disclaimer — it is what she came in wanting and has been refused elsewhere.',
              'Ha pedido la entrada 7 por su nombre. Aquí la limitación honesta no es una advertencia legal: es lo que venía buscando y le han negado en otros sitios.'),
            T('"Everyone tells me what it will do" is a report on the appointments behind her. Every clinic before this one agreed to everything, and she is checking whether you will too.',
              '«Todo el mundo me cuenta lo que sí hace» es un informe sobre las citas que deja atrás. Todas las clínicas anteriores le dijeron que sí a todo, y está comprobando si tú harás lo mismo.'),
            T('No figure exists yet, and that is why what she asks for can still be given. The identical words spoken afterwards would shrink something she has already been asked to pay for.',
              'Todavía no existe ninguna cantidad, y por eso lo que pide todavía puede dársele. Esas mismas palabras dichas después encogerían algo por lo que ya se le ha pedido pagar.'),
            T('She has also dictated the sequence: limitation above the investment line, figure last and once. That order is hers today, not yours.',
              'Además ha dictado la secuencia: la limitación por encima de la línea de la inversión, la cantidad al final y una sola vez. Hoy ese orden es suyo, no tuyo.')
          ] },
        { kind: 'drill',
          toolkit: 5,
          prompt: T('Practice drill. This is what the client actually said, in this order. Build the planner — and be careful with the evidence field.',
                    'Ejercicio práctico. Esto es lo que dijo la clienta realmente, en este orden. Construye el planificador, y ten cuidado con el campo de evidencia.'),
          transcript: [
            T('"I want to look less tired. Not different. Less tired."', '«Quiero parecer menos cansada. No distinta. Menos cansada».'),
            T('"I did a course of something at another place, two years ago. I couldn\'t see it, honestly."', '«Me hice un ciclo de algo en otro sitio, hace dos años. Sinceramente, no lo noté».'),
            T('"They\'ve quoted me €2,800 down the road for what sounds like the same thing."', '«En la clínica de al lado me han dado 2.800 € por lo que suena igual».'),
            T('"And I should say — I\'ve never spent this kind of money on myself. Ever."', '«Y te digo una cosa: nunca he gastado este dinero en mí. Nunca».')
          ],
          fields: [
            { name: 'outcomePurchased', label: T('1. What is actually being purchased — the outcome, in her words', '1. Qué se compra realmente: el resultado, con sus palabras') },
            { name: 'evidence', label: T('4. Evidence / basis for the expectation', '4. Evidencia / base de la expectativa') },
            { name: 'limitation', label: T('7. The honest limitation, stated before the number', '7. La limitación honesta, enunciada antes de la cifra') },
            { name: 'noPressure', label: T('8. What you will NOT do to close', '8. Qué NO vas a hacer para cerrar') }
          ],
          depthCheck: [
            { key: 'outcome', label: T('Field 1 uses her words and is not a procedure name', 'El campo 1 usa sus palabras y no es el nombre de un procedimiento'), supported: true,
              note: T('"Less tired. Not different." is a complete outcome and it is already a constraint — anything that makes her look different has failed even if it works.',
                      '«Menos cansada. No distinta» es un resultado completo y ya es una restricción: cualquier cosa que la haga parecer distinta ha fracasado aunque funcione.') },
            { key: 'evidence', label: T('I can point to evidence that answers this client', 'Puedo señalar evidencia que responda a esta clienta'), supported: false,
              note: T('She told you a previous course did nothing. Generic before-and-afters answer a question she did not ask, and you have not yet asked what she was actually treated with — so you do not know whether the last attempt failed or was simply the wrong thing.',
                      'Te ha dicho que un ciclo anterior no le hizo nada. Los antes y después genéricos responden a una pregunta que ella no ha hecho, y todavía no le has preguntado qué le hicieron exactamente, así que no sabes si el intento anterior falló o sencillamente no era lo indicado.') },
            { key: 'comparison', label: T('This is a comparison objection', 'Esto es una objeción de comparación'), supported: false,
              note: T('The €2,800 is one sentence of four. The other three are a failed prior treatment (trust) and a first-ever self-spend (guilt). Matching the other clinic\'s price answers none of the three, and would leave both of the real ones untouched.',
                      'Los 2.800 € son una frase de cuatro. Las otras tres son un tratamiento anterior fallido (confianza) y un gasto en sí misma por primera vez (culpa). Igualar el precio de la otra clínica no responde a ninguna de las tres y dejaría intactas las dos reales.') },
            { key: 'limitBefore', label: T('My limitation is written above the investment line, not after it', 'Mi limitación está escrita por encima de la línea de la inversión, no después'), supported: true,
              note: T('With this client it is the load-bearing entry. She has already been disappointed once; a ceiling stated before the number is the only thing in the room that distinguishes you from whoever disappointed her.',
                      'Con esta clienta es la entrada que sostiene todo. Ya la decepcionaron una vez; un techo enunciado antes de la cifra es lo único en la sala que te distingue de quien la decepcionó.') }
          ],
          rule: T('The validator rejects an outcome field that contains a price or reads as a procedure, and rejects any time-pressure language anywhere in the planner. It cannot check the one that matters most — whether the limitation was actually spoken before the number — so that one is on you.',
                  'El validador rechaza un campo de resultado que contenga un precio o que se lea como un procedimiento, y rechaza cualquier lenguaje de urgencia en cualquier parte del planificador. Lo que no puede comprobar es lo que más importa —si la limitación se dijo de verdad antes de la cifra—, así que eso queda de tu parte.') },
        { kind: 'choose',
          prompt: T('Entry 8, written before you go in. She is quiet after the number and the room is uncomfortable. Which version holds?',
                    'La entrada 8, escrita antes de entrar. Ella está callada tras la cifra y la sala está incómoda. ¿Qué versión aguanta?'),
          options: [
            { id: 'a', verdict: 'best',
              label: T('"I will not reduce the price and I will not add anything free. If the commitment is too big, I offer two sessions with a review — at the same price per session."',
                       '«No voy a bajar el precio ni a añadir nada gratis. Si el compromiso es demasiado grande, ofrezco dos sesiones con una revisión, al mismo precio por sesión».'),
              why: T('It names both routes by which practitioners actually discount, and it pre-authorises the one legitimate move — a smaller commitment at unchanged value. Because it was written down before the discomfort existed, it is still readable when the discomfort arrives.',
                     'Nombra las dos vías por las que los profesionales rebajan de verdad, y autoriza de antemano el único movimiento legítimo: un compromiso menor con el valor intacto. Como se escribió antes de que existiera la incomodidad, sigue siendo legible cuando la incomodidad llega.') },
            { id: 'b', verdict: 'harmful',
              label: T('"I will not discount, but I can hold today\'s price for her for two weeks if she confirms by Friday."',
                       '«No voy a hacer descuento, pero le puedo mantener el precio de hoy dos semanas si confirma antes del viernes».'),
              why: T('This is manufactured urgency and the validator rejects it as a breach of Ethical Duty 2. It also does the thing you promised not to do: a deadline is a discount with the money removed, and she will decide under pressure rather than on the merits — which is the decision most likely to be regretted, and regretted at you.',
                     'Esto es urgencia fabricada y el validador la rechaza como incumplimiento del Deber Ético 2. Además hace justo lo que prometiste no hacer: un plazo es un descuento al que se le ha quitado el dinero, y ella decidirá bajo presión y no por los méritos, que es la decisión con más probabilidades de lamentarse, y de lamentarse contigo.') },
            { id: 'c', verdict: 'weak',
              label: T('"I will not discount, but I\'ll include the aftercare kit at no charge."',
                       '«No voy a hacer descuento, pero le incluyo el kit de cuidados posteriores sin coste».'),
              why: T('A free thing is a discount wearing a bow. You have told her the number contained slack, and you have also told her what the aftercare kit is worth — nothing — which is awkward, because next time you will want to sell one.',
                     'Un regalo es un descuento con lazo. Le has dicho que la cifra tenía holgura y también le has dicho cuánto vale el kit de cuidados: nada. Lo cual es incómodo, porque la próxima vez querrás vender uno.') }
          ],
          principle: T('Entry 8 exists because the moment is not the place to decide it. Write the sentence when nothing is at stake, and read it when everything is.',
                       'La entrada 8 existe porque el momento no es el lugar para decidirla. Escribe la frase cuando no hay nada en juego y léela cuando lo hay todo.'),
          retry: {
            note: T('Entry 8 is a limit on your own behaviour, and it is the easier of the two skipped fields. Here is entry 6 — and the downsell will arrive dressed as an alternative.',
                    'La entrada 8 es un límite a tu propia conducta y es el más fácil de los dos campos que se saltan. Aquí está la entrada 6, y la versión reducida llegará disfrazada de alternativa.'),
            prompt: T('Same planner, four sessions at €2,400. Entry 6 asks for the lower-cost alternative and its honest trade-off. Which version does the validator accept?',
                      'El mismo planificador, cuatro sesiones a 2.400 €. La entrada 6 pide la alternativa de menor coste con su contrapartida honesta. ¿Qué versión acepta el validador?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Two sessions instead of four, at the same price per session, and we look again after the second."',
                         '«Dos sesiones en lugar de cuatro, al mismo precio por sesión, y lo volvemos a mirar después de la segunda».'),
                why: T('This is entry 8\'s own move arriving two fields early, and it is a legitimate thing to offer her later. As an alternative it tells her nothing, because it is your route at half the length: she still does not know what else exists at a lower price, so if €2,400 is out of reach she leaves with no information and finds the answer on her phone.',
                       'Es el movimiento de la propia entrada 8 llegando dos campos antes, y más adelante es legítimo ofrecérselo. Como alternativa no le dice nada, porque es tu misma vía a mitad de recorrido: sigue sin saber qué más existe a un precio menor, así que si 2.400 € le quedan lejos se va sin información y encuentra la respuesta en el móvil.') },
              { id: 'b', verdict: 'best',
                label: T('"A prescription retinoid and a daily sunscreen, from your GP or a dermatologist — around €30 a month. It works more slowly, it will not touch the texture, and it does not need me."',
                         '«Un retinoide con receta y un protector solar diario, de tu médico de cabecera o de un dermatólogo: unos 30 € al mes. Va más despacio, no va a tocar la textura y no me necesita a mí».'),
                why: T('It is a genuinely different route with its trade-off stated, and the last clause is what makes it an alternative rather than a bargaining position — she can take it without you. That is also why it makes the €2,400 readable: she can now see what the difference actually buys, instead of being asked to trust that it buys something.',
                       'Es una vía realmente distinta con su contrapartida enunciada, y la última frase es lo que la convierte en alternativa y no en posición de negociación: puede tomarla sin ti. Por eso mismo hace legibles los 2.400 €: ahora ve qué compra de verdad la diferencia, en lugar de que se le pida confiar en que compra algo.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Honestly, at that budget the home devices you see online do something. I wouldn\'t use one myself, but plenty of people swear by them."',
                         '«Sinceramente, con ese presupuesto los aparatos caseros que se ven por internet algo hacen. Yo no usaría uno, pero mucha gente los defiende».'),
                why: T('You have named a route you do not believe in, and she will hear the first half and not the second. Entry 6 is advice you are accountable for: if she buys the device because you mentioned it, the honest limitation you were so careful to state above the number has been undone by a sentence below it.',
                       'Has nombrado una vía en la que no crees, y ella va a oír la primera mitad y no la segunda. La entrada 6 es un consejo del que respondes: si compra el aparato porque tú lo mencionaste, la limitación honesta que tanto cuidado pusiste en decir por encima de la cifra queda deshecha por una frase que va por debajo.') }
            ],
            principle: T('Entry 6 is a route, not a portion. A smaller slice of your own plan is a change of commitment; the alternative is what she should do if she never comes back here — and if you cannot name one you would stand behind, the number above it is not yet honest.',
                         'La entrada 6 es una vía, no una porción. Un trozo más pequeño de tu propio plan es un cambio de compromiso; la alternativa es lo que ella debería hacer si no vuelve nunca por aquí, y si no eres capaz de nombrar una que sostendrías, la cifra que va encima todavía no es honesta.'),
            changes: {
              axis: 'recommendation',
              detail: T('The field in hand moves from entry 8 to entry 6, so what you have to produce is no longer a limit on your own conduct but a second route she could actually take — priced, slower, and in the best version not involving this clinic at all.',
                        'El campo que tienes entre manos pasa de la entrada 8 a la entrada 6, así que lo que debes producir ya no es un límite a tu propia conducta sino una segunda vía que ella podría tomar de verdad: con su precio, más lenta y, en la mejor versión, sin esta clínica de por medio.')
            } } },
        { kind: 'check',
          prompt: T('Why must the honest limitation be spoken before the number rather than after it?',
                    '¿Por qué la limitación honesta debe decirse antes de la cifra y no después?'),
          options: [
            { id: 'a', text: T('Because it makes the number feel smaller by comparison with what she was expecting.', 'Porque hace que la cifra parezca menor en comparación con lo que ella esperaba.') },
            { id: 'b', text: T('Because a limitation after the number reads as a reason to reconsider, while the same limitation before it is the evidence the number is honest.', 'Porque una limitación después de la cifra se lee como un motivo para replantearse la decisión, mientras que esa misma limitación antes es la prueba de que la cifra es honesta.') },
            { id: 'c', text: T('Because consent documentation requires limitations to be disclosed before any figure is quoted.', 'Porque la documentación de consentimiento exige revelar las limitaciones antes de dar ninguna cifra.') }
          ],
          answer: 'b',
          why: T('Position, not content — the words are identical in both versions. Said afterwards, it lands as a retraction of something she has just been asked to pay for, and it is the commonest self-inflicted cause of "let me think about it". Said beforehand, it is the only moment in the consultation where you visibly reduced your own offer, which is Trust Standard 5, Communicate with Radical Clarity, doing work no adjective can do.',
                 'Es cuestión de posición, no de contenido: las palabras son idénticas en las dos versiones. Dicha después, aterriza como la retirada de algo por lo que se le acaba de pedir que pague, y es la causa autoinfligida más común del «déjame pensarlo». Dicha antes, es el único momento de la consulta en el que has encogido tu propia oferta a la vista de todos, que es el Estándar de Confianza 5, Comunicar con Claridad Radical, haciendo un trabajo que ningún adjetivo puede hacer.') },
        { kind: 'reflect',
          prompt: T('Write entry 8 for your highest-priced treatment, in one sentence, as you would actually have to hold it on a bad afternoon.',
                    'Escribe la entrada 8 de tu tratamiento más caro, en una frase, tal y como tendrías que sostenerla de verdad una tarde mala.'),
          placeholder: T('"I will not…" — and include the thing you have actually done before, not the thing you never do.',
                         '«No voy a…» — e incluye lo que sí has hecho alguna vez, no lo que no haces nunca.') }
      ]
    }
  ],
  apply: {
    assignment: T('In your next consultation, present the price in Toolkit #5 order — outcome, elements, why each matters to her, evidence, the honest limitation, then the number once — and write entry 8 down before you go in, so you can read it if the room goes quiet.',
                  'En tu próxima consulta, presenta el precio en el orden del Toolkit #5 —resultado, elementos, por qué cada uno le importa a ella, evidencia, la limitación honesta y luego la cifra una sola vez— y escribe la entrada 8 antes de entrar, para poder leerla si la sala se queda en silencio.'),
    prompt: T('Quote her first sentence after the number, word for word, and say which of the five translations it was. Then say whether you did the thing you had written down that you would not do.',
              'Cita su primera frase después de la cifra, palabra por palabra, y di cuál de las cinco traducciones era. Luego di si hiciste aquello que habías escrito que no harías.')
  }
};

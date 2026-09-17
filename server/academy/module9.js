/**
 * MODULE 9 — FOLLOW-UP & CONTINUATION
 * Book: Ch.16 (From Theory to Reality — the systems that create excellence):
 *       System 3, the follow-up sequence (day 3, week 2, month 1, month 3),
 *       proactive contact, the shift from one-time sale to ongoing relationship.
 *       Ch.13 (Resolve & Rise) for the decision she must stay proud of.
 * Canonical: Phase 8 Relationship Continuation (Continuation Engine); Toolkit #8;
 *            Toolkit #16 / #17 eligibility gates; MBOK Ch.6 Relationship Continuum
 *            and End Relationships Responsibly; Trust Stage 7 Confirmation;
 *            Trust Standard 6 Protect Trust After Decision; Ethical Duty 2 Respect Autonomy.
 */
const T = (en, es) => ({ en, es });

module.exports = {
  id: 'm9', n: 9,
  phase: 'continuation',
  accent: 'sage',
  title: T('Follow-up & Continuation', 'Seguimiento y Continuidad'),
  strapline: T('The contact that is care — and the sentence that stops it becoming pressure',
               'El contacto que es cuidado y la frase que impide que se convierta en presión'),
  summary: T(
    'Phase 8 is where everything you claimed earlier gets settled. This module teaches the follow-up sequence from Chapter 16 — day 3, week 2, month 1 and month 3 — and the one sentence without which none of it is follow-up at all: the stop condition. It then works the three hard cases: the DEFER that must be honoured rather than chased, the NO that has to close as a state rather than a silence, and the conversation at four weeks where the result fell short of the expectation you set. It ends in Toolkit #8, written before she leaves the room.',
    'La Fase 8 es donde se liquida todo lo que afirmaste antes. Este módulo enseña la secuencia de seguimiento del Capítulo 16 —día 3, semana 2, mes 1 y mes 3— y la única frase sin la cual nada de eso es seguimiento: la condición de cierre. Después trabaja los tres casos difíciles: el APLAZAMIENTO que se honra en lugar de perseguirse, el NO que debe cerrarse como estado y no como silencio, y la conversación de las cuatro semanas en la que el resultado se quedó por debajo de la expectativa que tú fijaste. Termina en el Toolkit #8, escrito antes de que ella salga de la sala.'),
  outcome: T('Run a follow-up sequence in which every contact has a purpose you could say out loud to the client, and state in advance the point at which it stops.',
             'Llevar una secuencia de seguimiento en la que cada contacto tenga un propósito que podrías decirle en voz alta a la clienta, y enunciar de antemano el punto en el que se detiene.'),
  source: T('The Beauty Sales Secrets — Chapter 16 (From Theory to Reality: the systems that create excellence); MIRROR Phase 8, Toolkit #8, MBOK Ch.6',
            'The Beauty Sales Secrets — Capítulo 16 (Sistemas: lo que separa la excelencia del promedio); MIRROR Fase 8, Toolkit #8, MBOK Cap.6'),
  minutes: 62,
  status: 'available',
  lessons: [
    // -----------------------------------------------------------------
    {
      id: 'm9l1', n: 1, minutes: 10,
      title: T('The three contacts', 'Los tres contactos'),
      objective: T('Run the Chapter 16 sequence with a different, statable purpose at each contact.',
                   'Ejecutar la secuencia del Capítulo 16 con un propósito distinto y enunciable en cada contacto.'),
      provenance: {
        chapter: 16,
        principle: T('The follow-up sequence — day 3, week 2, month 1 — is not pushy; it is systematic care, and it is the fastest way a one-time client becomes a returning one.',
                     'La secuencia de seguimiento —día 3, semana 2, mes 1— no es insistir: es cuidado sistemático, y es la vía más rápida para que una clienta de una vez se convierta en una clienta que vuelve.'),
        phase: 'continuation',
        trustStage: 'reliability',
        standard: 6,
        duty: 4,
        toolkit: 8
      },
      depth: {
        whyItGoesWrong: T(
          'A check-in telephone call feels to the woman dialling it like a selling call, so it gets postponed until she has an excuse the client would accept: a launch, a promotion, an empty slot on Tuesday. Holding off until you have grounds for the intrusion is a decent instinct — nobody wants to be the clinic that telephones for no purpose. The result is that every call which does get dialled carries a product inside it, which is precisely the pattern she set out to avoid, and the client learns that a ringing telephone means she is about to be asked for money. The day-three call has a purpose all of its own: it exists to establish whether week one went the way you said it would.',
          'Una llamada de seguimiento le parece una llamada de venta a la mujer que la hace, así que se pospone hasta tener una excusa que la clienta acepte: un lanzamiento, una promoción, un hueco libre el martes. Esperar a tener fundamento para la intromisión es un instinto decente: nadie quiere ser la clínica que telefonea sin objeto. El resultado es que toda llamada que sí se marca lleva un producto dentro, que es justo el patrón que ella quería evitar, y la clienta aprende que un teléfono sonando significa que le van a pedir dinero. La llamada del tercer día tiene un objeto propio: existe para establecer si la primera semana fue como dijiste que sería.'),
        sheIsThinking: T(
          'Not one shop has ever telephoned me after I paid for something. So either there is a problem, or she is about to sell me the next item.',
          'Ninguna tienda me ha telefoneado nunca después de pagar algo. Así que o hay un problema, o va a venderme el siguiente artículo.'),
        ladder: {
          weak:    { line: T('"Hello! Ringing to see how you are doing — and I wanted to mention, the eye cream is on promotion this week."',
                     '«¡Hola! Te llamo para ver cómo vas. Y quería comentarte que el contorno de ojos está de promoción esta semana».'),
                     effect: T('Fastens a sale onto the care and makes the whole call, in retrospect, about the sale. She will not pick up the following one.',
                               'Engancha una venta al cuidado y convierte la llamada entera, en retrospectiva, en la venta. No descolgará la siguiente.') },
          average: { line: T('"Hello — ringing to see how you are doing with it all."',
                     '«Hola, te llamo para ver cómo te va con todo».'),
                     effect: T('Sincerely kind, clean of any selling, and what most careful clinicians say. "It all" hands her nothing to reply to, so she replies fine, and the call harvests no fact the week-two contact could build on.',
                               'Sinceramente amable, limpia de cualquier venta y lo que dicen la mayoría de las clínicas cuidadosas. «Todo» no le da nada a lo que contestar, así que contesta que bien, y la llamada no cosecha ningún dato sobre el que pueda construir el contacto de la segunda semana.') },
          strong:  { line: T('"You are on day three, so the serum ought to be stinging less than it did those first two nights. Is it?"',
                     '«Vas por el tercer día, así que el sérum debería picar menos que esas dos primeras noches. ¿Es así?»'),
                     effect: T('Shows you retained the precise worry she left with, hands her a yes or no she can give truthfully, and harvests the one fact the month-one evaluation will be built on.',
                               'Demuestra que retuviste la preocupación exacta con la que se fue, le da un sí o un no que puede dar con verdad y cosecha el único dato sobre el que se construirá la evaluación del primer mes.') }
        }
      },
      treatments: [
        {
          name:   T("Chemical peel — medium depth, single session",
                     "Peeling químico — profundidad media, sesión única"),
          price:  T("€240 a session",
                     "240 € la sesión"),
          why:    T("Day three is the day her face is coming off in the bathroom mirror, which makes it both the most alarming point of the whole treatment and the one the clinic most often lets pass unwitnessed.",
                     "El día tres es el día en el que se le está cayendo la cara a tiras en el espejo del baño, lo que lo convierte a la vez en el punto más alarmante de todo el tratamiento y en el que la clínica deja pasar sin testigos con más frecuencia."),
          moment: T("Day three. She has not rung you, which is exactly why you ring her.",
                     "Día tres. Ella no te ha llamado, que es justo por lo que la llamas tú."),
          weak:   {
            line: T("\"Hello — just ringing to see how you are getting on after Friday. Any questions at all, you know where I am.\"",
                     "«Hola, te llamo para ver qué tal vas después del viernes. Cualquier duda, ya sabes dónde estoy.»"),
            cost: T("Sincerely kind and clean of any selling, and it hands her nothing to answer. She says fine, because fine is what you say to an open question from somebody who might be busy.",
                     "Sinceramente amable y sin una gota de venta, y no le da nada a lo que responder. Dice que bien, porque bien es lo que se contesta a una pregunta abierta de alguien que puede estar liado.")
          },
          strong: {
            line: T("\"You are on day three, so you should be flaking around the mouth and chin and nowhere else yet. Is that what is happening?\"",
                     "«Estás en el día tres, así que deberías estar descamando en la zona de la boca y la barbilla y todavía en ningún otro sitio. ¿Es lo que está pasando?»"),
            gain: T("Shows you retained which day she is on, hands her a yes or no she can answer truthfully, and harvests the one fact the week-two contact will be built on.",
                     "Demuestra que te has quedado con el día en el que está, le entrega un sí o un no que puede contestar con la verdad y recoge el único dato sobre el que se construirá el contacto de la semana dos.")
          }
        },
        {
          name:   T("Hyaluronic acid filler — lips, 1 ml",
                     "Relleno de ácido hialurónico — labios, 1 ml"),
          price:  T("€360 for 1 ml",
                     "360 € el mililitro"),
          why:    T("Day three on lips is the day she hates them, and it is the day she privately decides never to do this again — usually without telling anybody at all.",
                     "El día tres en labios es el día en que los odia, y es el día en que decide en privado no volver a hacerlo nunca, normalmente sin contárselo a nadie."),
          moment: T("Day three. She is looking in a bathroom mirror and she is not telling her husband.",
                     "Día tres. Se mira en el espejo del baño y a su marido no le dice nada."),
          weak:   {
            line: T("\"Hello! Just checking everything is alright after Tuesday. Any questions at all, I am here.\"",
                     "«¡Hola! Te escribo para ver si va todo bien después del martes. Cualquier duda, aquí estoy.»"),
            cost: T("An open door offered to a woman whose worry is that she looks ridiculous, and that is not something anyone volunteers to a professional. She says everything is fine and books nothing again.",
                     "Una puerta abierta ofrecida a una mujer cuya preocupación es parecer ridícula, y eso no se le ofrece voluntariamente a una profesional. Dice que todo va bien y no vuelve a reservar nada.")
          },
          strong: {
            line: T("\"It is Thursday, which is the day people look in the mirror and panic. Are you hating them today?\"",
                     "«Es jueves, que es el día en el que la gente se mira al espejo y le entra el pánico. ¿Hoy los odias?»"),
            gain: T("Names the feeling before she has to, and makes it ordinary. She tells the truth, and you get to say what Saturday looks like instead of hearing about all this from her friend in a year.",
                     "Nombra el sentimiento antes de que tenga que hacerlo ella y lo vuelve algo normal. Ella dice la verdad, y tú puedes contarle cómo se ve el sábado en lugar de enterarte de todo esto por una amiga suya dentro de un año.")
          }
        },
        {
          name:   T("Laser hair removal — course of six",
                     "Depilación láser — bono de seis sesiones"),
          price:  T("€690 for six sessions",
                     "690 € el bono de seis"),
          why:    T("On a course the week-two contact is not aftercare at all. It is the contact that decides whether session two happens, and nothing has gone wrong — which is precisely why nobody makes it.",
                     "En un bono el contacto de la semana dos no es posoperatorio. Es el contacto que decide si hay segunda sesión, y no ha pasado nada malo, que es justamente por lo que nadie lo hace."),
          moment: T("Two weeks after the first of six. There is no aftercare question outstanding and no problem to solve.",
                     "Dos semanas después de la primera de las seis. No hay ninguna duda de cuidados pendiente ni ningún problema que resolver."),
          weak:   {
            line: T("\"Hi — just a reminder that your second session is due. Shall I book you in?\"",
                     "«Hola, te recuerdo que te toca la segunda sesión. ¿Te la reservo?»"),
            cost: T("An administrative message, which is what an automated reminder does for nothing. She books or she does not, and no part of the relationship has moved an inch.",
                     "Un mensaje administrativo, que es lo que hace gratis un recordatorio automático. Reserva o no reserva, y la relación no se ha movido ni un centímetro.")
          },
          strong: {
            line: T("\"You are two weeks in, which is the point where people decide it is not doing anything. Before you decide that — has it felt any different when you shave?\"",
                     "«Llevas dos semanas, que es el punto en el que la gente decide que esto no está haciendo nada. Antes de que lo decidas: ¿has notado algo distinto al afeitarte?»"),
            gain: T("Puts the drop-out moment into words before she reaches it, and asks a question she can answer from her own bathroom. Whatever she says is the material the session-four conversation is built from.",
                     "Pone en palabras el momento del abandono antes de que ella llegue, y hace una pregunta que puede contestar desde su propio baño. Diga lo que diga, ese es el material con el que se construye la conversación de la cuarta sesión.")
          }
        }
      ],
      conversation: {
        setting: T("Telephone, day three after a medium-depth chemical peel, €240. She picks up expecting an administrative call.",
                   "Teléfono, día tres después de un peeling químico de profundidad media, 240 €. Ella descuelga esperando una llamada administrativa."),
        before: [
          { who: 'client', line: T("\"Oh — hello. Yes, everything is fine, thanks.\"",
                                    "«Ah, hola. Sí, todo bien, gracias.»") },
          { who: 'practitioner', line: T("\"Good, I am glad. I just wanted to check in and see how you were getting on after Friday. Any questions at all, you know where I am.\"",
                                    "«Me alegro. Solo quería saber cómo ibas después del viernes. Cualquier duda, ya sabes dónde estoy.»") },
          { who: 'client', line: T("\"No, no. All good.\"",
                                    "«No, no. Todo bien.»") },
          { who: 'practitioner', line: T("\"Perfect. And do not forget the sun protection — that is the important part this week, even if you are indoors.\"",
                                    "«Perfecto. Y no te olvides de la protección solar, que es lo importante esta semana aunque estés en casa.»") },
          { who: 'client', line: T("\"I will not. Thank you for calling, that is very kind.\"",
                                    "«Que no. Gracias por llamar, qué detalle.»") },
          { who: 'practitioner', line: T("\"Not at all. I will see you for the next one in four weeks, then.\"",
                                    "«Nada, mujer. Pues nos vemos para la siguiente dentro de cuatro semanas.»") },
          { who: 'client', line: T("\"Lovely. Bye.\"",
                                    "«Estupendo. Adiós.»") }
        ],
        after: [
          { who: 'client', line: T("\"Oh — hello. Yes, everything is fine, thanks.\"",
                                    "«Ah, hola. Sí, todo bien, gracias.»") },
          { who: 'practitioner', line: T("\"You are on day three, so you should be flaking round the mouth and chin and nowhere else yet. Is that what is happening?\"",
                                    "«Estás en el día tres, así que deberías estar descamando en la boca y la barbilla y todavía en ningún otro sitio. ¿Es lo que está pasando?»") },
          { who: 'client', line: T("\"…Actually no. It is my forehead. It is really coming off and it looks awful.\"",
                                    "«…Pues no. Es la frente. Se me está cayendo a tiras y tiene una pinta horrible.»") },
          { who: 'practitioner', line: T("\"Right. Is it sore, or just ugly?\"",
                                    "«Vale. ¿Te molesta o solo es feo?»") },
          { who: 'client', line: T("\"Just ugly. I cancelled dinner last night.\"",
                                    "«Solo feo. Anoche anulé una cena.»") },
          { who: 'practitioner', line: T("\"Day four is usually the worst of it. Leave the forehead alone, nothing acid on it until Monday, and I will ring you again on Saturday to see where you are.\"",
                                    "«El día cuatro suele ser el peor. La frente ni tocarla, nada de ácidos hasta el lunes, y el sábado te vuelvo a llamar para ver cómo vas.»") },
          { who: 'client', line: T("\"I nearly did not book the second one, honestly. I thought I had done something wrong.\"",
                                    "«Casi no reservo la segunda, te lo digo de verdad. Pensaba que había hecho algo mal.»") },
          { who: 'practitioner', line: T("\"You have not. The second one is the twenty-first, €240, same as this — and I would rather you decided about it on Saturday than today.\"",
                                    "«Qué va. La segunda es el veintiuno, 240 €, igual que esta, y prefiero que lo decidas el sábado y no hoy.»") }
        ],
        whatChanged: T("Both calls were made, both were kind, and both were free of any selling. The first one asked an open question, which is a question with no cost to answer badly, so she answered it the way anybody answers a professional who might be busy: fine. The second named the day, named the expected pattern, and asked for a yes or a no. It took eleven more seconds and it produced a woman who had cancelled a dinner, was frightened, and had privately decided not to come back. Nothing in the peel went wrong. What nearly cost the second session was a forehead nobody knew about, and an open question could never have found it.",
                       "Las dos llamadas se hicieron, las dos fueron amables y en las dos no había ni rastro de venta. La primera hizo una pregunta abierta, que es una pregunta cuya mala respuesta no cuesta nada, así que ella la contestó como se le contesta a una profesional que puede estar liada: bien. La segunda nombró el día, nombró el patrón esperado y pidió un sí o un no. Costó once segundos más y produjo a una mujer que había anulado una cena, estaba asustada y había decidido en privado no volver. En el peeling no salió nada mal. Lo que estuvo a punto de costar la segunda sesión fue una frente de la que nadie sabía nada, y una pregunta abierta jamás la habría encontrado."),
        cost: T("€240 for the second session, the four after it, and a woman who will tell anybody who asks that peels are not for her — which is not what happened, and nobody will ever correct it.",
                "240 € de la segunda sesión, las cuatro siguientes y una mujer que le contará a quien pregunte que los peelings no son para ella, que no es lo que pasó y que ya no lo va a corregir nadie.")
      },
      blocks: [
        { kind: 'passage',
          title: T('Same client, four different jobs', 'La misma clienta, cuatro trabajos distintos'),
          body: [
            T('Chapter 16 gives the sequence in one line each: day of treatment, day 3, week 2, month 1, month 3. What it does not say — and what practitioners lose within a fortnight of reading it — is that the dates are the least important part. Four contacts on the right dates with the same purpose is one contact repeated four times, and she will read it as four requests.',
              'El Capítulo 16 da la secuencia en una línea cada una: el día del tratamiento, el día 3, la semana 2, el mes 1 y el mes 3. Lo que no dice —y lo que los profesionales pierden a las dos semanas de leerlo— es que las fechas son lo menos importante. Cuatro contactos en las fechas correctas con el mismo propósito son un solo contacto repetido cuatro veces, y ella lo leerá como cuatro peticiones.'),
            T('Day 3 exists because that is when doubt is highest and information is lowest: the treatment has stopped feeling new and has not started looking like anything. Week 2 exists because that is when the part that depends on her — the protocol, the routine, the SPF — has either started or quietly not. Month 1 is the evaluation against the expectation you set in Phase 5. Month 3 is a decision, made once and out loud: continue as it is, or evolve.',
              'El día 3 existe porque es cuando la duda está más alta y la información más baja: el tratamiento ha dejado de parecer nuevo y aún no ha empezado a parecer nada. La semana 2 existe porque es cuando la parte que depende de ella —el protocolo, la rutina, la protección solar— ha empezado o, en silencio, no. El mes 1 es la evaluación frente a la expectativa que fijaste en la Fase 5. El mes 3 es una decisión, tomada una vez y en voz alta: seguir igual o evolucionar.'),
            T('The test of any one of them is brutal and simple: if she never replies, did the contact still do its job? A day-3 message that tells her the flaking is expected has worked before she reads it. A day-3 message that asks how she is getting on has not started working until she answers, which means it is a request, not care.',
              'La prueba de cualquiera de ellos es brutal y sencilla: si ella no responde nunca, ¿el contacto ha hecho igualmente su trabajo? Un mensaje del día 3 que le dice que la descamación es esperable ya ha funcionado antes de que lo lea. Un mensaje del día 3 que pregunta qué tal va no empieza a funcionar hasta que ella contesta, y eso lo convierte en una petición, no en cuidado.')
          ],
          diagram: 'follow-up' },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 16', 'The Beauty Sales Secrets — Capítulo 16'),
          quote: T('This isn\'t pushy. It\'s systematic care — and the system is what makes it survive a bad week.',
                   'Esto no es insistir. Es cuidado sistemático, y el sistema es lo que hace que sobreviva a una mala semana.'),
          note: T('The Continuation Engine turns that sentence into structure. Toolkit #8 will not accept a row until timing, purpose, channel and owner are all filled, precisely because good intentions are the part of follow-up that fails on the day the clinic is busy.',
                  'El Motor de Continuidad convierte esa frase en estructura. El Toolkit #8 no acepta una fila hasta que el momento, el propósito, el canal y el responsable estén todos rellenos, justamente porque la buena intención es la parte del seguimiento que falla el día que la clínica va llena.') },
        { kind: 'signal',
          name: T('Fragment — Sofía, day three, 21:40', 'Fragmento — Sofía, día tres, 21:40'),
          client: T('"Sorry to write so late. Is it meant to be flaking like this? It looks worse than before I came in. I didn\'t want to be a nuisance but I\'ve been staring at it all evening."',
                    '«Perdona que escriba tan tarde. ¿Se supone que tiene que descamarse así? Se ve peor que antes de venir. No quería dar la lata, pero llevo toda la tarde mirándomelo».'),
          prompt: T('What does this tell you about the sequence — and about the message you never sent?',
                    '¿Qué te dice esto sobre la secuencia y sobre el mensaje que no llegaste a enviar?'),
          notice: [
            T('The hour. Third-day doubt does not arrive during clinic hours, which is why the message is diarised in advance instead of written in response to something.',
              'La hora. La duda del tercer día no llega en horario de clínica, y por eso el mensaje se agenda de antemano en vez de escribirse como reacción a algo.'),
            T('"I didn\'t want to be a nuisance." She sat with it for an evening first. Every woman who writes nothing is this same woman without the nerve, and she is the one who abandons the protocol.',
              '«No quería dar la lata». Primero se lo ha estado tragando toda la tarde. Cada mujer que no escribe nada es esta misma mujer sin el atrevimiento, y es la que abandona el protocolo.'),
            T('She wants facts, not comfort. Two lines sent that morning would have settled it at no cost to her dignity.',
              'Quiere datos, no consuelo. Dos líneas enviadas esa mañana lo habrían zanjado sin coste alguno para su dignidad.'),
            T('Nothing here concerns an appointment, and nothing in your answer has to either.',
              'Aquí nada tiene que ver con una cita, y tu respuesta tampoco tiene por qué.')
          ] },
        { kind: 'match',
          prompt: T('Match each contact in the sequence to the job it is doing.',
                    'Empareja cada contacto de la secuencia con el trabajo que hace.'),
          left: [
            { id: 'c0', text: T('Same day: "It\'s all booked — session one on the 4th, and I\'ve sent you the pre-treatment note and the SPF protocol."',
                                'El mismo día: «Ya está todo reservado: la primera sesión el día 4, y te he enviado la nota previa al tratamiento y el protocolo de protección solar».') },
            { id: 'c3', text: T('Day 3: "Around day three the flaking usually starts. It\'s expected, and it settles by about day five."',
                                'Día 3: «Sobre el tercer día suele empezar la descamación. Es esperable y se calma hacia el quinto».') },
            { id: 'c14', text: T('Week 2: "I was thinking about you — have you actually managed to get the SPF started?"',
                                 'Semana 2: «Me acordaba de ti: ¿has conseguido empezar de verdad con la protección solar?»') },
            { id: 'c30', text: T('Month 1: "Time to look at this properly. Is it doing what you wanted it to do?"',
                                 'Mes 1: «Toca mirarlo en serio. ¿Está haciendo lo que tú querías que hiciera?»') },
            { id: 'c90', text: T('Month 3: "Three months in. Continue as it is, or change something?"',
                                 'Mes 3: «Tres meses. ¿Seguimos igual o cambiamos algo?»') }
          ],
          right: [
            { id: 'deliver', text: T('Deliver what was agreed, so nothing depends on her memory',
                                     'Entregar lo acordado, para que nada dependa de su memoria') },
            { id: 'reassure', text: T('Carry her through the point where doubt is highest and information is lowest',
                                      'Acompañarla en el punto donde la duda está más alta y la información más baja') },
            { id: 'adherence', text: T('Find out whether the part that depends on her has actually started',
                                       'Averiguar si la parte que depende de ella ha empezado realmente') },
            { id: 'evaluate', text: T('Measure the result against the expectation you set, in her words',
                                      'Medir el resultado frente a la expectativa que fijaste, con sus palabras') },
            { id: 'decide', text: T('A decision, made once and out loud: continue or evolve',
                                    'Una decisión, tomada una vez y en voz alta: seguir o evolucionar') }
          ],
          pairs: { c0: 'deliver', c3: 'reassure', c14: 'adherence', c30: 'evaluate', c90: 'decide' },
          why: T('Read the five purposes as a column. Not one of them is "keep in touch", and not one of them needs her to buy anything for the contact to have worked — that is the entire difference between the Chapter 16 sequence and a marketing calendar with the same dates on it. Week 2 is the row practitioners drop first, because it is the only one that asks her to account for something. Drop it and month 1 has nothing to measure: you will be evaluating a protocol she never started.',
                 'Lee los cinco propósitos como una columna. Ninguno es «mantener el contacto» y ninguno necesita que ella compre nada para que el contacto haya funcionado: esa es toda la diferencia entre la secuencia del Capítulo 16 y un calendario de marketing con las mismas fechas. La semana 2 es la fila que los profesionales eliminan primero, porque es la única que le pide rendir cuentas de algo. Elimínala y el mes 1 no tendrá nada que medir: estarás evaluando un protocolo que ella nunca empezó.') },
        { kind: 'choose',
          prompt: T('Day 3 after Sofía\'s first session. Which message do you send?',
                    'Día 3 tras la primera sesión de Sofía. ¿Qué mensaje envías?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Hi Sofía! Just checking you\'re happy with everything. Let me know when you\'d like to book session two."',
                       '«¡Hola, Sofía! Solo quería saber si estás contenta con todo. Dime cuándo quieres reservar la segunda sesión».'),
              why: T('Two sentences, and the second one tells her what the first was for. She will answer "all good, thanks" — the reply that ends the conversation — and she will file the message as a booking request. You have spent the day-3 contact and learned nothing.',
                     'Dos frases, y la segunda le dice para qué era la primera. Responderá «todo bien, gracias» —la respuesta que cierra la conversación— y archivará el mensaje como una petición de cita. Has gastado el contacto del día 3 y no has aprendido nada.') },
            { id: 'b', verdict: 'best',
              label: T('"Hi Sofía — day three is usually when the flaking starts, and it\'s the bit people worry about. It\'s expected and it settles around day five. Keep the SPF on it. Nothing needed from you; I\'m here if anything looks different."',
                       '«Hola, Sofía: el tercer día suele ser cuando empieza la descamación, y es la parte que preocupa a la gente. Es esperable y se calma hacia el quinto. Mantén la protección solar. No necesito nada de ti; estoy aquí si ves algo distinto».'),
              why: T('It delivers the information at the exact hour she needs it, it names the worry before she has to admit to it, and the last line removes the obligation to reply. It has already worked if she reads it and does nothing — which is the only definition of follow-up the method accepts.',
                     'Entrega la información justo a la hora en que la necesita, nombra la preocupación antes de que ella tenga que reconocerla, y la última frase retira la obligación de responder. Ya ha funcionado si lo lee y no hace nada, que es la única definición de seguimiento que el método acepta.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Hi Sofía, how are you finding it? We\'ve got 15% off second sessions until Friday if you want to secure yours."',
                       '«Hola, Sofía, ¿qué tal lo llevas? Tenemos un 15 % en segundas sesiones hasta el viernes por si quieres asegurar la tuya».'),
              why: T('You attached a deadline to a care contact on the day she is least able to judge her own result. She will not remember the discount; she will remember that the check-in had a price on it, and every subsequent message in the sequence now arrives pre-discounted in her mind.',
                     'Has puesto una fecha límite a un contacto de cuidado el día en que ella menos puede juzgar su propio resultado. No recordará el descuento: recordará que el interés llevaba precio, y todos los mensajes siguientes de la secuencia llegarán ya rebajados en su cabeza.') }
          ],
          principle: T('A follow-up message is only follow-up if it still did its job when she never replies.',
                       'Un mensaje de seguimiento solo es seguimiento si ha hecho su trabajo aunque ella no responda nunca.'),
          retry: {
            note: T('Day 3 hands something over. Week 2 has to extract something, which is why it is the row that disappears first.',
                    'El día 3 entrega algo. La semana 2 tiene que extraer algo, y por eso es la fila que desaparece primero.'),
            prompt: T('Week 2, another client. Nieves has a daily SPF protocol, and she has twice begun one and abandoned it. What do you send?',
                      'Semana 2, otra clienta. Nieves tiene un protocolo diario de protección solar y ya ha empezado uno dos veces y lo ha abandonado. ¿Qué le envías?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Hi Nieves, hope you\'re well! Just checking in — is everything going okay?"',
                         '«¡Hola, Nieves, espero que estés bien! Solo quería saber si va todo bien».'),
                why: T('There is exactly one socially available reply, and it is "all good, thanks". The week-2 row has been spent without extracting the fact it exists for.',
                       'Solo hay una respuesta socialmente disponible y es «todo bien, gracias». La fila de la semana 2 se ha gastado sin extraer el dato para el que existe.') },
              { id: 'b', verdict: 'best',
                label: T('"Hi Nieves — two weeks in, and the SPF is the part that decides the result. It\'s also the part almost everyone drops around now. Straight answer: most mornings, some mornings, or has it stopped? Any of the three is fine — it changes what I do at four weeks, not what I think of you."',
                         '«Hola, Nieves: dos semanas, y la protección solar es la parte que decide el resultado. Es también la parte que casi todo el mundo deja justo ahora. Respuesta directa: ¿casi todas las mañanas, algunas mañanas, o lo has dejado? Cualquiera de las tres me vale: cambia lo que hago a las cuatro semanas, no lo que pienso de ti».'),
                why: T('It names the behaviour, supplies three real replies including the unflattering one, and strips the social cost off the true one. The four-week review is a guess without it.',
                       'Nombra la conducta, ofrece tres respuestas reales incluida la que deja mal, y le quita el coste social a la verdadera. Sin ese dato, la revisión de las cuatro semanas es una suposición.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Hi Nieves, a reminder to keep the SPF up every day — it won\'t work if you don\'t use it!"',
                         '«Hola, Nieves, un recordatorio para que no falles con la protección solar cada día: ¡si no la usas, no funciona!»'),
                why: T('An instruction with the blame pre-assigned. She now knows a poor result will be traced to her conduct, so at four weeks she will claim compliance whatever happened, and you will alter a protocol that was never tested.',
                       'Una instrucción con la culpa ya repartida. Ahora sabe que un mal resultado se atribuirá a su conducta, así que a las cuatro semanas dirá que lo ha cumplido pasara lo que pasara, y tú modificarás un protocolo que nunca llegó a probarse.') }
            ],
            principle: T('Each contact has one job, and the week-2 job is a fact. You obtain the fact only if the reply that embarrasses her is the easiest of the three to give.',
                         'Cada contacto tiene un trabajo, y el de la semana 2 es un dato. Solo consigues el dato si la respuesta que la deja mal es la más fácil de dar de las tres.'),
            changes: {
              axis: 'disclosure',
              detail: T('The contact reverses direction. Day 3 hands her a fact she needs; week 2 has to obtain one she would rather not give — whether the daily sunscreen has actually started — so the message has to be written so that the embarrassing answer is the easiest of the three to send.',
                        'El contacto cambia de sentido. El día 3 le entrega un dato que necesita; la semana 2 tiene que obtener uno que preferiría no dar —si el protector solar diario ha empezado de verdad—, así que el mensaje debe escribirse de modo que la respuesta incómoda sea la más fácil de mandar de las tres.')
            } } },
        { kind: 'check',
          prompt: T('What makes the month-1 contact structurally different from the other three?',
                    '¿Qué hace que el contacto del mes 1 sea estructuralmente distinto de los otros tres?'),
          options: [
            { id: 'a', text: T('It is the point at which the next purchase becomes appropriate to raise.',
                               'Es el momento en que ya es apropiado plantear la siguiente compra.') },
            { id: 'b', text: T('It is the only one that measures the result against the expectation you set in Phase 5, in her words — which means it can produce a bad answer.',
                               'Es el único que mide el resultado frente a la expectativa que fijaste en la Fase 5, con sus palabras, lo que significa que puede producir una mala respuesta.') },
            { id: 'c', text: T('It is the longest interval, so it requires the most detailed preparation.',
                               'Es el intervalo más largo, así que exige la preparación más detallada.') }
          ],
          answer: 'b',
          why: T('Day 3, week 2 and month 3 are all survivable on a poor result. Month 1 is the contact where a promise you made gets compared to a face in a mirror, which is exactly why it is the one most often quietly skipped or converted into a rebooking prompt. Lesson 5 is that conversation. If your month-1 row cannot produce the sentence "it has not done what I said it would", it is not a review.',
                 'El día 3, la semana 2 y el mes 3 se sobreviven con un mal resultado. El mes 1 es el contacto en el que una promesa tuya se compara con una cara en un espejo, y por eso es el que más a menudo se omite en silencio o se convierte en un recordatorio para volver a reservar. La lección 5 es esa conversación. Si tu fila del mes 1 no puede producir la frase «no ha hecho lo que dije que haría», no es una revisión.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm9l2', n: 2, minutes: 11,
      title: T('The stop condition', 'La condición de cierre'),
      objective: T('State out loud what ends the follow-up, and separate legitimate contact from pressure wearing care\'s coat.',
                   'Enunciar en voz alta qué termina el seguimiento y separar el contacto legítimo de la presión con abrigo de cuidado.'),
      provenance: {
        chapter: 16,
        principle: T('Follow-up is a system you run rather than a mood you are in, which means the client can be told in advance exactly what it will do — and that is what separates systematic care from pursuit.',
                     'El seguimiento es un sistema que ejecutas y no un estado de ánimo en el que estás, lo que significa que a la clienta se le puede decir de antemano exactamente qué va a hacer, y eso es lo que separa el cuidado sistemático de la persecución.'),
        phase: 'continuation',
        trustStage: 'reliability',
        standard: 6,
        duty: 2,
        toolkit: 8
      },
      depth: {
        whyItGoesWrong: T(
          'Nobody sets out to hound anyone. A sequence escalates because each separate message is defensible by itself — one further check, one further article she might like, one further thought — and no single message amounts to pressure. The woman sending them never resolves to pursue; she merely never resolves to halt, because halting resembles writing off a client she is sure she could help. That certainty is the engine: it makes each extra message register as service. The halting rule has to be fixed before the first message departs, while the result is unknown, because from then on there is always one further justification for one further message.',
          'Nadie se propone acosar a nadie. Una secuencia escala porque cada mensaje por separado se sostiene solo —una comprobación más, un artículo más que podría gustarle, una idea más— y ningún mensaje suelto llega a ser presión. La mujer que los envía nunca resuelve perseguir; simplemente nunca resuelve detenerse, porque detenerse se parece a dar por perdida a una clienta a la que está segura de poder ayudar. Esa certeza es el motor: hace que cada mensaje extra se registre como servicio. La regla de parada hay que fijarla antes de que salga el primer mensaje, cuando el resultado se desconoce, porque a partir de ahí siempre hay una justificación más para un mensaje más.'),
        sheIsThinking: T(
          'That is the fourth one. I was uncomfortable about not replying and now I would be embarrassed to walk through the door at all.',
          'Ese es el cuarto. Ya me incomodaba no contestar y ahora me daría vergüenza hasta cruzar la puerta.'),
        ladder: {
          weak:    { line: T('"Popping this back to the top of your inbox!"',
                     '«¡Te lo vuelvo a subir arriba en la bandeja!»'),
                     effect: T('Two silences have replied to the question already. The message makes her return visit a discussion about the messages, and she will dodge that discussion by not returning.',
                               'Dos silencios ya han contestado a la pregunta. El mensaje convierte su regreso en una conversación sobre los mensajes, y esquivará esa conversación no regresando.') },
          average: { line: T('"No rush whatsoever — I shall drop you a line again in a few weeks."',
                     '«Sin ninguna prisa; te vuelvo a escribir en unas semanas».'),
                     effect: T('Considerate, and it does insert a gap. It also pledges a contact she never requested and keeps the closing date of the sequence wholly in your gift, which is the condition in which sequences do not close.',
                               'Considerado, y de hecho mete un intervalo. También promete un contacto que ella no ha pedido y mantiene la fecha de cierre de la secuencia enteramente a tu voluntad, que es la condición en la que las secuencias no cierran.') },
          strong:  { line: T('"I will write to you once more in a fortnight, and if I do not get a reply I will let it rest there. You are welcome back whenever you like."',
                     '«Te escribo una vez más dentro de quince días y, si no me contestas, lo dejo ahí. Y eres bienvenida cuando quieras».'),
                     effect: T('Publishes what the system will do and where it terminates. She may now ignore a message without the relationship being the price of ignoring it, and that is the whole distinction between systematic care and pursuit.',
                               'Publica qué va a hacer el sistema y dónde termina. Ahora ella puede ignorar un mensaje sin que la relación sea el precio de ignorarlo, y esa es toda la distinción entre el cuidado sistemático y la persecución.') }
        }
      },
      treatments: [
        {
          name:   T("PDO threads — midface",
                     "Hilos tensores de PDO — tercio medio"),
          price:  T("€1,750",
                     "1.750 €"),
          why:    T("A four-figure quotation that goes quiet is the sequence most likely to escalate, because the sum is large enough that every extra message feels justified and none of them individually is pressure.",
                     "Un presupuesto de cuatro cifras que se queda en silencio es la secuencia que más se desboca, porque la cantidad es lo bastante alta como para que cada mensaje de más parezca justificado y ninguno sea presión por sí solo."),
          moment: T("You quoted €1,750 eleven days ago, sent the plan, sent an article, and heard nothing.",
                     "Presupuestaste 1.750 € hace once días, mandaste el plan, mandaste un artículo y no has oído nada."),
          weak:   {
            line: T("\"Just bumping this back to the top of your inbox in case it got buried.\"",
                     "«Te lo vuelvo a subir arriba del correo por si se te había quedado enterrado.»"),
            cost: T("Two silences have already answered the question. This message makes any return visit a conversation about the messages, and she will avoid that conversation by not returning.",
                     "Dos silencios ya han respondido a la pregunta. Este mensaje convierte cualquier vuelta a la clínica en una conversación sobre los mensajes, y ella evitará esa conversación no volviendo.")
          },
          strong: {
            line: T("\"I will write once more in a fortnight and then I will leave it there. You are welcome back whenever you like, with or without a reply.\"",
                     "«Te escribo una vez más dentro de quince días y ahí lo dejo. Puedes volver cuando quieras, me contestes o no.»"),
            gain: T("Publishes what the system will do and where it ends. She can now ignore a message without the relationship being the price of ignoring it, and that is the whole difference between systematic care and pursuit.",
                     "Publica qué va a hacer el sistema y dónde termina. Ahora puede ignorar un mensaje sin que el precio de ignorarlo sea la relación, y esa es toda la diferencia entre cuidado sistemático y persecución.")
          }
        },
        {
          name:   T("Body contouring programme — twelve sessions",
                     "Programa de remodelación corporal — doce sesiones"),
          price:  T("€2,900 for twelve sessions",
                     "2.900 € las doce sesiones"),
          why:    T("The larger the programme, the more certain the practitioner is that she could help — and that certainty is the engine, because it makes each extra message register as service rather than as pursuit.",
                     "Cuanto más grande es el programa, más segura está la profesional de que podría ayudar, y esa seguridad es el motor, porque hace que cada mensaje de más se sienta como servicio y no como persecución."),
          moment: T("She was enthusiastic in the room. It has been three weeks and two unanswered messages.",
                     "En la consulta estaba entusiasmada. Han pasado tres semanas y dos mensajes sin respuesta."),
          weak:   {
            line: T("\"No rush whatsoever — I will drop you a line again in a few weeks.\"",
                     "«Sin ninguna prisa, te escribo otra vez dentro de unas semanas.»"),
            cost: T("Considerate, and it does insert a gap. It also pledges a contact she never asked for and keeps the closing date of the sequence entirely in your gift, which is the condition under which sequences never close.",
                     "Considerado, y sí que mete una pausa. También compromete un contacto que ella nunca ha pedido y deja la fecha de cierre de la secuencia enteramente en tus manos, que es la condición en la que las secuencias no se cierran.")
          },
          strong: {
            line: T("\"Two more from me and then I stop: one next week with the dates, and one at the end of the month. After that it is with you, and I will not keep asking.\"",
                     "«Dos más por mi parte y paro: uno la semana que viene con las fechas y otro a final de mes. Después queda de tu lado y yo no insisto más.»"),
            gain: T("Names the number of remaining contacts, which is the only thing that makes a €2,900 follow-up feel like a system rather than a person who wants the sale. She replies to one of the two far more often than she replies to an open-ended stream.",
                     "Nombra cuántos contactos quedan, que es lo único que hace que un seguimiento de 2.900 € parezca un sistema y no una persona que quiere la venta. Contesta a uno de los dos muchísimas más veces de las que contesta a un goteo sin final.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('One sentence, or none of it is follow-up', 'Una frase, o nada de esto es seguimiento'),
          body: [
            T('Toolkit #8 will not validate without a stop condition, and the engine says why in a single line: a plan without a stop condition is pressure with a schedule. This is not administrative tidiness. An open-ended sequence is a standing claim on her attention that she never agreed to, and the fact that each individual message is warm does not change what the set of them is.',
              'El Toolkit #8 no valida sin una condición de cierre, y el motor lo dice en una sola línea: un plan sin condición de cierre es presión con calendario. Esto no es orden administrativo. Una secuencia abierta es un derecho permanente sobre su atención que ella nunca concedió, y que cada mensaje suelto sea cálido no cambia lo que el conjunto es.'),
            T('The stop condition has to be said to her, in the room, and recorded in the plan. Said to her, it becomes information she can use: she now knows the shape of what is coming and when it ends. Recorded only in your file, it protects your conscience and nothing of hers.',
              'La condición de cierre hay que decírsela a ella, en la sala, y registrarla en el plan. Dicha a ella, se convierte en información que puede usar: ya sabe qué forma tiene lo que viene y cuándo termina. Registrada solo en tu ficha, protege tu conciencia y nada de la suya.'),
            T('There are two failure shapes. The plan with no end — "I\'ll keep in touch" — and the plan that ends only when she says yes: "I\'ll check in until you\'re ready." The second is worse, because it looks like patience and is in fact a condition, and the condition is about you.',
              'Hay dos formas de fallo. El plan sin final —«seguiremos en contacto»— y el plan que solo termina cuando ella dice que sí: «te iré escribiendo hasta que estés lista». El segundo es peor, porque parece paciencia y en realidad es una condición, y la condición trata de ti.'),
            T('Ethical Duty 2, Respect Autonomy, is the standard underneath it. Her autonomy includes the right to stop hearing from you without having to ask, and silence is one of the ways she is allowed to exercise it.',
              'El Deber Ético 2, Respetar la Autonomía, es el estándar que hay debajo. Su autonomía incluye el derecho a dejar de saber de ti sin tener que pedirlo, y el silencio es una de las formas en que le está permitido ejercerlo.')
          ] },
        { kind: 'signal',
          name: T('Fragment — a sequence with no ending, heard from the other side',
                  'Fragmento — una secuencia sin final, oída desde el otro lado'),
          client: T('"I did like her, honestly. But I\'ve had four messages since November and I only went in for a consultation. I feel bad ignoring them, so now I just don\'t open them." — Said about a clinic that is not yours.',
                    '«Me cayó bien, de verdad. Pero llevo cuatro mensajes desde noviembre y yo solo fui a una consulta. Me da cosa ignorarlos, así que ya ni los abro». — Dicho sobre una clínica que no es la tuya.'),
          prompt: T('Which of the four messages was the mistake?', '¿Cuál de los cuatro mensajes fue el error?'),
          notice: [
            T('None of them on its own. Each one, read alone, is warm, well written and plausibly caring — which is exactly why nobody inside that clinic has noticed anything.',
              'Ninguno por separado. Cada uno, leído solo, es cálido, está bien escrito y parece atento, y por eso mismo nadie dentro de esa clínica ha notado nada.'),
            T('The fourth exists because the first three went unanswered. That is the moment the set stopped being follow-up: her silence was treated as the absence of an answer rather than as one.',
              'El cuarto existe porque los tres primeros no obtuvieron respuesta. Ese es el momento en que el conjunto dejó de ser seguimiento: su silencio se trató como falta de respuesta y no como una respuesta.'),
            T('"I feel bad ignoring them." The cost has been moved onto her — she is now managing the clinic\'s feelings, which is the exact opposite of what follow-up claims to be for.',
              '«Me da cosa ignorarlos». El coste se ha desplazado a ella: ahora gestiona los sentimientos de la clínica, que es justo lo contrario de aquello para lo que dice existir el seguimiento.'),
            T('She has not complained, unsubscribed or blocked anyone. She has stopped opening things, which is why this is invisible from inside: every report says delivered.',
              'No se ha quejado, no se ha dado de baja y no ha bloqueado a nadie. Ha dejado de abrirlos, y por eso esto es invisible desde dentro: todos los informes dicen «entregado».')
          ] },
        { kind: 'sort',
          prompt: T('Sort each row. Some are follow-up. Some are pressure wearing care\'s coat.',
                    'Clasifica cada fila. Algunas son seguimiento. Otras son presión con abrigo de cuidado.'),
          client: T('Rows taken from real Toolkit #8 plans and real clinic CRMs.',
                    'Filas tomadas de planes reales del Toolkit #8 y de CRM reales de clínica.'),
          buckets: [
            { id: 'legit', label: T('Follow-up', 'Seguimiento') },
            { id: 'pressure', label: T('Pressure wearing care\'s coat', 'Presión con abrigo de cuidado') }
          ],
          items: [
            { id: 'f1', text: T('Day 3: the information she will need on day 3, sent whether or not she replies.',
                                'Día 3: la información que necesitará el día 3, enviada responda o no.'), bucket: 'legit' },
            { id: 'f2', text: T('"Just thinking of you — I\'d hate for you to miss out, the offer ends Friday."',
                                '«Me acordaba de ti; me daría pena que lo perdieras, la oferta termina el viernes».'), bucket: 'pressure' },
            { id: 'f3', text: T('One call on the date she named, and no further contact if she does not answer.',
                                'Una llamada en la fecha que ella indicó, y ningún contacto más si no responde.'), bucket: 'legit' },
            { id: 'f4', text: T('A fourth message, because the first three went unanswered.',
                                'Un cuarto mensaje, porque los tres primeros no obtuvieron respuesta.'), bucket: 'pressure' },
            { id: 'f5', text: T('Month 1: a review against the outcome she named, with an honest answer available if it has not worked.',
                                'Mes 1: una revisión frente al resultado que ella nombró, con una respuesta honesta disponible si no ha funcionado.'), bucket: 'legit' },
            { id: 'f6', text: T('"I know you said no, but I\'d hate for you to look back and regret it."',
                                '«Sé que dijiste que no, pero me daría pena que dentro de un tiempo te arrepintieras».'), bucket: 'pressure' },
            { id: 'f7', text: T('Automatic re-entry into the clinic\'s monthly campaign once the sequence ends.',
                                'Reincorporación automática a la campaña mensual de la clínica cuando termina la secuencia.'), bucket: 'pressure' }
          ],
          why: T('The two most people get wrong are f4 and f7. f4 feels like persistence and is the clearest signal in the set: three unanswered messages is an answer, and the fourth tells her that her silence does not count. f7 is the one nobody chose — it is a setting, and it will undo a perfectly written plan on a Tuesday morning while you are with another client. Check what your software does at the end of a sequence before you write another one.',
                 'Las dos que más se fallan son la f4 y la f7. La f4 parece constancia y es la señal más clara del conjunto: tres mensajes sin respuesta son una respuesta, y el cuarto le dice que su silencio no cuenta. La f7 es la que nadie eligió: es una configuración, y deshará un plan perfectamente escrito un martes por la mañana mientras tú estás con otra clienta. Comprueba qué hace tu software al terminar una secuencia antes de escribir otra.') },
        { kind: 'choose',
          prompt: T('End of the consultation. How do you say the stop condition to her?',
                    'Final de la consulta. ¿Cómo le dices la condición de cierre?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"I\'ll leave you to it — just shout if you need anything at all."',
                       '«Te dejo tranquila: dime cualquier cosa que necesites».'),
              why: T('Respectful in tone and empty in structure. There is no plan, so there is nothing to stop; every piece of work has been handed to her, including the work of noticing that day three went badly. Clients who are given this sentence do not call. They wait, and then they conclude the result is their fault.',
                     'Respetuosa en el tono y vacía en la estructura. No hay plan, así que no hay nada que detener; todo el trabajo se le ha pasado a ella, incluido el de darse cuenta de que el día 3 fue mal. Las clientas a las que se les dice esta frase no llaman. Esperan, y luego concluyen que el resultado es culpa suya.') },
            { id: 'b', verdict: 'best',
              label: T('"Here\'s exactly what happens next: I message you on day three with the thing people usually worry about, and I call you at four weeks to see whether it did what you wanted. After that I stop, unless you tell me otherwise."',
                       '«Esto es exactamente lo que pasa a partir de ahora: te escribo el día 3 con lo que suele preocupar a la gente y te llamo a las cuatro semanas para ver si ha hecho lo que tú querías. Después paro, salvo que tú me digas lo contrario».'),
              why: T('Two contacts, both with a stated purpose, and an ending she now owns. The last clause is the whole instrument: continuation becomes something she asks for rather than something she has to escape. It also makes the four-week call easy to place, because she was told it was coming.',
                     'Dos contactos, ambos con un propósito enunciado, y un final que ahora es suyo. La última oración es todo el instrumento: la continuidad pasa a ser algo que ella pide y no algo de lo que tiene que escapar. Además hace fácil la llamada de las cuatro semanas, porque se le avisó de que llegaría.') },
            { id: 'c', verdict: 'harmful',
              label: T('"I\'ll keep checking in until you\'re completely happy with it."',
                       '«Te iré escribiendo hasta que estés totalmente contenta con el resultado».'),
              why: T('It sounds like the highest standard of care in the room and it is a sequence with no end, conditioned on a state that you get to judge. It also quietly instructs her that saying she is happy is what makes the messages stop — which is the fastest way to make a four-week review produce a false answer.',
                     'Suena al máximo estándar de cuidado de la sala y es una secuencia sin final, condicionada a un estado que juzgas tú. Además le enseña en voz baja que decir que está contenta es lo que hace parar los mensajes, que es la forma más rápida de que una revisión de cuatro semanas dé una respuesta falsa.') }
          ],
          principle: T('Ethical Duty 2 — Respect Autonomy. A stop condition that depends on her saying yes is not a stop condition; it is the sales target with a softer voice.',
                       'Deber Ético 2 — Respetar la Autonomía. Una condición de cierre que depende de que ella diga que sí no es una condición de cierre: es el objetivo comercial con voz más suave.'),
          retry: {
            note: T('That client was being told what would happen. This one asks for more of it — which is where practitioners quietly abandon the instrument, believing consent has made it unnecessary.',
                    'A aquella clienta se le contaba lo que iba a pasar. Esta pide más, y ahí es donde los profesionales abandonan en silencio el instrumento, creyendo que el consentimiento lo hace innecesario.'),
            prompt: T('You have just said the stop condition. Julia laughs: "Honestly, message me every week. I need someone nagging me or I won\'t do it."',
                      'Acabas de decir la condición de cierre. Julia se ríe: «De verdad, escríbeme todas las semanas. Necesito que alguien me dé la lata o no lo hago».'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Done — I\'ll give you a nudge every Monday."', '«Hecho: te doy un toque todos los lunes».'),
                why: T('She has consented to something with no shape and no end, and you have accepted the role of the person she is accountable to. The first Monday she has not done it, she will read your message and not reply — and then the messages become the thing she is avoiding rather than the thing she asked for.',
                       'Ha consentido algo sin forma y sin final, y tú has aceptado el papel de la persona ante la que rinde cuentas. El primer lunes en que no lo haya hecho, leerá tu mensaje y no contestará, y a partir de ahí los mensajes serán aquello que evita y no aquello que pidió.') },
              { id: 'b', verdict: 'best',
                label: T('"I can do that, and I\'d rather do it on your terms: every Monday for six weeks, one line, no reply needed — then it stops unless you tell me to keep going. And if you want it to stop sooner, just say stop. Nothing changes between us."',
                         '«Puedo hacerlo, y prefiero hacerlo en tus términos: todos los lunes durante seis semanas, una línea, sin necesidad de contestar, y después se para salvo que me digas que siga. Y si quieres que pare antes, dime «para» y ya está. Entre nosotras no cambia nada».'),
                why: T('Her request is honoured and given a shape: specific, bounded, revocable, and explicitly costless to cancel. That last clause is the one that matters, because the week she does badly is the week she most needs the message and least wants to answer it.',
                       'Su petición se atiende y se le da forma: concreta, acotada, revocable y explícitamente gratuita de cancelar. Esa última oración es la que importa, porque la semana en que le vaya mal es la semana en que más necesita el mensaje y menos ganas tiene de contestarlo.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Of course — and if you\'re struggling I\'ll book you in for a review, we can keep you on track that way."',
                         '«Claro, y si te cuesta te pongo una revisión y así te mantenemos en el camino».'),
                why: T('She asked for a line of text and you offered her appointments. Her small request for help has been converted into a diary and, eventually, a bill, and the next time she needs something minor she will remember what a minor request turned into here.',
                       'Ha pedido una línea de texto y le has ofrecido citas. Su pequeña petición de ayuda se ha convertido en agenda y, al final, en factura, y la próxima vez que necesite algo menor recordará en qué se convirtió aquí una petición menor.') }
            ],
            principle: T('A stop condition is not cancelled by a client asking for more contact. It is rewritten with her, and consent that is specific, bounded and revocable is the only kind that survives a month she does badly.',
                         'Una condición de cierre no se anula porque una clienta pida más contacto: se reescribe con ella, y un consentimiento concreto, acotado y revocable es el único que sobrevive a un mes en que le vaya mal.'),
            changes: {
              axis: 'clientResponse',
              detail: T('She now asks for more contact, not less — "message me every week, I need someone nagging me" — so the instrument is no longer being imposed on a client who might resent it but handed away by one who is laughing, and it has to be rewritten with a date on which it ends.',
                        'Ahora pide más contacto, no menos: «escríbeme todas las semanas, necesito que alguien me dé la lata». El instrumento ya no se le impone a una clienta que podría molestarse, sino que lo regala una que se ríe, y hay que reescribirlo con una fecha en la que termina.')
            } } },
        { kind: 'check',
          prompt: T('Which of these would the Toolkit #8 validator accept as a stop condition?',
                    '¿Cuál de estas aceptaría el validador del Toolkit #8 como condición de cierre?'),
          options: [
            { id: 'a', text: T('"Sequence ends when she books."', '«La secuencia termina cuando reserve».') },
            { id: 'b', text: T('"One agreed contact. If she does not respond, no further outreach — she has the summary and can return."',
                               '«Un contacto acordado. Si no responde, ningún contacto más: tiene el resumen y puede volver».') },
            { id: 'c', text: T('"Six weeks of gentle nurture, then review."', '«Seis semanas de nutrición suave y luego revisar».') }
          ],
          answer: 'b',
          why: T('(a) ends on your outcome, so it never ends on hers. (c) fails twice: nurture language is rejected outright by the validator, and "then review" makes the ending a decision you take later rather than a condition she was told about. (b) is the wording the engine itself proposes, and the second half is the part that matters — it tells her what she keeps and where the door is.',
                 'La (a) termina en tu resultado, así que nunca termina en el suyo. La (c) falla dos veces: el lenguaje de «nutrición» lo rechaza el validador de plano, y «y luego revisar» convierte el final en una decisión que tomas tú después, no en una condición que se le comunicó. La (b) es la redacción que propone el propio motor, y la segunda mitad es la que importa: le dice qué conserva y dónde está la puerta.') },
        { kind: 'reflect',
          prompt: T('Write the stop condition you would have to say out loud to the last client you treated. Then say why you did not say it.',
                    'Escribe la condición de cierre que tendrías que haberle dicho en voz alta a la última clienta que trataste. Después di por qué no la dijiste.'),
          placeholder: T('The reason is usually that saying it out loud feels like closing a door you would rather leave open. Write that reason down anyway.',
                         'La razón suele ser que decirla en voz alta parece cerrar una puerta que preferirías dejar abierta. Escríbela igualmente.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm9l3', n: 3, minutes: 10,
      title: T('Following up a DEFER', 'Seguimiento de un APLAZAMIENTO'),
      objective: T('Honour an agreed moment without chasing, and know why Toolkit #16 is refused here.',
                   'Honrar un momento acordado sin perseguir, y saber por qué el Toolkit #16 se deniega aquí.'),
      provenance: {
        chapter: 16,
        principle: T('A client who did not close is not a client who said no — Chapter 16 sends one agreed follow-up after the consultation rather than leaving the deferral to chance.',
                     'Una clienta que no cerró no es una clienta que dijo que no: el Capítulo 16 envía un seguimiento acordado después de la consulta en lugar de dejar el aplazamiento al azar.'),
        phase: 'continuation',
        trustStage: 'reliability',
        standard: 6,
        duty: 2,
        toolkit: 8
      },
      depth: {
        whyItGoesWrong: T(
          'Telephoning about a deferral with empty hands feels like telephoning with nothing to say, so the temptation is to carry something: a slot that has just opened, the old figure held for her, a small reduction valid until Friday. She is trying to supply a reason to decide, which is a generous reading of her own role. What she has done instead is alter the terms of a choice that was already under way, and the client draws the obvious inference — the original terms were soft, and patience pays. The agreed call wants no cargo. It wants the date the client herself named, and a question about where her choice has got to.',
          'Telefonear por un aplazamiento con las manos vacías parece telefonear sin nada que decir, así que la tentación es llevar algo: un hueco que acaba de salir, la cifra anterior guardada para ella, una pequeña rebaja válida hasta el viernes. Ella intenta suministrar un motivo para decidir, que es una lectura generosa de su propio papel. Lo que ha hecho en realidad es alterar las condiciones de una elección que ya estaba en curso, y la clienta saca la inferencia evidente: las condiciones originales eran blandas y la paciencia paga. La llamada acordada no quiere carga. Quiere la fecha que puso la propia clienta y una pregunta sobre dónde ha llegado su elección.'),
        sheIsThinking: T(
          'So had I agreed on the day, I would have paid the full amount. Worth remembering for next time.',
          'O sea que si hubiera aceptado el mismo día, habría pagado el importe entero. Conviene recordarlo para la próxima.'),
        ladder: {
          weak:    { line: T('"A slot has just opened on Thursday and I can hold the old figure if you take it."',
                     '«Acaba de salir un hueco el jueves y puedo guardarte la cifra anterior si lo coges».'),
                     effect: T('Urgency and a reduction dropped onto a choice that was being made properly. Whatever she picks now is a verdict on Thursday, and the terms of every future quotation you give her have just shifted.',
                               'Urgencia y rebaja soltadas sobre una elección que se estaba tomando bien. Lo que escoja ahora es un veredicto sobre el jueves, y las condiciones de todos los presupuestos que le des en el futuro acaban de moverse.') },
          average: { line: T('"Just seeing whether you had had any further thoughts."',
                     '«Solo quería ver si le habías dado más vueltas».'),
                     effect: T('Truthful, unpressured and perfectly acceptable. It asks her to report on her own reflections with nothing to report against, so the usual reply is not yet, and the call finishes where it opened.',
                               'Veraz, sin presión y perfectamente aceptable. Le pide que informe de sus propias reflexiones sin nada con lo que contrastarlas, así que la réplica habitual es «todavía no», y la llamada acaba donde empezó.') },
          strong:  { line: T('"You said you would know once the wedding was over — how was it? … And where has the treatment got to for you?"',
                     '«Dijiste que lo sabrías cuando pasara la boda. ¿Qué tal fue? … ¿Y en qué punto se te ha quedado el tratamiento?»'),
                     effect: T('Honours the date she fixed and opens with her life, not your calendar. The second question asks where the matter stands instead of pushing it, and all three possible replies close the loop.',
                               'Honra la fecha que fijó ella y abre con su vida, no con tu calendario. La segunda pregunta pregunta en qué punto está el asunto en vez de empujarlo, y las tres réplicas posibles cierran el bucle.') }
        }
      },
      treatments: [
        {
          name:   T("Fractional laser resurfacing — course of six",
                     "Láser fraccionado de rejuvenecimiento — bono de seis sesiones"),
          price:  T("€1,980 for six sessions",
                     "1.980 € el bono de seis"),
          why:    T("This deferral had a real reason and a real date, which is exactly why it is the one most often spoiled — the call arrives carrying something, and the something rewrites the terms she had already accepted.",
                     "Este aplazamiento tenía un motivo real y una fecha real, y por eso es el que más veces se estropea: la llamada llega cargando algo, y ese algo reescribe unas condiciones que ella ya había aceptado."),
          moment: T("She deferred in June until after her son's communion, and you agreed to ring on the eighth of September. It is the eighth.",
                     "Aplazó en junio hasta después de la comunión de su hijo, y quedasteis en que llamarías el ocho de septiembre. Es el ocho."),
          weak:   {
            line: T("\"Hello — a slot has just come up for Thursday, and I could hold June's price for you if you take it.\"",
                     "«Hola, se me acaba de quedar libre un hueco el jueves, y te podría mantener el precio de junio si lo coges.»"),
            cost: T("Urgency and a reduction dropped onto a decision that was proceeding perfectly well. Whatever she chooses now, she has learned that your prices soften if she waits, and every quotation you give her from here is an opening position.",
                     "Urgencia y una rebaja soltadas sobre una decisión que iba perfectamente bien. Elija lo que elija, ha aprendido que tus precios se ablandan si espera, y todos los presupuestos que le des a partir de ahora son una posición de salida.")
          },
          strong: {
            line: T("\"You said you would know once the communion was over. How was it? … And where has the laser got to for you?\"",
                     "«Dijiste que lo sabrías cuando pasara la comunión. ¿Qué tal fue? … ¿Y lo del láser, en qué punto está para ti?»"),
            gain: T("Honours the date she fixed and opens with her life rather than your calendar. The second question asks where the matter stands instead of pushing it, and all three possible answers close the loop.",
                     "Honra la fecha que puso ella y abre con su vida y no con tu calendario. La segunda pregunta pregunta en qué punto está el asunto en vez de empujarlo, y las tres respuestas posibles cierran el círculo.")
          }
        },
        {
          name:   T("Cryolipolysis — two areas",
                     "Criolipólisis — dos zonas"),
          price:  T("€680 for two areas",
                     "680 € las dos zonas"),
          why:    T("Body deferrals are usually parked behind something she intends to do herself first, and the call has to be able to receive the answer that she did it and no longer wants the treatment.",
                     "Los aplazamientos corporales suelen quedarse aparcados detrás de algo que ella pretende hacer por su cuenta primero, y la llamada tiene que poder recibir la respuesta de que lo hizo y ya no quiere el tratamiento."),
          moment: T("She deferred to see how three months at the gym went. The three months are up.",
                     "Aplazó para ver cómo le iban tres meses de gimnasio. Los tres meses se han cumplido."),
          weak:   {
            line: T("\"Just seeing whether you had had any more thoughts about the cryolipolysis.\"",
                     "«Te escribo por si le habías dado alguna vuelta más a lo de la criolipólisis.»"),
            cost: T("Truthful, unpressured and perfectly acceptable. It asks her to report on her own reflections with nothing to report against, so the usual reply is not yet, and the call ends where it began.",
                     "Sincero, sin presión y perfectamente aceptable. Le pide que informe de sus propias cavilaciones sin nada contra lo que informar, así que la respuesta habitual es «todavía no», y la llamada termina donde empezó.")
          },
          strong: {
            line: T("\"You wanted to see how the gym went first. How has that been? … And does the €680 still make sense to you, or has it stopped mattering?\"",
                     "«Querías ver primero qué tal el gimnasio. ¿Cómo ha ido? … ¿Y los 680 € te siguen encajando o ya ha dejado de importarte?»"),
            gain: T("Gives her a live third answer — it stopped mattering — which is a real result and closes the loop honestly. Without it she has only \"not yet\", and \"not yet\" leaves both of you exactly where you were.",
                     "Le da una tercera respuesta viva —ya no me importa—, que es un resultado real y cierra el círculo con honestidad. Sin ella solo tiene el «todavía no», y el «todavía no» os deja a las dos exactamente donde estabais.")
          }
        },
        {
          name:   T("Botulinum toxin — three areas",
                     "Toxina botulínica — tres zonas"),
          price:  T("€320, three areas",
                     "320 €, tres zonas"),
          why:    T("At €320 the agreed call almost never gets made, because the sum does not feel like enough to justify picking up the telephone — and a deferral nobody honours teaches her that agreements made in your room are decorative.",
                     "A 320 € la llamada acordada casi nunca se hace, porque la cantidad no parece suficiente para justificar coger el teléfono, y un aplazamiento que nadie honra le enseña que los acuerdos que se toman en tu consulta son decorativos."),
          moment: T("She wanted to wait until after the photographs at her sister's wedding. That was three weeks ago.",
                     "Quería esperar hasta después de las fotos de la boda de su hermana. Eso fue hace tres semanas."),
          weak:   {
            line: T("\"Hello! Long time. Are you thinking of coming in for the toxin at all?\"",
                     "«¡Hola! Cuánto tiempo. ¿Te estás planteando venir para la toxina?»"),
            cost: T("Forgets the date, forgets the reason, and asks her to restart the whole decision from the beginning. It also reads as a clinic filling its diary, because nothing in it proves otherwise.",
                     "Olvida la fecha, olvida el motivo y le pide que reinicie la decisión entera desde el principio. Además suena a clínica llenando agenda, porque no hay nada dentro que demuestre lo contrario.")
          },
          strong: {
            line: T("\"The wedding was the twelfth, was it not? How did it go? … And you said afterwards would be the time for the three areas. Is it?\"",
                     "«La boda era el doce, ¿verdad? ¿Qué tal fue? … Y dijiste que después sería el momento de las tres zonas. ¿Lo es?»"),
            gain: T("Proves you kept her date, opens on her sister's wedding rather than on your diary, and asks the question she agreed in advance to be asked. At €320 that is the whole difference between a client and a contact.",
                     "Demuestra que te quedaste con su fecha, abre con la boda de su hermana y no con tu agenda, y hace la pregunta que ella aceptó de antemano que se le hiciera. A 320 € esa es toda la diferencia entre una clienta y un contacto.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('She has not declined. She has asked for time.', 'No ha rechazado. Ha pedido tiempo.'),
          body: [
            T('A DEFER moves the relationship from Prospective to Considering. That is the whole meaning of the state: she is still inside the consultation, on a timeline she named. Nothing about her has lapsed, cooled or gone quiet, and every instrument designed for a client who has gone quiet is therefore wrong here.',
              'Un APLAZAMIENTO mueve la relación de Prospectiva a En consideración. Ese es todo el significado del estado: ella sigue dentro de la consulta, en un plazo que ella misma nombró. Nada en ella ha caducado, se ha enfriado ni ha quedado en silencio, y por eso todo instrumento diseñado para una clienta que se ha quedado en silencio está mal aquí.'),
            T('Toolkit #8 gives a DEFER exactly two rows and one date. Same day: the written recommendation summary and the alternative option, so she can decide with the facts in front of her rather than with her memory of a conversation. Agreed date: the follow-up conversation she agreed to — not a chase.',
              'El Toolkit #8 da a un APLAZAMIENTO exactamente dos filas y una fecha. El mismo día: el resumen escrito de la recomendación y la opción alternativa, para que decida con los datos delante y no con su recuerdo de una conversación. Fecha acordada: la conversación de seguimiento que ella aceptó, no una persecución.'),
            T('The word "agreed" carries the entire rule. The engine asks for the specific moment agreed WITH the client — "call Thursday 12 March, agreed in the room". If you can fill that field without her, you have not agreed anything; you have scheduled yourself. "I\'ll give you a ring next week sometime" is your intention wearing her permission.',
              'La palabra «acordada» sostiene toda la regla. El motor pide el momento concreto acordado CON la clienta: «llamar el jueves 12 de marzo, acordado en la sala». Si puedes rellenar ese campo sin ella, no has acordado nada: te has agendado a ti. «Te llamo la semana que viene en algún momento» es tu intención con el permiso de ella puesto.'),
            T('And Toolkit #16, the Reactivation Planner, is refused. Not discouraged — refused, by the engine, with a reason.',
              'Y el Toolkit #16, el Planificador de Reactivación, se deniega. No se desaconseja: se deniega, por el motor, con un motivo.')
          ] },
        { kind: 'check',
          prompt: T('Why is Toolkit #16 (Reactivation Planner) not eligible at an immediate DEFER?',
                    '¿Por qué el Toolkit #16 (Planificador de Reactivación) no es elegible en un APLAZAMIENTO inmediato?'),
          options: [
            { id: 'a', text: T('Because reactivation sequences are too expensive to run on a client who has not paid yet.',
                               'Porque las secuencias de reactivación son demasiado caras para una clienta que aún no ha pagado.') },
            { id: 'b', text: T('Because DEFER is governed by Toolkit #8 only. #16 becomes eligible on a later genuine Dormant → Reactivated transition, and nothing else.',
                               'Porque el APLAZAMIENTO se rige solo por el Toolkit #8. El #16 pasa a ser elegible en una transición posterior y genuina de Latente → Reactivada, y en nada más.') },
            { id: 'c', text: T('Because she has declined, so closure applies instead.',
                               'Porque ha rechazado, así que lo que aplica es el cierre.') }
          ],
          answer: 'b',
          why: T('(c) is the NO rule quoted at a DEFER, and confusing the two is how a considering client gets closed while she is still deciding. The substance behind (b): #16 treats a client as lapsed. A woman who told you on Tuesday that she needs two weeks is not lapsed on Tuesday. Running reactivation on her is a message that the thing she agreed to did not count — and she will read it exactly that way, because she remembers agreeing to something else.',
                 'La (c) es la regla del NO citada en un APLAZAMIENTO, y confundirlas es como se cierra a una clienta que todavía está decidiendo. El fondo de la (b): el #16 trata a la clienta como latente. Una mujer que el martes te dijo que necesita dos semanas no está latente el martes. Aplicarle reactivación es un mensaje de que lo que ella acordó no contaba, y lo leerá exactamente así, porque recuerda haber acordado otra cosa.') },
        { kind: 'signal',
          avatar: 'carmen',
          name: T('Fragment — Carmen, end of Phase 7', 'Fragmento — Carmen, final de la Fase 7'),
          client: T('"Give me a couple of weeks. My mother\'s operation is on the 14th and I genuinely can\'t think about anything else until that\'s done."',
                    '«Dame un par de semanas. La operación de mi madre es el día 14 y de verdad que no puedo pensar en nada más hasta que eso pase».'),
          prompt: T('What does Toolkit #8 record here, and what does the engine refuse?',
                    '¿Qué registra aquí el Toolkit #8 y qué deniega el motor?'),
          notice: [
            T('Outcome: DEFER. Relationship transition: Prospective → Considering. Not a failed sale, and not a closure.',
              'Resultado: APLAZAMIENTO. Transición de la relación: Prospectiva → En consideración. Ni una venta fallida ni un cierre.'),
            T('The agreed moment is not "a couple of weeks". That is a duration, and durations are yours to interpret. The field needs a date after the 14th that she names.',
              'El momento acordado no es «un par de semanas». Eso es una duración, y las duraciones las interpretas tú. El campo necesita una fecha posterior al día 14 que diga ella.'),
            T('Row 1, same day: the written summary and the alternative option — so that in two weeks she is deciding on facts, not on what she can still remember of a Tuesday afternoon.',
              'Fila 1, el mismo día: el resumen escrito y la opción alternativa, para que dentro de dos semanas decida sobre hechos y no sobre lo que aún recuerde de un martes por la tarde.'),
            T('Stop condition: one agreed contact. If she does not answer it, nothing further — she has the summary and can return.',
              'Condición de cierre: un contacto acordado. Si no responde, nada más: tiene el resumen y puede volver.'),
            T('Toolkit #16 refused (eligible only on a later Dormant → Reactivated transition). Toolkit #17 refused (Retention & LTV Review applies to Active relationship management only).',
              'Toolkit #16 denegado (solo elegible en una transición posterior de Latente → Reactivada). Toolkit #17 denegado (la Revisión de Retención y Valor de Vida se aplica únicamente a la gestión de relaciones Activas).')
          ] },
        { kind: 'choose',
          prompt: T('You need the agreed date. What do you actually say to Carmen?',
                    'Necesitas la fecha acordada. ¿Qué le dices realmente a Carmen?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Of course. I\'ll give you a ring in a fortnight, then."',
                       '«Claro. Te llamo dentro de quince días, entonces».'),
              why: T('She agreed to a duration; you converted it into your appointment. A call that lands in the middle of her mother\'s recovery is a chase, however kindly it is worded, and she will treat it as one — politely, and finally.',
                     'Ella accedió a una duración; tú la has convertido en tu cita. Una llamada que cae en mitad de la recuperación de su madre es una persecución, por muy amable que sea la formulación, y ella la tratará como tal: con educación y de forma definitiva.') },
            { id: 'b', verdict: 'best',
              label: T('"The 14th is the thing that matters. Would you rather I called the week after — Tuesday the 22nd, say — or would you rather ring me when you\'re through it?"',
                       '«Lo que importa es el día 14. ¿Prefieres que te llame la semana siguiente, pongamos el martes 22, o prefieres llamarme tú cuando lo hayáis pasado?»'),
              why: T('It names her event as the fixed point, offers a specific date rather than a vague one, and offers her the option of owning the contact entirely. Whichever she picks, the field is now genuinely agreed — and if she chooses to ring you, your plan has one row and a stop condition, which is a complete plan.',
                     'Nombra el acontecimiento de ella como punto fijo, ofrece una fecha concreta en lugar de una vaga y le ofrece la opción de quedarse ella con el contacto. Elija lo que elija, el campo queda realmente acordado, y si decide llamarte ella, tu plan tiene una fila y una condición de cierre, que es un plan completo.') },
            { id: 'c', verdict: 'harmful',
              label: T('"I\'ll pencil you in for the 22nd and hold a slot — March fills up quickly."',
                       '«Te apunto provisionalmente el 22 y te guardo un hueco; marzo se llena rápido».'),
              why: T('You created a booking she did not make and attached scarcity to a woman whose mother is having an operation. She will now either have to cancel something she never agreed to, or avoid you to avoid the conversation. Both outcomes cost you the client, and the second one costs you the referral as well.',
                     'Has creado una reserva que ella no hizo y has añadido escasez a una mujer cuya madre va a ser operada. Ahora tendrá que cancelar algo que nunca aceptó o evitarte para evitar la conversación. Las dos salidas te cuestan la clienta, y la segunda te cuesta además la recomendación.') }
          ],
          principle: T('Toolkit #8, field agreedFollowUpDate. If you can complete it without her in the room, nothing has been agreed.',
                       'Toolkit #8, campo de fecha de seguimiento acordada. Si puedes rellenarlo sin ella en la sala, no se ha acordado nada.'),
          retry: {
            note: T('Carmen had a fixed event to build a date around. This client offers you nothing to build on at all.',
                    'Carmen tenía un acontecimiento fijo alrededor del cual construir la fecha. Esta clienta no te ofrece nada sobre lo que construir.'),
            prompt: T('Another deferral, no date offered: "Let me talk to my sister and I\'ll ring you when I know." What goes in the agreed-contact field?',
                      'Otro aplazamiento, sin fecha ofrecida: «Déjame hablarlo con mi hermana y te llamo cuando lo sepa». ¿Qué pones en el campo del contacto acordado?'),
            options: [
              { id: 'a', verdict: 'harmful',
                label: T('"Perfect — and if I haven\'t heard from you by the end of the month I\'ll give you a quick ring anyway."',
                         '«Perfecto, y si a final de mes no sé nada de ti te llamo igualmente».'),
                why: T('You have inserted a contact she did not agree to and attached your deadline to her thinking. She now knows that not ringing produces a call, which means the only way to end the matter is to answer a phone she was avoiding — or to avoid you permanently, which is cheaper for her.',
                       'Has metido un contacto que ella no aceptó y le has pegado tu plazo a su reflexión. Ahora sabe que no llamar produce una llamada, así que la única forma de zanjarlo es coger un teléfono que estaba evitando, o evitarte a ti para siempre, que le sale más barato.') },
              { id: 'b', verdict: 'best',
                label: T('"Then the plan is that you ring me and I don\'t chase you. I\'ll send the summary today so you and your sister are looking at the same thing. If I don\'t hear from you, that\'s an answer and I\'ll leave it there."',
                         '«Entonces el plan es que me llamas tú y yo no te persigo. Hoy te mando el resumen para que tu hermana y tú miréis lo mismo. Si no sé nada de ti, eso es una respuesta y lo dejo ahí».'),
                why: T('One row and a stop condition is a complete plan. Saying in advance that silence counts as an answer is what makes the silence usable by her — she can decline without a conversation, which is the form most declines want to take, and the door stays open precisely because nobody is standing in it.',
                       'Una fila y una condición de cierre son un plan completo. Decir de antemano que el silencio cuenta como respuesta es lo que le permite usarlo: puede declinar sin una conversación, que es la forma que quiere adoptar la mayoría de los rechazos, y la puerta queda abierta justamente porque no hay nadie plantado en ella.') },
              { id: 'c', verdict: 'weak',
                label: T('"Of course. What day do you think you\'ll have spoken to her by? I\'ll call the day after."',
                         '«Claro. ¿Para qué día crees que habrás hablado con ella? Te llamo al día siguiente».'),
                why: T('She declined to name a date and you asked again in a form that is hard to refuse twice. The field will look complete and nothing was agreed: she now owes you a family conversation by a deadline she was talked into, and the call will arrive before the decision does.',
                       'Se ha negado a dar una fecha y has vuelto a pedirla de una forma difícil de rechazar dos veces. El campo parecerá completo y no se ha acordado nada: ahora te debe una conversación familiar con un plazo al que la has llevado, y la llamada llegará antes que la decisión.') }
            ],
            principle: T('A plan with one row and a stop condition is complete. A field you filled in for her is not a plan — it is your diary wearing her consent.',
                         'Un plan con una fila y una condición de cierre está completo. Un campo que has rellenado por ella no es un plan: es tu agenda con el consentimiento de ella puesto encima.'),
            changes: {
              axis: 'continuation',
              detail: T('There is no longer an event to build a date around. She offers nothing datable at all, so the agreed-contact row can only be the one where she rings you — and the follow-up that becomes possible is a summary sent today with no call attached to it.',
                        'Ya no hay un acontecimiento sobre el que construir una fecha. Ella no ofrece nada datable, así que la fila de contacto acordado solo puede ser aquella en la que te llama ella, y el seguimiento que pasa a ser posible es un resumen enviado hoy sin ninguna llamada pegada.')
            } } },
        { kind: 'compare',
          prompt: T('The agreed day arrives. Which call honours the agreement?',
                    'Llega el día acordado. ¿Qué llamada honra el acuerdo?'),
          a: { label: T('Call A', 'Llamada A'),
               text: T('"Hi Carmen, just following up — have you had a chance to think any more about what we discussed?"',
                       '«Hola, Carmen, te llamaba para hacer seguimiento: ¿has podido pensar algo más sobre lo que hablamos?»') },
          b: { label: T('Call B', 'Llamada B'),
               text: T('"Hi Carmen — you asked me to call today, so I\'m calling. No decision needed on the phone. How did the 14th go?"',
                       '«Hola, Carmen: me pediste que te llamara hoy, así que te llamo. No hace falta decidir nada por teléfono. ¿Qué tal fue el día 14?»') },
          answer: 'b',
          why: T('A asks her to report on her own thinking, which puts her in debt at the first sentence — and the only socially available answer is "sorry, not yet", which ends the relationship politely. B states why the call exists (she asked for it), removes the obligation to decide during it, and opens on the thing she was actually living through. A produces an apology. B produces a conversation, and the decision arrives inside it.',
                 'La A le pide que rinda cuentas de su propio pensamiento, lo que la pone en deuda desde la primera frase, y la única respuesta socialmente disponible es «perdona, aún no», que termina la relación con educación. La B dice por qué existe la llamada (la pidió ella), retira la obligación de decidir durante la misma y abre por aquello que ella estaba viviendo de verdad. La A produce una disculpa. La B produce una conversación, y la decisión llega dentro de ella.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm9l4', n: 4, minutes: 11,
      title: T('Ending relationships responsibly', 'Terminar relaciones con responsabilidad'),
      objective: T('Close a NO into the correct state, so that she would return and would refer.',
                   'Cerrar un NO en el estado correcto, de modo que ella volvería y recomendaría.'),
      provenance: {
        chapter: [13, 16],
        principle: T('The fifth closing sentence is written for the client who said no — "I am here if you have questions after" — because what continues when the sale does not is the relationship.',
                     'La quinta frase de cierre está escrita para la clienta que dijo que no —«aquí estoy si te surgen dudas después»—, porque lo que continúa cuando la venta no continúa es la relación.'),
        phase: 'continuation',
        trustStage: 'safety',
        standard: 6,
        duty: 1,
        toolkit: 8
      },
      depth: {
        whyItGoesWrong: T(
          'When a clinician concludes she can do no more for a woman, the merciful-looking option is to let things lapse: no appointment proposed, no message sent. Lapsing spares the client from hearing that this clinic has run out of usefulness, and spares the clinician from pronouncing it, and both feel like mercy. Neither is. A conclusion nobody pronounces leaves the client to supply her own, and the one she supplies is always about herself: too demanding, too complicated, not worth the bother. A referral she was never handed is also a treatment she never receives.',
          'Cuando una clínica concluye que no puede hacer más por una mujer, la opción que parece misericordiosa es dejar que la cosa decaiga: ninguna cita propuesta, ningún mensaje enviado. Decaer le ahorra a la clienta oír que esta clínica se ha quedado sin utilidad, y le ahorra a la clínica pronunciarlo, y las dos cosas parecen misericordia. Ninguna lo es. Una conclusión que nadie pronuncia deja que la clienta se suministre la suya, y la que se suministra siempre va de ella misma: demasiado exigente, demasiado complicada, no merecía la molestia. Una derivación que nunca le entregaron es además un tratamiento que nunca recibe.'),
        sheIsThinking: T(
          'I thought we got on well. Nothing has been proposed to me since May and I have no idea what I did.',
          'Yo creía que nos llevábamos bien. No me han propuesto nada desde mayo y no tengo ni idea de qué hice.'),
        ladder: {
          weak:    { line: T('Nothing pronounced: no appointment proposed, no message sent.',
                     'No pronunciar nada: ninguna cita propuesta, ningún mensaje enviado.'),
                     effect: T('The conclusion occurs and nobody utters it. She reads it as a verdict on herself, and that is the account she supplies when somebody asks her about this clinic.',
                               'La conclusión ocurre y nadie la pronuncia. Ella la lee como un veredicto sobre sí misma, y ese es el relato que suministra cuando alguien le pregunta por esta clínica.') },
          average: { line: T('"I do not believe there is a great deal more I can do for you here, but do drop in any time."',
                     '«No creo que aquí pueda hacer mucho más por ti, pero pásate cuando quieras».'),
                     effect: T('Truthful about the boundary and warmly intended, which already puts it ahead of silence. It terminates the arrangement without supplying anywhere for her to go, so she walks out with a shut door and no address.',
                               'Veraz sobre el límite y dicho con calidez, lo que ya lo pone por delante del silencio. Termina el acuerdo sin suministrarle ningún sitio al que ir, así que sale con una puerta cerrada y ninguna dirección.') },
          strong:  { line: T('"I have carried this as far as I can carry it well. The woman you want for the next stretch is at the clinic on Calle Mayor — I will write to her today and copy you in. And if anything arises later, I am here."',
                     '«He llevado esto hasta donde puedo llevarlo bien. La mujer que necesitas para el siguiente tramo está en la clínica de Calle Mayor: le escribo hoy y te pongo en copia. Y si surge algo más adelante, aquí estoy».'),
                     effect: T('Pronounces the conclusion, locates the cause in the boundary of your scope rather than in her, delivers a live referral, and leaves the arrangement in the condition a woman returns to and recommends from.',
                               'Pronuncia la conclusión, sitúa la causa en el límite de tu alcance y no en ella, entrega una derivación viva y deja el acuerdo en la condición desde la que una mujer vuelve y recomienda.') }
        }
      },
      treatments: [
        {
          name:   T("Melasma programme — six months",
                     "Programa de melasma — seis meses"),
          price:  T("€1,400 across six months",
                     "1.400 € a lo largo de seis meses"),
          why:    T("Melasma is the programme most likely to reach the end of what a clinic can offer while the client still wants something to happen, which makes it where relationships are most often allowed to lapse instead of being ended.",
                     "El melasma es el programa que con más probabilidad llega al final de lo que una clínica puede ofrecer mientras la clienta todavía quiere que pase algo, y por eso es donde más veces se deja que una relación se apague en lugar de terminarla."),
          moment: T("Month seven. She is still coming, you are no longer changing anything, and you have begun to dread the appointment.",
                     "Mes siete. Ella sigue viniendo, tú ya no cambias nada, y has empezado a temer la cita."),
          weak:   {
            line: T("\"I do not think there is a great deal more I can do here, but do drop in any time.\"",
                     "«Creo que aquí ya no puedo hacer mucho más, pero pásate cuando quieras.»"),
            cost: T("Truthful about the boundary and warmly meant, which already puts it ahead of silence. It ends the arrangement without giving her anywhere to go, so she leaves with a closed door and no address.",
                     "Sincero sobre el límite y dicho con calidez, lo que ya lo pone por delante del silencio. Termina el acuerdo sin darle ningún sitio al que ir, así que se va con una puerta cerrada y sin una dirección.")
          },
          strong: {
            line: T("\"I have taken this as far as I can take it well. The person you want for the next stretch is the doctor at the clinic on Calle Mayor — I will write to her today and copy you in. And if anything changes, I am here.\"",
                     "«Esto lo he llevado hasta donde puedo llevarlo bien. La persona que te hace falta para el siguiente tramo es la doctora de la clínica de la calle Mayor: le escribo hoy y te pongo en copia. Y si algo cambia, aquí estoy.»"),
            gain: T("Pronounces the conclusion, locates the cause in the boundary of your scope rather than in her, delivers a live referral, and leaves the arrangement in the condition a woman returns to and recommends from.",
                     "Pronuncia la conclusión, sitúa la causa en el límite de tu alcance y no en ella, entrega una derivación viva y deja el acuerdo en el estado desde el que una mujer vuelve y desde el que recomienda.")
          }
        },
        {
          name:   T("Acne programme — six sessions",
                     "Programa de acné — seis sesiones"),
          price:  T("€690 for six sessions",
                     "690 € las seis sesiones"),
          why:    T("When the course was paid for in advance by somebody else, the remaining session becomes a convenient way of postponing the conversation, and the person who pays for the postponement is the nineteen-year-old.",
                     "Cuando el bono lo pagó por adelantado otra persona, la sesión que queda se convierte en una manera cómoda de aplazar la conversación, y quien paga el aplazamiento es la chica de diecinueve años."),
          moment: T("Session five of six. What is in front of you is beyond what six sessions were ever going to address, and her mother paid in advance.",
                     "Sesión cinco de seis. Lo que tienes delante está más allá de lo que seis sesiones iban a abordar nunca, y su madre pagó por adelantado."),
          weak:   {
            line: T("\"Let us finish the six and then see where we are.\"",
                     "«Vamos a terminar las seis y luego vemos cómo estamos.»"),
            cost: T("Uses the remaining session as a way of not having the conversation, and lets a nineteen-year-old spend two more months believing this was the plan. The sentence that needed saying gets later and more expensive.",
                     "Usa la sesión que queda como manera de no tener la conversación, y deja que una chica de diecinueve pase dos meses más creyendo que este era el plan. La frase que había que decir se hace más tardía y más cara.")
          },
          strong: {
            line: T("\"I am going to stop the course here, and I am not going to charge you for the sixth. What you need is a dermatologist, and I would like to write to one this week.\"",
                     "«Voy a parar el bono aquí y la sexta no te la voy a cobrar. Lo que necesitas es una dermatóloga, y me gustaría escribirle esta semana.»"),
            gain: T("Ends it while she is still in the room, names where she should go, and gives up the last €115 in order to be the clinic that told her the truth. She is nineteen; you have thirty years of her skin ahead of you.",
                     "Lo termina con ella todavía delante, nombra adónde tiene que ir y renuncia a los últimos 115 € para ser la clínica que le dijo la verdad. Tiene diecinueve años: por delante te quedan treinta años de su piel.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('Closure is a state, not an absence', 'El cierre es un estado, no una ausencia'),
          body: [
            T('After a NO the relationship does not stay Active and it does not quietly evaporate. MBOK Ch.6 gives three closures and the engine offers exactly those three. Consulted — closed: she declined and there is no further clinical need or referral. Paused: she explicitly named a later time and agreed to be contacted at it. Referred–Discharged: her need is better met elsewhere and you have made or offered that referral.',
              'Tras un NO, la relación no se queda Activa ni se evapora en silencio. El MBOK Cap.6 da tres cierres y el motor ofrece exactamente esos tres. Consultada, cerrada: rechazó y no hay más necesidad clínica ni derivación. En pausa: nombró explícitamente un momento posterior y aceptó que se la contacte entonces. Derivada–Dada de alta: su necesidad se atiende mejor en otro sitio y tú has hecho u ofrecido esa derivación.'),
            T('The state is derived from what actually happened, never from how hopeful you feel. Paused recorded on a woman who simply declined is optimism written into a record — and a record is an instruction. In six weeks it will authorise a contact she never agreed to, made by someone who was not in the room and who has no idea the agreement is imaginary.',
              'El estado se deriva de lo que ocurrió realmente, nunca de lo esperanzada que te sientas. Registrar «En pausa» sobre una mujer que simplemente declinó es optimismo escrito en un registro, y un registro es una instrucción. Dentro de seis semanas autorizará un contacto que ella nunca aceptó, hecho por alguien que no estuvo en la sala y que no sabe que el acuerdo es imaginario.'),
            T('The same-day row is fixed: send what she is entitled to keep — the assessment, the honest limitation, and the lower-risk alternative — with no offer attached. "No offer attached" is the whole instrument. The moment anything is attached, the assessment becomes the wrapping of a second attempt.',
              'La fila del mismo día es fija: enviar lo que ella tiene derecho a conservar —la valoración, la limitación honesta y la alternativa de menor riesgo— sin ninguna oferta adjunta. «Sin oferta adjunta» es todo el instrumento. En cuanto se adjunta algo, la valoración se convierte en el envoltorio de un segundo intento.'),
            T('And the test of the whole closure is two questions, not one. Would she come back? Would she send someone? Returning survives an awkward ending. Referring does not: to recommend you she has to be able to repeat what happened without any part of it embarrassing her.',
              'Y la prueba de todo el cierre son dos preguntas, no una. ¿Volvería? ¿Enviaría a alguien? Volver sobrevive a un final incómodo. Recomendar no: para recomendarte tiene que poder contar lo que pasó sin que ninguna parte le dé vergüenza.')
          ] },
        { kind: 'signal',
          name: T('Fragment — the ninety seconds after a no', 'Fragmento — los noventa segundos posteriores a un no'),
          client: T('"I don\'t think I\'m going to go ahead. Thank you, though — you\'ve been very clear." — She is on her feet, she has asked for a card, and the word she chose was clear, not nice.',
                    '«Creo que no voy a seguir adelante. Pero gracias: has sido muy clara». — Está de pie, ha pedido una tarjeta, y la palabra que ha elegido es «clara», no «amable».'),
          prompt: T('What is being decided in the next ninety seconds, and what is not?',
                    '¿Qué se decide en los próximos noventa segundos y qué no?'),
          notice: [
            T('The decision is not. It was made before she stood up, and nothing said now moves it. What is being decided is what she says about this afternoon when somebody asks her about your clinic.',
              'La decisión, no. Se tomó antes de que se levantara, y nada de lo que se diga ahora la mueve. Lo que se decide es qué contará de esta tarde cuando alguien le pregunte por tu clínica.'),
            T('"You\'ve been very clear" is the specific compliment of a client who was told what something would not do. It is the sentence that carries referrals, and it is fragile: one more attempt removes it.',
              '«Has sido muy clara» es el cumplido concreto de una clienta a la que le contaron qué no iba a hacer algo. Es la frase que trae recomendaciones, y es frágil: un intento más la borra.'),
            T('She has no state in your system yet. Whatever gets typed in the next five minutes is an instruction to people who were not in this room, and it will be obeyed for months.',
              'Todavía no tiene ningún estado en tu sistema. Lo que se teclee en los próximos cinco minutos es una instrucción para personas que no estaban en esta sala, y se obedecerá durante meses.'),
            T('Nothing about her need has disappeared. If there is a cheaper or safer route that does not involve you, this is the last moment in which you can hand it to her without it reading as a sales move.',
              'Su necesidad no ha desaparecido. Si existe una vía más barata o más segura que no pasa por ti, este es el último momento en que puedes dársela sin que se lea como una maniobra de venta.')
          ] },
        { kind: 'match',
          prompt: T('Match each situation to the closure state MBOK Ch.6 requires.',
                    'Empareja cada situación con el estado de cierre que exige el MBOK Cap.6.'),
          left: [
            { id: 'k1', text: T('She declined. Nothing further is clinically indicated and she named no future point.',
                                'Ha declinado. No hay nada más indicado clínicamente y no nombró ningún momento futuro.') },
            { id: 'k2', text: T('"Not before the wedding in September." She agreed you may contact her after it.',
                                '«Antes de la boda de septiembre, no». Aceptó que la contactes después.') },
            { id: 'k3', text: T('Her concern is dermatological rather than aesthetic. You named the referral and offered to write to her GP.',
                                'Su preocupación es dermatológica más que estética. Nombraste la derivación y te ofreciste a escribir a su médica de cabecera.') },
            { id: 'k4', text: T('She declined, and you privately believe she will come round within a month.',
                                'Ha declinado, y tú crees para tus adentros que en un mes cambiará de idea.') },
            { id: 'k5', text: T('She wants the procedure; you will not perform it at the expectation she has stated; you named the practitioner who could assess it safely.',
                                'Ella quiere el procedimiento; tú no lo harás con la expectativa que ha expresado; nombraste a la profesional que podría valorarlo con seguridad.') }
          ],
          right: [
            { id: 'consulted', text: T('Consulted — closed', 'Consultada — cerrada') },
            { id: 'paused', text: T('Paused', 'En pausa') },
            { id: 'referred', text: T('Referred–Discharged', 'Derivada–Dada de alta') }
          ],
          pairs: { k1: 'consulted', k2: 'paused', k3: 'referred', k4: 'consulted', k5: 'referred' },
          why: T('k4 is the one that gets miscoded, every time, in every clinic. Your belief about what she will do next is not a state she agreed to. Paused requires two things she must actually have said: a later time, and permission to be contacted at it. Absent either, the honest record is Consulted — and Consulted does not mean lost. It means the file is truthful about what she consented to.',
                 'La k4 es la que se codifica mal, siempre, en todas las clínicas. Tu creencia sobre lo que ella hará después no es un estado que ella haya aceptado. «En pausa» exige dos cosas que ella tiene que haber dicho: un momento posterior y permiso para contactarla entonces. Si falta cualquiera de las dos, el registro honesto es «Consultada», y «Consultada» no significa perdida: significa que la ficha dice la verdad sobre lo que ella consintió.') },
        { kind: 'sort',
          prompt: T('Six things said or done in the ninety seconds after a NO. Sort them by what they leave behind.',
                    'Seis cosas dichas o hechas en los noventa segundos posteriores a un NO. Clasifícalas por lo que dejan detrás.'),
          client: T('"I don\'t think I\'m going to go ahead. Thank you, though — you\'ve been very clear."',
                    '«Creo que no voy a seguir adelante. Pero gracias: has sido muy clara».'),
          buckets: [
            { id: 'return', label: T('She would return, and would refer', 'Volvería, y recomendaría') },
            { id: 'lost', label: T('She would do neither', 'No haría ninguna de las dos') }
          ],
          items: [
            { id: 'z1', text: T('"That\'s a reasonable decision. I\'ll send the assessment and the honest limits, including the option that doesn\'t involve us."',
                                '«Es una decisión razonable. Te envío la valoración y los límites honestos, incluida la opción que no pasa por nosotros».'), bucket: 'return' },
            { id: 'z2', text: T('"Of course. I\'ll drop you a note in a few weeks in case things change."',
                                '«Claro. Te escribo en unas semanas por si las cosas cambian».'), bucket: 'lost' },
            { id: 'z3', text: T('"If it would help, I can write to the practitioner I think is better placed for this."',
                                '«Si te sirve, puedo escribir a la profesional que creo que está mejor situada para esto».'), bucket: 'return' },
            { id: 'z4', text: T('"I completely understand — most people need to think about it, and honestly the ones who wait usually wish they hadn\'t."',
                                '«Lo entiendo perfectamente; casi todo el mundo necesita pensarlo, y sinceramente las que esperan suelen arrepentirse».'), bucket: 'lost' },
            { id: 'z5', text: T('Recording the closure state and her reason, in her words, the same day.',
                                'Registrar el estado de cierre y su motivo, con sus palabras, el mismo día.'), bucket: 'return' },
            { id: 'z6', text: T('"The price is only valid today, but I\'ll hold it for you for a fortnight."',
                                '«El precio solo vale hoy, pero te lo mantengo quince días».'), bucket: 'lost' }
          ],
          why: T('z2 is the one that reads as warmth and is the most damaging: a follow-up she did not agree to converts her no into a pending yes, and she now knows the decision was not accepted. z4 is worse still — it answers her decision with a statistic about regret, which is the sentence she will quote to the friend who asks. z6 is the tell that the whole consultation had a discount held in reserve, and every honest thing you said before it is now retroactively a technique.',
                 'La z2 se lee como calidez y es la más dañina: un seguimiento que ella no acordó convierte su no en un sí pendiente, y ahora sabe que su decisión no fue aceptada. La z4 es aún peor: responde a su decisión con una estadística sobre el arrepentimiento, y esa es la frase que le contará a la amiga que le pregunte. La z6 revela que toda la consulta tenía un descuento guardado, y todo lo honesto que dijiste antes se vuelve retroactivamente una técnica.') },
        { kind: 'choose',
          prompt: T('She declined, named no future point, and said warmly on the way out: "Maybe one day." What do you record?',
                    'Ha declinado, no nombró ningún momento futuro y dijo con calidez al salir: «Quizá algún día». ¿Qué registras?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Paused — she said maybe one day.', 'En pausa: dijo que quizá algún día.'),
              why: T('"Maybe one day" is a courtesy on a doorstep. It is not a later time and it is not permission. Recorded as Paused it becomes a date your software will act on, and in six weeks someone will contact her citing an agreement she never made.',
                     '«Quizá algún día» es una cortesía en la puerta. No es un momento posterior ni un permiso. Registrado como «En pausa» se convierte en una fecha sobre la que tu software actuará, y dentro de seis semanas alguien la contactará invocando un acuerdo que ella nunca hizo.') },
            { id: 'b', verdict: 'best',
              label: T('Consulted — closed, with the closure note in her words and the same-day summary sent with no offer attached.',
                       'Consultada — cerrada, con la nota de cierre en sus palabras y el resumen del mismo día enviado sin oferta adjunta.'),
              why: T('The honest state, and the one that leaves the door genuinely open — because a door she can walk back through is a door nobody is standing in. Her words in the closure note are also what makes her return conversation start from where this one ended, in eighteen months, with a colleague who was not here.',
                     'El estado honesto, y el que deja la puerta realmente abierta, porque una puerta por la que puede volver a entrar es una puerta en la que no hay nadie plantado. Sus palabras en la nota de cierre son además lo que hará que su conversación de vuelta empiece donde terminó esta, dentro de dieciocho meses, con una compañera que no estuvo aquí.') },
            { id: 'c', verdict: 'harmful',
              label: T('Leave the record Active until you see whether she comes back.',
                       'Dejar el registro como Activa hasta ver si vuelve.'),
              why: T('Active is an instruction to your whole clinic to treat her as an ongoing client: campaigns, reminders, review calls. You have not deferred a decision, you have delegated it to software, and everything that reaches her over the next quarter will do so under an authority she never granted.',
                     '«Activa» es una instrucción a toda la clínica para tratarla como clienta en curso: campañas, recordatorios, llamadas de revisión. No has aplazado una decisión: se la has delegado al software, y todo lo que le llegue el próximo trimestre lo hará con una autoridad que ella nunca concedió.') }
          ],
          principle: T('MBOK Ch.6 — End Relationships Responsibly. The state is derived from what she agreed to, never from what you hope.',
                       'MBOK Cap.6 — Terminar Relaciones con Responsabilidad. El estado se deriva de lo que ella aceptó, nunca de lo que tú esperas.'),
          retry: {
            note: T('That ending was hers to make. This one is yours, and nobody will ask you for it.',
                    'Aquel final le correspondía a ella. Este te corresponde a ti, y nadie te lo va a pedir.'),
            prompt: T('Amparo has been your client for two years. She now wants a third round of something you have concluded she should stop having. She is not declining anything — you are ending something. What do you do?',
                      'Amparo lleva dos años siendo clienta tuya. Ahora quiere una tercera tanda de algo que has concluido que debería dejar de hacerse. Ella no está rechazando nada: eres tú quien termina algo. ¿Qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Do it, but at a much smaller dose — if you refuse she will simply go somewhere that does it at full strength.',
                         'Hacerlo, pero con mucha menos cantidad: si te niegas, se irá a un sitio que se lo haga entero.'),
                why: T('The quantity was never the objection, so a smaller version of the thing you should not do is still the thing you should not do — now with your name on it and a record that says Active. You have also decided on her behalf that she cannot be told the truth and trusted with it.',
                       'La cantidad nunca fue la objeción, así que una versión más pequeña de lo que no deberías hacer sigue siendo lo que no deberías hacer, ahora con tu nombre y con una ficha que dice «Activa». Además has decidido por ella que no se le puede contar la verdad y confiarle la decisión.') },
              { id: 'b', verdict: 'best',
                label: T('"I\'m not going to do this one, and I\'ll tell you plainly why. Here is what I think would happen, and here is what I\'d suggest instead. If you want a second opinion I\'ll write to whoever you choose with everything I know about your face — whether or not you come back to me."',
                         '«Esta no te la voy a hacer, y te digo claramente por qué. Esto es lo que creo que pasaría y esto es lo que propondría en su lugar. Si quieres una segunda opinión, le escribo a quien tú elijas con todo lo que sé de tu cara, vuelvas conmigo o no».'),
                why: T('This is Referred–Discharged done out loud: the ending is stated once, the reasoning is given in terms she can take to somebody else, and the handover is offered without conditions. It costs a regular client and it is the only version she can describe to a friend without any part of it embarrassing either of you.',
                       'Esto es «Derivada–Dada de alta» hecho en voz alta: el final se enuncia una vez, el razonamiento se le da en términos que puede llevarse a otra persona y el traspaso se ofrece sin condiciones. Te cuesta una clienta habitual y es la única versión que ella puede contarle a una amiga sin que ninguna parte os avergüence a ninguna de las dos.') },
              { id: 'c', verdict: 'harmful',
                label: T('Stop offering her appointments. The diary is full enough that she will drift without a conversation.',
                         'Dejar de ofrecerle citas. La agenda va bastante llena, así que se irá diluyendo sin necesidad de conversación.'),
                why: T('A discharge she is never told about is one she cannot act on: no reason, no referral, no second opinion, and a record that still reads Active while the clinic keeps sending her campaigns. She will conclude she did something wrong, and she will have the treatment somewhere that never assessed her.',
                       'Un alta de la que no se la informa es un alta sobre la que no puede actuar: sin motivo, sin derivación, sin segunda opinión y con una ficha que sigue diciendo «Activa» mientras la clínica le manda campañas. Concluirá que hizo algo mal y se hará el tratamiento en un sitio que nunca la valoró.') }
            ],
            principle: T('A relationship you end is ended in a conversation, with the reason said out loud and a route out of the door — never by a diary quietly declining to offer her anything.',
                         'Una relación que terminas tú se termina en una conversación, con el motivo dicho en voz alta y una salida por la puerta, nunca con una agenda que en silencio deja de ofrecerle nada.'),
            changes: {
              axis: 'recommendation',
              detail: T('Nobody is declining anything. She is requesting a third round, and what you now have to build is a refusal — what you think would happen, what you would do instead, and where she can go if she disagrees — spoken to a loyal client who expected a yes.',
                        'Nadie está rechazando nada. Ella pide una tercera tanda y lo que ahora debes construir es una negativa: qué crees que pasaría, qué harías en su lugar y adónde puede ir si no está de acuerdo, dicho a una clienta fiel que esperaba un sí.')
            } } },
        { kind: 'reflect',
          prompt: T('Open your records. Find a client who declined more than six months ago and whose state is still Active or blank. Which of the three closures is the honest one — and what has your clinic sent her since?',
                    'Abre tus registros. Busca una clienta que declinó hace más de seis meses y cuyo estado sigue siendo Activa o en blanco. ¿Cuál de los tres cierres es el honesto, y qué le ha enviado tu clínica desde entonces?'),
          placeholder: T('Count the automatic messages as well as the deliberate ones. She does not distinguish between them, and neither does the method.',
                         'Cuenta los mensajes automáticos además de los deliberados. Ella no los distingue, y el método tampoco.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm9l5', n: 5, minutes: 10,
      title: T('The result that disappointed', 'El resultado que decepcionó'),
      objective: T('Handle the four-week conversation where the outcome fell short of the expectation you set.',
                   'Gestionar la conversación de las cuatro semanas en la que el resultado se quedó por debajo de la expectativa que tú fijaste.'),
      provenance: {
        chapter: 16,
        principle: T('The month-one contact exists to evaluate honestly — how is your skin responding, should we adjust anything — which means it has to be able to carry the answer "it did less than I told you it would".',
                     'El contacto del mes uno existe para evaluar con honestidad —cómo está respondiendo tu piel, si hay que ajustar algo—, lo que significa que tiene que poder soportar la respuesta «ha hecho menos de lo que te dije que haría».'),
        phase: 'continuation',
        trustStage: 'confirmation',
        standard: 6,
        duty: 4,
        toolkit: 8
      },
      depth: {
        whyItGoesWrong: T(
          'When an outcome lands short, the urge is to shield her from the disappointment by accounting for it: these protocols run to twelve weeks, every skin reacts at its own speed, the camera picks up more than a bathroom mirror. Any of those sentences may be accurate, and the clinician saying them is sincerely trying to settle her. But arriving with reasons before she has described what she can see turns the opening seconds into a defence, and it teaches her that this is not a room where a treatment is allowed to have fallen flat. What she wanted was for a qualified pair of eyes on her jawline to say yes, I see it too, or no, I do not.',
          'Cuando un resultado se queda corto, el impulso es blindarla de la decepción justificándola: estos protocolos van a doce semanas, cada piel reacciona a su ritmo, la cámara capta más que el espejo del baño. Cualquiera de esas frases puede ser exacta, y la clínica que las dice intenta sinceramente calmarla. Pero llegar con razones antes de que ella haya descrito qué ve convierte los primeros segundos en una defensa, y le enseña que esta no es una sala donde se le permita a un tratamiento haber salido plano. Lo que ella quería era que unos ojos cualificados sobre su mandíbula dijeran sí, yo también lo veo, o no, no lo veo.'),
        sheIsThinking: T(
          'I do not want to be told it takes time. I want her to study my jawline and say whether she can see what I can see.',
          'No quiero que me digan que tarda. Quiero que me estudie la mandíbula y me diga si ella ve lo mismo que veo yo.'),
        ladder: {
          weak:    { line: T('"These protocols really do run to twelve weeks, and every skin reacts at its own speed."',
                     '«Estos protocolos van de verdad a doce semanas, y cada piel reacciona a su ritmo».'),
                     effect: T('Accurate, and an answer to a grievance she had not finished stating. She abandons the grievance. She does not abandon the opinion, and the appointment she declines to make is the following one.',
                               'Exacto, y una respuesta a una queja que ella no había terminado de exponer. Abandona la queja. No abandona la opinión, y la cita que no pide es la siguiente.') },
          average: { line: T('"I am sorry to hear that. Pop in and the two of us will take another look at it."',
                     '«Siento oír eso. Vente y lo volvemos a mirar las dos».'),
                     effect: T('Responsive, generous, and it gets her back through the door, which is more than most clinics manage. It shifts the conversation without ever agreeing or disagreeing with her description, so she walks in unsure whether you believed a word of it.',
                               'Receptivo, generoso y consigue que vuelva a cruzar la puerta, que es más de lo que logran la mayoría de las clínicas. Desplaza la conversación sin darle ni quitarle la razón a su descripción, así que entra sin saber si te has creído una sola palabra.') },
          strong:  { line: T('"Describe what you can see." — and then, if she is right: "You are right, that is less than I told you to expect. Here is what I think went on, and here is what I would do about it."',
                     '«Descríbeme qué ves». Y después, si tiene razón: «Tienes razón, es menos de lo que te dije que esperaras. Esto es lo que creo que ha pasado y esto es lo que yo haría».'),
                     effect: T('Her description is taken as clinical data. Admitting that it delivered less than you promised is the only thing that keeps anything else you say usable, and it is why she believes the adjustment you propose next.',
                               'Su descripción se toma como dato clínico. Admitir que ha dado menos de lo que prometiste es lo único que mantiene utilizable cualquier otra cosa que digas, y es la razón por la que se cree el ajuste que propones después.') }
        }
      },
      treatments: [
        {
          name:   T("Radiofrequency microneedling — course of three",
                     "Microneedling con radiofrecuencia — pauta de tres sesiones"),
          price:  T("€940 for three sessions",
                     "940 € las tres sesiones"),
          why:    T("This is the treatment clients most often judge against the one thing it was least aimed at, which means the four-week conversation is usually two people talking about two different parts of the same face.",
                     "Este es el tratamiento que las clientas juzgan con más frecuencia contra lo único a lo que menos apuntaba, así que la conversación de las cuatro semanas suele ser dos personas hablando de dos partes distintas de la misma cara."),
          moment: T("Four weeks after the third session. She says she cannot see anything, and she is embarrassed to be saying it.",
                     "Cuatro semanas después de la tercera sesión. Dice que no ve nada, y le da vergüenza estar diciéndolo."),
          weak:   {
            line: T("\"These really are slow — most people would not judge them at four weeks, and I would want to look at you again at three months.\"",
                     "«Esto va lento de verdad. Casi nadie lo juzga a las cuatro semanas, y yo querría volver a mirarte a los tres meses.»"),
            cost: T("Accurate, and an answer to a grievance she had not finished stating. She abandons the grievance. She does not abandon the opinion, and the appointment she declines to make is the next one.",
                     "Exacto, y una respuesta a una queja que ella no había terminado de formular. Abandona la queja. No abandona la opinión, y la cita que no pide es la siguiente.")
          },
          strong: {
            line: T("\"Describe what you are looking at.\" — and then, if she is right: \"You are right. That is less than I told you to expect.\"",
                     "«Descríbeme lo que estás mirando». Y después, si tiene razón: «Tienes razón. Es menos de lo que te dije que esperaras»."),
            gain: T("Takes her description as clinical data rather than as a complaint to be managed. Agreeing that it delivered less than you promised is the only thing that keeps everything else you say usable.",
                     "Toma su descripción como dato clínico y no como una queja que gestionar. Darle la razón en que ha dado menos de lo que prometiste es lo único que mantiene utilizable todo lo demás que digas.")
          }
        },
        {
          name:   T("Hyaluronic acid filler — tear trough, 1 ml",
                     "Relleno de ácido hialurónico — surco lagrimal, 1 ml"),
          price:  T("€390 for 1 ml",
                     "390 € el mililitro"),
          why:    T("Under the eye the disappointment arrives quickly and she tells other people about it before she tells you, which means the only version of this conversation that helps is the one that happens in a chair.",
                     "Bajo el ojo la decepción llega rápido y se la cuenta a otras personas antes que a ti, lo que significa que la única versión útil de esta conversación es la que ocurre en una silla."),
          moment: T("Week three. She writes to say it looks puffy and she does not like it.",
                     "Semana tres. Escribe para decir que lo ve hinchado y que no le gusta."),
          weak:   {
            line: T("\"There is often a bit of residual swelling at three weeks — give it another fortnight and have a look then.\"",
                     "«A las tres semanas suele quedar algo de hinchazón. Dale quince días más y lo miras entonces.»"),
            cost: T("A reasonable answer to a complaint she had not finished making, and it buys a fortnight in which she tells four people she does not like her eyes. She will not write again at week five.",
                     "Una respuesta razonable a una queja que no había terminado de hacer, y compra quince días en los que le cuenta a cuatro personas que no le gustan sus ojos. En la semana cinco ya no vuelve a escribir.")
          },
          strong: {
            line: T("\"Come in tomorrow and let me look at it with you. Bring the photograph from before, and if I agree with you I will say so.\"",
                     "«Vente mañana y lo miramos juntas. Trae la foto de antes, y si estoy de acuerdo contigo te lo digo.»"),
            gain: T("Moves it into a room, puts a photograph between you, and commits in advance to the possibility that she is right. That last clause is the one she repeats to the four people.",
                     "Lo lleva a una consulta, pone una foto entre las dos y se compromete de antemano con la posibilidad de que ella tenga razón. Esa última parte es la que ella le repite a las cuatro personas.")
          }
        },
        {
          name:   T("Laser hair removal — course of six",
                     "Depilación láser — bono de seis sesiones"),
          price:  T("€690 for six sessions",
                     "690 € el bono de seis"),
          why:    T("Hair removal is the one place where her impression can be checked against something outside both your heads, and almost nobody checks it — which is why the argument gets had instead.",
                     "La depilación es el único sitio donde su impresión se puede contrastar con algo que está fuera de las dos cabezas, y casi nadie lo contrasta, que es por lo que en su lugar se tiene la discusión."),
          moment: T("Session four. She says she is still shaving twice a week and she does not think it has done anything.",
                     "Sesión cuatro. Dice que sigue afeitándose dos veces por semana y que no cree que esto haya hecho nada."),
          weak:   {
            line: T("\"It does take the full six, and hair grows in cycles — session four is usually too early to judge it.\"",
                     "«Hacen falta las seis, y el pelo va por ciclos. La cuarta sesión suele ser pronto para juzgarlo.»"),
            cost: T("True, and it is an argument with her own experience. She stops saying it, and then she stops coming, and you will hear the verdict from somebody else entirely.",
                     "Es verdad, y es discutir con su propia experiencia. Deja de decirlo y después deja de venir, y el veredicto lo oirás por boca de otra persona.")
          },
          strong: {
            line: T("\"Twice a week. Is that the same as before we started, or less?\" — and then the photograph from session one.",
                     "«Dos veces por semana. ¿Eso es lo mismo que antes de empezar o menos?» Y después la foto de la primera sesión."),
            gain: T("Turns her impression into something the two of you can look at, and gives her the only thing that settles it either way — which sometimes settles it against you, and that is the point.",
                     "Convierte su impresión en algo que podéis mirar las dos, y le da lo único que lo zanja en un sentido o en otro, que a veces lo zanja en tu contra, y de eso se trata.")
          }
        }
      ],
      conversation: {
        setting: T("Four weeks after the third session, radiofrequency microneedling, course of three, €940. She has come in without an appointment.",
                   "Cuatro semanas después de la tercera sesión, microneedling con radiofrecuencia, pauta de tres, 940 €. Ha venido sin cita."),
        before: [
          { who: 'client', line: T("\"I will be honest with you — I have finished the three and I cannot see anything.\"",
                                    "«Te voy a ser sincera: he terminado las tres y no veo nada.»") },
          { who: 'practitioner', line: T("\"I am glad you said so, and thank you for coming in. These really are slow — most people would not judge them at four weeks, and I would want to look at you again at three months before either of us draws a conclusion.\"",
                                    "«Me alegro de que me lo digas, y gracias por venir. Esto va lento de verdad: casi nadie lo juzga a las cuatro semanas, y yo querría volver a mirarte a los tres meses antes de que ninguna de las dos saque conclusiones.»") },
          { who: 'client', line: T("\"Right. It is just, it was €940.\"",
                                    "«Ya. Es que eran 940 €.»") },
          { who: 'practitioner', line: T("\"It was, and I do not take that lightly. Let us do this — come in at the three-month point and we will look at the photographs side by side. If I am wrong, I am wrong.\"",
                                    "«Lo eran, y no me lo tomo a la ligera. Hagamos una cosa: vente a los tres meses y miramos las fotos una al lado de la otra. Si me equivoco, me equivoco.»") },
          { who: 'client', line: T("\"Okay.\"",
                                    "«Vale.»") },
          { who: 'practitioner', line: T("\"I will put you down for the twelfth of March. And try not to judge it in the bathroom mirror — that light is nobody's friend.\"",
                                    "«Te apunto el doce de marzo. Y no lo juzgues en el espejo del baño, que esa luz no le hace favores a nadie.»") },
          { who: 'client', line: T("\"Ha. Alright. Thanks.\"",
                                    "«Ja. Vale. Gracias.»") }
        ],
        after: [
          { who: 'client', line: T("\"I will be honest with you — I have finished the three and I cannot see anything.\"",
                                    "«Te voy a ser sincera: he terminado las tres y no veo nada.»") },
          { who: 'practitioner', line: T("\"Describe what you are looking at.\"",
                                    "«Descríbeme lo que estás mirando.»") },
          { who: 'client', line: T("\"The fold from my nose down to the corner of my mouth. It is exactly the same. That is the one I came about.\"",
                                    "«El surco que me va de la nariz a la comisura. Está exactamente igual. Es por el que vine.»") },
          { who: 'practitioner', line: T("\"Let me get the photograph from the first session. … You are right. That one has not moved.\"",
                                    "«Déjame coger la foto de la primera sesión. … Tienes razón. Ese no se ha movido.»") },
          { who: 'client', line: T("\"…Thank you for saying that.\"",
                                    "«…Gracias por decírmelo.»") },
          { who: 'practitioner', line: T("\"That is less than I told you to expect, and I told you the wrong thing. That fold is structural — it was never the one these three sessions were aimed at, and I should have said so at the start rather than at the end.\"",
                                    "«Es menos de lo que te dije que esperaras, y te lo conté mal. Ese surco es estructural: nunca fue al que apuntaban estas tres sesiones, y te lo tendría que haber dicho al principio y no al final.»") },
          { who: 'client', line: T("\"So what were they for?\"",
                                    "«¿Entonces para qué eran?»") },
          { who: 'practitioner', line: T("\"The texture across the cheek, which has moved. What I would do now is stop rather than sell you three more of the same. Give me a week and I will come back to you with what I actually think that fold needs — and I am not asking you for anything today.\"",
                                    "«Para la textura de la mejilla, que sí se ha movido. Lo que yo haría ahora es parar y no venderte tres más de lo mismo. Dame una semana y te digo qué creo de verdad que necesita ese surco, y hoy no te pido nada.»") }
        ],
        whatChanged: T("The first version was clinically reasonable and it never once agreed or disagreed with what she said she could see. It offered three months, a photograph and a joke about bathroom lighting, and every one of those things postponed the only question in the room. She left without knowing whether her practitioner believed her, and a woman in that state does not come back in March. The second version asked her to describe it, fetched the photograph while she was still sitting there, and said the two sentences that are hardest to say: you are right, and I told you the wrong thing. Admitting the mis-set expectation is what makes the next recommendation worth anything, and stopping the course rather than selling three more is the only thing that proves it.",
                       "La primera versión era razonable desde lo clínico y ni una sola vez dio ni quitó la razón a lo que ella decía ver. Ofreció tres meses, una foto y una broma sobre la luz del baño, y cada una de esas cosas aplazaba la única pregunta que había en la sala. Se fue sin saber si su profesional la creía, y una mujer en ese estado no vuelve en marzo. La segunda versión le pidió que lo describiera, fue a por la foto con ella todavía sentada y dijo las dos frases más difíciles de decir: tienes razón y te dije lo que no era. Reconocer la expectativa mal puesta es lo que hace que la siguiente recomendación valga algo, y parar el tratamiento en lugar de venderle tres más es lo único que lo demuestra."),
        cost: T("Not €940 — that is already paid. What the first version costs is every treatment she was ever going to buy afterwards, and the sentence she will use about this clinic, which is that they were lovely and it did nothing.",
                "No son 940 €: eso ya está pagado. Lo que cuesta la primera versión es cada tratamiento que iba a comprar después, y la frase con la que va a describir esta clínica, que es que fueron encantadoras y no sirvió de nada.")
      },
      blocks: [
        { kind: 'passage',
          title: T('The only standard tested after the money', 'El único estándar que se examina después del dinero'),
          body: [
            T('Trust Stage 7 is Confirmation: has my experience confirmed this trust? It is the only stage the client answers on her own, at home, in front of a mirror, without you in the room. Everything you did in Phases 1 to 7 was a claim. The month-1 contact is where the claim is settled.',
              'La Etapa de Confianza 7 es la Confirmación: ¿mi experiencia ha confirmado esta confianza? Es la única etapa que la clienta responde sola, en casa, delante de un espejo y sin ti en la sala. Todo lo que hiciste en las Fases 1 a 7 era una afirmación. El contacto del mes 1 es donde esa afirmación se liquida.'),
            T('Trust Standard 6 — Protect Trust After Decision — is the only one of the six whose test happens after the money has changed hands. Before the decision, keeping it costs nothing. This is why it is the standard most consistently skipped, and why skipping it is invisible on this month\'s figures and expensive on next year\'s.',
              'El Estándar de Confianza 6 —Proteger la Confianza Después de la Decisión— es el único de los seis cuya prueba ocurre después de que el dinero haya cambiado de manos. Antes de la decisión, cumplirlo no cuesta nada. Por eso es el estándar que más sistemáticamente se omite, y por eso omitirlo es invisible en las cifras de este mes y caro en las del año que viene.'),
            T('A disappointing result has two possible causes and they require different sentences. Either the result is inside what you promised and her private expectation was set higher than you ever heard — a Phase 3 and 4 failure — or you set the expectation too high in Phase 5. The second is far more common and much harder to say, because saying it means naming a sentence of your own.',
              'Un resultado decepcionante tiene dos causas posibles y exigen frases distintas. O el resultado está dentro de lo que prometiste y la expectativa privada de ella era más alta de lo que tú llegaste a oír —un fallo de las Fases 3 y 4—, o tú fijaste la expectativa demasiado alta en la Fase 5. La segunda es mucho más frecuente y mucho más difícil de decir, porque decirla implica nombrar una frase tuya.'),
            T('The Continuation Engine will not let you arrive at that call unprepared. When Phase 5 contained an outcome promise the condition does not support, the plan comes back flagged: your 30-day row is where that promise gets tested, and you are required to write down how you will handle it truthfully — while you are calm, days before she is disappointed.',
              'El Motor de Continuidad no te deja llegar a esa llamada sin preparación. Cuando la Fase 5 contuvo una promesa de resultado que la condición no respalda, el plan vuelve marcado: tu fila de los 30 días es donde esa promesa se pone a prueba, y se te exige escribir cómo la vas a gestionar con la verdad, mientras estás tranquila, días antes de que ella se lleve la decepción.')
          ] },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 16', 'The Beauty Sales Secrets — Capítulo 16'),
          quote: T('The follow-up call is easy when the result is good. It is the only one that matters when it isn\'t.',
                   'La llamada de seguimiento es fácil cuando el resultado es bueno. Es la única que importa cuando no lo es.'),
          note: T('Chapter 16 measures a system by whether it survives a bad day, not by whether it runs on a good one. Applied to Phase 8: any clinic can make the month-1 call after a result that worked. The system is what makes the call happen when the practitioner already suspects the answer.',
                  'El Capítulo 16 mide un sistema por si sobrevive a un mal día, no por si funciona en uno bueno. Aplicado a la Fase 8: cualquier clínica hace la llamada del mes 1 tras un resultado que salió bien. El sistema es lo que hace que la llamada ocurra cuando la profesional ya sospecha la respuesta.') },
        { kind: 'spot',
          prompt: T('One line protected the practitioner instead of the client. Which one?',
                    'Una línea protegió a la profesional en lugar de a la clienta. ¿Cuál?'),
          lines: [
            { who: 'client', text: T('"I\'ll be honest — I can\'t really see much difference. My husband couldn\'t either."',
                                     '«Voy a ser sincera: no noto mucha diferencia. Mi marido tampoco».') },
            { who: 'you', text: T('"It can take a little longer to settle in some people — you\'re only at four weeks."',
                                  '«En algunas personas tarda un poco más en asentarse; solo estás a cuatro semanas».') },
            { who: 'client', text: T('"Right. So it might still change?"', '«Ya. ¿Entonces todavía puede cambiar?»') },
            { who: 'you', text: T('"It might, yes. Let\'s give it another month and see where we are."',
                                  '«Puede que sí. Démosle otro mes y vemos dónde estamos».') },
            { who: 'client', text: T('"Okay. Thanks."', '«Vale. Gracias».') }
          ],
          answerIndex: 1,
          why: T('Line 2 is clinically true and is being used as a delay. Everything after it is built on the delay: line 4 buys a month that will end in exactly this conversation with less trust in it, and her closing "okay, thanks" is the sound of a client deciding not to raise it again. The honest version of line 2 puts the number you gave her in Phase 5 next to what she is looking at now, out loud, before she has to ask twice.',
                 'La línea 2 es clínicamente cierta y se está usando como aplazamiento. Todo lo que viene después se apoya en ese aplazamiento: la línea 4 compra un mes que terminará exactamente en esta conversación con menos confianza dentro, y su «vale, gracias» final es el sonido de una clienta decidiendo no volver a sacar el tema. La versión honesta de la línea 2 pone la cifra que le diste en la Fase 5 al lado de lo que ella está viendo ahora, en voz alta, antes de que tenga que preguntar dos veces.'),
          principle: T('A true sentence used to postpone a hard one is a lie with a good alibi.',
                       'Una frase verdadera usada para aplazar una difícil es una mentira con una buena coartada.') },
        { kind: 'choose',
          prompt: T('Four weeks. She sees no difference — and in Phase 5 you did promise more than the condition supported. What do you say?',
                    'Cuatro semanas. Ella no ve diferencia, y en la Fase 5 tú prometiste más de lo que la condición respaldaba. ¿Qué dices?'),
          options: [
            { id: 'a', verdict: 'best',
              label: T('"I think I set that expectation too high. In October I said you\'d see the lines soften noticeably, and looking at this with you now, that was more than this was ever going to do. That\'s on me. Let me tell you what it did do, and what your actual options are — including doing nothing further."',
                       '«Creo que fijé esa expectativa demasiado alta. En octubre te dije que verías las líneas suavizarse de forma notable, y mirándolo ahora contigo, eso era más de lo que esto iba a dar. Es responsabilidad mía. Te cuento lo que sí ha hecho y cuáles son tus opciones reales, incluida la de no hacer nada más».'),
              why: T('It quotes your own sentence back, dates it, concedes it without a defence clause, and then does the useful thing — which is to separate what actually happened from what was promised, and to put "nothing further" on the list of options. This is the conversation that produces referrals from disappointed clients, which is the hardest referral there is and the most durable.',
                     'Cita tu propia frase, la fecha, la concede sin cláusula defensiva y luego hace lo útil: separar lo que ocurrió realmente de lo que se prometió y poner «no hacer nada más» en la lista de opciones. Esta es la conversación que produce recomendaciones de clientas decepcionadas, que es la recomendación más difícil que existe y la más duradera.') },
            { id: 'b', verdict: 'weak',
              label: T('"Results do vary a lot between people, and yours may still be developing."',
                       '«Los resultados varían mucho de una persona a otra, y el tuyo todavía puede estar evolucionando».'),
              why: T('True, evasive and answered to a direct question. She asked whether it worked; you answered with a population. She will not argue — she will conclude that the honest conversation is not available here, and everything you say at month 3 will be heard through that conclusion.',
                     'Cierto, evasivo y dicho como respuesta a una pregunta directa. Ella preguntó si había funcionado; tú has respondido con una población. No discutirá: concluirá que aquí la conversación honesta no está disponible, y todo lo que digas en el mes 3 se oirá a través de esa conclusión.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Let\'s book a top-up — a second session usually makes the difference."',
                       '«Vamos a reservar un retoque: la segunda sesión suele marcar la diferencia».'),
              why: T('You have answered a disappointment with a sale. She will either pay to repair your promise or leave, and in both cases she now knows what the follow-up call was for. This is the single fastest way to convert a mediocre clinical result into a review, a refund request, or a story told at a dinner table.',
                     'Has respondido a una decepción con una venta. O paga por reparar tu promesa o se va, y en ambos casos ya sabe para qué era la llamada de seguimiento. Es la forma más rápida de convertir un resultado clínico mediocre en una reseña, una petición de reembolso o una historia contada en una cena.') }
          ],
          principle: T('Trust Standard 6 — Protect Trust After Decision. It is the only standard whose test comes after the money, which is exactly why it is the one that gets skipped.',
                       'Estándar de Confianza 6 — Proteger la Confianza Después de la Decisión. Es el único cuya prueba llega después del dinero, y justamente por eso es el que se omite.'),
          retry: {
            note: T('That disappointment was yours to own. Here is the other cause — the outcome matches the wording you wrote down in October, and she is still let down.',
                    'Aquella decepción era tuya. Aquí tienes la otra causa: el resultado coincide con lo que dejaste escrito en octubre y ella sigue desencantada.'),
            prompt: T('The same four-week call, a different client. Rosario: "I expected to seem rested. I seem exactly the way I did in October."',
                      'La misma llamada de las cuatro semanas, otra clienta. Rosario: «Esperaba parecer descansada. Parezco igual que en octubre».'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"My wording in October was that it would soften those two lines by roughly a third, and that is where we are."',
                         '«Lo que dije en octubre fue que suavizaría esas dos líneas alrededor de un tercio, y ahí estamos».'),
                why: T('You are correct, and correctness here is an argument she has no route out of. What reaches her is that your notes exist to defend you, so the call ends in polite agreement and no fourth appointment.',
                       'Tienes razón, y aquí tener razón es una discusión de la que ella no tiene salida. Lo que le llega es que tus notas existen para defenderte a ti, así que la llamada acaba en un acuerdo cortés y sin cuarta cita.') },
              { id: 'b', verdict: 'best',
                label: T('"Then I missed something in October, and I\'d want to find it. When you pictured this, what were you seeing? Because \'rested\' is not the same target as those two lines — and if that is why you booked, it went past me."',
                         '«Entonces se me escapó algo en octubre y querría encontrarlo. Cuando te lo imaginabas, ¿qué veías? Porque «descansada» no es el mismo objetivo que esas dos líneas, y si reservaste por eso, se me pasó».'),
                why: T('The clinical outcome is defensible; the discovery is not, so this takes responsibility for the listening instead of the promise. Her reply usually points at something still within reach — sleep, weight, a photograph, a remark at a wedding.',
                       'El resultado clínico es defendible; el descubrimiento no, así que esto asume la responsabilidad de la escucha y no de la promesa. Su respuesta suele señalar algo todavía alcanzable: el sueño, el peso, una fotografía, un comentario en una boda.') },
              { id: 'c', verdict: 'harmful',
                label: T('"We can always do more — a second syringe would bring you nearer the picture you had."',
                         '«Siempre podemos hacer más: una segunda jeringa te acercaría a la imagen que tenías».'),
                why: T('You are proposing a treatment aimed at a target nobody in the room has defined yet. It is bought on the same misunderstanding as the first, and when it also misses, the disappointment doubles and has been paid for twice.',
                       'Propones un tratamiento dirigido a un objetivo que nadie en la sala ha definido todavía. Se compra sobre el mismo malentendido que el primero, y cuando también falle, la decepción se duplica y estará pagada dos veces.') }
            ],
            principle: T('The same sentence at four weeks has two causes. If you promised too much, quote your own promise back; if she pictured an outcome you were unaware of, ask what she pictured. The repair that fits the other cause turns a let-down client into an argument.',
                         'La misma frase a las cuatro semanas tiene dos causas. Si prometiste de más, cita tu propia promesa; si ella se imaginó un resultado que tú desconocías, pregúntale qué se imaginaba. La reparación de la otra causa convierte a una clienta desencantada en una discusión.'),
            changes: {
              axis: 'disclosure',
              detail: T('Your October wording now matches the result, so the missing piece is no longer in your notes but in her head — the picture she arrived with and never said aloud. Nothing moves until she puts it on the table, and only a question can get it there.',
                        'Ahora lo que escribiste en octubre coincide con el resultado, así que lo que falta ya no está en tus notas sino en su cabeza: la imagen con la que llegó y que nunca dijo en voz alta. Nada se mueve hasta que la pone sobre la mesa, y solo una pregunta puede llevarla ahí.')
            } } },
        { kind: 'timedPause',
          prompt: T('You have said "that\'s on me." Do not fill the pause with a solution.',
                    'Has dicho «es responsabilidad mía». No llenes la pausa con una solución.'),
          first: T('"No, no — honestly, it\'s fine. I probably expected too much."',
                   '«No, no; de verdad, no pasa nada. Seguramente esperaba demasiado».'),
          seconds: 4,
          second: T('"...Although. I did tell my sister about it. That\'s the bit that makes me feel silly."',
                    '«...Aunque. Se lo conté a mi hermana. Esa es la parte que me hace sentir tonta».'),
          why: T('Her first response protects you, because that is what clients do when a professional apologises. What arrives after the pause is the actual injury, and it is not clinical: she repeated your promise to someone and now has to unrepeat it. That sentence is the referral you were about to lose, and it is answerable — but only if you heard it, which requires four seconds of not being useful.',
                 'Su primera respuesta te protege, porque es lo que hacen las clientas cuando una profesional se disculpa. Lo que llega tras la pausa es el daño real, y no es clínico: repitió tu promesa a alguien y ahora tiene que desdecirse. Esa frase es la recomendación que estabas a punto de perder, y tiene respuesta, pero solo si la has oído, y eso exige cuatro segundos de no ser útil.') },
        { kind: 'check',
          prompt: T('In the Continuation Engine, where does a Phase 5 over-promise get tested?',
                    'En el Motor de Continuidad, ¿dónde se pone a prueba una promesa excesiva de la Fase 5?'),
          options: [
            { id: 'a', text: T('At the day-3 contact, while the result is still settling.',
                               'En el contacto del día 3, mientras el resultado aún se asienta.') },
            { id: 'b', text: T('At the 30-day row of the Toolkit #8 plan — flagged in the plan notes before the call is ever made.',
                               'En la fila de los 30 días del plan del Toolkit #8, marcada en las notas del plan antes incluso de hacer la llamada.') },
            { id: 'c', text: T('At the same-day booking confirmation, where the written expectation is restated.',
                               'En la confirmación de reserva del mismo día, donde se reitera por escrito la expectativa.') }
          ],
          answer: 'b',
          why: T('The flag is written into the plan, not into the call: "you made an outcome promise in Phase 5 that the condition does not support — state here how you will handle it truthfully." That sequencing is the whole point. The honest sentence gets drafted while you are calm and alone, days before a disappointed woman is in front of you. Improvised in the moment, it becomes option (b) or (c) from the previous block, every time.',
                 'La marca se escribe en el plan, no en la llamada: «hiciste en la Fase 5 una promesa de resultado que la condición no respalda; enuncia aquí cómo la vas a gestionar con la verdad». Esa secuencia es todo el asunto. La frase honesta se redacta mientras estás tranquila y sola, días antes de tener delante a una mujer decepcionada. Improvisada en el momento, se convierte en la opción (b) o (c) del bloque anterior, siempre.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm9l6', n: 6, minutes: 10,
      title: T('Toolkit #8 in practice', 'El Toolkit #8 en la práctica'),
      objective: T('Complete a follow-up plan whose every row states a purpose the client could be told.',
                   'Completar un plan de seguimiento en el que cada fila enuncie un propósito que se le podría decir a la clienta.'),
      provenance: {
        chapter: 16,
        principle: T('The excellent consultant schedules the next step while the client is still in the room, because the plan written after she leaves is written under different pressure and produces different rows.',
                     'La consultora excelente agenda el paso siguiente mientras la clienta todavía está en la sala, porque el plan que se escribe cuando ya se ha ido se escribe bajo otra presión y produce otras filas.'),
        phase: 'continuation',
        trustStage: 'reliability',
        standard: 6,
        duty: 4,
        toolkit: 8
      },
      depth: {
        whyItGoesWrong: T(
          'Drawing up the follow-up plan once the client has gone looks more professional: do it carefully, at a desk, with the file open and nobody waiting. The snag is that the version written later is written by a different woman under different strain. The afternoon is stacked, the client has shrunk to a name on a screen, and the rows that survive that version are the rows that suit the appointment book rather than her. A plan drawn up while she is in the chair carries one property the later version can never carry: it can be recited to her, and any row you would rather she did not overhear is a row that serves you and not her.',
          'Redactar el plan de seguimiento cuando la clienta ya se ha ido parece más profesional: hacerlo con calma, en la mesa, con la ficha abierta y sin nadie esperando. La pega es que la versión escrita después la escribe otra mujer bajo otra tensión. La tarde va apretada, la clienta se ha encogido hasta ser un nombre en una pantalla, y las filas que sobreviven a esa versión son las que convienen a la agenda de citas y no a ella. Un plan redactado mientras ella está en la silla lleva una propiedad que la versión posterior no puede llevar jamás: se le puede recitar, y cualquier fila que preferirías que no oyera es una fila que te sirve a ti y no a ella.'),
        sheIsThinking: T(
          'She said she would be in touch. Everybody says that.',
          'Ha dicho que se pondrá en contacto. Eso lo dice todo el mundo.'),
        ladder: {
          weak:    { line: T('"I will be in touch."',
                     '«Ya te escribo».'),
                     effect: T('A pledge with no content inside it. Either of you can decide afterwards that it was honoured or broken, and no entry reaches the appointment book.',
                               'Una promesa sin contenido dentro. Cualquiera de las dos puede decidir después que se honró o se incumplió, y ninguna entrada llega a la agenda de citas.') },
          average: { line: T('"I will make myself a note to check on you in a few weeks."',
                     '«Me hago una nota para ver cómo estás dentro de unas semanas».'),
                     effect: T('Sincere, better than silence, and what most clinics say. The note sits in your software with no date she has been given and no object she could repeat back, so it survives only if the fortnight happens to be slow.',
                               'Sincero, mejor que el silencio y lo que dicen la mayoría de las clínicas. La nota se queda en tu programa sin una fecha que le hayan dado y sin un objeto que ella pudiera repetir, así que solo sobrevive si la quincena resulta ser floja.') },
          strong:  { line: T('"Two entries, then: I telephone you on the eighteenth to find out how the redness has calmed, and you come in on the sixth of March so we can judge together whether to carry on. Do those both suit you?"',
                     '«Dos entradas, entonces: te telefoneo el dieciocho para saber cómo se ha calmado la rojez, y vienes el seis de marzo para que juzguemos juntas si seguimos. ¿Te van bien las dos?»'),
                     effect: T('Two rows, each carrying a date, an object and her agreement, recited aloud in front of her. That recitation is the examination, and it is the only examination the plan has to sit.',
                               'Dos filas, cada una con una fecha, un objeto y su conformidad, recitadas en voz alta delante de ella. Esa recitación es el examen, y es el único examen que el plan tiene que pasar.') }
        }
      },
      treatments: [
        {
          name:   T("Vascular laser — facial redness, four sessions",
                     "Láser vascular — rojeces faciales, cuatro sesiones"),
          price:  T("€1,480 for four sessions",
                     "1.480 € las cuatro sesiones"),
          why:    T("A four-session plan has a genuine decision point inside it, and if the date of that decision is not fixed while she is in the chair it becomes a phone call nobody makes.",
                     "Un plan de cuatro sesiones lleva dentro un punto de decisión de verdad, y si la fecha de esa decisión no se fija con ella en la silla se convierte en una llamada que no hace nadie."),
          moment: T("She is putting her coat on. You have a clear idea of what comes next and none of it has been said out loud.",
                     "Se está poniendo el abrigo. Tienes clarísimo lo que viene después y nada de eso se ha dicho en voz alta."),
          weak:   {
            line: T("\"I will be in touch to see how you are getting on.\"",
                     "«Ya te escribo para ver cómo vas.»"),
            cost: T("A pledge with no content inside it. Either of you can decide afterwards that it was honoured or broken, and no entry reaches the appointment book.",
                     "Una promesa sin nada dentro. Cualquiera de las dos puede decidir después que se cumplió o que se rompió, y a la agenda no llega ninguna entrada.")
          },
          strong: {
            line: T("\"Two entries, then: I ring you on the eighteenth to hear whether the redness has calmed, and you come in on the sixth of March so we can judge together whether to do the last two. Do both of those work?\"",
                     "«Dos apuntes entonces: te llamo el dieciocho para ver si se han calmado las rojeces y vienes el seis de marzo para que valoremos juntas si hacemos las dos últimas. ¿Te encajan las dos?»"),
            gain: T("Two rows, each carrying a date, an object and her agreement, recited aloud in front of her. That recitation is the examination, and it is the only examination the plan has to sit.",
                     "Dos filas, cada una con fecha, con objeto y con su conformidad, recitadas en voz alta delante de ella. Esa recitación es el examen, y es el único examen que el plan tiene que aprobar.")
          }
        },
        {
          name:   T("Botulinum toxin — upper face",
                     "Toxina botulínica — tercio superior"),
          price:  T("€320, three areas",
                     "320 €, tres zonas"),
          why:    T("The two-week review is the entry every clinic intends to make and half of them make only inside their own software, where the client never sees it and therefore never comes.",
                     "La revisión de las dos semanas es el apunte que todas las clínicas piensan hacer y que la mitad hace solo dentro de su propio programa, donde la clienta no lo ve y por tanto no viene."),
          moment: T("She is paying. The review should be on the twenty-ninth and you are about to say you will text her.",
                     "Está pagando. La revisión debería ser el veintinueve y estás a punto de decirle que ya le escribes."),
          weak:   {
            line: T("\"I will make myself a note to check in with you in a couple of weeks.\"",
                     "«Me apunto una nota para escribirte dentro de un par de semanas.»"),
            cost: T("Sincere, better than silence, and what most clinics say. The note sits in your software with no date she has been given and no object she could repeat back, so it survives only if the fortnight happens to be quiet.",
                     "Sincero, mejor que el silencio y lo que dice casi todo el mundo. La nota se queda en tu programa sin una fecha que ella tenga y sin un objeto que pueda repetir, así que sobrevive solo si esas dos semanas vienen flojas.")
          },
          strong: {
            line: T("\"The twenty-ninth, quarter past five — that is your two-week look, it takes ten minutes and it is included. Shall I put it in now while you are here?\"",
                     "«El veintinueve a las cinco y cuarto: esa es tu revisión de las dos semanas, son diez minutos y va incluida. ¿Te la pongo ahora que estás aquí?»"),
            gain: T("A date, a duration, a stated purpose and the fact that it costs her nothing, all said aloud while she can still object to any of it. At €320 that review is where the second appointment is actually sold.",
                     "Una fecha, una duración, un propósito enunciado y el hecho de que no le cuesta nada, todo dicho en voz alta mientras ella todavía puede protestar por cualquier parte. A 320 €, esa revisión es donde de verdad se vende la segunda cita.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('Four columns and one sentence', 'Cuatro columnas y una frase'),
          body: [
            T('Toolkit #8 is four columns per row — timing, purpose, channel, owner — and one sentence underneath them all: the stop condition. The columns look administrative. Two of them are not.',
              'El Toolkit #8 son cuatro columnas por fila —momento, propósito, canal y responsable— y una frase debajo de todas: la condición de cierre. Las columnas parecen administrativas. Dos de ellas no lo son.'),
            T('Purpose is where the plan fails. "Check in" is not a purpose; neither is "see how she\'s getting on", "touch base" or "keep warm". A purpose states what the contact delivers or what it finds out, and it has to survive being read by the client herself. If you would not send her the purpose, the purpose is not a purpose — it is a reason to call her that she is expected to supply herself, and she will: "they want me to book something."',
              'El propósito es donde falla el plan. «Interesarse» no es un propósito; tampoco «ver qué tal va», «mantener el contacto» o «mantenerla caliente». Un propósito enuncia qué entrega el contacto o qué averigua, y tiene que sobrevivir a que lo lea la propia clienta. Si no le enviarías el propósito, no es un propósito: es una razón para llamarla que se espera que ponga ella, y la pondrá: «quieren que reserve algo».'),
            T('Owner is the second failure, and it is duller and more fatal. A row whose owner is "the clinic" is a row nobody does. The engine wants a name, because on the morning the clinic is full the row with a name gets done and the row with an institution does not.',
              'El responsable es el segundo fallo, más gris y más letal. Una fila cuyo responsable es «la clínica» es una fila que no hace nadie. El motor quiere un nombre, porque la mañana en que la clínica va llena la fila con nombre se hace y la fila con una institución no.'),
            T('And the plan is written before she leaves, not after she fails to come back. Chapter 16 is unambiguous about the sequencing: the excellent consultant schedules the next step while the client is still in the room, precisely because the version written afterwards is written under different pressure and produces different rows.',
              'Y el plan se escribe antes de que ella se vaya, no después de que no vuelva. El Capítulo 16 es inequívoco con el orden: la consultora excelente agenda el siguiente paso mientras la clienta sigue en la sala, precisamente porque la versión escrita después se escribe bajo otra presión y produce otras filas.')
          ] },
        { kind: 'compare',
          prompt: T('Two Toolkit #8 plans for the same accepted client. Which one would the honesty check pass?',
                    'Dos planes del Toolkit #8 para la misma clienta que ha aceptado. ¿Cuál superaría la comprobación de honestidad?'),
          a: { label: T('Plan A', 'Plan A'),
               text: T('Day 3 — check in — WhatsApp — clinic. Week 2 — see how she\'s getting on — phone — clinic. Month 1 — review — whoever is free. Stop condition: when she rebooks.',
                       'Día 3 — interesarse — WhatsApp — clínica. Semana 2 — ver qué tal va — teléfono — clínica. Mes 1 — revisión — quien esté libre. Condición de cierre: cuando vuelva a reservar.') },
          b: { label: T('Plan B', 'Plan B'),
               text: T('Day 3 — tell her the flaking on days 3 to 5 is expected, so she does not stop the protocol — WhatsApp — Ana. Week 2 — find out whether the daily SPF has actually started, given she has started and stopped four times — phone — Ana. Month 1 — assess against her own measure: foundation-free by the June wedding — phone — Ana. Stop condition: after the month-1 call, nothing further unless she asks.',
                       'Día 3 — decirle que la descamación de los días 3 a 5 es esperable, para que no interrumpa el protocolo — WhatsApp — Ana. Semana 2 — averiguar si la protección solar diaria ha empezado de verdad, dado que la ha empezado y dejado cuatro veces — teléfono — Ana. Mes 1 — evaluar frente a su propia medida: sin maquillaje de base para la boda de junio — teléfono — Ana. Condición de cierre: tras la llamada del mes 1, nada más salvo que ella lo pida.') },
          answer: 'b',
          why: T('Plan A is not a bad plan, it is not a plan: three rows whose purposes are interchangeable, no owner, and a stop condition that ends on her booking, which means it never ends on her. Plan B could be printed and handed to the client without a single edit — that is the test. Read B\'s week-2 row again: it names her own admission back to her, which is why the call will get an honest answer rather than "yes, all good".',
                 'El Plan A no es un mal plan: no es un plan. Tres filas con propósitos intercambiables, sin responsable y con una condición de cierre que termina en que ella reserve, es decir, que nunca termina en ella. El Plan B podría imprimirse y entregársele a la clienta sin cambiar una palabra: esa es la prueba. Vuelve a leer la fila de la semana 2 del B: le devuelve su propia confesión, y por eso la llamada obtendrá una respuesta honesta en vez de «sí, todo bien».') },
        { kind: 'drill',
          toolkit: 8,
          prompt: T('Practice drill. Sofía has just accepted. Write the plan before she leaves the room — and watch the purpose column.',
                    'Ejercicio práctico. Sofía acaba de aceptar. Escribe el plan antes de que salga de la sala, y vigila la columna del propósito.'),
          transcript: [
            T('"Right — let\'s do it. When can we start?"', '«Vale, hagámoslo. ¿Cuándo podemos empezar?»'),
            T('Earlier: "I want to be able to go to my daughter\'s wedding in June without foundation on."',
              'Antes: «Quiero poder ir a la boda de mi hija en junio sin base de maquillaje».'),
            T('Earlier: "I\'ve started and stopped the SPF about four times. That\'s the honest bit."',
              'Antes: «He empezado y dejado la protección solar unas cuatro veces. Esa es la parte sincera».'),
            T('You, in Phase 5: "Realistically, two sessions plus daily SPF gets you a visible evening-out by June. Without the SPF it comes back."',
              'Tú, en la Fase 5: «De forma realista, dos sesiones más protección solar diaria te dan una uniformidad visible para junio. Sin la protección, vuelve».')
          ],
          fields: [
            { name: 'row3', label: T('Row — Day 3: timing, purpose, channel, owner', 'Fila — Día 3: momento, propósito, canal, responsable') },
            { name: 'row14', label: T('Row — Week 2: timing, purpose, channel, owner', 'Fila — Semana 2: momento, propósito, canal, responsable') },
            { name: 'row30', label: T('Row — Month 1: the purpose stated against what SHE said success was', 'Fila — Mes 1: el propósito enunciado frente a lo que ELLA dijo que era el éxito') },
            { name: 'stopCondition', label: T('Stop condition — what ends this sequence, in words you would say to her', 'Condición de cierre — qué termina esta secuencia, con palabras que le dirías a ella') }
          ],
          depthCheck: [
            { key: 'purpose', label: T('Every row says what the contact delivers or finds out', 'Cada fila dice qué entrega o qué averigua el contacto'), supported: true },
            { key: 'checkin', label: T('"Check in to see how she\'s doing" is an acceptable purpose', '«Interesarse por cómo va» es un propósito aceptable'), supported: false,
              note: T('Contact without purpose is exactly what the honesty check exists to reject. She will supply the missing purpose herself, and the one she supplies is "they want me to book something."',
                      'El contacto sin propósito es justo lo que la comprobación de honestidad existe para rechazar. Ella pondrá el propósito que falta, y el que pondrá es «quieren que reserve algo».') },
            { key: 'owner', label: T('Every row names a person, not "the clinic"', 'Cada fila nombra a una persona, no a «la clínica»'), supported: true },
            { key: 'benchmark', label: T('The month-1 review is measured against the pigment score', 'La revisión del mes 1 se mide frente a la puntuación de pigmento'), supported: false,
              note: T('She never mentioned pigment. She said foundation, and a wedding in June. A review against a clinical score answers a question she did not ask — and it lets a technically good result feel like a failure, or a poor one pass as a success.',
                      'Ella nunca habló de pigmento. Habló de base de maquillaje y de una boda en junio. Una revisión frente a una puntuación clínica responde a una pregunta que no hizo, y permite que un resultado técnicamente bueno se sienta como un fracaso, o que uno pobre pase por éxito.') },
            { key: 'stop', label: T('The stop condition ends on a date or an event, not on her rebooking', 'La condición de cierre termina en una fecha o un acontecimiento, no en que ella vuelva a reservar'), supported: true },
            { key: 'sixteen', label: T('Toolkit #16 attaches at the end of this plan', 'El Toolkit #16 se acopla al final de este plan'), supported: false,
              note: T('#16 is gated to a later genuine Dormant → Reactivated transition. Sofía has just become Active. Attaching it here ends your plan by treating a brand-new client as a lapsed one — and Toolkit #17 is refused too: Retention & LTV Review belongs to a later review point, not to the immediate post-consultation step.',
                      'El #16 está restringido a una transición posterior y genuina de Latente → Reactivada. Sofía acaba de pasar a Activa. Acoplarlo aquí termina tu plan tratando a una clienta recién llegada como una clienta caducada. Y el Toolkit #17 también se deniega: la Revisión de Retención y Valor de Vida corresponde a un punto de revisión posterior, no al paso inmediato tras la consulta.') }
          ],
          rule: T('The honesty check rejects any row whose purpose could be replaced by the words "touch base" without changing its meaning. If the purpose cannot be told to the client, the contact is not for her.',
                  'La comprobación de honestidad rechaza cualquier fila cuyo propósito pudiera sustituirse por «mantener el contacto» sin cambiar su sentido. Si el propósito no se le puede decir a la clienta, el contacto no es para ella.') },
        { kind: 'choose',
          prompt: T('A different accepted client. Her treatment has no visible downtime at all — nothing will happen on day 3 that she needs warning about, and nothing needs finding out that soon. The day-3 row is still sitting in the template. What do you write in its purpose column?',
                    'Otra clienta que ha aceptado. Su tratamiento no tiene ningún tiempo de recuperación visible: el día 3 no va a pasar nada de lo que haya que avisarla, y tampoco hay nada que averiguar tan pronto. La fila del día 3 sigue en la plantilla. ¿Qué escribes en su columna de propósito?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Check she is comfortable with how it has settled and answer anything that has come up."',
                       '«Comprobar que está a gusto con cómo ha quedado y responder a lo que le haya surgido».'),
              why: T('It is kind, it is what most clinics write, and it is "touch base" in a longer coat: nothing is delivered and nothing is found out. She reads a message with no content in it and supplies the missing purpose herself, and the one she supplies is the one this column exists to prevent — they want me to book something.',
                     'Es amable, es lo que escribe casi cualquier clínica y es «mantener el contacto» con un abrigo más largo: no entrega nada y no averigua nada. Ella lee un mensaje sin contenido y le pone el propósito que falta por su cuenta, y el que le pone es justo el que esta columna existe para evitar: quieren que reserve algo.') },
            { id: 'b', verdict: 'best',
              label: T('Delete the row. Three contacts is the sequence, not the requirement — a plan of two rows that both state a purpose is a stronger plan than three where one cannot.',
                       'Borrar la fila. Tres contactos son la secuencia, no la obligación: un plan de dos filas que enuncian su propósito es mejor plan que uno de tres en el que una no puede.'),
              why: T('Chapter 16 prescribes a rhythm for a treatment that has something to say at each point, not a quota. Deleting the row is also the only version you could read aloud to her at the consultation without editing it, which is the test the purpose column is there to apply.',
                     'El Capítulo 16 prescribe un ritmo para un tratamiento que tiene algo que decir en cada punto, no una cuota. Borrar la fila es además la única versión que podrías leerle en voz alta en la consulta sin retocarla, que es la prueba para la que existe la columna de propósito.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Check in, and mention the maintenance product that holds the result for longer."',
                       '«Contactar y mencionarle el producto de mantenimiento que alarga el resultado».'),
              why: T('Here is what an empty row is actually for. A contact with no purpose of its own does not stay empty: it gets filled by the thing the clinic needs that week, and the first message she receives after paying you turns out to be an advert. She will read every later message through that one.',
                     'Para esto sirve en realidad una fila vacía. Un contacto sin propósito propio no se queda vacío: se llena con aquello que la clínica necesite esa semana, y resulta que el primer mensaje que ella recibe después de pagarte es un anuncio. Leerá todos los mensajes posteriores a través de ese.') }
          ],
          principle: T('A follow-up row with no statable purpose does not become harmless by being kind — it becomes vacant. Every contact you cannot justify to her will eventually be filled with something you can justify to the clinic.',
                       'Una fila de seguimiento sin un propósito enunciable no se vuelve inofensiva por ser amable: se queda como un hueco libre. Todo contacto que no puedas justificarle a ella acabará llenándose con algo que sí puedas justificarle a la clínica.'),
          retry: {
            note: T('The purpose column is the one practitioners know to worry about. The second failure is duller, and it is the one that empties a validated plan without anybody noticing.',
                    'La columna de propósito es la que los profesionales saben que hay que vigilar. El segundo fallo es más soso, y es el que vacía un plan ya validado sin que nadie lo note.'),
            prompt: T('Back to Sofía. Her month-1 row has a purpose written against her own measure — foundation-free by the June wedding. Now the owner column, and the morning it falls due is a full Thursday. What do you write there?',
                      'Volvemos a Sofía. Su fila del mes 1 tiene un propósito escrito contra su propia medida: sin maquillaje en la boda de junio. Ahora la columna de responsable, y la mañana en que toca es un jueves hasta arriba. ¿Qué escribes ahí?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Reception, who make the month-1 calls for every client and make them reliably.',
                         'Recepción, que hace las llamadas del mes 1 de todas las clientas y las hace sin fallar.'),
                why: T('It is a genuine arrangement and it will produce a call. It will not produce this call: the person on the phone was not in the room when she said "without foundation, at my daughter\'s wedding", so the review reverts to a script, and the one measure that would tell either of you whether this worked is the thing that does not get asked.',
                       'Es un sistema real y producirá una llamada. No producirá esta llamada: quien marca no estaba en la sala cuando dijo «sin maquillaje, en la boda de mi hija», así que la revisión vuelve al guion, y la única medida que os diría a cualquiera de las dos si esto ha funcionado es justo lo que no se pregunta.') },
              { id: 'b', verdict: 'best',
                label: T('Ana — the named person who ran the consultation, with the date in her own diary and the measure written next to it.',
                         'Ana: la persona con nombre que hizo la consulta, con la fecha en su propia agenda y la medida anotada al lado.'),
                why: T('A named owner is the only entry that survives a full morning, because a row with a name on it is a row somebody is overdue on. It is also the only entry that recognises "it is a bit better" and know whether that is the result you both agreed on or a long way short of it.',
                       'Un responsable con nombre es la única entrada que sobrevive a una mañana llena, porque una fila con un nombre encima es una fila que alguien lleva con retraso. Es además la única entrada capaz de reconocer «está un poco mejor» como el resultado que acordasteis o como algo que se queda muy corto.') },
              { id: 'c', verdict: 'harmful',
                label: T('Whoever is free that morning — the call is what counts, not the person placing it.',
                         'Quien esté libre esa mañana: lo que cuenta es la llamada, no quién la ponga.'),
                why: T('A row owned by all of them is owned by nobody, and on a full Thursday it is the row that quietly does not happen. The client was told at the consultation that this call would come, so the plan has not merely misfired — it has made you someone who said she would telephone and did not.',
                       'Una fila de la que responden todas no tiene responsable, y en un jueves hasta arriba es la fila que, sin ruido, no se hace. A la clienta se le dijo en la consulta que esa llamada llegaría, así que el plan no solo ha salido mal: te ha convertido en alguien que dijo que telefonearía y no lo hizo.') }
            ],
            principle: T('The owner column is the duller of the two failures and the more fatal. The engine asks for a person because on a full morning the row with a name gets done and the row with an institution does not — and the client was told it would happen.',
                         'La columna de responsable es el más soso de los dos fallos y el más letal. El motor pide una persona porque en una mañana llena la fila con nombre se hace y la fila con una institución no, y a la clienta se le dijo que iba a ocurrir.'),
            changes: {
              axis: 'continuation',
              detail: T('The purpose is by now written and correct, so what moves is whether the contact happens at all: the month-1 review either sits in one person\'s diary with her own measure beside it, or it turns into a call anybody could make and so nobody does.',
                        'El propósito a estas alturas está escrito y es correcto, así que lo que se mueve es si el contacto llega a producirse: la revisión del mes 1 o está en la agenda de una persona concreta con su medida al lado, o se transforma en una llamada que podría hacer cualquiera y que, por eso mismo, no hace nadie.')
            } } },
        { kind: 'check',
          prompt: T('The plan validates and Phase 8 executes. What is Sofía\'s relationship state now?',
                    'El plan valida y la Fase 8 se ejecuta. ¿Cuál es ahora el estado de la relación de Sofía?'),
          options: [
            { id: 'a', text: T('Considering — she has committed but not yet been treated.',
                               'En consideración: se ha comprometido pero todavía no se la ha tratado.') },
            { id: 'b', text: T('Active — an accepted recommendation moves her from Prospective to Active.',
                               'Activa: una recomendación aceptada la mueve de Prospectiva a Activa.') },
            { id: 'c', text: T('Consulted — the consultation is complete.', 'Consultada: la consulta ha terminado.') }
          ],
          answer: 'b',
          why: T('Prospective → Active, on the acceptance, per the MBOK Ch.6 continuum — not on the first treatment and not on the first payment. Considering belongs to DEFER; Consulted is a closure state and would record a client who declined. Note what Active does and does not authorise: it opens Phase 8 management, and it still does not make Toolkit #17 eligible today.',
                 'Prospectiva → Activa, en la aceptación, según el continuo del MBOK Cap.6; no en el primer tratamiento ni en el primer pago. «En consideración» corresponde al APLAZAMIENTO; «Consultada» es un estado de cierre y registraría a una clienta que declinó. Fíjate en lo que «Activa» autoriza y lo que no: abre la gestión de la Fase 8 y sigue sin hacer elegible hoy el Toolkit #17.') },
        { kind: 'reflect',
          prompt: T('Take your last accepted client and write her day-3 row as she would read it — one sentence, the purpose only. Would you send it to her?',
                    'Coge a tu última clienta que aceptó y escribe su fila del día 3 tal como ella la leería: una frase, solo el propósito. ¿Se la enviarías?'),
          placeholder: T('If the honest answer is no, write what you would have to know about her treatment, or about her, to make it sendable.',
                         'Si la respuesta honesta es no, escribe qué tendrías que saber sobre su tratamiento, o sobre ella, para poder enviarla.') }
      ]
    }
  ],
  apply: {
    assignment: T('Before your next client leaves the room — whatever the outcome, YES, DEFER or NO — write the Toolkit #8 plan in front of her and say the stop condition out loud: what you will do, when, who will do it, and what ends it.',
                  'Antes de que tu próxima clienta salga de la sala —sea cual sea el resultado: SÍ, APLAZAMIENTO o NO— escribe el plan del Toolkit #8 delante de ella y di en voz alta la condición de cierre: qué harás, cuándo, quién lo hará y qué lo termina.'),
    prompt: T('Write the stop condition exactly as you said it, in her hearing. Then write what would have happened in the following six weeks if you had not said it — including everything your clinic\'s software would have done on its own.',
              'Escribe la condición de cierre exactamente como la dijiste, delante de ella. Después escribe qué habría pasado en las seis semanas siguientes si no la hubieras dicho, incluido todo lo que el software de tu clínica habría hecho por su cuenta.')
  }
};

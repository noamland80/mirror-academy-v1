/**
 * MODULE 2 — PREPARATION & SAFETY
 * Book: Ch.7 (The First 30 Seconds), Ch.8 (M — Make Safe): the nervous-system
 *       scan, mirror neurons and contagious state, the Reset ritual, the Rachel
 *       and Mia story, the Anita & Nadia consultation, "M is sacred", the
 *       eight-item M checklist.
 * Canonical: Phase 1 Preparation, Phase 2 Connection; Trust Stage 1 (Safety);
 *            Trust Standard 1 (Create Psychological Safety); Ethical Duty 2.
 */
const T = (en, es) => ({ en, es });

module.exports = {
  id: 'm2', n: 2,
  phase: 'preparation',
  accent: 'mercury',
  title: T('Preparation & Safety', 'Preparación y Seguridad'),
  strapline: T('What must be true before the client arrives, and how safety is created in the room',
               'Qué debe ser cierto antes de que llegue la clienta y cómo se crea la seguridad en la sala'),
  summary: T(
    'Safety is not the opening of the consultation. It is the foundation the other seven phases stand on, and it is decided in the first thirty seconds — before you have said a professional word. This module covers what the client\'s nervous system is actually scanning for, the Reset that makes your own state usable, the five things a practitioner does to create safety, the four behaviours that destroy it after it has been built, and how to keep Phase 2 intact when you only have twenty minutes.',
    'La seguridad no es la apertura de la consulta. Es el cimiento sobre el que se apoyan las otras siete fases, y se decide en los primeros treinta segundos, antes de que hayas dicho una palabra profesional. Este módulo cubre qué está escaneando realmente el sistema nervioso de la clienta, el Reinicio que hace utilizable tu propio estado, las cinco cosas que hace un profesional para crear seguridad, las cuatro conductas que la destruyen una vez construida, y cómo mantener intacta la Fase 2 cuando solo tienes veinte minutos.'),
  outcome: T(
      'Run the Reset before a consultation and hold safety intact for its whole length, including the four moments that usually break it.',
      'Hacer el Reinicio antes de una consulta y mantener la seguridad intacta durante toda su duración, incluidos los cuatro momentos que suelen romperla.'),
  source: T('The Beauty Sales Secrets — Chapters 7 and 8 (M — Make Safe); MIRROR Phases 1–2, Trust Standard 1',
            'The Beauty Sales Secrets — Capítulos 7 y 8 (M — Crear Seguridad); MIRROR Fases 1–2, Estándar de Confianza 1'),
  minutes: 64,
  status: 'available',
  lessons: [
    // -----------------------------------------------------------------
    {
      id: 'm2l1', n: 1, minutes: 10,
      treatments: [
                    {
                      name: T(
                              'Botulinum toxin — two areas, first visit',
                              'Toxina botulínica — dos zonas, primera visita'),
                      price: T('€240, two areas', '240 €, dos zonas'),
                      why: T(
                             'Injectables are the treatment women arrive at most defended, because the thing being scanned for is whether this room will treat wanting it as vanity.',
                             'Los inyectables son el tratamiento al que las mujeres llegan más defendidas, porque lo que escanean es si en esta sala querer esto se va a tratar como vanidad.'),
                      moment: T(
                                'She is through the door and the first thing in her field of vision is the screen, angled towards you, with her name already on it.',
                                'Cruza la puerta y lo primero que entra en su campo de visión es la pantalla, girada hacia ti, con su nombre ya puesto.'),
                      weak: {
                              line: T(
                                      '"Come in, take a seat — I\'ve got your details up here, so let me just check a couple of things before we start."',
                                      '«Pasa, siéntate. Tengo tus datos aquí, así que déjame comprobar un par de cosas antes de empezar.»'),
                              cost: T(
                                      'The sentence is faultless and the screen has already answered the scan. Her nervous system reads a woman being processed, and everything she tells you for the next twenty minutes is edited for the file.',
                                      'La frase es impecable y la pantalla ya ha contestado al escaneo. Su sistema nervioso lee a una mujer a la que están tramitando, y todo lo que te cuente los próximos veinte minutos va editado para la ficha.')
                            },
                      strong: {
                                line: T(
                                        '"Come in. I\'ve closed all that down — we can put it in afterwards. Sit wherever you like."',
                                        '«Pasa. He cerrado todo eso, ya lo metemos después. Siéntate donde quieras.»'),
                                gain: T(
                                        'Closing the screen is a thirty-second-scan behaviour, not a courtesy. She has been told, without being told, that the next twenty minutes are not being recorded against her.',
                                        'Cerrar la pantalla es una conducta del escaneo de treinta segundos, no una cortesía. Se le ha dicho, sin decírselo, que los próximos veinte minutos no se le están apuntando en ninguna parte.')
                              }
                    },
                    {
                      name: T('Cryolipolysis — abdomen', 'Criolipólisis — abdomen'),
                      price: T('€760 for two applicators', '760 € dos aplicadores'),
                      why: T(
                             'A body consultation requires her to be looked at in her underwear by a stranger, so the scan runs harder and for longer than it does in any facial appointment.',
                             'Una consulta corporal exige que una desconocida la mire en ropa interior, así que el escaneo va más fuerte y dura más que en cualquier cita facial.'),
                      moment: T(
                                'She is standing in the middle of the room with her arms folded, and the gown is on the couch where you left it.',
                                'Está de pie en mitad de la sala con los brazos cruzados, y la bata está sobre la camilla donde la dejaste.'),
                      weak: {
                              line: T(
                                      '"There\'s a gown there for you — I\'ll step out and give you a minute, and then I\'ll take the measurements."',
                                      '«Ahí tienes la bata. Salgo un momento para darte un minuto y luego te tomo las medidas.»'),
                              cost: T(
                                      'Considerate and standard, and it makes undressing the first thing that happens. The scan concludes that this is an appointment about her body being assessed, which is precisely the conclusion that stops her saying anything true afterwards.',
                                      'Es considerado y estándar, y hace que desvestirse sea lo primero que ocurre. El escaneo concluye que esta es una cita sobre evaluar su cuerpo, que es exactamente la conclusión que después le impide decir nada verdadero.')
                            },
                      strong: {
                                line: T(
                                        '"Keep your clothes on for now, we don\'t need any of that yet. Sit down and tell me what you\'d want to be different."',
                                        '«De momento no te quites nada, todavía no hace falta. Siéntate y cuéntame qué te gustaría que fuera distinto.»'),
                                gain: T(
                                        'Postponing the gown by ten minutes is the cheapest safety behaviour in the building. She answers the question as a woman in a chair rather than as a body on a couch, and the answers are different.',
                                        'Aplazar la bata diez minutos es la conducta de seguridad más barata del edificio. Contesta a la pregunta como una mujer en una silla y no como un cuerpo en una camilla, y las respuestas son distintas.')
                              }
                    }
                  ],
      title: T('The thirty-second scan', 'El escaneo de treinta segundos'),
      objective: T('Name what the client\'s nervous system is actually checking for, and why nothing you say afterwards can override its answer.',
                   'Nombrar qué comprueba realmente el sistema nervioso de la clienta y por qué nada de lo que digas después puede anular su respuesta.'),
      provenance: {
        chapter: 8,
        principle: T('If the nervous system’s first scan says no, nothing you do afterwards matters.',
                     'Si el primer escaneo del sistema nervioso dice que no, nada de lo que hagas después importa.'),
        phase: 'connection',
        trustStage: 'safety',
        standard: 1,
        duty: 3,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Opening with your professional self is not vanity. It is what the qualification was for, it is what the clinic advertises, and a crisp, competent start is the most respectful thing most of us know how to offer a stranger. The trouble is what the body opposite is screening for in those seconds, which is not competence at all. It is screening for judgement, for appetite, and for the risk of being made to feel ridiculous. Polish answers a question nobody asked, and briskness registers as hunger.',
            'Abrir con tu yo profesional no es vanidad. Es para lo que servía la titulación, es lo que anuncia la clínica y un arranque nítido y solvente es lo más respetuoso que la mayoría sabemos ofrecerle a una desconocida. El problema es qué está cribando en esos segundos el cuerpo que tienes delante, que no es competencia en absoluto. Está cribando si va a haber juicio, si va a haber apetito y cuál es el riesgo de que la hagan sentirse ridícula. La pulcritud responde a una pregunta que nadie ha hecho, y la agilidad se registra como hambre.'),
        sheIsThinking: T(
            'I can already smell whether I am going to be sold to. I have not settled on how much I am willing to admit.',
            'Ya huelo si me van a vender algo. Todavía no he resuelto cuánto estoy dispuesta a reconocer.'),
        ladder: {
          weak: {
            line:   T(
                '"So, what are we treating today?"',
                '«Bueno, ¿qué tratamos hoy?»'),
            effect: T(
                'Puts her on a couch in seven words. She names an area, and the rest stays in her coat pocket.',
                'La sube a una camilla en siete palabras. Ella nombra una zona, y lo demás se queda en el bolsillo de su abrigo.')
          },
          average: {
            line:   T(
                '"Welcome — do come in and have a seat."',
                '«Bienvenida, pasa y siéntate.»'),
            effect: T(
                'Correct, pleasant hospitality. Hospitality is what a hotel offers, and it leaves untouched the thing the screening is trying to establish.',
                'Es una hospitalidad correcta y agradable. La hospitalidad es lo que ofrece un hotel, y deja intacto aquello que el cribado intenta establecer.')
          },
          strong: {
            line:   T(
                '"Hi. I\'m so glad you came."',
                '«Hola. Me alegro mucho de que hayas venido.»'),
            effect: T(
                'Chapter 8 chooses these words over "welcome" deliberately. They say that her arrival registered with somebody, which is the exact item being screened for.',
                'El capítulo 8 elige estas palabras en lugar de «bienvenida» de forma deliberada. Dicen que su llegada le ha constado a alguien, que es justo el elemento que se está cribando.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('She is not scanning for danger', 'No está escaneando en busca de peligro'),
          body: [
            T('A woman walks in. She has bought nothing, she does not know your name, and in the next thirty seconds — before you say one professional word — her nervous system runs a diagnosis. It is not checking whether she is physically safe. It is checking whether she is safe from judgement, safe from being sold to, safe from wasting her time, and safe from looking foolish if she admits what she actually wants.',
              'Entra una mujer. No ha comprado nada, no sabe tu nombre, y en los siguientes treinta segundos —antes de que digas una sola palabra profesional— su sistema nervioso hace un diagnóstico. No comprueba si está físicamente a salvo. Comprueba si está a salvo del juicio, a salvo de que le vendan, a salvo de perder el tiempo y a salvo de parecer ridícula si admite lo que de verdad quiere.'),
            T('If that scan returns "no", nothing afterwards matters. You can have the best technique, the best evidence and the perfect sentence: a client whose nervous system has decided this is not safe will not open. She will defend. She will understate her budget. She will be pleasant, she will thank you, and she will buy somewhere else.',
              'Si ese escaneo devuelve «no», nada de lo que venga después importa. Puedes tener la mejor técnica, la mejor evidencia y la frase perfecta: una clienta cuyo sistema nervioso ha decidido que esto no es seguro no se abrirá. Se defenderá. Rebajará su presupuesto. Será amable, te dará las gracias y comprará en otro sitio.'),
            T('This is why the canonical architecture puts Safety first among the seven trust stages. It is not a courtesy that precedes the real work — it is the condition under which the real work produces true information.',
              'Por eso la arquitectura canónica sitúa la Seguridad la primera de las siete etapas de confianza. No es una cortesía previa al trabajo real: es la condición bajo la cual el trabajo real produce información verdadera.')
          ],
          diagram: 'safety-scan' },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 8', 'The Beauty Sales Secrets — Capítulo 8'),
          quote: T('Safety isn\'t words — it\'s biology. The nervous system decides in seconds.',
                   'La seguridad no son palabras: es biología. El sistema nervioso decide en segundos.'),
          note: T('The book grounds this in the polyvagal response: read threat, and the throat closes and the thinking brain goes offline; read safety, and the face softens and communication becomes possible. MIRROR makes it operational as Trust Stage 1 — a state you can observe in her behaviour, not a feeling you can assume.',
                  'El libro lo fundamenta en la respuesta polivagal: si lee amenaza, la garganta se cierra y el cerebro pensante se desconecta; si lee seguridad, el rostro se relaja y la comunicación se hace posible. MIRROR lo vuelve operativo como Etapa de Confianza 1: un estado que puedes observar en su conducta, no un sentimiento que puedas suponer.') },
        { kind: 'match',
          prompt: T('Match each thing the client is scanning for to the practitioner behaviour that answers it.',
                    'Empareja cada cosa que la clienta escanea con la conducta profesional que la responde.'),
          left: [
            { id: 'a1', text: T('"Am I going to be judged for wanting this?"', '«¿Se me va a juzgar por querer esto?»') },
            { id: 'a2', text: T('"Am I about to be sold to?"', '«¿Me van a vender algo?»') },
            { id: 'a3', text: T('"Is this going to waste my morning?"', '«¿Esto me va a hacer perder la mañana?»') },
            { id: 'a4', text: T('"Will I look foolish if I say what I actually want?"', '«¿Pareceré ridícula si digo lo que de verdad quiero?»') }
          ],
          right: [
            { id: 'belong', text: T('Permission to belong', 'Permiso para estar aquí') },
            { id: 'stakes', text: T('Lowered stakes', 'Rebajar lo que está en juego') },
            { id: 'pace', text: T('Your unhurried pace', 'Tu ritmo sin prisa') },
            { id: 'first', text: T('You ask about her before anything professional', 'Preguntas por ella antes que por nada profesional') }
          ],
          pairs: { a1: 'belong', a2: 'stakes', a3: 'pace', a4: 'first' },
          why: T('Notice that none of the four answers is a sentence about the clinic, the technology or your qualifications. Everything a nervous system is scanning for is answered by conduct, and all four answers are available before you have said anything clinical at all.',
                 'Fíjate en que ninguna de las cuatro respuestas es una frase sobre la clínica, la tecnología o tus credenciales. Todo lo que el sistema nervioso escanea se responde con conducta, y las cuatro respuestas están disponibles antes de que hayas dicho nada clínico.') },
        { kind: 'reveal',
          prompt: T('A client arrives and immediately says this. What has just happened?',
                    'Una clienta llega y dice esto de inmediato. ¿Qué acaba de pasar?'),
          client: T('"I\'m probably wasting your time — I\'m not really sure I want anything done."',
                    '«Seguro que te estoy haciendo perder el tiempo; ni siquiera sé si quiero hacerme algo».'),
          guesses: [
            { id: 'a', text: T('She is not a serious enquiry and the consultation will be short.', 'No es una consulta seria y será corta.') },
            { id: 'b', text: T('She is asking permission to be in the room, in the only way that is socially available to her.', 'Está pidiendo permiso para estar en la sala, de la única forma que le resulta socialmente posible.') },
            { id: 'c', text: T('She is negotiating in advance to lower the price.', 'Está negociando por adelantado para bajar el precio.') }
          ],
          answer: 'b',
          truth: T('This sentence is the scan spoken out loud. She is pre-apologising for occupying professional time, which tells you she has already decided that wanting this is slightly illegitimate. Clients who say it are frequently the ones who have been thinking about it for a year.',
                   'Esta frase es el escaneo dicho en voz alta. Se disculpa por adelantado por ocupar tiempo profesional, lo que te dice que ya ha decidido que querer esto es algo poco legítimo. Las clientas que lo dicen suelen ser las que llevan un año dándole vueltas.'),
          why: T('The answer is not "of course you\'re not wasting my time" — that is a correction. It is to remove the condition: "You don\'t have to know what you want. That\'s my job. And if we work out together that you don\'t need anything, that\'s a real outcome too."',
                 'La respuesta no es «claro que no me haces perder el tiempo», que es una corrección. Es retirar la condición: «No tienes que saber lo que quieres. Eso es mi trabajo. Y si descubrimos juntos que no necesitas nada, ese también es un resultado real».') },
        { kind: 'choose',
          prompt: T('Nuria, 44, walks in. You have twelve minutes and a history form to complete. She sits on the edge of the chair with her coat on and says: "Sorry, I\'m a bit early." What do you do with the first ninety seconds?',
                    'Entra Nuria, 44. Tienes doce minutos y un historial que rellenar. Se sienta en el borde de la silla, con el abrigo puesto, y dice: «Perdona, llego un poco pronto». ¿Qué haces con los primeros noventa segundos?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Start the form — it has to be done, and doing it now leaves the rest of the time free for her.',
                       'Empezar el formulario: hay que hacerlo, y hacerlo ahora deja libre el resto del tiempo para ella.'),
              why: T('Efficient, and it spends the only ninety seconds in which the scan is still running. She will answer every question accurately and the answers will be the rehearsed ones, because a form is a request for compliance — and compliance is what you will get for the remaining ten minutes.',
                     'Eficiente, y gasta los únicos noventa segundos en los que el escaneo sigue en marcha. Responderá a todas las preguntas con exactitud y las respuestas serán las ensayadas, porque un formulario es una petición de obediencia, y obediencia es lo que tendrás durante los diez minutos restantes.') },
            { id: 'b', verdict: 'best',
              label: T('Close the screen, sit down without the form, and say: "You\'re not early, you\'re on time. How was getting here?"',
                       'Cerrar la pantalla, sentarte sin el formulario y decir: «No llegas pronto, llegas a tu hora. ¿Qué tal el viaje?»'),
              why: T('Nothing professional has happened and all four things she is scanning for have been answered: she is not being judged for arriving early, she is not being sold to, her time is not being wasted, and the first question was about her rather than her face. The form takes four minutes whenever you do it; this window closes.',
                     'No ha pasado nada profesional y las cuatro cosas que escanea ya están respondidas: no se la juzga por llegar pronto, no le están vendiendo, no le hacen perder el tiempo y la primera pregunta fue sobre ella y no sobre su cara. El formulario lleva cuatro minutos cuando lo hagas; esta ventana se cierra.') },
            { id: 'c', verdict: 'harmful',
              label: T('Reassure her: "Don\'t worry at all — and honestly, you\'ve nothing to be nervous about, this is the easy part."',
                       'Tranquilizarla: «No te preocupes en absoluto, y de verdad que no hay por qué estar nerviosa: esta es la parte fácil».'),
              why: T('She said she was early and you answered a nervousness she had not mentioned. Two things arrive at once: you are reading her, and the reading is being announced. A client who learns in the first minute that her state is being narrated stops offering it.',
                     'Ella dijo que llegaba pronto y tú has respondido a un nerviosismo que no mencionó. Llegan dos cosas a la vez: la estás leyendo, y esa lectura se anuncia en voz alta. Una clienta que aprende en el primer minuto que se narra su estado deja de mostrarlo.') }
          ],
          principle: T('Trust Stage 1 is not built with words about the clinic. Everything the scan is checking for is answered by conduct, and all of it is available before a single clinical sentence.',
                       'La Etapa de Confianza 1 no se construye con frases sobre la clínica. Todo lo que comprueba el escaneo se responde con conducta, y todo está disponible antes de una sola frase clínica.'),
          retry: {
            note: T('The same thirty seconds, from the other side of the desk.',
                    'Los mismos treinta segundos, desde el otro lado de la mesa.'),
            prompt: T('You are three sentences from finishing the previous client\'s notes when the next one walks in and sits down. What do you do?',
                      'Te faltan tres frases para terminar las notas de la clienta anterior cuando entra la siguiente y se sienta. ¿Qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"One second — I\'m just finishing this and I\'ll be right with you." Then finish the three sentences; it takes eleven seconds.',
                         '«Un segundo, termino esto y estoy contigo». Y terminar las tres frases: son once segundos.'),
                why: T('Eleven seconds, and it is the exact behaviour the book traces to a twenty per cent conversion rate. She has one data point: at the moment she arrived, she was not the thing being attended to. Nothing you say afterwards has access to that moment to correct it.',
                       'Once segundos, y es exactamente la conducta que el libro asocia a una conversión del veinte por ciento. Ella tiene un solo dato: en el momento en que llegó, no era ella lo que se estaba atendiendo. Nada de lo que digas después tiene acceso a ese momento para corregirlo.') },
              { id: 'b', verdict: 'best',
                label: T('Stop typing mid-sentence. Close the screen, stand, and use her name: "Hello — I\'m glad you came." Finish the notes afterwards.',
                         'Dejar de escribir a mitad de frase. Cerrar la pantalla, levantarte y usar su nombre: «Hola, me alegra que hayas venido». Terminar las notas después.'),
                why: T('The notes survive an interruption; the first thirty seconds do not. Standing and closing the screen are not courtesies — they are the two pieces of evidence her nervous system can actually read, and in the book a practitioner who changed only this went from twenty per cent to forty-five in a fortnight.',
                       'Las notas sobreviven a una interrupción; los primeros treinta segundos no. Levantarte y cerrar la pantalla no son cortesías: son las dos pruebas que su sistema nervioso puede leer de verdad, y en el libro una profesional que solo cambió esto pasó del veinte por ciento al cuarenta y cinco en quince días.') },
              { id: 'c', verdict: 'harmful',
                label: T('Keep typing but talk while you do it — warmth in the voice covers the screen, and she can see you are being efficient with her time.',
                         'Seguir escribiendo mientras hablas: la calidez en la voz tapa la pantalla, y así ve que eres eficiente con su tiempo.'),
                why: T('Word and gesture now disagree, and when they disagree the client believes the gesture every time. Warmth delivered to a screen reads as a performance of warmth, which is worse than silence: she now knows the tone is available on demand.',
                       'Ahora la palabra y el gesto se contradicen, y cuando se contradicen la clienta cree siempre al gesto. La calidez dirigida a una pantalla se lee como una actuación de calidez, y eso es peor que el silencio: ahora sabe que ese tono está disponible cuando convenga.') }
            ],
            principle: T('M — Make Safe does not start when you decide it starts. It starts when she comes through the door, and three seconds of screen is the most expensive thing in the room.',
                         'La M —Hacer Sentir Segura— no empieza cuando tú decides que empieza. Empieza cuando ella cruza la puerta, y tres segundos de pantalla son lo más caro que hay en la sala.'),
            changes: {
              axis: 'trust',
              detail: T('Trust Stage 1 (Safety) holds from the door instead of having to be rebuilt in minute nine: she takes her coat off before she sits down, and the first thing she says is not an apology for being early.',
                        'La Etapa de Confianza 1 (Seguridad) se sostiene desde la puerta en vez de tener que reconstruirse en el minuto nueve: se quita el abrigo antes de sentarse, y lo primero que dice no es una disculpa por llegar pronto.')
            }
          } },
        { kind: 'check',
          prompt: T('Which of these is evidence that Trust Stage 1 has actually been established?',
                    '¿Cuál de estas es evidencia de que la Etapa de Confianza 1 se ha establecido de verdad?'),
          options: [
            { id: 'a', text: T('She smiles and says she is comfortable.', 'Sonríe y dice que está cómoda.') },
            { id: 'b', text: T('She puts her bag down instead of holding it, and her answers get longer rather than shorter.', 'Deja el bolso en vez de sujetarlo, y sus respuestas se alargan en lugar de acortarse.') },
            { id: 'c', text: T('She agrees with your assessment of her skin.', 'Está de acuerdo con tu valoración de su piel.') },
            { id: 'd', text: T('You feel that the consultation is going well.', 'Sientes que la consulta va bien.') }
          ],
          answer: 'b',
          why: T('Safety is read in behaviour, not in agreement or in your own impression. The bag is the classic tell: held on the lap it is a barrier, put down it is a decision to stay. Lengthening answers are the second: a client who feels safe stops editing.',
                 'La seguridad se lee en la conducta, no en el acuerdo ni en tu propia impresión. El bolso es la señal clásica: sujeto en el regazo es una barrera; dejado en el suelo es una decisión de quedarse. Las respuestas que se alargan son la segunda: una clienta que se siente segura deja de editar.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm2l2', n: 2, minutes: 11,
      treatments: [
                    {
                      name: T('Hyaluronic acid filler — lips', 'Relleno de ácido hialurónico — labios'),
                      price: T('€360 for 1 ml', '360 € por 1 ml'),
                      why: T(
                             'Lip work runs on a fifteen-minute grid and is the appointment most often squeezed between two others, so it is where your own unreset state arrives in the room first.',
                             'Los labios funcionan en una rejilla de quince minutos y son la cita que más a menudo se mete entre otras dos, así que es donde tu propio estado sin reiniciar entra en la sala antes que tú.'),
                      moment: T(
                                'You are eleven minutes behind, the previous client is still at reception paying, and this one is already seated.',
                                'Vas once minutos por detrás, la clienta anterior sigue pagando en recepción y esta ya está sentada.'),
                      weak: {
                              line: T(
                                      '"Sorry to keep you — we\'ll be quick, it\'s a straightforward one. A millilitre in the body of the lip, €360, and you\'ll be out in twenty."',
                                      '«Perdona la espera. Vamos rápido, que este es sencillo: un mililitro en el cuerpo del labio, 360 €, y en veinte minutos estás fuera.»'),
                              cost: T(
                                      'Apologises honestly and hurries transparently, and the hurry is the thing that transmits. Her mirror neurons read a woman under pressure, and she matches it by saying yes quickly to something she has not thought about.',
                                      'Se disculpa con sinceridad y acelera con transparencia, y lo que se transmite es la prisa. Sus neuronas espejo leen a una mujer bajo presión, y ella la iguala diciendo que sí deprisa a algo que no se ha pensado.')
                            },
                      strong: {
                                line: T(
                                        '"Give me thirty seconds before we start. I don\'t want to bring the last hour in here with me."',
                                        '«Dame treinta segundos antes de empezar. No quiero meter aquí dentro la última hora.»'),
                                gain: T(
                                        'Doing the Reset in front of her costs half a minute of an appointment that was already late, and it converts your visible state from pressure into attention. She is the one who slows down, because the state is contagious in both directions.',
                                        'Hacer el Reinicio delante de ella cuesta medio minuto de una cita que ya iba tarde, y convierte tu estado visible de presión en atención. Es ella quien baja el ritmo, porque el estado se contagia en las dos direcciones.')
                              }
                    },
                    {
                      name: T(
                              'Laser hair removal — full body course of six',
                              'Depilación láser — bono de seis, cuerpo completo'),
                      price: T(
                               '€1,490 for six full-body sessions',
                               '1.490 € el bono de seis, cuerpo completo'),
                      why: T(
                             'Full-body sessions run back to back all day, and the fourteenth one is where the practitioner is most obviously the same person doing the same thing for the eighth hour.',
                             'Las sesiones de cuerpo completo se encadenan todo el día, y la número catorce es donde el profesional es, de la forma más evidente, la misma persona haciendo lo mismo por octava hora.'),
                      moment: T(
                                'It is 18:50, she is your last of eleven, and you know the protocol so well you could run it without thinking.',
                                'Son las 18:50, es la última de once y te sabes el protocolo tan bien que podrías hacerlo sin pensar.'),
                      weak: {
                              line: T(
                                      '"Same as last time then — legs, bikini, underarms, and we\'ll go a touch higher on the settings if you tolerated the last one well."',
                                      '«Pues igual que la vez anterior: piernas, ingles, axilas, y subimos un pelín los parámetros si toleraste bien la última.»'),
                              cost: T(
                                      'Technically impeccable and conducted from muscle memory. She has €1,490 invested and five sessions left, and the only reason she would not renew is that nobody in the room was actually present for any of them.',
                                      'Técnicamente impecable y ejecutado desde la memoria muscular. Tiene 1.490 € invertidos y cinco sesiones por delante, y el único motivo por el que no renovaría es que nadie en la sala estuvo realmente presente en ninguna.')
                            },
                      strong: {
                                line: T(
                                        '"Before we start — two breaths, because you\'re my eleventh today and you deserve the same person the first one got."',
                                        '«Antes de empezar, dos respiraciones, porque eres la undécima de hoy y mereces a la misma persona que se llevó la primera.»'),
                                gain: T(
                                        'Says out loud the thing the Reset is for, which also gives her permission to be a person rather than an item on a list. Courses are renewed on the strength of the eleventh appointment, not the first.',
                                        'Dice en voz alta para qué sirve el Reinicio, y de paso le da permiso a ella para ser una persona y no un elemento de una lista. Los bonos se renuevan por la fuerza de la undécima cita, no de la primera.')
                              }
                    }
                  ],
      conversation: {
                      setting: T(
                                 'A consultation for tensor threads, mid-face, €1,500. You are running twenty minutes late and this is the third of five afternoon consultations.',
                                 'Consulta de hilos tensores, tercio medio, 1.500 €. Vas veinte minutos por detrás y esta es la tercera de cinco consultas de la tarde.'),
                      before: [
                                {
                                  who: 'client',
                                  line: T(
                                          '"I don\'t really know what I want. I just know I don\'t like what I see."',
                                          '«No sé muy bien qué quiero. Solo sé que no me gusta lo que veo.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"That\'s a completely normal place to start. Let\'s have a look together and I\'ll tell you what I\'m seeing, and then you tell me if it matches."',
                                          '«Es un punto de partida completamente normal. Vamos a mirarlo juntas, te digo qué veo yo y luego me dices si te cuadra.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"Alright."', '«Vale.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"There\'s some descent in the mid-face and the jawline has softened a little. Threads would lift that area, and that\'s around €1,500 depending on how many we use."',
                                          '«Hay algo de descenso en el tercio medio y el óvalo se ha ablandado un poco. Los hilos tensarían esa zona, y eso son unos 1.500 € según cuántos usemos.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"Right. And is that the only option?"',
                                          '«Ya. ¿Y esa es la única opción?»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"There are others, but for what I\'m seeing this is the one I\'d put first. I can write it all down for you so you can have a think at home."',
                                          '«Hay otras, pero por lo que veo esta es la que pondría primero. Te lo apunto todo y así te lo piensas en casa.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"Thanks. I\'ll have a think."', '«Gracias. Me lo pienso.»')
                                }
                              ],
                      after: [
                               {
                                 who: 'client',
                                 line: T(
                                         '"I don\'t really know what I want. I just know I don\'t like what I see."',
                                         '«No sé muy bien qué quiero. Solo sé que no me gusta lo que veo.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Then let\'s not look at anything yet. I\'d rather hear it than see it — when do you notice it most?"',
                                         '«Pues de momento no miramos nada. Prefiero oírlo antes que verlo: ¿cuándo lo notas más?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"In the afternoon. In the mirror in the office toilets, under that light."',
                                         '«Por la tarde. En el espejo del baño de la oficina, con esa luz.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"And what do you do afterwards? Do you go back to your desk, or do you stay in there a minute?"',
                                         '«¿Y qué haces después? ¿Vuelves a tu mesa o te quedas ahí dentro un minuto?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"…I stay. Which sounds ridiculous out loud."',
                                         '«…Me quedo. Que dicho en voz alta suena ridículo.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"It doesn\'t sound ridiculous to me. So this isn\'t about your face at eleven in the morning — it\'s about a woman standing in a toilet at four in the afternoon."',
                                         '«A mí no me suena ridículo. Entonces esto no va de tu cara a las once de la mañana: va de una mujer de pie en un baño a las cuatro de la tarde.»')
                               },
                               {
                                 who: 'client',
                                 line: T('"Yes. That\'s exactly it."', '«Sí. Es exactamente eso.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Now I\'ll look. And whatever I say costs — threads are around €1,500 — I want you to hold that sentence next to it and tell me whether it\'s worth it to you."',
                                         '«Ahora sí miro. Y cueste lo que cueste lo que diga —los hilos rondan los 1.500 €— quiero que pongas esa frase al lado y me digas si a ti te compensa.»')
                               }
                             ],
                      whatChanged: T(
                                     'Both practitioners are competent and both would place the threads correctly. The difference is the state each one arrived in. The first is twenty minutes behind and reaches for the fastest legitimate route to a recommendation, which is to look, name what is visible and price it — and everything she says after that is technically true and emotionally unusable. The second spent thirty seconds not being late before she opened the door, which is what made it possible to refuse the client\'s invitation to look. The office toilet at four in the afternoon is not information the first version was ever going to get, because a hurried practitioner produces a hurried client, and hurried clients describe faces rather than lives.',
                                     'Las dos profesionales son competentes y las dos colocarían bien los hilos. La diferencia es el estado con el que llegó cada una. La primera va veinte minutos por detrás y echa mano de la vía legítima más rápida hacia una recomendación: mirar, nombrar lo visible y ponerle precio, y todo lo que dice a partir de ahí es técnicamente cierto y emocionalmente inservible. La segunda dedicó treinta segundos a dejar de ir tarde antes de abrir la puerta, y eso es lo que le permitió rechazar la invitación de la clienta a mirar. El baño de la oficina a las cuatro de la tarde no es información que la primera versión fuera a conseguir nunca, porque una profesional con prisa produce una clienta con prisa, y las clientas con prisa describen caras, no vidas.'),
                      cost: T(
                              '€1,500 postponed into a think-about-it, and a written estimate that now competes on price alone in a city with four hundred clinics. The second version has something no estimate can be compared against.',
                              '1.500 € aplazados a un «me lo pienso» y un presupuesto por escrito que ahora compite solo por precio en una ciudad con cuatrocientas clínicas. La segunda versión tiene algo con lo que ningún presupuesto se puede comparar.')
                    },
      title: T('The Reset', 'El Reinicio'),
      objective: T('Run the Reset ritual before a consultation, and recognise what your own state does to the client\'s.',
                   'Ejecutar el ritual de Reinicio antes de una consulta y reconocer qué le hace tu propio estado al de la clienta.'),
      provenance: {
        chapter: 8,
        principle: T('M is not a technique you perform. It is a state you inhabit, and that state is contagious.',
                     'M no es una técnica que se interpreta. Es un estado que se habita, y ese estado se contagia.'),
        phase: 'preparation',
        trustStage: 'safety',
        standard: 1,
        duty: 3,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Half a minute alone with the door shut is the first thing to go on a full day, and losing it looks like devotion rather than neglect: one more woman seen, one less minute squandered. Chapter 8 destroys that arithmetic. Mirror neurons make your interior weather public property — hurry, hunger, the residue of an argument at reception — so a consultation entered at a run is not merely your hurried hour. It becomes hers, and she will form her judgement of you from inside your weather.',
            'Medio minuto a solas con la puerta cerrada es lo primero que se cae en un día lleno, y perderlo parece entrega y no descuido: una mujer más atendida, un minuto menos malgastado. El capítulo 8 destruye esa aritmética. Las neuronas espejo convierten tu clima interior en dominio público —la prisa, el hambre, el poso de una discusión en recepción—, así que una consulta iniciada a la carrera no es solo tu hora con prisa. Pasa a ser la suya, y ella se formará su juicio sobre ti desde dentro de tu clima.'),
        sheIsThinking: T(
            'She has come straight from something else and is still in it. I will keep this light so as not to pile on.',
            'Viene directa de otra cosa y sigue metida ahí. Voy a llevar esto ligero para no añadirle más carga.'),
        ladder: {
          weak: {
            line:   T(
                '(pulling the door open mid-email) "Right — come in, sorry, it\'s been a morning."',
                '(abriendo la puerta a medio correo) «Venga, pasa, perdona, llevo una mañana…»'),
            effect: T(
                'Publishes your weather and asks her to carry some. She spends the hour being an undemanding visitor, which is another way of saying an incomplete one.',
                'Publica tu clima y le pide que cargue con parte. Ella se pasa la hora siendo una visita poco exigente, que es otra manera de decir una visita incompleta.')
          },
          average: {
            line:   T(
                '(one breath in the corridor) "Right. Focus."',
                '(una respiración en el pasillo) «Vale. Concéntrate.»'),
            effect: T(
                'Better than nothing, and still an instruction about your own performance. The tightness in your chest survives the corridor and is sitting there when she does.',
                'Mejor que nada, y sigue siendo una instrucción sobre tu propio rendimiento. La tensión del pecho sobrevive al pasillo y está ahí sentada cuando ella se sienta.')
          },
          strong: {
            line:   T(
                '(monitor dark, two breaths) "Someone is about to walk in. I\'m here to serve her, not to close her."',
                '(monitor apagado, dos respiraciones) «Ahora entra alguien. Estoy aquí para atenderla, no para cerrarle una venta.»'),
            effect: T(
                'Chapter 8\'s Reset, word for word. It swaps what you are hunting for over the next hour, and what you are hunting for is exactly what her body is reading off you.',
                'Es el Reinicio del capítulo 8, palabra por palabra. Cambia qué estás cazando durante la hora siguiente, y lo que estás cazando es exactamente lo que su cuerpo te está leyendo.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Your state is contagious', 'Tu estado es contagioso'),
          body: [
            T('Mirror neurons replicate the state of the person in front of us. Walk in carrying pressure about your numbers and her nervous system registers it — not consciously, but accurately — and concludes that if you are worried, she should be careful. Walk in present and unhurried and it concludes the opposite.',
              'Las neuronas espejo replican el estado de quien tenemos delante. Entra cargando la presión de tus cifras y su sistema nervioso lo registra —no conscientemente, pero con precisión— y concluye que si tú estás preocupado, ella debería tener cuidado. Entra presente y sin prisa y concluye lo contrario.'),
            T('This is the one variable in a consultation that is entirely yours. Not the market, not the client\'s budget, not what a competitor promised her. The book\'s Reset is thirty seconds: close everything, two breaths, and one sentence said as truth rather than as technique — "someone is about to walk in; I am here to serve her, not to close her."',
              'Es la única variable de la consulta que es enteramente tuya. No el mercado, ni el presupuesto de la clienta, ni lo que le prometió un competidor. El Reinicio del libro dura treinta segundos: cierra todo, dos respiraciones y una frase dicha como verdad y no como técnica: «alguien está a punto de entrar; estoy aquí para servirla, no para cerrarla».'),
            T('The shift is small and it is measurable in her behaviour within the first minute. A practitioner who is hunting produces a client who defends.',
              'El cambio es pequeño y es medible en la conducta de ella dentro del primer minuto. Un profesional que caza produce una clienta que se defiende.')
          ] },
        { kind: 'order',
          prompt: T('Put the Reset in the order the book gives it.', 'Ordena el Reinicio tal y como lo da el libro.'),
          items: [
            { id: 'r_close', text: T('Close everything — screen, phone, every open tab.', 'Cierra todo: pantalla, móvil, todas las pestañas abiertas.') },
            { id: 'r_breathe', text: T('Two deep breaths, eyes closed.', 'Dos respiraciones profundas, con los ojos cerrados.') },
            { id: 'r_say', text: T('Say it to yourself: "I am here to serve her, not to close her."', 'Dítelo a ti mismo: «Estoy aquí para servirla, no para cerrarla».') },
            { id: 'r_stand', text: T('Open your eyes. Stand. Wait.', 'Abre los ojos. Ponte de pie. Espera.') }
          ],
          correct: ['r_close', 'r_breathe', 'r_say', 'r_stand'],
          why: T('The order matters because each step removes an input the next one needs gone. Breathing while the screen is still open does nothing; the sentence said while you are still scanning email is a slogan. And the ritual ends standing, because standing is the first thing she will see.',
                 'El orden importa porque cada paso retira una entrada que el siguiente necesita eliminada. Respirar con la pantalla abierta no hace nada; la frase dicha mientras revisas el correo es un eslogan. Y el ritual termina de pie, porque estar de pie es lo primero que ella verá.') },
        { kind: 'compare',
          prompt: T('Two practitioners, four minutes before the same client. Which one has done the work?',
                    'Dos profesionales, cuatro minutos antes de la misma clienta. ¿Cuál ha hecho el trabajo?'),
          a: { label: T('Practitioner A', 'Profesional A'),
               text: T('Re-reads the treatment pricing, rehearses the three options, decides which package to lead with, and opens the consent form ready on screen.',
                       'Repasa los precios, ensaya las tres opciones, decide con qué paquete abrir y deja el consentimiento abierto en pantalla.') },
          b: { label: T('Practitioner B', 'Profesional B'),
               text: T('Reads the file once for what the client wrote in her own words, closes the screen, breathes twice, and stands up before the door opens.',
                       'Lee la ficha una vez buscando lo que la clienta escribió con sus palabras, cierra la pantalla, respira dos veces y se pone de pie antes de que se abra la puerta.') },
          answer: 'b',
          why: T('A is not lazy — A is over-prepared in the wrong direction. Every item on A\'s list is about what A will say, which is exactly the state mirror neurons transmit as pressure. B prepared the only two things that matter in Phase 1: what the client already told you, and the state you will be in when she sees you.',
                 'A no es perezoso: A está sobrepreparado en la dirección equivocada. Cada punto de su lista trata de lo que él va a decir, que es justo el estado que las neuronas espejo transmiten como presión. B preparó las dos únicas cosas que importan en la Fase 1: lo que la clienta ya te contó y el estado en el que estarás cuando te vea.') },
        { kind: 'reflect',
          prompt: T('What do you actually do in the four minutes before a consultation? Write it honestly, step by step.',
                    '¿Qué haces realmente en los cuatro minutos previos a una consulta? Escríbelo con honestidad, paso a paso.'),
          placeholder: T('Include the parts that are not about the client.', 'Incluye las partes que no tienen que ver con la clienta.') },
        { kind: 'choose',
          prompt: T('It is 18:40. The previous consultation overran, the one before that declined, and your month is short. The next client is already in the waiting room. You have ninety seconds. What do you do with them?',
                    'Son las 18:40. La consulta anterior se ha alargado, la de antes no salió y el mes va corto. La siguiente clienta ya está en la sala de espera. Tienes noventa segundos. ¿Qué haces con ellos?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Re-read her file and decide which of the three options to lead with, so the consultation is efficient enough to finish on time.',
                       'Releer su ficha y decidir con cuál de las tres opciones abrir, para que la consulta sea lo bastante eficiente y termine a su hora.'),
              why: T('Every item in that plan is about what you will say, which is precisely the state mirror neurons transmit. You will walk in prepared and carrying pressure, and her nervous system will read the pressure long before it evaluates the plan.',
                     'Cada punto de ese plan trata de lo que vas a decir tú, que es justamente el estado que transmiten las neuronas espejo. Entrarás preparado y cargando presión, y su sistema nervioso leerá la presión mucho antes de evaluar el plan.') },
            { id: 'b', verdict: 'best',
              label: T('Close everything, two breaths, and say it as a fact rather than a technique: "Someone is about to walk in. I am here to serve her, not to close her." Then stand.',
                       'Cerrar todo, dos respiraciones y decirlo como un hecho y no como una técnica: «Alguien está a punto de entrar. Estoy aquí para servirla, no para cerrarla». Luego ponerte de pie.'),
              why: T('Thirty of the ninety seconds, spent on the only variable in the room that is entirely yours. It is not a mood exercise: the book\'s claim is that the shift is measurable in her behaviour inside the first minute, and the part doing the work is the sentence said as truth rather than as a line.',
                     'Treinta de los noventa segundos, empleados en la única variable de la sala que es enteramente tuya. No es un ejercicio de ánimo: la afirmación del libro es que el cambio se mide en la conducta de ella dentro del primer minuto, y la parte que hace el trabajo es la frase dicha como verdad y no como fórmula.') },
            { id: 'c', verdict: 'harmful',
              label: T('Acknowledge the reality and use it: a short, honest "It\'s been a long day, forgive me" at the start buys her understanding.',
                       'Reconocer la realidad y aprovecharla: un breve y honesto «ha sido un día largo, perdóname» al principio te gana su comprensión.'),
              why: T('It is honest, and it hands her your state to manage. She arrived carrying her own thing to say and has just been given a reason to be considerate first. A client who is looking after the practitioner is not disclosing anything.',
                     'Es honesto, y le entrega tu estado para que lo gestione ella. Llegó cargando algo suyo que decir y acaba de recibir un motivo para ser considerada primero. Una clienta que está cuidando al profesional no está revelando nada.') }
          ],
          principle: T('Your state is contagious, and it is the one input in the consultation that no market, budget or competitor controls. A practitioner who is hunting produces a client who defends.',
                       'Tu estado es contagioso y es la única entrada de la consulta que no controlan ni el mercado, ni el presupuesto, ni la competencia. Un profesional que caza produce una clienta que se defiende.'),
          retry: {
            note: T('The Reset done properly — and then the next few minutes.',
                    'El Reinicio hecho bien, y luego los minutos siguientes.'),
            prompt: T('You ran the Reset, stood, and received her well. Six minutes in, mid-sentence about her mother, your phone buzzes face-up on the desk. You do not touch it. What do you do?',
                      'Hiciste el Reinicio, te levantaste y la recibiste bien. A los seis minutos, en mitad de una frase sobre su madre, vibra tu móvil boca arriba sobre la mesa. No lo tocas. ¿Qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Nothing at all. You did not look at it, so nothing has been broken — reacting would only draw attention to it.',
                         'Nada. No lo has mirado, así que no se ha roto nada; reaccionar solo llamaría la atención sobre ello.'),
                why: T('She heard it too, and she watched you not look. What is unresolved now is whether the room still belongs to her, and clients resolve that question by shortening their answers rather than by asking. The phone was the error; the silence about it is the second one.',
                       'Ella también lo ha oído, y ha visto cómo no lo mirabas. Lo que queda sin resolver es si la sala sigue siendo suya, y las clientas resuelven esa pregunta acortando sus respuestas, no preguntando. El móvil fue el error; el silencio sobre él es el segundo.') },
              { id: 'b', verdict: 'best',
                label: T('Turn it face-down without looking at the screen, say "Sorry — carry on, your mother," and return to her exact word.',
                         'Ponerlo boca abajo sin mirar la pantalla, decir «perdona, sigue, tu madre» y volver a su palabra exacta.'),
                why: T('Three seconds, and it does two things: it removes the object, and it proves you were still inside her sentence while the interruption happened. Returning her own last word is the evidence; a general "please, go on" would have proved only that you noticed she had stopped.',
                       'Tres segundos, y hace dos cosas: retira el objeto y demuestra que seguías dentro de su frase mientras ocurría la interrupción. Devolverle su última palabra es la prueba; un «sigue, por favor» genérico solo habría demostrado que notaste que se había parado.') },
              { id: 'c', verdict: 'harmful',
                label: T('Check it quickly — it might be reception asking about the next patient — and explain: "Sorry, I have to keep an eye on this one."',
                         'Mirarlo rápido —puede ser recepción preguntando por la siguiente paciente— y explicarlo: «Perdona, tengo que estar pendiente de esto».'),
                why: T('You have told her that something in this room outranks her, and that the ranking is permanent. The book\'s rule is not about etiquette: once M is open it cannot be half-closed, and a stated reason turns the interruption into a policy rather than an accident.',
                       'Le has dicho que algo en esta sala está por encima de ella, y que ese orden es permanente. La regla del libro no va de etiqueta: una vez abierta la M no se puede cerrar a medias, y un motivo declarado convierte la interrupción en una norma y no en un accidente.') }
            ],
            principle: T('M is sacred once opened. The rule is not "do not be interrupted" — it is that the repair must be visible, immediate, and made of her own words.',
                         'La M, una vez abierta, es sagrada. La regla no es «que no te interrumpan»: es que la reparación sea visible, inmediata y hecha con las palabras de ella.'),
            changes: {
              axis: 'clientResponse',
              detail: T('She finishes the sentence about her mother instead of dropping it. Left unrepaired, the buzz ends that sentence with «anyway, it doesn’t matter» — the line that closes a disclosure and cannot be reopened by asking.',
                        'Termina la frase sobre su madre en vez de dejarla a medias. Sin reparación, la vibración cierra esa frase con un «bueno, da igual», la frase que clausura una confidencia y que no se reabre preguntando.')
            }
          } },
        { kind: 'check',
          prompt: T('A practitioner does the Reset perfectly, then checks a message while the client is sitting down. What has been lost?',
                    'Un profesional hace el Reinicio perfectamente y luego mira un mensaje mientras la clienta se sienta. ¿Qué se ha perdido?'),
          options: [
            { id: 'a', text: T('Nothing — the Reset was done, and one glance is trivial.', 'Nada: el Reinicio se hizo y una mirada es trivial.') },
            { id: 'b', text: T('The whole of it. The client reads the switch, not the preparation she never saw.', 'Todo. La clienta lee el cambio, no la preparación que nunca vio.') },
            { id: 'c', text: T('Only credibility, which can be rebuilt in Phase 5.', 'Solo la credibilidad, que puede reconstruirse en la Fase 5.') }
          ],
          answer: 'b',
          why: T('She has no access to your preparation. She has access to one data point: at the moment she sat down, your attention went somewhere else. That is the entire evidence base she is working from, and it is why the book calls M sacred once opened.',
                 'Ella no tiene acceso a tu preparación. Tiene acceso a un dato: en el momento en que se sentó, tu atención se fue a otra parte. Esa es toda la evidencia con la que trabaja, y por eso el libro dice que la M, una vez abierta, es sagrada.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm2l3', n: 3, minutes: 10,
      treatments: [
                    {
                      name: T('Tensor threads — mid-face', 'Hilos tensores — tercio medio'),
                      price: T(
                               '€1,500, typically eight to ten threads',
                               '1.500 €, normalmente de ocho a diez hilos'),
                      why: T(
                             'A four-figure consultation is the one you most want to go well, and wanting it to go well is itself the state she will detect.',
                             'Una consulta de cuatro cifras es la que más quieres que salga bien, y querer que salga bien es justamente el estado que ella va a detectar.'),
                      moment: T(
                                'It is the last consultation of a month that is €4,000 short of target, and she is the only four-figure appointment in the diary.',
                                'Es la última consulta de un mes que va 4.000 € por debajo del objetivo, y es la única cita de cuatro cifras de la agenda.'),
                      weak: {
                              line: T(
                                      '"I\'ve been looking forward to this one — I think there\'s a lot we could do for you, and I\'ve kept plenty of time."',
                                      '«Tenía ganas de esta cita. Creo que hay bastante que podríamos hacer por ti y me he guardado tiempo de sobra.»'),
                              cost: T(
                                      'Generous, warm and entirely true, and it arrives carrying appetite. A lot we could do is heard as a large invoice before a single question has been asked, and her guard goes up in the first sentence.',
                                      'Es generoso, cálido y del todo cierto, y llega cargado de apetito. «Bastante que podríamos hacer» se oye como una factura grande antes de la primera pregunta, y la guardia le sube en la primera frase.')
                            },
                      strong: {
                                line: T(
                                        '"I\'ve got an hour and nothing after you. Start wherever you want."',
                                        '«Tengo una hora y después de ti no tengo nada. Empieza por donde quieras.»'),
                                gain: T(
                                        'Says the same generosity without the appetite attached. The preparation that made this line available happened before the door opened: the target was dealt with outside the room, so it is not in the room.',
                                        'Dice la misma generosidad sin el apetito pegado. La preparación que hizo posible esta frase ocurrió antes de que se abriera la puerta: el objetivo se resolvió fuera de la sala, así que no está dentro.')
                              }
                    },
                    {
                      name: T(
                              'Chemical peel — medium depth, single session',
                              'Peeling químico — profundidad media, sesión suelta'),
                      price: T('€180 per session', '180 € la sesión'),
                      why: T(
                             'A €180 appointment is the one nobody prepares for, and it is where the day\'s accumulated state is transmitted with no effort to hide it.',
                             'Una cita de 180 € es aquella para la que nadie se prepara, y es donde el estado acumulado del día se transmite sin ningún esfuerzo por disimularlo.'),
                      moment: T(
                                'She is your fourth peel since lunch, the room still smells of the last one, and you are eating standing up between clients.',
                                'Es tu cuarto peeling desde la comida, la sala aún huele al anterior y estás comiendo de pie entre clientas.'),
                      weak: {
                              line: T(
                                      '"Come in, sorry about the smell — let me open the window and we\'ll get going. Same protocol as we discussed on the phone."',
                                      '«Pasa, perdona el olor. Abro la ventana y empezamos. El mismo protocolo que hablamos por teléfono.»'),
                              cost: T(
                                      'Honest housekeeping, and it tells her she has walked into the middle of somebody else\'s afternoon. She will not mention the event in three weeks that she booked this for, so you will never know it existed.',
                                      'Es sinceridad doméstica, y le dice que se ha metido en mitad de la tarde de otra persona. No va a mencionar el evento de dentro de tres semanas por el que ha pedido esta cita, así que nunca sabrás que existía.')
                            },
                      strong: {
                                line: T(
                                        '"Two minutes and the room is yours — I\'d rather you came into a clean one. Sit down, I\'ll be right with you."',
                                        '«Dos minutos y la sala es tuya; prefiero que entres en una limpia. Siéntate, que ahora mismo estoy contigo.»'),
                                gain: T(
                                        'Resetting the room is the visible half of resetting yourself, and it is available even on a day with no gaps. She enters something prepared for her, which is what a €180 client almost never gets.',
                                        'Reiniciar la sala es la mitad visible de reiniciarte a ti, y está disponible incluso en un día sin huecos. Entra en algo preparado para ella, que es lo que casi nunca recibe una clienta de 180 €.')
                              }
                    }
                  ],
      title: T('The consultation before the consultation', 'La consulta antes de la consulta'),
      objective: T('Read a file for what it predicts about the consultation, not only for what it records.',
                   'Leer una ficha por lo que predice sobre la consulta, no solo por lo que registra.'),
      provenance: {
        chapter: 7,
        principle: T('Prepare yourself before she walks in: if you arrive from stress and rushing, she will feel it before you speak.',
                     'Prepárate antes de que ella entre: si llegas desde el estrés y las prisas, lo notará antes de que hables.'),
        phase: 'preparation',
        trustStage: 'safety',
        standard: 1,
        duty: 3,
        toolkit: 1
      },
      depth: {
        whyItGoesWrong: T(
            'Mining a record for contraindications, previous courses and what was tried in 2022 is precisely what a careful clinician does, and the record repays it. The oversight is a category error rather than a lapse: a record is a history, and what is needed before the door opens is a forecast. Who reserved, withdrew and reserved again. Who attended once and vanished. Who arrived on a friend\'s recommendation and which friend. Those entries sit in the same document and get skimmed past, because they are not written in clinical language.',
            'Minar una historia buscando contraindicaciones, ciclos previos y qué se probó en 2022 es exactamente lo que hace una clínica cuidadosa, y la historia se lo devuelve. El descuido es un error de categoría antes que un despiste: una historia es pasado, y lo que hace falta antes de que se abra la puerta es un pronóstico. Quién reservó, se dio de baja y volvió a reservar. Quién acudió una vez y desapareció. Quién llegó por recomendación de una amiga y de qué amiga. Esas entradas están en el mismo documento y se leen por encima, porque no están escritas en lenguaje clínico.'),
        sheIsThinking: T(
            'My history is open on her desk. I wonder whether it shows that I pulled out twice.',
            'Mi historia está abierta sobre su mesa. Me pregunto si ahí se ve que me eché atrás dos veces.'),
        ladder: {
          weak: {
            line:   T(
                '"I see you\'ve rescheduled a couple of times — busy few months?"',
                '«Veo que has cambiado la cita un par de veces. ¿Meses complicados?»'),
            effect: T(
                'Frames the withdrawals as her lapse. She apologises for them, and why she almost stayed away becomes the one item now unavailable to you.',
                'Presenta las bajas como un desliz suyo. Ella se disculpa por ellas, y el motivo por el que casi no viene se convierte en el único asunto que ya no está a tu alcance.')
          },
          average: {
            line:   T(
                '"Let\'s start from the beginning, then."',
                '«Empecemos desde el principio, entonces.»'),
            effect: T(
                'Safe, and it discards the most predictive line the record contained. Two withdrawals and a rebooking describe a woman arguing with herself.',
                'Es seguro, y descarta la línea más predictiva que contenía la historia. Dos bajas y una nueva reserva describen a una mujer discutiendo consigo misma.')
          },
          strong: {
            line:   T(
                '"You first booked this back in March. What made today the day you actually came?"',
                '«Pediste esta cita por primera vez en marzo. ¿Qué ha hecho que hoy fuera el día en que has venido de verdad?»'),
            effect: T(
                'Spends the withdrawals without charging her for them, and asks what finally tipped it. What tipped it is generally the same force that made her reserve in March.',
                'Gasta las bajas sin pasarle factura por ellas y pregunta qué acabó inclinando la balanza. Lo que la inclinó suele ser la misma fuerza que la hizo reservar en marzo.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Phase 1 has a deliverable', 'La Fase 1 tiene un entregable'),
          body: [
            T('Preparation is a canonical phase, not a warm-up. Its deliverable is a prediction: what kind of entrance this client will make, what she is likely to be protecting, and which sentence in her own file tells you so.',
              'La Preparación es una fase canónica, no un calentamiento. Su entregable es una predicción: qué tipo de entrada hará esta clienta, qué es probable que esté protegiendo y qué frase de su propia ficha te lo indica.'),
            T('Most files contain one line the client wrote herself — the booking note, the reason for the visit, the free-text field. That line is worth more than the rest of the file combined, because it is the only part not written by your clinic.',
              'La mayoría de las fichas contienen una línea escrita por la propia clienta: la nota de la cita, el motivo de la visita, el campo libre. Esa línea vale más que el resto de la ficha junta, porque es la única parte que no ha escrito tu clínica.')
          ] },
        { kind: 'signal',
          avatar: 'carmen',
          name: T('Booking file — Carmen D., 51', 'Ficha de cita — Carmen D., 51'),
          client: T('"Consultation re: frown lines / marionette lines. NOT sure I want anything done." Booked by: sister. Previous appointment at another clinic, cancelled on the day.',
                    '«Consulta por: líneas del entrecejo / líneas de marioneta. NO estoy segura de querer hacerme nada». Cita reservada por: su hermana. Cita previa en otra clínica, cancelada el mismo día.'),
          prompt: T('What does this file predict?', '¿Qué predice esta ficha?'),
          notice: [
            T('The capitalised NOT is hers. A client who capitalises a refusal in a booking form is protecting something before she has met you.',
              'El NO en mayúsculas es suyo. Una clienta que escribe un rechazo en mayúsculas en un formulario está protegiendo algo antes de conocerte.'),
            T('The appointment was made by someone else. Whatever she says in the room, part of her did not choose to be there — and that part will decide.',
              'La cita la pidió otra persona. Diga lo que diga en la sala, una parte de ella no eligió estar ahí, y esa parte será la que decida.'),
            T('A cancelled appointment elsewhere is prior experience, even though nothing was done. Something happened in that clinic, or in her anticipation of it, that she has not yet told anyone.',
              'Una cita cancelada en otro sitio es experiencia previa, aunque no se hiciera nada. Algo pasó en esa clínica, o en su anticipación de ella, que aún no le ha contado a nadie.'),
            T('Prediction: a confident-sounding entrance built on top of an armoured one. Expect technical questions used as a shield, and expect the real question to arrive only if you leave room for it.',
              'Predicción: una entrada de apariencia segura construida sobre una acorazada. Espera preguntas técnicas usadas como escudo, y espera que la pregunta real solo llegue si le dejas sitio.')
          ] },
        { kind: 'choose',
          prompt: T('You have four minutes with that file. What do you do with them?',
                    'Tienes cuatro minutos con esa ficha. ¿Qué haces con ellos?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Prepare the clinical pathway: dosing options for the glabella, contraindications, a staged plan.',
                       'Preparar la vía clínica: opciones de dosis para el entrecejo, contraindicaciones, un plan por etapas.'),
              why: T('Competent and incomplete. You will be ready for the consultation she is not going to have. Her file predicts a trust problem, and a dosing plan answers a treatment problem.',
                     'Competente e incompleto. Estarás listo para la consulta que ella no va a tener. Su ficha predice un problema de confianza, y un plan de dosis responde a un problema de tratamiento.') },
            { id: 'b', verdict: 'best',
              label: T('Name what you expect: an identity concern, an appointment she did not make, and a walkout in her history — and decide in advance to promise nothing today.',
                       'Nombrar lo que esperas: una preocupación de identidad, una cita que no pidió ella y un abandono en su historial, y decidir de antemano no prometer nada hoy.'),
              why: T('You have converted the file into a prediction and a constraint on your own behaviour. The constraint is the valuable half: deciding before she arrives that today will not contain a proposal is what makes the room safe enough for the real question to appear.',
                     'Has convertido la ficha en una predicción y en una restricción sobre tu propia conducta. La restricción es la mitad valiosa: decidir antes de que llegue que hoy no habrá una propuesta es lo que hace la sala lo bastante segura para que aparezca la pregunta real.') },
            { id: 'c', verdict: 'harmful',
              label: T('Skim it. Reading too much in advance makes you assume, and you would rather meet her without preconceptions.',
                       'Ojearla. Leer demasiado de antemano hace que supongas, y prefieres conocerla sin ideas previas.'),
              why: T('An appealing principle applied to the wrong object. Not reading the file does not make you neutral; it makes you improvise, and improvisation defaults to the standard consultation — which is exactly the one that made her cancel somewhere else.',
                     'Un principio atractivo aplicado al objeto equivocado. No leer la ficha no te vuelve neutral: te hace improvisar, y la improvisación por defecto es la consulta estándar, que es justamente la que le hizo cancelar en otro sitio.') }
          ],
          principle: T('Phase 1 exists to make Phase 2 possible. Its output is a prediction and a decision about your own conduct — never a plan for hers.',
                       'La Fase 1 existe para hacer posible la Fase 2. Su salida es una predicción y una decisión sobre tu propia conducta, nunca un plan sobre la de ella.'),
          retry: {
            note: T('A different file, four minutes, the same deliverable.',
                    'Otra ficha, cuatro minutos, el mismo entregable.'),
            prompt: T('Next client. The booking note reads, in her own words: "Would like to discuss options before my daughter\'s wedding in May." Nothing else. No previous treatments, no cancellations, first visit. What is the deliverable of those four minutes?',
                      'Siguiente clienta. La nota de la cita dice, con sus palabras: «Me gustaría hablar de opciones antes de la boda de mi hija en mayo». Nada más. Sin tratamientos previos, sin anulaciones, primera visita. ¿Cuál es el entregable de esos cuatro minutos?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('There is nothing to predict here — it is a clean file with a clear reason. Use the four minutes to prepare realistic timelines for May.',
                         'Aquí no hay nada que predecir: es una ficha limpia con un motivo claro. Usar los cuatro minutos para preparar plazos realistas para mayo.'),
                why: T('The timeline will be needed and it is not the deliverable. "Before my daughter\'s wedding" is a deadline and a role: she will be photographed all day, standing next to a bride, in a family that will look at those pictures for twenty years. A file with one client sentence in it is not a thin file.',
                       'El calendario hará falta y no es el entregable. «Antes de la boda de mi hija» es un plazo y un papel: la fotografiarán todo el día, junto a una novia, en una familia que mirará esas fotos durante veinte años. Una ficha con una frase de la clienta dentro no es una ficha pobre.') },
              { id: 'b', verdict: 'best',
                label: T('Predict from the one sentence she wrote: a fixed date, a day on which she will be looked at, and a result that must be finished and settled well before it. Then decide in advance to ask what she is afraid the photographs will show.',
                         'Predecir a partir de la única frase que escribió: una fecha fija, un día en el que la van a mirar y un resultado que debe estar terminado y asentado mucho antes. Y decidir de antemano preguntarle qué teme que muestren las fotos.'),
                why: T('You converted her sentence into the two things Phase 1 owes Phase 2 — an expectation of what she is protecting, and a constraint on your own conduct. The date governs the clinical planning; the question about the photographs is what makes the consultation about her rather than about May.',
                       'Has convertido su frase en las dos cosas que la Fase 1 le debe a la Fase 2: una expectativa de qué protege y una restricción sobre tu propia conducta. La fecha gobierna la planificación clínica; la pregunta sobre las fotos es lo que hace que la consulta trate de ella y no de mayo.') },
              { id: 'c', verdict: 'harmful',
                label: T('Assume the drive: mother-of-the-bride consultations are almost always about not looking older than the groom\'s mother. Prepare for that conversation.',
                         'Dar por supuesto el motor: las consultas de madre de la novia casi siempre van de no parecer mayor que la madre del novio. Preparar esa conversación.'),
                why: T('The category is often right, which is exactly what makes it dangerous. You will open with a reading she did not give you: if it is accurate you have taken her disclosure, and if it is not she will agree anyway, because correcting a professional is expensive. Either way the sentence you needed is now unavailable.',
                       'La categoría acierta a menudo, y eso es justo lo que la hace peligrosa. Abrirás con una lectura que ella no te dio: si es exacta, le has quitado su revelación; si no lo es, estará de acuerdo igualmente, porque corregir a un profesional sale caro. En cualquier caso, la frase que necesitabas ya no está disponible.') }
            ],
            principle: T('Phase 1 produces a prediction and a constraint, never a conclusion. The clean file with one client sentence in it is the richest kind there is.',
                         'La Fase 1 produce una predicción y una restricción, nunca una conclusión. La ficha limpia con una sola frase de la clienta es la más rica que existe.'),
            changes: {
              axis: 'disclosure',
              detail: T('Because you decided in advance to ask about the photographs, she tells you in minute four that one of them will hang in her daughter’s hall for the next twenty years. The deadline and the criterion arrive while the plan can still be built around them.',
                        'Como decidiste de antemano preguntar por las fotos, en el minuto cuatro te cuenta que una de ellas colgará en el recibidor de su hija durante los próximos veinte años. El plazo y el criterio llegan cuando el plan todavía puede construirse a su alrededor.')
            }
          } },
        { kind: 'check',
          prompt: T('Which item from a file most reliably predicts a difficult Phase 7?',
                    '¿Qué dato de una ficha predice con más fiabilidad una Fase 7 difícil?'),
          options: [
            { id: 'a', text: T('A high-value treatment interest.', 'Interés en un tratamiento de alto valor.') },
            { id: 'b', text: T('An unfinished prior experience — a cancelled appointment, a treatment elsewhere she has not described, a result she was unhappy with.', 'Una experiencia previa sin cerrar: una cita cancelada, un tratamiento en otro sitio que no ha descrito, un resultado con el que no quedó contenta.') },
            { id: 'c', text: T('A long gap since her last visit.', 'Un intervalo largo desde su última visita.') }
          ],
          answer: 'b',
          why: T('Unfinished prior experience is the single most common source of a late objection you cannot answer, because it arrives as fear rather than as a question. Toolkit #1 has a dedicated field for it, and the Discovery gate will not open if that field is empty.',
                 'La experiencia previa sin cerrar es la fuente más común de una objeción tardía que no puedes responder, porque llega como miedo y no como pregunta. El Toolkit #1 tiene un campo dedicado a ello, y la compuerta del Descubrimiento no se abre si ese campo está vacío.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm2l4', n: 4, minutes: 11,
      treatments: [
                    {
                      name: T('Facial microneedling — course of three', 'Microagujas faciales — bono de tres'),
                      price: T('€540 for three sessions', '540 € el bono de tres'),
                      why: T(
                             'Microneedling is bought by women who have already tried a great deal at home, and effort mirroring is the state that matters most with someone who has been trying for years.',
                             'Las microagujas las compran mujeres que ya han probado muchísimo en casa, y el reflejo del esfuerzo es el estado que más importa con alguien que lleva años intentándolo.'),
                      moment: T(
                                'She lists what she has used — acids, retinol, three serums, a device she bought online — and finishes with a shrug.',
                                'Enumera lo que ha usado —ácidos, retinol, tres sérums, un aparato que compró por internet— y termina encogiéndose de hombros.'),
                      weak: {
                              line: T(
                                      '"You\'ve been doing a lot at home. Some of that may be too much together — I\'d simplify the routine and add three sessions here at €540."',
                                      '«Estás haciendo mucho en casa. Puede que parte sea demasiado junto: yo simplificaría la rutina y añadiría tres sesiones aquí, 540 €.»'),
                              cost: T(
                                      'Sound advice that lands as a verdict on her competence. The shrug was the question — have I been doing this wrong all along — and correcting the routine answers it with a yes.',
                                      'Es un buen consejo que aterriza como un veredicto sobre su competencia. El encogimiento de hombros era la pregunta —¿lo he estado haciendo mal todo este tiempo?— y corregirle la rutina la responde con un sí.')
                            },
                      strong: {
                                line: T(
                                        '"You\'ve tried more than most people who sit in that chair. The problem was never that you don\'t care."',
                                        '«Has probado más que la mayoría de la gente que se sienta en esa silla. El problema nunca fue que no te importara.»'),
                                gain: T(
                                        'Effort mirroring, said before any recommendation. It removes the verdict she was braced for, and the routine can be simplified afterwards without it meaning she failed.',
                                        'Reflejo del esfuerzo, dicho antes de cualquier recomendación. Le quita el veredicto para el que venía preparada, y luego se puede simplificar la rutina sin que eso signifique que ella fracasó.')
                              }
                    },
                    {
                      name: T(
                              'Body radiofrequency — course of ten',
                              'Radiofrecuencia corporal — bono de diez'),
                      price: T('€1,300 for ten sessions', '1.300 € el bono de diez'),
                      why: T(
                             'Ten sessions on the body means being seen undressed ten times, and permission is the state that decides whether she books the course or the trial session.',
                             'Diez sesiones corporales significan que la vean desvestida diez veces, y el permiso es el estado que decide si compra el bono o la sesión de prueba.'),
                      moment: T(
                                'She says she should probably lose some weight first, and that she does not really belong in a place like this.',
                                'Dice que seguramente debería adelgazar un poco primero, y que ella no pega mucho en un sitio como este.'),
                      weak: {
                              line: T(
                                      '"You don\'t need to lose weight to start — this works on any body. Honestly, you\'d be surprised who comes through that door."',
                                      '«No hace falta que adelgaces para empezar: esto funciona en cualquier cuerpo. De verdad, te sorprendería quién entra por esa puerta.»'),
                              cost: T(
                                      'Reassures her twice and disagrees with her twice. She came to find out whether she is allowed here, and being contradicted warmly is not the same as being given permission.',
                                      'La tranquiliza dos veces y le lleva la contraria dos veces. Ha venido a averiguar si aquí se le permite estar, y que te contradigan con cariño no es lo mismo que que te den permiso.')
                            },
                      strong: {
                                line: T(
                                        '"There isn\'t a kind of woman who belongs here. There are just women, and every reason is the right reason."',
                                        '«No hay un tipo de mujer que pegue aquí. Solo hay mujeres, y todos los motivos son el motivo correcto.»'),
                                gain: T(
                                        'Permission mirroring in the clinic\'s own words. It legitimises her presence instead of arguing with her assessment of herself, and only then is a ten-session course something she could imagine attending.',
                                        'Reflejo de permiso con las palabras de la propia clínica. Legitima su presencia en lugar de discutirle la valoración que hace de sí misma, y solo entonces un bono de diez sesiones es algo a lo que se imagina yendo.')
                              }
                    },
                    {
                      name: T(
                              'IPL photorejuvenation — course of four',
                              'IPL fotorrejuvenecimiento — bono de cuatro'),
                      price: T('€620 for four sessions', '620 € el bono de cuatro'),
                      why: T(
                             'IPL appointments are short and technical, which makes silence feel like dead air that ought to be filled with information.',
                             'Las citas de IPL son cortas y técnicas, lo que hace que el silencio parezca un vacío que habría que rellenar con información.'),
                      moment: T(
                                'You have just asked what she wants to be different, and she has stopped talking with her mouth slightly open.',
                                'Acabas de preguntarle qué le gustaría que fuera distinto, y se ha quedado callada con la boca ligeramente abierta.'),
                      weak: {
                              line: T(
                                      '"Take your time. Meanwhile I can explain how the four sessions are spaced, which helps people decide."',
                                      '«Tómate tu tiempo. Mientras, te explico cómo se reparten las cuatro sesiones, que ayuda a decidirse.»'),
                              cost: T(
                                      'Fills the pause with something genuinely useful and retracts the question in the same breath. What she was three seconds from saying does not get said, and you never find out what it was.',
                                      'Rellena la pausa con algo verdaderamente útil y retira la pregunta en el mismo aliento. Lo que estaba a tres segundos de decir no se dice, y nunca averiguas qué era.')
                            },
                      strong: {
                                line: T('"Take your time."', '«Sin prisa.»'),
                                gain: T(
                                        'Holding the silence is the fifth state and the hardest to perform, because it looks like nothing is being done. What she says after four seconds of it is the only sentence in the appointment you could not have predicted.',
                                        'Sostener el silencio es el quinto estado y el más difícil de ejecutar, porque parece que no se está haciendo nada. Lo que dice después de cuatro segundos así es la única frase de la cita que no habrías podido predecir.')
                              }
                    }
                  ],
      title: T('The five things that create safety', 'Las cinco cosas que crean seguridad'),
      objective: T('Perform the five behaviours that establish Trust Stage 1, and recognise them in a real consultation transcript.',
                   'Ejecutar las cinco conductas que establecen la Etapa de Confianza 1 y reconocerlas en la transcripción de una consulta real.'),
      provenance: {
        chapter: 8,
        principle: T('This is the M toolkit: not five steps, five states.',
                     'Este es el instrumental de M: no son cinco pasos, son cinco estados.'),
        phase: 'connection',
        trustStage: 'safety',
        standard: 1,
        duty: 2,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Told she is not the sort of woman who does this, a decent person immediately assures her that she is — warmly, with examples, on the spot. That is inclusion, and inclusion is a virtue. But an instant contradiction remains a contradiction, and it informs her that what she just confessed was the wrong thing to confess. Chapter 8 does something slower and stranger with Anita. Not persuasion: entitlement to be there. And it deliberately includes the sentence saying she may walk out having bought nothing at all.',
            'Cuando una mujer dice que ella no es de las que hacen esto, una persona decente le asegura de inmediato que sí lo es: con calidez, con ejemplos, en el acto. Eso es inclusión, y la inclusión es una virtud. Pero una contradicción instantánea sigue siendo una contradicción, y le informa de que lo que acaba de confesar era lo que no había que confesar. El capítulo 8 hace algo más lento y más raro con Anita. No persuasión: derecho a estar ahí. Y de forma deliberada incluye la frase que dice que puede marcharse sin haber comprado nada.'),
        sheIsThinking: T(
            'I have just handed you the thing I am embarrassed about. Handle it badly and I will be charming for twenty minutes and then leave.',
            'Acabo de entregarte aquello que me da vergüenza. Si lo manejas mal, seré encantadora veinte minutos y luego me iré.'),
        ladder: {
          weak: {
            line:   T(
                '"Oh, don\'t be silly — everybody comes here!"',
                '«Anda, no digas tonterías, aquí viene todo el mundo.»'),
            effect: T(
                'Overrules her at the exact instant she took a risk. She laughs, concedes, and abandons the test — which means she abandons the disclosure that was queued behind it.',
                'La desautoriza justo en el instante en que ha corrido un riesgo. Ella se ríe, cede y abandona la prueba, lo que significa que abandona la confidencia que venía detrás.')
          },
          average: {
            line:   T(
                '"You\'d be surprised how many people say exactly that."',
                '«Te sorprendería cuánta gente dice exactamente eso.»'),
            effect: T(
                'Soothing and accurate, and it enrols her in a group. It settles the wording and leaves the shame underneath the wording entirely alone.',
                'Es apaciguador y es exacto, y la inscribe en un grupo. Zanja la formulación y deja la vergüenza que hay debajo de la formulación completamente intacta.')
          },
          strong: {
            line:   T(
                '"There\'s no \'those people\'. And honestly — if we work out together that you don\'t need anything, that\'s completely fine too. You came. That\'s what matters."',
                '«No hay mujeres de un tipo y mujeres de otro. Y con sinceridad: si acabamos viendo juntas que no necesitas nada, eso también está perfectamente bien. Has venido. Eso es lo que importa.»'),
            effect: T(
                'Nadia\'s reply to Anita, in Chapter 8\'s own wording. Entitlement and low stakes in one breath, which is why Anita\'s grip on the armrest loosens before anything has been offered to her.',
                'Es la respuesta de Nadia a Anita, con las palabras del propio capítulo 8. Derecho a estar ahí y riesgo bajo en una sola frase, y por eso Anita afloja la mano del reposabrazos antes de que le hayan ofrecido nada.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Not five steps — five states', 'No cinco pasos: cinco estados'),
          body: [
            T('The book gives them from a real consultation: stand up to receive her; do not rush; catch the unspoken word and reflect it back; give permission to belong; lower the stakes; and hold the silence after she says something that cost her.',
              'El libro los da desde una consulta real: ponte de pie para recibirla; no tengas prisa; capta la palabra no dicha y devuélvesela; da permiso para estar ahí; rebaja lo que está en juego; y sostén el silencio después de que diga algo que le ha costado.'),
            T('Notice how little of that is speech, and how none of it is about the clinic. The one sentence that does most of the work — "if we work out together that you don\'t need anything, that\'s completely okay" — is the opposite of what a sales book would tell you to say, and it is the sentence that makes the client sit back in the chair instead of on the edge of it.',
              'Fíjate en cuán poco de eso es hablar y en que nada trata de la clínica. La única frase que hace más trabajo —«si descubrimos juntos que no necesitas nada, no pasa absolutamente nada»— es lo contrario de lo que diría un manual de ventas, y es la frase que hace que la clienta se recueste en la silla en vez de quedarse en el borde.')
          ] },
        { kind: 'spot',
          prompt: T('A real Phase 2. One line is doing more than any of the others. Which one?',
                    'Una Fase 2 real. Una línea hace más que todas las demás. ¿Cuál?'),
          lines: [
            { who: 'you', text: T('"Hi. Anita? I\'m glad you came."', '«Hola, ¿Anita? Me alegra que hayas venido».') },
            { who: 'client', text: T('"My friend Hila convinced me to come."', '«Mi amiga Hila me convenció para venir».') },
            { who: 'you', text: T('"Convinced?"', '«¿Te convenció?»') },
            { who: 'client', text: T('"I\'m not one of those people who does this kind of thing. I don\'t invest in myself like that."', '«No soy de esas personas que se hacen estas cosas. Yo no invierto en mí así».') },
            { who: 'you', text: T('"There\'s no \'those people\'. And you don\'t have to know what you need — that\'s my job. If we work out together that you don\'t need anything, that\'s completely okay too."', '«No existen “esas personas”. Y no tienes que saber qué necesitas: eso es mi trabajo. Si descubrimos juntos que no necesitas nada, tampoco pasa nada».') }
          ],
          answerIndex: 4,
          why: T('Line 3 is excellent — a one-word echo that opens the real sentence. But line 5 is the one that changes the room, because it removes the two things she was scanning for at once: the category she was afraid of falling outside ("those people") and the obligation to buy. Watch what it costs you: nothing. Watch what it produces: she stops defending and starts telling you why she came.',
                 'La línea 3 es excelente: un eco de una palabra que abre la frase real. Pero la línea 5 es la que cambia la sala, porque retira a la vez las dos cosas que ella escaneaba: la categoría de la que temía quedar fuera («esas personas») y la obligación de comprar. Mira lo que te cuesta: nada. Mira lo que produce: deja de defenderse y empieza a contarte por qué vino.'),
          principle: T('Trust Standard 1 — Create Psychological Safety. Lowering the stakes is not a concession; it is the instrument.',
                       'Estándar de Confianza 1 — Crear Seguridad Psicológica. Rebajar lo que está en juego no es una concesión: es el instrumento.') },
        { kind: 'translate',
          prompt: T('Write the safety response for each opening. Then compare with the model.',
                    'Escribe la respuesta de seguridad para cada apertura. Luego compara con el modelo.'),
          items: [
            { id: 's1',
              client: T('"I hope you don\'t think this is silly at my age."', '«Espero que no te parezca una tontería a mi edad».'),
              model: T('"Nothing you want is silly here. What made today the day you decided to come in?"',
                       '«Aquí nada de lo que quieras es una tontería. ¿Qué ha hecho que hoy sea el día en que decidiste venir?»'),
              note: T('Remove the judgement, then move immediately to a question about her decision — not about her face. Lingering on the reassurance turns it into a topic.',
                      'Retira el juicio y pasa de inmediato a una pregunta sobre su decisión, no sobre su rostro. Quedarse en la tranquilización la convierte en un tema.') },
            { id: 's2',
              client: T('"I should tell you up front, I\'m not going to decide anything today."', '«Te lo digo ya: hoy no voy a decidir nada».'),
              model: T('"Good. Nothing today needs a decision. Let\'s just work out what\'s actually going on."',
                       '«Bien. Hoy no hay nada que decidir. Vamos a averiguar simplemente qué está pasando».'),
              note: T('Agree with her faster than she expects. Any hesitation here — even a friendly "of course, no pressure at all" delivered slowly — reads as disappointment, and she is watching for it.',
                      'Dale la razón más rápido de lo que espera. Cualquier vacilación aquí —incluso un amable «claro, sin ninguna presión» dicho despacio— se lee como decepción, y ella está atenta a eso.') },
            { id: 's3',
              client: T('"How much is this going to cost me?" — asked in the first minute.', '«¿Cuánto me va a costar esto?», preguntado en el primer minuto.'),
              model: T('"That\'s a fair thing to want to know, and I\'ll give you a straight number before you leave. Before I put a number on anything, can I understand what brought you in?"',
                       '«Es justo querer saberlo, y te daré una cifra clara antes de que te vayas. Antes de poner cifra a nada, ¿puedo entender qué te ha traído?»'),
              note: T('Commit to answering, then postpone once, with a reason. Refusing to say when you will answer reads as evasion; answering now costs you the whole of Phase 3.',
                      'Comprométete a responder y aplaza una vez, con un motivo. Negarte a decir cuándo responderás se lee como evasión; responder ahora te cuesta toda la Fase 3.') }
          ] },
        { kind: 'choose',
          prompt: T('She has just said something vulnerable and stopped. Four seconds have passed. What do you do?',
                    'Acaba de decir algo vulnerable y se ha parado. Han pasado cuatro segundos. ¿Qué haces?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"I completely understand — a lot of women feel exactly like that."',
                       '«Te entiendo perfectamente; muchísimas mujeres sienten justo eso».'),
              why: T('You filled the silence with a category. She said something specific about herself and received a statistic about women. It is kind, and it ends the disclosure.',
                     'Has llenado el silencio con una categoría. Dijo algo específico sobre sí misma y recibió una estadística sobre las mujeres. Es amable, y termina la revelación.') },
            { id: 'b', verdict: 'best',
              label: T('Nothing. Stay still and let the silence hold.', 'Nada. Quedarte quieto y dejar que el silencio sostenga.'),
              why: T('Silence after a vulnerable sentence is the strongest signal available that what she said mattered. In the book\'s transcript this is the exact moment the client relaxes fully into the chair for the first time — after silence, not after comfort.',
                     'El silencio tras una frase vulnerable es la señal más fuerte disponible de que lo que dijo importó. En la transcripción del libro es el momento exacto en que la clienta se recuesta del todo en la silla por primera vez: tras el silencio, no tras el consuelo.') },
            { id: 'c', verdict: 'weak',
              label: T('"Thank you for telling me. So — shall we talk about what we could do?"',
                       '«Gracias por contármelo. Entonces, ¿hablamos de lo que podríamos hacer?»'),
              why: T('The first half is right and the second half spends it. Attaching a transition to an acknowledgement teaches her that vulnerability moves the conversation towards a proposal.',
                     'La primera mitad es correcta y la segunda la gasta. Pegar una transición a un reconocimiento le enseña que la vulnerabilidad empuja la conversación hacia una propuesta.') }
          ],
          principle: T('Silence is the sixth behaviour, and it is the one that cannot be faked. If you are uncomfortable in it, she will read the discomfort, not the intention.',
                       'El silencio es la sexta conducta y es la única que no puede fingirse. Si te incomoda, ella leerá la incomodidad, no la intención.'),
          retry: {
            note: T('You held the silence. The harder version of the same rule is the one that arrives from outside the room.',
                    'Has sostenido el silencio. La versión difícil de la misma regla es la que llega de fuera de la sala.'),
            prompt: T('Minute nine of a different consultation. She has put her bag down and is telling you about the year her mother was ill. Your phone is face down on the desk and begins to vibrate against the wood — twice, a pause, then again. What do you do?',
                      'Minuto nueve de otra consulta. Ha dejado el bolso en el suelo y te está contando el año en que su madre estuvo enferma. Tu móvil está boca abajo en la mesa y empieza a vibrar contra la madera: dos veces, una pausa, y otra vez. ¿Qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Turn it face up just far enough to see who it is, without picking it up, and carry on listening.',
                         'Girarlo lo justo para ver quién es, sin cogerlo, y seguir escuchando.'),
                why: T('Barely a movement, and entirely defensible — it could be the theatre list. Her sentence gets shorter anyway. Your eyes went somewhere else for half a second in the middle of the hardest thing she has said, and the nervous system that has been reading you since the door reads it accurately: this room has an outside.',
                       'Apenas un movimiento, y del todo defendible: podría ser el quirófano. Su frase se acorta igualmente. Tus ojos se han ido a otro sitio medio segundo en mitad de lo más difícil que ha dicho, y el sistema nervioso que te lee desde la puerta lo interpreta con exactitud: esta sala tiene un fuera.') },
              { id: 'b', verdict: 'best',
                label: T('Nothing at all. Do not look at it, do not silence it, do not apologise for it — hold your position, and when she pauses give her back the last few words she said.',
                         'Nada en absoluto. No mirarlo, no silenciarlo, no disculparse por él: mantener la posición y, cuando ella pare, devolverle las últimas palabras que ha dicho.'),
                why: T('The phone is the least interesting thing in the room, and every second you decline to treat it as interesting says so. Returning her own words when she stops does the second half of the job: it proves that the part of your attention she could not see was also on her.',
                       'El móvil es lo menos interesante de la sala, y cada segundo que te niegas a tratarlo como interesante lo dice. Devolverle sus propias palabras cuando para hace la otra mitad del trabajo: demuestra que la parte de tu atención que ella no podía ver también estaba en ella.') },
              { id: 'c', verdict: 'harmful',
                label: T('Hold up one finger, take it, keep it to ten seconds — "I\'m with someone, I\'ll call you straight back" — and apologise warmly afterwards.',
                         'Levantar un dedo, cogerlo, resolverlo en diez segundos —«estoy con una persona, te llamo ahora mismo»— y disculparte con calidez después.'),
                why: T('Ten seconds, handled impeccably, and the apology afterwards is sincere. It also does the one thing Chapter 8 names as the killer: it breaks the pattern. She was mid-disclosure and watched the room acquire a queue. The finger is the part she will remember — she was paused, by hand, so that somebody else could speak.',
                       'Diez segundos, resueltos de forma impecable, y la disculpa posterior es sincera. También hace lo único que el capítulo 8 señala como letal: rompe el patrón. Estaba en mitad de una revelación y ha visto cómo la sala adquiría una cola. El dedo es lo que recordará: la han puesto en pausa, con la mano, para que hablara otra persona.') }
            ],
            principle: T('Chapter 8\'s rule is not "be present". It is: once M is open, do not close it. No screen, no phone, no checking the time — and no graceful handling of an interruption either, because handling it is closing it.',
                         'La regla del capítulo 8 no es «estate presente». Es: una vez abierta la M, no la cierres. Sin pantalla, sin móvil, sin mirar la hora, y sin gestionar con elegancia una interrupción, porque gestionarla es cerrarla.'),
            changes: {
              axis: 'trust',
              detail: T('Trust Stage 1 (Safety) holds across the interruption instead of resetting: she does not restart the sentence in a shorter version, and four minutes later she says the thing she had decided in the car not to say — that she has not told her husband she came.',
                        'La Etapa de Confianza 1 (Seguridad) aguanta la interrupción en lugar de reiniciarse: no rearranca la frase en versión corta y, cuatro minutos después, dice lo que había decidido en el coche no decir: que no le ha contado a su marido que ha venido.')
            }
          } },
        { kind: 'reflect',
          prompt: T('Which of the six do you already do without thinking, and which one would feel most unnatural tomorrow?',
                    '¿Cuál de las seis haces ya sin pensar y cuál te resultaría mañana más antinatural?'),
          placeholder: T('Name the unnatural one precisely — that is your next month of practice.',
                         'Nombra con precisión la antinatural: ese es tu próximo mes de práctica.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm2l5', n: 5, minutes: 11,
      treatments: [
                    {
                      name: T(
                              'Fractional CO2 laser resurfacing — full face',
                              'Láser CO2 fraccionado — rostro completo'),
                      price: T('€990 per session', '990 € la sesión'),
                      why: T(
                             'Resurfacing requires downtime, aftercare and dates, so the screen has to come open at some point — and it usually comes open at the exact moment she has started telling you something.',
                             'El láser CO2 exige días de recuperación, cuidados y fechas, así que la pantalla tiene que abrirse en algún momento, y suele abrirse justo cuando ella ha empezado a contarte algo.'),
                      moment: T(
                                'She is mid-sentence about why this autumn matters, and you reach for the mouse to check whether the November slot is still free.',
                                'Está a mitad de frase explicando por qué este otoño importa, y tú alargas la mano al ratón para mirar si el hueco de noviembre sigue libre.'),
                      weak: {
                              line: T(
                                      '"Keep going, I\'m listening — I\'m just checking whether we still have that week in November while I remember."',
                                      '«Sigue, te escucho. Solo estoy mirando si nos queda esa semana de noviembre, mientras me acuerdo.»'),
                              cost: T(
                                      'Honest, efficient and it switches you off in her nervous system. She finishes the sentence in a shorter form than she started it, and the shorter form is the one that goes in the notes.',
                                      'Es sincero, eficiente y te apaga dentro de su sistema nervioso. Termina la frase en una versión más corta de la que había empezado, y la versión corta es la que acaba en la ficha.')
                            },
                      strong: {
                                line: T(
                                        '"Hold on — the diary can wait. Finish what you were saying about the autumn."',
                                        '«Espera, la agenda puede esperar. Termina lo que estabas diciendo del otoño.»'),
                                gain: T(
                                        'Refusing to break the state costs one lookup you will do anyway in four minutes. The end of that sentence is what makes a €990 session something she books rather than considers.',
                                        'Negarse a romper el estado cuesta una consulta a la agenda que vas a hacer igualmente dentro de cuatro minutos. El final de esa frase es lo que convierte una sesión de 990 € en algo que reserva y no en algo que valora.')
                              }
                    },
                    {
                      name: T('Facial mesotherapy — course of four', 'Mesoterapia facial — bono de cuatro'),
                      price: T('€480 for four sessions', '480 € el bono de cuatro'),
                      why: T(
                             'Mesotherapy sits at the price point where a practitioner starts leaning in to sell, and leaning in is the fourth way safety gets broken after it has been built.',
                             'La mesoterapia está en el punto de precio donde el profesional empieza a inclinarse hacia delante a vender, y inclinarse hacia delante es la cuarta forma de romper la seguridad después de haberla construido.'),
                      moment: T(
                                'She has just said something true and gone quiet, and the course is sitting there obviously right for what she described.',
                                'Acaba de decir algo verdadero y se ha quedado callada, y el bono está ahí, obviamente adecuado para lo que ha descrito.'),
                      weak: {
                              line: T(
                                      '"That\'s exactly what the four sessions are for — honestly, it\'s as though you\'d described the protocol yourself."',
                                      '«Es exactamente para lo que sirven las cuatro sesiones. De verdad, es como si hubieras descrito tú misma el protocolo.»'),
                              cost: T(
                                      'Enthusiastic, accurate, and it converts the thing she just confided into a cue for a product. She now knows what the listening was for, and she will not confide the second thing.',
                                      'Es entusiasta, exacto, y convierte lo que acaba de confiarte en el pie de entrada de un producto. Ahora ya sabe para qué servía la escucha, y la segunda cosa no te la va a confiar.')
                            },
                      strong: {
                                line: T(
                                        '"That\'s a hard thing to say out loud. I\'m not going to jump straight to what I\'d do about it."',
                                        '«Eso cuesta decirlo en voz alta. No voy a saltar directamente a qué haría yo al respecto.»'),
                                gain: T(
                                        'Naming the restraint is stronger than exercising it silently, because she can hear that the offer was available and was not taken. The course gets recommended two minutes later and lands as help rather than as the reason you were listening.',
                                        'Nombrar la contención es más fuerte que ejercerla en silencio, porque ella oye que la oferta estaba disponible y no se cogió. El bono se recomienda dos minutos después y aterriza como ayuda y no como el motivo por el que escuchabas.')
                              }
                    }
                  ],
      conversation: {
                      setting: T(
                                 'Minute nine of a consultation for facial mesotherapy, course of four, €480. Safety has been built and is about to be interrupted.',
                                 'Minuto nueve de una consulta de mesoterapia facial, bono de cuatro, 480 €. La seguridad está construida y está a punto de interrumpirse.'),
                      before: [
                                {
                                  who: 'client',
                                  line: T(
                                          '"I haven\'t had a photograph taken of me in about two years. I always end up being the one holding the camera."',
                                          '«Llevo unos dos años sin que me hagan una foto. Siempre acabo siendo yo la que sujeta la cámara.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"That\'s a really common thing, and it says more than people realise. Let me just make a note of that, it\'s important."',
                                          '«Eso es muy habitual y dice más de lo que la gente cree. Déjame que lo apunte, que es importante.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"Okay."', '«Vale.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Right — and while I\'ve got the screen open, four sessions of mesotherapy comes to €480, and I can see we have Tuesdays free from the twelfth."',
                                          '«Vale, y ya que tengo la pantalla abierta: cuatro sesiones de mesoterapia son 480 €, y veo que tenemos los martes libres desde el día doce.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"That sounds fine."', '«Me parece bien.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Great. Shall I hold the first one for you, or would you rather check your diary and let us know this week?"',
                                          '«Genial. ¿Te reservo la primera o prefieres mirar tu agenda y nos dices esta semana?»')
                                },
                                {
                                  who: 'client',
                                  line: T('"I\'ll check and let you know."', '«Lo miro y os digo.»')
                                }
                              ],
                      after: [
                               {
                                 who: 'client',
                                 line: T(
                                         '"I haven\'t had a photograph taken of me in about two years. I always end up being the one holding the camera."',
                                         '«Llevo unos dos años sin que me hagan una foto. Siempre acabo siendo yo la que sujeta la cámara.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Holding the camera. Is that something you arranged, or something that just happened?"',
                                         '«Sujetar la cámara. ¿Eso lo has organizado tú o simplemente ha pasado?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"…I think I arranged it. I volunteer, so nobody has to ask."',
                                         '«…Creo que lo he organizado yo. Me ofrezco, así nadie tiene que pedírmelo.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"So for two years you\'ve been the one arranging not to be in them."',
                                         '«O sea que llevas dos años siendo la que se organiza para no salir.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"Yes." (pause) "That\'s bleak when you say it like that."',
                                         '«Sí.» (pausa) «Dicho así suena bastante triste.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"I\'m not going to say anything about treatments for a minute. I\'d rather sit with that than sell into it."',
                                         '«No voy a decir nada de tratamientos durante un minuto. Prefiero quedarme con eso antes que venderte encima.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"Nobody has ever asked me that in a clinic."',
                                         '«En una clínica nunca me habían preguntado eso.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"When we do get to it, it\'s four sessions at €480, and I want you deciding it against the photographs, not against the price."',
                                         '«Cuando lleguemos a eso, son cuatro sesiones, 480 €, y quiero que lo decidas contra las fotos y no contra el precio.»')
                               }
                             ],
                      whatChanged: T(
                                     'The first practitioner did everything the manual asks for. She listened, she recognised the significance of what was said, and she wrote it down — and writing it down is what closed M. The client watched a confidence become a data entry, saw the screen turn towards her, and correctly concluded that the listening had a commercial destination. Nothing after that point is available: the price lands on a woman who has already stepped back. The second version does not add technique. It withholds two things the first version supplied — the note and the offer — and spends the gap on a second question. The offer is made in the end, at the same price, to a client who is now deciding about photographs.',
                                     'La primera profesional hizo todo lo que pide el manual. Escuchó, reconoció la importancia de lo dicho y lo apuntó, y apuntarlo es lo que cerró M. La clienta vio cómo una confidencia se convertía en un registro, vio la pantalla girarse hacia ella y concluyó, con razón, que la escucha tenía destino comercial. A partir de ahí no hay nada disponible: el precio aterriza sobre una mujer que ya ha dado un paso atrás. La segunda versión no añade técnica. Retiene dos cosas que la primera sí dio —la nota y la oferta— y gasta ese hueco en una segunda pregunta. La oferta se hace al final, al mismo precio, a una clienta que ahora decide sobre fotografías.'),
                      cost: T(
                              '€480 that turns into "I\'ll let you know", which in this clinic converts at roughly one in four. The more expensive item is the sentence about volunteering to hold the camera, which she will not offer twice.',
                              '480 € que se convierten en «os digo», que en esta clínica convierte más o menos una de cada cuatro veces. Lo más caro es la frase de ofrecerse a sujetar la cámara, que no va a ofrecer dos veces.')
                    },
      title: T('Stop interrupting safety', 'Deja de interrumpir la seguridad'),
      objective: T('Identify the four behaviours that destroy safety after it has been built, and repair a broken Phase 2.',
                   'Identificar las cuatro conductas que destruyen la seguridad una vez construida y reparar una Fase 2 rota.'),
      provenance: {
        chapter: 8,
        principle: T('M is sacred: once you have opened it, do not close it until the client is truly safe.',
                     'M es sagrada: una vez abierta, no la cierres hasta que la clienta esté realmente segura.'),
        phase: 'connection',
        trustStage: 'safety',
        standard: 1,
        duty: 1,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'The monitor wakes because you want the plan to be right. The clock gets checked out of consideration for whoever is waiting outside. The lean forward happens because you have become genuinely absorbed. All four of the things that demolish safety are virtues firing one beat late. Her body never reads the motive behind a movement — it reads the change of gear, and a change of gear at minute six drowns out everything assembled in the five minutes before it.',
            'El monitor se despierta porque quieres acertar con el plan. El reloj se mira por consideración hacia quien espera fuera. El cuerpo se inclina hacia delante porque de verdad te has absorbido. Las cuatro cosas que demuelen la seguridad son virtudes que se disparan un tiempo tarde. Su cuerpo nunca lee el motivo que hay detrás de un movimiento: lee el cambio de marcha, y un cambio de marcha en el minuto seis ahoga todo lo que se había montado en los cinco minutos anteriores.'),
        sheIsThinking: T(
            'Something just changed gear. A minute ago this was two people talking and now it is an appointment.',
            'Algo acaba de cambiar de marcha. Hace un minuto esto eran dos personas hablando y ahora es una cita.'),
        ladder: {
          weak: {
            line:   T(
                '(turning to the keyboard) "That\'s really helpful — let me just get this down."',
                '(girándose hacia el teclado) «Esto me viene muy bien, déjame que lo anote.»'),
            effect: T(
                'Your eyes leave at the precise instant she went beyond what she had rehearsed. What comes next is shorter than what came before.',
                'Tu mirada se va justo en el instante en que ella ha ido más allá de lo que tenía ensayado. Lo que viene después es más corto que lo que vino antes.')
          },
          average: {
            line:   T(
                '(a glance at the keyboard, still talking) "Mm. And how long has that been going on?"',
                '(un vistazo al teclado, sin dejar de hablar) «Ajá. ¿Y cuánto tiempo lleva pasando eso?»'),
            effect: T(
                'Split attention, plainly visible. She continues to respond to what you ask and quietly stops supplying what you did not.',
                'Atención partida, y a la vista. Ella sigue respondiendo a lo que preguntas y deja de suministrar en silencio lo que no preguntas.')
          },
          strong: {
            line:   T(
                '(keyboard untouched, a silence, then) "That took something to say."',
                '(el teclado sin tocar, un silencio, y luego) «Decir eso te ha costado algo.»'),
            effect: T(
                'Keeps Chapter 8\'s rule: nothing on the monitor until Inquire is done. Typing is available all evening. What she has just opened has an expiry of about four seconds.',
                'Mantiene la regla del capítulo 8: nada en el monitor hasta que Indagar haya terminado. Teclear está disponible toda la tarde. Lo que ella acaba de abrir caduca en unos cuatro segundos.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Built in two minutes, lost in one gesture', 'Construida en dos minutos, perdida en un gesto'),
          body: [
            T('The commonest failure is not a practitioner who cannot create safety. It is a practitioner who creates it perfectly and then breaks the pattern: the screen opens, the phone buzzes, the eyes go to the clock, the posture shifts forward into selling.',
              'El fallo más común no es un profesional incapaz de crear seguridad. Es un profesional que la crea perfectamente y luego rompe el patrón: se abre la pantalla, vibra el móvil, los ojos van al reloj, la postura se inclina hacia delante para vender.'),
            T('Her nervous system reads the switch instantly and accurately: this person has stopped being here for me. The book\'s rule is blunt — once M is open, do not close it. No screen until Discovery. No phone in the room. No time-checking. No selling energy.',
              'Su sistema nervioso lee el cambio al instante y con precisión: esta persona ha dejado de estar aquí por mí. La regla del libro es tajante: una vez abierta la M, no la cierres. Sin pantalla hasta el Descubrimiento. Sin móvil en la sala. Sin mirar la hora. Sin energía de venta.')
          ] },
        { kind: 'sort',
          prompt: T('Sort each moment: does it hold safety, or interrupt it?',
                    'Clasifica cada momento: ¿sostiene la seguridad o la interrumpe?'),
          client: T('The middle four minutes of a Phase 2, moment by moment.', 'Los cuatro minutos centrales de una Fase 2, momento a momento.'),
          buckets: [
            { id: 'hold', label: T('Holds safety', 'Sostiene la seguridad') },
            { id: 'break', label: T('Interrupts it', 'La interrumpe') }
          ],
          items: [
            { id: 'i1', text: T('You open the screen to "just check her allergies quickly".', 'Abres la pantalla para «mirar rápido sus alergias».'), bucket: 'break' },
            { id: 'i2', text: T('You repeat one word she used and stop talking.', 'Repites una palabra que ella usó y te callas.'), bucket: 'hold' },
            { id: 'i3', text: T('You lean forward and your voice quickens as she describes what she wants.', 'Te inclinas hacia delante y tu voz se acelera mientras ella describe lo que quiere.'), bucket: 'break' },
            { id: 'i4', text: T('You let three seconds pass before answering her question.', 'Dejas pasar tres segundos antes de responder a su pregunta.'), bucket: 'hold' },
            { id: 'i5', text: T('You say "we\'ve got plenty of time" — and your eyes go to the clock as you say it.', 'Dices «tenemos tiempo de sobra» y miras el reloj al decirlo.'), bucket: 'break' },
            { id: 'i6', text: T('You put your pen down when she starts a difficult sentence.', 'Sueltas el bolígrafo cuando ella empieza una frase difícil.'), bucket: 'hold' }
          ],
          why: T('Item 5 is the one worth arguing about. The words are correct and the gesture contradicts them, and when word and gesture disagree the client believes the gesture every time. Item 6 is the inverse: nothing was said, and putting the pen down told her this is not being processed, it is being heard.',
                 'El punto 5 es el que merece discusión. Las palabras son correctas y el gesto las contradice, y cuando palabra y gesto discrepan la clienta cree siempre al gesto. El punto 6 es el inverso: no se dijo nada, y soltar el bolígrafo le dijo que esto no se está procesando, se está escuchando.') },
        { kind: 'signal',
          avatar: 'sofia',
          name: T('Repair — mid-consultation', 'Reparación — a mitad de consulta'),
          client: T('Her answers have gone from four sentences to four words. She is still polite. She has started agreeing with everything you say.',
                    'Sus respuestas han pasado de cuatro frases a cuatro palabras. Sigue siendo educada. Ha empezado a estar de acuerdo con todo lo que dices.'),
          prompt: T('What has happened, and what is the only move that recovers it?',
                    '¿Qué ha pasado y cuál es el único movimiento que lo recupera?'),
          notice: [
            T('Shortening answers plus rising agreement is the signature of withdrawn safety. Agreement is cheaper than disclosure, and she has switched to the cheaper currency.',
              'Respuestas que se acortan más un acuerdo creciente es la firma de la seguridad retirada. Estar de acuerdo cuesta menos que revelar, y ella ha cambiado a la moneda barata.'),
            T('Something specific caused it, and it was almost certainly yours: a screen, a clock, a correction, or an interpretation offered before she asked for one.',
              'Algo concreto lo causó, y casi con certeza fue tuyo: una pantalla, un reloj, una corrección o una interpretación ofrecida antes de que la pidiera.'),
            T('The repair is to name it without explaining it: "I think I moved too fast a moment ago. Can we go back to what you were saying about the photographs?" Naming your own behaviour is the only thing that returns the room, because it is evidence that you were watching her and not your plan.',
              'La reparación es nombrarlo sin explicarlo: «Creo que he ido demasiado rápido hace un momento. ¿Volvemos a lo que decías de las fotos?». Nombrar tu propia conducta es lo único que devuelve la sala, porque es la prueba de que la mirabas a ella y no a tu plan.'),
            T('What does not work: continuing more warmly, asking a bigger question, or apologising at length. All three add pressure to a client who has just reduced her exposure.',
              'Lo que no funciona: continuar con más calidez, hacer una pregunta más grande o disculparse largamente. Las tres añaden presión a una clienta que acaba de reducir su exposición.')
          ] },
        { kind: 'choose',
          prompt: T('Eight minutes in, she finishes a sentence that cost her something to say. Your instinct — a good one — is that you now know exactly what to recommend. What do you do?',
                    'Minuto ocho: termina una frase que le ha costado decir. Tu instinto, que es bueno, te dice que ya sabes exactamente qué recomendar. ¿Qué haces?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Lean in and begin: "That\'s really helpful, thank you. So — with that in mind, here\'s what I\'d suggest…"',
                       'Inclinarte hacia delante y empezar: «Eso me ayuda mucho, gracias. Entonces, con eso en mente, esto es lo que te propondría…»'),
              why: T('Nothing in the words is wrong and the body has already announced the change. Leaning forward after a disclosure is the posture shift the book names: her nervous system reads the switch instantly and accurately as this person has stopped being here for me and started working. She will be pleasant and she will stop adding anything.',
                     'Las palabras no tienen nada de malo y el cuerpo ya ha anunciado el cambio. Inclinarse hacia delante tras una revelación es el cambio de postura que nombra el libro: su sistema nervioso lee el giro al instante y con precisión como esta persona ha dejado de estar aquí por mí y se ha puesto a trabajar. Será amable y dejará de añadir nada.') },
            { id: 'b', verdict: 'best',
              label: T('Stay exactly as you are sitting. Say "Thank you for telling me that," and nothing else, until she speaks again.',
                       'Quedarte exactamente como estás sentado. Decir «gracias por contármelo» y nada más, hasta que ella vuelva a hablar.'),
              why: T('The disclosure is not a cue to begin; it is the thing Phase 2 existed to produce, and the only appropriate response is to receive it. Holding your posture is doing as much work as the sentence: she is checking whether telling you difficult things changes what kind of room this is.',
                     'La revelación no es una señal para empezar: es aquello para lo que existía la Fase 2, y la única respuesta apropiada es recibirla. Mantener la postura hace tanto trabajo como la frase: ella está comprobando si contarte cosas difíciles cambia qué clase de sala es esta.') },
            { id: 'c', verdict: 'harmful',
              label: T('Write it down while it is fresh — open the screen and record her exact words before you lose them.',
                       'Anotarlo mientras está fresco: abrir la pantalla y registrar sus palabras exactas antes de perderlas.'),
              why: T('Her words are worth recording and the screen is the one object the book rules out until Discovery. She has just said the most exposed thing in the consultation and watched it become an entry. Take it on paper with the pen down between sentences, or take it afterwards.',
                     'Sus palabras merecen registrarse y la pantalla es el único objeto que el libro descarta hasta el Descubrimiento. Acaba de decir lo más expuesto de la consulta y ha visto cómo se convertía en una entrada. Anótalo en papel, con el bolígrafo en la mesa entre frase y frase, o anótalo al terminar.') }
          ],
          principle: T('M is sacred once opened. The commonest way it closes is not rudeness — it is the moment a practitioner decides the useful part has started.',
                       'La M, una vez abierta, es sagrada. La forma más común de cerrarla no es la descortesía: es el momento en que un profesional decide que ha empezado la parte útil.'),
          retry: {
            note: T('The pattern broken, and eleven minutes left to recover it.',
                    'El patrón roto, y once minutos para recuperarlo.'),
            prompt: T('You checked the wall clock — once, briefly — while she was describing a photograph. Her next three answers are shorter, and she has begun agreeing with everything. What do you do?',
                      'Has mirado el reloj de pared —una vez, un instante— mientras ella describía una foto. Sus tres respuestas siguientes son más cortas y ha empezado a darte la razón en todo. ¿Qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Warm up: slow your voice, smile more, and ask a bigger, more open question to draw her back out.',
                         'Dar más calidez: bajar la voz, sonreír más y hacer una pregunta más amplia y abierta para que vuelva a abrirse.'),
                why: T('More warmth aimed at a client who has just reduced her exposure reads as more pressure, and a bigger question asks her to spend more at the exact moment she decided to spend less. She will answer it in six words.',
                       'Más calidez dirigida a una clienta que acaba de reducir su exposición se lee como más presión, y una pregunta más amplia le pide gastar más justo cuando ha decidido gastar menos. La responderá con seis palabras.') },
              { id: 'b', verdict: 'best',
                label: T('Name your own behaviour and nothing else: "I looked at the clock a moment ago and I shouldn\'t have. We have the time. You were saying, about the photograph."',
                         'Nombrar tu propia conducta y nada más: «Hace un momento he mirado el reloj y no debería. Tenemos tiempo. Me decías, lo de la foto».'),
                why: T('Naming your own conduct is the only move that returns the room, because it is evidence that you were watching her and not your plan. Notice what it does not contain: an interpretation of her, an apology at length, or a reason. The reason would make it about you again.',
                       'Nombrar tu propia conducta es el único movimiento que devuelve la sala, porque es la prueba de que la mirabas a ella y no a tu plan. Fíjate en lo que no contiene: ninguna interpretación de ella, ninguna disculpa larga y ningún motivo. El motivo volvería a ponerte a ti en el centro.') },
              { id: 'c', verdict: 'harmful',
                label: T('Say nothing about it and make up the ground by giving her more time at the end — she will feel it in the length of the consultation.',
                         'No decir nada y compensarlo dándole más tiempo al final: lo notará en la duración de la consulta.'),
                why: T('She cannot read an intention you have not shown, and by the end the withheld part of her story will have been withheld for twenty minutes. Nothing dramatic will happen. It arrives in Phase 7 as an objection with no visible cause, which is precisely how this failure hides.',
                       'No puede leer una intención que no has mostrado, y para cuando lleguéis al final la parte retenida de su relato llevará veinte minutos retenida. No pasará nada dramático. Llega en la Fase 7 como una objeción sin causa visible, que es exactamente como se esconde este fallo.') }
            ],
            principle: T('Interrupted safety is repaired by naming your own behaviour, immediately, in one sentence, and then returning to her exact word. Every other repair adds pressure.',
                         'La seguridad interrumpida se repara nombrando tu propia conducta, de inmediato, en una frase, y volviendo después a su palabra exacta. Cualquier otra reparación añade presión.'),
            changes: {
              axis: 'trust',
              detail: T('The agreeing stops. She goes back to the photograph herself, and the behaviour that would have produced a polite yes today and a cancellation on Thursday disappears from the rest of the appointment.',
                        'Deja de darte la razón en todo. Vuelve ella sola a la fotografía, y la conducta que habría producido un sí educado hoy y una cancelación el jueves desaparece del resto de la cita.')
            }
          } },
        { kind: 'check',
          prompt: T('In the client-state ledger, what does an interrupted Phase 2 typically look like?',
                    'En el registro de estado de la clienta, ¿qué aspecto tiene normalmente una Fase 2 interrumpida?'),
          options: [
            { id: 'a', text: T('Safety falls sharply and the outcome moves straight to NO.', 'La Seguridad cae en picado y el resultado va directo a NO.') },
            { id: 'b', text: T('Trust barely moves, but disclosure stops — the withheld items stay withheld into Phase 7.', 'La confianza apenas se mueve, pero la revelación se detiene: los elementos retenidos siguen retenidos hasta la Fase 7.') },
            { id: 'c', text: T('Willingness rises because the consultation feels efficient.', 'La Disposición sube porque la consulta parece eficiente.') }
          ],
          answer: 'b',
          why: T('This is what makes it so hard to learn from experience unaided. Nothing dramatic happens, the consultation stays pleasant, and the cost appears twenty minutes later as an objection with no visible cause. In the simulator you can watch the withheld item sit in the ledger the whole way through.',
                 'Esto es lo que hace tan difícil aprender de la experiencia sin ayuda. No pasa nada dramático, la consulta sigue siendo agradable, y el coste aparece veinte minutos después como una objeción sin causa visible. En el simulador puedes ver el elemento retenido permanecer en el registro todo el recorrido.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm2l6', n: 6, minutes: 11,
      treatments: [
                    {
                      name: T('PRP — facial, course of three', 'PRP — facial, tres sesiones'),
                      price: T('€810 for three sessions', '810 € las tres sesiones'),
                      why: T(
                             'PRP appointments contain a blood draw and a centrifuge, so a meaningful part of the twenty minutes is spent on a procedure that cannot be hurried and does not require conversation.',
                             'Las citas de PRP llevan una extracción y una centrifugadora, así que buena parte de los veinte minutos se va en un procedimiento que no se puede acelerar y que no exige conversación.'),
                      moment: T(
                                'The tube is spinning, there are eight minutes of it, and you have a second client waiting.',
                                'El tubo está girando, quedan ocho minutos de centrifugado y tienes otra clienta esperando.'),
                      weak: {
                              line: T(
                                      '"That\'s eight minutes in the centrifuge — I\'ll pop out and see to something, and I\'ll be back before it finishes."',
                                      '«Son ocho minutos de centrifugado. Salgo a resolver una cosa y vuelvo antes de que termine.»'),
                              cost: T(
                                      'A rational use of dead time, and it leaves a woman alone in a room with a needle mark and her own thoughts. The eight minutes were the only unpressured part of the appointment, and they have been given to somebody else.',
                                      'Es un uso racional del tiempo muerto, y deja a una mujer sola en una sala con una marca de aguja y sus propios pensamientos. Esos ocho minutos eran la única parte sin presión de la cita, y se le han dado a otra persona.')
                            },
                      strong: {
                                line: T(
                                        '"Eight minutes while that spins, and nothing to do in them. Tell me how the summer went."',
                                        '«Ocho minutos mientras eso gira, y nada que hacer. Cuéntame qué tal el verano.»'),
                                gain: T(
                                        'The twenty-minute problem is usually a distribution problem rather than a shortage. Safety is built in the minutes the protocol has already paid for, and nothing runs late.',
                                        'El problema de los veinte minutos suele ser de reparto y no de escasez. La seguridad se construye en los minutos que el protocolo ya ha pagado, y nada se retrasa.')
                              }
                    },
                    {
                      name: T(
                              'Acne programme — peels and microneedling',
                              'Programa de acné — peelings y microagujas'),
                      price: T('€1,100 across six months', '1.100 € repartidos en seis meses'),
                      why: T(
                             'An acne programme is mostly short review appointments, and the review appointment is where twenty minutes shrinks to twelve and the conversation becomes a checklist.',
                             'Un programa de acné son sobre todo revisiones cortas, y la revisión es donde los veinte minutos se encogen a doce y la conversación se convierte en una lista de comprobación.'),
                      moment: T(
                                'It is month three, she is nineteen, her mother booked the programme, and she answers everything with fine.',
                                'Es el tercer mes, ella tiene diecinueve años, el programa lo reservó su madre y contesta a todo con «bien».'),
                      weak: {
                              line: T(
                                      '"Fine is good. Any dryness, any flaking, anything stinging with the cream at night?"',
                                      '«Bien está bien. ¿Sequedad, descamación, te escuece algo con la crema por la noche?»'),
                              cost: T(
                                      'Three efficient clinical questions that can all be answered without her being present. Twelve minutes are used properly and nobody in the room is treated as a person, which is the one thing a nineteen-year-old on her mother\'s programme is checking for.',
                                      'Tres preguntas clínicas eficientes que se pueden contestar todas sin que ella esté presente. Doce minutos bien aprovechados y a nadie en la sala se la trata como a una persona, que es justo lo que comprueba una chica de diecinueve años en el programa que le ha pagado su madre.')
                            },
                      strong: {
                                line: T(
                                        '"Before the skin questions — was this your idea or your mother\'s?"',
                                        '«Antes de las preguntas de piel: ¿esto fue idea tuya o de tu madre?»'),
                                gain: T(
                                        'Twenty seconds, and it establishes who is actually in the programme. A client attending someone else\'s decision stops at month four, and this is the only question that finds that out in time.',
                                        'Veinte segundos, y establece quién está de verdad en el programa. Una clienta que asiste a la decisión de otra persona lo deja en el cuarto mes, y esta es la única pregunta que lo detecta a tiempo.')
                              }
                    }
                  ],
      title: T('Safety in twenty minutes', 'Seguridad en veinte minutos'),
      objective: T('Keep Phase 2 intact under real clinic time pressure, and audit yourself against the eight-item checklist.',
                   'Mantener intacta la Fase 2 bajo la presión de tiempo real de una clínica y auditarte con la lista de ocho puntos.'),
      provenance: {
        chapter: 8,
        principle: T('Holding the state costs you nothing in time. It costs most consultants everything, because they cannot maintain it.',
                     'Sostener ese estado no te cuesta nada de tiempo. A la mayoría de los profesionales les cuesta todo, porque no logran mantenerlo.'),
        phase: 'connection',
        trustStage: 'safety',
        standard: 1,
        duty: 3,
        toolkit: 1
      },
      depth: {
        whyItGoesWrong: T(
            'Squeezed for time, a clinician defends what she believes is the cargo — the examination, the plan, the figure — and compresses whatever resembles preamble. That is triage, correctly applied to the wrong manifest. Chapter 8\'s arithmetic is that the state consumes no minutes whatsoever. Rising to meet her, leaving your watch alone and dropping your voice occupy precisely as long as their opposites, and unlike the examination and the figure they cannot be completed at eight o\'clock by telephone.',
            'Apretada de tiempo, una clínica defiende lo que cree que es la carga —la exploración, el plan, la cifra— y comprime todo lo que se parezca a un preámbulo. Eso es triaje, aplicado correctamente al manifiesto equivocado. La aritmética del capítulo 8 es que el estado no consume ni un minuto. Levantarte a recibirla, dejar el reloj en paz y bajar la voz ocupan exactamente lo mismo que sus contrarios y, a diferencia de la exploración y de la cifra, no se pueden completar a las ocho por teléfono.'),
        sheIsThinking: T(
            'She has looked at her watch twice. Whatever I was going to say that needs a run-up, I am not saying now.',
            'Ha mirado el reloj dos veces. Lo que iba a contar y necesitaba carrerilla, ahora no lo cuento.'),
        ladder: {
          weak: {
            line:   T(
                '"We\'ve only got twenty minutes today, so let\'s get straight into it."',
                '«Hoy solo tenemos veinte minutos, así que vamos directas al grano.»'),
            effect: T(
                'Subcontracts your shortage to her. She abridges herself for the whole slot, and what gets abridged first is the material you were short of time to reach.',
                'Le subcontrata tu escasez a ella. Se abrevia a sí misma durante toda la franja, y lo primero que se abrevia es justo el material al que te faltaba tiempo para llegar.')
          },
          average: {
            line:   T(
                '"We have twenty minutes — that\'s plenty for today."',
                '«Tenemos veinte minutos, que dan de sobra para hoy.»'),
            effect: T(
                'Honest, and it still starts a countdown behind her eyes. She keeps half an eye on it, and the answer with a run-up never gets attempted.',
                'Es honesto, y aun así le pone una cuenta atrás detrás de los ojos. La vigila a medias, y la respuesta con carrerilla no llega a intentarse.')
          },
          strong: {
            line:   T(
                '(no mention of the clock at all) "Tell me what made today the day."',
                '(sin mencionar el reloj en absoluto) «Cuéntame qué ha hecho que hoy fuera el día.»'),
            effect: T(
                'She receives undivided attention for however long actually exists. Honesty about time belongs at the end, shaped as a second appointment, not at the front shaped as a warning.',
                'Ella recibe atención sin repartir durante todo el tiempo que de verdad exista. La honestidad sobre el tiempo va al final, con forma de segunda cita, no al principio con forma de advertencia.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The objection every clinic raises', 'La objeción que plantea toda clínica'),
          body: [
            T('"This is beautiful and I have twenty minutes." It is a fair objection and it has a precise answer: safety costs time only when it is performed. The five behaviours take seconds — standing, not rushing the first question, echoing one word, lowering the stakes once, and not filling one silence.',
              '«Es precioso y yo tengo veinte minutos». Es una objeción justa y tiene una respuesta precisa: la seguridad cuesta tiempo solo cuando se interpreta. Las cinco conductas duran segundos: ponerse de pie, no acelerar la primera pregunta, repetir una palabra, rebajar una vez lo que está en juego y no llenar un silencio.'),
            T('What consumes the twenty minutes is the consultation that runs on the rehearsed account: the options presented to the wrong concern, the objection at the end that has to be argued with, and the follow-up that chases a client who was never going to book. In the book\'s account, the practitioner who added five unrushed minutes did not run later — she ran shorter consultations with a far higher proportion that closed.',
              'Lo que consume los veinte minutos es la consulta que funciona con el relato ensayado: las opciones presentadas a la preocupación equivocada, la objeción final que hay que discutir y el seguimiento que persigue a una clienta que nunca iba a reservar. En el relato del libro, la profesional que añadió cinco minutos sin prisa no acabó más tarde: hizo consultas más cortas y con una proporción mucho mayor de cierres.')
          ] },
        { kind: 'compare',
          prompt: T('Twenty-minute appointment, same client. Which opening leaves more time, not less?',
                    'Cita de veinte minutos, la misma clienta. ¿Qué apertura deja más tiempo, no menos?'),
          a: { label: T('Opening A', 'Apertura A'),
               text: T('"We have about twenty minutes, so let\'s be efficient. Tell me the areas that bother you and I\'ll tell you what\'s possible."',
                       '«Tenemos unos veinte minutos, así que vamos a ser eficientes. Dime qué zonas te molestan y te digo qué es posible».') },
          b: { label: T('Opening B', 'Apertura B'),
               text: T('"We have twenty minutes, which is enough as long as I don\'t waste them guessing. So — what made you decide to come in?"',
                       '«Tenemos veinte minutos, que bastan siempre que no los gaste adivinando. Así que dime: ¿qué te hizo decidir venir?»') },
          answer: 'b',
          why: T('Both name the constraint honestly. A then spends the time on an area audit, which produces a list you cannot prioritise. B spends the first minute on the decision, which produces the criterion you will need at minute fifteen. The efficiency in A is real and it is aimed at the wrong output.',
                 'Ambas nombran la restricción con honestidad. Después A gasta el tiempo en una auditoría de zonas, que produce una lista que no puedes priorizar. B gasta el primer minuto en la decisión, que produce el criterio que necesitarás en el minuto quince. La eficiencia de A es real y apunta al resultado equivocado.') },
        { kind: 'drill',
          toolkit: 1,
          prompt: T('Self-audit. Run the eight-item M checklist against your last real consultation — honestly, not aspirationally.',
                    'Autoauditoría. Pasa la lista M de ocho puntos por tu última consulta real, con honestidad y no con buenas intenciones.'),
          transcript: [
            T('The checklist is from the book\'s Clinic Action Step at the end of Chapter 8.', 'La lista procede del Paso de Acción Clínica al final del Capítulo 8.'),
            T('Tick only what actually happened. A checklist completed aspirationally is worth less than an empty one.', 'Marca solo lo que ocurrió realmente. Una lista marcada con buenas intenciones vale menos que una vacía.')
          ],
          fields: [
            { name: 'lastConsult', label: T('Describe the first ninety seconds of your last consultation, in order', 'Describe los primeros noventa segundos de tu última consulta, en orden') },
            { name: 'firstQuestion', label: T('Your first question, in the exact words you used', 'Tu primera pregunta, con las palabras exactas que usaste') }
          ],
          depthCheck: [
            { key: 'screen', label: T('Screen closed and phone out of the room', 'Pantalla cerrada y móvil fuera de la sala'), supported: true },
            { key: 'stood', label: T('I stood to greet her', 'Me puse de pie para recibirla'), supported: true },
            { key: 'waited', label: T('I waited at least two seconds before speaking', 'Esperé al menos dos segundos antes de hablar'), supported: true },
            { key: 'noSkin', label: T('I did not ask about skin or treatments in the first five minutes', 'No pregunté por la piel ni por tratamientos en los primeros cinco minutos'), supported: false,
              note: T('Almost nobody can tick this honestly at first. If your first question named an area, a product or a concern, this is untrue — and it is the single highest-yield item on the list.',
                      'Casi nadie puede marcar esto con honestidad al principio. Si tu primera pregunta nombró una zona, un producto o una preocupación, esto no es cierto, y es el punto de mayor rendimiento de la lista.') },
            { key: 'echo', label: T('I caught and reflected back one word she used', 'Capté y devolví una palabra que ella usó'), supported: true },
            { key: 'pace', label: T('I matched her pace rather than mine', 'Seguí su ritmo en lugar del mío'), supported: false,
              note: T('Matching pace means slowing to hers when she is slow. If you were the faster speaker throughout, you set the pace and she followed — which is the opposite.',
                      'Seguir su ritmo significa frenar hasta el suyo cuando ella va despacio. Si tú fuiste el que hablaba más rápido todo el tiempo, el ritmo lo pusiste tú y ella te siguió, que es lo contrario.') }
          ],
          rule: T('Two of these six are almost never true in a real consultation until they are practised deliberately. The Academy would rather record four honest ticks than six confident ones.',
                  'Dos de estos seis casi nunca son ciertos en una consulta real hasta que se practican deliberadamente. La Academia prefiere registrar cuatro marcas honestas que seis seguras.') },
        { kind: 'choose',
          prompt: T('It is 11:50. Your 11:30 first consultation has been in the waiting room for twenty minutes because the appointment before it overran, and you now have fifteen minutes before the next one. She is new. What do you do with the first ninety seconds?',
                    'Son las 11:50. Tu primera consulta, la de las 11:30, lleva veinte minutos en la sala de espera porque la cita anterior se alargó, y ahora te quedan quince minutos hasta la siguiente. Es nueva. ¿Qué haces con los primeros noventa segundos?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Apologise properly and be honest about the compression: "I\'m so sorry to have kept you. We have fifteen minutes, so let\'s use them well — tell me which areas bother you and I\'ll tell you what\'s possible."',
                       'Disculparte como es debido y ser honesta con la compresión: «Siento muchísimo haberte hecho esperar. Tenemos quince minutos, así que aprovechémoslos: dime qué zonas te molestan y te digo qué es posible».'),
              why: T('Honest, courteous, and it is what most careful practitioners would say. The apology is then followed by a speed instruction and an area audit, so she learns two things in one breath: the clock is the third person in the room, and the currency here is areas. She will give you the account she prepared for a stranger, because it is the one that fits in fifteen minutes.',
                     'Honesto, cortés y es lo que diría la mayoría de profesionales cuidadosos. Pero a la disculpa le sigue una instrucción de velocidad y una auditoría de zonas, así que ella aprende dos cosas de golpe: el reloj es la tercera persona de la sala y aquí se paga en zonas. Te dará el relato que preparó para una desconocida, porque es el que cabe en quince minutos.') },
            { id: 'b', verdict: 'best',
              label: T('Stand, use her name, apologise once, and then take the clock out of the conversation: "You\'ve waited twenty minutes and I\'m sorry. We have the time we have and I\'m not going to rush you. What made you decide to come in?"',
                       'Ponerte de pie, usar su nombre, disculparte una vez y sacar el reloj de la conversación: «Has esperado veinte minutos y lo siento. Tenemos el tiempo que tenemos y no voy a meterte prisa. ¿Qué te hizo decidir venir?»'),
              why: T('The apology is one sentence and then it is finished, so it does not become the subject. "I\'m not going to rush you" is the only sentence in the room that can undo twenty minutes of waiting, and the question that follows is about her decision rather than her face — which is the one question that cannot be answered from the account she rehearsed outside.',
                     'La disculpa es una frase y ahí termina, así que no se convierte en el tema. «No voy a meterte prisa» es la única frase de la sala capaz de deshacer veinte minutos de espera, y la pregunta que viene después es sobre su decisión y no sobre su rostro, que es la única que no se puede responder con el relato que ensayó fuera.') },
            { id: 'c', verdict: 'harmful',
              label: T('Skip the apology — drawing attention to the wait only makes it larger — and open warmly as though nothing had happened: "Hello, come in, sit down. So, what are we looking at today?"',
                       'Saltarte la disculpa —llamar la atención sobre la espera solo la agranda— y abrir con calidez como si no hubiera pasado nada: «Hola, pasa, siéntate. Bueno, ¿qué miramos hoy?»'),
              why: T('She has just spent twenty minutes noticing the wait, so not naming it tells her the clinic did not. Then "what are we looking at" puts her face on the table before she has decided it is safe to be looked at. Two of the five safety behaviours are gone in one sentence, and the saving is four seconds.',
                     'Ella acaba de pasar veinte minutos notando la espera, así que no nombrarla le dice que en la clínica no se han dado cuenta. Y «qué miramos» pone su rostro sobre la mesa antes de que haya decidido que es seguro que la miren. Dos de las cinco conductas de seguridad desaparecen en una frase, y el ahorro son cuatro segundos.') }
          ],
          principle: T('Safety costs seconds; the rehearsed account costs the appointment. When time is short, the thing to cut is the area audit, never the first ninety seconds.',
                       'La seguridad cuesta segundos; el relato ensayado cuesta la cita entera. Cuando hay poco tiempo, lo que se recorta es la auditoría de zonas, nunca los primeros noventa segundos.'),
          retry: {
            note: T('The same twenty minutes, at the other end of them.',
                    'Los mismos veinte minutos, en su otro extremo.'),
            prompt: T('Fifteen minutes gone. Phases 1 to 4 are done and you can feel that the recommendation is not built yet — you do not know what she would count as this having worked. Five minutes left, and she has said twice that she would like to start. What do you say?',
                      'Quince minutos fuera. Las Fases 1 a 4 están hechas y notas que la recomendación aún no está construida: no sabes qué contaría ella como que esto ha funcionado. Quedan cinco minutos y ya ha dicho dos veces que le gustaría empezar. ¿Qué dices?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Give her the recommendation you are ninety per cent sure of, with the caveat attached: "Based on what I\'ve seen today I\'d start with this, and we\'ll review it properly at the second appointment."',
                         'Darle la recomendación de la que estás segura al noventa por ciento, con la salvedad incluida: «Por lo que he visto hoy yo empezaría por esto, y lo revisamos bien en la segunda cita».'),
                why: T('Kind, commercially sensible, and it books today. The caveat does not survive the car park: she will repeat the recommendation to her husband and not the review. When the plan changes at the second appointment, the change reads as a clinic that revised upwards — and she will not tell you that is what she thinks.',
                       'Amable, comercialmente sensato y cierra hoy. La salvedad no sobrevive al aparcamiento: le repetirá a su marido la recomendación y no la revisión. Cuando el plan cambie en la segunda cita, el cambio se leerá como una clínica que revisó al alza, y ella no te dirá que eso es lo que piensa.') },
              { id: 'b', verdict: 'best',
                label: T('Name what is missing and book the rest: "I can see what I\'d do, and I\'m not going to tell you today — because the part I don\'t have yet is what you\'d count as this having worked. That\'s twenty minutes, not five. Can we do it properly on Tuesday?"',
                         'Nombrar lo que falta y agendar el resto: «Ya veo lo que haría, y hoy no te lo voy a decir, porque lo que me falta es qué contarías tú como que esto ha funcionado. Eso son veinte minutos, no cinco. ¿Lo hacemos bien el martes?»'),
                why: T('The gap is named, the reason given is about her and not about the diary, and the phrase "what you\'d count as this having worked" tells her exactly what the second appointment is for — so she arrives with an answer instead of a question. The book\'s version of this sentence books the second appointment more reliably than the plan would have.',
                       'La laguna queda nombrada, el motivo que das habla de ella y no de la agenda, y la frase «qué contarías tú como que esto ha funcionado» le dice exactamente para qué es la segunda cita, de modo que llega con una respuesta y no con una pregunta. La versión de esta frase que trae el libro reserva la segunda cita con más fiabilidad de la que habría tenido el plan.') },
              { id: 'c', verdict: 'harmful',
                label: T('Run the recommendation quickly and honestly, then hand her the printed price list so she has the detail to read at home: "I\'ll talk fast — stop me if I lose you."',
                         'Dar la recomendación rápido y con honestidad y entregarle la lista de precios impresa para que tenga el detalle en casa: «Voy a hablar deprisa; párame si te pierdo».'),
                why: T('Announcing that you will talk fast makes her responsible for keeping up, so she will not stop you. What she takes home is a price list and no criterion for judging it, which means the only thing she can compare it against is another clinic\'s price list. You have spent the five minutes producing the exact document you did not want her to shop with.',
                       'Anunciar que vas a hablar deprisa la convierte en la responsable de seguirte el ritmo, así que no te parará. Lo que se lleva a casa es una lista de precios y ningún criterio para juzgarla, con lo cual lo único con lo que puede compararla es la lista de precios de otra clínica. Has gastado los cinco minutos en producir justo el documento con el que no querías que fuera de compras.') }
            ],
            principle: T('An incomplete Phase 4 does not become complete by being delivered quickly. Saying what you do not yet know is itself a Phase 2 behaviour — and it is the one that still works at minute nineteen.',
                         'Una Fase 4 incompleta no se completa por entregarse deprisa. Decir lo que aún no sabes es en sí una conducta de Fase 2, y es la que sigue funcionando en el minuto diecinueve.'),
            changes: {
              axis: 'continuation',
              detail: T('She leaves with a second appointment in the diary rather than a price list in her bag, and she arrives on Tuesday having spent four days on the question you left her with — which is the first thing she says as she sits down, before you have asked anything.',
                        'Se va con una segunda cita en la agenda en lugar de con una lista de precios en el bolso, y llega el martes tras cuatro días dándole vueltas a la pregunta que le dejaste, que es lo primero que dice al sentarse, antes de que le preguntes nada.')
            }
          } },
        { kind: 'check',
          prompt: T('A practitioner has fifteen minutes and a client with a complex history. What does MIRROR say?',
                    'Un profesional tiene quince minutos y una clienta con un historial complejo. ¿Qué dice MIRROR?'),
          options: [
            { id: 'a', text: T('Compress every phase proportionally so all eight fit.', 'Comprimir todas las fases proporcionalmente para que quepan las ocho.') },
            { id: 'b', text: T('Complete Phases 1–4 properly and say honestly that the recommendation needs a second appointment.', 'Completar bien las Fases 1–4 y decir con honestidad que la recomendación necesita una segunda cita.') },
            { id: 'c', text: T('Skip to Phase 5 and 6 since the clinical picture is what she came for.', 'Saltar a las Fases 5 y 6, ya que ella vino por el cuadro clínico.') }
          ],
          answer: 'b',
          why: T('A recommendation made on incomplete understanding is not faster — it is a Phase 7 you cannot answer, plus a follow-up sequence, plus a client who tells someone she was rushed. Saying "I don\'t want to give you a plan I can\'t stand behind yet" is itself a safety behaviour, and it books the second appointment more reliably than the plan would have.',
                 'Una recomendación hecha sobre una comprensión incompleta no es más rápida: es una Fase 7 que no puedes responder, más una secuencia de seguimiento, más una clienta que le cuenta a alguien que la metieron prisa. Decir «no quiero darte un plan que todavía no puedo sostener» es en sí una conducta de seguridad, y reserva la segunda cita con más fiabilidad de lo que lo habría hecho el plan.') }
      ]
    }
  ],
  apply: {
    assignment: T('For your next five consultations, run the Reset before each one and make your first question about her decision, not her face. Record which of the three entrances each client made — quiet, confident or stormy.',
                  'En tus próximas cinco consultas, haz el Reinicio antes de cada una y que tu primera pregunta sea sobre su decisión, no sobre su rostro. Registra qué entrada hizo cada clienta: silenciosa, segura o tormentosa.'),
    prompt: T('What happened when you tried it? Which entrance was most common, and what did the client say in the first ninety seconds that you would not have heard otherwise?',
              '¿Qué pasó cuando lo probaste? ¿Qué entrada fue la más común y qué dijo la clienta en los primeros noventa segundos que no habrías oído de otro modo?')
  }
};

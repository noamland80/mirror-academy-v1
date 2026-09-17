/**
 * MODULE 5 — BUILDING THE RECOMMENDATION
 * Book: Ch.11 (R — Recommend: the double diagnosis, "You don't need everything",
 *       the five rules of Recommend, Rachel in the shop, Sigal in the clinic),
 *       with Ch.5 (the transformation she does not see coming) for future pacing.
 * Canonical: Phase 5 Education, Phase 6 Recommendation; Trust Stages 4–5
 *            (Credibility, Alignment); Ethical Duty 4 (Do Not Overclaim);
 *            Toolkit #4 (MIRROR Recommendation Builder).
 */
const T = (en, es) => ({ en, es });

module.exports = {
  id: 'm5', n: 5,
  phase: 'education',
  accent: 'champagne',
  title: T('Building the Recommendation', 'Construir la Recomendación'),
  strapline: T('Education that does not oversell, and the eight-field recommendation',
               'Educación que no sobrevende y la recomendación de ocho campos'),
  summary: T(
    'A recommendation without a diagnosis is a guess in professional clothing. This module builds the recommendation the way the method does: emotional diagnosis before aesthetic, subtraction before addition, three options at most, honest limits stated before benefits, and every element traceable to a sentence the client actually said. It ends with Toolkit #4 — including field 8, where what you decline to recommend becomes visible.',
    'Una recomendación sin diagnóstico es una conjetura con bata. Este módulo construye la recomendación como lo hace el método: diagnóstico emocional antes que estético, sustracción antes que adición, tres opciones como máximo, límites honestos enunciados antes que los beneficios y cada elemento trazable a una frase que la clienta dijo realmente. Termina con el Toolkit #4, incluido el campo 8, donde se hace visible lo que decides no recomendar.'),
  outcome: T(
      'Build a recommendation of at most three elements, each traceable to a sentence she said, and say what you are not recommending before what you are.',
      'Construir una recomendación de tres elementos como máximo, cada uno rastreable hasta una frase suya, y decir lo que no recomiendas antes que lo que sí.'),
  source: T('The Beauty Sales Secrets — Chapter 11 (R — Recommend), with Chapter 5; MIRROR Phases 5–6, Toolkit #4, Ethical Duty 4',
            'The Beauty Sales Secrets — Capítulo 11 (R — Recomendar), con el Capítulo 5; MIRROR Fases 5–6, Toolkit #4, Deber Ético 4'),
  minutes: 68,
  status: 'available',
  lessons: [
    // -----------------------------------------------------------------
    {
      id: 'm5l1', n: 1, minutes: 10,
      treatments: [
                    {
                      name: T(
                              'Hyaluronic acid filler — mid-face',
                              'Relleno de ácido hialurónico — tercio medio'),
                      price: T('€780 for 2 ml', '780 € por 2 ml'),
                      why: T(
                             'Volume loss is the most describable finding in aesthetics, and describing it first turns the appointment into a repair quotation.',
                             'La pérdida de volumen es el hallazgo más descriptible de la estética, y describirlo primero convierte la cita en un presupuesto de reparación.'),
                      moment: T(
                                'You have both diagnoses. You know she wants to stop being asked whether she is tired, and you can see two millilitres of mid-face descent.',
                                'Tienes los dos diagnósticos. Sabes que quiere dejar de que le pregunten si está cansada, y ves dos mililitros de descenso en el tercio medio.'),
                      weak: {
                              line: T(
                                      '"What I\'m seeing is some volume loss through the cheek, which is what casts the shadow. Two millilitres there, €780, and that shadow lifts."',
                                      '«Lo que veo es algo de pérdida de volumen en el pómulo, que es lo que crea la sombra. Dos mililitros ahí, 780 €, y esa sombra sube.»'),
                              cost: T(
                                      'The aesthetic diagnosis first, stated well. She now owns a problem with a price on it, and a problem with a price on it is a thing to shop for. Three clinics in Salamanca will quote the same two millilitres by Friday.',
                                      'Primero el diagnóstico estético, bien expuesto. Ahora ella es dueña de un problema con precio, y un problema con precio es algo que se va a comparar. Tres clínicas de Salamanca le presupuestarán los mismos dos mililitros antes del viernes.')
                            },
                      strong: {
                                line: T(
                                        '"You want to stop being asked if you\'re tired. That\'s the job. Two millilitres in the mid-face at €780 is how I\'d do it, and I\'ll show you why."',
                                        '«Quieres dejar de que te pregunten si estás cansada. Ese es el trabajo. Dos mililitros en el tercio medio, 780 €, es cómo lo haría yo, y te enseño por qué.»'),
                                gain: T(
                                        'Emotional diagnosis first, aesthetic second, same millilitres and same price. She is now following a path rather than pricing a defect, and paths do not have comparison tabs.',
                                        'Primero el diagnóstico emocional, después el estético, los mismos mililitros y el mismo precio. Ahora ella sigue un camino en vez de tasar un defecto, y los caminos no tienen pestañas de comparación.')
                              }
                    },
                    {
                      name: T(
                              'Fractional CO2 laser resurfacing — full face',
                              'Láser CO2 fraccionado — rostro completo'),
                      price: T('€1,050 per session', '1.050 € la sesión'),
                      why: T(
                             'Resurfacing comes with photographs, analysis software and measurable findings, which is the heaviest aesthetic diagnosis in the clinic and the hardest to hold back.',
                             'El láser CO2 viene con fotos, programas de análisis y hallazgos medibles: es el diagnóstico estético más pesado de la clínica y el más difícil de retener.'),
                      moment: T(
                                'The comparison images are ready on the screen and she is sitting where she can see them.',
                                'Las imágenes comparativas están listas en la pantalla y ella está sentada donde las ve.'),
                      weak: {
                              line: T(
                                      '"Let me show you the analysis first — it makes the case much better than I can, and then the €1,050 makes sense on its own."',
                                      '«Deja que te enseñe primero el análisis: lo explica mucho mejor que yo, y luego los 1.050 € se entienden solos.»'),
                              cost: T(
                                      'Lets the machine open the recommendation, which is persuasive and impersonal. She agrees with the analysis and still leaves, because agreeing with an analysis is not the same as wanting something.',
                                      'Deja que abra la recomendación la máquina, lo cual es persuasivo e impersonal. Está de acuerdo con el análisis y se va igual, porque estar de acuerdo con un análisis no es lo mismo que querer algo.')
                            },
                      strong: {
                                line: T(
                                        '"Screen off for a second. You said you want a week where you stop checking the light before you leave a room. That\'s what the session is for — then I\'ll show you the pictures."',
                                        '«Apago la pantalla un momento. Me has dicho que quieres una semana en la que dejes de mirar la luz antes de salir de una habitación. Para eso es la sesión. Luego te enseño las fotos.»'),
                                gain: T(
                                        'Turning the screen off is the physical form of the ordering rule. The analysis becomes supporting evidence for her sentence instead of the reason for the recommendation.',
                                        'Apagar la pantalla es la forma física de la regla del orden. El análisis pasa a ser prueba de apoyo de la frase de ella en lugar del motivo de la recomendación.')
                              }
                    },
                    {
                      name: T('Cryolipolysis — abdomen and flanks', 'Criolipólisis — abdomen y flancos'),
                      price: T('€1,180 for four applicators', '1.180 € cuatro aplicadores'),
                      why: T(
                             'Body work is where the aesthetic diagnosis is most exposing, because delivering it first means telling a woman in a gown what is wrong with her.',
                             'El trabajo corporal es donde el diagnóstico estético más expone, porque entregarlo primero significa decirle a una mujer en bata qué tiene mal.'),
                      moment: T(
                                'She is on the couch, the measurements are taken, and she is waiting for the verdict.',
                                'Está en la camilla, las medidas están tomadas y espera el veredicto.'),
                      weak: {
                              line: T(
                                      '"So we\'d want four applicators — two on the abdomen and two on the flanks — which comes to €1,180 for the session."',
                                      '«Necesitaríamos cuatro aplicadores: dos en el abdomen y dos en los flancos, que son 1.180 € la sesión.»'),
                              cost: T(
                                      'An honest plan delivered to a woman who has just been measured, which is the worst possible minute to say anything about areas. She agrees, dresses, and does not book.',
                                      'Es un plan honesto entregado a una mujer a la que acaban de medir, que es el peor minuto posible para decir nada sobre zonas. Dice que sí, se viste y no reserva.')
                            },
                      strong: {
                                line: T(
                                        '"Get dressed and come back to the desk — I\'d rather tell you this with your clothes on. It goes back to what you said about the changing room at the gym."',
                                        '«Vístete y vuelve a la mesa: prefiero contarte esto con la ropa puesta. Tiene que ver con lo que me dijiste del vestuario del gimnasio.»'),
                                gain: T(
                                        'Moves the recommendation out of the examination and back into the conversation, which is the same ordering rule expressed as geography. The number is identical and it arrives to a person rather than to a body.',
                                        'Saca la recomendación de la exploración y la devuelve a la conversación, que es la misma regla del orden expresada como geografía. La cifra es idéntica y llega a una persona y no a un cuerpo.')
                              }
                    }
                  ],
      title: T('Two diagnoses, one order', 'Dos diagnósticos, un orden'),
      objective: T('Deliver the emotional diagnosis before the aesthetic one, and know what changes when the order reverses.',
                   'Dar el diagnóstico emocional antes que el estético y saber qué cambia cuando se invierte el orden.'),
      provenance: {
        chapter: 11,
        principle: T('Emotional diagnosis first, aesthetic second: start with the skin and she compares prices on a problem; start with the feeling and she follows a path.',
                     'Primero el diagnóstico emocional, después el estético: si empiezas por la piel, ella compara precios sobre un problema; si empiezas por el sentimiento, sigue un camino.'),
        phase: 'recommendation',
        trustStage: 'alignment',
        standard: 4,
        duty: 3,
        toolkit: 3
      },
      depth: {
        whyItGoesWrong: T(
            'Opening with the visible finding feels like the unsalesy, straightforward way to begin: here is what is there, here is what it calls for, no persuasion anywhere in sight. Letting the evidence speak is the virtue. Chapter 11\'s objection is not about candour but about what your opening clause turns her into. Begin at the surface and she has been handed a defect, and defects get costed against other people\'s defects. Begin at the feeling and she has been handed a route, and routes get walked.',
            'Abrir con el hallazgo visible parece la manera directa y nada comercial de empezar: esto es lo que hay, esto es lo que pide, sin persuasión a la vista por ninguna parte. La virtud es dejar hablar a las pruebas. La objeción del capítulo 11 no va sobre la franqueza, sino sobre en qué la convierte a ella tu frase de apertura. Empieza por la superficie y le habrás entregado un defecto, y los defectos se presupuestan contra los defectos de otros. Empieza por el sentimiento y le habrás entregado una ruta, y las rutas se recorren.'),
        sheIsThinking: T(
            'Here comes the schedule. I shall copy down the figures and think about it at the kitchen table.',
            'Ahí viene el pliego. Copio las cifras y me lo pienso en la mesa de la cocina.'),
        ladder: {
          weak: {
            line:   T(
                '"So, you\'ve got some volume loss in the cheeks and fine lines that have deepened — here\'s what I\'d do."',
                '«Bueno, tienes algo de pérdida de volumen en los pómulos y líneas finas que se han marcado más. Esto es lo que yo haría.»'),
            effect: T(
                'Opens on the defect. Whatever follows is a quotation, and quotations get taken away and weighed against other quotations over a weekend.',
                'Abre por el defecto. Lo que venga después es un presupuesto, y los presupuestos se llevan a casa y se sopesan contra otros presupuestos durante un fin de semana.')
          },
          average: {
            line:   T(
                '"Based on what I\'ve seen, I\'d suggest two things."',
                '«Por lo que he visto, te propondría dos cosas.»'),
            effect: T(
                'Neutral and capable. It issues from your observation rather than her wording, so it is a route that could have been drawn before she arrived.',
                'Es neutro y solvente. Emana de tu observación y no de una formulación suya, así que es una ruta que se podría haber trazado antes de que ella llegara.')
          },
          strong: {
            line:   T(
                '"You said you want to be there on the date, not pretending. Two things will give you that."',
                '«Dijiste que quieres estar presente en esa cita, no fingiendo. Dos cosas te van a dar eso.»'),
            effect: T(
                'Chapter 11\'s manoeuvre with Sigal. The route arrives as a reply to a clause she spoke aloud, which is why the figure gets discussed rather than taken away and weighed.',
                'Es la maniobra del capítulo 11 con Sigal. La ruta llega como réplica a una frase que ella dijo en voz alta, y por eso la cifra se habla en lugar de llevársela a casa y sopesarla.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Both are necessary. Only one can go first.', 'Ambos son necesarios. Solo uno puede ir primero.'),
          body: [
            T('Every consultation contains two diagnoses. The aesthetic one describes tissue, condition, indication and risk. The emotional one describes what the change means to her, what she is protecting and what she would count as success. The book is blunt about the consequence of getting the order wrong: start with skin and she sees a problem, and people compare prices on problems. Start with meaning and she sees a path, and people follow paths.',
              'Toda consulta contiene dos diagnósticos. El estético describe tejido, condición, indicación y riesgo. El emocional describe qué significa el cambio para ella, qué protege y qué contaría como éxito. El libro es tajante sobre la consecuencia de equivocarse en el orden: empieza por la piel y ella ve un problema, y los problemas se comparan por precio. Empieza por el significado y ve un camino, y los caminos se siguen.'),
            T('This is also why a technically excellent practitioner can convert poorly. Nothing is wrong with the assessment. It simply arrived first, and arriving first turned a person into a case.',
              'Por eso también un profesional técnicamente excelente puede convertir mal. La valoración no tiene nada de malo. Simplemente llegó primero, y llegar primero convirtió a una persona en un caso.'),
            T('The emotional diagnosis is not invented in Phase 5. It is read out of what Phase 3 and Phase 4 produced — which is why a consultation with a thin Discovery has nothing to put first.',
              'El diagnóstico emocional no se inventa en la Fase 5. Se lee de lo que produjeron la Fase 3 y la Fase 4, y por eso una consulta con un Descubrimiento pobre no tiene nada que poner primero.')
          ],
          diagram: 'double-diagnosis' },
        { kind: 'sort',
          prompt: T('Six lines from a recommendation you have drafted for the client below, before you have decided what order to say them in. File each one under the diagnosis it belongs to.',
                    'Seis frases de una recomendación que has redactado para la clienta de abajo, antes de decidir en qué orden decirlas. Archiva cada una bajo el diagnóstico al que pertenece.'),
          client: T('"I stopped bothering when my mother got ill. Two years of that. Now I look at photographs from before and I do not recognise the face, and I would rather not be in the new ones."',
                    '«Dejé de cuidarme cuando mi madre se puso enferma. Dos años así. Ahora miro fotos de antes y no reconozco esa cara, y en las nuevas prefiero no salir».'),
          buckets: [
            { id: 'emotional', label: T('Emotional diagnosis — what the change means to her', 'Diagnóstico emocional — qué significa el cambio para ella') },
            { id: 'aesthetic', label: T('Aesthetic diagnosis — tissue, condition, indication', 'Diagnóstico estético — tejido, condición, indicación') }
          ],
          items: [
            { id: 'd1', text: T('"someone who stopped looking after herself for two years and wants to start again"',
                                '«alguien que dejó de cuidarse durante dos años y quiere volver a empezar»'), bucket: 'emotional' },
            { id: 'd2', text: T('"what I can see is two years of not much sleep and not much water — not damage"',
                                '«lo que veo son dos años de dormir poco y beber poca agua, no daño»'), bucket: 'aesthetic' },
            { id: 'd3', text: T('"this is all completely normal for your age"',
                                '«esto es todo completamente normal para tu edad»'), bucket: 'aesthetic' },
            { id: 'd4', text: T('"wants to be in the photographs again instead of behind the camera"',
                                '«quiere volver a salir en las fotos en vez de estar detrás de la cámara»'), bucket: 'emotional' },
            { id: 'd5', text: T('"almost no sun damage, which is unusual at forty-eight"',
                                '«casi nada de daño solar, algo poco frecuente a los cuarenta y ocho»'), bucket: 'aesthetic' },
            { id: 'd6', text: T('"does not want a different face — wants to recognise this one"',
                                '«no quiere otra cara: quiere reconocer esta»'), bucket: 'emotional' }
          ],
          why: T('Three of the six are aesthetic and none of the three sounds it, which is the whole difficulty. "Two years of not much sleep and not much water" borrows her story and her timescale, but she never said sleep and she never said water — you read those off her skin, so it is a finding. "Completely normal for your age" feels like reassurance and is a judgement about tissue. "Almost no sun damage, unusual at forty-eight" arrives as a compliment and is still a lamp reading. Warmth in the delivery does not move a sentence from one diagnosis to the other; what it does is let a practitioner believe she opened with meaning when she opened with an assessment, which is precisely the failure the lesson is about. The test is not the tone, it is the source. Every line in the emotional column can be traced word for word to something this woman said, and not one of them needed a lamp. If you cannot trace it to her sentence you did not diagnose it, you assumed it — and Toolkit #4 puts her goal in her own words in field 1 so that the assumption has nowhere to hide.',
                 'Tres de las seis son estéticas y ninguna de las tres lo parece, y ahí está toda la dificultad. «Dos años de dormir poco y beber poca agua» toma prestados su relato y su plazo, pero ella nunca dijo dormir y nunca dijo agua: eso lo has leído en su piel, así que es un hallazgo. «Completamente normal para tu edad» suena a consuelo y es un juicio sobre el tejido. «Casi nada de daño solar, poco frecuente a los cuarenta y ocho» llega como un cumplido y sigue siendo una lectura con lámpara. Que se diga con calidez no mueve una frase de un diagnóstico al otro: lo que hace es permitir que una profesional crea que ha empezado por el significado cuando ha empezado por la valoración, que es justo el fallo del que va la lección. La prueba no es el tono, es la procedencia. Cada línea de la columna emocional se puede rastrear palabra por palabra hasta algo que dijo esta mujer, y ninguna necesitó una lámpara. Si no la puedes rastrear hasta su frase, no la diagnosticaste, la supusiste, y el Toolkit #4 pone su objetivo con sus propias palabras en el campo 1 para que esa suposición no tenga dónde esconderse.') },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 11', 'The Beauty Sales Secrets — Capítulo 11'),
          quote: T('A recommendation without understanding is a guess. Dual diagnosis makes it a gift.',
                   'Una recomendación sin comprensión es una conjetura. El doble diagnóstico la convierte en un regalo.'),
          note: T('In the canonical architecture this is the boundary between Phase 5 and Phase 6: Education explains the mechanism honestly, Recommendation states the pathway. Toolkit #4 enforces the order in its own field structure — field 1 is her goal in her words, and field 2 is your professional assessment.',
                  'En la arquitectura canónica este es el límite entre la Fase 5 y la Fase 6: la Educación explica el mecanismo con honestidad, la Recomendación enuncia la vía. El Toolkit #4 impone el orden en su propia estructura de campos: el campo 1 es su objetivo con sus palabras y el campo 2 es tu valoración profesional.') },
        { kind: 'compare',
          prompt: T('Same client, same findings, two openings to the recommendation. Which one is the method?',
                    'La misma clienta, los mismos hallazgos, dos aperturas de la recomendación. ¿Cuál es el método?'),
          a: { label: T('Opening A', 'Apertura A'),
               text: T('"So — your skin is dry but not damaged, there\'s some volume loss in the cheeks and the fine lines have deepened a little. All normal for your age. Here\'s what I\'d suggest we do about it."',
                       '«Bien: tu piel está seca pero no dañada, hay algo de pérdida de volumen en los pómulos y las líneas finas se han marcado un poco. Todo normal para tu edad. Esto es lo que sugeriría hacer».') },
          b: { label: T('Opening B', 'Apertura B'),
               text: T('"What you described is someone who stopped taking care of herself when the house emptied, and wants to go back to being someone who invests in herself. That\'s what we\'re treating. Clinically, your skin is dry and it isn\'t damaged — which is why what you\'re asking for is actually available."',
                       '«Lo que has descrito es alguien que dejó de cuidarse cuando la casa se vació y quiere volver a ser alguien que invierte en sí misma. Eso es lo que estamos tratando. Clínicamente tu piel está seca y no está dañada, y por eso lo que pides está realmente a tu alcance».') },
          answer: 'b',
          why: T('A is accurate, complete and interchangeable — it would fit forty clients, and "normal for your age" quietly tells her that her concern is unremarkable. B makes her sentence the object of treatment and then uses the clinical finding as the reason her goal is reachable. Same facts, reversed service relationship.',
                 'A es exacta, completa e intercambiable: valdría para cuarenta clientas, y «normal para tu edad» le dice en voz baja que su preocupación no tiene nada de particular. B convierte su frase en el objeto del tratamiento y luego usa el hallazgo clínico como la razón por la que su objetivo es alcanzable. Los mismos hechos, la relación de servicio invertida.') },
        { kind: 'choose',
          prompt: T('She asks, before you have said anything: "So what do I need?" What does the method do with that question?',
                    'Pregunta, antes de que hayas dicho nada: «¿Y qué necesito?». ¿Qué hace el método con esa pregunta?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Answer it directly — she asked, and making her wait is precious.',
                       'Responderla directamente: lo ha preguntado, y hacerla esperar es una pose.'),
              why: T('Reasonable and it costs you the frame. Answered cold, your recommendation is a list of items she will now evaluate on price, because you have given her nothing else to evaluate it against.',
                     'Razonable y te cuesta el marco. Respondida en frío, tu recomendación es una lista de partidas que ahora evaluará por precio, porque no le has dado nada más con lo que compararla.') },
            { id: 'b', verdict: 'best',
              label: T('"Before I answer that — let me tell you what I think you actually came in for, and you tell me if I\'ve got it wrong."',
                       '«Antes de responder, déjame decirte a qué creo que has venido en realidad, y tú me dices si me equivoco».'),
              why: T('You answered the question with a sequence rather than a refusal, and you handed her the correction. If your reading is right she will confirm it and the recommendation lands on ground she prepared; if it is wrong you have found that out before you priced anything.',
                     'Has respondido a la pregunta con una secuencia y no con una negativa, y le has entregado la corrección. Si tu lectura es correcta, la confirmará y la recomendación aterrizará sobre un terreno que ella preparó; si es incorrecta, lo has descubierto antes de poner precio a nada.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Let\'s not jump ahead — I need to complete my assessment first."',
                       '«No adelantemos: primero tengo que terminar mi valoración».'),
              why: T('Correct in substance, and it reads as a rebuke. You have told a client who is trying to participate that the consultation runs on your schedule. Expect shorter answers for the rest of it.',
                     'Correcto en el fondo y se lee como una reprimenda. Le has dicho a una clienta que intenta participar que la consulta va a tu ritmo. Espera respuestas más cortas el resto del tiempo.') }
          ],
          principle: T('Trust Stage 5 — Alignment. A recommendation is aligned when the client recognises her own goal inside it, which cannot happen if she hears the plan before she hears her own sentence.',
                       'Etapa de Confianza 5 — Alineación. Una recomendación está alineada cuando la clienta reconoce su propio objetivo dentro de ella, y eso no puede ocurrir si oye el plan antes que su propia frase.'),
          retry: {
            note: T('The same order problem, arriving from the opposite direction.',
                    'El mismo problema de orden, llegando desde la dirección contraria.'),
            prompt: T('Sigal, 43, back to dating after a divorce. You have told her honestly that her skin is good — hydrated, no real damage, some volume loss in the cheeks, a few lines that have deepened, normal and not dramatic. She says: "So I don\'t need anything?" What do you say?',
                      'Sigal, 43, que ha vuelto a tener citas tras un divorcio. Le has dicho con honestidad que su piel está bien: hidratada, sin daño real, algo de pérdida de volumen en los pómulos, algunas líneas más marcadas, normal y nada dramático. Ella dice: «¿Entonces no necesito nada?». ¿Qué respondes?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Need is a strong word. There\'s nothing you have to do — but there are things that would make a visible difference if you wanted them."',
                         '«Necesitar es mucho decir. No hay nada que tengas que hacerte, pero hay cosas que marcarían una diferencia visible si te apeteciera».'),
                why: T('Honest, and it leaves her holding the decision with no ground to make it on. "If you wanted them" moves the whole question to preference, and preference is what gets compared on price later, at home, against a website.',
                       'Honesto, y la deja con la decisión en la mano y sin terreno sobre el que tomarla. «Si te apeteciera» traslada toda la cuestión a la preferencia, y la preferencia es lo que se compara por precio después, en casa, contra una web.') },
              { id: 'b', verdict: 'best',
                label: T('"You don\'t need everything. But there are two things I believe will give you exactly what you told me you\'re looking for — to walk in there feeling like you\'re actually there, not performing."',
                         '«No necesitas todo. Pero hay dos cosas que creo que te darán exactamente lo que me dijiste que buscas: entrar sintiendo que estás realmente ahí, no actuando».'),
                why: T('The subtraction comes first and the recommendation arrives through it, tied to her own sentence rather than to her tissue. This is the book\'s order — what she does not need, then what she does, then why it is hers — and it is why the number, when it comes, is not the subject.',
                       'La sustracción va primero y la recomendación llega a través de ella, atada a su propia frase y no a su tejido. Este es el orden del libro —lo que no necesita, luego lo que sí, luego por qué es suyo— y por eso la cifra, cuando llega, no es el tema.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Not urgently, no. But everyone your age is doing something, and it\'s much easier to keep it than to get it back."',
                         '«Urgente no, no. Pero todo el mundo a tu edad se hace algo, y es mucho más fácil mantenerlo que recuperarlo».'),
                why: T('Two pressures in one sentence — a peer group and a deadline — aimed at a woman who has just been told she is fine. It converts a professional opinion into a reason to act now, and she will recognise it, because it is the sentence every clinic says.',
                       'Dos presiones en una frase —un grupo de referencia y un plazo— dirigidas a una mujer a la que acaban de decirle que está bien. Convierte una opinión profesional en un motivo para actuar ya, y ella lo reconocerá, porque es la frase que dice toda clínica.') }
            ],
            principle: T('"You don\'t need everything. Here is what you actually need." The subtraction is not modesty — it is what makes the recommendation heavy enough to be weighed against her own goal instead of against a price list.',
                         '«No necesitas todo. Esto es lo que sí necesitas». La sustracción no es modestia: es lo que hace la recomendación lo bastante pesada como para medirse contra su propio objetivo y no contra una lista de precios.'),
            changes: {
              axis: 'recommendation',
              detail: T('The two items stop being a shorter price list and become the answer to the sentence she gave you in Discovery. When she asks the number, she weighs it against walking in there feeling she is actually present — not against another clinic’s tariff.',
                        'Los dos elementos dejan de ser una lista de precios más corta y pasan a ser la respuesta a la frase que ella te dio en el Descubrimiento. Cuando pregunta la cifra, la pesa contra entrar allí sintiendo que está de verdad, no contra la tarifa de otra clínica.')
            }
          } },
        { kind: 'reflect',
          prompt: T('Write the emotional diagnosis of your last consultation in one sentence, using her words. Then write the aesthetic one. Which came first when you actually spoke?',
                    'Escribe el diagnóstico emocional de tu última consulta en una frase, con sus palabras. Luego el estético. ¿Cuál salió primero cuando hablaste de verdad?'),
          placeholder: T('If you cannot write the first one in her words, Phase 3 is where the work is.',
                         'Si no puedes escribir el primero con sus palabras, el trabajo está en la Fase 3.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm5l2', n: 2, minutes: 11,
      treatments: [
                    {
                      name: T('Botulinum toxin — upper face', 'Toxina botulínica — tercio superior'),
                      price: T('€320 for three areas, €240 for two', '320 € tres zonas, 240 € dos'),
                      why: T(
                             'Three areas is the clinic\'s standard package, so recommending two is the clearest and most costly example of striking out before proposing.',
                             'Tres zonas es el paquete estándar de la clínica, así que recomendar dos es el ejemplo más claro y más caro de tachar antes de proponer.'),
                      moment: T(
                                'She has asked for all three and you can see that the crow\'s feet are doing something you would not want to lose.',
                                'Ha pedido las tres y ves que la patita de gallo hace algo que no querrías perder.'),
                      weak: {
                              line: T(
                                      '"We can do all three at €320, and if you feel the eyes are too still next time we\'ll adjust the dose there."',
                                      '«Podemos hacer las tres, 320 €, y si la próxima vez notas los ojos demasiado quietos ajustamos la dosis ahí.»'),
                              cost: T(
                                      'Gives her what she asked for and defers the judgement to a future appointment, which is reasonable and reads as compliance. Nothing has been refused, so nothing that is offered carries any weight.',
                                      'Le da lo que ha pedido y aplaza el criterio a una cita futura, lo cual es razonable y se lee como complacencia. No se ha rechazado nada, así que nada de lo ofrecido pesa.')
                            },
                      strong: {
                                line: T(
                                        '"You don\'t need the crow\'s feet. Two areas, €240, and I\'d rather you kept what your eyes do when you laugh."',
                                        '«No necesitas la patita de gallo. Dos zonas, 240 €, y prefiero que conserves lo que hacen tus ojos cuando te ríes.»'),
                                gain: T(
                                        'Eighty euros refused in front of her. The two areas she does get now carry the weight of a decision that was made against the clinic\'s interest, and that is what she repeats to her friends.',
                                        'Ochenta euros rechazados delante de ella. Las dos zonas que sí se lleva cargan ahora con el peso de una decisión tomada en contra del interés de la clínica, y eso es lo que les cuenta a sus amigas.')
                              }
                    },
                    {
                      name: T('Tensor threads — mid-face', 'Hilos tensores — tercio medio'),
                      price: T(
                               '€1,600, or €660 for the skin booster alternative',
                               '1.600 €, o 660 € la alternativa con bioestimulación'),
                      why: T(
                             'Threads are the highest single-ticket facial item in most Madrid clinics, which makes declining them the most expensive sentence a practitioner can say and the most persuasive.',
                             'Los hilos son el artículo facial suelto más caro de casi cualquier clínica de Madrid, lo que hace que rechazarlos sea la frase más cara que puede decir un profesional y la más persuasiva.'),
                      moment: T(
                                'She has come in asking for threads by name, she can afford them, and you do not think they are the right first move.',
                                'Ha venido pidiendo hilos por su nombre, se los puede permitir y tú no crees que sean el primer movimiento adecuado.'),
                      weak: {
                              line: T(
                                      '"Threads would certainly do something for you. Shall we start there and see how you feel afterwards?"',
                                      '«Los hilos desde luego te harían algo. ¿Empezamos por ahí y vemos después cómo te sientes?»'),
                              cost: T(
                                      'Accepts a €1,600 request that you privately disagree with, which is the most defensible bad decision in the clinic because she asked for it. She senses the shrug in it, and a shrug at €1,600 is what makes people want a second opinion.',
                                      'Acepta una petición de 1.600 € con la que en el fondo no estás de acuerdo, que es la mala decisión más defendible de la clínica porque la ha pedido ella. Ella nota el encogimiento de hombros, y un encogimiento de hombros a 1.600 € es lo que hace que la gente quiera una segunda opinión.')
                            },
                      strong: {
                                line: T(
                                        '"I\'m not going to do the threads. Not this year. Two sessions of boosters at €660 first, and if I\'m wrong you\'ll know by March and I\'ll do them."',
                                        '«Los hilos no te los voy a poner. Este año no. Primero dos sesiones de bioestimulación, 660 €, y si me equivoco lo sabrás en marzo y te los pongo.»'),
                                gain: T(
                                        'Refuses €940 and puts a date on being proved wrong. She books the boosters, she comes back in March, and she brings the friend she told about it.',
                                        'Rechaza 940 € y pone fecha a poder equivocarse. Compra la bioestimulación, vuelve en marzo y trae a la amiga a la que se lo contó.')
                              }
                    },
                    {
                      name: T('Chemical peel — single session', 'Peeling químico — sesión suelta'),
                      price: T('€150 per session', '150 € la sesión'),
                      why: T(
                             'At the bottom of the price list there is nothing to strike out, so the principle has to be applied to the home routine instead of to the treatment plan.',
                             'En la parte baja de la lista de precios no hay nada que tachar, así que el principio hay que aplicarlo a la rutina de casa y no al plan de tratamiento.'),
                      moment: T(
                                'She has brought a photograph of her bathroom shelf with eleven products on it and wants to know what else to add.',
                                'Ha traído una foto de la repisa de su baño con once productos y quiere saber qué más añadir.'),
                      weak: {
                              line: T(
                                      '"That\'s a good base. I\'d add a proper acid twice a week, and a single peel here at €150 to reset things."',
                                      '«Es una buena base. Yo añadiría un ácido en condiciones dos veces por semana y un peeling suelto aquí, 150 €, para resetear.»'),
                              cost: T(
                                      'Adds a twelfth product to a shelf of eleven, which is the answer she asked for. It also makes you the eleventh voice that has told her to buy something, and none of the previous ten are trusted either.',
                                      'Añade un duodécimo producto a una repisa de once, que es la respuesta que ha pedido. También te convierte en la undécima voz que le ha dicho que compre algo, y de las diez anteriores tampoco se fía.')
                            },
                      strong: {
                                line: T(
                                        '"Six of those eleven are doing nothing for you and two are working against each other. Stop those eight, keep three, and come back in a month."',
                                        '«Seis de esos once no te están haciendo nada y dos se pelean entre sí. Deja esos ocho, quédate con tres y vuelve dentro de un mes.»'),
                                gain: T(
                                        'Removes eight things and sells nothing, in an appointment worth €150. The month she spends with three products is the month she decides you are the only person in Madrid who has ever told her to buy less.',
                                        'Quita ocho cosas y no vende nada, en una cita de 150 €. El mes que pasa con tres productos es el mes en que decide que eres la única persona de Madrid que le ha dicho que compre menos.')
                              }
                    }
                  ],
      conversation: {
                      setting: T(
                                 'Consultation, tensor threads requested by name, €1,600. Minute fourteen — the recommendation is about to be made.',
                                 'Consulta, hilos tensores pedidos por su nombre, 1.600 €. Minuto catorce: toca hacer la recomendación.'),
                      before: [
                                {
                                  who: 'client',
                                  line: T(
                                          '"A friend of mine had the threads and she looks incredible. That\'s what I want."',
                                          '«Una amiga mía se puso los hilos y está increíble. Eso es lo que quiero.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Threads can be a very good option, and yours is the kind of face that tends to respond well to them. Let me talk you through what it involves."',
                                          '«Los hilos pueden ser una opción muy buena, y tu tipo de cara suele responder bien a ellos. Te explico lo que implica.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"How much are we talking?"', '«¿De cuánto estamos hablando?»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Between eight and ten threads, so around €1,600. It\'s about an hour under local anaesthetic, and you\'d want a quiet weekend afterwards."',
                                          '«Entre ocho y diez hilos, así que unos 1.600 €. Es una hora con anestesia local y querrías un fin de semana tranquilo después.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"And would you also do anything else while I\'m there?"',
                                          '«¿Y me harías algo más ya que estoy?»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"We could add boosters for the skin quality, which would complement it nicely — that\'s another €660 for two sessions."',
                                          '«Podríamos añadir bioestimulación para la calidad de piel, que combinaría muy bien. Son otros 660 € por dos sesiones.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"Let me speak to my husband and I\'ll come back to you."',
                                          '«Lo hablo con mi marido y te digo algo.»')
                                }
                              ],
                      after: [
                               {
                                 who: 'client',
                                 line: T(
                                         '"A friend of mine had the threads and she looks incredible. That\'s what I want."',
                                         '«Una amiga mía se puso los hilos y está increíble. Eso es lo que quiero.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"I know the work you mean and she does look well. I\'m going to tell you what I\'d do for you, and it starts with what I wouldn\'t."',
                                         '«Sé a qué trabajo te refieres y sí, está estupenda. Te voy a decir qué haría yo contigo, y empieza por lo que no haría.»')
                               },
                               {
                                 who: 'client',
                                 line: T('"Go on."', '«Dime.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"I wouldn\'t put threads in you this year. Your friend had descent and you don\'t, yet — on you they\'d do less than the €1,600 deserves."',
                                         '«No te pondría hilos este año. Tu amiga tenía descenso y tú todavía no. En ti harían menos de lo que merecen 1.600 €.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"So you\'re turning it down."',
                                         '«O sea que me lo estás rechazando.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"I\'m turning it down for now. What you actually came in about was looking flat in photographs, and for that I\'d do two sessions of boosters at €660 and nothing else."',
                                         '«Te lo rechazo por ahora. Por lo que has venido en realidad es porque sales apagada en las fotos, y para eso haría dos sesiones de bioestimulación, 660 €, y nada más.»')
                               },
                               {
                                 who: 'client',
                                 line: T('"Nothing else at all?"', '«¿Nada más de nada?»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Nothing else. Come back in March and if I\'ve misjudged it, I\'ll say so and we\'ll do the threads then."',
                                         '«Nada más. Vuelve en marzo y si me he equivocado, te lo digo y entonces hacemos los hilos.»')
                               }
                             ],
                      whatChanged: T(
                                     'The first practitioner did what a well-run clinic trains people to do: validate the request, explain it properly, quote it accurately, and offer a complementary item at the natural moment. Every sentence is defensible and the total on the table is €2,260. What the client heard was agreement followed by an addition, which is the sound of someone selling, and a woman who hears that consults her husband. The second version refused €1,600 out loud and then refused the add-on as well, and the sentence "nothing else" is the one that does the commercial work — not because it is generous, but because it proves that a sieve was used before the list reached her. She leaves with a €660 plan she believes in and a March appointment that belongs to this clinic.',
                                     'La primera profesional hizo lo que una clínica bien llevada enseña a hacer: validar la petición, explicarla bien, presupuestarla con exactitud y ofrecer un complemento en el momento natural. Cada frase es defendible y lo que hay sobre la mesa suma 2.260 €. Lo que oyó la clienta fue conformidad seguida de una añadidura, que es el sonido de alguien vendiendo, y una mujer que oye eso lo consulta con su marido. La segunda versión rechazó 1.600 € en voz alta y rechazó también el complemento, y la frase «nada más» es la que hace el trabajo comercial: no por generosa, sino porque demuestra que se usó un tamiz antes de que la lista le llegara. Se va con un plan de 660 € en el que cree y con una cita de marzo que es de esta clínica.'),
                      cost: T(
                              '€2,260 that becomes a conversation at home, where the only available comparison is the price. The second version banks €660 now and holds the option on the €1,600 rather than losing it.',
                              '2.260 € que se convierten en una conversación en casa, donde la única comparación disponible es el precio. La segunda versión ingresa 660 € ahora y se queda con la opción sobre los 1.600 € en lugar de perderla.')
                    },
      title: T('"You don\'t need everything"', '«No necesitas todo»'),
      objective: T('Use subtraction as the primary credibility instrument, and say what you are not recommending before what you are.',
                   'Usar la sustracción como principal instrumento de credibilidad y decir qué no recomiendas antes que qué sí.'),
      provenance: {
        chapter: 11,
        principle: T('Every time you tell a client what she does not need, what you do recommend doubles in power.',
                     'Cada vez que le dices a una clienta lo que no necesita, lo que sí le recomiendas duplica su fuerza.'),
        phase: 'recommendation',
        trustStage: 'credibility',
        standard: 3,
        duty: 4,
        toolkit: 4
      },
      depth: {
        whyItGoesWrong: T(
            'Announcing what a woman does not require feels like leaving revenue on the table and, more uncomfortably, like short-changing her: four items would genuinely assist, and offering two feels like withholding your best. Generosity is the virtue at fault. But four items is heard as hunger, and Chapter 11\'s claim is engineering rather than ethics — each item you strike out adds mass to the items that survive, because she now believes a sieve was used before the list reached her.',
            'Anunciar lo que una mujer no requiere parece dejar ingresos sobre la mesa y, de forma más incómoda, parece darle menos de lo que le corresponde: cuatro artículos ayudarían de verdad, y ofrecer dos parece guardarte lo mejor que tienes. La virtud culpable es la generosidad. Pero cuatro artículos se oyen como hambre, y la tesis del capítulo 11 es ingeniería antes que ética: cada artículo que tachas añade masa a los que sobreviven, porque ella ya cree que se usó un tamiz antes de que la lista le llegara.'),
        sheIsThinking: T(
            'Here we go. Let us see how far down the page this goes.',
            'Allá vamos. A ver hasta dónde baja esto por la página.'),
        ladder: {
          weak: {
            line:   T(
                '"There are four things that would really help — let me take you through all of them."',
                '«Hay cuatro cosas que ayudarían mucho. Déjame que te las explique todas.»'),
            effect: T(
                'Swamps her and exposes hunger in a single breath. Her defence is to take none of the four away with her today.',
                'La desborda y expone el hambre en un solo aliento. Su defensa consiste en no llevarse hoy ninguno de los cuatro.')
          },
          average: {
            line:   T(
                '"I\'d start with these two, and we can look at the rest later on."',
                '«Yo empezaría por estas dos y ya miramos el resto más adelante.»'),
            effect: T(
                'Measured and reasonable. It also parks the remaining two as business to be done another day, and she can hear them parked.',
                'Es comedido y razonable. También deja los dos restantes aparcados como negocio para otro día, y ella los oye aparcados.')
          },
          strong: {
            line:   T(
                '"You don\'t need the serum, and you don\'t need the third session. Two things will do it."',
                '«No necesitas el sérum y no necesitas la tercera sesión. Con dos cosas basta.»'),
            effect: T(
                'Chapter 11\'s master sentence: strike out before you propose. The guard drops, and the two survivors carry more mass than four would have.',
                'Es la frase maestra del capítulo 11: tachar antes de proponer. La guardia baja, y los dos supervivientes llevan más masa de la que habrían llevado cuatro.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The sentence that makes the rest work', 'La frase que hace funcionar todo lo demás'),
          body: [
            T('"You don\'t need everything. Here\'s what you actually need." The book claims three effects and they are worth separating. It lowers the guard, because she was braced for an upsell. It builds authority, because only someone who knows the field can confidently remove things from it. And it makes what you do recommend heavier, because it arrived through a filter.',
              '«No necesitas todo. Esto es lo que sí necesitas». El libro atribuye tres efectos y merece la pena separarlos. Baja la guardia, porque ella venía preparada para que le vendieran de más. Construye autoridad, porque solo quien conoce el campo puede quitar cosas de él con seguridad. Y hace más pesado lo que sí recomiendas, porque llegó atravesando un filtro.'),
            T('Most practitioners agree with this and then never do it, because subtraction feels like leaving money on the table. It is the opposite: the item you remove is the price of the items you keep.',
              'La mayoría de los profesionales está de acuerdo con esto y luego no lo hace nunca, porque restar parece dejar dinero sobre la mesa. Es al revés: lo que retiras es el precio de lo que conservas.'),
            T('Canonically this is Ethical Duty 1 — Recommend Only What Is Warranted — made audible. Toolkit #4 field 8 exists so that the subtraction is recorded, not just felt.',
              'Canónicamente esto es el Deber Ético 1 —Recomendar Solo lo Justificado— hecho audible. El campo 8 del Toolkit #4 existe para que la sustracción quede registrada y no solo sentida.')
          ] },
        { kind: 'spot',
          prompt: T('Find the line that made everything after it heavier.',
                    'Encuentra la línea que hizo más pesado todo lo que vino después.'),
          lines: [
            { who: 'client', text: T('"So what do you think? Be honest."', '«¿Y qué te parece? Sé sincera».') },
            { who: 'you', text: T('"Honestly — your skin is good. You have hydration and no real damage."', '«Sinceramente, tu piel está bien. Tiene hidratación y ningún daño real».') },
            { who: 'client', text: T('"So I don\'t need anything?"', '«¿Entonces no necesito nada?»') },
            { who: 'you', text: T('"You don\'t need everything. But I believe two things will give you exactly what you\'re looking for."', '«No necesitas todo. Pero creo que dos cosas te darán exactamente lo que buscas».') },
            { who: 'client', text: T('"Okay. Tell me the two."', '«Vale. Dime las dos».') }
          ],
          answerIndex: 3,
          why: T('Line 4 is doing three jobs in eleven words: it declines the maximal version, it keeps a recommendation on the table, and it uses "exactly what you\'re looking for", which points back at her stated goal rather than at the treatment. Notice her next line — she asks for the recommendation. A client who asks to hear it is in a different position from one who is told it.',
                 'La línea 4 hace tres trabajos en once palabras: rechaza la versión máxima, mantiene una recomendación sobre la mesa y usa «exactamente lo que buscas», que apunta a su objetivo declarado y no al tratamiento. Fíjate en su siguiente frase: pide la recomendación. Una clienta que pide oírla está en una posición distinta de una a la que se la dicen.'),
          principle: T('Say what you are not recommending first. Every time you remove something, what remains doubles in weight.',
                       'Di primero lo que no recomiendas. Cada vez que retiras algo, lo que queda dobla su peso.') },
        { kind: 'sort',
          prompt: T('Sort these sentences: real subtraction, or subtraction used as a technique?',
                    'Clasifica estas frases: ¿sustracción real o sustracción usada como técnica?'),
          client: T('All five were said in Phase 6 by practitioners who had read this chapter.',
                    'Las cinco se dijeron en la Fase 6 por profesionales que habían leído este capítulo.'),
          buckets: [
            { id: 'real', label: T('Real subtraction', 'Sustracción real') },
            { id: 'fake', label: T('A technique wearing its clothes', 'Una técnica con su ropa') }
          ],
          items: [
            { id: 'q1', text: T('"I\'m not recommending the cheeks. Treating them would change how people recognise you, and you told me that\'s the one thing you don\'t want."', '«No recomiendo los pómulos. Tratarlos cambiaría cómo te reconoce la gente, y me has dicho que eso es justo lo que no quieres».'), bucket: 'real' },
            { id: 'q2', text: T('"You don\'t need everything — so let\'s start with just these four instead of the six."', '«No necesitas todo, así que empecemos solo con estos cuatro en vez de los seis».'), bucket: 'fake' },
            { id: 'q3', text: T('"I\'d leave the laser alone entirely. With your history it carries a rebound risk I\'m not willing to take with your skin."', '«Yo dejaría el láser completamente al margen. Con tu historial tiene un riesgo de rebote que no estoy dispuesta a correr con tu piel».'), bucket: 'real' },
            { id: 'q4', text: T('"Honestly you don\'t need the premium version — the standard package is plenty for someone like you."', '«Sinceramente no necesitas la versión premium; el paquete estándar es más que suficiente para alguien como tú».'), bucket: 'fake' },
            { id: 'q5', text: T('"I don\'t think you need anything today. Come back in six months with photographs and we\'ll see whether it\'s actually moving."', '«No creo que hoy necesites nada. Vuelve en seis meses con fotos y vemos si de verdad está avanzando».'), bucket: 'real' }
          ],
          why: T('The test is whether anything was actually declined. q2 removed two items from a number you invented; q4 removed a tier while inserting "someone like you", which is a category judgement she did not ask for. q5 is the hardest and the most valuable: it declines the entire sale and it is the one that produces referrals.',
                 'La prueba es si se rechazó algo de verdad. La q2 quitó dos partidas de una cifra que te inventaste; la q4 quitó una gama e insertó «alguien como tú», que es un juicio de categoría que ella no pidió. La q5 es la más difícil y la más valiosa: rechaza la venta entera y es la que produce recomendaciones.') },
        { kind: 'choose',
          prompt: T('You have examined her. Of the four things she asked about, one is warranted, two would make a marginal difference and one you would decline outright. How do you open?',
                    'Ya la has explorado. De las cuatro cosas por las que preguntó, una está justificada, dos apenas marcarían diferencia y una la rechazarías de plano. ¿Cómo abres?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Right — so of the four, I\'d definitely do the first, the second and third are optional, and I\'d probably leave the fourth."',
                       '«A ver: de las cuatro, la primera sin duda; la segunda y la tercera son opcionales, y la cuarta probablemente la dejaría».'),
              why: T('Every word is true and it arrives as a graded list. "Optional" and "probably" are hedges that hand her the clinical decision, and a client holding four items and two hedges does the only available thing: she picks by price, or she postpones.',
                     'Cada palabra es cierta y llega como una lista graduada. «Opcional» y «probablemente» son reservas que le entregan la decisión clínica, y una clienta con cuatro partidas y dos reservas hace lo único que puede: elige por precio, o aplaza.') },
            { id: 'b', verdict: 'best',
              label: T('"Let me start with what I\'m not recommending. The fourth I\'d decline outright, and here\'s why — and I\'d leave the other two alone for now as well. One thing is worth doing."',
                       '«Empiezo por lo que no recomiendo. La cuarta la descarto del todo, y te digo por qué; y las otras dos también las dejaría de momento. Hay una sola cosa que merece la pena».'),
              why: T('Three of the four are removed before anything is offered, which is what makes the remaining one heavy. Declining costs you money in the room, and a client can tell the difference between advice that costs the adviser and advice that does not — which is the whole reason the ledger moves on this sentence rather than on the plan.',
                     'Tres de las cuatro se retiran antes de ofrecer nada, y eso es lo que hace pesada la que queda. Rechazar te cuesta dinero en la sala, y una clienta distingue entre un consejo que le cuesta a quien lo da y uno que no, que es toda la razón por la que el registro se mueve con esta frase y no con el plan.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Honestly, I\'d do all four — but let\'s start with two and see how you feel, and we can always add the rest later."',
                       '«Sinceramente, yo haría las cuatro; pero empecemos por dos y ves cómo te sientes, y siempre podemos añadir el resto después».'),
              why: T('Nothing has been declined; it has been deferred. "We can always add the rest later" describes a subscription, and for a client who arrived braced for an upsell it confirms the brace. What she will remember is that you recommended four.',
                     'No se ha rechazado nada: se ha aplazado. «Siempre podemos añadir el resto después» describe una suscripción, y para una clienta que llegó en guardia esperando que le vendieran de más, se la confirma. Lo que recordará es que recomendaste cuatro.') }
          ],
          principle: T('Ethical Duty 1 — Recommend Only What Is Warranted. Subtraction deferred is not subtraction. The item you remove is the price of the items you keep.',
                       'Deber Ético 1 — Recomendar Solo lo Justificado. Una sustracción aplazada no es una sustracción. Lo que retiras es el precio de lo que conservas.'),
          retry: {
            note: T('The hardest version of the same sentence.',
                    'La versión más difícil de la misma frase.'),
            prompt: T('A client has travelled two hours and paid a consultation fee, and she clearly wants to book today. Your honest clinical opinion is that nothing should be done at all for at least six months. What do you say?',
                      'Una clienta ha viajado dos horas y ha pagado la consulta, y está claro que quiere reservar hoy. Tu opinión clínica honesta es que no debería hacerse nada durante al menos seis meses. ¿Qué dices?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Offer the smallest reasonable thing, so that the journey and the fee were not wasted and she leaves with a plan.',
                         'Ofrecer la cosa razonable más pequeña, para que el viaje y la consulta no se hayan desperdiciado y se vaya con un plan.'),
                why: T('The smallest reasonable thing is still a treatment that is not warranted today, chosen to settle your own discomfort about her journey. She did not travel for a plan; she travelled for an answer, and a small treatment given for the wrong reason is the one she will remember when it changes nothing.',
                       'La cosa razonable más pequeña sigue siendo un tratamiento no justificado hoy, elegido para calmar tu propia incomodidad por su viaje. No viajó por un plan: viajó por una respuesta, y un tratamiento pequeño dado por el motivo equivocado es el que recordará cuando no cambie nada.') },
              { id: 'b', verdict: 'best',
                label: T('"I don\'t think you need anything today. Come back in six months with photographs and we\'ll see whether it\'s actually moving. I\'d rather you spent the fee on the journey than on something you don\'t need."',
                         '«No creo que hoy necesites nada. Vuelve en seis meses con fotos y vemos si de verdad está avanzando. Prefiero que el dinero se te haya ido en el viaje y no en algo que no necesitas».'),
                why: T('It declines the entire sale, gives her a date and a method for checking, and names the cost you are absorbing rather than the one she is. This is the version that produces referrals, and the only one here where the subtraction is unambiguous, because nothing at all was kept.',
                       'Rechaza la venta entera, le da una fecha y un método para comprobarlo, y nombra el coste que asumes tú en lugar del que asume ella. Es la versión que produce recomendaciones, y la única aquí en la que la sustracción es inequívoca, porque no se conservó absolutamente nada.') },
              { id: 'c', verdict: 'harmful',
                label: T('"There isn\'t much to do right now — but since you\'ve come all this way, let\'s at least get you started on a maintenance plan."',
                         '«Ahora mismo no hay mucho que hacer, pero ya que has venido hasta aquí, al menos te dejamos empezado un plan de mantenimiento».'),
                why: T('"Since you\'ve come all this way" makes her journey the clinical indication. She will accept, because refusing now would waste her own morning — and the moment she notices what happened, usually at the second appointment, the relationship ends without a complaint.',
                       '«Ya que has venido hasta aquí» convierte su viaje en la indicación clínica. Aceptará, porque negarse ahora sería tirar su propia mañana, y en cuanto se dé cuenta de lo que ha pasado, normalmente en la segunda cita, la relación termina sin queja alguna.') }
            ],
            principle: T('The subtraction that costs nothing is a technique wearing its clothes. The one that declines the whole sale is the one a client repeats to other people.',
                         'La sustracción que no cuesta nada es una técnica con su ropa. La que rechaza la venta entera es la que una clienta le repite a otras personas.'),
            changes: {
              axis: 'continuation',
              detail: T('She does not book today, and the six-month photograph appointment is in the diary before she leaves. What she repeats to other people is that the clinic sent her home — which is the one kind of recommendation that cannot be bought.',
                        'Hoy no reserva, y la cita de las fotos a seis meses queda en la agenda antes de que se vaya. Lo que repite a otras personas es que en la clínica la mandaron a casa, que es el único tipo de recomendación que no se puede comprar.')
            }
          } },
        { kind: 'check',
          prompt: T('Why does subtraction raise Credibility in the client-state ledger rather than lowering Willingness?',
                    '¿Por qué la sustracción sube la Credibilidad en el registro en lugar de bajar la Disposición?'),
          options: [
            { id: 'a', text: T('Because a smaller plan is cheaper, and cheaper is easier to accept.', 'Porque un plan menor es más barato, y lo barato se acepta más fácil.') },
            { id: 'b', text: T('Because declining something costs you, and a client can tell the difference between advice that costs the adviser and advice that does not.', 'Porque rechazar algo te cuesta, y una clienta distingue entre un consejo que le cuesta a quien lo da y uno que no.') },
            { id: 'c', text: T('Because it shortens the consultation.', 'Porque acorta la consulta.') }
          ],
          answer: 'b',
          why: T('Credibility is not built by knowing things — she assumes you know things. It is built by evidence that your recommendation is not simply your interest restated. Subtraction is the cheapest available evidence of that, and it is why the ledger moves on the sentence rather than on the plan.',
                 'La credibilidad no se construye sabiendo cosas: ella da por hecho que sabes. Se construye con pruebas de que tu recomendación no es simplemente tu interés reformulado. La sustracción es la prueba más barata disponible, y por eso el registro se mueve con la frase y no con el plan.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm5l3', n: 3, minutes: 11,
      treatments: [
                    {
                      name: T('Skin boosters — face', 'Bioestimulación con ácido hialurónico — rostro'),
                      price: T('€660 for two sessions', '660 € las dos sesiones'),
                      why: T(
                             'Boosters sit naturally alongside four or five other things, so this is the recommendation most likely to arrive as a list of everything that would genuinely help.',
                             'La bioestimulación convive de forma natural con otras cuatro o cinco cosas, así que es la recomendación que más fácilmente llega como lista de todo lo que ayudaría de verdad.'),
                      moment: T(
                                'You have identified five things that would each contribute something, and all five are true.',
                                'Has identificado cinco cosas que aportarían algo cada una, y las cinco son ciertas.'),
                      weak: {
                              line: T(
                                      '"There are about five things I\'d ideally want to do. Let me run through them and you can tell me which ones appeal."',
                                      '«Idealmente habría unas cinco cosas que querría hacer. Te las repaso y me dices cuáles te llaman.»'),
                              cost: T(
                                      'Honest, complete and it hands her the triage. Five items is heard as a shopping list, and her defence against a shopping list is to take none of it home today.',
                                      'Es honesto, completo y le pasa a ella el triaje. Cinco artículos se oyen como una lista de la compra, y su defensa contra una lista de la compra es no llevarse hoy nada.')
                            },
                      strong: {
                                line: T(
                                        '"Three things. Boosters at €660, one change to what you use at night, and a review in eight weeks. That\'s the whole plan."',
                                        '«Tres cosas. Bioestimulación, 660 €, un cambio en lo que usas por la noche y una revisión a las ocho semanas. Ese es el plan entero.»'),
                                gain: T(
                                        'Three items, one of which is free and one of which is an appointment. The plan is small enough to be repeated to her partner tonight without a piece of paper.',
                                        'Tres elementos, uno de ellos gratis y otro una cita. El plan es lo bastante pequeño como para repetírselo esta noche a su pareja sin un papel delante.')
                              }
                    },
                    {
                      name: T(
                              'Facial radiofrequency — course of six',
                              'Radiofrecuencia facial — bono de seis'),
                      price: T('€1,200 for six sessions', '1.200 € el bono de seis'),
                      why: T(
                             'A six-session course already contains six appointments, so any additional item makes the plan feel like a second job rather than a decision.',
                             'Un bono de seis ya contiene seis citas, así que cualquier elemento adicional hace que el plan parezca un segundo trabajo en lugar de una decisión.'),
                      moment: T(
                                'She has agreed to the course and you are about to add the home care, the supplement and the follow-on package.',
                                'Ha aceptado el bono y estás a punto de añadir el cuidado de casa, el suplemento y el paquete de continuación.'),
                      weak: {
                              line: T(
                                      '"Good. Then there\'s the home protocol, the supplement I\'d want you on, and we should talk about what happens after the six."',
                                      '«Bien. Luego está el protocolo de casa, el suplemento que querría que tomaras, y deberíamos hablar de qué pasa después de las seis.»'),
                              cost: T(
                                      'Turns a completed decision back into an open one. She had agreed to a thing, and now she is agreeing to a programme, and the difference is where cancellations come from.',
                                      'Convierte una decisión ya tomada en una decisión otra vez abierta. Había aceptado una cosa, y ahora está aceptando un programa, y de esa diferencia salen las cancelaciones.')
                            },
                      strong: {
                                line: T(
                                        '"Good. Six sessions, €1,200, and nothing else from me until session three. Then we\'ll talk about the second thing."',
                                        '«Bien. Seis sesiones, 1.200 €, y de mi parte nada más hasta la tercera sesión. Entonces hablamos de la segunda cosa.»'),
                                gain: T(
                                        'Puts the other items in the diary rather than in the plan. The rule of three applies across time as well as across a page, and a client who is not asked for a second decision today keeps the first one.',
                                        'Mete los demás elementos en la agenda y no en el plan. La regla de tres se aplica también en el tiempo, no solo en una página, y una clienta a la que hoy no se le pide una segunda decisión conserva la primera.')
                              }
                    },
                    {
                      name: T('Facial microneedling — course of three', 'Microagujas faciales — bono de tres'),
                      price: T('€540 for three sessions', '540 € el bono de tres'),
                      why: T(
                             'Microneedling appointments are short, so the plan tends to be written on a card and handed over, and a card is where five-item lists breed.',
                             'Las citas de microagujas son cortas, así que el plan se suele escribir en una tarjeta y entregarse, y una tarjeta es donde se reproducen las listas de cinco elementos.'),
                      moment: T(
                                'You are writing the card and there are seven things you could legitimately put on it.',
                                'Estás escribiendo la tarjeta y hay siete cosas que podrías poner con toda legitimidad.'),
                      weak: {
                              line: T(
                                      '"I\'ll write it all down for you so nothing gets forgotten — that way you\'ve got the full picture in front of you."',
                                      '«Te lo apunto todo para que no se olvide nada, y así tienes el cuadro completo delante.»'),
                              cost: T(
                                      'The full picture is the problem. A card with seven lines is read once, put in a drawer, and produces a client who has not started any of them by March.',
                                      'El cuadro completo es el problema. Una tarjeta con siete líneas se lee una vez, se guarda en un cajón y produce una clienta que en marzo no ha empezado ninguna.')
                            },
                      strong: {
                                line: T(
                                        '"I\'m writing down three. The other four exist and I\'m leaving them off on purpose, so you don\'t have to hold them."',
                                        '«Voy a apuntar tres. Las otras cuatro existen y las dejo fuera a propósito, para que no tengas que sostenerlas.»'),
                                gain: T(
                                        'Says out loud that the list was edited, which is what converts brevity from carelessness into judgement. She keeps the card because it is short enough to do.',
                                        'Dice en voz alta que la lista se ha editado, que es lo que convierte la brevedad de descuido en criterio. Se queda la tarjeta porque es lo bastante corta como para hacerla.')
                              }
                    }
                  ],
      title: T('The rule of three', 'La regla de tres'),
      objective: T('Present at most three elements, so that a real choice exists and no option is a decoy.',
                   'Presentar como máximo tres elementos, de modo que exista una elección real y ninguna opción sea un señuelo.'),
      provenance: {
        chapter: 11,
        principle: T('Three maximum: three things the brain digests, ten things overwhelm it.',
                     'Tres como máximo: tres cosas las digiere el cerebro, diez lo desbordan.'),
        phase: 'recommendation',
        trustStage: 'alignment',
        standard: 5,
        duty: 2,
        toolkit: 4
      },
      depth: {
        whyItGoesWrong: T(
            'Laying out alternatives is respectful and it insures you against the charge of pushing one thing, so a scrupulous consultant lays out plenty. Even-handedness is the virtue. Past three, though, alternatives stop functioning as a choice and start functioning as homework: she cannot hold them all at once, so she defers, and deferral gets logged back at reception as a money problem. Three is not a trick of the trade. It is how many she can still weigh against each other while sitting opposite you.',
            'Desplegar alternativas es respetuoso y te asegura contra la acusación de empujar una sola cosa, así que una asesora escrupulosa despliega unas cuantas. La virtud es la ecuanimidad. Pasadas tres, sin embargo, las alternativas dejan de funcionar como elección y empiezan a funcionar como deberes: ella no puede sostenerlas todas a la vez, así que lo aplaza, y el aplazamiento se registra luego en recepción como un problema de dinero. Tres no es un truco del oficio. Es cuántas puede seguir sopesando entre sí mientras está sentada enfrente de ti.'),
        sheIsThinking: T(
            'There are too many of these to hold. I shall take the leaflet away, which is how I say no politely.',
            'Son demasiadas para sostenerlas. Me llevo el folleto, que es mi manera educada de decir que no.'),
        ladder: {
          weak: {
            line:   T(
                '"There are five or six routes we could take — let me run through them."',
                '«Hay cinco o seis caminos que podríamos seguir. Te los repaso.»'),
            effect: T(
                'Converts a decision into homework. She departs holding a leaflet, and the decision is not taken at the kitchen table either.',
                'Convierte una decisión en deberes. Ella se marcha con un folleto, y la decisión tampoco se toma en la mesa de la cocina.')
          },
          average: {
            line:   T(
                '"There are several options, but I think two of them are the realistic ones."',
                '«Hay varias opciones, pero creo que dos de ellas son las realistas.»'),
            effect: T(
                'A reasonable narrowing performed in public. She is now aware of the discarded ones and spends part of the hour wondering about them.',
                'Es un estrechamiento razonable hecho en público. Ahora ella es consciente de las descartadas y se pasa parte de la hora dándoles vueltas.')
          },
          strong: {
            line:   T(
                '"Three things. Not more — three."',
                '«Tres cosas. No más: tres.»'),
            effect: T(
                'Chapter 11\'s flat rule, and the flatness is the instrument. It terminates the argument about scale so the hour can be spent on the three themselves.',
                'Es la regla seca del capítulo 11, y la sequedad es el instrumento. Termina la discusión sobre la escala para que la hora pueda dedicarse a las tres en sí.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Three the brain digests; ten it defends against', 'Tres los digiere el cerebro; diez los rechaza'),
          body: [
            T('The rule is simple and the reason is not cosmetic. Three elements can be held in mind, compared and chosen between. Ten cannot, so the client does the only thing available to her: she postpones. "It\'s a lot to take in" is almost never about her capacity — it is the receipt for an unfiltered list.',
              'La regla es simple y el motivo no es estético. Tres elementos se pueden retener, comparar y elegir. Diez no, así que la clienta hace lo único que le queda: aplazar. «Es mucha información» casi nunca trata de su capacidad: es el recibo de una lista sin filtrar.'),
            T('The second half of the rule matters more: none of the three may be a decoy. An option included so that another looks reasonable is a manipulation of the choice architecture, and it violates Respect Autonomy whether or not she detects it.',
              'La segunda mitad de la regla importa más: ninguna de las tres puede ser un señuelo. Una opción incluida para que otra parezca razonable es una manipulación de la arquitectura de elección, y viola el Respeto a la Autonomía tanto si ella lo detecta como si no.'),
            T('Future pacing belongs here too. "Imagine yourself in three weeks looking in the mirror" is not a closing device — it is how a client evaluates whether the pathway leads anywhere she wants to be. Used on a pathway you cannot deliver, it becomes an overclaim.',
              'La proyección al futuro pertenece también aquí. «Imagínate dentro de tres semanas mirándote al espejo» no es un recurso de cierre: es cómo una clienta evalúa si la vía lleva a algún sitio donde quiera estar. Usada sobre una vía que no puedes cumplir, se convierte en una sobrepromesa.')
          ] },
        { kind: 'signal',
          avatar: 'pilar',
          name: T('Phase 6, recorded — the recommendation as it was actually given',
                  'Fase 6, transcrita — la recomendación tal y como se dio'),
          client: T('"So: a course of three sessions here, plus the peel series, plus we\'d want you on the prescription retinoid, and honestly the LED after each one makes a real difference. There\'s also the option of doing the neck at the same time, and I\'d probably add a microneedling session in the middle. Does that all make sense?" — Client: "Gosh. It\'s a lot to take in."',
                    '«Entonces: un ciclo de tres sesiones aquí, más la serie de peelings, más nos interesaría ponerte el retinoide con receta, y la verdad es que el LED después de cada una marca mucha diferencia. También está la opción de hacer el cuello a la vez, y yo probablemente añadiría una sesión de microneedling a mitad. ¿Te cuadra todo?» — Clienta: «Uf. Es mucha información».'),
          prompt: T('Six items, and one sentence back. What has she just told you?',
                    'Seis partidas y una frase de vuelta. ¿Qué te acaba de decir?'),
          notice: [
            T('"It\'s a lot to take in" is almost never about her capacity. It is the receipt for an unfiltered list, and the politest available way to say that no decision is now possible.',
              '«Es mucha información» casi nunca trata de su capacidad. Es el recibo de una lista sin filtrar y la forma más educada disponible de decir que ahora ya no es posible decidir.'),
            T('Count the decisions she has just been handed: six items, each needing a yes or a no, none of them ranked, and no indication of which one answers the thing she actually named.',
              'Cuenta las decisiones que acaban de entregarle: seis partidas, cada una con un sí o un no, ninguna jerarquizada y sin ninguna indicación de cuál responde a lo que ella nombró de verdad.'),
            T('Nothing was declined. Every item was added — which means the list carries no evidence that a professional judgement was applied to it rather than a catalogue.',
              'No se rechazó nada. Todas las partidas se añadieron, lo que significa que la lista no lleva ninguna prueba de que se le aplicara un criterio profesional en lugar de un catálogo.'),
            T('What happens next is predictable: she will ask for it in writing, take it home, and choose using the only criterion that survives the journey — the price column.',
              'Lo que pasa después es previsible: pedirá que se lo pases por escrito, se lo llevará a casa y elegirá con el único criterio que sobrevive al trayecto: la columna de los precios.')
          ] },
        { kind: 'order',
          prompt: T('Order the three elements of a recommendation as the method presents them.',
                    'Ordena los tres elementos de una recomendación tal y como los presenta el método.'),
          items: [
            { id: 'p_decline', text: T('What you are not recommending, and why.', 'Lo que no recomiendas, y por qué.') },
            { id: 'p_core', text: T('The one thing that addresses what she actually named.', 'Lo único que responde a lo que ella nombró realmente.') },
            { id: 'p_alt', text: T('The genuine alternative, including doing nothing.', 'La alternativa real, incluida la de no hacer nada.') }
          ],
          correct: ['p_decline', 'p_core', 'p_alt'],
          why: T('Ending on the alternative is what makes the middle item a recommendation rather than a proposal. If the last thing she hears is a route that does not involve you, the route that does involve you was chosen rather than accepted.',
                 'Terminar por la alternativa es lo que convierte el elemento central en una recomendación y no en una propuesta. Si lo último que oye es una vía que no pasa por ti, la vía que sí pasa por ti fue elegida y no aceptada.') },
        { kind: 'choose',
          prompt: T('You have five clinically reasonable options. She named one concern. What do you present?',
                    'Tienes cinco opciones clínicamente razonables. Ella nombró una preocupación. ¿Qué presentas?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('All five, ranked, so she has the full picture and can decide with complete information.',
                       'Las cinco, ordenadas, para que tenga la foto completa y decida con información completa.'),
              why: T('Complete information is not the same as usable information. Five ranked options transfer the clinical decision to someone without clinical training, which reads as thoroughness and lands as abdication. She will pick the cheapest or none.',
                     'Información completa no es lo mismo que información utilizable. Cinco opciones ordenadas trasladan la decisión clínica a alguien sin formación clínica, lo que parece rigor y aterriza como abdicación. Elegirá la más barata o ninguna.') },
            { id: 'b', verdict: 'best',
              label: T('One recommendation, one honest alternative including doing nothing, and one sentence naming what you have set aside and why.',
                       'Una recomendación, una alternativa honesta que incluya no hacer nada, y una frase que nombre lo que has descartado y por qué.'),
              why: T('Three items, each with a different function: a decision, a real exit, and the evidence that a filter was applied. The other two options still exist and can be discussed if she asks — but they are your material, not her burden.',
                     'Tres elementos, cada uno con una función distinta: una decisión, una salida real y la prueba de que se aplicó un filtro. Las otras dos opciones siguen existiendo y pueden hablarse si ella pregunta, pero son tu material, no su carga.') },
            { id: 'c', verdict: 'harmful',
              label: T('Two: the one you recommend, and a deliberately weaker one so the recommendation stands out.',
                       'Dos: la que recomiendas y otra deliberadamente peor para que la recomendación destaque.'),
              why: T('This is the decoy, and it is the specific thing the rule forbids. It works often enough to be tempting, and it means the client did not choose — the architecture chose for her. Clients who later realise this do not complain; they simply do not return.',
                     'Este es el señuelo, y es exactamente lo que la regla prohíbe. Funciona lo bastante a menudo como para resultar tentador, y significa que la clienta no eligió: eligió por ella la arquitectura. Las clientas que lo descubren después no se quejan: simplemente no vuelven.') }
          ],
          principle: T('Ethical Duty 2 — Respect Autonomy. A choice with a decoy in it is not a choice, whether or not the client can name what happened.',
                       'Deber Ético 2 — Respetar la Autonomía. Una elección con un señuelo dentro no es una elección, sepa o no la clienta nombrar lo que ha pasado.'),
          retry: {
            note: T('The rule of three, on a client who has already written the list.',
                    'La regla de tres, con una clienta que ya ha escrito la lista.'),
            prompt: T('A different consultation. Teresa, 50, opens her phone before you have spoken: "I\'ve written down six things off your website that I think I need — can we do all of them?" Your assessment says two of the six would do nothing for the thing she came in about. What do you say?',
                      'Otra consulta. Teresa, 50, abre el móvil antes de que hables: «He apuntado seis cosas de vuestra web que creo que necesito, ¿podemos hacerlas todas?». Tu valoración dice que dos de las seis no harían nada por aquello a lo que ha venido. ¿Qué dices?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Let\'s go through them one by one and I\'ll tell you what I think of each."',
                         '«Vamos una por una y te digo qué pienso de cada una».'),
                why: T('Thorough, courteous, and it makes her list the agenda for the next twenty minutes. Every item gets ratified or softened in turn, which is six small negotiations and no recommendation. By the end she has heard your opinion on a catalogue she assembled, and has never heard the thing you would have said if she had arrived with nothing.',
                       'Riguroso, cortés, y convierte su lista en el orden del día de los próximos veinte minutos. Cada partida se ratifica o se suaviza por turnos: seis negociaciones pequeñas y ninguna recomendación. Al final ha oído tu opinión sobre un catálogo que montó ella, y nunca ha oído lo que le habrías dicho si hubiera llegado sin nada.') },
              { id: 'b', verdict: 'best',
                label: T('"Two of these I\'d take straight off — they won\'t do anything for what you\'ve described and I\'d rather not take your money for them. Of what\'s left there are three I\'d genuinely do, and here they are."',
                         '«Dos de estas las quito ya: no van a hacer nada por lo que me has descrito y prefiero no cobrártelas. De lo que queda hay tres que yo sí haría, y son estas».'),
                why: T('Decline first, then three. The declined pair is what makes the remaining three a judgement rather than an order taken: she can see a filter was applied, because she watched it remove something she was willing to pay for. Chapter 11 puts this sentence above every other in Recommend.',
                       'Primero lo que descartas, después las tres. La pareja descartada es lo que convierte las tres restantes en un criterio y no en un pedido: ella ve que se aplicó un filtro, porque lo ha visto quitar algo que estaba dispuesta a pagar. El capítulo 11 pone esta frase por encima de cualquier otra en Recomendar.') },
              { id: 'c', verdict: 'harmful',
                label: T('"We can do all six — I\'d just spread them across the year so it isn\'t all at once."',
                         '«Podemos hacer las seis; yo solo las repartiría a lo largo del año para que no sea todo de golpe».'),
                why: T('You agreed with the whole list and turned a clinical question into a scheduling one. Two items that will do nothing are now in her plan with dates against them, and she has been charged for a catalogue she wrote herself. She will not notice for eight months, and what she concludes then is not that the sequencing was wrong.',
                       'Has dado por buena toda la lista y has convertido una pregunta clínica en una de agenda. Dos partidas que no harán nada están ya en su plan con fecha puesta, y le has cobrado un catálogo que escribió ella misma. No lo notará en ocho meses, y lo que concluirá entonces no es que el reparto estuviera mal.') }
            ],
            principle: T('Three maximum, and the three are only credible if something was taken away in front of her. A list the client wrote is still a list.',
                         'Tres como máximo, y las tres solo resultan creíbles si algo se quitó delante de ella. Una lista que escribió la clienta sigue siendo una lista.'),
            changes: {
              axis: 'objection',
              detail: T('The money conversation arrives in a different shape. Instead of "I\'ll take it away and think about it", she asks "if I only did one of the three this year, which one?" — an objection you can answer in a sentence, because the filter is already on the table and she has started using it herself.',
                        'La conversación del dinero llega con otra forma. En lugar de «me lo llevo y lo pienso», pregunta: «si este año solo hiciera una de las tres, ¿cuál?». Es una objeción que puedes responder en una frase, porque el filtro ya está sobre la mesa y ella ha empezado a usarlo sola.')
            }
          } },
        { kind: 'translate',
          prompt: T('Rewrite each element so it connects to a feeling the client stated, not to a product category.',
                    'Reescribe cada elemento para que conecte con un sentimiento que la clienta enunció, no con una categoría de producto.'),
          items: [
            { id: 'f1',
              client: T('"A hydrating serum for the morning."', '«Un sérum hidratante para la mañana».'),
              model: T('"The serum in the morning — that\'s the part that gives you back the feeling of having looked after yourself before the day starts."',
                       '«El sérum por la mañana: es la parte que te devuelve la sensación de haberte cuidado antes de que empiece el día».'),
              note: T('The element does not change. What changes is whether she can locate herself inside it. She said she stopped taking care of herself; the sentence returns that.',
                      'El elemento no cambia. Lo que cambia es si ella puede localizarse dentro de él. Dijo que dejó de cuidarse; la frase le devuelve eso.') },
            { id: 'f2',
              client: T('"A weekly mask, twenty minutes."', '«Una mascarilla semanal, veinte minutos».'),
              model: T('"Twenty minutes once a week with the phone off. Not for your skin — for the decision that you\'re worth twenty minutes."',
                       '«Veinte minutos una vez por semana con el móvil apagado. No por tu piel: por la decisión de que mereces veinte minutos».'),
              note: T('This is the book\'s own version, and it is why a $79 purchase became a routine she kept. The mask is the same mask.',
                      'Esta es la versión del propio libro, y por eso una compra de 79 dólares se convirtió en una rutina que ella mantuvo. La mascarilla es la misma mascarilla.') },
            { id: 'f3',
              client: T('"A staged plan with a review at twelve weeks."', '«Un plan por etapas con revisión a las doce semanas».'),
              model: T('"We review at twelve weeks — with photographs, so it\'s not your memory against mine. That\'s the point where you decide whether anything else ever happens."',
                       '«Revisamos a las doce semanas, con fotos, para que no sea tu memoria contra la mía. Ese es el punto en el que decides si llega a pasar algo más».'),
              note: T('For a client whose prior experience was being told nothing while something went wrong, the review is the treatment. Name what it protects her from.',
                      'Para una clienta cuya experiencia previa fue que no le contaran nada mientras algo iba mal, la revisión es el tratamiento. Nombra de qué la protege.') }
          ] },
        { kind: 'check',
          prompt: T('Future pacing becomes an overclaim at exactly which point?',
                    '¿En qué punto exacto la proyección al futuro se convierte en sobrepromesa?'),
          options: [
            { id: 'a', text: T('As soon as you describe a future result at all.', 'En cuanto describes cualquier resultado futuro.') },
            { id: 'b', text: T('When the described future exceeds what the condition and the evidence support.', 'Cuando el futuro descrito excede lo que la condición y la evidencia respaldan.') },
            { id: 'c', text: T('When the client repeats it back to you.', 'Cuando la clienta te lo repite.') }
          ],
          answer: 'b',
          why: T('The line is evidential, not stylistic. "In three weeks you\'ll see your skin looking rested" is legitimate if that is what the protocol does; "you won\'t think about it any more" is not, because nothing you are selling controls that. Toolkit #4 field 6 is where the ceiling has to be written down, and the validator will reject a field 6 that states no limitation.',
                 'La línea es probatoria, no estilística. «En tres semanas verás tu piel descansada» es legítimo si eso es lo que hace el protocolo; «ya no volverás a pensar en ello» no lo es, porque nada de lo que vendes controla eso. El campo 6 del Toolkit #4 es donde hay que escribir el techo, y el validador rechaza un campo 6 que no enuncie ninguna limitación.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm5l4', n: 4, minutes: 12,
      treatments: [
                    {
                      name: T(
                              'Laser hair removal — full body course of six',
                              'Depilación láser — bono de seis, cuerpo completo'),
                      price: T('€1,490 for six sessions', '1.490 € el bono de seis'),
                      why: T(
                             'Hair removal is the treatment about which clients hold the firmest expectations and clinics make the loosest statements, so the limit has to be said before the benefit or it will be heard as a retraction later.',
                             'La depilación es el tratamiento sobre el que las clientas tienen las expectativas más firmes y las clínicas hacen las afirmaciones más laxas, así que el límite hay que decirlo antes que el beneficio o después se oirá como una marcha atrás.'),
                      moment: T(
                                'She asks whether six will be enough, and the honest answer is that for her hair and skin it may well not be.',
                                'Pregunta si con seis bastará, y la respuesta honesta es que para su pelo y su piel puede que no.'),
                      weak: {
                              line: T(
                                      '"Six is the standard course and most people are very happy at the end of it. We\'ll see how you respond as we go."',
                                      '«Seis es el bono estándar y la mayoría termina muy contenta. Ya iremos viendo cómo respondes.»'),
                              cost: T(
                                      'Technically careful and functionally a promise, because most people are very happy is what she will quote back at session six. The conversation you have avoided today happens in eight months with a receipt in her hand.',
                                      'Es técnicamente prudente y funcionalmente una promesa, porque «la mayoría termina muy contenta» es lo que te citará en la sexta sesión. La conversación que hoy has evitado ocurre dentro de ocho meses con un recibo en la mano.')
                            },
                      strong: {
                                line: T(
                                        '"For your hair, I wouldn\'t expect six to be the end of it. I\'d rather say that now than at session six — most people in your position want a shorter top-up course afterwards, and I\'d want you budgeting for it."',
                                        '«Para tu pelo, yo no esperaría que seis fuera el final. Prefiero decírtelo ahora y no en la sexta sesión: la gente en tu situación suele querer después un bono de repaso más corto, y querría que contaras con eso.»'),
                                gain: T(
                                        'Costs the sale of a clean six-session story and buys the only thing that produces a renewal, which is a client whose expectations were set by you rather than by the result.',
                                        'Cuesta la venta de un relato limpio de seis sesiones y compra lo único que produce una renovación: una clienta cuyas expectativas las has fijado tú y no el resultado.')
                              }
                    },
                    {
                      name: T('Melasma programme — six months', 'Programa de melasma — seis meses'),
                      price: T('€1,300 across six months', '1.300 € repartidos en seis meses'),
                      why: T(
                             'Pigmentation is the area where limits are hardest to state and most necessary, because the programme asks for six months of daily compliance from her.',
                             'La pigmentación es el terreno donde los límites son más difíciles de decir y más necesarios, porque el programa le pide seis meses de constancia diaria a ella.'),
                      moment: T(
                                'She is ready to commit, and the part she has not understood is how much of the work happens at home and in the sun.',
                                'Está lista para comprometerse, y la parte que no ha entendido es cuánto del trabajo ocurre en casa y bajo el sol.'),
                      weak: {
                              line: T(
                                      '"Wonderful. We\'ll start in October, and I\'ll give you the home routine to use alongside the sessions."',
                                      '«Estupendo. Empezamos en octubre y te doy la rutina de casa para llevarla junto con las sesiones.»'),
                              cost: T(
                                      'Accepts a commitment she has made on incomplete information and mentions the home routine as an accessory. In July she will conclude that €1,300 was wasted, and she will be describing a programme she was never properly enrolled in.',
                                      'Acepta un compromiso que ella ha asumido con información incompleta y menciona la rutina de casa como un accesorio. En julio concluirá que los 1.300 € se tiraron, y estará describiendo un programa en el que nunca la inscribieron del todo.')
                            },
                      strong: {
                                line: T(
                                        '"Before you say yes: about half of this is what you do between the sessions, every day, including the weekend in Cádiz. If that isn\'t realistic for you this year, tell me now and we\'ll do something smaller."',
                                        '«Antes de que digas que sí: la mitad de esto es lo que hagas entre sesiones, todos los días, incluido el fin de semana en Cádiz. Si eso no te resulta realista este año, dímelo ahora y hacemos algo más pequeño.»'),
                                gain: T(
                                        'Offers her the exit before taking the money, which is the only way the six months become hers. The women who stay after that sentence are the ones who finish, and the ones who leave were going to cost you a refund conversation in July.',
                                        'Le ofrece la salida antes de cobrar, que es la única forma de que los seis meses sean suyos. Las que se quedan después de esa frase son las que terminan, y las que se van te iban a costar una conversación de devolución en julio.')
                              }
                    }
                  ],
      conversation: {
                      setting: T(
                                 'Consultation, full-body laser hair removal, course of six, €1,490. Minute twelve. She has her card out.',
                                 'Consulta, depilación láser de cuerpo completo, bono de seis, 1.490 €. Minuto doce. Ya tiene la tarjeta fuera.'),
                      before: [
                                {
                                  who: 'client',
                                  line: T(
                                          '"So after the six I\'m done, right? That\'s what the girl on the phone said."',
                                          '«Después de las seis ya está, ¿no? Es lo que me dijo la chica por teléfono.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Six is the standard course and it takes most people a very long way. We\'d review you at the end and see where you are."',
                                          '«Seis es el bono estándar y a la mayoría la lleva muy lejos. Al terminar te revisamos y vemos dónde estás.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"But six should do it."', '«Pero con seis debería bastar.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"It\'s the course we recommend, yes. Everybody responds slightly differently, so I never like to be absolute about numbers."',
                                          '«Es el bono que recomendamos, sí. Cada persona responde algo distinto, así que nunca me gusta ser tajante con los números.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"Fine. Put me down for the six."', '«Vale. Apúntame las seis.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Lovely. I\'ll book the first one for the eleventh and we\'ll space them six weeks apart through the winter."',
                                          '«Genial. Te pongo la primera el día once y las separamos seis semanas durante el invierno.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"Perfect."', '«Perfecto.»')
                                }
                              ],
                      after: [
                               {
                                 who: 'client',
                                 line: T(
                                         '"So after the six I\'m done, right? That\'s what the girl on the phone said."',
                                         '«Después de las seis ya está, ¿no? Es lo que me dijo la chica por teléfono.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"No — and I\'d rather have this conversation now than in September. For your hair, six is where we get to look at it properly, not where we stop."',
                                         '«No, y prefiero tener esta conversación ahora y no en septiembre. Para tu pelo, seis es donde podremos mirarlo bien, no donde paramos.»')
                               },
                               {
                                 who: 'client',
                                 line: T('"That\'s not what I was told."', '«No es lo que me dijeron.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"I know, and I\'m sorry. Six sessions is €1,490. People with your hair usually want a shorter top-up course afterwards, so I\'d budget for that rather than be surprised by it."',
                                         '«Lo sé, y lo siento. Seis sesiones son 1.490 €. La gente con tu pelo suele querer luego un bono de repaso más corto, así que yo contaría con eso en vez de llevarme la sorpresa.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"Why are you telling me this before I\'ve paid?"',
                                         '«¿Por qué me dices esto antes de que haya pagado?»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Because you\'d find out anyway, and I\'d rather you found out from me while you can still say no."',
                                         '«Porque te ibas a enterar igual, y prefiero que te enteres por mí mientras todavía puedes decir que no.»')
                               },
                               {
                                 who: 'client',
                                 line: T('"…Alright. Book the six."', '«…Vale. Apúntame las seis.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Done. And at session six I\'ll tell you honestly whether the top-up is worth it, including if the answer is that it isn\'t."',
                                         '«Hecho. Y en la sexta sesión te diré con sinceridad si el repaso merece la pena, incluso si la respuesta es que no.»')
                               }
                             ],
                      whatChanged: T(
                                     'The first practitioner never lied. She said six was the standard course, that everybody responds differently, and that she does not like to be absolute — three careful hedges that are individually true and collectively function as a yes. The client heard confirmation of what reception had told her, paid, and will arrive at session six believing something she was never actually promised. The second version contradicted the clinic\'s own front desk before taking any money, put the likely extra cost on the table, and gave her a reason to decline. The same €1,490 was taken. What differs is who owns the expectation, and therefore who is holding the conversation in September.',
                                     'La primera profesional no mintió. Dijo que seis es el bono estándar, que cada persona responde distinto y que no le gusta ser tajante: tres cautelas que por separado son ciertas y que juntas funcionan como un sí. La clienta oyó la confirmación de lo que le había dicho recepción, pagó y llegará a la sexta sesión creyendo algo que nunca le prometieron. La segunda versión contradijo a la propia recepción de la clínica antes de cobrar nada, puso sobre la mesa el coste extra probable y le dio un motivo para decir que no. Se cobraron los mismos 1.490 €. Lo que cambia es de quién es la expectativa y, por tanto, quién sostiene la conversación de septiembre.'),
                      cost: T(
                              'Nothing today — both versions take the €1,490. The first one spends it: a refund argument in September, a review she does not attend, and a client who tells people the clinic said six would be enough.',
                              'Hoy nada: las dos versiones cobran los 1.490 €. La primera los gasta: una discusión por la devolución en septiembre, una revisión a la que no acude y una clienta que va contando que en la clínica le dijeron que con seis bastaba.')
                    },
      title: T('Honest limits before benefits', 'Límites honestos antes que beneficios'),
      objective: T('State the ceiling before the promise, and observe what it does to willingness.',
                   'Enunciar el techo antes de la promesa y observar qué le hace a la disposición.'),
      provenance: {
        chapter: 11,
        principle: T('I am going to tell you what your skin needs and what it does not, because you deserve someone who is not trying to sell you everything.',
                     'Voy a decirte lo que tu piel necesita y lo que no, porque mereces a alguien que no intente venderte de todo.'),
        phase: 'education',
        trustStage: 'credibility',
        standard: 5,
        duty: 4,
        toolkit: 4
      },
      depth: {
        whyItGoesWrong: T(
            'Ceilings get held back until the end because nobody wants to puncture a woman who has just allowed herself to hope; realistic expectations can be covered once the route is agreed and there is somewhere to put them. Protecting her hope is the virtue. But a ceiling disclosed after a yes sounds like a retraction, whereas a ceiling disclosed before it is the most powerful credibility instrument on the trolley — she believes the promise precisely because she watched you cap it.',
            'Los techos se guardan para el final porque nadie quiere pinchar a una mujer que acaba de permitirse la esperanza; las expectativas realistas ya se cubrirán cuando la ruta esté acordada y haya dónde colocarlas. La virtud es protegerle la esperanza. Pero un techo revelado después de un sí suena a rectificación, mientras que un techo revelado antes es el instrumento de credibilidad más potente del carro: ella se cree la promesa precisamente porque te ha visto ponerle un límite.'),
        sheIsThinking: T(
            'Everything I am being told is the good version. I am waiting to discover what is not being said.',
            'Todo lo que me están contando es la versión buena. Estoy esperando a descubrir lo que no se dice.'),
        ladder: {
          weak: {
            line:   T(
                '"You\'re going to be amazed — the results on this are fantastic."',
                '«Te vas a quedar impresionada, los resultados de esto son fantásticos.»'),
            effect: T(
                'A promise with no ballast. She discounts it, and she discounts the accurate portions along with it.',
                'Es una promesa sin lastre. Ella la descuenta, y descuenta con ella las porciones que sí eran exactas.')
          },
          average: {
            line:   T(
                '"Results do vary from person to person, of course."',
                '«Los resultados varían de una persona a otra, claro.»'),
            effect: T(
                'An indemnity clause, not a ceiling. It shields you and communicates nothing whatsoever about the face in front of you.',
                'Es una cláusula de indemnidad, no un techo. Te blinda a ti y no comunica absolutamente nada sobre el rostro que tienes delante.')
          },
          strong: {
            line:   T(
                '"This will not lift the jawline. What it will do is bring the brightness back, and in three weeks you\'ll see it in the morning."',
                '«Esto no va a levantar el óvalo facial. Lo que sí va a hacer es devolver la luminosidad, y en tres semanas lo vas a ver por la mañana.»'),
            effect: T(
                'A named ceiling standing in front of a named promise. The promise is now credible, because the ceiling demonstrated that you were prepared to refuse something.',
                'Es un techo con nombre plantado delante de una promesa con nombre. Ahora la promesa es creíble, porque el techo ha demostrado que estabas dispuesta a negar algo.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The counter-intuitive order', 'El orden contraintuitivo'),
          body: [
            T('Every practitioner knows the limitation. The question is when it is said. Said after the benefits, it sounds like a disclaimer and she discounts it. Said before them, it is the thing that makes the benefits believable, because a person who volunteers the ceiling is not selling you the room.',
              'Todo profesional conoce la limitación. La pregunta es cuándo se dice. Dicha después de los beneficios, suena a letra pequeña y ella la descuenta. Dicha antes, es lo que hace creíbles los beneficios, porque quien ofrece el techo por su cuenta no te está vendiendo la habitación entera.'),
            T('This is Ethical Duty 4 — Do Not Overclaim — and it is also the most reliable willingness instrument in the method. In the simulator you can watch it: the honest limitation raises Credibility and Reliability at the same time, and the overclaim raises neither while creating a Phase 7 objection you will have to answer.',
              'Este es el Deber Ético 4 —No Sobreprometer— y es también el instrumento de disposición más fiable del método. En el simulador puedes verlo: la limitación honesta sube a la vez la Credibilidad y la Fiabilidad, y la sobrepromesa no sube ninguna de las dos mientras crea una objeción de Fase 7 que tendrás que responder.')
          ] },
        { kind: 'timedPause',
          prompt: T('You have just said: "This is temporary. It will not remove the lines at rest, and in three to four months it will be gone." Say nothing else.',
                    'Acabas de decir: «Esto es temporal. No eliminará las líneas en reposo y en tres o cuatro meses habrá desaparecido». No digas nada más.'),
          first: T('"...Right. Okay."', '«...Ya. Vale».'),
          seconds: 4,
          second: T('"...Actually that\'s the first time anyone\'s told me it wears off. The other place made it sound like a one-off. Can we talk about what happens when it does wear off?"',
                    '«...La verdad es que es la primera vez que alguien me dice que se pasa. En el otro sitio parecía algo de una vez. ¿Podemos hablar de qué pasa cuando se pase?»'),
          why: T('The limitation did not lose the sale — it produced the first question she has asked about the long term, which is the question a client asks when she is planning to be your client. Note also what it revealed about the competitor, unprompted and permanently.',
                 'La limitación no perdió la venta: produjo la primera pregunta que hace sobre el largo plazo, que es la pregunta que hace una clienta que piensa serlo tuya. Fíjate también en lo que reveló sobre el competidor, sin que se lo pidieran y de forma permanente.') },
        { kind: 'spot',
          prompt: T('Find the sentence that will have to be defended in Phase 7.',
                    'Encuentra la frase que habrá que defender en la Fase 7.'),
          lines: [
            { who: 'you', text: T('"The protocol works on the pigment that\'s in the upper layers."', '«El protocolo actúa sobre el pigmento de las capas superiores».') },
            { who: 'client', text: T('"And the deeper part?"', '«¿Y la parte más profunda?»') },
            { who: 'you', text: T('"That responds more slowly, and some of it we manage rather than remove."', '«Esa responde más despacio, y una parte la gestionamos en vez de eliminarla».') },
            { who: 'client', text: T('"But it will go, right? Eventually."', '«Pero se irá, ¿no? Al final».') },
            { who: 'you', text: T('"With the full protocol and good sun protection, you should get there."', '«Con el protocolo completo y buena protección solar, deberías llegar».') }
          ],
          answerIndex: 4,
          why: T('The first three lines are exemplary — accurate, unhurried, honest about management versus removal. Line 5 undoes all of it under gentle pressure, and "you should get there" is a promise about an outcome the condition does not support. The correct line is the uncomfortable one: "No. Not entirely. It\'s managed, and the management is permanent. If that\'s not what you want, this isn\'t the right treatment."',
                 'Las tres primeras líneas son ejemplares: precisas, sin prisa, honestas sobre gestionar frente a eliminar. La línea 5 lo deshace todo bajo una presión suave, y «deberías llegar» es una promesa sobre un resultado que la condición no respalda. La línea correcta es la incómoda: «No. Del todo no. Se gestiona, y la gestión es permanente. Si eso no es lo que quieres, este no es el tratamiento adecuado».'),
          principle: T('Ethical Duty 4 — Do Not Overclaim. The overclaim is almost never in the presentation; it is in the answer to the fourth question.',
                       'Deber Ético 4 — No Sobreprometer. La sobrepromesa casi nunca está en la presentación: está en la respuesta a la cuarta pregunta.') },
        { kind: 'compare',
          prompt: T('Two ways to state the same ceiling. Which one is Phase 5 doing its job?',
                    'Dos formas de enunciar el mismo techo. ¿En cuál la Fase 5 hace su trabajo?'),
          a: { label: T('Version A', 'Versión A'),
               text: T('"Results do vary from person to person, and of course we can\'t guarantee anything — but most of my clients are very happy."',
                       '«Los resultados varían de una persona a otra y por supuesto no podemos garantizar nada, pero la mayoría de mis clientas quedan muy contentas».') },
          b: { label: T('Version B', 'Versión B'),
               text: T('"Here is what it will not do: it will not remove the lines at rest, and it will not last beyond about four months. If either of those is the thing you actually want, tell me now and we\'ll talk about something else."',
                       '«Esto es lo que no hará: no eliminará las líneas en reposo y no durará más de unos cuatro meses. Si alguna de esas dos cosas es lo que de verdad quieres, dímelo ahora y hablamos de otra cosa».') },
          answer: 'b',
          why: T('A is a legal disclaimer with a compliment attached — it transfers all risk to the client while sounding reassuring. B names two specific ceilings and then invites her to disqualify the treatment, which is the behaviour that produces trust rather than the words that describe it.',
                 'A es una exención legal con un cumplido pegado: traslada todo el riesgo a la clienta mientras suena tranquilizadora. B nombra dos techos concretos y luego la invita a descartar el tratamiento, que es la conducta que produce confianza, no las palabras que la describen.') },
        { kind: 'choose',
          prompt: T('You are about to present a treatment you believe in. The limitation is real: it will not touch the lines at rest, and it wears off in about four months. Where does that sentence go?',
                    'Vas a presentar un tratamiento en el que crees. La limitación es real: no tocará las líneas en reposo y se pasa en unos cuatro meses. ¿Dónde va esa frase?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('After the benefits, as part of a complete picture — you want her to hear what it does before what it does not.',
                       'Después de los beneficios, como parte de la foto completa: quieres que oiga lo que hace antes que lo que no hace.'),
              why: T('Placed there it functions as a disclaimer, and disclaimers are discounted as a class. She has already formed the picture; what follows it is heard as the small print a professional is obliged to say, and the discount she applies is the reason the same sentence reappears in Phase 7 as a complaint.',
                     'Colocada ahí funciona como una exención, y las exenciones se descuentan por norma. Ella ya se ha hecho la foto; lo que viene después se oye como la letra pequeña que un profesional está obligado a decir, y ese descuento es la razón de que la misma frase reaparezca en la Fase 7 como una queja.') },
            { id: 'b', verdict: 'best',
              label: T('Before them: "Here is what it will not do — and if either of those is the thing you actually want, tell me now and we\'ll talk about something else."',
                       'Antes: «Esto es lo que no va a hacer, y si alguna de esas dos cosas es lo que de verdad quieres, dímelo ahora y hablamos de otra cosa».'),
              why: T('Said first, the ceiling is what makes the benefits believable, because a person who volunteers the limit is not selling you the room. It also invites her to disqualify the treatment, which is the behaviour that produces trust rather than the words that describe it.',
                     'Dicho primero, el techo es lo que hace creíbles los beneficios, porque quien ofrece el límite por su cuenta no te está vendiendo la habitación entera. Además la invita a descartar el tratamiento, que es la conducta que produce confianza, no las palabras que la describen.') },
            { id: 'c', verdict: 'harmful',
              label: T('Neither — mention that results vary and nothing can be guaranteed, which covers both honestly and without alarming her.',
                       'En ningún sitio: mencionar que los resultados varían y que no se puede garantizar nada, lo que cubre las dos cosas con honestidad y sin alarmarla.'),
              why: T('A general variability statement is a legal position, not a limitation. It transfers every risk to her while naming none of them, and it is indistinguishable from what she has heard everywhere else. Two specific ceilings are worth more than any amount of "results vary".',
                     'Una declaración general de variabilidad es una posición jurídica, no una limitación. Le traslada todos los riesgos sin nombrar ninguno, y es indistinguible de lo que ha oído en todas partes. Dos techos concretos valen más que cualquier cantidad de «los resultados varían».') }
          ],
          principle: T('Ethical Duty 4 — Do Not Overclaim. The limitation stated first is an instrument; stated last it is small print, and she will treat it as such.',
                       'Deber Ético 4 — No Sobreprometer. La limitación dicha primero es un instrumento; dicha al final es letra pequeña, y ella la tratará como tal.'),
          retry: {
            note: T('The ceiling stated properly — and then the fourth question.',
                    'El techo bien enunciado, y luego la cuarta pregunta.'),
            prompt: T('You stated both limits before the benefits and she accepted them. Ten minutes later, quietly: "But if I keep having it, eventually it stays, doesn\'t it? Someone told me it retrains the muscle." What do you say?',
                      'Enunciaste los dos límites antes que los beneficios y ella los aceptó. Diez minutos después, en voz baja: «Pero si me lo sigo haciendo, al final se queda, ¿no? Alguien me dijo que reeduca el músculo». ¿Qué respondes?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"There is something in that — with repeated treatment people often find they need slightly less over time."',
                         '«Algo de eso hay: con tratamientos repetidos mucha gente acaba necesitando un poco menos con el tiempo».'),
                why: T('The hedge is where the overclaim lives. It is true enough to say, and it answers "does it eventually stay" with "yes, a bit", which is what she will carry home. The sentence she repeats to her partner will not contain the word "slightly".',
                       'La reserva es donde vive la sobrepromesa. Es lo bastante cierta como para decirla y responde a «¿al final se queda?» con «sí, un poco», que es lo que se llevará a casa. La frase que le repita a su pareja no incluirá la palabra «poco».') },
              { id: 'b', verdict: 'best',
                label: T('"No. It doesn\'t stay. Some people need a little less over time and some don\'t, and I can\'t tell you in advance which you\'ll be. If permanence is what you\'re actually after, this isn\'t the treatment."',
                         '«No. No se queda. Algunas personas necesitan algo menos con el tiempo y otras no, y no puedo decirte de antemano cuál serás tú. Si lo que buscas de verdad es permanencia, este no es el tratamiento».'),
                why: T('The answer is "no" first, then the honest range, then the offer to disqualify — in that order, because the order is what stops a nuance being heard as a yes. The overclaim is almost never in the presentation; it is in the answer to the fourth question, under gentle pressure, from somebody you like.',
                       'Primero el «no», luego el rango honesto, luego la oferta de descartar; en ese orden, porque el orden es lo que impide que un matiz se oiga como un sí. La sobrepromesa casi nunca está en la presentación: está en la respuesta a la cuarta pregunta, bajo una presión suave, de alguien que te cae bien.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Whoever told you that wasn\'t lying — with the right protocol and good maintenance, you\'d certainly get there."',
                         '«Quien te dijera eso no mentía: con el protocolo adecuado y un buen mantenimiento, seguro que llegas».'),
                why: T('A promise about an outcome the treatment does not produce, made to protect a third party\'s claim and her hope at the same time. It will be believed, it will be planned around, and it will return as the reason she does not come back — by which point the person who made the promise is you.',
                       'Una promesa sobre un resultado que el tratamiento no produce, hecha para proteger a la vez la afirmación de un tercero y la esperanza de ella. Se la creerá, planificará en torno a ella y volverá como el motivo por el que no regresa, y a esas alturas quien hizo la promesa eres tú.') }
            ],
            principle: T('The presentation is rarely where practitioners overclaim. It is the fourth question, asked quietly, by somebody you like.',
                         'La presentación rara vez es donde los profesionales sobreprometen. Es la cuarta pregunta, hecha en voz baja, por alguien que te cae bien.'),
            changes: {
              axis: 'trust',
              detail: T('Trust Stage 6 (Reliability) survives month four. When the effect goes exactly as you said it would, what she remembers is that you told her in advance — so she rings you rather than the clinic that promised her it would stay.',
                        'La Etapa de Confianza 6 (Fiabilidad) sobrevive al cuarto mes. Cuando el efecto desaparece exactamente como dijiste, lo que ella recuerda es que se lo avisaste, así que te llama a ti y no a la clínica que le prometió que se quedaría.')
            }
          } },
        { kind: 'reflect',
          prompt: T('Write the honest limitation of the treatment you recommend most often — in the words you would actually say, before the benefits.',
                    'Escribe la limitación honesta del tratamiento que más recomiendas, con las palabras que dirías de verdad, antes de los beneficios.'),
          placeholder: T('If it reads like small print, it is not the limitation — it is a disclaimer.',
                         'Si suena a letra pequeña, no es la limitación: es una exención.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm5l5', n: 5, minutes: 11,
      treatments: [
                    {
                      name: T('PRP — facial, course of three', 'PRP — facial, tres sesiones'),
                      price: T('€810 for three sessions', '810 € las tres sesiones'),
                      why: T(
                             'PRP has no dramatic mechanism to sell, so the plan either carries her own sentences or it carries nothing.',
                             'El PRP no tiene un mecanismo espectacular que vender, así que el plan o lleva las frases de ella o no lleva nada.'),
                      moment: T(
                                'She told you forty minutes ago that she used to do her face at night with the radio on, and that she stopped when her mother got ill.',
                                'Hace cuarenta minutos te ha contado que antes se hacía la cara por la noche con la radio puesta, y que lo dejó cuando su madre enfermó.'),
                      weak: {
                              line: T(
                                      '"Three sessions of PRP at €810, a month apart, and it works gradually — which suits what you\'re after."',
                                      '«Tres sesiones de PRP, 810 €, separadas un mes, y actúa de forma gradual, que encaja con lo que buscas.»'),
                              cost: T(
                                      'Accurate and characterless. What you are after is your phrase, not hers, and a plan in your phrases is one she cannot recognise herself in when she reads it on the bus home.',
                                      'Exacto y sin carácter. «Lo que buscas» es tu frase, no la suya, y un plan escrito con tus frases es uno en el que ella no se reconoce cuando lo lee en el autobús de vuelta.')
                            },
                      strong: {
                                line: T(
                                        '"Three sessions, €810, one a month. And an hour in this room each time with nobody needing you — which, from what you told me, is closer to the radio than to the plasma."',
                                        '«Tres sesiones, 810 €, una al mes. Y cada vez una hora en esta sala sin que nadie te necesite, que, por lo que me has contado, se parece más a la radio que al plasma.»'),
                                gain: T(
                                        'Puts the appointment itself inside her own sentence. She is not buying three sessions; she is buying back a thing she stopped doing, and she can say that out loud to her sister.',
                                        'Mete la propia cita dentro de la frase de ella. No compra tres sesiones: recompra algo que dejó de hacer, y eso sí puede decírselo en voz alta a su hermana.')
                              }
                    },
                    {
                      name: T('Facial mesotherapy — course of four', 'Mesoterapia facial — bono de cuatro'),
                      price: T('€480 for four sessions', '480 € el bono de cuatro'),
                      why: T(
                             'Mesotherapy is the treatment most often described in ingredient lists, and an ingredient list is the purest form of speaking in your own vocabulary rather than hers.',
                             'La mesoterapia es el tratamiento que más a menudo se describe con listas de ingredientes, y una lista de ingredientes es la forma más pura de hablar con tu vocabulario y no con el suyo.'),
                      moment: T(
                                'She said she wants to stop looking like she is coping, and you are about to explain the cocktail.',
                                'Ha dicho que quiere dejar de tener cara de estar aguantando, y estás a punto de explicarle el cóctel.'),
                      weak: {
                              line: T(
                                      '"It\'s a cocktail of hyaluronic acid, vitamins and amino acids, delivered very superficially — four sessions at €480."',
                                      '«Es un cóctel de ácido hialurónico, vitaminas y aminoácidos, aplicado muy superficialmente. Cuatro sesiones, 480 €.»'),
                              cost: T(
                                      'Everything in that sentence is true and none of it is hers. She nods at a formulation, and the word coping — which is the whole reason she is here — has been left in the previous half of the appointment.',
                                      'Todo lo que hay en esa frase es cierto y nada es suyo. Asiente ante una formulación, y la palabra «aguantando» —que es la razón entera por la que está aquí— se ha quedado en la mitad anterior de la cita.')
                            },
                      strong: {
                                line: T(
                                        '"Four sessions, €480. What it does is take the coping out of your face, and I want to be clear that it doesn\'t take it out of your week."',
                                        '«Cuatro sesiones, 480 €. Lo que hace es quitarte el aguante de la cara, y quiero dejar claro que no te lo quita de la semana.»'),
                                gain: T(
                                        'Uses her word and draws the line around what it can reach, in the same breath. She hears herself quoted and she hears an honest boundary, and the two together are what she repeats at home.',
                                        'Usa su palabra y traza el límite de hasta dónde llega, en el mismo aliento. Se oye citada y oye un límite honesto, y esas dos cosas juntas son lo que repite en casa.')
                              }
                    }
                  ],
      title: T('Recommending in her words', 'Recomendar con sus palabras'),
      objective: T('Define success using the client\'s own sentence rather than a clinical endpoint, and include the stopping rule.',
                   'Definir el éxito con la frase de la clienta en lugar de con un objetivo clínico, e incluir la regla de parada.'),
      provenance: {
        chapter: [5, 11],
        principle: T('Connect every element to a feeling she gave you: not a moisture serum, but the serum that brings back what she felt when she was taking care of herself.',
                     'Conecta cada elemento con un sentimiento que ella te dio: no un sérum hidratante, sino el sérum que devuelve lo que sentía cuando se cuidaba.'),
        phase: 'recommendation',
        trustStage: 'alignment',
        standard: 4,
        duty: 2,
        toolkit: 4
      },
      depth: {
        whyItGoesWrong: T(
            'Success gets defined in clinical units because a clinical endpoint is measurable, defensible and identical for everyone who walks through the door: hydration restored, texture improved, volume corrected. Rigour is the virtue. But no endpoint of that kind can be recognised by the woman paying for it — nobody stands at a bathroom mirror at seven in the morning and observes hydration. Fastening each element to something she said also supplies a stopping rule, because a sentence can be satisfied and a scale cannot.',
            'El éxito se define en unidades clínicas porque un objetivo clínico es medible, defendible e idéntico para todas las que cruzan la puerta: hidratación restaurada, textura mejorada, volumen corregido. La virtud es el rigor. Pero ningún objetivo de ese tipo lo puede reconocer la mujer que lo paga: nadie se planta ante el espejo del baño a las siete de la mañana y observa hidratación. Además, abrochar cada elemento a algo que ella dijo suministra una regla de parada, porque una frase se puede cumplir y una escala no.'),
        sheIsThinking: T(
            'I have no idea what that means. In three months I shall find out whether it was what I wanted.',
            'No tengo ni idea de qué significa eso. Dentro de tres meses averiguaré si era lo que yo quería.'),
        ladder: {
          weak: {
            line:   T(
                '"By the end of the course we should see a marked improvement in texture and hydration."',
                '«Al final del programa deberíamos ver una mejora notable en textura e hidratación.»'),
            effect: T(
                'Accurate, and unrecognisable to the woman paying. She cannot detect arrival, so she cannot detect when it would be reasonable to stop.',
                'Es exacto y para la mujer que paga es irreconocible. No puede detectar la llegada, así que tampoco puede detectar cuándo sería razonable parar.')
          },
          average: {
            line:   T(
                '"You should be looking a lot fresher by the summer."',
                '«Para el verano deberías verte mucho más fresca.»'),
            effect: T(
                'Warmer and hazier. Fresher belongs to your vocabulary, so she ends up grading the outcome against your expectation instead of her own.',
                'Es más cálido y más brumoso. Fresca pertenece a tu vocabulario, así que ella acaba calificando el resultado contra tu expectativa en lugar de contra la suya.')
          },
          strong: {
            line:   T(
                '"You told me you want the mirror to show who you really are. That\'s what we\'re aiming at — and when it does, we stop."',
                '«Me dijiste que quieres que el espejo muestre quién eres de verdad. A eso apuntamos, y cuando lo haga, paramos.»'),
            effect: T(
                'Uses her own clause as the target, which is the only target she can audit herself. It also states where the route ends, which is what prevents it becoming a standing order.',
                'Usa su propia frase como diana, que es la única diana que ella puede auditar por sí misma. Además enuncia dónde termina la ruta, que es lo que impide que se convierta en una domiciliación.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Whose success is being measured?', '¿El éxito de quién se está midiendo?'),
          body: [
            T('A clinical endpoint and a client\'s definition of success are rarely the same sentence. Pigment score, unit count and photographic grading are yours. "Nobody asks me what I\'ve had done" and "I stop noticing it every morning" are hers, and hers is the one that decides whether she books again.',
              'Un objetivo clínico y la definición de éxito de una clienta rara vez son la misma frase. La puntuación de pigmento, el recuento de unidades y la graduación fotográfica son tuyos. «Que nadie me pregunte qué me he hecho» y «dejar de notarlo cada mañana» son suyos, y el suyo es el que decide si vuelve a reservar.'),
            T('Toolkit #4 enforces this: field 1 must trace back to the client language you captured in Toolkit #3 field 6. Paraphrase there and the validator will tell you the goal is your summary rather than her sentence.',
              'El Toolkit #4 lo impone: el campo 1 debe trazarse hasta el lenguaje de la clienta que capturaste en el campo 6 del Toolkit #3. Si ahí parafraseas, el validador te dirá que el objetivo es tu resumen y no su frase.'),
            T('The recommendation should also contain a stopping rule — the point at which doing nothing more is the correct clinical answer. A plan with no stopping rule is a subscription, and clients recognise subscriptions.',
              'La recomendación debe contener además una regla de parada: el punto en el que no hacer nada más es la respuesta clínica correcta. Un plan sin regla de parada es una suscripción, y las clientas reconocen las suscripciones.')
          ] },
        { kind: 'signal',
          avatar: 'teresa',
          name: T('Two definitions of the same success — Isabel, 50, at her review',
                  'Dos definiciones del mismo éxito — Isabel, 50, en su revisión'),
          client: T('Your record: pigment score improved by two grades, photographs at eight weeks showing clear reduction. Isabel, looking at the same photographs: "Yes… I can see it. I suppose I thought I\'d stop looking for it in the morning, and I still do."',
                    'Tu registro: puntuación de pigmento mejorada dos grados, fotos a las ocho semanas con una reducción clara. Isabel, mirando esas mismas fotos: «Sí… se ve. Supongo que pensaba que dejaría de buscármelo por las mañanas, y sigo haciéndolo».'),
          prompt: T('The treatment worked. What failed?',
                    'El tratamiento funcionó. ¿Qué falló?'),
          notice: [
            T('Both statements are true, and they are measuring different things. The clinical endpoint was met; the client\'s endpoint was never written down anywhere.',
              'Las dos afirmaciones son ciertas y miden cosas distintas. El objetivo clínico se cumplió; el objetivo de la clienta no se escribió en ninguna parte.'),
            T('Her definition was available at the start. "I just want to stop noticing it every morning" is a sentence a client says early and a record rarely keeps.',
              'Su definición estaba disponible desde el principio. «Solo quiero dejar de notarlo cada mañana» es una frase que una clienta dice pronto y que un registro casi nunca conserva.'),
            T('Notice that she is not complaining. She confirms the improvement first and offers the disappointment second, softened — which is exactly how a definition mismatch presents itself, and why it is usually mistaken for satisfaction.',
              'Fíjate en que no se está quejando. Confirma la mejora primero y ofrece la decepción después, suavizada, que es exactamente como se presenta un desajuste de definiciones y por lo que suele confundirse con satisfacción.'),
            T('The cost is not this appointment. It is the next one she does not book, for a reason neither of you has said out loud.',
              'El coste no es esta cita. Es la siguiente que no pedirá, por un motivo que ninguna de las dos ha dicho en voz alta.')
          ] },
        { kind: 'match',
          prompt: T('Match each client sentence to the definition of success your recommendation must be judged against.',
                    'Empareja cada frase de clienta con la definición de éxito con la que se juzgará tu recomendación.'),
          left: [
            { id: 'w1', text: T('"I don\'t want to stop looking like myself."', '«No quiero dejar de parecerme a mí misma».') },
            { id: 'w2', text: T('"I just want to stop noticing it every morning."', '«Solo quiero dejar de notarlo cada mañana».') },
            { id: 'w3', text: T('"I don\'t want to look like I\'ve given up."', '«No quiero parecer que me he rendido».') },
            { id: 'w4', text: T('"I want to walk in there feeling like I\'m actually there."', '«Quiero entrar sintiendo que estoy realmente ahí».') }
          ],
          right: [
            { id: 'recognise', text: T('The people who know her notice nothing', 'Quienes la conocen no notan nada') },
            { id: 'mirror', text: T('The morning mirror stops being an event', 'El espejo de la mañana deja de ser un acontecimiento') },
            { id: 'effort', text: T('Visible evidence of care, not of youth', 'Prueba visible de cuidado, no de juventud') },
            { id: 'present', text: T('Attention available for the room, not for her face', 'Atención disponible para la sala, no para su cara') }
          ],
          pairs: { w1: 'recognise', w2: 'mirror', w3: 'effort', w4: 'present' },
          why: T('None of the four right-hand columns is a clinical measurement, and every one of them is testable at the review appointment. w3 is the one most often misread: a client who does not want to look like she has given up is asking for evidence of effort, and a result that reads as "she hasn\'t aged" fails her definition even when it succeeds on yours.',
                 'Ninguna de las cuatro columnas de la derecha es una medida clínica, y todas son comprobables en la revisión. La w3 es la que más se malinterpreta: una clienta que no quiere parecer rendida pide prueba de esfuerzo, y un resultado que se lee como «no ha envejecido» falla su definición aunque tenga éxito en la tuya.') },
        { kind: 'choose',
          prompt: T('Which recommendation is aligned in the canonical sense?',
                    '¿Qué recomendación está alineada en el sentido canónico?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Two sessions and a review. In eight weeks the pigmentation should be measurably lighter."',
                       '«Dos sesiones y una revisión. En ocho semanas la pigmentación debería estar medible más clara».'),
              why: T('Precise, honest and aimed at your instrument. She never said she wanted a measurement; she said she wanted to stop noticing it every morning. She will accept this plan and evaluate it against a different criterion than the one you set.',
                     'Precisa, honesta y dirigida a tu instrumento. Ella nunca dijo que quisiera una medición: dijo que quería dejar de notarlo cada mañana. Aceptará este plan y lo evaluará con un criterio distinto del que tú fijaste.') },
            { id: 'b', verdict: 'best',
              label: T('"Two sessions and a review at eight weeks. Success is you getting through a morning without checking it — we\'ll photograph so it isn\'t your memory against mine, and if you\'re there at eight weeks we stop."',
                       '«Dos sesiones y una revisión a las ocho semanas. El éxito es que pases una mañana sin mirártelo; haremos fotos para que no sea tu memoria contra la mía, y si a las ocho semanas ya estás ahí, paramos».'),
              why: T('Her sentence is the endpoint, the photograph protects both of you, and the stopping rule tells her the plan has an end you will honour. This is what Alignment means in the ledger — not that she agreed, but that she can find her own goal inside the plan.',
                     'Su frase es el objetivo, la foto os protege a las dos y la regla de parada le dice que el plan tiene un final que respetarás. Eso significa Alineación en el registro: no que estuviera de acuerdo, sino que puede encontrar su propio objetivo dentro del plan.') },
            { id: 'c', verdict: 'weak',
              label: T('"Let\'s do the two sessions and see how you feel — we can always add more if you want to go further."',
                       '«Hagamos las dos sesiones y ves cómo te sientes; siempre podemos añadir más si quieres ir a más».'),
              why: T('Flexible, friendly and unbounded. "We can always add more" is the opposite of a stopping rule, and for a client whose fear is being processed into someone else it is the sentence that keeps her at DEFER.',
                     'Flexible, amable y sin límites. «Siempre podemos añadir más» es lo contrario de una regla de parada, y para una clienta cuyo miedo es que la conviertan en otra persona es la frase que la mantiene en APLAZAR.') }
          ],
          principle: T('Trust Standard 4 — Align Recommendations. Alignment is testable: could she state the success criterion herself, in her own words, on the way out?',
                       'Estándar de Confianza 4 — Alinear las Recomendaciones. La alineación es comprobable: ¿podría ella enunciar el criterio de éxito con sus palabras al salir?'),
          retry: {
            note: T('A different client, the same test: could she state the criterion herself on the way out?',
                    'Otra clienta, la misma prueba: ¿podría enunciar ella el criterio al salir?'),
            prompt: T('Lucía, 47, told you her one condition: "I don\'t want to stop looking like myself." You have decided on a conservative plan you are confident in. How do you state the endpoint?',
                      'Lucía, 47, te dijo cuál era su única condición: «No quiero dejar de parecerme a mí misma». Has decidido un plan conservador en el que confías. ¿Cómo enuncias el objetivo?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"We\'ll keep it subtle — I\'ll use a conservative dose, and we can always do a little more at the review if you want to."',
                         '«Lo mantendremos sutil: usaré una dosis conservadora y en la revisión siempre podemos hacer un poco más si quieres».'),
                why: T('Subtle is your word and conservative is your measurement. Neither can be checked by her, and "a little more if you want" moves the decision to a future appointment where the frame will be how it looks rather than whether she still recognises herself. She will accept this and worry privately.',
                       'Sutil es tu palabra y conservadora es tu medida. Ella no puede comprobar ninguna de las dos, y «un poco más si quieres» traslada la decisión a una cita futura cuyo marco será cómo queda y no si ella sigue reconociéndose. Aceptará esto y se preocupará en privado.') },
              { id: 'b', verdict: 'best',
                label: T('"Success is the people who know you not mentioning anything. We photograph now and at six weeks, and the question at six weeks is yours: do you still look like yourself? If the answer is yes and you\'re happy, we stop there."',
                         '«El éxito es que quienes te conocen no comenten nada. Hacemos fotos ahora y a las seis semanas, y la pregunta de las seis semanas es tuya: ¿sigues pareciéndote a ti misma? Si la respuesta es sí y estás contenta, paramos ahí».'),
                why: T('Her sentence is the endpoint, the test is one she can run herself with people who are not in this room, and the stopping rule tells her the plan has an end you will honour. That is what alignment means in the ledger — not that she agreed, but that she could state the criterion herself on the way out.',
                       'Su frase es el objetivo, la prueba puede hacerla ella misma con personas que no están en esta sala, y la regla de parada le dice que el plan tiene un final que vas a respetar. Eso significa alineación en el registro: no que estuviera de acuerdo, sino que podría enunciar el criterio ella sola al salir.') },
              { id: 'c', verdict: 'harmful',
                label: T('"You won\'t look like you\'ve had anything done, I promise you that. Nobody will be able to tell."',
                         '«No parecerá que te has hecho nada, te lo prometo. Nadie va a notarlo».'),
                why: T('A guarantee about other people\'s perceptions, which is the one outcome no treatment controls. It answers her fear rather than her goal, it cannot be tested until it has already failed, and it turns the review appointment into an occasion for her to tell you whether you kept a promise.',
                       'Una garantía sobre la percepción de terceros, que es el único resultado que ningún tratamiento controla. Responde a su miedo y no a su objetivo, no se puede comprobar hasta que ya ha fallado, y convierte la revisión en una ocasión para que ella te diga si cumpliste una promesa.') }
            ],
            principle: T('An aligned endpoint is one she could repeat to somebody who was not in the room, and check without you.',
                         'Un objetivo alineado es el que ella podría repetirle a alguien que no estuvo en la sala y comprobar sin ti.'),
            changes: {
              axis: 'recommendation',
              detail: T('The endpoint becomes something she can state without you. On the way out she can say what success is — nobody who knows her mentioning anything, checked at six weeks against a photograph — and that sentence is now hers to hold you to.',
                        'El punto final se convierte en algo que ella puede enunciar sin ti. Al salir sabe decir qué es el éxito —que nadie de su entorno le comente nada, comprobado a las seis semanas con una foto— y esa frase es ahora suya para exigírtela.')
            }
          } },
        { kind: 'check',
          prompt: T('Toolkit #4 rejects your field 1. What is the most likely reason?',
                    'El Toolkit #4 rechaza tu campo 1. ¿Cuál es la razón más probable?'),
          options: [
            { id: 'a', text: T('It is too short.', 'Es demasiado corto.') },
            { id: 'b', text: T('It does not trace to the client language recorded in Toolkit #3 — it is your paraphrase of her goal.', 'No se traza hasta el lenguaje de la clienta registrado en el Toolkit #3: es tu paráfrasis de su objetivo.') },
            { id: 'c', text: T('It contains no clinical terminology.', 'No contiene terminología clínica.') }
          ],
          answer: 'b',
          why: T('The validator compares field 1 against the verbatim client language in Toolkit #3 field 6. This is deliberately strict, because a paraphrased goal is the single most common way a recommendation quietly stops being about the client while remaining entirely accurate.',
                 'El validador compara el campo 1 con el lenguaje literal de la clienta del campo 6 del Toolkit #3. Es deliberadamente estricto, porque un objetivo parafraseado es la forma más común en que una recomendación deja de tratar en silencio sobre la clienta sin dejar de ser exacta.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm5l6', n: 6, minutes: 13,
      treatments: [
                    {
                      name: T(
                              'Vascular laser — rosacea, course of three',
                              'Láser vascular — rosácea, bono de tres'),
                      price: T('€630 for three sessions', '630 € el bono de tres'),
                      why: T(
                             'Redness has an unambiguous clinical field and an unambiguous emotional one, which makes it the cleanest test of whether a plan is written from both.',
                             'Las rojeces tienen un campo clínico inequívoco y uno emocional inequívoco, lo que las convierte en la prueba más limpia de si un plan está escrito desde los dos.'),
                      moment: T(
                                'You are filling in the plan and the emotional field is still empty because the clinical one was so easy to complete.',
                                'Estás rellenando el plan y el campo emocional sigue vacío porque el clínico era facilísimo de completar.'),
                      weak: {
                              line: T(
                                      '"Three sessions at €630, six weeks apart, targeting the vessels across the cheeks and nose."',
                                      '«Tres sesiones, 630 €, separadas seis semanas, dirigidas a los vasos de las mejillas y la nariz.»'),
                              cost: T(
                                      'A plan with one field filled in. It is correct, it is complete as medicine, and it gives her nothing to say when her husband asks why she is spending €630 on her face.',
                                      'Un plan con un campo relleno. Es correcto, es completo como medicina, y no le da nada que decir cuando su marido le pregunte por qué se gasta 630 € en la cara.')
                            },
                      strong: {
                                line: T(
                                        '"Three sessions, €630, six weeks apart. And the reason we\'re doing it now is so that in April you go to the wedding and think about the wedding."',
                                        '«Tres sesiones, 630 €, separadas seis semanas. Y el motivo de hacerlo ahora es que en abril vayas a la boda y pienses en la boda.»'),
                                gain: T(
                                        'Both fields, in one sentence. The clinical half justifies the method and the emotional half justifies the money, and only the second half survives the journey home.',
                                        'Los dos campos en una sola frase. La mitad clínica justifica el método y la emocional justifica el dinero, y solo la segunda sobrevive al camino de vuelta a casa.')
                              }
                    },
                    {
                      name: T(
                              'Body contouring programme — ten sessions',
                              'Programa de remodelación corporal — diez sesiones'),
                      price: T('€1,900 for ten sessions', '1.900 € las diez sesiones'),
                      why: T(
                             'At ten sessions and €1,900 the plan has to survive three months of her life, which is longer than any purely clinical rationale stays interesting.',
                             'Con diez sesiones y 1.900 €, el plan tiene que sobrevivir a tres meses de su vida, que es más de lo que aguanta interesante cualquier justificación puramente clínica.'),
                      moment: T(
                                'You are presenting the programme and the eight fields are all complete on the page in front of you.',
                                'Estás presentando el programa y los ocho campos están completos en la hoja que tienes delante.'),
                      weak: {
                              line: T(
                                      '"Ten sessions over three months, €1,900, and I\'ve written out the full protocol so you can see exactly what happens each time."',
                                      '«Diez sesiones en tres meses, 1.900 €, y te he escrito el protocolo completo para que veas exactamente qué pasa cada vez.»'),
                              cost: T(
                                      'Presents the document rather than the person it was built from. Handing over a thorough protocol is the most professional way to make a plan feel like it could have been written for anybody.',
                                      'Presenta el documento y no a la persona a partir de la cual se construyó. Entregar un protocolo minucioso es la manera más profesional de hacer que un plan parezca escrito para cualquiera.')
                            },
                      strong: {
                                line: T(
                                        '"Ten sessions, €1,900, over three months. You told me the thing you want back is walking into the sea without doing the maths first — everything on this page is there because of that sentence."',
                                        '«Diez sesiones, 1.900 €, en tres meses. Me dijiste que lo que quieres recuperar es meterte en el mar sin hacer cálculos antes: todo lo que hay en esta hoja está por esa frase.»'),
                                gain: T(
                                        'Says out loud what the toolkit is for — that the clinical page exists because of an emotional sentence. A woman who can hear why each item is there is a woman who attends session eight.',
                                        'Dice en voz alta para qué sirve el instrumental: que la hoja clínica existe por una frase emocional. Una mujer que puede oír por qué está ahí cada elemento es una mujer que acude a la octava sesión.')
                              }
                    },
                    {
                      name: T(
                              'IPL photorejuvenation — course of four',
                              'IPL fotorrejuvenecimiento — bono de cuatro'),
                      price: T('€640 for four sessions', '640 € el bono de cuatro'),
                      why: T(
                             'IPL is often the second item on a plan rather than the first, and second items are where the emotional field silently stops being filled in.',
                             'El IPL suele ser el segundo elemento de un plan y no el primero, y en los segundos elementos es donde el campo emocional deja de rellenarse sin que nadie se dé cuenta.'),
                      moment: T(
                                'The first item has been justified from both places, and you are moving on to the second.',
                                'El primer elemento se ha justificado desde los dos sitios, y pasas al segundo.'),
                      weak: {
                              line: T(
                                      '"And then the IPL alongside it — four sessions at €640 — which handles the tone side of things."',
                                      '«Y luego el IPL en paralelo, cuatro sesiones, 640 €, que se ocupa de la parte del tono.»'),
                              cost: T(
                                      'Alongside is the word that gives it away. The second item has no reason attached to it, so it reads as an addition, and additions are where a client starts to wonder how long the list is.',
                                      '«En paralelo» es la palabra que lo delata. El segundo elemento no lleva ningún motivo pegado, así que se lee como una añadidura, y en las añadiduras es donde la clienta empieza a preguntarse cuánto mide la lista.')
                            },
                      strong: {
                                line: T(
                                        '"The second thing is the IPL, €640, and it\'s there for the same reason as the first: you said you want to be able to answer the door."',
                                        '«La segunda cosa es el IPL, 640 €, y está ahí por el mismo motivo que la primera: has dicho que quieres poder abrir la puerta de casa.»'),
                                gain: T(
                                        'Gives the second item its own emotional justification instead of letting it ride on the first. Two items that each answer the same sentence read as one decision rather than as a growing list.',
                                        'Le da al segundo elemento su propia justificación emocional en lugar de dejar que vaya a rebufo del primero. Dos elementos que responden a la misma frase se leen como una sola decisión y no como una lista que crece.')
                              }
                    }
                  ],
      title: T('Toolkit #4 — the eight fields', 'Toolkit #4 — los ocho campos'),
      objective: T('Build a complete recommendation whose field 8 names what you are declining to recommend, and why.',
                   'Construir una recomendación completa cuyo campo 8 nombre lo que decides no recomendar, y por qué.'),
      provenance: {
        chapter: 11,
        principle: T('When a recommendation comes from both places — feeling and skin — it does not feel like selling. It feels like helping.',
                     'Cuando una recomendación nace de los dos sitios —el sentimiento y la piel— no parece que vendas: parece que ayudas.'),
        phase: 'recommendation',
        trustStage: 'alignment',
        standard: 4,
        duty: 4,
        toolkit: 4
      },
      depth: {
        whyItGoesWrong: T(
            'Box eight — the thing you are turning down — is the only box that appears to hold nothing of value for the woman in the chair, so on a heavy day it is the box left hollow. Economy is the virtue: why write up something that is not going to happen? Yet the item turned down is the proof that a sieve was used. Unwritten, it cannot be spoken aloud, a colleague cannot audit it, and a year on nobody can establish whether it was weighed and rejected or simply never occurred to anyone.',
            'La casilla ocho —aquello que estás rechazando— es la única casilla que parece no guardar nada de valor para la mujer sentada en la butaca, así que en un día cargado es la casilla que se queda hueca. La virtud es la economía: ¿para qué redactar algo que no va a ocurrir? Y sin embargo, el artículo rechazado es la prueba de que se usó un tamiz. Sin escribir, no se puede pronunciar en voz alta, una compañera no lo puede auditar y, un año después, nadie puede establecer si se sopesó y se rechazó o si sencillamente no se le ocurrió a nadie.'),
        sheIsThinking: T(
            'You have told me what you want to do. You have not told me what you turned down, and I would rather like to know.',
            'Me has dicho lo que quieres hacer. No me has dicho qué has rechazado, y me gustaría bastante saberlo.'),
        ladder: {
          weak: {
            line:   T(
                '(box eight left hollow) "So that\'s the plan — any questions?"',
                '(casilla ocho hueca) «Pues ese es el plan. ¿Alguna duda?»'),
            effect: T(
                'A route that looks complete with no sieve on show. She has no means of telling a weighed proposal from an undiscriminating one.',
                'Es una ruta con aspecto de completa y sin tamiz a la vista. Ella no tiene medio alguno de distinguir una propuesta sopesada de otra que no ha discriminado nada.')
          },
          average: {
            line:   T(
                '(box eight written up for the record) "That\'s what I\'d recommend."',
                '(casilla ocho redactada para el registro) «Eso es lo que yo recomendaría.»'),
            effect: T(
                'Auditable and mute. The clinic can demonstrate that a sieve was used; the woman who paid for it still never sees one.',
                'Es auditable y mudo. La clínica puede demostrar que se usó un tamiz; la mujer que lo ha pagado sigue sin ver ninguno.')
          },
          strong: {
            line:   T(
                '"I\'m not recommending the peel series — your barrier won\'t take it this year. These two are what I\'d do."',
                '«No te recomiendo el programa de peelings: tu barrera cutánea no lo va a tolerar este año. Lo que yo haría son estas dos cosas.»'),
            effect: T(
                'Box eight read out loud. The refusal is the part she repeats to whoever she asks for a second opinion, and it is what makes the survivors believable.',
                'Es la casilla ocho leída en voz alta. El rechazo es la parte que ella le repite a quien le pida una segunda opinión, y es lo que hace creíbles a los supervivientes.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The eight fields are a sequence, not a form', 'Los ocho campos son una secuencia, no un formulario'),
          body: [
            T('Goal in her words. Professional assessment. Recommended solution. Why it fits this client. Expected stages. What she should realistically expect. The alternative option. And what you are intentionally not recommending, and why.',
              'Objetivo con sus palabras. Valoración profesional. Solución recomendada. Por qué encaja con esta clienta. Etapas esperadas. Qué debe esperar de forma realista. La opción alternativa. Y lo que deliberadamente no recomiendas, y por qué.'),
            T('Fields 6, 7 and 8 are the ones practitioners leave thin, and they are the three that survive being repeated at a kitchen table by someone who was not in the room. When a partner asks "and what did she say it won\'t do?", field 6 answers. When he asks "did she try to sell you the works?", field 8 answers.',
              'Los campos 6, 7 y 8 son los que los profesionales dejan flojos, y son los tres que sobreviven a ser repetidos en la mesa de una cocina por alguien que no estuvo en la sala. Cuando la pareja pregunta «¿y qué te dijo que no hace?», responde el campo 6. Cuando pregunta «¿intentó venderte el lote entero?», responde el campo 8.')
          ] },
        { kind: 'signal',
          avatar: 'nuria',
          name: T('Field 8, as it is usually written — three real entries',
                  'El campo 8, tal y como suele escribirse — tres entradas reales'),
          client: T('"8. Not recommending: n/a." · "8. Not recommending: nothing at this stage — full plan discussed and agreed." · "8. Not recommending: the cheeks, as the client declined them."',
                    '«8. No recomiendo: n/p». · «8. No recomiendo: nada en esta fase; plan completo comentado y acordado». · «8. No recomiendo: los pómulos, ya que la clienta los rechazó».'),
          prompt: T('Only one of these is a field 8 at all. Which, and what is wrong with the other two?',
                    'Solo una de estas es realmente un campo 8. ¿Cuál, y qué falla en las otras dos?'),
          notice: [
            T('The first is empty. Declining nothing is a legitimate outcome — but written as "n/a" it records instead that the field was skipped, and nobody reading it afterwards can tell which happened.',
              'La primera está vacía. No rechazar nada es un resultado legítimo, pero escrito como «n/p» lo que registra es que el campo se saltó, y quien lo lea después no podrá saber cuál de las dos cosas pasó.'),
            T('The second is the field inverted. "Full plan discussed and agreed" describes everything that was recommended; it is field 3 written into the place reserved for the evidence that field 3 is not only what you want.',
              'La segunda es el campo del revés. «Plan completo comentado y acordado» describe todo lo que se recomendó; es el campo 3 escrito en el sitio reservado para la prueba de que el campo 3 no es solo lo que tú quieres.'),
            T('The third names a real omission and attributes it to the client. A declined item is not a subtraction — she removed it, not you, and the field exists to record a professional judgement that cost you something.',
              'La tercera nombra una omisión real y se la atribuye a la clienta. Un elemento rechazado por ella no es una sustracción: lo quitó ella, no tú, y el campo existe para registrar un criterio profesional que te costó algo.'),
            T('None of the three would survive the kitchen-table test. When her partner asks whether the clinic tried to sell her the works, only a sentence naming something you removed, and why, answers.',
              'Ninguna de las tres sobreviviría a la prueba de la mesa de la cocina. Cuando su pareja pregunte si en la clínica intentaron venderle el lote entero, solo responde una frase que nombre algo que retiraste tú, y por qué.')
          ] },
        { kind: 'drill',
          toolkit: 4,
          prompt: T('Build the recommendation from what this client actually said. Field 8 is not optional.',
                    'Construye la recomendación con lo que esta clienta dijo realmente. El campo 8 no es opcional.'),
          transcript: [
            T('"I want something for the lines here." (glabella) "And my sister says I should do my cheeks too."',
              '«Quiero algo para las líneas de aquí». (entrecejo) «Y mi hermana dice que también debería hacerme los pómulos».'),
            T('"I don\'t want to stop looking like myself. That\'s the whole thing, really."',
              '«No quiero dejar de parecerme a mí misma. En el fondo es todo».'),
            T('"I walked out of a place once because they printed a plan before I\'d sat down."',
              '«Una vez me fui de un sitio porque me imprimieron un plan antes de que me sentara».'),
            T('Assessment: moderate dynamic glabellar lines, good skin quality, no volume loss requiring correction.',
              'Valoración: líneas dinámicas moderadas en el entrecejo, buena calidad de piel, sin pérdida de volumen que requiera corrección.')
          ],
          fields: [
            { name: 'f1_goal', label: T('1. Goal in the client\'s words', '1. Objetivo con las palabras de la clienta') },
            { name: 'f3_solution', label: T('3. Recommended solution', '3. Solución recomendada') },
            { name: 'f6_realistic', label: T('6. What she should realistically expect — including what it will not do', '6. Qué debe esperar de forma realista, incluido lo que no hará') },
            { name: 'f7_alternative', label: T('7. Alternative option — a genuine one, including doing nothing', '7. Opción alternativa: una real, incluida la de no hacer nada') },
            { name: 'f8_notRecommending', label: T('8. What I am intentionally NOT recommending, and why', '8. Lo que deliberadamente NO recomiendo, y por qué') }
          ],
          depthCheck: [
            { key: 'verbatim', label: T('Field 1 uses her words, not my paraphrase', 'El campo 1 usa sus palabras, no mi paráfrasis'), supported: true },
            { key: 'ceiling', label: T('Field 6 names something the treatment will not do', 'El campo 6 nombra algo que el tratamiento no hará'), supported: true },
            { key: 'cheeks', label: T('The cheeks are included, since her sister raised them', 'Incluyo los pómulos, ya que su hermana los planteó'), supported: false,
              note: T('The assessment found no volume loss requiring correction, and she told you her one condition is still looking like herself. Treating the cheeks here serves her sister\'s opinion, not the client\'s stated goal — this belongs in field 8, declined.',
                      'La valoración no encontró pérdida de volumen que requiera corrección, y ella te dijo que su única condición es seguir pareciéndose a sí misma. Tratar los pómulos aquí sirve a la opinión de su hermana, no al objetivo declarado de la clienta: esto va en el campo 8, rechazado.') },
            { key: 'alt', label: T('Field 7 offers a real alternative, not a smaller version of the same thing', 'El campo 7 ofrece una alternativa real, no una versión reducida de lo mismo'), supported: true },
            { key: 'nothing', label: T('Doing nothing appears somewhere in the plan as a legitimate option', 'No hacer nada aparece en algún punto del plan como opción legítima'), supported: true },
            { key: 'printed', label: T('I can hand her a printed plan at the end of today', 'Puedo entregarle hoy un plan impreso al terminar'), supported: false,
              note: T('She walked out of a clinic that printed a plan before she sat down. A printed plan is not the problem — a plan that arrives before her agreement is. Offer to send it after she has decided what she wants in it.',
                      'Se marchó de una clínica que imprimió un plan antes de que se sentara. El plan impreso no es el problema: lo es un plan que llega antes de su acuerdo. Ofrécete a enviarlo cuando ella haya decidido qué quiere que contenga.') }
          ],
          rule: T('Two of these six are traps drawn from her own history. The recommendation that survives Phase 7 is the one that declined something out loud in field 8.',
                  'Dos de estos seis son trampas sacadas de su propio historial. La recomendación que sobrevive a la Fase 7 es la que rechazó algo en voz alta en el campo 8.') },
        { kind: 'choose',
          prompt: T('A different client. You have assessed her, and every part of what she wants is justified — there is genuinely nothing you would take out. Field 8 is in front of you. What do you write?',
                    'Otra clienta. La has valorado y todo lo que quiere está justificado: de verdad no hay nada que retirarías. Tienes delante el campo 8. ¿Qué escribes?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Nothing declined — everything she wants is appropriate and I would do all of it."',
                       '«No se rechaza nada: todo lo que quiere es adecuado y yo lo haría todo».'),
              why: T('Honest, accurate, and the field answered rather than used. It tells a reader that you removed nothing; it does not tell her, and field 8 exists to produce a sentence she can repeat to somebody who was not in the room. A field 8 that never reaches her ear is a compliance record.',
                     'Honesto, exacto, y es el campo respondido en vez de usado. Le dice a quien lo lea que no quitaste nada; a ella no se lo dice, y el campo 8 existe para producir una frase que ella pueda repetir a alguien que no estuvo en la sala. Un campo 8 que nunca llega a su oído es un registro de cumplimiento.') },
            { id: 'b', verdict: 'best',
              label: T('"No item declined. Declined the pace: she wanted all three areas in a single sitting, and I have staged them so that each is judged before the next begins. Told her so, in these words."',
                       '«Ningún elemento rechazado. Rechazo el ritmo: quería las tres zonas en una sola sesión y las he escalonado para valorar cada una antes de empezar la siguiente. Se lo dije así, con estas palabras».'),
              why: T('There is almost always something to decline, and when it is not an item it is a quantity, a pace or a date. Staging is a real subtraction — it takes two-thirds of today\'s booking off the table — and it is the sentence that answers the question her partner will ask at the kitchen table about whether the clinic tried to sell her everything.',
                     'Casi siempre hay algo que rechazar, y cuando no es un elemento es una cantidad, un ritmo o una fecha. Escalonar es una sustracción real —retira dos tercios de la reserva de hoy— y es la frase que responde a la pregunta que su pareja hará en la mesa de la cocina sobre si en la clínica intentaron venderle de todo.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Nothing declined. Client keen to proceed with the full plan; nothing further was offered."',
                       '«No se rechaza nada. Clienta con ganas de seguir adelante con el plan completo; no se le ofreció nada más».'),
              why: T('A line about how restrained you were is a statement about your own conduct written into a clinical record, and self-attestation is the one kind of evidence that proves nothing. "Keen" is your reading of her placed in the field reserved for your judgement about the treatment — so if she later hesitates, the record says she was keen and the hesitation looks like her changing her mind.',
                     'Una línea sobre lo contenida que fuiste es una afirmación sobre tu propia conducta metida en un registro clínico, y el autotestimonio es el único tipo de prueba que nada demuestra. «Con ganas» es tu lectura de ella colocada en el campo reservado a tu criterio sobre el tratamiento, así que si luego duda, el registro dirá que tenía ganas y la duda parecerá que ella cambió de idea.') }
          ],
          principle: T('When there is nothing to take out, look at the quantity, the pace and the timing. Field 8 records a professional judgement that cost you something — and if it genuinely cost you nothing, say what you considered and rejected.',
                       'Cuando no hay nada que retirar, mira la cantidad, el ritmo y el calendario. El campo 8 registra un criterio profesional que te costó algo, y si de verdad no te costó nada, escribe qué valoraste y descartaste.'),
          retry: {
            note: T('Field 8 three weeks later, when somebody who was not in the room disagrees with it.',
                    'El campo 8 tres semanas después, cuando alguien que no estuvo en la sala no está de acuerdo con él.'),
            prompt: T('Three weeks on, the client from the drill rings. Her sister has asked why she is not having the cheeks done, and she is wondering whether she should be. You have ninety seconds on the phone. What do you say?',
                      'Tres semanas más tarde, la clienta del ejercicio llama. Su hermana le ha preguntado por qué no se hace los pómulos y ella se pregunta si debería. Tienes noventa segundos al teléfono. ¿Qué dices?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Offer to see her: "It\'s a fair question, and it\'s a lot simpler to answer properly with you in front of me. Shall we arrange a review?"',
                         'Ofrecerle verla: «Es una pregunta justa, y se responde bastante mejor contigo delante. ¿Te preparo una revisión?»'),
                why: T('Sensible, free, and it protects you from answering badly on the phone. It also converts a question you could have answered in twenty seconds into an appointment, and what she tells her sister in the meantime is "I\'m going back in to ask about it". Her sister\'s opinion has just become the reason for the next visit.',
                       'Sensato, gratuito y te protege de responder mal por teléfono. También convierte una pregunta que podías haber respondido en veinte segundos en una cita, y lo que ella le cuenta a su hermana mientras tanto es «vuelvo para preguntarlo». La opinión de su hermana acaba de convertirse en el motivo de la próxima visita.') },
              { id: 'b', verdict: 'best',
                label: T('Hand her field 8 back, in the same words: "I looked at your cheeks and there was no volume loss that needed correcting — and you told me your one condition was still looking like yourself. That\'s why I didn\'t recommend them. If that changes, we look again; nothing about them is closed."',
                         'Entregarle de nuevo el campo 8, con las mismas palabras: «Te miré los pómulos y no había pérdida de volumen que hubiera que corregir, y tú me dijiste que tu única condición era seguir pareciéndote a ti misma. Por eso no te los recomendé. Si eso cambia, lo volvemos a mirar; nada de eso está cerrado».'),
                why: T('She now has the finding, the reason and the door, in the order that lets her repeat them. Saying field 8 again makes the omission a decision she took part in rather than something she has to defend — and "nothing about them is closed" removes the only thing that would make her act on her sister\'s question, which is the suspicion that she was talked out of something.',
                       'Ahora tiene el hallazgo, el motivo y la puerta, en el orden que le permite repetirlos. Volver a decir el campo 8 convierte la omisión en una decisión de la que ella formó parte y no en algo que tenga que defender, y «nada de eso está cerrado» elimina lo único que la haría actuar por la pregunta de su hermana: la sospecha de que la disuadieron de algo.') },
              { id: 'c', verdict: 'harmful',
                label: T('Reassure her and reopen it: "Your sister isn\'t wrong that it would look lovely. If you\'d like them done, we can add them next time."',
                         'Tranquilizarla y reabrirlo: «Tu hermana no va desencaminada, quedaría precioso. Si te apetece hacértelos, los añadimos la próxima vez».'),
                why: T('In one sentence you have agreed with the person who was not in the room and made your own field 8 look like caution rather than judgement. She will most likely go ahead, and she will spend the following weeks wondering which of your two opinions was the honest one — which is the question that ends relationships quietly, months later.',
                       'En una frase le has dado la razón a quien no estuvo en la sala y has hecho que tu propio campo 8 parezca prudencia y no criterio. Lo más seguro es que siga adelante, y pasará las semanas siguientes preguntándose cuál de tus dos opiniones era la honesta, que es la pregunta que acaba con las relaciones en silencio, meses después.') }
            ],
            principle: T('Field 8 is not written for the file. It is written to be said, and said again — and the test of it is whether you can repeat it word for word three weeks later to somebody who has been told otherwise.',
                         'El campo 8 no se escribe para el expediente. Se escribe para decirlo, y para volver a decirlo, y la prueba es si puedes repetirlo palabra por palabra tres semanas después a alguien a quien le han dicho lo contrario.'),
            changes: {
              axis: 'objection',
              detail: T('Her sister\'s opinion arrives as a ninety-second phone call three weeks early instead of as a cancelled appointment in the spring — because field 8 gave her a sentence to say back, and she rang to check it rather than to act on it.',
                        'La opinión de su hermana llega como una llamada de noventa segundos tres semanas antes, en lugar de como una cita anulada en primavera, porque el campo 8 le dio una frase que responder, y llamó para contrastarla y no para actuar por ella.')
            }
          } },
        { kind: 'check',
          prompt: T('Why does field 8 have more effect on the outcome than field 3?',
                    '¿Por qué el campo 8 influye más en el resultado que el campo 3?'),
          options: [
            { id: 'a', text: T('It does not — field 3 is the recommendation and therefore the substance.', 'No influye más: el campo 3 es la recomendación y por tanto la sustancia.') },
            { id: 'b', text: T('Because field 3 is what you want, and field 8 is the evidence that field 3 is not only what you want.', 'Porque el campo 3 es lo que tú quieres, y el campo 8 es la prueba de que el campo 3 no es solo lo que tú quieres.') },
            { id: 'c', text: T('Because clients read the last field first.', 'Porque las clientas leen el último campo primero.') }
          ],
          answer: 'b',
          why: T('Field 3 is unfalsifiable from her side: every practitioner recommends something. Field 8 is the only field in the structure that cannot be produced by self-interest, which is why it carries the credibility for all the others.',
                 'El campo 3 es infalsable desde su lado: todo profesional recomienda algo. El campo 8 es el único campo de la estructura que no puede producir el interés propio, y por eso carga con la credibilidad de todos los demás.') },
        { kind: 'reflect',
          prompt: T('Write field 8 for the last recommendation you gave a real client. If it is empty, write what you would have declined and why you did not say it.',
                    'Escribe el campo 8 de la última recomendación que diste a una clienta real. Si está vacío, escribe qué habrías rechazado y por qué no lo dijiste.'),
          placeholder: T('"I did not decline anything" is a legitimate and informative answer.',
                         '«No rechacé nada» es una respuesta legítima e informativa.') }
      ]
    }
  ],
  apply: {
    assignment: T('In your next recommendation, say what you are not recommending before what you are — and name the stopping rule out loud, so she knows the plan has an end you will honour.',
                  'En tu próxima recomendación, di lo que no recomiendas antes que lo que sí, y enuncia en voz alta la regla de parada, para que sepa que el plan tiene un final que vas a respetar.'),
    prompt: T('How did she respond to the subtraction? Write her exact words, and say whether the recommendation you gave was smaller or larger than the one you had planned.',
              '¿Cómo respondió a la sustracción? Escribe sus palabras exactas y di si la recomendación que diste fue menor o mayor que la que tenías planeada.')
  }
};

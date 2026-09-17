/**
 * MODULE 4 — UNDERSTANDING & ALIGNMENT
 * Book: Ch.10 (R — Reflect): the five reflection forms, the contradiction
 *       mirror, the summary that earns the right to recommend; Ch.6 (The Mirror
 *       Truth); Ch.11 for the double diagnosis order.
 * Canonical: Phase 4 Understanding; Trust Stages 3–5; Toolkit #3.
 */
const T = (en, es) => ({ en, es });

module.exports = {
  id: 'm4', n: 4,
  phase: 'understanding',
  accent: 'sage',
  title: T('Understanding & Alignment', 'Comprensión y Alineación'),
  strapline: T('Reflection that makes a client continue — and the contradiction mirror',
               'El reflejo que hace que una clienta continúe — y el espejo de contradicción'),
  summary: T(
    'Understanding is not agreeing. It is the demonstrable act of returning what a client said so precisely that she keeps talking. This module teaches the five reflection forms, the summary that earns the right to recommend, the contradiction mirror, and the double diagnosis that puts the emotional reading before the clinical one.',
    'Comprender no es estar de acuerdo. Es el acto demostrable de devolver lo que la clienta dijo con tal precisión que siga hablando. Este módulo enseña las cinco formas de reflejo, el resumen que da derecho a recomendar, el espejo de contradicción y el doble diagnóstico que pone la lectura emocional antes que la clínica.'),
  outcome: T(
      'Say back what a client actually said in the form that makes her keep talking, and hold the silence afterwards instead of recommending into it.',
      'Devolverle a la clienta lo que de verdad ha dicho, en la forma que hace que siga hablando, y sostener después el silencio en lugar de recomendar dentro de él.'),
  source: T('The Beauty Sales Secrets — Chapter 10 (R — Reflect), with Chapter 6; MIRROR Phase 4, Toolkit #3',
            'The Beauty Sales Secrets — Capítulo 10 (R — Reflejar), con el capítulo 6; MIRROR Fase 4, Toolkit #3'),
  minutes: 55,
  status: 'available',
  lessons: [
    // -----------------------------------------------------------------
    {
      id: 'm4l1', n: 1, minutes: 10,
      treatments: [
                    {
                      name: T('Botulinum toxin — upper face', 'Toxina botulínica — tercio superior'),
                      price: T('€330, three areas', '330 €, tres zonas'),
                      why: T(
                             'Toxin clients speak in units and areas, so a reflection that stays in that vocabulary sounds like good note-taking and does nothing.',
                             'Las clientas de toxina hablan en unidades y zonas, así que un reflejo que se quede en ese vocabulario suena a buenos apuntes y no hace nada.'),
                      moment: T(
                                'She has finished explaining that she does not want anyone at work to be able to tell, and is waiting to hear what you understood.',
                                'Ha terminado de explicar que no quiere que nadie del trabajo pueda notarlo, y espera a oír qué has entendido tú.'),
                      weak: {
                              line: T(
                                      '"So, discreet — three areas, conservative dosing, and nothing that anybody would pick up on."',
                                      '«O sea, discreto: tres zonas, dosis conservadora y nada que nadie pueda pillar.»'),
                              cost: T(
                                      'An accurate summary of the brief, returned as a specification. She confirms it, because it is correct, and what she felt — that being caught would be humiliating — has now been converted into a dosing preference.',
                                      'Es un resumen exacto del encargo, devuelto como especificación. Ella lo confirma, porque es correcto, y lo que sentía —que la pillaran sería humillante— acaba convertido en una preferencia de dosis.')
                            },
                      strong: {
                                line: T(
                                        '"What I\'m hearing is that being found out would be worse than the lines. Is that fair?"',
                                        '«Lo que estoy escuchando es que te dolería más que te pillaran que las propias líneas. ¿Te encaja?»'),
                                gain: T(
                                        'Emotional mirroring: it returns the feeling rather than the instruction, and it asks her to check it. If she corrects you, the correction is the most useful sentence of the appointment.',
                                        'Reflejo emocional: devuelve el sentimiento y no la instrucción, y le pide que lo compruebe. Si te corrige, la corrección es la frase más útil de la cita.')
                              }
                    },
                    {
                      name: T(
                              'Chemical peel — pigmentation, course of four',
                              'Peeling químico — pigmentación, bono de cuatro'),
                      price: T('€540 for four sessions', '540 € el bono de cuatro'),
                      why: T(
                             'Women with pigmentation arrive with a long list of things they have already tried, and effort mirroring is the form this consultation is built for.',
                             'Las mujeres con pigmentación llegan con una lista larga de cosas ya probadas, y el reflejo del esfuerzo es la forma para la que está hecha esta consulta.'),
                      moment: T(
                                'She has just recited four years of products, two clinics and a dermatologist, and then apologised for going on.',
                                'Acaba de recitar cuatro años de productos, dos clínicas y un dermatólogo, y después se ha disculpado por enrollarse.'),
                      weak: {
                              line: T(
                                      '"No need to apologise, all of that is useful — it tells me what not to repeat. Four peels at €540 would be where I\'d start."',
                                      '«No hace falta que te disculpes, todo eso sirve: me dice qué no repetir. Yo empezaría por cuatro peelings, 540 €.»'),
                              cost: T(
                                      'Treats four years of her life as intake data, which is efficient and slightly insulting. She becomes brisk for the rest of the consultation, and briskness is what she does instead of trusting you.',
                                      'Trata cuatro años de su vida como datos de admisión, lo cual es eficiente y ligeramente ofensivo. Se vuelve escueta el resto de la consulta, y ser escueta es lo que hace ella en lugar de confiar.')
                            },
                      strong: {
                                line: T(
                                        '"You\'ve done more than most people ever do. The problem was never that you weren\'t trying."',
                                        '«Has hecho más de lo que hace casi nadie. El problema nunca fue que no lo estuvieras intentando.»'),
                                gain: T(
                                        'Effort mirroring, which is the form that dissolves the shame she came in carrying. A woman who is not defending four years of failure can hear what you would do differently.',
                                        'Reflejo del esfuerzo, que es la forma que disuelve la vergüenza con la que ha llegado. Una mujer que no está defendiendo cuatro años de fracaso puede escuchar qué harías tú distinto.')
                              }
                    },
                    {
                      name: T('Cryolipolysis — abdomen', 'Criolipólisis — abdomen'),
                      price: T('€740 for two applicators', '740 € dos aplicadores'),
                      why: T(
                             'Body consultations produce the most self-critical talk in the clinic, and identity mirroring is the only form that answers it without arguing.',
                             'Las consultas corporales producen el discurso más autocrítico de la clínica, y el reflejo de identidad es la única forma que lo responde sin discutir.'),
                      moment: T(
                                'She has described her own stomach in language you would not use about anybody, and finished by saying she just wants to feel normal again.',
                                'Ha descrito su propia barriga con un lenguaje que tú no usarías con nadie, y ha terminado diciendo que solo quiere volver a sentirse normal.'),
                      weak: {
                              line: T(
                                      '"You\'re being much harder on yourself than anyone else would be. It really isn\'t as bad as you\'re describing."',
                                      '«Estás siendo mucho más dura contigo de lo que sería cualquiera. De verdad que no está tan mal como lo describes.»'),
                              cost: T(
                                      'Kind, and it contradicts her, which means she now has to defend the description. Two minutes are spent on whether it is as bad as she says, and neither of you returns to the word normal.',
                                      'Es amable, y le lleva la contraria, así que ahora tiene que defender la descripción. Se van dos minutos en si está tan mal como dice, y ninguna de las dos vuelve a la palabra «normal».')
                            },
                      strong: {
                                line: T(
                                        '"What I\'m hearing is that you want to look in the mirror and just see yourself. Not fixed — yourself."',
                                        '«Lo que estoy escuchando es que quieres mirarte al espejo y verte a ti. No arreglada: a ti.»'),
                                gain: T(
                                        'Identity mirroring goes past the self-criticism instead of debating it. Normal was the word she offered, and returning it in the first person is what makes a €740 session about her rather than about her stomach.',
                                        'El reflejo de identidad pasa por encima de la autocrítica en lugar de debatirla. «Normal» era la palabra que ella ofreció, y devolvérsela en primera persona es lo que hace que una sesión de 740 € vaya de ella y no de su barriga.')
                              }
                    }
                  ],
      title: T('The five reflection forms', 'Las cinco formas de reflejo'),
      objective: T('Use each reflection form deliberately instead of paraphrasing by habit.',
                   'Usar cada forma de reflejo de manera deliberada en lugar de parafrasear por costumbre.'),
      provenance: {
        chapter: 10,
        principle: T('Mirroring is not parroting back what she said. It is saying what she felt.',
                     'Reflejar no es repetir como un loro lo que ella dijo. Es decir lo que ella sintió.'),
        phase: 'understanding',
        trustStage: 'understanding',
        standard: 2,
        duty: 3,
        toolkit: 3
      },
      depth: {
        whyItGoesWrong: T(
            'Paraphrase is a drilled competence and most of us execute it well: repeat the substance faithfully, verify that you have it, proceed. Fidelity is the virtue at work. But content reflection is merely one of the five kinds, and it is the kind that proves you were tracking vocabulary. Applied to a remark that was carrying an emotion, it returns a neat précis of the crate and leaves the cargo sitting on the floor where she put it down.',
            'La paráfrasis es una destreza entrenada y la mayoría la ejecutamos bien: repetir la sustancia con fidelidad, verificar que la tienes, continuar. La virtud que actúa aquí es la fidelidad. Pero el reflejo de contenido es solo uno de los cinco tipos, y es el tipo que demuestra que ibas siguiendo el vocabulario. Aplicado a un comentario que llevaba dentro una emoción, devuelve un compendio pulcro del cajón y deja la mercancía en el suelo, donde ella la había posado.'),
        sheIsThinking: T(
            'Yes, those were my words. Those were not the part I needed picked up.',
            'Sí, esas eran mis palabras. Esa no era la parte que necesitaba que recogieras.'),
        ladder: {
          weak: {
            line:   T(
                '"So you want an eye cream for dark circles."',
                '«Entonces quieres un contorno de ojos para las ojeras.»'),
            effect: T(
                'Chapter 10\'s own specimen of parroting. An emotion is converted into a shelf category in nine words, and she agrees with the category.',
                'Es el espécimen de repetición mecánica del propio capítulo 10. Una emoción se convierte en una categoría de estantería en nueve palabras, y ella asiente a la categoría.')
          },
          average: {
            line:   T(
                '"So what\'s bothering you is looking tired even when you\'re not."',
                '«Entonces lo que te molesta es parecer cansada incluso cuando no lo estás.»'),
            effect: T(
                'Faithful content reflection. She verifies it, and verification is not continuation: you collect a yes and nothing arrives behind it.',
                'Es un reflejo de contenido fiel. Ella lo verifica, y verificar no es continuar: recoges un sí y detrás no llega nada.')
          },
          strong: {
            line:   T(
                '"What I\'m hearing is that it isn\'t just how you look — it\'s that you feel invisible, and you want people to see you the way you see yourself inside."',
                '«Lo que estoy oyendo es que no va solo de tu aspecto: va de que te sientes invisible y quieres que la gente te vea como tú te ves por dentro.»'),
            effect: T(
                'Chapter 10\'s feeling reflection, set beside the parroted one. She hears an emotion she had never assembled into words, and what follows is cargo you did not previously hold.',
                'Es el reflejo de sentimiento del capítulo 10, puesto al lado del mecánico. Ella oye una emoción que nunca había llegado a montar en palabras, y lo que viene después es mercancía que antes no tenías.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Paraphrase is not reflection', 'Parafrasear no es reflejar'),
          body: [
            T('Most practitioners reflect in one way: they summarise. Summary is the weakest of the five forms, because it demonstrates attention without producing anything new.',
              'La mayoría de los profesionales reflejan de una sola manera: resumen. El resumen es la más débil de las cinco formas, porque demuestra atención sin producir nada nuevo.'),
            T('The five forms are the echo (return one word), the expansion (return the sentence and ask what sits under it), the summary (return the whole and ask her to correct it), the contradiction mirror (return two things that cannot both be true) and the silence (return nothing at all and let the sentence finish itself).',
              'Las cinco formas son el eco (devolver una palabra), la ampliación (devolver la frase y preguntar qué hay debajo), el resumen (devolver el conjunto y pedir que lo corrija), el espejo de contradicción (devolver dos cosas que no pueden ser ciertas a la vez) y el silencio (no devolver nada y dejar que la frase se termine sola).'),
            T('Each has a moment. The echo opens; the expansion deepens; the summary consolidates and hands her control; the contradiction mirror is the only instrument that reaches a concern she is actively protecting; and the silence is what most consultations never use.',
              'Cada una tiene su momento. El eco abre; la ampliación profundiza; el resumen consolida y le devuelve el control; el espejo de contradicción es el único instrumento que alcanza una preocupación que ella protege activamente; y el silencio es lo que casi ninguna consulta usa.')
          ] },
        { kind: 'signal',
          avatar: 'marta',
          name: T('At the counter — Miriam, 46', 'En el mostrador — Miriam, 46'),
          client: T('"Something for wrinkles, maybe. A cream. I\'m not sure." Then, asked what made her think of changing what she uses: "I don\'t know. Maybe a couple of months ago? After my son\'s wedding. Looking at the photos I…" — her eyes drop — "It doesn\'t matter."',
                    '«Algo para las arrugas, quizá. Una crema. No estoy segura». Y luego, al preguntarle qué la llevó a pensar en cambiar lo que usa: «No sé. ¿Hace un par de meses? Después de la boda de mi hijo. Al ver las fotos yo…» —baja la mirada— «Da igual».'),
          prompt: T('Three seconds before you speak. What is actually in front of you?',
                    'Tres segundos antes de hablar. ¿Qué tienes en realidad delante?'),
          notice: [
            T('There are two sentences here and only one of them is about a cream. The first is the request; the second is the reason, and she supplied it without being asked twice.',
              'Aquí hay dos frases y solo una trata de una crema. La primera es la petición; la segunda es el motivo, y lo ofreció sin que hubiera que preguntárselo dos veces.'),
            T('The eyes dropped before the words stopped. In this book that is the standard sign that what was being said was hard — and that the door is opening rather than closing.',
              'La mirada bajó antes de que se detuvieran las palabras. En este libro esa es la señal habitual de que lo que se estaba diciendo era difícil, y de que la puerta se abre en lugar de cerrarse.'),
            T('"It doesn\'t matter" is the sentence that means it does. Said at the end of an unfinished account, it is a withdrawal offered in case the account was unwelcome.',
              '«Da igual» es la frase que significa que no da igual. Dicha al final de un relato sin terminar, es una retirada ofrecida por si el relato resultaba inoportuno.'),
            T('Whatever you say next either accepts the withdrawal or declines it. A question about creams accepts it. So does agreeing that it does not matter.',
              'Lo que digas ahora acepta esa retirada o la rechaza. Una pregunta sobre cremas la acepta. Darle la razón en que da igual, también.')
          ] },
        { kind: 'match',
          prompt: T('Match each practitioner line to the reflection form it uses.',
                    'Empareja cada frase del profesional con la forma de reflejo que usa.'),
          left: [
            { id: 'r1', text: T('"Erased."', '«Borrada».') },
            { id: 'r2', text: T('"You said you don\'t want people to ask. What would it mean if someone did?"', '«Has dicho que no quieres que te pregunten. ¿Qué significaría que alguien lo hiciera?»') },
            { id: 'r3', text: T('"So: the lines, the photographs, and the fact that your sister booked this. Have I got that right, or have I missed something?"', '«Entonces: las líneas, las fotos y el hecho de que tu hermana pidiera la cita. ¿Es correcto o me he dejado algo?»') },
            { id: 'r4', text: T('"You told me nobody notices, and you also told me you stopped putting photos up. Help me hold both of those."', '«Me has dicho que nadie lo nota, y también que dejaste de subir fotos. Ayúdame a sostener las dos cosas».') },
            { id: 'r5', text: T('(nothing — four seconds)', '(nada — cuatro segundos)') }
          ],
          right: [
            { id: 'echo', text: T('Echo', 'Eco') },
            { id: 'expansion', text: T('Expansion', 'Ampliación') },
            { id: 'summary', text: T('Summary', 'Resumen') },
            { id: 'contradiction', text: T('Contradiction mirror', 'Espejo de contradicción') },
            { id: 'silence', text: T('Silence', 'Silencio') }
          ],
          pairs: { r1: 'echo', r2: 'expansion', r3: 'summary', r4: 'contradiction', r5: 'silence' },
          why: T('Notice how short the effective forms are. The echo is one word. The contradiction mirror is two clauses and a request for help. Length is not what makes a reflection land — precision is.',
                 'Fíjate en lo cortas que son las formas eficaces. El eco es una palabra. El espejo de contradicción son dos oraciones y una petición de ayuda. No es la longitud lo que hace que un reflejo funcione: es la precisión.') },
        { kind: 'choose',
          prompt: T('She says: "I know it\'s silly. It\'s just a bit of skin." Which reflection form does this moment need?',
                    'Ella dice: «Sé que es una tontería. Es solo un poco de piel». ¿Qué forma de reflejo necesita este momento?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Summary — "So the concern is the skin texture, and you feel a bit self-conscious about it."',
                       'Resumen — «Entonces la preocupación es la textura de la piel y te sientes algo cohibida».'),
              why: T('You summarised a sentence she used to dismiss herself, so your summary carries the dismissal forward. She will agree with it, and the consultation will proceed on a version she does not believe.',
                     'Has resumido una frase con la que ella se quitaba importancia, así que tu resumen arrastra esa minimización. Estará de acuerdo, y la consulta seguirá con una versión que ella no cree.') },
            { id: 'b', verdict: 'best',
              label: T('Echo — "Silly."', 'Eco — «Una tontería».'),
              why: T('One word, returned without judgement, and she will explain it. The echo is the only form that asks a question without asking one, which is why it works on a sentence she has already apologised for.',
                     'Una palabra, devuelta sin juicio, y ella lo explicará. El eco es la única forma que pregunta sin preguntar, y por eso funciona con una frase por la que ya se ha disculpado.') },
            { id: 'c', verdict: 'harmful',
              label: T('Reassurance — "It\'s not silly at all. Lots of people feel exactly the same."',
                       'Tranquilización — «No es ninguna tontería. Muchísima gente siente exactamente lo mismo».'),
              why: T('You corrected her feeling and then made it common. Both are kind, and together they remove the specificity of her concern. What she needed was permission to keep talking, not a category to belong to.',
                     'Has corregido su sentimiento y luego lo has hecho común. Ambas cosas son amables, y juntas eliminan la especificidad de su preocupación. Lo que necesitaba era permiso para seguir hablando, no una categoría a la que pertenecer.') }
          ],
          principle: T('The echo is the cheapest instrument in the method and the most consistently skipped, because saying one word feels like doing nothing.',
                       'El eco es el instrumento más barato del método y el que más sistemáticamente se omite, porque decir una palabra parece no hacer nada.'),
          retry: {
            note: T('A different client, and a moment that needs a different one of the five.',
                    'Otra clienta, y un momento que necesita otra de las cinco.'),
            prompt: T('Nuria, 53, has just finished: "…and then I stopped going to things. Not deliberately. I just always had a reason." She stops. Four seconds have passed and she has not looked up. Which form does this moment need?',
                      'Nuria, 53, acaba de decir: «…y luego dejé de ir a cosas. No a propósito. Es que siempre tenía un motivo». Se calla. Han pasado cuatro segundos y no ha levantado la vista. ¿Qué forma necesita este momento?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Expansion — "You said you always had a reason. What kind of reasons were they?"',
                         'Ampliación — «Has dicho que siempre tenías un motivo. ¿Qué clase de motivos eran?»'),
                why: T('A good question at the wrong second. She has just said the largest thing in the consultation and has not looked up yet; a question, however gentle, asks her to perform while she is still inside it. You will get a list of reasons and lose the moment that produced them.',
                       'Una buena pregunta en el segundo equivocado. Acaba de decir lo más grande de la consulta y todavía no ha levantado la vista; una pregunta, por suave que sea, le pide actuar mientras sigue dentro de ello. Conseguirás una lista de motivos y perderás el momento que los produjo.') },
              { id: 'b', verdict: 'best',
                label: T('Silence — return nothing at all, and let the four seconds become eight.',
                         'Silencio — no devolver nada en absoluto y dejar que los cuatro segundos se conviertan en ocho.'),
                why: T('Silence is the fifth form and the only one that costs the practitioner something. She stopped because she heard herself; what happens in the next seconds is her deciding whether that sentence is allowed to stand. Anything you add — warmth included — takes the decision off her.',
                       'El silencio es la quinta forma y la única que le cuesta algo al profesional. Se paró porque se oyó a sí misma; lo que pasa en los segundos siguientes es ella decidiendo si esa frase puede quedarse en pie. Cualquier cosa que añadas, incluida la calidez, le quita la decisión.') },
              { id: 'c', verdict: 'harmful',
                label: T('Summary — "So what I\'m hearing is that this has quietly cost you a social life, and that\'s really what we\'re treating here."',
                         'Resumen — «Entonces lo que escucho es que esto te ha ido costando en silencio la vida social, y eso es lo que estamos tratando en realidad».'),
                why: T('Accurate, well built, and about four minutes early. You have summarised a sentence she has not finished having, and named a consequence she did not name. She will agree, because it is true, and the agreement ends the disclosure rather than deepening it.',
                       'Exacto, bien construido y unos cuatro minutos prematuro. Has resumido una frase que ella aún no ha terminado de tener y has nombrado una consecuencia que ella no nombró. Estará de acuerdo, porque es cierto, y ese acuerdo cierra la revelación en vez de profundizarla.') }
            ],
            principle: T('Each form has its moment, and silence has the hardest one to recognise: the seconds after she has heard herself say something. Reflection there is not gentler than a question — it is the same interruption in a kinder voice.',
                         'Cada forma tiene su momento, y el del silencio es el más difícil de reconocer: los segundos posteriores a que ella se haya oído decir algo. Reflejar ahí no es más suave que preguntar: es la misma interrupción con una voz más amable.'),
            changes: {
              axis: 'disclosure',
              detail: T('In the eight seconds she says the part she had stopped short of: the thing she stopped going to was her own birthday, two years running. The list of reasons would still have been available afterwards. That sentence would not.',
                        'En esos ocho segundos dice la parte ante la que se había frenado: aquello a lo que dejó de ir era su propio cumpleaños, dos años seguidos. La lista de motivos habría seguido disponible después. Esa frase, no.')
            }
          } },
        { kind: 'reflect',
          prompt: T('Which of the five forms do you already use? Which one have you never used in a real consultation?',
                    '¿Cuál de las cinco formas ya usas? ¿Cuál no has usado nunca en una consulta real?'),
          placeholder: T('Be honest about the one you avoid, and why.', 'Sé honesto sobre la que evitas, y por qué.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm4l2', n: 2, minutes: 11,
      treatments: [
                    {
                      name: T(
                              'Hyaluronic acid filler — mid-face',
                              'Relleno de ácido hialurónico — tercio medio'),
                      price: T('€780 for 2 ml', '780 € por 2 ml'),
                      why: T(
                             'Volume decisions are irreversible enough on the day that a practitioner wants to be certain she has understood, and wanting to be certain is what produces the safe, unfalsifiable reflection.',
                             'Las decisiones de volumen son lo bastante irreversibles en el día como para que el profesional quiera estar seguro de haber entendido, y querer estar seguro es lo que produce el reflejo seguro e imposible de desmentir.'),
                      moment: T(
                                'She has talked for four minutes about her mother, her sister and a photograph from last Christmas, and stopped.',
                                'Ha hablado cuatro minutos de su madre, de su hermana y de una foto de las Navidades pasadas, y se ha parado.'),
                      weak: {
                              line: T(
                                      '"So what I\'m hearing is that you want to feel more like yourself and more confident in photographs."',
                                      '«O sea que lo que estoy escuchando es que quieres sentirte más tú y con más seguridad en las fotos.»'),
                              cost: T(
                                      'True of almost every woman who has ever sat there, which makes it impossible for her to disagree with and impossible for her to feel found by. She says yes, and the appointment has gained nothing.',
                                      'Es cierto de casi cualquier mujer que se haya sentado ahí, así que le resulta imposible discrepar e imposible sentirse encontrada. Dice que sí, y la cita no ha ganado nada.')
                            },
                      strong: {
                                line: T(
                                        '"What I\'m hearing is that you don\'t mind ageing. You mind turning into your mother. Have I got that wrong?"',
                                        '«Lo que estoy escuchando es que envejecer no te importa. Lo que te importa es convertirte en tu madre. ¿Lo he entendido mal?»'),
                                gain: T(
                                        'Specific enough to be wrong, which is the whole requirement. If she corrects it — it is not her mother, it is her sister — the correction is worth more than an accurate reflection would have been.',
                                        'Es lo bastante concreto como para estar equivocado, que es todo lo que se pide. Si te corrige —no es su madre, es su hermana—, la corrección vale más de lo que habría valido un reflejo exacto.')
                              }
                    },
                    {
                      name: T('Laser hair removal — course of six', 'Depilación láser — bono de seis'),
                      price: T(
                               '€690 for six sessions, legs and bikini',
                               '690 € el bono de seis, piernas e ingles'),
                      why: T(
                             'Nobody expects to be reflected at a hair removal consultation, which is why one honest sentence there does more work than five in a clinical one.',
                             'Nadie espera que la reflejen en una consulta de depilación, y por eso una sola frase honesta ahí hace más trabajo que cinco en una clínica.'),
                      moment: T(
                                'She has explained that she is doing this before a holiday, and mentioned in passing that it is the first one since the divorce.',
                                'Ha explicado que lo hace antes de un viaje, y ha mencionado de paso que es el primero desde el divorcio.'),
                      weak: {
                              line: T(
                                      '"That sounds like a good trip to be getting ready for. Six sessions is €690, and we can fit four of them in before you go."',
                                      '«Suena a un viaje bonito para el que prepararse. Seis sesiones son 690 €, y antes de que te vayas metemos cuatro.»'),
                              cost: T(
                                      'Warm and logistically excellent, and it lets the only important word in the sentence go past. She will not say divorce twice, and the practitioner who does not catch it the first time does not get another chance.',
                                      'Es cálido y logísticamente excelente, y deja pasar la única palabra importante de la frase. No va a decir «divorcio» dos veces, y quien no la caza a la primera no tiene otra oportunidad.')
                            },
                      strong: {
                                line: T(
                                        '"First one since. What I\'m hearing is that this trip has a bit more riding on it than a tan."',
                                        '«El primero desde entonces. Lo que estoy escuchando es que en ese viaje te juegas algo más que ponerte morena.»'),
                                gain: T(
                                        'Picks up the word she dropped and offers a reading she can correct. Six sessions attached to a first holiday alone is a course she finishes; six sessions attached to a tan is one she abandons in week four.',
                                        'Recoge la palabra que ha soltado y ofrece una lectura que ella puede corregir. Seis sesiones enganchadas a un primer viaje sola son un bono que termina; seis sesiones enganchadas a un moreno son uno que abandona en la cuarta semana.')
                              }
                    }
                  ],
      conversation: {
                      setting: T(
                                 'Consultation for mid-face filler, 2 ml, €780. Minute eleven — Discovery is finished and the reflection is about to be made.',
                                 'Consulta de relleno de tercio medio, 2 ml, 780 €. Minuto once: el Descubrimiento ha terminado y toca el reflejo.'),
                      before: [
                                {
                                  who: 'client',
                                  line: T(
                                          '"I saw a photo of myself from Christmas and I genuinely thought it was my mother for a second."',
                                          '«Vi una foto mía de Navidad y por un segundo pensé de verdad que era mi madre.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"That happens to a lot of people, and it\'s always a jolt. What I\'m hearing is that you want to feel more like yourself again."',
                                          '«Eso le pasa a mucha gente y siempre es un golpe. Lo que estoy escuchando es que quieres volver a sentirte más tú.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"Yes, I suppose so."', '«Sí, supongo que sí.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Then let\'s look at the mid-face, because that\'s where photographs are least kind. Two millilitres there is €780, and it would be one appointment."',
                                          '«Pues miremos el tercio medio, que es donde las fotos son menos amables. Dos mililitros ahí son 780 €, y sería una sola cita.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"And how long does that last?"', '«¿Y eso cuánto dura?»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"We\'d usually be reviewing it somewhere between nine and twelve months. Most people come back roughly once a year."',
                                          '«Normalmente lo revisaríamos entre los nueve y los doce meses. La mayoría vuelve más o menos una vez al año.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"Alright. Let me have a think about the timing."',
                                          '«Vale. Déjame pensar lo de las fechas.»')
                                }
                              ],
                      after: [
                               {
                                 who: 'client',
                                 line: T(
                                         '"I saw a photo of myself from Christmas and I genuinely thought it was my mother for a second."',
                                         '«Vi una foto mía de Navidad y por un segundo pensé de verdad que era mi madre.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"What I\'m hearing is that you don\'t mind getting older. You mind becoming her. Have I got that wrong?"',
                                         '«Lo que estoy escuchando es que hacerte mayor no te importa. Lo que te importa es convertirte en ella. ¿Lo he entendido mal?»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"…That\'s not quite it. I don\'t mind becoming her. I mind that she looked like that at fifty and she was already finished by then."',
                                         '«…No es exactamente eso. Convertirme en ella no me importa. Me importa que a los cincuenta ella ya tenía esa cara y ya estaba acabada.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T('"Finished."', '«Acabada.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"She stopped. She stopped going out, she stopped buying clothes, she stopped all of it. And I am not doing that."',
                                         '«Se paró. Dejó de salir, dejó de comprarse ropa, lo dejó todo. Y yo eso no lo pienso hacer.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Then the photograph wasn\'t about your face. It was a warning about a life, and you\'ve come in to argue with it."',
                                         '«Entonces la foto no iba de tu cara. Era un aviso sobre una vida, y has venido a discutírselo.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"Yes. That\'s exactly why I made the appointment."',
                                         '«Sí. Por eso exactamente pedí la cita.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Two millilitres in the mid-face is €780. I\'ll tell you now that it isn\'t the whole of what you just described, and I\'d rather say that than pretend."',
                                         '«Dos mililitros en el tercio medio son 780 €. Te digo ya que eso no es todo lo que acabas de describir, y prefiero decírtelo a fingir.»')
                               }
                             ],
                      whatChanged: T(
                                     'The first reflection was safe and therefore useless. Feeling more like yourself is true of everyone, cannot be contradicted, and produced the flattest possible agreement — yes, I suppose so — which is the sound of a client who has not been found. Everything after it is competent product talk landing on nobody. The second reflection was specific enough to be wrong, and it was wrong, which is the point: the correction produced the word finished, and finished produced a woman describing a life she is refusing. Note that the second version ends by declining to claim the treatment covers it. That refusal is only affordable because the reflection did its work first.',
                                     'El primer reflejo era seguro y por tanto inútil. «Sentirte más tú» es cierto de todo el mundo, no se puede contradecir y produjo el acuerdo más plano posible —sí, supongo que sí—, que es el sonido de una clienta a la que no han encontrado. Lo que viene después es charla de producto competente que no aterriza en nadie. El segundo reflejo era lo bastante concreto como para estar equivocado, y lo estaba, que es justo la gracia: la corrección produjo la palabra «acabada», y «acabada» produjo a una mujer describiendo una vida que se niega a tener. Fíjate en que la segunda versión termina negándose a afirmar que el tratamiento lo cubre. Esa negativa solo es asumible porque el reflejo hizo antes su trabajo.'),
                      cost: T(
                              '€780 deferred over timing, which is what a client says when nothing has been settled. The larger loss is that the word finished now belongs to whichever clinic guesses wrong out loud first.',
                              '780 € aplazados por las fechas, que es lo que dice una clienta cuando no se ha resuelto nada. La pérdida mayor es que la palabra «acabada» pasa a ser de la primera clínica que se equivoque en voz alta.')
                    },
      title: T('"What I am hearing is…"', '«Lo que estoy escuchando es…»'),
      objective: T('Build the summary that earns the right to recommend, and hand the client the correction.',
                   'Construir el resumen que da derecho a recomendar y devolver a la clienta la corrección.'),
      provenance: {
        chapter: 6,
        principle: T('Reflection does not have to be right the first time — it has to be honest. If she says that is not quite what she meant, that is better.',
                     'El reflejo no tiene que ser exacto a la primera: tiene que ser honesto. Si ella dice que no era exactamente eso, mejor todavía.'),
        phase: 'understanding',
        trustStage: 'understanding',
        standard: 2,
        duty: 2,
        toolkit: 1
      },
      depth: {
        whyItGoesWrong: T(
            'Having listened attentively, you want your summary to be correct, so it is assembled with care, hedged where uncertain, and then — since correctness feels like the objective — defended a little when she half-amends it. Accuracy is the virtue misfiring. Chapter 6 asks for the reverse: a summary is not a paper to pass but a draft surrendered for amendment, and hearing that it is not quite what she meant is the superior outcome, because the amendment turns up in her vocabulary rather than yours.',
            'Después de haber escuchado con atención, quieres que tu resumen sea correcto, así que se ensambla con cuidado, se matiza donde hay incertidumbre y luego —como la corrección parece ser el objetivo— se defiende un poco cuando ella lo enmienda a medias. La virtud que falla aquí es la exactitud. El capítulo 6 pide lo contrario: un resumen no es un examen que aprobar, sino un borrador entregado para que lo enmienden, y oír que no es exactamente lo que ella quería decir es el desenlace superior, porque la enmienda aparece con el vocabulario de ella y no con el tuyo.'),
        sheIsThinking: T(
            'Almost. If I amend her now she will conclude I have been explaining myself badly all afternoon.',
            'Casi. Si la enmiendo ahora, concluirá que llevo toda la tarde explicándome mal.'),
        ladder: {
          weak: {
            line:   T(
                '"Well, that\'s what I understood from what you told me."',
                '«Bueno, es lo que yo he entendido de lo que me has contado.»'),
            effect: T(
                'Defends the draft. She concedes rather than start a disagreement, and the inaccurate draft becomes the foundation of everything after it.',
                'Defiende el borrador. Ella cede antes que iniciar un desacuerdo, y el borrador inexacto se convierte en el cimiento de todo lo que viene después.')
          },
          average: {
            line:   T(
                '"Okay — let me put that another way."',
                '«Vale, déjame decirlo de otra manera.»'),
            effect: T(
                'A second attempt with you still holding the pen. Draft two is yours as well, which means it is free to be wrong in a fresh direction.',
                'Es un segundo intento contigo todavía con el bolígrafo en la mano. El borrador dos también es tuyo, lo que significa que es libre de equivocarse en una dirección nueva.')
          },
          strong: {
            line:   T(
                '"Then tell me what it is. I\'d rather have your words than mine."',
                '«Entonces dime tú cuál es. Prefiero tus palabras a las mías.»'),
            effect: T(
                'Surrenders the pen. Her amendment is habitually the most exact utterance of the whole afternoon, and it is the one worth building on.',
                'Entrega el bolígrafo. Su enmienda es habitualmente el enunciado más exacto de toda la tarde, y es el que merece la pena usar como base.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The sentence that ends Discovery', 'La frase que cierra el Descubrimiento'),
          body: [
            T('Phase 4 has one deliverable: a summary the client corrects. Not accepts — corrects. A summary that produces "yes, exactly" has usually been written to be agreed with; a summary that produces "almost, but it\'s more that…" has done its job.',
              'La Fase 4 tiene un solo entregable: un resumen que la clienta corrige. No que acepte: que corrija. Un resumen que produce «sí, exacto» suele estar escrito para que se esté de acuerdo; uno que produce «casi, pero es más bien que…» ha hecho su trabajo.'),
            T('The structure is fixed: what she wants to change, why it matters now, what she has already tried, what she is protecting, and what she has told you she does not want. Then the invitation: "What have I got wrong?"',
              'La estructura es fija: qué quiere cambiar, por qué importa ahora, qué ha probado ya, qué está protegiendo y qué te ha dicho que no quiere. Luego la invitación: «¿En qué me he equivocado?»'),
            T('Recommending without this is the commonest structural error in aesthetic consultation. It is not that the recommendation is wrong; it is that nothing has established the right to make it.',
              'Recomendar sin esto es el error estructural más común de la consulta estética. No es que la recomendación sea errónea: es que nada ha establecido el derecho a hacerla.')
          ] },
        { kind: 'order',
          prompt: T('Put the five elements of the summary into the order the method uses.',
                    'Ordena los cinco elementos del resumen según el orden que usa el método.'),
          items: [
            { id: 's_change', text: T('What she wants to change — in her own words, not the clinical name.', 'Qué quiere cambiar, con sus palabras, no con el nombre clínico.') },
            { id: 's_why', text: T('Why it matters now — the event, the person, the photograph.', 'Por qué importa ahora: el acontecimiento, la persona, la foto.') },
            { id: 's_tried', text: T('What she has already tried, and what it cost her.', 'Qué ha probado ya y qué le costó.') },
            { id: 's_protect', text: T('What she is protecting — the identity concern she disclosed.', 'Qué está protegiendo: la preocupación de identidad que reveló.') },
            { id: 's_not', text: T('What she has told you she does not want to happen.', 'Qué te ha dicho que no quiere que pase.') }
          ],
          correct: ['s_change', 's_why', 's_tried', 's_protect', 's_not'],
          why: T('The last element is the one practitioners drop, and it is the one that makes the summary feel like protection rather than a sales recap. Ending on what you will not do is what makes the next phase safe.',
                 'El último elemento es el que los profesionales suprimen, y es el que hace que el resumen se sienta como protección y no como un recuento comercial. Terminar por lo que no vas a hacer es lo que hace segura la fase siguiente.') },
        { kind: 'compare',
          prompt: T('Two summaries of the same consultation. Which one earns the right to recommend?',
                    'Dos resúmenes de la misma consulta. ¿Cuál da derecho a recomendar?'),
          a: { label: T('Summary A', 'Resumen A'),
               text: T('"So what I\'m hearing is that you\'d like to soften the lines around the eyes and mouth, you\'ve tried creams without much success, and you\'d like something effective but subtle. Is that fair?"',
                       '«Entonces lo que escucho es que te gustaría suavizar las líneas de ojos y boca, has probado cremas sin mucho éxito y quieres algo eficaz pero sutil. ¿Es así?»') },
          b: { label: T('Summary B', 'Resumen B'),
               text: T('"What I\'m hearing is: you don\'t mind ageing — you said that twice — but you don\'t want to look like you\'ve given up. The engagement photographs are why it\'s now and not next year. You bought a cream for eight months you didn\'t believe in. And the thing you\'d hate most is someone asking what you\'ve had done. What have I got wrong?"',
                       '«Lo que escucho es: no te importa envejecer —lo has dicho dos veces— pero no quieres parecer que te has rendido. Las fotos de la pedida son la razón de que sea ahora y no el año que viene. Compraste una crema durante ocho meses sin creer en ella. Y lo que más odiarías es que alguien te preguntara qué te has hecho. ¿En qué me he equivocado?»') },
          answer: 'b',
          why: T('A is accurate and interchangeable — it could summarise forty different clients. B quotes her twice, names the deadline, records money spent on hope, states the outcome she fears, and ends by handing her the correction. Only B contains anything a recommendation could be traced back to.',
                 'A es exacto e intercambiable: podría resumir a cuarenta clientas distintas. B la cita dos veces, nombra el plazo, registra el dinero gastado en esperanza, enuncia el resultado que teme y termina devolviéndole la corrección. Solo B contiene algo a lo que pueda trazarse una recomendación.') },
        { kind: 'timedPause',
          prompt: T('You have delivered summary B and asked "What have I got wrong?". Do not fill the pause.',
                    'Has dado el resumen B y has preguntado «¿En qué me he equivocado?». No llenes la pausa.'),
          first: T('"No, that\'s… that\'s about right, yes."', '«No, eso… eso está bastante bien, sí».'),
          seconds: 4,
          second: T('"...Although. The photographs aren\'t really it. My mother has the same face I have, and I watched her stop going to things. That\'s what I\'m actually frightened of."',
                    '«...Aunque. Las fotos no son lo importante en realidad. Mi madre tiene la misma cara que yo, y la vi dejar de ir a sitios. Eso es lo que realmente me da miedo».'),
          why: T('The correction almost never comes first. What arrives after the pause is not a detail — it replaces the reason you were about to build the recommendation on. This is the single highest-value four seconds in the consultation.',
                 'La corrección casi nunca llega primero. Lo que llega tras la pausa no es un detalle: sustituye la razón sobre la que ibas a construir la recomendación. Son los cuatro segundos de mayor valor de la consulta.') },
        { kind: 'choose',
          prompt: T('Your summary has just been corrected. She has told you the photographs were not really it — what frightens her is having watched her mother stop going to things. What is the first thing you do with that?',
                    'Acaban de corregirte el resumen. Te ha dicho que las fotos no eran lo importante: lo que le da miedo es haber visto a su madre dejar de ir a sitios. ¿Qué es lo primero que haces con eso?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Fold it into a better summary: "So it\'s not really the photographs — it\'s that you don\'t want to follow the same path your mother did. Have I got it right now?"',
                       'Incorporarlo a un resumen mejor: «Entonces no son las fotos: es que no quieres seguir el mismo camino que tu madre. ¿Ahora sí?»'),
              why: T('Technically correct and one beat too fast. A second summary offered immediately turns her correction into raw material for your next attempt, and she will confirm it. What has not happened is any acknowledgement that she said something hard — which is the thing that decided whether she said it at all.',
                     'Técnicamente correcto y un tiempo demasiado rápido. Un segundo resumen ofrecido de inmediato convierte su corrección en materia prima para tu siguiente intento, y ella lo confirmará. Lo que no ha ocurrido es ningún reconocimiento de que ha dicho algo difícil, que es justo lo que decidió si llegaba a decirlo.') },
            { id: 'b', verdict: 'best',
              label: T('"Thank you — that\'s a completely different thing, and I would have built the whole plan on the wrong one." Then stop.',
                       '«Gracias; eso es algo completamente distinto, y yo habría montado todo el plan sobre lo equivocado». Y parar.'),
              why: T('You named the size of the correction and what it saved, and then you did not use it. This is the sentence that makes the next correction possible: she has now seen that telling you you are wrong produces gratitude rather than a repaired argument. Expect a second correction, and it is usually the better one.',
                     'Has nombrado el tamaño de la corrección y lo que ha evitado, y luego no la has utilizado. Esta es la frase que hace posible la siguiente corrección: ella ya ha visto que decirte que te equivocas produce agradecimiento y no un argumento remendado. Espera una segunda corrección, y suele ser la buena.') },
            { id: 'c', verdict: 'harmful',
              label: T('"That makes complete sense — and it\'s exactly why what I have in mind would work for you."',
                       '«Tiene todo el sentido, y por eso justamente lo que tengo en mente te iría bien».'),
              why: T('Her disclosure has become a bridge to your recommendation inside the same breath. What she learns is precise and permanent: difficult things said in this room produce a sales transition. She will not say the third one.',
                     'Su revelación se ha convertido en un puente hacia tu recomendación en la misma frase. Lo que aprende es preciso y permanente: las cosas difíciles dichas en esta sala producen una transición comercial. No dirá la tercera.') }
          ],
          principle: T('Phase 4\'s deliverable is a summary she corrects. The correction only comes twice if the first one was received rather than used.',
                       'El entregable de la Fase 4 es un resumen que ella corrige. La corrección solo llega dos veces si la primera se recibió en lugar de aprovecharse.'),
          retry: {
            note: T('The summary again, on a consultation where nothing was ever corrected.',
                    'Otra vez el resumen, en una consulta donde nunca se corrigió nada.'),
            prompt: T('Different client. You deliver the five-element summary and ask what you got wrong. She says: "Yes — exactly. That\'s it exactly." Nothing else arrives in the pause. What do you do?',
                      'Otra clienta. Das el resumen de cinco elementos y preguntas en qué te has equivocado. Dice: «Sí, exacto. Es exactamente eso». En la pausa no llega nada más. ¿Qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Take it as the gate opening and move to the examination — she has confirmed your understanding in her own words.',
                         'Tomarlo como que la compuerta se abre y pasar a la exploración: ha confirmado tu comprensión con sus propias palabras.'),
                why: T('"Exactly" is agreement, not correction, and agreement is cheaper than disclosure. A summary specific enough to be wrong somewhere is almost always wrong somewhere; one that produces only confirmation was usually written to be agreed with — and you are about to build on it.',
                       '«Exacto» es acuerdo, no corrección, y el acuerdo cuesta menos que revelar. Un resumen lo bastante específico como para fallar en algo casi siempre falla en algo; uno que solo produce confirmación suele estar escrito para que se esté de acuerdo, y estás a punto de construir sobre él.') },
              { id: 'b', verdict: 'best',
                label: T('Put one specific thing back on the table and get it wrong on purpose: "Then let me test one part of it — I had you down as wanting this finished before the summer. Is that right, or have I invented the deadline?"',
                         'Devolver a la mesa un dato concreto y equivocarte a propósito: «Déjame comprobar una parte: yo había entendido que querías tenerlo terminado antes del verano. ¿Es así, o me he inventado el plazo?»'),
                why: T('It hands her a concrete, checkable claim instead of a general invitation. "What have I got wrong?" asks her to audit five elements at once; a single wrong-able detail asks for one word — and the correction that comes back, whether it is the deadline or something next to it, is the material the open question failed to produce.',
                       'Le entregas una afirmación concreta y comprobable en lugar de una invitación general. «¿En qué me he equivocado?» le pide auditar cinco elementos a la vez; un solo detalle equivocable le pide una palabra, y la corrección que vuelve —sea el plazo o algo contiguo— es el material que la pregunta abierta no consiguió producir.') },
              { id: 'c', verdict: 'harmful',
                label: T('Say it back a third time, more warmly, until she volunteers something — clients open up if you stay in the summary long enough.',
                         'Repetirlo una tercera vez, con más calidez, hasta que ofrezca algo: las clientas se abren si te quedas el tiempo suficiente en el resumen.'),
                why: T('Repetition is not depth. The third pass reads as a practitioner waiting for a particular answer, and the reliable way to end that is to give one. What you will get is an invented detail offered to release you both, and it will go into the record as hers.',
                       'Repetir no es profundizar. La tercera pasada se lee como un profesional esperando una respuesta concreta, y la forma fiable de acabar con eso es darle una. Lo que conseguirás es un detalle inventado, ofrecido para liberaros a los dos, y entrará en el registro como suyo.') }
            ],
            principle: T('If you are never corrected, your summaries are too general to be useful. A wrong-able detail is easier to correct than an open invitation.',
                         'Si nunca te corrigen, tus resúmenes son demasiado generales para servir. Un detalle equivocable es más fácil de corregir que una invitación abierta.'),
            changes: {
              axis: 'recommendation',
              detail: T('She corrects the deadline you invented: it is not the summer, it is that she is back in court in October. The staging of the plan now has a reason attached to it instead of a default of six weeks.',
                        'Corrige el plazo que te inventaste: no es el verano, es que en octubre vuelve a tener juicio. Ahora las fases del plan tienen un motivo detrás en lugar de un intervalo de seis semanas por defecto.')
            }
          } },
        { kind: 'check',
          prompt: T('What does a summary that produces only "yes, exactly" most often indicate?',
                    '¿Qué indica normalmente un resumen que solo produce «sí, exacto»?'),
          options: [
            { id: 'a', text: T('Discovery was complete and the client feels understood.', 'El descubrimiento fue completo y la clienta se siente comprendida.') },
            { id: 'b', text: T('The summary was written to be agreed with, so nothing new was produced.', 'El resumen se escribió para ser aceptado, así que no produjo nada nuevo.') },
            { id: 'c', text: T('The client is ready to hear the price.', 'La clienta está lista para escuchar el precio.') }
          ],
          answer: 'b',
          why: T('It can occasionally mean (a). But a summary specific enough to be wrong somewhere is almost always corrected somewhere, and the correction is the material. If you are never corrected, your summaries are too general to be useful.',
                 'A veces puede significar (a). Pero un resumen lo bastante específico como para equivocarse en algo casi siempre se corrige en algo, y la corrección es el material. Si nunca te corrigen, tus resúmenes son demasiado generales para servir.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm4l3', n: 3, minutes: 11,
      treatments: [
                    {
                      name: T('Tensor threads — mid-face', 'Hilos tensores — tercio medio'),
                      price: T('€1,500, eight to ten threads', '1.500 €, de ocho a diez hilos'),
                      why: T(
                             'At this price a woman usually arrives having decided she is not the sort of person who spends this, which sets up the cleanest contradiction in the clinic.',
                             'A este precio, una mujer suele llegar habiendo decidido que ella no es de las que se gastan esto, lo que monta la contradicción más limpia de la clínica.'),
                      moment: T(
                                'She says it is not a priority and she is only asking, and she has brought a printout of your price list with three lines highlighted.',
                                'Dice que no es una prioridad y que solo pregunta, y ha traído impresa tu lista de precios con tres líneas subrayadas.'),
                      weak: {
                              line: T(
                                      '"No pressure at all — have a look at the list with me and ask whatever you like, there\'s no obligation."',
                                      '«Sin ninguna presión. Miramos la lista juntas y pregunta lo que quieras, no hay compromiso.»'),
                              cost: T(
                                      'Respects what she said and ignores what she did. She keeps the only-asking position for the rest of the appointment because nobody offered her a way out of it, and only-asking does not book.',
                                      'Respeta lo que ha dicho e ignora lo que ha hecho. Mantiene la posición de «solo pregunto» el resto de la cita porque nadie le ha ofrecido una salida, y «solo pregunto» no reserva.')
                            },
                      strong: {
                                line: T(
                                        '"You say it isn\'t a priority, and you\'ve highlighted three lines. Which of those two do I believe?"',
                                        '«Dices que no es una prioridad y has subrayado tres líneas. ¿A cuál de las dos cosas le hago caso?»'),
                                gain: T(
                                        'Returns the gap without accusing her of anything, and lets her choose which version to keep. Almost nobody keeps the not-a-priority one once it has been said out loud next to the highlighter.',
                                        'Devuelve la distancia sin acusarla de nada y la deja elegir con qué versión se queda. Casi nadie se queda con la de «no es una prioridad» una vez dicha en voz alta al lado del subrayador.')
                              }
                    },
                    {
                      name: T('Skin boosters — face', 'Bioestimulación con ácido hialurónico — rostro'),
                      price: T('€660 for two sessions', '660 € las dos sesiones'),
                      why: T(
                             'Boosters are bought by women who describe themselves as low-maintenance, which is a self-description that contradicts the appointment they are currently sitting in.',
                             'La bioestimulación la compran mujeres que se describen como poco presumidas, una autodescripción que contradice la cita en la que están sentadas.'),
                      moment: T(
                                'She says she has never really bothered with any of this, while telling you the name of a serum she has used for six years.',
                                'Dice que ella nunca se ha preocupado mucho por estas cosas, mientras te dice el nombre de un sérum que lleva usando seis años.'),
                      weak: {
                              line: T(
                                      '"That\'s completely fine — plenty of people start from zero, and two sessions at €660 is a very small commitment."',
                                      '«Totalmente válido. Mucha gente empieza de cero, y dos sesiones por 660 € es un compromiso pequeñísimo.»'),
                              cost: T(
                                      'Accepts the low-maintenance story and sells against it, which means selling to a woman who has told you she does not buy this kind of thing. She agrees with herself and leaves.',
                                      'Acepta el relato de «poco presumida» y vende contra él, o sea que le vende a una mujer que te ha dicho que ella no compra estas cosas. Se da la razón a sí misma y se va.')
                            },
                      strong: {
                                line: T(
                                        '"Six years with the same serum isn\'t someone who doesn\'t bother. What made you decide you weren\'t that kind of woman?"',
                                        '«Seis años con el mismo sérum no es alguien a quien no le preocupe. ¿Qué te hizo decidir que tú no eras de ese tipo de mujer?»'),
                                gain: T(
                                        'Holds the two facts next to each other and asks about the story rather than the skin. The answer is usually somebody who told her, years ago, that caring was vanity.',
                                        'Pone los dos hechos uno al lado del otro y pregunta por el relato, no por la piel. La respuesta suele ser alguien que le dijo, hace años, que cuidarse era vanidad.')
                              }
                    }
                  ],
      title: T('The contradiction mirror', 'El espejo de contradicción'),
      objective: T('Name two things a client said that cannot both be true, without accusing her of either.',
                   'Nombrar dos cosas que la clienta dijo y que no pueden ser ciertas a la vez, sin acusarla de ninguna.'),
      provenance: {
        chapter: 6,
        principle: T('Contradiction reflection gently returns the gap between what was said and what is felt, and when it is accurate it creates a moment of profound release.',
                     'El reflejo de contradicción devuelve con suavidad la distancia entre lo dicho y lo sentido, y cuando acierta produce un momento de liberación profunda.'),
        phase: 'understanding',
        trustStage: 'understanding',
        standard: 2,
        duty: 1,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'Two incompatible statements invite a conscientious mind to establish which is the case: does this trouble you or does it not? Precision is the virtue, and in clinical work precision is the entire job. But a gap between what was uttered and what is felt is not an inconsistency awaiting resolution. It is the territory she is living in. Invite her to pick a side and she will defend one of them, and the one she defends will always be the presentable one.',
            'Dos afirmaciones incompatibles invitan a una mente escrupulosa a establecer cuál es el caso: ¿esto te inquieta o no te inquieta? La virtud es la precisión y, en el trabajo clínico, la precisión es el oficio entero. Pero una grieta entre lo enunciado y lo sentido no es una incoherencia a la espera de resolución. Es el territorio en el que ella vive. Invítala a elegir bando y defenderá uno de los dos, y el que defienda será siempre el presentable.'),
        sheIsThinking: T(
            'I called it a small thing because that is easier than saying how many minutes of every morning it takes.',
            'Le he llamado tontería porque es más fácil que decir cuántos minutos de cada mañana se lleva.'),
        ladder: {
          weak: {
            line:   T(
                '"You\'ve mentioned it three times, so I don\'t think it is small."',
                '«Lo has mencionado tres veces, así que no creo que sea una tontería.»'),
            effect: T(
                'Accurate, and it is an inconsistency with her name attached. She defends the word small, and the territory shuts behind it.',
                'Es exacto, y es una incoherencia con su nombre pegado encima. Ella defiende la palabra tontería, y el territorio se cierra detrás.')
          },
          average: {
            line:   T(
                '"Would you like me to take a look at it anyway?"',
                '«¿Quieres que le eche un vistazo de todas formas?»'),
            effect: T(
                'Kind, and it converts the territory into a task for the examination lamp. What she has been carrying becomes a patch of tissue to be graded.',
                'Es amable, y convierte el territorio en una tarea para la lámpara de exploración. Aquello que ella lleva cargando se convierte en un trozo de tejido que hay que graduar.')
          },
          strong: {
            line:   T(
                '"You say it\'s a small thing — but something in the way you tell me says it isn\'t small at all for you."',
                '«Dices que es una tontería, pero algo en la forma en que me lo cuentas dice que para ti no es ninguna tontería.»'),
            effect: T(
                'Chapter 6\'s contradiction reflection. It hands back the territory without charging either half with lying, and the chapter records profound release on the far side of it.',
                'Es el reflejo de contradicción del capítulo 6. Le devuelve el territorio sin acusar de mentir a ninguna de las dos mitades, y el capítulo registra una descarga profunda al otro lado.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('The only instrument that reaches a protected concern', 'El único instrumento que alcanza una preocupación protegida'),
          body: [
            T('Clients protect their real concern with a smaller true statement. "Nobody notices." "It doesn\'t bother me that much." "I\'m only here because my sister made me." Each is true, and each is placed in front of something else.',
              'Las clientas protegen su preocupación real con una afirmación más pequeña y verdadera. «Nadie lo nota». «Tampoco me molesta tanto». «Solo he venido porque mi hermana me obligó». Cada una es cierta y cada una está colocada delante de otra cosa.'),
            T('You cannot ask past that statement, because asking implies you did not believe it. The contradiction mirror does not ask. It places two of her own sentences side by side and asks for help holding both.',
              'No puedes preguntar más allá de esa afirmación, porque preguntar implica que no la creíste. El espejo de contradicción no pregunta. Coloca dos de sus propias frases una junto a otra y pide ayuda para sostener las dos.'),
            T('Everything then rests on the wording, and the wording is the part that is decided in half a second, under pressure, at minute nineteen.',
              'Todo depende después de la formulación, y la formulación es la parte que se decide en medio segundo, con presión encima, en el minuto diecinueve.')
          ] },
        { kind: 'compare',
          prompt: T('At minute three she said: "My husband thinks I am perfect as I am, so this is really just for me." At minute nineteen: "He did say something at dinner in January. Nothing, really." Two ways of putting those two sentences back in the room. Only one of them is the contradiction mirror.',
                    'En el minuto tres dijo: «Mi marido piensa que estoy perfecta como estoy, así que esto es solo por mí». En el minuto diecinueve: «Algo dijo en una cena en enero. Tampoco nada». Dos maneras de devolver esas dos frases a la sala. Solo una es el espejo de contradicción.'),
          a: { label: T('Version A', 'Versión A'),
               text: T('"You say this is just for you — but it sounds like what he said in January has stayed with you rather more than you are letting on."',
                       '«Dices que esto es solo por ti, pero parece que lo que dijo en enero se te ha quedado bastante más de lo que reconoces».') },
          b: { label: T('Version B', 'Versión B'),
               text: T('"You told me he thinks you are perfect as you are. And you told me about the thing he said at dinner in January. Help me hold both of those."',
                       '«Me has contado que él piensa que estás perfecta como estás. Y me has contado lo que dijo en la cena de enero. Ayúdame a sostener las dos cosas».') },
          answer: 'b',
          why: T('A is probably correct, and being correct is not the instrument. It is an interpretation, and an interpretation leaves her one move: agree that she was understating, or deny it. Both are positions about her own honesty, which she did not come here to defend. "It sounds like" and "but you also said" do the same work as each other — they hand her an inconsistency, and inconsistency is something people defend rather than explain. B adds nothing to her two sentences, returns them in the order she said them, and puts the difficulty on your side of the desk with the word "help". There is no question mark in it, and that is deliberate: a question invites an answer, and what you want is an explanation she chooses to give.',
                 'La A probablemente acierta, y acertar no es el instrumento. Es una interpretación, y una interpretación le deja un solo movimiento: admitir que se quedaba corta o negarlo. Las dos son posturas sobre su propia sinceridad, que no ha venido aquí a defender. «Parece que» y «pero también dijiste» hacen el mismo trabajo: le entregan una incoherencia, y la incoherencia se defiende en lugar de explicarse. La B no añade nada a sus dos frases, las devuelve en el orden en que las dijo y pone la dificultad de tu lado de la mesa con la palabra «ayúdame». No lleva signo de interrogación, y es a propósito: una pregunta pide respuesta, y lo que tú quieres es una explicación que ella decida dar.') },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 10', 'The Beauty Sales Secrets — Capítulo 10'),
          quote: T('Two true sentences that cannot both be true are not a lie. They are a door.',
                   'Dos frases verdaderas que no pueden ser ambas ciertas no son una mentira. Son una puerta.'),
          note: T('In the simulator this is the second turning point of Case 02. Carmen says her husband\'s opinion does not matter, and later that she has thought about what he said at dinner. Mirroring those two sentences is what discloses the spouse comment; skipping it leaves that item withheld all the way into Phase 7.',
                  'En el simulador este es el segundo punto de inflexión del Caso 02. Carmen dice que la opinión de su marido no importa y luego que ha pensado en lo que él dijo en la cena. Reflejar esas dos frases es lo que revela el comentario del marido; saltárselo deja ese elemento retenido hasta la Fase 7.') },
        { kind: 'spot',
          prompt: T('One line turned a contradiction mirror into an accusation. Which one?',
                    'Una línea convirtió un espejo de contradicción en una acusación. ¿Cuál?'),
          lines: [
            { who: 'client', text: T('"Honestly, nobody has ever mentioned it. It\'s entirely in my own head."', '«Sinceramente, nadie me ha dicho nunca nada. Está todo en mi cabeza».') },
            { who: 'you', text: T('"Earlier you told me you\'d stopped sitting on the left at dinner."', '«Antes me has dicho que dejaste de sentarte a la izquierda en las cenas».') },
            { who: 'client', text: T('"...I did say that, yes."', '«...Sí, eso lo he dicho».') },
            { who: 'you', text: T('"So it can\'t really be entirely in your head, can it?"', '«Entonces no puede estar todo en tu cabeza, ¿no?»') },
            { who: 'client', text: T('"I suppose not. Anyway — what would you recommend?"', '«Supongo que no. En fin, ¿qué me recomendarías?»') }
          ],
          answerIndex: 3,
          why: T('Line 2 was a correct contradiction mirror and it was working — she conceded. Line 4 then won the argument. Winning is the failure mode of this instrument: the moment she has to concede a point, she stops exploring and moves to the transactional register, which is exactly what her last line does.',
                 'La línea 2 era un espejo de contradicción correcto y funcionaba: ella lo concedió. La línea 4 ganó la discusión. Ganar es el modo de fallo de este instrumento: en cuanto tiene que ceder un punto, deja de explorar y pasa al registro transaccional, que es exactamente lo que hace su última frase.'),
          principle: T('After a contradiction mirror, say nothing. The instrument is complete once both sentences are in the room.',
                       'Después de un espejo de contradicción, no digas nada. El instrumento está completo en cuanto las dos frases están en la sala.') },
        { kind: 'translate',
          prompt: T('For each pair of client sentences, write the contradiction mirror. Then compare with the model.',
                    'Para cada par de frases de la clienta, escribe el espejo de contradicción. Luego compara con el modelo.'),
          items: [
            { id: 'c1',
              client: T('"It really doesn\'t bother me." / "I\'ve been looking at your website for about a year."',
                        '«De verdad que no me molesta». / «Llevo como un año mirando vuestra web».'),
              model: T('"You said it doesn\'t bother you, and you also said you\'ve been looking for a year. Help me hold both of those."',
                       '«Has dicho que no te molesta, y también que llevas un año mirando. Ayúdame a sostener las dos cosas».'),
              note: T('Return both verbatim, in the order she said them, and stop. Do not resolve it for her.',
                      'Devuelve las dos literalmente, en el orden en que las dijo, y para. No lo resuelvas tú.') },
            { id: 'c2',
              client: T('"I only came because my daughter booked it." / "I brought photographs."',
                        '«Solo he venido porque mi hija pidió la cita». / «He traído fotos».'),
              model: T('"Your daughter booked it — and you brought photographs. I\'d like to understand that."',
                       '«Tu hija pidió la cita, y tú has traído fotos. Me gustaría entender eso».'),
              note: T('The photographs are the evidence that this is hers. Naming both without a question mark keeps it from sounding like a trap.',
                      'Las fotos son la prueba de que esto es suyo. Nombrar ambas sin signo de interrogación evita que suene a trampa.') },
            { id: 'c3',
              client: T('"I want it completely undetectable." / "I want a real difference, otherwise what\'s the point."',
                        '«Quiero que sea completamente indetectable». / «Quiero una diferencia real, si no, para qué».'),
              model: T('"Undetectable, and a real difference. Those pull against each other — which one would you protect if you could only keep one?"',
                       '«Indetectable y una diferencia real. Esas dos tiran una de otra: ¿cuál protegerías si solo pudieras quedarte con una?»'),
              note: T('Here the contradiction is clinical as well as emotional, so the mirror ends with a choice. Her answer is the constraint your Phase 6 recommendation must obey.',
                      'Aquí la contradicción es clínica además de emocional, así que el espejo termina con una elección. Su respuesta es la restricción que tu recomendación de la Fase 6 debe obedecer.') }
          ] },
        { kind: 'choose',
          prompt: T('She has just answered your contradiction mirror with something painful. What now?',
                    'Acaba de responder a tu espejo de contradicción con algo doloroso. ¿Y ahora?'),
          options: [
            { id: 'a', verdict: 'best',
              label: T('"Thank you for telling me that." Then nothing.', '«Gracias por contármelo». Y nada más.'),
              why: T('Acknowledgement without movement. She has just spent something to say it, and the only appropriate response is to receive it. Every practitioner instinct now says be useful; being useful here spends the disclosure.',
                     'Reconocimiento sin movimiento. Le ha costado algo decirlo, y la única respuesta apropiada es recibirlo. Todo instinto profesional dice ahora «sé útil»; ser útil aquí gasta la revelación.') },
            { id: 'b', verdict: 'weak',
              label: T('"That makes complete sense, and it\'s exactly why the plan I have in mind would suit you."',
                       '«Tiene todo el sentido, y por eso justamente el plan que tengo en mente te iría bien».'),
              why: T('You converted her disclosure into a bridge to your recommendation, in the same breath. She will notice, and what she will learn is that telling you difficult things produces a sales transition.',
                     'Has convertido su revelación en un puente hacia tu recomendación, en la misma frase. Ella lo notará, y lo que aprenderá es que contarte cosas difíciles produce una transición comercial.') },
            { id: 'c', verdict: 'weak',
              label: T('"I hear that a lot, and it\'s more common than you\'d think."',
                       '«Eso lo oigo mucho, es más común de lo que crees».'),
              why: T('Normalising is meant to comfort and it dilutes. She did not say something common; she said something hers. Commonness is useful later, in Phase 5, as evidence — not here, as a response.',
                     'Normalizar pretende consolar y diluye. Ella no dijo algo común: dijo algo suyo. Lo común es útil después, en la Fase 5, como evidencia; no aquí, como respuesta.') }
          ],
          principle: T('Trust Stage 3 (Understanding) is established by what you do NOT do in the four seconds after a disclosure.',
                       'La Etapa de Confianza 3 (Comprensión) se establece por lo que NO haces en los cuatro segundos siguientes a una revelación.'),
          retry: {
            note: T('The contradiction that surfaces late, in the gap between the mirror and the plan.',
                    'La contradicción que aflora tarde, en el hueco entre el reflejo y el plan.'),
            prompt: T('Another client, twenty minutes further on. At minute four she said: "Money is not really the issue, I\'d rather do it properly." At minute twenty-two, once you have examined her, she asks: "And what\'s the least I could do and still see something?" You were about to set out the plan. What do you say first?',
                      'Otra clienta, veinte minutos más allá. En el minuto cuatro dijo: «El dinero no es el problema, prefiero hacerlo bien». En el minuto veintidós, ya explorada, pregunta: «¿Y qué es lo mínimo que podría hacer y aun así notar algo?». Estabas a punto de exponer el plan. ¿Qué dices primero?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Let me set out both — the full plan and a smaller starting point — and you choose."',
                         '«Te expongo las dos: el plan completo y un punto de partida más pequeño, y eliges tú».'),
                why: T('Even-handed, and it answers neither remark. You have returned the judgement to the woman who has just requested it, and she will choose the smaller option because it is the one she raised. You will not find out which of her two remarks still holds, and the plan you genuinely believed in was never put to her.',
                       'Equilibrado, y no responde a ninguna de las dos afirmaciones. Has devuelto el criterio a la mujer que acababa de pedírtelo, y se quedará con la opción pequeña porque es la que planteó ella. No averiguarás cuál de sus dos afirmaciones sigue en pie, y el plan en el que de verdad creías nunca llegó a ponerse sobre la mesa.') },
              { id: 'b', verdict: 'best',
                label: T('"Earlier you said money was not the issue, and now you are asking me for the smallest option. Help me hold both of those — it changes what I would advise."',
                         '«Antes me has dicho que el dinero no era el problema y ahora me pides la versión mínima. Ayúdame a sostener las dos cosas: eso cambia lo que te recomiendo».'),
                why: T('The contradiction mirror with its motive spoken aloud, which is what keeps it from reading as a trap. She is not being caught out; she is being shown that her answer settles a clinical choice. That is true, and it is the one framing under which people explain rather than defend.',
                       'El espejo de contradicción con el motivo pegado, que es lo que evita que se lea como una trampa. No la estás pillando: le estás diciendo que su respuesta determina una decisión profesional. Es verdad, y es el único marco en el que la gente se explica en vez de defenderse.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Of course — and as cost is not a concern, let me set out the full programme properly."',
                         '«Claro, y como el coste no es un problema, te explico bien el programa completo».'),
                why: T('You resolved her contradiction by keeping the more profitable half, which is the one resolution you are not entitled to reach. It will not be corrected here: she will nod, pocket the printout, and correct you by not booking. Ethical Duty 1 — the avoidable harm is a plan resting on a claim you had grounds to doubt.',
                       'Has resuelto su contradicción quedándote con la frase más rentable, que es la única resolución a la que no tienes derecho. No te lo corregirá en la sala: asentirá, cogerá el papel y te corregirá no reservando. Deber Ético 1: el daño evitable aquí es un plan construido sobre una frase de la que tenías motivos para dudar.') }
            ],
            principle: T('A contradiction that appears between Phase 4 and Phase 6 is not an inconsistency to tidy up. It is the constraint your plan has to obey, and only she can say which of her two remarks still holds.',
                         'Una contradicción que aparece entre la Fase 4 y la Fase 6 no es una incoherencia que haya que ordenar. Es la restricción que tu plan debe obedecer, y solo ella puede decir cuál de sus dos afirmaciones sigue en pie.'),
            changes: {
              axis: 'recommendation',
              detail: T('She explains it: the money is there, and it is her daughter\'s deposit. She would rather do one procedure properly this year than three now. What you construct is a single course with a twelve-week check, and nothing else is even discussed until then — which is not the plan on your screen four minutes ago.',
                        'Ella lo explica: el dinero existe y es la entrada del piso de su hija. Prefiere hacer una cosa bien este año a hacer tres ahora. Lo que construyes es un solo tratamiento con una revisión a las doce semanas, y hasta entonces no se habla de nada más: no es el plan que tenías en pantalla cuatro minutos antes.')
            }
          } }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm4l4', n: 4, minutes: 11,
      treatments: [
                    {
                      name: T(
                              'Microneedling with radiofrequency — course of three',
                              'Microagujas con radiofrecuencia — bono de tres'),
                      price: T('€870 for three sessions', '870 € el bono de tres'),
                      why: T(
                             'This is a treatment with a visible clinical rationale, and a visible clinical rationale is the strongest possible invitation to diagnose before reflecting.',
                             'Es un tratamiento con una justificación clínica visible, y una justificación clínica visible es la invitación más fuerte que existe a diagnosticar antes de reflejar.'),
                      moment: T(
                                'She has finished talking, the skin in front of you has an obvious textural story, and the lamp is right there.',
                                'Ha terminado de hablar, la piel que tienes delante cuenta una historia de textura evidente y la lámpara está ahí mismo.'),
                      weak: {
                              line: T(
                                      '"Let me have a proper look under the light before I say anything, so that what I tell you is based on your skin and not on a guess."',
                                      '«Déjame mirarlo bien con la luz antes de decir nada, para que lo que te diga se base en tu piel y no en una suposición.»'),
                              cost: T(
                                      'An admirable standard of care, delivered in the wrong order. The lamp comes on eight seconds after she said something difficult, and the lesson she takes is that the difficult thing was preamble.',
                                      'Es un estándar de cuidado admirable, entregado en el orden equivocado. La lámpara se enciende ocho segundos después de que ella dijera algo difícil, y la lección que se lleva es que lo difícil era el preámbulo.')
                            },
                      strong: {
                                line: T(
                                        '"Before I look at anything — what I\'m hearing is that you stopped going out in daylight without makeup, and that started long before the skin did."',
                                        '«Antes de mirar nada: lo que estoy escuchando es que dejaste de salir de día sin maquillaje, y eso empezó mucho antes que lo de la piel.»'),
                                gain: T(
                                        'Emotional diagnosis first, out loud, and the lamp afterwards. The identical clinical finding then arrives as part of her story instead of replacing it.',
                                        'Primero el diagnóstico emocional, en voz alta, y la lámpara después. El mismo hallazgo clínico llega entonces como parte de su historia en lugar de sustituirla.')
                              }
                    },
                    {
                      name: T('Facial mesotherapy — course of four', 'Mesoterapia facial — bono de cuatro'),
                      price: T('€480 for four sessions', '480 € el bono de cuatro'),
                      why: T(
                             'Mesotherapy is cheap enough to recommend on the spot, and the speed at which it can be recommended is exactly what puts it before the reflection.',
                             'La mesoterapia es lo bastante barata como para recomendarla en el momento, y la velocidad a la que se puede recomendar es justo lo que la coloca antes del reflejo.'),
                      moment: T(
                                'She has described a hard year in three sentences, and the obvious answer is sitting on the shelf behind you.',
                                'Ha descrito un año duro en tres frases, y la respuesta obvia está en la estantería detrás de ti.'),
                      weak: {
                              line: T(
                                      '"That does sound like a hard year. The good news is that four sessions at €480 is exactly the kind of thing that helps with what you\'re describing."',
                                      '«Sí que suena a un año duro. La buena noticia es que cuatro sesiones por 480 € son justo el tipo de cosa que ayuda con lo que describes.»'),
                              cost: T(
                                      'Acknowledges the year and then spends it, in one sentence, as the setup for an offer. The acknowledgement is retroactively revealed as a transition, and she hears the transition more clearly than the sympathy.',
                                      'Reconoce el año y acto seguido lo gasta, en una sola frase, como pie para una oferta. El reconocimiento queda retroactivamente revelado como transición, y ella oye la transición con más claridad que la empatía.')
                            },
                      strong: {
                                line: T(
                                        '"That does sound like a hard year." (silence) "…Now tell me what you want the next one to be like."',
                                        '«Sí que suena a un año duro.» (silencio) «…Ahora cuéntame cómo quieres que sea el siguiente.»'),
                                gain: T(
                                        'The same first sentence, followed by nothing instead of by an offer. Reflection, silence, recommendation — and the recommendation, when it comes two minutes later, is being measured against next year rather than against €480.',
                                        'La misma primera frase, seguida de nada en lugar de una oferta. Reflejo, silencio, recomendación, y la recomendación, cuando llega dos minutos después, se mide contra el año que viene y no contra 480 €.')
                              }
                    },
                    {
                      name: T(
                              'Fractional CO2 laser resurfacing — full face',
                              'Láser CO2 fraccionado — rostro completo'),
                      price: T('€1,050 per session', '1.050 € la sesión'),
                      why: T(
                             'Resurfacing has the most impressive aesthetic diagnosis available, and the more impressive the diagnosis the more it wants to be delivered first.',
                             'El láser CO2 tiene el diagnóstico estético más impresionante que existe, y cuanto más impresionante es el diagnóstico más quiere entregarse primero.'),
                      moment: T(
                                'The skin analysis is on the screen and it is genuinely informative, and she has just told you why she is here.',
                                'El análisis de piel está en la pantalla y es de verdad informativo, y ella acaba de contarte por qué ha venido.'),
                      weak: {
                              line: T(
                                      '"Look at this with me — the analysis shows exactly what you\'ve been describing, and that\'s what the resurfacing at €1,050 addresses."',
                                      '«Mira esto conmigo: el análisis muestra exactamente lo que estabas describiendo, y eso es lo que aborda el CO2 fraccionado, 1.050 €.»'),
                              cost: T(
                                      'Uses the machine to validate her, which feels like agreement and functions as replacement. Her account has been confirmed by a screen, and from here on the conversation is between you and the screen.',
                                      'Usa la máquina para validarla, lo que parece darle la razón y funciona como sustitución. Su relato lo ha confirmado una pantalla, y de aquí en adelante la conversación es entre tú y la pantalla.')
                            },
                      strong: {
                                line: T(
                                        '"I\'ve got the analysis and I\'ll show you in a minute. First: you didn\'t come about texture. You came because you stopped letting anyone photograph you."',
                                        '«Tengo el análisis y te lo enseño ahora. Primero: no has venido por la textura. Has venido porque dejaste de dejar que nadie te hiciera fotos.»'),
                                gain: T(
                                        'Holds the aesthetic diagnosis for sixty seconds and puts the emotional one first, which is the whole of the ordering rule. The screen then supports her account rather than superseding it.',
                                        'Retiene el diagnóstico estético sesenta segundos y pone primero el emocional, que es toda la regla del orden. La pantalla pasa entonces a apoyar su relato en lugar de sustituirlo.')
                              }
                    }
                  ],
      conversation: {
                      setting: T(
                                 'Consultation, microneedling with radiofrequency, course of three, €870. Minute nine. Discovery has just finished.',
                                 'Consulta, microagujas con radiofrecuencia, bono de tres, 870 €. Minuto nueve. El Descubrimiento acaba de terminar.'),
                      before: [
                                {
                                  who: 'client',
                                  line: T(
                                          '"I stopped going out without makeup about two years ago. Even to take the bins down."',
                                          '«Dejé de salir sin maquillaje hace unos dos años. Hasta para bajar la basura.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Thank you for telling me that. Let me have a proper look under the lamp, and then I can tell you what\'s actually going on rather than guessing."',
                                          '«Gracias por contármelo. Déjame mirarlo bien con la lámpara y así te digo qué está pasando de verdad en vez de suponer.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"Okay."', '«Vale.»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"Right — there\'s some textural irregularity across the cheeks and a bit of post-inflammatory marking. Microneedling with radiofrequency is what I\'d use, three sessions, €870."',
                                          '«Vale: hay algo de irregularidad de textura en las mejillas y algo de marca posinflamatoria. Yo usaría microagujas con radiofrecuencia, tres sesiones, 870 €.»')
                                },
                                {
                                  who: 'client',
                                  line: T('"And that would sort it?"', '«¿Y con eso se arreglaría?»')
                                },
                                {
                                  who: 'practitioner',
                                  line: T(
                                          '"It\'s the right approach for what I\'m seeing, and we\'d reassess after the second one before committing to anything further."',
                                          '«Es el enfoque adecuado para lo que veo, y lo reevaluaríamos después de la segunda antes de comprometernos a nada más.»')
                                },
                                {
                                  who: 'client',
                                  line: T(
                                          '"Can you email it to me? I need to look at the diary."',
                                          '«¿Me lo puedes mandar por correo? Tengo que mirar la agenda.»')
                                }
                              ],
                      after: [
                               {
                                 who: 'client',
                                 line: T(
                                         '"I stopped going out without makeup about two years ago. Even to take the bins down."',
                                         '«Dejé de salir sin maquillaje hace unos dos años. Hasta para bajar la basura.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Even to take the bins down. What I\'m hearing is that this stopped being about skin a long time ago — it\'s about not being seen at all."',
                                         '«Hasta para bajar la basura. Lo que estoy escuchando es que esto hace mucho que dejó de ser la piel: va de que no te vean, directamente.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"…Yes. My partner has seen me without it maybe four times this year."',
                                         '«…Sí. Mi pareja me habrá visto sin maquillaje unas cuatro veces este año.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Four times in a year is a lot of managing. That\'s the part I want to change, and I\'ll be honest with you about how much of it I can."',
                                         '«Cuatro veces en un año es muchísimo control. Esa es la parte que quiero cambiar, y voy a ser sincera contigo sobre cuánta de ella puedo cambiar.»')
                               },
                               {
                                 who: 'client',
                                 line: T(
                                         '"Nobody has said that to me before. They usually just say it\'ll be fine."',
                                         '«Eso no me lo había dicho nadie. Normalmente solo dicen que va a quedar bien.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Now I\'ll look under the lamp, and what I find will be measured against the bins and your partner, not against a photograph of somebody else\'s cheek."',
                                         '«Ahora sí miro con la lámpara, y lo que encuentre se va a medir contra la basura y contra tu pareja, no contra la foto de la mejilla de otra.»')
                               },
                               {
                                 who: 'client',
                                 line: T('"Okay. Look."', '«Vale. Mira.»')
                               },
                               {
                                 who: 'practitioner',
                                 line: T(
                                         '"Three sessions of microneedling with radiofrequency, €870, and I\'d want you back here between them so I can hear how the bins are going."',
                                         '«Tres sesiones de microagujas con radiofrecuencia, 870 €, y querría verte entre medias para que me cuentes cómo va lo de la basura.»')
                               }
                             ],
                      whatChanged: T(
                                     'The first practitioner thanked her for a hard admission and then, eight seconds later, turned on a lamp. Nothing she said was wrong and the clinical reasoning was sound, but the order taught the client that the admission had been preamble to the real business, and the real business was a cheek. By the time the price arrived there was no reason for it to be weighed against anything but a diary. The second version delayed the lamp by ninety seconds and spent them returning what she felt, which produced the four times this year — a fact the first version never acquired. The same treatment at the same price then arrived attached to her partner and her bins, and the follow-up appointment was framed as somebody continuing to listen rather than as a reassessment.',
                                     'La primera profesional le agradeció una confesión difícil y, ocho segundos después, encendió una lámpara. Nada de lo que dijo estaba mal y el razonamiento clínico era sólido, pero el orden le enseñó a la clienta que la confesión había sido el preámbulo del asunto de verdad, y que el asunto de verdad era una mejilla. Para cuando llegó el precio, no había motivo para pesarlo contra otra cosa que una agenda. La segunda versión retrasó la lámpara noventa segundos y los gastó en devolver lo que ella sentía, lo que produjo las cuatro veces este año, un dato que la primera versión nunca consiguió. El mismo tratamiento al mismo precio llegó entonces enganchado a su pareja y a su basura, y la cita de seguimiento quedó planteada como alguien que sigue escuchando y no como una reevaluación.'),
                      cost: T(
                              '€870 turned into an email, and the email competes on price. The clinic also loses the two years of managing, which is the only thing that would have made session two and session three happen.',
                              '870 € convertidos en un correo, y el correo compite por precio. La clínica pierde además los dos años de control, que es lo único que habría hecho que ocurrieran la segunda y la tercera sesión.')
                    },
      title: T('Double diagnosis — emotional first', 'Doble diagnóstico — primero lo emocional'),
      objective: T('Sequence the emotional and clinical readings so that neither cancels the other.',
                   'Secuenciar la lectura emocional y la clínica para que ninguna anule a la otra.'),
      provenance: {
        chapter: 6,
        principle: T('The biggest mistake in clinics is diagnosing before reflecting. Reflection always comes before recommendation, without exception.',
                     'El mayor error en las clínicas es diagnosticar antes de reflejar. El reflejo va siempre antes que la recomendación, sin excepciones.'),
        phase: 'understanding',
        trustStage: 'understanding',
        standard: 2,
        duty: 3,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
            'The visible reading is where your expertise actually lives, it is legible to you within seconds, and sitting on it can feel like withholding help. Dryness, volume, sun history — saying so is the most valuable thing you have been trained to do. Chapter 6 is unambiguous about sequence: a woman will not permit a verdict on her face until a verdict has been given on her feelings. Delivered first, the visible reading turns her into a schedule of defects that can be costed.',
            'La lectura visible es donde vive de verdad tu pericia, te resulta legible en cuestión de segundos, y sentarte encima de ella puede parecer negar ayuda. Sequedad, volumen, historia solar: decirlo es lo más valioso que te han entrenado para hacer. El capítulo 6 no deja lugar a dudas sobre la secuencia: una mujer no permitirá un veredicto sobre su rostro hasta que se haya dado un veredicto sobre sus sentimientos. Entregada primero, la lectura visible la convierte en un pliego de defectos al que se le puede poner presupuesto.'),
        sheIsThinking: T(
            'She has been studying my face this entire time. The verdict was reached before I finished my sentence.',
            'Lleva todo este rato estudiándome la cara. El veredicto estaba dictado antes de que yo terminara la frase.'),
        ladder: {
          weak: {
            line:   T(
                '"Right — I can see dehydration here, some sun damage, and the lines by the eyes are elasticity."',
                '«Muy bien: aquí veo deshidratación, algo de daño solar, y las líneas de alrededor de los ojos son elasticidad.»'),
            effect: T(
                'The sequence Chapter 6 calls the biggest mistake in clinics. Impeccable professionally, and it converts her account into a schedule she can now put beside another clinic\'s schedule.',
                'Es la secuencia que el capítulo 6 llama el mayor error de las clínicas. Impecable en lo profesional, y convierte su relato en un pliego que ahora puede poner al lado del pliego de otra clínica.')
          },
          average: {
            line:   T(
                '"Let me have a look, and then we\'ll come back to what you\'ve told me."',
                '«Déjame mirar y luego volvemos a lo que me has contado.»'),
            effect: T(
                'Sequenced openly, with the lamp still going first. Her account is demoted to background for the verdict, instead of the verdict answering her account.',
                'Está secuenciado con franqueza, y aun así la lámpara va primero. Su relato queda degradado a telón de fondo del veredicto, en vez de ser el veredicto una respuesta a su relato.')
          },
          strong: {
            line:   T(
                '"Noa, before I look at anything — what I\'m hearing is that the house went quiet and the mirror stopped matching who you feel you are."',
                '«Noa, antes de mirar nada: lo que estoy oyendo es que la casa se quedó en silencio y el espejo dejó de coincidir con quien sientes que eres.»'),
            effect: T(
                'Chapter 6\'s own sequence with Noa. The reflection lands first, and the visible reading arriving second is received as candour rather than as a schedule of defects.',
                'Es la secuencia del propio capítulo 6 con Noa. El reflejo aterriza primero, y la lectura visible, al llegar en segundo lugar, se recibe como franqueza y no como un pliego de defectos.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Two diagnoses, one order', 'Dos diagnósticos, un orden'),
          body: [
            T('Every consultation contains two diagnoses. The clinical one describes tissue, condition, indication and risk. The emotional one describes what the change means to her, what she is protecting, and what she would count as success.',
              'Toda consulta contiene dos diagnósticos. El clínico describe tejido, condición, indicación y riesgo. El emocional describe qué significa el cambio para ella, qué protege y qué contaría como éxito.'),
            T('Both are necessary. The order is not optional. Delivered clinically first, the emotional reading sounds like an afterthought bolted onto a verdict. Delivered emotionally first, the clinical reading arrives as care rather than as assessment.',
              'Ambos son necesarios. El orden no es opcional. Si se da primero el clínico, la lectura emocional suena a añadido pegado a un veredicto. Si se da primero el emocional, la lectura clínica llega como cuidado y no como evaluación.'),
            T('This is also where the two diagnoses can disagree, and that disagreement is information: a clinically minor finding that carries a major emotional weight is the commonest reason a "simple" case becomes a lost one.',
              'Aquí es también donde los dos diagnósticos pueden discrepar, y esa discrepancia es información: un hallazgo clínicamente menor con un peso emocional mayor es la razón más común de que un caso «sencillo» se pierda.')
          ] },
        { kind: 'sort',
          prompt: T('Assign each observation to the diagnosis it belongs to.',
                    'Asigna cada observación al diagnóstico al que pertenece.'),
          client: T('Consultation notes, taken during Phase 3 and 4.', 'Notas de consulta, tomadas durante las Fases 3 y 4.'),
          buckets: [
            { id: 'clinical', label: T('Clinical reading', 'Lectura clínica') },
            { id: 'emotional', label: T('Emotional reading', 'Lectura emocional') }
          ],
          items: [
            { id: 'o1', text: T('Moderate dynamic lines, good skin quality, no volume loss requiring correction.', 'Líneas dinámicas moderadas, buena calidad de piel, sin pérdida de volumen que requiera corrección.'), bucket: 'clinical' },
            { id: 'o2', text: T('Success = nobody asks her what she has had done.', 'Éxito = que nadie le pregunte qué se ha hecho.'), bucket: 'emotional' },
            { id: 'o3', text: T('Fitzpatrick III, no history of keloid, no contraindication.', 'Fototipo III, sin antecedentes de queloide, sin contraindicaciones.'), bucket: 'clinical' },
            { id: 'o4', text: T('Walked out of a previous clinic; will not tolerate being processed.', 'Se marchó de una clínica anterior; no tolerará que la procesen.'), bucket: 'emotional' },
            { id: 'o5', text: T('Result temporary, three to four months at a conservative dose.', 'Resultado temporal, tres o cuatro meses a dosis conservadora.'), bucket: 'clinical' },
            { id: 'o6', text: T('Watched her mother withdraw socially; frightened of the same trajectory.', 'Vio a su madre retirarse socialmente; teme la misma trayectoria.'), bucket: 'emotional' }
          ],
          why: T('Look at what the two columns produce. The clinical column supports a treatment. The emotional column supports a stopping rule, a review point and a definition of success — the three things that decide whether she accepts. A consultation with only the left column is a proposal nobody asked for.',
                 'Mira lo que producen las dos columnas. La clínica respalda un tratamiento. La emocional respalda una regla de parada, un punto de revisión y una definición de éxito: las tres cosas que deciden si ella acepta. Una consulta con solo la columna izquierda es una propuesta que nadie pidió.') },
        { kind: 'compare',
          prompt: T('Same two diagnoses, two orders. Which one does MIRROR support?',
                    'Los mismos dos diagnósticos, dos órdenes. ¿Cuál respalda MIRROR?'),
          a: { label: T('Clinical first', 'Primero lo clínico'),
               text: T('"Clinically this is straightforward — moderate dynamic lines, good skin, nothing complicated. And of course I understand it matters to you personally as well."',
                       '«Clínicamente esto es sencillo: líneas dinámicas moderadas, buena piel, nada complicado. Y por supuesto entiendo que además te importa a nivel personal».') },
          b: { label: T('Emotional first', 'Primero lo emocional'),
               text: T('"What you\'ve described is someone who has watched this happen to her mother and does not want to be asked what she\'s had done. That\'s the thing we have to protect. Clinically, what I\'m seeing is moderate dynamic lines and good skin quality — which is why protecting it is actually possible."',
                       '«Lo que has descrito es alguien que ha visto esto pasarle a su madre y no quiere que le pregunten qué se ha hecho. Eso es lo que tenemos que proteger. Clínicamente, lo que veo son líneas dinámicas moderadas y buena calidad de piel, y por eso protegerlo es realmente posible».') },
          answer: 'b',
          why: T('A ends with a courtesy. B makes her concern the constraint and the clinical finding the reason the constraint can be met. Same facts, opposite meaning: in B the clinical reading serves her, and in A she is a footnote to it.',
                 'A termina con una cortesía. B convierte su preocupación en la restricción y el hallazgo clínico en la razón por la que se puede cumplir. Los mismos hechos, el significado opuesto: en B la lectura clínica está a su servicio, y en A ella es una nota al pie.') },
        { kind: 'choose',
          prompt: T('The two readings disagree. Clinically there is almost nothing to treat; emotionally the concern has been the largest thing in her life this year. What does Phase 4 do with that?',
                    'Las dos lecturas discrepan. Clínicamente casi no hay nada que tratar; emocionalmente la preocupación ha sido lo más grande de su año. ¿Qué hace la Fase 4 con eso?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Lead with the good news: "The honest answer is that clinically there\'s very little here — which I think should be reassuring."',
                       'Abrir con la buena noticia: «La respuesta honesta es que clínicamente aquí hay muy poco, y creo que eso debería tranquilizarte».'),
              why: T('You delivered the clinical reading first and framed it as a gift. What she hears is that the thing which has occupied a year of her life does not register professionally. She will agree that it is good news, thank you, and leave — and the disagreement will never have been spoken about.',
                     'Has dado primero la lectura clínica y la has presentado como un regalo. Lo que ella oye es que aquello que le ha ocupado un año de su vida no registra profesionalmente. Estará de acuerdo en que es una buena noticia, dará las gracias y se irá, y de la discrepancia no se habrá hablado nunca.') },
            { id: 'b', verdict: 'best',
              label: T('Say the emotional reading first and let the clinical finding serve it: "What you\'ve described has taken up most of this year. What I can see is small — and that gap is the thing worth understanding, because it tells us what we\'re actually treating."',
                       'Dar primero la lectura emocional y que el hallazgo clínico la sirva: «Lo que has descrito te ha ocupado casi todo el año. Lo que yo veo es pequeño, y esa distancia es lo que merece entenderse, porque nos dice qué estamos tratando en realidad».'),
              why: T('The disagreement itself becomes the subject rather than a verdict she has to absorb. Named this way it is information you can both work with, and it is the one route to a recommendation that neither overtreats a minor finding nor dismisses a major concern.',
                     'La discrepancia pasa a ser el tema y no un veredicto que ella tenga que encajar. Nombrada así es información con la que podéis trabajar los dos, y es la única vía hacia una recomendación que ni sobretrata un hallazgo menor ni despacha una preocupación mayor.') },
            { id: 'c', verdict: 'harmful',
              label: T('Treat to the emotional reading: the finding is minor but her distress is real, and a conservative intervention will resolve it.',
                       'Tratar según la lectura emocional: el hallazgo es menor pero su malestar es real, y una intervención conservadora lo resolverá.'),
              why: T('Understandable, generous, and the exact mechanism by which minor findings get treated for reasons no photograph will ever show. A result aimed at a concern the tissue does not carry cannot succeed, and the review appointment is where she discovers that.',
                     'Comprensible, generoso, y el mecanismo exacto por el que se tratan hallazgos menores por motivos que ninguna foto mostrará jamás. Un resultado dirigido a una preocupación que el tejido no lleva no puede funcionar, y la cita de revisión es donde ella lo descubre.') }
          ],
          principle: T('A clinically minor finding carrying a major emotional weight is the commonest reason a simple case is lost. The disagreement is the finding — say it out loud before either reading is acted on.',
                       'Un hallazgo clínicamente menor con un peso emocional mayor es la razón más común de que se pierda un caso sencillo. La discrepancia es el hallazgo: dilo en voz alta antes de actuar sobre ninguna de las dos lecturas.'),
          retry: {
            note: T('The two readings again, delivered in the order they usually are.',
                    'Otra vez las dos lecturas, dadas en el orden en que suelen darse.'),
            prompt: T('You have done both readings well. You open Phase 4 with: "Clinically this is all very straightforward — good skin, moderate lines, nothing complicated at all." She nods. What has just happened, and what do you do?',
                      'Has hecho bien las dos lecturas. Abres la Fase 4 con: «Clínicamente esto es muy sencillo: buena piel, líneas moderadas, nada complicado». Ella asiente. ¿Qué acaba de pasar y qué haces?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Nothing has gone wrong — recover it by adding the emotional reading now, while she is still nodding.',
                         'No ha ido nada mal: recupéralo añadiendo ahora la lectura emocional, mientras ella sigue asintiendo.'),
                why: T('Added second, the emotional reading arrives as a courtesy attached to a verdict. The order is not a matter of emphasis: the first reading defines what kind of thing is being discussed, and the discussion is now about a face that presents no difficulty.',
                       'Añadida en segundo lugar, la lectura emocional llega como una cortesía pegada a un veredicto. El orden no es cuestión de énfasis: la primera lectura define de qué clase de cosa se está hablando, y ahora se habla de un rostro que no plantea ninguna dificultad.') },
              { id: 'b', verdict: 'best',
                label: T('Say so and start again: "I opened that the wrong way round. What you told me is the thing we\'re treating — let me say that first, and then come back to what I can see."',
                         'Decirlo y volver a empezar: «He abierto esto al revés. Lo que me has contado es lo que estamos tratando; déjame decirlo primero y luego vuelvo a lo que yo veo».'),
                why: T('The repair is available and it costs one sentence. Naming your own sequencing error does the same work as naming any other break in the room: it is evidence that you are watching the consultation rather than delivering it, and it restores the order in which the clinical finding can serve her instead of ranking her.',
                       'La reparación está disponible y cuesta una frase. Nombrar tu propio error de orden hace el mismo trabajo que nombrar cualquier otra rotura de la sala: es la prueba de que estás mirando la consulta y no recitándola, y restablece el orden en el que el hallazgo clínico puede servirla en lugar de clasificarla.') },
              { id: 'c', verdict: 'harmful',
                label: T('Move on — the content was accurate and honest, and re-opening it would only draw attention to a wording problem.',
                         'Seguir adelante: el contenido era exacto y honesto, y reabrirlo solo llamaría la atención sobre un problema de redacción.'),
                why: T('It was not a wording problem. "Nothing complicated" has just told a woman whose year this has occupied that her case is unremarkable, and the polite nod is the receipt. She will not raise it, and it will surface later as a decision she makes somewhere else.',
                       'No era un problema de redacción. «Nada complicado» acaba de decirle a una mujer a la que esto le ha ocupado el año que su caso no tiene nada de particular, y el asentimiento educado es el recibo. No lo planteará, y aflorará después como una decisión que tomará en otro sitio.') }
            ],
            principle: T('Both readings are necessary and only one can go first. Delivered clinically first, the emotional reading sounds like an afterthought bolted onto a verdict — and the fix is a sentence, not a better second half.',
                         'Las dos lecturas son necesarias y solo una puede ir primero. Si se da antes la clínica, la emocional suena a añadido pegado a un veredicto, y el arreglo es una frase, no una segunda mitad mejor.'),
            changes: {
              axis: 'clientResponse',
              detail: T('The nodding stops. She says «I thought you were going to tell me it was nothing» — the sentence that would otherwise have left the room with her and come back three days later as a polite decline.',
                        'Deja de asentir. Dice: «Pensaba que me ibas a decir que no era nada», la frase que si no se habría ido de la sala con ella y habría vuelto tres días después como un no educado.')
            }
          } },
        { kind: 'reflect',
          prompt: T('Write the emotional diagnosis for the last client you saw — in one sentence, in her words.',
                    'Escribe el diagnóstico emocional de la última clienta que atendiste, en una frase y con sus palabras.'),
          placeholder: T('If you cannot write it in her words, you have the clinical half only.',
                         'Si no puedes escribirlo con sus palabras, solo tienes la mitad clínica.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm4l5', n: 5, minutes: 12,
      treatments: [
                    {
                      name: T(
                              'IPL photorejuvenation — course of four',
                              'IPL fotorrejuvenecimiento — bono de cuatro'),
                      price: T('€640 for four sessions', '640 € el bono de cuatro'),
                      why: T(
                             'IPL courses are sold on a vocabulary of luminosity and evenness that comes from the clinic, and clinic vocabulary is what erases her words fastest.',
                             'Los bonos de IPL se venden con un vocabulario de luminosidad y uniformidad que viene de la clínica, y el vocabulario de clínica es lo que más rápido borra las palabras de ella.'),
                      moment: T(
                                'She said her skin looks angry. You are now writing the plan, and the word in your notes is inflammation.',
                                'Ha dicho que tiene la piel enfadada. Ahora estás escribiendo el plan, y la palabra que hay en tus notas es «inflamación».'),
                      weak: {
                              line: T(
                                      '"We\'ll work on the inflammation and the overall evenness of tone — four sessions at €640, spaced three weeks apart."',
                                      '«Trabajaremos la inflamación y la uniformidad general del tono: cuatro sesiones, 640 €, separadas tres semanas.»'),
                              cost: T(
                                      'Translates her word into yours, which is what a clinical record is for and what a recommendation must never do. She hears an accurate plan for somebody else\'s skin.',
                                      'Traduce la palabra de ella a la tuya, que es para lo que sirve una historia clínica y lo que una recomendación jamás debe hacer. Ella oye un plan exacto para la piel de otra persona.')
                            },
                      strong: {
                                line: T(
                                        '"Four sessions, €640, and what we\'re doing is taking the angry out of it. That was your word and I\'m keeping it."',
                                        '«Cuatro sesiones, 640 €, y lo que hacemos es quitarle lo enfadada. Era tu palabra y me la quedo.»'),
                                gain: T(
                                        'Returns the map in her own vocabulary, and says openly that it is hers. A plan written in her words is a plan she can repeat at home, which is where it has to survive.',
                                        'Devuelve el mapa con su vocabulario, y dice abiertamente que es suyo. Un plan escrito con sus palabras es un plan que puede repetir en casa, que es donde tiene que sobrevivir.')
                              }
                    },
                    {
                      name: T(
                              'Body contouring programme — ten sessions',
                              'Programa de remodelación corporal — diez sesiones'),
                      price: T('€1,800 for ten sessions', '1.800 € las diez sesiones'),
                      why: T(
                             'A ten-session body programme runs for three months, so the map has to be written down well enough that it still works in week nine when neither of you remembers the consultation.',
                             'Un programa corporal de diez sesiones dura tres meses, así que el mapa tiene que estar escrito lo bastante bien como para seguir funcionando en la novena semana, cuando ninguna de las dos se acuerda de la consulta.'),
                      moment: T(
                                'She is at session seven, she is bored, and she has asked whether there is any point carrying on.',
                                'Va por la séptima sesión, está aburrida y ha preguntado si tiene sentido seguir.'),
                      weak: {
                              line: T(
                                      '"There are three left, and the last three are usually where people notice the most. It would be a shame to stop now."',
                                      '«Quedan tres, y las tres últimas suelen ser donde más se nota. Sería una pena dejarlo ahora.»'),
                              cost: T(
                                      'Argues for attendance using the programme\'s logic, which is the clinic\'s reason and not hers. She finishes the three sessions out of politeness and does not renew.',
                                      'Defiende la asistencia con la lógica del programa, que es el motivo de la clínica y no el suyo. Termina las tres sesiones por educación y no renueva.')
                            },
                      strong: {
                                line: T(
                                        '"In January you told me you wanted to stop getting changed in the dark. Is that still the thing, or has it moved?"',
                                        '«En enero me dijiste que querías dejar de cambiarte de ropa a oscuras. ¿Sigue siendo eso o se ha movido?»'),
                                gain: T(
                                        'Produces her own January sentence at session seven, which is the only use the map has. Either it still holds and she continues, or it has moved and you now know what to build the next programme on.',
                                        'Saca su propia frase de enero en la séptima sesión, que es el único uso que tiene el mapa. O sigue en pie y ella continúa, o se ha movido y ya sabes sobre qué construir el siguiente programa.')
                              }
                    }
                  ],
      title: T('Toolkit #3 — the Emotional Drivers Map', 'Toolkit #3 — el Mapa de Motores Emocionales'),
      objective: T('Capture her exact words so that Phase 6 can be traced back to them — and record honestly when she never gave them.',
                   'Capturar sus palabras exactas para que la Fase 6 pueda trazarse hasta ellas, y registrar con honestidad cuando nunca las dio.'),
      provenance: {
        chapter: [4, 10],
        principle: T('You say back what she felt, not what she said — and what she felt has to be kept in the words she used.',
                     'Devuelves lo que ella sintió, no lo que dijo, y lo que sintió hay que conservarlo con las palabras que ella usó.'),
        phase: 'understanding',
        trustStage: 'understanding',
        standard: 2,
        duty: 4,
        toolkit: 3
      },
      depth: {
        whyItGoesWrong: T(
            'Notes get tidied on the way into the system. "I don\'t know who that woman is anymore" becomes identity concern, impaired self-image, because that is the register a record is supposed to be written in and any colleague opening it will decode the shorthand instantly. Professionalism is the virtue doing the damage. Her literal phrasing is the only version that will still sound like her when it is spoken back, and shorthand spoken back sounds like a drawer she has been filed into.',
            'Las notas se ordenan de camino al sistema. «Ya no sé quién es esa mujer» se convierte en preocupación por la identidad, autoimagen alterada, porque ese es el registro en el que se supone que se escribe una historia y cualquier compañera que la abra descodificará la abreviatura al instante. La virtud que hace el daño aquí es el profesionalismo. Su formulación literal es la única versión que seguirá sonando a ella cuando se le pronuncie de vuelta, y una abreviatura pronunciada de vuelta suena a un cajón en el que la han archivado.'),
        sheIsThinking: T(
            'I said that out loud, in those words. I would notice at once if it came back to me in different ones.',
            'Eso lo dije en voz alta, con esas palabras. Me daría cuenta al instante si me volviera con otras.'),
        ladder: {
          weak: {
            line:   T(
                '(enters: "low self-esteem, wants to look younger")',
                '(introduce: «baja autoestima, quiere parecer más joven»)'),
            effect: T(
                'An appraisal of her character rather than a driver, and it is false besides: younger is the opposite of what she asked for. She asked for herself.',
                'Es una valoración de su carácter y no un motor, y encima es falsa: más joven es lo contrario de lo que ella ha pedido. Ella ha pedido ser ella misma.')
          },
          average: {
            line:   T(
                '(enters: "identity — wants to feel like herself again")',
                '(introduce: «identidad: quiere volver a sentirse ella misma»)'),
            effect: T(
                'The correct heading, faithfully entered. Perfectly usable, and the exact phrasing that would have stopped her breath later on has evaporated.',
                'Es el encabezado correcto, introducido con fidelidad. Es del todo utilizable, y la formulación exacta que más adelante le habría cortado la respiración se ha evaporado.')
          },
          strong: {
            line:   T(
                '(enters her literal phrasing: "I want the mirror to show who I really am. Not someone else.")',
                '(introduce su formulación literal: «quiero que el espejo muestre quién soy de verdad. No a otra persona.»)'),
            effect: T(
                'Chapter 4\'s client speaking in her own words, preserved unedited. What gets spoken back later is a line she will identify as hers the instant she hears it.',
                'Es la clienta del capítulo 4 hablando con sus propias palabras, conservadas sin editar. Lo que se pronuncie más adelante será una línea que ella identificará como suya en cuanto la oiga.')
          }
        }
      },
      blocks: [
        { kind: 'passage',
          title: T('Field 6 is the one that matters', 'El campo 6 es el que importa'),
          body: [
            T('Toolkit #3 has six fields, and five of them survive being paraphrased. Field 6 — client language, verbatim — does not. It is the field Toolkit #4 validates against, which means a paraphrase here quietly breaks the traceability of your entire recommendation.',
              'El Toolkit #3 tiene seis campos, y cinco sobreviven a la paráfrasis. El campo 6 —lenguaje de la clienta, literal— no. Es el campo con el que se valida el Toolkit #4, así que una paráfrasis aquí rompe en silencio la trazabilidad de toda tu recomendación.'),
            T('The map also has an honesty rule. If she never disclosed a motivation, the correct entry is "Not disclosed" plus what you would ask next time. Recording an inferred motivation as fact is rejected, and rightly: an inference written into a record becomes a fact to everyone who reads it afterwards.',
              'El mapa tiene además una regla de honestidad. Si ella nunca reveló una motivación, la entrada correcta es «No revelado» más lo que preguntarías la próxima vez. Registrar una motivación inferida como un hecho se rechaza, y con razón: una inferencia escrita en un registro se convierte en un hecho para todo el que lo lea después.')
          ] },
        { kind: 'drill',
          toolkit: 3,
          prompt: T('Practice drill. This is what the client actually said. Complete the map — and be careful with field 2.',
                    'Ejercicio práctico. Esto es lo que dijo la clienta realmente. Completa el mapa, y ten cuidado con el campo 2.'),
          transcript: [
            T('"I\'d like something for the lines here." (indicates glabella)', '«Quiero algo para las líneas de aquí». (señala el entrecejo)'),
            T('"Why now? No reason really. I had time."', '«¿Por qué ahora? Por nada en concreto. Tenía tiempo».'),
            T('"I don\'t want anything dramatic. My husband would notice and he\'d have opinions."', '«No quiero nada dramático. Mi marido lo notaría y tendría opiniones».'),
            T('"No, he\'s not against it. He just... makes comments. It doesn\'t matter."', '«No, no está en contra. Simplemente... hace comentarios. Da igual».')
          ],
          fields: [
            { name: 'visibleGoal', label: T('1. Visible goal — what she asked for', '1. Objetivo visible — lo que pidió') },
            { name: 'hiddenMotivation', label: T('2. Hidden motivation — why it matters now (or "Not disclosed")', '2. Motivación oculta — por qué importa ahora (o «No revelado»)') },
            { name: 'influencingPeople', label: T('5. Influencing people', '5. Personas que influyen') },
            { name: 'clientLanguage', label: T('6. Client language — her exact words, quoted', '6. Lenguaje de la clienta — sus palabras exactas, entrecomilladas') }
          ],
          depthCheck: [
            { key: 'verbatim', label: T('Field 6 contains her words, not my paraphrase', 'El campo 6 contiene sus palabras, no mi paráfrasis'), supported: true },
            { key: 'motive', label: T('I know why it matters now', 'Sé por qué le importa ahora'), supported: false,
              note: T('She deflected ("no reason really") and you did not return to it. "It doesn\'t matter" is the sentence that tells you it does — but she never told you what.',
                      'Ella evadió («por nada en concreto») y no volviste a ello. «Da igual» es la frase que te dice que sí importa, pero nunca te dijo el qué.') },
            { key: 'people', label: T('I know who else is involved in this decision', 'Sé quién más participa en esta decisión'), supported: true,
              note: T('Supported — she named her husband twice, unprompted. Record him, including "he just makes comments", verbatim.',
                      'Respaldado: nombró a su marido dos veces, sin que se lo preguntaran. Regístralo, incluido «simplemente hace comentarios», literal.') },
            { key: 'success', label: T('I know what she would count as success', 'Sé qué contaría ella como éxito'), supported: false,
              note: T('You know what she does not want ("nothing dramatic"). That is a constraint, not a definition of success.',
                      'Sabes lo que no quiere («nada dramático»). Eso es una restricción, no una definición de éxito.') }
          ],
          rule: T('Two of these four cannot be ticked honestly from this consultation. A map with two honest entries is worth more than four confident ones, because Phase 6 will be built on it.',
                  'Dos de estos cuatro no pueden marcarse con honestidad desde esta consulta. Un mapa con dos entradas honestas vale más que cuatro seguras, porque la Fase 6 se construirá sobre él.') },
        { kind: 'choose',
          prompt: T('You are writing field 2 — hidden motivation — for the client in the drill. All you have is "why now? No reason really. I had time" and, later, "he just… makes comments. It doesn\'t matter." What goes in the field?',
                    'Estás escribiendo el campo 2 —motivación oculta— de la clienta del ejercicio. Todo lo que tienes es «¿por qué ahora? Por nada en concreto. Tenía tiempo» y, más tarde, «simplemente… hace comentarios. Da igual». ¿Qué pones en el campo?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Likely: partner\'s comments about her appearance. To confirm at next visit."',
                       '«Probable: comentarios de la pareja sobre su aspecto. Confirmar en la próxima visita».'),
              why: T('Hedged, honest about its own status, and very probably right. But field 2 is what Toolkit #4 validates field 1 against, and a hedge does not survive being read: in three weeks "to confirm" has gone and "partner\'s comments" is her motivation. You have also spent the question, because nobody asks what is already written down.',
                     'Matizado, honesto sobre su propio estatus y con toda probabilidad acertado. Pero el campo 2 es aquello contra lo que el Toolkit #4 valida el campo 1, y un matiz no sobrevive a la lectura: dentro de tres semanas el «confirmar» ha desaparecido y «comentarios de la pareja» es su motivación. Además has gastado la pregunta, porque nadie pregunta lo que ya está escrito.') },
            { id: 'b', verdict: 'best',
              label: T('"Not disclosed. She deflected once (\'no reason really\') and closed once (\'it doesn\'t matter\'). Next: ask what the comments are, and what she says back."',
                       '«No revelado. Evadió una vez ("por nada en concreto") y cerró una vez ("da igual"). Siguiente paso: preguntar cuáles son esos comentarios y qué contesta ella».'),
              why: T('The two deflections are recorded as what they are — data about the consultation rather than about the client — and the missing field becomes the first question of the next appointment. The map is now honest and useful at the same time, which is the only combination Phase 6 can be built on.',
                     'Las dos evasivas quedan registradas como lo que son —datos sobre la consulta y no sobre la clienta— y el campo que falta se convierte en la primera pregunta de la próxima cita. El mapa es ahora honesto y útil a la vez, que es la única combinación sobre la que se puede construir la Fase 6.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Self-esteem — wants to feel better about how she looks."',
                       '«Autoestima: quiere sentirse mejor con su aspecto».'),
              why: T('True of almost every client who has ever walked in, and therefore information about none of them. It satisfies the field while carrying nothing, and the recommendation traced back to it will be traceable to a sentence that fits anybody. The validator will pass it, which is precisely the danger: the map now looks complete.',
                     'Cierto de casi cualquier clienta que haya entrado por la puerta y, por tanto, información sobre ninguna. Satisface el campo sin transportar nada, y la recomendación que se trace hasta ahí se trazará hasta una frase que le vale a cualquiera. El validador lo dará por bueno, y ese es justo el peligro: ahora el mapa parece completo.') }
          ],
          principle: T('Field 2 has three legitimate entries: what she said, "Not disclosed", and "Not disclosed" with the question you will ask. An inference is not one of them.',
                       'El campo 2 admite tres entradas legítimas: lo que ella dijo, «No revelado» y «No revelado» con la pregunta que harás. Una inferencia no es ninguna de las tres.'),
          retry: {
            note: T('The same map, one field further down — where tidying costs most.',
                    'El mismo mapa, un campo más abajo, donde pulir sale más caro.'),
            prompt: T('Field 6, client language. She said: "It\'s stupid, I know. It\'s just — when I\'m on video calls I put my hand here." You are typing it into the record now. What do you write?',
                      'Campo 6, lenguaje de la clienta. Ella dijo: «Es una tontería, ya lo sé. Es que… en las videollamadas me pongo la mano aquí». Lo estás escribiendo en el registro ahora mismo. ¿Qué pones?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Self-conscious about the lower face on video calls."',
                         '«Cohibida con el tercio inferior en las videollamadas».'),
                why: T('Exactly what she meant, and it reads professionally. It also removes "it\'s stupid, I know" and the hand — the two things that tell you she has apologised for minding, and where she thinks the problem lives. In Phase 6 you will say "the area that bothers you on camera" and she will agree with a sentence that is not hers.',
                       'Exactamente lo que quiso decir, y se lee de forma profesional. También elimina el «es una tontería, ya lo sé» y la mano: las dos cosas que te dicen que ella se ha disculpado por que le importe y dónde cree que vive el problema. En la Fase 6 dirás «la zona que te molesta en cámara» y ella asentirá a una frase que no es suya.') },
              { id: 'b', verdict: 'best',
                label: T('"It\'s stupid, I know. It\'s just — when I\'m on video calls I put my hand here." (hand to the jawline)',
                         '«Es una tontería, ya lo sé. Es que… en las videollamadas me pongo la mano aquí». (mano al borde mandibular)'),
                why: T('Ugly on the page, and it keeps both the apology and the gesture. The apology tells you she expects to be judged for minding, which is the thing to answer before any plan; the gesture tells you the area, which she never named aloud. Neither is recoverable from a tidy version.',
                       'Feo sobre el papel, y conserva la disculpa y el gesto. La disculpa te dice que ella espera que la juzguen por darle importancia, y eso hay que responderlo antes que ningún plan; el gesto te dice la zona, que ella nunca nombró en voz alta. Ninguna de las dos cosas se recupera de una versión pulida.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Client reports concern regarding jawline definition, particularly in video conferencing contexts."',
                         '«La clienta refiere preocupación por la definición mandibular, en particular en contextos de videoconferencia».'),
                why: T('A clinical record of a conversation that did not happen. Nothing in it is false and nothing in it is hers, and a recommendation built on it will be defensible at a case review and unrecognisable to her. When she declines, the record will contain no clue as to why — and the next practitioner will repeat the consultation exactly.',
                       'Un registro clínico de una conversación que no ocurrió. Nada en él es falso y nada en él es suyo, y una recomendación construida sobre eso será defendible en una sesión clínica e irreconocible para ella. Cuando diga que no, el registro no contendrá ninguna pista del motivo, y el siguiente profesional repetirá la consulta exactamente igual.') }
            ],
            principle: T('Field 6 is the only field in the map that cannot be rebuilt afterwards. Tidy it and you have kept the meaning and thrown away the evidence.',
                         'El campo 6 es el único del mapa que no se puede rehacer después. Si lo pules, te quedas con el significado y tiras la prueba.'),
            changes: {
              axis: 'recommendation',
              detail: T('Phase 6 now opens with her own sentence — "you said that on video calls you put your hand here" — so the plan is aimed at the jawline she showed you, and the first thing addressed is the apology rather than the area.',
                        'La Fase 6 se abre ahora con su propia frase —«dijiste que en las videollamadas te pones la mano aquí»— de modo que el plan apunta al borde mandibular que ella te enseñó, y lo primero que se atiende es la disculpa y no la zona.')
            }
          } },
        { kind: 'check',
          prompt: T('In this consultation, what is the most likely hidden objection already visible in field 5?',
                    'En esta consulta, ¿cuál es la objeción oculta más probable ya visible en el campo 5?'),
          options: [
            { id: 'a', text: T('Price — she is worried about cost.', 'Precio: le preocupa el coste.') },
            { id: 'b', text: T('Authority — the decision is not entirely hers, and she has told you so twice while saying it does not matter.', 'Autoridad: la decisión no es del todo suya, y te lo ha dicho dos veces mientras decía que da igual.') },
            { id: 'c', text: T('Trust — she doubts your technique.', 'Confianza: duda de tu técnica.') }
          ],
          answer: 'b',
          why: T('An authority objection raised in Phase 4 is information you can work with. The same objection raised in Phase 7 arrives as "I need to talk to my husband", by which point it is a refusal with a reason attached. Module 7 handles the second case; this module is where you avoid needing to.',
                 'Una objeción de autoridad planteada en la Fase 4 es información con la que puedes trabajar. La misma objeción en la Fase 7 llega como «tengo que hablarlo con mi marido», y a esas alturas es un rechazo con motivo. El Módulo 7 gestiona el segundo caso; este módulo es donde evitas necesitarlo.') },
        { kind: 'compare',
          prompt: T('Two field 6 entries from the same consultation. Which one can Phase 6 be built on?',
                    'Dos entradas del campo 6 de la misma consulta. ¿Sobre cuál puede construirse la Fase 6?'),
          a: { label: T('Entry A', 'Entrada A'),
               text: T('Client language: "She wants a natural, refreshed look without appearing overdone, and is concerned about how others may perceive the change."',
                       'Lenguaje de la clienta: «Quiere un aspecto natural y descansado sin parecer excesiva, y le preocupa cómo puedan percibir los demás el cambio».') },
          b: { label: T('Entry B', 'Entrada B'),
               text: T('Client language: "I don\'t want anything that means people ask me what I\'ve had done." / "It doesn\'t matter." (said twice, about her husband\'s comment)',
                       'Lenguaje de la clienta: «No quiero nada que haga que la gente me pregunte qué me he hecho». / «Da igual» (dicho dos veces, sobre el comentario de su marido)') },
          answer: 'b',
          why: T('A is a well-written clinical summary and no sentence in it is hers. B is ugly, repetitive and quotable — and "it doesn\'t matter", recorded twice, is the entry that will explain her Phase 7 objection three weeks from now when you have forgotten the consultation. Toolkit #4 validates field 1 against this field, and A gives it nothing to match.',
                 'A es un resumen clínico bien escrito y ninguna frase es suya. B es fea, repetitiva y citable, y «da igual», registrado dos veces, es la entrada que explicará su objeción de la Fase 7 dentro de tres semanas, cuando hayas olvidado la consulta. El Toolkit #4 valida el campo 1 contra este campo, y A no le da nada con lo que cotejar.') }
      ]
    }
  ],
  apply: {
    assignment: T('In your next consultation, deliver the five-element summary and end it with "What have I got wrong?" — then hold four seconds of silence before you say anything else.',
                  'En tu próxima consulta, da el resumen de cinco elementos y termina con «¿En qué me he equivocado?», y luego sostén cuatro segundos de silencio antes de decir nada más.'),
    prompt: T('What did she correct? Write her correction in her exact words, and say what it changed about what you were going to recommend.',
              '¿Qué te corrigió? Escribe su corrección con sus palabras exactas y di qué cambió respecto a lo que ibas a recomendar.')
  }
};

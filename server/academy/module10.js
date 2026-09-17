/**
 * MODULE 10 — MIRROR MASTERY
 * Book: Ch.15 (Mastery in Mindset) — Sophia & Anna, the five pillars, Dr. Liore;
 *       Ch.17 (Mastery — When Selling Becomes a Calling) — Yael's return;
 *       Ch.13 (Resolve & Rise) — Elena, who did not need to think;
 *       the closing Mirror Checklist and the Epilogue.
 * Canonical: Phases 1–8 consolidated; Trust Stages 1–7; the six Trust Standards;
 *            the four Ethical Duties; the client-state ledger and alignment verdicts.
 * This module closes the Academy. It teaches nothing new — it makes the practitioner
 * decide what to do with everything that came before.
 */
const T = (en, es) => ({ en, es });

module.exports = {
  id: 'm10', n: 10,
  phase: 'continuation',
  accent: 'gold',
  title: T('MIRROR Mastery', 'Maestría MIRROR'),
  strapline: T('Identity, the pattern you repeat, and the checklist you read before she walks in',
               'La identidad, el patrón que repites y la lista que lees antes de que ella entre'),
  summary: T(
    'Nine modules taught the mechanism. This one asks what you intend to do with it. Two salespeople with identical technique and twice the difference in results; a doctor who talked for eighteen of twenty minutes; a client called Elena who did not need to think; the ledger that tells you which phase you personally lose; the seven-line checklist the book ends on; and the visit that is not about the treatment. The method works for the practitioner who uses it on people and for the one who uses it for them. This module is where you choose.',
    'Nueve módulos enseñaron el mecanismo. Este pregunta qué piensas hacer con él. Dos vendedoras con la misma técnica y el doble de diferencia en resultados; un médico que habló dieciocho de veinte minutos; una clienta llamada Elena que no necesitaba pensárselo; el registro que te dice qué fase pierdes tú; la lista de siete líneas con la que termina el libro; y la visita que no trata del tratamiento. El método funciona igual para quien lo usa sobre las personas y para quien lo usa por ellas. Este módulo es donde eliges.'),
  outcome: T('Name the practitioner you intend to be before the door opens, read the checklist while it can still change the consultation, and ask for the decision without asking her to buy.',
             'Nombrar qué profesional pretendes ser antes de que se abra la puerta, leer la lista cuando todavía puede cambiar la consulta, y pedir la decisión sin pedirle que compre.'),
  source: T('The Beauty Sales Secrets — Chapters 13, 15 and 17, the Mirror Checklist and the Epilogue; MIRROR Phases 1–8, Trust Stages 1–7',
            'The Beauty Sales Secrets — Capítulos 13, 15 y 17, la Lista de Verificación del Espejo y el Epílogo; MIRROR Fases 1–8, Etapas de Confianza 1–7'),
  minutes: 76,
  status: 'available',
  lessons: [
    // -----------------------------------------------------------------
    {
      id: 'm10l1', n: 1, minutes: 13,
      title: T('Identity, not technique', 'Identidad, no técnica'),
      objective: T('Locate the difference between two practitioners who do the same things, and decide which one you are being.',
                   'Localizar la diferencia entre dos profesionales que hacen lo mismo y decidir cuál de los dos estás siendo.'),
      provenance: {
        chapter: 15,
        principle: T('Technique gives you tools and identity gives you power — two practitioners running the same script get different results because one sees a sale and the other sees a woman looking for help.',
                     'La técnica te da herramientas y la identidad te da fuerza: dos profesionales con el mismo guion obtienen resultados distintos porque una ve una venta y la otra ve a una mujer que busca ayuda.'),
        phase: 'connection',
        trustStage: 'safety',
        standard: 1,
        duty: 3,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
          'When two practitioners on the same counter get different results, the search for the cause goes straight to the observable: the script, the sequence, the wording, the order of the questions. That is a sound instinct, because technique is the part that can be watched, copied and taught, and a manager who improves technique improves something real. Chapter 15 is about the case where technique was not the variable. The two women asked similar questions and offered similar products; what differed was what each of them saw walk through the door — a sales opportunity, or a woman looking for help — and the difference is audible in the first ten seconds, before either of them has said anything a script could contain.',
          'Cuando dos profesionales del mismo mostrador obtienen resultados distintos, la búsqueda de la causa va directa a lo observable: el guion, la secuencia, la formulación, el orden de las preguntas. Es un instinto sensato, porque la técnica es la parte que se puede mirar, copiar y enseñar, y una responsable que mejora la técnica mejora algo real. El Capítulo 15 trata del caso en el que la técnica no era la variable. Las dos mujeres hacían preguntas parecidas y ofrecían productos parecidos; lo que cambiaba era qué veía cada una entrar por la puerta —una oportunidad de venta o una mujer buscando ayuda— y la diferencia se oye en los diez primeros segundos, antes de que ninguna haya dicho nada que quepa en un guion.'),
        sheIsThinking: T(
          'She is doing everything right and I still feel like the next thing on her list.',
          'Lo está haciendo todo bien y aun así me siento como lo siguiente de su lista.'),
        ladder: {
          weak:    { line: T('"No problem, I will leave you to it — give me a shout if you need anything."',
                     '«Sin problema, te dejo tranquila. Me avisas si necesitas algo».'),
                     effect: T('Retreat, and it reads as respect. What it communicates is that she was a possible transaction and has just been moved down the list.',
                               'Retirada, y se lee como respeto. Lo que comunica es que ella era una transacción posible y que acaba de bajar puestos en la lista.') },
          average: { line: T('"Of course. Do let me know if you would like me to show you anything."',
                     '«Por supuesto. Dime si quieres que te enseñe algo».'),
                     effect: T('Warmer, and it is the industry\'s standard sentence for a reason. It still leaves the next move with a woman who has just said she does not want to be sold to, and most women in that position leave without saying another word.',
                               'Más cálido, y por algo es la frase estándar del sector. Aun así deja el siguiente paso en manos de una mujer que acaba de decir que no quiere que le vendan, y la mayoría de las mujeres en esa posición se van sin decir una palabra más.') },
          strong:  { line: T('"That is completely fair. Can I ask what brought you in today, even if you were only browsing?"',
                     '«Me parece perfectamente justo. ¿Puedo preguntarte qué te ha traído hoy, aunque solo estuvieras mirando?»'),
                     effect: T('Treats "just looking" as the beginning of a conversation rather than the end of one. It asks about her rather than about the products, and the reason she gives is never the shelf she was standing in front of.',
                               'Trata el «solo estoy mirando» como el principio de una conversación y no como el final. Pregunta por ella y no por los productos, y el motivo que da nunca es la estantería delante de la que estaba.') }
        }
      },
      treatments: [
        {
          name:   T("Botulinum toxin — three areas",
                     "Toxina botulínica — tres zonas"),
          price:  T("€320, three areas; €160 for one area",
                     "320 €, tres zonas; 160 € una zona"),
          why:    T("The woman at reception asking for a price list is the clinic's version of \"I am just looking\", and what happens in the next ten seconds is decided entirely by what you have already decided she is.",
                     "La mujer que pide la lista de precios en recepción es la versión de clínica del «solo estoy mirando», y lo que pase en los diez segundos siguientes lo decide por completo lo que tú ya has decidido que es ella."),
          moment: T("She comes in off the street and asks whether you have a price list. Her keys are in her hand.",
                     "Entra desde la calle y pregunta si tenéis lista de precios. Lleva las llaves en la mano."),
          weak:   {
            line: T("\"Of course — here you are. Toxin starts at €160 for one area and €320 for three. Have a read and come back if anything catches your eye.\"",
                     "«Claro, toma. La toxina empieza en 160 € una zona y 320 € tres. Échale un vistazo y vuelves si te interesa algo.»"),
            cost: T("Accurate, courteous, and a transaction offered to a woman who has not described anything. She takes the list, lays it beside two others, and books wherever the number is smallest — which was never what she came in for.",
                     "Exacto, educado y una transacción ofrecida a una mujer que no ha descrito nada. Coge la lista, la pone al lado de otras dos y reserva donde la cifra sea más baja, que no era a lo que había venido.")
          },
          strong: {
            line: T("\"I will get you one. Can I ask what made you come in today, even if you were only having a look?\"",
                     "«Te la traigo. ¿Te puedo preguntar qué te ha hecho entrar hoy, aunque solo estuvieras mirando?»"),
            gain: T("Treats a price enquiry as the beginning of a conversation rather than the end of one. The reason she gives is almost never toxin, and it is the reason she will pay somebody €320 to deal with.",
                     "Trata una consulta de precio como el principio de una conversación y no como el final. El motivo que da casi nunca es la toxina, y es el motivo por el que le pagará 320 € a alguien para que se lo atienda.")
          }
        },
        {
          name:   T("Cryolipolysis — two areas",
                     "Criolipólisis — dos zonas"),
          price:  T("€680 for two areas",
                     "680 € las dos zonas"),
          why:    T("The person in the waiting room who is not the client is the purest test of identity there is, because nothing in the diary says she exists and nobody will ever audit whether you spoke to her.",
                     "La persona de la sala de espera que no es la clienta es la prueba de identidad más pura que hay, porque en la agenda no hay nada que diga que existe y nadie va a auditar jamás si le hablaste."),
          moment: T("She has come in with a friend who has an appointment, and is sitting in the waiting room with her coat still on.",
                     "Ha venido con una amiga que tiene cita y está sentada en la sala de espera con el abrigo todavía puesto."),
          weak:   {
            line: T("\"You are very welcome to wait here — help yourself to a coffee, and shout if you need anything at all.\"",
                     "«Puedes esperar aquí tranquilamente, sírvete un café, y si necesitas cualquier cosa me dices.»"),
            cost: T("Perfect hospitality, and it files her as furniture. She sits for forty minutes in a room full of the thing she has been thinking about for two years, and nobody says a word to her about it.",
                     "Hospitalidad perfecta, y la archiva como mobiliario. Se pasa cuarenta minutos sentada en una sala llena de aquello en lo que lleva dos años pensando, y nadie le dice ni una palabra al respecto.")
          },
          strong: {
            line: T("\"While you are waiting — is there anything you have ever wondered about in here and never asked anybody?\"",
                     "«Ya que esperas: ¿hay algo de aquí que te hayas preguntado alguna vez y no le hayas preguntado nunca a nadie?»"),
            gain: T("Costs one sentence and a coffee, and it addresses the person the appointment system cannot see. She is the one who books the €680 six weeks later, and she books it because somebody spoke to her when nothing was owed.",
                     "Cuesta una frase y un café, y se dirige a la persona que el sistema de citas no ve. Es la que reserva los 680 € seis semanas después, y los reserva porque alguien le habló cuando no le debía nada.")
          }
        },
        {
          name:   T("Chemical peel — single session",
                     "Peeling químico — sesión suelta"),
          price:  T("€110 a session",
                     "110 € la sesión"),
          why:    T("The cheapest item on the list is what a woman asks for when she wants to come in and does not want to say why. Booking it efficiently is what a good receptionist does, and it closes the door.",
                     "Lo más barato de la lista es lo que pide una mujer que quiere entrar y no quiere decir por qué. Reservarlo con eficacia es lo que hace una buena recepcionista, y cierra la puerta."),
          moment: T("She books the €110 peel by name, over the telephone, with no questions at all.",
                     "Reserva el peeling de 110 € por su nombre, por teléfono, sin hacer ni una pregunta."),
          weak:   {
            line: T("\"Lovely — I have you for Thursday at four. It is €110, it takes about half an hour, and there is nothing you need to do beforehand.\"",
                     "«Genial, te apunto el jueves a las cuatro. Son 110 €, dura media hora y no tienes que hacer nada antes.»"),
            cost: T("An efficient booking and a closed door. The peel was the ticket in; whatever she is actually coming about will not be mentioned now, because nobody made a space for it.",
                     "Una reserva eficiente y una puerta cerrada. El peeling era la entrada; aquello por lo que viene de verdad ya no se va a mencionar, porque nadie le hizo un hueco.")
          },
          strong: {
            line: T("\"Thursday at four, that is fine. Can I ask what made you pick the peel — was there something in particular you had noticed?\"",
                     "«El jueves a las cuatro, perfecto. ¿Te puedo preguntar por qué has elegido el peeling? ¿Habías notado algo en concreto?»"),
            gain: T("Asks the question over the telephone, before she arrives, so she has four days to decide whether to answer it honestly. Most of them arrive on Thursday having decided to.",
                     "Hace la pregunta por teléfono, antes de que venga, así que tiene cuatro días para decidir si la responde con la verdad. Casi todas llegan el jueves habiendo decidido que sí.")
          }
        }
      ],
      blocks: [
        { kind: 'check',
          prompt: T('Before you read anything: Sophia and Anna worked the same store, the same shift, the same commission structure and the same products. Sophia sold twice as much, every month, without exception. The author of Chapter 15 went to find her technique — he watched both of them and took notes on every conversation. Commit to what you think he found.',
                    'Antes de leer nada: Sophia y Anna trabajaban en la misma tienda, el mismo turno, la misma estructura de comisiones y los mismos productos. Sophia vendía el doble, todos los meses, sin excepción. El autor del Capítulo 15 fue a buscar su técnica: las observó a las dos y tomó notas de cada conversación. Decídete por lo que crees que encontró.'),
          options: [
            { id: 'a', text: T('A better opening. Sophia led with a question where Anna led with a greeting, and the first ten seconds did the rest.',
                               'Una apertura mejor. Sophia abría con una pregunta donde Anna abría con un saludo, y los diez primeros segundos hacían el resto.') },
            { id: 'b', text: T('Deeper product knowledge. Sophia could answer more of what she was asked, so fewer conversations ended in "I will have a look at home".',
                               'Más conocimiento de producto. Sophia sabía responder a más cosas, así que menos conversaciones terminaban en «lo miro en casa».') },
            { id: 'c', text: T('Nothing in her technique was different at all. What differed was that when a client said "I am just looking", Anna waited and Sophia approached.',
                               'Nada en su técnica era distinto. Lo que cambiaba era que, cuando una clienta decía «solo estoy mirando», Anna esperaba y Sophia se acercaba.') },
            { id: 'd', text: T('A firmer ending. Sophia asked for the sale where Anna left the decision open and let the client walk out with it.',
                               'Un cierre más firme. Sophia pedía la venta donde Anna dejaba la decisión abierta y permitía que la clienta se fuera con ella.') }
          ],
          answer: 'c',
          why: T('He went looking for a technique and there was not one to find, which is the finding this whole module rests on. Everything the three wrong answers describe is real and teachable, and Anna had all of it — she used every one of those tools when a client asked her to. The difference was what each woman believed she was there for. Sophia\'s own words: "I am not a salesperson. I am someone who helps women feel good about themselves. And 80% of those women started by saying they were just looking." Identity does not arrive as a better sentence. It arrives as who speaks first, on an afternoon when nobody had to.',
                 'Fue a buscar una técnica y no había ninguna que encontrar, y sobre ese hallazgo se apoya todo este módulo. Todo lo que describen las tres respuestas incorrectas es real y se puede enseñar, y Anna lo tenía todo: usaba cada una de esas herramientas cuando una clienta se lo pedía. La diferencia era para qué creía cada una que estaba allí. Palabras de la propia Sophia: «No soy vendedora. Soy alguien que ayuda a las mujeres a sentirse bien consigo mismas. Y el 80% de esas mujeres empezaron diciendo que solo estaban mirando». La identidad no llega en forma de frase mejor. Llega en forma de quién habla primero, una tarde en la que nadie tenía por qué hacerlo.') },
        { kind: 'passage',
          title: T('Same counter, twice the sales', 'El mismo mostrador, el doble de ventas'),
          body: [
            T('Sophia and Anna worked the same store, the same shift, the same commission structure and the same products. Sophia sold twice as much. Every month, without exception. Chapter 15 records what happened when the author went looking for her technique: he watched, he took notes on every conversation, and he found that her technique was not different at all.',
              'Sophia y Anna trabajaban en la misma tienda, el mismo turno, la misma estructura de comisiones y los mismos productos. Sophia vendía el doble. Todos los meses, sin excepción. El Capítulo 15 registra lo que pasó cuando el autor fue a buscar su técnica: la observó, tomó notas de cada conversación y descubrió que su técnica no era distinta en nada.'),
            T('What was different was what she thought she was doing. When a client said "I\'m just looking", Anna waited; Sophia approached. Sophia\'s own explanation: "I\'m not a salesperson. I\'m someone who helps women feel good about themselves. And 80% of those women started by saying they were just looking."',
              'Lo distinto era qué creía ella que estaba haciendo. Cuando una clienta decía «solo estoy mirando», Anna esperaba; Sophia se acercaba. La explicación de la propia Sophia: «No soy vendedora. Soy alguien que ayuda a las mujeres a sentirse bien consigo mismas. Y el 80% de esas mujeres empezaron diciendo que solo estaban mirando».'),
            T('This is the last module of the Academy, and it is the only one that cannot be practised as a behaviour. Everything before it was mechanism: the phases, the trust stages, the toolkits, the sentences. Chapter 15 states the limit of mechanism plainly — technique without identity is performance, and people can feel the difference between someone executing a script and someone living a mission. The mechanism is neutral. Chapter 17 says so directly: the MIRROR Method works either way, ethically or manipulatively. Both close sales. Only one builds a career you can stay in.',
              'Este es el último módulo de la Academia y el único que no se puede practicar como conducta. Todo lo anterior era mecanismo: las fases, las etapas de confianza, los toolkits, las frases. El Capítulo 15 enuncia el límite del mecanismo sin rodeos: la técnica sin identidad es actuación, y las personas notan la diferencia entre alguien que ejecuta un guion y alguien que vive una misión. El mecanismo es neutro. El Capítulo 17 lo dice sin matices: el Método MIRROR funciona de las dos maneras, con ética o con manipulación. Las dos cierran ventas. Solo una sostiene una carrera en la que puedas quedarte.')
          ] },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 15', 'The Beauty Sales Secrets — Capítulo 15'),
          quote: T('Technique gives you tools. Identity gives you power.',
                   'La técnica te da herramientas. La identidad te da poder.'),
          note: T('Read as flattery this sentence is worthless. Read as a diagnosis it is precise: Anna had every tool Sophia had, and used them when asked to. The gap between them was not in what they could do but in what they did unprompted, with a client who had given them no reason to.',
                  'Leída como halago, esta frase no vale nada. Leída como diagnóstico es exacta: Anna tenía todas las herramientas de Sophia y las usaba cuando se lo pedían. La distancia entre ambas no estaba en lo que sabían hacer, sino en lo que hacían sin que nadie se lo pidiera, con una clienta que no les había dado ningún motivo.') },
        { kind: 'signal',
          name: T('Fragment — two seconds after "I\'m just looking"', 'Fragmento — dos segundos después de «solo estoy mirando»'),
          client: T('"I\'m just looking, thanks." — Said a metre inside the door, unprompted, and she has yet to glance at a single price.',
                    '«Solo estoy mirando, gracias». — Dicho a un metro de la puerta, sin que nadie le hablara, y todavía no ha mirado ni un precio.'),
          prompt: T('What has she disclosed, and what does each of the two women behind the counter hear?',
                    '¿Qué ha revelado, y qué oye cada una de las dos mujeres que hay tras el mostrador?'),
          notice: [
            T('The sentence is pre-emptive: nobody had spoken to her. It is armour she brought in from somewhere else.',
              'La frase es preventiva: nadie le había hablado. Es una armadura que trae puesta de otro sitio.'),
            T('Anna hears an instruction and holds back. Everything she does afterwards is courteous, and this woman never speaks to her again.',
              'Anna oye una instrucción y se queda atrás. Todo lo que hace después es cortés, y esta mujer no vuelve a hablar con ella.'),
            T('Sophia hears a woman who came in deliberately. Chapter 15 quotes her: eighty per cent of the women she helped opened by saying they were just looking.',
              'Sophia oye a una mujer que ha entrado a propósito. El Capítulo 15 la cita: el ochenta por ciento de las mujeres a las que ayudó empezaron diciendo que solo estaban mirando.'),
            T('Neither of them lacks a technique. What separates them is what each believes she is there for, and it surfaces purely in whether one of them speaks.',
              'A ninguna de las dos le falta técnica. Lo que las separa es para qué cree cada una que está ahí, y aflora únicamente en si una de ellas habla.')
          ] },
        { kind: 'match',
          prompt: T('Chapter 15 names five pillars of the mastery mindset. Match each observable practitioner behaviour to the pillar it belongs to.',
                    'El Capítulo 15 nombra cinco pilares de la mentalidad de maestría. Empareja cada conducta observable con el pilar al que pertenece.'),
          left: [
            { id: 'b1', text: T('"Here is what I recommend, and why." — no "I think", no "maybe".', '«Esto es lo que recomiendo, y por qué». Sin «creo», sin «quizá».') },
            { id: 'b2', text: T('She came in to buy a course of six. You tell her three is the right number and book three.', 'Viene a comprar un ciclo de seis. Le dices que tres es la cifra correcta y reservas tres.') },
            { id: 'b3', text: T('The same recommendation, said in a level voice, standing still, with no upward inflection at the end.', 'La misma recomendación, dicha con voz firme, sin moverse, sin entonación ascendente al final.') },
            { id: 'b4', text: T('She has declined. At the door: "Can I ask what that no was about?"', 'Ella ha dicho que no. En la puerta: «¿Puedo preguntarte de qué iba ese no?»') },
            { id: 'b5', text: T('On Friday you write down the one moment in the week you were proud of.', 'El viernes anotas el único momento de la semana del que te sentiste orgulloso.') }
          ],
          right: [
            { id: 'expert', text: T('Expert, not order-taker', 'Experto, no despachador de pedidos') },
            { id: 'help', text: T('The job is to help, not to sell', 'El trabajo es ayudar, no vender') },
            { id: 'confidence', text: T('Confidence is contagious', 'La confianza se contagia') },
            { id: 'rejection', text: T('Rejection teaches; it does not define', 'El rechazo enseña; no define') },
            { id: 'profession', text: T('You love the profession', 'Amas la profesión') }
          ],
          pairs: { b1: 'expert', b2: 'help', b3: 'confidence', b4: 'rejection', b5: 'profession' },
          why: T('Four of the five are things you do in the room and can be seen on the day. The fifth is the only one with no client in it, and it is the one that decides whether the other four still exist in year three. Chapter 15 calls it collecting the stories; the practical version is a line a week, written down, on the days you did not sell anything.',
                 'Cuatro de los cinco son cosas que haces en la sala y se ven ese mismo día. El quinto es el único en el que no hay ninguna clienta, y es el que decide si los otros cuatro siguen existiendo en el tercer año. El Capítulo 15 lo llama recoger las historias; la versión práctica es una línea a la semana, escrita, los días en que no vendiste nada.') },
        { kind: 'choose',
          prompt: T('She comes to the desk without an appointment. "I\'m not booking anything today. I just wanted to see the prices." What do you do?',
                    'Se acerca al mostrador sin cita. «Hoy no voy a reservar nada. Solo quería ver los precios». ¿Qué haces?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"Of course, no pressure. Here\'s the price list — take it home and have a think."',
                       '«Claro, sin ningún compromiso. Aquí tienes la lista de precios; llévatela y piénsalo».'),
              why: T('Polite, correct, and it hands her the one document she cannot evaluate. She leaves holding a set of numbers with nothing attached to them, so the only comparison available to her is with another clinic\'s numbers — and she will make it. You did not lose her on price; you gave her nothing else to lose her on.',
                     'Educado, correcto, y le entregas el único documento que no puede evaluar. Se va con unas cifras a las que no va unido nada, así que la única comparación disponible es con las cifras de otra clínica, y la hará. No la perdiste por precio: no le diste ninguna otra cosa por la que perderla.') },
            { id: 'b', verdict: 'best',
              label: T('"That\'s fine — nothing gets booked today. Can I ask what made you look in the first place?"',
                       '«Perfecto: hoy no se reserva nada. ¿Puedo preguntarte qué te hizo empezar a mirar?»'),
              why: T('The first clause removes the thing she was defending against, so the second one is answerable. Most women in this position answer it, and the answer is Phase 3 material arriving before Phase 2 formally began. This is Sophia\'s move exactly: not retreat, not pitch — curiosity, with the exit left open.',
                     'La primera oración retira aquello de lo que se estaba protegiendo, así que la segunda tiene respuesta. La mayoría de las mujeres en esa situación responden, y la respuesta es material de Fase 3 que llega antes de que la Fase 2 empiece formalmente. Es exactamente el movimiento de Sophia: ni retirarse ni lanzar el argumentario, sino curiosidad, dejando la salida abierta.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Before we talk about price, let me show you what we can do — most people are surprised how much has changed."',
                       '«Antes de hablar de precio, déjame enseñarte lo que podemos hacer; a casi todo el mundo le sorprende lo mucho que ha cambiado esto».'),
              why: T('She asked one question and received a demonstration. You have converted a low-commitment enquiry into a sales situation she did not consent to enter, which is the exact event that teaches a woman not to walk into clinics and ask things. She will be pleasant, and she will not come back.',
                     'Hizo una pregunta y recibió una demostración. Has convertido una consulta de bajo compromiso en una situación de venta en la que ella no aceptó entrar, que es justo el episodio que enseña a una mujer a no entrar en clínicas a preguntar cosas. Será amable, y no volverá.') }
          ],
          principle: T('The order-taker waits and hands over information. The expert protects the exit and then asks one question. Same four seconds, opposite consultation — and neither of them required a technique you have not already been taught.',
                       'El despachador de pedidos espera y entrega información. El experto protege la salida y luego hace una pregunta. Los mismos cuatro segundos, la consulta contraria, y ninguno de los dos requiere una técnica que no te hayan enseñado ya.'),
          retry: {
            note: T('That client wanted nothing from you. This one wants to hand you money, which is the harder direction for the question to arrive from.',
                    'Aquella clienta no quería nada de ti. Esta quiere darte dinero, que es la dirección más difícil por la que puede llegar la pregunta.'),
            prompt: T('Nuria puts a €240 cream on the counter with her card out: "I\'ll take this — my friend swears by it." Nothing she has said about her skin suggests it will do much for her.',
                      'Nuria deja en el mostrador una crema de 240 € con la tarjeta fuera: «Me llevo esta, mi amiga la adora». Nada de lo que ha contado sobre su piel indica que le vaya a hacer gran cosa.'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Lovely — and if you\'re using that, you\'ll want the sunscreen alongside it."',
                         '«Muy bien, y si vas a usar esa, te va a hacer falta el protector solar al lado».'),
                why: T('You banked the sale and enlarged it. She leaves with an unsuitable product plus a companion, and six weeks later she has proof that this counter sells things that do nothing.',
                       'Te has quedado la venta y la has ampliado. Se va con un producto que no le sirve y con un acompañante, y seis semanas después tendrá la prueba de que en este mostrador se venden cosas que no hacen nada.') },
              { id: 'b', verdict: 'best',
                label: T('"I could sell you that, and I\'d rather not. For what you\'ve told me it will do very little. What would shift it is this, and it costs sixty euros less — though if you\'d still prefer your friend\'s, say so and I\'ll fetch it."',
                         '«Podría vendértela, y prefiero no hacerlo. Para lo que me has contado te va a hacer muy poco. Lo que sí lo movería es esta, y cuesta sesenta euros menos; aunque si aun así prefieres la de tu amiga, dímelo y te la traigo».'),
                why: T('"You don\'t need everything" spoken against your own till, and the final clause stops it becoming a lecture — she keeps the right to ignore you. Selling and helping point in opposite directions here, and she can see which one you followed.',
                       '«No necesitas todo» dicho contra tu propia caja, y la última oración impide que sea un sermón: ella conserva el derecho a no hacerte caso. Aquí vender y ayudar apuntan en direcciones opuestas, y ella ve cuál has seguido.') },
              { id: 'c', verdict: 'harmful',
                label: T('"That\'s a great choice."', '«Es una elección estupenda».'),
                why: T('Four words of professional authority behind a product you believe will fail her. When nothing shifts, she concludes either that her skin is hopeless or that you were guessing.',
                       'Cuatro palabras de autoridad profesional respaldando un producto que crees que le va a fallar. Cuando no cambie nada, concluirá o que su piel no tiene remedio o que tú ibas a ciegas.') }
            ],
            principle: T('The pillar is not a feeling about clients. It is what you do with a transaction you could bank and should not — identity surfaces only where selling and helping point in opposite directions.',
                         'El pilar no es un sentimiento hacia las clientas. Es qué haces con una venta que podrías quedarte y no deberías: la identidad aflora solo donde vender y ayudar apuntan en direcciones opuestas.'),
            changes: {
              axis: 'recommendation',
              detail: T('There is now a purchase on the counter and a card beside it, so the question has to travel the other way. Instead of asking a woman who wants nothing what brought her in, you have to take a €240 cream off the counter and build, out loud, the smaller thing that would actually change her skin.',
                        'Ahora hay una compra sobre el mostrador y una tarjeta al lado, así que la pregunta tiene que viajar en sentido contrario. En lugar de preguntarle a una mujer que no quiere nada qué la trajo, tienes que retirar del mostrador una crema de 240 € y construir, en voz alta, lo más pequeño que de verdad le cambiaría la piel.')
            } } },
        { kind: 'reflect',
          prompt: T('Chapter 15 opens with one question: who do you want to be in the moment a client walks through the door? Answer it as a description of behaviour, not of intention.',
                    'El Capítulo 15 abre con una pregunta: ¿quién quieres ser en el momento en que una clienta entra por la puerta? Respóndela como descripción de conducta, no de intención.'),
          placeholder: T('"I want to be someone who cares" is not an answer. "I want to be someone who asks one more question before agreeing with her" is.',
                         '«Quiero ser alguien que se preocupa» no es una respuesta. «Quiero ser alguien que hace una pregunta más antes de darle la razón» sí lo es.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm10l2', n: 2, minutes: 13,
      title: T('The doctor who became a listener', 'El médico que se convirtió en oyente'),
      objective: T('Find the moment a consultation becomes a lecture, and replace explanation with four questions.',
                   'Encontrar el momento en que una consulta se convierte en una clase y sustituir la explicación por cuatro preguntas.'),
      provenance: {
        chapter: [15, 17],
        principle: T('Experts mistake knowledge for selling: expertise is not explanation, it is understanding what someone needs and then solving for it.',
                     'Las expertas confunden el conocimiento con la venta: la pericia no es explicar, es entender qué necesita alguien y después resolverlo.'),
        phase: 'discovery',
        trustStage: 'attention',
        standard: 2,
        duty: 3,
        toolkit: 1
      },
      depth: {
        whyItGoesWrong: T(
          'An expert explains because explaining is the thing she is best at, and because she has watched people make bad decisions from bad information. Talking for eighteen of the twenty minutes is not vanity; in the doctor\'s own mind it is duty of care, and every minute of it is accurate. What it misses is that a client who is being taught cannot tell which parts apply to her, and a person who cannot locate herself in what she is hearing has nothing to decide with. The correction is not to know less or to say less that is true. It is to find out, first, what the explanation is supposed to solve.',
          'Un experto explica porque explicar es lo que mejor se le da y porque ha visto a gente tomar malas decisiones con mala información. Hablar dieciocho de los veinte minutos no es vanidad; en la cabeza del propio médico es deber de cuidado, y cada minuto es exacto. Lo que se le escapa es que una clienta a la que se está dando clase no puede saber qué partes le afectan, y una persona que no consigue situarse dentro de lo que oye no tiene con qué decidir. La corrección no es saber menos ni decir menos cosas ciertas. Es averiguar, primero, qué se supone que tiene que resolver la explicación.'),
        sheIsThinking: T(
          'This is all very impressive and none of it has been about me. I will say I need to think about it, because I do not know how to say I still cannot tell whether it is for me.',
          'Todo esto es impresionante y nada ha ido sobre mí. Voy a decir que me lo tengo que pensar, porque no sé cómo decir que sigo sin saber si esto es para mí.'),
        ladder: {
          weak:    { line: T('"Let me show you how the device works — it is a fractional laser, so what it actually does is…"',
                     '«Déjame enseñarte cómo funciona el equipo: es un láser fraccionado, así que lo que hace en realidad es…»'),
                     effect: T('Opens with the technology, which makes her an audience in minute one. The whole consultation inherits that shape, and an audience does not make decisions — it thanks you and leaves.',
                               'Abre con la tecnología, lo que la convierte en público en el minuto uno. Toda la consulta hereda esa forma, y el público no decide: te da las gracias y se va.') },
          average: { line: T('"So — what are you hoping to achieve today?"',
                     '«Bueno, ¿qué te gustaría conseguir hoy?»'),
                     effect: T('A real question, asked by most good clinicians, and it does open the door. It also invites her to answer in your vocabulary — tighter, fresher, lifted — which gives you a target without ever giving you the reason she picked up the telephone.',
                               'Una pregunta de verdad, que hace la mayoría de los buenos clínicos, y sí abre la puerta. También la invita a responder en tu vocabulario —más firme, más luminosa, más elevada—, lo que te da un objetivo sin darte nunca el motivo por el que descolgó el teléfono.') },
          strong:  { line: T('"Tell me what brought you." — and then wait through the first pause.',
                     '«Cuéntame qué te ha traído». Y después aguantar la primera pausa.'),
                     effect: T('Asks for the cause rather than the goal, and the pause after it is where the real answer lives. What she says there is what everything you recommend afterwards has to solve for.',
                               'Pide la causa y no el objetivo, y la pausa que viene después es donde vive la respuesta real. Lo que diga ahí es lo que tiene que resolver todo lo que recomiendes a continuación.') }
        }
      },
      treatments: [
        {
          name:   T("Fractional laser resurfacing — full face, single session",
                     "Láser fraccionado de rejuvenecimiento — cara completa, sesión única"),
          price:  T("€890 for one session",
                     "890 € la sesión"),
          why:    T("A fractional laser is the most explainable object in the clinic, and explainability is the trap: everything true you can say about it takes the consultation further away from her.",
                     "Un láser fraccionado es el objeto más explicable de la clínica, y la explicabilidad es la trampa: todo lo verdadero que puedes decir sobre él aleja un poco más la consulta de ella."),
          moment: T("She sits down. You have a diagram of the device and eighteen minutes of entirely accurate material about it.",
                     "Se sienta. Tienes un esquema del aparato y dieciocho minutos de material completamente exacto sobre él."),
          weak:   {
            line: T("\"Let me show you how it works — it is fractional, so it treats columns and leaves the tissue between them untouched, which is why the recovery is…\"",
                     "«Te enseño cómo funciona: es fraccionado, o sea que trata columnas y deja intacto el tejido de en medio, y por eso la recuperación es…»"),
            cost: T("Opens with the technology, which makes her an audience in minute one, and the whole consultation inherits that shape. An audience does not decide anything — it thanks you and leaves.",
                     "Abre con la tecnología, lo que la convierte en público en el primer minuto, y la consulta entera hereda esa forma. Un público no decide nada: te da las gracias y se va.")
          },
          strong: {
            line: T("\"Tell me what brought you.\" — and then wait through the first pause.",
                     "«Cuéntame qué te trae». Y después aguantas la primera pausa."),
            gain: T("Asks for the cause rather than the goal, and the pause after it is where the real answer lives. What she says there is what the €890 has to solve for, and it is rarely what the diagram was about.",
                     "Pide la causa y no el objetivo, y la pausa que viene después es donde vive la respuesta de verdad. Lo que diga ahí es lo que tienen que resolver los 890 €, y rara vez es de lo que iba el esquema.")
          }
        },
        {
          name:   T("PDO threads — midface",
                     "Hilos tensores de PDO — tercio medio"),
          price:  T("€1,750",
                     "1.750 €"),
          why:    T("Threads invite the expert to reach for the model on the shelf, because the mechanism is genuinely interesting and genuinely reassuring. It reassures the practitioner.",
                     "Los hilos invitan a la experta a coger el modelo de la estantería, porque el mecanismo es de verdad interesante y de verdad tranquilizador. Tranquiliza a la profesional."),
          moment: T("Ninety seconds in, and your hand is already moving towards the model on the shelf.",
                     "Noventa segundos de consulta y tu mano ya va hacia el modelo de la estantería."),
          weak:   {
            line: T("\"They are absorbable and they have little cones along them, which is what gives you the anchor — let me show you on the model.\"",
                     "«Son reabsorbibles y llevan unos conitos a lo largo, que es lo que da el anclaje. Te lo enseño en el modelo.»"),
            cost: T("Honest, well-prepared, and it makes her an audience in the first minute. At €1,750 an audience thanks you and goes away to think, because nothing it heard was about its own face.",
                     "Honesto, bien preparado, y la convierte en público en el primer minuto. A 1.750 €, un público te da las gracias y se va a pensarlo, porque nada de lo que ha oído iba de su propia cara.")
          },
          strong: {
            line: T("\"Before I get anything out — what is it you find yourself doing in the mirror?\"",
                     "«Antes de sacar nada: ¿qué es lo que te descubres haciendo delante del espejo?»"),
            gain: T("Asks about a private gesture rather than a desired outcome, and the answer is specific, physical and hers. Everything the model would have explained can be said later, against something she has named.",
                     "Pregunta por un gesto privado y no por un resultado deseado, y la respuesta es concreta, física y suya. Todo lo que habría explicado el modelo se puede decir después, apoyado en algo que ha nombrado ella.")
          }
        }
      ],
      conversation: {
        setting: T("First consultation, fractional laser resurfacing, full face, €890 a session. Minute one; the diagram is already on the desk.",
                   "Primera consulta, láser fraccionado de rejuvenecimiento, cara completa, 890 € la sesión. Minuto uno; el esquema ya está encima de la mesa."),
        before: [
          { who: 'client', line: T("\"A friend of mine had something done here and she looks so well. I do not really know what I need.\"",
                                    "«Una amiga mía se hizo algo aquí y se la ve fenomenal. Yo no sé muy bien qué necesito.»") },
          { who: 'practitioner', line: T("\"Then let me explain what we would probably be talking about. This is a fractional laser — it treats in columns and leaves the skin in between untouched, which is what makes the recovery manageable.\"",
                                    "«Pues te explico de qué estaríamos hablando probablemente. Esto es un láser fraccionado: trata por columnas y deja intacta la piel de en medio, que es lo que hace que la recuperación sea llevadera.»") },
          { who: 'client', line: T("\"Right.\"",
                                    "«Ajá.»") },
          { who: 'practitioner', line: T("\"Most people have two or three days where it looks like sunburn, and then a week where it feels rough. It is €890 a session, and usually we would be looking at one and then reviewing.\"",
                                    "«Casi todo el mundo tiene dos o tres días con pinta de quemadura de sol y luego una semana en la que se nota áspero. Son 890 € la sesión, y normalmente haríamos una y revisaríamos.»") },
          { who: 'client', line: T("\"And is that what my friend had?\"",
                                    "«¿Y eso es lo que se hizo mi amiga?»") },
          { who: 'practitioner', line: T("\"I could not say without looking at her notes, but it is one of the things we do most. I can put all of this in an email for you so you have the detail.\"",
                                    "«No te lo puedo decir sin mirar su historia, pero es de lo que más hacemos. Te lo puedo mandar todo por correo para que tengas el detalle.»") },
          { who: 'client', line: T("\"That would be great. Thank you — I will have a think.\"",
                                    "«Estupendo. Gracias, me lo pienso.»") }
        ],
        after: [
          { who: 'client', line: T("\"A friend of mine had something done here and she looks so well. I do not really know what I need.\"",
                                    "«Una amiga mía se hizo algo aquí y se la ve fenomenal. Yo no sé muy bien qué necesito.»") },
          { who: 'practitioner', line: T("\"Tell me what brought you.\"",
                                    "«Cuéntame qué te trae.»") },
          { who: 'client', line: T("(pause) \"…I do not know. I look tired. People keep asking me if I am alright.\"",
                                    "(silencio) «…No sé. Se me ve cansada. La gente no para de preguntarme si estoy bien.»") },
          { who: 'practitioner', line: T("\"Who asks?\"",
                                    "«¿Quién te lo pregunta?»") },
          { who: 'client', line: T("\"My team. I run a department of forty people and three of them have asked me this month.\"",
                                    "«Mi equipo. Llevo un departamento de cuarenta personas y este mes me lo han preguntado tres.»") },
          { who: 'practitioner', line: T("\"So it is not really the skin. It is being read as tired by people you are supposed to be running.\"",
                                    "«Entonces no es la piel. Es que te leen como cansada las personas a las que tienes que dirigir.»") },
          { who: 'client', line: T("\"…Yes. That is it exactly.\"",
                                    "«…Sí. Es exactamente eso.»") },
          { who: 'practitioner', line: T("\"Then before I tell you about any device, I want to look at you in daylight and tell you which part of that is something I can work on and which part is not. Come to the window.\"",
                                    "«Pues antes de contarte nada de ningún aparato quiero mirarte con luz de día y decirte qué parte de eso puedo trabajar yo y qué parte no. Ven a la ventana.»") }
        ],
        whatChanged: T("Nothing in the first version was false and nothing in it was rude. It was eighteen minutes of a highly trained person giving away her best material, and it produced a woman who had learned a good deal about a laser and nothing at all about herself. She cannot decide, because she cannot locate herself in what she has heard. The second version asked four words and then held the pause, and what came out of the pause was three people in a department of forty. That sentence is the brief. It may still end in the same laser at the same €890, but she will be buying an answer to something she said rather than a device she was taught about.",
                       "Nada de la primera versión era falso y nada era descortés. Fueron dieciocho minutos de una persona muy bien formada regalando su mejor material, y produjeron a una mujer que había aprendido bastante sobre un láser y nada en absoluto sobre sí misma. No puede decidir, porque no consigue situarse dentro de lo que ha oído. La segunda versión hizo una pregunta de cuatro palabras y después aguantó la pausa, y de la pausa salieron tres personas de un departamento de cuarenta. Esa frase es el encargo. Puede que acabe igualmente en el mismo láser a los mismos 890 €, pero estará comprando una respuesta a algo que dijo ella y no un aparato que le explicaron."),
        cost: T("€890 and everything after it. The heavier cost is that she leaves believing she does not know enough to decide, which is a state she was put into by somebody trying to help.",
                "890 € y todo lo que viniera después. El coste más gordo es que se va creyendo que no sabe lo suficiente para decidir, y a ese estado la ha llevado alguien que intentaba ayudar.")
      },
      blocks: [
        { kind: 'passage',
          title: T('Eighteen minutes of twenty', 'Dieciocho minutos de veinte'),
          body: [
            T('Dr. Liore opened an aesthetics clinic with excellent training and deep knowledge, and his income was low. Chapter 15 records the consultation the author watched: twenty minutes, of which Dr. Liore talked for eighteen — the technology, the studies, the process. The client sat there like a student in a lecture. At the end she said, politely, "That\'s very interesting. I\'ll think about it." She did not come back.',
              'El Dr. Liore abrió una clínica estética con una formación excelente y un conocimiento profundo, y sus ingresos eran bajos. El Capítulo 15 registra la consulta que el autor presenció: veinte minutos, de los cuales el Dr. Liore habló dieciocho —la tecnología, los estudios, el procedimiento—. La clienta estaba sentada como una alumna en una clase. Al final dijo, educadamente: «Es muy interesante. Me lo pensaré». No volvió.'),
            T('Asked afterwards how many questions he had put to her, he thought about it and said: one, at the beginning. Asked how much she had spoken: maybe ten per cent. This is the expert\'s error, and it is not laziness — it is the belief that if he explains enough, she will understand and buy. Chapter 15 answers it in one line: expertise is not explanation. Expertise is understanding what someone needs and then solving for it.',
              'Cuando después le preguntaron cuántas preguntas le había hecho, lo pensó y dijo: una, al principio. Cuando le preguntaron cuánto había hablado ella: quizá un diez por ciento. Este es el error del experto, y no es pereza: es la creencia de que, si explica lo suficiente, ella entenderá y comprará. El Capítulo 15 lo responde en una línea: la experiencia no es explicación. La experiencia es entender qué necesita alguien y luego resolverlo.'),
            T('One thing was changed, and it was not a technique. He stopped opening with a lecture and started opening with four questions. His conversion rate went from 28% to 54%. What he said six months later mattered more than the figure: "I actually enjoy my work now. Because I\'m not performing. I\'m connecting."',
              'Se cambió una sola cosa, y no era una técnica. Dejó de abrir con una clase y empezó a abrir con cuatro preguntas. Su tasa de conversión pasó del 28% al 54%. Lo que dijo seis meses después importa más que la cifra: «Ahora disfruto de mi trabajo. Porque ya no actúo. Conecto».')
          ] },
        { kind: 'spot',
          prompt: T('Twenty-minute consultation. One line here started the eighteen minutes. Which one?',
                    'Consulta de veinte minutos. Una línea de aquí inició los dieciocho minutos. ¿Cuál?'),
          lines: [
            { who: 'client', text: T('"It came with my second pregnancy. I\'ve stopped wearing my hair up."', '«Me salió con el segundo embarazo. He dejado de recogerme el pelo».') },
            { who: 'you', text: T('"That\'s melasma — a pigment condition, very common post-partum. It\'s driven by hormones and UV, and it sits deeper in the skin than most people assume."', '«Eso es melasma: una alteración de la pigmentación, muy frecuente en el posparto. La provocan las hormonas y la radiación UV, y está más profunda de lo que la gente cree».') },
            { who: 'client', text: T('"Right."', '«Ya».') },
            { who: 'you', text: T('"So there are three routes. The first works on the pigment directly, the second on the inflammation underneath it, and the third..."', '«Hay tres vías. La primera actúa directamente sobre el pigmento, la segunda sobre la inflamación que hay debajo, y la tercera...».') },
            { who: 'client', text: T('"Mm. And roughly what would something like that cost?"', '«Mm. ¿Y más o menos cuánto costaría algo así?»') }
          ],
          answerIndex: 1,
          why: T('Line 4 is where it becomes visible and line 2 is where it happened. She said two things: a clinical fact and a behaviour she has given up. You answered the first and left the second in the room untouched, correctly and in under fifteen seconds. Her "Right." at line 3 is the receipt — the shortened answer — and by line 5 she is asking about price, because price is the only variable left that she is qualified to evaluate.',
                 'La línea 4 es donde se ve y la línea 2 es donde ocurrió. Ella dijo dos cosas: un hecho clínico y una conducta a la que ha renunciado. Respondiste a la primera y dejaste la segunda intacta en la sala, con corrección y en menos de quince segundos. Su «Ya» de la línea 3 es el recibo —la respuesta acortada— y en la línea 5 ya pregunta por el precio, porque el precio es la única variable que le queda que está capacitada para evaluar.'),
          principle: T('Talk-time is a symptom. The disease is answering the clinical half of a sentence and leaving the human half unanswered — after which there is nothing to talk about except what you know.',
                       'El tiempo de palabra es un síntoma. La enfermedad es responder a la mitad clínica de una frase y dejar sin responder la mitad humana; a partir de ahí no queda nada de lo que hablar salvo lo que tú sabes.') },
        { kind: 'order',
          prompt: T('Put Dr. Liore\'s four questions into the order Chapter 15 records.',
                    'Ordena las cuatro preguntas del Dr. Liore según el orden que registra el Capítulo 15.'),
          items: [
            { id: 'q_brought', text: T('"Tell me what brought you."', '«Cuéntame qué te ha traído aquí».') },
            { id: 'q_most', text: T('"What\'s bothering you most?"', '«¿Qué es lo que más te molesta?»') },
            { id: 'q_tried', text: T('"What have you tried?"', '«¿Qué has probado?»') },
            { id: 'q_afraid', text: T('"What are you afraid of?"', '«¿Qué te da miedo?»') }
          ],
          correct: ['q_brought', 'q_most', 'q_tried', 'q_afraid'],
          why: T('The order is not decoration. Question 1 is open enough that any answer is a correct one. Question 2 asks her to rank, which she can only do once she has said everything. Question 3 produces the history Module 4\'s summary is built from — what she has tried and what it cost her. Question 4 is the one that reaches what she is protecting, and asked first it is an interrogation: nobody tells a stranger what frightens them in minute one. Four questions, no technique, and between them they populate Phase 3 and half of Toolkit #3.',
                 'El orden no es decorativo. La pregunta 1 es lo bastante abierta como para que cualquier respuesta sea correcta. La 2 le pide que jerarquice, y solo puede hacerlo cuando ya lo ha dicho todo. La 3 produce el historial sobre el que se construye el resumen del Módulo 4: qué ha probado y qué le costó. La 4 es la que alcanza lo que está protegiendo, y hecha en primer lugar es un interrogatorio: nadie le cuenta a un desconocido qué le da miedo en el primer minuto. Cuatro preguntas, ninguna técnica, y entre ellas cubren la Fase 3 y medio Toolkit #3.') },
        { kind: 'choose',
          prompt: T('Minute six. She interrupts your third question: "Is it the same as the one my friend had — the ultrasound thing?" What do you do?',
                    'Minuto seis. Interrumpe tu tercera pregunta: «¿Es lo mismo que se hizo mi amiga, lo del ultrasonido?». ¿Qué haces?'),
          options: [
            { id: 'a', verdict: 'best',
              label: T('One sentence, then return. "No — different depth, shorter recovery, about three days instead of ten. Tell me what happened with your friend\'s."',
                       'Una frase y volver. «No: otra profundidad, recuperación más corta, unos tres días en lugar de diez. Cuéntame qué pasó con la de tu amiga».'),
              why: T('She gets a real answer, so credibility is not spent, and the question is handed back as a question. Her answer to the return is usually the reason she asked — a friend who was disappointed, or one who was not — and that is worth more than the comparison she requested.',
                     'Recibe una respuesta real, así que no se gasta credibilidad, y la pregunta se devuelve como pregunta. Lo que responda al devolvérsela suele ser el motivo por el que preguntó —una amiga que quedó decepcionada, o una que no— y eso vale más que la comparación que pedía.') },
            { id: 'b', verdict: 'weak',
              label: T('Give her the full comparison — two minutes, both technologies, the evidence for each.',
                       'Darle la comparación completa: dos minutos, las dos tecnologías, la evidencia de cada una.'),
              why: T('She asked, you answered, and nothing about it was wrong. It is also how eighteen minutes begin: a correct answer to a small question, followed by a second one, and after four of them she has stopped asking. What ends is not her interest — it is your only source of information about what she is worried about.',
                     'Ella preguntó, tú respondiste, y nada de eso está mal. También es así como empiezan dieciocho minutos: una respuesta correcta a una pregunta pequeña, después otra, y tras cuatro ella deja de preguntar. Lo que se acaba no es su interés: es tu única fuente de información sobre lo que le preocupa.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Good question — let me come back to that at the end, once I understand your skin properly."',
                       '«Buena pregunta; déjame que la retome al final, cuando entienda bien tu piel».'),
              why: T('Method discipline used as a reason to withhold. She asked a direct question and was told to wait, which reads as either evasion or as being managed — and both cost Trust Stage 4, Credibility. She will not ask the next one, and the next one was the one that mattered.',
                     'Disciplina de método usada como excusa para no responder. Hizo una pregunta directa y se le dijo que esperara, lo que se lee como evasiva o como estar siendo gestionada, y ambas cosas cuestan Etapa de Confianza 4, Credibilidad. No hará la siguiente pregunta, y la siguiente era la que importaba.') }
          ],
          principle: T('Answer, then return. Never answer and continue. The four questions do not survive a practitioner who treats every question as an invitation to teach.',
                       'Responde y devuelve. Nunca respondas y sigas. Las cuatro preguntas no sobreviven a un profesional que trata cada pregunta como una invitación a dar clase.'),
          retry: {
            note: T('That lecture was triggered by a question. This one is triggered by a sentence with two halves, and the reassuring clinical answer is already in your mouth.',
                    'Aquella clase la disparó una pregunta. Esta la dispara una frase con dos mitades, y la respuesta clínica tranquilizadora ya la tienes en la boca.'),
            prompt: T('Minute two. Elisa: "It started after the chemo. I know it\'s vanity, honestly — I know there are worse things." You have an accurate, kind explanation ready about why the skin changes.',
                      'Minuto dos. Elisa: «Empezó después de la quimio. Ya sé que es vanidad, de verdad, ya sé que hay cosas peores». Tienes preparada una explicación exacta y amable sobre por qué cambia la piel.'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"That\'s very common after treatment — the skin\'s barrier takes months to recover, and what you\'re seeing is..."',
                         '«Eso es muy frecuente después del tratamiento: la barrera de la piel tarda meses en recuperarse, y lo que estás viendo es...».'),
                why: T('True, kind, and aimed at the half of her sentence that was not the hard one. She called her own concern vanity and you moved on to biology, which leaves the word standing — and the next eighteen minutes now have somewhere very comfortable to go.',
                       'Cierto, amable y dirigido a la mitad de su frase que no era la difícil. Ella ha llamado vanidad a su propia preocupación y tú has pasado a la biología, con lo que la palabra se queda en pie, y los siguientes dieciocho minutos ya tienen un sitio muy cómodo al que ir.') },
              { id: 'b', verdict: 'best',
                label: T('"You said vanity. Nothing you\'ve told me sounds like vanity to me. What is it you want back?"',
                         '«Has dicho vanidad. Nada de lo que me has contado me suena a vanidad. ¿Qué es lo que quieres recuperar?»'),
                why: T('The human half first, and the clinical half loses nothing by waiting thirty seconds — you will still say it, to someone who is now listening rather than apologising. Her answer to "what do you want back" is the whole of Phase 3, and it does not exist in any version of this consultation that began with the barrier function.',
                       'Primero la mitad humana, y la mitad clínica no pierde nada por esperar treinta segundos: la vas a decir igual, a alguien que ahora escucha en vez de disculparse. Lo que responda a «qué quieres recuperar» es toda la Fase 3, y no existe en ninguna versión de esta consulta que haya empezado por la función barrera.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Don\'t be silly — it isn\'t vanity at all. Everybody deserves to feel good about themselves."',
                         '«No digas tonterías, no es vanidad en absoluto. Todo el mundo merece sentirse bien consigo mismo».'),
                why: T('Her feeling has been contradicted with a slogan by someone who has known her for ninety seconds. It closes the subject warmly, and it teaches her that the self-critical sentences get corrected here rather than heard — so she will not offer another one, and those were the sentences worth having.',
                       'Su sentimiento ha sido contradicho con un eslogan por alguien que la conoce desde hace noventa segundos. Cierra el tema con calidez y le enseña que aquí las frases autocríticas se corrigen en lugar de escucharse, así que no ofrecerá otra, y esas eran las frases que valía la pena tener.') }
            ],
            principle: T('Almost every sentence a client says has a clinical half and a human half. The lecture begins the moment you answer the clinical half first — however accurate, however kindly.',
                         'Casi toda frase que dice una clienta tiene una mitad clínica y una mitad humana. La clase empieza en el momento en que respondes primero a la mitad clínica, por muy exacta y muy amable que sea la respuesta.'),
            changes: {
              axis: 'disclosure',
              detail: T('She discloses two things in one sentence — that this started after chemotherapy, and that she has already judged herself for minding. There is no question to answer now, only a self-verdict left on the table, and your accurate explanation of why the skin changes would bury it.',
                        'Revela dos cosas en una sola frase: que esto empezó después de la quimioterapia y que ya se ha juzgado a sí misma por que le importe. Ahora no hay ninguna pregunta que responder, solo un veredicto propio dejado sobre la mesa, y tu explicación exacta de por qué cambia la piel lo enterraría.')
            } } },
        { kind: 'check',
          prompt: T('What does an eighteen-of-twenty talk ratio actually tell you about that consultation?',
                    '¿Qué te dice en realidad una proporción de dieciocho sobre veinte minutos de palabra en esa consulta?'),
          options: [
            { id: 'a', text: T('The client had few questions and the practitioner filled the time responsibly.', 'La clienta tenía pocas preguntas y el profesional llenó el tiempo de forma responsable.') },
            { id: 'b', text: T('Every clinical fact was delivered and nothing was diagnosed — the practitioner solved for the question she asked instead of for the person who asked it.', 'Se entregó cada dato clínico y no se diagnosticó nada: el profesional resolvió la pregunta que ella hizo en lugar de resolver por la persona que la hizo.') },
            { id: 'c', text: T('The consultation was thorough, and the client left well informed.', 'La consulta fue exhaustiva y la clienta salió bien informada.') }
          ],
          answer: 'b',
          why: T('(c) is true and irrelevant — she was well informed and she did not come back. Note what was not done to fix it: nothing was removed, no material was simplified, no script was learned. Four questions were added, and the conversion rate doubled. If your consultations run long, the problem is almost never that you know too much.',
                 '(c) es cierto e irrelevante: quedó bien informada y no volvió. Fíjate en lo que no se hizo para arreglarlo: no se quitó nada, no se simplificó material, no se aprendió ningún guion. Se añadieron cuatro preguntas y la conversión se dobló. Si tus consultas se alargan, el problema casi nunca es que sepas demasiado.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm10l3', n: 3, minutes: 12,
      title: T('What a "no" teaches', 'Lo que enseña un «no»'),
      objective: T('Ask for the information inside a refusal, once, without arguing with the decision.',
                   'Pedir la información que hay dentro de un rechazo, una sola vez, sin discutir la decisión.'),
      provenance: {
        chapter: [13, 15],
        principle: T('Rejection is information, not failure — she did not need to think, she needed you to believe in her enough to ask one more question.',
                     'El rechazo es información, no fracaso: ella no necesitaba pensárselo, necesitaba que creyeras en ella lo bastante como para hacer una pregunta más.'),
        phase: 'decisionSupport',
        trustStage: 'safety',
        standard: 1,
        duty: 2,
        toolkit: 6
      },
      depth: {
        whyItGoesWrong: T(
          'After a no, asking why can feel like asking her to justify herself, and a practitioner who prides herself on never pressuring anybody will not do that to a client on her way out of the door. There is self-protection folded into it as well: the honest answer might be about something you did. Chapter 13 records what that costs — a consultant let a client leave on "take your time", learned two weeks later that she had gone elsewhere, and worked out that one question would have opened the conversation. The information sitting inside a refusal is the only free lesson the job offers, and it is available for about four seconds.',
          'Después de un no, preguntar por qué puede parecer pedirle que se justifique, y una profesional que se enorgullece de no presionar nunca a nadie no le hace eso a una clienta que ya va camino de la puerta. Además hay algo de autoprotección dentro: la respuesta sincera podría ir de algo que hiciste tú. El Capítulo 13 registra lo que eso cuesta: una consultora dejó marchar a una clienta con un «tómate tu tiempo», supo dos semanas después que se había ido a otro sitio y entendió que una sola pregunta habría abierto la conversación. La información que hay dentro de un rechazo es la única lección gratis que ofrece este trabajo, y está disponible durante unos cuatro segundos.'),
        sheIsThinking: T(
          'I would tell her if she asked. It was not the money — it was that I still do not know what happens to my face when I stop.',
          'Se lo diría si me lo preguntara. No era el dinero: era que sigo sin saber qué le pasa a mi cara cuando lo deje.'),
        ladder: {
          weak:    { line: T('"Was it the price? Because we might be able to work something out."',
                     '«¿Ha sido el precio? Porque igual podemos buscar alguna fórmula».'),
                     effect: T('Turns a request for information into a negotiation, and supplies her with an answer to give. Whatever the real reason was, it is now unavailable to you and to the next client who has it.',
                               'Convierte una petición de información en una negociación y le suministra una respuesta que dar. Fuera cual fuera el motivo real, ahora te resulta inaccesible, y también a la siguiente clienta que lo tenga.') },
          average: { line: T('"That is absolutely fine — thank you for coming in."',
                     '«Perfecto, sin problema. Gracias por venir».'),
                     effect: T('Gracious, and what most practitioners say. It closes the conversation neatly and leaves the one thing she was willing to give you — the actual reason — in the room with her as she walks out of it.',
                               'Elegante, y lo que dice la mayoría de los profesionales. Cierra la conversación con limpieza y deja lo único que ella estaba dispuesta a darte —el motivo real— en la sala, con ella, mientras sale.') },
          strong:  { line: T('"Can I ask what that no was about? I am asking because I want to know, not because I am trying to change it."',
                     '«¿Puedo preguntarte de qué iba ese no? Te lo pregunto porque quiero saberlo, no porque intente cambiarlo».'),
                     effect: T('Separates the question from the decision, so answering it costs her nothing. Most clients tell you, and what they tell you is usually something you can put right before the next woman sits down.',
                               'Separa la pregunta de la decisión, de modo que responder no le cuesta nada. La mayoría de las clientas te lo dicen, y lo que te dicen suele ser algo que puedes corregir antes de que se siente la siguiente mujer.') }
        }
      },
      treatments: [
        {
          name:   T("Body contouring programme — twelve sessions",
                     "Programa de remodelación corporal — doce sesiones"),
          price:  T("€2,900 for twelve sessions",
                     "2.900 € las doce sesiones"),
          why:    T("A four-figure no is the most informative event of the month and the one a practitioner is least able to stand in front of, because the honest answer might be about something she did.",
                     "Un no de cuatro cifras es el suceso más informativo del mes y ante el que menos aguanta una profesional, porque la respuesta sincera podría ir de algo que hizo ella."),
          moment: T("She says no. She has her coat on. You have about four seconds.",
                     "Dice que no. Ya tiene el abrigo puesto. Tienes unos cuatro segundos."),
          weak:   {
            line: T("\"Was it the price? Because we might be able to do something on the twelve.\"",
                     "«¿Ha sido el precio? Porque igual podemos hacer algo con las doce.»"),
            cost: T("Turns a request for information into a negotiation and supplies her with the easy answer at the same time. Whatever the real reason was, it is now unavailable to you and to the next woman who has it.",
                     "Convierte una petición de información en una negociación y de paso le suministra la respuesta fácil. Fuera cual fuera el motivo de verdad, ahora no está disponible ni para ti ni para la siguiente mujer que lo tenga.")
          },
          strong: {
            line: T("\"Can I ask what the no was about? I am asking because I want to know, not because I am trying to change it.\"",
                     "«¿Te puedo preguntar de qué ha ido el no? Te lo pregunto porque quiero saberlo, no porque quiera cambiarlo.»"),
            gain: T("Separates the question from the decision, so answering it costs her nothing. At €2,900 what she tells you is almost always something you can put right before the next woman sits down.",
                     "Separa la pregunta de la decisión, así que responderla no le cuesta nada. A 2.900 €, lo que te cuente es casi siempre algo que puedes arreglar antes de que se siente la siguiente.")
          }
        },
        {
          name:   T("Botulinum toxin — three areas",
                     "Toxina botulínica — tres zonas"),
          price:  T("€320, three areas",
                     "320 €, tres zonas"),
          why:    T("A no at €320 feels too small to enquire about, which is how the same refusal arrives twice a week for a year without anybody ever learning what it is made of.",
                     "Un no a 320 € parece demasiado pequeño para preguntar por él, y así es como el mismo rechazo llega dos veces por semana durante un año sin que nadie llegue a saber de qué está hecho."),
          moment: T("She has decided against it and she is being very pleasant about it.",
                     "Ha decidido que no y lo está diciendo con toda la amabilidad del mundo."),
          weak:   {
            line: T("\"That is absolutely fine — thank you very much for coming in.\"",
                     "«Sin ningún problema, muchísimas gracias por venir.»"),
            cost: T("Gracious, and what most of us say. It closes the conversation tidily and leaves the one thing she was willing to give you sitting in the room as she walks out of it.",
                     "Elegante, y lo que decimos casi todas. Cierra la conversación con orden y deja en la sala lo único que ella estaba dispuesta a darte mientras se marcha.")
          },
          strong: {
            line: T("\"That is fine. Before you go — was there a moment in the last half hour where you decided?\"",
                     "«Vale, perfecto. Antes de que te vayas: ¿hubo un momento en esta media hora en el que lo decidiste?»"),
            gain: T("Asks for a moment rather than a reason, which is far easier to answer and far more useful to hear. She names a minute, and the minute is usually yours.",
                     "Pide un momento y no un motivo, que es mucho más fácil de contestar y mucho más útil de oír. Nombra un minuto, y el minuto suele ser tuyo.")
          }
        },
        {
          name:   T("Pigmentation programme — IPL, course of four",
                     "Programa de pigmentación — luz pulsada, bono de cuatro sesiones"),
          price:  T("€760 for four sessions",
                     "760 € el bono de cuatro"),
          why:    T("When the no arrives in writing two days later, you have the one channel on which a woman will tell the truth — and the reflex is to close it politely.",
                     "Cuando el no llega por escrito dos días después, tienes el único canal en el que una mujer dice la verdad, y el reflejo es cerrarlo con educación."),
          moment: T("Her no arrives by message, two days after a consultation that went well.",
                     "Su no llega por mensaje, dos días después de una consulta que fue bien."),
          weak:   {
            line: T("\"No problem at all — I will keep the plan on file in case you change your mind.\"",
                     "«Ningún problema, te guardo el plan por si cambias de opinión.»"),
            cost: T("A polite full stop on the only channel where she might have written the real reason, and she was far more likely to write it than to say it across a desk.",
                     "Un punto final educado en el único canal en el que podría haber escrito el motivo de verdad, y tenía muchísimas más probabilidades de escribirlo que de decirlo al otro lado de una mesa.")
          },
          strong: {
            line: T("\"Understood, and no need to explain. If you ever feel like telling me what tipped it, I would genuinely like to know — it is the most useful thing anybody gives me.\"",
                     "«Entendido, y no hace falta que expliques nada. Si algún día te apetece contarme qué fue lo que lo inclinó, me gustaría saberlo de verdad: es lo más útil que me da nadie.»"),
            gain: T("Gives her an exit and an open door in the same message, and asks in the medium she chose. A surprising number write back, and what they write is usually the fifteen seconds you would never have suspected.",
                     "Le da una salida y una puerta abierta en el mismo mensaje, y pregunta en el medio que ha elegido ella. Contestan sorprendentemente muchas, y lo que escriben suele ser los quince segundos que nunca habrías sospechado.")
          }
        }
      ],
      conversation: {
        setting: T("End of a consultation, body contouring programme, twelve sessions, €2,900. She has said no and she is standing up.",
                   "Final de una consulta, programa de remodelación corporal, doce sesiones, 2.900 €. Ha dicho que no y se está levantando."),
        before: [
          { who: 'client', line: T("\"I am going to leave it, I think. But thank you, you have been very thorough.\"",
                                    "«Creo que lo voy a dejar. Pero gracias, has sido muy minuciosa.»") },
          { who: 'practitioner', line: T("\"Of course, and thank you for coming in. Was it the price? Because there may be something we could do on the twelve if that is what it is.\"",
                                    "«Claro, y gracias a ti por venir. ¿Ha sido el precio? Porque igual podríamos hacer algo con las doce si es eso.»") },
          { who: 'client', line: T("\"No, no. It is not the money.\"",
                                    "«No, no. No es el dinero.»") },
          { who: 'practitioner', line: T("\"Well, the plan will be here whenever you want it, and the price will not change. You have my number.\"",
                                    "«Bueno, el plan va a seguir aquí cuando lo quieras y el precio no va a cambiar. Tienes mi teléfono.»") },
          { who: 'client', line: T("\"Thank you. Really, you have been lovely.\"",
                                    "«Gracias. De verdad, has sido encantadora.»") },
          { who: 'practitioner', line: T("\"Not at all. Do take care of yourself, and I hope we see you again at some point.\"",
                                    "«Nada, mujer. Cuídate mucho, y ojalá te veamos por aquí en algún momento.»") },
          { who: 'client', line: T("\"I am sure you will. Goodbye.\"",
                                    "«Seguro que sí. Hasta luego.»") }
        ],
        after: [
          { who: 'client', line: T("\"I am going to leave it, I think. But thank you, you have been very thorough.\"",
                                    "«Creo que lo voy a dejar. Pero gracias, has sido muy minuciosa.»") },
          { who: 'practitioner', line: T("\"That is fine. Can I ask what the no was about? I am asking because I want to know, not because I am trying to change it.\"",
                                    "«Vale, perfecto. ¿Te puedo preguntar de qué ha ido el no? Te lo pregunto porque quiero saberlo, no porque quiera cambiarlo.»") },
          { who: 'client', line: T("(pause) \"…Honestly? When you measured me.\"",
                                    "(silencio) «…¿Sinceramente? Cuando me mediste.»") },
          { who: 'practitioner', line: T("\"Go on.\"",
                                    "«Cuéntame.»") },
          { who: 'client', line: T("\"You read the numbers out. Two of them. I know you were being professional but I have not heard those numbers said out loud since I was at school.\"",
                                    "«Leíste los números en voz alta. Dos de ellos. Ya sé que estabas siendo profesional, pero esos números no los oía en voz alta desde el colegio.»") },
          { who: 'practitioner', line: T("\"I did not know that, and I would not have known unless you told me. Thank you. That is entirely mine and I will change it.\"",
                                    "«No lo sabía, y no lo habría sabido si no me lo llegas a decir. Gracias. Eso es completamente mío y lo voy a cambiar.»") },
          { who: 'client', line: T("\"I did not mean it as a criticism.\"",
                                    "«No lo decía como crítica.»") },
          { who: 'practitioner', line: T("\"It is the most useful thing anybody has told me this month. The plan stays here at €2,900 for whenever you want it, and if you ever come back I will write the numbers down and hand them to you instead.\"",
                                    "«Es lo más útil que me ha dicho nadie este mes. El plan se queda aquí en 2.900 € para cuando lo quieras, y si algún día vuelves los números te los apunto y te los doy en la mano.»") }
        ],
        whatChanged: T("The first version did everything a considerate practitioner is taught to do: it accepted the decision, it offered a way out on price, it left the door open and it said goodbye warmly. It also asked the one question that guarantees no information — \"was it the price?\" — because it handed her a socially costless answer, and she took it. The second version separated the question from the decision explicitly, which is what makes it safe to answer. What came back was fifteen seconds at the measuring tape that no ledger would ever have recorded and no amount of reflection would have produced. That is the free lesson, it is available for about four seconds, and it is worth more than the €2,900, because it is still costing you clients you have not met.",
                       "La primera versión hizo todo lo que se le enseña a hacer a una profesional considerada: aceptó la decisión, ofreció una salida por precio, dejó la puerta abierta y se despidió con calidez. También hizo la única pregunta que garantiza cero información —«¿ha sido el precio?»—, porque le entregó una respuesta socialmente gratuita y ella la cogió. La segunda versión separó de forma explícita la pregunta de la decisión, que es lo que hace que contestarla sea seguro. Lo que volvió fueron quince segundos junto a la cinta métrica que ningún registro habría recogido jamás y que ninguna cantidad de reflexión habría producido. Esa es la lección gratis, está disponible unos cuatro segundos, y vale más que los 2.900 €, porque te sigue costando clientas que todavía no conoces."),
        cost: T("€2,900 today, and the same fifteen seconds repeated on every body consultation until somebody thinks to ask — which, on the first version's evidence, is never.",
                "2.900 € hoy, y los mismos quince segundos repetidos en cada consulta corporal hasta que a alguien se le ocurra preguntar, lo cual, a la vista de la primera versión, no ocurre nunca.")
      },
      blocks: [
        { kind: 'passage',
          title: T('The no you did not ask about becomes a theory', 'El no que no preguntaste se convierte en una teoría'),
          body: [
            T('Chapter 15 separates two responses to the same word. The average practitioner hears "no" and takes it personally: shoulders drop, the next client meets a more tentative version of her, and that client also says no. The master practitioner hears the same word and gets curious — what happened there, where did I lose her, what would I do differently.',
              'El Capítulo 15 separa dos respuestas a la misma palabra. El profesional medio oye «no» y se lo toma como algo personal: se le hunden los hombros, la siguiente clienta se encuentra con una versión más titubeante de él, y esa clienta también dice que no. El profesional maestro oye la misma palabra y se vuelve curioso: qué ha pasado ahí, dónde la he perdido, qué haría distinto.'),
            T('Curiosity on its own changes nothing. What changed the numbers, in the case the chapter records, was one sentence said out loud: "Can I ask what that no was about?" A consultant with strong knowledge and low conversions began asking it. Clients told her the truth, she started fixing the actual problem rather than her theory about it, and her conversions rose 24% in a month.',
              'La curiosidad por sí sola no cambia nada. Lo que cambió los números, en el caso que registra el capítulo, fue una frase dicha en voz alta: «¿Puedo preguntarte de qué iba ese no?». Una consultora con buen conocimiento y baja conversión empezó a hacerla. Las clientas le decían la verdad, empezó a corregir el problema real en vez de su teoría sobre él, y su conversión subió un 24% en un mes.'),
            T('The mechanism is unglamorous. A refusal you never interrogate does not disappear — it becomes an explanation you invented, and you then correct your practice against your own invention. Most practitioners invent price, because price is the only element of a consultation that arrives with a number attached. It is also, as Module 6 establishes, the objection least often meant literally.',
              'El mecanismo no tiene nada de glamuroso. Un rechazo que nunca interrogas no desaparece: se convierte en una explicación que te inventaste, y luego corriges tu práctica contra tu propio invento. La mayoría de los profesionales inventan el precio, porque el precio es el único elemento de la consulta que llega con una cifra. Y es también, como establece el Módulo 6, la objeción que menos veces se dice en sentido literal.')
          ] },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 13', 'The Beauty Sales Secrets — Capítulo 13'),
          quote: T('Elena didn\'t need to think. Elena needed me to believe in her enough to ask one more question.',
                   'Elena no necesitaba pensárselo. Elena necesitaba que yo creyera en ella lo bastante como para hacer una pregunta más.'),
          note: T('The consultation before that sentence had been, in the author\'s own account, perfect: an hour of connection, deep understanding, a clear recommendation. She said "You\'re amazing, but I need to think." He said "Okay, take your time" and walked her to the door. She had the treatment two weeks later, somewhere else. Chapter 13 draws the rule from it: closing is not pressure, but abandoning is not respect either.',
                  'La consulta anterior a esa frase había sido, según el propio autor, perfecta: una hora de conexión, comprensión profunda, una recomendación clara. Ella dijo: «Eres increíble, pero necesito pensarlo». Él dijo: «Vale, tómate tu tiempo» y la acompañó a la puerta. Dos semanas después se hizo el tratamiento en otro sitio. El Capítulo 13 extrae la regla: cerrar no es presionar, pero abandonar tampoco es respetar.') },
        { kind: 'compare',
          prompt: T('Two endings to the same refusal. Both are polite. Which one is the one Chapter 13 warns about?',
                    'Dos finales para el mismo rechazo. Los dos son educados. ¿Cuál es el que advierte el Capítulo 13?'),
          a: { label: T('Ending A', 'Final A'),
               text: T('"Of course. Take your time — you know where I am, and there\'s no rush at all from our side."',
                       '«Por supuesto. Tómate tu tiempo; ya sabes dónde estoy, y por nuestra parte no hay ninguna prisa».') },
          b: { label: T('Ending B', 'Final B'),
               text: T('"Of course — and that stands. Before you go, can I ask what the no was about? Not to change it. It\'s the only way I get better at this."',
                       '«Por supuesto, y se queda así. Antes de que te vayas, ¿puedo preguntarte de qué iba el no? No para cambiarlo. Es la única forma que tengo de mejorar en esto».') },
          answer: 'a',
          why: T('A is the sentence that cost Elena. It sounds like respect and it functions as withdrawal: from her side, a professional who spent an hour on her decided it did not matter enough to ask about. B costs four seconds, and the phrase "not to change it" is what makes it askable — it removes the reading that the question is a re-open, which is the only reason a client refuses to answer it. Ethical Duty 2, Respect Autonomy, is not the duty to say nothing; it is the duty not to trade on the answer.',
                 'A es la frase que costó a Elena. Suena a respeto y funciona como retirada: desde su lado, un profesional que le dedicó una hora decidió que no importaba lo suficiente como para preguntar. B cuesta cuatro segundos, y la coletilla «no para cambiarlo» es lo que la hace preguntable: retira la lectura de que la pregunta es una reapertura, que es la única razón por la que una clienta se niega a responderla. El Deber Ético 2, Respetar la Autonomía, no es el deber de callar: es el deber de no comerciar con la respuesta.') },
        { kind: 'spot',
          prompt: T('The question gets asked correctly here, and she answers it honestly. One turn still spends the answer. Which turn?',
                    'Aquí la pregunta se hace bien y ella responde con sinceridad. Aun así, una intervención gasta la respuesta. ¿Cuál?'),
          lines: [
            { who: 'client', text: T('"Look, I am going to leave it for now. Thank you, though. Really."',
                                     '«Mira, de momento lo voy a dejar. Pero gracias, de verdad».') },
            { who: 'you', text: T('"That is a fair answer and it stands. Can I ask what the no was about? Not to change it — it is the only way I get better at this."',
                                  '«Es una respuesta legítima y se queda así. ¿Puedo preguntarte de qué iba el no? No para cambiarlo: es la única forma que tengo de mejorar en esto».') },
            { who: 'client', text: T('"I suppose… when you said three sessions, I worked out that I would be coming in every month until the summer. I do not have that."',
                                     '«Pues… cuando dijiste tres sesiones, eché la cuenta de que estaría viniendo todos los meses hasta el verano. Eso no lo tengo».') },
            { who: 'you', text: T('"Ah — that part we can solve. We could do the same thing across two visits if it is the diary that is the problem. Shall I have a look?"',
                                  '«Ah, eso lo podemos arreglar. Lo mismo lo podemos hacer en dos visitas si el problema es la agenda. ¿Lo miro?»') },
            { who: 'client', text: T('"That is kind of you. I will drop you a line."',
                                     '«Qué amable. Ya te escribo».') }
          ],
          answerIndex: 3,
          why: T('Turn 2 is the instrument, run exactly as written, and it worked: on the first ask she gave a specific, checkable reason, and it was the calendar rather than the money. Turn 4 spends it. Whatever the sentence intends, what she hears is that the question was a way back in, and the promise attached to it — not to change it — has been broken in front of her within thirty seconds of being made. That costs twice. She leaves saying she will drop you a line, which is what a courteous person says when a closed decision has been reopened on her. And the finding you paid for is now worthless as information, because you will never know whether the calendar was the real reason or the first one she could reach for. The repair is dull: "Thank you for telling me," and let her go. The answer was never for today. It is for the fourth time a fourth woman says "every month until the summer", at which point what changes is the plan you offer — not the plan she declined.',
                 'La intervención 2 es el instrumento, ejecutado tal cual, y funcionó: a la primera te dio un motivo concreto y comprobable, y era el calendario y no el dinero. La intervención 4 lo gasta. Diga lo que diga la frase, lo que ella oye es que la pregunta era una manera de volver a entrar, y la promesa que la acompañaba —no para cambiarlo— se ha roto delante de ella treinta segundos después de hacerla. Eso cuesta dos veces. Se marcha diciendo que ya te escribe, que es lo que dice una persona educada cuando le han reabierto una decisión cerrada. Y el hallazgo que habías pagado ya no sirve como información, porque nunca sabrás si el calendario era el motivo real o el primero que tenía a mano. El arreglo es aburrido: «Gracias por contármelo», y dejarla ir. La respuesta nunca era para hoy. Es para la cuarta vez que una cuarta mujer diga «todos los meses hasta el verano», y entonces lo que cambia es el plan que ofreces, no el plan que ella rechazó.'),
          principle: T('The answer to a no is not for spending today. A question followed by an offer was a second attempt, whatever the wording promised — and clients can tell the difference in one turn.',
                       'La respuesta a un no no es para gastarla hoy. Una pregunta seguida de una oferta era un segundo intento, prometiera lo que prometiera la formulación, y las clientas notan la diferencia en una sola intervención.') },
        { kind: 'choose',
          prompt: T('She has decided. "It\'s just not the right time for me." She means it, and she is standing up. What do you say?',
                    'Ella ha decidido. «Simplemente no es el momento para mí». Lo dice en serio, y se está levantando. ¿Qué le dices?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('"No problem at all. I\'ll email you the plan so you\'ve got it."',
                       '«Sin problema. Te mando el plan por correo para que lo tengas».'),
              why: T('You filled the ending with an action of your own so that neither of you had to sit in the refusal. Nothing was learned, and the email arrives in her inbox as an unanswered request she now has to feel something about. She will not reply, and you will read the silence as confirmation of whatever you already believed.',
                     'Has llenado el final con una acción tuya para que ninguno de los dos tuviera que quedarse en el rechazo. No se aprendió nada, y el correo llega a su bandeja como una petición sin responder sobre la que ahora tiene que sentir algo. No contestará, y tú leerás el silencio como confirmación de lo que ya creías.') },
            { id: 'b', verdict: 'best',
              label: T('"That\'s a fair answer and it stands. Can I ask what the no was about? It\'s the only way I get better at this."',
                       '«Es una respuesta legítima y se queda así. ¿Puedo preguntarte de qué iba el no? Es la única forma que tengo de mejorar en esto».'),
              why: T('She answers, more often than practitioners expect, and she answers accurately because there is nothing left to protect — the decision is already made and you have just said so. What you do with the answer today is nothing: you thank her and she leaves. The value is in the fourth time you hear the same answer from a fourth client.',
                     'Responde, más veces de las que los profesionales esperan, y responde con precisión porque ya no queda nada que proteger: la decisión está tomada y acabas de decirlo. Lo que haces hoy con la respuesta es nada: le das las gracias y se marcha. El valor está en la cuarta vez que oigas la misma respuesta en boca de una cuarta clienta.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Is it the investment? Because we could always look at splitting it."',
                       '«¿Es por la inversión? Porque siempre podemos mirar de fraccionarla».'),
              why: T('Two failures in one sentence. You diagnosed her no as price without asking, and you discounted a decision she had just made calmly — which tells her the number was never firm. She will now re-read every figure you quoted today as an opening position, and so will the friend she tells. Trust Standard 5, Communicate with Radical Clarity, is broken retroactively.',
                     'Dos fallos en una frase. Has diagnosticado su no como precio sin preguntar, y has rebajado una decisión que ella acababa de tomar con calma, lo que le dice que la cifra nunca fue firme. A partir de ahora releerá cada importe que le has dado hoy como una posición de salida, y también lo hará la amiga a la que se lo cuente. El Estándar de Confianza 5, Comunicar con Claridad Radical, queda roto de forma retroactiva.') }
          ],
          principle: T('You are entitled to ask about a no exactly once, and not entitled to argue with it. The moment the question becomes a second attempt, clients stop answering it — and they are right to.',
                       'Tienes derecho a preguntar por un no exactamente una vez, y ningún derecho a discutirlo. En cuanto la pregunta se convierte en un segundo intento, las clientas dejan de responderla, y hacen bien.'),
          retry: {
            note: T('The same single question, on a refusal that lands when she is no longer in front of you.',
                    'La misma pregunta única, sobre un rechazo que aterriza cuando ella ya no está delante de ti.'),
            prompt: T('Two days after a complete appointment, another woman sends a message: "Hi — thank you so much for seeing me. I\'ve decided not to go ahead for now. Kind regards." What do you write in reply?',
                      'Dos días después de una cita completa, otra mujer manda un mensaje: «Hola, muchísimas gracias por atenderme. He decidido no seguir adelante de momento. Un saludo cordial». ¿Qué le escribes?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"Thank you for letting me know — that is absolutely fine. I\'ll hold the plan on record in case things change."',
                         '«Gracias por avisarme, no pasa absolutamente nada. Te guardo el plan registrado por si las cosas cambian».'),
                why: T('Kind, finished and shut. It also holds nothing that calls for a reply, so nothing returns, and the reason she did not go ahead remains a theory you will then correct your practice against. Most practitioners would send exactly this and count the matter properly dealt with.',
                       'Amable, terminado y cerrado. Además no guarda nada que reclame respuesta, así que no vuelve nada, y el motivo por el que no siguió adelante se queda en una teoría contra la que luego corregirás tu forma de trabajar. La mayoría de los profesionales mandaría justo esto y daría el asunto por bien resuelto.') },
              { id: 'b', verdict: 'best',
                label: T('"Thank you for writing — most people simply don\'t reply, so I appreciate it. One question and then I\'ll say no more: was there a moment in the appointment where you decided? It\'s the only way I get better at this."',
                         '«Gracias por escribirme: la mayoría simplemente no contesta, así que te lo agradezco. Una pregunta y no insisto más: ¿hubo un instante de la cita en el que lo decidiste? Es la única forma que tengo de mejorar en esto».'),
                why: T('One question, a stated promise to stop, and a reason that is about you rather than about her decision. She answers because there is nothing left to protect and because you have made it cost her nothing. "Was there a moment" can be answered, where "was it the price" is a multiple-choice question from which she will pick the easiest option.',
                       'Una pregunta, una promesa enunciada de parar y un motivo que habla de ti y no de su decisión. Responde porque ya no queda nada que proteger y porque no le cuesta nada. «¿Hubo un momento?» se puede responder; «¿fue el precio?» es una pregunta con opciones de la que elegirá la más cómoda.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Understood entirely. I\'ll drop you a line every few weeks in case anything changes."',
                         '«Entendido por completo. Te iré escribiendo cada pocas semanas por si algo cambia».'),
                why: T('You answered a decision with a schedule. She did not ask to be contacted, and now must either tolerate it indefinitely or say no a second time — a chore you have given her for exercising a right she was entitled to exercise. Ethical Duty 2 does not stop at the door: a refusal you reopen on a timetable was not accepted.',
                       'Has respondido a una decisión con un calendario. Ella no ha pedido que la contacten y ahora tiene que aguantarlo indefinidamente o decir que no una segunda vez: una faena que le has encargado por ejercer un derecho que le correspondía ejercer. El Deber Ético 2 no se acaba en la puerta: un rechazo que reabres con periodicidad no fue aceptado.') }
            ],
            principle: T('A no that lands by message is still a no you may ask about exactly once. What makes the question safe to answer is not its wording but the clause that ends it — the one promising this is not a second attempt.',
                         'Un no que llega por mensaje sigue siendo un no sobre el que puedes preguntar exactamente una vez. Lo que hace que la pregunta se pueda responder sin riesgo no es cómo está formulada, sino la coletilla que la cierra: la que promete que esto no es un segundo intento.'),
            changes: {
              axis: 'trust',
              detail: T('She answers within the hour, which she had no obligation to do: it was the word "correction" about her mouth, halfway through the recommendation, and she quietly switched off there. Trust Stage 1 (Safety) survives two days beyond a refusal — enough for her to finish the message by asking if she might return in the autumn.',
                        'Responde en menos de una hora, cosa que no tenía ninguna obligación de hacer: fue la palabra «corrección» dicha sobre su boca, a mitad de la recomendación, y ahí desconectó sin decir nada. La Etapa de Confianza 1 (Seguridad) sobrevive dos días más allá de un rechazo, lo suficiente para que cierre el mensaje preguntando si podría volver en otoño.')
            }
          } },
        { kind: 'translate',
          prompt: T('Three real refusals. Write the single question that turns each one into information. Then compare with the model.',
                    'Tres rechazos reales. Escribe la única pregunta que convierte cada uno en información. Luego compara con el modelo.'),
          items: [
            { id: 'n1',
              client: T('"I need to think about it." — said at the door, after a complete consultation.',
                        '«Necesito pensarlo». — dicho en la puerta, tras una consulta completa.'),
              model: T('"Of course. What\'s the part you want to think about? I\'ll stop after your answer."',
                       '«Claro. ¿Qué parte quieres pensar? Después de tu respuesta lo dejo».'),
              note: T('Module 7 handles this sentence mid-consultation, where it is a live objection. Here the decision is already made, and the promise to stop is the whole instrument: it converts a question she would dodge into one she can answer safely.',
                      'El Módulo 7 trata esta frase en mitad de la consulta, donde es una objeción viva. Aquí la decisión ya está tomada, y la promesa de parar es todo el instrumento: convierte una pregunta que ella esquivaría en una que puede responder sin riesgo.') },
            { id: 'n2',
              client: T('"I\'m going to have a look at a couple of other places first."',
                        '«Voy a mirar un par de sitios más primero».'),
              model: T('"That\'s sensible. What will you be comparing?"',
                       '«Me parece sensato. ¿Qué vas a comparar?»'),
              note: T('Her answer names what she believes the decision is about. If she says price, your recommendation failed to make anything else comparable, and the loss happened in Phase 6 — not at the number. If she names a specific fear, you learn that Phase 3 ended early.',
                      'Su respuesta nombra sobre qué cree ella que va la decisión. Si dice precio, tu recomendación no consiguió hacer comparable ninguna otra cosa, y la pérdida ocurrió en la Fase 6, no en la cifra. Si nombra un miedo concreto, aprendes que la Fase 3 terminó antes de tiempo.') },
            { id: 'n3',
              client: T('"I don\'t think it\'s for me."', '«Creo que no es para mí».'),
              model: T('"Understood. Was there a moment where you decided that? It\'s usually one moment."',
                       '«Entendido. ¿Hubo un momento en que lo decidiste? Suele ser un momento concreto».'),
              note: T('Ask about the moment, not the treatment. Practitioners ask "was it the treatment?" and learn nothing, because the decision was rarely made about the treatment — it was made at a sentence, and she can normally tell you which one.',
                      'Pregunta por el momento, no por el tratamiento. Los profesionales preguntan «¿fue el tratamiento?» y no aprenden nada, porque la decisión casi nunca se tomó sobre el tratamiento: se tomó en una frase, y ella suele saber decirte cuál.') }
          ] }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm10l4', n: 4, minutes: 13,
      title: T('Reading your own pattern', 'Leer tu propio patrón'),
      objective: T('Name the canonical phase you personally lose, using ledger evidence rather than recollection.',
                   'Nombrar la fase canónica que pierdes tú, con la evidencia del registro y no con el recuerdo.'),
      provenance: {
        chapter: [15, 16],
        principle: T('What gets measured gets done — a master does not say she knows everything she needs to know, she asks what she does not know yet, and she asks it of her own records.',
                     'Lo que se mide se hace: una maestra no dice que ya sabe todo lo que necesita saber, pregunta qué no sabe todavía, y se lo pregunta a sus propios registros.'),
        phase: 'preparation',
        trustStage: 'credibility',
        standard: 3,
        duty: 3,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
          'Recollection is assembled out of the loud appointments: the awkward client, the large yes, the afternoon somebody said something that stung. The canonical phase a clinician genuinely drops is invisible to recollection precisely because nothing occurs inside it — no dispute, no drama, just a civil hour that yielded nothing and left no trace. That is why the pattern has to be read off the ledger instead of remembered, and why the phase the ledger names is almost never the phase she would have volunteered. She would have volunteered the one she finds uncomfortable. The ledger names the one she omits.',
          'El recuerdo se ensambla con las citas ruidosas: la clienta incómoda, el sí grande, la tarde en que alguien dijo algo que escoció. La fase canónica que una clínica se salta de verdad es invisible para el recuerdo justamente porque dentro no ocurre nada: ninguna disputa, ningún drama, solo una hora civilizada que no rindió nada y no dejó rastro. Por eso el patrón hay que leerlo en el registro en vez de recordarlo, y por eso la fase que nombra el registro casi nunca es la que ella habría ofrecido. Habría ofrecido la que le resulta incómoda. El registro nombra la que omite.'),
        sheIsThinking: T(
          'She has not once asked what I had already tried. Two years and a great deal of money, and none of it came up, so whatever she recommends is a guess.',
          'No me ha preguntado ni una vez qué había probado ya. Dos años y bastante dinero, y no ha salido nada de eso, así que lo que me recomiende es una suposición.'),
        ladder: {
          weak:    { line: T('"She was never going to book — she had been shopping around on price all week."',
                     '«Esa no iba a reservar de ninguna manera: llevaba toda la semana comparando precios».'),
                     effect: T('Lodges the outcome inside the client, which shuts the review down and ensures the identical hour recurs next Tuesday.',
                               'Aloja el resultado dentro de la clienta, lo que clausura la revisión y asegura que la misma hora se repita el martes siguiente.') },
          average: { line: T('"I could have been clearer about the results — I will work on how I put that part across."',
                     '«Podría haber sido más clara con los resultados. Voy a trabajar cómo transmito esa parte».'),
                     effect: T('Self-critical, specific and far ahead of blaming her. It is also the phase most of us reach for, since explaining is the visible craft — so it repairs Phase 6 in an hour that was probably surrendered at Phase 2.',
                               'Autocrítico, concreto y muy por delante de culparla. También es la fase a la que recurrimos casi todas, porque explicar es el oficio visible, así que repara la Fase 6 en una hora que probablemente se entregó en la Fase 2.') },
          strong:  { line: T('"Six of my last ten unclosed consultations have nothing logged under what she had already tried. That is Phase 2, and it is mine."',
                     '«Seis de mis últimas diez consultas sin cierre no tienen nada registrado en qué había probado ya. Eso es la Fase 2, y es mía».'),
                     effect: T('Draws on a ledger rather than a recollection, names a canonical phase rather than a mood, and yields a figure that can be tested again in thirty days.',
                               'Se apoya en un registro y no en un recuerdo, nombra una fase canónica y no un estado de ánimo, y rinde una cifra que puede volver a comprobarse en treinta días.') }
        }
      },
      treatments: [
        {
          name:   T("Hyaluronic acid filler — midface, 2 ml",
                     "Relleno de ácido hialurónico — tercio medio, 2 ml"),
          price:  T("€720 for 2 ml",
                     "720 € los 2 ml"),
          why:    T("Filler consultations are the ones a practitioner remembers vividly and records thinly, because the visible craft is the assessment and the invisible part is everything she has already had done elsewhere.",
                     "Las consultas de relleno son las que una profesional recuerda con viveza y registra pobremente, porque el oficio visible es la valoración y la parte invisible es todo lo que ya se ha hecho en otros sitios."),
          moment: T("You are going back through ten consultations that did not close. Six of them have nothing written under what she had already had done.",
                     "Estás repasando diez consultas que no cerraron. En seis no hay nada escrito en el apartado de qué se había hecho ya."),
          weak:   {
            line: T("\"Midface is a hard sell at €720 — people baulk at two millilitres, they always have.\"",
                     "«El tercio medio es difícil de vender a 720 €: dos mililitros echan para atrás, siempre ha sido así.»"),
            cost: T("Lodges the outcome inside the treatment and the price, which ends the review before it starts and books the identical Tuesday for next week.",
                     "Aloja el resultado dentro del tratamiento y del precio, lo que termina la revisión antes de empezarla y deja reservado el mismo martes para la semana que viene.")
          },
          strong: {
            line: T("\"Six of my last ten unclosed filler consultations have nothing logged under what she had already had done. That is Phase 2, and it is mine.\"",
                     "«En seis de mis diez últimas consultas de relleno sin cerrar no hay nada apuntado sobre lo que ya se había hecho. Eso es la Fase 2, y es mía.»"),
            gain: T("Draws on a ledger rather than a recollection, names a canonical phase rather than a mood, and produces a figure that can be tested again in thirty days.",
                     "Se apoya en un registro y no en un recuerdo, nombra una fase canónica y no un estado de ánimo, y produce una cifra que se puede volver a medir dentro de treinta días.")
          }
        },
        {
          name:   T("Laser hair removal — course of six",
                     "Depilación láser — bono de seis sesiones"),
          price:  T("€690 for six sessions",
                     "690 € el bono de seis"),
          why:    T("A course hides its failure in a different column from the one everybody looks at. The conversion rate is fine; the attendance at session four is not, and nobody has ever put the two numbers on the same page.",
                     "Un bono esconde su fracaso en una columna distinta de la que mira todo el mundo. La tasa de cierre está bien; la asistencia a la cuarta sesión no lo está, y nadie ha puesto nunca los dos números en la misma página."),
          moment: T("Nineteen courses sold this year. Eleven of them stopped at session three or four.",
                     "Diecinueve bonos vendidos este año. Once se pararon en la tercera o la cuarta sesión."),
          weak:   {
            line: T("\"People just drop off on courses — everybody knows that, it is the nature of selling a bono.\"",
                     "«La gente se descuelga en los bonos, eso lo sabe todo el mundo, es lo que tiene vender bonos.»"),
            cost: T("Places the cause in a general fact about clients, which is the one place where nothing can be changed. Eleven abandonments become weather instead of evidence.",
                     "Sitúa la causa en un hecho general sobre las clientas, que es el único sitio donde no se puede cambiar nada. Once abandonos pasan a ser meteorología en lugar de pruebas.")
          },
          strong: {
            line: T("\"Eleven of nineteen stopped at session three or four, and not one of those files has a contact logged after session two. That is not clients dropping off, that is Phase 8.\"",
                     "«Once de diecinueve se pararon en la tercera o la cuarta, y ni una de esas historias tiene un contacto apuntado después de la segunda. Eso no son clientas que se descuelgan, eso es la Fase 8.»"),
            gain: T("Puts two columns beside each other and gets a phase out of it. Eleven abandoned courses at €690 is a four-figure hole with an address, and the address is a contact that was never made.",
                     "Pone dos columnas una al lado de la otra y saca de ahí una fase. Once bonos abandonados a 690 € son un agujero de cuatro cifras con una dirección, y la dirección es un contacto que nunca se hizo.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('What the ledger actually records', 'Qué registra realmente el registro'),
          body: [
            T('Every attempt you have made in the simulator wrote a client-state ledger. It holds seven values, one per Trust Stage — Safety, Attention, Understanding, Credibility, Alignment, Reliability, Confirmation — each read as ESTABLISHED, OPENING, NEUTRAL, STRAINED or BROKEN. Alongside them: her willingness to proceed out of 100, the list of what she disclosed, the list of what she still withheld, and her posture. Every decision you made carries an alignment verdict — ALIGNED, PARTIALLY ALIGNED or NOT ALIGNED — against the phase objective, Trust Stage, Standard or Duty it was measured on. The outcome was derived from that ledger. It was never chosen.',
              'Cada intento que has hecho en el simulador escribió un registro de estado de la clienta. Contiene siete valores, uno por Etapa de Confianza —Seguridad, Atención, Comprensión, Credibilidad, Alineación, Fiabilidad, Confirmación—, cada uno leído como ESTABLECIDA, ABRIÉNDOSE, NEUTRA, TENSIONADA o ROTA. Junto a ellos: su disposición a avanzar sobre 100, la lista de lo que reveló, la lista de lo que siguió reteniendo y su postura. Cada decisión que tomaste lleva un veredicto de alineación —ALINEADO, PARCIALMENTE ALINEADO o NO ALINEADO— frente al objetivo de fase, la Etapa de Confianza, el Estándar o el Deber con el que se midió. El resultado se derivó de ese registro. Nunca se eligió.'),
            T('One attempt tells you almost nothing. A client can be difficult, a case can be badly matched to your experience, and a single STRAINED reading is a bad afternoon. A pattern is different: it is the same stage falling at the same phase across attempts with different clients. That is not a bad afternoon. That is how you work.',
              'Un intento no te dice casi nada. Una clienta puede ser difícil, un caso puede encajar mal con tu experiencia, y una única lectura TENSIONADA es una mala tarde. Un patrón es otra cosa: es la misma etapa cayendo en la misma fase en intentos con clientas distintas. Eso no es una mala tarde. Eso es tu forma de trabajar.'),
            T('Two practitioners with identical conversion rates usually fail in completely different places. One loses Safety in Phase 2 and never recovers it, so everything afterwards is executed correctly on a client who is managing him. The other reaches Phase 6 with Understanding ESTABLISHED and Alignment NEUTRAL: she listened extremely well and then recommended something the client could not trace back to anything she had said. Chapter 15 prescribes an evening reflection — "when did I lose it?" — as three minutes of honest observation. The ledger answers the same question with a stage and a phase number, which is the only form of the answer you can act on.',
              'Dos profesionales con la misma tasa de conversión suelen fallar en sitios completamente distintos. Uno pierde la Seguridad en la Fase 2 y no la recupera, así que todo lo demás se ejecuta correctamente sobre una clienta que lo está gestionando a él. La otra llega a la Fase 6 con Comprensión ESTABLECIDA y Alineación NEUTRA: escuchó extraordinariamente bien y después recomendó algo que la clienta no podía trazar hasta nada de lo que había dicho. El Capítulo 15 prescribe una reflexión al final del día —«¿cuándo lo perdí?»— como tres minutos de observación honesta. El registro responde a la misma pregunta con una etapa y un número de fase, que es la única forma de la respuesta sobre la que puedes actuar.')
          ] },
        { kind: 'sort',
          prompt: T('Six ledger readings from six different attempts. Assign each to the phase range where the loss happened.',
                    'Seis lecturas de registro de seis intentos distintos. Asigna cada una al tramo de fases donde ocurrió la pérdida.'),
          client: T('Debrief extracts, one line each, taken from six completed attempts.',
                    'Extractos de informe final, una línea cada uno, de seis intentos completados.'),
          buckets: [
            { id: 'p23', label: T('Phases 2–3 — Connection and Discovery', 'Fases 2–3 — Conexión y Descubrimiento') },
            { id: 'p45', label: T('Phases 4–5 — Understanding and Education', 'Fases 4–5 — Comprensión y Educación') },
            { id: 'p67', label: T('Phases 6–7 — Recommendation and Decision Support', 'Fases 6–7 — Recomendación y Acompañamiento de la Decisión') }
          ],
          items: [
            { id: 'l1', text: T('Safety STRAINED after the second exchange; posture guarded; three items still withheld at the close.', 'Seguridad TENSIONADA tras el segundo intercambio; postura defensiva; tres elementos aún retenidos al cierre.'), bucket: 'p23' },
            { id: 'l2', text: T('Attention NEUTRAL; her answers shortened from full sentences to three words and never recovered.', 'Atención NEUTRA; sus respuestas pasaron de frases completas a tres palabras y no se recuperaron.'), bucket: 'p23' },
            { id: 'l3', text: T('Understanding NEUTRAL although she disclosed twice; nothing she said was returned to her in her own words.', 'Comprensión NEUTRA aunque reveló dos veces; nada de lo que dijo se le devolvió con sus propias palabras.'), bucket: 'p45' },
            { id: 'l4', text: T('Credibility STRAINED immediately after an unqualified promise about the result.', 'Credibilidad TENSIONADA inmediatamente después de una promesa sin matices sobre el resultado.'), bucket: 'p45' },
            { id: 'l5', text: T('Understanding ESTABLISHED, Alignment NEUTRAL, willingness 61/100, outcome DEFER.', 'Comprensión ESTABLECIDA, Alineación NEUTRA, disposición 61/100, resultado APLAZAR.'), bucket: 'p67' },
            { id: 'l6', text: T('Reliability NEUTRAL at the close: no next step named, no stop condition, no date.', 'Fiabilidad NEUTRA al cierre: ningún paso siguiente nombrado, ninguna condición de cierre, ninguna fecha.'), bucket: 'p67' }
          ],
          why: T('Line 4 is worth isolating: an unqualified promise reads as generosity and registers as a credibility loss, because Ethical Duty 4 — Communicate Truthfully — is what a client is unconsciously auditing while you speak. But the diagnostic line is 5. Understanding ESTABLISHED with Alignment NEUTRAL is the professional-grade failure: it never looks like a bad consultation, it produces no complaint and no visible mistake, and it ends in a pleasant DEFER. Practitioners with this pattern almost always conclude they have a price problem.',
                 'Merece la pena aislar la línea 4: una promesa sin matices se lee como generosidad y se registra como pérdida de credibilidad, porque el Deber Ético 4 —Comunicar con Veracidad— es lo que la clienta audita inconscientemente mientras hablas. Pero la línea diagnóstica es la 5. Comprensión ESTABLECIDA con Alineación NEUTRA es el fallo de nivel profesional: nunca parece una mala consulta, no produce ninguna queja ni ningún error visible, y termina en un APLAZAR agradable. Los profesionales con este patrón casi siempre concluyen que tienen un problema de precio.') },
        { kind: 'reveal',
          prompt: T('Your last three attempts, three different cases, all ended DEFER. At the close of the third she said this. Where do you lose?',
                    'Tus tres últimos intentos, tres casos distintos, terminaron todos en APLAZAR. Al cierre del tercero, ella dijo esto. ¿Dónde pierdes?'),
          client: T('"I think you\'re probably right. Let me have a look at my diary and I\'ll come back to you."',
                    '«Creo que probablemente tengas razón. Déjame mirar la agenda y te digo algo».'),
          guesses: [
            { id: 'a', text: T('Safety — she never felt able to speak freely.', 'Seguridad: nunca se sintió capaz de hablar con libertad.') },
            { id: 'b', text: T('Willingness — the figure was simply too low to convert.', 'Disposición: la cifra era sencillamente demasiado baja para convertir.') },
            { id: 'c', text: T('Alignment — she understood you, and could not trace your recommendation to anything she values.', 'Alineación: te entendió, y no pudo trazar tu recomendación hasta nada que ella valore.') }
          ],
          answer: 'c',
          truth: T('Across all three attempts the ledger reads Safety ESTABLISHED, Attention ESTABLISHED, Understanding ESTABLISHED — and Alignment NEUTRAL in every one. She spoke freely, you heard her, and then the recommendation arrived as a clinically sound plan that referenced nothing she had said. "You\'re probably right" is what a client says when she cannot argue with a recommendation and cannot recognise herself in it.',
                   'En los tres intentos el registro marca Seguridad ESTABLECIDA, Atención ESTABLECIDA, Comprensión ESTABLECIDA, y Alineación NEUTRA en todos. Ella habló con libertad, tú la escuchaste, y después la recomendación llegó como un plan clínicamente correcto que no hacía referencia a nada de lo que ella había dicho. «Probablemente tengas razón» es lo que dice una clienta que no puede discutir una recomendación y no puede reconocerse en ella.'),
          why: T('The fix is not in Phase 3 and no amount of better listening will produce it — your listening is already ESTABLISHED three times over. Trust Standard 4, Align Recommendations, is a Phase 6 obligation: the recommendation has to be built in her language and stated against her definition of success. That is Module 5, and specifically the field that names what you are declining to recommend and why.',
                 'La corrección no está en la Fase 3 y no la va a producir escuchar mejor: tu escucha ya aparece ESTABLECIDA tres veces. El Estándar de Confianza 4, Alinear las Recomendaciones, es una obligación de Fase 6: la recomendación tiene que construirse con su lenguaje y enunciarse contra su definición de éxito. Eso es el Módulo 5, y en concreto el campo que nombra qué decides no recomendar y por qué.') },
        { kind: 'choose',
          prompt: T('Eight attempts, eight different clients, the same reading every time: Understanding ESTABLISHED, Alignment NEUTRAL, outcome DEFER. What do you change on Monday?',
                    'Ocho intentos, ocho clientas distintas, la misma lectura siempre: Comprensión ESTABLECIDA, Alineación NEUTRA, resultado APLAZAR. ¿Qué cambias el lunes?'),
          options: [
            { id: 'a', verdict: 'weak',
              label: T('Work on discovery — go deeper in Phase 3, ask more, listen harder.',
                       'Trabajar el descubrimiento: profundizar en la Fase 3, preguntar más, escuchar mejor.'),
              why: T('You have chosen to practise the thing the evidence says you already do well eight times out of eight. It feels like effort and it is the most comfortable possible response to a pattern, because it asks you to improve at your strength — and the extra minutes will come out of the phase that is actually failing.',
                     'Has elegido practicar aquello que la evidencia dice que ya haces bien ocho de ocho veces. Parece esfuerzo y es la respuesta más cómoda posible ante un patrón, porque te pide mejorar en tu punto fuerte, y los minutos de más saldrán de la fase que sí está fallando.') },
            { id: 'b', verdict: 'best',
              label: T('Change one thing in Phase 6: before the plan, state the outcome in her words and name what you are not recommending and why. Then run five attempts and read the Alignment column.',
                       'Cambiar una sola cosa en la Fase 6: antes del plan, enunciar el resultado con las palabras de ella y nombrar qué no recomiendas y por qué. Después hacer cinco intentos y leer la columna de Alineación.'),
              why: T('One change, in the phase the ledger names, tested against the column that named it. If Alignment moves, you have evidence; if it does not, you have learned something real rather than acquired a new habit on faith. This is the difference between practising and repeating.',
                     'Un solo cambio, en la fase que nombra el registro, comprobado contra la columna que lo nombró. Si la Alineación se mueve, tienes evidencia; si no se mueve, has aprendido algo real en lugar de adoptar un hábito nuevo por fe. Esa es la diferencia entre practicar y repetir.') },
            { id: 'c', verdict: 'harmful',
              label: T('Conclude the pricing is wrong for your market and bring it down.',
                       'Concluir que tu precio no encaja en tu mercado y bajarlo.'),
              why: T('The classic misreading, and it is structural rather than stupid: price is the only element of a consultation that arrives with a number attached, so a pattern with no name gets attributed to it. You will change the one variable that was not the cause, take less money for the same work, and get the same pleasant deferrals at the new price.',
                     'La mala lectura clásica, y es estructural más que tonta: el precio es el único elemento de la consulta que llega con una cifra, así que un patrón sin nombre se le atribuye a él. Cambiarás la única variable que no era la causa, cobrarás menos por el mismo trabajo y seguirás recibiendo los mismos aplazamientos amables al precio nuevo.') }
          ],
          principle: T('A pattern earns exactly one change, made in the phase the ledger names, and tested by re-reading the same column. Anything else is practising the part you are already good at.',
                       'Un patrón da derecho exactamente a un cambio, hecho en la fase que nombra el registro y comprobado releyendo la misma columna. Cualquier otra cosa es practicar la parte que ya se te da bien.'),
          retry: {
            note: T('That pattern flattered you — it said you listen. Here is the next one, five attempts later, and it does not.',
                    'Aquel patrón te halagaba: decía que escuchas. Aquí tienes el siguiente, cinco intentos después, y no te halaga.'),
            prompt: T('Alignment is now ESTABLISHED in four attempts of five. But the debriefs show Safety STRAINED by the second exchange in three of the five, all with clients who arrived guarded. What do you conclude?',
                      'La Alineación está ahora ESTABLECIDA en cuatro intentos de cinco. Pero los informes muestran Seguridad TENSIONADA ya en el segundo intercambio en tres de los cinco, todos con clientas que llegaron a la defensiva. ¿Qué concluyes?'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('Nothing yet — three out of five is not much, and those three were difficult clients who came in closed.',
                         'Nada todavía: tres de cinco no es tanto, y esas tres eran clientas difíciles que llegaron cerradas.'),
                why: T('The same evidence standard, applied in the direction that costs you something, and suddenly it is negotiable. "Difficult client" is the explanation that ends every investigation, and it is unfalsifiable — which is exactly why practitioners reach year five with a pattern nobody ever named for them.',
                       'El mismo criterio de evidencia, aplicado en la dirección que te cuesta algo, y de pronto es negociable. «Clienta difícil» es la explicación que termina cualquier investigación y es infalsable, y por eso mismo los profesionales llegan al quinto año con un patrón que nadie les nombró nunca.') },
              { id: 'b', verdict: 'best',
                label: T('It is a pattern and it sits earlier than the last one: read what you did in the first two exchanges of all three, and find the behaviour they share.',
                         'Es un patrón y está antes que el anterior: lee qué hiciste en los dos primeros intercambios de los tres y busca la conducta que comparten.'),
                why: T('Three attempts, different clients, the same stage at the same phase — that is the definition this module gave, and it does not change because the finding is less comfortable. A Phase 2 loss is also the one that hides best: everything after it executes correctly on a client who has quietly started managing you.',
                       'Tres intentos, clientas distintas, la misma etapa en la misma fase: esa es la definición que dio este módulo, y no cambia porque el hallazgo sea menos cómodo. Una pérdida de Fase 2 es además la que mejor se esconde: todo lo posterior se ejecuta correctamente sobre una clienta que ya ha empezado, en silencio, a gestionarte a ti.') },
              { id: 'c', verdict: 'harmful',
                label: T('Apply the Phase 6 fix here too — the alignment work is clearly what has been making the difference.',
                         'Aplicar aquí también la corrección de la Fase 6: está claro que el trabajo de alineación es lo que marca la diferencia.'),
                why: T('A remedy that worked on one pattern being applied to a different one, which is how a practitioner ends up with an elaborate Phase 6 ritual and a client who stopped talking in minute two. The fix was never tested against Safety, and nothing in these debriefs suggests the recommendation was the problem.',
                       'Un remedio que funcionó con un patrón aplicado a otro distinto, que es como se acaba con un ritual elaboradísimo de Fase 6 y una clienta que dejó de hablar en el minuto dos. La corrección nunca se comprobó contra la Seguridad, y nada en estos informes sugiere que el problema fuera la recomendación.') }
            ],
            principle: T('The evidence standard only counts if it survives being applied to a finding you do not like. A pattern is three attempts, different clients, the same stage — whether it flatters you or not.',
                         'El criterio de evidencia solo cuenta si sobrevive a aplicarse a un hallazgo que no te gusta. Un patrón son tres intentos, clientas distintas y la misma etapa, te halague o no.'),
            changes: {
              axis: 'trust',
              detail: T('Alignment now holds in four attempts of five, so the stage that fails has moved earlier: Safety reads STRAINED by the second exchange with every client who arrived guarded. The evidence is the same shape and it no longer flatters you.',
                        'La Alineación ahora se sostiene en cuatro intentos de cinco, así que la etapa que falla se ha desplazado hacia atrás: la Seguridad se lee TENSIONADA ya en el segundo intercambio con todas las clientas que llegaron a la defensiva. La evidencia tiene la misma forma y ya no te halaga.')
            } } },
        { kind: 'check',
          prompt: T('One decision in one attempt comes back PARTIALLY ALIGNED. What does that entitle you to conclude?',
                    'Una decisión de un intento vuelve como PARCIALMENTE ALINEADA. ¿Qué te autoriza a concluir?'),
          options: [
            { id: 'a', text: T('That the decision was acceptable and the phase can be considered closed.', 'Que la decisión fue aceptable y la fase puede darse por cerrada.') },
            { id: 'b', text: T('Nothing about your practice. One verdict is a data point; a pattern is the same verdict at the same phase across attempts with different clients.', 'Nada sobre tu práctica. Un veredicto es un dato; el patrón es el mismo veredicto en la misma fase en intentos con clientas distintas.') },
            { id: 'c', text: T('That the case was ambiguous and the verdict is not really diagnostic.', 'Que el caso era ambiguo y el veredicto no es realmente diagnóstico.') }
          ],
          answer: 'b',
          why: T('Both wrong answers are ways of not looking. (a) treats the verdict as a pass mark, which it is not — PARTIALLY ALIGNED means part of what you did worked against the phase objective. (c) is the more common one and the more expensive: dismissing single verdicts is reasonable, and it is also how a practitioner arrives at year five with a pattern nobody ever named for her.',
                 'Las dos respuestas erróneas son formas de no mirar. (a) trata el veredicto como un aprobado, y no lo es: PARCIALMENTE ALINEADO significa que una parte de lo que hiciste trabajó en contra del objetivo de la fase. (c) es la más frecuente y la más cara: descartar veredictos sueltos es razonable, y también es la forma en que un profesional llega al quinto año con un patrón que nadie le nombró nunca.') },
        { kind: 'reflect',
          prompt: T('Name the canonical phase you lose, and cite the ledger evidence for it: which stage, which reading, in how many attempts.',
                    'Nombra la fase canónica que pierdes y cita la evidencia del registro: qué etapa, qué lectura, en cuántos intentos.'),
          placeholder: T('If you cannot cite a stage and a reading, what you have written is a feeling about yourself, not a pattern. Go back to the debriefs and read them.',
                         'Si no puedes citar una etapa y una lectura, lo que has escrito es una impresión sobre ti mismo, no un patrón. Vuelve a los informes finales y léelos.') }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm10l5', n: 5, minutes: 12,
      title: T('The practitioner\'s checklist', 'La lista del profesional'),
      objective: T('Assemble the book\'s closing checklist in order, map it to the canonical phases, and use it while it can still change something.',
                   'Montar en orden la lista final del libro, mapearla sobre las fases canónicas y usarla mientras todavía puede cambiar algo.'),
      provenance: {
        chapter: [13, 17],
        principle: T('Read the checklist before she walks in, not after she leaves — and its last line, "did I confidently ask for the decision?", is the one skipped most often by practitioners who believe they are being respectful.',
                     'Lee la lista antes de que ella entre, no después de que se vaya, y su última línea —«¿he pedido la decisión con seguridad?»— es la que más se saltan los profesionales que creen estar siendo respetuosos.'),
        phase: 'decisionSupport',
        trustStage: 'alignment',
        standard: 5,
        duty: 2,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
          'The checklist gets read afterwards, as a debrief, because afterwards is when there is time and because reviewing your own work looks like the responsible thing to do. The book is specific in the other direction: read it before she walks in, not after she leaves. A list read afterwards can only produce regret about a consultation that is already finished; the same list read beforehand changes one that has not happened yet. And the line most often left unticked is the last one — did I confidently ask for the decision — skipped hardest by the practitioners who care most about never pressuring anybody.',
          'La lista se lee después, como repaso, porque después es cuando hay tiempo y porque revisar el propio trabajo parece lo responsable. El libro es específico en la dirección contraria: léela antes de que ella entre, no después de que se vaya. Una lista leída después solo puede producir arrepentimiento sobre una consulta que ya ha terminado; esa misma lista leída antes cambia una que todavía no ha ocurrido. Y la línea que más veces se queda sin marcar es la última —¿pedí la decisión con confianza?—, y quienes más se la saltan son los profesionales a los que más les importa no presionar nunca a nadie.'),
        sheIsThinking: T(
          'She has told me everything and she has not asked me for anything. Am I supposed to bring it up myself?',
          'Me lo ha contado todo y no me ha pedido nada. ¿Se supone que tengo que sacarlo yo?'),
        ladder: {
          weak:    { line: T('"So that is everything — I will let you have a think and we will go from there."',
                     '«Pues eso es todo. Te dejo que lo pienses y ya vemos».'),
                     effect: T('Skips the last line of the checklist and calls the omission respect. She leaves with a plan and no request, and she reads the missing request as a missing conviction.',
                               'Se salta la última línea de la lista y llama respeto a esa omisión. Ella se va con un plan y sin ninguna petición, y lee esa petición ausente como una convicción ausente.') },
          average: { line: T('"Let me know what you would like to do and we will get it booked in."',
                     '«Dime qué quieres hacer y te lo dejamos reservado».'),
                     effect: T('Correct, polite and extremely common. It hands her an administrative instruction in place of a question about the decision, so any uncertainty she still has walks out of the building with her.',
                               'Correcto, educado y extremadamente habitual. Le entrega una instrucción administrativa en lugar de una pregunta sobre la decisión, así que cualquier incertidumbre que le quede sale del edificio con ella.') },
          strong:  { line: T('"I have told you what I would do and why. What feels right to you?"',
                     '«Ya te he dicho qué haría yo y por qué. ¿Qué te parece a ti?»'),
                     effect: T('Asks for the decision without asking her to buy. It is the last line of the checklist, and it is the only version of this moment that produces an answer you can act on while she is still in the room.',
                               'Pide la decisión sin pedirle que compre. Es la última línea de la lista y es la única versión de este momento que produce una respuesta con la que puedes hacer algo mientras ella sigue en la sala.') }
        }
      },
      treatments: [
        {
          name:   T("PDO threads — midface",
                     "Hilos tensores de PDO — tercio medio"),
          price:  T("€1,750",
                     "1.750 €"),
          why:    T("The larger the figure, the more the last line of the checklist feels like pressure — which is why the practitioners who care most about never pushing anybody skip it precisely where it matters most.",
                     "Cuanto más alta es la cifra, más se parece a presión la última línea de la lista, y por eso las profesionales que más cuidan de no empujar a nadie se la saltan justo donde más importa."),
          moment: T("Forty minutes done, everything covered, and you are winding up without having asked her for anything at all.",
                     "Cuarenta minutos hechos, todo tratado, y estás cerrando sin haberle pedido absolutamente nada."),
          weak:   {
            line: T("\"So that is everything. I will let you have a think and we will go from there.\"",
                     "«Pues eso es todo. Te dejo que lo pienses y seguimos desde ahí.»"),
            cost: T("Skips the last line of the checklist and calls the omission respect. She leaves with a plan and no request, and she reads the missing request as a missing conviction about €1,750.",
                     "Se salta la última línea de la lista y llama respeto a la omisión. Se va con un plan y sin ninguna petición, y lee esa petición ausente como una convicción ausente sobre los 1.750 €.")
          },
          strong: {
            line: T("\"I have told you what I would do and why. What feels right to you?\"",
                     "«Te he dicho lo que yo haría y por qué. ¿Qué sientes tú que encaja?»"),
            gain: T("Asks for the decision without asking her to buy. It is the last line of the checklist and it is the only version of this moment that produces an answer you can act on while she is still in the room.",
                     "Pide la decisión sin pedirle que compre. Es la última línea de la lista y es la única versión de este momento que produce una respuesta con la que puedes hacer algo mientras ella sigue en la sala.")
          }
        },
        {
          name:   T("Chemical peel — course of four",
                     "Peeling químico — bono de cuatro sesiones"),
          price:  T("€380 for four sessions",
                     "380 € el bono de cuatro"),
          why:    T("At €380 the last line feels unnecessary — it is small, she will say if she wants it — and that is exactly where the habit of not asking is formed before being carried into the €1,750 room.",
                     "A 380 € la última línea parece innecesaria —es poco, ya lo dirá si lo quiere— y es justo ahí donde se forma la costumbre de no pedir antes de llevársela a la consulta de 1.750 €."),
          moment: T("She is standing up and putting her bag on her shoulder. Nobody has asked her for a decision.",
                     "Se está levantando y colgándose el bolso. Nadie le ha pedido una decisión."),
          weak:   {
            line: T("\"Let me know what you would like to do and we will get it booked in for you.\"",
                     "«Tú me dices qué quieres hacer y te lo dejamos reservado.»"),
            cost: T("Hands her an administrative instruction in place of a question about the decision, so whatever uncertainty she still has walks out of the building with her and is never heard.",
                     "Le entrega una instrucción administrativa en lugar de una pregunta sobre la decisión, así que la incertidumbre que le quede sale del edificio con ella y no se oye nunca.")
          },
          strong: {
            line: T("\"Four sessions, €380, starting on the twelfth. Is that what you would like me to do?\"",
                     "«Cuatro sesiones, 380 €, empezando el día doce. ¿Es eso lo que quieres que haga?»"),
            gain: T("States the plan, the figure and the date, and then asks one closed question. At €380 she can answer it in two seconds, and the practitioner who asks it here is the one who can still ask it at €1,750.",
                     "Enuncia el plan, la cifra y la fecha, y después hace una única pregunta cerrada. A 380 € ella puede contestarla en dos segundos, y la profesional que la hace aquí es la que todavía sabe hacerla a 1.750 €.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('Seven lines, written in the past tense', 'Siete líneas, escritas en pasado'),
          body: [
            T('The book ends with a page called the Mirror Checklist, and one instruction above it: print this page, keep it beside your consultation notes, read it before she walks in — not after she leaves. Seven questions follow, and every one of them is in the past tense.',
              'El libro termina con una página llamada la Lista de Verificación del Espejo y una instrucción encima: imprime esta página, tenla junto a tus notas de consulta, léela antes de que ella entre, no cuando se haya ido. Siguen siete preguntas, y todas están en pasado.'),
            T('The tense is the design. "Did I create safety?" cannot be intended vaguely — it describes a completed act, so reading it beforehand forces you to picture the specific thing you will have done by minute four. Read afterwards, the same seven sentences are verdicts, and a verdict arrives at the only moment in the consultation when nothing can be done with it.',
              'El tiempo verbal es el diseño. «¿He creado seguridad?» no se puede pretender de forma vaga: describe un acto terminado, así que leerla antes te obliga a imaginar la cosa concreta que habrás hecho para el minuto cuatro. Leídas después, esas mismas siete frases son veredictos, y un veredicto llega en el único momento de la consulta en que ya no se puede hacer nada con él.'),
            T('There are seven lines and eight canonical phases. The missing one is Phase 1, Preparation — because reading the list before she arrives is Phase 1, performed. And the list ends where the consultation ends: what follows the decision is Phase 8, and that is Module 9\'s material, which the practitioner adds as an eighth line of her own.',
              'Hay siete líneas y ocho fases canónicas. La que falta es la Fase 1, Preparación, porque leer la lista antes de que ella llegue es la Fase 1 ejecutada. Y la lista termina donde termina la consulta: lo que viene después de la decisión es la Fase 8, que es material del Módulo 9 y que el profesional añade como octava línea propia.')
          ] },
        { kind: 'signal',
          name: T('Fragment — minute twenty-two, the consultation the checklist is about',
                  'Fragmento — minuto veintidós, la consulta de la que trata la lista'),
          client: T('"Yes… yes, that sounds right." — Asked whether the plan matches what she came in for. It is the fifth yes in six minutes, and she has not added a single word to any of them.',
                    '«Sí… sí, suena bien». — Preguntada si el plan encaja con aquello por lo que vino. Es el quinto sí en seis minutos, y no ha añadido ni una palabra a ninguno.'),
          prompt: T('Which of the seven lines has already failed, and when did it fail?',
                    '¿Cuál de las siete líneas ha fallado ya, y cuándo falló?'),
          notice: [
            T('Nothing in her answer is information. A yes with no words added is agreement without recognition, and it is available to every question you ask from here to the end.',
              'En su respuesta no hay ninguna información. Un sí sin palabras añadidas es acuerdo sin reconocimiento, y está disponible para todas las preguntas que hagas de aquí al final.'),
            T('The line that failed is the third — "Did I reflect?" — and it failed about fifteen minutes ago, at the point where nothing she said was returned to her in her own words for her to correct.',
              'La línea que ha fallado es la tercera —«¿He reflejado?»— y falló hace unos quince minutos, en el punto en que nada de lo que dijo se le devolvió con sus propias palabras para que lo corrigiera.'),
            T('Read afterwards, this consultation ticks six lines honestly: safety, investigation, identity, recommendation, objections, decision. That is why the book says read it before — the one line that failed is invisible from inside the twenty-second minute.',
              'Leída después, esta consulta marca seis líneas con honestidad: seguridad, indagación, identidad, recomendación, objeciones, decisión. Por eso el libro dice que se lea antes: la única línea que falló es invisible desde dentro del minuto veintidós.'),
            T('She will not correct you now. The correction was only ever available in the two minutes before the plan existed, and those two minutes have gone.',
              'Ya no te va a corregir. La corrección solo estuvo disponible en los dos minutos anteriores a que existiera el plan, y esos dos minutos ya han pasado.')
          ] },
        { kind: 'order',
          prompt: T('Assemble the Mirror Checklist in the order the book prints it.',
                    'Monta la Lista de Verificación del Espejo en el orden en que la imprime el libro.'),
          items: [
            { id: 'c_safe', text: T('Did I create safety?', '¿He creado seguridad?') },
            { id: 'c_investigate', text: T('Did I investigate?', '¿He indagado?') },
            { id: 'c_reflect', text: T('Did I reflect?', '¿He reflejado?') },
            { id: 'c_identity', text: T('Did I understand identity?', '¿He comprendido la identidad?') },
            { id: 'c_recommend', text: T('Did I recommend?', '¿He recomendado?') },
            { id: 'c_objections', text: T('Did I handle objections?', '¿He gestionado las objeciones?') },
            { id: 'c_decision', text: T('Did I confidently ask for the decision?', '¿He pedido la decisión con confianza?') }
          ],
          correct: ['c_safe', 'c_investigate', 'c_reflect', 'c_identity', 'c_recommend', 'c_objections', 'c_decision'],
          why: T('The two lines practitioners transpose are 3 and 5 — reflect and recommend — and the transposition is the single commonest structural error in aesthetic consultation. Reflected after recommending, the client\'s words become supporting evidence for a plan that already existed. Line 4 is the other one worth noticing: identity is checked after reflection and before recommendation, which is the only position in the sequence where it can still constrain what you propose.',
                 'Las dos líneas que los profesionales intercambian son la 3 y la 5 —reflejar y recomendar— y ese intercambio es el error estructural más común de la consulta estética. Reflejadas después de recomendar, las palabras de la clienta se convierten en evidencia de apoyo para un plan que ya existía. La línea 4 es la otra que merece atención: la identidad se comprueba después del reflejo y antes de la recomendación, que es la única posición de la secuencia en la que aún puede condicionar lo que propones.') },
        { kind: 'sort',
          prompt: T('Map each checklist line onto the canonical phases it audits.',
                    'Mapea cada línea de la lista sobre las fases canónicas que audita.'),
          client: T('The seven printed lines, out of order.', 'Las siete líneas impresas, desordenadas.'),
          buckets: [
            { id: 'b23', label: T('Phases 2–3', 'Fases 2–3') },
            { id: 'b45', label: T('Phases 4–5', 'Fases 4–5') },
            { id: 'b67', label: T('Phases 6–7', 'Fases 6–7') }
          ],
          items: [
            { id: 'm_safe', text: T('Did I create safety?', '¿He creado seguridad?'), bucket: 'b23' },
            { id: 'm_investigate', text: T('Did I investigate?', '¿He indagado?'), bucket: 'b23' },
            { id: 'm_reflect', text: T('Did I reflect?', '¿He reflejado?'), bucket: 'b45' },
            { id: 'm_identity', text: T('Did I understand identity?', '¿He comprendido la identidad?'), bucket: 'b45' },
            { id: 'm_recommend', text: T('Did I recommend?', '¿He recomendado?'), bucket: 'b67' },
            { id: 'm_objections', text: T('Did I handle objections?', '¿He gestionado las objeciones?'), bucket: 'b67' },
            { id: 'm_decision', text: T('Did I confidently ask for the decision?', '¿He pedido la decisión con confianza?'), bucket: 'b67' }
          ],
          why: T('Three of the seven lines sit in Phases 6–7, which is where practitioners spend their preparation time and where the least of the outcome is decided. The two lines that carry the consultation — investigate and reflect — occupy four minutes of thought between them and are the two most often ticked from memory rather than from evidence. If you tick "Did I reflect?" without being able to quote the sentence you returned to her, you did not reflect.',
                 'Tres de las siete líneas están en las Fases 6–7, que es donde los profesionales dedican su tiempo de preparación y donde menos se decide el resultado. Las dos líneas que sostienen la consulta —indagar y reflejar— ocupan entre las dos cuatro minutos de pensamiento y son las dos que más a menudo se marcan de memoria y no con evidencia. Si marcas «¿He reflejado?» sin poder citar la frase que le devolviste, no reflejaste.') },
        { kind: 'choose',
          prompt: T('Minute twenty-two. You are about to recommend, and you notice you cannot honestly tick "Did I reflect?". What do you do?',
                    'Minuto veintidós. Vas a recomendar y te das cuenta de que no puedes marcar con honestidad «¿He reflejado?». ¿Qué haces?'),
          options: [
            { id: 'a', verdict: 'best',
              label: T('Stop and do it now — deliver the summary, end with "What have I got wrong?", and lose the two minutes.',
                       'Parar y hacerlo ahora: dar el resumen, terminar con «¿En qué me he equivocado?» y perder los dos minutos.'),
              why: T('It feels like going backwards in front of a client, which is why it is rarely done. What she experiences is not hesitation but a professional checking his understanding before committing her to something — and the correction she gives you routinely changes the recommendation you were four seconds from making.',
                     'Se siente como retroceder delante de una clienta, y por eso casi nunca se hace. Lo que ella experimenta no es duda, sino a un profesional comprobando lo que ha entendido antes de comprometerla con algo, y la corrección que te da cambia habitualmente la recomendación que ibas a hacer cuatro segundos después.') },
            { id: 'b', verdict: 'weak',
              label: T('Recommend, and reflect inside the recommendation by using her own words as you present it.',
                       'Recomendar, y reflejar dentro de la recomendación usando sus propias palabras al presentarla.'),
              why: T('Her words are there, so it sounds identical to the alternative and does something different: she is never given the chance to correct you, only to agree with a plan that quotes her. You get the sound of understanding without the verification, which is precisely the ledger pattern that reads Understanding ESTABLISHED and Alignment NEUTRAL.',
                     'Sus palabras están ahí, así que suena idéntico a la alternativa y hace otra cosa: nunca se le da la oportunidad de corregirte, solo de estar de acuerdo con un plan que la cita. Obtienes el sonido de la comprensión sin la verificación, que es exactamente el patrón de registro que marca Comprensión ESTABLECIDA y Alineación NEUTRA.') },
            { id: 'c', verdict: 'harmful',
              label: T('"I want to make sure I\'ve understood you properly — and I have, haven\'t I?"',
                       '«Quiero asegurarme de que te he entendido bien, y te he entendido, ¿verdad?»'),
              why: T('A leading confirmation. She says yes, because the alternative is telling a professional he has been failing to listen for twenty minutes. You now hold a verification she did not give, and it will be treated as fact by everyone who reads your notes, including you.',
                     'Una confirmación inducida. Ella dice que sí, porque la alternativa es decirle a un profesional que lleva veinte minutos sin escuchar. Ahora tienes una verificación que ella no dio, y todo el que lea tus notas la tratará como un hecho, tú incluido.') }
          ],
          principle: T('The checklist is not a scoring sheet. The only useful moment to read a line is the moment you can still act on it, which is why the book says before and not after.',
                       'La lista no es una hoja de puntuación. El único momento útil para leer una línea es aquel en el que aún puedes actuar sobre ella, y por eso el libro dice antes y no después.'),
          retry: {
            note: T('That was line 3, caught with twenty minutes of consultation left to repair it. This is line 7, and there is nothing after it.',
                    'Aquella era la línea 3, detectada con veinte minutos de consulta por delante para repararla. Esta es la línea 7, y después de ella no hay nada.'),
            prompt: T('Minute thirty-one. The plan is on the table, her questions are answered, and you are about to walk her through to reception without having asked her for anything at all.',
                      'Minuto treinta y uno. El plan está sobre la mesa, sus preguntas están respondidas y estás a punto de acompañarla a recepción sin haberle pedido absolutamente nada.'),
            options: [
              { id: 'a', verdict: 'weak',
                label: T('"So — have a think about it and let me know what you\'d like to do."',
                         '«Pues nada: piénsatelo y me dices qué quieres hacer».'),
                why: T('The passive close arriving as an administrative habit rather than a decision. This is the sentence that cost Elena in Chapter 13: an hour of work ended by a professional who did not ask, which from her chair looks like a professional who was not sure.',
                       'El cierre pasivo llegando como costumbre administrativa y no como decisión. Es la frase que costó a Elena en el Capítulo 13: una hora de trabajo terminada por una profesional que no preguntó, lo que desde la silla de ella parece una profesional que no lo tenía claro.') },
              { id: 'b', verdict: 'best',
                label: T('"Before we go through to reception — based on everything you\'ve told me, I think this is the right plan for you. What feels right to you?"',
                         '«Antes de pasar a recepción: por todo lo que me has contado, creo que este es el plan adecuado para ti. ¿Qué te parece a ti?»'),
                why: T('A position stated and the decision handed over, while she is still in the chair and the plan is still in front of her. Line 7 says confidently, and confidence here is not volume — it is being willing to hear the answer in the room rather than by email, where it will not arrive.',
                       'Una posición enunciada y la decisión entregada, mientras ella sigue sentada y el plan sigue delante. La línea 7 dice «con confianza», y la confianza aquí no es volumen: es estar dispuesta a oír la respuesta en la sala y no por correo, donde no va a llegar.') },
              { id: 'c', verdict: 'harmful',
                label: T('"Shall I put you in for the first one? You can always move it if you change your mind."',
                         '«¿Te pongo ya la primera? Siempre puedes cambiarla si te lo repiensas».'),
                why: T('A decision made on her behalf with an undo button attached. She now has to take an action to decline, which is not a choice she made — and the appointment that exists because nobody asked her is the appointment that gets cancelled by text on a Sunday.',
                       'Una decisión tomada por ella con un botón de deshacer pegado. Ahora tiene que actuar para rechazarla, y eso no es una elección suya, y la cita que existe porque nadie se lo preguntó es la cita que se cancela por mensaje un domingo.') }
            ],
            principle: T('Line 7 is the one practitioners skip while believing they are being respectful. Asking for the decision is not pressure; it is the last thing you owe a woman who has spent half an hour telling you the truth.',
                         'La línea 7 es la que los profesionales se saltan creyendo que están siendo respetuosos. Pedir la decisión no es presionar: es lo último que le debes a una mujer que ha pasado media hora contándote la verdad.'),
            changes: {
              axis: 'clientResponse',
              detail: T('There is no consultation left in which to repair anything, so what moves is how it ends: she either walks to reception having answered a question — yes, no, or the real reason — or she walks out on "have a think", and neither of you ever learns which it was.',
                        'Ya no queda consulta en la que reparar nada, así que lo que cambia es cómo termina: o se va a recepción habiendo respondido a una pregunta —sí, no, o el motivo real—, o se va con un «piénsatelo», y ninguna de las dos llega a saber cuál era.')
            } } }
      ]
    },
    // -----------------------------------------------------------------
    {
      id: 'm10l6', n: 6, minutes: 13,
      title: T('The consultation that is not about the treatment', 'La consulta que no trata del tratamiento'),
      objective: T('Recognise Trust Stage 7 when it arrives, receive it without converting it, and decide what kind of practitioner you intend to be.',
                   'Reconocer la Etapa de Confianza 7 cuando llega, recibirla sin convertirla y decidir qué clase de profesional pretendes ser.'),
      provenance: {
        chapter: 17,
        principle: T('When you see the person, the person sees themselves — and the client who returns months later to say so has not come to buy anything.',
                     'Cuando ves a la persona, la persona se ve a sí misma, y la clienta que vuelve meses después para decírtelo no ha venido a comprar nada.'),
        phase: 'continuation',
        trustStage: 'confirmation',
        standard: 6,
        duty: 2,
        toolkit: null
      },
      depth: {
        whyItGoesWrong: T(
          'A woman who reappears half a year later to say thank you arrives with nothing booked, and the trained response to an unbooked visit is to make it worth her while: propose a review, look at what might come after, put a fixture in the calendar so the trip earned its petrol. The impulse is kindness — she crossed town, she ought to take something away. Beneath it lies awkwardness, because gratitude at that depth is far more testing to sit inside than any objection, and an appointment is a very convenient cupboard for an awkward minute. She did not cross town to receive. She crossed it to hand something over, and turning what she brought into a booking takes it straight back off her.',
          'Una mujer que reaparece medio año después para dar las gracias llega sin nada reservado, y la respuesta aprendida ante una visita sin reserva es hacerla rentable para ella: proponer una revisión, mirar qué podría venir luego, poner una cita en el calendario para que el viaje se pague la gasolina. El impulso es amabilidad: ha cruzado la ciudad, debería llevarse algo. Debajo hay incomodidad, porque la gratitud a esa profundidad es mucho más exigente de sostener que cualquier objeción, y una cita es un armario muy cómodo para un minuto incómodo. Ella no ha cruzado la ciudad para recibir. La ha cruzado para entregar algo, y convertir lo que trae en una reserva se lo quita de vuelta al instante.'),
        sheIsThinking: T(
          'I have not come to buy. I only wanted to tell somebody it mattered, and I am braced for her to sell me something so that I can stop feeling this exposed.',
          'No he venido a comprar. Solo quería decirle a alguien que aquello importó, y voy preparada para que me venda algo y así poder dejar de sentirme tan expuesta.'),
        ladder: {
          weak:    { line: T('"That is so kind — and while you are here, shall we get your next series into the calendar?"',
                     '«Qué maja eres. Y ya que estás aquí, ¿metemos en el calendario el siguiente ciclo?»'),
                     effect: T('Turns a gift into a purchase and proves the suspicion she walked in carrying. She will not say this to you twice, and she may say it to nobody.',
                               'Convierte un regalo en una compra y confirma la sospecha con la que entró. No te lo dirá dos veces, y puede que no se lo diga a nadie.') },
          average: { line: T('"Thank you, that is a lovely thing to be told. It is why I do this job."',
                     '«Gracias, es precioso que me digas eso. Es por lo que hago este trabajo».'),
                     effect: T('Sincere, kind and nothing anyone could fault — most of us would be pleased to have said it. It also swings the subject back to you inside a single sentence, so what she crossed town to hand over stays in her coat pocket.',
                               'Sincero, amable y nada que nadie pueda reprochar: a la mayoría nos alegraría haberlo dicho. También devuelve el tema hacia ti en una sola frase, así que lo que ella vino a entregar se le queda en el bolsillo del abrigo.') },
          strong:  { line: T('"Thank you for coming in to tell me." — then: "What made you want to?" — and let her run on.',
                     '«Gracias por venir a decírmelo». Y después: «¿Qué te ha hecho querer hacerlo?». Y dejar que siga hablando.'),
                     effect: T('Takes the gift, then asks for the remainder, which is the piece she crossed town to hand over and has not handed over yet. Nothing is booked and nothing wants booking.',
                               'Coge el regalo y después pide lo que queda, que es el trozo que vino a entregar y todavía no ha entregado. No se reserva nada y nada pide reserva.') }
        }
      },
      treatments: [
        {
          name:   T("Melasma programme — six months",
                     "Programa de melasma — seis meses"),
          price:  T("€1,400 across six months",
                     "1.400 € a lo largo de seis meses"),
          why:    T("A long programme produces this moment more often than any other, because she has spent half a year being looked at closely by somebody who did not flinch, and that is what she has come back to say.",
                     "Un programa largo produce este momento más que ningún otro, porque se ha pasado medio año siendo mirada de cerca por alguien que no apartó la vista, y eso es lo que vuelve a decir."),
          moment: T("Eight months after she finished, she comes in with no appointment and says she wanted to tell you something.",
                     "Ocho meses después de terminar, entra sin cita y dice que quería contarte una cosa."),
          weak:   {
            line: T("\"That is so kind of you — and while you are here, shall we get you booked in for a maintenance session?\"",
                     "«Qué detalle, muchas gracias. Y ya que estás aquí, ¿te dejo una sesión de mantenimiento?»"),
            cost: T("Turns a gift into a purchase and proves the suspicion she walked in carrying. She will not say this to you twice, and she may not say it to anybody.",
                     "Convierte un regalo en una compra y confirma la sospecha con la que ha entrado. No te lo dirá dos veces, y puede que no se lo diga a nadie.")
          },
          strong: {
            line: T("\"Thank you for coming in to tell me.\" — then: \"What made you want to?\"",
                     "«Gracias por venir a decírmelo». Y después: «¿Qué te ha hecho querer venir?»"),
            gain: T("Takes the gift, then asks for the remainder — the piece she crossed the city to hand over and has not handed over yet. Nothing is booked, and nothing wants booking.",
                     "Recoge el regalo y después pide el resto: la parte por la que ha cruzado la ciudad y que todavía no ha entregado. No se reserva nada, y nada pide que se reserve.")
          }
        },
        {
          name:   T("Acne programme — six sessions",
                     "Programa de acné — seis sesiones"),
          price:  T("€690 for six sessions",
                     "690 € las seis sesiones"),
          why:    T("When the person who comes back is the mother rather than the daughter, the gratitude is about something that happened to somebody else, and there is nothing at all to sell.",
                     "Cuando quien vuelve es la madre y no la hija, el agradecimiento va de algo que le ocurrió a otra persona, y no hay absolutamente nada que vender."),
          moment: T("A year later the mother comes back alone, without her daughter, to tell you what it did for her.",
                     "Un año después la madre vuelve sola, sin la hija, a contarte lo que aquello hizo por ella."),
          weak:   {
            line: T("\"That is lovely to hear. It is why I do this job, honestly.\"",
                     "«Qué alegría oír eso. Es por lo que hago este trabajo, de verdad.»"),
            cost: T("Sincere, kind and nothing anyone could fault. It also swings the subject back to you inside a single sentence, so what she came to hand over stays in her coat pocket.",
                     "Sincero, amable y nada que nadie pueda reprochar. También devuelve el tema a ti en una sola frase, así que lo que venía a entregar se queda en el bolsillo de su abrigo.")
          },
          strong: {
            line: T("\"Tell me about her. What is she like now?\"",
                     "«Cuéntame de ella. ¿Cómo está ahora?»"),
            gain: T("Puts the daughter back in the middle of the room, which is where she was the whole time. What the mother says next is the part she rehearsed in the car and has not said yet.",
                     "Vuelve a poner a la hija en el centro de la sala, que es donde ha estado todo el tiempo. Lo que la madre diga a continuación es la parte que ensayó en el coche y que todavía no ha dicho.")
          }
        },
        {
          name:   T("Botulinum toxin — three areas",
                     "Toxina botulínica — tres zonas"),
          price:  T("€320, three areas, every four months",
                     "320 €, tres zonas, cada cuatro meses"),
          why:    T("The smallest treatments produce this moment as often as the largest, and it is hardest to receive at €320 because nothing about the transaction seems to warrant it.",
                     "Los tratamientos más pequeños producen este momento tanto como los más grandes, y a 320 € es el más difícil de recibir porque no hay nada en la transacción que parezca justificarlo."),
          moment: T("She has come every four months for three years. Today, while you are drawing on her forehead, she says these appointments are the only time anybody looks at her properly.",
                     "Lleva tres años viniendo cada cuatro meses. Hoy, mientras le dibujas en la frente, dice que estas citas son el único rato en el que alguien la mira de verdad."),
          weak:   {
            line: T("\"Well, you are always welcome here, you know that. Right — let us get started, then.\"",
                     "«Bueno, aquí siempre eres bienvenida, ya lo sabes. Venga, que empezamos.»"),
            cost: T("Warm, and it moves on. The sentence she has been working up to for three years is answered with hospitality, and the appointment closes over the top of it.",
                     "Cálido, y sigue adelante. La frase que lleva tres años cogiendo carrerilla se responde con hospitalidad, y la cita se cierra por encima de ella.")
          },
          strong: {
            line: T("Put the pen down. \"Say that again?\"",
                     "Dejas el rotulador. «¿Cómo dices?»"),
            gain: T("Stopping is the whole answer. Three years of €320 appointments, and the only thing she has ever asked of the room is thirty seconds in which somebody did not carry on working.",
                     "Parar es la respuesta entera. Tres años de citas de 320 €, y lo único que le ha pedido nunca a esa sala son treinta segundos en los que alguien no siguiera trabajando.")
          }
        }
      ],
      blocks: [
        { kind: 'passage',
          title: T('Yael\'s fourth visit', 'La cuarta visita de Yael'),
          body: [
            T('Yael came into the clinic for the fourth time, six months after her first consultation. She was not there to buy anything and she was not there for a treatment. Chapter 17 records what she said: "When I walked in here that first day, I came because my skin was bothering me. But that wasn\'t really it. I came because I felt invisible. Every time I bought something I\'d pay for it and leave, and I felt more invisible after the transaction than before."',
              'Yael entró en la clínica por cuarta vez, seis meses después de su primera consulta. No iba a comprar nada ni iba a hacerse un tratamiento. El Capítulo 17 registra lo que dijo: «Cuando entré aquí aquel primer día, vine porque la piel me molestaba. Pero no era eso en realidad. Vine porque me sentía invisible. Cada vez que compraba algo, lo pagaba y me iba, y me sentía más invisible después de la transacción que antes».'),
            T('Then she described what had been done to her. She did it in five sentences, none of them technical, without knowing that any of it had a name — and what she was describing, from the other chair, was the architecture.',
              'Después describió lo que se había hecho con ella. Lo hizo en cinco frases, ninguna técnica, sin saber que nada de aquello tuviera nombre, y lo que estaba describiendo, desde la otra silla, era la arquitectura.'),
            T('Her closing sentence — "you changed more than my skin" — is not a compliment about a result. Structurally it is Trust Stage 7, Confirmation: has my experience confirmed this trust? It is the only stage that cannot be established inside a consultation, because it requires months of the client\'s ordinary life to answer. Three weeks after that visit Yael referred her sister, then a friend, then her mother.',
              'Su frase final —«cambiaste más que mi piel»— no es un cumplido sobre un resultado. Estructuralmente es la Etapa de Confianza 7, Confirmación: ¿ha confirmado mi experiencia esta confianza? Es la única etapa que no puede establecerse dentro de una consulta, porque para responderla hacen falta meses de la vida corriente de la clienta. Tres semanas después de esa visita, Yael recomendó la clínica a su hermana, luego a una amiga y luego a su madre.')
          ] },
        { kind: 'match',
          prompt: T('Yael\'s five sentences, exactly as Chapter 17 records them. Put each one where it belongs in the architecture. Four of them name a phase. One does not.',
                    'Las cinco frases de Yael, tal y como las recoge el Capítulo 17. Coloca cada una donde corresponde en la arquitectura. Cuatro nombran una fase. Una no.'),
          left: [
            { id: 'y1', text: T('"You asked me questions like you actually wanted to know."',
                                '«Me hiciste preguntas como si de verdad quisieras saber».') },
            { id: 'y2', text: T('"You listened like I mattered."', '«Me escuchaste como si yo importara».') },
            { id: 'y3', text: T('"You reflected back what I said like it was important."',
                                '«Me devolviste lo que dije como si fuera importante».') },
            { id: 'y4', text: T('"You recommended from understanding, not from pressure."',
                                '«Recomendaste desde la comprensión, no desde la presión».') },
            { id: 'y5', text: T('"You gave me a choice."', '«Me diste a elegir».') }
          ],
          right: [
            { id: 'p2', text: T('Phase 2 — Connection', 'Fase 2 — Conexión') },
            { id: 'p3', text: T('Phase 3 — Discovery', 'Fase 3 — Descubrimiento') },
            { id: 'p4', text: T('Phase 4 — Understanding', 'Fase 4 — Comprensión') },
            { id: 'p6', text: T('Phase 6 — Recommendation', 'Fase 6 — Recomendación') },
            { id: 'd2', text: T('Ethical Duty 2 — Respect Autonomy', 'Deber Ético 2 — Respetar la Autonomía') }
          ],
          pairs: { y1: 'p3', y2: 'p2', y3: 'p4', y4: 'p6', y5: 'd2' },
          why: T('The two that get swapped are the first two, and the tell is direction. "You listened like I mattered" is about the state she was put into — nothing was extracted, she was simply received, and that is Phase 2. "You asked me questions like you actually wanted to know" has intent behind it: something was being got out of her, and the phrase "actually wanted to know" is her saying she could tell the difference between a question and a form being filled in. That is Phase 3. Connection is what she was given; Discovery is what was taken out. The fifth is the one worth arguing about, and the argument is the lesson. "You gave me a choice" is not a phase. It is a duty, and a duty runs the whole length of an appointment instead of occupying a place in it — which is exactly why it can be broken without a single phase being skipped. A consultation can be complete in its structure, in order, on time, and still take the decision away from the woman who came in to make it. Note also what none of her five sentences is about. Not a result, not a treatment, not a price. Every one of them describes conduct, and conduct is the only part of this that is reproducible on an ordinary Tuesday afternoon.',
                 'Las dos que se intercambian son las dos primeras, y la pista está en la dirección. «Me escuchaste como si yo importara» habla del estado en el que la pusieron: no se le sacó nada, simplemente se la recibió, y eso es la Fase 2. «Me hiciste preguntas como si de verdad quisieras saber» lleva intención detrás: se le estaba sacando algo, y el «de verdad quisieras saber» es ella diciendo que notaba la diferencia entre una pregunta y un formulario que se rellena. Eso es la Fase 3. La Conexión es lo que se le dio; el Descubrimiento es lo que se le sacó. La quinta es la discutible, y la discusión es la lección. «Me diste a elegir» no es una fase. Es un deber, y un deber recorre la cita entera en vez de ocupar un lugar dentro de ella, y por eso mismo puede romperse sin que se salte ni una sola fase. Una consulta puede estar completa en su estructura, en orden y en hora, y aun así quitarle la decisión a la mujer que vino a tomarla. Fíjate además en de qué no habla ninguna de sus cinco frases. Ni de un resultado, ni de un tratamiento, ni de un precio. Todas describen conducta, y la conducta es lo único de todo esto que se puede reproducir un martes cualquiera por la tarde.') },
        { kind: 'insight',
          source: T('The Beauty Sales Secrets — Chapter 17', 'The Beauty Sales Secrets — Capítulo 17'),
          quote: T('When you see the person — the person sees themselves. And both sides of the mirror start to smile.',
                   'Cuando ves a la persona, la persona se ve a sí misma. Y los dos lados del espejo empiezan a sonreír.'),
          note: T('The Academy exists because that experience is reproducible. What Yael described from the other chair is what eight phases run in order, with four duties intact, feels like to the person they were run on. Nothing in this module asks you to feel it. It asks you to be able to produce it on an ordinary Tuesday, with a client you did not warm to, at four in the afternoon.',
                  'La Academia existe porque esa experiencia es reproducible. Lo que Yael describió desde la otra silla es lo que se siente, desde la persona sobre la que se ejecutan, ocho fases hechas en orden con los cuatro deberes intactos. Nada en este módulo te pide que lo sientas. Te pide que seas capaz de producirlo un martes cualquiera, con una clienta que no te ha caído bien, a las cuatro de la tarde.') },
        { kind: 'check',
          prompt: T('Before you can receive it you have to recognise it. Four things a long-standing client has said to you. Only one of them is Trust Stage 7 — confirmation — rather than ordinary warmth. Which?',
                    'Antes de poder recibirla hay que reconocerla. Cuatro cosas que te ha dicho una clienta de hace tiempo. Solo una de ellas es la Etapa de Confianza 7, la confirmación, y no simple cordialidad. ¿Cuál?'),
          options: [
            { id: 'a', text: T('"You\'re so good at this — honestly, the best I\'ve been to."',
                               '«Se te da genial esto, de verdad, la mejor a la que he ido».') },
            { id: 'b', text: T('"I sent my sister to you. I told her you\'d tell her if she didn\'t need it."',
                               '«Te he mandado a mi hermana. Le he dicho que tú le dirías si no le hace falta».') },
            { id: 'c', text: T('"I always feel so relaxed when I come here."',
                               '«Siempre me siento muy tranquila cuando vengo aquí».') },
            { id: 'd', text: T('"Whatever you think — I trust you completely."',
                               '«Lo que tú veas, confío en ti totalmente».') }
          ],
          answer: 'b',
          why: T('Confirmation is not a compliment about you; it is a prediction she is willing to stake someone else on, and the prediction is specifically that you will decline business you could have taken. That is the seventh stage as MBOK Chapter 3 defines it: experience has confirmed the trust. The other three are warmth (a and c) and, in the case of d, something closer to a warning — a client who has stopped forming her own view has handed you her autonomy, and Duty 2 asks you to hand it back rather than bank it.',
                 'La confirmación no es un cumplido sobre ti: es una predicción por la que está dispuesta a apostar a otra persona, y la predicción es precisamente que tú vas a rechazar un negocio que podrías haber aceptado. Esa es la séptima etapa tal y como la define el capítulo 3 del MBOK: la experiencia ha confirmado la confianza. Las otras tres son cordialidad (a y c) y, en el caso de la d, algo más cercano a un aviso: una clienta que ha dejado de formarse su propio criterio te ha entregado su autonomía, y el Deber 2 te pide devolvérsela, no quedártela.') },
        { kind: 'timedPause',
          prompt: T('She has just said it, and she is not asking you for anything. Every professional instinct offers you a sentence. Do not use it.',
                    'Acaba de decirlo y no te está pidiendo nada. Todo instinto profesional te ofrece una frase. No la uses.'),
          first: T('"I don\'t want to take up your time. I just wanted to say it out loud to you."',
                   '«No quiero robarte tiempo. Solo quería decírtelo en voz alta».'),
          seconds: 4,
          second: T('"...And I told my sister about you. She\'s the one who never goes to these places — she says they make her feel like a project."',
                    '«...Y le he hablado de ti a mi hermana. Es la que nunca va a estos sitios; dice que la hacen sentirse un proyecto».'),
          why: T('The referral is not produced by asking for one. It arrives in the four seconds after a disclosure you declined to convert, and it arrives with the reason attached — her sister\'s objection, stated in advance, by someone who has already vouched for you. A practitioner who fills that pause with anything at all never hears the second sentence and never learns it existed.',
                 'La recomendación no la produce pedirla. Llega en los cuatro segundos posteriores a una revelación que decidiste no convertir, y llega con el motivo incluido: la objeción de su hermana, enunciada por adelantado, por alguien que ya ha respondido por ti. Un profesional que llene esa pausa con cualquier cosa no oye nunca la segunda frase y nunca sabe que existió.') },
        { kind: 'choose',
          prompt: T('She has finished. There is something commercially reasonable available in this moment. What do you do with it?',
                    'Ha terminado. Hay algo comercialmente razonable disponible en este momento. ¿Qué haces con ello?'),
          options: [
            { id: 'a', verdict: 'best',
              label: T('"Thank you for coming in to say that." Then stop, and let her leave without anything else having happened.',
                       '«Gracias por venir a decírmelo». Y parar, y dejar que se vaya sin que haya pasado nada más.'),
              why: T('She came to give you something and she is allowed to leave having only done that. What she takes away is that this room does not charge for being told the truth — which is the precondition for the three referrals Chapter 17 records, and for her coming back to tell you something else in a year.',
                     'Vino a darte algo y tiene derecho a marcharse habiendo hecho solo eso. Lo que se lleva es que en esta sala no se cobra por decir la verdad, que es la condición previa de las tres recomendaciones que registra el Capítulo 17 y de que vuelva dentro de un año a contarte otra cosa.') },
            { id: 'b', verdict: 'weak',
              label: T('"That means a great deal. And while you\'re here — shall we look at what comes next for the pigmentation?"',
                       '«Significa muchísimo para mí. Y ya que estás aquí, ¿miramos qué toca ahora con la pigmentación?»'),
              why: T('She will say yes, because she is grateful and because you have just made a small debt out of her gratitude. She will also revise what the visit was: she came to thank you and left with an appointment, and the version she tells her sister is that one. Nothing looks wrong here, and the fourth visit is the last one of its kind you will get.',
                     'Dirá que sí, porque está agradecida y porque acabas de convertir su gratitud en una pequeña deuda. También reescribirá lo que fue la visita: vino a darte las gracias y salió con una cita, y esa es la versión que le cuenta a su hermana. Aquí no parece que nada esté mal, y la cuarta visita es la última de su clase que vas a tener.') },
            { id: 'c', verdict: 'harmful',
              label: T('"Would you mind writing that down as a review? It would help us enormously."',
                       '«¿Te importaría escribir eso como reseña? Nos ayudaría muchísimo».'),
              why: T('You converted her disclosure into marketing material in the four seconds after she made it. She will write it, because she likes you. She will also understand, correctly, that what she said was received as useful rather than as hers — and she will never say anything of that kind to you again. Trust Standard 6, Protect Trust After Decision, is broken in the one moment it was being tested.',
                     'Has convertido su revelación en material de marketing en los cuatro segundos siguientes a que la hiciera. La escribirá, porque le caes bien. También entenderá, con razón, que lo que dijo se recibió como algo útil y no como algo suyo, y no volverá a decirte nunca nada parecido. El Estándar de Confianza 6, Proteger la Confianza Después de la Decisión, se rompe en el único momento en que se estaba poniendo a prueba.') }
          ],
          principle: T('Confirmation is the one Trust Stage you cannot ask for. It is given, months later, by a client with nothing to gain — and the only way to keep receiving it is to take nothing in exchange.',
                       'La Confirmación es la única Etapa de Confianza que no puedes pedir. La da, meses después, una clienta que no gana nada con ello, y la única forma de seguir recibiéndola es no aceptar nada a cambio.'),
          retry: {
            note: T('You declined to spend it in the room. A month later it arrives back through the door, sitting in your chair, in the form of a promise somebody else made on your behalf.',
                    'Decidiste no gastarla en la sala. Un mes después vuelve por la puerta, sentada en tu silla, en forma de una promesa que otra persona hizo en tu nombre.'),
            prompt: T('Yael\'s sister, first consultation, first sentence: "My sister says you\'ll tell me if I don\'t need it."',
                      'La hermana de Yael, primera consulta, primera frase: «Mi hermana dice que tú me dirás si no me hace falta».'),
            options: [
              { id: 'a', verdict: 'harmful',
                label: T('"She\'s right, I will. And since she sent you — let me show you what we did for her, she\'s had a lovely result."',
                         '«Tiene razón, te lo diré. Y ya que te manda ella, te enseño lo que le hicimos: ha quedado estupenda».'),
                why: T('You agreed to the promise and broke it in the same breath: a plan for this woman\'s face now exists, built from her sister\'s, before she has said one word about her own. Whatever you conclude later will be measured by her against the treatment you had already named.',
                       'Has aceptado la promesa y la has roto en la misma frase: ya existe un plan para la cara de esta mujer, construido a partir del de su hermana, antes de que ella haya dicho una palabra sobre la suya. Todo lo que concluyas después lo medirá ella contra el tratamiento que ya le nombraste.') },
              { id: 'b', verdict: 'best',
                label: T('"I will. And the honest version of that is that today might end with me telling you there\'s nothing here worth doing — that\'s a real possible ending, not a line. So: tell me what brought you."',
                         '«Te lo diré. Y la versión honesta de eso es que hoy puede acabar conmigo diciéndote que aquí no hay nada que merezca la pena hacer: es un final posible de verdad, no una frase. Así que cuéntame qué te ha traído».'),
                why: T('Her sister staked a relationship on a prediction about your behaviour. Making the nothing-ending explicit before any assessment exists is the only way to keep the prediction true, and it costs you the ability to drift into a recommendation later — which is the point. Then the first question, and the consultation starts where it should.',
                       'Su hermana ha apostado una relación por una predicción sobre tu conducta. Hacer explícito el final «no hay nada» antes de que exista ninguna valoración es la única forma de que esa predicción siga siendo cierta, y te quita la posibilidad de deslizarte luego hacia una recomendación, que es justo el objetivo. Y después, la primera pregunta, y la consulta empieza donde debe.') },
              { id: 'c', verdict: 'weak',
                label: T('"Well, I wouldn\'t want to promise that — everyone\'s different, and it depends what we find."',
                         '«Bueno, tampoco te lo quiero prometer: cada persona es distinta y depende de lo que encontremos».'),
                why: T('You have hedged a claim your own client made for you, and she noticed. She walked in holding the one thing that makes a first consultation different from every other one she has had, and you took it off her in the first ten seconds to protect yourself from a commitment you were going to keep anyway.',
                       'Has matizado una afirmación que hizo por ti tu propia clienta, y ella lo ha notado. Entró con lo único que diferencia esta primera consulta de todas las que ha tenido, y se lo has quitado en los primeros diez segundos para protegerte de un compromiso que ibas a cumplir igualmente.') }
            ],
            principle: T('A referral arrives carrying a promise somebody else made on your behalf. You either make it true in the first thirty seconds — including the ending where nothing is sold — or you spend it, and it does not come back.',
                         'Una recomendación llega con una promesa que otra persona hizo en tu nombre. O la haces cierta en los primeros treinta segundos, incluido el final en el que no se vende nada, o la gastas, y no vuelve.'),
            changes: {
              axis: 'continuation',
              detail: T('The trust you declined to spend has produced a new consultation. A first-time client is in the chair because of something that was not sold to somebody else, and she opens with the promise she was given — so the first thirty seconds decide whether that promise turns out to be true.',
                        'La confianza que decidiste no gastar ha producido una consulta nueva. Una clienta que viene por primera vez está en la silla por algo que no se le vendió a otra persona, y abre con la promesa que le dieron: los primeros treinta segundos deciden si esa promesa resulta ser cierta.')
            } } },
        { kind: 'reflect',
          prompt: T('Chapter 17 asks the practitioner to answer one question honestly, once: what kind of practitioner do you intend to be? Answer it now, at the end of the Academy.',
                    'El Capítulo 17 pide al profesional que responda con honestidad, una sola vez, a una pregunta: ¿qué clase de profesional pretendes ser? Respóndela ahora, al terminar la Academia.'),
          placeholder: T('Not what you want to achieve. Write the sentence a client would use to describe you to someone who has never met you — then name what you did in your last consultation that would have earned it, or admit that nothing did.',
                         'No lo que quieres conseguir. Escribe la frase que una clienta usaría para describirte ante alguien que no te conoce, y luego nombra qué hiciste en tu última consulta para merecerla, o admite que no hiciste nada.') }
      ]
    }
  ],
  apply: {
    assignment: T('Before your next real consultation, read the seven checklist lines and write one sentence naming who you intend to be for this client. In the room, open with the four questions and keep your own share of the talking under half. If it ends in a no, ask once — "Can I ask what that no was about?" — and write her answer down in her exact words before you do anything else.',
                  'Antes de tu próxima consulta real, lee las siete líneas de la lista y escribe una frase que nombre quién pretendes ser para esta clienta. En la sala, abre con las cuatro preguntas y mantén tu parte de la conversación por debajo de la mitad. Si termina en un no, pregunta una vez —«¿Puedo preguntarte de qué iba ese no?»— y anota su respuesta con sus palabras exactas antes de hacer ninguna otra cosa.'),
    prompt: T('Which line of the checklist could you not honestly tick, and what did she tell you that you would not have guessed?',
              '¿Qué línea de la lista no pudiste marcar con honestidad, y qué te dijo ella que tú no habrías adivinado?')
  }
};

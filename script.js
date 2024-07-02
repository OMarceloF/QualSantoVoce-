const questions = [
  {
    question: "Qual é a sua qualidade mais marcante?",
    answers: [
      { text: "Caridade e generosidade", points: { vicente: 2, francisco: 1, teresa: 1 } },
      { text: "Sabedoria e conhecimento", points: { agostinho: 3, tomas: 2, teresa: 1 } },
      { text: "Coragem e bravura", points: { joaoPaulo: 6, francisco: 1, joaoBatista: 8 } }
    ]
  },
  {
    question: "Como você prefere passar seu tempo livre?",
    answers: [
      { text: "Ajudando os outros e fazendo trabalhos voluntários", points: { vicente: 2, teresa: 1, joao: 3 } },
      { text: "Estudando e aprendendo coisas novas", points: { tomas: 2, teresa: 1, franciscoXavier: 8 } },
      { text: "Praticando esportes ou atividades físicas", points: { francisco: 1, joao: 3, catarina: 8 } }
    ]
  },
  {
    question: "Qual dessas frases mais ressoa com você?",
    answers: [
      { text: "Amar ao próximo como a si mesmo.", points: { francisco: 1, teresa: 1, vicente: 2 } },
      { text: "O conhecimento é o poder.", points: { agostinho: 3, tomas: 2, teresa: 1 } },
      { text: "A vida é uma aventura ousada ou nada.", points: { francisco: 1, inacio: 8, teresa: 1 } }
    ]
  },
  {
    question: "Como você reage diante de um desafio?",
    answers: [
      { text: "Busca a melhor forma de ajudar a todos envolvidos", points: { vicente: 2, teresa: 1, joao: 3 } },
      { text: "Analisa cuidadosamente todas as opções antes de agir", points: { tomas: 2, teresa: 1, inacio: 8 } },
      { text: "Enfrenta o desafio de frente com determinação", points: { joaoPaulo: 6, teresa: 1, franciscoXavier: 8 } }
    ]
  },
  {
    question: "O que é mais importante para você?",
    answers: [
      { text: "Fazer o bem e ajudar o próximo", points: { vicente: 2, teresa: 1, francisco: 1 } },
      { text: "Buscar a verdade e o conhecimento", points: { agostinho: 3, tomas: 2, teresa: 1 } },
      { text: "Defender os mais fracos e lutar pela justiça", points: { vicente: 2, teresa: 1, joao: 3 } }
    ]
  },
  {
    question: "Qual destas figuras históricas você mais admira?",
    answers: [
      { text: "Madre Teresa de Calcutá", points: { teresa: 1, isabel: 12, paulo: 12 } },
      { text: "Santo Agostinho", points: { agostinho: 3, isabel: 12, paulo: 12 } },
      { text: "São Jorge", points: { joao: 3, francisco: 1, tomas: 2 } }
    ]
  },
  {
    question: "Como você lida com conflitos?",
    answers: [
      { text: "Procura mediar e resolver pacificamente", points: { teresa: 1, francisco: 1, catarina: 8 } },
      { text: "Usa argumentos racionais e lógica", points: { tomas: 2, agostinho: 3, franciscoXavier: 8 } },
      { text: "Enfrenta e busca resolver rapidamente", points: { joaoPaulo: 6, teresa: 1, vicente: 2 } }
    ]
  },
  {
    question: "O que você mais valoriza em um amigo?",
    answers: [
      { text: "Lealdade e compaixão", points: { francisco: 1, teresa: 1, joao: 3 } },
      { text: "Inteligência e sabedoria", points: { tomas: 2, teresa: 1, agostinho: 3 } },
      { text: "Coragem e determinação", points: { francisco: 1, joaoPaulo: 6, inacio: 8 } }
    ]
  },
  {
    question: "Qual é a sua maior motivação na vida?",
    answers: [
      { text: "Ajudar os outros e fazer o bem", points: { vicente: 2, teresa: 1, francisco: 1 } },
      { text: "Adquirir conhecimento e entender o mundo", points: { agostinho: 3, tomas: 2, teresa: 1 } },
      { text: "Superar desafios e proteger os vulneráveis", points: { vicente: 2, teresa: 1, joaoBatista: 8 } }
    ]
  },
  {
    question: "Qual é a sua visão sobre o perdão?",
    answers: [
      { text: "Acredito na importância de perdoar sempre e praticar a reconciliação.", points: { antonio: 3, rita: 6, pedro: 2 } },
      { text: "Entendo que o perdão é um processo complexo que requer entendimento e reflexão.", points: { teresinha: 4, bento: 2, cecilia: 4 } },
      { text: "Vejo o perdão como uma demonstração de força e coragem para seguir em frente.", points: { joaoBatista: 8, pedro: 2, maria: 6 } }
    ]
  },
  {
    question: "Como você define o sucesso?",
    answers: [
      { text: "Fazer a diferença positiva na vida das pessoas", points: { teresinha: 4, joaoBatista: 8, maria: 6 } },
      { text: "Alcançar um alto nível de conhecimento e compreensão", points: { bento: 2, antonio: 3, cecilia: 4 } },
      { text: "Vencer adversidades e alcançar objetivos pessoais", points: { rita: 6, pedro: 2, teresinha: 4 } }
    ]
  },
  {
    question: "Como você encara os desafios pessoais?",
    answers: [
      { text: "Com humildade e confiança na orientação divina.", points: { bento: 2, antonio: 3, pedro: 2 } },
      { text: "Com curiosidade e desejo de entender as lições por trás de cada desafio.", points: { teresinha: 4, bento: 2, pedro: 2 } },
      { text: "Com coragem e determinação para superar qualquer obstáculo.", points: { pedro: 2, rita: 6, antonio: 3 } }
    ]
  },
  {
    question: "Qual é o seu maior medo?",
    answers: [
      { text: "Deixar de ajudar aqueles que mais precisam.", points: { pedro: 2, antonio: 3, maria: 6 } },
      { text: "Perder a oportunidade de aprender e crescer intelectualmente.", points: { bento: 2, cecilia: 4, teresinha: 4 } },
      { text: "Ser incapaz de proteger quem eu amo em momentos difíceis.", points: { maria: 6, pedro: 2, rita: 6 } }
    ]
  },
  {
    question: "Como você se comporta diante de situações de injustiça?",
    answers: [
      { text: "Busco ajudar os afetados e lutar por justiça social.", points: { pedro: 2, rita: 6, bento: 2 } },
      { text: "Analiso a situação cuidadosamente e procuro soluções equilibradas.", points: { bento: 2, cecilia: 4, teresinha: 4 } },
      { text: "Enfrento o problema diretamente, sem hesitação.", points: { pedro: 2, bento: 2, antonio: 3 } }
    ]
  },
  {
    question: "Qual é a sua abordagem em relação à espiritualidade?",
    answers: [
      { text: "Busco uma conexão profunda com o divino através da oração e meditação.", points: { teresinha: 4, bento: 2, cecilia: 4 } },
      { text: "Valorizo o estudo e a reflexão sobre questões religiosas e filosóficas.", points: { bento: 2, antonio: 3, cecilia: 4 } },
      { text: "Expresso minha fé através de ações concretas e devoção prática.", points: { antonio: 3, pedro: 2, rita: 6 } }
    ]
  }
];


const numQuestionsToAsk = 15;
let currentQuestionIndex = 0;
let scores = {
  pedro: 0, paulo: 0, maria: 0, francisco: 0, teresa: 0, joao: 0, catarina: 0,
  agostinho: 0, teresinha: 0, joaoPaulo: 0, rita: 0, vicente: 0, joaoBatista: 0,
  tomas: 0, antonio: 0, cecilia: 0, bento: 0, franciscoXavier: 0, inacio: 0,
  isabel: 0
};

const questionContainer = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

function startQuiz() {
  currentQuestionIndex = 0;
  scores = {
    pedro: 0, paulo: 0, maria: 0, francisco: 0, teresa: 0, joao: 0, catarina: 0,
    agostinho: 0, teresinha: 0, joaoPaulo: 0, rita: 0, vicente: 0, joaoBatista: 0,
    tomas: 0, antonio: 0, cecilia: 0, bento: 0, franciscoXavier: 0, inacio: 0,
    isabel: 0
  };
  resultContainer.classList.add('hide');
  questionContainer.classList.remove('hide');
  answerButtonsElement.classList.remove('hide');
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  answerButtonsElement.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer.points));
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(points) {
  for (const key in points) {
    scores[key] += points[key];
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < numQuestionsToAsk) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    document.getElementById('result-container').style.display = 'block';
    showResult();
  }
}

function showResult() {
  questionContainer.classList.add('hide');
  answerButtonsElement.classList.add('hide');
  resultContainer.classList.remove('hide');

  const highestScore = Math.max(...Object.values(scores));
  const highestScoreKey = Object.keys(scores).find(key => scores[key] === highestScore);
  let nomeFinal = "";
  let img = document.getElementById('img-santos');
  let text = document.getElementById('descricao-santos');

  if (highestScoreKey == 'pedro') {
    nomeFinal = 'São Pedro';
    img.src = './styles/Imagens/saoPedro.jpg';
    img.alt = 'São Pedro';
    text.innerText = 'São Pedro, um dos doze apóstolos de Jesus Cristo, é uma figura central no cristianismo. Originalmente um pescador chamado Simão, ele recebeu o nome Pedro (que significa "rocha" em grego) de Jesus, simbolizando sua fundação na Igreja. São Pedro é frequentemente considerado o primeiro Papa, pois, segundo a tradição católica, Jesus lhe concedeu a liderança da Igreja. Ele é conhecido por sua fé fervorosa, mas também por suas falhas humanas, como a negação de Jesus três vezes antes da crucificação. Após a ressurreição de Jesus, Pedro desempenhou um papel crucial na disseminação do cristianismo, pregando e realizando milagres. Ele foi martirizado em Roma, onde, segundo a tradição, foi crucificado de cabeça para baixo por não se considerar digno de morrer da mesma maneira que Jesus. São Pedro é venerado como santo tanto na Igreja Católica quanto na Ortodoxa.';
  } else if (highestScoreKey == 'paulo') {
    nomeFinal = 'São Paulo';
    img.src = './styles/Imagens/saoPaulo.jpg';
    img.alt = 'São Paulo';
    text.innerText = 'São Paulo, originalmente conhecido como Saulo de Tarso, foi um dos mais influentes apóstolos e líderes do cristianismo primitivo. Antes de sua conversão, ele era um fariseu judeu conhecido por sua perseguição aos primeiros seguidores de Jesus. Sua vida mudou radicalmente após uma experiência religiosa onde ele afirmou ter visto Jesus ressuscitado. Após essa conversão, Paulo se tornou um dos principais defensores e propagadores do cristianismo entre os gentios (não judeus), desempenhando um papel crucial na expansão da fé além das fronteiras culturais e étnicas do judaísmo. Paulo é conhecido por suas numerosas viagens missionárias pela Ásia Menor, Grécia e outras regiões do Império Romano, onde fundou várias comunidades cristãs e escreveu diversas epístolas que compõem parte significativa do Novo Testamento. Suas cartas, como as aos Romanos, Coríntios, Gálatas, e outros, tratam de temas teológicos profundos e oferecem orientações pastorais para as igrejas que ele ajudou a estabelecer.Paulo é reverenciado como santo tanto na Igreja Católica quanto na Ortodoxa, sendo uma figura central na teologia cristã e na história da igreja primitiva.'
  } else if (highestScoreKey == 'maria') {
    nomeFinal = 'Nossa Senhora';
    img.src = './styles/Imagens/nossasenhora.jpg';
    img.alt = 'Nossa Senhora';
    text.innerText = 'Nossa Senhora Maria, também conhecida simplesmente como Maria, é uma figura central no Cristianismo, reverenciada como a mãe de Jesus Cristo. Ela é amplamente venerada tanto na Igreja Católica quanto na Ortodoxa, além de outras denominações cristãs que a consideram um exemplo de fé e devoção.Segundo os Evangelhos, Maria nasceu em Nazaré e foi escolhida por Deus para ser a mãe de Jesus por meio da concepção virginal, uma crença central da fé cristã conhecida como a Virgindade Perpétua de Maria. Ela é descrita como uma mulher de fé profunda, humildade e submissão à vontade divina, como demonstrado no relato da Anunciação e em sua jornada ao lado de Jesus durante sua vida terrena e ministério.Após a morte e ressurreição de Jesus, Maria é considerada ter sido uma presença significativa na comunidade cristã primitiva, sendo mencionada nos Atos dos Apóstolos como presente no cenáculo durante o Pentecostes. Sua devoção cresceu ao longo dos séculos, e ela é invocada como protetora, intercessora e modelo de santidade para os fiéis.A devoção mariana se manifesta em diversas formas de piedade popular, como a recitação do Rosário, celebrações de festas marianas e peregrinações a santuários dedicados a ela ao redor do mundo. Para muitos cristãos, Nossa Senhora Maria representa o ideal da maternidade espiritual e um símbolo de esperança, graça divina e amor maternal incondicional.'
  } else if (highestScoreKey == 'francisco') {
    nomeFinal = 'São Francisco de Assis';
    img.src = './styles/Imagens/saoFrancisco.jpg';
    img.alt = 'São Francisco';
    text.innerText = 'São Francisco de Assis foi um dos santos mais amados e influentes da história cristã. Ele nasceu em 1181 ou 1182 na cidade de Assis, na Itália, e é conhecido por sua profunda devoção, amor pela natureza e serviço aos pobres.Francisco renunciou à riqueza de sua família para abraçar uma vida de simplicidade e pobreza radical, seguindo os ensinamentos de Jesus Cristo. Ele fundou a Ordem Franciscana, que se tornou uma das maiores ordens religiosas da Igreja Católica, e dedicou sua vida à pregação do Evangelho, à paz e à reconciliação.Entre os episódios mais conhecidos de sua vida está o famoso "Sermão aos Pássaros", onde ele pregou para uma audiência de aves, expressando seu amor pela criação de Deus. Além disso, Francisco é lembrado por receber os estigmas de Cristo, tornando-se um dos primeiros casos documentados de estigmatização.São Francisco é frequentemente retratado em arte como um homem vestido com hábito marrom e cercado por animais, simbolizando sua proximidade com a natureza e seu cuidado pelos seres criados. Ele é o santo padroeiro dos animais, ecologistas, comerciantes e de várias cidades ao redor do mundo. Sua vida e ensinamentos continuam a inspirar milhões de pessoas, independentemente de sua afiliação religiosa, em busca de uma vida de amor, paz e serviço desinteressado aos outros.'
  } else if (highestScoreKey == 'teresa') {
    nomeFinal = 'Santa Teresa de Calcutá';
    img.src = './styles/Imagens/teresaDeCalcuta.jpg';
    img.alt = 'Teresa de Calcutá';
    text.innerText = 'Teresa de Calcutá, também conhecida como Madre Teresa de Calcutá, foi uma missionária católica albanesa que dedicou sua vida ao serviço dos pobres e necessitados na Índia e ao redor do mundo. Ela nasceu como Anjezë Gonxhe Bojaxhiu em 1910, na atual Macedônia do Norte, e aos 18 anos ingressou na Ordem das Irmãs de Loreto, onde adotou o nome de Teresa.Teresa de Calcutá é reconhecida por fundar a congregação das Missionárias da Caridade em 1950, cuja missão era cuidar dos "mais pobres dos pobres" e dos doentes terminais. Ela e suas irmãs trabalharam incansavelmente em áreas de extrema pobreza em Calcutá, oferecendo cuidados médicos, alimentação, abrigo e dignidade aos marginalizados da sociedade.Ao longo de sua vida, Madre Teresa expandiu suas operações para outras partes do mundo, estabelecendo centros de caridade e hospitais em muitos países. Ela se tornou um símbolo global de compaixão e serviço desinteressado, recebendo numerosos prêmios e reconhecimentos por seu trabalho, incluindo o Prêmio Nobel da Paz em 1979.Além de seu trabalho prático, Teresa de Calcutá era conhecida por sua profunda espiritualidade e sua dedicação à oração. Suas palavras e exemplos inspiraram milhões a viver uma vida de amor e serviço aos menos favorecidos. Ela faleceu em 1997, mas seu legado de compaixão e serviço continua a impactar pessoas ao redor do mundo, independentemente de sua fé ou origem.'
  } else if (highestScoreKey == 'joao') {
    nomeFinal = 'São João Bosco';
    img.src = './styles/Imagens/joaoBosco.jpg';
    img.alt = 'João Bosco';
    text.innerText = 'São João Bosco, também conhecido como Dom Bosco, foi um sacerdote católico italiano do século XIX, conhecido por seu trabalho com jovens marginalizados e sua fundação da Congregação Salesiana. Ele nasceu em 1815, em Castelnuovo Dasti, na Itália, e desde jovem demonstrou um profundo interesse em ajudar crianças e adolescentes pobres e desfavorecidos.João Bosco dedicou sua vida ao cuidado e à educação dos jovens, especialmente aqueles que enfrentavam dificuldades econômicas e sociais nas cidades industriais da Itália. Ele fundou a Sociedade de São Francisco de Sales, conhecida como Salesianos, junto com Santa Maria Domingas Mazzarello, para continuar seu trabalho de educação e evangelização dos jovens.Os Salesianos se expandiram rapidamente pelo mundo, estabelecendo escolas, oratórios e centros juvenis que combinavam educação acadêmica com formação moral e religiosa. João Bosco também é lembrado por sua abordagem educacional inovadora, que se baseava na razão, na religião e no carinho, conhecida como o Sistema Preventivo.Além de seu trabalho educacional, João Bosco era conhecido por sua profunda espiritualidade e seus sonhos premonitórios, que muitas vezes orientavam suas decisões e ações. Ele foi canonizado como santo pela Igreja Católica em 1934 e é venerado como padroeiro dos jovens, dos aprendizes e dos editores de livros. Seu legado continua a influenciar a educação e o cuidado dos jovens ao redor do mundo através das obras dos Salesianos e das Salesianas.'
  } else if (highestScoreKey == 'catarina') {
    nomeFinal = 'Santa Catarina de Sena';
    img.src = './styles/Imagens/catarinaSena.png';
    img.alt = 'Catarina Sena';
    text.innerText = 'Santa Catarina de Sena foi uma mística, teóloga e uma das figuras mais importantes do cristianismo medieval. Ela nasceu em 1347 em Sena, na Itália, e desde jovem mostrou uma devoção intensa à fé cristã. Catarina é conhecida por sua vida de oração profunda, sua prática da autonegação e seu compromisso com o serviço aos pobres e doentes.Catarina ficou famosa por suas visões místicas e experiências místicas intensas desde a infância. Ela acreditava ter uma união especial com Deus, recebendo revelações espirituais que influenciaram não apenas sua vida pessoal, mas também o curso da história da Igreja. Ela desempenhou um papel crucial na pacificação política da Itália e na reconciliação entre facções rivais.Além de suas experiências místicas, Catarina era uma teóloga profundamente influente, escrevendo várias obras que exploravam temas como a natureza da alma, a importância da virtude e o amor divino. Suas cartas e diálogos foram preservados e continuam a ser estudados como textos importantes da espiritualidade cristã.Catarina de Sena foi canonizada como santa pela Igreja Católica em 1461 e é reverenciada como padroeira da Itália, de enfermeiros, de cuidadores e de uma variedade de outras causas. Sua vida e ensinamentos inspiraram gerações de cristãos a buscar uma vida de serviço, contemplação e amor a Deus e ao próximo.'
  } else if (highestScoreKey == 'agostinho') {
    nomeFinal = 'Santo Agostinho';
    img.src = './styles/Imagens/agostinho.png';
    img.alt = 'Santo Agostinho';
    text.innerText = 'Santo Agostinho, também conhecido como Agostinho de Hipona, foi um dos mais influentes teólogos e filósofos cristãos da Antiguidade tardia. Ele nasceu em 354 d.C. em Tagaste, na província romana da Numídia (atual Argélia), e é amplamente conhecido por suas contribuições para o pensamento cristão e sua vasta obra literária.Agostinho viveu uma juventude marcada por uma busca intensa por sentido e verdade. Ele experimentou uma conversão dramática ao cristianismo aos 31 anos, após anos de busca espiritual e influências filosóficas diversas, como o maniqueísmo e o neoplatonismo. Sua obra mais conhecida, "Confissões", é uma autobiografia espiritual que narra sua jornada de conversão e reflexões sobre a natureza de Deus, do mal e da redenção.Como bispo de Hipona, Agostinho se destacou como um prolífico escritor e pensador, abordando uma vasta gama de temas teológicos, filosóficos e éticos. Ele é especialmente lembrado por suas contribuições para a doutrina cristã, incluindo sua teoria do pecado original e sua defesa da graça divina como meio de salvação.Entre suas obras mais influentes estão "A Cidade de Deus", onde Agostinho explorou a relação entre a Cidade de Deus e a Cidade dos Homens, e seus numerosos tratados teológicos e comentários bíblicos. Ele também é reconhecido por suas reflexões sobre o tempo, a memória e a vontade, temas que influenciaram profundamente a filosofia ocidental.Santo Agostinho faleceu em 430 d.C. durante o cerco de Hipona pelos vândalos, mas seu impacto perdura até hoje, sendo reverenciado como um dos grandes pais da Igreja e um dos mais profundos pensadores da história cristã.'
  } else if (highestScoreKey == 'teresinha') {
    nomeFinal = 'Santa Teresinha do Menino Jesus';
    img.src = './styles/Imagens/santaTeresinha.jpg';
    img.alt = 'Santa Teresinha';
    text.innerText = 'Santa Teresinha do Menino Jesus e da Sagrada Face, também conhecida como Santa Teresinha de Lisieux, foi uma freira carmelita francesa do século XIX, reconhecida por sua espiritualidade profunda e por sua "Pequena Via" de santidade. Ela nasceu em 1873 em Alençon, na França, e entrou no Carmelo aos 15 anos de idade, buscando uma vida de contemplação e serviço a Deus.Teresinha é conhecida por seu ensinamento da "infância espiritual", onde propôs uma maneira simples e acessível de se aproximar de Deus, baseada na confiança filial e no amor a Ele. Ela acreditava na importância de pequenos atos de amor e devoção, conhecidos como "pequenas flores", como meios eficazes de agradar a Deus e crescer na santidade.Durante sua vida no convento, Teresinha escreveu suas memórias espirituais, conhecidas como "História de uma Alma", que se tornaram uma das obras espirituais mais lidas e amadas do catolicismo. Neste livro, ela descreve sua infância espiritual, sua busca por santidade e sua entrega total a Deus através da "pequena via" da confiança e do amor.Teresinha faleceu em 1897 aos 24 anos de idade, após uma breve mas intensa vida religiosa. Ela foi canonizada como santa em 1925 pelo Papa Pio XI e proclamada Doutora da Igreja em 1997 pelo Papa João Paulo II, em reconhecimento à sua profunda contribuição para a espiritualidade cristã. Santa Teresinha é venerada como padroeira das missões e reconhecida por sua simplicidade, humildade e confiança inabalável em Deus.'
  } else if (highestScoreKey == 'joaoPaulo') {
    nomeFinal = 'São João Paulo II';
    img.src = './styles/Imagens/joaoPaulo.png';
    img.alt = 'João Paulo II';
    text.innerText = 'São João Paulo II, nascido Karol Józef Wojtyła em 1920 na Polônia, foi um dos líderes mais influentes da Igreja Católica no século XX. Ele foi eleito Papa em 1978, tornando-se o primeiro pontífice polonês da história e servindo como Papa até sua morte em 2005.João Paulo II é amplamente lembrado por seu papado marcado por viagens incansáveis ao redor do mundo, promovendo a paz, a reconciliação entre povos e religiões, e a defesa dos direitos humanos. Ele desempenhou um papel crucial no desmantelamento do comunismo na Europa Oriental e na promoção da liberdade religiosa e dos valores cristãos em um mundo cada vez mais globalizado.Além de seu trabalho diplomático e pastoral, João Paulo II foi um prolífico escritor e teólogo, deixando um legado de ensinamentos profundos sobre temas como a dignidade humana, a moralidade cristã, a família e a cultura da vida. Ele canonizou um número recorde de santos durante seu pontificado, incluindo Santa Teresa de Calcutá e São João da Cruz.João Paulo II é venerado como um dos papas mais queridos da história recente, conhecido por sua proximidade com as pessoas, seu carisma e sua dedicação à juventude. Sua vida e ensinamentos continuam a inspirar milhões de católicos e não católicos ao redor do mundo, sendo reconhecido como um dos líderes mais influentes do século XX e um exemplo de santidade e compromisso com o serviço a Deus e à humanidade. Ele foi canonizado como santo pela Igreja Católica em 2014.'
  } else if (highestScoreKey == 'rita') {
    nomeFinal = 'Santa Rita de Cássia';
    img.src = './styles/Imagens/ritaDeCassia.png';
    img.alt = 'Santa Rita de Cássia';
    text.innerText = 'Santa Rita de Cássia, também conhecida como Santa Rita de Roccaporena, foi uma santa italiana do século XIV, conhecida por sua vida de santidade e devoção cristã. Ela nasceu em 1381 em Roccaporena, na Itália, e é venerada especialmente por sua paciência, bondade e seu exemplo de perdão.Rita teve uma vida marcada por dificuldades desde jovem. Ela desejou se tornar religiosa, mas foi casada contra sua vontade e enfrentou um casamento difícil. Apesar das adversidades, ela se dedicou à oração, à penitência e ao serviço aos necessitados. Após a morte de seu marido e filhos, Rita finalmente pôde ingressar no convento agostiniano em Cássia, onde viveu uma vida de contemplação e serviço a Deus.Santa Rita é conhecida por vários milagres atribuídos a suas intercessões, incluindo o milagre das rosas, onde ela conseguiu rosas em pleno inverno para provar sua inocência em uma acusação injusta. Ela é venerada como padroeira das causas impossíveis, das pessoas em situações difíceis e das mães.Rita de Cássia faleceu em 1457 e foi canonizada como santa pela Igreja Católica em 1900. Ela é celebrada por sua fé inabalável, sua perseverança em meio às adversidades e sua capacidade de perdoar e amar seus inimigos. Santa Rita continua a ser uma fonte de inspiração e intercessão para muitos fiéis ao redor do mundo.'
  } else if (highestScoreKey == 'vicente') {
    nomeFinal = 'São Vicente de Paulo';
    img.src = './styles/Imagens/vicenteDePaulo.jpg';
    img.alt = 'São Vicente de Paulo';
    text.innerText = 'São Vicente de Paulo foi um sacerdote francês do século XVII conhecido por sua dedicação aos pobres e marginalizados. Ele nasceu em 1581 na França e desde cedo mostrou uma preocupação especial pelos menos favorecidos. Vicente foi ordenado sacerdote e, ao longo de sua vida, fundou várias instituições de caridade e iniciativas para ajudar os necessitados.Uma de suas contribuições mais significativas foi a fundação da Congregação da Missão, conhecida como Lazaristas, para a formação de padres dedicados à evangelização e ao serviço dos pobres. Além disso, ele co-fundou as Filhas da Caridade, uma ordem religiosa feminina dedicada ao cuidado dos doentes e desamparados.Vicente de Paulo é lembrado por sua humildade, sua compaixão e sua abnegação total em favor dos outros. Ele era conhecido por suas pregações fervorosas e por sua capacidade de mobilizar recursos e pessoas para ajudar aqueles que mais precisavam. Ele é considerado um dos patronos da caridade cristã e seu legado continua a inspirar instituições de caridade e movimentos sociais ao redor do mundo. São Vicente de Paulo foi canonizado como santo pela Igreja Católica em 1737 e é celebrado em 27 de setembro.'
  } else if (highestScoreKey == 'joaoBatista') {
    nomeFinal = 'São João Batista';
    img.src = './styles/Imagens/joaoBatista.jpg';
    img.alt = 'São João Batista';
    text.innerText = 'São João Batista foi um profeta judeu do século I, conhecido por seu papel crucial como precursor de Jesus Cristo. Ele nasceu aproximadamente no ano 5 a.C. e é lembrado principalmente por sua missão de preparar o caminho para o Messias, conforme profetizado no Antigo Testamento.João Batista viveu uma vida ascética no deserto, pregando um batismo de arrependimento para o perdão dos pecados e chamando o povo à conversão. Ele ganhou destaque por sua firmeza moral e por sua mensagem poderosa, atraindo seguidores de todas as classes sociais.No Novo Testamento, João Batista é descrito como aquele que batizou Jesus no rio Jordão, após o qual ele testemunhou publicamente a identidade messiânica de Jesus. Ele é conhecido por ter proclamado: "Eis o Cordeiro de Deus, que tira o pecado do mundo!" (João 1:29).João Batista enfrentou a oposição das autoridades religiosas de sua época e foi eventualmente preso e martirizado por causa de sua fé e de sua denúncia das injustiças. Ele é venerado como um dos grandes profetas do Cristianismo e é celebrado pela Igreja Católica em 24 de junho, o dia de sua festa litúrgica. Seu papel como precursor de Jesus Cristo e sua mensagem de arrependimento continuam a ser um exemplo poderoso de preparação espiritual e dedicação à vontade de Deus.'
  } else if (highestScoreKey == 'tomas') {
    nomeFinal = 'Santo Tomás de Aquino';
    img.src = './styles/Imagens/tomasDeAquino.png';
    img.alt = 'Santo Tomás de Aquino';
    text.innerText = 'São Tomás de Aquino foi um teólogo e filósofo dominicano do século XIII, considerado um dos pensadores mais influentes da história da Igreja Católica e da filosofia ocidental. Ele nasceu em 1225 na Itália e é conhecido por suas vastas contribuições para a teologia, a filosofia e o pensamento cristão.Tomás de Aquino estudou na Universidade de Nápoles e posteriormente ingressou na Ordem Dominicana, dedicando-se ao estudo das obras de Aristóteles e à reconciliação da filosofia clássica com a fé cristã. Ele é especialmente conhecido por sua obra monumental, "Suma Teológica", onde explorou sistematicamente questões teológicas, éticas e metafísicas, influenciando profundamente o pensamento teológico e filosófico medieval e além.Além da "Suma Teológica", Tomás de Aquino escreveu várias outras obras importantes, incluindo comentários sobre as obras de Aristóteles, tratados filosóficos e escritos litúrgicos. Ele desenvolveu uma teologia robusta que integrava fé e razão, argumentando que a razão humana, iluminada pela fé, poderia compreender melhor a verdade divina e a realidade criada por Deus.Tomás de Aquino é venerado como doutor da Igreja e sua influência se estende por séculos, moldando o pensamento católico e influenciando teólogos e filósofos posteriores. Ele é conhecido por seu intelecto brilhante, sua abordagem sistemática e sua busca pela verdade, sendo um exemplo de como a fé e a razão podem coexistir e enriquecer a compreensão humana da realidade divina e do mundo criado.'
  } else if (highestScoreKey == 'antonio') {
    nomeFinal = 'Santo Antônio';
    img.src = './styles/Imagens/santoAntonio.jpg';
    img.alt = 'Santo Antônio';
    text.innerText = 'Santo Antônio de Pádua, também conhecido como Santo Antônio de Lisboa, foi um frade franciscano português do século XIII, reconhecido por sua devoção, ensinamentos e milagres. Ele nasceu em Lisboa, Portugal, em 1195, e entrou para a Ordem Franciscana em sua juventude, abandonando sua vida anterior como nobre.Antônio é especialmente conhecido por seu talento como pregador e por sua profunda devoção à Palavra de Deus. Ele viajou extensivamente pela Itália e pelo sul da França, pregando para multidões e convertendo muitos ao cristianismo. Sua pregação era simples, direta e profundamente espiritual, focando na necessidade de conversão pessoal e na importância da vida de oração.Além de seu trabalho como pregador, Antônio era conhecido por seus milagres, incluindo a cura de enfermos e a reconciliação de pessoas em conflito. Ele também é famoso por sua habilidade em encontrar objetos perdidos, o que lhe valeu o apelido de "Santo Antônio de Pádua", cidade onde passou grande parte de seu tempo final.Santo Antônio é venerado como padroeiro dos pobres, dos oprimidos, dos viajantes e, especialmente, dos que buscam objetos perdidos. Ele é celebrado por sua humildade, simplicidade e amor incondicional a Deus e aos outros. Sua devoção e popularidade continuam a crescer ao redor do mundo, sendo um dos santos mais amados e invocados pela comunidade católica e além.'
  } else if (highestScoreKey == 'cecilia') {
    nomeFinal = 'Santa Cecília';
    img.src = './styles/Imagens/santaCecilia.jpg';
    img.alt = 'Santa Cecília';
    text.innerText = 'Santa Cecília é uma das santas mais veneradas na tradição cristã, conhecida como padroeira dos músicos. Ela nasceu em Roma, provavelmente no século II, em uma família nobre e cristã. Cecília dedicou sua vida a Deus desde muito jovem e fez um voto de virgindade, apesar de ser prometida em casamento a um pagão chamado Valeriano.Segundo a tradição, Cecília era uma talentosa musicista e cantava louvores a Deus em seu coração. Durante seu casamento forçado, ela converteu seu marido ao cristianismo e juntos dedicaram suas vidas ao serviço dos pobres. Cecília também é conhecida por sua coragem e firmeza na fé, mesmo enfrentando perseguições e martírio por se recusar a renegar sua fé cristã.O martírio de Santa Cecília é um dos mais célebres da história da igreja. Após várias tentativas de execução, ela foi condenada à morte por sufocamento em um banho de vapor, mas sobreviveu por um período prolongado, durante o qual continuou a louvar a Deus. Finalmente, foi decapitada e tornou-se uma das primeiras mártires cristãs a ser venerada pela igreja.Santa Cecília é frequentemente representada segurando um instrumento musical, simbolizando sua ligação com a música e seu papel como protetora dos músicos. Ela é celebrada em 22 de novembro como sua festa litúrgica e sua devoção continua a inspirar músicos e cristãos ao redor do mundo, refletindo sua fé inabalável e seu amor pela arte e pela música como expressões de louvor a Deus.'
  } else if (highestScoreKey == 'bento') {
    nomeFinal = 'São Bento';
    img.src = './styles/Imagens/santoBento.png';
    img.alt = 'São Bento';
    text.innerText = 'São Bento de Núrsia foi um monge italiano do século VI, conhecido por ser o fundador da Ordem dos Beneditinos e por sua influência duradoura no monasticismo ocidental. Ele nasceu por volta de 480 d.C. em Núrsia, na Itália, em uma família nobre romana.Bento inicialmente estudou em Roma, mas logo se retirou para uma vida de solidão espiritual, vivendo como eremita em uma caverna próxima. Com o tempo, atraiu seguidores que buscavam sua orientação espiritual e sabedoria. Ele é famoso por ter escrito a "Regra de São Bento", um guia para a vida monástica que enfatiza a disciplina, a oração, o trabalho manual e a comunidade fraterna.A Regra de São Bento tornou-se a base para muitas ordens monásticas ao longo da Idade Média e até os dias de hoje. Ela enfatiza a moderação, a obediência e a estabilidade, buscando um equilíbrio entre a vida de oração contemplativa e o trabalho manual necessário para sustentar a comunidade monástica.São Bento é venerado como padroeiro da Europa e é conhecido por seus milagres, ensinamentos sobre humildade e sua habilidade em exorcizar demônios. Ele é celebrado em 11 de julho como sua festa litúrgica e sua influência continua a ser significativa não apenas na vida monástica, mas também na espiritualidade cristã e na cultura ocidental como um todo.'
  } else if (highestScoreKey == 'franciscoXavier') {
    nomeFinal = 'São Francisco Xavier';
    img.src = './styles/Imagens/franciscoXavier.jpg';
    img.alt = 'Francisco Xavier';
    text.innerText = 'São Francisco Xavier foi um missionário jesuíta espanhol do século XVI, conhecido por seu trabalho evangelizador na Ásia e por ser um dos primeiros membros da Companhia de Jesus. Ele nasceu em 1506 em Navarra, Espanha, e estudou na Universidade de Paris, onde conheceu Inácio de Loyola, fundador dos Jesuítas, e tornou-se um dos primeiros companheiros de Inácio.Francisco Xavier dedicou sua vida à propagação do cristianismo, viajando extensivamente pela Ásia Oriental. Ele é particularmente lembrado por suas missões no Japão e na Índia, onde batizou milhares de pessoas e estabeleceu comunidades cristãs. Sua abordagem missionária era marcada por sua paixão, zelo e adaptação aos costumes locais, aprendendo línguas nativas para comunicar o evangelho de forma eficaz.Além de seu trabalho missionário, Francisco Xavier foi um prolífico escritor de cartas e relatos de suas viagens, que oferecem insights valiosos sobre a história e as culturas das regiões que visitou. Ele também é conhecido por seus milagres, incluindo curas miraculosas e previsões proféticas.Francisco Xavier faleceu em 1552, na ilha de Shangchuan, na China, enquanto se preparava para uma missão na China continental. Ele foi canonizado como santo pela Igreja Católica em 1622 e é celebrado em 3 de dezembro como sua festa litúrgica. São Francisco Xavier é venerado como padroeiro dos missionários, da evangelização, dos navegantes e das missões ultramarinas, sendo um exemplo de fervor missionário e de dedicação ao serviço de Deus e ao próximo.'
  } else if (highestScoreKey == 'inacio') {
    nomeFinal = 'São Inácio de Loyola';
    img.src = './styles/Imagens/inacioDeLoyola.jpg';
    img.alt = 'Inácio de Loyola';
    text.innerText = 'São Inácio de Loyola foi o fundador da Companhia de Jesus, também conhecida como os Jesuítas, e uma das figuras mais influentes na renovação espiritual da Igreja Católica no século XVI. Ele nasceu em 1491 no País Basco, Espanha, em uma família nobre, e inicialmente seguiu a carreira militar.Após ser ferido em batalha, Inácio passou por uma profunda conversão espiritual durante sua recuperação. Ele dedicou-se à vida de oração, penitência e estudo teológico, desenvolvendo o que viria a ser conhecido como os Exercícios Espirituais de Santo Inácio, um método de oração, meditação e discernimento espiritual que se tornou fundamental para a espiritualidade ignaciana.Inácio fundou a Companhia de Jesus em 1540, com o objetivo de servir a Igreja através da educação, da evangelização e do trabalho missionário. Os Jesuítas rapidamente se tornaram conhecidos por seu compromisso com a educação de alta qualidade e por suas missões em várias partes do mundo, adaptando-se às necessidades e culturas locais.Além de seu trabalho com os Jesuítas, Inácio é lembrado por suas cartas e escritos espirituais, que refletem sua profunda devoção a Deus, sua confiança na Providência Divina e sua busca constante pelo serviço desinteressado aos outros. Ele foi canonizado como santo pela Igreja Católica em 1622 e é celebrado em 31 de julho como sua festa litúrgica.São Inácio de Loyola é venerado como padroeiro dos exercícios espirituais, dos retiros espirituais, dos soldados e, de maneira geral, dos fundadores de ordens religiosas. Sua influência perdura até hoje, sendo uma inspiração para aqueles que buscam um encontro mais profundo com Deus e um serviço generoso aos necessitados.'
  } else if (highestScoreKey == 'isabel') {
    nomeFinal = 'Santa Isabel de Portugal';
    img.src = './styles/Imagens/isabelPortugal.jpg';
    img.alt = 'Isabel de Portugal';
    text.innerText = 'Santa Isabel de Portugal, também conhecida como Santa Isabel de Aragão, foi uma rainha portuguesa do século XIII conhecida por sua caridade e devoção cristã. Ela nasceu por volta de 1271 em Saragoça, na Espanha, e casou-se com o rei D. Dinis de Portugal aos 12 anos de idade.Isabel é lembrada por seu profundo compromisso com os pobres e doentes. Ela distribuía alimentos, roupas e cuidados pessoais aos necessitados, muitas vezes escondendo pães debaixo de suas vestes para distribuir anonimamente aos mais necessitados. Ela construiu hospitais e conventos e fundou instituições de caridade para ajudar os menos favorecidos.Além de suas obras de caridade, Isabel era conhecida por sua vida de oração e penitência. Ela levava uma vida simples e austera, dedicando-se à contemplação espiritual e ao serviço aos outros. Após a morte de seu marido, Isabel renunciou à vida na corte e ingressou na Ordem Terceira Franciscana, dedicando o restante de seus anos à oração e ao serviço aos pobres.Santa Isabel de Portugal faleceu em 1336 e foi canonizada como santa pela Igreja Católica em 1625. Ela é venerada como padroeira da caridade, das viúvas, dos enfermos e dos terceiros franciscanos. Sua vida é um exemplo de como a fé cristã pode inspirar a dedicação ao serviço desinteressado aos necessitados e à construção de um mundo mais justo e compassivo.'
  } else {
    nomeFinal = 'Erro Desconhecido';
  }

  document.getElementById('share-button').addEventListener('click', shareOnWhatsApp);
  document.getElementById('restart-button').addEventListener('click', restartQuiz);


  resultText.innerText = `Voce é: ${nomeFinal}`;
}

function shareOnWhatsApp() {
  const resultText = document.getElementById('result-text').innerText;
  const result = resultText.substring(7); // Remove "Voce é: " do inicio
  const shareMessage = `Fiz o teste e descobri que sou ${result}. Venha descobrir o seu! https://omarcelof.github.io/QualSantoVoce-/`;
  const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
  window.open(whatsappLink, '_blank');
}

// Reiniciar o quiz
function restartQuiz() {
  location.reload();
}



startQuiz();


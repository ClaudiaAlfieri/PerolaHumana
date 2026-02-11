import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

// Tipos
interface Disease {
  name: string;
  description: string;
}

interface LetterGroup {
  letter: string;
  count: number;
  diseases: Disease[];
}

// Dados de exemplo - SUBSTITUA com seus dados reais
const diseasesData: LetterGroup[] = [
  {
    letter: 'A',
    count: 11,
    diseases: [
      { name: 'Alcoolismo',
        description: `O alcoolismo não é apenas um hábito; é um reflexo de padrões emocionais e energéticos internos que permanecem bloqueados. Quando uma pessoa bebe, emoções reprimidas — raiva, medo ou tristeza — emergem porque o álcool altera a regulação do cérebro, reduzindo o autocontrole.

        Na ótica da física quântica, a consciência funciona como observadora desses estados internos, podendo influenciar como eles se manifestam. A mudança começa ao trabalhar com os processos conscientes, mesmo que pequenos, para interagir com padrões inconscientes: amor, paciência, empatia e atenção positiva reorganizam o equilíbrio emocional.

        O álcool é sintoma, não causa. A raiz está em traumas e culpas acumuladas. Criar ambientes de apoio, respeito e compreensão permite que a pessoa se conecte com sua própria força interior e que a dependência perca poder, de forma natural e sustentável.
        ` },

      { name: 'Alergia na pele',
        description: `Reações alérgicas indicam que o corpo responde a tensões ou estímulos externos que afetam o equilíbrio físico e emocional. Assim como campos externos podem interferir em partículas sensíveis na física quântica, o corpo humano reage a situações que ameaçam seu espaço ou bem-estar.

        A solução está em reconhecer limites, comunicar necessidades com clareza e proteger seu espaço pessoal. Ajustar a forma de se relacionar consigo mesmo e com os outros reorganiza padrões energéticos, reduzindo respostas físicas de irritação. Mudanças pessoais tendem a gerar mudanças no ambiente de forma gradual.
        ` },

      { name: 'Anemia',
        description: `A anemia reflete, simbolicamente, a diminuição da energia vital causada por bloqueios emocionais e psicológicos. Muitas pessoas perdem a alegria de viver por medo, falta de reconhecimento ou sentimento de insuficiência. Podem sentir-se subestimadas, acreditar que existem limites na vida ou perder a vontade de se amar.

        Se na sua educação nunca recebeu valorização, elogios ou incentivo, tende a depender do reconhecimento alheio para sentir-se completo. A energia vital circula livremente quando os sentimentos e emoções estão desbloqueados. Por isso, é essencial permitir que a vida flua dentro de si, buscando experiências e pessoas que elevem o ânimo. A saúde física e emocional depende, em grande parte, da maneira como pensamos e sentimos.

        Quando nos fixamos na postura de vítima ou na dependência do reconhecimento externo, o corpo manifesta essa limitação. A corrente sanguínea e o fluxo de energia vital passam a depender de fatores externos, refletindo a fragilidade emocional interna. Reconhecer e assumir os próprios valores, independentemente do que os outros pensem, fortalece a vitalidade e transforma a experiência de vida.

        Para restaurar a energia:

        •	Cuide da sua aparência e da sua postura, pois elas influenciam diretamente o estado emocional;
        •	Ame-se e liberte-se da dependência do amor ou da aprovação de terceiros;
        •	Viva com coragem, bom humor e entusiasmo, permitindo-se desfrutar das pequenas alegrias diárias;
        •	Observe o riso e as travessuras simples de uma criança, que despertam a verdadeira felicidade;
        •	Deixe os acontecimentos fluírem, assumindo responsabilidade apenas pelo que lhe pertence;
        •	Faça o que gosta sem medo de críticas, libertando-se da pressão de agradar ou controlar tudo.

        A anemia, assim, não é apenas um desequilíbrio físico, mas um reflexo da relação consigo mesmo. Ao cultivar alegria, reconhecimento interno e independência emocional, a energia vital flui plenamente, fortalecendo corpo, mente e espírito.
        ` },

      { name: 'Ânus',
        description: `Problemas nessa região podem refletir ansiedade relacionada à busca por liberdade ou à necessidade de se desprender de situações e hábitos que não servem mais. Na perspectiva quântica, a energia pode estar bloqueada, dificultando o fluxo natural de ação e decisão.

        Liberar-se requer consciência e prática: identificar o que deve ser deixado para trás, estabelecer limites claros e agir de forma consistente. Quanto mais alinhadas as intenções com as ações, mais natural se torna a experiência de liberdade e equilíbrio.
        ` },

      { name: 'Apêndice',
        description: `O apêndice é um órgão pequeno, sem função aparente atualmente, mas que pode ter desempenhado papéis importantes no passado evolutivo. Na física quântica, estruturas aparentemente inativas podem ser relevantes em contextos específicos.
        Isso mostra que cada parte do organismo pode influenciar o equilíbrio geral. Mesmo o que parece “desnecessário” contribui para a harmonia do sistema, reforçando a importância de cuidar do corpo de forma integral e consciente.

        Apendicite

        A apendicite reflete bloqueios internos causados pelo medo de avançar ou mudar. A inflamação indica que pensamentos e emoções não estão fluindo de forma saudável, criando tensão física e mental.

        Do ponto de vista quântico, padrões emocionais retidos podem se manifestar no corpo como sinais de alerta. Guardar mágoas ou apegar-se a situações que não contribuem para o presente impede o fluxo natural de bem-estar.

        A solução começa ao identificar essas tensões internas, reorganizar pensamentos e emoções e permitir que a paz entre no seu sistema. Perdoar, compreender-se e reconhecer seu potencial cria condições para que o corpo e a mente reajam positivamente, restaurando equilíbrio e harmonia.
        ` },

      { name: 'Arteriosclerose e Presbiopia',
        description: `A presbiopia manifesta-se com o avançar do tempo, quando o olhar físico começa a perder a facilidade de focar o que está próximo, como se a lente interior se tornasse menos flexível. É frequentemente associada à idade, mas, num plano mais subtil, pode simbolizar uma consciência que se projecta demasiado para a frente, inquieta com o que ainda não aconteceu, afastando-se do instante presente onde a vida realmente pulsa.

        A dificuldade em ver ao perto pode espelhar uma mente absorvida por antecipações, tal como o viajante que, ao entardecer, em vez de contemplar a paisagem que o envolve, se angustia com a distância que ainda falta percorrer. Quando o pensamento se fixa apenas no que virá, o agora perde nitidez, como um objecto que se afasta do campo de visão.
        Existe também uma dimensão de rigidez interior — não como julgamento, mas como convite à flexibilidade. Tal como o cristalino precisa de elasticidade para ajustar o foco, a mente beneficia de abertura para acolher novas perspectivas, ideias e experiências. A vida, quando observada com curiosidade em vez de resistência, mantém uma juventude silenciosa que não depende apenas dos anos, mas da forma como se sente o tempo a passar.

        Nesta leitura simbólica, o corpo torna-se espelho de estados internos. O endurecimento das estruturas físicas pode ser visto como metáfora de um endurecimento emocional ou mental, enquanto a suavidade e a adaptabilidade recordam a importância de fluir com os ciclos naturais. Não se trata de culpa nem de causa directa, mas de correspondências poéticas entre interior e exterior — como se o organismo fosse um mapa vivo das nossas paisagens invisíveis.

        Viver o presente com atenção é como ajustar o foco da consciência. Cada momento contém detalhes subtis, partículas de experiência que só se revelam quando realmente observadas. Libertar o peso do passado e reduzir o medo do futuro não é ignorar o tempo, mas habitá-lo com mais inteireza.

        Sentir-se parte da natureza é reconhecer que envelhecer não significa perder luz, mas transformar-se. O olhar, quando se volta para o mundo com serenidade, descobre que o futuro é apenas uma extensão das escolhas e crenças cultivadas agora. Pensamentos tornam-se sementes; atitudes, terreno fértil. E a visão — física ou interior — expande-se quando o ser se permite observar a vida com confiança, leveza e presença.
        ` },

      { name: 'Articulações',
        description: `As articulações refletem nossa capacidade de adaptação e de aceitar mudanças na vida. Quanto mais flexível e consciente você for nas relações e nas situações do dia a dia, mais saudável será a mobilidade física.
        Falta de gratidão, rigidez mental ou apego emocional podem gerar tensões que se manifestam nas articulações, especialmente na região do quadril e da coxa. Trabalhar a compreensão, a aceitação e a flexibilidade reorganiza padrões energéticos e contribui para a saúde física e emocional.
        ` },

      { name: 'Artrite',
        description: `A artrite revela acúmulo de tensões, críticas e ressentimentos. Pessoas com dificuldades em lidar com frustração ou sentimentos de não ser valorizadas podem apresentar maior vulnerabilidade a esse problema.
        A reorganização quântica aqui se dá ao reconhecer os padrões internos de julgamento e raiva, permitindo que pensamentos e emoções se alinhem a um estado de equilíbrio. Reduzir críticas internas e cultivar autocompaixão ajuda a prevenir ou aliviar manifestações físicas.
        ` },

      { name: 'Asfixia',
        description: `A asfixia indica bloqueios no fluxo de energia vital, muitas vezes ligados a medos antigos, especialmente da infância. Essa limitação impede crescimento e a plena expressão das próprias verdades.
        Do ponto de vista quântico, liberar esses bloqueios significa permitir que pensamentos e intenções fluam sem resistência, confiando em si mesmo e na orientação interna. Crescer é integrar liberdade e força interior, mantendo a capacidade de se renovar e agir com clareza em qualquer situação.
        ` },

      { name: 'Astigmatismo',
        description: `O astigmatismo mostra dificuldade em alinhar percepções e focos simultaneamente. Assim como na física quântica, em que diferentes estados podem coexistir, a mente pode se dividir em múltiplos cenários, criando tensão e desgaste.
        Reconhecer essa tendência e confiar mais nas pessoas ao seu redor permite que pensamentos e decisões fluam de maneira mais organizada. Aceitar apoio e simplificar a análise das situações reduz a sobrecarga mental e melhora a percepção da realidade.
        ` },

      { name: 'Azia',
        description: `A azia surge como sinal de medo — medo de enfrentar decisões, responsabilidades ou mudanças importantes. Muitas vezes, o corpo reage antes da mente ter processado completamente a situação.
        Na ótica quântica, identificar e observar o medo permite reorganizar a energia interna, reduzindo a manifestação física do desconforto. Respirar profundamente, buscar apoio e relaxar diante do processo ajuda a restabelecer equilíbrio, permitindo que os eventos se desenrolem naturalmente sem criar sobrecarga emocional ou física.
        ` },
    ]
  },
  {
    letter: 'B',
    count: 5,
    diseases: [
      {
        name: 'Bactérias — Vermes — Vírus',
        description: `Quando há harmonia com a energia da vida, a vitalidade flui naturalmente pelo corpo e pelo ambiente. Quando o equilíbrio interno é rompido, organismos como bactérias, vírus e fungos encontram condições para se desenvolver.

        Pesquisas de Alexander Gurvich mostram que todas as células vivas emitem radiações — os raios mitogenéticos — que influenciam outras células ao redor. No corpo humano, doenças podem alterar essa emissão. A mente também influencia o comportamento desses organismos, podendo acelerar ou desacelerar seu desenvolvimento conforme o estado emocional e a convicção mental.

        Os chamados “inimigos invisíveis” só encontram espaço quando há desarmonia interna. A energia do pensamento atua como um íman: vibrações geradas por crenças negativas ou autodestrutivas atraem desequilíbrios, enquanto pensamentos claros e tranquilos fortalecem a saúde e protegem o corpo.
        `},
      {
        name: 'Baço',
        description: `O baço regula células importantes do sistema imunológico, como leucócitos e hemácias. Ele reflete o equilíbrio entre diferentes tipos de energia interna, emocional e racional.

        Quando há conflitos emocionais ou obsessão por eventos passados, a função do baço pode ser afetada, alterando a produção de células de defesa. Problemas de relacionamento ou carência afetiva na infância podem impactar simbolicamente esse órgão.

        Para restaurar equilíbrio, é necessário autoconhecimento, perdão e atenção consciente ao próprio estado emocional. Exercícios de relaxamento, observação interna e mudança de atitude permitem maior harmonia física e mental, reforçando a proteção natural do corpo.
        `},
       {
        name: 'Bexiga',
        description: `A bexiga está ligada à capacidade de suportar tensões e emoções acumuladas. Guardar problemas e ressentimentos prolongados pode gerar alterações em seu funcionamento, refletindo sobrecarga emocional.

        Reconhecer os limites pessoais, desapegar de eventos ou pessoas que provocam ansiedade e cultivar autocompaixão ajuda a restaurar a função adequada da bexiga. O equilíbrio emocional influencia diretamente a saúde física, e atitudes conscientes fortalecem a capacidade de lidar com situações difíceis sem sobrecarga.
        `},
       {
        name: 'Boca',
        description: `A boca expressa pensamentos e emoções. Palavras duras, críticas ou comentários negativos repercutem tanto na comunicação quanto no próprio corpo, manifestando-se como aftas, feridas ou herpes.

        Observar sinceramente os próprios comportamentos e adotar uma comunicação mais gentil e consciente reduz tensões internas e externas. Pensamentos e palavras funcionam como energia que retorna ao emissor; disciplina e cuidado com a forma de falar ajudam a manter saúde física e emocional.
        `},
       {
        name: 'Bronquite asmática nas crianças',
        description: `Doenças em crianças frequentemente refletem tensões emocionais e padrões de comportamento de quem cuida delas. Conflitos internos de pais ou responsáveis podem se manifestar na saúde infantil através de somatização.

        O equilíbrio emocional e a harmonia familiar são essenciais. Atitudes de cooperação, compreensão e gratidão contribuem para a saúde de todos. Pensamentos positivos e comportamentos equilibrados ajudam a reduzir manifestações físicas de tensão, enquanto disciplina emocional e oração ou meditação fortalecem o bem-estar coletivo.
        `},      
    ]
  },
  {
    letter: 'E',
    count: 12,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente, estamos a falar sobre problemas no alto da cabeça. O eczema pode significar desrespeito para com os superiores, que os cônjuges não se estão a entender e, também que, de alguma forma, a desrespeitar a Deus. A pessoa muito orgulhosa além de perder os cabelos ainda fica propensa à arteriosclerose como reflexo da inflexibilidade mental. Teimosa e de ego muito forte na sua personalidade, passa, também, a sofrer de hipertensão.'
      },
      {
        name: 'Eczema em criança',
        description: 'Este problema numa criança significa que os pais estão a viver uma relação desarmónica na qual a mulher nutre revolta contra o marido. Deixe que as pessoas sejam elas mesmas. Alimente o seu coração apenas de amor, é inútil perder tempo com revoltas. Mentalize um mundo repleto de amor.'
      },
      // Adicione mais doenças
    ]
  },
  {
    letter: 'E',
    count: 12,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente, estamos a falar sobre problemas no alto da cabeça. O eczema pode significar desrespeito para com os superiores, que os cônjuges não se estão a entender e, também que, de alguma forma, a desrespeitar a Deus. A pessoa muito orgulhosa além de perder os cabelos ainda fica propensa à arteriosclerose como reflexo da inflexibilidade mental. Teimosa e de ego muito forte na sua personalidade, passa, também, a sofrer de hipertensão.'
      },
      {
        name: 'Eczema em criança',
        description: 'Este problema numa criança significa que os pais estão a viver uma relação desarmónica na qual a mulher nutre revolta contra o marido. Deixe que as pessoas sejam elas mesmas. Alimente o seu coração apenas de amor, é inútil perder tempo com revoltas. Mentalize um mundo repleto de amor.'
      },
      // Adicione mais doenças
    ]
  },
  {
    letter: 'E',
    count: 12,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente, estamos a falar sobre problemas no alto da cabeça. O eczema pode significar desrespeito para com os superiores, que os cônjuges não se estão a entender e, também que, de alguma forma, a desrespeitar a Deus. A pessoa muito orgulhosa além de perder os cabelos ainda fica propensa à arteriosclerose como reflexo da inflexibilidade mental. Teimosa e de ego muito forte na sua personalidade, passa, também, a sofrer de hipertensão.'
      },
      {
        name: 'Eczema em criança',
        description: 'Este problema numa criança significa que os pais estão a viver uma relação desarmónica na qual a mulher nutre revolta contra o marido. Deixe que as pessoas sejam elas mesmas. Alimente o seu coração apenas de amor, é inútil perder tempo com revoltas. Mentalize um mundo repleto de amor.'
      },
      // Adicione mais doenças
    ]
  },
  {
    letter: 'E',
    count: 12,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente, estamos a falar sobre problemas no alto da cabeça. O eczema pode significar desrespeito para com os superiores, que os cônjuges não se estão a entender e, também que, de alguma forma, a desrespeitar a Deus. A pessoa muito orgulhosa além de perder os cabelos ainda fica propensa à arteriosclerose como reflexo da inflexibilidade mental. Teimosa e de ego muito forte na sua personalidade, passa, também, a sofrer de hipertensão.'
      },
      {
        name: 'Eczema em criança',
        description: 'Este problema numa criança significa que os pais estão a viver uma relação desarmónica na qual a mulher nutre revolta contra o marido. Deixe que as pessoas sejam elas mesmas. Alimente o seu coração apenas de amor, é inútil perder tempo com revoltas. Mentalize um mundo repleto de amor.'
      },
      // Adicione mais doenças
    ]
  },
  {
    letter: 'E',
    count: 12,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente, estamos a falar sobre problemas no alto da cabeça. O eczema pode significar desrespeito para com os superiores, que os cônjuges não se estão a entender e, também que, de alguma forma, a desrespeitar a Deus. A pessoa muito orgulhosa além de perder os cabelos ainda fica propensa à arteriosclerose como reflexo da inflexibilidade mental. Teimosa e de ego muito forte na sua personalidade, passa, também, a sofrer de hipertensão.'
      },
      {
        name: 'Eczema em criança',
        description: 'Este problema numa criança significa que os pais estão a viver uma relação desarmónica na qual a mulher nutre revolta contra o marido. Deixe que as pessoas sejam elas mesmas. Alimente o seu coração apenas de amor, é inútil perder tempo com revoltas. Mentalize um mundo repleto de amor.'
      },
      // Adicione mais doenças
    ]
  },
  {
    letter: 'E',
    count: 12,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente, estamos a falar sobre problemas no alto da cabeça. O eczema pode significar desrespeito para com os superiores, que os cônjuges não se estão a entender e, também que, de alguma forma, a desrespeitar a Deus. A pessoa muito orgulhosa além de perder os cabelos ainda fica propensa à arteriosclerose como reflexo da inflexibilidade mental. Teimosa e de ego muito forte na sua personalidade, passa, também, a sofrer de hipertensão.'
      },
      {
        name: 'Eczema em criança',
        description: 'Este problema numa criança significa que os pais estão a viver uma relação desarmónica na qual a mulher nutre revolta contra o marido. Deixe que as pessoas sejam elas mesmas. Alimente o seu coração apenas de amor, é inútil perder tempo com revoltas. Mentalize um mundo repleto de amor.'
      },
      // Adicione mais doenças
    ]
  },
  {
    letter: 'E',
    count: 12,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente, estamos a falar sobre problemas no alto da cabeça. O eczema pode significar desrespeito para com os superiores, que os cônjuges não se estão a entender e, também que, de alguma forma, a desrespeitar a Deus. A pessoa muito orgulhosa além de perder os cabelos ainda fica propensa à arteriosclerose como reflexo da inflexibilidade mental. Teimosa e de ego muito forte na sua personalidade, passa, também, a sofrer de hipertensão.'
      },
      {
        name: 'Eczema em criança',
        description: 'Este problema numa criança significa que os pais estão a viver uma relação desarmónica na qual a mulher nutre revolta contra o marido. Deixe que as pessoas sejam elas mesmas. Alimente o seu coração apenas de amor, é inútil perder tempo com revoltas. Mentalize um mundo repleto de amor.'
      },
      // Adicione mais doenças
    ]
  },
  {
    letter: 'E',
    count: 12,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente, estamos a falar sobre problemas no alto da cabeça. O eczema pode significar desrespeito para com os superiores, que os cônjuges não se estão a entender e, também que, de alguma forma, a desrespeitar a Deus. A pessoa muito orgulhosa além de perder os cabelos ainda fica propensa à arteriosclerose como reflexo da inflexibilidade mental. Teimosa e de ego muito forte na sua personalidade, passa, também, a sofrer de hipertensão.'
      },
      {
        name: 'Eczema em criança',
        description: 'Este problema numa criança significa que os pais estão a viver uma relação desarmónica na qual a mulher nutre revolta contra o marido. Deixe que as pessoas sejam elas mesmas. Alimente o seu coração apenas de amor, é inútil perder tempo com revoltas. Mentalize um mundo repleto de amor.'
      },
      // Adicione mais doenças
    ]
  },
  // Adicione mais letras...
  { letter: 'B', count: 5, diseases: [] },
  { letter: 'C', count: 16, diseases: [] },
  { letter: 'D', count: 12, diseases: [] },
  { letter: 'F', count: 4, diseases: [] },
  { letter: 'G', count: 5, diseases: [] },
  { letter: 'H', count: 5, diseases: [] },
  { letter: 'I', count: 4, diseases: [] },
  { letter: 'J', count: 1, diseases: [] },
  { letter: 'L', count: 1, diseases: [] },
  { letter: 'M', count: 9, diseases: [] },
  { letter: 'N', count: 1, diseases: [] },
  { letter: 'O', count: 8, diseases: [] },
  { letter: 'P', count: 10, diseases: [] },
  { letter: 'R', count: 4, diseases: [] },
  { letter: 'S', count: 3, diseases: [] },
  { letter: 'T', count: 5, diseases: [] },
  { letter: 'U', count: 3, diseases: [] },
];

export default function DiseasesAlphabetGrid() {
  const [selectedLetter, setSelectedLetter] = useState<LetterGroup | null>(null);
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  const openLetterModal = (letterGroup: LetterGroup) => {
    setSelectedLetter(letterGroup);
  };

  const closeLetterModal = () => {
    setSelectedLetter(null);
    setSelectedDisease(null);
  };

  const openDiseaseModal = (disease: Disease) => {
    setSelectedDisease(disease);
  };

  const closeDiseaseModal = () => {
    setSelectedDisease(null);
  };

  return (
    <div className="w-full py-12">
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
        Lista de Doenças
      </h2>

      {/* Grid de Letras */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto px-4">
        {diseasesData.map((letterGroup) => (
          <motion.button
            key={letterGroup.letter}
            onClick={() => openLetterModal(letterGroup)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-[#E0A878] to-[#C8935F] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              {/* Círculo com a Letra */}
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#C8935F]">
                  {letterGroup.letter}
                </span>
              </div>

              {/* Info */}
              <div className="text-left flex-1">
                <p className="text-white font-bold text-lg">
                  {letterGroup.count} doença{letterGroup.count !== 1 ? 's' : ''}
                </p>
                <p className="text-white/80 text-sm">
                  Clique para ver mais
                </p>
              </div>

              {/* Seta */}
              <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal 1: Lista de Doenças da Letra */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLetterModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
            >
              {/* Header do Modal */}
              <div className="bg-gradient-to-r from-[#C8935F] to-[#E0A878] p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#C8935F]">
                      {selectedLetter.letter}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Doenças com {selectedLetter.letter}
                    </h3>
                    <p className="text-white/80">
                      {selectedLetter.count} doença{selectedLetter.count !== 1 ? 's' : ''} encontrada{selectedLetter.count !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeLetterModal}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Lista de Doenças */}
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
                {selectedLetter.diseases.length > 0 ? (
                  <div className="space-y-3">
                    {selectedLetter.diseases.map((disease, index) => (
                      <motion.button
                        key={index}
                        onClick={() => openDiseaseModal(disease)}
                        whileHover={{ x: 5 }}
                        className="w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-[#C8935F]/10 hover:to-[#E0A878]/10 rounded-xl p-4 flex items-center justify-between group transition-all duration-300 border border-gray-200 hover:border-[#C8935F]/30"
                      >
                        <span className="text-left font-medium text-gray-800 group-hover:text-[#C8935F] transition-colors">
                          {disease.name}
                        </span>
                        <div className="flex items-center gap-2 text-[#C8935F]">
                          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Ver detalhes
                          </span>
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <p className="text-lg">Em breve, mais informações sobre doenças com a letra {selectedLetter.letter}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal 2: Detalhes da Doença */}
      <AnimatePresence>
        {selectedDisease && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={closeDiseaseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
            >
              {/* Header do Modal de Detalhes */}
              <div className="bg-gradient-to-r from-[#C8935F] to-[#E0A878] p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  {selectedDisease.name}
                </h3>
                <button
                  onClick={closeDiseaseModal}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Conteúdo */}
              <div className="p-8 overflow-y-auto max-h-[calc(80vh-120px)]">
                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {selectedDisease.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


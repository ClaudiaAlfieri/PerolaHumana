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
    letter: 'C',
    count: 3,
    diseases: [
      {
        name: 'Cabeça',
        description: `A cabeça está ligada à razão, mas a lógica isolada não resolve tudo. Ignorar as emoções pode gerar desequilíbrios físicos ou acidentes envolvendo a cabeça. Pensamentos rígidos e conflitos familiares profundos podem se manifestar como problemas neurológicos, incluindo tumores.

        Na perspectiva quântica, pensamentos e emoções influenciam diretamente os padrões de energia do corpo. Renovar ideias, perdoar e abrir espaço para perspectivas externas promove flexibilidade mental e harmonia interna, reduzindo tensões físicas e psicológicas. Desconfiança, revolta ou resistência podem criar desequilíbrios que se refletem no cérebro.
        `},
      {
        name: 'Cãibras',
        description: `Cãibras indicam tensão muscular e medo de se soltar, geralmente relacionadas à sensação de controle externo ou à defesa de direitos pessoais. Elas refletem insegurança em avançar ou usar plenamente a própria experiência.

        Do ponto de vista quântico, o corpo reage aos bloqueios emocionais mesmo que a mente consciente não perceba. Trabalhar essas tensões internamente, liberar medo de mudanças e relaxar a mente permite que o corpo recupere flexibilidade, prevenindo ou aliviando as cãibras.
        `},
      {
        name: 'Calvície',
        description: `A queda de cabelo está associada a padrões de tensão emocional e defensiva, orgulho excessivo ou dificuldades em lidar com críticas. Também pode refletir sensibilidade extrema a atitudes alheias, gerando ressentimentos acumulados.

        Na perspectiva quântica, os padrões de energia emocional influenciam diretamente a vitalidade do corpo, incluindo o crescimento capilar. Posturas defensivas, raiva ou isolamento emocional intensificam esses efeitos. Trabalhar a autoestima, liberar ressentimentos e cultivar gratidão e aceitação ajuda a restaurar o equilíbrio e a saúde do couro cabeludo.
        `},
      
    ]
  },
  {
    letter: 'D',
    count: 11,
    diseases: [
       {
        name: 'Daltonismo',
        description: `O daltonismo simboliza dificuldade em perceber ou aceitar a diversidade — de pessoas, experiências ou realidades. Pode indicar rigidez mental, resistência a conselhos e irritação com situações pequenas.

        Do ponto de vista quântico, a mente influencia padrões energéticos que se refletem fisicamente. Cultivar harmonia, gentileza e compreensão reduz essas tensões internas e externas. Trabalhar hábitos mentais positivos permite perceber “todas as cores” da vida, promovendo equilíbrio emocional e físico.          
        `},  
      {
        name: 'Dedo Indicador',
        description: ` Ferimentos no dedo indicador podem refletir acusações internas ou externas. O corpo responde a padrões de energia emocional relacionados a mágoas ou ressentimentos.

        •	Dedo da mão direita: a tensão pode estar relacionada a uma mulher.
        •	Dedo da mão esquerda: a tensão pode estar relacionada a um homem.

        Na ótica quântica, a consciência influencia esses padrões energéticos; identificar e liberar ressentimentos ajuda a restaurar equilíbrio físico e emocional.
        `}, 
      {
        name: 'Dedo Médio',
        description: `Ferimentos no dedo médio estão ligados a tensões relacionadas à sexualidade e à autopercepção. Insatisfação, raiva ou sentimentos de rejeição, tanto em relação a parceiros quanto a si mesmo, podem se manifestar fisicamente neste dedo.

        Reconhecer essas emoções e trabalhar a aceitação e a comunicação interna permite reorganizar a energia do corpo, promovendo equilíbrio e harmonia emocional.
        `},
      {
        name: 'Dedo Anelar',
        description: `O dedo anelar simboliza a união e parcerias afetivas. Lesões ou dores indicam inseguranças ou frustrações em relacionamentos, ou expectativas instáveis sobre futuras conexões afetivas.

        A física quântica mostra que pensamentos e emoções moldam padrões energéticos; ajustar a perspectiva e trabalhar confiança e abertura emocional ajuda a reduzir manifestações físicas e mentais de tensão.
        `},
      {
        name: 'Dedo Mindinho',
        description: `O dedo mindinho representa a família e o ambiente familiar. Ferimentos neste dedo podem indicar:

        •	Mágoas ou pressões em contextos familiares;
        •	Conflitos ou aborrecimentos com pessoas próximas;
        •	Medo de constituir família ou desejo de distanciamento.

        Reconhecer esses sentimentos e liberar a tensão interna reorganiza a energia, prevenindo reflexos físicos de estresse emocional.
        `},
      {
        name: 'Dedo Polegar',
        description: `O polegar está ligado a preocupações intelectuais e profissionais. Lesões ou dores indicam desorganização mental ou emocional que afeta vida pessoal e relacionamentos.

        Praticar relaxamento, avaliar o próprio comportamento e identificar desequilíbrios permite alinhar objetivos profissionais e vida pessoal. Ansiedade ou revolta podem se refletir fisicamente, até nos dedos de familiares, mostrando a influência da energia individual no ambiente. Caminhar com calma e humildade promove reorganização energética e bem-estar.
        `},
      {
        name: 'Dedos dos Pés',
        description: `Os dedos dos pés refletem preocupações sobre o futuro. Medos ou inquietações podem se manifestar como dores ou acidentes nesses dedos.

        Interromper pensamentos negativos e cultivar tranquilidade reorganiza padrões energéticos do corpo. Expressar palavras e pensamentos positivos promove bem-estar, leveza interior e equilíbrio físico-emocional.
        `},
      {
        name: 'Dentes',
        description: `Problemas nos dentes refletem indecisões e conflitos internos. Crianças educadas sob pressão ou com opiniões constantemente anuladas desenvolvem padrões energéticos de dúvida e insegurança, que podem se manifestar fisicamente nos dentes — desalinhamento, fragilidade ou cáries.

        Do ponto de vista quântico, pensamentos e emoções moldam o corpo. Seguir a intuição, reconhecer respostas da própria consciência e tomar decisões conscientes reorganiza padrões energéticos, reduzindo interferências externas e fortalecendo a autoconfiança.

        Problemas de Canal

        Alterações no canal dentário indicam tensões profundas relacionadas a mudanças inesperadas ou traumas emocionais. Inflamações refletem atritos internos e resistência à adaptação de crenças ou planos pessoais.

        Ser paciente e flexível nos pensamentos, aceitar mudanças sem absolutizar antigas verdades e reorganizar padrões mentais e emocionais ajuda a restaurar equilíbrio físico e emocional.
        `},
       {
        name: 'Derrame Cerebral',
        description: `O derrame cerebral está ligado à rigidez mental e temperamento inflexível. Emoções intensas, críticas constantes e teimosia sobre convicções aumentam tensão cerebral.

        Na ótica quântica, a flexibilidade mental influencia diretamente o fluxo energético no cérebro. Liberar a necessidade de ser “dono da verdade”, ouvir e comunicar-se com calma permite reorganizar esses padrões, reduzindo sobrecarga emocional e física.
        `},
       {
        name: 'Diabetes',
        description: `A diabetes pode refletir acúmulo de golpes emocionais e dificuldades em lidar com perdas ou frustrações. Mágoas não resolvidas alteram padrões energéticos relacionados à percepção do “doce” da vida, gerando insegurança e medo do futuro.

        Reconhecer o papel criador da própria mente, perdoar sinceramente e liberar o passado reorganiza o fluxo energético, permitindo encontrar equilíbrio emocional e prazer na vida novamente. Pensamentos e atitudes positivas atraem experiências de bem-estar, promovendo saúde física e emocional.
        `},
       {
        name: 'Dor (em geral)',
        description: `A dor simboliza falta de amparo e sobrecarga emocional. É sinal de que há limites sendo ultrapassados, conflitos não resolvidos ou responsabilidades assumidas de forma excessiva.

        Do ponto de vista quântico, a dor é uma manifestação do desalinhamento interno. Reconhecer sentimentos de culpa, delegar responsabilidades e respeitar o próprio tempo permite reorganizar padrões energéticos e reduzir tensões físicas. Aceitar-se, ter paciência e permitir evolução gradual restaura equilíbrio e bem-estar.
        `},
    ]
  },
  {
    letter: 'E',
    count: 11,
    diseases: [
       {
        name: 'Enjoos',
        description: `Os enjoos refletem desequilíbrios emocionais, ansiedade e sensação de perda de controle. Mudanças ou situações desconfortáveis podem gerar respostas físicas que se manifestam como náuseas. Reconhecer a origem emocional ajuda a restaurar o equilíbrio interno.
      `},  
      {
        name: 'Enjoo no carro',
        description: `Enjoos no carro indicam desconforto com o destino ou com quem te acompanha. Experiências passadas e emoções não resolvidas podem intensificar essa reação. Observar sentimentos antes da viagem e respeitar limites pessoais ajuda a equilibrar corpo e mente.
        `},
       {
        name: 'Enjoo no mar',
        description: `Enjoos no mar refletem resistência a mudanças e instabilidade emocional. Contextos que geram medo, insegurança ou infelicidade podem manifestar-se fisicamente. Enfrentar receios e afirmar necessidades com autenticidade promove equilíbrio emocional e bem-estar corporal.
        `},
       {
        name: 'Enjoos na gravidez',
        description: `Durante a gravidez, corpo e emoções passam por transformações intensas. Náuseas podem indicar ansiedade, medo do futuro ou conflitos familiares não resolvidos. Buscar apoio emocional, aceitar inseguranças com compaixão e fortalecer vínculos positivos contribui para um estado mais tranquilo e equilibrado.
        `},
       {
        name: 'Entorses',
        description: `Entorses refletem rigidez interna, teimosia ou resistência a mudanças. São sinais do corpo pedindo pausa e reorganização dos pensamentos. Conectar-se com os próprios sentimentos e escolhas previne acidentes e promove equilíbrio físico e emocional.
        `},
       {
        name: 'Epilepsia',
        description: `A epilepsia envolve fatores neurológicos e emocionais. Além do acompanhamento médico, práticas de redução de stress, apoio psicológico e manutenção de hábitos equilibrados ajudam a regular os padrões energéticos que afetam o corpo. A espiritualidade, quando adequada, pode fortalecer a resiliência interior, mas deve ser usada com discernimento.
        `},
       {
        name: 'Espinhas e Furúnculos',
        description: `Problemas de pele refletem stress, frustrações, insegurança ou emoções reprimidas. A relação com o ambiente, autoimagem e hábitos emocionais influencia diretamente o corpo. Desenvolver autocuidado, compaixão, autoconhecimento e hábitos positivos reorganiza a energia emocional e melhora o bem-estar físico.
        `},
       {
        name: 'Estafa',
        description: `Estafa física ou mental indica sobrecarga emocional e dificuldade em impor limites. O desejo de corresponder às expectativas externas gera tensão interna. Priorizar autocuidado, aprender a delegar e reconhecer o próprio valor restabelece equilíbrio, melhora a energia vital e reduz impactos físicos do stress.
        `},
       {
        name: 'Estética',
        description: `A tua aparência reflete padrões mentais, emocionais e energéticos. Dores, flacidez, celulite ou desconfortos estéticos são sinais do corpo sobre desequilíbrios internos.

        O cérebro atua como mediador entre consciente, inconsciente e subconsciente:

        •	Consciente: governa decisões e livre-arbítrio.
        •	Inconsciente: executa ordens do subconsciente, mantém funções automáticas do corpo e armazena hábitos repetidos.
        •	Subconsciente: registra pensamentos, emoções e influências ambientais, transmitindo sinais ao inconsciente.

        Os sintomas físicos surgem quando há desalinhamento entre estas camadas. Observar e compreender esses sinais reorganiza padrões energéticos e promove equilíbrio físico e emocional.
        `},
      {
        name: 'Estrabismo',
        description: `O estrabismo em crianças pode refletir conflitos emocionais ou desarmonia parental. Divergências extremas entre os pais projetam tensão no subconsciente da criança, interferindo no desenvolvimento ocular e na percepção de mundo.

        A criança estrábica tende a desenvolver sensibilidade, inteligência elevada ou resistência emocional. Harmonizar o ambiente familiar permite que a criança canalize seu potencial de forma saudável.

        Do ponto de vista quântico, pensamentos e emoções dos pais influenciam padrões energéticos do filho. A criança pode aprender a mediar situações, observar o mundo com análise e serenidade, e direcionar sua vida sem absorver negatividade externa.
        `},
      {
        name: 'Estômago',
        description: `Problemas no estômago refletem dificuldade em “digerir” emoções, críticas ou mudanças. Ansiedade, excesso de autoexigência ou mágoas acumuladas alteram padrões energéticos, gerando azia, dor ou má digestão.

        Praticar aceitação, cultivar pensamentos leves, dialogar de forma gentil consigo mesmo e reservar momentos de prazer e descanso reorganiza energia interna, promovendo equilíbrio físico e emocional.
        `},      
    ]
  },
  {
    letter: 'F',
    count: 4,
    diseases: [
      {
        name: 'Fadiga',
        description: `A fadiga muitas vezes indica falta de amor ou entusiasmo pelo que fazes. Trabalhar com prazer e propósito diminui o peso do cansaço físico. O corpo precisa de motivação e vontade do coração, não apenas de alimento.

        Se te sentes esgotado, observa se a fonte está na forma como fazes o trabalho ou na falta de reconhecimento. Aceita os teus sentimentos e valoriza o que fazes. Trabalhar com amor, sem foco apenas na recompensa, torna tudo mais leve. Se necessário, procura ambientes onde teu talento seja valorizado.
        `},  
      {
        name: 'Febre',
        description: `A febre reflete atrito emocional intenso, muitas vezes raiva contida. Nas crianças, pode indicar tensões familiares inconscientes.

        Respira fundo, relaxa e confia na vida. Aceita opiniões diferentes sem perder tua essência. O equilíbrio surge ao manter calma diante da oposição, assumir responsabilidade pelos teus atos e não pelos dos outros.
        `}, 
       {
        name: 'Fígado',
        description: `O fígado processa, transforma e equilibra energias no corpo. Mágoas, raiva ou recusa de ajuda criam desgaste neste órgão.

        A cura começa ao desenvolver humildade, flexibilidade e abertura ao amor. Soltar velhas dores e aceitar a leveza da vida reequilibra corpo e mente.
        `},
       {
        name: 'Fraturas',
        description: `Fraturas refletem rigidez interna, resistência a ceder ou conflitos com autoridade.

        •	Braço direito: conflito com figuras femininas.
        •	Braço esquerdo: conflito com figuras masculinas.
        •	Sem ligação específica: conflito interno ou crenças limitantes.

        Liberar ressentimentos, confiar em si e encarar obstáculos como degraus permite transformar fraturas em aprendizado e cura.
        `},     
    ]
  },
  {
    letter: 'G',
    count: 4,
    diseases: [
       {
        name: 'Garganta',
        description: `A garganta é o canal de expressão. Inflamações indicam sentimentos reprimidos, dificuldade em falar ou ser ouvido.

        Aprender a expressar ideias, vontades e desconfortos sem medo liberta a energia bloqueada. Criar ambiente de autenticidade permite comunicação clara e saudável.
        `},  
      {
        name: 'Gastrite',
        description: `A gastrite indica ansiedade, preocupações e sensação de falta de controle. O estômago reage mais às emoções do que à comida.

        Pare de remoer dores antigas. Aceite erros como aprendizado. Confie no próprio caminho, solte tentativas de controlar pessoas ou situações, e permita pequenas mudanças de direção para restaurar equilíbrio.
        `}, 
       {
        name: 'Glúteos',
        description: `Os glúteos refletem o quanto assumimos nosso poder e limites. Fraqueza nessa região indica permitir que outros ultrapassem limites ou carregar fardos alheios.

        Aprender a dizer “não”, assumir responsabilidades próprias e estabelecer metas pessoais fortalece tanto os glúteos quanto a postura perante a vida.
        `},
       {
        name: 'Gordura / Obesidade',
        description:`O excesso de peso muitas vezes simboliza proteção emocional ou busca de segurança. Pode refletir sensibilidade extrema, repressão de emoções e mágoas antigas.

        Limpar pensamentos negativos, agir com autonomia, praticar exercícios e enviar mensagens positivas ao subconsciente ajuda a transformar gordura em energia vital. Não se prenda ao passado; concentre-se no presente e nas decisões que fortalecem tua vida.
        `},      
    ]
  },
  {
    letter: 'H',
    count: 6,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      }, 
    ]
  },
  {
    letter: 'J',
    count: 1,
    diseases: [
        {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      }, 
    ]
  },
  {
    letter: 'L',
    count: 2,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },      
    ]
  },
   {
    letter: 'M',
    count: 6,
    diseases: [
       {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },       
    ]
  },
   {
    letter: 'N',
    count: 1,
    diseases: [
       {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },      
    ]
  },
   {
    letter: 'O',
    count: 5,
    diseases: [
       {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },       
    ]
  },
   {
    letter: 'P',
    count: 6,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },       
    ]
  },
   {
    letter: 'R',
    count: 4,
    diseases: [
        {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },       
    ]
  },
   {
    letter: 'S',
    count: 6,
    diseases: [
        {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },      
    ]
  },
   {
    letter: 'T',
    count: 5,
    diseases: [
    {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },       
    ]
  },
   {
    letter: 'U',
    count: 3,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },       
    ]
  },
   {
    letter: 'V',
    count: 6,
    diseases: [
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },  
      {
        name: 'Eczema na cabeça',
        description: 'Novamente  a sofrer de hipertensão.'
      },          
    ]
  },
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


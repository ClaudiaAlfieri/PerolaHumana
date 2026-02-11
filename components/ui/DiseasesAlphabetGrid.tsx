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
      { name: 'Acne', description: 'Descrição detalhada sobre acne...' },
      { name: 'Ansiedade', description: 'Descrição detalhada sobre ansiedade...' },
      // Adicione mais doenças aqui
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


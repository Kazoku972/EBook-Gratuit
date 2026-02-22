import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Controls = ({ currentPage, totalPages, onPageJump, onNext, onPrev }) => {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const chapters = [
    { title: "Couverture", page: 1 },
    { title: "Avant-propos", page: 2 },
    { title: "1. Le Miroir de la Guerrière", page: 4 },
    { title: "🌟 L'Équilibre dans le Chaos", page: 6 },
    { title: "Conclusion", page: 7 },
  ];

  return (
    <>
      {/* FLOATING NAV BAR */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full shadow-lg border border-white/30 z-50">
        <button 
          onClick={() => setIsTocOpen(true)}
          className="p-2 hover:bg-black/5 rounded-full transition-colors text-[#6D8264]"
          aria-label="Sommaire"
        >
          <Menu size={24} />
        </button>
        
        <button 
          onClick={onPrev}
          className="p-2 hover:bg-black/5 rounded-full transition-colors text-[#6D8264] disabled:opacity-30"
          disabled={currentPage === 0}
          aria-label="Page précédente"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="min-w-[80px] text-center font-medium text-gray-700 text-sm">
          Page {currentPage + 1} / {totalPages}
        </div>

        <button 
          onClick={onNext}
          className="p-2 hover:bg-black/5 rounded-full transition-colors text-[#6D8264] disabled:opacity-30"
          disabled={currentPage >= totalPages - 1}
          aria-label="Page suivante"
        >
          <ChevronRight size={24} />
        </button>
      </nav>

      {/* TOC OVERLAY */}
      <AnimatePresence>
        {isTocOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsTocOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F9F7F2] w-full max-w-md rounded-3xl p-8 shadow-2xl relative"
            >
              <button 
                onClick={() => setIsTocOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-serif text-[#B7C6B0] text-center mb-8">Sommaire</h3>
              
              <ul className="space-y-3">
                {chapters.map((chapter, idx) => (
                  <li 
                    key={idx}
                    onClick={() => {
                      onPageJump(chapter.page - 1);
                      setIsTocOpen(false);
                    }}
                    className="bg-white p-4 rounded-xl border border-black/5 cursor-pointer hover:bg-[#B7C6B0]/10 transition-colors font-medium text-gray-700 active:scale-[0.98]"
                  >
                    {chapter.title}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setIsTocOpen(false)}
                className="w-full mt-8 py-4 bg-[#E8A3A8] text-white rounded-xl font-bold hover:bg-[#d6858b] transition-colors shadow-lg shadow-[#E8A3A8]/30"
              >
                Continuer la lecture
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Controls;

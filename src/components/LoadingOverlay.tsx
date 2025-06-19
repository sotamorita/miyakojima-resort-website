import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400"
        >
          <div className="text-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 0, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="mb-8"
            >
              <svg className="w-24 h-24 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </motion.div>
            
            <motion.h2
              className="text-3xl font-bold text-white mb-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              宮古島リゾート
            </motion.h2>
            
            <motion.div
              className="flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;

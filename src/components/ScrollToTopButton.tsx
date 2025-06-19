import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  // スクロール位置を監視して、ボタンの表示/非表示を切り替える
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3 }}
    >
      <ScrollLink
        to="hero"
        smooth={true}
        duration={800}
        className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-colors"
        aria-label="トップへ戻る"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </ScrollLink>
    </motion.div>
  );
};

export default ScrollToTopButton;

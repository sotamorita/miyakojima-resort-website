import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // ナビゲーションリンク
  const navLinks = [
    { name: '旅行概要', target: 'summary' },
    { name: '基本情報', target: 'info' },
    { name: 'ダイビング', target: 'diving' },
    { name: '旅程', target: 'itinerary' },
    { name: 'ホテル', target: 'hotels' },
    { name: '航空券', target: 'flights' },
    { name: '予算・持ち物', target: 'budget' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/images/logo.png" 
              alt="宮古島リゾート" 
              className="h-10 w-10 mr-3"
            />
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                smooth={true}
                duration={800}
                offset={-70}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
                scrolled 
                  ? 'text-gray-700 focus:ring-blue-500' 
                  : 'text-white focus:ring-white'
              }`}
            >
              <span className="sr-only">メニューを開く</span>
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white shadow-lg"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.target}
              to={link.target}
              smooth={true}
              duration={800}
              offset={-70}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;

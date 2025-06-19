import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

// 高解像度画像のインポート
import heroImage1 from '../assets/images/5qA7DRtKMoye.jpg';
import heroImage2 from '../assets/images/X76FuTIv6emp.jpg';
import heroImage3 from '../assets/images/Q9nNOklyfxvh.jpg';

const HeroSection: React.FC = () => {
  // 画像のプリロード
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = [heroImage1, heroImage2, heroImage3].map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
        });
      });
      
      await Promise.all(imagePromises);
    };
    
    preloadImages();
  }, []);

  return (
    <div className="w-full h-screen relative">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroImage1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>
      
      {/* オーバーレイグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 z-10"></div>
      
      {/* コンテンツコンテナ - 中央配置を徹底 */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="max-w-5xl"
            >
              <motion.h1 
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight"
                style={{
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 4px 20px rgba(0, 0, 0, 0.3)',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                宮古島の青と光に包まれる、<br className="hidden md:block" />特別な2泊3日
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto font-light"
                style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                  lineHeight: '1.6'
                }}
              >
                ミヤコブルーと呼ばれる透明度抜群の海と白い砂浜、豊かな自然に囲まれた宮古島で、カップルでの特別な思い出を作りませんか？一人5万円以内で泊まれる厳選ホテルと効率的な2泊3日の旅程で、宮古島の魅力を最大限に体験できます。
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link
                  to="summary"
                  smooth={true}
                  duration={800}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-10 rounded-full inline-block transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer text-lg"
                  style={{ boxShadow: '0 4px 14px rgba(0, 149, 255, 0.4)' }}
                >
                  旅の詳細を見る
                </Link>
                
                <Link
                  to="itinerary"
                  smooth={true}
                  duration={1000}
                  className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full inline-block transition-all duration-300 transform hover:scale-105 cursor-pointer text-lg"
                >
                  旅程プランへ
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.5,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center z-20"
      >
        <div className="flex flex-col items-center">
          <p className="mb-2 text-sm font-medium tracking-wider">スクロールして探索</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </motion.div>
      
      {/* 右下のハイライト */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white text-left hidden md:block z-20"
        style={{ maxWidth: '280px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}
      >
        <h3 className="text-lg font-bold mb-2">10月の宮古島</h3>
        <p className="text-sm">
          台風シーズン終わりで天候安定、平均気温25〜28℃。
          海水温も25〜27℃と温かく、マリンアクティビティに最適な時期です。
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;

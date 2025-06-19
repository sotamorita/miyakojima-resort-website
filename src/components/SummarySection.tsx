import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

// 画像のインポート
import beachImage from '../assets/images/1Gqo8f4YzJ4p.jpg';
import resortImage from '../assets/images/m8QfyMvb3Aeq.webp';

const SummarySection: React.FC = () => {
  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // カウントアップアニメーション用のフック
  const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
    const [count, setCount] = React.useState(0);
    const [isInView, setIsInView] = React.useState(false);

    React.useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      let animationFrame: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);

      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return (
      <InView onChange={setIsInView} threshold={0.5}>
        <span className="text-4xl font-bold text-blue-600">{count}+</span>
      </InView>
    );
  };

  return (
    <section id="summary" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            宮古島の青と光に包まれる、特別な2泊3日
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            ミヤコブルーと呼ばれる透明度抜群の海と白い砂浜、豊かな自然に囲まれた宮古島で、
            カップルでの特別な思い出を作りませんか？一人5万円以内で泊まれる厳選ホテルと
            効率的な2泊3日の旅程で、宮古島の魅力を最大限に体験できます。
          </motion.p>
        </motion.div>

        {/* 統計カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform hover:scale-105"
          >
            <div className="mb-4">
              <CountUp end={17} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">美しいビーチ</h3>
            <p className="text-gray-600">透明度抜群の海と白い砂浜が広がる絶景スポット</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform hover:scale-105"
          >
            <div className="mb-4">
              <CountUp end={25} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">ダイビングスポット</h3>
            <p className="text-gray-600">初心者から上級者まで楽しめる多彩な海中世界</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform hover:scale-105"
          >
            <div className="mb-4">
              <CountUp end={30} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">グルメスポット</h3>
            <p className="text-gray-600">地元の新鮮な食材を使った絶品料理の数々</p>
          </motion.div>
        </div>

        {/* 特徴カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
              <img 
                src={beachImage} 
                alt="宮古島のビーチ" 
                className="w-full h-64 object-cover transform transition-transform hover:scale-110 duration-700"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">自然の美しさを満喫</h3>
              <p className="text-gray-600 mb-4">
                世界有数の透明度を誇る海と白い砂浜、豊かな自然が織りなす絶景を体験。
                カップルでのんびり過ごすビーチタイムや、感動的なサンセットビューイングも。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  与那覇前浜ビーチの真っ白な砂浜
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  来間大橋からの絶景パノラマ
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  東平安名崎の断崖絶壁と灯台
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse gap-6 items-center"
          >
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
              <img 
                src={resortImage} 
                alt="宮古島のリゾート" 
                className="w-full h-64 object-cover transform transition-transform hover:scale-110 duration-700"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">カップルの特別な時間</h3>
              <p className="text-gray-600 mb-4">
                一人5万円以内で泊まれる厳選ホテルで快適に過ごしながら、
                二人だけの特別な思い出を作るアクティビティやロマンチックなスポットをご紹介。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  二人で体験するスキューバダイビング
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  サンセットを眺めるロマンチックディナー
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  レンタカーでの島内ドライブ
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;

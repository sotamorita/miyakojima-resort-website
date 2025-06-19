import React from 'react';
import { motion } from 'framer-motion';

const FlightSection: React.FC = () => {
  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // 航空券データ
  const flightData = [
    {
      from: '東京（羽田/成田）',
      airlines: ['ANA', 'JAL', 'Peach'],
      price: '往復 15,000円〜45,000円',
      time: '約3時間10分',
      tips: [
        '早割で2ヶ月前までに予約すると最大50%OFF',
        '平日の便は比較的安い傾向あり',
        'ANAマイルやJALマイルの特典航空券も検討価値あり'
      ]
    },
    {
      from: '大阪（関西/伊丹）',
      airlines: ['JAL', 'Peach'],
      price: '往復 12,000円〜40,000円',
      time: '約2時間30分',
      tips: [
        'LCCのPeachを利用すると格安で行ける',
        '伊丹発着便は少なく、関西空港発着が主流',
        '早朝・深夜便は比較的安い'
      ]
    },
    {
      from: '名古屋（中部）',
      airlines: ['JAL'],
      price: '往復 15,000円〜42,000円',
      time: '約2時間40分',
      tips: [
        '直行便の本数が少ないため早めの予約がおすすめ',
        '那覇経由の乗り継ぎ便も選択肢に'
      ]
    },
    {
      from: '福岡',
      airlines: ['JAL'],
      price: '往復 10,000円〜35,000円',
      time: '約2時間',
      tips: [
        '直行便の本数が限られるため早めの予約を',
        '那覇経由の乗り継ぎ便も検討価値あり'
      ]
    },
    {
      from: '那覇',
      airlines: ['ANA', 'JAL', 'Peach'],
      price: '往復 6,000円〜20,000円',
      time: '約45分',
      tips: [
        '本数が多く比較的予約が取りやすい',
        '沖縄本島と宮古島を組み合わせた旅程も人気'
      ]
    }
  ];

  // 予約のコツ
  const bookingTips = [
    {
      title: '早期予約がお得',
      description: '2〜3ヶ月前の予約で最大50%OFFになることも。特に10月は比較的空いている時期なので、早めに予約すればお得に行ける可能性が高い。',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: '複数サイトで比較',
      description: '航空会社の公式サイトだけでなく、スカイスキャナー、エクスペディア、トリップドットコムなど複数の予約サイトで料金を比較するのがおすすめ。',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      )
    },
    {
      title: '平日・早朝便を狙う',
      description: '週末や祝日を避け、平日の便を選ぶとさらに安くなることが多い。また、早朝便や深夜便も比較的安価な傾向がある。',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: 'LCCも検討',
      description: 'Peachなどの格安航空会社も宮古島への直行便を運航している。手荷物や座席指定などのオプションを最小限にすれば、さらに安く抑えられる。',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="flights" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            格安航空券情報
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            宮古島への格安航空券情報と予約のコツをご紹介。
            主要都市からのアクセス方法や、お得に予約するためのポイントを解説します。
          </motion.p>
        </motion.div>

        {/* 航空券情報 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">主要都市からの航空券情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flightData.map((flight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-4 text-white">
                  <h4 className="text-xl font-bold">{flight.from}</h4>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="font-semibold text-blue-600">{flight.price}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-700">{flight.time}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{flight.airlines.join(', ')}</span>
                    </div>
                  </div>
                  
                  <h5 className="font-semibold text-gray-800 mb-2">予約のポイント</h5>
                  <ul className="space-y-1">
                    {flight.tips.map((tip, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <svg className="w-4 h-4 mr-1 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 予約のコツ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">航空券予約のコツ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bookingTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 flex"
              >
                <div className="mr-4 flex-shrink-0">
                  {tip.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{tip.title}</h4>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 10月の航空券特集 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">10月の宮古島航空券</h3>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            10月は夏休みシーズンが終わり、比較的空いている時期のため、航空券も予約しやすく料金もリーズナブルになる傾向があります。
            台風シーズンの終わりに差し掛かるため、9月に比べると天候も安定してきます。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-blue-600 mb-2">料金の目安（10月）</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-700">東京発</span>
                  <span className="font-semibold">20,000円〜35,000円</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">大阪発</span>
                  <span className="font-semibold">18,000円〜30,000円</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">名古屋発</span>
                  <span className="font-semibold">20,000円〜32,000円</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">福岡発</span>
                  <span className="font-semibold">15,000円〜28,000円</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">那覇発</span>
                  <span className="font-semibold">8,000円〜15,000円</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">※料金は時期や予約状況により変動します</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-blue-600 mb-2">おすすめ予約時期</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>最安値を狙うなら</strong>: 3〜4ヶ月前
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>確実に席を確保するなら</strong>: 2ヶ月前まで
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>直前でも狙い目</strong>: 10月上旬・中旬の平日
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-blue-600 mb-2">おすすめ予約サイト</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">スカイスキャナー</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">エクスペディア</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">各航空会社公式サイト</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">トリップドットコム</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">楽天トラベル</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlightSection;

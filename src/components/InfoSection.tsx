import React from 'react';
import { motion } from 'framer-motion';

const InfoSection: React.FC = () => {
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

  // 宮古島の基本情報
  const basicInfo = {
    location: '沖縄本島から南西に約300km、東京からは約2,000km離れた場所に位置する。',
    area: '約159平方キロメートル（沖縄県内では沖縄本島、西表島に次いで3番目の大きさ）',
    population: '約5万5千人（2023年現在）',
    climate: '亜熱帯海洋性気候で、年間平均気温は約23℃。夏は30℃前後、冬でも15℃以上と温暖。',
    beaches: '与那覇前浜ビーチ、砂山ビーチ、吉野海岸など美しいビーチが点在。',
    attractions: '東平安名崎、伊良部大橋、池間大橋、来間大橋、宮古島海中公園など。'
  };

  // 観光スポット
  const attractions = [
    {
      name: '与那覇前浜ビーチ',
      description: '「東洋一美しい」と称される真っ白な砂浜と透明度の高い海が特徴のビーチ。遠浅で波も穏やかなため、家族連れにも人気。',
      type: 'ビーチ',
      location: '宮古島市下地与那覇',
      bestTime: '通年（特に4月〜10月）',
      image: '/src/assets/images/beach1.jpg'
    },
    {
      name: '東平安名崎',
      description: '宮古島の最東端に位置する岬。断崖絶壁から望む太平洋の絶景は圧巻。灯台までの遊歩道からは、エメラルドグリーンの海と青い空のコントラストが美しい。',
      type: '自然景観',
      location: '宮古島市城辺字保良',
      bestTime: '通年（日の出鑑賞におすすめ）',
      image: '/src/assets/images/cape.jpg'
    },
    {
      name: '伊良部大橋',
      description: '宮古島と伊良部島を結ぶ、日本最長の無料橋（全長3,540m）。橋の上からは美しい海の景色を一望でき、ドライブスポットとしても人気。',
      type: '橋・景観',
      location: '宮古島市平良〜伊良部島',
      bestTime: '通年',
      image: '/src/assets/images/bridge.jpg'
    },
    {
      name: '宮古島海中公園',
      description: 'グラスボートで美しいサンゴ礁や熱帯魚を観察できる施設。水中展望塔からは、潜らずに海中の様子を見ることができる。',
      type: 'アクティビティ',
      location: '宮古島市平良狩俣',
      bestTime: '4月〜10月',
      image: '/src/assets/images/underwater.jpg'
    },
    {
      name: '砂山ビーチ',
      description: '白い砂浜と透明度の高い海が美しいビーチ。サンゴのかけらでできた砂は細かく、肌触りが良い。シュノーケリングにも最適。',
      type: 'ビーチ',
      location: '宮古島市下地来間',
      bestTime: '4月〜10月',
      image: '/src/assets/images/beach2.jpg'
    },
    {
      name: '池間大橋・池間島',
      description: '宮古島と池間島を結ぶ橋。池間島には昔ながらの沖縄の風景が残り、のどかな雰囲気が魅力。池間大橋からの夕日は絶景。',
      type: '橋・島',
      location: '宮古島市平良池間',
      bestTime: '通年（夕方がおすすめ）',
      image: '/src/assets/images/ikema.jpg'
    }
  ];

  // 10月の宮古島情報
  const octoberInfo = {
    weather: '台風シーズンの終わりに差し掛かり、天候が安定してくる時期。晴れの日が多く、湿度も下がり始め、過ごしやすい気候になります。',
    temperature: '平均気温は25〜28℃程度。日中は暑いですが、朝晩は少し涼しくなり始めます。',
    seaTemp: '海水温は25〜27℃程度で、まだ十分に海水浴やマリンアクティビティを楽しめます。',
    rainfall: '9月に比べると雨は少なくなりますが、短時間のスコールがあることも。台風の接近に注意が必要です。',
    crowds: '夏休みシーズンが終わり、比較的空いている時期。ホテルや観光スポットも混雑が少なく、ゆったり楽しめます。',
    events: '10月には「宮古島まつり」が開催されることがあり、伝統芸能や音楽、パレードなどが楽しめます。'
  };

  return (
    <section id="info" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            宮古島の基本情報
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            美しい海と白い砂浜、豊かな自然に恵まれた宮古島。
            旅行前に知っておきたい基本情報と10月の気候・観光情報をご紹介します。
          </motion.p>
        </motion.div>

        {/* 基本情報 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">宮古島について</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-gray-800">基本データ</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="w-24 flex-shrink-0 font-semibold text-blue-600">位置</div>
                    <div className="text-gray-700">{basicInfo.location}</div>
                  </li>
                  <li className="flex">
                    <div className="w-24 flex-shrink-0 font-semibold text-blue-600">面積</div>
                    <div className="text-gray-700">{basicInfo.area}</div>
                  </li>
                  <li className="flex">
                    <div className="w-24 flex-shrink-0 font-semibold text-blue-600">人口</div>
                    <div className="text-gray-700">{basicInfo.population}</div>
                  </li>
                  <li className="flex">
                    <div className="w-24 flex-shrink-0 font-semibold text-blue-600">気候</div>
                    <div className="text-gray-700">{basicInfo.climate}</div>
                  </li>
                  <li className="flex">
                    <div className="w-24 flex-shrink-0 font-semibold text-blue-600">ビーチ</div>
                    <div className="text-gray-700">{basicInfo.beaches}</div>
                  </li>
                  <li className="flex">
                    <div className="w-24 flex-shrink-0 font-semibold text-blue-600">見どころ</div>
                    <div className="text-gray-700">{basicInfo.attractions}</div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-80 md:h-full rounded-xl overflow-hidden shadow-lg"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(/src/assets/images/miyako_map.jpg)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h4 className="text-xl font-bold mb-2">宮古島と周辺の島々</h4>
                <p className="text-sm">
                  宮古島は本島の他に、伊良部島、下地島、来間島、池間島などの周辺の島々で構成されています。
                  それぞれの島は橋で結ばれており、レンタカーで気軽に行き来できます。
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 10月の宮古島 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">10月の宮古島</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">気候・観光シーズン</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-600">天候: </span>
                      <span className="text-gray-700">{octoberInfo.weather}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-600">気温: </span>
                      <span className="text-gray-700">{octoberInfo.temperature}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-600">海水温: </span>
                      <span className="text-gray-700">{octoberInfo.seaTemp}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-600">降水量: </span>
                      <span className="text-gray-700">{octoberInfo.rainfall}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">観光・イベント</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-600">混雑状況: </span>
                      <span className="text-gray-700">{octoberInfo.crowds}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-600">イベント: </span>
                      <span className="text-gray-700">{octoberInfo.events}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-600">おすすめポイント: </span>
                      <span className="text-gray-700">
                        10月は夏の暑さが和らぎ、海も十分に楽しめる絶好のシーズン。台風の影響が少なくなり始め、観光客も少ないため、ゆったりと島時間を楽しめます。
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white bg-opacity-70 rounded-lg">
              <h5 className="font-semibold text-blue-600 mb-2">10月の服装・持ち物</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h6 className="font-semibold text-gray-800">日中</h6>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 半袖Tシャツ、半ズボン</li>
                    <li>• 水着、ラッシュガード</li>
                    <li>• サンダル</li>
                    <li>• 日焼け止め（SPF50+）</li>
                    <li>• サングラス、帽子</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold text-gray-800">朝晩</h6>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 薄手の長袖シャツ</li>
                    <li>• 軽いカーディガン</li>
                    <li>• 長ズボン</li>
                    <li>• 虫除けスプレー</li>
                    <li>• 折りたたみ傘（スコール対策）</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 観光スポット */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">主要観光スポット</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((spot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden img-hover-zoom">
                  <div 
                    className="h-full w-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${spot.image})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }}
                  ></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-800">{spot.name}</h4>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {spot.type}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">{spot.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{spot.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>ベストシーズン: {spot.bestTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

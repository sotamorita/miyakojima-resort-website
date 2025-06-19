import React from 'react';
import { motion } from 'framer-motion';

const ItinerarySection: React.FC = () => {
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

  // 旅程データ
  const itinerary = [
    {
      day: 1,
      title: '宮古島到着・東部エリア観光',
      schedule: [
        {
          time: '午前',
          activity: '宮古空港到着',
          description: '到着後、空港内のレンタカーカウンターでレンタカーを借りる。',
          tips: '事前予約がおすすめ。10月は比較的空いているが、人気の車種は早めに予約を。'
        },
        {
          time: '昼',
          activity: 'ホテルチェックイン・ランチ',
          description: '宿泊先のホテルにチェックイン。ホテル内またはホテル近くのレストランでランチ。',
          tips: '多くのホテルは15時チェックインだが、荷物だけ預けることができる場合が多い。'
        },
        {
          time: '午後',
          activity: '東平安名崎・池間島観光',
          description: '宮古島東部の絶景スポット「東平安名崎」を訪れた後、池間大橋を渡って池間島へ。のどかな島の雰囲気を楽しむ。',
          tips: '東平安名崎の灯台までは徒歩約15分。歩きやすい靴で行くことをおすすめ。'
        },
        {
          time: '夕方',
          activity: '池間大橋からの夕日鑑賞',
          description: '池間大橋から見る夕日は絶景。橋のたもとに車を停めて、二人で夕日を眺める。',
          tips: '日没時間は季節によって変わるので、事前に確認しておくと良い。10月は17:30〜18:00頃。'
        },
        {
          time: '夜',
          activity: '宮古島市街地で夕食',
          description: '平良港周辺の飲食店で、新鮮な海鮮料理や宮古そばなどの郷土料理を楽しむ。',
          tips: '「あがり浜」エリアには地元で人気の居酒屋が多い。'
        }
      ],
      accommodation: {
        name: '宮古島東急ホテル＆リゾーツ',
        features: '全室オーシャンビュー、プライベートビーチ、屋外プール'
      }
    },
    {
      day: 2,
      title: 'スキューバダイビング・南部エリア観光',
      schedule: [
        {
          time: '午前',
          activity: '体験ダイビング',
          description: '予約したダイビングショップに集合し、体験ダイビングを楽しむ。初心者向けの浅いポイントで、インストラクターが丁寧に指導してくれる。',
          tips: '前日の飲酒は控えめに。朝食は軽めに済ませるのがおすすめ。'
        },
        {
          time: '昼',
          activity: '与那覇前浜ビーチでランチ・ビーチタイム',
          description: '「東洋一美しい」と称される与那覇前浜ビーチでランチ。その後、ビーチでのんびり過ごす。',
          tips: 'ビーチ沿いには食事ができる施設が少ないので、お弁当を持参するか、事前に購入しておくと安心。'
        },
        {
          time: '午後',
          activity: '来間島観光',
          description: '来間大橋を渡って来間島へ。竜宮城展望台からの眺めは絶景。砂山ビーチでシュノーケリングも楽しめる。',
          tips: '竜宮城展望台からは、エメラルドグリーンの海と白い砂浜のコントラストが美しい。'
        },
        {
          time: '夕方',
          activity: '来間大橋からの夕日鑑賞',
          description: '来間大橋から見る夕日も絶景。橋の上から宮古ブルーの海に沈む夕日を眺める。',
          tips: '来間大橋には駐車スペースがあるので、車を停めて景色を楽しめる。'
        },
        {
          time: '夜',
          activity: 'ホテル内レストランで夕食',
          description: 'ホテルのレストランで、地元の食材を使った特別ディナーを楽しむ。',
          tips: '人気レストランは予約が必要なことが多いので、事前に確認を。'
        }
      ],
      accommodation: {
        name: '宮古島東急ホテル＆リゾーツ',
        features: '全室オーシャンビュー、プライベートビーチ、屋外プール'
      }
    },
    {
      day: 3,
      title: '西部エリア観光・帰路',
      schedule: [
        {
          time: '午前',
          activity: 'ホテルチェックアウト・伊良部島観光',
          description: 'ホテルをチェックアウト後、伊良部大橋を渡って伊良部島へ。下地島の17ENDや通り池など、絶景スポットを巡る。',
          tips: 'チェックアウトは10時のホテルが多い。荷物はフロントに預けられることが多いので確認を。'
        },
        {
          time: '昼',
          activity: '佐和田の浜でランチ・ビーチタイム',
          description: '伊良部島の美しいビーチ「佐和田の浜」で最後のビーチタイムを楽しむ。近くの食堂でランチ。',
          tips: '佐和田の浜は透明度が高く、シュノーケリングにも最適。'
        },
        {
          time: '午後',
          activity: '宮古島市街地でお土産購入',
          description: '宮古島市街地に戻り、お土産を購入。宮古上布や泡盛、黒糖などが人気。',
          tips: '「ミンサー織り」は宮古島の伝統工芸品で、カップルへのお土産に人気。'
        },
        {
          time: '夕方',
          activity: 'レンタカー返却・宮古空港から出発',
          description: 'レンタカーを返却し、宮古空港から帰路につく。',
          tips: '空港には2時間前には到着するようにスケジュールを組むのがおすすめ。'
        }
      ],
      accommodation: {
        name: '-',
        features: '-'
      }
    }
  ];

  // おすすめレストラン
  const restaurants = [
    {
      name: '宮古島とぅんからや',
      cuisine: '沖縄料理・居酒屋',
      location: '宮古島市平良字西里267',
      price: '3,000円〜5,000円',
      recommendation: '宮古牛のステーキ、島らっきょうの天ぷら',
      description: '地元の食材を使った沖縄料理が楽しめる人気店。アットホームな雰囲気で、地元の人にも観光客にも人気。',
      mapUrl: 'https://maps.google.com/maps?q=宮古島市平良字西里267'
    },
    {
      name: '食堂 島の恵み',
      cuisine: '海鮮・定食',
      location: '宮古島市平良字下里108-5',
      price: '1,000円〜2,500円',
      recommendation: '海鮮丼、宮古そば',
      description: 'リーズナブルな価格で新鮮な海鮮料理が楽しめる食堂。地元の漁師から直接仕入れた魚介類を使用。',
      mapUrl: 'https://maps.google.com/maps?q=宮古島市平良字下里108-5'
    },
    {
      name: 'カフェ くるくま',
      cuisine: 'カフェ・軽食',
      location: '宮古島市城辺字砂川1308-1',
      price: '800円〜1,500円',
      recommendation: 'タコライス、マンゴースムージー',
      description: '東平安名崎近くにある人気カフェ。テラス席からは海が見え、ランチやカフェタイムにぴったり。',
      mapUrl: 'https://maps.google.com/maps?q=宮古島市城辺字砂川1308-1'
    },
    {
      name: 'レストラン海風',
      cuisine: '創作料理・イタリアン',
      location: '宮古島市下地与那覇1199',
      price: '3,500円〜7,000円',
      recommendation: '島野菜のパスタ、伊良部島産車エビのアクアパッツァ',
      description: '与那覇前浜ビーチ近くのリゾートレストラン。地元食材を使った創作料理とオーシャンビューが魅力。',
      mapUrl: 'https://maps.google.com/maps?q=宮古島市下地与那覇1199'
    },
    {
      name: '居酒屋 がじゅまる',
      cuisine: '沖縄料理・居酒屋',
      location: '宮古島市平良字西里154',
      price: '3,000円〜5,000円',
      recommendation: '島豆腐の厚揚げ、ミミガー（豚の耳の酢の物）',
      description: '地元の人で賑わう本格沖縄居酒屋。活気ある雰囲気の中で、本場の沖縄料理と泡盛が楽しめる。',
      mapUrl: 'https://maps.google.com/maps?q=宮古島市平良字西里154'
    }
  ];

  return (
    <section id="itinerary" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            2泊3日 モデルプラン
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            レンタカーで巡る宮古島の魅力を凝縮した2泊3日の旅程プラン。
            スキューバダイビングや絶景スポット、グルメまで、カップルで楽しめる充実の内容です。
          </motion.p>
        </motion.div>

        {/* 旅程表 */}
        <div className="mb-20">
          <div className="relative">
            {itinerary.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="mb-12"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                    {day.day}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{day.title}</h3>
                </div>
                
                <div className="ml-6">
                  <div className="relative border-l-2 border-blue-200 pl-8 pb-8">
                    {day.schedule.map((item, i) => (
                      <div key={i} className="mb-8 relative">
                        <div className="absolute -left-10 top-2 bg-white border-2 border-blue-400 rounded-full w-6 h-6 flex items-center justify-center">
                          <div className="bg-blue-400 rounded-full w-3 h-3"></div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                          <div className="flex flex-wrap items-start justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-800">{item.time} | {item.activity}</h4>
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1">
                              {item.time}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-4">{item.description}</p>
                          <div className="flex items-start">
                            <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p className="text-sm text-gray-600 italic">{item.tips}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {day.accommodation.name !== '-' && (
                      <div className="relative">
                        <div className="absolute -left-10 top-0 bg-white border-2 border-pink-400 rounded-full w-6 h-6 flex items-center justify-center">
                          <div className="bg-pink-400 rounded-full w-3 h-3"></div>
                        </div>
                        <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl shadow-md p-6">
                          <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                            <h4 className="text-lg font-bold text-gray-800">宿泊: {day.accommodation.name}</h4>
                          </div>
                          <p className="text-gray-700 ml-7">{day.accommodation.features}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* おすすめレストラン */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">おすすめレストラン</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-4">
                  <h4 className="text-xl font-bold text-white">{restaurant.name}</h4>
                  <span className="inline-block bg-white bg-opacity-30 text-white text-sm px-3 py-1 rounded-full">
                    {restaurant.cuisine}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-gray-700">{restaurant.location}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-700">予算: {restaurant.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{restaurant.description}</p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">おすすめメニュー</h5>
                    <p className="text-blue-600">{restaurant.recommendation}</p>
                  </div>
                  <a
                    href={restaurant.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all duration-200 text-sm font-medium mt-2"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    地図で見る
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 旅行のポイント */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">旅行のポイント</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="flex items-center text-xl font-bold mb-4 text-gray-800">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                効率的な周遊ルート
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>1日目は東部エリア、2日目は南部エリア、3日目は西部エリアと、エリアごとに分けて観光することで移動時間を短縮。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>宮古島は思ったより広いので、1日に詰め込みすぎないスケジュールがおすすめ。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>夕日スポットは事前にチェックしておき、時間に余裕を持って訪れるのがおすすめ。</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="flex items-center text-xl font-bold mb-4 text-gray-800">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                時間配分のコツ
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>ダイビングは午前中に行い、午後はビーチでのんびり過ごすのがおすすめ。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>10月は日没が早まるので、夕日スポットには17:00頃までに到着するのが理想的。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>最終日は飛行機の時間に余裕を持ったスケジュールを組むことが大切。</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="flex items-center text-xl font-bold mb-4 text-gray-800">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                カップルにおすすめのスポット
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-pink-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>来間大橋からの夕日</strong>: 二人で見る夕日は特別な思い出に。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-pink-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>与那覇前浜ビーチでのピクニック</strong>: 白い砂浜でのんびり二人の時間を。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-pink-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>カップルダイビング</strong>: 二人で海中世界を探検する特別な体験。</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="flex items-center text-xl font-bold mb-4 text-gray-800">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                天候不良時の代替プラン
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-yellow-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>宮古島市総合博物館</strong>: 島の歴史や文化を学べる屋内施設。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-yellow-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>宮古織物協同組合</strong>: 伝統工芸「宮古上布」の見学や体験ができる。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-yellow-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>多良川酒造</strong>: 宮古島の泡盛蔵元見学とテイスティング。</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ItinerarySection;

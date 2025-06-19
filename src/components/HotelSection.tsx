import React from 'react';
import { motion } from 'framer-motion';

const HotelSection: React.FC = () => {
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

  // ホテルデータ
  const hotels = [
    {
      name: '宮古島東急ホテル＆リゾーツ',
      price: '22,000円〜/泊',
      location: '宮古島市下地字与那覇914',
      features: [
        'プライベートビーチ',
        '全室オーシャンビュー',
        '屋外プール',
        'レストラン4軒',
        'スパ施設'
      ],
      description: '宮古島の美しい海を一望できる高台に位置するリゾートホテル。全室オーシャンビューで、プライベートビーチへも直接アクセス可能。カップルにおすすめのディナープランや、サンセットを眺められるバーラウンジも人気。',
      couplePoints: [
        'カップル向けディナープラン',
        'サンセットビューのバーラウンジ',
        'カップルスパトリートメント'
      ],
      rating: 4.5,
      image: '/src/assets/images/hotel1.jpg'
    },
    {
      name: 'アラマンダ インギャーコーラルヴィレッジ',
      price: '30,546円〜/泊',
      location: '宮古島市上野字宮国775-1',
      features: [
        'コテージタイプ',
        'プライベートプール付き客室あり',
        'BBQ施設',
        'マリンアクティビティ',
        '無料朝食'
      ],
      description: '宮古島の自然に囲まれたコテージタイプのリゾート。プライベート感あふれる空間で、カップルでのんびり過ごすのに最適。一部の客室にはプライベートプールも完備。敷地内からビーチへのアクセスも良好。',
      couplePoints: [
        'プライベートプール付き客室',
        '星空観察ツアー',
        'カップル向けBBQプラン'
      ],
      rating: 4.7,
      image: '/src/assets/images/hotel2.jpg'
    },
    {
      name: '宮古島来間リゾート シーウッドホテル',
      price: '28,000円〜/泊',
      location: '宮古島市下地来間498',
      features: [
        '来間島の静かな環境',
        '来間大橋を一望',
        'インフィニティプール',
        'レンタサイクル',
        '島料理レストラン'
      ],
      description: '来間島に位置する静かなリゾートホテル。宮古島本島からは来間大橋を渡ってアクセス。インフィニティプールからの眺めは絶景で、特に夕日が美しい。島ならではの静けさを楽しみたいカップルに最適。',
      couplePoints: [
        'サンセットが見えるインフィニティプール',
        '来間大橋を望むカフェ',
        '星空ディナー'
      ],
      rating: 4.6,
      image: '/src/assets/images/hotel3.jpg'
    },
    {
      name: 'ホテルブリーズベイマリーナ',
      price: '24,000円〜/泊',
      location: '宮古島市平良字下里108-7',
      features: [
        '市街地に近い立地',
        'マリーナビュー',
        '天然温泉大浴場',
        'バイキングレストラン',
        '無料シャトルバス'
      ],
      description: '宮古島の市街地に近く、観光やショッピングにも便利なロケーション。マリーナを望む客室からの眺めは格別。天然温泉の大浴場も完備しており、観光で疲れた体を癒せる。レストランの島料理バイキングも人気。',
      couplePoints: [
        '展望露天風呂',
        'マリーナビューの部屋',
        '記念日プラン'
      ],
      rating: 4.3,
      image: '/src/assets/images/hotel4.jpg'
    },
    {
      name: 'LEO癒リゾート宮古島 Pool&Villa',
      price: '36,000円〜/泊',
      location: '宮古島市城辺字長間1484-1',
      features: [
        '全室プライベートプール付き',
        'ヴィラタイプ',
        'プライベートガーデン',
        'BBQセット無料貸出',
        '朝食デリバリー'
      ],
      description: '全室にプライベートプールとガーデンを備えた贅沢なヴィラリゾート。他の客室と干渉することなく、二人だけの特別な時間を過ごせる。朝食は部屋まで届けてくれるサービスもあり、プライバシーを重視したい方に最適。',
      couplePoints: [
        'プライベートプール付きヴィラ',
        'カップルマッサージ',
        'サプライズケーキ手配可能'
      ],
      rating: 4.8,
      image: '/src/assets/images/hotel5.jpg'
    }
  ];

  // 予約のコツ
  const bookingTips = [
    {
      title: '早期予約割引を活用',
      description: '多くのホテルでは、2〜3ヶ月前の予約で10〜20%の割引を適用しています。特に10月は比較的空いている時期ですが、人気ホテルは早めに埋まることも。',
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: '公式サイト予約がお得なことも',
      description: '予約サイト経由ではなく、ホテルの公式サイトから予約すると、特典が付いたり、より安い料金プランが見つかることがあります。必ず比較してみましょう。',
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      )
    },
    {
      title: '平日利用でさらにお得に',
      description: '週末や祝日を避け、平日に宿泊すると料金が10〜30%安くなることがあります。また、チェックイン・チェックアウト時間の混雑も避けられます。',
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: '記念日・特別プランをチェック',
      description: 'カップルでの旅行なら、記念日プランやカップル向け特別プランをチェック。通常料金とあまり変わらない価格で、ケーキやスパークリングワインなどの特典が付くことも。',
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="hotels" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            カップル向けホテル情報
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            宮古島の美しい景色を楽しめる、一人5万円以内で泊まれる中価格帯のホテル・リゾートをご紹介。
            カップルでの滞在に最適な特別な空間で、思い出に残る宮古島の休日を。
          </motion.p>
        </motion.div>

        {/* ホテル一覧 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">おすすめホテル</h3>
          
          {hotels.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-blue-100 flex items-center justify-center p-6">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden img-hover-zoom">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${hotel.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                      }}
                    ></div>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-gray-800">{hotel.name}</h4>
                    <div className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span>{hotel.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-gray-600">{hotel.location}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-blue-600 font-semibold">{hotel.price}</span>
                    <span className="text-gray-500 ml-2">（2泊3日：{parseInt(hotel.price.replace(/[^0-9]/g, '')) * 2}円〜）</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{hotel.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">施設・特徴</h5>
                      <ul className="space-y-1">
                        {hotel.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">カップルにおすすめのポイント</h5>
                      <ul className="space-y-1">
                        {hotel.couplePoints.map((point, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <svg className="w-4 h-4 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            <span className="text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                    詳細を見る
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 予約のコツ */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">ホテル予約のコツ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>

        {/* 予算別おすすめプラン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">予算別おすすめプラン</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h4 className="text-xl font-bold">エコノミープラン</h4>
                <p className="text-2xl font-bold mt-1">15,000円〜25,000円/泊</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  リーズナブルな価格でも宮古島の美しい景色を楽しめるプラン。市街地に近いホテルや、設備はシンプルでも立地の良いペンションなどがおすすめ。
                </p>
                <h5 className="font-semibold text-gray-800 mb-2">おすすめホテル</h5>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">ホテルピースアイランド宮古島</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">ホテルアトールエメラルド宮古島</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">ペンション美ら海</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">
                  ※朝食付きプランを選ぶと、食費の節約になります。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-700 text-white p-4">
                <h4 className="text-xl font-bold">スタンダードプラン</h4>
                <p className="text-2xl font-bold mt-1">25,000円〜35,000円/泊</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  快適な設備とサービスを備えた中価格帯のホテル。プールやレストランなどの施設も充実しており、カップルでのんびり過ごすのに最適。
                </p>
                <h5 className="font-semibold text-gray-800 mb-2">おすすめホテル</h5>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">宮古島東急ホテル＆リゾーツ</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">ホテルブリーズベイマリーナ</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">宮古島来間リゾート シーウッドホテル</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">
                  ※カップル向け特典付きプランをチェックしましょう。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-800 text-white p-4">
                <h4 className="text-xl font-bold">プレミアムプラン</h4>
                <p className="text-2xl font-bold mt-1">35,000円〜50,000円/泊</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  一人5万円以内で泊まれる高級リゾート。プライベートプールやヴィラタイプの客室など、特別な時間を過ごせる贅沢な空間を提供。
                </p>
                <h5 className="font-semibold text-gray-800 mb-2">おすすめホテル</h5>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">LEO癒リゾート宮古島 Pool&Villa</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">アラマンダ インギャーコーラルヴィレッジ</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">シギラベイサイドスイート アラマンダ</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">
                  ※オフシーズンや平日利用でお得に泊まれることも。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HotelSection;

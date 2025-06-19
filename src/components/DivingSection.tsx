import React from 'react';
import { motion } from 'framer-motion';

const DivingSection: React.FC = () => {
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

  // ダイビングスポットデータ
  const divingSpots = [
    {
      name: '八重干瀬（やびじ）',
      level: '初級〜中級',
      description: '宮古島を代表する広大なサンゴ礁。透明度の高い海と色とりどりのサンゴ、熱帯魚の群れが楽しめる。初心者でも安心して潜れるスポットが多い。',
      highlights: ['色鮮やかなサンゴ礁', '熱帯魚の群れ', '透明度の高い海'],
      bestSeason: '4月〜10月'
    },
    {
      name: '通り池',
      level: '初級',
      description: '陸上と海中の洞窟がつながった神秘的なスポット。青く輝く海中洞窟は「青の洞窟」とも呼ばれ、光の差し込み方によって幻想的な景色を楽しめる。',
      highlights: ['青く輝く海中洞窟', '光のシャワー', '神秘的な雰囲気'],
      bestSeason: '通年（特に晴れた日の午前中がおすすめ）'
    },
    {
      name: '白鳥岬（はくちょうみさき）',
      level: '初級〜中級',
      description: '宮古島の東に位置するポイント。サンゴ礁と砂地が広がり、ウミガメに遭遇できる確率が高い。初心者でも楽しめる浅場から、中級者向けの深場まで様々なポイントがある。',
      highlights: ['ウミガメとの遭遇', '多様な海洋生物', '変化に富んだ地形'],
      bestSeason: '5月〜10月'
    },
    {
      name: '中の島チャネル',
      level: '中級〜上級',
      description: '来間島と中の島の間にあるチャネル。潮の流れが速いことがあるため経験者向け。マンタやイソマグロなどの大物に出会える可能性がある。',
      highlights: ['大物との遭遇', 'ダイナミックな地形', '美しいソフトコーラル'],
      bestSeason: '6月〜9月'
    }
  ];

  // 体験ダイビングプラン
  const beginnerPlans = [
    {
      title: '半日体験ダイビング',
      price: '10,000円〜',
      duration: '約3時間（ダイビング時間約30分）',
      includes: ['器材レンタル', '保険料', 'ガイド料', '写真撮影（一部プラン）'],
      description: '初めての方でも安心して楽しめる体験ダイビング。インストラクターが丁寧に指導するので、泳ぎが苦手な方でも大丈夫。美しいサンゴ礁や熱帯魚を間近で観察できます。'
    },
    {
      title: '1日体験ダイビング（2ダイブ）',
      price: '18,000円〜',
      duration: '約6時間（ダイビング時間約30分×2回）',
      includes: ['器材レンタル', '保険料', 'ガイド料', 'ランチ', '写真撮影（一部プラン）'],
      description: '午前と午後に各1回ずつ潜る1日プラン。2か所の異なるポイントで宮古島の海を満喫できます。昼食付きで1日たっぷり海を楽しめます。'
    },
    {
      title: 'カップル限定プライベートダイビング',
      price: '25,000円〜（2名様）',
      duration: '約4時間（ダイビング時間約40分）',
      includes: ['器材レンタル', '保険料', 'プライベートガイド', '写真・動画撮影', 'ドリンク'],
      description: 'カップルだけのプライベートツアー。他のお客様と一緒にならないので、ゆっくりと二人の時間を楽しめます。思い出に残る水中写真・動画もプレゼント。'
    }
  ];

  // ダイビングショップ
  const divingShops = [
    {
      name: 'マリンクラブ うみんちゅ',
      location: '宮古島市平良字下里1583-1',
      phone: '0980-73-1212',
      features: ['少人数制', '日本語・英語対応', '送迎あり', 'カメラレンタル可'],
      website: 'https://www.uminchu.com'
    },
    {
      name: 'ダイビングチーム あなたの空',
      location: '宮古島市上野字宮国775-1',
      phone: '0980-76-2641',
      features: ['体験ダイビング専門', 'ファミリー向け', '送迎あり', 'シャワー・更衣室完備'],
      website: 'https://www.anatanosora.com'
    },
    {
      name: 'マリンサービス ブルーオーシャン',
      location: '宮古島市下地字与那覇1199',
      phone: '0980-74-7470',
      features: ['少人数制', '経験者向けツアーも充実', '器材販売あり', 'カフェ併設'],
      website: 'https://www.blueocean-miyako.com'
    }
  ];

  return (
    <section id="diving" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            スキューバダイビング
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            宮古島は「ミヤコブルー」と呼ばれる透明度抜群の海が魅力。
            初心者からベテランまで楽しめる多彩なダイビングスポットをご紹介します。
          </motion.p>
        </motion.div>

        {/* ダイビングスポット */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">人気ダイビングスポット</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divingSpots.map((spot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-4">
                  <h4 className="text-xl font-bold text-white">{spot.name}</h4>
                  <span className="inline-block bg-white bg-opacity-30 text-white text-sm px-3 py-1 rounded-full">
                    {spot.level}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{spot.description}</p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">見どころ</h5>
                    <ul className="space-y-1">
                      {spot.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    ベストシーズン: {spot.bestSeason}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 初心者向けプラン */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">初心者向け体験ダイビング</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beginnerPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-blue-600 p-4 text-white">
                  <h4 className="text-xl font-bold">{plan.title}</h4>
                  <p className="text-2xl font-bold mt-1">{plan.price}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-700">{plan.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">含まれるもの</h5>
                    <ul className="space-y-1">
                      {plan.includes.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">※ 料金や内容は時期やショップによって異なる場合があります。予約時にご確認ください。</p>
          </div>
        </div>

        {/* おすすめダイビングショップ */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">おすすめダイビングショップ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {divingShops.map((shop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{shop.name}</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">{shop.location}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">{shop.phone}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">特徴</h5>
                    <ul className="space-y-1">
                      {shop.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={shop.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
                  >
                    公式サイトを見る
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 注意事項 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-blue-50 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">ダイビングを楽しむための注意事項</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">体験ダイビング参加条件</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">
                    10歳以上（ショップによって異なる場合あり）
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">
                    健康状態が良好であること（心臓病、高血圧、喘息、妊娠中の方は参加できない場合があります）
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">
                    飛行機搭乗の24時間前までにダイビングを終了すること
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">持ち物</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    水着（事前に着用しておくと便利）
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    タオル
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    日焼け止め（サンゴに優しい日焼け止めがおすすめ）
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    酔い止め（船酔いが心配な方）
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              予約は通常、前日までに行う必要があります。人気のショップは早めの予約がおすすめです。
              天候や海況によって中止になる場合もありますので、旅行日程に余裕を持たせることをおすすめします。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DivingSection;

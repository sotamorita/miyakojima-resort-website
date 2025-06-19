import React from 'react';
import { motion } from 'framer-motion';

const BudgetSection: React.FC = () => {
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

  // 予算データ
  const budgetData = {
    transportation: [
      { item: '航空券（東京発往復）', price: '25,000円〜35,000円', note: '早割利用時' },
      { item: 'レンタカー（2泊3日）', price: '12,000円〜18,000円', note: '2名で割ると一人6,000円〜9,000円' },
      { item: 'ガソリン代', price: '3,000円〜5,000円', note: '使用状況による' }
    ],
    accommodation: [
      { item: 'ホテル（2泊）', price: '22,000円〜36,000円', note: '一人あたり、中価格帯ホテル' }
    ],
    activities: [
      { item: 'スキューバダイビング体験', price: '10,000円〜13,000円', note: '1回あたり' },
      { item: 'マリンアクティビティ', price: '3,000円〜8,000円', note: 'オプション' },
      { item: '観光スポット入場料', price: '0円〜2,000円', note: '場所による' }
    ],
    food: [
      { item: '朝食', price: '0円〜1,500円', note: 'ホテル朝食付きの場合は0円' },
      { item: '昼食', price: '1,000円〜2,000円', note: '1回あたり' },
      { item: '夕食', price: '2,000円〜5,000円', note: '1回あたり' }
    ],
    others: [
      { item: 'お土産', price: '3,000円〜10,000円', note: '個人差あり' },
      { item: '予備費', price: '5,000円〜', note: '突発的な出費に' }
    ]
  };

  // 持ち物リスト
  const packingList = {
    documents: [
      { item: '身分証明書', essential: true },
      { item: 'クレジットカード', essential: true },
      { item: '現金', essential: true },
      { item: '航空券（Eチケット）', essential: true },
      { item: 'ホテル予約確認書', essential: true },
      { item: '海外旅行保険証（任意）', essential: false }
    ],
    clothes: [
      { item: 'Tシャツ・半袖シャツ', essential: true },
      { item: '薄手の長袖（朝晩用）', essential: true },
      { item: '水着', essential: true },
      { item: 'ラッシュガード', essential: false },
      { item: '下着・靴下', essential: true },
      { item: 'サンダル', essential: true },
      { item: 'スニーカー（軽登山用）', essential: false }
    ],
    toiletries: [
      { item: '歯ブラシ・歯磨き粉', essential: true },
      { item: 'シャンプー・リンス', essential: false, note: 'ホテルにあることが多い' },
      { item: '化粧品・スキンケア用品', essential: false },
      { item: 'コンタクトレンズ用品', essential: false },
      { item: 'メイク落とし', essential: false }
    ],
    beach: [
      { item: '日焼け止め（SPF50+）', essential: true },
      { item: 'サングラス', essential: true },
      { item: 'ビーチサンダル', essential: true },
      { item: 'ビーチタオル', essential: true },
      { item: '水に濡れてもいいバッグ', essential: false },
      { item: 'アフターサンケア', essential: false }
    ],
    gadgets: [
      { item: 'スマートフォン・充電器', essential: true },
      { item: 'モバイルバッテリー', essential: true },
      { item: 'カメラ', essential: false },
      { item: '防水ケース/防水カメラ', essential: false },
      { item: 'イヤホン', essential: false }
    ],
    others: [
      { item: '常備薬', essential: true },
      { item: '酔い止め薬', essential: false },
      { item: '虫除けスプレー', essential: true },
      { item: '折りたたみ傘/レインコート', essential: false },
      { item: '帽子', essential: true }
    ]
  };

  // 注意点
  const cautionPoints = [
    {
      title: '天候・台風への備え',
      description: '10月は台風シーズンの終わりに差し掛かりますが、まだ台風の影響を受ける可能性があります。旅行前に天気予報をチェックし、必要に応じて旅程を調整できるよう柔軟な計画を立てましょう。',
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      )
    },
    {
      title: '日焼け対策',
      description: '10月でも宮古島は日差しが強いです。日焼け止め（SPF50+）を定期的に塗り直し、帽子やラッシュガードなどで肌を保護しましょう。特にシュノーケリングやダイビング時は背中や首の日焼けに注意が必要です。',
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
    {
      title: '海の危険生物',
      description: 'ハブクラゲやウニなどの危険生物に注意しましょう。遊泳禁止区域では泳がない、岩場では靴を履くなどの対策を。万が一刺されたり怪我をした場合は、すぐに応急処置を行い、必要に応じて医療機関を受診してください。',
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
        </svg>
      )
    },
    {
      title: '水分補給',
      description: '暑さによる脱水症状や熱中症を防ぐため、こまめな水分補給を心がけましょう。特にアクティビティの前後や、日中の観光時には十分な水分を摂取することが大切です。',
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

  // 予算計算
  const calculateBudget = () => {
    const minTransportation = budgetData.transportation.reduce((sum, item) => {
      return sum + parseInt(item.price.split('〜')[0].replace(/[^0-9]/g, ''));
    }, 0);
    
    const maxTransportation = budgetData.transportation.reduce((sum, item) => {
      return sum + parseInt(item.price.split('〜')[1].replace(/[^0-9]/g, ''));
    }, 0);
    
    const minAccommodation = budgetData.accommodation.reduce((sum, item) => {
      return sum + parseInt(item.price.split('〜')[0].replace(/[^0-9]/g, ''));
    }, 0);
    
    const maxAccommodation = budgetData.accommodation.reduce((sum, item) => {
      return sum + parseInt(item.price.split('〜')[1].replace(/[^0-9]/g, ''));
    }, 0);
    
    const minActivities = budgetData.activities.reduce((sum, item) => {
      return sum + parseInt(item.price.split('〜')[0].replace(/[^0-9]/g, ''));
    }, 0);
    
    const maxActivities = budgetData.activities.reduce((sum, item) => {
      return sum + parseInt(item.price.split('〜')[1].replace(/[^0-9]/g, ''));
    }, 0);
    
    const minFood = budgetData.food.reduce((sum, item) => {
      return sum + parseInt(item.price.split('〜')[0].replace(/[^0-9]/g, '')) * 3; // 3日分
    }, 0);
    
    const maxFood = budgetData.food.reduce((sum, item) => {
      return sum + parseInt(item.price.split('〜')[1].replace(/[^0-9]/g, '')) * 3; // 3日分
    }, 0);
    
    const minOthers = budgetData.others.reduce((sum, item) => {
      return sum + parseInt(item.price.split('〜')[0].replace(/[^0-9]/g, ''));
    }, 0);
    
    const maxOthers = budgetData.others.reduce((sum, item) => {
      const price = item.price.split('〜')[1];
      return sum + (price ? parseInt(price.replace(/[^0-9]/g, '')) : parseInt(item.price.split('〜')[0].replace(/[^0-9]/g, '')) * 2);
    }, 0);
    
    const minTotal = minTransportation + minAccommodation + minActivities + minFood + minOthers;
    const maxTotal = maxTransportation + maxAccommodation + maxActivities + maxFood + maxOthers;
    
    return {
      transportation: { min: minTransportation, max: maxTransportation },
      accommodation: { min: minAccommodation, max: maxAccommodation },
      activities: { min: minActivities, max: maxActivities },
      food: { min: minFood, max: maxFood },
      others: { min: minOthers, max: maxOthers },
      total: { min: minTotal, max: maxTotal }
    };
  };

  const budget = calculateBudget();

  return (
    <section id="budget" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            予算・持ち物・注意点
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            宮古島旅行を快適に過ごすための予算計画、持ち物リスト、注意点をご紹介。
            事前の準備で、より充実した旅行にしましょう。
          </motion.p>
        </motion.div>

        {/* 予算セクション */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">予算概算</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-gray-800">カテゴリー別予算</h4>
                  
                  <div className="space-y-6">
                    {Object.entries(budgetData).map(([category, items], index) => (
                      <div key={index}>
                        <h5 className="font-semibold text-blue-600 mb-2 capitalize">
                          {category === 'transportation' ? '交通費' : 
                           category === 'accommodation' ? '宿泊費' : 
                           category === 'activities' ? 'アクティビティ' : 
                           category === 'food' ? '食費' : 'その他'}
                        </h5>
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">項目</th>
                                <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">予算</th>
                                <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">備考</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {items.map((item, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  <td className="py-2 px-4 text-sm text-gray-700">{item.item}</td>
                                  <td className="py-2 px-4 text-sm text-blue-600 font-semibold">{item.price}</td>
                                  <td className="py-2 px-4 text-sm text-gray-500">{item.note}</td>
                                </tr>
                              ))}
                              <tr className="bg-blue-50">
                                <td className="py-2 px-4 text-sm font-bold text-gray-700">小計</td>
                                <td className="py-2 px-4 text-sm font-bold text-blue-600">
                                  {budget[category as keyof typeof budget].min.toLocaleString()}円〜
                                  {budget[category as keyof typeof budget].max.toLocaleString()}円
                                </td>
                                <td className="py-2 px-4 text-sm text-gray-500">
                                  {category === 'food' && '3日分計算'}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl shadow-lg text-white p-6 mb-6"
              >
                <h4 className="text-xl font-bold mb-4">総予算（一人あたり）</h4>
                <div className="text-3xl font-bold mb-2">
                  {budget.total.min.toLocaleString()}円〜{budget.total.max.toLocaleString()}円
                </div>
                <p className="text-blue-100">2泊3日・カップル旅行の場合</p>
                
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between">
                    <span>交通費</span>
                    <span>{budget.transportation.min.toLocaleString()}円〜{budget.transportation.max.toLocaleString()}円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>宿泊費</span>
                    <span>{budget.accommodation.min.toLocaleString()}円〜{budget.accommodation.max.toLocaleString()}円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>アクティビティ</span>
                    <span>{budget.activities.min.toLocaleString()}円〜{budget.activities.max.toLocaleString()}円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>食費</span>
                    <span>{budget.food.min.toLocaleString()}円〜{budget.food.max.toLocaleString()}円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>その他</span>
                    <span>{budget.others.min.toLocaleString()}円〜{budget.others.max.toLocaleString()}円</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800">予算節約のコツ</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">
                      航空券は2〜3ヶ月前の早期予約がお得
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">
                      ホテルは朝食付きプランを選ぶと食費節約に
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">
                      アクティビティはセット割引を利用する
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">
                      スーパーで食材を買って簡単な食事を自炊
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">
                      平日旅行で全体的に料金が安くなる傾向あり
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 持ち物リスト */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">持ち物リスト</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(packingList).map(([category, items], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-blue-600 text-white p-4">
                  <h4 className="text-lg font-bold capitalize">
                    {category === 'documents' ? '書類・貴重品' : 
                     category === 'clothes' ? '衣類' : 
                     category === 'toiletries' ? '洗面用具' : 
                     category === 'beach' ? 'ビーチグッズ' : 
                     category === 'gadgets' ? 'ガジェット' : 'その他'}
                  </h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 mr-3 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                        />
                        <div>
                          <span className="text-gray-700">{item.item}</span>
                          {item.essential && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                              必須
                            </span>
                          )}
                          {'note' in item && item.note && (
                            <span className="block text-xs text-gray-500">{item.note}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 注意点 */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">旅行時の注意点</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cautionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 flex"
              >
                <div className="mr-4 flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{point.title}</h4>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100"
          >
            <h4 className="text-xl font-bold mb-4 text-center text-gray-800">安全に楽しむために</h4>
            <p className="text-gray-700 mb-4 text-center">
              宮古島の美しい自然を存分に楽しむためには、安全対策と自然環境への配慮が大切です。
              以下のポイントを心がけて、思い出に残る素敵な旅行にしましょう。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold text-blue-600 mb-2">海での安全</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 遊泳禁止区域では絶対に泳がない</li>
                  <li>• ライフジャケットの着用を心がける</li>
                  <li>• 体調不良時は海に入らない</li>
                  <li>• 飲酒後の海水浴は避ける</li>
                  <li>• 一人で遠くまで泳がない</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold text-blue-600 mb-2">自然環境への配慮</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• ゴミは必ず持ち帰る</li>
                  <li>• サンゴや海洋生物に触れない</li>
                  <li>• 貝殻や石などの持ち帰りは控える</li>
                  <li>• 環境に優しい日焼け止めを使用する</li>
                  <li>• 指定された場所以外での釣りや採集はしない</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;

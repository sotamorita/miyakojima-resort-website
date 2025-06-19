import React from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';

interface SpotCardProps {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  mapUrl: string;
  delay?: number;
}

const SpotCard: React.FC<SpotCardProps> = ({ name, description, imageUrl, category, mapUrl, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="relative h-48">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full"
          fallbackType="spot"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-3 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all duration-200 text-sm font-medium mt-auto"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 616 0z"></path>
          </svg>
          地図で見る
        </a>
      </div>
    </motion.div>
  );
};

const SpotsSection: React.FC = () => {
  const spots = [
    {
      name: "与那覇前浜ビーチ",
      description: "「東洋一美しい」と称される7kmに及ぶ白い砂浜と透明度の高い海が魅力のビーチ。",
      imageUrl: "/images/yonaha_maehama.jpg",
      category: "ビーチ",
      mapUrl: "https://maps.google.com/maps?q=与那覇前浜ビーチ"
    },
    {
      name: "東平安名崎",
      description: "宮古島の最東端に位置する岬。断崖絶壁と青い海のコントラストが美しい絶景スポット。",
      imageUrl: "/images/higashihenna.jpg",
      category: "絶景",
      mapUrl: "https://maps.google.com/maps?q=東平安名崎"
    },
    {
      name: "伊良部大橋",
      description: "宮古島と伊良部島を結ぶ全長3,540mの橋。無料で渡れる日本最長の橋として有名。",
      imageUrl: "/images/irabu_bridge.jpg",
      category: "観光",
      mapUrl: "https://maps.google.com/maps?q=伊良部大橋"
    },
    {
      name: "下地島空港17エンド",
      description: "飛行機が頭上すれすれを通過する絶景スポット。SNS映えする写真が撮影できる。",
      imageUrl: "/images/shimojishima_airport.jpg",
      category: "絶景",
      mapUrl: "https://maps.google.com/maps?q=下地島空港17エンド"
    },
    {
      name: "竜宮城展望台",
      description: "来間島にある展望台。宮古ブルーの海と来間大橋を一望できる人気スポット。",
      imageUrl: "/images/ryugujo_observatory.jpg",
      category: "絶景",
      mapUrl: "https://maps.google.com/maps?q=竜宮城展望台"
    },
    {
      name: "砂山ビーチ",
      description: "透明度抜群の海と白い砂浜が特徴。シュノーケリングにも最適なビーチ。",
      imageUrl: "/images/sunayama_beach.jpg",
      category: "ビーチ",
      mapUrl: "https://maps.google.com/maps?q=砂山ビーチ"
    }
  ];

  return (
    <section id="spots" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">宮古島の主要観光スポット</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            宮古島には美しいビーチや絶景スポットが点在しています。
            2泊3日の旅程でも効率よく回れるよう、厳選した観光スポットをご紹介します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spots.map((spot, index) => (
            <SpotCard
              key={spot.name}
              name={spot.name}
              description={spot.description}
              imageUrl={spot.imageUrl}
              category={spot.category}
              mapUrl={spot.mapUrl}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotsSection;

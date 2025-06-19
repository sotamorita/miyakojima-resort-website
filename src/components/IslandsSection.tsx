import React from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';

interface IslandCardProps {
  name: string;
  description: string;
  imageUrl: string;
  mapUrl: string;
  delay?: number;
}

const IslandCard: React.FC<IslandCardProps> = ({ name, description, imageUrl, mapUrl, delay = 0 }) => {
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
          fallbackType="island"
          style={{ objectFit: 'cover' }}
        />
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

const IslandsSection: React.FC = () => {
  const islands = [
    {
      name: "宮古島",
      description: "透明度の高い海と白い砂浜が特徴。伊良部大橋や東平安名崎など見どころ満載。",
      imageUrl: "/images/miyako_island.webp",
      mapUrl: "https://maps.google.com/maps?q=宮古島"
    },
    {
      name: "伊良部島",
      description: "宮古島から伊良部大橋で繋がる島。下地空港や佐和田の浜など美しいスポットが点在。",
      imageUrl: "/images/irabu_island.jpg",
      mapUrl: "https://maps.google.com/maps?q=伊良部島"
    },
    {
      name: "池間島",
      description: "宮古島の北に位置する小さな島。池間大橋を渡ってアクセス可能。美しいビーチが魅力。",
      imageUrl: "/images/ikema_island.jpg",
      mapUrl: "https://maps.google.com/maps?q=池間島"
    },
    {
      name: "来間島",
      description: "宮古島の南西に位置し、来間大橋で繋がる島。竜宮城展望台からの眺めは絶景。",
      imageUrl: "/images/kurima_island.jpg",
      mapUrl: "https://maps.google.com/maps?q=来間島"
    }
  ];

  return (
    <section id="islands" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">宮古島と周辺の島々</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            宮古諸島は宮古島を中心に、伊良部島、池間島、来間島など複数の島々から構成されています。
            それぞれの島が独自の魅力を持ち、橋で繋がっているため、レンタカーで気軽に島巡りが楽しめます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {islands.map((island, index) => (
            <IslandCard
              key={island.name}
              name={island.name}
              description={island.description}
              imageUrl={island.imageUrl}
              mapUrl={island.mapUrl}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IslandsSection;

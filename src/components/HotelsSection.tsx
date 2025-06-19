import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';
import HotelDetailModal from './HotelDetailModal';

interface Hotel {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  features: string[];
  rating: number;
  mapUrl: string;
  address?: string;
  phone?: string;
  website?: string;
  amenities?: string[];
  roomTypes?: string[];
  checkIn?: string;
  checkOut?: string;
}

interface HotelCardProps {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  features: string[];
  rating: number;
  mapUrl: string;
  delay?: number;
  onDetailClick: (hotel: Hotel) => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ 
  name, 
  description, 
  imageUrl, 
  price, 
  features, 
  rating,
  mapUrl,
  delay = 0,
  onDetailClick
}) => {
  const hotel = { name, description, imageUrl, price, features, rating, mapUrl };
  
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
          fallbackType="hotel"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {price}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        <div className="mb-4">
          {features.map((feature: string, index: number) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-auto space-y-2">
          <button
            onClick={() => onDetailClick(hotel)}
            className="inline-flex items-center justify-center w-full px-3 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all duration-200 text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            詳細を見る
          </button>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-3 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all duration-200 text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 616 0z"></path>
            </svg>
            地図で見る
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const HotelsSection: React.FC = () => {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailClick = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHotel(null);
  };

  const hotels: Hotel[] = [
    {
      name: "宮古島東急ホテル＆リゾーツ",
      description: "美しいビーチに面したリゾートホテル。広々とした客室と充実した施設が魅力。",
      imageUrl: "/images/miyako_tokyu_hotel.jpg",
      price: "2泊 ¥22,000〜/人",
      features: ["ビーチフロント", "プール", "レストラン", "スパ"],
      rating: 4.5,
      mapUrl: "https://maps.google.com/maps?q=宮古島東急ホテル＆リゾーツ",
      address: "沖縄県宮古島市下地与那覇914",
      phone: "0980-76-2109",
      website: "https://www.tokyuhotels.co.jp/miyakojima-r/",
      amenities: ["WiFi無料", "駐車場無料", "朝食バイキング", "コインランドリー", "売店"],
      roomTypes: ["スタンダードツイン", "オーシャンビューツイン", "スイートルーム"],
      checkIn: "15:00",
      checkOut: "11:00"
    },
    {
      name: "アラマンダ インギャーコーラルヴィレッジ",
      description: "全室オーシャンビューの高級リゾート。プライベート感あふれる滞在が楽しめる。",
      imageUrl: "/images/alamanda_hotel.jpg",
      price: "2泊 ¥30,546〜/人",
      features: ["オーシャンビュー", "プライベートプール", "BBQ設備"],
      rating: 4.7,
      mapUrl: "https://maps.google.com/maps?q=アラマンダインギャーコーラルヴィレッジ",
      address: "沖縄県宮古島市城辺友利542",
      phone: "0980-77-8200",
      website: "https://www.alamanda.co.jp/",
      amenities: ["WiFi無料", "駐車場無料", "プライベートビーチ", "レンタサイクル", "コンシェルジュ"],
      roomTypes: ["ヴィラタイプ", "コテージタイプ", "スイートヴィラ"],
      checkIn: "15:00",
      checkOut: "11:00"
    },
    {
      name: "宮古島来間リゾート シーウッドホテル",
      description: "来間島に位置するリゾートホテル。静かな環境で島時間を満喫できる。",
      imageUrl: "/images/seawood_hotel.jpg",
      price: "2泊 ¥28,000〜/人",
      features: ["オーシャンビュー", "レンタサイクル", "シュノーケリング"],
      rating: 4.3,
      mapUrl: "https://maps.google.com/maps?q=宮古島来間リゾートシーウッドホテル",
      address: "沖縄県宮古島市下地来間484-7",
      phone: "0980-76-6000",
      website: "https://www.seawood.co.jp/",
      amenities: ["WiFi無料", "駐車場無料", "レストラン", "プール", "スパ"],
      roomTypes: ["オーシャンビュー", "ガーデンビュー", "スイートルーム"],
      checkIn: "15:00",
      checkOut: "11:00"
    }
  ];

  return (
    <section id="hotels" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">一人5万円以内で泊まれるホテル</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            宮古島には様々なタイプの宿泊施設があります。カップルにおすすめの、
            一人5万円以内で泊まれる厳選ホテルをご紹介します。
            立地や設備、サービスなど、様々な観点から比較してみましょう。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <HotelCard
              key={hotel.name}
              name={hotel.name}
              description={hotel.description}
              imageUrl={hotel.imageUrl}
              price={hotel.price}
              features={hotel.features}
              rating={hotel.rating}
              mapUrl={hotel.mapUrl}
              delay={index * 0.15}
              onDetailClick={handleDetailClick}
            />
          ))}
        </div>

        <HotelDetailModal
          hotel={selectedHotel}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default HotelsSection;

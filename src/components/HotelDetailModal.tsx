import React from 'react';
import { motion } from 'framer-motion';

interface HotelDetailModalProps {
  hotel: {
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
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const HotelDetailModal: React.FC<HotelDetailModalProps> = ({ hotel, isOpen, onClose }) => {
  if (!isOpen || !hotel) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* ヘッダー */}
        <div className="relative">
          <div className="h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-xl flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">{hotel.name}</h2>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < hotel.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm">({hotel.rating}/5)</span>
              </div>
              <p className="text-xl font-semibold">{hotel.price}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-6">
          {/* 基本情報 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">基本情報</h3>
            <p className="text-gray-700 mb-4">{hotel.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hotel.address && (
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">住所</p>
                    <p className="text-gray-600">{hotel.address}</p>
                  </div>
                </div>
              )}
              
              {hotel.phone && (
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">電話番号</p>
                    <p className="text-gray-600">{hotel.phone}</p>
                  </div>
                </div>
              )}
              
              {hotel.checkIn && (
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">チェックイン</p>
                    <p className="text-gray-600">{hotel.checkIn}</p>
                  </div>
                </div>
              )}
              
              {hotel.checkOut && (
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">チェックアウト</p>
                    <p className="text-gray-600">{hotel.checkOut}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 特徴・設備 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">特徴・設備</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {hotel.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* アメニティ */}
          {hotel.amenities && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">アメニティ</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 客室タイプ */}
          {hotel.roomTypes && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">客室タイプ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {hotel.roomTypes.map((roomType, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-gray-700">{roomType}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* アクションボタン */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={hotel.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              地図で見る
            </a>
            
            {hotel.website && (
              <a
                href={hotel.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                公式サイト
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HotelDetailModal;


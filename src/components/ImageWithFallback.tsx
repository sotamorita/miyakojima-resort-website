import React, { useState, useEffect } from 'react';

// 画像読み込みステータスを管理するカスタムフック
const useImageLoader = (src: string) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  return { loaded, error };
};

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className: string;
  style?: React.CSSProperties;
  fallbackType?: 'island' | 'spot' | 'hotel' | 'default';
}

// フォールバックUI付き画像コンポーネント
const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  className, 
  style = {}, 
  fallbackType = "default" 
}) => {
  const { loaded, error } = useImageLoader(src);
  
  // フォールバックのグラデーション色（コンテンツタイプ別）
  const gradients: Record<string, string> = {
    island: "linear-gradient(135deg, #56CCF2, #2F80ED)",
    spot: "linear-gradient(135deg, #6FCF97, #219653)",
    hotel: "linear-gradient(135deg, #F2C94C, #F2994A)",
    default: "linear-gradient(135deg, #56CCF2, #2F80ED)"
  };
  
  const gradient = gradients[fallbackType] || gradients.default;
  
  // フォールバックのアイコン（コンテンツタイプ別）
  const icons: Record<string, string> = {
    island: "🏝️",
    spot: "🌴",
    hotel: "🏨",
    default: "📷"
  };
  
  const icon = icons[fallbackType] || icons.default;

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{
          background: gradient,
          borderRadius: '8px',
          ...style
        }}
      >
        <div className="text-center text-white p-4">
          <div className="text-4xl mb-2">{icon}</div>
          <div className="font-medium">{alt || "画像を準備中"}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={style}>
      {!loaded && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: gradient,
            borderRadius: '8px'
          }}
        >
          <div className="text-center text-white">
            <div className="animate-pulse mb-2">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div className="text-sm">{alt || "読み込み中..."}</div>
          </div>
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ borderRadius: '8px' }}
      />
    </div>
  );
};

export default ImageWithFallback;

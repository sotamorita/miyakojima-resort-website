import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* サイトマップ */}
          <div>
            <h3 className="text-xl font-bold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li>
                <Link to="summary" smooth={true} duration={800} className="text-blue-200 hover:text-white cursor-pointer transition-colors">
                  旅行概要
                </Link>
              </li>
              <li>
                <Link to="info" smooth={true} duration={800} className="text-blue-200 hover:text-white cursor-pointer transition-colors">
                  宮古島の基本情報
                </Link>
              </li>
              <li>
                <Link to="diving" smooth={true} duration={800} className="text-blue-200 hover:text-white cursor-pointer transition-colors">
                  スキューバダイビング
                </Link>
              </li>
              <li>
                <Link to="itinerary" smooth={true} duration={800} className="text-blue-200 hover:text-white cursor-pointer transition-colors">
                  2泊3日旅程
                </Link>
              </li>
              <li>
                <Link to="hotels" smooth={true} duration={800} className="text-blue-200 hover:text-white cursor-pointer transition-colors">
                  ホテル情報
                </Link>
              </li>
              <li>
                <Link to="flights" smooth={true} duration={800} className="text-blue-200 hover:text-white cursor-pointer transition-colors">
                  航空券情報
                </Link>
              </li>
              <li>
                <Link to="budget" smooth={true} duration={800} className="text-blue-200 hover:text-white cursor-pointer transition-colors">
                  予算・持ち物・注意点
                </Link>
              </li>
            </ul>
          </div>

          {/* 関連リンク */}
          <div>
            <h3 className="text-xl font-bold mb-4">関連リンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.miyakojima-kankou.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                  宮古島観光協会
                </a>
              </li>
              <li>
                <a href="https://www.jalan.net/kankou/spt_47214/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                  じゃらん宮古島観光ガイド
                </a>
              </li>
              <li>
                <a href="https://www.ana.co.jp/ja/jp/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                  ANA公式サイト
                </a>
              </li>
              <li>
                <a href="https://www.jal.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                  JAL公式サイト
                </a>
              </li>
              <li>
                <a href="https://www.skyscanner.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                  スカイスキャナー
                </a>
              </li>
              <li>
                <a href="https://www.jma.go.jp/jma/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                  気象庁
                </a>
              </li>
            </ul>
          </div>

          {/* 宮古島の天気 */}
          <div>
            <h3 className="text-xl font-bold mb-4">宮古島の天気</h3>
            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4">
              <p className="text-sm mb-2">10月の平均気温: 25〜27℃</p>
              <p className="text-sm mb-2">10月の平均水温: 26〜28℃</p>
              <p className="text-sm mb-2">10月の平均降水量: 約150mm</p>
              <p className="text-sm">10月の平均日照時間: 約6時間/日</p>
              <div className="mt-4">
                <a href="https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=4740100" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-full inline-block transition-colors">
                  最新の天気予報を確認
                </a>
              </div>
            </div>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="text-sm mb-4">
              宮古島旅行についてのご質問やご相談は、以下のメールアドレスまでお気軽にお問い合わせください。
            </p>
            <a href="mailto:info@miyakojima-resort.example.com" className="text-blue-200 hover:text-white transition-colors">
              info@miyakojima-resort.example.com
            </a>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} 宮古島リゾート旅行プラン. All rights reserved.
            </p>
            <p className="text-xs text-blue-300 mt-2">
              このサイトは情報提供を目的としており、実際のサービス提供や予約は各サービス提供者の公式サイトをご利用ください。
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

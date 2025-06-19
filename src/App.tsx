import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import SummarySection from './components/SummarySection';
import IslandsSection from './components/IslandsSection';
import SpotsSection from './components/SpotsSection';
import DivingSection from './components/DivingSection';
import ItinerarySection from './components/ItinerarySection';
import HotelsSection from './components/HotelsSection';
import FlightSection from './components/FlightSection';
import BudgetSection from './components/BudgetSection';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import LoadingOverlay from './components/LoadingOverlay';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ページ読み込み完了時にローディングを非表示
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <LoadingOverlay isLoading={isLoading} />}
      
      <Header />
      
      <HeroSection />
      
      <SummarySection />
      
      <IslandsSection />
      
      <SpotsSection />
      
      <DivingSection />
      
      <ItinerarySection />
      
      <HotelsSection />
      
      <FlightSection />
      
      <BudgetSection />
      
      <Footer />
      
      <ScrollToTopButton />
    </div>
  );
};

export default App;

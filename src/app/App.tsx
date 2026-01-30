import { useState } from 'react';
import '@/styles/carousel.css';

// Імпортуємо компоненти
import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { VideoSection } from '@/app/components/VideoSection';
import { PainPointsSection } from '@/app/components/PainPointsSection';
import { RootWorkSection } from '@/app/components/RootWorkSection';
import { AuthorSection } from '@/app/components/AuthorSection';
import { TargetAudienceSection } from '@/app/components/TargetAudienceSection';
import { ProgramSection } from '@/app/components/ProgramSection';
import { ResultsSection } from '@/app/components/ResultsSection';
import { BeyondProgramSection } from '@/app/components/BeyondProgramSection';
import { BonusSection } from '@/app/components/BonusSection';
import { PricingSection } from '@/app/components/PricingSection';
import { GuaranteeSection } from '@/app/components/GuaranteeSection';
import { ReviewsSection } from '@/app/components/ReviewsSection';
import { FAQSection } from '@/app/components/FAQSection';
import { Footer } from '@/app/components/Footer';
import { PaymentModal } from '@/app/components/PaymentModal';
import { StickyBar } from '@/app/components/StickyBar';
import { ExitIntentPopup } from '@/app/components/ExitIntentPopup';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection onOpenModal={openModal} />
      <VideoSection />
      <PainPointsSection />
      <RootWorkSection onOpenModal={openModal} />
      <AuthorSection />
      <TargetAudienceSection />
      <ProgramSection />
      <ResultsSection />
      <BeyondProgramSection onOpenModal={openModal} />
      <BonusSection />
      <PricingSection onOpenModal={openModal} />
      <GuaranteeSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
      
      <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
      <StickyBar onOpenModal={openModal} />
      <ExitIntentPopup onOpenModal={openModal} />
    </div>
  );
}

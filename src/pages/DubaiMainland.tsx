import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainlandHero from '../components/MainlandHero';
import MainlandIntro from '../components/MainlandIntro';
import MainlandStructures from '../components/MainlandStructures';
import MainlandBenefits from '../components/MainlandBenefits';
import MainlandSteps from '../components/MainlandSteps';
import MainlandServices from '../components/MainlandServices';
import MainlandPricing from '../components/MainlandPricing';
import MainlandWhyChoose from '../components/MainlandWhyChoose';
import MainlandInvestorServices from '../components/MainlandInvestorServices';
import MainlandCTA from '../components/MainlandCTA';
import MainlandFAQ from '../components/MainlandFAQ';

export default function DubaiMainland() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Navbar />
      <MainlandHero />
      <MainlandIntro />
      <MainlandWhyChoose />
      <MainlandStructures />
      <MainlandPricing />
      <MainlandBenefits />
      <MainlandSteps />
      <MainlandServices />
      <MainlandInvestorServices />
      <MainlandCTA />
      <MainlandFAQ />
      <Footer />
    </div>
  );
}

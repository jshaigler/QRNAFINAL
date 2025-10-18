import { useState } from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import QuantumAdvantage from './components/QuantumAdvantage';
import WhyQuantumSection from './components/WhyQuantumSection';
import Comparison from './components/Comparison';
import Impact from './components/Impact';
import TechnicalSpecs from './components/TechnicalSpecs';
import Demo from './components/Demo';
import RoadmapTimeline from './components/RoadmapTimeline';
import ScientificValidation from './components/ScientificValidation';
import OnePager from './components/OnePager';
import CompetitiveAnalysis from './components/CompetitiveAnalysis';
import QuantumSpeedupVisualization from './components/QuantumSpeedupVisualization';
import MarketOpportunity from './components/MarketOpportunity';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <QuantumAdvantage />
        <WhyQuantumSection />
        <Comparison />
        <Demo />
        <MarketOpportunity />
        <Impact />
        <TechnicalSpecs />
        <ScientificValidation />
        <OnePager />
        <CompetitiveAnalysis />
        <QuantumSpeedupVisualization />
        <RoadmapTimeline />
      </main>

      <Footer />
    </div>
  );
}

export default App;

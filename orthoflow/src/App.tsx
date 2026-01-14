import './App.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import HowItWorks from './components/sections/HowItWorks';
import Benefits from './components/sections/Benefits';
// import Pricing from './components/sections/Pricing';
import CTA from './components/sections/CTA';
import AppShowcase from './components/sections/AppShowcase';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ProblemSolution />
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <AppShowcase />
          <div id="benefits">
            <Benefits />
          </div>
          {/* Pricing section temporarily hidden
          <div id="pricing">
            <Pricing />
          </div>
          */}
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

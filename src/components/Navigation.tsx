import { Atom } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDetailedDemo?: boolean;
}

export default function Navigation({ activeSection, setActiveSection, isDetailedDemo = false }: NavigationProps) {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'problem', label: 'The Problem' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'advantage', label: 'Quantum Advantage' },
    { id: 'why-quantum', label: 'Why Quantum' },
    { id: 'validation', label: 'Scientific Validation' },
    { id: 'whitepapers', label: 'One-Pager' },
    { id: 'comparison', label: 'Comparison' },
    { id: 'speedup', label: 'Quantum Speedup' },
    { id: 'demo', label: 'Demo' },
    { id: 'market', label: 'Market Opportunity' },
    { id: 'impact', label: 'Impact' },
    { id: 'specs', label: 'Technical Specs' },
    { id: 'competition', label: 'Competition' },
  ];

  const scrollToSection = (id: string) => {
    // If in detailed demo mode, just redirect to main page
    if (isDetailedDemo) {
      window.location.href = '/';
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-2 rounded-lg">
              <Atom className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                QuantumRNA
              </h1>
              <p className="text-xs text-slate-400">Therapeutic Design Platform</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="/detailed-demo"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Detailed Demo
            </a>
            {isDetailedDemo && (
              <a
                href="/"
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Main Site
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Atom, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDetailedDemo?: boolean;
}

export default function Navigation({ activeSection, setActiveSection, isDetailedDemo = false }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const groups = [
    {
      label: 'Product',
      items: [
        { id: 'hero', label: 'Home' },
        { id: 'problem', label: 'The Problem' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'demo', label: 'Demo' },
        { id: 'whitepapers', label: 'One-Pager' },
      ],
    },
    {
      label: 'Science',
      items: [
        { id: 'advantage', label: 'Quantum Advantage' },
        { id: 'why-quantum', label: 'Why Quantum' },
        { id: 'validation', label: 'Scientific Validation' },
        { id: 'comparison', label: 'Comparison' },
      ],
    },
    {
      label: 'Business',
      items: [
        { id: 'market', label: 'Market Opportunity' },
        { id: 'impact', label: 'Impact' },
        { id: 'specs', label: 'Technical Specs' },
        { id: 'competition', label: 'Competition' },
      ],
    },
  ];

  const scrollToSection = (id: string) => {
    // If in detailed demo mode, redirect to main site for section navigation
    if (isDetailedDemo) {
      window.location.href = '/';
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
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

          {/* Desktop grouped selects */}
          <div className="hidden md:flex items-center gap-4">
            {groups.map((g) => (
              <div key={g.label} className="relative">
                <label className="sr-only">{g.label}</label>
                <div className="flex items-center gap-2 cursor-pointer select-none">
                  <span className="text-sm font-medium text-slate-300">{g.label}</span>
                  <ChevronDown className="w-4 h-4 text-slate-300" />
                </div>
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
                  <div className="py-1">
                    {g.items.map((it) => (
                      <button
                        key={it.id}
                        onClick={() => scrollToSection(it.id)}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-slate-700 hover:text-cyan-400 ${
                          activeSection === it.id ? 'text-cyan-400' : 'text-slate-200'
                        }`}
                      >
                        {it.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-cyan-400"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden mt-3 space-y-2">
            {groups.map((g) => (
              <div key={g.label} className="px-2">
                <div className="text-xs font-semibold text-slate-400 uppercase mb-1">{g.label}</div>
                <div className="space-y-1">
                  {g.items.map((it) => (
                    <button
                      key={it.id}
                      onClick={() => scrollToSection(it.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm hover:bg-slate-800 hover:text-cyan-400 ${
                        activeSection === it.id ? 'text-cyan-400' : 'text-slate-200'
                      }`}
                    >
                      {it.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="px-2 pt-2 border-t border-slate-800">
              <a href="/detailed-demo" className="block px-3 py-2 text-sm text-slate-200 hover:text-cyan-400">Detailed Demo</a>
              {isDetailedDemo && (
                <a href="/" className="block px-3 py-2 text-sm text-slate-200 hover:text-cyan-400">Main Site</a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

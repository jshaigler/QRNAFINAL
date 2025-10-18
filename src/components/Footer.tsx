import { Github, Mail, Twitter, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-cyan-400 mb-4">QuantumRNA</h3>
            <p className="text-slate-400 text-sm">
              Revolutionizing RNA therapeutic design through quantum computing
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a></li>
              <li><a href="#advantage" className="hover:text-cyan-400 transition-colors">Quantum Advantage</a></li>
              <li><a href="#comparison" className="hover:text-cyan-400 transition-colors">Comparison</a></li>
              <li><a href="/detailed-demo" className="hover:text-cyan-400 transition-colors flex items-center gap-1">Detailed Demo <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Science</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#specs" className="hover:text-cyan-400 transition-colors">Technical Specs</a></li>
              <li><a href="#why-quantum" className="hover:text-cyan-400 transition-colors">Why Quantum</a></li>
              <li><a href="#team" className="hover:text-cyan-400 transition-colors">Team</a></li>
              <li><a href="#problem" className="hover:text-cyan-400 transition-colors">The Problem</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@quarnatherapeutics.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>© 2025 QuantumRNA Therapeutics. XPRIZE Quantum Applications Competition Entry.</p>
          <p className="mt-2">Harnessing quantum computing for revolutionary RNA therapeutic design.</p>
        </div>
      </div>
    </footer>
  );
}
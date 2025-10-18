import { ChevronDown, Sparkles, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">XPRIZE Quantum Applications</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-gradient">
              Quantum RNA
            </span>
            <br />
            <span className="text-slate-200">Therapeutics</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            The revolutionary quantum-powered RNA therapeutic design platform.
            Achieving <span className="text-cyan-400 font-semibold">exponential speedup</span> where
            classical computation becomes impossible.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
              <Zap className="w-10 h-10 text-cyan-400 mb-3" />
              <div className="text-3xl font-bold text-cyan-400 mb-2">10⁸x</div>
              <div className="text-sm text-slate-400">Speedup at 100 nucleotides</div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
              <Shield className="w-10 h-10 text-blue-400 mb-3" />
              <div className="text-3xl font-bold text-blue-400 mb-2">220</div>
              <div className="text-sm text-slate-400">Qubits required</div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
              <Sparkles className="w-10 h-10 text-cyan-400 mb-3" />
              <div className="text-3xl font-bold text-cyan-400 mb-2">6-12x</div>
              <div className="text-sm text-slate-400">Faster drug discovery</div>
            </div>
          </div>

          <button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            Explore the Science
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

import { Binary, Atom, Database, Zap } from 'lucide-react';

export default function HowItWorks() {
  const phases = [
    {
      icon: Binary,
      title: 'Structure Sampling',
      quantum: '0.00s',
      classical: '0.10s',
      speedup: '121.21x',
      advantage: 'Exponential',
      description: 'Quantum superposition explores 2ⁿ state space simultaneously, while classical must enumerate sequentially.',
      color: 'cyan'
    },
    {
      icon: Atom,
      title: 'Molecular Energy (VQE)',
      quantum: '320.80s',
      classical: '811 years',
      speedup: '10⁸x',
      advantage: 'Super-polynomial',
      description: 'Quantum chemistry (VQE) scales O(n⁴) vs classical CCSD(T) O(n⁷). Beyond 100 nucleotides, classical becomes intractable.',
      color: 'blue',
      critical: true
    },
    {
      icon: Database,
      title: 'Database Search',
      quantum: '0.11s',
      classical: '0.001s',
      speedup: 'Quadratic',
      advantage: 'Provably Optimal',
      description: 'Grover\'s algorithm achieves O(√N) search. Bennett et al. proved no quantum algorithm can do better.',
      color: 'cyan'
    },
    {
      icon: Zap,
      title: 'Optimization',
      quantum: '0.02s',
      classical: '0.04s (heuristic)',
      speedup: '2.00x',
      advantage: 'Quantum Tunneling',
      description: 'Quantum annealing escapes local minima through tunneling. Solves NP-Hard problems more efficiently.',
      color: 'blue'
    }
  ];

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Four-Phase Pipeline
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Each phase leverages quantum phenomena to achieve provable advantage over classical computation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const borderColor = phase.color === 'cyan' ? 'border-cyan-500/20' : 'border-blue-500/20';
            const hoverBorder = phase.color === 'cyan' ? 'hover:border-cyan-500/40' : 'hover:border-blue-500/40';
            const iconColor = phase.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400';
            const gradientFrom = phase.color === 'cyan' ? 'from-cyan-400' : 'from-blue-400';

            return (
              <div
                key={index}
                className={`relative bg-slate-900/50 backdrop-blur border ${borderColor} ${hoverBorder} rounded-2xl p-8 transition-all hover:scale-105 ${
                  phase.critical ? 'ring-2 ring-cyan-500/30' : ''
                }`}
              >
                {phase.critical && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-cyan-500 text-slate-950 text-xs font-bold rounded-full">
                    CRITICAL ADVANTAGE
                  </div>
                )}

                <div className={`inline-flex p-3 bg-gradient-to-br ${gradientFrom} to-slate-700 rounded-xl mb-4`}>
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-slate-100">{phase.title}</h3>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="text-slate-500 mb-1">Quantum</div>
                    <div className="text-cyan-400 font-semibold">{phase.quantum}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 mb-1">Classical</div>
                    <div className="text-slate-400 font-semibold">{phase.classical}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                    <span className="text-cyan-400 font-bold text-sm">{phase.speedup} faster</span>
                  </div>
                  <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg">
                    <span className="text-slate-300 text-sm">{phase.advantage}</span>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed">{phase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

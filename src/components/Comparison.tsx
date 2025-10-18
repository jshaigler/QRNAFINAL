import { Clock, HardDrive, Cpu, AlertTriangle } from 'lucide-react';

export default function Comparison() {
  return (
    <section id="comparison" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Quantum vs Classical
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Direct resource comparison for 100-nucleotide RNA therapeutic design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur border border-cyan-500/30 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500 rounded-xl">
                <Cpu className="w-8 h-8 text-slate-950" />
              </div>
              <h3 className="text-3xl font-bold text-cyan-400">Quantum System</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 font-medium">Maximum Qubits</span>
                  <span className="text-2xl font-bold text-cyan-400">220</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-1/2" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 font-medium">Total Gate Operations</span>
                  <span className="text-xl font-bold text-cyan-400">7.5M</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 font-medium">T-Gates (Fault-Tolerant)</span>
                  <span className="text-xl font-bold text-cyan-400">2.09M</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 font-medium">Runtime (NISQ)</span>
                  <span className="text-2xl font-bold text-cyan-400">~5.35 min</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 font-medium">Annealing Qubits</span>
                  <span className="text-xl font-bold text-cyan-400">2,000</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    NISQ-compatible today with error mitigation. Fault-tolerant era (2028+) enables full chemical accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-700 rounded-xl">
                <HardDrive className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-3xl font-bold text-slate-300">Classical System</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 font-medium">Runtime</span>
                  <span className="text-2xl font-bold text-slate-300">~811 years</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-600 w-full" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 font-medium">Peak Memory</span>
                  <span className="text-xl font-bold text-slate-300">32.77 GB</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 font-medium">CPU Cores Required</span>
                  <span className="text-xl font-bold text-slate-300">Thousands</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 font-medium">Energy Consumption</span>
                  <span className="text-xl font-bold text-red-400">Enormous</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 font-medium">Scalability</span>
                  <span className="text-xl font-bold text-red-400">Limited</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-red-400 mb-1">CRITICAL BOTTLENECK</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Molecular energy calculation using CCSD(T) is computationally intractable for drug-discovery scale molecules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur border border-cyan-500/20 rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Overall System Speedup
            </span>
          </h3>
          <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-6">
            10⁸x
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            At 100+ nucleotides, quantum computing transforms the impossible into minutes.
            This is where quantum advantage becomes <span className="text-cyan-400 font-bold">necessary</span>, not just faster.
          </p>
        </div>
      </div>
    </section>
  );
}

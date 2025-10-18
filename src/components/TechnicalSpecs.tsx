import { Server, Cpu, CheckCircle2, Calendar } from 'lucide-react';

export default function TechnicalSpecs() {
  return (
    <section id="specs" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Hardware Feasibility
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            NISQ-compatible today, fault-tolerant ready tomorrow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500 rounded-xl">
                <Server className="w-8 h-8 text-slate-950" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">NISQ Era</h3>
                <p className="text-slate-400 text-sm">2024-2027</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-200 mb-3">Available Hardware</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-slate-200 font-medium">IBM Quantum System Two</div>
                      <div className="text-slate-400 text-sm">127-433 qubits</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-slate-200 font-medium">Google Sycamore</div>
                      <div className="text-slate-400 text-sm">70-105 qubits</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-slate-200 font-medium">D-Wave Advantage</div>
                      <div className="text-slate-400 text-sm">5000+ qubits (quantum annealing)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-200 mb-3">System Requirements</h4>
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">220 qubits</div>
                  <div className="text-slate-300 text-sm">Gate-based quantum computing</div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-200 mb-3">Key Challenges</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Circuit depth 220 requires error mitigation techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>VQE requires ~500 variational optimization iterations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Grover's search depth 120,000 challenging but feasible</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-bold">NISQ-Compatible</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Feasible with current hardware and error mitigation strategies
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur border border-blue-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500 rounded-xl">
                <Cpu className="w-8 h-8 text-slate-950" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Fault-Tolerant Era</h3>
                <p className="text-slate-400 text-sm">2028-2035</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-200 mb-3">Requirements</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-slate-300 font-medium mb-1">Logical Qubits</div>
                    <div className="text-2xl font-bold text-blue-400">~10,000</div>
                    <div className="text-slate-400 text-sm mt-1">Using surface code error correction</div>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-slate-300 font-medium mb-1">T-Gate Count</div>
                    <div className="text-2xl font-bold text-blue-400">2,091,450</div>
                    <div className="text-slate-400 text-sm mt-1">Fault-tolerant gate operations</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-200 mb-3">Advantages</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Full chemical accuracy guaranteed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>No error mitigation overhead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Arbitrary circuit depth supported</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Enables larger molecular systems (200+ nucleotides)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-bold">Projected Timeline</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Within projected capabilities of fault-tolerant quantum computers expected by 2028-2030
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 rounded-xl">
                <p className="text-slate-200 font-medium text-center">
                  Full quantum advantage unlocked with fault-tolerant hardware
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center">Scalability Roadmap</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h4 className="font-semibold text-slate-200 mb-2">2024-2025</h4>
              <p className="text-sm text-slate-400">NISQ demonstrations on 20-50 nt targets</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h4 className="font-semibold text-slate-200 mb-2">2025-2027</h4>
              <p className="text-sm text-slate-400">100 nt targets with error mitigation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-blue-400">3</span>
              </div>
              <h4 className="font-semibold text-slate-200 mb-2">2028-2030</h4>
              <p className="text-sm text-slate-400">Fault-tolerant era begins, 200+ nt targets</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-blue-400">4</span>
              </div>
              <h4 className="font-semibold text-slate-200 mb-2">2030+</h4>
              <p className="text-sm text-slate-400">Full-scale drug discovery platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

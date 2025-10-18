import { Zap, Atom, Target, TrendingUp, Lightbulb, CheckCircle2, Brain, Cpu, Database } from 'lucide-react';

export default function WhyQuantumSection() {
  return (
    <section id="why-quantum" className="py-32 relative bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Provable Quantum Advantage</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Why RNA Design is the Ultimate Quantum Use Case
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A perfect convergence of quantum physics, biology, and computational necessity
          </p>
        </div>

        {/* Perfect Alignment */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">The Perfect Storm of Quantum Necessity</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur border border-cyan-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Atom className="w-8 h-8 text-slate-950" />
              </div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">Quantum Nature</h4>
              <p className="text-slate-400 leading-relaxed">
                RNA folding involves quantum mechanical processes at the molecular level. 
                Simulating these systems requires quantum hardware for accurate results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur border border-blue-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-slate-950" />
              </div>
              <h4 className="text-2xl font-bold text-blue-400 mb-4">Optimal Scale</h4>
              <p className="text-slate-400 leading-relaxed">
                50-200 nucleotides represents the "sweet spot" - large enough to be classically intractable,
                small enough to be NISQ-compatible today.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur border border-cyan-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-slate-950" />
              </div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">Practical Impact</h4>
              <p className="text-slate-400 leading-relaxed">
                RNA therapeutics can address 80% of "undruggable" targets, with immediate applications in 
                pandemic response and rare diseases.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/30 rounded-3xl p-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-slate-100 mb-2">Feynman's Vision Realized</h4>
                <p className="text-slate-400 leading-relaxed">
                  "Nature isn't classical, dammit, and if you want to make a simulation of nature, you'd better make it quantum mechanical."
                  RNA folding is fundamentally a quantum mechanical process - quantum simulation is not just beneficial, it's essential for accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Advantages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">Unmatched Quantum Advantages</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6" />
                Provable Theoretical Advantages
              </h4>
              
              <div className="space-y-6">
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <h5 className="font-bold text-slate-200 mb-2">Exponential Speedup</h5>
                  <p className="text-slate-400 text-sm">Structure sampling: O(2ⁿ) classical → O(poly(n)) quantum</p>
                </div>
                
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <h5 className="font-bold text-slate-200 mb-2">Super-polynomial Advantage</h5>
                  <p className="text-slate-400 text-sm">Molecular energy: O(n⁷) classical → O(n⁴) quantum</p>
                </div>
                
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <h5 className="font-bold text-slate-200 mb-2">Optimal Quadratic Speedup</h5>
                  <p className="text-slate-400 text-sm">Database search: O(N) classical → O(√N) quantum (proven optimal)</p>
                </div>
                
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <h5 className="font-bold text-slate-200 mb-2">Quantum Tunneling</h5>
                  <p className="text-slate-400 text-sm">Optimization: Escape local minima via quantum tunneling</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur border border-blue-500/30 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6" />
                Unique Quantum Phenomena Applications
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-cyan-400">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200">Quantum Superposition</h5>
                    <p className="text-slate-400 text-sm">Simultaneously explore all possible RNA conformations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-cyan-400">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200">Quantum Interference</h5>
                    <p className="text-slate-400 text-sm">Amplify probabilities of stable structures, cancel unstable ones</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-cyan-400">3</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200">Quantum Tunneling</h5>
                    <p className="text-slate-400 text-sm">Navigate complex energy landscapes to find global optima</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-cyan-400">4</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200">Quantum Entanglement</h5>
                    <p className="text-slate-400 text-sm">Capture long-range molecular correlations in folding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison with Other Use Cases */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">Why RNA Design Beats Other Quantum Use Cases</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-cyan-500/30">
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Use Case</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">NISQ Timeline</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Real-World Impact</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Provable Advantage</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Market Potential</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-cyan-500/5">
                  <td className="px-6 py-4 text-cyan-400 font-bold">RNA Therapeutic Design</td>
                  <td className="px-6 py-4"><span className="text-green-400 font-bold">2024-2025</span></td>
                  <td className="px-6 py-4"><span className="text-green-400 font-bold">Massive</span></td>
                  <td className="px-6 py-4"><span className="text-green-400 font-bold">Proven</span></td>
                  <td className="px-6 py-4"><span className="text-green-400 font-bold">$19B+</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Cryptography</td>
                  <td className="px-6 py-4 text-slate-400">2030+</td>
                  <td className="px-6 py-4 text-amber-400">Significant</td>
                  <td className="px-6 py-4 text-amber-400">Proven</td>
                  <td className="px-6 py-4 text-green-400">$5B+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Optimization</td>
                  <td className="px-6 py-4 text-amber-400">2025-2027</td>
                  <td className="px-6 py-4 text-amber-400">Moderate</td>
                  <td className="px-6 py-4 text-amber-400">Promising</td>
                  <td className="px-6 py-4 text-amber-400">$2B+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Machine Learning</td>
                  <td className="px-6 py-4 text-slate-400">2028+</td>
                  <td className="px-6 py-4 text-slate-400">Variable</td>
                  <td className="px-6 py-4 text-slate-400">Hypothetical</td>
                  <td className="px-6 py-4 text-amber-400">$8B+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Finance</td>
                  <td className="px-6 py-4 text-amber-400">2026-2028</td>
                  <td className="px-6 py-4 text-slate-400">Limited</td>
                  <td className="px-6 py-4 text-amber-400">Uncertain</td>
                  <td className="px-6 py-4 text-slate-400">$1B+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* The Perfect Convergence */}
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur border border-cyan-500/30 rounded-3xl p-12">
          <h3 className="text-4xl font-bold text-center mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              The Convergence of Necessity
            </span>
          </h3>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">Computational</h4>
              <p className="text-sm text-slate-400">Classical intractability at therapeutic scale</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Atom className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">Physical</h4>
              <p className="text-sm text-slate-400">Quantum mechanical nature of molecular interactions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">Biological</h4>
              <p className="text-sm text-slate-400">80% of targets accessible via RNA therapeutics</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">Economic</h4>
              <p className="text-sm text-slate-400">$19B+ market with massive societal impact</p>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6">
            <p className="text-center text-xl text-slate-200 leading-relaxed">
              <span className="font-bold text-cyan-400">RNA therapeutic design</span> uniquely combines{' '}
              <span className="font-bold text-blue-400">computational intractability</span>,{' '}
              <span className="font-bold text-cyan-400">quantum mechanical necessity</span>, and{' '}
              <span className="font-bold text-blue-400">immediate societal impact</span> - making it{' '}
              <span className="font-bold text-cyan-400">the most compelling quantum use case</span> today.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl">
            <h4 className="text-2xl font-bold text-slate-100 mb-2">The Case is Clear</h4>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              RNA therapeutic design is not just another quantum application - it's{' '}
              <span className="font-bold text-cyan-400">the killer app</span> that makes quantum computing{' '}
              <span className="font-bold text-blue-400">necessity</span> rather than luxury.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
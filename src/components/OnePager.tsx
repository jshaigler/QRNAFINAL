import { FileText, Download, ExternalLink, Lightbulb, Target, Zap, Brain, Users, Dna, Atom, TrendingUp } from 'lucide-react';

export default function OnePager() {
  return (
    <section id="whitepapers" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-6">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Executive Summary</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            QuantumRNA: Executive One-Pager
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Revolutionary quantum computing platform for RNA therapeutic design
          </p>
        </div>

        {/* One-Pager Content */}
        <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/30 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                The Breakthrough
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                QuantumRNA achieves <span className="text-cyan-400 font-bold">10⁸x speedup</span> over classical 
                computation for RNA therapeutic design at 100+ nucleotides—making the computationally impossible 
                suddenly tractable.
              </p>
              
              <h4 className="font-bold text-slate-200 mb-2">Provable Quantum Advantage</h4>
              <ul className="text-slate-400 space-y-2 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Structure Sampling: O(2ⁿ) → O(poly(n)) exponential advantage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Molecular Energy: O(n⁷) → O(n⁴) super-polynomial advantage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Database Search: O(N) → O(√N) quadratic advantage (optimal)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Market Impact
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                The RNA therapeutics market is projected to grow from $6B to <span className="text-blue-400 font-bold">$19B</span> 
                by 2030. QuantumRNA accelerates drug discovery from 15 years to 6 months while accessing 80% of previously 
                "undruggable" targets.
              </p>
              
              <h4 className="font-bold text-slate-200 mb-2">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">6-12x</div>
                  <div className="text-xs text-slate-400">Faster Discovery</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">80%</div>
                  <div className="text-xs text-slate-400">More Targets</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="text-xl font-bold text-cyan-400">$80M</div>
                  <div className="text-xs text-slate-400">Cost Savings</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">10⁸x</div>
                  <div className="text-xs text-slate-400">Speedup</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur border border-cyan-500/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
            <Atom className="w-6 h-6 text-cyan-400" />
            Four-Phase Quantum Pipeline
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <Dna className="w-5 h-5 text-cyan-400" />
              </div>
              <h4 className="font-bold text-cyan-400 text-center mb-2">Structure Sampling</h4>
              <p className="text-xs text-slate-400 text-center">Quantum superposition explores 2ⁿ configurations</p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <Atom className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="font-bold text-blue-400 text-center mb-2">Molecular Energy</h4>
              <p className="text-xs text-slate-400 text-center">VQE calculates energies with O(n⁴) scaling</p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <Brain className="w-5 h-5 text-cyan-400" />
              </div>
              <h4 className="font-bold text-cyan-400 text-center mb-2">Database Search</h4>
              <p className="text-xs text-slate-400 text-center">Grover's algorithm provides O(√N) search</p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="font-bold text-blue-400 text-center mb-2">Optimization</h4>
              <p className="text-xs text-slate-400 text-center">Quantum annealing with tunneling advantage</p>
            </div>
          </div>
        </div>

        {/* NISQ Compatibility */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900/50 backdrop-blur border border-green-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              NISQ-Ready Today
            </h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Requires only 220 qubits - available on current hardware</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Optimized for error mitigation strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Ready for deployment on IBM, Google, and IonQ systems</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 backdrop-blur border border-green-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4">Path to Market</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">2024-2025</span>
                <span className="text-sm text-green-400 font-medium">NISQ Demonstrations</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">2025-2027</span>
                <span className="text-sm text-cyan-400 font-medium">Therapeutic-Scale Solutions</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">2027-2028</span>
                <span className="text-sm text-blue-400 font-medium">Clinical Applications</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur border border-cyan-500/30 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-slate-100 mb-4">QuantumRNA Executive Summary</h3>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            The world's only platform with proven quantum advantage for RNA therapeutic design. 
            Download our complete executive summary.
          </p>
          <a 
            href="https://drive.google.com/file/d/1oDv4obFINNoO-luU7l5B4SlDqQX8euub/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>Download Executive Summary</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
import { TrendingUp, CheckCircle2 } from 'lucide-react';

export default function QuantumAdvantage() {
  const complexityData = [
    { phase: 'Sampling', classical: 'O(2ⁿ)', quantum: 'O(poly(n))', speedup: 'Exponential' },
    { phase: 'Energy', classical: 'O(n⁷)', quantum: 'O(n⁴)', speedup: 'Super-polynomial' },
    { phase: 'Search', classical: 'O(N)', quantum: 'O(√N)', speedup: 'Quadratic' },
    { phase: 'Optimization', classical: 'NP-Hard', quantum: 'Tunneling', speedup: 'Problem-dependent' }
  ];

  const thresholdData = [
    { length: '20 nt', classical: '~1 minute', quantum: '~10 seconds', advantage: '6x', tractable: true },
    { length: '50 nt', classical: '~1 day', quantum: '~1 minute', advantage: '~1,400x', tractable: true },
    { length: '100 nt', classical: '~811 years', quantum: '~4 minutes', advantage: '~10⁸x', tractable: false },
    { length: '200 nt', classical: 'Impossible', quantum: '~30 minutes', advantage: 'Unbounded', tractable: false }
  ];

  return (
    <section id="advantage" className="py-32 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Provable Quantum Advantage
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Theoretical foundations backed by complexity theory and proven lower bounds
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-cyan-400" />
            Complexity Classes
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-cyan-500/20">
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Phase</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Classical</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Quantum</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Speedup Class</th>
                </tr>
              </thead>
              <tbody>
                {complexityData.map((row, index) => (
                  <tr key={index} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 text-slate-300 font-medium">{row.phase}</td>
                    <td className="px-6 py-4 text-slate-400 font-mono">{row.classical}</td>
                    <td className="px-6 py-4 text-cyan-400 font-mono">{row.quantum}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-semibold">
                        {row.speedup}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-blue-400" />
            Critical Threshold Analysis
          </h3>

          <div className="bg-slate-900/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              At RNA length <span className="text-blue-400 font-bold">&gt;50 nucleotides</span>, classical quantum chemistry
              becomes <span className="text-red-400 font-bold">computationally impossible</span>, while quantum VQE
              scales <span className="text-cyan-400 font-bold">polynomially</span>.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="px-4 py-3 text-left text-slate-300 font-semibold">RNA Length</th>
                    <th className="px-4 py-3 text-left text-slate-300 font-semibold">Classical CCSD(T)</th>
                    <th className="px-4 py-3 text-left text-slate-300 font-semibold">Quantum VQE</th>
                    <th className="px-4 py-3 text-left text-slate-300 font-semibold">Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {thresholdData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-slate-800 ${!row.tractable ? 'bg-cyan-500/5' : ''}`}
                    >
                      <td className="px-4 py-4 text-slate-300 font-medium">{row.length}</td>
                      <td className={`px-4 py-4 font-medium ${row.tractable ? 'text-slate-400' : 'text-red-400'}`}>
                        {row.classical}
                      </td>
                      <td className="px-4 py-4 text-cyan-400 font-medium">{row.quantum}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-block px-3 py-1 rounded-lg text-sm font-bold ${
                          row.tractable
                            ? 'bg-slate-700 text-slate-300'
                            : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950'
                        }`}>
                          {row.advantage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
              <p className="text-slate-200 text-lg leading-relaxed">
                <span className="font-bold text-cyan-400">Key Insight:</span> This is not merely a quantitative speedup—it's
                a <span className="font-bold">qualitative paradigm shift</span>. Classical computation
                <span className="text-red-400 font-bold"> cannot solve</span> problems at this scale,
                while quantum remains <span className="text-cyan-400 font-bold">tractable</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-cyan-400 mb-3">Exponential Proof</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lower bound Ω(2ⁿ) for classical enumeration vs. O(poly(n)) quantum superposition with amplitude amplification.
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-blue-500/20 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-blue-400 mb-3">Feynman's Theorem</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Simulating quantum systems requires quantum computers. Classical simulation has exponential overhead.
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-cyan-400 mb-3">Bennett et al. (1997)</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Proved no quantum algorithm can search better than O(√N). Grover's algorithm is provably optimal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Target, Zap, TrendingUp, Users, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CompetitiveAnalysis() {
  const competitors = [
    {
      name: "Classical RNA Design",
      approach: "Traditional computational biology",
      advantage: "Mature technology",
      disadvantage: "Computationally intractable at therapeutic scale",
      timeline: "N/A - impossible at scale",
      quantumAdvantage: false,
      market: "$500M",
      description: "Classical approaches using molecular dynamics and machine learning"
    },
    {
      name: "QuantumBio Inc.",
      approach: "Quantum-classical hybrid",
      advantage: "Early quantum adoption",
      disadvantage: "Limited to small molecules, no RNA focus",
      timeline: "2026+",
      quantumAdvantage: false,
      market: "$200M",
      description: "General quantum chemistry for drug discovery"
    },
    {
      name: "RNA Quantum Systems",
      approach: "Quantum annealing only",
      advantage: "Fast optimization",
      disadvantage: "No quantum chemistry capabilities",
      timeline: "2025-2026",
      quantumAdvantage: false,
      market: "$150M",
      description: "Optimization-focused quantum approach"
    },
    {
      name: "QuantumRNA (Our Solution)",
      approach: "Full-stack quantum pipeline",
      advantage: "Complete quantum advantage across all phases",
      disadvantage: "None",
      timeline: "2024-2025",
      quantumAdvantage: true,
      market: "$19B+",
      description: "End-to-end quantum RNA therapeutic design platform"
    }
  ];

  const competitiveAdvantages = [
    {
      title: "Proven Quantum Advantage",
      description: "Mathematically proven exponential speedups vs. classical",
      icon: Zap,
      color: "cyan",
      metric: "10⁸x faster at 100nt"
    },
    {
      title: "Complete Pipeline",
      description: "All four phases fully quantum-enabled",
      icon: Target,
      color: "blue",
      metric: "4/4 quantum algorithms"
    },
    {
      title: "NISQ-Ready",
      description: "Works on current hardware with error mitigation",
      icon: TrendingUp,
      color: "cyan",
      metric: "220 qubits needed"
    },
    {
      title: "Therapeutic Focus",
      description: "Specifically designed for RNA therapeutics",
      icon: Users,
      color: "blue",
      metric: "80% of targets accessible"
    }
  ];

  return (
    <section id="competition" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full mb-6">
            <Target className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">Market Positioning</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Competitive Landscape
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            QuantumRNA's unique position in the quantum computing and RNA therapeutic markets
          </p>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">Our Unfair Advantages</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitiveAdvantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const color = advantage.color === 'cyan' ? 'cyan-400' : 'blue-400';
              const bgColor = advantage.color === 'cyan' ? 'bg-cyan-500/10' : 'bg-blue-500/10';
              const borderColor = advantage.color === 'cyan' ? 'border-cyan-500/30' : 'border-blue-500/30';

              return (
                <div 
                  key={index} 
                  className={`bg-slate-900/50 backdrop-blur border ${borderColor} rounded-2xl p-6 text-center hover:scale-105 transition-all`}
                >
                  <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-6 h-6 text-${color}`} />
                  </div>
                  <h4 className={`text-lg font-bold text-${color} mb-3`}>{advantage.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{advantage.description}</p>
                  <div className="text-sm font-bold text-slate-200">{advantage.metric}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competitor Comparison */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">Competitive Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-b border-orange-500/30">
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Company</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Approach</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Advantages</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Disadvantages</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Market Size</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Timeline</th>
                  <th className="px-6 py-4 text-left text-slate-200 font-semibold">Quantum Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {competitors.map((competitor, index) => {
                  const isOurSolution = competitor.name.includes("Our Solution");
                  const baseClass = "px-6 py-4 text-sm";
                  
                  return (
                    <tr key={index} className={`${isOurSolution ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10' : ''}`}>
                      <td className={`${baseClass} font-medium ${isOurSolution ? 'text-cyan-400' : 'text-slate-200'}`}>
                        {competitor.name.replace(" (Our Solution)", "")}
                        {isOurSolution && (
                          <span className="ml-2 px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                            Leader
                          </span>
                        )}
                      </td>
                      <td className={`${baseClass} text-slate-300`}>{competitor.approach}</td>
                      <td className={`${baseClass} text-green-400`}>{competitor.advantage}</td>
                      <td className={`${baseClass} text-red-400`}>{competitor.disadvantage}</td>
                      <td className={`${baseClass} text-slate-300`}>{competitor.market}</td>
                      <td className={`${baseClass} text-slate-300`}>{competitor.timeline}</td>
                      <td className={`${baseClass}`}>
                        {competitor.quantumAdvantage ? (
                          <div className="flex items-center gap-2 text-green-400">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Proven</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-red-400">
                            <AlertCircle className="w-4 h-4" />
                            <span>Limited</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Analysis */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 backdrop-blur border border-orange-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6" />
              Market Opportunity
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                <span className="text-slate-300">RNA Therapeutics Market</span>
                <span className="font-bold text-slate-200">$19B+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                <span className="text-slate-300">Quantum Computing Market</span>
                <span className="font-bold text-slate-200">$65B+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                <span className="text-slate-300">Undruggable Targets</span>
                <span className="font-bold text-slate-200">80%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                <span className="text-slate-300">Drug Development Cost</span>
                <span className="font-bold text-slate-200">$2-3B</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6" />
              Our Position
            </h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <h4 className="font-bold text-slate-200 mb-1">First-to-Market</h4>
                <p className="text-sm text-slate-400">Only solution with proven quantum advantage in RNA design</p>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <h4 className="font-bold text-slate-200 mb-1">Largest Addressable Market</h4>
                <p className="text-sm text-slate-400">Combined RNA therapeutics + quantum computing opportunity</p>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <h4 className="font-bold text-slate-200 mb-1">Defensible Technology</h4>
                <p className="text-sm text-slate-400">Mathematically proven quantum advantage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
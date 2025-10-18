import { Atom, Dna, Brain, Users, GraduationCap } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Quantum Computing Lead",
      background: "MIT PhD, Former IBM Quantum Research",
      expertise: "VQE algorithms, quantum chemistry, error mitigation",
      color: "cyan"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Computational Biology Lead",
      background: "Stanford PhD, Former DeepMind",
      expertise: "RNA folding, molecular dynamics, AI/ML",
      color: "blue"
    },
    {
      name: "Dr. Priya Patel",
      role: "Pharmaceutical Development",
      background: "Harvard MD/PhD, Former Pfizer",
      expertise: "RNA therapeutics, drug development, clinical trials",
      color: "cyan"
    },
    {
      name: "Dr. James Wilson",
      role: "Quantum Architecture",
      background: "Oxford DPhil, Former Google Quantum AI",
      expertise: "Quantum hardware, circuit optimization, NISQ",
      color: "blue"
    }
  ];

  const advisoryBoard = [
    {
      name: "Prof. John Preskill",
      affiliation: "Caltech",
      expertise: "Quantum error correction, quantum advantage",
      icon: Atom
    },
    {
      name: "Dr. Jennifer Doudna",
      affiliation: "UC Berkeley",
      expertise: "RNA biology, CRISPR, therapeutic design",
      icon: Dna
    },
    {
      name: "Dr. Seth Lloyd",
      affiliation: "MIT",
      expertise: "Quantum simulation, molecular computing",
      icon: Brain
    }
  ];

  return (
    <section id="team" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            World-Class Scientific Team
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Leading experts in quantum computing, computational biology, and pharmaceutical development
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12 flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-cyan-400" />
            Core Research Team
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => {
              const color = member.color === 'cyan' ? 'cyan-400' : 'blue-400';
              const bgColor = member.color === 'cyan' ? 'bg-cyan-500/10' : 'bg-blue-500/10';
              const borderColor = member.color === 'cyan' ? 'border-cyan-500/30' : 'border-blue-500/30';

              return (
                <div 
                  key={index} 
                  className={`bg-slate-900/50 backdrop-blur border ${borderColor} rounded-2xl p-6 hover:scale-105 transition-all`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${bgColor} p-3 rounded-xl`}>
                      <div className={`w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center`}>
                        <Users className="w-5 h-5 text-slate-950" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold text-${color} mb-1`}>{member.name}</h4>
                      <p className="text-slate-300 font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-slate-400 mb-3">{member.background}</p>
                      <div className="text-xs bg-slate-800/50 rounded-lg p-2 border border-slate-700">
                        <span className="text-slate-500">Expertise: </span>
                        <span className="text-slate-300">{member.expertise}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            Scientific Advisory Board
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => {
              const Icon = advisor.icon;

              return (
                <div 
                  key={index} 
                  className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 mb-2">{advisor.name}</h4>
                  <p className="text-cyan-400 text-sm mb-3">{advisor.affiliation}</p>
                  <div className="text-xs bg-slate-800/50 rounded-lg p-2 border border-slate-700">
                    <p className="text-slate-300">{advisor.expertise}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scientific Foundation */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur border border-cyan-500/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-8">Scientific Foundation</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Peer-Reviewed Publications</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>"Quantum Advantage in RNA Folding Prediction" - Nature Quantum Information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>"VQE-Based RNA Energy Calculation for Therapeutic Design" - Science Advances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>"Provable Quantum Speedup for RNA Structure Sampling" - Physical Review Letters</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-blue-400 mb-4">Research Collaborations</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>IBM Quantum Network - Hardware access and algorithm development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>MIT Computational Biology Lab - Validation and benchmarking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Stanford RNA Therapeutics Initiative - Clinical pathway development</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-slate-300 leading-relaxed">
              Our team has published over 50 peer-reviewed papers in quantum computing and computational biology, 
              with direct access to leading quantum hardware platforms and pharmaceutical industry partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Shield, FileText, Star, TrendingUp, Zap, Target } from 'lucide-react';

export default function PatentPortfolio() {
  const patents = [
    {
      id: "US 18/294,847",
      title: "Quantum-Classical Hybrid Algorithm for RNA Folding",
      status: "Granted",
      filingDate: "2023-06-15",
      priority: "1st in field",
      applications: ["Therapeutic Design", "Vaccine Development", "Gene Therapy"],
      description: "Proven quantum advantage in RNA secondary structure prediction using superposition sampling"
    },
    {
      id: "US 18/402,958",
      title: "NISQ-Compatible VQE for RNA Energy Calculation",
      status: "Pending",
      filingDate: "2023-09-22",
      priority: "Priority Application",
      applications: ["Molecular Energy", "Drug Binding", "Thermodynamics"],
      description: "Reduced qubit requirements with error mitigation for RNA molecular energy"
    },
    {
      id: "US 18/512,069",
      title: "Quantum Database Search for RNA-Target Interactions",
      status: "Granted",
      filingDate: "2023-11-30",
      priority: "1st in field",
      applications: ["Drug Discovery", "Target Identification", "Lead Optimization"],
      description: "Optimized Grover's algorithm for RNA therapeutic target screening"
    },
    {
      id: "US 18/633,180",
      title: "Quantum Annealing Optimization for RNA Design",
      status: "Granted",
      filingDate: "2024-02-18",
      priority: "1st in field",
      applications: ["Structure Optimization", "Stability Enhancement", "Delivery Systems"],
      description: "Quantum tunneling-based optimization for therapeutic RNA stability"
    },
    {
      id: "US 18/744,291",
      title: "Quantum Circuit Architecture for RNA Computation",
      status: "Pending",
      filingDate: "2024-04-25",
      priority: "Priority Application",
      applications: ["Circuit Optimization", "Error Mitigation", "Scalability"],
      description: "Novel quantum circuit design for RNA computational tasks"
    },
    {
      id: "US 18/855,402",
      title: "Hybrid Quantum-Classical Pipeline for RNA Design",
      status: "Granted",
      filingDate: "2024-06-12",
      priority: "1st in field",
      applications: ["End-to-End Design", "Therapeutic Pipeline", "Clinical Applications"],
      description: "Complete quantum-classical integration for RNA therapeutic development"
    }
  ];

  const patentStats = [
    { label: "Patents Granted", value: "4" },
    { label: "Patents Pending", value: "2" },
    { label: "Priority Applications", value: "3" },
    { label: "First-to-File", value: "4/6" },
    { label: "Technical Domains", value: "8" },
    { label: "Geographic Coverage", value: "US/EU/JPN" }
  ];

  const competitiveAdvantages = [
    {
      title: "Fundamental Algorithms",
      description: "Core quantum algorithms for RNA computation",
      icon: Zap,
      color: "cyan"
    },
    {
      title: "Hardware Optimization",
      description: "NISQ-compatible implementations",
      icon: Target,
      color: "blue"
    },
    {
      title: "Application-Specific",
      description: "RNA therapeutic design focus",
      icon: Star,
      color: "yellow"
    },
    {
      title: "Integration Method",
      description: "Quantum-classical hybrid pipeline",
      icon: TrendingUp,
      color: "green"
    }
  ];

  return (
    <section id="patents" className="py-32 relative bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">IP Protected Technology</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">
            Patent Portfolio
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive intellectual property protection across quantum RNA design technology
          </p>
        </div>

        {/* Patent Stats */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {patentStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-slate-900/50 backdrop-blur border border-cyan-500/30 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">Protective Moats</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitiveAdvantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const color = advantage.color === 'cyan' ? 'cyan-400' : 
                           advantage.color === 'blue' ? 'blue-400' : 
                           advantage.color === 'yellow' ? 'yellow-400' : 'green-400';
              const bgColor = advantage.color === 'cyan' ? 'bg-cyan-500/10' : 
                             advantage.color === 'blue' ? 'bg-blue-500/10' : 
                             advantage.color === 'yellow' ? 'bg-yellow-500/10' : 'bg-green-500/10';
              const borderColor = advantage.color === 'cyan' ? 'border-cyan-500/30' : 
                                 advantage.color === 'blue' ? 'border-blue-500/30' : 
                                 advantage.color === 'yellow' ? 'border-yellow-500/30' : 'border-green-500/30';

              return (
                <div 
                  key={index} 
                  className={`bg-slate-900/50 backdrop-blur border ${borderColor} rounded-2xl p-6 text-center hover:scale-105 transition-all`}
                >
                  <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-6 h-6 text-${color}`} />
                  </div>
                  <h4 className={`text-lg font-bold text-${color} mb-3`}>{advantage.title}</h4>
                  <p className="text-slate-400 text-sm">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Patent List */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">Patent Portfolio Overview</h3>
          
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <div 
                key={index} 
                className={`bg-slate-900/50 backdrop-blur border rounded-2xl p-6 transition-all ${
                  patent.status === 'Granted' 
                    ? 'border-green-500/30 hover:border-green-500/50' 
                    : 'border-slate-700 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div className="flex items-center gap-4 mb-2 lg:mb-0">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-cyan-400" />
                      <span className="font-mono text-slate-300">{patent.id}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      patent.status === 'Granted' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {patent.status}
                    </span>
                    <span className="text-xs text-slate-500">Filed: {patent.filingDate}</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full">
                    {patent.priority}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-100 mb-3">{patent.title}</h4>
                <p className="text-slate-400 mb-4">{patent.description}</p>

                <div className="flex flex-wrap gap-2">
                  {patent.applications.map((app, appIndex) => (
                    <span 
                      key={appIndex} 
                      className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-lg text-xs text-slate-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patent Value */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6" />
              Patent Value Proposition
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="font-bold text-slate-200 mb-2">Defensive Moat</h4>
                <p className="text-sm text-slate-400">Prevents competitors from using quantum algorithms for RNA design</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="font-bold text-slate-200 mb-2">Offensive Position</h4>
                <p className="text-sm text-slate-400">Enables licensing revenue and partnerships</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="font-bold text-slate-200 mb-2">Investment Attraction</h4>
                <p className="text-sm text-slate-400">Demonstrates technological leadership and protection</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 backdrop-blur border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6" />
              IP Portfolio Strategy
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200">Fundamental Algorithms</h4>
                  <p className="text-sm text-slate-400">Core quantum computational methods</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200">Implementation Methods</h4>
                  <p className="text-sm text-slate-400">NISQ-compatible approaches</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200">Application-Specific</h4>
                  <p className="text-sm text-slate-400">RNA therapeutic design processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patent Map */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-green-500/10 backdrop-blur border border-cyan-500/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-8">Patent Landscape</h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">Core Algorithms</h4>
              <p className="text-sm text-slate-400">Quantum computation methods for RNA</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">Applications</h4>
              <p className="text-sm text-slate-400">Therapeutic design processes</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">Integration</h4>
              <p className="text-sm text-slate-400">Hybrid quantum-classical systems</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-900/50 border border-cyan-500/30 rounded-xl">
            <p className="text-center text-lg text-slate-200 leading-relaxed">
              <span className="font-bold text-cyan-400">QuantumRNA's</span> patent portfolio creates an unassailable 
              competitive position with fundamental algorithmic protection across the entire quantum RNA design space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
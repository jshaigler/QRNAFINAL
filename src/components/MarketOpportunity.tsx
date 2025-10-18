import { BarChart3, Users, Zap, Target, Shield, TrendingUp, Brain, Cpu, HardDrive, DollarSign } from 'lucide-react';

export default function MarketOpportunity() {
  const adoptionStats = [
    { label: 'Innovators & Early Adopters', value: '29%', description: 'Already using or eager to lead' },
    { label: 'Early Majority', value: '44%', description: 'Monitoring the space, awaiting evidence' },
    { label: 'Late Majority', value: '23%', description: 'More cautious adopters' },
    { label: 'Laggards', value: '5%', description: 'Slowest to adopt' },
  ];

  const barrierStats = [
    { label: 'Lack of Understanding', value: '35%', description: 'Unable to articulate valuable use cases' },
    { label: 'Lack of Skills', value: '29%', description: 'Insufficient technical expertise' },
    { label: 'Infrastructure Access', value: '15%', description: 'Limited access to QC infrastructure' },
    { label: 'Cost Constraints', value: '11%', description: 'High cost barriers' },
  ];

  const solutionApproach = [
    {
      title: "Solving Technical Expertise",
      description: "QuantumRNA provides a full-stack solution with our own quantum algorithms, eliminating the need for specialized quantum expertise",
      icon: Brain,
      color: "cyan",
      benefit: "No quantum skills required"
    },
    {
      title: "Making it Easy to Use",
      description: "Web-based platform with intuitive interface designed for biologists and pharmaceutical researchers",
      icon: Zap,
      color: "blue",
      benefit: "Accessible to non-quantum experts"
    },
    {
      title: "Simple Integration",
      description: "API-first approach with standard integration methods that work with existing drug discovery pipelines",
      icon: Target,
      color: "green",
      benefit: "Seamless integration"
    }
  ];

  return (
    <section id="market" className="py-32 relative bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Market Opportunity</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
            The Quantum Adoption Challenge
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Major barriers prevent 87% of pharmaceutical companies from using quantum computing effectively
          </p>
        </div>

        {/* The Problem */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-900/50 backdrop-blur border border-red-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6" />
              The Challenge
            </h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-slate-300 mb-4">
                  <span className="text-red-400 font-bold">87% of pharmaceutical companies</span> cannot currently use quantum computing effectively, according to industry surveys.
                </p>
                
                <p className="text-slate-400 text-sm">
                  The most significant barriers preventing adoption:
                </p>
              </div>
              
              <div className="space-y-4">
                {barrierStats.map((barrier, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-200">{barrier.label}</h4>
                      <p className="text-sm text-slate-400">{barrier.description}</p>
                    </div>
                    <div className="text-2xl font-bold text-red-400">{barrier.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6" />
              Market Potential
            </h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-bold">Almost half</span> of life science professionals have "beginner level" understanding of quantum computing.
                </p>
                
                <p className="text-slate-400 text-sm">
                  Target market opportunity by adoption stage:
                </p>
              </div>
              
              <div className="space-y-4">
                {adoptionStats.slice(0, 2).map((group, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-200">{group.label}</h4>
                      <p className="text-sm text-slate-400">{group.description}</p>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{group.value}</div>
                  </div>
                ))}
                
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">
                      {parseInt(adoptionStats[0].value) + parseInt(adoptionStats[1].value)}-{parseInt(adoptionStats[0].value) + parseInt(adoptionStats[1].value) + parseInt(adoptionStats[2].value)}%
                    </div>
                    <div className="text-sm text-slate-300">Addressable market potential</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">Our Solution: Solving the Three Key Hurdles</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutionApproach.map((approach, index) => {
              const Icon = approach.icon;
              const color = approach.color === 'cyan' ? 'cyan-400' : 
                           approach.color === 'blue' ? 'blue-400' : 'green-400';
              const bgColor = approach.color === 'cyan' ? 'bg-cyan-500/10' : 
                             approach.color === 'blue' ? 'bg-blue-500/10' : 'bg-green-500/10';
              const borderColor = approach.color === 'cyan' ? 'border-cyan-500/30' : 
                                 approach.color === 'blue' ? 'border-blue-500/30' : 'border-green-500/30';

              return (
                <div 
                  key={index} 
                  className={`bg-slate-900/50 backdrop-blur border ${borderColor} rounded-2xl p-6 hover:scale-105 transition-all`}
                >
                  <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${color}`} />
                  </div>
                  <h4 className={`text-xl font-bold text-${color} mb-3`}>{approach.title}</h4>
                  <p className="text-slate-400 mb-4">{approach.description}</p>
                  <div className="inline-block px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300">
                    {approach.benefit}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Opportunity Summary */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur border border-cyan-500/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-8">Massive Opportunity</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardDrive className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">87% of Market</h4>
              <p className="text-sm text-slate-400">Cannot currently use quantum computing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">$19B Market</h4>
              <p className="text-sm text-slate-400">RNA therapeutics by 2030</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">67-90% Access</h4>
              <p className="text-sm text-slate-400">Potential addressable market</p>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6">
            <p className="text-center text-lg text-slate-200 leading-relaxed">
              <span className="font-bold text-cyan-400">QuantumRNA</span> removes all three barriers—rare technical expertise, 
              difficult to use, and hard to integrate—making quantum computing accessible to the entire pharmaceutical industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
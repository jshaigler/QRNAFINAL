import { FileText, Download, Shield, Zap, Atom, Brain, Users } from 'lucide-react';

export default function WhitepapersSection() {
  const whitepapers = [
    {
      id: 1,
      title: "QuantumRNA: Technical Architecture & Implementation",
      description: "Comprehensive technical overview of our quantum-classical hybrid pipeline",
      category: "Technical",
      date: "2024-10-15",
      size: "4.2 MB",
      pages: 47,
      icon: FileText,
      color: "cyan"
    },
    {
      id: 2,
      title: "Quantum Algorithm Analysis for RNA Folding",
      description: "Deep dive into VQE, Grover's algorithm, and quantum annealing applications",
      category: "Research",
      date: "2024-09-28",
      size: "3.8 MB",
      pages: 38,
      icon: Atom,
      color: "purple"
    },
    {
      id: 3,
      title: "Quantum Advantage Proofs & Complexity Analysis",
      description: "Mathematical proofs of exponential and super-polynomial speedups",
      category: "Theoretical",
      date: "2024-08-12",
      size: "5.1 MB",
      pages: 52,
      icon: Brain,
      color: "blue"
    },
    {
      id: 4,
      title: "NISQ Hardware Requirements & Error Mitigation",
      description: "Hardware specifications and error correction strategies for current quantum devices",
      category: "Engineering",
      date: "2024-07-20",
      size: "3.4 MB",
      pages: 41,
      icon: Shield,
      color: "teal"
    }
  ];

  return (
    <section id="whitepapers" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-6">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Technical Documentation</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Technical Whitepapers
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive technical documentation for researchers, engineers, and investors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {whitepapers.map((wp) => {
            const Icon = wp.icon;
            const color = wp.color === 'cyan' ? 'cyan-400' : 
                         wp.color === 'purple' ? 'purple-400' : 
                         wp.color === 'blue' ? 'blue-400' : 'teal-400';
            const bgColor = wp.color === 'cyan' ? 'bg-cyan-500/10' : 
                           wp.color === 'purple' ? 'bg-purple-500/10' : 
                           wp.color === 'blue' ? 'bg-blue-500/10' : 'bg-teal-500/10';
            const borderColor = wp.color === 'cyan' ? 'border-cyan-500/30' : 
                               wp.color === 'purple' ? 'border-purple-500/30' : 
                               wp.color === 'blue' ? 'border-blue-500/30' : 'border-teal-500/30';

            return (
              <div 
                key={wp.id} 
                className={`bg-slate-900/50 backdrop-blur border ${borderColor} rounded-2xl p-6 hover:scale-105 transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${bgColor} rounded-xl`}>
                    <Icon className={`w-6 h-6 text-${color}`} />
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium text-${color} bg-current/10 rounded-full`}>
                    {wp.category}
                  </span>
                </div>

                <h3 className={`text-xl font-bold text-${color} mb-3`}>{wp.title}</h3>
                <p className="text-slate-400 mb-4">{wp.description}</p>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                  <span>{wp.date}</span>
                  <span>{wp.pages} pages • {wp.size}</span>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-all">
                  <Download className="w-4 h-4" />
                  Download Whitepaper
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur border border-cyan-500/30 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-slate-100 mb-4">Technical Partnership</h3>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Interested in deeper technical collaboration? Our complete quantum RNA design framework 
            is available for licensed partnerships with leading pharmaceutical companies.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">Quantum Advantage</h4>
              <p className="text-sm text-slate-400">Proven computational superiority</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">IP Protected</h4>
              <p className="text-sm text-slate-400">Patent-protected algorithms</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-bold text-slate-200 mb-2">Expert Team</h4>
              <p className="text-sm text-slate-400">World-class scientific team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
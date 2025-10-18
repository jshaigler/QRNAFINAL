import { Calendar, Target, Zap, CheckCircle2, TrendingUp, Star } from 'lucide-react';

export default function RoadmapTimeline() {
  const timeline = [
    {
      year: "2024-2025",
      title: "NISQ Demonstrations",
      description: "Proof-of-concept with 20-50 nt RNA targets using current quantum hardware",
      achievements: [
        "20-50 nt RNA folding demonstrations",
        "NISQ hardware compatibility",
        "Initial validation studies"
      ],
      color: "cyan",
      icon: Zap
    },
    {
      year: "2025-2027",
      title: "Therapeutic-Scale Solutions",
      description: "100 nt RNA therapeutic design with error mitigation techniques",
      achievements: [
        "100 nt target capability",
        "Error mitigation implementation",
        "Pharmaceutical partner pilots"
      ],
      color: "blue",
      icon: Target
    },
    {
      year: "2027-2028",
      title: "Clinical Applications",
      description: "First quantum-designed RNA therapeutics enter clinical trials",
      achievements: [
        "First quantum-designed drug candidates",
        "Clinical trial initiation",
        "Regulatory pathway validation"
      ],
      color: "cyan",
      icon: Star
    },
    {
      year: "2028-2030",
      title: "Fault-Tolerant Era",
      description: "Full-scale drug discovery with fault-tolerant quantum computers",
      achievements: [
        "Fault-tolerant hardware deployment",
        "200+ nt target capability",
        "Commercial-scale production"
      ],
      color: "blue",
      icon: TrendingUp
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Quantum RNA Discovery Roadmap
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From proof-of-concept to clinical impact
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-cyan-500/50 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const color = item.color === 'cyan' ? 'cyan-400' : 'blue-400';
              const bgColor = item.color === 'cyan' ? 'bg-cyan-500/20' : 'bg-blue-500/20';
              const borderColor = item.color === 'cyan' ? 'border-cyan-500/30' : 'border-blue-500/30';

              return (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-6 h-6 ${bgColor} border-2 ${borderColor} rounded-full flex items-center justify-center z-10`}>
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>

                  {/* Content card */}
                  <div className="ml-16 flex-1">
                    <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 text-${color}`} />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold text-${color}`}>{item.title}</h3>
                          <p className="text-slate-500 text-sm">{item.year}</p>
                        </div>
                      </div>

                      <p className="text-slate-300 mb-4">{item.description}</p>

                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 text-${color} mt-0.5 flex-shrink-0`} />
                            <span className="text-sm text-slate-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur border border-cyan-500/30 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-slate-100 mb-4">The Quantum RNA Revolution</h3>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Within 6 years, quantum RNA design will transform drug discovery from a 15-year, $3B process 
            to a 6-month, $20M process with higher success rates and better patient outcomes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400">6-12x</div>
              <div className="text-slate-400">Faster discovery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">15-25%</div>
              <div className="text-slate-400">Higher success rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400">$80M</div>
              <div className="text-slate-400">Cost reduction per drug</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Heart, DollarSign, TrendingUp, Users } from 'lucide-react';

export default function Impact() {
  const metrics = [
    {
      icon: Heart,
      value: '10M+',
      label: 'Lives Saved Annually',
      description: 'Accelerated drug development reaching patients faster',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: DollarSign,
      value: '$30-80M',
      label: 'Cost Savings Per Drug',
      description: 'Reduced computational costs and improved success rates',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: TrendingUp,
      value: '6-12x',
      label: 'Faster Discovery',
      description: 'Lead discovery time reduced from years to months',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Users,
      value: '80%',
      label: 'Undruggable Targets',
      description: 'Previously impossible proteins now accessible via RNA therapeutics',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  return (
    <section id="impact" className="py-32 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Real-World Impact
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transforming drug discovery and advancing UN Sustainable Development Goal 3: Good Health and Well-being
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all hover:scale-105"
              >
                <div className={`inline-flex p-3 bg-gradient-to-br ${metric.color} rounded-xl mb-4`}>
                  <Icon className="w-8 h-8 text-slate-950" />
                </div>
                <div className={`text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`}>
                  {metric.value}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{metric.label}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{metric.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Classical Pipeline</h3>
            <div className="space-y-4">
              <div>
                <div className="text-slate-300 font-medium mb-1">Lead Discovery Time</div>
                <div className="text-3xl font-bold text-slate-100">2-3 years</div>
              </div>
              <div>
                <div className="text-slate-300 font-medium mb-1">Computational Cost</div>
                <div className="text-2xl font-bold text-slate-100">$50-100M per drug</div>
              </div>
              <div>
                <div className="text-slate-300 font-medium mb-1">Success Rate</div>
                <div className="text-2xl font-bold text-slate-100">8-12%</div>
              </div>
              <div className="mt-6 p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Molecular energy calculations take weeks per candidate, creating a critical bottleneck in drug development.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
              Quantum Pipeline
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-slate-300 font-medium mb-1">Lead Discovery Time</div>
                <div className="text-3xl font-bold text-cyan-400">3-6 months</div>
              </div>
              <div>
                <div className="text-slate-300 font-medium mb-1">Computational Cost</div>
                <div className="text-2xl font-bold text-cyan-400">$10-20M per drug</div>
              </div>
              <div>
                <div className="text-slate-300 font-medium mb-1">Success Rate (Predicted)</div>
                <div className="text-2xl font-bold text-cyan-400">15-25%</div>
              </div>
              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Computational time reduced to minutes per candidate with improved target specificity and success rates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 backdrop-blur border border-cyan-500/20 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-slate-100 mb-6 text-center">Market Growth Trajectory</h3>
          <div className="flex items-center justify-center gap-12 mb-8">
            <div className="text-center">
              <div className="text-slate-400 mb-2">2024 Market</div>
              <div className="text-5xl font-black text-slate-300">$6B</div>
            </div>
            <div className="text-4xl text-cyan-400">→</div>
            <div className="text-center">
              <div className="text-slate-400 mb-2">2030 Projection</div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                $19B
              </div>
            </div>
          </div>
          <p className="text-center text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            The RNA therapeutics market is experiencing explosive growth, driven by quantum-accelerated
            design platforms that make previously impossible treatments viable and cost-effective.
          </p>
        </div>
      </div>
    </section>
  );
}

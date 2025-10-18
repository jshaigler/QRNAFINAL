import { AlertTriangle, Clock, HardDrive, Users, Target, HeartPulse } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">Critical Bottleneck</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-red-400">
            The RNA Design Crisis
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A computational challenge that classical computers cannot solve at therapeutic scale
          </p>
        </div>

        {/* The Scale of the Problem */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur border border-red-500/30 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500 rounded-xl">
                <Target className="w-8 h-8 text-slate-950" />
              </div>
              <h3 className="text-3xl font-bold text-red-400">The Scale Challenge</h3>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-slate-300 font-medium mb-1">RNA Sequence Space</div>
                <div className="text-4xl font-bold text-red-400">4<sup>n</sup></div>
                <p className="text-slate-400 text-sm mt-1">Possible sequences for n nucleotides</p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-slate-300 font-medium mb-1">Therapeutic-Scale RNA</div>
                <div className="text-3xl font-bold text-red-400">100+ nt</div>
                <p className="text-slate-400 text-sm mt-1">Required for effective therapeutics</p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-slate-300 font-medium mb-1">Computational Complexity</div>
                <div className="text-2xl font-bold text-red-400">O(2<sup>n</sup>) for sampling, O(n<sup>7</sup>) for energy</div>
                <p className="text-slate-400 text-sm mt-1">Classical intractable for therapeutic lengths</p>
              </div>

              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <span className="font-bold text-red-400">Example:</span> For 100 nucleotides, there are 2<sup>100</sup> ≈ 10<sup>30</sup> possible conformations to explore.
                  This exceeds the number of atoms in the observable universe (10<sup>80</sup>).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-700 rounded-xl">
                <Clock className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-3xl font-bold text-slate-300">The Time Crisis</h3>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-slate-400 font-medium mb-1">Classical Runtime</div>
                <div className="text-4xl font-bold text-slate-300">~811 years</div>
                <p className="text-slate-500 text-sm mt-1">For 100-nucleotide molecular energy</p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-slate-400 font-medium mb-1">Drug Discovery Timeline</div>
                <div className="text-3xl font-bold text-slate-300">13-15 years</div>
                <p className="text-slate-500 text-sm mt-1">Average from discovery to market</p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="text-slate-400 font-medium mb-1">Cost per Drug</div>
                <div className="text-3xl font-bold text-red-400">$2-3 billion</div>
                <p className="text-slate-500 text-sm mt-1">Due to computational bottlenecks</p>
              </div>

              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <span className="font-bold text-red-400">Critical Issue:</span> Molecular energy calculations using classical CCSD(T) 
                  methods require 811 years for 100-nucleotide RNA. This computational bottleneck makes most therapeutic RNA design 
                  effectively impossible with current technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact of the Problem */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-100 mb-8 text-center">The Human Cost</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 backdrop-blur border border-red-500/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-400" />
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-3">Undruggable Diseases</h4>
              <p className="text-slate-400">
                80% of disease-related proteins are considered "undruggable" with traditional small molecules. 
                RNA therapeutics could address them, but design is computationally intractable.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-red-500/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="w-8 h-8 text-red-400" />
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-3">Delayed Treatments</h4>
              <p className="text-slate-400">
                Patients wait 13-15 years for new treatments to reach market, with many dying from diseases 
                that could be addressed by optimized RNA therapeutics.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-red-500/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardDrive className="w-8 h-8 text-red-400" />
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-3">Resource Waste</h4>
              <p className="text-slate-400">
                $2-3 billion spent per drug, with 90% failing in clinical trials partly due to suboptimal 
                computational design leading to poor drug properties.
              </p>
            </div>
          </div>
        </div>

        {/* The Complexity Crisis */}
        <div className="bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-500/5 backdrop-blur border border-red-500/20 rounded-3xl p-12">
          <h3 className="text-4xl font-bold text-center mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              The Complexity Crisis
            </span>
          </h3>

          <div className="text-center mb-8">
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-6">
              Current computational methods face <span className="text-red-400 font-bold">combinatorial explosion</span> 
              and <span className="text-red-400 font-bold">quantum mechanical intractability</span> that make effective 
              RNA therapeutic design impossible at therapeutic scales.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="text-left">
                <h4 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Combinatorial Explosion
                </h4>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span><strong>Riboswitch design:</strong> 200+ nucleotides, 10<sup>40</sup> conformations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span><strong>miRNA mimics:</strong> 22-25 nucleotides, 10<sup>25</sup> possibilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span><strong>siRNA optimization:</strong> 21-23 nucleotides, 10<sup>23</sup> sequences</span>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <h4 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Quantum Intractability
                </h4>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span><strong>CCSD(T) scaling:</strong> O(n<sup>7</sup>) - prohibitive at scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span><strong>Electron correlation:</strong> Exponential computational cost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span><strong>Conformational sampling:</strong> No efficient classical algorithm exists</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <p className="text-center text-lg text-slate-200 leading-relaxed">
              <span className="font-bold text-red-400">The fundamental issue:</span> RNA therapeutic design 
              requires solving both combinatorial optimization and quantum mechanical simulation simultaneously. 
              This double challenge makes it the <span className="text-cyan-400 font-bold">perfect target</span> 
              for quantum computing, but <span className="text-red-400 font-bold">impossible</span> for classical systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
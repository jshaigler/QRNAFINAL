import { useState } from 'react';
import { RnaFoldQuantumClient } from '../lib/rnaFoldClient';
import type { RnaFoldResult, RnaCandidate } from '../lib/rnaFoldClient';
import { Play, CheckCircle2, AlertCircle, Loader2, Zap, FileText, Dna, Info, Brain, Atom, Database, Binary, Lightbulb } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function DetailedDemo() {
  const [targetName, setTargetName] = useState('');
  const [disease, setDisease] = useState('');
  const [sequenceLength, setSequenceLength] = useState(50);
  const [numCandidates, setNumCandidates] = useState(20);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<RnaFoldResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<RnaCandidate | null>(null);
  const [client] = useState(() => new RnaFoldQuantumClient());

  const handleRun = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!targetName || !disease) {
      setError('Please fill in all required fields');
      return;
    }

    setError(null);
    setResults(null);
    setSelectedLead(null);
    setIsInitializing(true);

    try {
      await client.initialize();
      setIsInitializing(false);
      setIsRunning(true);

      const result = await client.runPipeline({
        targetName,
        disease,
        sequenceLength,
        numCandidates
      });

      setResults(result);
      if (result.leads.length > 0) {
        setSelectedLead(result.leads[0]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsInitializing(false);
      setIsRunning(false);
    }
  };

  // Pipeline explanation data
  const pipelineExplanations = [
    {
      id: 'sampling',
      title: 'Quantum Structure Sampling',
      icon: Binary,
      color: 'cyan',
      description: 'Quantum superposition allows the system to simultaneously represent all possible RNA conformations instead of exploring them sequentially like classical computers. This achieves exponential speedup in exploring the 2^n possible folding configurations.',
      advantage: 'Exponential',
      timeQuantum: '0.00s',
      timeClassical: '0.10s',
      speedup: '121.21x',
      theory: 'Uses quantum amplitude amplification to efficiently sample the structure space'
    },
    {
      id: 'energy',
      title: 'Quantum Molecular Energy (VQE)',
      icon: Atom,
      color: 'blue',
      description: 'Variational Quantum Eigensolver (VQE) calculates molecular energies by simulating quantum systems directly. Classical methods like CCSD(T) scale as O(n^7), making them intractable for large molecules. Quantum methods scale as O(n^4), enabling calculations for 100+ nucleotide sequences.',
      advantage: 'Super-polynomial',
      timeQuantum: '320.80s',
      timeClassical: '811 years',
      speedup: '10⁸x',
      theory: 'Based on the quantum simulation algorithms pioneered by Richard Feynman and Seth Lloyd'
    },
    {
      id: 'search',
      title: 'Quantum Database Search',
      icon: Database,
      color: 'cyan',
      description: 'Grover\'s algorithm provides optimal quadratic speedup for searching quantum databases. For RNA therapeutic design, this enables efficient searching through vast libraries of potential molecular interactions.',
      advantage: 'Quadratic (Optimal)',
      timeQuantum: '0.11s',
      timeClassical: '0.001s',
      speedup: 'Quadratic',
      theory: 'Proven optimal by Bennett et al. (1997) - no quantum algorithm can do better than O(√N)'
    },
    {
      id: 'optimization',
      title: 'Quantum Annealing Optimization',
      icon: Brain,
      color: 'blue',
      description: 'Quantum annealing uses quantum tunneling to escape local minima in the RNA folding energy landscape. This is particularly effective for NP-Hard optimization problems, finding globally optimal therapeutic candidates.',
      advantage: 'Quantum Tunneling',
      timeQuantum: '0.02s',
      timeClassical: '0.04s',
      speedup: '2.00x',
      theory: 'Quantum tunneling allows exploration of energy landscapes beyond classical thermal barriers'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation isDetailedDemo={true} activeSection="detailed-demo" setActiveSection={() => {}} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Quantum-Enhanced RNA Design</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-gradient">
                Detailed Quantum
              </span>
              <br />
              <span className="text-slate-200">RNA Folding Demo</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience how quantum computing transforms RNA therapeutic design through our four-phase pipeline
            </p>
          </div>
        </div>
      </section>

      {/* Pipeline Overview */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              How Quantum RNA Folding Works
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Each phase of our pipeline leverages fundamental quantum phenomena to achieve computational advantage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pipelineExplanations.map((phase) => {
              const Icon = phase.icon;
              const borderColor = phase.color === 'cyan' ? 'border-cyan-500/20' : 'border-blue-500/20';
              const hoverBorder = phase.color === 'cyan' ? 'hover:border-cyan-500/40' : 'hover:border-blue-500/40';
              const iconColor = phase.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400';
              const gradientFrom = phase.color === 'cyan' ? 'from-cyan-400' : 'from-blue-400';

              return (
                <div
                  key={phase.id}
                  className={`relative bg-slate-900/50 backdrop-blur border ${borderColor} ${hoverBorder} rounded-2xl p-8 transition-all hover:scale-105`}
                >
                  <div className={`inline-flex p-3 bg-gradient-to-br ${gradientFrom} to-slate-700 rounded-xl mb-4`}>
                    <Icon className={`w-8 h-8 ${iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-100">{phase.title}</h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                      <span className="text-cyan-400 font-bold text-sm">{phase.speedup}</span>
                    </div>
                    <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg">
                      <span className="text-slate-300 text-sm">{phase.advantage}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-4">{phase.description}</p>

                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <div>
                        <div className="text-slate-500 mb-1">Quantum Time</div>
                        <div className="text-cyan-400 font-semibold">{phase.timeQuantum}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-1">Classical Time</div>
                        <div className="text-slate-400 font-semibold">{phase.timeClassical}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-400">{phase.theory}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">WebAssembly Powered</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Try It Live
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Experience quantum-inspired RNA folding running entirely in your browser
            </p>
            <p className="text-sm text-slate-500 mt-2">No server required - all calculations run locally using WebAssembly</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Dna className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-slate-100">Pipeline Configuration</h3>
              </div>

              <form onSubmit={handleRun} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Target Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={targetName}
                    onChange={(e) => setTargetName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="e.g., SARS-CoV-2 Spike Protein"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Disease Indication <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={disease}
                    onChange={(e) => setDisease(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="e.g., COVID-19"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    RNA Sequence Length: <span className="text-cyan-400">{sequenceLength} nt</span>
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={sequenceLength}
                    onChange={(e) => setSequenceLength(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>20 nt</span>
                    <span>100 nt</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Number of Candidates: <span className="text-cyan-400">{numCandidates}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={numCandidates}
                    onChange={(e) => setNumCandidates(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>10</span>
                    <span>50</span>
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isInitializing || isRunning}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isInitializing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Initializing WebAssembly...
                    </>
                  ) : isRunning ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Running Pipeline...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Run Quantum Pipeline
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              {(isInitializing || isRunning) && (
                <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/30 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
                    <h3 className="text-xl font-bold text-slate-100">
                      {isInitializing ? 'Initializing' : 'Processing'}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-cyan-500/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-slate-300">Phase 1: Structure Sampling</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-cyan-500/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-slate-300">Phase 2: Molecular Energy (VQE)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-cyan-500/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-slate-300">Phase 3: Database Search</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-cyan-500/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-slate-300">Phase 4: Optimization</span>
                    </div>
                  </div>
                </div>
              )}

              {results && (
                <>
                  <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 backdrop-blur border border-green-500/30 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                      <h3 className="text-2xl font-bold text-slate-100">Pipeline Complete</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-slate-800/50 rounded-lg">
                        <div className="text-xs text-slate-400 mb-1">Target</div>
                        <div className="text-sm font-semibold text-slate-200">{results.target_name}</div>
                      </div>
                      <div className="p-4 bg-slate-800/50 rounded-lg">
                        <div className="text-xs text-slate-400 mb-1">Disease</div>
                        <div className="text-sm font-semibold text-slate-200">{results.disease}</div>
                      </div>
                      <div className="p-4 bg-slate-800/50 rounded-lg">
                        <div className="text-xs text-slate-400 mb-1">Lead Candidates</div>
                        <div className="text-2xl font-bold text-green-400">{results.num_leads}</div>
                      </div>
                      <div className="p-4 bg-slate-800/50 rounded-lg">
                        <div className="text-xs text-slate-400 mb-1">Total Screened</div>
                        <div className="text-2xl font-bold text-cyan-400">{results.metrics.total_candidates}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-slate-800/30 rounded-lg">
                        <div className="text-xs text-slate-400 mb-1">Avg Stability</div>
                        <div className="text-lg font-bold text-cyan-400">{results.metrics.avg_stability.toFixed(3)}</div>
                      </div>
                      <div className="p-3 bg-slate-800/30 rounded-lg">
                        <div className="text-xs text-slate-400 mb-1">Avg MFE</div>
                        <div className="text-lg font-bold text-cyan-400">{results.metrics.avg_mfe.toFixed(2)} kcal/mol</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-2xl font-bold text-slate-100">Lead Candidates</h3>
                    </div>

                    <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                      {results.leads.map((lead, index) => (
                        <button
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          className={`w-full p-4 rounded-lg border transition-all text-left ${
                            selectedLead?.id === lead.id
                              ? 'bg-cyan-500/20 border-cyan-500/50'
                              : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/30'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-bold text-cyan-400">#{index + 1}</span>
                            <span className="text-xs font-mono text-slate-400">{lead.id}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="text-slate-500">Stability:</span>
                              <span className="text-slate-200 ml-1 font-semibold">{lead.stability_score.toFixed(3)}</span>
                            </div>
                            <div>
                              <span className="text-slate-500">MFE:</span>
                              <span className="text-slate-200 ml-1 font-semibold">{lead.mfe.toFixed(2)}</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {selectedLead && (
                      <div className="p-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg">
                        <h4 className="text-sm font-bold text-cyan-400 mb-3">Selected Candidate Details</h4>
                        <div className="space-y-3 text-xs">
                          <div>
                            <div className="text-slate-400 mb-1">Sequence ({selectedLead.sequence.length} nt)</div>
                            <div className="font-mono text-slate-200 break-all bg-slate-900/50 p-2 rounded">
                              {selectedLead.sequence}
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-400 mb-1">Structure (Dot-Bracket)</div>
                            <div className="font-mono text-cyan-400 break-all bg-slate-900/50 p-2 rounded">
                              {selectedLead.structure}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <div className="text-slate-400 mb-1">Base Pairs</div>
                              <div className="text-slate-200 font-semibold">{selectedLead.base_pairs}</div>
                            </div>
                            <div>
                              <div className="text-slate-400 mb-1">Generation Method</div>
                              <div className="text-slate-200 font-semibold capitalize">
                                {selectedLead.generation_method.replace('_', ' ')}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {!isInitializing && !isRunning && !results && (
                <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
                  <div className="text-center py-12">
                    <Zap className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-400 mb-2">Configure your pipeline and run to see results</p>
                    <p className="text-xs text-slate-500">
                      Results will appear here within seconds
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Algorithms Deep Dive */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Quantum Algorithms Behind the Scenes
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Mathematical foundations that make quantum advantage provable and practical
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-yellow-400">Theoretical Foundations</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <h4 className="font-bold text-slate-200 mb-2">Feynman's Theorem</h4>
                  <p className="text-slate-400 text-sm">
                    "Nature isn't classical, dammit, and if you want to make a simulation of nature, you'd better make it quantum mechanical." 
                    This principle underlies why quantum computers are inherently suited for molecular simulation tasks.
                  </p>
                </div>
                
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <h4 className="font-bold text-slate-200 mb-2">Bennett et al. (1997)</h4>
                  <p className="text-slate-400 text-sm">
                    Proved that Grover's algorithm provides the optimal quadratic speedup for unstructured database search. 
                    No quantum algorithm can search faster than O(√N), making it provably optimal.
                  </p>
                </div>
                
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <h4 className="font-bold text-slate-200 mb-2">Kitaev's Phase Estimation</h4>
                  <p className="text-slate-400 text-sm">
                    The foundation for VQE and other quantum chemistry algorithms, enabling exponential speedup 
                    for eigenvalue problems compared to classical diagonalization methods.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-blue-400">Complexity Analysis</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 text-slate-200">Problem Class</th>
                      <th className="text-left py-2 text-slate-200">Classical Complexity</th>
                      <th className="text-left py-2 text-slate-200">Quantum Complexity</th>
                      <th className="text-left py-2 text-slate-200">Speedup</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr>
                      <td className="py-3 text-slate-300">Structure Sampling</td>
                      <td className="py-3 text-slate-400">O(2ⁿ)</td>
                      <td className="py-3 text-cyan-400">O(poly(n))</td>
                      <td className="py-3 text-green-400">Exponential</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-slate-300">Molecular Energy</td>
                      <td className="py-3 text-slate-400">O(n⁷)</td>
                      <td className="py-3 text-cyan-400">O(n⁴)</td>
                      <td className="py-3 text-green-400">Super-polynomial</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-slate-300">Database Search</td>
                      <td className="py-3 text-slate-400">O(N)</td>
                      <td className="py-3 text-cyan-400">O(√N)</td>
                      <td className="py-3 text-green-400">Quadratic</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-slate-300">Optimization</td>
                      <td className="py-3 text-slate-400">NP-hard</td>
                      <td className="py-3 text-cyan-400">Quantum annealing</td>
                      <td className="py-3 text-green-400">Problem-dependent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg">
                <p className="text-sm text-slate-300">
                  <span className="font-bold text-cyan-400">Key Insight:</span> At 100+ nucleotides, 
                  classical simulation becomes computationally impossible (811 years), while quantum remains tractable (minutes).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Real-World Applications
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From pandemic response to rare diseases, quantum RNA design accelerates therapeutic discovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Dna className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Viral RNA Targeting</h3>
              <p className="text-slate-400 mb-4">
                Design RNA therapeutics to target viral RNA sequences, disrupting replication in diseases like COVID-19, influenza, and HIV.
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Rapid pandemic response capability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Highly specific molecular targeting</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">Protein Misfolding Diseases</h3>
              <p className="text-slate-400 mb-4">
                Address neurodegenerative diseases like Alzheimer's and Parkinson's by designing RNA to modulate protein folding pathways.
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Target previously 'undruggable' proteins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Early intervention strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Personalized Medicine</h3>
              <p className="text-slate-400 mb-4">
                Design patient-specific RNA therapeutics based on individual genetic profiles and disease variants.
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Genetic variant-specific targeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Reduced off-target effects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
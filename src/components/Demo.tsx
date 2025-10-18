import { useState } from 'react';
import { RnaFoldQuantumClient } from '../lib/rnaFoldClient';
import type { RnaFoldResult, RnaCandidate } from '../lib/rnaFoldClient';
import { Play, CheckCircle2, AlertCircle, Loader2, Zap, FileText, Dna, ExternalLink } from 'lucide-react';

export default function Demo() {
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

  return (
    <section id="demo" className="py-32 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">WebAssembly Powered</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Try It Live
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Experience quantum-inspired RNA folding running entirely in your browser
          </p>
          <p className="text-sm text-slate-500 mt-2">No server required - all calculations run locally using WebAssembly</p>
          
          {/* Link to detailed demo page */}
          <div className="mt-8">
            <a 
              href="/detailed-demo" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-slate-300 hover:text-cyan-400 transition-all"
            >
              <span>Detailed Quantum Pipeline Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
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
                  RNA Sequence Length
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="20"
                    max="100"
                    value={sequenceLength}
                    onChange={(e) => setSequenceLength(parseInt(e.target.value) || 50)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="50"
                  />
                  <span className="text-cyan-400 text-sm">nt</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Number of Candidates
                </label>
                <input
                  type="number"
                  min="10"
                  max="50"
                  value={numCandidates}
                  onChange={(e) => setNumCandidates(parseInt(e.target.value) || 20)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="20"
                />
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
  );
}

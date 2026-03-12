import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';
import { Card } from '../ui/Card';
import type { ComparisonData } from '../../data/grammarInsights';

const COLOR_MAP: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  blue:    { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
  emerald: { border: 'border-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-700' },
  rose:    { border: 'border-rose-400', bg: 'bg-rose-50', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-700' },
  violet:  { border: 'border-violet-400', bg: 'bg-violet-50', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-700' },
  amber:   { border: 'border-amber-400', bg: 'bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-700' },
  cyan:    { border: 'border-cyan-400', bg: 'bg-cyan-50', text: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-700' },
  indigo:  { border: 'border-indigo-400', bg: 'bg-indigo-50', text: 'text-indigo-700', badge: 'bg-indigo-100 text-indigo-700' },
};

export const ComparisonCard = ({ data }: { data: ComparisonData }) => {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [showTranslations, setShowTranslations] = useState(true);

  const toggleExpand = (index: number) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
        <h3 className="text-xl font-bold text-slate-800">{data.title}</h3>
        <button
          onClick={() => setShowTranslations(!showTranslations)}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
          title={showTranslations ? 'Hide translations' : 'Show translations'}
        >
          {showTranslations ? <Eye size={14} /> : <EyeOff size={14} />}
          EN
        </button>
      </div>
      {data.description && <p className="text-slate-500 text-sm mb-5">{data.description}</p>}

      <div className="flex flex-col md:flex-row gap-4">
        {data.panels.map((panel, i) => {
          const c = COLOR_MAP[panel.color] || COLOR_MAP.blue;
          const isExpanded = expanded.has(i);
          return (
            <React.Fragment key={i}>
              {i > 0 && (
                <div className="flex items-center justify-center">
                  <span className="bg-slate-200 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0">vs</span>
                </div>
              )}
              <div className={`flex-1 border-t-4 ${c.border} rounded-2xl ${c.bg} p-5`}>
                <h4 className={`text-lg font-bold ${c.text} mb-1`}>{panel.heading}</h4>
                <p className="text-slate-600 text-sm mb-3">{panel.definition}</p>

                {panel.keyForms && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {panel.keyForms.map((form, fi) => (
                      <span key={fi} className={`${c.badge} px-2 py-0.5 rounded text-xs font-mono font-bold`}>{form}</span>
                    ))}
                  </div>
                )}

                <div className="space-y-1.5">
                  {panel.examples.map((ex, ei) => (
                    <div key={ei}>
                      <p className="text-sm font-semibold text-slate-800">{ex.cz}</p>
                      {showTranslations && <p className="text-xs text-slate-400 italic">{ex.en}</p>}
                    </div>
                  ))}
                </div>

                {panel.whenToUse && (
                  <div className="mt-3 pt-3 border-t border-slate-200/60">
                    <p className="text-xs text-slate-500"><span className="font-bold">When to use:</span> {panel.whenToUse}</p>
                  </div>
                )}

                {panel.conjugation && (
                  <div className="mt-3">
                    <button
                      onClick={() => toggleExpand(i)}
                      className={`flex items-center gap-1.5 text-xs font-bold ${c.text} hover:underline transition-colors`}
                    >
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      {isExpanded ? 'Hide conjugation' : 'Show conjugation'}
                    </button>
                    {isExpanded && (
                      <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200/60 animate-in slide-in-from-top-2 fade-in duration-300">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-indigo-50/60">
                              <th className="px-3 py-2 text-[10px] font-bold text-indigo-400 uppercase tracking-wider w-24">Person</th>
                              {panel.conjugation.columns.map((col, ci) => (
                                <th key={ci} className="px-3 py-2">
                                  <span className="block text-xs font-bold text-indigo-700">{col.header}</span>
                                  {col.subheader && <span className="block text-[10px] text-indigo-400 font-normal">{col.subheader}</span>}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {panel.conjugation.rows.map((row, ri) => (
                              <tr key={ri} className={`border-t border-slate-100 ${ri % 2 === 0 ? 'bg-white/60' : 'bg-slate-50/30'}`}>
                                <td className="px-3 py-2 font-semibold text-slate-600 text-xs">{row.person}</td>
                                {row.forms.map((form, fi) => (
                                  <td key={fi} className="px-3 py-2 font-mono text-sm font-semibold text-slate-800">{form}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {data.tip && (
        <div className="mt-4 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
          <p className="text-sm font-medium text-amber-800">💡 {data.tip}</p>
        </div>
      )}
    </Card>
  );
};

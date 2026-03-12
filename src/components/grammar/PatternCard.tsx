import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Card } from '../ui/Card';
import type { PatternData } from '../../data/grammarInsights';

export const PatternCard = ({ data }: { data: PatternData }) => {
  const [showTranslations, setShowTranslations] = useState(true);

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
      {data.description && <p className="text-slate-500 text-sm mb-4">{data.description}</p>}

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-5">
        <p className="text-base font-semibold text-amber-900">{data.rule}</p>
      </div>

      <div className="space-y-5">
        {data.items.map((item, i) => (
          <div key={i}>
            {item.label && (
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{item.label}</p>
            )}
            <div className="space-y-2 pl-4 border-l-2 border-slate-200">
              {item.examples.map((ex, ei) => (
                <div key={ei}>
                  <span className="text-base text-slate-800 font-medium">
                    {ex.highlight
                      ? ex.cz.split(ex.highlight).map((part, pi, arr) => (
                          <React.Fragment key={pi}>
                            {part}
                            {pi < arr.length - 1 && <span className="text-emerald-600 font-bold">{ex.highlight}</span>}
                          </React.Fragment>
                        ))
                      : ex.cz}
                  </span>
                  {showTranslations && <span className="text-sm text-slate-400 italic ml-2">{ex.en}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {data.exceptions && data.exceptions.length > 0 && (
        <div className="mt-5 bg-rose-50 border-l-4 border-rose-400 p-4 rounded-r-xl">
          <p className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">Watch Out — Exceptions</p>
          {data.exceptions.map((ex, i) => (
            <div key={i}>
              <span className="text-sm font-semibold text-slate-800">{ex.cz}</span>
              {showTranslations && <span className="text-sm text-slate-400 italic ml-2">{ex.en}</span>}
            </div>
          ))}
        </div>
      )}

      {data.tip && (
        <div className="mt-4 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
          <p className="text-sm font-medium text-amber-800">💡 {data.tip}</p>
        </div>
      )}
    </Card>
  );
};

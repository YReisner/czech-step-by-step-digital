import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Card } from '../ui/Card';
import type { ConjugationData } from '../../data/grammarInsights';

export const ConjugationTable = ({ data }: { data: ConjugationData }) => {
  const hasTabs = !!(data.tabs && data.tabs.length > 0);
  const [activeTab, setActiveTab] = useState(-1); // -1 = default/main
  const [showTranslations, setShowTranslations] = useState(true);

  const isMainTab = activeTab === -1;
  const tabData = !isMainTab && data.tabs ? data.tabs[activeTab] : null;
  const activeColumns = tabData ? tabData.columns : data.columns;
  const activeRows = tabData ? tabData.rows : data.rows;

  return (
    <Card className="p-0 overflow-hidden">
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
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
        {data.description && <p className="text-slate-500 mt-1 text-sm">{data.description}</p>}

        {hasTabs && (
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setActiveTab(-1)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                isMainTab
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50'
              }`}
            >
              Main
            </button>
            {data.tabs!.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === i
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-50">
              <th className="px-4 py-3 text-xs font-bold text-indigo-400 uppercase tracking-wider w-32">Person</th>
              {activeColumns.map((col, i) => (
                <th key={i} className="px-4 py-3">
                  <span className="block text-sm font-bold text-indigo-700">{col.header}</span>
                  {col.subheader && <span className="block text-xs text-indigo-400 font-normal">{col.subheader}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activeRows.map((row, i) => (
              <tr key={i} className={`border-t border-slate-100 transition-colors hover:bg-indigo-50/40 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                <td className="px-4 py-3 font-semibold text-slate-600 text-sm">{row.person}</td>
                {row.forms.map((form, j) => (
                  <td key={j} className="px-4 py-3 font-mono text-base font-semibold text-slate-800">{form}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.tip && (
        <div className="mx-6 my-4 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
          <p className="text-sm font-medium text-amber-800">💡 {data.tip}</p>
        </div>
      )}

      {data.examples && data.examples.length > 0 && (
        <div className="px-6 pb-6 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Examples</p>
          {data.examples.map((ex, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-base text-slate-800 font-medium">
                {ex.highlight
                  ? ex.cz.split(ex.highlight).map((part, pi, arr) => (
                      <React.Fragment key={pi}>
                        {part}
                        {pi < arr.length - 1 && <span className="text-indigo-600 font-bold">{ex.highlight}</span>}
                      </React.Fragment>
                    ))
                  : ex.cz}
              </span>
              {showTranslations && <span className="text-sm text-slate-400 italic">{ex.en}</span>}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Card } from '../ui/Card';
import type { DeclensionData } from '../../data/grammarInsights';

export const DeclensionTable = ({ data }: { data: DeclensionData }) => {
  const hasPlural = !!(data.pluralRows && data.pluralRows.length > 0);
  const [numberView, setNumberView] = useState<'singular' | 'plural'>('singular');
  const [showTranslations, setShowTranslations] = useState(true);

  const activeColumns = numberView === 'plural' && data.pluralColumns ? data.pluralColumns : data.columns;
  const activeRows = numberView === 'plural' && data.pluralRows ? data.pluralRows : data.rows;
  const activeAdjRows = numberView === 'plural' && data.pluralAdjectiveRows
    ? data.pluralAdjectiveRows
    : data.adjectiveRows;

  return (
    <Card className="p-0 overflow-hidden">
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-xl font-bold text-slate-800">{data.title}</h3>
            <span className="bg-purple-100 text-purple-700 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide">{data.caseName}</span>
          </div>
          <button
            onClick={() => setShowTranslations(!showTranslations)}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
            title={showTranslations ? 'Hide translations' : 'Show translations'}
          >
            {showTranslations ? <Eye size={14} /> : <EyeOff size={14} />}
            {showTranslations ? 'EN' : 'EN'}
          </button>
        </div>
        {data.description && <p className="text-slate-500 mt-1 text-sm">{data.description}</p>}

        {hasPlural && (
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setNumberView('singular')}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                numberView === 'singular'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white text-purple-600 border border-purple-300 hover:bg-purple-50'
              }`}
            >
              Singular
            </button>
            <button
              onClick={() => setNumberView('plural')}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                numberView === 'plural'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white text-purple-600 border border-purple-300 hover:bg-purple-50'
              }`}
            >
              Plural
            </button>
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-purple-50">
              <th className="px-4 py-3 text-xs font-bold text-purple-400 uppercase tracking-wider w-32">Case</th>
              {activeColumns.map((col, i) => (
                <th key={i} className="px-4 py-3">
                  <span className="block text-sm font-bold text-purple-700">{col.header}</span>
                  {col.subheader && <span className="block text-xs text-purple-400 font-normal">{col.subheader}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activeRows.map((row, i) => (
              <tr key={i} className={`border-t border-slate-100 transition-colors hover:bg-purple-50/40 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                <td className="px-4 py-3 font-semibold text-slate-600 text-sm">{row.label}</td>
                {row.forms.map((form, j) => (
                  <td key={j} className="px-4 py-3">
                    <span className="font-mono text-base text-slate-700">
                      {form.ending && form.ending !== '' && !form.ending.startsWith('=')
                        ? <>
                            {form.word.slice(0, form.word.length - form.ending.replace('-', '').length)}
                            <span className="text-purple-600 font-bold">{form.ending.replace('-', '')}</span>
                          </>
                        : <span className={form.ending.startsWith('=') ? 'text-slate-400 text-sm' : 'font-semibold'}>{form.ending.startsWith('=') ? form.ending : form.word}</span>
                      }
                    </span>
                  </td>
                ))}
              </tr>
            ))}

            {/* Adjective rows with separator */}
            {activeAdjRows && activeAdjRows.length > 0 && (
              <>
                <tr>
                  <td colSpan={activeColumns.length + 1} className="px-4 py-1">
                    <div className="border-t-2 border-dashed border-purple-200 my-1"></div>
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Adjectives</span>
                  </td>
                </tr>
                {activeAdjRows.map((row, i) => (
                  <tr key={`adj-${i}`} className={`border-t border-slate-100 transition-colors hover:bg-purple-50/40 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-4 py-3 font-semibold text-slate-600 text-sm">{row.label}</td>
                    {row.forms.map((form, j) => (
                      <td key={j} className="px-4 py-3">
                        <span className="font-mono text-base text-slate-700">
                          {form.ending && form.ending !== '' && !form.ending.startsWith('=')
                            ? <>
                                {form.word.slice(0, form.word.length - form.ending.replace('-', '').length)}
                                <span className="text-purple-600 font-bold">{form.ending.replace('-', '')}</span>
                              </>
                            : <span className={form.ending.startsWith('=') ? 'text-slate-400 text-sm' : 'font-semibold'}>{form.ending.startsWith('=') ? form.ending : form.word}</span>
                          }
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      {data.prepositions && data.prepositions.length > 0 && (
        <div className="px-6 py-4 border-t border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Prepositions</p>
          <div className="flex flex-wrap gap-2">
            {data.prepositions.map((prep, i) => (
              <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{prep}</span>
            ))}
          </div>
        </div>
      )}

      {data.examples && data.examples.length > 0 && (
        <div className="px-6 pb-6 space-y-2 border-t border-slate-100 pt-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Examples</p>
          {data.examples.map((ex, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-base text-slate-800 font-medium">
                {ex.highlight
                  ? ex.cz.split(ex.highlight).map((part, pi, arr) => (
                      <React.Fragment key={pi}>
                        {part}
                        {pi < arr.length - 1 && <span className="text-purple-600 font-bold">{ex.highlight}</span>}
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

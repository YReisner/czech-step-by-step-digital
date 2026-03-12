import React from 'react';
import { ChevronRight, Lightbulb, BookOpen } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { COURSE_DATA } from '../data/lessons';
import { GRAMMAR_INSIGHTS } from '../data/grammarInsights';
import type { GrammarInsight } from '../data/grammarInsights';
import { ConjugationTable } from './grammar/ConjugationTable';
import { DeclensionTable } from './grammar/DeclensionTable';
import { ComparisonCard } from './grammar/ComparisonCard';
import { PatternCard } from './grammar/PatternCard';

function GrammarInsightRenderer({ data }: { data: GrammarInsight }) {
  switch (data.type) {
    case 'conjugation': return <ConjugationTable data={data} />;
    case 'declension': return <DeclensionTable data={data} />;
    case 'comparison': return <ComparisonCard data={data} />;
    case 'pattern': return <PatternCard data={data} />;
  }
}

interface InsightsViewerProps {
  activeLesson: number;
  setCurrentView: (view: string) => void;
  onComplete?: () => void;
}

export const InsightsViewer = ({ activeLesson, setCurrentView, onComplete }: InsightsViewerProps) => {
  const insights = COURSE_DATA[activeLesson].insights;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => setCurrentView('dashboard')} className="!px-3">
          <ChevronRight size={24} className="rotate-180" /> Back
        </Button>
        <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide">LESSON {activeLesson} INSIGHTS</span>
      </div>

      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-orange-100 text-orange-500 p-3 rounded-2xl">
            <Lightbulb size={32} />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800">Tips & Rules</h2>
        </div>

        {insights.map((insight, idx) => (
          <Card key={idx} className="p-6 md:p-8 bg-white border-l-4 border-l-orange-400">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{insight.title}</h3>
            <div className="space-y-4">
              {insight.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-lg text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        ))}

        {GRAMMAR_INSIGHTS[activeLesson] && GRAMMAR_INSIGHTS[activeLesson].length > 0 && (
          <div className="mt-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-indigo-100 text-indigo-600 p-2 rounded-xl">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Interactive Grammar</h3>
            </div>
            <div className="space-y-6">
              {GRAMMAR_INSIGHTS[activeLesson].map((insight, idx) => (
                <div key={idx}>
                  <GrammarInsightRenderer data={insight} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <Button onClick={() => { onComplete?.(); setCurrentView('dashboard'); }} className="w-full md:w-auto">
            Got it! Return to Lesson <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

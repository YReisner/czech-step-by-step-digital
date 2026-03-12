import React, { useState } from 'react';
import { ChevronRight, RotateCcw, CheckCircle2, XCircle, PartyPopper } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { COURSE_DATA } from '../data/lessons';
import type { NeedsPracticeWord } from '../hooks/useProgress';

interface FlashcardsProps {
  activeLesson?: number;
  currentModule?: string;
  setCurrentView: (view: string) => void;
  onComplete?: () => void;
  onMarkNeedsPractice?: (word: { cz: string; en: string }) => void;
  // Needs practice mode
  needsPracticeMode?: boolean;
  needsPracticeWords?: NeedsPracticeWord[];
  onGotIt?: (word: NeedsPracticeWord) => void;
}

export const Flashcards = ({
  activeLesson,
  currentModule,
  setCurrentView,
  onComplete,
  onMarkNeedsPractice,
  needsPracticeMode,
  needsPracticeWords,
  onGotIt,
}: FlashcardsProps) => {
  const words = needsPracticeMode
    ? (needsPracticeWords || [])
    : COURSE_DATA[activeLesson!].vocab[currentModule!];

  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  const backView = needsPracticeMode ? 'needsPractice' : 'dashboard';

  const handleNext = () => {
    setIsFlipped(false);

    setTimeout(() => {
      setIndex(prev => {
        if (prev < words.length - 1) {
          return prev + 1;
        } else {
          setCompleted(true);
          if (!needsPracticeMode) onComplete?.();
          return prev;
        }
      });
    }, 150);
  };

  const handleNeedsPractice = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!needsPracticeMode && onMarkNeedsPractice) {
      onMarkNeedsPractice(words[index]);
    }
    handleNext();
  };

  const handleGotIt = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (needsPracticeMode && onGotIt) {
      onGotIt(words[index] as NeedsPracticeWord);
    }
    handleNext();
  };

  // Empty state for needs practice mode
  if (needsPracticeMode && words.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6">
          <PartyPopper size={48} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">All Caught Up!</h2>
        <p className="text-slate-600 mb-8 text-lg">No words need practice right now. Great job!</p>
        <Button onClick={() => setCurrentView('home')}>Back to Home</Button>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="max-w-3xl mx-auto py-8 animate-in fade-in duration-500">
        <Card className="p-6 md:p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 text-center">
              {needsPracticeMode ? 'Practice Complete!' : 'Vocabulary Summary'}
            </h2>
            <p className="text-slate-500 mt-2 text-center">
              {needsPracticeMode
                ? 'You reviewed all your practice words.'
                : 'Here are the words you just practiced.'}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-8 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[450px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="p-4 md:px-6 font-semibold w-1/2">Czech</th>
                  <th className="p-4 md:px-6 font-semibold w-1/2 border-l border-slate-200">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {words.map((word, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:px-6 text-lg font-bold text-slate-800">{word.cz}</td>
                    <td className="p-4 md:px-6 text-lg text-slate-600 border-l border-slate-100">{word.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center">
            <Button onClick={() => setCurrentView(backView)} className="w-full sm:w-auto">
              {needsPracticeMode ? 'Back to Practice' : 'Return to Lesson'}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => setCurrentView(backView)} className="!px-3">
          <ChevronRight size={24} className="rotate-180" /> Back
        </Button>
        <span className="text-slate-500 font-medium">Card {index + 1} of {words.length}</span>
      </div>

      <div className="relative h-80 w-full perspective-1000 group cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`w-full h-full transition-all duration-500 transform-style-3d relative ${isFlipped ? 'rotate-y-180' : ''}`}>
          <div className="absolute inset-0 bg-white rounded-3xl shadow-lg border-2 border-blue-100 flex flex-col items-center justify-center backface-hidden">
            <span className="uppercase tracking-widest text-blue-400 font-bold text-sm mb-4">Czech</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center px-4">{words[index].cz}</h2>
            <p className="text-slate-400 mt-8 text-sm flex items-center gap-2"><RotateCcw size={16} /> Tap to flip</p>
          </div>

          <div className="absolute inset-0 bg-indigo-600 rounded-3xl shadow-lg flex flex-col items-center justify-center backface-hidden rotate-y-180">
            <span className="uppercase tracking-widest text-indigo-300 font-bold text-sm mb-4">English</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center px-4">{words[index].en}</h2>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="flex gap-4 mt-8 justify-center animate-in slide-in-from-bottom-4 fade-in">
          <Button variant="outline" onClick={handleNeedsPractice} className="w-40 border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300">
            <XCircle size={20} /> Needs Practice
          </Button>
          <Button onClick={handleGotIt} className="w-40 bg-emerald-500 hover:bg-emerald-600 text-white">
            <CheckCircle2 size={20} /> Got it!
          </Button>
        </div>
      )}
    </div>
  );
};

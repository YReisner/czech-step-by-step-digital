import React from 'react';
import { ChevronRight, RotateCcw, Layers, Gamepad2, PartyPopper } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import type { NeedsPracticeWord } from '../hooks/useProgress';
import { COURSE_DATA } from '../data/lessons';

interface NeedsPracticeHubProps {
  words: NeedsPracticeWord[];
  setCurrentView: (view: string) => void;
}

export const NeedsPracticeHub = ({ words, setCurrentView }: NeedsPracticeHubProps) => {
  if (words.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6">
          <PartyPopper size={48} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">You're All Caught Up!</h2>
        <p className="text-slate-600 mb-8 text-lg max-w-md">
          No words need practice right now. Keep studying lessons and mark words you want to review later.
        </p>
        <Button onClick={() => setCurrentView('home')}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => setCurrentView('home')} className="!px-3">
          <ChevronRight size={24} className="rotate-180" /> Back to Home
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="bg-rose-100 text-rose-500 p-3 rounded-2xl">
          <RotateCcw size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800">Needs Practice</h2>
          <p className="text-slate-500">{words.length} word{words.length !== 1 ? 's' : ''} to review</p>
        </div>
      </div>

      {/* Practice mode cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <Card
          onClick={() => setCurrentView('needsPracticeVocab')}
          className="p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all border-l-4 border-l-blue-400"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <Layers size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Flashcards</h3>
              <p className="text-slate-500 text-sm">Review one card at a time</p>
            </div>
          </div>
          <div className="flex items-center text-blue-600 font-semibold text-sm">
            Start Practice <ChevronRight size={18} />
          </div>
        </Card>

        <Card
          onClick={words.length >= 2 ? () => setCurrentView('needsPracticeMatching') : undefined}
          className={`p-6 transition-all border-l-4 border-l-indigo-400 ${
            words.length >= 2
              ? 'cursor-pointer hover:shadow-lg hover:-translate-y-1'
              : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
              <Gamepad2 size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Matching Game</h3>
              <p className="text-slate-500 text-sm">
                {words.length >= 2
                  ? 'Match Czech to English'
                  : 'Need at least 2 words'}
              </p>
            </div>
          </div>
          <div className={`flex items-center font-semibold text-sm ${words.length >= 2 ? 'text-indigo-600' : 'text-slate-400'}`}>
            {words.length >= 2 ? 'Start Game' : 'Not Available'} <ChevronRight size={18} />
          </div>
        </Card>
      </div>

      {/* Word list */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full text-left border-collapse min-w-[450px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
              <th className="p-4 md:px-6 font-semibold">Czech</th>
              <th className="p-4 md:px-6 font-semibold border-l border-slate-200">English</th>
              <th className="p-4 md:px-6 font-semibold border-l border-slate-200">From</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {words.map((word, i) => {
              const lessonTitle = COURSE_DATA[word.lessonId]?.title || `Lesson ${word.lessonId}`;
              return (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 md:px-6 font-bold text-slate-800">{word.cz}</td>
                  <td className="p-4 md:px-6 text-slate-600 border-l border-slate-100">{word.en}</td>
                  <td className="p-4 md:px-6 text-slate-400 text-sm border-l border-slate-100">{lessonTitle}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

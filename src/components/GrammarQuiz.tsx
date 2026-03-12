import React, { useState } from 'react';
import { ChevronRight, Trophy, CheckCircle2, XCircle } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { COURSE_DATA } from '../data/lessons';

interface GrammarQuizProps {
  activeLesson: number;
  currentModule: string;
  setCurrentView: (view: string) => void;
  onComplete?: () => void;
}

export const GrammarQuiz = ({ activeLesson, currentModule, setCurrentView, onComplete }: GrammarQuizProps) => {
  const questions = COURSE_DATA[activeLesson].grammar[currentModule];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (i: number) => {
    if (showResult) return;
    setSelected(i);
    setShowResult(true);
    if (i === questions[index].correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setCompleted(true);
      onComplete?.();
    }
  };

  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
          <Trophy size={48} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
        <p className="text-slate-600 mb-8 text-lg">You scored {score} out of {questions.length}.</p>
        <Button onClick={() => setCurrentView('dashboard')}>Return to Lesson</Button>
      </div>
    );
  }

  const q = questions[index];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => setCurrentView('dashboard')} className="!px-3">
          <ChevronRight size={24} className="rotate-180" /> Back
        </Button>
        <div className="flex gap-2">
          {questions.map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${i === index ? 'bg-purple-600 ring-4 ring-purple-100' : i < index ? 'bg-purple-300' : 'bg-slate-200'}`} />
          ))}
        </div>
      </div>

      <Card className="p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 text-center leading-relaxed">
          {q.question}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {q.options.map((opt, i) => {
            let btnClass = "border-2 border-slate-200 text-slate-700 bg-white hover:border-purple-400 hover:bg-purple-50";
            if (showResult) {
              if (i === q.correct) btnClass = "bg-emerald-500 border-emerald-500 text-white";
              else if (i === selected) btnClass = "bg-rose-500 border-rose-500 text-white";
              else btnClass = "border-slate-200 text-slate-400 opacity-50 bg-slate-50";
            }

            return (
              <button
                key={i}
                disabled={showResult}
                onClick={() => handleAnswer(i)}
                className={`p-5 text-xl font-semibold rounded-2xl transition-all duration-300 ${btnClass}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 animate-in fade-in">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                {selected === q.correct ? <CheckCircle2 className="text-emerald-500" size={24} /> : <XCircle className="text-rose-500" size={24} />}
              </div>
              <div>
                <h4 className={`font-bold text-lg mb-1 ${selected === q.correct ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {selected === q.correct ? 'Správně! (Correct!)' : 'Špatně! (Incorrect!)'}
                </h4>
                <p className="text-slate-600">{q.explanation}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button onClick={handleNext}>Next Question <ChevronRight size={20} /></Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

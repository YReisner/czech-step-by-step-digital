import React from 'react';
import { ChevronRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { Card } from './ui/Card';
import { COURSE_DATA } from '../data/lessons';

interface HomeScreenProps {
  setActiveLesson: (id: number) => void;
  setCurrentView: (view: string) => void;
  isLessonComplete: (lessonId: number, modules: { type: string; id: string }[]) => boolean;
  getLessonProgress: (lessonId: number, modules: { type: string; id: string }[]) => number;
  needsPracticeCount: number;
}

const CIRCLE_R = 28;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_R;

export const HomeScreen = ({ setActiveLesson, setCurrentView, isLessonComplete, getLessonProgress, needsPracticeCount }: HomeScreenProps) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <header className="mb-12 text-center max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">Choose Your Lesson</h1>
      <p className="text-slate-500 text-lg">Follow the path to master the Czech language, step by step.</p>
    </header>

    {needsPracticeCount > 0 && (
      <div className="max-w-3xl mx-auto mb-4">
        <Card
          onClick={() => setCurrentView('needsPractice')}
          className="p-5 flex items-center justify-between cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all border-l-4 border-l-rose-400"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-100 text-rose-500 rounded-xl flex items-center justify-center">
              <RotateCcw size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Needs Practice</h3>
              <p className="text-slate-500 text-sm">{needsPracticeCount} word{needsPracticeCount !== 1 ? 's' : ''} to review</p>
            </div>
          </div>
          <ChevronRight className="text-slate-400" size={20} />
        </Card>
      </div>
    )}

    <div className="max-w-3xl mx-auto space-y-6 relative">
      <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-1 bg-slate-200 -translate-x-1/2 z-0 hidden md:block"></div>

      {Object.values(COURSE_DATA).map((lesson, index) => {
        const isEven = index % 2 !== 0;
        const complete = isLessonComplete(lesson.id, lesson.modules);
        const fraction = getLessonProgress(lesson.id, lesson.modules);

        return (
          <div key={lesson.id} className={`relative z-10 flex flex-col md:flex-row items-center gap-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            {/* Progress circle */}
            <div className="hidden md:flex w-16 h-16 relative items-center justify-center">
              {complete ? (
                <div className="w-16 h-16 rounded-full border-4 border-white shadow-md flex items-center justify-center bg-emerald-500 text-white">
                  <CheckCircle2 size={28} />
                </div>
              ) : fraction > 0 ? (
                <>
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r={CIRCLE_R} stroke="#e2e8f0" strokeWidth="4" fill="white" />
                    <circle
                      cx="32" cy="32" r={CIRCLE_R}
                      stroke="#3b82f6" strokeWidth="4" fill="none"
                      strokeDasharray={CIRCLE_CIRCUMFERENCE}
                      strokeDashoffset={CIRCLE_CIRCUMFERENCE * (1 - fraction)}
                      strokeLinecap="round"
                      className="transition-all duration-700"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-xl text-blue-600">
                    {lesson.id}
                  </span>
                </>
              ) : (
                <div className="w-16 h-16 rounded-full border-4 border-white shadow-md flex items-center justify-center font-bold text-xl bg-blue-600 text-white">
                  {lesson.id}
                </div>
              )}
            </div>

            <Card
              onClick={() => {
                setActiveLesson(lesson.id);
                setCurrentView('dashboard');
              }}
              className={`flex-1 w-full md:w-auto p-6 transition-all duration-300 hover:shadow-xl cursor-pointer hover:-translate-y-1 hover:border-blue-200 ${complete ? 'border-emerald-200' : ''}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${complete ? 'text-emerald-500' : 'text-blue-500'}`}>
                    Chapter {lesson.id}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800 mt-1">{lesson.title}</h3>
                  <h4 className="text-lg font-medium text-slate-500 italic">"{lesson.subtitle}"</h4>
                </div>
                {complete && (
                  <div className="flex items-center gap-1.5 bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
                    <CheckCircle2 size={14} /> Complete
                  </div>
                )}
              </div>
              <p className="text-slate-600">{lesson.description}</p>

              <div className={`mt-6 flex items-center font-semibold group-hover:translate-x-2 transition-transform ${complete ? 'text-emerald-600' : 'text-blue-600'}`}>
                {complete ? 'Review Lesson' : 'Enter Lesson'} <ChevronRight size={20} />
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  </div>
);

import React from 'react';
import { Star, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { COURSE_DATA } from '../data/lessons';
import { ICONS, COLORS } from '../data/constants';

interface DashboardProps {
  activeLesson: number;
  setCurrentView: (view: string) => void;
  setCurrentModule: (id: string) => void;
  isModuleComplete: (lessonId: number, moduleType: string, moduleId: string) => boolean;
}

export const Dashboard = ({ activeLesson, setCurrentView, setCurrentModule, isModuleComplete }: DashboardProps) => {
  const lesson = COURSE_DATA[activeLesson];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <Button variant="ghost" onClick={() => setCurrentView('home')} className="!px-0 !py-1 mb-4 text-blue-600 hover:text-blue-700 hover:bg-transparent">
            <ChevronRight size={20} className="rotate-180" /> Back to Chapters
          </Button>
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">{lesson.title}</h1>
          <p className="text-slate-500 mt-2 text-lg">{lesson.subtitle}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {lesson.modules.map((mod, i) => {
          const Icon = ICONS[mod.icon] || Star;
          const theme = COLORS[mod.color];
          const done = isModuleComplete(activeLesson, mod.type, mod.id);

          return (
            <Card key={i} className={`hover:shadow-xl transition-shadow cursor-pointer group ${theme.border}`}>
              <div className="p-6 h-full flex flex-col justify-between relative" onClick={() => {
                setCurrentModule(mod.id);
                setCurrentView(mod.type);
              }}>
                {done && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                )}
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${theme.bg} ${theme.text}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{mod.title}</h3>
                  <p className="text-slate-500">{mod.desc}</p>
                </div>
                <div className={`mt-8 flex items-center font-semibold transition-transform group-hover:translate-x-2 ${theme.hoverText}`}>
                  {done ? 'Review' : 'Start'} <ChevronRight size={20} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

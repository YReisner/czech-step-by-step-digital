import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { Dashboard } from './components/Dashboard';
import { InsightsViewer } from './components/InsightsViewer';
import { Flashcards } from './components/Flashcards';
import { MatchingGame } from './components/MatchingGame';
import { GrammarQuiz } from './components/GrammarQuiz';
import { DialogueViewer } from './components/DialogueViewer';
import { NeedsPracticeHub } from './components/NeedsPracticeHub';
import { useProgress } from './hooks/useProgress';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeLesson, setActiveLesson] = useState<number>(1);
  const [currentModule, setCurrentModule] = useState<string>('');
  const progress = useProgress();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, activeLesson]);

  const handleComplete = () => {
    progress.markModuleComplete(activeLesson, currentView, currentModule);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-200">
      <Navbar onNavigateHome={() => setCurrentView('home')} />

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {currentView === 'home' && (
          <HomeScreen
            setActiveLesson={setActiveLesson}
            setCurrentView={setCurrentView}
            isLessonComplete={progress.isLessonComplete}
            getLessonProgress={progress.getLessonProgress}
            needsPracticeCount={progress.needsPracticeWords.length}
          />
        )}
        {currentView === 'dashboard' && (
          <Dashboard
            activeLesson={activeLesson}
            setCurrentView={setCurrentView}
            setCurrentModule={setCurrentModule}
            isModuleComplete={progress.isModuleComplete}
          />
        )}
        {currentView === 'insights' && (
          <InsightsViewer activeLesson={activeLesson} setCurrentView={setCurrentView} onComplete={handleComplete} />
        )}
        {currentView === 'vocab' && (
          <Flashcards
            activeLesson={activeLesson}
            currentModule={currentModule}
            setCurrentView={setCurrentView}
            onComplete={handleComplete}
            onMarkNeedsPractice={(word) => progress.addNeedsPractice(word, activeLesson, currentModule)}
          />
        )}
        {currentView === 'matching' && (
          <MatchingGame
            activeLesson={activeLesson}
            currentModule={currentModule}
            setCurrentView={setCurrentView}
            onComplete={handleComplete}
            onMarkNeedsPractice={(word) => progress.addNeedsPractice(word, activeLesson, currentModule)}
          />
        )}
        {currentView === 'grammar' && (
          <GrammarQuiz
            activeLesson={activeLesson}
            currentModule={currentModule}
            setCurrentView={setCurrentView}
            onComplete={handleComplete}
          />
        )}
        {currentView === 'dialogue' && (
          <DialogueViewer activeLesson={activeLesson} setCurrentView={setCurrentView} onComplete={handleComplete} />
        )}
        {currentView === 'needsPractice' && (
          <NeedsPracticeHub
            words={progress.needsPracticeWords}
            setCurrentView={setCurrentView}
          />
        )}
        {currentView === 'needsPracticeVocab' && (
          <Flashcards
            needsPracticeMode={true}
            needsPracticeWords={progress.needsPracticeWords}
            onGotIt={(word) => progress.removeNeedsPractice(word.cz)}
            setCurrentView={setCurrentView}
          />
        )}
        {currentView === 'needsPracticeMatching' && (
          <MatchingGame
            needsPracticeMode={true}
            needsPracticeWords={progress.needsPracticeWords}
            setCurrentView={setCurrentView}
          />
        )}
      </main>
    </div>
  );
}

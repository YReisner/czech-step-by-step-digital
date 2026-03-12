import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'czechstep-progress';

export interface NeedsPracticeWord {
  cz: string;
  en: string;
  lessonId: number;
  moduleId: string;
}

interface ProgressData {
  completedModules: Record<string, boolean>;
  needsPractice: NeedsPracticeWord[];
}

const DEFAULT_PROGRESS: ProgressData = {
  completedModules: {},
  needsPractice: [],
};

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        completedModules: parsed.completedModules || {},
        needsPractice: parsed.needsPractice || [],
      };
    }
  } catch {
    /* ignore corrupt data */
  }
  return { ...DEFAULT_PROGRESS };
}

function saveProgress(data: ProgressData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const markModuleComplete = useCallback((lessonId: number, moduleType: string, moduleId: string) => {
    const key = `${lessonId}:${moduleType}:${moduleId}`;
    setProgress(prev => ({
      ...prev,
      completedModules: { ...prev.completedModules, [key]: true },
    }));
  }, []);

  const isModuleComplete = useCallback((lessonId: number, moduleType: string, moduleId: string): boolean => {
    const key = `${lessonId}:${moduleType}:${moduleId}`;
    return !!progress.completedModules[key];
  }, [progress.completedModules]);

  const isLessonComplete = useCallback((lessonId: number, modules: { type: string; id: string }[]): boolean => {
    return modules.length > 0 && modules.every(m => !!progress.completedModules[`${lessonId}:${m.type}:${m.id}`]);
  }, [progress.completedModules]);

  const getLessonProgress = useCallback((lessonId: number, modules: { type: string; id: string }[]): number => {
    if (modules.length === 0) return 0;
    const done = modules.filter(m => !!progress.completedModules[`${lessonId}:${m.type}:${m.id}`]).length;
    return done / modules.length;
  }, [progress.completedModules]);

  const addNeedsPractice = useCallback((word: { cz: string; en: string }, lessonId: number, moduleId: string) => {
    setProgress(prev => {
      const exists = prev.needsPractice.some(w => w.cz === word.cz);
      if (exists) return prev;
      return {
        ...prev,
        needsPractice: [...prev.needsPractice, { cz: word.cz, en: word.en, lessonId, moduleId }],
      };
    });
  }, []);

  const removeNeedsPractice = useCallback((cz: string) => {
    setProgress(prev => ({
      ...prev,
      needsPractice: prev.needsPractice.filter(w => w.cz !== cz),
    }));
  }, []);

  return {
    markModuleComplete,
    isModuleComplete,
    isLessonComplete,
    getLessonProgress,
    addNeedsPractice,
    removeNeedsPractice,
    needsPracticeWords: progress.needsPractice,
  };
}

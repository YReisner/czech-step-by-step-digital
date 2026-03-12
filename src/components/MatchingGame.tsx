import React, { useState, useEffect } from 'react';
import { ChevronRight, Gamepad2, Star, PartyPopper } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { COURSE_DATA } from '../data/lessons';
import type { NeedsPracticeWord } from '../hooks/useProgress';

interface Tile {
  id: string;
  text: string;
  lang: string;
  index: number;
}

interface MatchingGameProps {
  activeLesson?: number;
  currentModule?: string;
  setCurrentView: (view: string) => void;
  onComplete?: () => void;
  onMarkNeedsPractice?: (word: { cz: string; en: string }) => void;
  // Needs practice mode
  needsPracticeMode?: boolean;
  needsPracticeWords?: NeedsPracticeWord[];
}

export const MatchingGame = ({
  activeLesson,
  currentModule,
  setCurrentView,
  onComplete,
  onMarkNeedsPractice,
  needsPracticeMode,
  needsPracticeWords,
}: MatchingGameProps) => {
  const MAX_WORDS = 10; // 5 rows × 2 columns of pairs = 10 word pairs (20 tiles)

  const allWords = needsPracticeMode
    ? (needsPracticeWords || [])
    : COURSE_DATA[activeLesson!].vocab[currentModule!];

  const [gameWords, setGameWords] = useState<typeof allWords>([]);

  const words = gameWords.length > 0 ? gameWords : allWords;

  const backView = needsPracticeMode ? 'needsPractice' : 'dashboard';

  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);
  const [mismatchIds, setMismatchIds] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState<Record<number, number>>({});
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Select a random subset if there are more words than the max
    let selected = allWords;
    if (allWords.length > MAX_WORDS) {
      const shuffled = [...allWords];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      selected = shuffled.slice(0, MAX_WORDS);
    }
    setGameWords(selected);

    const newTiles: Tile[] = [];
    selected.forEach((word, index) => {
      newTiles.push({ id: `cz-${index}`, text: word.cz, lang: 'cz', index });
      newTiles.push({ id: `en-${index}`, text: word.en, lang: 'en', index });
    });

    for (let i = newTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
    }

    setTiles(newTiles);

    const initialMistakes: Record<number, number> = {};
    selected.forEach((_, i) => initialMistakes[i] = 0);
    setMistakes(initialMistakes);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allWords]);

  const handleTileClick = (tile: Tile) => {
    if (matchedIndices.includes(tile.index) || selectedIds.includes(tile.id) || mismatchIds.length > 0) return;

    const newSelected = [...selectedIds, tile.id];
    setSelectedIds(newSelected);

    if (newSelected.length === 2) {
      const tile1 = tiles.find(t => t.id === newSelected[0])!;
      const tile2 = tile;

      if (tile1.index === tile2.index) {
        // Correct match
        setMatchedIndices(prev => {
          const updated = [...prev, tile1.index];
          if (updated.length === words.length) {
            setTimeout(() => {
              setCompleted(true);
              if (!needsPracticeMode) {
                onComplete?.();
                // Add words with mistakes to needs practice
                if (onMarkNeedsPractice) {
                  setMistakes(currentMistakes => {
                    words.forEach((word, i) => {
                      if (currentMistakes[i] > 0) {
                        onMarkNeedsPractice(word);
                      }
                    });
                    return currentMistakes;
                  });
                }
              }
            }, 800);
          }
          return updated;
        });
        setSelectedIds([]);
      } else {
        setMismatchIds([tile1.id, tile2.id]);
        setMistakes(prev => ({
          ...prev,
          [tile1.index]: prev[tile1.index] + 1,
          [tile2.index]: prev[tile2.index] + 1
        }));

        setTimeout(() => {
          setSelectedIds([]);
          setMismatchIds([]);
        }, 600);
      }
    }
  };

  const getTileState = (tile: Tile) => {
    if (matchedIndices.includes(tile.index)) return 'bg-emerald-100 text-emerald-700 border-emerald-300 opacity-40 scale-95 pointer-events-none shadow-none';
    if (mismatchIds.includes(tile.id)) return 'bg-rose-100 text-rose-700 border-rose-400 animate-shake';
    if (selectedIds.includes(tile.id)) return 'bg-indigo-100 text-indigo-700 border-indigo-400 scale-105 ring-4 ring-indigo-50';
    return 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-slate-50 hover:scale-105';
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

  // Too few words for matching in needs practice mode
  if (needsPracticeMode && words.length < 2) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mb-6">
          <Gamepad2 size={48} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Not Enough Words</h2>
        <p className="text-slate-600 mb-8 text-lg">You need at least 2 words for the matching game. Try flashcards instead!</p>
        <Button onClick={() => setCurrentView('needsPractice')}>Back to Practice</Button>
      </div>
    );
  }

  if (completed) {
    const totalMistakes = Object.values(mistakes).reduce((a: number, b: number) => a + b, 0);
    const isPerfect = totalMistakes === 0;

    return (
      <div className="max-w-3xl mx-auto py-8 animate-in fade-in duration-500">
        <Card className="p-6 md:p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <Gamepad2 size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 text-center">Game Complete!</h2>
            {isPerfect && (
              <div className="mt-4 bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-bold flex items-center gap-2 animate-bounce">
                <Star size={18} fill="currentColor" /> Perfect Score!
              </div>
            )}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-8 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[550px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="p-4 md:px-6 font-semibold w-2/5">Czech</th>
                  <th className="p-4 md:px-6 font-semibold w-2/5 border-l border-slate-200">English</th>
                  <th className="p-4 md:px-6 font-semibold w-1/5 border-l border-slate-200 text-center">Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {words.map((word, i) => {
                  const mistakeCount = mistakes[i] || 0;
                  return (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 md:px-6 font-bold text-slate-800">{word.cz}</td>
                      <td className="p-4 md:px-6 text-slate-600 border-l border-slate-100">{word.en}</td>
                      <td className="p-4 md:px-6 border-l border-slate-100 text-center">
                        {mistakeCount === 0 ? (
                          <span className="text-emerald-500 font-bold flex items-center justify-center gap-1 text-sm"><Star size={14} fill="currentColor" /> Perfect</span>
                        ) : (
                          <span className="text-rose-500 font-semibold text-sm">{mistakeCount} Mistake{mistakeCount > 1 ? 's' : ''}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
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
    <div className="max-w-4xl mx-auto py-8">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px) rotate(-2deg); }
          75% { transform: translateX(5px) rotate(2deg); }
        }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>

      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => setCurrentView(backView)} className="!px-3">
          <ChevronRight size={24} className="rotate-180" /> Back
        </Button>
        <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide">
          {needsPracticeMode ? 'PRACTICE MATCHING' : 'MATCHING GAME'}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {tiles.map(tile => (
          <button
            key={tile.id}
            onClick={() => handleTileClick(tile)}
            className={`p-4 md:p-6 min-h-[100px] flex items-center justify-center text-center rounded-2xl font-bold text-lg md:text-xl transition-all duration-200 border-2 shadow-sm ${getTileState(tile)}`}
          >
            {tile.text}
          </button>
        ))}
      </div>
    </div>
  );
};

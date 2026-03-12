import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronRight, MessageCircle, Volume2, CheckCircle2, Play, Square, Eye, Loader2 } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { COURSE_DATA } from '../data/lessons';
import { synthesizeSpeech, playBase64Audio, type Gender } from '../services/tts';

interface DialogueViewerProps {
  activeLesson: number;
  setCurrentView: (view: string) => void;
  onComplete?: () => void;
}

const FEMALE_NAMES = ['Eva', 'Marina', 'Paní', 'Doktorka', 'Adéla', 'Maminka', 'Irena', 'Babička', 'Kolegyně'];
const MALE_NAMES = ['Tom', 'Thomas', 'Pán', 'Číšník', 'Petr', 'Josef', 'David', 'Manažer', 'Kandidát', 'Dědeček', 'Kolega'];

const SPEAKER_COLORS: Record<string, { avatarBg: string; avatarText: string; bubbleBg: string }> = {
  Eva:       { avatarBg: 'bg-rose-100',    avatarText: 'text-rose-600',    bubbleBg: 'bg-rose-50' },
  Tom:       { avatarBg: 'bg-blue-100',    avatarText: 'text-blue-600',    bubbleBg: 'bg-blue-50' },
  Marina:    { avatarBg: 'bg-violet-100',  avatarText: 'text-violet-600',  bubbleBg: 'bg-violet-50' },
  Petr:      { avatarBg: 'bg-emerald-100', avatarText: 'text-emerald-600', bubbleBg: 'bg-emerald-50' },
  Paní:      { avatarBg: 'bg-amber-100',   avatarText: 'text-amber-600',   bubbleBg: 'bg-amber-50' },
  Pán:       { avatarBg: 'bg-cyan-100',    avatarText: 'text-cyan-600',    bubbleBg: 'bg-cyan-50' },
  Číšník:    { avatarBg: 'bg-orange-100',  avatarText: 'text-orange-600',  bubbleBg: 'bg-orange-50' },
  Doktorka:  { avatarBg: 'bg-teal-100',    avatarText: 'text-teal-600',    bubbleBg: 'bg-teal-50' },
  Adéla:     { avatarBg: 'bg-pink-100',    avatarText: 'text-pink-600',    bubbleBg: 'bg-pink-50' },
  Maminka:   { avatarBg: 'bg-fuchsia-100', avatarText: 'text-fuchsia-600', bubbleBg: 'bg-fuchsia-50' },
  Irena:     { avatarBg: 'bg-indigo-100',  avatarText: 'text-indigo-600',  bubbleBg: 'bg-indigo-50' },
  Josef:     { avatarBg: 'bg-lime-100',    avatarText: 'text-lime-600',    bubbleBg: 'bg-lime-50' },
  David:     { avatarBg: 'bg-sky-100',     avatarText: 'text-sky-600',     bubbleBg: 'bg-sky-50' },
  Manažer:   { avatarBg: 'bg-slate-200',   avatarText: 'text-slate-600',   bubbleBg: 'bg-slate-100' },
  Kandidát:  { avatarBg: 'bg-green-100',   avatarText: 'text-green-600',   bubbleBg: 'bg-green-50' },
  Dědeček:   { avatarBg: 'bg-stone-200',   avatarText: 'text-stone-600',   bubbleBg: 'bg-stone-100' },
  Babička:   { avatarBg: 'bg-red-100',     avatarText: 'text-red-600',     bubbleBg: 'bg-red-50' },
  Kolegyně:  { avatarBg: 'bg-purple-100',  avatarText: 'text-purple-600',  bubbleBg: 'bg-purple-50' },
  Kolega:    { avatarBg: 'bg-yellow-100',  avatarText: 'text-yellow-600',  bubbleBg: 'bg-yellow-50' },
  Thomas:    { avatarBg: 'bg-blue-100',    avatarText: 'text-blue-600',    bubbleBg: 'bg-blue-50' },
};

const DEFAULT_COLORS = { avatarBg: 'bg-gray-100', avatarText: 'text-gray-600', bubbleBg: 'bg-gray-50' };

const getSpeakerColors = (name: string) => SPEAKER_COLORS[name] ?? DEFAULT_COLORS;

const getGender = (name: string): Gender => {
  if (FEMALE_NAMES.includes(name)) return 'female';
  if (MALE_NAMES.includes(name)) return 'male';
  return 'neutral';
};

type DialogPhase = 'hidden' | 'playing' | 'revealed';

export const DialogueViewer = ({ activeLesson, setCurrentView, onComplete }: DialogueViewerProps) => {
  const dialogueData = COURSE_DATA[activeLesson].dialogue;
  const [showTranslation, setShowTranslation] = useState<Record<number, boolean>>({});

  const [phase, setPhase] = useState<DialogPhase>('hidden');
  const [activeLineIdx, setActiveLineIdx] = useState<number>(-1);
  const [loadingLine, setLoadingLine] = useState<number>(-1);  // for single-line speak loading
  const isPlayingRef = useRef(false);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      currentAudioRef.current?.pause();
      currentAudioRef.current = null;
    };
  }, []);

  // Scroll active line into view
  useEffect(() => {
    if (activeLineIdx >= 0 && lineRefs.current[activeLineIdx]) {
      lineRefs.current[activeLineIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeLineIdx]);

  const toggleTranslation = (idx: number) => {
    setShowTranslation(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  /** Speak a single line (used when clicking the volume icon in revealed mode). */
  const speakLine = async (text: string, speaker: string, lineIdx: number) => {
    // Stop anything currently playing
    currentAudioRef.current?.pause();
    currentAudioRef.current = null;

    setLoadingLine(lineIdx);
    const gender = getGender(speaker);
    const audio = await synthesizeSpeech(text, gender);
    setLoadingLine(-1);

    if (audio) {
      currentAudioRef.current = playBase64Audio(audio);
    }
  };

  /** Play the entire dialog sequentially. */
  const playDialog = useCallback(async () => {
    currentAudioRef.current?.pause();
    currentAudioRef.current = null;
    setPhase('playing');
    isPlayingRef.current = true;

    for (let idx = 0; idx < dialogueData.length; idx++) {
      if (!isPlayingRef.current) return;

      setActiveLineIdx(idx);
      const line = dialogueData[idx];
      const gender = getGender(line.speaker);

      const audioBase64 = await synthesizeSpeech(line.cz, gender);
      if (!isPlayingRef.current) return;

      if (audioBase64) {
        const audio = playBase64Audio(audioBase64);
        currentAudioRef.current = audio;

        // Wait for audio to finish
        await new Promise<void>((resolve) => {
          audio.onended = () => resolve();
          audio.onerror = () => resolve();
        });
      }

      if (!isPlayingRef.current) return;

      // Small pause between lines
      await new Promise(resolve => setTimeout(resolve, 350));
    }

    // Finished naturally
    if (isPlayingRef.current) {
      setPhase('revealed');
      setActiveLineIdx(-1);
      isPlayingRef.current = false;
    }
  }, [dialogueData]);

  const stopDialog = () => {
    currentAudioRef.current?.pause();
    currentAudioRef.current = null;
    isPlayingRef.current = false;
    setPhase('hidden');
    setActiveLineIdx(-1);
  };

  const revealDialog = () => {
    currentAudioRef.current?.pause();
    currentAudioRef.current = null;
    isPlayingRef.current = false;
    setPhase('revealed');
    setActiveLineIdx(-1);
  };

  const resetDialog = () => {
    currentAudioRef.current?.pause();
    currentAudioRef.current = null;
    isPlayingRef.current = false;
    setPhase('hidden');
    setActiveLineIdx(-1);
    setShowTranslation({});
  };

  const isTextVisible = phase === 'revealed';

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => { stopDialog(); setCurrentView('dashboard'); }} className="!px-3">
          <ChevronRight size={24} className="rotate-180" /> Back
        </Button>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide">LESSON {activeLesson}</span>
      </div>

      <Card className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
          <MessageCircle className="text-blue-500" size={32} />
          <h2 className="text-2xl font-bold text-slate-800">Dialogue Reader</h2>
        </div>

        {/* Playback controls */}
        <div className="flex items-center gap-3 mb-8">
          {phase === 'hidden' && (
            <Button onClick={playDialog} variant="primary" className="gap-2">
              <Play size={18} /> Play Dialog
            </Button>
          )}
          {phase === 'playing' && (
            <Button onClick={stopDialog} variant="secondary" className="gap-2">
              <Square size={16} /> Stop
            </Button>
          )}
          {phase === 'playing' && (
            <Button onClick={revealDialog} variant="ghost" className="gap-2 text-sm">
              <Eye size={16} /> Show Text
            </Button>
          )}
          {phase === 'revealed' && (
            <Button onClick={resetDialog} variant="ghost" className="gap-2 text-sm">
              <Play size={16} /> Replay
            </Button>
          )}
          {phase === 'hidden' && (
            <Button onClick={revealDialog} variant="ghost" className="gap-2 text-sm text-slate-400">
              <Eye size={16} /> Skip to text
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {dialogueData.map((line, i) => {
            const firstSpeaker = dialogueData[0].speaker;
            const isLeft = line.speaker === firstSpeaker;
            const colors = getSpeakerColors(line.speaker);
            const isActive = phase === 'playing' && i === activeLineIdx;
            const isPast = phase === 'playing' && i < activeLineIdx;

            return (
              <div
                key={i}
                ref={el => { lineRefs.current[i] = el; }}
                className={`flex gap-4 transition-all duration-300 ${isLeft ? 'flex-row' : 'flex-row-reverse'}
                  ${isActive ? 'scale-[1.02]' : ''}
                  ${phase === 'playing' && i > activeLineIdx ? 'opacity-40' : 'opacity-100'}
                  ${isPast ? 'opacity-60' : ''}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg
                  ${colors.avatarBg} ${colors.avatarText}
                  ${isActive ? 'ring-3 ring-blue-400 ring-offset-2' : ''}`}>
                  {line.speaker[0]}
                </div>
                <div
                  onClick={() => isTextVisible && toggleTranslation(i)}
                  className={`max-w-[80%] p-5 rounded-3xl group relative transition-all duration-300
                  ${colors.bubbleBg} ${isLeft ? 'rounded-tl-none' : 'rounded-tr-none'}
                  ${isTextVisible ? 'cursor-pointer' : ''}
                  ${isActive ? 'shadow-lg shadow-blue-100' : ''}`}>
                  <div className="flex justify-between items-start gap-2">
                    <span className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">{line.speaker}</span>
                    {isTextVisible && (
                      <button
                        onClick={(e) => { e.stopPropagation(); speakLine(line.cz, line.speaker, i); }}
                        className="p-1.5 rounded-full hover:bg-white/50 text-slate-400 hover:text-blue-500 transition-colors"
                        title="Listen"
                      >
                        {loadingLine === i ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <Volume2 size={16} />
                        )}
                      </button>
                    )}
                  </div>

                  {isTextVisible ? (
                    <p className="text-lg font-medium text-slate-800 mb-1">{line.cz}</p>
                  ) : (
                    <p className="text-lg font-medium text-slate-300 select-none mb-1">
                      {'•'.repeat(Math.min(Math.ceil(line.cz.length / 2), 20))}
                    </p>
                  )}

                  {isTextVisible && (
                    <div className={`overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-3 ${showTranslation[i] ? 'max-h-40 opacity-100 mt-3' : ''}`}>
                      <p className="text-sm text-slate-500 italic border-t border-slate-200/60 pt-2">"{line.en}"</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {isTextVisible && (
          <div className="mt-10 bg-indigo-50 p-6 rounded-2xl flex items-center justify-between">
            <div className="text-indigo-800 font-medium flex items-center gap-2">
              <CheckCircle2 size={20} /> You completed the dialogue!
            </div>
            <Button onClick={() => { onComplete?.(); setCurrentView('dashboard'); }} variant="secondary">
              Back to Lesson
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

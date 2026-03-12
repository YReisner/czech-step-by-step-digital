import type { LucideIcon } from 'lucide-react';
import {
  MessageCircle,
  MapPin,
  Coffee,
  BookOpen,
  Compass,
  Train,
  Utensils,
  Users,
  Clock,
  Calendar,
  History,
  Globe,
  Building,
  Box,
  Activity,
  Heart,
  CalendarPlus,
  Store,
  Plane,
  Gift,
  Wand2,
  CloudSun,
  ThermometerSun,
  Trees,
  Umbrella,
  Sparkles,
  Monitor,
  Smartphone,
  Shirt,
  Truck,
  Baby,
  AlertCircle,
  ChefHat,
  PawPrint,
  Scale,
  Briefcase,
  Ticket,
  Map,
  Lightbulb,
  Gamepad2,
} from 'lucide-react';

export interface VocabWord {
  cz: string;
  en: string;
}

export interface GrammarQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface DialogueLine {
  speaker: string;
  cz: string;
  en: string;
}

export interface Insight {
  title: string;
  content: string[];
}

export interface Module {
  type: 'insights' | 'dialogue' | 'vocab' | 'matching' | 'grammar';
  id: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
}

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  dialogue: DialogueLine[];
  vocab: Record<string, VocabWord[]>;
  grammar: Record<string, GrammarQuestion[]>;
  insights: Insight[];
  modules: Module[];
}

export const ICONS: Record<string, LucideIcon> = {
  MessageCircle,
  MapPin,
  Coffee,
  BookOpen,
  Compass,
  Train,
  Utensils,
  Users,
  Clock,
  Calendar,
  History,
  Globe,
  Building,
  Box,
  Activity,
  Heart,
  CalendarPlus,
  Store,
  Plane,
  Gift,
  Wand2,
  CloudSun,
  ThermometerSun,
  Trees,
  Umbrella,
  Sparkles,
  Monitor,
  Smartphone,
  Shirt,
  Truck,
  Baby,
  AlertCircle,
  ChefHat,
  PawPrint,
  Scale,
  Briefcase,
  Ticket,
  Map,
  Lightbulb,
  Gamepad2,
};

export const COLORS: Record<string, { bg: string; text: string; border: string; hoverText: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'group-hover:border-blue-200', hoverText: 'text-blue-600' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'group-hover:border-emerald-200', hoverText: 'text-emerald-600' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'group-hover:border-orange-200', hoverText: 'text-orange-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'group-hover:border-purple-200', hoverText: 'text-purple-600' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'group-hover:border-rose-200', hoverText: 'text-rose-600' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'group-hover:border-cyan-200', hoverText: 'text-cyan-600' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'group-hover:border-indigo-200', hoverText: 'text-indigo-600' },
};

import React from 'react';
import { BookOpen, Home } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  onNavigateHome: () => void;
}

export const Navbar = ({ onNavigateHome }: NavbarProps) => (
  <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer" onClick={onNavigateHome}>
        <div className="bg-blue-600 text-white p-2 rounded-xl">
          <BookOpen size={20} />
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-800 hidden sm:block">
          CZECH<span className="text-blue-600 font-black">STEP</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onNavigateHome} className="!px-3 !py-2 rounded-lg">
          <Home size={20} className="text-slate-500" />
        </Button>
        <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center font-bold text-slate-500">
          U
        </div>
      </div>
    </div>
  </nav>
);

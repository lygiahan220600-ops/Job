import React from 'react';
import { Globe, User as UserIcon } from 'lucide-react';
import { Language, UserAccount } from '../types';

interface MobileTopBarProps {
  lang: Language;
  onToggleLang: () => void;
  currentUser: UserAccount | null;
  onOpenAuth: () => void;
  onOpenProfile: () => void;
}

export const MobileTopBar: React.FC<MobileTopBarProps> = ({
  lang,
  onToggleLang,
  currentUser,
  onOpenAuth,
  onOpenProfile,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 pt-safe">
      <div className="max-w-md mx-auto px-4 h-13 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center text-white font-extrabold text-sm shadow-xs font-display">
            JH
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-slate-900 font-display leading-tight">
              JobsHub
            </span>
            <span className="text-[10px] text-slate-500 font-medium leading-none">
              Sinh viên & Thực tập
            </span>
          </div>
        </div>

        {/* Right Controls: Language switch & User quick avatar */}
        <div className="flex items-center gap-2">
          {/* Language Switcher Badge */}
          <button
            type="button"
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors touch-manipulation"
            aria-label="Chuyển đổi ngôn ngữ / Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-[#0F766E]" />
            <span className="uppercase text-[11px] tracking-wider">{lang}</span>
          </button>

          {/* User Profile / Login Button */}
          {currentUser ? (
            <button
              type="button"
              onClick={onOpenProfile}
              className="w-8 h-8 rounded-full ring-2 ring-[#0F766E]/30 overflow-hidden flex items-center justify-center bg-slate-100 touch-manipulation"
              aria-label="Mở hồ sơ"
            >
              {currentUser.avatarUrl ? (
                <img
                  src={currentUser.avatarUrl}
                  alt={currentUser.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs font-bold text-[#0F766E]">
                  {currentUser.fullName.charAt(0)}
                </span>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenAuth}
              className="p-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 touch-manipulation"
              aria-label="Đăng nhập"
            >
              <UserIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

import React, { useRef, useState } from 'react';
import {
  Camera,
  GraduationCap,
  Briefcase,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Plus,
  X,
  ExternalLink,
} from 'lucide-react';
import { Language, StudentProfile, UserAccount } from '../types';
import { useTranslation } from '../data/translations';
import { CITIES, MAJORS, SALARY_CATEGORIES } from '../data/mockJobs';

interface ProfileViewProps {
  profile: StudentProfile;
  onSaveProfile: (updated: StudentProfile) => void;
  currentUser: UserAccount | null;
  onLogout: () => void;
  lang: Language;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  profile,
  onSaveProfile,
  currentUser,
  onLogout,
  lang,
}) => {
  const t = useTranslation(lang);
  const [formData, setFormData] = useState<StudentProfile>(profile);
  const [newSkill, setNewSkill] = useState('');
  const [showSavedNotification, setShowSavedNotification] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle avatar upload via file input (converts to base64 data URL)
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setFormData((prev) => ({ ...prev, avatarUrl: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkill.trim()) return;
    if (!formData.skills.includes(newSkill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
    }
    setNewSkill('');
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skillToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setShowSavedNotification(true);
    setTimeout(() => setShowSavedNotification(false), 3000);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-4 pb-24">
      {/* Page Title */}
      <div className="mb-4">
        <h1 className="text-xl font-extrabold text-slate-900 font-display">
          {t.profileTitle}
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          {t.profileSubtitle}
        </p>
      </div>

      {showSavedNotification && (
        <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-semibold text-emerald-800 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{t.profileSavedSuccess}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Avatar Upload Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs flex items-center gap-4">
          <div className="relative group shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 ring-3 ring-[#0F766E]/20 shadow-xs flex items-center justify-center">
              {formData.avatarUrl ? (
                <img
                  src={formData.avatarUrl}
                  alt={formData.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-2xl font-bold text-[#0F766E]">
                  {formData.fullName.charAt(0) || 'SV'}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-1 -right-1 p-2 rounded-full bg-[#0F766E] text-white shadow-md hover:bg-[#115E59] active:scale-95 transition-all touch-manipulation"
              aria-label={t.uploadPhoto}
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold text-slate-900 truncate">
              {formData.fullName || 'Họ và tên sinh viên'}
            </h2>
            <p className="text-xs text-[#0F766E] font-medium truncate mt-0.5">
              {formData.faculty} · {formData.university}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Nhấn biểu tượng máy ảnh để chọn ảnh từ điện thoại
            </p>
          </div>
        </div>

        {/* Section 1: Thông tin liên lạc cơ bản */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-3">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0F766E]"></span>
            <span>Thông tin cá nhân & Liên hệ</span>
          </h2>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fullName} *
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E]"
              placeholder="Ví dụ: Nguyễn Văn Minh"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.phoneNumber} *
              </label>
              <div className="relative">
                <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E] tabular-nums"
                  placeholder="0912 345 678"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.emailAddress} *
              </label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E]"
                  placeholder="sinhvien@student.edu.vn"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.homeAddress}
            </label>
            <div className="relative">
              <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E]"
                placeholder="Quận/Huyện, Tỉnh/Thành phố hiện tại"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Học vấn sinh viên */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-3">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#0F766E]" />
            <span>{t.educationTitle}</span>
          </h2>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.universityName}
            </label>
            <input
              type="text"
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E]"
              placeholder="VD: Trường ĐH Bách Khoa / ĐH Sư Phạm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.majorName}
            </label>
            <select
              value={formData.faculty}
              onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
              className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E]"
            >
              {MAJORS.filter((m) => m !== 'Tất cả ngành học').map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.gpa}
              </label>
              <input
                type="text"
                value={formData.gpa}
                onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E] tabular-nums"
                placeholder="3.5 / 4.0"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.gradYear}
              </label>
              <input
                type="text"
                value={formData.graduationYear}
                onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E] tabular-nums"
                placeholder="2027"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Kỹ năng cá nhân */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-3">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#0F766E]" />
            <span>{t.skillsTitle}</span>
          </h2>

          <div className="flex flex-wrap gap-1.5">
            {formData.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="hover:text-red-600 p-0.5 rounded-full"
                  aria-label="Xóa kỹ năng"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-1">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder={t.addSkillPlaceholder}
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E]"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddSkill(e);
                }
              }}
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="px-3.5 py-2 bg-[#0F766E] text-white rounded-xl text-xs font-semibold hover:bg-[#115E59] active:scale-95 transition-all touch-manipulation inline-flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.addBtn}</span>
            </button>
          </div>
        </div>

        {/* Section 4: Nhu cầu tìm việc & Giới thiệu bản thân */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-3">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-[#0F766E]" />
            <span>{t.preferencesTitle}</span>
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.preferredType}
              </label>
              <select
                value={formData.desiredJobType}
                onChange={(e) => setFormData({ ...formData, desiredJobType: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E]"
              >
                <option value="Part-time">Part-time</option>
                <option value="Thực tập">Thực tập</option>
                <option value="Full-time">Full-time</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.preferredCity}
              </label>
              <select
                value={formData.preferredCity}
                onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E]"
              >
                {CITIES.filter((c) => c !== 'Tất cả địa điểm').map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.desiredSalary}
            </label>
            <select
              value={formData.desiredSalary}
              onChange={(e) => setFormData({ ...formData, desiredSalary: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E]"
            >
              {SALARY_CATEGORIES.filter((s) => s !== 'Tất cả mức lương').map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.bioTitle}
            </label>
            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Chia sẻ ngắn về tính cách, mục tiêu học tập và kinh nghiệm..."
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0F766E]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2 space-y-2">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#0F766E] hover:bg-[#115E59] active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-md transition-all touch-manipulation"
          >
            {t.saveProfileBtn}
          </button>

          {currentUser && (
            <button
              type="button"
              onClick={onLogout}
              className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors touch-manipulation"
            >
              {t.logout}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

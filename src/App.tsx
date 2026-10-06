import React, { useState, useEffect } from 'react';
import { Bookmark, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { Job, JobApplication, Language, SearchFilterState, StudentProfile, UserAccount } from './types';
import { DEFAULT_STUDENT_PROFILE, INITIAL_JOBS } from './data/mockJobs';
import { useTranslation } from './data/translations';
import { MobileTopBar } from './components/MobileTopBar';
import { BottomNav, MobileTab } from './components/BottomNav';
import { MobileHomeView } from './components/MobileHomeView';
import { MobileSearchView } from './components/MobileSearchView';
import { MobileJobDetail } from './components/MobileJobDetail';
import { ProfileView } from './components/ProfileView';
import { MobileAuthModal } from './components/MobileAuthModal';
import { MobileJobCard } from './components/MobileJobCard';

export default function App() {
  // Language State: 'vi' or 'en'
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('jobshub_lang');
      return saved === 'en' ? 'en' : 'vi';
    } catch {
      return 'vi';
    }
  });

  const t = useTranslation(lang);

  // Tab State: 'home' | 'search' | 'saved' | 'applications' | 'profile'
  const [activeTab, setActiveTab] = useState<MobileTab>('home');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Jobs Dataset
  const [jobs, setJobs] = useState<Job[]>(() => {
    try {
      const saved = localStorage.getItem('jobshub_jobs_list');
      return saved ? JSON.parse(saved) : INITIAL_JOBS;
    } catch {
      return INITIAL_JOBS;
    }
  });

  // Saved Jobs
  const [savedJobIds, setSavedJobIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('jobshub_saved_ids');
      return raw ? JSON.parse(raw) : ['job-01', 'job-03'];
    } catch {
      return ['job-01', 'job-03'];
    }
  });

  // Student Profile: Full personal details, photo, contact, education, skills
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const raw = localStorage.getItem('jobshub_student_profile');
      return raw ? JSON.parse(raw) : DEFAULT_STUDENT_PROFILE;
    } catch {
      return DEFAULT_STUDENT_PROFILE;
    }
  });

  // Applications
  const [applications, setApplications] = useState<JobApplication[]>(() => {
    try {
      const raw = localStorage.getItem('jobshub_applications');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Logged-in Account
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => {
    try {
      const raw = localStorage.getItem('jobshub_current_user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  // Search Filter State
  const [searchFilters, setSearchFilters] = useState<SearchFilterState>({
    keyword: '',
    location: 'Tất cả địa điểm',
    jobType: 'Tất cả loại hình',
    salaryCategory: 'Tất cả mức lương',
    experience: 'Tất cả kinh nghiệm',
    major: 'Tất cả ngành học',
    workMode: 'Tất cả hình thức',
    shift: 'Tất cả ca làm',
  });

  // Auth Modal
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  // Sync state to local storage
  useEffect(() => {
    try {
      localStorage.setItem('jobshub_lang', lang);
    } catch {}
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem('jobshub_saved_ids', JSON.stringify(savedJobIds));
    } catch {}
  }, [savedJobIds]);

  useEffect(() => {
    try {
      localStorage.setItem('jobshub_student_profile', JSON.stringify(profile));
    } catch {}
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('jobshub_applications', JSON.stringify(applications));
    } catch {}
  }, [applications]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('jobshub_current_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('jobshub_current_user');
      }
    } catch {}
  }, [currentUser]);

  const handleToggleLang = () => {
    const nextLang: Language = lang === 'vi' ? 'en' : 'vi';
    setLang(nextLang);
    showToast(nextLang === 'vi' ? 'Đã chuyển sang Tiếng Việt' : 'Switched to English');
  };

  const handleToggleSaveJob = (jobId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const targetJob = jobs.find((j) => j.id === jobId);
    const title = targetJob ? (lang === 'en' && targetJob.titleEn ? targetJob.titleEn : targetJob.title) : '';
    setSavedJobIds((prev) => {
      const exists = prev.includes(jobId);
      if (exists) {
        showToast(lang === 'vi' ? `Đã bỏ lưu "${title}"` : `Removed "${title}" from saved`);
        return prev.filter((id) => id !== jobId);
      } else {
        showToast(lang === 'vi' ? `Đã lưu "${title}" vào mục yêu thích` : `Saved "${title}" to bookmarks`);
        return [...prev, jobId];
      }
    });
  };

  const handleSelectJob = (job: Job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChangeTab = (tab: MobileTab) => {
    setSelectedJob(null);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitApplication = (data: {
    jobId: string;
    fullName: string;
    email: string;
    phone: string;
    university: string;
    major: string;
    availableShifts: string;
    note: string;
  }) => {
    const job = jobs.find((j) => j.id === data.jobId);
    if (!job) return;

    const newApp: JobApplication = {
      id: 'app-' + Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      companyName: job.companyName,
      appliedAt: new Date().toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US'),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      university: data.university,
      major: data.major,
      availableShifts: data.availableShifts,
      note: data.note,
      status: 'Đã gửi hồ sơ',
    };

    setApplications((prev) => [newApp, ...prev]);
    showToast(t.applySuccess);
  };

  const handleSaveProfile = (updatedProfile: StudentProfile) => {
    setProfile(updatedProfile);
    if (currentUser) {
      setCurrentUser({
        ...currentUser,
        fullName: updatedProfile.fullName,
        avatarUrl: updatedProfile.avatarUrl,
        email: updatedProfile.email,
        phone: updatedProfile.phone,
      });
    }
    showToast(t.profileSavedSuccess);
  };

  const appliedJobIds = applications.map((a) => a.jobId);
  const savedJobsList = jobs.filter((j) => savedJobIds.includes(j.id));

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-[#0F172A] flex flex-col antialiased">
      {/* Mobile Top Bar */}
      <MobileTopBar
        lang={lang}
        onToggleLang={handleToggleLang}
        currentUser={currentUser}
        onOpenAuth={() => {
          setAuthMode('login');
          setAuthModalOpen(true);
        }}
        onOpenProfile={() => handleChangeTab('profile')}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90vw] bg-slate-900/95 backdrop-blur-md text-white px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate">{toastMessage}</span>
        </div>
      )}

      {/* Main View Area */}
      <main className="flex-1 w-full max-w-md mx-auto">
        {selectedJob ? (
          <MobileJobDetail
            job={selectedJob}
            isSaved={savedJobIds.includes(selectedJob.id)}
            hasApplied={appliedJobIds.includes(selectedJob.id)}
            profile={profile}
            currentUser={currentUser}
            lang={lang}
            onBack={() => setSelectedJob(null)}
            onToggleSave={handleToggleSaveJob}
            onSubmitApplication={handleSubmitApplication}
          />
        ) : activeTab === 'home' ? (
          <MobileHomeView
            jobs={jobs}
            savedJobIds={savedJobIds}
            appliedJobIds={appliedJobIds}
            profile={profile}
            lang={lang}
            onSelectJob={handleSelectJob}
            onToggleSave={handleToggleSaveJob}
            onNavigateToSearch={(q) => {
              setSearchFilters((prev) => ({ ...prev, keyword: q }));
              handleChangeTab('search');
            }}
          />
        ) : activeTab === 'search' ? (
          <MobileSearchView
            jobs={jobs}
            filters={searchFilters}
            setFilters={setSearchFilters}
            savedJobIds={savedJobIds}
            appliedJobIds={appliedJobIds}
            lang={lang}
            onSelectJob={handleSelectJob}
            onToggleSave={handleToggleSaveJob}
          />
        ) : activeTab === 'saved' ? (
          /* SAVED JOBS LIST */
          <div className="px-4 py-3 pb-24 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-base font-extrabold text-slate-900 font-display">
                  {t.savedTab}
                </h1>
                <p className="text-[11px] text-slate-500">
                  {savedJobsList.length} {t.jobsFound}
                </p>
              </div>
            </div>

            {savedJobsList.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-2xs mt-4">
                <Bookmark className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <h2 className="text-sm font-bold text-slate-900">
                  {t.noSavedJobs}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {t.noSavedJobsDesc}
                </p>
                <button
                  type="button"
                  onClick={() => handleChangeTab('home')}
                  className="mt-4 px-4 py-2 bg-[#0F766E] text-white rounded-xl text-xs font-semibold"
                >
                  {t.homeTab}
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {savedJobsList.map((job) => (
                  <MobileJobCard
                    key={job.id}
                    job={job}
                    isSaved={true}
                    hasApplied={appliedJobIds.includes(job.id)}
                    lang={lang}
                    onSelect={handleSelectJob}
                    onToggleSave={handleToggleSaveJob}
                  />
                ))}
              </div>
            )}
          </div>
        ) : activeTab === 'applications' ? (
          /* APPLICATIONS HISTORY */
          <div className="px-4 py-3 pb-24 space-y-3">
            <div>
              <h1 className="text-base font-extrabold text-slate-900 font-display">
                {t.applicationsTab}
              </h1>
              <p className="text-[11px] text-slate-500">
                {applications.length} đơn đã nộp
              </p>
            </div>

            {applications.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-2xs mt-4">
                <FileText className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <h2 className="text-sm font-bold text-slate-900">
                  {t.noAppliedJobs}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {t.noAppliedJobsDesc}
                </p>
                <button
                  type="button"
                  onClick={() => handleChangeTab('home')}
                  className="mt-4 px-4 py-2 bg-[#0F766E] text-white rounded-xl text-xs font-semibold"
                >
                  {t.homeTab}
                </button>
              </div>
            ) : (
              <div className="space-y-2.5">
                {applications.map((app) => {
                  const targetJob = jobs.find((j) => j.id === app.jobId);
                  return (
                    <div
                      key={app.id}
                      className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-2xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {app.status}
                        </span>
                        <span className="text-[10px] text-slate-400 tabular-nums">
                          {app.appliedAt}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xs font-bold text-slate-900">
                          {app.jobTitle}
                        </h2>
                        <p className="text-[11px] text-[#0F766E] font-medium">
                          {app.companyName}
                        </p>
                      </div>

                      <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-100 flex items-center justify-between">
                        <span>Ứng viên: {app.fullName}</span>
                        {targetJob && (
                          <button
                            type="button"
                            onClick={() => handleSelectJob(targetJob)}
                            className="text-[#0F766E] font-semibold flex items-center gap-0.5"
                          >
                            <span>Xem tin</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* PROFILE VIEW */
          <ProfileView
            profile={profile}
            onSaveProfile={handleSaveProfile}
            currentUser={currentUser}
            onLogout={() => {
              setCurrentUser(null);
              showToast(lang === 'vi' ? 'Đã đăng xuất' : 'Logged out');
            }}
            lang={lang}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        onChangeTab={handleChangeTab}
        savedCount={savedJobIds.length}
        applicationsCount={applications.length}
        lang={lang}
      />

      {/* Auth Modal (Login / Register / Social) */}
      <MobileAuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        lang={lang}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(user, message) => {
          setCurrentUser(user);
          setProfile((prev) => ({
            ...prev,
            fullName: user.fullName || prev.fullName,
            email: user.email || prev.email,
            phone: user.phone || prev.phone,
          }));
          showToast(message);
        }}
      />
    </div>
  );
}

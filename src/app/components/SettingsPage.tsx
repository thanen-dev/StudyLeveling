import { Bell, Moon, User, Shield } from "lucide-react";

export function SettingsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="relative mb-8">
        {/* Header */}
        <div 
          className="relative bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-900/40 backdrop-blur-sm border-2 overflow-hidden"
          style={{
            clipPath: 'polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px))',
            borderImage: 'linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb, #60a5fa) 1',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.3), inset 0 0 60px rgba(59, 130, 246, 0.1)'
          }}
        >
          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

          <div className="relative p-8">
            <h1 className="text-3xl font-bold text-white">SETTINGS</h1>
            <p className="text-cyan-400 text-sm mt-2">Configure your hunter profile</p>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Settings */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-500 rounded"></div>
            <User className="w-5 h-5 text-cyan-400" />
            Account
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Email Notifications</span>
              <button className="w-12 h-6 bg-cyan-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Profile Visibility</span>
              <button className="w-12 h-6 bg-slate-600 rounded-full relative">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-500 rounded"></div>
            <Bell className="w-5 h-5 text-cyan-400" />
            Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Assignment Reminders</span>
              <button className="w-12 h-6 bg-cyan-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Grade Updates</span>
              <button className="w-12 h-6 bg-cyan-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-500 rounded"></div>
            <Moon className="w-5 h-5 text-cyan-400" />
            Appearance
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Dark Mode</span>
              <button className="w-12 h-6 bg-cyan-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Animations</span>
              <button className="w-12 h-6 bg-cyan-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-500 rounded"></div>
            <Shield className="w-5 h-5 text-cyan-400" />
            Privacy
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Share Progress</span>
              <button className="w-12 h-6 bg-slate-600 rounded-full relative">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Show Stats</span>
              <button className="w-12 h-6 bg-cyan-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

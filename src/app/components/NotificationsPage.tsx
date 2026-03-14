import { Bell, CheckCircle, Award, MessageSquare, Calendar } from "lucide-react";

export function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "xp",
      icon: Award,
      title: "XP Gained!",
      message: "You earned 150 XP from completing 'Algorithm Analysis Task'",
      time: "5 minutes ago",
      unread: true
    },
    {
      id: 2,
      type: "message",
      icon: MessageSquare,
      title: "New Message",
      message: "Sarah sent you a message in General Chat",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 3,
      type: "deadline",
      icon: Calendar,
      title: "Upcoming Deadline",
      message: "FIT3170 Project Milestone due in 2 days",
      time: "3 hours ago",
      unread: true
    },
    {
      id: 4,
      type: "achievement",
      icon: CheckCircle,
      title: "Task Completed",
      message: "You completed 'Database Design Exercise'",
      time: "1 day ago",
      unread: false
    },
    {
      id: 5,
      type: "achievement",
      icon: Award,
      title: "Level Up!",
      message: "Congratulations! You reached Level 12",
      time: "2 days ago",
      unread: false
    }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-50"></div>
            <h1 className="relative text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 tracking-wider">
              NOTIFICATIONS
            </h1>
          </div>
          <p className="text-cyan-400/70 text-sm tracking-wider">
            Stay updated with your latest activities
          </p>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-lg transition-all"></div>
                
                {/* Notification Card */}
                <div 
                  className={`relative bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm border-2 transition-all overflow-hidden rounded-lg ${
                    notification.unread 
                      ? 'border-cyan-400/60 group-hover:border-cyan-400' 
                      : 'border-slate-600/40 group-hover:border-slate-500/60'
                  }`}
                >
                  {/* Inner glow for unread */}
                  {notification.unread && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent"></div>
                  )}
                  
                  {/* Content */}
                  <div className="relative p-5 flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-lg border-2 ${
                      notification.unread 
                        ? 'border-cyan-400/50 bg-cyan-500/10' 
                        : 'border-slate-600/40 bg-slate-700/50'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        notification.unread ? 'text-cyan-400' : 'text-slate-400'
                      }`} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className={`font-semibold ${
                          notification.unread ? 'text-cyan-300' : 'text-slate-300'
                        }`}>
                          {notification.title}
                        </h3>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm mb-2">
                        {notification.message}
                      </p>
                      <p className="text-cyan-400/60 text-xs">
                        {notification.time}
                      </p>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400/40"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400/40"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-400/40"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400/40"></div>

                  {/* Scanline */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.03) 2px, rgba(59, 130, 246, 0.03) 4px)'
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State (if no notifications) */}
        {notifications.length === 0 && (
          <div className="text-center py-16">
            <Bell className="w-16 h-16 text-cyan-400/30 mx-auto mb-4" />
            <p className="text-slate-400 text-lg">No notifications yet</p>
          </div>
        )}
      </div>
    </div>
  );
}

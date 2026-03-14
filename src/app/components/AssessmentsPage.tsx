import { Calendar, Clock, AlertCircle, FileText } from "lucide-react";

interface Assessment {
  id: number;
  unit: string;
  title: string;
  type: string;
  dueDate: string;
  dueTime: string;
  progress: number;
  status: "upcoming" | "due-soon" | "overdue";
}

export function AssessmentsPage() {
  const assessments: Assessment[] = [
    {
      id: 1,
      unit: "FIT2004",
      title: "Algorithm Analysis Assignment",
      type: "Assignment",
      dueDate: "Mar 18, 2026",
      dueTime: "11:59 PM",
      progress: 60,
      status: "due-soon"
    },
    {
      id: 2,
      unit: "FIT3170",
      title: "Software Requirements Document",
      type: "Project",
      dueDate: "Mar 22, 2026",
      dueTime: "11:59 PM",
      progress: 40,
      status: "upcoming"
    },
    {
      id: 3,
      unit: "FIT3171",
      title: "Database Design Project",
      type: "Project",
      dueDate: "Mar 25, 2026",
      dueTime: "11:59 PM",
      progress: 30,
      status: "upcoming"
    },
    {
      id: 4,
      unit: "FIT3152",
      title: "Data Visualization Report",
      type: "Report",
      dueDate: "Mar 28, 2026",
      dueTime: "11:59 PM",
      progress: 20,
      status: "upcoming"
    },
    {
      id: 5,
      unit: "FIT2004",
      title: "Mid-Semester Exam",
      type: "Exam",
      dueDate: "Apr 2, 2026",
      dueTime: "2:00 PM",
      progress: 0,
      status: "upcoming"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "due-soon":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/30";
      case "overdue":
        return "text-red-400 bg-red-400/10 border-red-400/30";
      default:
        return "text-cyan-400 bg-cyan-400/10 border-cyan-400/30";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "due-soon":
        return "Due Soon";
      case "overdue":
        return "Overdue";
      default:
        return "Upcoming";
    }
  };

  // Generate calendar for March 2026
  const daysInMonth = 31;
  const startDay = 6; // March 1, 2026 is a Sunday (0 = Sunday)
  const today = 13;

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Assessment dates for highlighting
  const assessmentDates = new Set([18, 22, 25, 28]);
  const examDates = new Set([2]); // April dates won't show in March

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="relative mb-8">
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
            <h1 className="text-3xl font-bold text-white mb-2">ASSESSMENTS</h1>
            <p className="text-cyan-400 text-sm">Track your assignments and exam dates</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assessment List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Upcoming Assessments
            </h2>
          </div>

          {assessments.map((assessment) => (
            <div
              key={assessment.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/30">
                      {assessment.unit}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${getStatusColor(assessment.status)}`}>
                      {getStatusText(assessment.status)}
                    </span>
                    <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">
                      {assessment.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {assessment.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      {assessment.dueDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      {assessment.dueTime}
                    </div>
                  </div>
                </div>
                {assessment.status === "due-soon" && (
                  <AlertCircle className="w-6 h-6 text-yellow-400" />
                )}
              </div>

              {/* Progress */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-400">Progress</span>
                  <span className="text-xs text-cyan-400 font-semibold">{assessment.progress}%</span>
                </div>
                <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                    style={{ width: `${assessment.progress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 hover:border-cyan-400 text-cyan-400 rounded-lg py-2 font-semibold text-sm transition-all">
                  View Details
                </button>
                <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg py-2 font-semibold text-sm transition-all">
                  Submit Work
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 sticky top-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              March 2026
            </h2>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Day Headers */}
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="text-center text-xs font-semibold text-cyan-400 pb-2">
                  {day}
                </div>
              ))}

              {/* Calendar Days */}
              {calendarDays.map((day, i) => {
                const isToday = day === today;
                const hasAssessment = day && assessmentDates.has(day);
                const hasExam = day && examDates.has(day);

                return (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${
                      !day 
                        ? 'bg-transparent' 
                        : isToday
                        ? 'bg-cyan-500 text-white font-bold'
                        : hasAssessment
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 font-semibold'
                        : hasExam
                        ? 'bg-red-500/20 text-red-400 border border-red-400/30 font-semibold'
                        : 'bg-slate-700/30 text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {day || ''}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                <span className="text-slate-300">Today</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-4 h-4 bg-yellow-500/20 border border-yellow-400/30 rounded"></div>
                <span className="text-slate-300">Assessment Due</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-4 h-4 bg-red-500/20 border border-red-400/30 rounded"></div>
                <span className="text-slate-300">Exam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

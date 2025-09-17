import { TimetableCard } from '@/components/student/timetable-card';
import { AttendanceStatsCard } from '@/components/student/attendance-stats-card';
import { GamificationCard } from '@/components/student/gamification-card';
import { AbsenceNotificationCard } from '@/components/student/absence-notification-card';
import { studentData, timetableData } from '@/lib/mock-data';

export default function StudentDashboardPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <TimetableCard timetable={timetableData} />
      </div>
      <div className="space-y-6">
        <AttendanceStatsCard percentage={studentData.attendancePercentage} />
        <GamificationCard />
      </div>
      <div className="lg:col-span-3">
        <AbsenceNotificationCard />
      </div>
    </div>
  );
}

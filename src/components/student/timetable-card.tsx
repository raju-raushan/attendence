import type { CourseSession } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, User, MapPin, Clock } from 'lucide-react';
import { MarkAttendanceButton } from './mark-attendance-button';

interface TimetableCardProps {
  timetable: CourseSession[];
}

export function TimetableCard({ timetable }: TimetableCardProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Timetable</CardTitle>
        <CardDescription>{today}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {timetable.map((session, index) => (
            <div key={session.id}>
              <div className="flex flex-col gap-4 p-4 rounded-lg md:flex-row md:items-center bg-secondary/50">
                <div className="flex-1 space-y-2">
                  <p className="flex items-center gap-2 font-semibold text-primary">
                    <BookOpen className="w-5 h-5" />
                    <span>{session.courseName} ({session.courseCode})</span>
                  </p>
                  <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-3">
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4"/>{session.time}</p>
                    <p className="flex items-center gap-2"><User className="w-4 h-4"/>{session.lecturer}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/>{session.location}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <MarkAttendanceButton session={session} />
                </div>
              </div>
              {index < timetable.length - 1 && <Separator className="my-4 md:hidden" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

import type { Badge as BadgeType } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Flame } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { studentData } from '@/lib/mock-data';

export function GamificationCard() {
  const { streak, badges } = studentData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
        <CardDescription>Streaks, badges, and achievements.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Attendance Streak</h3>
          <div className="flex items-center p-3 rounded-lg bg-secondary">
            <Flame className="w-8 h-8 mr-4 text-accent" />
            <div>
              <p className="text-2xl font-bold font-headline">{streak} Days</p>
              <p className="text-sm text-muted-foreground">Keep it up!</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Badges Earned</h3>
          <div className="flex space-x-4">
            <TooltipProvider>
              {badges.map((badge) => (
                <Tooltip key={badge.id}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary">
                      <badge.icon className={`w-8 h-8 ${badge.color}`} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-semibold">{badge.name}</p>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

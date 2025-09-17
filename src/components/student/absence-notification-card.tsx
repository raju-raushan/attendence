"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, BellRing, BellOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { checkAbsenceNotifications } from '@/app/student/actions';
import type { Student } from '@/lib/types';

interface AbsenceNotificationCardProps {
    student: Student;
}

export function AbsenceNotificationCard({ student }: AbsenceNotificationCardProps) {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleCheck = async () => {
        setIsLoading(true);
        try {
            const result = await checkAbsenceNotifications({ studentId: student.id, absences: student.absences });
            if (result.error) {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.error,
                });
            } else {
                toast({
                    title: 'Absence Check Complete',
                    description: result.message,
                    action: result.notificationSent ? <BellRing className="text-green-500" /> : <BellOff className="text-muted-foreground" />,
                });
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'An unexpected error occurred.',
            });
        }
        setIsLoading(false);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Absence Notifications</CardTitle>
                <CardDescription>
                    The system automatically notifies you if you miss 3 or more consecutive lectures. You can run a manual check here.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                    <div>
                        <p className="font-semibold">Automated Attendance Check</p>
                        <p className="text-sm text-muted-foreground">Check if a notification would be triggered based on your record.</p>
                    </div>
                    <Button onClick={handleCheck} disabled={isLoading}>
                        {isLoading ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                            <BellRing className="w-4 h-4 mr-2" />
                        )}
                        {isLoading ? 'Checking...' : 'Run Check'}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

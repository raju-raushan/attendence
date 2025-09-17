'use server';

import { checkAndNotifyAbsences, CheckAndNotifyAbsencesInput } from '@/ai/flows/automated-absence-notifications';

export async function checkAbsenceNotifications(input: CheckAndNotifyAbsencesInput) {
    try {
        // In a real app, you would fetch the student's absence history here.
        // For this demo, we are passing it from the client.
        if (input.absences.length < 3) {
            return { notificationSent: false, message: "Fewer than 3 absences, no check needed." };
        }
        const result = await checkAndNotifyAbsences(input);
        return { ...result, message: result.notificationSent ? "Notification has been triggered." : "No notification was sent based on attendance rules." };
    } catch (error) {
        console.error("Error checking absence notifications:", error);
        return { notificationSent: false, error: "Failed to check notifications." };
    }
}

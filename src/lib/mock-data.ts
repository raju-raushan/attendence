import { Award, Star, TrendingUp } from 'lucide-react';
import type { Student, CourseSession, Badge } from './types';

export const studentData: Student = {
  id: 'STU123',
  name: 'Alex Johnson',
  attendancePercentage: 88,
  streak: 12,
  badges: [
    { id: 'b1', name: 'Perfect Week', icon: Award, description: 'Attended all classes in a week.', color: 'text-yellow-500' },
    { id: 'b2', name: 'Early Bird', icon: Star, description: 'Consistently on time.', color: 'text-blue-500' },
    { id: 'b3', name: 'Streak Master', icon: TrendingUp, description: '10-day attendance streak.', color: 'text-green-500' },
  ],
  absences: [
    { date: '2023-10-10', course: 'CS101' },
    { date: '2023-10-11', course: 'CS101' },
    { date: '2023-10-12', course: 'CS101' },
    { date: '2023-10-18', course: 'MA202' },
  ],
};

export const timetableData: CourseSession[] = [
  {
    id: 'CS101-0900',
    courseName: 'Introduction to Programming',
    courseCode: 'CS101',
    time: '09:00 - 10:30',
    lecturer: 'Dr. Alan Turing',
    location: 'Room 101, Tech Building',
    gps: { latitude: 34.0522, longitude: -118.2437 },
    attendanceMarked: true,
  },
  {
    id: 'MA202-1100',
    courseName: 'Discrete Mathematics',
    courseCode: 'MA202',
    time: '11:00 - 12:30',
    lecturer: 'Dr. Ada Lovelace',
    location: 'Room 205, Math Building',
    gps: { latitude: 34.0530, longitude: -118.2445 },
    attendanceMarked: false,
  },
  {
    id: 'PH101-1400',
    courseName: 'Physics for Engineers',
    courseCode: 'PH101',
    time: '14:00 - 15:30',
    lecturer: 'Dr. Marie Curie',
    location: 'Room 303, Science Hall',
    gps: { latitude: 34.0515, longitude: -118.2429 },
    attendanceMarked: false,
  },
];

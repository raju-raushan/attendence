export type CourseSession = {
  id: string;
  courseName: string;
  courseCode: string;
  time: string;
  lecturer: string;
  location: string;
  gps: {
    latitude: number;
    longitude: number;
  };
  attendanceMarked: boolean;
};

export type Badge = {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  color: string;
};

export type Student = {
  id: string;
  name: string;
  attendancePercentage: number;
  streak: number;
  badges: Badge[];
  absences: { date: string; course: string }[];
};

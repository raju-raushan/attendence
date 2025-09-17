"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { CourseSession } from '@/lib/types';
import { Check, Frown, Loader2, MapPin } from 'lucide-react';

interface MarkAttendanceButtonProps {
  session: CourseSession;
}

// Haversine formula to calculate distance between two lat/lon points
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI/180; // φ, λ in radians
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c; // in metres
}

export function MarkAttendanceButton({ session }: MarkAttendanceButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMarked, setIsMarked] = useState(session.attendanceMarked);
  const { toast } = useToast();
  const LOCATION_THRESHOLD_METERS = 100; // 100 meters tolerance

  const handleMarkAttendance = () => {
    setIsLoading(true);
    if (!navigator.geolocation) {
      toast({
        variant: 'destructive',
        title: 'Geolocation not supported',
        description: 'Your browser does not support geolocation.',
      });
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const distance = getDistance(latitude, longitude, session.gps.latitude, session.gps.longitude);

        if (distance <= LOCATION_THRESHOLD_METERS) {
          // Simulate API call to mark attendance
          setTimeout(() => {
            setIsMarked(true);
            setIsLoading(false);
            toast({
              title: 'Attendance Marked!',
              description: `Successfully marked attendance for ${session.courseCode}.`,
              action: <Check className="text-green-500" />,
            });
          }, 1000);
        } else {
          setIsLoading(false);
          toast({
            variant: 'destructive',
            title: 'Out of Range',
            description: `You are approximately ${Math.round(distance)} meters away. Please move closer to the classroom.`,
            action: <Frown />,
          });
        }
      },
      (error) => {
        setIsLoading(false);
        let description = "An unknown error occurred.";
        if (error.code === error.PERMISSION_DENIED) {
            description = "Please allow location access to mark attendance.";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
            description = "Location information is unavailable.";
        }
        toast({
          variant: 'destructive',
          title: 'Location Error',
          description: description,
        });
      }
    );
  };

  if (isMarked) {
    return (
      <Button disabled variant="secondary" className="w-full md:w-auto">
        <Check className="mr-2 h-4 w-4" />
        Attended
      </Button>
    );
  }

  return (
    <Button onClick={handleMarkAttendance} disabled={isLoading} className="w-full md:w-auto" variant="outline">
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <MapPin className="mr-2 h-4 w-4" />
      )}
      {isLoading ? 'Verifying...' : 'Mark Attendance'}
    </Button>
  );
}

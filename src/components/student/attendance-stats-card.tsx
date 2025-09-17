"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { RadialBar, RadialBarChart } from "recharts";

interface AttendanceStatsCardProps {
  percentage: number;
}

export function AttendanceStatsCard({ percentage }: AttendanceStatsCardProps) {
  const chartData = [{ name: 'attendance', value: percentage, fill: 'var(--color-fill)' }];

  const chartConfig = {
    attendance: {
      label: "Attendance",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Rate</CardTitle>
        <CardDescription>Your overall attendance percentage.</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[200px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={-270}
            innerRadius="70%"
            outerRadius="100%"
            barSize={20}
            cy="50%"
          >
            <style>{`
              :root { --color-fill: hsl(var(--primary)); }
              .dark { --color-fill: hsl(var(--primary)); }
            `}</style>
            <RadialBar
              dataKey="value"
              background={{ fill: "hsl(var(--muted))" }}
              cornerRadius={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
          </RadialBarChart>
        </ChartContainer>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-4xl font-bold font-headline text-primary">
            {percentage}%
          </span>
          <span className="text-sm text-muted-foreground">Attended</span>
        </div>
      </CardContent>
    </Card>
  );
}

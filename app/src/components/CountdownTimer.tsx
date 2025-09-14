import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Official Launch: January 10, 2026
  const launchDate = new Date("2026-01-10T00:00:00").getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = launchDate - now;
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", labelHindi: "दिन", value: timeLeft.days },
    { label: "Hours", labelHindi: "घंटे", value: timeLeft.hours },
    { label: "Minutes", labelHindi: "मिनट", value: timeLeft.minutes },
    { label: "Seconds", labelHindi: "सेकंड", value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {timeUnits.map((unit, index) => (
        <Card key={index} className="text-center">
          <CardContent className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              {unit.label}
            </div>
            <div className="text-xs text-muted-foreground italic">
              {unit.labelHindi}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CountdownTimer;
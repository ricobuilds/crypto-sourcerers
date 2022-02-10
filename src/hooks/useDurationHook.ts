import { useEffect } from "react";
import { useState } from "react";
// goal: hook to tell me the time duration between two timestamps
// if the time is under an hour, return the minutes
// if the time is under a day, return the hours
// if the time is under a week, return the days
// if the time is under a month, return the weeks
export const useDurationHook = (startTime: number): string => {
  const [duration, setDuration] = useState(0);
  const [durationStr, setDurationStr] = useState("");
  useEffect(() => {
    const diff = Date.now() - startTime;
    if (diff < 3600000) {
      setDuration(Math.floor(diff / 60000));
      setDurationStr(`${duration.toFixed(0)} minutes`);
      // return `${duration.toFixed(0)} minutes`;
    } else if (diff < 86400000) {
      setDuration(Math.floor(diff / 3600000));
      setDurationStr(`${duration.toFixed(0)} hours`);
      // return `${duration.toFixed(0)} hours`;
    } else if (diff < 604800000) {
      setDuration(Math.floor(diff / 86400000));
      setDurationStr(`${duration.toFixed(0)} days`);
      // return durationStr;
    } else if (diff < 2592000000) {
      setDuration(Math.floor(diff / 604800000));
      setDurationStr(`${duration.toFixed(0)} weeks`);
      // return `${duration.toFixed(0)} weeks`;
    } else {
      setDuration(Math.floor(diff / 2592000000));
      setDurationStr(`${duration.toFixed(0)} months`);
      // return `${duration.toFixed(0)} months`;
    }
  }, []);
  return durationStr;
};

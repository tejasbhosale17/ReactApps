import { useEffect, useState } from "react";

const CurrentDateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval has been steup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("cancelled the interval");
    };
  }, []);
  return (
    <p className="conatiner-dt">
      This is the current Date and Time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentDateTime;

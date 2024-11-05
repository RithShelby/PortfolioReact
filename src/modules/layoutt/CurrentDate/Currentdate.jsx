import React, { useEffect, useState } from "react";

const Currentdate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
      <p className="">{currentDate.toLocaleString()}</p>
  );
};

export default Currentdate;

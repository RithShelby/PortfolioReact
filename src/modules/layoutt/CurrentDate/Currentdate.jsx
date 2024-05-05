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
    <div className="fw-normal fs-6">
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
};

export default Currentdate;

const { useState, useEffect } = require("react");

const Timer = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    let intervalId = setInterval(() => {
      console.log("set Interval");
      setCount((prevCount) => {
        if (prevCount <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevCount - 1;
      });
      const cleanup = () => {
        clearInterval(intervalId);
        console.log("clearid");
      };
      return cleanup;
    }, 1000);S
  }, []);
  return (
    <>
      <h1>count:{count}</h1>
    </>
  );
};
export default Timer;

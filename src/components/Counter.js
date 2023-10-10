import { useCallback, useEffect, useState } from "react";


const Timer3 = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="relative counter-angled py-40">
      <div className="counter-grad top-0"></div>
      <div className="relative flex flex-col items-center justify-center w-full h-full  sm:gap-16">
        <div className="counter-container border-2 border-[#5c5c5c] px-10 pb-8 pt-2 rounded-2xl">
        <div className=" flex justify-center sm:gap-8 ">
          <div className="flex flex-col relative">
            <div className="h-10 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-24 flex justify-center items-center rounded-lg">
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#ffffff]">
                {countDownTime?.days}
              </span>

            </div>
            <span className="text-[#ffffff] text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.days === 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col relative">
            <div className="h-10 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-24 flex justify-center items-center rounded-lg">
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#ffffff]">
                {countDownTime?.hours}
              </span>

            </div>
            <span className="text-[#ffffff] text-xs sm:text-2xl text-center font-medium">
              {countDownTime?.hours === 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col relative">
            <div className="h-10 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-24 flex justify-center items-center rounded-lg">
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#ffffff]">
                {countDownTime?.minutes}
              </span>

            </div>
            <span className="text-[#ffffff] text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.minutes === 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col relative">
            <div className="h-10 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-24 flex justify-center items-center rounded-lg">
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#ffffff]">
                {countDownTime?.seconds}
              </span>

            </div>
            <span className="text-[#ffffff] text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.seconds === 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Timer3;
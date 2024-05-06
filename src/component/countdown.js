import React, {useState, useEffect} from "react";
import image1 from './images/background.jpg'

const Countdown_TARGET = new Date("2024-06-06T23:59:59");
const getTimeLeft=() =>{
    const totalTimeLeft =Countdown_TARGET- new Date();
    const days= Math.floor(totalTimeLeft/(1000*60*60*24));
    const hours= Math.floor((totalTimeLeft/(1000*60*60)) % 24);
    const minutes= Math.floor((totalTimeLeft/(1000*60))% 24);
    const seconds= Math.floor((totalTimeLeft/1000) % 60);
    return{ days, hours, minutes, seconds

    }
};


const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState (() => getTimeLeft());

    useEffect(() => {
        const timer =setInterval(() =>{
            setTimeLeft(getTimeLeft())
        },1000)   

        return() =>{
            clearInterval(timer)
        };
    }, []);

    return (
      <div
        style={{ backgroundImage: `url(${image1})`, opacity: 0.8 }}
        className="relative bg-cover bg-center h-screen flex justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center relative z-10">
          <h2 className="text-3xl md:text-5xl mb-6 md:mb-10 text-white">
            Birthday Countdown
          </h2>
          <div className="flex flex-row justify-center gap-4 md:gap-2 max-w-20 text-white">
            <div className="box w-24 h-24 md:w-auto md:h-auto">
              <div className="value flex flex-row justify-center items-center gap-2">
                <span className="text-2xl md:text-3xl font-semibold  bg-teal-900 w-full h-full flex justify-center items-center">
                  {timeLeft.days}
                </span>
              </div>
              <div>
                <span className="label">Days</span>
              </div>
            </div>
            <div className="box w-24 h-24 md:w-auto md:h-auto">
              <div className="value flex flex-row justify-center items-center gap-2">
                <span className="text-2xl md:text-3xl font-semibold  bg-teal-900 w-full h-full flex justify-center items-center">
                  {timeLeft.hours}
                </span>
              </div>
              <div>
                <span className="label">Hours</span>
              </div>
            </div>
            <div className="box w-24 h-24 md:w-auto md:h-auto">
              <div className="value flex flex-row justify-center items-center gap-2">
                <span className="text-2xl md:text-3xl font-semibold  bg-teal-900 w-full h-full flex justify-center items-center">
                  {timeLeft.minutes}
                </span>
              </div>
              <div>
                <span className="label">Minutes</span>
              </div>
            </div>
            <div className="box w-24 h-24 md:w-auto md:h-auto">
              <div className="value flex flex-row justify-center items-center gap-2">
                <span className="text-2xl md:text-3xl font-semibold bg-teal-900 w-full h-full flex justify-center items-center">
                  {timeLeft.seconds}
                </span>
              </div>
              <div>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );       
}
export default Countdown;
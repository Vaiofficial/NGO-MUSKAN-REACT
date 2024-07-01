import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Work = () => {
  const [counterOn, setcounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setcounterOn(true)}
      onExit={() => setcounterOn(false)}
    >
      <div className="mt-20 sm:mt-20 bg-fixed text-slate-900 text-center">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          {/* 01 */}
          <div className="bg-containerPink rounded-xl p-8">
            <h1 className="text-6xl font-bold py-2 font-roboto">
              {counterOn && (
                <CountUp start={0} end={999} duration={2} delay={0} />
              )}
              +
            </h1>
            <h3 className="text-2xl font-semibold py-2 font-roboto">
              Meals Provided
            </h3>
          </div>
          {/* 02 */}
          <div className="rounded-xl p-8 bg-containerPink">
            <h1 className="text-6xl font-bold py-2 font-roboto">
              {counterOn && (
                <CountUp start={0} end={500} duration={2} delay={0} />
              )}
              +
            </h1>
            <h3 className="text-2xl font-semibold py-2 font-roboto">
              Plants Grown
            </h3>
          </div>
          {/* 03 */}
          <div className="rounded-xl p-8 bg-containerPink">
            <h1 className="text-6xl font-bold py-2 font-roboto">
              {counterOn && (
                <CountUp start={0} end={897} duration={2} delay={0} />
              )}
              +
            </h1>
            <h3 className="text-2xl font-semibold py-2  font-roboto">
              People Treated
            </h3>
          </div>
          {/* 04 */}
          <div className="rounded-xl p-8 bg-containerPink">
            <h1 className="text-6xl font-bold py-2 font-roboto">
              {counterOn && (
                <CountUp start={0} end={200} duration={2} delay={0} />
              )}
              +
            </h1>
            <h3 className="text-2xl py-2 font-semibold font-roboto">
              Workshops Conducted
            </h3>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Work;

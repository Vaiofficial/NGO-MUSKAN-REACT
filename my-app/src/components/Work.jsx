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
      <div className="mt-10 sm:mt-20 bg-fixed text-black text-center py-16">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          {/* 01 */}
          <div className="bg-red-300 rounded-xl p-8">
            <h1 className="text-6xl font-bold py-2">
              {counterOn && (
                <CountUp start={0} end={999} duration={2} delay={0} />
              )}
              +
            </h1>
            <h3 className="text-3xl font-semibold py-2">Meals Provided</h3>
          </div>
          {/* 02 */}
          <div className="rounded-xl p-8 bg-red-300">
            <h1 className="text-6xl font-bold py-2">
              {counterOn && (
                <CountUp start={0} end={500} duration={2} delay={0} />
              )}
              +
            </h1>
            <h3 className="text-3xl font-semibold py-2">Plants Grown</h3>
          </div>
          {/* 03 */}
          <div className="rounded-xl p-8 bg-red-300">
            <h1 className="text-6xl font-bold py-2">
              {counterOn && (
                <CountUp start={0} end={897} duration={2} delay={0} />
              )}
              +
            </h1>
            <h3 className="text-3xl font-semibold py-2">People Treated</h3>
          </div>
          {/* 04 */}
          <div className="rounded-xl p-8 bg-red-300">
            <h1 className="text-6xl font-bold py-2">
              {counterOn && (
                <CountUp start={0} end={200} duration={2} delay={0} />
              )}
              +
            </h1>
            <h3 className="text-3xl font-semibold py-2">Workshops Conducted</h3>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Work;

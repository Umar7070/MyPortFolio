"use client";
import { Item } from "@radix-ui/react-select";
import CountUp from "react-countup";
const stateCountup = [
  {
    num: "0.6",
    Text: "Years of Experience",
  },
  {
    num: "6",
    Text: "project Complete",
  },
  {
    num: "10",
    Text: "Technologies Master",
  },
  {
    num: "100",
    Text: "Code commites",
  },
];
const State = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2  xl:grid-cols-4 gap-6 max-w-[80vw] mx-auto xl:max-w-none my-3">
          {stateCountup.map((ele, index) => {
            return (
              <div className="flex-1 flex gap-3 justify-center items-center xl:justify-start my-10">
                <CountUp
                  end={ele.num}
                  duration={5}
                  delay={2}
                  className=" xl:text-5xl text-2xl font-semibold"
                />
                <p className={`${ele.Text.length<15? 'max-w-[108px]': 'max-w-[150px]'} leading-snug text-white/80`}>{ele.Text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};   

export default State;

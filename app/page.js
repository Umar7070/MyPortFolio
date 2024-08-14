import Photo from "@/components/Photo";
import Social from "@/components/Social";
import State from "@/components/State";
import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Front-end Developer</span>
            <h1 className="h1 mb-3">
              Hello I'm <br />
              <span className="text-accent"> Umar Mohammad </span>
            </h1>
            <p className="max-w-[500px]  text-sm text-white/80">
              i excel at crafting elegent digital experiences and i am
              profesient in various programing languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                className="text-accent hover:text-primary my-5 uppercase flex item-center gap-3"
              >
                <span className="">DownLoad CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <State />
    </section>
  );
};

export default page;

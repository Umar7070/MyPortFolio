"use client";
import { easeIn, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsGithub } from "react-icons/bs";
// import { MdArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SliderBtn from "@/components/SliderBtn";

const projects = [
  {
    num: "01",
    category: "Front-end",
    title: "project 1",
    description:
      "Reprehenderit tempora, quo nobis  consequatur voluptatum odit repudiandae doloribus.",
    stack: [
      {
        name: "Html5 ",
      },
      {
        name: "Css 3 ",
      },
      {
        name: "javascript ",
      },
    ],
    image: "/assets/thumb3.png",
    live: "",
    github: "https://github.com/Umar7070/myportfolio",
  },

  {
    num: "02",
    category: "Fullstack Developer",
    title: "project 02",
    description:
      "Reprehenderit tempora, quo nobis distinctio consequatur voluptatum odit repudiandae doloribus quas tempore dolorem sed maxime rem?",
    stack: [
      {
        name: "Nextjs ",
      },
      {
        name: "Tailwind ",
      },
      {
        name: "Node js ",
      },
    ],
    image: "/assets/thumb1.png",
    live: "",
    github: "https://github.com/Umar7070/myportfolio",
  },

  {
    num: "03",
    category: "Front-end",
    title: "project 03",
    description:
      "Reprehenderit tempora, quo nobis distinctio consequatur voluptatum odit repudiandae doloribus quas tempore dolorem sed maxime rem?",
    stack: [
      {
        name: "Next.js ",
      },
      {
        name: "BootStrap ",
      },

      {
        name: "React.js ",
      },
    ],
    image: "/assets/thumb2.png",
    live: "",
    github: "https://github.com/Umar7070/myportfolio",
  },
];

const Work = () => {
  const [data, setData] = useState(projects[0]);

  const handleChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setData(projects[currentIndex]);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center "
      >
        <div className="container mx-auto w-full flex-col xl:flex-row flex justify-between gap-[30px]">
          <div className="flex flex-col order-2 xl:order-none xl:w-1/2 w-full md:flex-row xl:gap-[30px]">
            <div className="w-full   ">
              <div>
                <div className="text-5xl font-semibold text-outline text-transparent hover:text-outline-hover transition-all duration-500">
                  {data.num}
                </div>
                <h2 className="text-3xl my-1">{data.category}project</h2>
                <p className="text-white/60 text-sm my-3">{data.description}</p>
              </div>
              <ul className="flex gap-4 text-accent">
                {data.stack.map((curEle, index) => {
                  return (
                    <li>
                      {curEle.name},
                      {/* {index!== data.projects.stack.length -1 && ','} */}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-[30px] my-5">
                <div>
                  <Link href={data.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[30px] h-[30px] rounded-full bg-white/5 flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-2xl hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
                <div>
                  <Link href={data.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[30px] h-[30px] rounded-full bg-white/5 flex justify-center items-center">
                          <BsGithub className="text-white text-2xl hover:text-accent capitalize" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none xl:w-1/2 w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleChange}
              className="mb-12 onSlideChange={handleChange}"
            >
              {projects.map((curEle, index) => {
                return (
                  <SwiperSlide>
                    <div className="h-[250px] w-[350px] relative group flex justify-center items-center ">
                      <div className="relative" ></div>
                      <div className="h-full w-full relative">
                        <Image
                          src={curEle.image}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderBtn  />
            </Swiper>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;

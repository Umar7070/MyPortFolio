"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BaArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const project = [
  {
    num: "01",
    category: "front-end",
    title: "project 1",
    description:"Reprehenderit tempora, quo nobis distinctio consequatur voluptatum odit repudiandae doloribus quas tempore dolorem sed maxime rem?",
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
    github: "",
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
    github: "",
  },

  {
    num: "03",
    category: "front-end",
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
    ],
    image: "/assets/thumb1.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [data, setData] = useState();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh] flex flex-col justify-center "
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-[30px]">
            <div className="w-full ">
              <div>
                {project.map((curEle, index) => {
                  return (
                    <>
                      <div>
                        <div className="text-3xl leading-none ">{curEle.num}</div>
                        <h3 className="text-accent text-3xl">{curEle.category}</h3>
                        <p className="text-white/60">{curEle.description}</p>
                        <ul className="flex gap-4">
                          {curEle.stack.map((curEle, index) => {
                            return (
                              <>
                                <li className="text-accent">{curEle.name}</li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="w-full">slider</div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;

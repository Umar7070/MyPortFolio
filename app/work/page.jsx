// import React from 'react'
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

const project = [
  {
    num: "01",
    category: "front-end",
    title: "project 1",
    description:
      "Reprehenderit tempora, quo nobis distinctio consequatur voluptatum odit repudiandae doloribus quas tempore dolorem sed maxime rem?",
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
    image: "/",
    live: "",
    github: "",
  },

  {
    num: "02",
    category: "Fullstack Developer",
    title: "project 1",
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
    image: "/",
    live: "",
    github: "",
  },

  {
    num: "03",
    category: "front-end",
    title: "project 1",
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
    image: "/",
    live: "",
    github: "",
  },
];

const Work = () => {
  return (
    <>
      <div className="container mx-auto">work</div>
    </>
  );
};

export default Work;

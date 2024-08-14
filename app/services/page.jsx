"use client";

// import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowDownRight } from "react-icons/go";
import Link from "next/link";

const servicList = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur tempore obcaecati totam voluptatibus placeat aliquam! Excepturi nihil qui eius perspiciatis",
    href: "",
  },
  {
    num: "02",
    title: "Full Stack Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur tempore obcaecati totam voluptatibus placeat aliquam! Excepturi nihil qui eius perspiciatis",
    href: "",
  },
  {
    title: "UI/UX Design",
    num: "03",
    description:
      "Lorem ipsum dolor sit amet consectetur tempore obcaecati totam voluptatibus placeat aliquam! Excepturi nihil qui eius perspiciatis",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur tempore obcaecati totam voluptatibus placeat aliquam! Excepturi nihil qui eius perspiciatis",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-[3.1rem]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {servicList.map((ele, index) => {
            return (
              <div>
                <div className="flex justify-between w-full items-center  ">
                  <div className="group">
                    <div className="text-3xl font-semibold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                      {ele.num}
                    </div>
                  </div>
                  <div className="group">
                    <Link
                      href={ele.href}
                      className="flex justify-center items-center h-[30px] w-[30px] bg-white group-hover:bg-accent   rounded-full hover:-rotate-45 transition-all duration-500"
                    >
                      <GoArrowDownRight className="text-primary text-2xl" />
                    </Link>
                  </div>
                </div>

                <div className="group p-1">
                  <h2 className="text-[20px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    <p>

                    {ele.title}
                    </p>
                  </h2>
                </div>
                <p className="text-white/60 text-sm">{ele.description}</p>
                <div className="border-b border-white/20 w-full mt-3"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

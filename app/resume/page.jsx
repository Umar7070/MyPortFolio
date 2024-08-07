"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
// about data

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero veniam magni magnam tempora, sunt at?",

  info: [
    {
      fieldname: "Name",
      fielvalue: "Mohammad Umar",
    },
    {
      fieldname: "Phone",
      fielvalue: "(+91) 8176 83 7301",
    },
    {
      fieldname: "Experience",
      fielvalue: "0.6 month",
    },
    {
      fieldname: "Skype",
      fielvalue: "Mohammad Umar",
    },
    {
      fieldname: "Nationality",
      fielvalue: "Hindustan",
    },
    {
      fieldname: "Email",
      fielvalue: "mohdumar707080@gmail.com",
    },
    {
      fieldname: "Freelancer",
      fielvalue: "Not Available",
    },
    {
      fieldname: "Language",
      fielvalue: "English ,Arabic , Urdu ,Punjabi ",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero veniam magni magnam tempora, sunt at?",
  items: [
    {
      company: "Digital Agency  ",
      position: " Operator Developer ",
      duration: " 2018 ",
    },
    {
      company: "Tech Soluation In.",
      position: " Front-end Developer",
      duration: "2024 - Present",
    },
    {
      company: "Web Design Soluation ",
      position: " Web  Designer",
      duration: " Summer 2023 ",
    },

    {
      company: "E-commerce Startup ",
      position: " Freelancer Web Developer",
      duration: " 2022-2023 ",
    },
    {
      company: "Front-end Developer  ",
      position: " Junior Developer ",
      duration: " 2024 ",
    },
    {
      company: "Net Web Soluation ",
      position: " Web  Designer",
      duration: " Summer 2023 ",
    },
  ],
};

// education data

const education = {
  icon: "/assets/badge.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero veniam magni magnam tempora, sunt at?",
  items: [
    {
      institutaion: "Online course Plateform",
      degree: "Front-end Developer Bootcamp",
      duration: "2023",
    },
    {
      institutaion: "Codeademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institutaion: "Online course",
      degree: "Programing Course",
      duration: "2021",
    },
    {
      institutaion: "Design School",
      degree: "BCA",
      duration: "2017-2020",
    },
    {
      institutaion: "Design College",
      degree: "MCA",
      duration: "2020-2022",
    },
  ],
};

// skill data
const skill = {
  title: "My Skill",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero veniam magni magnam tempora, sunt at?",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },

    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <SiNextdotjs />,
      name: "nextjs",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col"
    >
      <div className="container mx-auto">
        <Tabs className="flex flex-col lg:flex-row gap-[60px]">
          <TabsList className="flex flex-col max-w-[400px] w-full  mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skill</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content  */}
          <div className="min-h-[80vh] w-full">
            {/* experience  */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col lg:grid-cols-2 gap-[30px] text-center lg:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px]">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  {/* <ul className="gird grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      experience.items.map((ele,index)=>{
                        return (
                          <li key={index} className="bg-[#232329] py-6 px-10 flex flex-col gap-1 items-center justify-center lg:items-start">
                            <span className="text-accent">{ele.duration}</span>
                            <h3 className="text-xl">{ele.position}</h3>
                            <div>
                              <span></span>
                              <p>{ele.company}</p>
                            </div>
                          </li>
                          
                        )
                      })
                    }
                  </ul> */}
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((ele, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 flex flex-col gap-1 items-center justify-center lg:items-start rounded-md"
                        >
                          <span className="text-accent">{ele.duration}</span>
                          <h3 className="text-xl">{ele.position}</h3>
                          <div >
                            <p>{ele.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education  */}
            <TabsContent value="education">Education</TabsContent>
            {/* skill  */}

            <TabsContent value="skill">skill</TabsContent>
            <TabsContent value="about">about</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

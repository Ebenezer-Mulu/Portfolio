"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Admin Dashboard",
    description:
      "This is an Admin Dashboard project built with Next.js and styled using Tailwind CSS. It features a user-friendly interface for managing and analyzing data effectively.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/dashboard.png",
    live: "", // Add live URL if available
    github: "https://github.com/Ebenezer-Mulu/Next.js-Admin-Dashboard",
  },
  {
    num: "02",
    category: "Full stack ",
    title: "OmniStock Project",
    description:
      "This project is a stock management mobile application built with React and Material-UI. It provides a seamless experience for managing stock inventory and tracking sales.",
    stack: [
      { name: "React" },
      { name: "Material-UI" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/omni.png",
    live: "", 
    github: "https://github.com/Ebenezer-Mulu/OmniStock.git",
  },
  {
    num: "03",
    category: "mobile app",
    title: "Lost and Found App",
    description:
      "This is a mobile application developed using Flutter and Firebase. It helps users report lost items and search for found items within their community.",
    stack: [
      { name: "Flutter" },
      { name: "Firebase" },
      { name: "Dart" },
    ],
    image: "/assets/work/lost_form.png",
    live: "",
    github: "https://github.com/Ebenezer-Mulu/Lost-and-Found",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} Project
                </h2>

                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-xl text-accent"
                      >
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20 mb-3"></div>
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[30px] h-[30px] rounded-full bg-white/5 flex justify-center items-center group"
                        >
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[30px] h-[30px] rounded-full bg-white/5 flex justify-center items-center group"
                        >
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[340px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div>
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

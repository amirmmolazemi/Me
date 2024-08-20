"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import projects from "@/constant/projects";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const Work = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setCurrentProject(projects[swiper.activeIndex]);
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
            <div className="flex flex-col gap-8 h-[50%]">
              <div className="text-8xl font-extrabold text-outline">
                {currentProject.num}
              </div>
              <h2 className="text-[42px] font-bold text-white capitalize transition-all duration-500 group-hover:text-accent">
                {currentProject.category} project
              </h2>
              <p className="text-white/60">{currentProject.description}</p>
              <ul className="flex gap-4">
                {currentProject.stack.map((tech, index) => (
                  <li key={index} className="text-xl text-accent">
                    {tech.name}
                    {index !== currentProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={currentProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github repo</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
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
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="md:h-[460px] h-[260px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                    <Image
                      src={project.image}
                      fill
                      className="object-contain"
                      alt={project.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 xl:bottom-0 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

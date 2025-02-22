"use client"

import React, {useState} from "react"
import { motion } from "framer-motion"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../../components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkLSliderBtns from "../../components/WorkSliderBtns"

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Supply Stream",
    description: "A platform for supply chain management using React, Node, Express, and MongoDB.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" }
    ],
    image: "/assets/work/thumb1.png",  // You can replace this with the actual image URL
    live: "",
    github: "https://github.com/iamasadabbas/SupplyStream-Frontend"
  },
  {
    num: "02",
    category: "full stack",
    title: "E commerce WebApp",
    description: "A full-fledged eCommerce platform using React, Node, Express, and MongoDB.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" }
    ],
    image: "/assets/work/thumb2.png",  // You can replace this with the actual image URL
    live: "",
    github: "https://github.com/iamasadabbas/Ecommerce"
  },
  {
    num: "03",
    category: "frontend",
    title: "Coach Finder",
    description: "A platform to find coaches using Vue.js and Firebase.",
    stack: [
      { name: "Vue.js" },
      { name: "Firebase" }
    ],
    image: "/assets/work/thumb3.png",  // You can replace this with the actual image URL
    live: "",
    github: "https://github.com/iamasadabbas/coachFinder"
  },
  {
    num: "04",
    category: "full stack",
    title: "Book Reading App",
    description: "A backend API for book reading app using React, Node, Express, and MongoDB.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" }
    ],
    image: "/assets/work/thumb4.png",  // You can replace this with the actual image URL
    live: "",
    github: "https://github.com/iamasadabbas/BookReadingApp-Backend"
  },
  // {
  //   num: "05",
  //   category: "full stack",
  //   title: "CMS(Content Management System)",
  //   description: "Content Management System using React, Node, Express, MongoDB, and Material-UI.",
  //   stack: [
  //     { name: "React" },
  //     { name: "Node.js" },
  //     { name: "Express" },
  //     { name: "MongoDB" },
  //     { name: "MUI" }
  //   ],
  //   image: "/assets/work/thumb5.png",  // You can replace this with the actual image URL
  //   live: "",
  //   github: ""  // Add the GitHub link if available
  // }
];


const Work = () => {

  const [project, setProject]=useState(projects[0])

  const handleSlideChange=(swiper)=>{
    const currentIndex=swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index)=>{
                return (
                  <li key={index} className="text-xl text-accent">{item.name}{index !== project.stack.length -1 && ","}</li>
                )
              })}
            </ul>
            <div className="border border-white/20"> </div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    {/* <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-wite text-3xl group-hover:text-accent"/> 
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip> */}
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-wite text-3xl group-hover:text-accent"/> 
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
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
            {
              projects.map((project,index)=>{
                return(
                  <SwiperSlide key={index} className="w-full"
                  >
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"> 
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                    </div>
                      <div className="relative w-full h-full">
                        <Image
                        src={project.image}
                        className="object-cover"
                        fill
                        alt={project.image}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
            <WorkLSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
          </Swiper>
        </div>
      </div>
    </div>
    </motion.section>
  )
}

export default Work

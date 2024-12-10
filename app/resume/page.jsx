"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from "react-icons/fa"

import {SiTailwindcss, SiNextdotjs} from "react-icons/si"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../components/ui/tabs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../../components/ui/tooltip"
import {ScrollArea} from "../../components/ui/scroll-area"
import { motion } from "framer-motion"
const about={
  title: "About Me",
  description: "I'm a software engineer with a passion for creating user-friendly and accessible web applications.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Asad Abbas"
    },
    
    {
      fieldName:"Phone",
      fieldValue:"+923258514512"
    }, 
    {
      fieldName:"Experience",
      fieldValue:"12+ Years"
    }, 
    {
      fieldName:"skype",
      fieldValue:"iamasadabbas"
    }, 
    {
      fieldName:"Nationality",
      fieldValue:"Pakistan"
    }, 
    {
      fieldName:"Email",
      fieldValue:"asadabbasoffical05@gmail.com"
    }, 
    {
      fieldName:"Freelance",
      fieldValue:"Available"
    }, 
    {
      fieldName:"Languages",
      fieldValue:"English, Urdu"
    }, 
  ]
}

const experience ={
    icon:"/assets/resume/badge.svg",
    title:"My experience",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vel ipsum et dui consectetur auctor. Sed consectetur libero",
    items:[
      {
        company: "Tech Solutions Inc.",
        position: "Full Stack Developer",
        duration: "2022 - Present"
      },
      {
        company: "Web Design studio",
        position: "Frontend Developer Intern",
        duration: "summer - 2021"
      },
      {
        company: "E-commerce startup",
        position: "Freelance Web Developer",
        duration: "2021 - 2022"
      },
      {
        company: "Software development firm",
        position: "Junior developer",
        duration: "2018 - 2019"
      },
      {
        company: "E-commerce startup",
        position: "Freelance Web Developer",
        duration: "2021 - 2022"
      },
      {
        company: "Software development firm",
        position: "Junior developer",
        duration: "2018 - 2019"
      }
    ]

}

const education ={
  icon:"/assets/resume/cap.svg",
  title:"My education",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vel ipsum et dui consectetur auctor. Sed consectetur libero",
  items:[
    {
      institution: "Online Course Platform",
      degree: "Full Stack web Development bootcamp",
      duration: "2023"
    },
    {
      institution: "Codecademy",
      degree: "Front-end track",
      duration: "2022"
    },
    {
      institution: "Online Course",
      degree: "Programming course",
      duration: "2022"
    },
    {
      institution: "Online Course",
      degree: "Programming course",
      duration: "2022"
    },
    {
      institution: "Online Course",
      degree: "Programming course",
      duration: "2022"
    },
    {
      institution: "Online Course",
      degree: "Programming course",
      duration: "2022"
    },
    {
      institution: "Online Course",
      degree: "Programming course",
      duration: "2022"
    },
  ]

}

const skills = {
  title:"My skills",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum et dui consectetur auctor. Sed consectetur libero",
  skillList:[

    {
      icon:<FaHtml5/>,
      name:"HTML5"
    },
    {
      icon:<FaCss3/>,
      name:"CSS 3"
    },
    {
      icon:<FaJs/>,
      name:"JavaScript"
    },
    {
      icon:<FaReact/>,
      name:"React.js"
    },
    {
      icon:<SiNextdotjs/>,
      name:"Next.js"
    },
    {
      icon:<SiTailwindcss/>,
      name:"Tailwind.css"
    },
    {
      icon:<FaNodeJs/>,
      name:"Node.js"
    },
    {
      icon:<FaFigma/>,
      name:"Figma"
    },
  ]
}


const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}} 
        animate={{
             opacity:1,
             transition:{ duration:0.4, delay:2.4, ease:"easeIn"}
         }}
         className="min-h-[80vh] flex items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
         className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex item-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent">

                            </span>
                            <p className="text-white/60">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex item-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent">

                            </span>
                            <p className="text-white/60">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return(
                      <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>

                      </li>
                    )
                  })}
                </ul>
              </div>
                
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
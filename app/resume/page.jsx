"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap
} from "react-icons/fa"

import {SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiRedux, SiVuedotjs, SiMui, SiVuetify} from "react-icons/si"
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
      fieldValue:"6 Months",
    }, 
    {
      fieldName:"linkedIn",
      fieldValue:"iamasadabbas"
    }, 
    {
      fieldName:"Nationality",
      fieldValue:"Pakistan"
    }, 
    {
      fieldName:"Email",
      fieldValue:"asadabbasofficial5@gmail.com"
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

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Over a year of experience in web development, ranging from freelance projects to professional roles in software companies.",
  items: [
    {
      company: "Code Frenetics",
      position: "Junior Full Stack Developer",
      duration: "Aug 2024 - Present"
    },
    {
      company: "Freelance Projects",
      position: "Full Stack Developer",
      duration: "Sep 2023 - Aug 2024"
    }
  ]
}


const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "A blend of academic achievements and self-paced learning through online courses and workshops.",
  items: [
    {
      institution: "Arid Agriculture University Rawalpindi",
      degree: "BS in Computer Science (BSCS)",
      duration: "2020 - 2024"
    },
    {
      institution: "College",
      degree: "Intermediate in Pre-Engineering",
      duration: "2018 - 2020"
    },
    {
      institution: "Udemy",
      degree: "Vue.js Course",
      duration: "2024"
    },
    {
      institution: "Coursera",
      degree: "React Development Courses",
      duration: "2023"
    },
    {
      institution: "Workshops",
      degree: "Various Tech and Web Development Workshops",
      duration: "2022 - Present"
    }
  ]
}


const skills = {
  title: "My Skills",
  description: "A versatile skill set with a strong focus on modern web development frameworks, libraries, and tools.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <SiExpress />,
      name: "Express.js"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },
    {
      icon: <SiVuedotjs />,
      name: "Vue.js"
    },
    {
      icon: <SiRedux />,
      name: "Redux"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <SiMui />,
      name: "Material-UI (MUI)"
    },
    {
      icon: <SiVuetify />,
      name: "Vuetify"
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap"
    }
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
          <div className="min-h-[70px] w-full">
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
                          <div className="flex items-center  gap-3">
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
                          <div className="flex items-center gap-3">
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
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[185px] bg-[#232329] rounded-xl flex justify-center items-center group">
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
            <TabsContent value="about" className="w-full text-center xl:text-left" >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 h-[400px]">
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
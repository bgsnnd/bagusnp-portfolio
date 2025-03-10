"use client"

import { FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs } from "react-icons/fa"
import{SiTailwindcss, SiNextdotjs, SiMysql} from "react-icons/si"

// about data
const about = {
  title : "About me",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores repellat iste. Non fugiat deleniti aperiam nesciunt obcaecati consequatur expedita praesentium, quidem sit recusandae vel dolore eum quisquam illum aspernatur?",
  info : [
    {
      fieldName : "Name",
      fieldValue : "Bagus Nanda Pratama",
    },
    {
      fieldName : "Phone",
      fieldValue : "(+62) 857 46418 754",
    },
    {
      fieldName : "Experience",
      fieldValue : "7+ Years",
    },
    {
      fieldName : "Nationality",
      fieldValue : "Indonesia",
    },
    {
      fieldName : "Email",
      fieldValue : "bgsnnd8@gmail.com",
    },
    
  ]
}
// experince
const experience = {
  icon:"/assets/resume/badge.svg",
  title: "My experience",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores repellat iste. Non fugiat deleniti aperiam nesciunt obcaecati consequatur expedita praesentium, quidem sit recusandae vel dolore eum quisquam illum aspernatur?",
  items: [
    {
      company :"PT. Fuboru Indonesia",
      position:"Staff IT Infrastructure",
      duration:"2024-Present"
    },
    {
      company :"PT. Reja Aton Energi",
      position:"Freelance Wordpress & IT Infrastructure ",
      duration:"2024-2024"
    },
    {
      company :"PT. Canggu International",
      position:"ERP & IT Programmer",
      duration:"2023-2024"
    },
    {
      company :"Karirpad.com",
      position:"Freelance Front-End Web Developer",
      duration:"2020-2020"
    },
    {
      company :"PT. Ratu Idaman Pratama",
      position:"Staff IT",
      duration:"2018-2022"
    },
    
  ]

}
// education
const education = {
  icon:"/assets/resume/cap.svg",
  title: "My education",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores repellat iste. Non fugiat deleniti aperiam nesciunt obcaecati consequatur expedita praesentium, quidem sit recusandae vel dolore eum quisquam illum aspernatur?",
  items: [
    {
      institution :"Dicoding",
      degree :"Belajar Dasar Pemrogramman Web",
      duration:"2025"
    },
    {
      institution :"Dicoding",
      degree :"Belajar Membuat Front-End Web",
      duration:"2025"
    },
    {
      institution :"Dicoding",
      degree :"Belajar Pemrogramman SOLID",
      duration:"2025"
    },
    {
      institution :"Dicoding",
      degree :"Memulai Pemrogramman C",
      duration:"2025"
    },
    {
      institution :"Dicoding",
      degree :"Memulai Dasar Pemrogramman Java",
      duration:"2025"
    },
    {
      institution :"Purwadhika Digital Technology School",
      degree :"UI/UX Design",
      duration:"2025"
    },
    {
      institution :"Aguna Course",
      degree :"Virtual Machine Fundamental",
      duration:"2025"
    },
    {
      institution :"Aguna Course",
      degree :"Network Fundamental",
      duration:"2025"
    },
    {
      institution :"Aguna Course",
      degree :"Linux Fundamental",
      duration:"2025"
    },
    {
      institution :"Institut Teknologi & Bisnis Asia",
      degree :"Informatics Engineering",
      duration:"2019-2023"
    },
    {
      institution :"Wearnes Education Center",
      degree :"Informatics Engineering",
      duration:"2017-2018"
    },
    

  ]
}
// events
const event = {
  icon:"/assets/resume/cap.svg",
  title: "My event",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores repellat iste. Non fugiat deleniti aperiam nesciunt obcaecati consequatur expedita praesentium, quidem sit recusandae vel dolore eum quisquam illum aspernatur?",
  items: [
    {
      institution :"Dicoding",
      degree :"elevAIte x Dicoding Live #1 - Unlocking AI: Kunci Teknologi & Talenta Masa Depan",
      duration:"2025"
    },
    {
      institution :"Dicoding",
      degree :"IDCamp x Dicoding Live #6 - Frontend vs Backend: A Never-Ending Love-Hate Relationship",
      duration:"2025"
    },
    {
      institution :"Dicoding",
      degree :"IDCamp Alumni Dialogue #3 - Unlock Your Potential: Menjadi Instruktur, Fasilitator, dan Speaker Handal Sambil Bekerja",
      duration:"2025"
    },
    {
      institution :"Dicoding",
      degree :"DevCoach 186: Machine Learning | Unsupervised Learning: Hidden Clustering & Pattern Discovery",
      duration:"2025"
    },
  ]
}
// skills
const skills = {
  title: "My skills",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores repellat iste. Non fugiat deleniti aperiam nesciunt obcaecati consequatur expedita praesentium, quidem sit recusandae vel dolore eum quisquam illum aspernatur?",
  skillList: [
    {
      icon :<FaHtml5/>,
      name :"html",
    },
    {
      icon :<FaCss3/>,
      name :"css3",
    },
    {
      icon :<FaJs/>,
      name :"javascript",
    },
    {
      icon :<FaReact/>,
      name :"react.js",
    },
    {
      icon :<SiNextdotjs/>,
      name :"next.js",
    },
    {
      icon :<SiTailwindcss/>,
      name :"tailwind.css",
    },
    {
      icon :<FaNodeJs/>,
      name :"node.js",
    },
    {
      icon :<SiMysql/>,
      name :"MySQL",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity:0 }} 
      animate={{ 
        opacity:1,
        transition: {delay:2.4, duration:0.4, ease:"easeIn"},
       }}
       className="min-h-[88vh] flex items-center justify-center py-12 xl:py-0 "
      >
        <div className=" container mx-auto">
          <Tabs 
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
            >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
              <TabsTrigger value="experience" >Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="event">Event</TabsTrigger>
              <TabsTrigger value="skills">Skill</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>
            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                      {experience.items.map((item,index)=>{
                        return (
                          <li key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              {/* data */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* edu */}
              <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                      {education.items.map((item,index)=>{
                        return (
                          <li key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              {/* data */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* event */}
              <TabsContent value="event" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{event.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {event.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                      {event.items.map((item,index)=>{
                        return (
                          <li key={index}
                            className="bg-[#232329] h-[320px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              {/* data */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skill */}
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                    {skills.skillList.map((skill, index) => {
                      return(
                        <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group " >
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize ">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
              {/* aboutme */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                    {about.info.map((item,index) => {
                      return(
                        <li key={index} className="flex items-center justify center xl:justify-start gap-4" >
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

export default Resume
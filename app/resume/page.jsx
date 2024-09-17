"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaPhp, FaLaravel, FaSass, FaPython} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs, SiMysql, SiDjango} from 'react-icons/si'

//about data
const about = {
  title: "A propos de moi",
  description: "Je suis un développeur web et mobile passionné, toujours à la recherche de nouveaux défis pour repousser mes limites techniques. Curieux et autodidacte, j'aime apprendre et me tenir à jour sur les dernières tendances du développement. Mon objectif est de créer des solutions numériques innovantes, alliant performance et facilité d'utilisation, tout en travaillant en équipe ou de manière autonome avec rigueur et professionnalisme.",
  info:[
    {
      fieldName:"Nom",
      fieldValue:"Jean-Caleb LUVUVAMU",
    },
    {
      fieldName:"Téléphone",
      fieldValue:"+229 94453791",
    },
    {
      fieldName:"Nationalité",
      fieldValue:"Béninoise",
    },
    {
      fieldName:"Situation matrimoniale",
      fieldValue:"Célibataire",
    },
    {
      fieldName:"Email",
      fieldValue:"calebluvuvamu@gmail.com",
    },
    {
      fieldName:"Langues",
      fieldValue:"Français, Anglais",
    },
    {
      fieldName:"Hobbies",
      fieldValue:"Jeux vidéos, Musique, Randonnée",
    },
  ]
}

//Experience data
const experience = {
  title: "Expériences professionnelles",
  description: "Mes expériences professionnelles m'ont permis de travailler sur divers projets, surtout en freelance, allant de la conception d'interfaces utilisateur intuitives à la création d'applications robustes. J'ai eu l'occasion de collaborer avec des équipes pluridisciplinaires et de gérer des projets en autonomie, ce qui m'a permis d'affiner mes compétences techniques tout en développant une grande capacité d'adaptation.",
  items:[
    {
      company: "ZK-Consulting",
      position: "Développeur Full Stack",
      duration: "2022",
    },
    {
      company: "ALL BEST SARL",
      position: "Développeur Full Stack",
      duration: "Novembre 2023 - Mai 2024",
    },
  
  ]
}


//Education data
const education = {
  title: "Formations effectuées",
  description: "Voici une liste de formations qui m'ont permis d'acquérir des compétences solides dans les technologies de développement modernes, alliant théorie et pratique pour maîtriser la création d'applications web et mobiles performantes.",
  items:[
    {
      institution: "Free Code Camp",
      degree: "Responsive web design",
      duration: "Octobre 2023 - Avril 2024",
    },
    {
      institution: "Huaweï",
      degree: "5G, AI, Cloud computing",
      duration: "Novembre 2022",
    },
    {
      institution: "UATM GASA",
      degree: "Licence en Système Informatique",
      duration: "Octobre 2019 - Août 2022",
    },
    {
      institution: "CCA",
      degree: "BACCALAUREAT",
      duration: "2017",
    },
    {
      institution: "CCA",
      degree: "BEPC",
      duration: "2014",
    },
    {
      institution: "CS La Soif",
      degree: "CEP",
      duration: "2010",
    },
  ]
}


//Skills Data
const skills = {
  title: "Langages et outils de codage",
  description: "Je maîtrise plusieurs langages de programmation, notamment JavaScript, Python, et leurs frameworks associés tels que React, React Native et Node.js. Cette polyvalence me permet de développer des applications web et mobiles performantes, en optimisant à la fois l'expérience utilisateur et la gestion des données",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaSass />,
      name: "sass",
    },  
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaLaravel />,
      name: "laravel",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion'; 

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate= {{opacity: 1, transition:{delay:0.4, duration:0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full maw-w-[380px] mw-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Expériences</TabsTrigger>
            <TabsTrigger value="education">Formations</TabsTrigger>
            <TabsTrigger value="talents">Langages</TabsTrigger>
            <TabsTrigger value="apropos">A propos de moi</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {experience.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {experience.description} </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 
                        rounded-xl flex flex-col justify-center, items-center lg:items-start gap-1">
                          <span className="text-accent"> {item.duration} </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"> {item.position} </h3>
                          <div className="flex items-center gap-3">
                             {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"> </span>
                            <p className="text-white/60"> {item.company} </p>
                          </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

             {/* education */}
             <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {education.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {education.description} </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 
                        rounded-xl flex flex-col justify-center, items-center lg:items-start gap-1">
                          <span className="text-accent"> {item.duration} </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"> {item.degree} </h3>
                          <div className="flex items-center gap-3">
                             {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"> </span>
                            <p className="text-white/60"> {item.institution} </p>
                          </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

             {/* talents */}
             <TabsContent value="talents" className="w-full mb-5">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {skills.title} </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl-mx-0"> {skills.description} </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gaps[30px]">
                    {skills.skillList.map((item, index)=>{
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300"> {item.icon} </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white rounded-xl">
                              <p className="capitalize text-primary font-bold text-md"> {item.name} </p>  
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

             {/* apropos */}
             <TabsContent value="apropos" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold"> {about.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {about.description} </p>
                <ul>
                  {about.info.map((item, index)=>{ 
                    return <li key={index} className="flex justify-center items-center gap-4 xl:justify-start">
                      <span className="text-white/60 text-lg font-bold"> {item.fieldName} :</span>
                      <span className="text-lg"> {item.fieldValue} </span>
                    </li>
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
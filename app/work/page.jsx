"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tolltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@radix-ui/react-tooltip";
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "E-tutor",
    description: "Un exemplaire de landing page.",
    stack:[
      {name: "ReactJs"}, {name: "Tailwind Css"}, {name: "Framer-motion"}
    ],
    image: "/assets/work/tutor.png",
    live: "https://e-tutor-three.vercel.app/",
    github: "https://github.com/ljcdev421/e-tutor",
  },
  {
    num: "02",
    category: "frontend",
    title: "Web Cat",
    description: "Une page web illustrant un chat, juste pour travailler le CSS.",
    stack:[
      {name: "html 5"}, {name: "css 3"}
    ],
    image: "/assets/work/cat.png",
    live: "https://web-cat-delta.vercel.app/",
    github: "https://github.com/ljcdev421/web-cat",
  },
  {
    num: "03",
    category: "frontend",
    title: "Web Penguin",
    description: "Une page web illustrant un pingouin qui fait un coucou.",
    stack:[
      {name: "html 5"}, {name: "css 3"}
    ],
    image: "/assets/work/penguin.png",
    live: "https://web-penguin.vercel.app/",
    github: "https://github.com/ljcdev421/web-penguin",
  },
  {
    num: "04",
    category: "frontend",
    title: "Web Piano",
    description: "Une page web illustrant un piano, pour travailler les notions de style.",
    stack:[
      {name: "html 5"}, {name: "css 3"}
    ],
    image: "/assets/work/piano.png",
    live: "https://web-piano-nu.vercel.app/",
    github: "https://github.com/ljcdev421/web-piano",
  },
  {
    num: "05",
    category: "frontend",
    title: "City Skyline",
    description: "Une ville en journée et en nuit, sous l'éclat du soleil et celui de la lune.",
    stack:[
      {name: "html 5"}, {name: "css 3"}
    ],
    image: "/assets/work/city.png",
    live: "https://city-skyline-ecru.vercel.app/",
    github: "https://github.com/ljcdev421/city-skyline",
  },
  {
    num: "06",
    category: "frontend",
    title: "Balance sheet",
    description: "Une page web présentant un bilan d'actifs et de responsabilités.",
    stack:[
      {name: "html 5"}, {name: "css 3"}
    ],
    image: "/assets/work/sheet.png",
    live: "https://balance-sheet-beige.vercel.app/",
    github: "https://github.com/ljcdev421/balance-sheet",
  },
  {
    num: "07",
    category: "frontend",
    title: "Calculator",
    description: "Une petite calculatrice, doublée d'un générateur de bulles. Un clique sur une bulle la fait disparaître et incrémente un compteur initialement à 0.",
    stack:[
      {name: "html 5"}, {name: "css 3"}, {name: "javascript"}
    ],
    image: "/assets/work/calculator.png",
    live: "https://calculator-bay-omega-83.vercel.app/",
    github: "https://github.com/ljcdev421/calculator",
  },
];



const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section 
      initial={{opacity:0}} 
      animate={{opacity:1, transition:{delay:0.4, duration:0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0" 
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between 
            order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* project category */}
                <h2 className="text-[20px] font-medium leading-none text-white
                   group-hover:text-accent transition-all duration-500 capitalize"> 
                   Projet {project.category} 
                </h2>
                {/* project title */}
                <h2 className="text-[42px] font-bold leading-none text-white
                   group-hover:text-accent transition-all duration-500 capitalize"> 
                    {project.title} 
                </h2>
                {/* project description */}
                <p className="text-white/60">
                  {project.description}
                </p>
                {/* stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index) =>{
                    return <li key={index} className="text-xl text-accent" >
                      {item.name}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/* buttons */}
                <div className="flex items-center gap-4">
                  {/* live */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                         bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                         bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
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
            <Swiper spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=>{
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full f-full bg-black/10 z-10">

                      </div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} alt='' fill className="object-cover"/>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[50%] 
                z-20 w-full justify-between px-2" btnStyles="bg-accent hover:bg-accent-hover text-primary 
                text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all "/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
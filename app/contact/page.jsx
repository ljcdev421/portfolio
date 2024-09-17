"use client";

import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPhone} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon : <FaPhoneAlt />,
    title: 'Téléphone',
    description: '+229 94453791'
  }, 
  {
    icon : <FaEnvelope />,
    title: 'Email',
    description: 'ljcdev421@gmail.com'
  },
  {
    icon : <FaMapMarkerAlt />,
    title: 'Adresse',
    description: 'Yenawa, Cotonou'
  }
]

const Contact = () => {
  return (
    <motion.section
      initial={{opacity:0}} 
      animate={{opacity:1, transition:{delay:0.4, duration:0.4, ease: "easeIn"}}}
      className="py-6" 
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10  bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
              <p className="text-white/60">
              Si vous avez des besoins dans ces domaines ou des projets sur lesquels nous pourrions travailler ensemble, je serais ravi d'en discuter plus en détail.
              N’hésitez pas à me contacter pour plus d’informations ou pour fixer un rendez-vous.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Nom" />
                <Input type="lastname" placeholder="Prénom" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Téléphone" />
              </div>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choisir un service</SelectLabel>
                    <SelectItem value="webdev">Développement web</SelectItem>
                    <SelectItem value="mobdev">Développement mobile</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                    <SelectItem value="mti">Maintenance informatique</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]" placeholder="Entrez votre message." />

              <Button size="md" className="max-w-40"> Envoyer </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return (<li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[50px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                     text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[28px] "> {item.icon} </div>
                    </div>
                    <div className="flex-1">
                      <p className="tetxt-white/60"> {item.title} </p>
                      <h3 className="text-xl"> {item.description} </h3>
                    </div>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
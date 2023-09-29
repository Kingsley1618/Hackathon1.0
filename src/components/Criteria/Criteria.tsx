'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import CriteriaImg from "@/assets/Images/judgingCriteriaImg.png"
import styles from "@/components/Header/header.module.css"
export default function Criteria() {
  return (
    <>
    <div className={`items-center ${styles.component} px-[15px] mx-auto py-[30px] flex md:flex-row flex-col gap-x-6`}>

<motion.div
 initial={{ opacity: 0, scale:0 }}
 whileInView={{ opacity: 1, scale:1, transition : {duration: 1.1}}}
 viewport={{once:true}} className='flex-[1] justify-center flex'>
    <Image src ={CriteriaImg} alt="bulbmessage" className='md:max-w-[450px] h-[auto] max-w-[280px] w-[100%] ' width={500} height={10} />
</motion.div>

<div className='flex-[1] md:mt-0 mt-4'>

<motion.h1 
initial = {{opacity:0, x:-10}}
whileInView={{opacity:1, x:0, transition : {duration : 1.3}}}
viewport={{once : true}}className='text-white font-bold text-[1.7rem] md:text-left text-center' style={{fontSize:"calc(1rem + 1vw)"}}>
Judging Criteria <br></br><span className='text-[rgb(212,52,254)]'>Key attributes</span></motion.h1>

<ul className="flex flex-col gap-y-3 mt-5">
<motion.li
initial = {{opacity:0, y:-10}}
whileInView={{opacity:1, y:0, transition : {duration : 2}}}
viewport={{once : true}} className="text-white text-[.9rem] md:text-left text-center"><span className='text-[rgb(255,38,185)] font-bold'>Innovation and Creativity:</span>  Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</motion.li>

<motion.li
initial = {{opacity:0, y:-10}}
whileInView={{opacity:1, y:0, transition : {duration : 2}}}
viewport={{once : true}}className="text-white text-[.9rem] md:text-left text-center"><span className='text-[rgb(255,38,185)] font-bold'>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</motion.li>

<motion.li
initial = {{opacity:0, y:-10}}
whileInView={{opacity:1, y:0, transition : {duration : 2}}}
viewport={{once : true}} className="text-white text-[.9rem] md:text-left text-center"><span className='text-[rgb(255,38,185)] font-bold'>Impact and Relevance: </span>  Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</motion.li>


<motion.li
initial = {{opacity:0, y:-10}}
whileInView={{opacity:1, y:0, transition : {duration : 2}}} 
viewport={{once : true}}className="text-white text-[.9rem] md:text-left text-center"><span className='text-[rgb(255,38,185)] font-bold'>Technical Complexity: </span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</motion.li>


<motion.li
initial = {{opacity:0, y:-10}}
whileInView={{opacity:1, y:0, transition : {duration : 2}}}
viewport={{once : true}}className="text-white text-[.9rem] md:text-left text-center"><span className='text-[rgb(255,38,185)] font-bold'>Adherence to Hackathon Rules:</span>  Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</motion.li>


</ul>

<button className='justify-center mt-8 bg-btngradient rounded-md block md:mr-0 mx-auto text-white py-3 w-[200px] w-[100%]'>Read More</button>
    
    </div>
    </div>
    <hr className='border-t-0.5 border-gray-600'></hr>
    </>
  )
}

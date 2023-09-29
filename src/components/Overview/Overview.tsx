'use client'
import Image from 'next/image'
import React from 'react'
import IdealImg from "@/assets/Images/ideaImg.png"
import { motion } from "framer-motion"
import styles from "@/components/Header/header.module.css"
export default function Overview() {
  return (
    <motion.div  
     initial={{ opacity: 0, x: -10 }}
  whileInView={{ opacity: 1, x: 0 , transition : {duration: 1.1}}}
  viewport={{once:true}}
  className="w-[100%]">
    <section id="overview" className={`items-center ${styles.component} px-[15px] mx-auto py-[30px] flex md:flex-row flex-col gap-x-6`}>

<motion.div
 initial={{ opacity: 0, scale:0 }}
 whileInView={{ opacity: 1, scale:1, transition : {duration: 1.1}}}
 viewport={{once:true}}
className='flex-[1] justify-center flex'>
    <Image src ={IdealImg} alt="bulbmessage" className='md:max-w-[450px] h-[auto] max-w-[280px] w-[100%] ' width={500} height={10} />
</motion.div>

<div className='flex-[1] md:mt-0 mt-4'>

<motion.h1
 initial={{ opacity: 0, x:10 }}
 whileInView={{ opacity: 1, x:0, transition : {duration: 1.1}}}
 viewport={{once:true}}
className='text-white font-bold text-[1.7rem] md:text-left text-center' style={{fontSize:"calc(1rem + 1vw)"}}>
Introduction to getlinked <br></br><span className='text-[rgb(212,52,254)]'>tech Hackathon 1.0</span></motion.h1>

<p className='text-white text-[.8rem] md:text-left text-center md:mt-0 mt-5'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!</p>
</div>

   
    
    </section>
    <hr className='border-t-0.5 border-gray-600'></hr>
    </motion.div>
  )
}

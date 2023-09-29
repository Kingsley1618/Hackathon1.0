'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import sponsorImg from "@/assets/Images/sponsorsImg.png"
import styles from "@/components/Header/header.module.css"
export default function Sponsors() {
  return (
    <>
<div className={`items-center ${styles.component} px-[15px] mx-auto py-[30px] flex flex-col gap-y-[40px]`}>
<div className='flex-[1]'>
<h1 className='text-center text-white font-[900]' style={{fontSize:"calc(1rem + 1vw)"}}>Partners and Sponsors</h1>
<div className='text-center text-white text-[.9rem]'>Getlinked Hackathon 1.0 is honored to have the following <div>major companies as its partners and sponsors</div></div>
</div>
<motion.div
 initial={{ opacity: 0, scale:0 }}
 whileInView={{ opacity: 1, scale:1, transition : {duration: 1.1}}}
 viewport={{once:true}} className='flex-[1]'>
<Image alt="sponsor" className='' src={sponsorImg} width={1500} height={700}/>
</motion.div>

</div>
<hr className='border-t-0.5 border-gray-600'></hr>
    </>
  )
}

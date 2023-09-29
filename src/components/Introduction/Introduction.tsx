'use client'
import Image from 'next/image'
import React from 'react'
import styles from "./Introduction.module.css"
import LineIcon from "@/assets/svg/hrIcon.svg"
import Star from "@/assets/Images/purplestarIcon.png"
import Bulb from "@/assets/Images/lightbulbIcon.png"
import { motion } from "framer-motion"
import HeroBall from "@/assets/Images/heroBall.png"
import Chain from "@/assets/Images/heroIcon.png"
import screenstyle from "@/components/Header/header.module.css"
import HeroBg from "@/assets/Images/heroBg.png"
export default function Introduction() {
  return (
    <>
    <motion.div  
     initial={{ opacity: 0, x: -10 }}
  whileInView={{ opacity: 1, x: 0 , transition : {duration: 1.1}}}
  viewport={{once:true}}
    className={`${screenstyle.component} relative px-[15px] mx-auto pt-3 py-[20px]`}>
<div className=' flex flex-col items-end justify-end'>
<h1 className={styles.text}>Igniting a Revolution in HR Innovation</h1>
<Image src={LineIcon} className="w-[100%] md:max-w-[220px] max-w-[130px]" width={220} height={40} alt="line"/>
</div>


<div className="flex justify-between gap-x-[20px] items-center md:flex-row flex-col md:mt-8 mt-[50px]">

<div className='flex-1 md:text-left text-center'>

<h1 className={`${styles.techtext}`}>
    getlinked Tech
    {/*<Image src={Bulb} width={50} className='top-0 right-20' height={40} alt="bulb" />*/}
    </h1>
<div className={`flex flex-wrap ${styles.techtext} relative md:top-[-10px] md:justify-start justify-center`}><h1>Hackathon <span className="text-[rgb(212,52,254)]">1.0</span></h1> <Image src={Chain} alt="chain" className='md:max-w-[100px] max-w-[50px] h-[auto] w-[100%]' width={100} height={20} /></div>

<p className='text-white' style={{fontSize:"calc(.8rem + .4vw)"}}>Participate in getlinked tech Hackathon 2023 stand
a chance to win a Big prize</p>

<button className='justify-center mt-6 bg-btngradient rounded-md text-white py-3 w-[160px] w-[100%]'>Register</button>
</div>

<div className="flex-1 relative md:mt-0 mt-[60px]">



<Image src={HeroBg} width={600} className='block me-5 md:max-w-[600px] w-[100%] max-w-[500px]  h-[auto] grayscale' height={40} alt="herobg" />


<Image src={HeroBall} width={600} className={`animate-pulse md:max-w-[600px] w-[100%] max-w-[500px] absolute top-0 block me-5  h-[auto] ${styles.image}`} height={40} alt="herobg" />
</div>


</div>

<Image src={Star} width={20} className={`${styles.star}`} height={30} alt="herobg" />

</motion.div>
<hr className='border-t-0.5 border-gray-600'></hr>
    
    </>
  )
}

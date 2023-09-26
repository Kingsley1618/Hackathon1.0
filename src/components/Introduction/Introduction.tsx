import Image from 'next/image'
import React from 'react'
import styles from "./Introduction.module.css"
import LineIcon from "@/assets/svg/hrIcon.svg"
import Bulb from "@/assets/Images/lightbulbIcon.png"
import HeroBall from "@/assets/Images/heroBall.png"
import Chain from "@/assets/Images/heroIcon.png"
import HeroBg from "@/assets/Images/heroBg.png"
export default function Introduction() {
  return (
    <div className='lg:max-w-[1300px] md:max-w-[900px] max-w-[600px] px-[40px] mx-auto'>
<div className=' flex flex-col items-end justify-end'>
<h1 className={styles.text}>Igniting a Revolution in HR Innovation</h1>
<Image src={LineIcon} className="w-[100%] md:max-w-[220px] max-w-[130px]" width={220} height={40} alt="line"/>
</div>


<div className="flex justify-between gap-x-[20px] items-center">

<div className='flex-1'>

<h1 className={`${styles.techtext}`}>
    getlinked Tech
    {/*<Image src={Bulb} width={50} className='top-0 right-20' height={40} alt="bulb" />*/}
    </h1>
<div className={`flex flex-wrap ${styles.techtext} relative md:top-[-10px]`}><h1>Hackathon <span className="text-[rgb(212,52,254)]">1.0</span></h1> <Image src={Chain} alt="chain" className='max-w-[100px] h-[auto] w-[100%]' width={100} height={20} /></div>

<p className='text-white' style={{fontSize:"calc(1rem + .4vw)"}}>Participate in getlinked tech Hackathon 2023 stand
a chance to win a Big prize</p>

<button className='justify-center mt-6 bg-btngradient rounded-md text-white py-3 w-[160px] w-[100%]'>Register</button>
</div>

<div className="flex-1 relative">



<Image src={HeroBg} width={600} className='block me-5  h-[auto] grayscale' height={40} alt="herobg" />


<Image src={HeroBall} width={600} className='animate-pulse absolute top-0 block me-5  h-[auto]' height={40} alt="herobg" />
</div>


</div>


    </div>
  )
}

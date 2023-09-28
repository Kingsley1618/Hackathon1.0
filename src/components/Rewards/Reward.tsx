import Image from 'next/image'
import React from 'react'
import rewardIcon from "@/assets/Images/rewardIcons.png"
import priceImg from "@/assets/Images/priceImg.png"
import styles from "@/components/Header/header.module.css"
export default function Reward() {
  return (
    <>
    <div className={`px-[15px] ${styles.component} mx-auto py-[30px] flex md:flex-row flex-col gap-x-6`}>

<div className='flex-[1] justify-center flex md:order-first order-[2]'>
    <Image src ={priceImg} alt="bulbmessage" className='md:max-w-[450px] h-[auto] max-w-[400px] w-[100%] ' width={500} height={10} />
</div>

<div className='flex-[1] md:mt-0 mt-4 flex flex-col justify-center items-center md:gap-y-[50px] gap-y-8'>
<div className="order-[1]">
<h1 className='text-white font-bold text-[1.7rem] md:text-left text-center' style={{fontSize:"calc(1rem + 1vw)"}}>
Prizes and <br></br><span className='text-[rgb(212,52,254)]'>Rewards</span></h1>

<p className='text-white text-[.8rem] md:text-left text-center md:mt-0 mt-5'>Highlight of the prizes or rewards for winners and<br /> for participants.</p>
</div>

<Image src ={rewardIcon} alt="bulbmessage" className='md:max-w-[500px] h-[auto] md:order-[3] order-[3] max-w-[400px] w-[100%] ' width={500} height={10} />
    </div>
    </div>
    <hr className='border-t-0.5 border-gray-600'></hr>
    </>
  )
}
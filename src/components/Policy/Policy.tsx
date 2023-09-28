import Image from 'next/image'
import React from 'react'
import PolicyImg from "@/assets/Images/privacyImg.png"
import styles from "@/components/Header/header.module.css"
import CheckImg from "@/assets/svg/checkIcon.svg"
export default function Policy() {
  return (
    <div className={`flex md:flex-row flex-col py-[30px] px-[15px] gap-y-7 ${styles.component}`}>
<div className='flex-1'>
<h1 className='text-white md:max-w-[300px] font-bold w-[100%] md:text-left text-center' style={{fontSize:"calc(1.2rem + .9vw)"}}>Privacy Policy and <span className='text-[rgb(212,52,254)]'>Terms</span></h1>
<p className='text-white md:text-left text-center'>Last updated on September 12, 2023</p>

<p className='text-white w-[100%] md:max-w-[450px] mt-[20px] md:text-left text-center'>Below are our privacy & policy, which outline a lot of goodies. it&apos;s our aim to always take of our participant</p>

<div className='text-white rounded-md border-[.9px] border-[rgb(212,52,254)] mt-5 md:p-[30px] p-[15px]'>
<p className='md:text-left text-center text-[.9rem]'>At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose,
and safeguard your data when you participate in our tech
hackathon event. By participating in our event, you consent
to the practices described in this policy.</p>

<h1 className='text-[rgb(212,52,254)] mt-6 font-bold' style={{fontSize:"calc(.8rem + 1vw)"}}>Licensing Policy</h1>

<p className='text-white mt-3 font-bold' style={{fontSize:"calc(0.6rem + .8vw)"}}>Here are terms of our Standard License:</p>

<div className='flex gap-x-3 mt-5 '><Image src = {CheckImg} className='w-[100%] max-w-[20px] h-[auto]' width={20} height={20} alt='policy' />
<div className='break-word flex-1 text-[.9rem]'>The Standard License grants you a non-exclusive right to navigate and register for our event</div>
</div>

<div className='flex gap-x-3 mt-5'><Image src = {CheckImg} className='w-[100%] max-w-[20px] h-[auto]' width={20} height={20} alt='policy' />
<div className='break-word flex-1 text-[.9rem]'>You are licensed to use the item available at any free source sites, for your project developement</div>
</div>
<button className='md:flex justify-center hidden bg-btngradient rounded-md text-white py-3 w-[150px] w-[100%]'>Read More</button>
</div>

</div>
<div className='flex-1'>
<Image src = {PolicyImg} width={800} height={800} alt='policy' />
</div>


    </div>
  )
}

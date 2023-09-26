import Image from 'next/image'
import React from 'react'
import RuleImg from "@/assets/Images/rulesImg.png"
export default function Rules() {
  return (
    <>
    <div className="lg:max-w-[1300px] items-center md:max-w-[900px] max-w-[650px] px-[40px] mx-auto py-[30px] flex md:flex-row flex-col gap-x-6">

<div className='flex-[1] justify-center flex md:order-last'>
    <Image src ={RuleImg} alt="bulbmessage" className='md:max-w-[450px] h-[auto] max-w-[280px] w-[100%] ' width={500} height={10} />
</div>

<div className='flex-[1] md:mt-0 mt-4'>

<h1 className='text-white font-bold text-[1.7rem] md:text-left text-center' style={{fontSize:"calc(1rem + 1vw)"}}>
Rules and <br></br><span className='text-[rgb(212,52,254)]'>Guidelines</span></h1>

<p className='text-white text-[.8rem] md:text-left text-center md:mt-0 mt-5'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
    
    </div>
    </div>
    <hr className='border-t-0.5 border-gray-600'></hr>
    </>
  )
}

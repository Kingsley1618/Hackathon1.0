'use client'
import Image from 'next/image'
import React from 'react'
import {useDropdown} from "@/hooks/useDropdown"
import {IoMdAdd} from "react-icons/io"
import FaqImg from "@/assets/Images/faqImg.png"
export default function Faq() {
const dropdown = useDropdown()
  return (
    <>
    <section id="faq" className="lg:max-w-[1300px] items-center md:max-w-[900px] max-w-[650px] px-[40px] mx-auto py-[30px] flex md:flex-row flex-col gap-x-6">

<div className='flex-[1] justify-center flex order-last'>
    <Image src ={FaqImg} alt="bulbmessage" className='md:max-w-[450px] h-[auto] max-w-[280px] w-[100%] ' width={500} height={10} />
</div>

<div className='flex-[1] md:mt-0 mt-4'>

<h1 className='text-white font-bold text-[1.7rem] md:text-left text-center' style={{fontSize:"calc(1rem + 1vw)"}}>
Frequently Ask <br></br><span className='text-[rgb(212,52,254)]'>Question</span></h1>
<p className='text-white text-[.8rem] md:text-left text-center md:mt-0 mt-5'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
<ul className="flex flex-col gap-y-5 mt-5">
{dropdown.isOpen.map((list, index)=> {
    return <>
    <li onClick={()=> dropdown.toggleHandler(index)} className="border-b-[1px] cursor-pointer border-b-[rgb(212,52,254)] text-white">
        <div className="flex justify-between"><h1>{list.text}</h1> <IoMdAdd className="text-[rgb(212,52,254)]"/></div>
   {list.open && <p className="text-white mt-3 text-[.8rem]">{list.subtext}</p> }
    </li>
    
    </>
})}



</ul>


    
    </div>
    </section>
    <hr className='border-t-0.5 border-gray-600'></hr>
    </>
  )
}
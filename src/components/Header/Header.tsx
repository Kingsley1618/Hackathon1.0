'use client'
import Link from 'next/link'
import React,{useEffect} from 'react'
import styles from "./header.module.css"
import {AiOutlineClose} from "react-icons/ai"
import {FaBarsStaggered} from "react-icons/fa6"
import {useNav} from "@/hooks/useNav"
import { useRouter } from 'next/navigation'
export default function Header() {
  const nav = useNav()
  function closeNav() {
    nav.closeHandler()
  }

  useEffect(() => {
    // Add scroll event listener when component mounts on the client side
    window.addEventListener('scroll', closeNav);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', closeNav);
    };
  }, []); // Empty
  const router = useRouter()
  return (
   <>
   {nav.openNav ? <div className='w-[100%] h-[100vh] flex justify-center items-center left-0 right-0 md:hidden z-[1]' style={{position:"fixed"}} onClick = {()=> nav.closeHandler()}>

</div> : null}

{nav.openNav ? <div className='w-[90%] mx-auto fixed border-[1px] p-[15px] top-[50px] left-0 right-0 md:hidden  z-[99999] border-gray-600 rounded-lg h-[70vh] bg-[rgb(21,14,40)]'>
<AiOutlineClose onClick = {()=> nav.closeHandler()} className={`ml-auto block text-white font-bold text-[1.5rem] rounded-full ${styles.closeIcon}`} />
<ul className="flex flex-col gap-y-4 text-[1rem] text-white">
<Link href="/" className={styles.link} onClick = {()=> nav.closeHandler()}><li>Timeline</li></Link>

<Link href="/#overview" className={styles.link} onClick = {()=> nav.closeHandler()}><li>Overview</li></Link>

<Link href="/#faq" className={styles.link} onClick = {()=> nav.closeHandler()}><li>FAQs</li></Link>
<Link href="/Contact" className={styles.link} onClick = {()=> nav.closeHandler()}><li>Contact</li></Link>

</ul>
</div> : null }
   
<div className={`flex justify-between  px-[10px] ${styles.component} mx-auto gap-x-8 min-h-[14.5vh] h-[100%] items-center w-[100%]`} onClick = {()=> nav.closeHandler}>
<h1 className="font-[900] lg:text-[1.7rem] text-[1.4rem] ps-3" style = {{fontFamily: "Clash Display,sans-serif"}}><span className="text-white">get</span><span className="text-[rgb(212,52,254)]">linked</span></h1>


<div className="ml-auto flex gap-x-[70px] items-center">
<ul className="md:flex hidden gap-x-8 items-center text-[1rem]">
<Link href="/" className={styles.link}><li>Timeline</li></Link>

<Link href="/#overview" className={styles.link}><li>Overview</li></Link>

<Link href="/#faq" className={styles.link}><li>FAQs</li></Link>
<Link href="/Contact" className={styles.link}><li>Contact</li></Link>

</ul>

<button className='md:flex justify-center hidden bg-btngradient rounded-md text-white py-3 w-[150px] w-[100%]' onClick={()=> router.push("/auth/register")}>Register</button>
</div>
<FaBarsStaggered className="md:hidden flex text-white font-bold text-[20px] cursor-pointer" onClick = {()=> nav.openHandler()}/>



</div>



<hr className='border-t-0.5 border-gray-600'></hr>

   </>
  )
}

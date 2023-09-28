'use client'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

import styles from "./header.module.css"
import {FaBarsStaggered} from "react-icons/fa6"
export default function HeaderContact() {
  const pathname = usePathname()
  const router = useRouter()
  return (
   <>
<div className={`flex justify-between ${styles.component} px-[10px] mx-auto gap-x-8 min-h-[16.5vh] h-[100%] items-center w-[100%]`}>
<h1 className="font-[900] lg:text-[1.7rem] text-[1.4rem] ps-3" style = {{fontFamily: "Clash Display,sans-serif"}}><span className="text-white">get</span><span className="text-[rgb(212,52,254)]">linked</span></h1>


<div className="ml-auto flex gap-x-[70px] items-center">
<ul className="md:flex hidden gap-x-8 items-center text-[1rem]">
<Link href="/" className={styles.link}><li>Timeline</li></Link>

<Link href="/#overview" className={styles.link}><li>Overview</li></Link>

<Link href="/#faq" className={styles.link}><li>FAQs</li></Link>
<Link href="/Contact" className={styles.link}><li>Contact</li></Link>

</ul>

<button className={`md:flex justify-center border-2  hidden hover:bg-btngradient ${pathname === "/Contact" ? "bg-[transparent]" : "bg-btngradient"}  rounded-md text-white py-3 w-[150px] w-[100%]`} style = {{borderImage : "linear-gradient(270deg,#903aff,#fe34b9)", borderImageSlice : "1"}} onClick={()=> router.push("/auth/register")}>Register</button>
</div>
<FaBarsStaggered className="md:hidden flex text-white font-bold text-[20px] cursor-pointer"/>
</div>





   </>
  )
}

import React from 'react'
import Link from 'next/link'
import styles from "@/components/Header/header.module.css"
import {FaInstagram} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import {BiSolidPhoneCall} from "react-icons/bi"
import {BiLogoFacebook} from "react-icons/bi"
import {FaLinkedinIn} from "react-icons/fa6"
import {FaLocationDot} from "react-icons/fa6"

export default function Footer() {
  return (
    <div className="bg-[rgb(16,11,32)] w-[100%] px-[20px] py-[50px]">
    <div className={`flex md:flex-row flex-col gap-x-4  gap-y-8 text-white ${styles.component} justify-between `}>
        <div className='flex-[0.55]'>
<h1 className="font-[900] lg:text-[1.7rem] text-[1.4rem]" style = {{fontFamily: "Clash Display,sans-serif"}}><span className="text-white">get</span><span className="text-[rgb(212,52,254)]">linked</span></h1>
<p className='text-[.8rem] mt-2 w-[100%] max-w-[480px]'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
</div>
<div className='flex-[0.45] flex justify-between md:flex-row flex-col gap-y-8'>
<div>
    <h1 className='text-[rgb(212,52,254)]'>Useful Links</h1>

    <ul className="flex flex-col mt-6 gap-y-4 text-[1rem]">
<Link href="/" className={styles.link}><li>Timeline</li></Link>

<Link href="/#overview" className={styles.link}><li>Overview</li></Link>

<Link href="/#faq" className={styles.link}><li>FAQs</li></Link>
<Link href="/Contact" className={styles.link}><li>Contact</li></Link>

</ul>

<div className='gap-x-3 text-white text-[20px] mt-3 flex'><h1 className='text-[.9rem] text-[rgb(212,52,254)]'>Follow us</h1> 

<FaInstagram />
<FaXTwitter />
<BiLogoFacebook />
<FaLinkedinIn />
</div>
</div>



<div>
    <h1 className='text-[rgb(212,52,254)]'>Contact Us</h1>

    <ul className="flex flex-col mt-6 gap-y-4  text-[1rem]">
<Link href="#" className={styles.link}><li className='flex gap-x-2 text-white'><BiSolidPhoneCall /> <h1>+2349036646336</h1></li></Link>

<Link href="https://maps.app.goo.gl/2kj2MGwtindxNdyQ7" className={styles.link}><li className='flex gap-x-2 text-white'><FaLocationDot /><h1>University of Lagos, Akoka</h1></li></Link>

</ul>

</div>
</div>

</div>
<div className='text-center text-white mt-10'>All rights reserved. © getlinked Ltd.</div>

    </div>
  )
}

import React from 'react'
import {FaInstagram} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import {BiLogoFacebook} from "react-icons/bi"
import {FaLinkedinIn} from "react-icons/fa6"
export default function ContactForm() {
  return (
    <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-[30px] lg:max-w-[990px] md:mt-[60px] mt-[20px] md:max-w-[900px] max-w-[600px] px-[40px] mx-auto justify-center items-center">

<div className='flex flex-col md:order-first order-last md:text-left text-center justify-center md:gap-y-[20px] gap-y-1 text-white text-[1.1rem] flex-1'>
<h1 className="md:block hidden font-bold text-[1.7rem] text-[rgb(212,52,254)]">Get in touch</h1>
<p className='md:block hidden'>Contact <br />Information</p>

<p className='md:block hidden'>27,Alara Street <br />Yaba 100012 <br />Lagos State</p>
<p className='md:block hidden'>Call Us : 07067981819</p>

<p className='md:block hidden'>we are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
<p className="text-[rgb(212,52,254)]">Share on</p>

<div className='gap-x-3 text-white text-[25px] flex'>
<FaInstagram />
<FaXTwitter />
<BiLogoFacebook />
<FaLinkedinIn />
</div>
</div>

<div className='md:overflow-y-scroll md:justify-center flex  max-w-[500px] md:max-w-[800px] w-[100%] md:shadow-[0px 0px 10px rgba(0, 0, 0, 0.19)] flex-1  md:bg-[#ffffff08] md:rounded-xl md:p-10 text-white md:h-[550px]'>
<form className='text-white w-[100%]'>

<h1 className='font-[900] text-[1.2rem] text-[rgb(212,52,254)]'>Questions or need assistance?</h1>
<div className='font-[900] text-[1.2rem]  text-[rgb(212,52,254)]'>Let us know about it!</div>
<div className='flex flex-col gap-y-8 mt-6'>
<input type="text" className='text-white bg-[transparent] px-3 py-2 rounded-md border-white border-[1px]' placeholder='First Name'/>

<input type="text" className='text-white bg-[transparent] px-3 py-2 rounded-md border-white border-[1px]' placeholder='Phone number'/>

<input type="email" className='text-white bg-[transparent] px-3 py-2 rounded-md border-white border-[1px]' placeholder='Mail'/>
<textarea type="text" cols={5}  style={{ height: '100px',resize: 'none' }} className='text-white bg-[transparent] px-3 py-2 rounded-md border-white border-[1px]' placeholder='Message'/>
</div>

<button className='flex justify-center bg-btngradient rounded-sm text-white py-3 w-[150px] mt-12 mx-auto w-[100%]'>Submit</button>
</form>
</div>
    </div>
  )
}

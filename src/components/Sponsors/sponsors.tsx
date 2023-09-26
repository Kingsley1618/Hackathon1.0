import Image from 'next/image'
import React from 'react'
import sponsorImg from "@/assets/Images/sponsorsImg.png"
export default function Sponsors() {
  return (
    <>
<div className='lg:max-w-[1300px] items-center md:max-w-[900px] max-w-[650px] px-[40px] mx-auto py-[30px] flex flex-col gap-y-[40px]'>
<div>
<h1 className='text-center text-white font-[900]' style={{fontSize:"calc(1rem + 1vw)"}}>Partners and Sponsors</h1>
<div className='text-center text-white text-[.9rem]'>Getlinked Hackathon 1.0 is honored to have the following <div>major companies as its partners and sponsors</div></div>
</div>
<Image alt="sponsor" className='' src={sponsorImg} width={1500} height={700}/>

</div>

    </>
  )
}

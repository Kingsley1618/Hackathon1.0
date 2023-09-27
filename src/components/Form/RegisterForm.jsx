'use client'
import React from 'react'
import RegisterImg from "@/assets/Images/registerImg.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import WalkImg from "@/assets/Images/register.png"
export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      phoneNumber: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      
      console.log('Form submitted with values:', values);
    },
  });
  return (
    <div className="flex lg:flex-row flex-col mb-[200px] md:gap-y-0 gap-y-[30px] lg:max-w-[1300px] md:max-w-[900px] max-w-[600px] md:mt-[60px] mt-[20px]  px-[40px] mx-auto justify-center items-center">

<div className='flex-1'>
<Image src ={RegisterImg} alt="registerimg" className='' width={800} height={800} />
</div>

<div className='flex-1 md:overflow-y-scroll md:justify-center flex  max-w-[500px] md:max-w-[800px] w-[100%] md:shadow-[0px 0px 10px rgba(0, 0, 0, 0.19)] flex-1  md:bg-[#ffffff08] md:rounded-xl md:pt-10 md:px-10 md:pb-10 text-white md:h-[550px]'>
<form className='text-white w-[100%]' onSubmit={formik.handleSubmit}>
          <h1 className='font-[900] text-[1.9rem] text-[rgb(212,52,254)]'>Register</h1>
         
         <div className='flex items-center mt-[30px]'>
<h1>Be part of this movement!</h1>
<Image src={WalkImg} alt="walk" className='w-[105px] h-[auto]' width={85} height={40} />
         </div>

         <h1 className='text-white font-normal text-[1.6rem] mt-2'>CREATE YOUR ACCOUNT</h1>

        <div className='grid grid-cols-2 mt-4 gap-x-4 gap-y-4 w-[100%]'>
<div className='w-[100%]'>
<label htmlFor='teamname' className="text-[.9rem]">Team&apos;s Name</label>
<input type="text" id='teamname' className='mt-1 w-[100%] outline-0 border-white border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-2 px-5' placeholder='Enter the name of your group' />
</div>


<div className='w-[100%]'>
<label htmlFor='Phone' className="text-[.9rem]">Phone</label>
<input type="text" id='Phone' className='mt-1 w-[100%] outline-0 border-white border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-2 px-5' placeholder='Enter the name of your group' />
</div>


<div className='w-[100%]'>
<label htmlFor='Email' className="text-[.9rem]">Email</label>
<input type="text" id='Email' className='mt-1 w-[100%] outline-0 border-white border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-2 px-5' placeholder='Enter the name of your group' />
</div>

<div className='w-[100%]'>
<label htmlFor='Project Topic' className="text-[.9rem]">Project Topic</label>
<input type="text" id='Project Topic' className='mt-1 w-[100%] outline-0 border-white border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-2 px-5' placeholder='Enter the name of your group' />
</div>



<div className='w-[100%]'>
<label htmlFor='category' className="text-[.9rem]">Category</label>
<select id = "category" placeholder = "Select your category" className='mt-1 w-[100%] outline-0 border-white border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-2 px-3'>

<option value="none" className='bg-gray-500'>Select your category</option>
<option value="1" className='bg-gray-500'>1</option>
<option value="2" className='bg-gray-500'>2</option>

</select>
</div>

<div className='w-[100%]'>
<label htmlFor='size' className="text-[.9rem]">Group Size</label>
<select id = "size" placeholder = "Select" className='mt-1 w-[100%] outline-0 border-white border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-2 px-5'>

<option value="none" className='bg-gray-500'>Select</option>
<option value="1" className='bg-gray-500'>1</option>
<option value="2" className='bg-gray-500'>2</option>

</select>
</div>





        </div>

        <h1 className='text-[.9rem] font-bold text-[rgb(201,41,189)] my-4' style={{fontStyle:"italic"}}>Please review your registration details before submitting</h1>
        </form>
</div>
    </div>
  )
}

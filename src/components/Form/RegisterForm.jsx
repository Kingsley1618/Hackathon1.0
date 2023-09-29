'use client'
import React, { useState, useRef } from 'react'
import RegisterImg from "@/assets/Images/registerImg.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, notification } from 'antd';
import styles from "@/components/Header/header.module.css"
import Image from 'next/image';
import WalkImg from "@/assets/Images/register.png"
export default function RegisterForm() {
  const [isChecked, setIsChecked] = useState(false)
  const [api, contextHolder] = notification.useNotification();
  const ref = useRef()
  const openNotification = () => {
    api.open({
      message: 'Submitted',
      description: 'All details have been saved and submitted successfully',
      duration: 0,
    });
  };
  function toggleChecked(event) {
if(ref.current.checked) {
  setIsChecked(true)
} else {
  setIsChecked(false)
}
  }
  const formik = useFormik({
    initialValues: {
      teamname: '',
      Phone: '',
      Email: '',
      'Project Topic': '',
      category: 'none',
      size: 'none',
    },
    validationSchema: Yup.object({
      teamname: Yup.string().required('Required'),
      Phone: Yup.string()
  .matches(/^\+\d+$/, 'Phone number must include a valid country code (e.g., +1234567890)')
  .required('Phone number is required'),
      Email: Yup.string().email('Invalid email address').required('Required'),
      'Project Topic': Yup.string().required('Required'),
      category: Yup.string().notOneOf(['none'], 'Please select a category').required('Required'),
      size: Yup.string().notOneOf(['none'], 'Please select a group size').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();

      fetch('https://formspree.io/f/xnqkvlgz', {
        method : 'POST',
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify(values)
      }).then((res)=> {
        console.log('Form submitted successfully', res);
      
        openNotification()
      })
    },
  });
  return (
    <div className={`flex md:flex-row flex-col mb-[200px] md:gap-y-0 gap-y-[30px] ${styles.component} md:mt-[60px] mt-[20px]  px-[15px] mx-auto justify-center items-center`}>
 {contextHolder}
<div className='flex-1'>
<Image src ={RegisterImg} alt="registerimg" className='' width={800} height={800} />
</div>

<div className='flex-1 md:overflow-y-scroll md:justify-center flex  max-w-[500px] md:max-w-[800px] w-[100%] md:shadow-[0px 0px 10px rgba(0, 0, 0, 0.19)] flex-1  md:bg-[#ffffff08] md:rounded-xl md:pt-10 md:px-10 md:pb-10 text-white md:h-[650px]'>
<form className="text-white w-[100%]" onSubmit={formik.handleSubmit}>
          <h1 className="font-[900] text-[1.9rem] md:flex hidden text-[rgb(212,52,254)]">Register</h1>
          <div className="flex items-center mt-[30px]">
            <h1 className='md:text-[1rem] text-[.7rem]'>Be part of this movement!</h1>
            <Image src={WalkImg} alt="walk" className="h-[auto]" width={85} height={40} />
          </div>
          <h1 className="text-white font-normal md:text-[1.6rem] text-[1.1rem] mt-2">CREATE YOUR ACCOUNT</h1>
          <div className="grid md:grid-cols-2 grid-cols-4 mt-4 gap-x-4 gap-y-4 w-[100%]">
            <div className="w-[100%] md:col-span-1 col-span-4">
              <label htmlFor="teamname" className="text-[.9rem]">
                Team's Name
              </label>
              <input
                type="text"
                id="teamname"
                name="teamname"
                className={`mt-1 w-[100%] text-[.8rem] outline-0  border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-3 px-5 ${
                  formik.touched.teamname && formik.errors.teamname ? 'border-red-500' : 'border-white'
                }`}
                placeholder="Enter the name of your group"
                {...formik.getFieldProps('teamname')}
              />
              {formik.touched.teamname && formik.errors.teamname ? (
                <div className="text-red-500 text-[.8rem]">{formik.errors.teamname}</div>
              ) : null}
            </div>
            <div className="w-[100%] md:col-span-1 col-span-4">
              <label htmlFor="Phone" className="text-[.9rem]">
                Phone
              </label>
              <input
                type="tel"
                id="Phone"
                name="Phone"
               
                className={`mt-1 w-[100%] text-[.8rem] outline-0  border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-3 px-5 ${
                  formik.touched.Phone && formik.errors.Phone ? 'border-red-500' : 'border-white'
                }`}
                placeholder="Enter your phone number"
                {...formik.getFieldProps('Phone')}
              />
              {formik.touched.Phone && formik.errors.Phone ? (
                <div className="text-red-500 text-[.8rem]">{formik.errors.Phone}</div>
              ) : null}
            </div>
            <div className="w-[100%] md:col-span-1 col-span-4">
              <label htmlFor="Email" className="text-[.9rem]">
                Email
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                className={`mt-1 w-[100%] text-[.8rem] outline-0  border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-3 px-5 ${
                  formik.touched.Email && formik.errors.Email ? 'border-red-500' : 'border-white'
                }`}
                placeholder="Enter your email address"
                {...formik.getFieldProps('Email')}
              />
              {formik.touched.Email && formik.errors.Email ? (
                <div className="text-red-500 text-[.8rem]">{formik.errors.Email}</div>
              ) : null}
            </div>
            <div className="w-[100%] md:col-span-1 col-span-4">
              <label htmlFor="Project Topic" className="text-[.9rem]">
                Project Topic
              </label>
              <input
                type="text"
                id="Project Topic"
                name="Project Topic"
               className={`mt-1 text-[.8rem] w-[100%] outline-0 border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-3 px-5 ${
                  formik.touched['Project Topic'] && formik.errors['Project Topic'] ? 'border-red-500' : 'border-white'
                }`}
                placeholder="What is your group project topic"
                {...formik.getFieldProps('Project Topic')}
              />
              {formik.touched['Project Topic'] && formik.errors['Project Topic'] ? (
                <div className="text-red-500 text-[.8rem]">{formik.errors['Project Topic']}</div>
              ) : null}
            </div>
            <div className='md:col-span-2 col-span-4 flex w-[100%] gap-x-3'>
            <div className="md:flex-[0.5] flex-[0.7]">
              <label htmlFor="category" className="text-[.9rem]">
                Category
              </label>
              <select
                id="category"
                name="category"
                placeholder="Select your category"
              className={`mt-1 w-[100%] outline-0  border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-2 px-3 ${
                  formik.touched.category && formik.errors.category ? 'border-red-500' : 'border-white'
                }`}
                {...formik.getFieldProps('category')}
              >
                <option value="none" className="bg-gray-500">
                  Select your category
                </option>
                <option value="1" className="bg-gray-500">
                  1
                </option>
                <option value="2" className="bg-gray-500">
                  2
                </option>
              </select>
              {formik.touched.category && formik.errors.category ? (
                <div className="text-red-500 text-[.8rem]">{formik.errors.category}</div>
              ) : null}
            </div>
            <div className="md:flex-[0.5] flex-[0.3]">
              <label htmlFor="size" className="text-[.9rem]">
                Group Size
              </label>
              <select
                id="size"
                name="size"
                placeholder="Select"
               className={`mt-1 w-[100%] outline-0  border-[1px] focus:border-[rgb(212,52,254)] rounded-md bg-[transparent] text-white py-2 px-5 ${
                  formik.touched.size && formik.errors.size ? 'border-red-500' : 'border-white'
                }`}
                {...formik.getFieldProps('size')}
              >
                <option value="none" className="bg-gray-500">
                  Select
                </option>
                <option value="1" className="bg-gray-500">
                  1
                </option>
                <option value="2" className="bg-gray-500">
                  2
                </option>
              </select>
              {formik.touched.size && formik.errors.size ? (
                <div className="text-red-500 text-[.8rem]">{formik.errors.size}</div>
              ) : null}
            </div>
          </div>
          </div>
          <h1 className="text-[.9rem] font-bold text-[rgb(201,41,189)] my-4" style={{ fontStyle: 'italic' }}>
            Please review your registration details before submitting
          </h1>
          <div className="flex gap-x-3 flex-wrap items-center">
            <input type="checkbox" className="cursor-pointer" ref={ref} onClick={toggleChecked} />
            {!isChecked ? (
              <div className="text-red-500 font-bold">Terms and condition is required</div>
            ) : (
              <div className="text-white font-bold text-[.8rem]">I agree with the terms and conditions and privacy policy</div>
            )}
          </div>
          <button
            type="submit"
            className="bg-btngradient w-[100%] text-white py-3 font-bold rounded-sm text-center mt-6"
          >
            Register
          </button>
        </form>
</div>
    </div>
  )
}

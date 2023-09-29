'use client'
import React from 'react'
import {FaInstagram} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import { Button, notification } from 'antd';
import {BiLogoFacebook} from "react-icons/bi"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from "@/components/Header/header.module.css"
import {FaLinkedinIn} from "react-icons/fa6"
export default function ContactForm() {
  const [api, contextHolder] = notification.useNotification()
  const openNotification = () => {
    api.open({
      message: 'Submitted',
      description: 'All details have been saved and submitted successfully',
      duration: 0,
    });
  };
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
    onSubmit: (values, { resetForm }) => {
      
      console.log('Form submitted with values:', values);

      fetch('https://formspree.io/f/xnqkvlgz', {
        method : 'POST',
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify(values)
      }).then((res)=> {
        console.log('Form submitted successfully', res);
        resetForm();
        openNotification()
      })
    },
  });
  return (
    <div className={`flex md:flex-row flex-col mb-[200px] md:gap-y-0 gap-y-[30px] ${styles.component} md:mt-[60px] mt-[20px]  px-[15px] mx-auto justify-center items-center`}>
 {contextHolder}
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

<div className='md:overflow-y-scroll md:justify-center flex  max-w-[500px] md:max-w-[800px] w-[100%] md:shadow-[0px 0px 10px rgba(0, 0, 0, 0.19)] flex-1  md:bg-[#ffffff08] md:rounded-xl md:pt-10 md:px-10 md:pb-10 text-white md:h-[550px]'>
<form className='text-white w-[100%]' onSubmit={formik.handleSubmit}>
          <h1 className='font-[900] text-[1.2rem] text-[rgb(212,52,254)]'>Questions or need assistance?</h1>
          <div className='font-[900] text-[1.2rem]  text-[rgb(212,52,254)]'>Let us know about it!</div>
          <div className='flex flex-col gap-y-3 mt-6 w-[100%]'>
            <div className="w-[100%]">
            <input
              type="text"
              className={`text-white w-[100%] bg-[transparent] ${formik.touched.firstName && formik.errors.firstName ? "border-red-500": null} focus:border-[rgb(212,52,254)] px-3 py-2 rounded-md outline-0 border-white border-[1px]`}
              placeholder='First Name'
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-xs">{formik.errors.firstName}</div>
            ) : null}
            </div>
            <div className="w-[100%]">
            <input
              type="text"
              className={`text-white w-[100%] bg-[transparent] ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "border-red-500": null} focus:border-[rgb(212,52,254)] px-3 py-2 rounded-md outline-0 border-white border-[1px]`}
              placeholder='Phone number'
              name="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-500 text-xs">{formik.errors.phoneNumber}</div>
            ) : null}
            </div>
            <div className="w-[100%]">
            <input
              type="email"
              className={`text-white w-[100%] bg-[transparent] ${formik.touched.email && formik.errors.email ? "border-red-500": null} focus:border-[rgb(212,52,254)] px-3 py-2 rounded-md outline-0 border-white border-[1px]`}
              placeholder='Mail'
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            ) : null}
            </div>
            <div className="w-[100%]">
            <textarea
              type="text"
              cols={5}
              style={{ height: '100px', resize: 'none' }}
              className={`text-white w-[100%] bg-[transparent] ${formik.touched.message && formik.errors.message ? "border-red-500": null} focus:border-[rgb(212,52,254)] px-3 py-2 rounded-md outline-0 border-white border-[1px]`}
              placeholder='Message'
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-xs">{formik.errors.message}</div>
            ) : null}
            </div>
          </div>
          <button
            className='flex mb-8 justify-center bg-btngradient rounded-sm text-white py-3 w-[150px] mt-12 mx-auto w-[100%]'
            type="submit"
          >
            Submit
          </button>
        </form>
</div>
    </div>
  )
}

'use client'
import React,{useState} from 'react'

export  function useNav() {
    const [openNav, setOpenNav] = useState(false)

    function openHandler() {
        setOpenNav(true)
    }

    function closeHandler() {
        setOpenNav(false)
    }
  return {
openNav : openNav,
openHandler: openHandler,
closeHandler:closeHandler
  }
}

'use client'
import React,{useState} from 'react'
export function useDropdown() {
    const [isOpen, setIsOpen] = useState([{
id:0, 
open : false, 
text : "Can I work on a project I started before the hackathon?",
subtext : "You can, if only the company name and brand is been promoted."
    }, {
        id:1, 
        open : false, 
        text : "What happens if I need help during the hackathon?",
        subtext : "You can, if only the company name and brand is been promoted."
    },{
        id:2, 
        open : false, 
        text : "What happens if I don't have an idea for a project?",
        subtext : "You can, if only the company name and brand is been promoted."
    },{
        id:3, 
        open : false, 
        text : "Can I join a team or do I have to come with one?",
        subtext :"Absolutely! Joining a team is like adding the secret spice to your hackathon recipe. Think of it as a culinary adventure where master chefs collaborate to create a gourmet dish. At our hackathon, we encourage collaboration and the fusion of unique talents and ideas.If you don't have a team yet, no worries! We'll play matchmaker and help you find the perfect teammates with complementary skills. Together, you'll embark on a gastronomic journey of innovation, and who knows, you might just whip up the winning recipe for success! 🍳🔥"
    },{
        id:4, 
        open : false, 
        text : "What happens after the hackathon ends",
        subtext : "You can, if only the company name and brand is been promoted."
    },{
        id:5, 
        open : false, 
        text : "Can I work on a project I started before the hackathon?",
        subtext : "You can, if only the company name and brand is been promoted."
    }])

    function toggleHandler(id) {
  const updatedItems = isOpen.map((item) => ({
    ...item,
    open: item.id === id ? !item.open : false, // Toggle selected item and close others
  }));

  setIsOpen(updatedItems);
  console.log(updatedItems)
} 

    

    return {
       isOpen : isOpen,
       toggleHandler: toggleHandler
    }
}
import React,{useEffect,useState} from 'react'
import {FaMoon} from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'



const Index = () => {

    const [darkMode,setDarkMode] = useState(true)

    useEffect(()=>{
        const theme = localStorage.getItem('theme')
        if(theme === 'dark') setDarkMode(true)
    },[])

    useEffect(()=>{
      if(darkMode){
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme','dark')
      }
      else{
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme','light')
      }
    },[darkMode])


  return (
    <div>
       <div 
           className="relative w-16 h-8 flex items-center 
          dark:bg-[#3F3F3F] bg-[#3F3F3F] cursor-pointer rounded-full p-1"
           onClick={()=>setDarkMode(!darkMode)}
           >
            <FaMoon className="text-white" size={18} />
            <div className="absolute bg-white 
              dark:bg-white w-6 h-6 rounded-full
               shadow-md transform transition-transform 
               duration-300" style={darkMode ? {left:'2px'} : {right:'2px'} }>
            </div>   
            <BsSunFill 
              className='ml-auto text-yellow-400' 
              size={18}
            />
       </div>
    </div>
  )
}

export default Index
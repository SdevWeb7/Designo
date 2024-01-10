import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export function Menu ({setBurgerOpen}) {

   useEffect(() => {
      const handleClick = () => {
         setBurgerOpen(false)
      }

      const timer = setTimeout(() => {
         document.addEventListener('click', handleClick)
      }, 100)
      return () => {
         clearTimeout(timer)
         document.removeEventListener('click', handleClick)
      }
   }, [])
   return (
      <motion.div initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}} className={'menu hidden max640:block'}>
         <div className="menu-nav">
            <div className={'flex flex-col ml-8'}>
               <NavLink to={'/company'}>OUR COMPANY</NavLink>
               <NavLink to={'/locations'}>LOCATIONS</NavLink>
               <NavLink to={'/contact'}>CONTACT</NavLink>
            </div>
         </div>
      </motion.div>
   )
}
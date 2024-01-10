import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { debounce } from "../utils/debounce.jsx";
import { Menu } from "./Menu.jsx";

export function Header () {
   const [burgerOpen, setBurgerOpen] = useState(false)
   const [scrolledBot, setScrolledBot] = useState(false)
   const [lastY, setLastY] = useState(0)

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 640) {
            setBurgerOpen(false)
         }
      }
      const debounceResize = debounce(handleResize, 300)

      window.addEventListener('resize', debounceResize)
      return () => {
         window.removeEventListener('resize', debounceResize)
      }
   }, [])

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > lastY && window.scrollY > 150 && !burgerOpen) {
            setScrolledBot(true)
         } else {
            setScrolledBot(false)
         }
         setLastY(window.scrollY)
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
         document.removeEventListener('scroll', handleScroll)
      }
   }, [scrollY])

   const burgerVariants =  {
      hidden: {transform: 'rotate(360deg)'},
      visible: {transform: 'rotate(0deg)'},
   }

   return (
      <>
      <header className={'header'} style={{opacity: scrolledBot ? 0 : 1, transform: scrolledBot ? 'translateY(-200px)' : 'translateY(0)'}}>
         <nav className={'navbar flex items-center justify-between'}>

            <Link to={'/'} className={'mr-auto logo'}>
               <img src="/public/images/shared/desktop/logo-dark.png" alt="a" />
            </Link>

            <div className="flex max640:hidden">
               <NavLink to={'/company'}>OUR COMPANY</NavLink>
               <NavLink to={'/locations'} className={'ml-[2.62rem]'}>LOCATIONS</NavLink>
               <NavLink to={'/contact'} className={'ml-[2.62rem]'}>CONTACT</NavLink>
            </div>

            <AnimatePresence>
               {burgerOpen ?
               <motion.img onClick={() =>setBurgerOpen(false)} src="/public/images/shared/mobile/icon-close.svg" alt="a" className={'cursor-pointer ml-auto'} variants={burgerVariants} animate={burgerOpen ? 'hidden' : 'visible'} /> :
               <motion.img src="/public/images/shared/mobile/icon-hamburger.svg" alt="a" className={'hidden max640:block cursor-pointer'} onClick={() => setBurgerOpen(true)} variants={burgerVariants} animate={burgerOpen ? 'hidden' : 'visible'} />}
            </AnimatePresence>
         </nav>

      </header>

         <AnimatePresence>
            {burgerOpen && <Menu setBurgerOpen={setBurgerOpen} />}
         </AnimatePresence>
      </>)
}

import { Link } from "react-router-dom";

export function Footer () {

   return (
   <div className="footer">

   <nav className={'footer-nav'}>
      <Link to={'/'}>
         <img src="/public/images/shared/desktop/logo-light.png" alt="a" />
      </Link>
      <hr className={'hidden max770:block w-full h-1'} />

      <div className="flex max770:flex-col max770:items-center">
         <Link to={'/company'} className={'mr-[2.62rem]'}>OUR COMPANY</Link>
         <Link to={'/locations'} className={'mr-[2.62rem]'}>LOCATIONS</Link>
         <Link to={'/contact'}>CONTACT</Link>
      </div>
   </nav>

   <hr className={'block max770:hidden'} />
   <div className={'flex justify-between max770:flex-col max770:items-center max770:mt-[20px] max770:text-center'}>
      <div className={'max770:-mt-2 max770:mb-[2rem]'}>
         <h1>Designo Central Office</h1>
         <p className={''}>3886 Wellington Street</p>
         <p className={''}>Toronto, Ontario M9C 3J5</p>
      </div>

      <div className="">
         <h1>Contact Us (Central Office)</h1>
         <h1>P : +1 253-863-8967</h1>
         <h1>M : contact@designo.co</h1>
      </div>

      <div className="reseaux flex">
         <img src="/public/images/shared/desktop/icon-facebook.svg" alt=""/>
         <img src="/public/images/shared/desktop/icon-youtube.svg" alt=""/>
         <img src="/public/images/shared/desktop/icon-twitter.svg" alt=""/>
         <img src="/public/images/shared/desktop/icon-pinterest.svg" alt=""/>
         <img src="/public/images/shared/desktop/icon-instagram.svg" alt=""/>
      </div>

      </div>
   </div>
   )
}
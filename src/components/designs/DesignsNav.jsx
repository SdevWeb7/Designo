import { Link, useLocation } from "react-router-dom";

export function DesignsNav () {
   const location = useLocation()

   return (
      <div className={'designs-nav'}>

         {location.pathname !== '/web-designs' &&
         <Link to={'/web-designs'} className={'web-designs'}>
            <h1>WEB DESIGN</h1>
            <p>VIEW PROJECTS <img src="/public/images/shared/desktop/icon-right-arrow.svg" alt="a" className={'inline'} /></p>
         </Link>}


         {location.pathname !== '/app-designs' &&
         <Link to={'/app-designs'} className={'app-designs'}>
            <h1>APP DESIGN</h1>
            <p>VIEW PROJECTS <img src="/public/images/shared/desktop/icon-right-arrow.svg" alt="a" className={'inline'} /></p>
         </Link>}


         {location.pathname !== '/graphic-designs' &&
            <Link to={'/graphic-designs'} className={'graphic-designs'}>
               <h1>GRAPHIC DESIGN</h1>
               <p>VIEW PROJECTS <img src="/public/images/shared/desktop/icon-right-arrow.svg" alt="a" className={'inline'} /></p>
            </Link>}

      </div>
   )
}
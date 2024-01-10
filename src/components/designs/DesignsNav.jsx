import { useLocation } from "react-router-dom";

export function DesignsNav () {
   const location = useLocation()

   return (
      <div className={'designs-nav'}>

         {location.pathname !== '/web-designs' &&
         <a href={'/web-designs'} className={'web-designs'}>
            <h1>WEB DESIGN</h1>
            <p>VIEW PROJECTS <img src="/public/images/shared/desktop/icon-right-arrow.svg" alt="a" className={'inline'} /></p>
         </a>}


         {location.pathname !== '/app-designs' &&
         <a href={'/app-designs'} className={'app-designs'}>
            <h1>APP DESIGN</h1>
            <p>VIEW PROJECTS <img src="/public/images/shared/desktop/icon-right-arrow.svg" alt="a" className={'inline'} /></p>
         </a>}


         {location.pathname !== '/graphic-designs' &&
            <a href={'/graphic-designs'} className={'graphic-designs'}>
               <h1>GRAPHIC DESIGN</h1>
               <p>VIEW PROJECTS <img src="/public/images/shared/desktop/icon-right-arrow.svg" alt="a" className={'inline'} /></p>
            </a>}

      </div>
   )
}
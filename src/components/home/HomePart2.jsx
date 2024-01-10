import { Link } from "react-router-dom";

export function HomePart2 () {

   return (
      <>
   <div className="bg-pattern1"></div>
   <div className="home2">

      <Link to={'/web-designs'} className={'webdesign'}>
            <h1>WEB DESIGN</h1>
            <p>VIEW PROJECTS <img src="/public/images/shared/desktop/icon-right-arrow.svg" alt="a" className={'inline'} /></p>
      </Link>

      <Link to={'/app-designs'} className="appdesign">
         <h1>APP DESIGN</h1>
         <p>VIEW PROJECTS <img src="/public/images/shared/desktop/icon-right-arrow.svg" alt="a" className={'inline'} /></p>

      </Link>

      <Link to={'/graphic-designs'} className="graphicdesign">
         <h1>GRAPHIC DESIGN</h1>
         <p>VIEW PROJECTS <img src="/public/images/shared/desktop/icon-right-arrow.svg" alt="a" className={'inline'} /></p>
      </Link>

   </div>
      </>
   )
}
import { Link } from "react-router-dom";

export function CompanyPart3 () {

   return (
      <>
      <div className={'company3'}>

         <div className={'canada'}>
            <img src="/public/images/shared/desktop/illustration-canada.svg" alt="a" />
            <h1>CANADA</h1>
            <Link to="/locations">
               <button className={'button-dark'}>SEE LOCATION</button>
            </Link>
         </div>


         <div className={'australia'}>
            <img src="/public/images/shared/desktop/illustration-australia.svg" alt="a" />
            <h1>AUSTRALIA</h1>
            <Link to="/locations">
               <button className={'button-dark'}>SEE LOCATION</button>
            </Link>
         </div>


         <div className={'united-kingdom'}>
            <img src="/public/images/shared/desktop/illustration-united-kingdom.svg" alt="a" />
            <h1>UNITED KINGDOM</h1>
            <Link to="/locations">
               <button className={'button-dark'}>SEE LOCATION</button>
            </Link>
         </div>

      </div>
      </>
   )
}

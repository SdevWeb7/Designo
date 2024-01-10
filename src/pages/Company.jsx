import { CompanyPart1 } from "../components/company/CompanyPart1.jsx";
import { HomePart4 } from "../components/home/HomePart4.jsx";
import { Footer } from "../components/Footer.jsx";
import { CompanyPart2 } from "../components/company/CompanyPart2.jsx";
import { CompanyPart3 } from "../components/company/CompanyPart3.jsx";
import { CompanyPart4 } from "../components/company/CompanyPart4.jsx";

export function Company () {

   return (
      <>
         <CompanyPart1 />
         <CompanyPart2 />
         <CompanyPart3 />
         <CompanyPart4 />

         <HomePart4 />
         <Footer />
      </>
   )
}
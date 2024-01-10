import { Link } from "react-router-dom";

export function HomePart1 () {

   return (
      <div className={'home1 flex justify-between'}>

         <div className="bg-orange"></div>
         <div className="circle1"></div>

         <div>
            <h1 className={'title1'}>Award-winning custom designs and digital branding solutions</h1>

            <p className={'paragraphe1'}>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>

            <Link to="/company"><button className={'button'}>LEARN MORE</button></Link>
         </div>

         <div className={'phone-img'}></div>

      </div>
   )
}
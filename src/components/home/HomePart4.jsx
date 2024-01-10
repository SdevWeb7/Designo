import { Link } from "react-router-dom";

export function HomePart4 () {

   return (
      <div className="home4">
         <div className="bg-orange"></div>

         <div className="circle1"></div>
         <div className="circle2"></div>
         <div className="circle3"></div>
         <div className="circle4"></div>
         <div className="circle5"></div>

         <div className={"container-home4"}>
            <h1>Let’s talk about your project</h1>
            <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
         </div>

         <Link to="/contact"><button className={'button'}>GET IN TOUCH</button></Link>

      </div>
)
}
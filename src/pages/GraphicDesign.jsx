import { HeaderDesigns } from "../components/designs/HeaderDesigns.jsx";
import { DesignsNav } from "../components/designs/DesignsNav.jsx";
import { HomePart4 } from "../components/home/HomePart4.jsx";
import { Footer } from "../components/Footer.jsx";

export function GraphicDesign () {

   return (
      <>
         <div className="pattern-designs"></div>

         <HeaderDesigns h1={'Graphic Design'} p={"We deliver eye-catching branding materials that are tailored to meet your business objectives."} />

         <div className={'container-cards'}>
            <div className={'designs-card'}>
               <img src="/public/images/graphic-design/desktop/image-change.jpg" alt="a" />
               <div>
                  <h1>TIM BROWN</h1>
                  <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
               </div>
            </div>

            <div className={'designs-card'}>
               <img src="/public/images/graphic-design/desktop/image-boxed-water.jpg" alt="a" />
               <div>
                  <h1>BOXED WATER</h1>
                  <p>A simple packaging concept made for Boxed Water</p>
               </div>
            </div>

            <div className={'designs-card'}>
               <img src="/public/images/graphic-design/desktop/image-science.jpg" alt="a" />
               <div>
                  <h1>SCIENCE!</h1>
                  <p>A poster made in collaboration with the Federal Art Project</p>
               </div>
            </div>

         </div>



         <DesignsNav />


         <HomePart4 />
         <Footer />
      </>
   )
}
import { HeaderDesigns } from "../components/designs/HeaderDesigns.jsx";
import { DesignsNav } from "../components/designs/DesignsNav.jsx";
import { HomePart4 } from "../components/home/HomePart4.jsx";
import { Footer } from "../components/Footer.jsx";

export function AppDesign () {

   return (
      <>
         <div className="pattern-designs"></div>

         <HeaderDesigns h1={'App Design'} p={"Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."} />

         <div className={'container-cards'}>
            <div className={'designs-card'}>
               <img src="/public/images/app-design/desktop/image-airfilter.jpg" alt="a" />
               <div>
                  <h1>AIRFILTER</h1>
                  <p>Solving the problem of poor indoor air quality by filtering the air</p>
               </div>
            </div>

            <div className={'designs-card'}>
               <img src="/public/images/app-design/desktop/image-eyecam.jpg" alt="a" />
               <div>
                  <h1>EYECAM</h1>
                  <p>Product that lets you edit your favorite photos and videos at any time</p>
               </div>
            </div>

            <div className={'designs-card'}>
               <img src="/public/images/app-design/desktop/image-faceit.jpg" alt="a" />
               <div>
                  <h1>FACEIT</h1>
                  <p>Get to meet your favorite internet superstar with the faceit app</p>
               </div>
            </div>

            <div className={'designs-card'}>
               <img src="/public/images/app-design/desktop/image-todo.jpg" alt="a" />
               <div>
                  <h1>TODO</h1>
                  <p>A todo app that features cloud sync with light and dark mode</p>
               </div>
            </div>

            <div className={'designs-card'}>
               <img src="/public/images/app-design/desktop/image-loopstudios.jpg" alt="a" />
               <div>
                  <h1>LOOPSTUDIOS</h1>
                  <p>A VR experience app made for Loopstudios</p>
               </div>
            </div>

         </div>


         <DesignsNav />


         <HomePart4 />
         <Footer />
      </>
   )
}
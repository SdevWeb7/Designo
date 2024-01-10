import { HeaderDesigns } from "../components/designs/HeaderDesigns.jsx";
import { HomePart4 } from "../components/home/HomePart4.jsx";
import { Footer } from "../components/Footer.jsx";
import { DesignsNav } from "../components/designs/DesignsNav.jsx";

export function WebDesign () {

   return (
      <>
      <div className="pattern-designs"></div>

      <HeaderDesigns h1={'Web Design'} p={"We build websites that serve as powerful marketing tools and bring memorable brand experiences."} />



      <div className="container-cards">
         <div className={'designs-card'}>
            <img src="/public/images/web-design/desktop/image-express.jpg" alt="a" />
            <div>
               <h1>EXPRESS</h1>
               <p>A multi-carrier shipping website for ecommerce businesses</p>
            </div>
         </div>

         <div className={'designs-card'}>
            <img src="/public/images/web-design/desktop/image-transfer.jpg" alt="a" />
            <div>
               <h1>TRANSFER</h1>
               <p>Site for low-cost money transfers and sending money within seconds</p>
            </div>
         </div>

         <div className={'designs-card'}>
            <img src="/public/images/web-design/desktop/image-photon.jpg" alt="a" />
            <div>
               <h1>PHOTON</h1>
               <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
            </div>
         </div>

         <div className={'designs-card'}>
            <img src="/public/images/web-design/desktop/image-builder.jpg" alt="a" />
            <div>
               <h1>BUILDER</h1>
               <p>Connects users with local contractors based on their location</p>
            </div>
         </div>

         <div className={'designs-card'}>
            <img src="/public/images/web-design/desktop/image-blogr.jpg" alt="a" />
            <div>
               <h1>BLOGR</h1>
               <p>Blogr is a platform for creating an online blog or publication</p>
            </div>
         </div>

         <div className={'designs-card'}>
            <img src="/public/images/web-design/desktop/image-camp.jpg" alt="a" />
            <div>
               <h1>CAMP</h1>
               <p>Get expert training in coding, data, design, and digital marketing</p>
            </div>
         </div>

      </div>

      <DesignsNav />


      <HomePart4 />
      <Footer />
      </>
   )
}

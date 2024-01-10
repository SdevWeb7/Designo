export function CompanyPart1 () {

   return (
      <div className={'company'}>

         <div className="bg-orange"></div>
         <div className="circle1"></div>

         <div>
            <h1>About Us</h1>
            <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
         </div>

         <img src="/public/images/about/desktop/image-about-hero.jpg" alt="a" className={'block max500:hidden'} />
         <img src="/public/images/about/mobile/image-about-hero.jpg" alt="a" className={'hidden max500:block'} />
      </div>
   )
}
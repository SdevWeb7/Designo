export function LocationsPart1 () {

   return (
      <div className={'locations'}>

         <div className="canada">
            <div className="circle1"></div>
            <div className="circle2"></div>

            <h1>Canada</h1>
            <div>
               <div className={'flex flex-col mr-[4rem] max700:mr-0 max700:mb-[1.5rem]'}>
                  <h2>Designo Central Office</h2>
                  <p>3886 Wellington Street</p>
                  <p>Toronto, Ontario M9C 3J5</p>
               </div>
               <div className={'flex flex-col'}>
                  <h2>Contact</h2>
                  <p>P : +1 253-863-8967</p>
                  <p>M : contact@designo.co</p>
               </div>

            </div>
         </div>
         <div className="canada-map">
            <img src="/public/images/locations/desktop/image-map-canada.png" alt="a" className={'block max1070:hidden'} />
            <img src="/public/images/locations/tablet/image-map-canada.png" alt="a" className={'hidden max1070:block'} />
         </div>


         <div className="australia">
            <div className="circle1"></div>
            <div className="circle2"></div>

            <h1>Australia</h1>
            <div>
               <div className={'flex flex-col mr-[4rem] max700:mr-0 max700:mb-[1.5rem]'}>
                  <h2>Designo AU Office</h2>
                  <p>19 Balonne Street</p>
                  <p>New South Wales 2443</p>
               </div>
               <div className={'flex flex-col'}>
                  <h2>Contact</h2>
                  <p>P : (02) 6720 9092</p>
                  <p>M : contact@designo.au</p>
               </div>
            </div>
         </div>
         <div className="australia-map">
            <img src="/public/images/locations/desktop/image-map-australia.png" alt="a" className={'block max1070:hidden'} />
            <img src="/public/images/locations/tablet/image-map-australia.png" alt="a" className={'hidden max1070:block'} />
         </div>


         <div className="united-kingdom">
            <div className="circle1"></div>
            <div className="circle2"></div>

            <h1>United Kingdom</h1>
            <div>
               <div className={'flex flex-col mr-[4rem] max700:mr-0 max700:mb-[1.5rem]'}>
                  <h2>Designo UK Office</h2>
                  <p>13 Colorado Way</p>
                  <p>Rhyd-y-fro SA8 9GA</p>
               </div>
               <div className={'flex flex-col'}>
                  <h2>Contact</h2>
                  <p>P : 078 3115 1400</p>
                  <p>M : contact@designo.uk</p>
               </div>

            </div>
         </div>
         <div className="united-kingdom-map">
            <img src="/public/images/locations/desktop/image-map-united-kingdom.png" alt="a" className={'block max1070:hidden'} />
            <img src="/public/images/locations/tablet/image-map-uk.png" alt="a" className={'hidden max1070:block'} />
         </div>
      </div>
   )
}
export function HeaderDesigns ({h1, p}) {

   return (
      <div className={'header-designs'}>
         <div className="bg-orange"></div>
         <div className={'circle1'}></div>
         <div className={'circle2'}></div>
         <div className={'circle3'}></div>
         <div className={'circle4'}></div>
         <div className={'circle5'}></div>

         <h1>{h1}</h1>
         <p>{p}</p>
      </div>
   )
}
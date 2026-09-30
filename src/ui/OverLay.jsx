import { useEffect } from "react";

const OverLay = ({children}) => {
   
   useEffect(()=>{
      // Disable scroll when mount
     document.body.style.overflow = 'hidden'
      
      return ()=> {
         // enable scroll when unmount
           document.body.style.overflow = 'scroll'
      }
   })
    return (  
       <>
        {/* overlay */}
          <div 
           style={{
                display: 'flex',
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                justifyContent: 'center',
                alignItems: 'center',
           }} className="bg-overlay-bg">
            {children}
          </div>
       </> 
    );
}
 
export default OverLay;
const SheduleCardContent = ({lebal, value }) => {
    return ( 
      
        
        <>
        <div className="flex gap-3">
              {/* icons */}
              <div className="bg-(--color-brand-400)  w-[50px] h-[50px] rounded-[100px]"><img className="w-[50px] h-[48px] p-[10px]" src="/src/assets/icon/icons8-laptop-coding-48.png" alt="" /></div>
              {/* content */}
              <div className="flex flex-col flex-nowrap gap-2">
                <h2 className="text-label">{lebal}</h2>
                <p>{value}</p>
              </div>
            </div>
        </>
     
     );
}
 
export default SheduleCardContent;
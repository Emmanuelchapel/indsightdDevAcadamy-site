const Button = ({Title = 'text',className , ...props}) => {
    return (  
        <>
         <div>
            <button style={{padding:'10px', cursor:'pointer'}} className={className} 
            {...props}>{Title}</button>
         </div>
        </>
    );
}
 
export default Button;
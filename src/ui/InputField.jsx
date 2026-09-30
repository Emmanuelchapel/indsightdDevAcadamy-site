const InputField = ({style , ...props}) => {
    return ( 
        <> 
           {/* input field */}
            <div className="p-[15px] bg-overlay-bg sm:w-[300px] rounded-[10px]">
                <input className="w-[100%] outline-0" style={style} type="text" {...props} required/>
            </div>
        </>
     );
}
 
export default InputField;
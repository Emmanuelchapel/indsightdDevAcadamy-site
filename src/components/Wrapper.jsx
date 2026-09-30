const Wrapper = ({children, padding = '5px', className}) => {
    return ( 
        <>
            {/* wrapper */}
            <div style={{
                padding:padding
            }} className={className}>{children}</div>
        </>
     );
}
 
export default Wrapper;
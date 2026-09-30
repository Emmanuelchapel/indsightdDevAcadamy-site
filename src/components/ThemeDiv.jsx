
const ThemeDiv = ({ className, children , style, ...props}) => {
    return (  
        <>
            <div style={{...style,}} className={`bg-(--color-bg)${className}`} {...props}>
                {children}
            </div>
        </>
    );
}
 
export default ThemeDiv;

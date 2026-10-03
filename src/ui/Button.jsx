const Button = ({ Title = "text", className = "", ...props }) => {
  return (
    <>
      <div>
        <button
          style={{ padding: "10px", cursor: "pointer" }}
          className={`cta-button ${className}`}
          {...props}
        >
          {Title}
        </button>
      </div>
    </>
  );
};

export default Button;

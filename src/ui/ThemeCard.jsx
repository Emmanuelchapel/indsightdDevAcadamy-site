const ThemeCard = ({ children,  cards, width, height }) => {
  console.log(cards);
  return (
    <div>
     
          {/* card */}
          <div
            style={{ width: width, height: height }}
            className="glass p-[30px] cursor-pointer"
          >{children}</div>
    </div>
  );
};

export default ThemeCard;

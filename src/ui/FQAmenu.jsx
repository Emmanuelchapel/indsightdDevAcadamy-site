import { useState } from "react";

const FQAmenu = ({ questions = [], width, height}) => {
  // state to holde a boolean value
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(null);
  // function to handle click
  const handleClick = (id) => {
    // find items
    const findItem = questions.find((ques) => ques.id === id);
    // check if item exsite
    if (findItem) setIndex((prevIndex) => (prevIndex === id ? null : id));
  };
  return (
    <>
      <div className="flex flex-col gap-[50px] ">
        {questions.map((qu, idx) => (
          <div key={idx}>
            {/* menu */}
            <div
              style={{
                width: `${width}px`,
                height: `${height}px`,
              }}
               className="w-[300px] sm:w-[500px]"
            >
              {/* container */}
              <div className="flex justify-between">
                {/* question */}
                <h1 className="font-bold">{qu.question}</h1>
                {/* drop down icon */}
                <div
                  className="cursor-pointer bg-accent p-2 rounded-[100px]"
                  onClick={() => {
                    handleClick(qu.id);
                  }}
                >
                  <img
                    src="/src/assets/icon/arrow-down.svg"
                    alt="drop down icon"
                  />
                </div>
              </div>
            </div>
            {/* Anwser drop down */}
            {index === qu.id && (
              <div
                style={{
                  width: `${width}px`,
                }}
                className="translation"
              >
                {/* container */}
                <div>
                  <p>{qu.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FQAmenu;

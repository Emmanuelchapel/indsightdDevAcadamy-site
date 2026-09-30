

import { useModal } from "../context/modalContext";



const Modal = ({
  width,
  height,
  modal,
  children,
  header,
  description,
}) => {
  const {closeModal } = useModal();

  return (
    <div
      className="rounded-[10px] glass w-[300px] h-[500px] sm:w-[600px] sm:h-[500px]"
      style={{ width, height }}
    >
      {/* Modal Header */}
      <div
        className={`p-[20px] flex justify-between`}
      >
        {/* Header Text */}
        <div className="flex flex-col w-[400px] gap-[4px]">
          <h2 className="font-family-worksans font-semibold text-[16px] leading-normal tracking-[0.5%]">
            {header}
          </h2>

          <p className="font-family-nunitosans text-text-tension font-normal text-[12px]">
            {description}
          </p>
        </div>

        {/* Cancel Button */}
        { modal ? (
            <img
             className="cursor-pointer"
             onClick={()=>closeModal('Register')}
              width="9px"
              height="9px"
              src="/src/assets/icon/Vector.png"
            />
        ) : null}
      </div>

      {/* Modal Content */}
      {children}
    </div>
  );
};

export default Modal;


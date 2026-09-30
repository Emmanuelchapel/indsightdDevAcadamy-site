
import { useEffect } from "react";


const Toast = ({
  message,
  type = "Success",
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 30000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-5 z-[9999] ">
      <div
        style={{
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
        }}
        className="
          relative
          flex
          w-[350px]
          min-h-[75px]
          rounded-[16px]
          bg-white
          px-[16px]
          py-[14px]
        "
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-[12px]
            top-[12px]
            flex
            h-[20px]
            w-[20px]
            items-center
            justify-center
            rounded-full
            hover:bg-gray-100
          "
        >
          <img
            src="/src/assets/icon/Vector.png"
            alt="Close"
            className="h-[7px] w-[7px]"
          />
        </button>

        {/* Toast content */}
        <div className="flex w-full items-center gap-[10px] pr-[20px]">
          {/* Status icon */}
          {type === "Success" ? (
            <img
              src="/src/assets/icon/success_icon.svg"
              alt="Success"
              className="h-[18px] w-[18px] shrink-0"
            />
          ) : (
            <img
              src="/src/assets/icon/error-icon.svg"
              alt="Error"
              className="h-[18px] w-[18px] shrink-0"
            />
          )}

          {/* Message */}
          <div className="min-w-0 flex-1">
            <p className="font-family-nunitosans text-[12px] font-normal leading-[18px] text-gray-800 break-words">
              {message}
            </p>
          </div>
        </div>

        {/* Progress bar */}
      </div>
    </div>
  );
};

export default Toast;

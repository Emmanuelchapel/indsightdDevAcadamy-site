import { FQAData } from "../data/data";
import FQAmenu from "../ui/FQAmenu";
import Button from "../ui/Button";
import { useModal } from "../context/ModalContext";

const FQASection = () => {
  // call the modal hook
  const { openModal } = useModal();
  return (
    <>
      <section id="FQA" className="p-[10px] sm:p-[100px] flex flex-col">
        {/* container */}
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[100px] justify-center items-center">
          {/* section heading */}
          <div className="flex justify-center items-center">
            <h2 className="text-h2">
              <b className="p-[15px] bg-(--color-brand-500) w-[50px] h-[50px] rounded-[100px]">
                A
              </b>
              LL the A's to your Q's
            </h2>
          </div>
          <FQAmenu questions={FQAData} />

          {/* container */}
          <div className="flex flex-col gap-[20px] justify-center items-center p-[16px]">
            {/* headline */}
            <h2 className="text-display text-black text-[40px]">
              Your First Line of code Starts Here
            </h2>
            {/* subheadline */}
            <p className="flex flex-wrap">
              Join the next cohort and start building real web project
            </p>
            <div className="flex gap-5 sm:translate-x[50px]">
              <Button
                onClick={() => openModal("Register")}
                Title="Register for the Bootcamp"
                className={
                  "bg-(--color-brand-500) rounded-[3px] font-semibold text-white w-[300px] translate-x-[-10px] "
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FQASection;

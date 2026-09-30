import ThemeCard from "../ui/ThemeCard";
import { scheduleCards } from "../data/data";
import SheduleCardContent from "../components/ScheduleCardContent";
import Button from "../ui/Button";
import { useModal } from "../context/modalContext";


const ScheduleSection = () => {
  // call in the modal hook
  const {openModal} =useModal()
  return (
    
    <>
      <section id="Schedule" className="p-[10px] sm:p-[100px] flex flex-col">
        {/* container */}
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[50px]">
          {/* section heading */}
          <div className="flex justify-center items-center">
            <h2 className="text-h2">
              <b className="p-[15px] bg-(--color-brand-500) w-[50px] h-[50px] rounded-[100px]">
                B
              </b>
              ootcamp Schedule
            </h2>
          </div>
          {/* container */}
          <div className="mt-[50px] flex flex-col md:flex-row items-center gap-[40px] justify-between">
            {/* Left - Image */}

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/src/assets/image/a2ce593e-5bbd-40e2-9172-456308334ea6.svg"
                alt="Web Development Bootcamp"
                className=" w-[500px] h-[500px] object-contain"
              />
            </div>

            {/* card container */}
            <div className=" flex flex-col sm:flex-wrap sm:flex-row gap-[12px]">
              {scheduleCards.map((cards, index) => (
                <ThemeCard key={index} width={"300px"}>
                  <SheduleCardContent lebal={cards.lebal} value={cards.value} />
                </ThemeCard>
              ))}

              <div className="flex gap-5 p-[50px]">
                <Button
                  onClick={()=>openModal("Register")}
                  Title="Reserve Your Spot"
                  className={
                    "bg-(--color-brand-500) rounded-[3px] font-semibold text-white w-[200px] translate-x-[-66px] sm:translate-x-0 "
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleSection;

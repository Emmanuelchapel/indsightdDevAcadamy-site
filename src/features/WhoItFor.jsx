import CourseCardContant from "../components/courseCardContent";
import { whoItFor} from "../data/data";
import ThemeCard from "../ui/ThemeCard";

const WhoItFor = () => {
  return (
    <>
      <section
        id="Course"
        className=" flex flex-nowrap p-[10px] sm:p-[100px] bg-gray-50 section-image"
      >
        {/* container */}
        <div className="max-w-[1200px] mx-auto  flex flex-col gap-[100px]">
          {/* section heading */}
          <div className="flex justify-center items-center">
            <h2 className="text-h2">
              <b className="p-[15px] bg-(--color-brand-500) w-[50px] h-[50px] rounded-[100px]">
                w
              </b>
              ho  Is This For?
            </h2>
          </div>
          <div className="flex flex-col flex-wrap sm:flex-row gap-4">
            {whoItFor.map((course, index) => (
           
              <ThemeCard key={index}width = "350px" height = "250px">
                <CourseCardContant
                  course={course.course}
                  description={course.description}
                />
              </ThemeCard>
           
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoItFor;

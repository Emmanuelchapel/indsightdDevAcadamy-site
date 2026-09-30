
const AboutSection = () => {
    return (
        <>
            <section id="About" className="p-[40px] sm:p-[100px]">
                {/* container */}
                <div className="max-w-[1200px] mx-auto">

                    {/* section heading */}
                    <div className="flex justify-center items-center">
                        <h2 className="text-h2">
                            <b className="p-[15px] bg-(--color-brand-500) w-[50px] h-[50px] rounded-[100px]">
                                A
                            </b>
                            bout us
                        </h2>
                    </div>

                    {/* About content */}
                    <div className="mt-[50px] flex flex-col md:flex-row items-center gap-[40px]">

                        {/* Left - Image */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src="/src/assets/image/a2ce593e-5bbd-40e2-9172-456308334ea6.svg"
                                alt="Web Development Bootcamp"
                                className=" w-[500px] h-[500px] object-contain"
                            />
                        </div>

                        {/* Right - About information */}
                        <div className="w-full md:w-1/2">
                            <p className="text-[16px] leading-[1.8] text-gray-700">
                                Our Web Development Bootcamp is designed for students
                                and beginners who want to learn how to build modern
                                websites and web applications through practical,
                                hands-on training.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;

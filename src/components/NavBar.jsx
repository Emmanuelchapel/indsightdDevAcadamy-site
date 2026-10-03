
import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [linkColor, setLinkColor] = useState(false);
  const [isopen, setIsopen] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Navbar background after scrolling
      setIsScroll(currentScrollY > 50);

      // Change link color after scrolling
      setLinkColor(currentScrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      {/* Navbar */}
      <div
        className={`
          fixed
          top-0
          left-0
          z-[9999]
          w-full
          h-[60px]
          px-[20px]
          transition-all
          duration-300
          p-4
          ${
            isScroll
              ? "bg-black shadow-md"
              : "bg-transparent"
          }
        `}
      >
        <Wrapper
          className="flex items-center justify-between sm:justify-around"
          padding="0px"
        >
          {/* Logo */}
          <div
            className={`
              text-[16px]
              font-semibold
              transition-colors
              duration-300
              text-white
            `}
          >
            Insight<b className="text-accent">Dev</b>Acadamy
          </div>

          {/* Desktop + Mobile Navigation */}
          <div
            className={`
              fixed
              top-0
              right-0
              z-[9999]
              h-screen
              w-[250px]
              bg-black
              shadow-2xl

              transform
              transition-transform
              duration-300

              ${
                isopen
                  ? "translate-x-0"
                  : "translate-x-full"
              }

              sm:static
              sm:h-auto
              sm:w-auto
              sm:bg-transparent
              sm:shadow-none
              sm:translate-x-0
            `}
          >
            {/* Close button - mobile only */}
            <div className="flex justify-end p-[20px] sm:hidden">
              <img
                onClick={() => setIsopen(false)}
                className="cursor-pointer"
                src="/src/assets/icon/Vector.png"
                width={20}
                height={20}
                alt="Close menu"
              />
            </div>

            {/* Links */}
            <ul
              className="
                flex
                flex-col
                gap-[30px]
                px-[40px]
                py-[30px]

                sm:flex-row
                sm:items-center
                sm:gap-[30px]
                sm:p-0
              "
            >
              <li>
                <a
                  className={`
                    transition-colors
                    duration-300
                    ${
                      isScroll
                        ? "text-white"
                        : "text-link"
                    }
                  `}
                  href="#Home"
                  onClick={() => setIsopen(false)}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className={`
                    transition-colors
                    duration-300
                    ${
                      isScroll
                        ? "text-white"
                        : "text-link"
                    }
                  `}
                  href="#About"
                  onClick={() => setIsopen(false)}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className={`
                    transition-colors
                    duration-300
                    ${
                      isScroll
                        ? "text-white"
                        : "text-link"
                    }
                  `}
                  href="#Schedule"
                  onClick={() => setIsopen(false)}
                >
                  Schedule
                </a>
              </li>

              <li>
                <a
                  className={`
                    transition-colors
                    duration-300
                    ${
                      isScroll
                        ? "text-white"
                        : "text-link"
                    }
                  `}
                  href="#FQA"
                  onClick={() => setIsopen(false)}
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  className={`
                    transition-colors
                    duration-300
                    ${
                      isScroll
                        ? "text-white"
                        : "text-link"
                    }
                  `}
                  href="#Contact"
                  onClick={() => setIsopen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <img
            onClick={() => setIsopen(true)}
            className="cursor-pointer sm:hidden"
            src="/src/assets/icon/sort.svg"
            width={40}
            height={40}
            alt="Open menu"
          />
        </Wrapper>
      </div>
    </nav>
  );
};

export default NavBar;

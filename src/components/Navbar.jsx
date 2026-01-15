import { useState } from "react";
const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};
function Navbar() {
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* --- MOBILE MENU OVERLAY & SIDEBAR (Moved Outside) --- */}

      {/* 1. Overlay: Raised to z-30 to cover the z-20 Navbar */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* 2. Sidebar: Raised to z-40 so it sits on top of the Overlay */}
      <div
        className={` bg-card  fixed top-0 right-0 z-40 h-screen w-64 
          text-center transform transition-transform duration-300 ease-in-out font-medium text-sm 
          ${open ? "translate-x-0" : "translate-x-full"}
          flex flex-col py-16 px-6 md:hidden`}
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 15 15"
          className="w-8 h-8 text-foreground mx-auto mb-1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
            fill="currentColor"
          ></path>
        </svg>

        <ul className="flex flex-col gap-4">
          <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
          </li>
          <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
            <a href="#techstack" onClick={() => setOpen(false)}>Tech Stacks</a>
          </li>
          <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
            <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          </li>
          <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
            <a href="#education" onClick={() => setOpen(false)}>Education</a>
          </li>

          {/* DROPDOWN ITEM */}
          <li>
            <button
              type="button" // ⚠️ IMPORTANT
              onClick={() => setNavOpen((prev) => !prev)}
              className="cursor-pointer flex w-full items-center justify-center text-muted-foreground hover:text-foreground"
            >
              Portfolio
              <span
                className={`ml-2 transition-transform ${
                  navOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                navOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="mt-2 flex flex-col gap-2">
                <li className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  <a href="#achievements" onClick={() => setOpen(false)} >
                    Achievements
                  </a>
                </li>
                <li className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  <a href="#projects" onClick={() => setOpen(false)} >
                    Projects
                  </a>
                </li>
                {/* <li className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  <a href="#notebook" onClick={() => setOpen(false)} >
                    Notebook
                  </a>
                </li>
                <li className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  <a href="#articles" onClick={() => setOpen(false)} >
                    Articles
                  </a>
                </li> */}
                <li className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  <a href="#researchpaper" onClick={() => setOpen(false)} >
                    Research paper
                  </a>
                </li>
                
              </ul>
            </div>
          </li>

          <li className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
            <a href="#contact" onClick={() => setOpen(false)} >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* 3. Close Button: Raised to z-50 and changed to 'fixed' */}
      <button
        onClick={() => setOpen(false)}
        className={`${
          open ? "block" : "hidden"
        } cursor-pointer fixed top-4 right-4 z-50 p-1 px-3
          rounded-md  transition md:hidden font-bold text-xl`}
      >
        x
      </button>

      <div className="sticky top-0 z-20 backdrop-blur-xs ">
        <div className="  mx-auto py-4 px-6 max-w-5xl font-medium text-sm  ">
          <div className="flex justify-between items-center">
            <div className="flex  items-center"> 

            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              className="w-7 h-7 mr-2 "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
                fill="currentColor"
              ></path>
            </svg>
            <ul className=" hidden  md:flex">
              <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                <a href="#about">About</a>
              </li>
              <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                <a href="#techstack">Tech Stacks</a>
              </li>
              <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                <a href="#experience">Experience</a>
              </li>
              <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                <a href="#education">Education</a>
              </li>
              <li className="relative group">
                <button className="link-hover flex items-center text-sm font-medium text-muted-foreground hover:text-foreground gap-1 px-2.5 cursor-pointer  transition-colors">
                  Portfolios
                  <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor"></path></svg>
                </button>
                <ul
                  className=" bg-background border border-border rounded-md shadow-lg py-1  text-card-foreground absolute left-0 invisible group-hover:opacity-100 group-hover:visible
               transition-all duration-200"
                >
                  <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                    <a href="#achievements" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent">Achievements</a>
                  </li>
                  <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                    <a href="#projects" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent">Projects</a>
                  </li>
                  {/* <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                    <a href="#notebook" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent">Notebook</a>
                  </li>
                  <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                    <a href="#articles" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent">Articles</a>
                  </li> */}
                  <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                    <a href="#researchpaper" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent">Research Paper</a>
                  </li>
                </ul>
              </li>
              <li className="px-2.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            </div>
            <div className=" flex flex-col ">
              <div className="flex ">
                <button
                  className=" rounded-md  transition"
                  onClick={toggleTheme}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 15 15"
                    className="w-7 h-7  cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className="p-2 md:hidden rounded-md  transition">
                  <svg
                    onClick={() => setOpen(true)}
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 15 15"
                    className=" w-7 h-7  md:hidden block   "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          class="shrink-0 bg-border h-[1px] w-full"
        ></div>
      </div>
    </>
  );
}

export default Navbar;

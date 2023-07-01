import { useState } from "react";

import Link from "next/link";

export const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <section
      className="fixed bg-gray-900/30 backdrop-blur-sm w-full px-6 antialiased z-30"
    >
      <div className="mx-auto max-w-7xl">
        <nav
          className="relative z-50 h-24 select-none"
        >
          <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
            <div className="flex items-center justify-start w-1/4 h-full pr-4">
              <Link href="#_" className="inline-block py-4 md:py-0">
                <span className="p-1 text-3xl font-black leading-none text-gray-200">
                  <span  className="text-yellow-400">M</span>enufy 
                </span>
              </Link>
            </div>

            <div
              className={`${isMenuOpen ? 'fixed flex' : 'hidden'} top-0 left-0 items-start w-full h-full p-4 text-sm md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex`}
            >
              <div className="flex-col w-full h-auto overflow-hidden bg-gray-900 rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                <Link
                  href="#hero"
                  className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-200 md:hidden"
                >
                  tails<span className="text-yellow-400">.</span>
                </Link>
                <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                  <Link
                    href="#features"
                    className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-gray-200 md:ml-0 md:w-auto md:px-0 md:mx-2 hover:text-yellow-400 lg:mx-3 md:text-center"
                  >
                    Features
                  </Link>
                  <Link
                    href="#download"
                    className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-200 md:w-auto md:px-0 md:mx-2 hover:text-yellow-400 lg:mx-3 md:text-center"
                  >
                    Download
                  </Link>
                  <Link
                    href="#integration"
                    className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-200 md:w-auto md:px-0 md:mx-2 hover:text-yellow-400 lg:mx-3 md:text-center"
                  >
                    Integration
                  </Link>
                  <Link
                    href="#pricing"
                    className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-200 md:w-auto md:px-0 md:mx-2 hover:text-yellow-400 lg:mx-3 md:text-center"
                  >
                    Pricing
                  </Link>
                </div>
                <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                  <Link
                    href="#"
                    className="w-full px-3 py-2 mr-0 text-gray-200 md:mr-2 lg:mr-3 md:w-auto"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="#_"
                    className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-yellow-400 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-yellow-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-yellow-400"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-gray-800 rounded-full cursor-pointer md:hidden hover:bg-gray-900"
            >
              {!isMenuOpen ?
                <svg
                  className="w-6 h-6 text-gray-200"
                  x-show={"!showMenu"}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  x-cloak=""
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                :
                <svg
                  className="w-6 h-6 text-gray-200"
                  x-show="showMenu"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  x-cloak=""
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              }
            </div>
          </div>
        </nav>
      </div>
    </section>


  );
};


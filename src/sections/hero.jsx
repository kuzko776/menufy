import Image from "next/image";

import Link from "next/link";

import phone1 from "../icons/phone1.png"
import phone2 from "../icons/phone2.png"

export const Hero = () => {
    return (
      <div id="hero" className="px-4 pt-32 py-20  md:px-24 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center justify-between mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-cyan-400 text-cyan-900 rounded-full">Brand new</p>
              </div>
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-200 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
              It's not just food, it's an{" "}
                <span className="inline-block text-yellow-500">Experience.</span>
              </h2>
              <p className="my-6 text-lg text-gray-400">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </Link>
              <Link href="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src={"https://kitwind.io/assets/kometa/google-play.png"} className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-2/5">
            <Image className="object-cover" src={phone2} height={800} alt="Mobile"/>
            </div>
            <div className="w-5/12 -ml-16 lg:-ml-32">
            <Image className="object-cover" src={phone1} height={800} alt="Mobile"/>
            </div>
          </div>
        </div>
        <Link
          href="#features"
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 mx-auto text-yellow-600 hover:text-yellow-400 hover:border-yellow-600 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </Link>
      </div>
    );
  };
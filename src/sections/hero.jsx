import Image from "next/image";

import Link from "next/link";

import phone1 from "../icons/phone1.png"
import phone2 from "../icons/phone2.png"



export const Hero = () => {
  return (

    // <section class="bg-gray-900 h-screen">
    //   <div class=" px-4 pt-32 py-20  md:px-24 lg:px-8 lg:py-32">
    //     <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 ">
    //       <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{"It's not just food, it's an "}<span className="inline-block text-yellow-500">Experience.</span></h1>
    //       <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{"From checkout to delivery compliance, restaurants around the world use Menufy to simplify their restaurant managment."}</p>
    //       <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
    //         Get started
    //         <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    //       </a>
    //       <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
    //         Speak to Sales
    //       </a>
    //     </div>
    //     <div className="flex items-center justify-center lg:w-1/2">
    //       <div className="w-2/5">
    //         <Image className="object-cover" src={phone2} height={800} alt="Mobile" />
    //       </div>
    //       <div className="w-5/12 -ml-16 lg:-ml-32">
    //         <Image className="object-cover" src={phone1} height={800} alt="Mobile" />
    //       </div>
    //     </div>F
    //   </div>
    // </section>

    <div id="hero" className="bg-gray-900 px-4 pt-32 py-20  md:px-24 lg:px-8 lg:py-32">
      <div className="flex flex-col items-center justify-between mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-200 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
              {"It's not just food, it's an "}
              <span className="inline-block text-yellow-500">Experience.</span>
            </h2>
            <p className="my-6 text-lg text-gray-400">
            {"From checkout to delivery compliance, restaurants around the world use Menufy to simplify their restaurant managment."}</p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <Image className="object-cover" src={phone2} height={800} alt="Mobile" />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <Image className="object-cover" src={phone1} height={800} alt="Mobile" />
          </div>
        </div>
      </div>
    </div>
  );
};
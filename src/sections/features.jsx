import Image from "next/image";

import ic_flexibility from "../icons/ic_flexibility.svg"
import ic_components from "../icons/ic_components.svg"
import ic_multi_layout from "../icons/ic_multi_layout.svg"
import ic_robust_workflow from "../icons/ic_robust_workflow.svg"
import ic_user_friendly from "../icons/ic_user_friendly.svg"
import ic_well_organised from "../icons/ic_well_organised.svg"

// export const Features = () => {
//   return (
//     <section id="features" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
//         <div className="p-8">
//           <div className="max-w-md text-center">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
//               <Image src={ic_flexibility} height={72} width={72} />
//             </div>
//             <h6 className="mb-2 font-semibold leading-5">Flexibility</h6>
//             <p className="mb-3 text-sm text-gray-400">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//               accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
//             </p>
//           </div>
//         </div>
//         <div className="p-8">
//           <div className="max-w-md text-center">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
//               <Image src={ic_user_friendly} height={72} width={72} />
//             </div>
//             <h6 className="mb-2 font-semibold leading-5">Friendly User Interface</h6>
//             <p className="mb-3 text-sm text-gray-400">
//               Storage shed, troughs feed bale manure, is garden wheat oats at
//               augers. Bulls at rose garden cucumbers mice sunflower wheat in
//               pig.
//             </p>
//           </div>
//         </div>
//         <div className="p-8">
//           <div className="max-w-md text-center">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
//               <Image src={ic_well_organised} height={72} width={72} />
//             </div>
//             <h6 className="mb-2 font-semibold leading-5">Well organised</h6>
//             <p className="mb-3 text-sm text-gray-400">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//               accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
//             </p>
//           </div>
//         </div>
//         <div className="p-8">
//           <div className="max-w-md text-center">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
//               <Image src={ic_components} height={72} width={72} />         </div>
//             <h6 className="mb-2 font-semibold leading-5">Better components</h6>
//             <p className="mb-3 text-sm text-gray-400">
//               Storage shed, troughs feed bale manure, is garden wheat oats at
//               augers. Bulls at rose garden cucumbers mice sunflower wheat in
//               pig.
//             </p>
//           </div>
//         </div>
//         <div className="p-8">
//           <div className="max-w-md text-center">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
//               <Image src={ic_multi_layout} height={72} width={72} />         </div>
//             <h6 className="mb-2 font-semibold leading-5">Multiple layout</h6>
//             <p className="mb-3 text-sm text-gray-400">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//               accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
//             </p>
//           </div>
//         </div>
//         <div className="p-8">
//           <div className="max-w-md text-center">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
//               <Image src={ic_robust_workflow} height={72} width={72} />         </div>
//             <h6 className="mb-2 font-semibold leading-5">Robust workflow</h6>
//             <p className="mb-3 text-sm text-gray-400">
//               Storage shed, troughs feed bale manure, is garden wheat oats at
//               augers. Bulls at rose garden cucumbers mice sunflower wheat in
//               pig.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export const Features = () => (
  <section id="features" className="text-gray-400 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex items-center lg:w-4/5  mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-900 text-cyan-500 flex-shrink-0">
          <Image src={ic_flexibility} height={72} width={72} />
        </div>
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-200 text-lg title-font font-medium mb-2">
            Flexibility
          </h2>
          <p className="leading-relaxed text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a className="mt-3 text-cyan-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex items-center lg:w-4/5  mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-200 text-lg title-font font-medium mb-2">
            Friendly user interface
          </h2>
          <p className="leading-relaxed text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a className="mt-3 text-cyan-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-gray-900 text-cyan-500 flex-shrink-0">
          <Image src={ic_user_friendly} height={72} width={72} />
        </div>
      </div>
      <div className="flex items-center lg:w-4/5  mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-900 text-cyan-500 flex-shrink-0">
          <Image src={ic_well_organised} height={72} width={72} />
        </div>
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-200 text-lg title-font font-medium mb-2">
            Well Organaised
          </h2>
          <p className="leading-relaxed text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a className="mt-3 text-cyan-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex items-center lg:w-4/5  mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-200 text-lg title-font font-medium mb-2">
            Better components
          </h2>
          <p className="leading-relaxed text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a className="mt-3 text-cyan-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-gray-900 text-cyan-500 flex-shrink-0">
          <Image src={ic_components} height={72} width={72} />
        </div>
      </div>
      <div className="flex items-center lg:w-4/5  mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-900 text-cyan-500 flex-shrink-0">
          <Image src={ic_multi_layout} height={72} width={72} />
        </div>
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-200 text-lg title-font font-medium mb-2">
            Multiple layout
          </h2>
          <p className="leading-relaxed text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a className="mt-3 text-cyan-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex items-center lg:w-4/5  mx-auto sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-200 text-lg title-font font-medium mb-2">
            Robust workflow
          </h2>
          <p className="leading-relaxed text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a className="mt-3 text-cyan-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-gray-900 text-cyan-500 flex-shrink-0">
          <Image src={ic_robust_workflow} height={72} width={72} />
        </div>
      </div>
    </div>
  </section>
)

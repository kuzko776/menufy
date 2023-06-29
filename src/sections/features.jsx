import Image from "next/image";

import ic_flexibility from "../icons/ic_flexibility.svg"
import ic_components from "../icons/ic_components.svg"
import ic_multi_layout from "../icons/ic_multi_layout.svg"
import ic_robust_workflow from "../icons/ic_robust_workflow.svg"
import ic_user_friendly from "../icons/ic_user_friendly.svg"
import ic_well_organised from "../icons/ic_well_organised.svg"

export const Features = () => {
    return (
      <section id="features" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <Image src={ic_flexibility  } height={180} width={180} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Flexibility</h6>
              <p className="mb-3 text-sm text-gray-400">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
              <Image src={ic_user_friendly  } height={180} width={180} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Friendly User Interface</h6>
              <p className="mb-3 text-sm text-gray-400">
                Storage shed, troughs feed bale manure, is garden wheat oats at
                augers. Bulls at rose garden cucumbers mice sunflower wheat in
                pig.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <Image src={ic_well_organised  } height={180} width={180} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Well organised</h6>
              <p className="mb-3 text-sm text-gray-400">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <Image src={ic_components  } height={180} width={180} />         </div>
              <h6 className="mb-2 font-semibold leading-5">Better components</h6>
              <p className="mb-3 text-sm text-gray-400">
                Storage shed, troughs feed bale manure, is garden wheat oats at
                augers. Bulls at rose garden cucumbers mice sunflower wheat in
                pig.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <Image src={ic_multi_layout  } height={180} width={180} />         </div>
              <h6 className="mb-2 font-semibold leading-5">Multiple layout</h6>
              <p className="mb-3 text-sm text-gray-400">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <Image src={ic_robust_workflow  } height={180} width={180} />         </div>
              <h6 className="mb-2 font-semibold leading-5">Robust workflow</h6>
              <p className="mb-3 text-sm text-gray-400">
                Storage shed, troughs feed bale manure, is garden wheat oats at
                augers. Bulls at rose garden cucumbers mice sunflower wheat in
                pig.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
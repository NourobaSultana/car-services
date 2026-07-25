import Image from "next/image";
import React from "react";
import group1 from "../../../public/assets/icon/Group1.png";
import group2 from "../../../public/assets/icon/Group2.png";
import group3 from "../../../public/assets/icon/Group3.png";
const ContactSection = () => {
  return (
    <div className="bg-[#151515] rounded-xl mt-16 lg:mt-32 ">
      <div className="px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-[72px] lg:py-[95px]">
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap  md:items-center items-center justify-between gap-8 lg:gap-15 text-white">
          {/* Item 1 */}
          <div className="flex items-center gap-4 lg:gap-5">
            <Image
              src={group1}
              alt="Clock"
              width={41}
              height={41}
              className="w-8 h-8 md:w-9 md:h-9 lg:w-[40px] lg:h-[40px]"
            />

            <div>
              <p className="text-sm md:text-[15px] lg:text-[16px] font-medium">
                We are open monday-friday
              </p>

              <p className="text-lg md:text-[22px] lg:text-[25px] font-bold">
                7:00 am - 9:00 pm
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 lg:gap-5">
            <Image
              src={group2}
              alt="Phone"
              width={41}
              height={41}
              className="w-8 h-8 md:w-9 md:h-9 lg:w-[40px] lg:h-[40px]"
            />

            <div>
              <p className="text-sm md:text-[15px] lg:text-[16px] font-medium">
                Have a question?
              </p>

              <p className="text-lg md:text-[22px] lg:text-[25px] font-bold">
                +2546 251 2658
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 lg:gap-5">
            <Image
              src={group3}
              alt="Location"
              width={41}
              height={41}
              className="w-8 h-8 md:w-9 md:h-9 lg:w-[40px] lg:h-[40px]"
            />

            <div>
              <p className="text-sm md:text-[15px] lg:text-[16px] font-medium">
                Need a repair? our address
              </p>

              <p className="text-lg md:text-[22px] lg:text-[25px] font-bold">
                Liza Street, New York
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

import React from "react";
import Image from "next/image";

function SuccessStories() {
  return (
    <section className="mx-auto max-w-7xl w-full items-center flex flex-col gap-12">
      <div className="text-center">
        <h4 className="text-[2.2rem]">Success Stories</h4>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div className="bg-[#E5E7EB] px-6 py-8 rounded-md bg-opacity-40 flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/assets/icons/guy.svg"}
              height={30}
              width={34}
              alt="Book icon"
            />
            <div className="flex flex-col">
              <h6 className="text-sm font-semibold">John K.</h6>
              <span className="text-sm">Passed First Try</span>
            </div>
          </div>
          <p className="text-sm">
            "Ikizamini helped me pass my driving test on the first attempt. The
            practice tests were incredibly helpful."
          </p>
        </div>
        <div className="bg-[#E5E7EB] px-6 py-8 rounded-md bg-opacity-40 flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/assets/icons/girl.svg"}
              height={30}
              width={34}
              alt="Book icon"
            />
            <div className="flex flex-col">
              <h6 className="text-sm font-semibold">Sarah M.</h6>
              <span className="text-sm">Perfect Scrore</span>
            </div>
          </div>
          <p className="text-sm">
            "The study materials are comprehensive and easy to understand. I
            scored 100% on my theory test!"
          </p>
        </div>
        <div className="bg-[#E5E7EB] px-6 py-8 rounded-md bg-opacity-40 flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/assets/icons/girl.svg"}
              height={30}
              width={34}
              alt="Book icon"
            />
            <div className="flex flex-col">
              <h6 className="text-sm font-semibold">Meagan G.</h6>
              <span className="text-sm">Confident Driver</span>
            </div>
          </div>
          <p className="text-sm">
            "The platform built my confidence through regular practice. Highly
            recommended!"
          </p>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;

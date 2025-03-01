import React from "react";
import Image from "next/image";

function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl w-full items-center flex flex-col gap-12">
      <div className="text-center">
        <h4 className="text-[2.2rem]">Why Choose Ikizamini</h4>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div className="bg-[#E5E7EB] px-6 py-8 rounded-md bg-opacity-40 flex flex-col gap-4">
          <div>
            <Image
              src={"/assets/icons/book.svg"}
              height={30}
              width={34}
              alt="Book icon"
            />
          </div>
          <span className="font-semibold">Comprehensive Study Material</span>
          <p className="text-sm">
            Access detailed lessons, video tutorials, and practice questions.
          </p>
        </div>
        <div className="bg-[#E5E7EB] px-6 py-8 rounded-md bg-opacity-40 flex flex-col gap-4">
          <div>
            <Image
              src={"/assets/icons/rating.svg"}
              height={30}
              width={34}
              alt="Book icon"
            />
          </div>
          <span className="font-semibold">Real Exam Simulation</span>
          <p className="text-sm">
            Experience tests that mirror the actual driving license exam.
          </p>
        </div>
        <div className="bg-[#E5E7EB] px-6 py-8 rounded-md bg-opacity-40 flex flex-col gap-4">
          <div>
            <Image
              src={"/assets/icons/chart.svg"}
              height={30}
              width={34}
              alt="Book icon"
            />
          </div>
          <span className="font-semibold">Progress Tracking</span>
          <p className="text-sm">
            Monitor your improvement with detailed performance analytics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

import React from "react";
import Image from "next/image";

function StartJourney() {
  return (
    <section className="mx-auto max-w-7xl w-full items-center flex flex-col gap-12">
      <div className="items-center flex flex-col gap-6">
        <h4 className="text-[2.2rem]">Ready to Start Your Journey?</h4>
        <p className="text-md">
          Join thousands of successful drivers who started with Ikizamni
        </p>
        <a
          href="#"
          className="rounded-md w-fit bg-primary-gray px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  );
}

export default StartJourney;

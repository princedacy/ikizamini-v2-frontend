"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  //   const { width } = useWindowSize();
  //   if (width! <= 1023) {
  //     return <MobileNavbar />;
  //   }
  return (
    <div className="w-screen bg-white py-6 fixed">
      <section className="mx-auto max-w-7xl w-full items-center flex flex-col gap-12">
        <div className="fixed left-0 flex w-full flex-row items-center justify-between lg:static lg:h-auto lg:bg-none">
          <div className="flex flex-row gap-2 items-center">
            <Link
              className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
              href="/"
            >
              <Image
                src="/assets/icons/car.svg"
                alt="Ikizamini Logo"
                width={30}
                height={24}
              />
            </Link>
            <span>Ikizamini</span>
          </div>
          <div>
            <ul className="flex flex-row gap-12 text-sm">
              <Link href="">Home</Link>
              <Link href="">Practice tests</Link>
              <Link href="">Study Materials</Link>
              <Link href="">Pricing</Link>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-gray hover:bg-primary-gray focus-visible:outline hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-gray"
              >
                Login
              </a>
              <a
                href="#"
                className="rounded-md bg-primary-gray px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;

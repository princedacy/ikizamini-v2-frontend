import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

function Footer() {
  return (
    <div className="w-screen bg-secondary-gray py-16">
      <div className="row-start-3 flex gap-12 flex-wrap max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-6 items-left">
            <div className="flex flex-row gap-2">
              <Link
                className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
                href="/"
              >
                <Image
                  src="/assets/icons/white-car.svg"
                  alt="Ikizamini Logo"
                  width={30}
                  height={24}
                />
              </Link>
              <span className="text-white font-semibold text-lg">
                Ikizamini
              </span>
            </div>
            <p className="text-light-gray">
              Your trusted partner for driving license exam preparation.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:ml-32">
            <h6 className="text-white text-lg font-semibold">Quick Links</h6>
            <div className="flex flex-col gap-4 text-light-gray">
              <Link href="">Home</Link>
              <Link href="">About Us</Link>
              <Link href="">Pricing</Link>
              <Link href="">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:ml-32">
            <h6 className="text-white text-lg font-semibold">Resources</h6>
            <div className="flex flex-col gap-4 text-light-gray">
              <Link href="">Study Guide</Link>
              <Link href="">Practice Tests</Link>
              <Link href="">Road Signs</Link>
              <Link href="">FAQ</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:ml-32">
            <h6 className="text-white text-lg font-semibold">Follow Us</h6>
            <div className="flex flex-row gap-4 text-light-gray items-center">
              <Link href="">
                <Image
                  src={"/assets/icons/facebook.svg"}
                  height={16}
                  width={16}
                  alt="Facebook"
                />
              </Link>
              <Link href="">
                <Image
                  src={"/assets/icons/x.svg"}
                  height={16}
                  width={16}
                  alt="Facebook"
                />
              </Link>
              <Link href="">
                <Image
                  src={"/assets/icons/instagram.svg"}
                  height={16}
                  width={16}
                  alt="Facebook"
                />
              </Link>
              <Link href="">
                <Image
                  src={"/assets/icons/linkedin.svg"}
                  height={16}
                  width={16}
                  alt="Facebook"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-[#374151]">
          <p className="text-light-gray text-center mt-10">
            &copy; {moment().format("YYYY")} Ikizamini. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import Image from "next/image";
import WhyChooseUs from "./components/WhyChoose";
import SuccessStories from "./components/SuccessStories";
import StartJourney from "./components/StartJourney";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-inter)] bg-white">
      <main className="flex flex-col gap-32 row-start-2 items-center sm:items-start">
        <div className="w-screen bg-[#F9FAFB] mx-auto py-6">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:py-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <h1 className="mt-10 text-2xl font-semibold tracking-tight text-primary-gray sm:text-5xl">
                Pass Your Driving Test with Confidence
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-gary">
                Practice unlimited mock tests, learn road signs, and master
                traffic rules with our comprehensive online platform.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-primary-gray px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                >
                  Start free Trial
                </a>
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm border  font-semibold text-primary-gray shadow-sm hover:bg-primary-gray focus-visible:outline hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-gray"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <Image
                  src="/assets/images/image.svg"
                  alt="App screenshot"
                  width="2432"
                  height="1442"
                  className="w-full rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <WhyChooseUs />
        <div className="w-screen bg-[#F9FAFB] py-16">
          <SuccessStories />
        </div>
        <StartJourney />
      </main>
    </div>
  );
}

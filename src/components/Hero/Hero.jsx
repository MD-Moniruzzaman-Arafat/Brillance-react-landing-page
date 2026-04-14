import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Pricing from '../Pricing/Pricing';
import Social from '../Social/Social';

import img2 from '../../assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg';
import img3 from '../../assets/images/services/data-visualization-dashboard-with-interactive-char.jpg';
import img1 from '../../assets/images/services/plan-your-schedules.jpeg';

export default function Hero() {
  return (
    <>
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
        <div class="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div class="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* <!-- Main Heading --> */}
            <div class="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 px-2 sm:px-4 md:px-0 font-serif">
              Effortless custom contract
              <br />
              billing by Brillance
            </div>
            {/* <!-- Subheading --> */}
            <div class="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
              Streamline your billing process with seamless automation
              <br class="hidden sm:block" />
              for every custom contract, tailored by Brillance.
            </div>
          </div>
        </div>

        {/* <!-- CTA Button --> */}
        <div class="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <div class="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
            <div class="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center">
              <div class="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
              <div class="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5">
                Start for free
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Background Pattern --> */}
        <div class="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
          <svg
            class="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
            style={{
              filter: 'hue-rotate(15deg) saturate(0.7) brightness(1.2)',
            }}
            viewBox="0 0 2808 1200"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="100%" height="100%" fill="none" />
          </svg>
        </div>

        <div class="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start mt-60">
          {/* <!-- Left Pattern --> */}
          <div class="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
            <div class="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              <template id="pattern-template">
                <div class="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
              </template>
            </div>
          </div>

          {/* <!-- Feature Cards --> */}
          <div class="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
            {/* <!-- Card 1 --> */}
            <div class="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
              <div class="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
                Plan your schedules
              </div>
              <div class="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
                Streamline customer subscriptions and billing with automated
                scheduling tools.
              </div>
              {/* <!-- Added image for Plan your schedules card --> */}
              <img
                src={img1}
                alt="Plan schedules dashboard"
                class="w-full h-40 object-cover rounded-md mt-3"
              />
            </div>
            {/* <!-- Card 2 --> */}
            <div class="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
              <div class="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
                Analytics & insights
              </div>
              <div class="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
                Transform your business data into actionable insights with
                real-time analytics.
              </div>
              {/* <!-- Added analytics dashboard image --> */}
              <img
                src={img2}
                alt="Analytics dashboard"
                class="w-full h-40 object-cover rounded-md mt-3"
              />
            </div>
            {/* <!-- Card 3 --> */}
            <div class="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative last:border-b-0 border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
              <div class="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
                Collaborate seamlessly
              </div>
              <div class="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
                Keep your team aligned with shared dashboards and collaborative
                workflows.
              </div>
              {/* <!-- Added data visualization image --> */}
              <img
                src={img3}
                alt="Data visualization dashboard"
                class="w-full h-40 object-cover rounded-md mt-3"
              />
            </div>
          </div>

          {/* <!-- Right Pattern --> */}
          <div class="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
            <div class="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              <template id="pattern-template-2">
                <div class="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
              </template>
            </div>
          </div>
        </div>

        <Social />
        <Features />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}

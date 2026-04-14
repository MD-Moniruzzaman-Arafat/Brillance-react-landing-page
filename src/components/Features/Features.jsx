import img3 from '../../assets/images/services/integration.png';
import img4 from '../../assets/images/services/speak.png';
import img1 from '../../assets/images/services/work-order.png';
import img2 from '../../assets/images/services/work-sync.png';

export default function Features() {
  return (
    <>
      <div class="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
        {/* <!-- Header --> */}
        <div class="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
          <div class="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
            {/* <!-- Badge --> */}
            <div class="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="4"
                  height="4"
                  stroke="#37322F"
                  stroke-width="1"
                  fill="none"
                />
                <rect
                  x="7"
                  y="1"
                  width="4"
                  height="4"
                  stroke="#37322F"
                  stroke-width="1"
                  fill="none"
                />
                <rect
                  x="1"
                  y="7"
                  width="4"
                  height="4"
                  stroke="#37322F"
                  stroke-width="1"
                  fill="none"
                />
                <rect
                  x="7"
                  y="7"
                  width="4"
                  height="4"
                  stroke="#37322F"
                  stroke-width="1"
                  fill="none"
                />
              </svg>
              <div class="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3">
                Services
              </div>
            </div>
            <div class="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
              Built for absolute clarity and focused work
            </div>
            <div class="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
              Stay focused with tools that organize, connect
              <br />
              and turn information into confident decisions.
            </div>
          </div>
        </div>

        {/* <!-- Features Content --> */}
        <div class="self-stretch flex justify-center items-start">
          {/* <!-- Left Pattern --> */}
          <div class="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div class="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              <template id="pattern-template-3">
                <div class="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
              </template>
            </div>
          </div>

          {/* <!-- Grid Content --> */}
          <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
            {/* <!-- Top Left --> */}
            <div class="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
              <div class="flex flex-col gap-2">
                <h3 class="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
                  Smart. Simple. Brilliant.
                </h3>
                <p class="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
                  Your data is beautifully organized so you see everything
                  clearly without the clutter.
                </p>
              </div>
              <div class="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
                <img src={img1} class="h-1/2 object-cover" />
              </div>
            </div>

            {/* <!-- Top Right with Sync Avatars --> */}
            <div class="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
              <div class="flex flex-col gap-2">
                <h3 class="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
                  Your work, in sync
                </h3>
                <p class="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
                  Every update flows instantly across your team and keeps
                  collaboration effortless and fast.
                </p>
              </div>
              <div class="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative">
                <img src={img2} class="h-full object-cover" />
              </div>
            </div>

            {/* <!-- Bottom Left --> */}
            <div class="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
              <div class="flex flex-col gap-2">
                <h3 class="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
                  Effortless integration
                </h3>
                <p class="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
                  All your favorite tools connect in one place and work together
                  seamlessly by design.
                </p>
              </div>
              <div class="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative">
                <img src={img3} class="h-full object-cover" />
              </div>
            </div>

            {/* <!-- Bottom Right --> */}
            <div class="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
              <div class="flex flex-col gap-2">
                <h3 class="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
                  Numbers that speak
                </h3>
                <p class="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
                  Track growth with precision and turn raw data into confident
                  decisions you can trust.
                </p>
              </div>
              <div class="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative">
                <img src={img4} class="h-full object-cover" />
              </div>
            </div>
          </div>

          {/* <!-- Right Pattern --> */}
          <div class="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div class="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              <template id="pattern-template-4">
                <div class="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

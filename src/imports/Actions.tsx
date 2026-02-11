import svgPaths from "./svg-xqbxa23yq8";
import imgEmbodyLogo from "figma:asset/3b2334749149db6ba3fcb9e86e9c97e029934201.png";
import imgRectangle133 from "figma:asset/0fc3fa9af6576476c12f0af561b55963acfc1190.png";
import imgLogo from "figma:asset/07487e04dc2696b21fae7b62259d117b52040159.png";
import imgEllipse3 from "figma:asset/26c0e34c59b71b850f264720febffa5f80d6782d.png";

function ExpandButton() {
  return (
    <div className="absolute h-[44px] left-[144px] top-[608px] w-[151px]" data-name="Expand Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Expand Button" opacity="0">
          <g id="Touchzone"></g>
          <path d="M21 22H133" id="Vector 2" stroke="var(--stroke-0, #2A2A2B)" strokeLinecap="round" strokeOpacity="0.17" strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute left-[51px] size-[45px] top-[8px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="Logo">
          <g id="Touchzone"></g>
          <path d={svgPaths.p2868f580} fill="var(--fill-0, #3A3A3C)" id="stroke" stroke="var(--stroke-0, #3A3A3C)" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute contents left-[51px] top-[8px]" data-name="Home">
      <Logo />
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light justify-center leading-[0] left-[54px] text-[14px] text-black text-nowrap top-[56px] tracking-[0.14px] translate-y-[-50%]">
        <p className="leading-[22px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Embody() {
  return (
    <div className="absolute contents left-[197px] top-[11px]" data-name="Embody">
      <div className="absolute left-[197px] size-[45px] top-[11px]" data-name="Touchzone" />
      <div className="absolute h-[21px] left-[210px] top-[20px] w-[19.32px]" data-name="Embody Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[98.73%] left-0 max-w-none top-[0.93%] w-full" src={imgEmbodyLogo} />
        </div>
      </div>
    </div>
  );
}

function Sensor() {
  return (
    <div className="absolute contents left-[197px] top-[11px]" data-name="Sensor">
      <Embody />
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light justify-center leading-[0] left-[calc(50%-21.5px)] text-[14px] text-black text-nowrap top-[56px] tracking-[0.14px] translate-y-[-50%]">
        <p className="leading-[22px] whitespace-pre">Sensor</p>
      </div>
    </div>
  );
}

function Stroke() {
  return (
    <div className="absolute h-[21px] left-[354px] top-[20px] w-[22.667px]" data-name="Stroke">
      <div className="absolute bottom-[-2.38%] left-[-0.96%] right-[-1.15%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22">
          <g id="Stroke">
            <path d={svgPaths.p43a5c80} fill="var(--fill-0, #3A3A3C)" id="Ellipse 7" stroke="var(--stroke-0, #3A3A3C)" />
            <path d={svgPaths.p2dcff700} fill="var(--fill-0, #3A3A3C)" id="Vector 177" stroke="var(--stroke-0, #3A3A3C)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute contents left-[343px] top-[8px]" data-name="Logo">
      <div className="absolute left-[343px] size-[45px] top-[8px]" data-name="Touchzone" />
      <Stroke />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute contents left-[343px] top-[8px]" data-name="Profile">
      <Logo1 />
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light justify-center leading-[0] left-[344px] text-[14px] text-black text-nowrap top-[56px] tracking-[0.14px] translate-y-[-50%]">
        <p className="leading-[22px] whitespace-pre">Profile</p>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[45.26%]" data-name="HomeIndicator">
      <div className="absolute bg-black bottom-[7px] h-[3px] left-1/2 rounded-[102.093px] translate-x-[-50%] w-[137px]" data-name="Home Indicator" />
    </div>
  );
}

function HomeIndicator1() {
  return (
    <div className="absolute bottom-0 h-[34.712px] left-1/2 translate-x-[-50%] w-[439px]" data-name="HomeIndicator">
      <HomeIndicator />
    </div>
  );
}

function UpdatedNavigation() {
  return (
    <div className="absolute bg-white h-[92px] left-px rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-3px_5px_0px_rgba(0,0,0,0.1),0px_-1px_15px_0px_rgba(0,0,0,0.05)] top-[864px] w-[439px]" data-name="Updated Navigation">
      <HomeIndicator1 />
      <Home />
      <Sensor />
      <Profile />
    </div>
  );
}

function Gradient() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Gradient">
      <div className="absolute flex h-[436px] items-center justify-center left-0 top-0 w-[440px]">
        <div className="flex-none rotate-[180deg]">
          <div className="backdrop-blur-[12.5px] backdrop-filter bg-gradient-to-b from-[#ffc7c7] h-[436px] opacity-[0.87] rounded-tl-[25px] rounded-tr-[25px] shadow-[5px_4px_15px_0px_rgba(0,0,0,0.09)] to-[#ef4343] w-[440px]" />
        </div>
      </div>
      <div className="absolute flex h-[436px] items-center justify-center left-0 top-0 w-[440px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[436px] opacity-[0.65] relative rounded-tl-[25px] rounded-tr-[25px] w-[440px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[25px] rounded-tr-[25px]">
              <div className="absolute bg-gradient-to-b from-[#ffc7c7] inset-0 rounded-tl-[25px] rounded-tr-[25px] to-[#ef4343]" />
              <div className="absolute backdrop-blur-[22.5px] backdrop-filter bg-repeat bg-size-[1024px_1024px] bg-top-left inset-0 opacity-10 rounded-tl-[25px] rounded-tr-[25px]" style={{ backgroundImage: `url('${imgRectangle133}')` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dates() {
  return (
    <div className="absolute bottom-[73.85%] contents leading-[0] left-[6px] text-nowrap text-white top-[20.5%]" data-name="Dates">
      <div className="absolute bottom-[73.85%] flex flex-col font-['Poppins:Medium',sans-serif] justify-center left-[calc(50%-12px)] not-italic text-[24px] top-[22.07%] tracking-[0.24px]">
        <p className="leading-[39px] text-nowrap whitespace-pre">15</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light inset-[23.33%_24.55%_74.37%_72.05%] justify-center text-[12px] tracking-[0.12px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">17</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light inset-[23.33%_84.09%_74.37%_12.5%] justify-center text-[12px] tracking-[0.12px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">12</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light inset-[23.33%_36.59%_74.37%_60%] justify-center text-[12px] tracking-[0.12px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">16</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light inset-[23.33%_60%_74.37%_36.59%] justify-center text-[12px] tracking-[0.12px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">14</p>
      </div>
      <div className="absolute bottom-[77.3%] flex flex-col font-['Poppins:Light',sans-serif] justify-center left-[calc(50%-13px)] not-italic text-[14px] top-[20.5%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Jan</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light inset-[23.33%_72.05%_74.37%_24.55%] justify-center text-[12px] tracking-[0.12px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">13</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light inset-[23.33%_12.73%_74.37%_83.86%] justify-center text-[12px] tracking-[0.12px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">18</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light inset-[23.33%_0.68%_74.37%_95.91%] justify-center text-[12px] tracking-[0.12px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">19</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light inset-[23.33%_95.23%_74.37%_1.36%] justify-center text-[12px] tracking-[0.12px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">11</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-1/2 size-[44px] top-[252px] translate-x-[-50%]">
      <div className="absolute bottom-[-15.91%] left-[-13.64%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 51">
          <g id="Group 14">
            <circle cx="28" cy="22" fill="url(#paint0_linear_65_1217)" id="Ellipse 274" r="22" />
            <g filter="url(#filter0_dddd_65_1217)" id="Ellipse 276">
              <circle cx="28.5" cy="22.5" fill="var(--fill-0, #FB6767)" fillOpacity="0.3" r="17.5" />
            </g>
            <g filter="url(#filter1_dddd_65_1217)" id="Ellipse 275">
              <circle cx="28.5" cy="22.5" fill="var(--fill-0, white)" r="12.5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="47" id="filter0_dddd_65_1217" width="47" x="0" y="4">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_65_1217" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
              <feBlend in2="effect1_dropShadow_65_1217" mode="normal" result="effect2_dropShadow_65_1217" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="effect2_dropShadow_65_1217" mode="normal" result="effect3_dropShadow_65_1217" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-7" dy="7" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
              <feBlend in2="effect3_dropShadow_65_1217" mode="normal" result="effect4_dropShadow_65_1217" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_65_1217" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37" id="filter1_dddd_65_1217" width="37" x="5" y="9">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_65_1217" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
              <feBlend in2="effect1_dropShadow_65_1217" mode="normal" result="effect2_dropShadow_65_1217" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="effect2_dropShadow_65_1217" mode="normal" result="effect3_dropShadow_65_1217" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-7" dy="7" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
              <feBlend in2="effect3_dropShadow_65_1217" mode="normal" result="effect4_dropShadow_65_1217" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_65_1217" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_65_1217" x1="28" x2="28" y1="0" y2="44">
              <stop stopColor="#F78585" />
              <stop offset="1" stopColor="#F39191" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function StatusBarTime() {
  return (
    <div className="absolute h-[21.162px] left-[calc(16.67%-10.75px)] rounded-[24.185px] top-[14.11px] translate-x-[-50%] w-[54.415px]" data-name="_StatusBar-time">
      <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold h-[20.154px] leading-[22.169px] left-[27.21px] text-[17.131px] text-black text-center top-[1.01px] tracking-[-0.4111px] translate-x-[-50%] w-[54.415px]">9:41</p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[calc(16.67%-10.75px)] top-[14.11px] translate-x-[-50%]" data-name="Left Side">
      <StatusBarTime />
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[13.1px] left-[calc(83.33%-0.63px)] top-[19.15px] translate-x-[-50%] w-[77.997px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 14">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p26ea5852} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="1.0632" />
            <path d={svgPaths.p3f21d180} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
            <path d={svgPaths.p2172c500} fill="var(--fill-0, black)" id="Fill" />
          </g>
          <path d={svgPaths.pb412880} fill="var(--fill-0, black)" id="Wifi" />
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p20665400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3a39c800} fill="var(--fill-0, black)" />
            <path d={svgPaths.p11656e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1c616d40} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="absolute h-[53px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[430px]" data-name="StatusBar / iPhone 13">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default function Actions() {
  return (
    <div className="bg-[rgba(250,250,250,0.98)] relative size-full" data-name="Actions">
      <div className="absolute h-[12px] left-[54px] opacity-0 top-[666px] w-[11px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[98.73%] left-0 max-w-none top-[0.93%] w-full" src={imgLogo} />
        </div>
      </div>
      <div className="absolute bg-white h-[281px] left-[30px] opacity-0 rounded-[5px] top-[613px] w-[380px]" data-name="Card Base">
        <div aria-hidden="true" className="absolute border-[0.3px] border-[rgba(186,186,186,0.73)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <ExpandButton />
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light justify-center leading-[0] left-[68px] opacity-0 text-[#3a3a3c] text-[15px] top-[757px] tracking-[0.15px] translate-y-[-50%] w-[306px]">
        <p className="leading-[22px] mb-0">
          <span>{`Embody is an `}</span>
          <span className="text-[#f03545]">AI assistant</span>
          <span>
            {` that works like your notes app.`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="leading-[22px]">
          <span>{`Just `}</span>
          <span className="text-[#f03545]">type</span>
          <span>{` your thoughts, `}</span>
          <span className="text-[#f03545]">long press</span>
          <span>{` to record voice or `}</span>
          <span className="text-[#f03545]">{`@ `}</span>to mention questions, and it will help you figure it out!
        </p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[67px] not-italic opacity-0 text-[#3a3a3c] text-[24px] text-nowrap top-[671.5px] tracking-[0.24px] translate-y-[-50%]">
        <p className="leading-[39px] whitespace-pre">Click to type ...</p>
      </div>
      <div className="absolute bg-white h-[340px] left-[6.14%] right-[6.36%] rounded-[16.427px] top-[calc(50%+172px)] translate-y-[-50%]" data-name="action-card">
        <div aria-hidden="true" className="absolute border-[0.986px] border-[rgba(186,186,186,0.73)] border-solid inset-0 pointer-events-none rounded-[16.427px] shadow-[0px_6.571px_22.998px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[67px] not-italic text-[#3a3a3c] text-[22px] top-[750px] translate-y-[-50%] w-[305px]">
        <p className="leading-[28px]">Improve hydration, hormonal shift in 32 hours</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[67px] not-italic text-[#3a3a3c] text-[22px] top-[582px] translate-y-[-50%] w-[305px]">
        <p className="leading-[28px]">Cramping is predicted in 48 hours, take ibuprofen</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[28px] left-[67px] not-italic opacity-50 text-[#fb6767] text-[22px] top-[666px] translate-y-[-50%] w-[305px]">
        <p className="mb-0">{`Limit caffeine, `}</p>
        <p>beginning Thursday</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Regular',sans-serif] font-normal inset-[53.56%_71.82%_44.14%_15.23%] justify-center leading-[0] text-[#f03545] text-[16px] text-nowrap tracking-[0.16px]">
        <p className="leading-[22px] whitespace-pre">Actions</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light inset-[59.94%_73.53%_37.76%_9.79%] justify-center leading-[0] opacity-0 text-[#3a3a3c] text-[15px] tracking-[0.15px]">
        <p className="leading-[22px]">completed</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] inset-[56.9%_86.33%_39.02%_9.56%] justify-center leading-[0] not-italic opacity-0 text-[#3a3a3c] text-[28px] tracking-[0.28px]">
        <p className="leading-[39px]">6</p>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light inset-[58.16%_82.44%_39.54%_15.73%] justify-center leading-[0] opacity-0 text-[12px] text-[rgba(58,58,60,0.5)] tracking-[0.12px]">
        <p className="leading-[22px]">8</p>
      </div>
      <div className="absolute flex inset-[58.79%_84.5%_40.22%_14.13%] items-center justify-center">
        <div className="flex-none h-[9.001px] rotate-[353.374deg] skew-x-[0.07deg] w-[5.026px]">
          <div className="relative size-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path d="M0 9.00065L5.02631 0" id="Vector 266" opacity="0" stroke="var(--stroke-0, #9C9C9D)" strokeLinecap="round" strokeWidth="0.7" />
            </svg>
          </div>
        </div>
      </div>
      <UpdatedNavigation />
      <Gradient />
      <div className="absolute left-[371px] size-[41px] top-[81px]">
        <img alt="" className="block max-w-none size-full" height="41" src={imgEllipse3} width="41" />
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[39px] left-[30px] not-italic text-[#ffd6d6] text-[16px] text-nowrap top-[72px] tracking-[0.16px] whitespace-pre">Good Morning</p>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[28px] not-italic text-[28px] text-nowrap text-white top-[116.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="leading-[39px] whitespace-pre">Hey, Maya!</p>
      </div>
      <div className="absolute h-[94px] left-1/2 top-[calc(50%-157px)] translate-x-[-50%] translate-y-[-50%] w-[454px]">
        <div className="absolute inset-[-15.96%_-3.29%_-15.49%_-3.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 484 124">
            <g filter="url(#filter0_d_65_1213)" id="Vector 260" opacity="0.85">
              <path d={svgPaths.p13129a00} stroke="var(--stroke-0, white)" strokeWidth="12" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="123.557" id="filter0_d_65_1213" width="483.763" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_65_1213" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_65_1213" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[62.97%] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-64px)] not-italic text-[16px] text-nowrap text-white top-[32.95%] tracking-[0.16px]">
        <p className="leading-[39px] whitespace-pre">Follicular phase</p>
      </div>
      <Dates />
      <div className="absolute h-[43.5px] left-1/2 top-[276px] translate-x-[-50%] w-0">
        <div className="absolute bottom-[-1.15%] left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 44">
            <path d={svgPaths.p1d90c000} fill="var(--stroke-0, white)" id="Vector 262" />
          </svg>
        </div>
      </div>
      <Group />
      <StatusBarIPhone />
    </div>
  );
}
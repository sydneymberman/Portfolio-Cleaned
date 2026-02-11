import svgPaths from "./svg-e31s0vwhzm";
import imgPatch420AppleTop311 from "figma:asset/c3925324dbb15db9d6dc64ef05631d1693b7ebcf.png";
import imgPatch420AppleTop351 from "figma:asset/46f4d912614f1519c99cc4fd4ca17740eda58a34.png";
import imgApplePatch from "figma:asset/35233b01f65a710c7743f9838fc6843cb0ed3bc8.png";
import imgEmbodyLogo from "figma:asset/07487e04dc2696b21fae7b62259d117b52040159.png";
import imgPatch from "figma:asset/ca46cb570bae6c8078ac7c32c9b000242a6df4b7.png";
import imgEllipse3 from "figma:asset/26c0e34c59b71b850f264720febffa5f80d6782d.png";

function Embody() {
  return (
    <div className="absolute h-[124px] left-[30px] top-[781px] w-[380px]" data-name="Embody">
      <div className="absolute inset-[-4.03%_-1.84%_-7.26%_-1.84%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 138">
          <g id="Embody">
            <g filter="url(#filter0_d_65_568)" id="Rectangle 137">
              <rect fill="var(--fill-0, white)" height="124" rx="5" width="380" x="7" y="5" />
              <rect height="123.7" rx="4.85" stroke="var(--stroke-0, #BABABA)" strokeOpacity="0.729412" strokeWidth="0.3" width="379.7" x="7.15" y="5.15" />
            </g>
            <path d="M142 20H254" id="Vector 251" stroke="var(--stroke-0, #2A2A2B)" strokeLinecap="round" strokeOpacity="0.17" strokeWidth="5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_d_65_568" width="394" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="3.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_65_568" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_65_568" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 relative rounded-[5px] size-[105px]">
        <div aria-hidden="true" className="absolute border-[0.3px] border-[rgba(186,186,186,0.73)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="[grid-area:1_/_1] h-[98px] ml-0 mt-[5px] relative w-[105px]" data-name="patch_4-20(apple-top).31 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.35%] left-[-21.94%] max-w-none top-0 w-[142.93%]" src={imgPatch420AppleTop311} />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 relative rounded-[5px] size-[105px]">
        <div aria-hidden="true" className="absolute border-[0.3px] border-[rgba(186,186,186,0.73)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="[grid-area:1_/_1] h-[98px] ml-0 mt-[5px] relative w-[105px]" data-name="patch_4-20(apple-top).35 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.15%] left-[-21.94%] max-w-none top-0 w-[142.93%]" src={imgPatch420AppleTop351} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center leading-[0] left-[calc(50%+130px)] top-[49px] translate-x-[-50%] w-[363px]">
      <Group2 />
      {[...Array(2).keys()].map((_, i) => (
        <Group3 key={i} />
      ))}
    </div>
  );
}

function MyPatches() {
  return (
    <div className="absolute h-[154px] left-[calc(50%+1.5px)] top-[408px] translate-x-[-50%] w-[363px]" data-name="My Patches">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#3a3a3c] text-[24px] text-nowrap top-[19.5px] tracking-[0.24px] translate-y-[-50%]">
        <p className="leading-[39px] whitespace-pre">My Patches</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute left-[40px] overflow-clip size-[105px] top-[457px]" data-name="group 20">
      <div className="absolute bg-white left-0 rounded-[5px] size-[105px] top-0">
        <div aria-hidden="true" className="absolute border-[0.3px] border-[rgba(186,186,186,0.73)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="absolute h-[96px] left-0 top-[4.5px] w-[105px]" data-name="apple patch">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.34%] left-[-20.24%] max-w-none top-0 w-[141.43%]" src={imgApplePatch} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[25.53%_37.48%_46.81%_37.23%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 26">
        <g id="Group">
          <path d={svgPaths.p370d8b00} fill="var(--fill-0, #3A3A3C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Nest() {
  return (
    <div className="absolute left-[108px] size-[94px] top-[641px]" data-name="nest">
      <div className="absolute left-0 size-[94px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 94">
          <circle cx="47" cy="47" id="Ellipse 282" opacity="0.55" r="46.6" stroke="var(--stroke-0, #F03545)" strokeWidth="0.8" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light justify-center leading-[0] left-[35px] opacity-75 text-[12px] text-black text-nowrap top-[61px] tracking-[0.12px] translate-y-[-50%]">
        <p className="leading-[22px] whitespace-pre">nest</p>
      </div>
      <Group />
    </div>
  );
}

function Alexa() {
  return (
    <div className="absolute left-[220px] size-[94px] top-[641px]" data-name="alexa">
      <div className="absolute left-0 size-[94px] top-0">
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(58, 58, 60, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 94">
            <circle cx="47" cy="47" id="Ellipse 281" opacity="0.55" r="46.6" stroke="var(--stroke-0, #3A3A3C)" strokeWidth="0.8" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light justify-center leading-[0] left-[31px] opacity-75 text-[12px] text-black text-nowrap top-[61px] tracking-[0.12px] translate-y-[-50%]">
        <p className="leading-[22px] whitespace-pre">alexa</p>
      </div>
      <div className="absolute inset-[24.47%_38.9%_45.74%_39.36%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(58, 58, 60, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 28">
            <path d={svgPaths.p19804b80} fill="var(--fill-0, #3A3A3C)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[39.36%_39.99%_56.38%_39.36%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(58, 58, 60, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 4">
            <path d={svgPaths.p2537cf40} fill="var(--fill-0, #3A3A3C)" id="Vector" opacity="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Google() {
  return (
    <div className="absolute h-[94px] left-[334px] overflow-clip top-[641px] w-[66px]" data-name="google">
      <div className="absolute left-0 size-[94px] top-0">
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(58, 58, 60, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 94">
            <circle cx="47" cy="47" id="Ellipse 281" opacity="0.55" r="46.6" stroke="var(--stroke-0, #3A3A3C)" strokeWidth="0.8" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light justify-center leading-[0] left-[28px] opacity-75 text-[12px] text-black text-nowrap top-[59px] tracking-[0.12px] translate-y-[-50%]">
        <p className="leading-[22px] whitespace-pre">google</p>
      </div>
      <div className="absolute inset-[23.4%_16.11%_47.87%_57.58%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(58, 58, 60, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 27">
            <path d={svgPaths.pcf67b40} fill="var(--fill-0, #3A3A3C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SmartTv() {
  return (
    <div className="absolute h-[94px] left-[38px] overflow-clip top-[641px] w-[54px]" data-name="smart-tv">
      <div className="absolute left-[-40px] size-[94px] top-0">
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(58, 58, 60, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 94">
            <circle cx="47" cy="47" id="Ellipse 281" opacity="0.55" r="46.6" stroke="var(--stroke-0, #3A3A3C)" strokeWidth="0.8" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light justify-center leading-[0] left-[-17px] opacity-75 text-[12px] text-black text-nowrap top-[61px] tracking-[0.12px] translate-y-[-50%]">
        <p className="leading-[22px] whitespace-pre">smart tv</p>
      </div>
      <div className="absolute inset-[24.47%_61.88%_47.87%_-11.07%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(58, 58, 60, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 26">
            <path clipRule="evenodd" d={svgPaths.p2af06b00} fill="var(--fill-0, #3A3A3C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RingDoorbell() {
  return (
    <div className="absolute contents left-[-35px] top-[711px]" data-name="Ring Doorbell">
      <div className="absolute left-[-35px] opacity-0 size-[94px] top-[711px]">
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(58, 58, 60, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 94">
            <circle cx="47" cy="47" id="Ellipse 281" opacity="0.55" r="46.6" stroke="var(--stroke-0, #3A3A3C)" strokeWidth="0.8" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Mulish:Light',sans-serif] font-light justify-center leading-[0] left-[-1px] opacity-0 text-[12px] text-black text-nowrap top-[773px] tracking-[0.12px] translate-y-[-50%]">
        <p className="leading-[22px] whitespace-pre">Ring</p>
      </div>
      <div className="absolute inset-[76.78%_94.55%_20.5%_-0.23%] opacity-0" data-name="Vector">
        <div className="absolute inset-[-3.85%_-4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 28">
            <path d={svgPaths.pc2dba00} id="Vector" stroke="var(--stroke-0, #3A3A3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[102.759px] relative w-[0.06px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_65_559)" id="Frame 1" opacity="0">
          <path d={svgPaths.p2afd1980} id="Ellipse 284" stroke="var(--stroke-0, #FB6767)" strokeLinecap="round" strokeWidth="4" />
        </g>
        <defs>
          <clipPath id="clip0_65_559">
            <rect fill="white" height="102.759" width="0.06" />
          </clipPath>
        </defs>
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

function Embody1() {
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
      <Embody1 />
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
    <div className="absolute bg-white bottom-0 h-[92px] left-[calc(50%+0.5px)] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-3px_5px_0px_rgba(0,0,0,0.1),0px_-1px_15px_0px_rgba(0,0,0,0.05)] translate-x-[-50%] w-[439px]" data-name="Updated Navigation">
      <HomeIndicator1 />
      <Home />
      <Sensor />
      <Profile />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[102.759px] relative w-[0.044px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 103">
        <g clipPath="url(#clip0_65_541)" id="Frame 2">
          <path d={svgPaths.p1b981a40} id="Ellipse 284" stroke="var(--stroke-0, #FB6767)" strokeLinecap="round" strokeWidth="4" />
        </g>
        <defs>
          <clipPath id="clip0_65_541">
            <rect fill="white" height="102.759" width="0.0440293" />
          </clipPath>
        </defs>
      </svg>
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

export default function Sensor1() {
  return (
    <div className="bg-[rgba(241,241,241,0.95)] relative size-full" data-name="Sensor">
      <div className="absolute backdrop-blur-[12.5px] backdrop-filter bg-[rgba(250,250,250,0.98)] h-[576px] left-px opacity-[0.87] rounded-tl-[25px] rounded-tr-[25px] shadow-[5px_4px_15px_0px_rgba(0,0,0,0.25)] top-[380px] w-[439px]" data-name="Card Base" />
      <Embody />
      <MyPatches />
      <Group1 />
      <div className="absolute bg-white h-[179px] left-[31px] rounded-[5px] top-[582px] w-[378px]" data-name="Card Base">
        <div aria-hidden="true" className="absolute border-[0.3px] border-[rgba(186,186,186,0.73)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="absolute flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] left-[47px] not-italic text-[14px] text-black text-nowrap top-[608.5px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Actively controlling</p>
      </div>
      <div className="absolute backdrop-blur-[5px] backdrop-filter bg-[#3a3a3c] h-[956px] left-0 opacity-0 top-0 w-[440px]" data-name="Overlay" />
      <Nest />
      <Alexa />
      <Google />
      <SmartTv />
      <RingDoorbell />
      <div className="absolute left-1/2 size-[192px] top-[156px] translate-x-[-50%]" data-name="patch">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[94.56%] left-[-21.43%] max-w-none top-[2.72%] w-[143.41%]" src={imgPatch} />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[82.97px] top-[349.26px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "0.046875", "--transform-inner-height": "102.75" } as React.CSSProperties}>
        <div className="flex-none rotate-[135deg]">
          <Frame />
        </div>
      </div>
      <div className="absolute left-[371px] size-[41px] top-[81px]">
        <img alt="" className="block max-w-none size-full" height="41" src={imgEllipse3} width="41" />
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[39px] left-[30px] not-italic text-[#7f7f80] text-[16px] text-nowrap top-[72px] tracking-[0.16px] whitespace-pre">Good Morning</p>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[28px] not-italic text-[#3a3a3c] text-[28px] text-nowrap top-[116.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="leading-[39px] whitespace-pre">Hey, Maya!</p>
      </div>
      <UpdatedNavigation />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[77.32px] top-[354.93px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "0.03125", "--transform-inner-height": "102.75" } as React.CSSProperties}>
        <div className="flex-none rotate-[135deg]">
          <Frame1 />
        </div>
      </div>
      <StatusBarIPhone />
    </div>
  );
}
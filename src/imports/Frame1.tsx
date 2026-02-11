import svgPaths from "./svg-dr4msys0ve";
import imgChangeThis1 from "figma:asset/9192248f3fb5a1cfa000f7983f393343546a3299.png";
import imgShadow from "figma:asset/6b9829294bbbcc9edb8195e44d0442a7a1b33be3.png";
import imgIPhone15Pro from "figma:asset/370fd69577ff1512dd648f60faaa20efb4a82889.png";
import imgChangeThis3 from "figma:asset/40d51bd037dd33867313235dc338b4b30b16d231.png";
import imgShadow1 from "figma:asset/002f1a87be7184dc995586a7b4ac36107a1486b1.png";
import imgShadow2 from "figma:asset/d3b0a074cb857916a050b0ae0727e1087a773c51.png";
import imgIPhone15Pro1 from "figma:asset/fad3a2569657f9a45e4679a67614f897348f4998.png";
import imgSensor from "figma:asset/659403e1970a322e787b2a0a77bf54f5adc20348.png";
import imgStrawberryPatch from "figma:asset/cef5aad3c1748d368d32f092b9dda33c4000118e.png";
import imgPatch420AppleTopFinal781 from "figma:asset/dcf9329a058492ab40e8670b78932e7f818ea935.png";
import { imgChangeThis, imgChangeThis2 } from "./svg-4ycdk";

function MaskGroup() {
  return (
    <div className="absolute contents inset-[16.23%_35%_37.36%_52.89%]" data-name="Mask group">
      <div className="absolute inset-[15.99%_34.94%_37.16%_52.84%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.716px_2.524px] mask-size-[181.405px_487.262px]" data-name="Change-This" style={{ maskImage: `url('${imgChangeThis}')` }}>
        
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[16.23%_35%_37.36%_52.89%]" data-name="Group">
      <div className="absolute inset-[16.23%_35%_37.36%_52.89%]" data-name="Mask">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181.405 487.262">
          <path d={svgPaths.pe55dfc0} fill="var(--fill-0, black)" id="Mask" />
        </svg>
      </div>
      <MaskGroup />
    </div>
  );
}

function Mockup() {
  return (
    <div className="absolute contents inset-[15.34%_16.74%_33.46%_48.86%]" data-name="Mockup">
      <div className="absolute inset-[57.06%_16.74%_33.46%_48.86%] mix-blend-multiply" data-name="Shadow">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow} />
        </div>
      </div>
      <div className="absolute inset-[15.34%_33.53%_36.46%_52.47%]" data-name="iPhone-15-Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone15Pro} />
        </div>
      </div>
      <Group />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-[18.96%_46%_36.49%_24.99%]" data-name="Mask group">
      <div className="absolute inset-[17.63%_45.23%_35.14%_24.09%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[13.467px_14.029px] mask-size-[434.56px_467.73px]" data-name="Change-This" style={{ maskImage: `url('${imgChangeThis2}')` }}>
        <img alt="" className="block max-w-none size-full" height="495.964" src={imgChangeThis3} width="459.605" />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[18.96%_46%_36.49%_24.99%]" data-name="Group">
      <div className="absolute inset-[18.96%_46%_36.49%_24.99%]" data-name="Mask">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 434.56 467.73">
          <path d={svgPaths.p31177200} fill="var(--fill-0, black)" id="Mask" />
        </svg>
      </div>
      <MaskGroup1 />
    </div>
  );
}

function Mockup1() {
  return (
    <div className="absolute contents inset-[18.01%_35.46%_33.67%_21.11%]" data-name="Mockup">
      <div className="absolute inset-[23.71%_43.64%_37.07%_52.48%] mix-blend-multiply" data-name="Shadow">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow1} />
        </div>
      </div>
      <div className="absolute inset-[56.72%_35.46%_33.67%_21.11%] mix-blend-multiply" data-name="Shadow">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow2} />
        </div>
      </div>
      <div className="absolute inset-[18.01%_45.57%_35.6%_23.62%]" data-name="iPhone-15-Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone15Pro1} />
        </div>
      </div>
      <Group1 />
    </div>
  );
}

function NaturalTitanium() {
  return (
    <div className="absolute contents inset-[calc(15.34%-0.69px)_calc(16.74%-0.67px)_calc(33.46%-0.33px)_calc(21.11%-0.58px)]" data-name="Natural-Titanium">
      <Mockup />
      <Mockup1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative w-full h-full">
      <NaturalTitanium />
      <div className="absolute flex h-[741.505px] items-center justify-center left-[504.31px] top-[227.53px] w-[912.692px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1691.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[-18.25deg]">
          <div className="h-[520.519px] relative w-[789.412px]" data-name="sensor">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSensor} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[339.509px] items-center justify-center left-[338.86px] top-[79px] w-[363.795px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1691.5" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-144.57deg]">
          <div className="h-[200.517px] relative w-[303.813px]" data-name="strawberry patch">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStrawberryPatch} />
          </div>
        </div>
      </div>
      <div className="absolute h-[281px] left-[79px] top-[423px] w-[426px]" data-name="patch_4-20(apple-top)(final).78 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPatch420AppleTopFinal781} />
      </div>
    </div>
  );
}

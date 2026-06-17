import { useState } from "react";
import vesperusLogo from "../../../assets/images/vesperus-logo.png";

export default function BackgroundWatermark() {
  const [logoFailed, setLogoFailed] = useState(false);

  if (logoFailed) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 hidden h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full opacity-[0.08] mix-blend-screen sm:block lg:h-[48rem] lg:w-[48rem] xl:h-[56rem] xl:w-[56rem]">
        <img
          src={vesperusLogo}
          alt=""
          className="h-full w-full object-contain opacity-80 grayscale contrast-125 brightness-125"
          onError={() => setLogoFailed(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_22%,rgba(5,7,13,0.42)_58%,rgba(5,7,13,0.86)_78%)]" />
      </div>
    </div>
  );
}

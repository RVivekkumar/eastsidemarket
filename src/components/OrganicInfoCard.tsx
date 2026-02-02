import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  desc: string;
}

export default function OrganicInfoCard({ icon, title, desc }: Props) {
  return (
    <div className="relative w-[360px]">
      {/* icon */}
      <div className="absolute -top-7 left-10 z-10">
        <div className="w-14 h-14 rounded-full bg-[#FF7A00] flex items-center justify-center shadow-md">
          {icon}
        </div>
      </div>

      {/* organic card */}
      <div
        className="
          bg-white
          pt-14
          pb-8
          px-8
          shadow-[0_12px_32px_rgba(0,0,0,0.08)]
        "
        style={{
          clipPath:
            "path('M40 0 H320 C350 0 360 20 360 40 V200 C360 230 330 250 300 250 H60 C20 250 0 230 0 200 V60 C0 30 15 10 40 0 Z')",
        }}
      >
        <h3 className="text-[16px] font-semibold text-black mb-3">
          {title}
        </h3>
        <p className="text-[14px] leading-[1.6] text-[#4B5563]">
          {desc}
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";
import type { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-12 px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 flex items-center justify-center blur-3xl"
      >
        <div
          style={{
            clipPath: "polygon(25% 15%, 50% 0, 100% 25%, 75% 80%, 0 100%)",
          }}
          className="h-3/4 w-3/4 bg-red-200"
        />
      </div>
      <Image
        src="/anrey-avatar.png"
        alt="Anrey Wang"
        width={1024}
        height={1024}
        className="w-xs max-w-4/5 rounded-full"
      />
      <p className="text-xl text-gray-700 lg:text-3xl">Anrey Wang</p>
    </main>
  );
}

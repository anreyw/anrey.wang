import Image from "next/image";
import type { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-12 px-12">
      <Image
        src="/anrey-avatar.png"
        alt="Anrey Wang"
        width={1024}
        height={1024}
        className="max-w-md rounded-full"
      />
      <p className="text-xl lg:text-3xl">
        Anrey Wang enjoys deep conversations and long walks (often at the same
        time).
      </p>
    </main>
  );
}

import type { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-2 px-12">
      <p className="text-xl lg:text-3xl">
        Anrey Wang enjoys deep conversations and long walks (often at the same
        time).
      </p>
    </main>
  );
}

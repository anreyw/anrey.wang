import type { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen px-12 gap-2">
      <h1 className="text-xl lg:text-3xl">Anrey Wang</h1>
      <p className="font-mono text-2xl">This is mono text.</p>
    </main>
  );
}

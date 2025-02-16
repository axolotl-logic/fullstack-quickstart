import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(/images/background.png)] text-zinc-200">
      <div className="prose col-span-2 flex flex-col items-center justify-center">
        <Link href="https://github.com/axolotl-logic">
          <Image
            src="/images/logo-big.png"
            alt="An adorable axolotl"
            width={370}
            height={300}
          />
        </Link>
        <h1 className="text-4xl font-bold text-gray-950">Axolotl Logic</h1>
        <div className="mixin flex justify-center gap-2 divide-solid text-xl">
          <div className="text-yellow-50">Muse</div>
          <div className="text-yellow-100">∴</div>
          <div className="text-yellow-50">Manifest</div>
          <div className="text-yellow-100">∴</div>
          <div className="text-yellow-50">Maintain</div>
        </div>
      </div>
    </main>
  );
}

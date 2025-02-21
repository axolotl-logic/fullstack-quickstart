import Image from "next/image";
import { PGNForm } from "~/components/pgn-form";

function Tagline() {
  return (
    <div className="flex flex-col gap-2">
      <div className="mixin flex justify-center gap-2 divide-solid text-xl">
        <div className="text-yellow-50">Muse</div>
        <div className="text-yellow-100">∴</div>
        <div className="text-yellow-50">Manifest</div>
        <div className="text-yellow-100">∴</div>
        <div className="text-yellow-50">Maintain</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[url(/images/background.png)] text-zinc-200">
      <div className="prose col-span-2 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Axolotl Chess</h1>
        <Tagline />
        <Image
          src="/images/logo-big.png"
          alt="An adorable axolotl"
          width={370}
          height={300}
        />
        <PGNForm />
      </div>
    </main>
  );
}

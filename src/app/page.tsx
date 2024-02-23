/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { openSans, poppins } from "./fonts";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-center pt-24">
      <Image
        src="/logocarisurau.png"
        alt="logocarisurau"
        height={80}
        width={50}
      />
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-4 flex flex-col items-center justify-center">
      <div className={`${openSans.className} text-[48px] text-center`}>
        Tadarrus
      </div>
      <div className="pt-4">
        <Link
          href="/sign-in"
          className="text-xs rounded-md bg-white shadow-sm border-gray-200 border-2 text-black px-2 py-2 font-semibold"
        >
          Daftar masuk
        </Link>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}

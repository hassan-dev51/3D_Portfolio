import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import bg from "../assets/herobg.png";
import Image from "next/image";
import { url } from "inspector";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Technology from "@/components/Technology";
import Work from "@/components/Work";
import FeedBacks from "@/components/FeedBacks";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative z-0">
      <div
        className={`bg-cover bg-no-repeat bg-center`}
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Technology />
      <Work />
      <FeedBacks />
      <div className="relative z-0">
        {/* <Contact />
        <StarsCanvas /> */}
      </div>
    </main>
  );
}

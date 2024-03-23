import Bar from "@/components/sections/Bar";
import DiscountPrice from "@/components/sections/DiscountPrice";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bar />
      <Services />
      <DiscountPrice />
    </div>
  );
}

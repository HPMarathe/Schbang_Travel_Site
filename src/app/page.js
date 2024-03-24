import Bar from "@/components/sections/Bar";
import DiscountPrice from "@/components/sections/DiscountPrice";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import NewsLetter from "@/components/sections/NewsLetter";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <Bar />
      <Services />
      <DiscountPrice />
      <NewsLetter />
      <Footer />
    </div>
  );
}

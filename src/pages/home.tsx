import { PageHero } from "components";
import Contact from "components/Contact";
import FeaturedProducts from "components/FeaturedProducts";
import Hero from "components/Hero";
import Services from "components/Services";

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

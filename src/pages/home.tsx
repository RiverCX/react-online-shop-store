import { PageHero } from "components";
import Contact from "components/contact";
import FeaturedProducts from "components/featured-products";
import Hero from "components/hero";
import Services from "components/services";

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

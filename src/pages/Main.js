import Hero from "./Hero";
import Services from "./Services";
import Filters from "./Filters";
import { Helmet } from "react-helmet";

const Main = ({ lang }) => {
  return (
    <section>
      <Helmet>
        <title>Veloudios Plumbing Services | Water Filter</title>
        <meta
          name="description"
          content="Our plumbing service offers high-quality water filters for sale and professional installation services. Keep your water clean and healthy with our reliable and affordable solutions."
        />
        <meta
          name="keywords"
          content="plumbing services, water filters, water filter sales, water filter installation"
        />
      </Helmet>
      <Hero lang={lang} />
      <Filters lang={lang} />
      <Services />
    </section>
  );
};

export default Main;

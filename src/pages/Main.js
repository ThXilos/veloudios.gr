import Hero from "./Hero";
import Services from "./Services";
import Filters from "./Filters";

const Main = ({ lang }) => {
  return (
    <section>
      <Hero lang={lang} />
      <Filters lang={lang} />
      <Services />
    </section>
  );
};

export default Main;

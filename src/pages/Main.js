import Hero from "./Hero";
import Services from "./Services";

const Main = ({ lang }) => {
  return (
    <section>
      <Hero lang={lang} />
      <Services />
    </section>
  );
};

export default Main;

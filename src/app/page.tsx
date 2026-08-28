import Header from "./components/Header";
import Hero from "./components/Hero";
import Solucao from "./components/Solucao";
import Publico from "./components/Publico";
import Galeria from "./components/Galeria";
import Equipe from "./components/Equipe";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solucao />
        <Publico />
        <Galeria />
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
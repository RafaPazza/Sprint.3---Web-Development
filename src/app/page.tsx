import Header from "./components/Header";
import Hero from "./components/Hero";
import Solucao from "./components/Solucao";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solucao />
        {/* próximas seções: público-alvo, galeria, equipe, contato */}
      </main>
    </>
  );
}

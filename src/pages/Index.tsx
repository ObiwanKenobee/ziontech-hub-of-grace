import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <Features />
    </main>
  );
};

export default Index;
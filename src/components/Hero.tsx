import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-divine-primary via-divine-secondary to-divine-accent opacity-10 animate-gradient-flow"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-slate-900">
          ZionTech Nexus
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-up text-slate-700 max-w-2xl mx-auto">
          Bringing Heaven's Blueprint to Earth Through Technology
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            className="bg-divine-primary hover:bg-divine-primary/90 text-white px-8 py-6 text-lg"
            onClick={() => console.log("Learn More clicked")}
          >
            Learn More
          </Button>
          <Button
            variant="outline"
            className="border-divine-secondary text-divine-secondary hover:bg-divine-secondary hover:text-white px-8 py-6 text-lg"
            onClick={() => console.log("Join Movement clicked")}
          >
            Join the Movement
          </Button>
        </div>
      </div>
    </div>
  );
};
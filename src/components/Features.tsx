import { 
  Brain, 
  Leaf, 
  Network, 
  Wallet, 
  GraduationCap 
} from "lucide-react";

const features = [
  {
    title: "Holistic AI – The Wisdom Core",
    description: "AI solutions guided by divine wisdom to make ethical decisions and foster unity.",
    icon: Brain,
  },
  {
    title: "Stewardship Hub",
    description: "Empowering global environmental restoration and incentivizing sustainable actions.",
    icon: Leaf,
  },
  {
    title: "The Zion Network",
    description: "A decentralized platform for resource sharing, collaboration, and mutual aid.",
    icon: Network,
  },
  {
    title: "Eternal Economy",
    description: "Transparent, ethical financial systems driven by faith and trust.",
    icon: Wallet,
  },
  {
    title: "LightPath Learning",
    description: "Global education inspired by Biblical principles for the next generation.",
    icon: GraduationCap,
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-divine-primary/10">
                <feature.icon className="w-6 h-6 text-divine-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
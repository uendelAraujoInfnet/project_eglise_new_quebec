import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1679513484176-a9a73876ed04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHBlYWNlZnVsfGVufDF8fHx8MTc1NTM1MDkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Church Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Bienvenue à{" "}
            <span className="block text-blue-200">Église New Quebec</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Une communauté de foi chaleureuse au cœur du Québec, où chacun peut
            grandir spirituellement et trouver sa place dans la famille de Dieu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Rejoignez-nous Dimanche
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-foreground"
            >
              En Savoir Plus
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "./ui/card";
import { Heart, Users, Book, Compass } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Amour",
      description: "Nous nous aimons les uns les autres comme Dieu nous a aimés"
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Une famille unie dans la foi et le soutien mutuel"
    },
    {
      icon: Book,
      title: "Vérité",
      description: "Fondés sur la Parole de Dieu et ses enseignements"
    },
    {
      icon: Compass,
      title: "Mission",
      description: "Partager l'espoir et la grâce de Jésus dans notre communauté"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">À Propos de Notre Église</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Église New Quebec est un phare d'espoir et de foi
            dans la communauté québécoise, accueillant tous ceux qui cherchent à
            approfondir leur relation avec Dieu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6">Notre Mission</h3>
            <p className="text-muted-foreground mb-6">
              Notre mission est de créer un environnement où chaque personne peut
              expérimenter l'amour transformateur de Jésus-Christ. Nous nous
              efforçons d'être une église qui accueille, encourage et équipe les
              gens pour vivre une vie pleine de sens et de but.
            </p>
            <p className="text-muted-foreground">
              Nous croyons que chacun a une place dans le plan de Dieu et nous nous
              engageons à accompagner chaque personne dans son cheminement
              spirituel, quel que soit son point de départ.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1753014871672-b23b1335fec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwcmF5ZXIlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzU1MzUwOTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community Prayer"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="mb-3">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
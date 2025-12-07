import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Baby, Users, Music, Heart, Home, Globe } from "lucide-react";

export default function Ministries() {
  const ministries = [
    {
      icon: Baby,
      title: "Ministère Enfants",
      description: "Programme d'enseignement et d'activités pour les enfants de 0 à 12 ans",
      activities: ["École du dimanche", "Camps d'été", "Activités créatives"],
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Users,
      title: "Jeunesse",
      description: "Accompagnement spirituel et social pour les adolescents et jeunes adultes",
      activities: ["Soirées jeunes", "Retraites", "Service communautaire"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Music,
      title: "Louange & Musique",
      description: "Équipe de musiciens et chanteurs pour enrichir nos temps de louange",
      activities: ["Chorale", "Orchestre", "Soirées musicales"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Heart,
      title: "Entraide",
      description: "Support aux familles et personnes en difficulté de notre communauté",
      activities: ["Banque alimentaire", "Visites à domicile", "Soutien financier"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Home,
      title: "Groupes de Maison",
      description: "Rencontres intimes dans les foyers pour étude biblique et fellowship",
      activities: ["Études bibliques", "Prière", "Partage"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Globe,
      title: "Missions",
      description: "Engagement local et international pour partager l'Évangile",
      activities: ["Missions locales", "Partenariats internationaux", "Évangélisation"],
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section id="ministries" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Nos Ministères</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez les différentes façons de vous impliquer dans notre
            communauté. Chaque ministère offre l'opportunité de servir, grandir
            et créer des liens durables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ministries.map((ministry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${ministry.color}`}>
                    <ministry.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{ministry.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">
                  {ministry.description}
                </p>
                <div className="mb-4">
                  <h4 className="mb-2">Activités:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {ministry.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="w-full mt-auto">
                  En Savoir Plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl mb-4">Rejoignez un Ministère</h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Vous souhaitez vous impliquer davantage dans la vie de notre église?
            Chaque ministère accueille de nouveaux membres avec joie. Venez
            découvrir comment vous pouvez faire la différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Devenir Bénévole
            </Button>
            <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-blue-600">
              Contactez un Responsable
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
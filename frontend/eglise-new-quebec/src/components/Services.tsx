import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, MapPin, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Service Principal",
      time: "Dimanche 10h00",
      location: "Sanctuaire Principal",
      description: "Notre service principal avec louange, prédication et communion",
      audience: "Toute la famille",
      icon: Users
    },
    {
      name: "École du Dimanche",
      time: "Dimanche 9h00",
      location: "Salles de Classes",
      description: "Programmes d'enseignement biblique pour tous les âges",
      audience: "Enfants et Adultes",
      icon: Clock
    },
    {
      name: "Service du Soir",
      time: "Dimanche 18h00",
      location: "Sanctuaire Principal",
      description: "Service intime avec prière, louange et témoignages",
      audience: "Jeunes et Adultes",
      icon: MapPin
    },
    {
      name: "Étude Biblique",
      time: "Mercredi 19h00",
      location: "Salle Communautaire",
      description: "Étude approfondie de la Bible en petit groupe",
      audience: "Adultes",
      icon: Users
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Nos Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez-nous pour nos différents services et activités tout au long
            de la semaine. Il y a une place pour chacun dans notre communauté.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    {service.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{service.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{service.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{service.audience}</span>
                  </div>
                  <p className="text-muted-foreground pt-2">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl mb-4">Première Visite?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nous serions ravis de vous accueillir! N'hésitez pas à venir comme vous
            êtes. Notre équipe d'accueil sera présente pour vous guider et répondre
            à vos questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="mb-2">Stationnement Gratuit</h4>
              <p className="text-sm text-muted-foreground">
                Places disponibles sur place
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="mb-2">Accessibilité</h4>
              <p className="text-sm text-muted-foreground">
                Bâtiment entièrement accessible
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="mb-2">Garde d'Enfants</h4>
              <p className="text-sm text-muted-foreground">
                Disponible pour les 0-5 ans
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
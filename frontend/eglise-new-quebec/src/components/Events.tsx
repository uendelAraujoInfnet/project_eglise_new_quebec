import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Conférence de Printemps",
      date: "15-17 Mars 2026",
      time: "Vendredi 19h - Dimanche 16h",
      location: "Église Principal",
      description: "Trois jours d'enseignement, de louange et de communion fraternelle avec des orateurs invités.",
      category: "Conférence",
      spots: "Places limitées"
    },
    {
      title: "Journée Communautaire",
      date: "23 Mars 2026",
      time: "10h00 - 16h00",
      location: "Parc Municipal Saint-Mathieu",
      description: "Journée familiale avec jeux, barbecue et activités pour tous les âges.",
      category: "Famille",
      spots: "Ouvert à tous"
    },
    {
      title: "Soirée de Prière",
      date: "30 Mars 2026",
      time: "19h00 - 21h00",
      location: "Salle de Prière",
      description: "Moment de prière collective pour notre communauté et le monde.",
      category: "Prière",
      spots: "Participation libre"
    },
    {
      title: "Retraite de Jeunes",
      date: "5-7 Avril 2026",
      time: "Vendredi 18h - Dimanche 15h",
      location: "Camp Lac-Beauport",
      description: "Weekend de formation spirituelle et d'activités pour les 14-25 ans.",
      category: "Jeunesse",
      spots: "75 places restantes"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Événements à Venir</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos prochains événements et activités. Rejoignez-nous pour
            des moments de partage, d'apprentissage et de croissance spirituelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                      {event.category}
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{event.spots}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button className="w-full">S'inscrire</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl mb-4">Vous Organisez un Événement?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Si vous souhaitez organiser un événement au sein de notre communauté
            ou proposer une activité, n'hésitez pas à nous contacter.
          </p>
          <Button variant="outline" size="lg">
            Proposer un Événement
          </Button>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "./ui/card";
import { Mail, Phone } from "lucide-react";

export default function Staff() {
  const staff = [
    {
      name: "Pasteur Jean-Phillipe Dubois",
      role: "Pasteur Principal",
      image: "https://images.unsplash.com/photo-1610414961792-b7fffebddd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3IlMjBwcmVhY2hpbmclMjBjaHVyY2h8ZW58MXx8fHwxNzU1MzUwOTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Pasteur Jean-Phillipe dirige notre communauté avec passion et dévouement. Il détient une maîtrise en théologie et a à cœur l'enseignement biblique et l'accompagnement pastoral.",
      email: "pasteur@nouveglise-qc.ca",
      phone: "(418) 555-0123"
    },
    {
      name: "Marie-Claire Tremblay",
      role: "Pasteure Associée",
      image: "https://images.unsplash.com/photo-1753014871672-b23b1335fec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwcmF5ZXIlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzU1MzUwOTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Marie-Claire se spécialise dans le ministère féminin et familial. Elle coordonne également nos programmes communautaires et notre ministère d'entraide.",
      email: "marie-claire@nouveglise-qc.ca",
      phone: "(418) 555-0124"
    },
    {
      name: "David Létourneau",
      role: "Pasteur Jeunesse",
      image: "https://images.unsplash.com/photo-1649701920167-38c5ee92a34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBleHRlcmlvciUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1NTM0NTYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "David travaille avec passion auprès des jeunes de 12 à 25 ans. Il organise des camps, retraites et activités pour accompagner la nouvelle génération dans leur foi.",
      email: "david@nouveglise-qc.ca",
      phone: "(418) 555-0125"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Notre Équipe Pastorale</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rencontrez notre équipe pastorale dédiée à vous accompagner dans
            votre cheminement spirituel. Ils sont là pour vous écouter, vous
            conseiller et prier avec vous.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((person, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl mb-2">{person.name}</h3>
                <p className="text-blue-600 mb-4">{person.role}</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {person.bio}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <a
                      href={`mailto:${person.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {person.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <a
                      href={`tel:${person.phone}`}
                      className="hover:text-primary transition-colors"
                    >
                      {person.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl mb-4">Besoin d'un Accompagnement?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Notre équipe pastorale est disponible pour la prière, le conseil
            spirituel, les visites à l'hôpital, les mariages, les baptêmes et
            tout autre besoin pastoral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(418)555-0100"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Appeler l'Église
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Prendre Rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
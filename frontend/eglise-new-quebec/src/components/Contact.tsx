import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["16 Rue De Buade", "Québec, QC G1R 4A1", "Canada"]
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["Bureau: (418) 692-2533", "Urgence: (418) 773-2850"]
    },
    {
      icon: Mail,
      title: "Courriel",
      details: ["info@nouveglise-qc.ca", "pasteur-jean-phillipe@nouveglise-qc.ca"]
    },
    {
      icon: Clock,
      title: "Heures d'Ouverture",
      details: ["Lun-Ven: 7h30 - 16h00", "Sam: 7h30 - 17h00", "Dim: 8h30 - 17h00"]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Contactez-Nous</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous serions ravis de vous entendre! N'hésitez pas à nous contacter
            pour toute question, demande de prière ou pour en savoir plus sur
            notre communauté.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl mb-6">Informations de Contact</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <info.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-muted-foreground">Carte Interactive</p>
                    <p className="text-sm text-muted-foreground">16 Rue De Buade, Québec, G1R 4A1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-nous un Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Prénom *</label>
                      <Input placeholder="Votre prénom" required />
                    </div>
                    <div>
                      <label className="block mb-2">Nom *</label>
                      <Input placeholder="Votre nom" required />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2">Courriel *</label>
                    <Input type="email" placeholder="votre@courriel.com" required />
                  </div>
                  <div>
                    <label className="block mb-2">Téléphone</label>
                    <Input type="tel" placeholder="(418) 555-0123" />
                  </div>
                  <div>
                    <label className="block mb-2">Sujet</label>
                    <Input placeholder="Sujet de votre message" />
                  </div>
                  <div>
                    <label className="block mb-2">Message *</label>
                    <Textarea
                      placeholder="Votre message..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Envoyer le Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="mt-8 text-center">
              <h4 className="mb-4">Suivez-nous</h4>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
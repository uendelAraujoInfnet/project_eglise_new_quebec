import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Événements", href: "#events" },
  ];

  const ministries = [
    { name: "Ministère Enfants", href: "#ministries" },
    { name: "Jeunesse", href: "#ministries" },
    { name: "Louange & Musique", href: "#ministries" },
    { name: "Missions", href: "#ministries" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✝</span>
              </div>
              <div>
                <h3>Église New Quebec</h3>
                <p className="text-sm text-gray-400">Communauté de Foi</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Une communauté de foi chaleureuse au cœur du Québec, où chacun peut
              grandir spirituellement et trouver sa place dans la famille de Dieu.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="mb-4">Ministères</h4>
            <ul className="space-y-2">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <a
                    href={ministry.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {ministry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                <div className="text-sm text-gray-300">
                  <p>16 Rue De Buade</p>
                  <p>Québec, QC G1R 4A1</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <a
                  href="tel:(418) 692-2533"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  (418) 692-2533
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a
                  href="mailto:info@nouveglise-qc.ca"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  info@nouveglise-qc.ca
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Times */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <h4 className="mb-4">Horaires des Services</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-300">École du Dimanche</p>
                <p className="text-white">Dimanche 9h00</p>
              </div>
              <div>
                <p className="text-gray-300">Service Principal</p>
                <p className="text-white">Dimanche 10h00</p>
              </div>
              <div>
                <p className="text-gray-300">Service du Soir</p>
                <p className="text-white">Dimanche 18h00</p>
              </div>
              <div>
                <p className="text-gray-300">Étude Biblique</p>
                <p className="text-white">Mercredi 19h00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Église New Quebec. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            "Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux." - Matthieu 18:20
          </p>
        </div>
      </div>
    </footer>
  );
}
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">Б</span>
              </div>
              <span className="font-display font-bold text-lg">БаниБочки</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Производим качественные бани-бочки из натурального кедра и сосны с 2019 года. 
              Доставка и установка по всей России.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2">
              <a href="#catalog" className="text-sm text-background/70 hover:text-background transition-colors">
                Каталог
              </a>
              <a href="#benefits" className="text-sm text-background/70 hover:text-background transition-colors">
                Преимущества
              </a>
              <a href="#gallery" className="text-sm text-background/70 hover:text-background transition-colors">
                Галерея
              </a>
              <a href="#reviews" className="text-sm text-background/70 hover:text-background transition-colors">
                Отзывы
              </a>
              <a href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Контакты
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+79001234567"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 (900) 123-45-67
              </a>
              <a
                href="mailto:info@banibochki.ru"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@banibochki.ru
              </a>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                Московская обл., г. Подольск
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-sm text-background/50 text-center">
            © 2024 БаниБочки. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

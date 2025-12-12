import { Button } from "@/components/ui/button";
import { Key, Clock, Truck, Wrench, CreditCard } from "lucide-react";

const Hero = () => {
  const benefits = [
    { icon: Clock, text: "Изготовление за 3 дня" },
    { icon: Truck, text: "Доставка по всей России" },
    { icon: Wrench, text: "Сборка на участке" },
    { icon: CreditCard, text: "Минимальная предоплата" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Nature Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')`,
        }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
      
      {/* Decorative leaves */}
      <div className="absolute top-20 right-10 text-4xl opacity-80 animate-fade-in" style={{ animationDelay: "0.5s" }}>🌿</div>
      <div className="absolute bottom-40 left-10 text-3xl opacity-70 animate-fade-in" style={{ animationDelay: "0.7s" }}>🍃</div>
      <div className="absolute top-40 right-1/4 text-2xl opacity-60 animate-fade-in" style={{ animationDelay: "0.9s" }}>🌿</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Floating Benefits Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full shadow-card border border-border/50 text-sm font-medium text-foreground"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <benefit.icon className="w-4 h-4 text-golden" />
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Main Title Card */}
            <div className="inline-block bg-cream/95 backdrop-blur-sm rounded-2xl p-8 shadow-card mb-8">
              <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
                Отделка и строительство
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-wood leading-tight">
                БАНЬ
              </h1>
              
              {/* "Под ключ" Badge */}
              <div className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-gradient-to-r from-golden to-golden-light rounded-full shadow-lg">
                <Key className="w-5 h-5 text-accent-foreground" />
                <span className="text-accent-foreground font-semibold">под ключ</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Производим качественные бани-бочки от 2 до 5 метров из натурального кедра и сосны. 
              Быстрое изготовление, доставка и профессиональная установка по всей России.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop"
                alt="Баня-бочка из натурального дерева"
                className="w-full h-auto rounded-2xl shadow-card object-cover"
              />
              
              {/* CTA Button overlaying image */}
              <div className="absolute -bottom-6 right-4 lg:right-8">
                <Button 
                  size="lg" 
                  asChild 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-golden to-golden-light hover:from-golden-dark hover:to-golden text-accent-foreground font-semibold shadow-lg rounded-full"
                >
                  <a href="#contact">Оставить заявку</a>
                </Button>
              </div>
            </div>
            
            {/* Decorative wooden tub element */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 hidden md:block">
              <div className="w-24 h-24 bg-wood-light rounded-full flex items-center justify-center shadow-card border-4 border-wood/30">
                <span className="text-3xl">🪣</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

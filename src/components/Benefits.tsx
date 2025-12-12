import { Leaf, Truck, Clock, Shield, Flame, Wrench } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Экологичные материалы",
    description: "Используем только натуральный кедр и сосну высшего сорта без химической обработки",
  },
  {
    icon: Flame,
    title: "Быстрый нагрев",
    description: "Благодаря особой форме бочка прогревается за 30-40 минут до комфортной температуры",
  },
  {
    icon: Truck,
    title: "Доставка по всей России",
    description: "Доставляем бани-бочки в любой регион страны. Стоимость доставки рассчитывается индивидуально",
  },
  {
    icon: Wrench,
    title: "Монтаж под ключ",
    description: "Наши специалисты установят баню на вашем участке и проведут инструктаж по использованию",
  },
  {
    icon: Shield,
    title: "Гарантия 2 года",
    description: "Предоставляем официальную гарантию на все изделия и выполненные работы",
  },
  {
    icon: Clock,
    title: "Быстрое изготовление",
    description: "Срок производства стандартной бани-бочки составляет всего 7-14 дней",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Почему мы
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Наши преимущества
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы производим бани-бочки уже более 5 лет и знаем все секреты качества
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

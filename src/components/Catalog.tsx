import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Thermometer, Ruler } from "lucide-react";

interface SaunaProduct {
  id: number;
  name: string;
  size: string;
  capacity: string;
  price: number;
  oldPrice?: number;
  image: string;
  features: string[];
  isPopular?: boolean;
}

const products: SaunaProduct[] = [
  {
    id: 1,
    name: "Баня-бочка Мини",
    size: "2 метра",
    capacity: "2-3 человека",
    price: 149000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    features: ["Парилка", "Печь включена", "Кедр"],
  },
  {
    id: 2,
    name: "Баня-бочка Стандарт",
    size: "3 метра",
    capacity: "3-4 человека",
    price: 219000,
    oldPrice: 249000,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop",
    features: ["Парилка", "Предбанник", "Печь включена"],
    isPopular: true,
  },
  {
    id: 3,
    name: "Баня-бочка Комфорт",
    size: "4 метра",
    capacity: "4-5 человек",
    price: 289000,
    image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&h=400&fit=crop",
    features: ["Парилка", "Предбанник", "Комната отдыха", "Окно"],
  },
  {
    id: 4,
    name: "Баня-бочка Премиум",
    size: "5 метров",
    capacity: "5-6 человек",
    price: 369000,
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600&h=400&fit=crop",
    features: ["Парилка", "Предбанник", "Комната отдыха", "2 окна", "Терраса"],
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

const Catalog = () => {
  return (
    <section id="catalog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Каталог
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Выберите свою баню-бочку
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            У нас есть модели на любой вкус и бюджет — от компактных до просторных
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-border/50 hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.isPopular && (
                <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
                  Хит продаж
                </Badge>
              )}

              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-5">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {product.name}
                </h3>

                {/* Specs */}
                <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4" />
                    {product.size}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {product.capacity}
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 3 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                      +{product.features.length - 3}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-display font-bold text-primary">
                    {formatPrice(product.price)} ₽
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.oldPrice)} ₽
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Button asChild className="w-full">
                  <a href="#contact">Заказать</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Цены указаны с учётом печи. Возможна индивидуальная комплектация.
        </p>
      </div>
    </section>
  );
};

export default Catalog;

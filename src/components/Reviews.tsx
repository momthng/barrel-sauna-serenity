import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Александр Петров",
    location: "Московская область",
    rating: 5,
    text: "Заказывал баню-бочку 3 метра. Качество просто отличное! Дерево обработано идеально, нагревается быстро. Семья в восторге, используем каждые выходные.",
    date: "Ноябрь 2024",
  },
  {
    id: 2,
    name: "Елена Козлова",
    location: "Ленинградская область",
    rating: 5,
    text: "Долго выбирали между разными производителями. Остановились на этих ребятах и не пожалели. Доставили вовремя, установили аккуратно. Рекомендую!",
    date: "Октябрь 2024",
  },
  {
    id: 3,
    name: "Михаил Сидоров",
    location: "Нижний Новгород",
    rating: 5,
    text: "Баня-бочка Премиум — это что-то! Терраса, два окна, всё продумано до мелочей. Гости приезжают специально, чтобы попариться. Спасибо за качественную работу!",
    date: "Сентябрь 2024",
  },
  {
    id: 4,
    name: "Анна Волкова",
    location: "Краснодарский край",
    rating: 5,
    text: "Купили компактную баню на 2 метра для дачи. Идеально вписалась на небольшой участок. За 30 минут нагревается до нужной температуры. Очень довольны!",
    date: "Август 2024",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Отзывы
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Что говорят клиенты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы гордимся каждым довольным клиентом и благодарны за доверие
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="border-border/50 hover:shadow-card transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Frontend разработка',
    description: 'Изучите React, TypeScript и современные инструменты для создания интерфейсов',
    duration: '3 месяца',
    level: 'Начальный',
    price: '45 000 ₽',
    students: 234,
    image: 'https://cdn.poehali.dev/projects/94a61205-22ca-4d51-b699-61a788930b6b/files/325d95df-6fb3-44ee-bcc0-0bbc6b96a182.jpg'
  },
  {
    id: 2,
    title: 'Python для анализа данных',
    description: 'Научитесь работать с данными, создавать визуализации и строить модели',
    duration: '4 месяца',
    level: 'Средний',
    price: '52 000 ₽',
    students: 189,
    image: 'https://cdn.poehali.dev/projects/94a61205-22ca-4d51-b699-61a788930b6b/files/325d95df-6fb3-44ee-bcc0-0bbc6b96a182.jpg'
  },
  {
    id: 3,
    title: 'UX/UI дизайн',
    description: 'Освойте принципы проектирования интерфейсов и работу в Figma',
    duration: '2 месяца',
    level: 'Начальный',
    price: '38 000 ₽',
    students: 312,
    image: 'https://cdn.poehali.dev/projects/94a61205-22ca-4d51-b699-61a788930b6b/files/325d95df-6fb3-44ee-bcc0-0bbc6b96a182.jpg'
  },
  {
    id: 4,
    title: 'Backend на Node.js',
    description: 'Создавайте серверные приложения, API и работайте с базами данных',
    duration: '4 месяца',
    level: 'Продвинутый',
    price: '58 000 ₽',
    students: 156,
    image: 'https://cdn.poehali.dev/projects/94a61205-22ca-4d51-b699-61a788930b6b/files/325d95df-6fb3-44ee-bcc0-0bbc6b96a182.jpg'
  }
];

const teachers = [
  {
    id: 1,
    name: 'Анна Смирнова',
    role: 'Frontend разработчик',
    experience: '8 лет опыта в разработке',
    avatar: 'https://cdn.poehali.dev/projects/94a61205-22ca-4d51-b699-61a788930b6b/files/0e393dec-6ca3-4602-be35-6b6c95565e59.jpg',
    courses: ['Frontend разработка', 'React продвинутый']
  },
  {
    id: 2,
    name: 'Дмитрий Козлов',
    role: 'Data Scientist',
    experience: '6 лет в анализе данных',
    avatar: 'https://cdn.poehali.dev/projects/94a61205-22ca-4d51-b699-61a788930b6b/files/148ebc78-0a47-4420-98b4-04c1a1463c60.jpg',
    courses: ['Python для анализа данных']
  },
  {
    id: 3,
    name: 'Мария Петрова',
    role: 'UX/UI дизайнер',
    experience: '7 лет в дизайне',
    avatar: 'https://cdn.poehali.dev/projects/94a61205-22ca-4d51-b699-61a788930b6b/files/0e393dec-6ca3-4602-be35-6b6c95565e59.jpg',
    courses: ['UX/UI дизайн', 'Figma мастер-класс']
  },
  {
    id: 4,
    name: 'Алексей Волков',
    role: 'Backend разработчик',
    experience: '10 лет в разработке',
    avatar: 'https://cdn.poehali.dev/projects/94a61205-22ca-4d51-b699-61a788930b6b/files/148ebc78-0a47-4420-98b4-04c1a1463c60.jpg',
    courses: ['Backend на Node.js', 'Микросервисы']
  }
];

const reviews = [
  {
    id: 1,
    name: 'Елена Соколова',
    course: 'Frontend разработка',
    rating: 5,
    text: 'Отличный курс! Преподаватель объясняет сложные вещи простым языком. За 3 месяца я смогла создать свой первый проект.',
    date: '2 недели назад'
  },
  {
    id: 2,
    name: 'Игорь Морозов',
    course: 'Python для анализа данных',
    rating: 5,
    text: 'Практические задания помогли закрепить материал. Теперь уверенно работаю с данными в своей компании.',
    date: '1 месяц назад'
  },
  {
    id: 3,
    name: 'Ольга Кузнецова',
    course: 'UX/UI дизайн',
    rating: 5,
    text: 'Курс превзошел ожидания. Научилась создавать красивые и удобные интерфейсы. Портфолио пополнилось реальными проектами.',
    date: '3 недели назад'
  }
];

const faqItems = [
  {
    question: 'Как проходит обучение?',
    answer: 'Обучение проходит полностью онлайн. Вы получаете доступ к видеоурокам, практическим заданиям и можете задавать вопросы преподавателям в чате. Все материалы остаются у вас навсегда.'
  },
  {
    question: 'Нужна ли специальная подготовка?',
    answer: 'Для большинства курсов начального уровня специальная подготовка не требуется. Мы начинаем с основ и постепенно переходим к более сложным темам.'
  },
  {
    question: 'Выдается ли сертификат?',
    answer: 'Да, после успешного завершения курса и выполнения всех практических заданий вы получаете сертификат о прохождении обучения.'
  },
  {
    question: 'Можно ли оплатить курс в рассрочку?',
    answer: 'Да, мы предлагаем беспроцентную рассрочку на 3-6 месяцев. Подробности можно узнать при оформлении заказа.'
  },
  {
    question: 'Есть ли поддержка после окончания курса?',
    answer: 'Да, вы получаете доступ к сообществу выпускников, можете участвовать в вебинарах и получать консультации от преподавателей в течение 6 месяцев после окончания.'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <span className="text-2xl font-bold">EduSpace</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('courses')} className="text-sm hover:text-primary transition-colors">
                Курсы
              </button>
              <button onClick={() => scrollToSection('teachers')} className="text-sm hover:text-primary transition-colors">
                Преподаватели
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">
                Контакты
              </button>
            </div>

            <Button>Войти</Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-sky-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Обучайтесь у лучших экспертов
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Онлайн-курсы по программированию, дизайну и анализу данных. Практические навыки для вашей карьеры.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('courses')}>
                  Выбрать курс
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Пробный урок
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                <div className="animate-scale-in">
                  <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-muted-foreground">Студентов</div>
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Курсов</div>
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground">Довольных студентов</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные курсы</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Выберите направление и начните обучение уже сегодня
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video bg-gradient-to-br from-sky-100 to-blue-50 rounded-t-lg overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{course.level}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        {course.students}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{course.price}</span>
                      <Button>Купить курс</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="teachers" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши преподаватели</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Эксперты с многолетним опытом работы в индустрии
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teachers.map((teacher, index) => (
                <Card key={teacher.id} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={teacher.avatar} alt={teacher.name} />
                        <AvatarFallback className="text-2xl bg-primary text-white">
                          {teacher.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-xl">{teacher.name}</CardTitle>
                    <CardDescription className="text-base">{teacher.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{teacher.experience}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {teacher.courses.map((course, idx) => (
                        <Badge key={idx} variant="outline">{course}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы студентов</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Что говорят наши выпускники
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={review.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-white">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{review.name}</CardTitle>
                        <CardDescription className="text-sm">{review.course}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{review.text}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ответы на популярные вопросы о платформе
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-3 px-6 rounded-lg">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-xl text-muted-foreground">
                  Остались вопросы? Напишите нам, и мы ответим в ближайшее время
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Сообщение</label>
                      <Textarea placeholder="Расскажите, чем мы можем помочь" rows={5} />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить сообщение
                    </Button>
                  </form>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t">
                    <div className="flex flex-col items-center text-center">
                      <Icon name="Mail" className="text-primary mb-3" size={24} />
                      <div className="font-medium mb-1">Email</div>
                      <div className="text-sm text-muted-foreground">info@eduspace.ru</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Icon name="Phone" className="text-primary mb-3" size={24} />
                      <div className="font-medium mb-1">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Icon name="MapPin" className="text-primary mb-3" size={24} />
                      <div className="font-medium mb-1">Офис</div>
                      <div className="text-sm text-muted-foreground">Москва, ул. Примерная, 1</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} />
                <span className="text-xl font-bold">EduSpace</span>
              </div>
              <p className="text-sm text-slate-400">
                Образовательная платформа для тех, кто стремится к знаниям и профессиональному росту.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Анализ данных</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Маркетинг</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            © 2024 EduSpace. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 via-fuchsia-800 to-purple-900 text-white border-b-4 border-yellow-400 shadow-lg sparkle">
        <nav className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" className="text-yellow-400" size={32} />
              <span className="text-2xl font-bold text-shimmer">EduSpace</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm hover:text-accent transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('courses')} className="text-sm hover:text-accent transition-colors">
                Курсы
              </button>
              <button onClick={() => scrollToSection('teachers')} className="text-sm hover:text-accent transition-colors">
                Преподаватели
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-accent transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-accent transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-accent transition-colors">
                Контакты
              </button>
            </div>

            <Button className="gradient-gold text-purple-900 font-bold hover:shadow-xl hover:scale-105 transition-all sparkle">Войти в кабинет</Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-purple-100 via-fuchsia-50 to-yellow-100 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Профессиональное образование для карьерного роста
              </h1>
              <p className="text-xl md:text-2xl text-purple-900 mb-10 max-w-2xl mx-auto font-medium">
                Углубленные программы обучения от ведущих экспертов индустрии. Серьезный подход к развитию навыков.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 gradient-purple text-white hover:shadow-2xl hover:scale-105 transition-all sparkle" onClick={() => scrollToSection('courses')}>
                  Каталог программ
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" className="text-lg px-8 bg-white border-4 border-yellow-400 text-purple-900 font-bold hover:bg-yellow-50 hover:shadow-xl transition-all">
                  Консультация
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                <div className="animate-scale-in border-l-4 border-yellow-400 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg sparkle">
                  <div className="text-5xl font-bold text-shimmer mb-2">2,000+</div>
                  <div className="text-purple-900 font-semibold">Выпускников</div>
                </div>
                <div className="animate-scale-in border-l-4 border-fuchsia-400 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg sparkle" style={{ animationDelay: '0.1s' }}>
                  <div className="text-5xl font-bold text-shimmer mb-2">15+</div>
                  <div className="text-purple-900 font-semibold">Лет на рынке</div>
                </div>
                <div className="animate-scale-in border-l-4 border-yellow-400 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg sparkle" style={{ animationDelay: '0.2s' }}>
                  <div className="text-5xl font-bold text-shimmer mb-2">98%</div>
                  <div className="text-purple-900 font-semibold">Трудоустройство</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="py-20 bg-gradient-to-br from-fuchsia-50 via-purple-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Образовательные программы</h2>
              <p className="text-xl text-purple-800 max-w-2xl mx-auto font-medium">
                Структурированные курсы с акцентом на практическое применение
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <Card key={course.id} className="hover:shadow-2xl transition-all border-2 border-yellow-300 animate-fade-in sparkle bg-white/90 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-t-lg overflow-hidden relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent"></div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="gradient-gold text-purple-900 font-bold hover:shadow-lg">{course.level}</Badge>
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
                      <span className="text-2xl font-bold text-shimmer">{course.price}</span>
                      <Button className="gradient-purple text-white hover:shadow-xl hover:scale-105 transition-all">Подробнее</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="teachers" className="py-20 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Преподавательский состав</h2>
              <p className="text-xl text-purple-800 max-w-2xl mx-auto font-medium">
                Профессионалы с подтвержденным опытом в крупнейших компаниях
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teachers.map((teacher, index) => (
                <Card key={teacher.id} className="text-center hover:shadow-2xl transition-all border-2 border-fuchsia-300 animate-fade-in sparkle bg-white/90" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Avatar className="w-28 h-28 border-4 border-yellow-400 shadow-lg ring-4 ring-purple-200">
                        <AvatarImage src={teacher.avatar} alt={teacher.name} />
                        <AvatarFallback className="text-2xl gradient-purple text-white">
                          {teacher.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-xl">{teacher.name}</CardTitle>
                    <CardDescription className="text-base">{teacher.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-purple-800 mb-4 font-semibold">{teacher.experience}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {teacher.courses.map((course, idx) => (
                        <Badge key={idx} className="gradient-gold text-purple-900 font-semibold hover:shadow-lg">{course}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-gradient-to-br from-yellow-50 via-fuchsia-50 to-purple-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы выпускников</h2>
              <p className="text-xl text-purple-800 max-w-2xl mx-auto font-medium">
                Реальные истории карьерного роста наших слушателей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={review.id} className="animate-fade-in border-2 border-purple-300 hover:shadow-2xl transition-all sparkle bg-white/90" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="border-2 border-yellow-400 ring-2 ring-fuchsia-200">
                        <AvatarFallback className="gradient-purple text-white">
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
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400 drop-shadow-lg" size={18} />
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

        <section id="faq" className="py-20 bg-gradient-to-br from-purple-50 via-white to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-xl text-purple-800 max-w-2xl mx-auto font-medium">
                Информация об обучении и условиях поступления
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-r from-purple-50 to-fuchsia-50 mb-3 px-6 rounded-lg border-2 border-purple-200 sparkle">
                    <AccordionTrigger className="text-left font-bold hover:no-underline text-purple-900">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-purple-800 font-medium">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-fuchsia-100 via-purple-50 to-yellow-100">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
                <p className="text-xl text-purple-800 font-medium">
                  Свяжитесь с нами для получения консультации
                </p>
              </div>

              <Card className="border-2 border-fuchsia-300 sparkle bg-white/90 backdrop-blur-sm shadow-2xl">
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-purple-900">Фамилия Имя Отчество</label>
                      <Input placeholder="Иванов Иван Иванович" className="border-2 border-purple-300 focus:border-fuchsia-400" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-purple-900">Корпоративная почта</label>
                      <Input type="email" placeholder="ivanov@company.ru" className="border-2 border-purple-300 focus:border-fuchsia-400" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-purple-900">Ваш запрос</label>
                      <Textarea placeholder="Опишите ваши цели и интересующие программы" rows={5} className="border-2 border-purple-300 focus:border-fuchsia-400" />
                    </div>
                    <Button className="w-full gradient-purple text-white font-bold hover:shadow-2xl hover:scale-105 transition-all sparkle" size="lg">
                      Отправить заявку
                    </Button>
                  </form>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t-2 border-purple-200">
                    <div className="flex flex-col items-center text-center">
                      <Icon name="Mail" className="text-yellow-500 mb-3" size={28} />
                      <div className="font-bold mb-1 text-purple-900">Электронная почта</div>
                      <div className="text-sm text-purple-700 font-medium">info@eduspace.ru</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Icon name="Phone" className="text-fuchsia-500 mb-3" size={28} />
                      <div className="font-bold mb-1 text-purple-900">Телефон</div>
                      <div className="text-sm text-purple-700 font-medium">+7 (495) 123-45-67</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Icon name="MapPin" className="text-yellow-500 mb-3" size={28} />
                      <div className="font-bold mb-1 text-purple-900">Адрес</div>
                      <div className="text-sm text-purple-700 font-medium">Москва, ул. Примерная, 1</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-br from-purple-900 via-fuchsia-900 to-purple-900 text-white py-16 border-t-4 border-yellow-400 relative overflow-hidden sparkle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" className="text-yellow-400" size={28} />
                <span className="text-xl font-bold text-shimmer">EduSpace</span>
              </div>
              <p className="text-sm text-purple-200 leading-relaxed">
                Лицензированный образовательный центр с государственной аккредитацией. Профессиональная подготовка специалистов с 2009 года.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-yellow-400">Направления</h3>
              <ul className="space-y-2 text-sm text-purple-200">
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Разработка ПО</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Проектирование</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Управление проектами</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-yellow-400">Информация</h3>
              <ul className="space-y-2 text-sm text-purple-200">
                <li><a href="#" className="hover:text-yellow-300 transition-colors">О центре</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Корпоративное обучение</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-yellow-400">Документы</h3>
              <ul className="space-y-2 text-sm text-purple-200">
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Договор оферты</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Политика обработки данных</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Правила обучения</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Реквизиты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-yellow-400 pt-8 text-center text-sm text-purple-200 font-medium">
            © 2024 ООО "EduSpace". Образовательная лицензия №123456. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
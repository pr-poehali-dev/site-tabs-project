import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigationItems = [
    { label: 'Главная', active: true },
    { label: 'О нас', active: false },
    { label: 'Фонд', active: false },
    { label: 'Работа', active: false },
    { label: 'Спорт', active: false },
  ];

  const projects = [
    { 
      name: 'Помощь детским домам', 
      raised: 2500000, 
      goal: 5000000, 
      status: 'active',
      description: 'Обеспечение детских домов необходимым оборудованием и материалами',
      image: '/img/54053635-5d87-49c6-8ab6-472739788835.jpg'
    },
    { 
      name: 'Медицинская помощь', 
      raised: 1800000, 
      goal: 3000000, 
      status: 'active',
      description: 'Оплата лечения и медицинских препаратов для нуждающихся',
      image: '/img/835878b7-90e3-41f4-b857-8e9ba6a4af6c.jpg'
    },
    { 
      name: 'Образовательные программы', 
      raised: 900000, 
      goal: 1500000, 
      status: 'active',
      description: 'Стипендии и образовательные материалы для талантливых студентов',
      image: '/img/c2985e66-7ebc-4f6b-a6eb-e9f68fdf2543.jpg'
    },
  ];

  const reports = [
    { period: '2024 Q3', amount: 4200000, projects: 12, beneficiaries: 850 },
    { period: '2024 Q2', amount: 3800000, projects: 10, beneficiaries: 720 },
    { period: '2024 Q1', amount: 3200000, projects: 8, beneficiaries: 650 },
  ];

  const chartData = [
    { month: 'Янв', amount: 2800000, projects: 6 },
    { month: 'Фев', amount: 3100000, projects: 7 },
    { month: 'Мар', amount: 3200000, projects: 8 },
    { month: 'Апр', amount: 3500000, projects: 9 },
    { month: 'Май', amount: 3700000, projects: 9 },
    { month: 'Июн', amount: 3800000, projects: 10 },
    { month: 'Июл', amount: 4000000, projects: 11 },
    { month: 'Авг', amount: 4100000, projects: 11 },
    { month: 'Сен', amount: 4200000, projects: 12 },
  ];

  const expenseData = [
    { category: 'Медицина', value: 40, amount: 4800000 },
    { category: 'Образование', value: 25, amount: 3000000 },
    { category: 'Детские дома', value: 20, amount: 2400000 },
    { category: 'Спорт', value: 10, amount: 1200000 },
    { category: 'Прочее', value: 5, amount: 600000 },
  ];

  const colors = ['#2563eb', '#16a34a', '#dc2626', '#ca8a04', '#9333ea'];

  const chartConfig = {
    amount: { label: 'Сумма, ₽' },
    projects: { label: 'Проекты' },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border bg-card">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-center">
            <div className="flex space-x-12">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    item.active ? 'text-primary border-b-2 border-primary pb-2' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Logo in center */}
          <div className="flex justify-center mt-6">
            <div className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-xl">
              БЛАГОТВОРИТЕЛЬНЫЙ ФОНД
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Делаем мир лучше вместе
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Наш фонд объединяет людей для помощи тем, кто в ней нуждается. 
            Прозрачность, отчетность и эффективность — наши главные принципы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold">
              <Icon name="Heart" size={20} className="mr-2" />
              Сделать пожертвование
            </Button>
            <Button variant="outline" size="lg" className="font-semibold">
              <Icon name="FileText" size={20} className="mr-2" />
              Посмотреть отчеты
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">₽12.2M</div>
              <div className="text-muted-foreground">Собрано средств</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2,220</div>
              <div className="text-muted-foreground">Получили помощь</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30</div>
              <div className="text-muted-foreground">Активных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Лет работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Текущие проекты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый проект проходит тщательный отбор и контроль. 
              Мы регулярно публикуем отчеты о расходовании средств.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Badge variant="secondary">Активен</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Собрано</span>
                        <span className="font-semibold">
                          ₽{(project.raised / 1000000).toFixed(1)}M из ₽{(project.goal / 1000000).toFixed(1)}M
                        </span>
                      </div>
                      <Progress value={(project.raised / project.goal) * 100} className="h-2" />
                    </div>
                    <Button className="w-full" variant="outline">
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                      Поддержать проект
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Финансовые отчеты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полная прозрачность использования пожертвований — 
              основа доверия наших благотворителей.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Expense Distribution Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Распределение расходов</CardTitle>
                  <CardDescription>
                    Направления использования средств в 2024 году
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            formatter={(value, name, props) => [
                              `${value}% (₽${(props.payload.amount / 1000000).toFixed(1)}M)`,
                              props.payload.category
                            ]}
                          />
                        }
                      />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Monthly Donations Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Динамика пожертвований</CardTitle>
                  <CardDescription>
                    Рост объема средств и количества проектов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <LineChart data={chartData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Line 
                        type="monotone" 
                        dataKey="amount" 
                        stroke="#2563eb" 
                        strokeWidth={3}
                        dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            formatter={(value) => [
                              `₽${(Number(value) / 1000000).toFixed(1)}M`,
                              'Средства'
                            ]}
                          />
                        }
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Reports Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {reports.map((report, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {report.period}
                      <Icon name="TrendingUp" size={20} className="text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Средства</span>
                        <span className="font-semibold">₽{(report.amount / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Проекты</span>
                        <span className="font-semibold">{report.projects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Получили помощь</span>
                        <span className="font-semibold">{report.beneficiaries}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать полный отчет
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground mb-8">
              Готовы присоединиться к нашей миссии или у вас есть вопросы? 
              Мы всегда открыты для диалога.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Icon name="Mail" size={40} className="text-primary mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@fond.org</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="Phone" size={40} className="text-primary mb-4" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="MapPin" size={40} className="text-primary mb-4" />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Добрых дел, 1</p>
              </div>
            </div>

            <Button size="lg" className="font-semibold">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Благотворительный фонд. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Условия использования
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
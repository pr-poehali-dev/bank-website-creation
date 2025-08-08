import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [transferAmount, setTransferAmount] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50" style={{fontFamily: 'Open Sans, sans-serif'}}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-banking-gold to-banking-navy rounded-lg flex items-center justify-center">
                <Icon name="Banknote" className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800" style={{fontFamily: 'Montserrat, sans-serif'}}>ЗолотоБанк</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#internet-bank" className="text-gray-700 hover:text-primary transition-colors">Интернет-банк</a>
              <a href="#cards" className="text-gray-700 hover:text-primary transition-colors">Карты</a>
              <a href="#deposits" className="text-gray-700 hover:text-primary transition-colors">Депозиты</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О банке</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="LogIn" className="w-4 h-4 mr-2" />
              Войти
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Банк для
                <span className="bg-gradient-to-r from-banking-gold to-banking-navy bg-clip-text text-transparent"> современной жизни</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Управляйте финансами легко и безопасно. Переводы, платежи, депозиты — всё в одном приложении.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                <Icon name="Smartphone" className="w-5 h-5 mr-2" />
                Открыть счёт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Посмотреть видео
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-banking-gold/20 to-banking-navy/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/files/07a61b0e-e66f-4386-b018-625feeacb392.jpg" 
              alt="Директор ЗолотоБанка" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>Наши услуги</h2>
          <p className="text-xl text-gray-600">Всё для управления вашими финансами</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-banking-gold to-banking-navy rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="CreditCard" className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl" style={{fontFamily: 'Montserrat, sans-serif'}}>Карты</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">Дебетовые и кредитные карты с выгодными условиями</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-banking-gold to-banking-navy rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="TrendingUp" className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl" style={{fontFamily: 'Montserrat, sans-serif'}}>Депозиты</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">Высокие проценты по вкладам и гибкие условия</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-banking-gold to-banking-navy rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="ArrowLeftRight" className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl" style={{fontFamily: 'Montserrat, sans-serif'}}>Переводы</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">Быстрые переводы по России и за рубеж</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-banking-gold to-banking-navy rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Shield" className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl" style={{fontFamily: 'Montserrat, sans-serif'}}>Безопасность</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">Надёжная защита ваших средств и данных</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transfer and Payment System */}
      <section id="internet-bank" className="bg-white/40 backdrop-blur-sm py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>Система переводов и платежей</h2>
            <p className="text-xl text-gray-600">Отправляйте деньги и оплачивайте услуги мгновенно</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Money Transfer */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  <Icon name="Send" className="w-6 h-6 mr-3 text-primary" />
                  Денежный перевод
                </CardTitle>
                <CardDescription className="text-base">
                  Переводите деньги по номеру телефона или карты
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Получатель</Label>
                  <Input 
                    id="recipient" 
                    placeholder="+7 900 123-45-67 или 1234 5678 9012 3456"
                    className="text-lg py-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Сумма перевода</Label>
                  <div className="relative">
                    <Input 
                      id="amount" 
                      type="number" 
                      placeholder="0"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      className="text-lg py-3 pr-12"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">₽</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transfer-type">Тип перевода</Label>
                  <Select>
                    <SelectTrigger className="text-lg py-3">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instant">Мгновенный (0.5%)</SelectItem>
                      <SelectItem value="fast">Быстрый (0.3%)</SelectItem>
                      <SelectItem value="regular">Обычный (бесплатно)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить перевод
                </Button>
              </CardContent>
            </Card>

            {/* Payment System */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  <Icon name="Receipt" className="w-6 h-6 mr-3 text-secondary" />
                  Оплата услуг
                </CardTitle>
                <CardDescription className="text-base">
                  Оплачивайте коммунальные услуги, связь, интернет
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Категория услуг</Label>
                  <Select>
                    <SelectTrigger className="text-lg py-3">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utilities">Коммунальные услуги</SelectItem>
                      <SelectItem value="mobile">Мобильная связь</SelectItem>
                      <SelectItem value="internet">Интернет</SelectItem>
                      <SelectItem value="tv">Телевидение</SelectItem>
                      <SelectItem value="insurance">Страхование</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account">Номер лицевого счёта</Label>
                  <Input 
                    id="account" 
                    placeholder="Введите номер счёта"
                    className="text-lg py-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-amount">Сумма к оплате</Label>
                  <div className="relative">
                    <Input 
                      id="payment-amount" 
                      type="number" 
                      placeholder="0"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                      className="text-lg py-3 pr-12"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">₽</span>
                  </div>
                </div>
                <Button className="w-full text-lg py-6 bg-secondary hover:bg-secondary/90">
                  <Icon name="CreditCard" className="w-5 h-5 mr-2" />
                  Оплатить услугу
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>Банковские карты</h2>
          <p className="text-xl text-gray-600">Выберите карту под ваш образ жизни</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-banking-gold/20 to-transparent rounded-bl-full"></div>
            <CardHeader>
              <CardTitle className="text-2xl" style={{fontFamily: 'Montserrat, sans-serif'}}>Классическая</CardTitle>
              <CardDescription className="text-gray-300">Дебетовая карта для ежедневных покупок</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Кешбэк до</p>
                <p className="text-3xl font-bold text-banking-gold">5%</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-400" />Бесплатное обслуживание</li>
                <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-400" />Снятие в банкоматах</li>
                <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-400" />Мобильный банк</li>
              </ul>
              <Button className="w-full bg-banking-gold hover:bg-banking-gold/90 text-gray-900 font-semibold">
                Оформить карту
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-banking-gold via-yellow-500 to-banking-gold text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"></div>
            <CardHeader>
              <CardTitle className="text-2xl" style={{fontFamily: 'Montserrat, sans-serif'}}>Золотая</CardTitle>
              <CardDescription className="text-yellow-100">Премиальная карта с расширенными возможностями</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-yellow-200">Кешбэк до</p>
                <p className="text-3xl font-bold">10%</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-300" />VIP-зона в аэропортах</li>
                <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-300" />Консьерж-сервис 24/7</li>
                <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-300" />Страхование путешествий</li>
              </ul>
              <Button className="w-full bg-white text-banking-gold hover:bg-gray-100 font-semibold">
                Оформить карту
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-banking-navy via-blue-600 to-banking-navy text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"></div>
            <CardHeader>
              <CardTitle className="text-2xl" style={{fontFamily: 'Montserrat, sans-serif'}}>Кредитная</CardTitle>
              <CardDescription className="text-blue-100">Кредитная карта с льготным периодом</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-blue-200">Лимит до</p>
                <p className="text-3xl font-bold">1 000 000₽</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-300" />120 дней без процентов</li>
                <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-300" />Гибкий платёж</li>
                <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-300" />Рассрочка в магазинах</li>
              </ul>
              <Button className="w-full bg-white text-banking-navy hover:bg-gray-100 font-semibold">
                Оформить карту
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deposits Section */}
      <section id="deposits" className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>Депозиты</h2>
            <p className="text-xl text-gray-600">Приумножайте накопления с выгодной процентной ставкой</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl" style={{fontFamily: 'Montserrat, sans-serif'}}>Накопительный</CardTitle>
                <CardDescription>Пополняемый депозит с возможностью частичного снятия</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-r from-banking-gold/10 to-banking-navy/10 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Процентная ставка</p>
                  <p className="text-4xl font-bold text-primary">7.5%</p>
                  <p className="text-sm text-gray-500">годовых</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-500" />Минимальная сумма: 10 000₽</li>
                  <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-500" />Срок: от 3 месяцев</li>
                  <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-500" />Пополнение в любое время</li>
                </ul>
                <Button className="w-full">Открыть депозит</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl" style={{fontFamily: 'Montserrat, sans-serif'}}>Максимальный доход</CardTitle>
                <CardDescription>Срочный депозит с максимальной процентной ставкой</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Процентная ставка</p>
                  <p className="text-4xl font-bold text-green-600">9.2%</p>
                  <p className="text-sm text-gray-500">годовых</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-500" />Минимальная сумма: 100 000₽</li>
                  <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-500" />Срок: 12 месяцев</li>
                  <li className="flex items-center"><Icon name="Check" className="w-4 h-4 mr-2 text-green-500" />Капитализация процентов</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Открыть депозит</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>О банке</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ЗолотоБанк — это современная финансовая экосистема, которая объединяет лучшие традиции 
            банковского дела с инновационными технологиями.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-banking-gold to-banking-navy rounded-full mx-auto mb-6 flex items-center justify-center">
              <Icon name="Users" className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>2M+ клиентов</h3>
            <p className="text-gray-600">Нам доверяют миллионы людей по всей России</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-banking-gold to-banking-navy rounded-full mx-auto mb-6 flex items-center justify-center">
              <Icon name="MapPin" className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>500+ отделений</h3>
            <p className="text-gray-600">Развитая сеть офисов и банкоматов</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-banking-gold to-banking-navy rounded-full mx-auto mb-6 flex items-center justify-center">
              <Icon name="Award" className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>25 лет опыта</h3>
            <p className="text-gray-600">Четверть века надёжного сервиса</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-banking-gold to-banking-navy rounded-lg flex items-center justify-center">
                  <Icon name="Banknote" className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>ЗолотоБанк</h3>
              </div>
              <p className="text-gray-400">Современный банк для современной жизни</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Карты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Депозиты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кредиты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Переводы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center"><Icon name="Phone" className="w-4 h-4 mr-2" />8 800 555-35-35</p>
                <p className="flex items-center"><Icon name="Mail" className="w-4 h-4 mr-2" />info@zolotobank.ru</p>
                <p className="flex items-center"><Icon name="Clock" className="w-4 h-4 mr-2" />Круглосуточно</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2024 ЗолотоБанк. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Icon name="Facebook" className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Twitter" className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Instagram" className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
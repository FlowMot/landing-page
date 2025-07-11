"use client";

import React from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <header className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-2xl">🐾</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">PetCarePlus</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Início
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Sobre
              </a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Serviços
              </a>
              <a href="#team" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Equipe
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Contato
              </a>
            </nav>
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="py-20 bg-gradient-to-r from-green-600 to-green-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cuidando do seu <span className="text-green-200">melhor amigo</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Oferecemos cuidados veterinários de excelência com amor, dedicação e tecnologia de ponta para garantir a saúde e felicidade do seu pet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
                Agendar Consulta
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Emergência 24h
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre a PetCarePlus</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Há mais de 15 anos cuidando da saúde e bem-estar dos pets com profissionalismo, carinho e tecnologia de ponta.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossa Missão</h3>
                <p className="text-gray-600 mb-6">
                  Proporcionar cuidados veterinários de excelência, combinando experiência profissional com amor genuíno pelos animais. 
                  Acreditamos que cada pet merece viver uma vida plena e saudável.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
                    <div className="text-sm text-gray-600">Pets Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Emergências</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Satisfação</div>
                  </div>
                </div>
              </div>
              <div className="bg-green-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Instalações Modernas</h4>
                  <p className="text-gray-600">
                    Equipamentos de última geração em um ambiente acolhedor e seguro para seu pet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
              <p className="text-xl text-gray-600">Cuidados completos para todas as necessidades do seu pet</p>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="mb-12"
            >
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-6xl">🩺</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Consultas Gerais</h3>
                    <p className="text-gray-600">Exames de rotina, diagnósticos e acompanhamento da saúde do seu pet.</p>
                  </div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl">💉</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Vacinação</h3>
                    <p className="text-gray-600">Calendário completo de vacinas para manter seu pet protegido.</p>
                  </div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <div className="text-white text-6xl">🛁</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Banho e Tosa</h3>
                    <p className="text-gray-600">Cuidados estéticos profissionais para deixar seu pet sempre bonito.</p>
                  </div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                    <div className="text-white text-6xl">🏥</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cirurgias</h3>
                    <p className="text-gray-600">Procedimentos cirúrgicos com equipamentos modernos e segurança total.</p>
                  </div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <div className="text-white text-6xl">🚨</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Emergência 24h</h3>
                    <p className="text-gray-600">Atendimento de urgência disponível 24 horas por dia, 7 dias por semana.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section id="team" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossa Equipe</h2>
              <p className="text-xl text-gray-600">Profissionais especializados e apaixonados pelo que fazem</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">👨‍⚕️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. João Silva</h3>
                <p className="text-green-600 font-medium mb-2">Diretor Clínico</p>
                <p className="text-gray-600">Especialista em clínica geral com 20 anos de experiência</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">👩‍⚕️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dra. Maria Santos</h3>
                <p className="text-green-600 font-medium mb-2">Cirurgiã Veterinária</p>
                <p className="text-gray-600">Especialista em cirurgias de alta complexidade</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">👨‍⚕️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Carlos Lima</h3>
                <p className="text-green-600 font-medium mb-2">Especialista em Emergências</p>
                <p className="text-gray-600">Responsável pelo atendimento 24h de emergências</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para cuidar do seu pet?</h2>
            <p className="text-green-100 mb-8 text-lg">
              Agende uma consulta hoje mesmo e proporcione o melhor cuidado para seu companheiro.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors text-lg">
              Agendar Agora
            </button>
          </div>
        </section>

        <section id="location" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossa Localização</h2>
              <p className="text-xl text-gray-600">Venha nos visitar em nossa moderna clínica</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Fácil Acesso</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Endereço</p>
                      <p className="text-gray-600">Rua das Flores, 123 - Centro, Goiânia - GO</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-sm">🕒</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Horário de Funcionamento</p>
                      <p className="text-gray-600">Segunda à Sexta: 8h às 18h | Sábado: 8h às 12h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-sm">🚗</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Estacionamento</p>
                      <p className="text-gray-600">Estacionamento gratuito para clientes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-xl font-bold">Mapa Interativo</p>
                    <p className="text-green-100">Clique para abrir no Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-2xl">🐾</span>
                </div>
                <h3 className="text-2xl font-bold">PetCarePlus</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Cuidando dos seus pets com amor, dedicação e profissionalismo há mais de 15 anos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-white">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-white">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-white">💬</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Consultas Gerais</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vacinação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cirurgias</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Banho e Tosa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergência 24h</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 (62) 3333-4444</li>
                <li>📱 (62) 99999-8888</li>
                <li>📧 contato@petcareplus.com</li>
                <li>🌐 www.petcareplus.com</li>
              </ul>
            </div>
          </div>
          
          <hr className="my-8 border-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PetCarePlus. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              CNPJ: 12.345.678/0001-99 | CRMV-GO: 12345
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

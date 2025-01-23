"use client";

import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Clínica Veterinária PetCare</h1>
          <nav className="flex space-x-6">
            <a href="#about" className="hover:underline">
              Quem Somos
            </a>
            <a href="#services" className="hover:underline">
              Serviços
            </a>
            <a href="#location" className="hover:underline">
              Localização
            </a>
            <a href="#contact" className="hover:underline">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Quem Somos
          </h2>
          <p className="text-lg text-gray-600 text-center">
            A <span className="font-bold text-green-600">Clínica Veterinária PetCare</span> é referência em cuidado animal.
            Oferecemos serviços de alta qualidade, com uma equipe apaixonada por cuidar do seu pet.
            Desde consultas rotineiras até procedimentos especializados, cuidamos do que mais importa: a saúde e bem-estar do seu amigo.
          </p>
        </div>
      </section>

      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          navigation={true}
          loop
        >
          <SwiperSlide>
            <div className="h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://bensvet.com.br/wp-content/uploads/2020/09/servicos-veterinarios-mais-procurados-capa-blogpost.jpg')" }}>
              <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
                <h2 className="text-3xl text-white font-bold">Consultas e Exames</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Servicos-de-Banho-e-Tosa-Como-Proporcionar-uma-Experiencia-Tranquila-e-Agradavel-para-o-seu-pet.jpg')" }}>
              <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
                <h2 className="text-3xl text-white font-bold">Banho e Tosa</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://static-file.petz.com.br/landingpage/seres/reminder/vaccines.jpg')" }}>
              <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
                <h2 className="text-3xl text-white font-bold">Cirurgias Especializadas</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="location" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Localização
          </h2>
          <p className="text-lg text-gray-600 text-center mb-6">
            Visite-nos em nossa clínica ou clique no mapa para abrir no Google Maps!
          </p>
          <div className="flex justify-center">
            <a
              href="https://goo.gl/maps/XR3Pfh2QFypNYY7N7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://biamapas.com.br/wp-content/uploads/2021/04/GOIANIA.png"
                alt="Mapa da Clínica"
                className="rounded-lg shadow-lg hover:shadow-xl transition"
              />
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-lg font-bold">Clínica Veterinária PetCare</p>
            <p>CNPJ: 12.345.678/0001-99</p>
            <p>Telefone: (11) 98765-4321</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-gray-200">Facebook</a>
              <a href="#" className="hover:text-gray-200">Instagram</a>
              <a href="#" className="hover:text-gray-200">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

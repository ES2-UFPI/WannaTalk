import ListaRoteiros from "../components/ListaRoteiros";
import NavBar from "../components/NavBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const carouselItems = [
  {
    id: 1,
    title: "Imersão em Línguas",
    description: "Mergulhe em uma nova língua com nossos chats interativos.",
    image: "https://primeraplana.mx/wp-content/uploads/2022/06/Cursos-de-Idiomas.jpg"
  },
  {
    id: 2,
    title: "Treinamento Personalizado",
    description: "Chats personalizados para atender às suas necessidades de aprendizado.",
    image: "https://viagemeturismo.abril.com.br/wp-content/uploads/2020/05/idiomas.jpg?quality=90&strip=info&w=720&h=440&crop=1"
  },
  {
    id: 3,
    title: "Recursos Interativos",
    description: "Acesse recursos adicionais para aprimorar seu aprendizado.",
    image: "https://primeraplana.mx/wp-content/uploads/2022/06/Cursos-de-Idiomas.jpg"
  },
  // Adicione mais itens conforme necessário
];

const ImageWithFallback = ({ src, alt, fallback }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallback)}
      className="w-full h-60 object-cover"
    />
  );
};

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Removendo as setas para simplificar o layout
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <NavBar />

      <div className="flex flex-col items-center px-4 py-12">
        <section className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Bem-vindo ao WannaTalk</h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Nossa plataforma ajuda você a treinar novas línguas em diversas situações por meio de chats de Inteligência Artificial.
          </p>

          

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold">O que é o WannaTalk?</h2>
              <p className="mt-2">A plataforma projetada para aprimorar seu treinamento em novas línguas através de interações dinâmicas.</p>
            </div>
            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold">Como vou aprender novas línguas?</h2>
              <p className="mt-2">Utilizando chats com Inteligência Artificial, você poderá praticar com outros usuários e avançar no seu aprendizado.</p>
            </div>
            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold">Recursos adicionais</h2>
              <p className="mt-2">Explore recursos e dicas para otimizar seu aprendizado e aproveitar ao máximo nossa plataforma.</p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Roteiros mais populares do dia</h2>
          <ListaRoteiros />
        </section>
      </div>
    </main>
  );
}
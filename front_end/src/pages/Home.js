import ListaRoteiros from "../components/ListaRoteiros";
import NavBar from "../components/NavBar";
import Rodape from "../components/Rodape";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import "../styles/style.home.css";

const carouselItems = [
  {
    id: 1,
    title: "Imersão em Línguas",
    description: "Mergulhe em uma nova língua com nossos chats interativos.",
    image:
      "https://primeraplana.mx/wp-content/uploads/2022/06/Cursos-de-Idiomas.jpg",
  },
  {
    id: 2,
    title: "Treinamento Personalizado",
    description:
      "Chats personalizados para atender às suas necessidades de aprendizado.",
    image:
      "https://viagemeturismo.abril.com.br/wp-content/uploads/2020/05/idiomas.jpg?quality=90&strip=info&w=720&h=440&crop=1",
  },
  {
    id: 3,
    title: "Recursos Interativos",
    description: "Acesse recursos adicionais para aprimorar seu aprendizado.",
    image:
      "https://primeraplana.mx/wp-content/uploads/2022/06/Cursos-de-Idiomas.jpg",
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
      className="w-full h-60 object-cover rounded-lg"
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

  // Função para rolar suavemente para a seção específica
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar />
      <main className="bg-gray-50 min-h-screen flex flex-col">
        <div className="flex-1 px-4 py-12">
          {/* Seção Principal com Imagem e Botão */}
          <section className="flex w-full max-w-4xl mx-auto mb-12 principal">
            <div className="principal-1">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                Treinar <mark className="text-blue-500">novas línguas</mark> em
                diversas situações!
              </h2>
              <button
                onClick={() => scrollToSection("section2")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-6"
              >
                Saber Mais
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2021/10/02/Illustration-with-young-people-talking-Graphics-18175733-1.png"
                className="w-full object-cover rounded-lg"
                alt="Imagem principal mostrando um exemplo de treinamento em línguas"
              />
            </div>
          </section>
          <div className="sessao-bandeiras">
            <section className="bandeiras">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                  alt="Inglês"
                />
                <p>Inglês</p>
              </div>
              <div>
                <img
                  src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/01/bandeira-da-espanha.jpg"
                  alt="Espanhol"
                />
                <p>Espanhol</p>
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/1200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png"
                  alt="Francês"
                />
                <p>Francês</p>
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
                  alt="Alemão"
                />
                <p>Alemão</p>
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
                  alt="Italiano"
                />
                <p>Italiano</p>
              </div>
            </section>
          </div>
          {/* Carrossel */}
          <section className="w-full max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Saber Mais
            </h2>
            <Slider {...settings}>
              {carouselItems.map((item) => (
                <div key={item.id} className="px-4">
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      fallback="https://via.placeholder.com/600x300?text=Imagem+de+Fallback"
                    />
                    <div className="p-4 w-full absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-300 mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </section>

          {/* Bloco Informativo */}
          <section id="section2" className="w-full max-w-4xl mx-auto mb-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold">O que é o WannaTalk?</h2>
                <p className="mt-2">
                  A plataforma projetada para aprimorar seu treinamento em novas
                  línguas através de interações dinâmicas.
                </p>
              </div>
              <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold">
                  Como vou aprender novas línguas?
                </h2>
                <p className="mt-2">
                  Utilizando chats com Inteligência Artificial, você poderá
                  praticar com outros usuários e avançar no seu aprendizado.{" "}
                </p>
              </div>
              <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold">Recursos adicionais</h2>
                <p className="mt-2">
                  Explore recursos e dicas para otimizar seu aprendizado e
                  aproveitar ao máximo nossa plataforma.
                </p>
              </div>
            </div>
          </section>

          {/* Seção de Roteiros Populares */}
          <div className="roteiros-populares">
            <section className="w-full max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Roteiros mais populares do dia
              </h2>
              <ListaRoteiros />
            </section>
          </div>
        </div>

        <Rodape />
      </main>
    </div>
  );
}

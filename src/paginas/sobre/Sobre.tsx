import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import sobreImg from '../../assets/img/sobre-foto.png';
import { AndroidLogo, House, Trash } from 'phosphor-react';

const Sobre: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-white to-gray-400 px-6 py-24 sm:py-5 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-100 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-100">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-red-600">Conheça o nosso projeto</p>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Event Hub - Rede Ancora</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Somos uma solução inovadora dedicada a transformar a forma como a Rede ANCORA organiza e gerencia seus eventos online. Nosso objetivo é aumentar o engajamento e a participação tanto dos colaboradores internos quanto dos clientes e franqueados em mais de 760 lojas.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img src={sobreImg} alt="" className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] lg:w-full" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                No Event Hub, buscamos não apenas simplificar a gestão de eventos online, mas também oferecer ferramentas poderosas para aumentar a interação e o envolvimento do público. Queremos que cada evento seja uma oportunidade para conectar, engajar e recompensar os participantes de forma significativa.
                Nossa plataforma permite o cadastro e gerenciamento de empresas, funcionários e eventos online de maneira eficiente. Com uma interface intuitiva e amigável, facilitamos todo o processo de organização, desde a criação do evento até a análise de resultados.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Nossa Visão</h2>
              <p className="mt-6">
                Estamos comprometidos em continuar aprimorando nossa solução com base no feedback dos usuários e nas tendências do mercado de eventos online. Nosso objetivo é oferecer uma experiência cada vez mais completa e personalizada, adicionando recursos avançados de personalização e análise de dados.
                Uma abordagem abrangente que combina gestão eficiente, interação do público e recompensas por engajamento em uma única plataforma, garantindo uma experiência excepcional para todos os envolvidos.
              </p>
              <div className="mt-8">
                <iframe 
                  className="w-full rounded-xl" 
                  height="315" 
                  src="https://www.youtube.com/embed/iYSbJ3_82hA?si=gcXXEWvX4qQjLC5p"
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

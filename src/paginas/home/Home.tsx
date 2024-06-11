import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeLogo from '../../assets/img/home-img.png';
import carousel1 from '../../assets/img/pexels-bertellifotografia-3321791.jpg';
import carousel2 from '../../assets/img/pexels-fauxels-3184325.jpg';
import carousel3 from '../../assets/img/pexels-canvastudio-3153198.jpg';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
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
                <div className="flex justify-center px-4">
                    <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-30 items-center py-1'>
                        <div className="flex flex-col gap-4 items-center md:items-right text-center md:text-left">
                            <h2 className='text-3xl md:text-5xl text-gray-800 font-bold'>Seja bem-vindo!</h2>
                            <p className='text-lg md:text-xl text-gray-600'>
                                Clique e veja os próximos eventos da Rede Ancora
                            </p>
                            <div className="flex flex-col md:flex-row justify-around gap-4">
                                <ModalPostagem />
                                <Link to="/postagens" className='rounded bg-red-500 hover:bg-red-400 text-white py-2 px-4'>Ver Eventos</Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src={homeLogo} alt="Escudo do Mar Logo" className='w-full md:w-3/4' />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center px-4 py-8">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop
                        autoPlay
                        interval={3000}
                        className="w-full md:w-3/4 rounded-lg shadow-lg"
                    >
                        <div>
                            <img className="carousel-image" src={carousel1} alt="Event 1" />
                        </div>
                        <div>
                            <img className="carousel-image" src={carousel2} alt="Event 2" />               
                        </div>
                        <div>
                            <img className="carousel-image" src={carousel3} alt="Event 3" />
                            
                        </div>
                    </Carousel>
                </div>
                <div className="flex justify-center px-4 py-8">
                    <h2 className='text-3xl md:text-3xl text-gray-800 font-bold text-left gap-20'>Próximos Eventos</h2>
                </div>
                <ListaPostagens />
            </div>
        </>
    );
}

export default Home;

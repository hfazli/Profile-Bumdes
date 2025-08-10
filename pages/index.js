import { useEffect, useState, useCallback } from "react";
import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import NavBarTop from '../components/NavBarTop';
import Footer from '../components/Footer';
import BackToTop from "../components/BackToTop";
import StatisticLink from "../components/StatisticLink";
import imageLogo from "../public/logo.png";
import img1 from "../public/desa.jpg";
import imgDesa2 from "../public/desa2.jpg";
import imgEmpang from "../public/empang.jpg";
import imgLele from "../public/lele.jpg";
import Carousel, { Modal, ModalGateway } from 'react-images';
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css'; 
import "swiper/css/pagination"
import "swiper/css/autoplay";
// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// install Swiper modules
// SwiperCore.use([Autoplay]);
SwiperCore.use([Autoplay, Pagination]);

const heroImages = [
    { 
        src: imgDesa2, 
        alt: "Desa Kedungwaringin", 
        title: "Desa Kedungwaringin", 
        description: "Selamat datang di Desa Kedungwaringin, Cikarang, Bekasi. Desa yang berkomitmen membangun ekonomi masyarakat melalui BUMDes dan pengembangan potensi lokal" 
    },
    { 
        src: imgEmpang, 
        alt: "Peternakan Bebek & Entok Desa",     
        title: "Peternakan Bebek & Entok", 
        description: "Kawasan peternakan bebek & entok modern untuk pengembangan ekonomi desa" 
    },
    { 
        src: imgLele, 
        alt: "Budidaya Ikan", 
        title: "Budidaya Ikan", 
        description: "Program unggulan budidaya ikan lele dan ikan patin dengan sistem bioflok modern" 
    },
    { 
        src: "/sawah.mp4", 
        alt: "Video Pertanian Sawah", 
        title: "Aktivitas Pertanian Sawah", 
        description: "Dokumentasi kegiatan pertanian sawah di Kedungwaringin",
        isVideo: true
    },
];

export default function Home({ posts, agendas, videos, photos }) {
    let [namaDesa, setNamaDesa] = useState("Kedungwaringin");
    let [namaKecamatan, setNamaKecamatan] = useState("Cikarang");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        AOS.init({
            once: true,
        });
        setIsMounted(true);
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
        namaKecamatan = localStorage.getItem("namaKecamatan");
        setNamaKecamatan(namaKecamatan);

        // Auto slide functionality
        const slideInterval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % heroImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + heroImages.length) % heroImages.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Take only 3 item as featured
    const featuredPost = posts.slice(0, 4);
    const featuredAgenda = agendas.slice(0, 4);
    const featuredVideo = videos.slice(0, 2);
    const featuredPhotos = photos.slice(0, 6);

    // For Image Lightbox & Carousel 
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const lightboxStyles = {
        header: (base, state) => {
            const opacity = 1;
            const transform = "translateY(10px)";
            const top = "-10";
            return { ...base, opacity, transform, top };
        },
        navigation: (base, state) => {
            const opacity = 1;
            const background = "rgba(0, 0, 0, 0.8)";
            return { ...base, opacity, background };
        },
        navigationPrev: (base, state) => {
            const background = "rgba(0, 0, 0, 0.5) !important";
            return { ...base, background };
        },
        navigationNext: (base, state) => {
            const background = "rgba(0, 0, 0, 0.5) !important";
            return { ...base, background };
        },
        footer: (base, state) => {
            const opacity = 1;
            const transform = "translateY(-10px)";
            const bottom = "-10";
            return { ...base, opacity, transform, bottom };
        }
    };

    return (
        <>
            <style jsx>
                {`
                .calendar-grid {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 2px;
                    font-size: 12px;
                }
                .calendar-header {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 2px;
                    font-weight: bold;
                    background-color: var(--bg-color-secondary);
                    padding: 5px 0;
                    margin-bottom: 5px;
                    text-align: center;
                    font-size: 11px;
                }
                .calendar-header span {
                    padding: 3px;
                    color: var(--text-color-primary);
                }
                .calendar-body {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 2px;
                }
                .calendar-body span {
                    padding: 5px 2px;
                    text-align: center;
                    border: 1px solid #e0e0e0;
                    background-color: var(--bg-color-primary);
                    color: var(--text-color-secondary);
                    min-height: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                }
                .calendar-body span:hover {
                    background-color: var(--bg-color-secondary);
                }
                .calendar-month {
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    padding: 15px;
                    background-color: var(--bg-card-primary);
                }
                .holiday-info {
                    border-top: 1px solid #e0e0e0;
                    padding-top: 8px;
                }
                @media (max-width: 768px) {
                    .calendar-grid {
                        font-size: 10px;
                    }
                    .calendar-body span {
                        min-height: 20px;
                        font-size: 9px;
                        padding: 3px 1px;
                    }
                    .calendar-header {
                        font-size: 10px;
                    }
                }

                /* Hero Slider Styles */
                .hero-slider-container {
                    width: 100%;
                    height: 100vh;
                    position: relative;
                    overflow: hidden;
                    margin: 0;
                    padding: 0;
                }
                
                .hero-slider {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .hero-slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 1s ease-in-out;
                }
                
                .hero-slide.active {
                    opacity: 1;
                }
                
                .hero-slide img, .hero-slide video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
                
                .hero-slide-image {
                    object-fit: cover !important;
                    object-position: center !important;
                }
                
                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3));
                    z-index: 1;
                }
                
                .hero-content {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    color: white;
                    z-index: 2;
                    width: 90%;
                    max-width: 800px;
                }
                
                .hero-title {
                    font-size: 4rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                }
                
                .hero-subtitle {
                    font-size: 1.5rem;
                    margin-bottom: 2rem;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                }
                
                .hero-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    cursor: pointer;
                    z-index: 3;
                    transition: background 0.3s ease;
                }
                
                .hero-nav:hover {
                    background: rgba(255,255,255,0.4);
                }
                
                .hero-nav.prev {
                    left: 2rem;
                }
                
                .hero-nav.next {
                    right: 2rem;
                }
                
                .hero-indicators {
                    position: absolute;
                    bottom: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 1rem;
                    z-index: 3;
                }
                
                .hero-indicator {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.5);
                    border: none;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }
                
                .hero-indicator.active {
                    background: white;
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }
                    .hero-subtitle {
                        font-size: 1.2rem;
                    }
                    .hero-nav {
                        width: 50px;
                        height: 50px;
                    }
                    .hero-nav.prev {
                        left: 1rem;
                    }
                    .hero-nav.next {
                        right: 1rem;
                    }
                }
            `}
            </style>

            <Head>
                <title>Selamat Datang di Situs Resmi Desa {namaDesa}</title>
                <meta name="description" content={`Website Desa ${namaDesa}`} />
                <link rel="icon" href="/favicon.ico" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_API_URL} />
                <meta property="og:title" content={`Situs Resmi Desa ${namaDesa}`} />
                <meta property="og:description" content={`Website Resmi Desa ${namaDesa}. Media komunikasi dan transparansi Pemerintah Desa`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/metalogo.jpg`}></meta>
            </Head>

            <NavBarTop />

            <main>

                {/* Hero Slider Section */}
                <div className="hero-slider-container">
                    <div className="hero-slider">
                        {heroImages.map((image, index) => (
                            <div 
                                key={index}
                                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                            >
                                {image.isVideo ? (
                                    <video 
                                        src={image.src}
                                        autoPlay
                                        muted
                                        loop
                                    />
                                ) : (
                                    <Image 
                                        src={image.src} 
                                        alt={image.alt}
                                        fill={true}
                                        className="hero-slide-image"
                                        priority={index === 0}
                                    />
                                )}
                                <div className="hero-overlay"></div>
                                <div className="hero-content">
                                    <h1 className="hero-title">{image.title}</h1>
                                    <p className="hero-subtitle">{image.description}</p>
                                </div>
                            </div>
                        ))}
                        
                        {/* Navigation Arrows */}
                        <button className="hero-nav prev" onClick={prevSlide}>‹</button>
                        <button className="hero-nav next" onClick={nextSlide}>›</button>
                        
                        {/* Slide Indicators */}
                        <div className="hero-indicators">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <section className="py-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-5" data-aos="fade-up" data-aos-duration="750">
                                <div className="d-flex justify-content-center">
                                    <Image alt="Logo Desa" src={imageLogo} height={250} width={250} />
                                </div>
                            </div>
                            <div className="col-md-7" data-aos="fade-up" data-aos-duration="1500">
                                <div className="text-center text-md-start mt-3 mt-md-0">
                                    <h3 className="pb-2 text-color-primary">Website Desa {namaDesa}</h3>
                                    <p className="text-color-secondary" id="scroll-to-statistic">
                                        Website Resmi Desa {namaDesa}, Kec. {namaKecamatan}, Kabupaten Bekasi, Jawa . Media komunikasi dan transparansi Pemerintah Desa kedungwaringin
                                    </p>
                                    <Link href="/sejarah">
                                        <a className="btn btn-primary shadow rounded px-3 scroll-to">Profil Desa 
                                            <i className="ms-2"><FaArrowRight/></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <StatisticLink />

           

                <div className="container my-5 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0 text-color-primary">Video</h3>
                        <Link href="/video">
                            <a className="text-decoration-none">Semua Video
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="ratio ratio-16x9">
                                <iframe 
                                    src="https://www.youtube.com/embed/JOmJCnEUFPw?si=RztlH9LRSYAhliMo" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen
                                    className="rounded"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />

            <BackToTop />
        </>
    );
};

// This gets called at build time for static generation
export async function getStaticProps() {
    try {
        // For production, you can use external APIs or local data
        // For now, using fallback data for demo purposes
        
        return {
            props: { 
                posts: [], 
                agendas: [], 
                videos: [], 
                photos: [] 
            },
            // Revalidate every hour (3600 seconds)
            revalidate: 3600,
        };
    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return {
            props: { 
                posts: [], 
                agendas: [], 
                videos: [], 
                photos: [] 
            },
            revalidate: 3600,
        };
    }
};
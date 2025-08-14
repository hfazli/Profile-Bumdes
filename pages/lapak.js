import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import BackToTop from "../components/BackToTop";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../public/1.jpg";
import img2 from "../public/2.png";
import img3 from "../public/3.jpg";
import img4 from "../public/4.jpg";
import img5 from "../public/4.jpeg";
import imgLogo from "../public/logo.png";
import imgBumdes2 from "../public/bumdes (2).jpg";
import imgLele from "../public/lele.jpg";
import imgEmpang from "../public/empang.jpg";


const title = "BUMDes Kedungwaringin";

export default function Lapak({products}) {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Array gambar untuk hero slider
    const heroImages = [
        { 
            src: img1, 
            alt: "BUMDes Kedungwaringin", 
            title: "BUMDes Kedungwaringin", 
            description: "Mengembangkan Sektor Peternakan untuk Kesejahteraan Masyarakat" 
        },
        { 
            src: imgEmpang, 
            alt: "Peternakan Bebek & Entok BUMDes",     
            title: "Peternakan Bebek & Entok", 
            description: "Kawasan peternakan bebek & entok modern untuk pengembangan ekonomi desa" 
        },
        { 
            src: imgLele, 
            alt: "Budidaya Ikan", 
            title: "Budidaya Ikan", 
            description: "Program unggulan budidaya ikan lele  dan ikan patin dengan sistem bioflok modern" 
        },
        { 
            src: "/bebek.mp4", 
            alt: "Video Peternakan Bebek", 
            title: "Aktivitas Peternakan Bebek", 
            description: "Dokumentasi kegiatan peternakan bebek dan entok di BUMDes Kedungwaringin",
            isVideo: true
        },
    ];

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
        
        // Auto-slide setiap 5 detik
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % heroImages.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % heroImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + heroImages.length) % heroImages.length);
    };

    return (
        <>

            <Head>
                <title>{title}</title>
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
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                    />
                                ) : (
                                    <Image 
                                        src={image.src} 
                                        alt={image.alt}
                                        fill
                                        style={{objectFit: 'cover', objectPosition: 'center'}}
                                        priority={index === 0}
                                    />
                                )}
                                <div className="hero-overlay"></div>
                                <div className="hero-content">
                                    <h1 className="hero-title">
                                        {image.title}
                                    </h1>
                                    <p className="hero-subtitle">
                                        {image.description}
                                    </p>
                                 
                                </div>
                            </div>
                        ))}
                        
                        {/* Navigation Arrows */}
                        <button 
                            className="hero-nav prev" 
                            onClick={prevSlide}
                            aria-label="Previous slide"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                            </svg>
                        </button>
                        <button 
                            className="hero-nav next" 
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                            </svg>
                        </button>
                        
                        {/* Slide Indicators */}
                        <div className="hero-indicators">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container my-5" style={{marginTop: 0}}>
                    {/* Header BUMDes */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="card border-0 shadow-sm" data-aos="fade-up">
                                <div className="card-body text-center py-5">
                                    <div className="mb-4 d-flex justify-content-center align-items-center gap-4" data-aos="zoom-in" data-aos-delay="200">
                                        <Image 
                                            src={img2}
                                            alt="Logo BUMDes"
                                            width={120}
                                            height={120}
                                            style={{ objectFit: 'contain' }}
                                        />
                                        <Image 
                                            src={imgLogo}
                                            alt="Logo Desa"
                                            width={120}
                                            height={120}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h2 className="text-color-primary mb-3" data-aos="fade-up" data-aos-delay="300">BUMDes KaryaSejahtera</h2>
                                    <p className="text-color-secondary lead" data-aos="fade-up" data-aos-delay="400">Badan Usaha Milik Desa yang mengembangkan sektor peternakan untuk meningkatkan kesejahteraan masyarakat</p>
                                    
                                    {/* Informasi BUM Desa */}
                                    <div className="mt-4 p-4 bg-light rounded" data-aos="fade-up" data-aos-delay="500">
                                        <div className="row align-items-center mb-3">
                                            <div className="col">
                                                <h6 className="text-color-primary mb-0">Tentang BUM Desa</h6>
                                            </div>
                                        </div>
                                        <div className="text-color-secondary" style={{textAlign: 'justify', lineHeight: '1.6'}}>
                                            <p className="mb-0">
                                                BUM Desa atau Badan Usaha Milik Desa adalah badan hukum yang dimiliki oleh desa sebagai fungsi usaha desa. BUM Desa di tiap desa memiliki nama dan jenis usahanya masing-masing. Status BUM Desa menunjukkan status legalitas hukum BUM Desa. Informasi dibawah ini menunjukkan rekapitulasi BUM Desa, nama, jenis usaha, dan status BUM Desa per provinsi, kabupaten, kecamatan, dan desa.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-3">
                                            <div className="text-center p-3" data-aos="fade-up" data-aos-delay="100">
                                                <div className="mb-2">
                                                    <i className="fas fa-warehouse text-primary" style={{fontSize: '32px'}}></i>
                                                </div>
                                                <h4 className="text-color-primary">4</h4>
                                                <p className="text-color-secondary mb-0">Jenis Ternak</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center p-3" data-aos="fade-up" data-aos-delay="200">
                                                <div className="mb-2">
                                                    <i className="fas fa-paw text-success" style={{fontSize: '32px'}}></i>
                                                </div>
                                                <h4 className="text-color-primary">5.000+</h4>
                                                <p className="text-color-secondary mb-0">Ternak Aktif</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center p-3" data-aos="fade-up" data-aos-delay="300">
                                                <div className="mb-2">
                                                    <i className="fa-regular fa-truck text-info" style={{fontSize: '32px'}}></i>
                                                </div>
                                                <h4 className="text-color-primary">50+</h4>
                                                <p className="text-color-secondary mb-0">Peternak Mitra</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center p-3" data-aos="fade-up" data-aos-delay="400">
                                                <div className="mb-2">
                                                    <i className="fas fa-calendar-alt text-warning" style={{fontSize: '32px'}}></i>
                                                </div>
                                                <h4 className="text-color-primary">2018</h4>
                                                <p className="text-color-secondary mb-0">Tahun Berdiri</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Galeri BUMDes */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <h3 className="text-color-primary text-center mb-4" data-aos="fade-up">Galeri BUMDes Kedungwaringin</h3>
                            <div className="row g-1">
                                <div className="col-md-6 mb-1">
                                    <div className="card border-0 shadow-sm h-100" data-aos="fade-right" data-aos-delay="100">
                                        <Image 
                                            src={img1} 
                                            alt="Aktivitas BUMDes Kedungwaringin" 
                                            width={600}
                                            height={400}
                                            className="card-img-top"
                                            style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'center' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-1">
                                    <div className="card border-0 shadow-sm h-100" data-aos="fade-left" data-aos-delay="200">
                                        <Image 
                                            src={imgBumdes2} 
                                            alt="Kegiatan BUMDes Kedungwaringin" 
                                            width={600}
                                            height={400}
                                            className="card-img-top"
                                            style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'center' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm h-100" data-aos="fade-right" data-aos-delay="300">
                                        <Image 
                                            src={img3} 
                                            alt="Galeri BUMDes Kedungwaringin" 
                                            width={600}
                                            height={400}
                                            className="card-img-top"
                                            style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'center' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm h-100" data-aos="fade-left" data-aos-delay="400">
                                        <Image 
                                            src={img4} 
                                            alt="Dokumentasi BUMDes Kedungwaringin" 
                                            width={600}
                                            height={400}
                                            className="card-img-top"
                                            style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'center' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Unit Usaha BUMDes */}
                    <div className="row mb-5" id="unit-usaha">
                        <div className="col-lg-12">
                            <h3 className="text-color-primary text-center mb-4" data-aos="fade-up">Unit Usaha Peternakan</h3>
                            <div className="row g-4 justify-content-center">
                                <div className="col-md-6 col-lg-3">
                                    <div className="card h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay="100">
                                        <div className="card-body text-center">
                                            <div className="mb-3" style={{fontSize: '4rem'}}>
                                                🦢
                                            </div>
                                            <h5 className="text-color-primary">Peternakan Entok</h5>
                                            <p className="text-color-secondary">Budidaya entok (bebek manila) untuk produksi daging dan telur dengan kualitas unggulan</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay="200">
                                        <div className="card-body text-center">
                                            <div className="mb-3" style={{fontSize: '4rem'}}>
                                                🐟
                                            </div>
                                            <h5 className="text-color-primary">Budidaya Ikan Lele</h5>
                                            <p className="text-color-secondary">Pemeliharaan ikan lele dengan sistem bioflok untuk produktivitas tinggi dan ramah lingkungan</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay="300">
                                        <div className="card-body text-center">
                                            <div className="mb-3" style={{fontSize: '4rem'}}>
                                                🐠
                                            </div>
                                            <h5 className="text-color-primary">Budidaya Ikan Patin</h5>
                                            <p className="text-color-secondary">Budidaya ikan patin dengan teknologi modern untuk menghasilkan ikan berkualitas tinggi</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay="400">
                                        <div className="card-body text-center">
                                            <div className="mb-3" style={{fontSize: '4rem'}}>
                                                🦆
                                            </div>
                                            <h5 className="text-color-primary">Budidaya Bebek</h5>
                                            <p className="text-color-secondary">Peternakan bebek petelur dan pedaging dengan manajemen modern untuk hasil optimal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Produk Unggulan BUMDes */}
                    <div className="row mb-5" id="produk-unggulan">
                        <div className="col-lg-12">
                            <h3 className="text-color-primary text-center mb-4" data-aos="fade-up">Produk Unggulan BUMDes</h3>
                            <p className="text-center text-color-secondary mb-5" data-aos="fade-up" data-aos-delay="100">
                                Berbagai produk berkualitas tinggi hasil usaha peternakan dan perikanan BUMDes Kedungwaringin
                            </p>
                            <div className="row g-4">
                                {/* Telur Bebek */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="card h-100 border-0 shadow-sm product-card" data-aos="zoom-in" data-aos-delay="100">
                                        <div className="position-relative overflow-hidden" style={{height: '200px'}}>
                                            <Image 
                                                src="/4.jpeg" 
                                                alt="Telur Bebek" 
                                                width={300}
                                                height={200}
                                                style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                                className="card-img-top"
                                            />
                                            <div className="position-absolute top-0 end-0 bg-success text-white px-2 py-1 m-2 rounded-pill">
                                                <small className="fw-bold">Segar</small>
                                            </div>
                                        </div>
                                        <div className="card-body text-center p-3">
                                            <h5 className="text-color-primary mb-2">Telur Bebek</h5>
                                            <p className="text-color-secondary small mb-2">Telur bebek segar berkualitas tinggi</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="text-success fw-bold">Rp. 3.000/butir</span>
                                                <span className="badge bg-primary">Makanan</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ikan Lele */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="card h-100 border-0 shadow-sm product-card" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="position-relative overflow-hidden" style={{height: '200px'}}>
                                            <Image 
                                                src="/lele.jpg" 
                                                alt="Ikan Lele" 
                                                width={300}
                                                height={200}
                                                style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                                className="card-img-top"
                                            />
                                            <div className="position-absolute top-0 end-0 bg-success text-white px-2 py-1 m-2 rounded-pill">
                                                <small className="fw-bold">Fresh</small>
                                            </div>
                                        </div>
                                        <div className="card-body text-center p-3">
                                            <h5 className="text-color-primary mb-2">Lele Mutiara</h5>
                                            <p className="text-color-secondary small mb-2">Ikan lele segar hasil budidaya bioflok</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="text-success fw-bold">Rp. 15.000/kg</span>
                                                <span className="badge bg-info">Makanan</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ikan Patin */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="card h-100 border-0 shadow-sm product-card" data-aos="zoom-in" data-aos-delay="300">
                                        <div className="position-relative overflow-hidden" style={{height: '200px'}}>
                                            <Image 
                                                src="/patin.png" 
                                                alt="Ikan Patin" 
                                                width={300}
                                                height={200}
                                                style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                                className="card-img-top"
                                            />
                                            <div className="position-absolute top-0 end-0 bg-warning text-dark px-2 py-1 m-2 rounded-pill">
                                                <small className="fw-bold">Premium</small>
                                            </div>
                                        </div>
                                        <div className="card-body text-center p-3">
                                            <h5 className="text-color-primary mb-2">Ikan Patin</h5>
                                            <p className="text-color-secondary small mb-2">Ikan patin berkualitas tinggi</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="text-success fw-bold">Rp. 16.000/kg</span>
                                                <span className="badge bg-info">Makanan</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bebek Dewasa */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="card h-100 border-0 shadow-sm product-card" data-aos="zoom-in" data-aos-delay="400">
                                        <div className="position-relative overflow-hidden" style={{height: '200px'}}>
                                            <Image 
                                                src="/bumdes.jpg" 
                                                alt="Bebek Dewasa" 
                                                width={300}
                                                height={200}
                                                style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                                className="card-img-top"
                                            />
                                            <div className="position-absolute top-0 end-0 bg-primary text-white px-2 py-1 m-2 rounded-pill">
                                                <small className="fw-bold">Unggul</small>
                                            </div>
                                        </div>
                                        <div className="card-body text-center p-3">
                                            <h5 className="text-color-primary mb-2">Anak Itik</h5>
                                            <p className="text-color-secondary small mb-2">Bebek siap potong atau bertelur</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="text-success fw-bold">Rp. 15.000/ekor</span>
                                                <span className="badge bg-warning">Ternak</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kontak BUMDes */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0 shadow-sm bg-light" data-aos="fade-up" data-aos-delay="100">
                                <div className="card-body py-5">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
                                            <h4 className="text-color-primary mb-3">Tertarik Bermitra dengan BUMDes?</h4>
                                            <p className="text-color-secondary mb-0">Bergabunglah dengan kami untuk mengembangkan ekonomi desa dan meningkatkan kesejahteraan bersama. Hubungi kami untuk informasi lebih lanjut tentang program kemitraan.</p>
                                        </div>
                                        <div className="col-lg-4 text-end" data-aos="fade-left" data-aos-delay="300">
                                            <div className="d-flex flex-column gap-2">
                                                <a href="" className="btn btn-primary">
                                                    <i className="fab fa-whatsapp me-2"></i>Hubungi Kami
                                                </a>
                                                <a href="mailto:bumdes@kedungwaringin.desa.id" className="btn btn-outline-primary">
                                                    <i className="fas fa-envelope me-2"></i>Email Kami
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

// This gets called on every request to this page
export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    
    try {
        const getAllProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
        
        if (!getAllProducts.ok) {
            console.log('Products API not available, using fallback data');
            return {
                props: { products: [] },
            };
        }
        
        const products = await getAllProducts.json();
        return {
            props: { products },
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        return {
            props: { products: [] },
        };
    }
};
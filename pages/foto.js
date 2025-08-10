import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useState, useEffect, useCallback } from "react";
import BackToTop from "../components/BackToTop";

const title = "KKN UBP Karawang";

export default function Foto({ photos }) {
    // console.log(photos)
    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    })
    
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
    }

    return (
        <>
            <style jsx>
                {`
                .card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                }
                .bg-light {
                    background-color: rgba(0,0,0,0.03) !important;
                }
                .blockquote {
                    border-left: 4px solid #007bff;
                    padding-left: 1rem;
                    font-style: italic;
                }
                @media (max-width: 768px) {
                    .text-end {
                        text-align: center !important;
                        margin-top: 1rem;
                    }
                    .d-flex.flex-column {
                        flex-direction: row !important;
                        justify-content: center;
                        gap: 0.5rem !important;
                    }
                }
            `}
            </style>

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
                <div className="bg-color-primary">
                    <Breadcrumb pageName="KKN UBP" currentPage="KKN UBP Karawang" />
                </div>

                <div className="container my-5">
                    {/* Header KKN */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center py-5">
                                    <h2 className="text-color-primary mb-3">KKN UBP Karawang</h2>
                                    <h4 className="text-color-secondary mb-3">Kuliah Kerja Nyata Universitas Buana Perjuangan Karawang</h4>
                                    <p className="text-color-secondary lead">Program pengabdian masyarakat mahasiswa UBP Karawang di Desa Kedungwaringin untuk pemberdayaan dan pengembangan potensi desa</p>
                                    <div className="row mt-4">
                                        <div className="col-md-3">
                                            <div className="text-center p-3">
                                                <h4 className="text-color-primary">30+</h4>
                                                <p className="text-color-secondary mb-0">Mahasiswa KKN</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center p-3">
                                                <h4 className="text-color-primary">15+</h4>
                                                <p className="text-color-secondary mb-0">Program Kegiatan</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center p-3">
                                                <h4 className="text-color-primary">60</h4>
                                                <p className="text-color-secondary mb-0">Hari Pelaksanaan</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center p-3">
                                                <h4 className="text-color-primary">500+</h4>
                                                <p className="text-color-secondary mb-0">Masyarakat Terlibat</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Program KKN */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <h3 className="text-color-primary text-center mb-4">Program Kegiatan KKN</h3>
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body text-center">
                                            <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                                <i className="fas fa-graduation-cap fa-lg"></i>
                                            </div>
                                            <h5 className="text-color-primary">Pendidikan & Literasi</h5>
                                            <p className="text-color-secondary">Bimbingan belajar, pelatihan komputer, dan program literasi untuk anak-anak dan remaja</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body text-center">
                                            <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                                <i className="fas fa-heart fa-lg"></i>
                                            </div>
                                            <h5 className="text-color-primary">Kesehatan Masyarakat</h5>
                                            <p className="text-color-secondary">Penyuluhan kesehatan, posyandu, dan program gizi untuk ibu dan anak</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body text-center">
                                            <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                                <i className="fas fa-seedling fa-lg"></i>
                                            </div>
                                            <h5 className="text-color-primary">Pertanian & Lingkungan</h5>
                                            <p className="text-color-secondary">Pelatihan pertanian organik, pengelolaan sampah, dan pelestarian lingkungan</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body text-center">
                                            <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                                <i className="fas fa-chart-line fa-lg"></i>
                                            </div>
                                            <h5 className="text-color-primary">Pemberdayaan Ekonomi</h5>
                                            <p className="text-color-secondary">Pelatihan UMKM, manajemen keuangan, dan pengembangan usaha mikro</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body text-center">
                                            <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                                <i className="fas fa-laptop fa-lg"></i>
                                            </div>
                                            <h5 className="text-color-primary">Teknologi Digital</h5>
                                            <p className="text-color-secondary">Pengembangan website desa, digitalisasi administrasi, dan literasi digital</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body text-center">
                                            <div className="bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                                <i className="fas fa-users fa-lg"></i>
                                            </div>
                                            <h5 className="text-color-primary">Sosial & Budaya</h5>
                                            <p className="text-color-secondary">Kegiatan gotong royong, festival budaya, dan penguatan nilai-nilai sosial</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Galeri Kegiatan */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <h3 className="text-color-primary text-center mb-4">Galeri Kegiatan KKN</h3>
                            <div className="row g-3">
                                {photos.map((photo, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="card border-0 shadow-sm">
                                            <img 
                                                src={photo.src} 
                                                alt={photo.alt || `Foto ${index + 1}`}
                                                className="card-img-top"
                                                style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                                                onClick={() => openLightbox(null, { photo, index })}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <ModalGateway>
                                {viewerIsOpen ? (
                                    <Modal onClose={closeLightbox}>
                                        <Carousel 
                                            styles={lightboxStyles}
                                            showNavigationOnTouchDevice={true}
                                            currentIndex={currentImage}
                                            views={photos.map(x => ({
                                                ...x,
                                                srcset: x.srcSet,
                                                caption: x.title
                                            }))}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                        </div>
                    </div>

                    {/* Testimoni & Dampak */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <h3 className="text-color-primary text-center mb-4">Dampak & Testimoni</h3>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body">
                                            <h5 className="text-color-primary mb-3">Dampak Positif</h5>
                                            <ul className="text-color-secondary">
                                                <li>Peningkatan literasi digital masyarakat sebesar 60%</li>
                                                <li>Terbentuknya 10 kelompok usaha mikro baru</li>
                                                <li>Modernisasi sistem administrasi desa</li>
                                                <li>Peningkatan kesadaran lingkungan hidup</li>
                                                <li>Penguatan kapasitas SDM lokal</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body">
                                            <h5 className="text-color-primary mb-3">Testimoni Kepala Desa</h5>
                                            <blockquote className="blockquote">
                                                <p className="text-color-secondary">"Program KKN UBP Karawang memberikan dampak yang sangat positif bagi pengembangan Desa Kedungwaringin. Mahasiswa-mahasiswa yang terlibat membawa inovasi dan semangat baru untuk memajukan desa kami."</p>
                                                <footer className="blockquote-footer mt-2">
                                                    <cite title="Source Title">Kepala Desa Kedungwaringin</cite>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kontak & Kerjasama */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0 shadow-sm bg-light">
                                <div className="card-body py-5">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                            <h4 className="text-color-primary mb-3">Kerjasama KKN Berkelanjutan</h4>
                                            <p className="text-color-secondary mb-0">Desa Kedungwaringin terbuka untuk kerjasama berkelanjutan dengan Universitas Buana Perjuangan Karawang dalam berbagai program pengabdian masyarakat dan penelitian untuk pengembangan desa.</p>
                                        </div>
                                        <div className="col-lg-4 text-end">
                                            <div className="d-flex flex-column gap-2">
                                                <a href="mailto:ubpkarawang@ubpkarawang.ac.id" className="btn btn-primary">
                                                    <i className="fas fa-university me-2"></i>Hubungi UBP
                                                </a>
                                                <a href="tel:+628123456789" className="btn btn-outline-primary">
                                                    <i className="fas fa-phone me-2"></i>Kontak Desa
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
        const getDataPhotos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/photo`);
        
        if (!getDataPhotos.ok) {
            console.log('Photos API not available, using fallback data');
            return {
                props: { photos: [] },
            };
        }
        
        const photos = await getDataPhotos.json();
        return {
            props: { photos },
        };
    } catch (error) {
        console.error('Error fetching photos:', error);
        return {
            props: { photos: [] },
        };
    }
};
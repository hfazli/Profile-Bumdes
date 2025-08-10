import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import imgDesa from "../public/desa.jpg";
import imgHero from "../public/desa2.jpg";
import imgBkl from "../public/koperasi.jpeg";
import imgLogo from "../public/logo.png";
import Image from "next/image";
import BackToTop from "../components/BackToTop";

const title = "Sejarah";

export default function Sejarah({ posts }) {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");
    let [namaKecamatan, setNamaKecamatan] = useState("Tragah");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
        namaKecamatan = localStorage.getItem("namaKecamatan");
        setNamaKecamatan(namaKecamatan);
    });

    return (
        <>
            <style jsx>
                {`
                .maps {
                    height: 450px;
                }
                .hero-image {
                    border-radius: 12px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease;
                }
                .hero-image:hover {
                    transform: scale(1.02);
                }
                .gallery-image {
                    border-radius: 8px;
                    transition: transform 0.3s ease;
                }
                .gallery-image:hover {
                    transform: scale(1.05);
                }
                @media (max-width: 768px) {
                    .hero-image {
                        height: 250px !important;
                    }
                    .gallery-image {
                        height: 180px !important;
                    }
                }
                @media (max-width: 576px) {
                    .hero-image {
                        height: 200px !important;
                    }
                    .gallery-image {
                        height: 150px !important;
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
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/koperasi.jpeg`}></meta>
            </Head>

            <NavBarTop />

            <main>

                <BreadcrumbArea pageName="Sejarah Singkat" currentPage="Sejarah"/>

                <div className="container my-5">
                    <div className="col-lg-10 mx-auto">
                        <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
                            <h3 className="text-color-primary">Sejarah Singkat</h3>
                            <Image 
                                src={imgHero} 
                                alt="Foto Pemandangan Desa Kedungwaringin" 
                                width={800}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="img-fluid rounded my-3 hero-image"
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                priority
                            />
                            <h5 className="mt-4 text-color-primary">Uraian Singkat Profil Desa</h5>
                            <p className="text-color-secondary">Desa Kedungwaringin merupakan salah satu desa yang terletak di wilayah 
                                Kecamatan Cikarang Timur, Kabupaten Bekasi, Provinsi Jawa Barat. Desa ini memiliki sejarah yang panjang 
                                sebagai daerah pertanian dan industri yang berkembang pesat seiring dengan pertumbuhan kawasan Cikarang 
                                sebagai pusat industri di Jawa Barat.</p>
                            <p className="text-color-secondary">Kedungwaringin memiliki luas wilayah yang strategis dengan akses yang baik 
                                menuju pusat-pusat industri dan perkotaan. Desa ini terdiri dari beberapa RW dan RT dengan jumlah penduduk 
                                yang terus berkembang. Mayoritas penduduk bermata pencaharian sebagai petani, buruh industri, dan pedagang.</p>
                            <p className="text-color-secondary">Seiring dengan perkembangan zaman, Desa Kedungwaringin terus berbenah diri 
                                menjadi desa yang modern namun tetap mempertahankan nilai-nilai kearifan lokal. Berbagai program pembangunan 
                                infrastruktur dan peningkatan kesejahteraan masyarakat terus dilaksanakan untuk mewujudkan visi desa yang 
                                maju, mandiri, dan sejahtera.</p>
                            
                            {/* Gallery Foto Desa */}
                            <div className="row mt-4">
                                <div className="col-md-6 mb-3">
                                    <div className="h-100 d-flex flex-column">
                                        <Image 
                                            src={imgDesa} 
                                            alt="Suasana Desa Kedungwaringin" 
                                            width={400}
                                            height={250}
                                            className="img-fluid rounded shadow-sm gallery-image flex-grow-1"
                                            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                                        />
                                        <p className="text-center mt-2 mb-0 text-color-secondary"><small>Suasana Desa Kedungwaringin</small></p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="h-100 d-flex flex-column">
                                        <Image 
                                            src={imgBkl} 
                                            alt="Aktivitas Masyarakat Desa" 
                                            width={400}
                                            height={250}
                                            className="img-fluid rounded shadow-sm gallery-image flex-grow-1"
                                            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                                        />
                                        <p className="text-center mt-2 mb-0 text-color-secondary"><small>Aktivitas Desa Dalam Koerasi Merah Putih</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Informasi Geografis */}
                        <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
                            <h3 className="text-color-primary">Kondisi Geografis</h3>
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h5 className="mt-3 text-color-primary">Letak dan Batas Wilayah</h5>
                                    <p className="text-color-secondary">Desa Kedungwaringin terletak di koordinat geografis yang strategis 
                                        di wilayah Kecamatan Cikarang Timur, Kabupaten Bekasi. Desa ini berbatasan dengan:</p>
                                    <ul className="text-color-secondary">
                                        <li><strong>Utara:</strong> Desa Cikarang Timur</li>
                                        <li><strong>Selatan:</strong> Desa Karangasih</li>
                                        <li><strong>Timur:</strong> Desa Jayamukti</li>
                                        <li><strong>Barat:</strong> Desa Karangsentul</li>
                                    </ul>
                                    <p className="text-color-secondary mb-0">Luas wilayah desa sekitar 350 hektar dengan topografi yang relatif 
                                        datar sehingga cocok untuk kegiatan pertanian dan pembangunan infrastruktur.</p>
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center">
                                    <div className="text-center">
                                        <Image 
                                            src={imgLogo} 
                                            alt="Logo Desa Kedungwaringin" 
                                            width={200}
                                            height={200}
                                            className="img-fluid rounded"
                                            style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
                                        />
                                        <p className="mt-2 mb-0 text-color-secondary"><small>Logo Desa Kedungwaringin</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
                            <h3 className="text-color-primary">Peta Desa</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.123456789!2d107.1456789!3d-6.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418d5e8f7a9b2c%3A0x4e5f6a7b8c9d0e1f!2sKedungwaringin%2C%20Cikarang%20Timur%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1640000000000!5m2!1sid!2sid"
                                className="rounded mt-3 maps" allowFullScreen="" title="Peta Desa Kedungwaringin Cikarang"
                                loading="lazy"></iframe>
                        </div>
                         <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
                            <h3 className="text-color-primary">Peta Geospatial</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.469135782!2d107.1756789!3d-6.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15.5!3m3!1m2!1s0x2e6999cf4b8e9d0f%3A0x1a2b3c4d5e6f7890!2sDesa%20Kedungwaringin!5e1!3m2!1sid!2sid!4v1640123456790!5m2!1sid!2sid"
                                className="rounded mt-3 maps" allowFullScreen="" title="Peta Geospatial Desa Kedungwaringin"
                                loading="lazy"></iframe>
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
// export async function getServerSideProps() {
//     const getAllPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
//     const posts = await getAllPosts.json();
//     return {
//         props: { posts }, // will be passed to the page component as props
//     };
// };
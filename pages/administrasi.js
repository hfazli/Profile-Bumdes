import { useEffect } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const title = "Wilayah Administrasi";

export default function InformasiPublik() {
    const namaDesa = "Kedungwaringin";
    const namaKecamatan = "Kedungwaringin";

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }, []);

    return (
        <>
            <style jsx>
                {`
                .shadow-custom {
                    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
                }
            `}
            </style>

            <Head>
                <title>{title}</title>
                <meta name="description" content={`Website Desa ${namaDesa}`} />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_API_URL} />
                <meta property="og:title" content={`Situs Resmi Desa ${namaDesa}`} />
                <meta property="og:description" content={`Website Resmi Desa ${namaDesa}. Media komunikasi dan transparansi Pemerintah Desa`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/metalogo.jpg`} />
            </Head>

            <NavBarTop />

            <main>
                <div className="bg-color-primary">
                    <Breadcrumb pageName="Administrasi" currentPage="Administrasi" />
                </div>

                <div className="container my-5">
                    <div 
                        className="card bg-card-primary border-0 shadow-custom px-3 pt-3"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h4 
                            className="text-color-primary"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            Wilayah Administrasi
                        </h4>
                        <hr className="mb-4" />
                        <h5 
                            className="text-color-primary"
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            Topografi Desa
                        </h5>
                        <p 
                            className="text-color-secondary"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Luas wilayah di Desa {namaDesa} ± 965 Ha, dengan topografi bergelombang,
                            peruntukan lahan sebagian besar untuk lahan perkebunan masyarakat,
                            kemudian untuk pemukiman, sarana umum, pemerintahan dan lainnya. Iklim
                            Desa {namaDesa} seperti desa-desa lainnya di Indonesia adalah iklim tropis
                            (musim penghujan dan musim kemarau), yang memengaruhi pola tanam
                            pertanian di Desa {namaDesa}, Kecamatan {namaKecamatan}.
                        </p>
                        <h5 
                            className="mt-3 text-color-primary"
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                            Detail Wilayah
                        </h5>
                        <div 
                            className="table-responsive col-lg-5"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <table className="table text-color-secondary table-borderless">
                                <tbody>
                                    <tr>
                                        <td>Luas Wilayah</td>
                                        <td>: 1.056 ha</td>
                                    </tr>
                                    <tr><td>Batas Wilayah</td></tr>
                                    <tr><td>Utara</td><td>: Desa Wanasari</td></tr>
                                    <tr><td>Selatan</td><td>: Desa Segarjaya</td></tr>
                                    <tr><td>Barat</td><td>: Desa Cikarang Timur</td></tr>
                                    <tr><td>Timur</td><td>: Desa Jayamukti</td></tr>
                                    <tr><td>Klimatologi</td></tr>
                                    <tr><td>Suhu</td><td>: 30ºC</td></tr>
                                    <tr><td>Curah Hujan</td><td>: 43%</td></tr>
                                    <tr><td>Kelembaban Udara</td><td>: 83%</td></tr>
                                    <tr><td>Kecepatan Angin</td><td>: 20 km/h</td></tr>
                                    <tr><td>Luas Lahan Pertanian</td></tr>
                                    <tr><td>Ladang Sawit</td><td>: 2 Ha</td></tr>
                                    <tr><td>Luas Lahan Perkebunan</td></tr>
                                    <tr><td>Perkebunan Rakyat</td><td>: 5 Ha</td></tr>
                                    <tr><td>Perkebunan Swasta</td><td>: 4 Ha</td></tr>
                                    <tr><td>Perkebunan Perorangan</td><td>: 3 Ha</td></tr>
                                    <tr><td>Luas Lahan Pemukiman</td><td>: 2 Ha/m2</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <BackToTop />
        </>
    );
}

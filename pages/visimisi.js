import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import imgDesa from "../public/desa.jpg";
import Image from "next/image";
import BackToTop from "../components/BackToTop";

const title = "Visi Misi";

export default function Sejarah({ posts }) {

    let [namaDesa, setNamaDesa] = useState("Kedungwaringin");

    useEffect(() => {
        const desa = localStorage.getItem("namaDesa");
        if (desa) {
            setNamaDesa(desa);
        }
    }, []);

    return (
        <>
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
                <BreadcrumbArea pageName="Visi Misi" currentPage="Visi Misi" />

                <div className="container my-5">
                    <div className="col-lg-10 mx-auto">
                        <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
                            <h3 className="text-color-primary">Visi Dan Misi</h3>
                            <Image
                                src={imgDesa}
                                alt="Desa"
                                className="img-fluid rounded my-3"
                            />
                            <h5 className="mt-4 text-color-primary">Visi</h5>
                            <p className="text-color-secondary">
                                “Terwujudnya Desa {namaDesa} yang Mandiri, Sejahtera, dan Berbudaya melalui Pemberdayaan Masyarakat dan Pengelolaan Sumber Daya Lokal yang Berkelanjutan”
                            </p>

                            <h5 className="text-color-primary">Misi</h5>
                            <p className="text-color-secondary mb-2">1. Meningkatkan kualitas pelayanan publik yang cepat, tepat, dan transparan.</p>
                            <p className="text-color-secondary mb-2">2. Mendorong pertumbuhan ekonomi desa melalui pengembangan UMKM dan potensi lokal.</p>
                            <p className="text-color-secondary mb-2">3. Mengembangkan infrastruktur desa yang mendukung aktivitas sosial dan ekonomi masyarakat.</p>
                            <p className="text-color-secondary mb-2">4. Meningkatkan mutu pendidikan, keterampilan, dan pemanfaatan teknologi bagi masyarakat.</p>
                            <p className="text-color-secondary mb-2">5. Mewujudkan lingkungan desa yang bersih, sehat, dan lestari.</p>
                            <p className="text-color-secondary mb-2">6. Memperkuat nilai-nilai budaya lokal dan kerukunan antarwarga.</p>
                            <p className="text-color-secondary mb-2">7. Menjalin kemitraan strategis dengan berbagai pihak dalam mendukung pembangunan desa.</p>
                            <p className="text-color-secondary mb-2">8. Meningkatkan partisipasi aktif masyarakat dalam perencanaan dan pelaksanaan pembangunan desa.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <BackToTop />
        </>
    );
}

// Optional: Server-side fetching
// export async function getServerSideProps() {
//     const getAllPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
//     const posts = await getAllPosts.json();
//     return {
//         props: { posts },
//     };
// }

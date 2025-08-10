import { useEffect } from "react";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import imgLogo from "../public/logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
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
            <style jsx>{`
                footer a:hover {
                    color: #0d6efd;
                    transition: all 1s ease;
                }
                .text-white-80 {
                    color: #d4d4d4;
                }
                .border-top-dark {
                    border-top: 1px solid #4141417c !important;
                }
                .text-15 {
                    font-size: 16px;
                }
                .bg-dark {
                    background-color: #171717 !important;
                }
            `}</style>

            <footer className="bg-dark text-white border-top-primary">
                <div className="container pt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-4 my-2 my-md-0 text-center text-md-start">
                            <h4>Tentang Web</h4>
                            <div className="d-flex justify-content-center justify-content-md-start mb-2">
                                <Image src={imgLogo} className="img-fluid" alt="image" height={100} width={100} />
                            </div>
                            <p className="text-white-80 text-15">Website Resmi Desa {namaDesa}, Kec. {namaKecamatan}, Kabupaten Bekasi, Jawa
                                Barat. Media komunikasi dan transparansi Pemerintah Desa</p>
                        </div>
                        <div className="col-md-6 col-lg-3 my-2 my-md-0 text-center text-md-start">
                            <h5 className="mb-3">Kontak Desa</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none text-15">
                                <li className="my-2">
                                    <div className="d-flex justify-content-center justify-content-md-start">
                                        <i className="me-2"><FaMapMarkerAlt/></i>
                                        <span>Jl. Kedung Gede No.39, Kedungwaringin, Kec. Kedungwaringin, Kabupaten Bekasi, Jawa Barat 17540</span>
                                    </div>
                                </li>
                                <li className="my-2">
                                    <div className="d-flex justify-content-center justify-content-md-start">
                                        <i className="me-2"><FaPhoneAlt/></i>
                                        <span>081 234 567 89</span>
                                    </div>
                                </li>
                                <li className="my-2">
                                    <div className="d-flex justify-content-center justify-content-md-start">
                                        <i className="me-2"><FaEnvelope/></i>
                                        <span>desakedungwaringin767@gmail.com</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 my-2 my-md-0 text-center text-md-start">
                            <h5 className="mb-3">Kontak Penting</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none text-15">
                                <li className="my-2">
                                    Puskesmas - (0321) 876208
                                </li>
                                <li className="my-2">
                                    Polsek - (0321) 861184
                                </li>
                                <li className="my-2">
                                    Damkar - (0321) 854928
                                </li>
                                <li className="my-2">
                                    PLN - (021) 89108282
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row pt-3 pb-md-0 mt-4 border-top-dark">
                        <div className="col-md-8  text-center text-md-start text-15">
                            <p className="text-white-80">Copyright © KKN 8 Kedungwaringin 2025
                                <a href="#" className="text-decoration-none text-white-80"> Desa {namaDesa}</a>. 
                                All rights reserved
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 text-center text-md-end ">
                            <a href="https://web.facebook.com/" className="mx-2 text-white-80" aria-label="Facebook" rel="noreferrer" target="_blank">
                                <i className=""><FaFacebook /></i>
                            </a>
                            <a href="https://twitter.com/" className="mx-2 text-white-80" aria-label="Twitter" rel="noreferrer" target="_blank">
                                <i className=""><FaTwitter /></i>
                            </a>
                            <a href="https://www.youtube.com/" className="mx-2 text-white-80" aria-label="Youtube" rel="noreferrer" target="_blank">
                                <i className=""><FaYoutube /></i>s
                            </a>
                            <a href="https://www.instagram.com/" className="mx-2 text-white-80" aria-label="Instagram" rel="noreferrer" target="_blank">
                                <i className=""><FaInstagram /></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
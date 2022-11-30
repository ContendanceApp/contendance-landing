import React, { useEffect } from "react";
import SimpledHero from "../components/SimpledHero";
import Head from "next/head";
import OrderStep from "../components/OrderStep";
import CopyrightText from "../components/CopyrightText";
import AOS from "aos";
import "aos/dist/aos.css";

const SKPengguna = () => {
    useEffect(() => {
        AOS.init({ once: false });
    });

    return (
        <>
            <Head>
                <title>Cara Pemesanan & Pembayaran</title>
                <meta name="keywords" content="medika" />
            </Head>
            <SimpledHero
                title="Cara Pemesanan & Pembayaran"
                sub="AlinaMed menyediakan cara pemesanan & pembayaran yang mudah"
            />
            <div className="service-wrapper w-full mx-auto lg:my-0 my-24 xl:px-12 lg:px-36 md:px-20 sm:px-10 px-5">
                <OrderStep
                    img="step-1.jpg"
                    title="Pilih Dokter Favoritmu"
                    desc="Terdapat banyak pilihan dokter yang telah bersertifikasi yang siap membantu melayani keluhanmu tiap saat. Pilih dokter yang menurutmu tepat & cocok demi kenyamananmu saat melakukan pemeriksaan."
                    num={1}
                    subDesc="Semua dokter telah bersertifikasi"
                    icon="sertifikasi.svg"
                />
                <OrderStep
                    img="step-2.jpg"
                    title="Pilih Jadwal Praktek"
                    desc="Jadwal praktek yang beragam ditiap dokter, tidak hanya saat weekdays namun juga saat weekend. Pilih hari dan waktu dari jadwal dokter yang tersedia yang cocok dengan jadwal yang sudah kamu rencanakan sebelumnya."
                    num={2}
                    subDesc="Jadwal praktek fleksibel & banyak opsi"
                    icon="jadwal.svg"
                />
                <OrderStep
                    img="step-1.jpg"
                    title="Pilih Layanan Dokter"
                    desc="Beragam pilihan layanan kesehatan yang telah disiapkan oleh dokter-dokter yang telah berpengalaman di bidangnya. Pilih salah satu atau lebih layanan yang ingin kamu pesan dari dokter pilihanmu sebelumnya."
                    num={3}
                    subDesc="Layanan yang beragam & aman"
                    icon="add-layanan.svg"
                />
                <OrderStep
                    img="step-4.jpg"
                    title="Pilih Metode Pembayaran"
                    desc="Beragam pilihan metode pembayaran yang dijamin aman & telah disupport oleh AlinaMed. Pilih metode pembayaran yang menurutmu cocok untuk melakukan checkout pesanan yang telah kamu order."
                    num={4}
                    subDesc="Berbagai macam metode pembayaran"
                    icon="credit-card.svg"
                />
                <OrderStep
                    img="step-5.jpg"
                    title="Konfirmasi Pembayaran"
                    desc="Aplikasi AlinaMed akan langsung melakukan konfirmasi pembayaranmu secara otomatis pada beberapa metode pembayaran. Kamu tinggal bayar & tunggu beberapa saat hingga pembayaranmu terkonfirmasi."
                    num={5}
                    subDesc="Pembayaran yang dijamin aman"
                    icon="shield-check.svg"
                />
                <OrderStep
                    img="step-6.jpg"
                    title="Pemesanan Berhasil"
                    desc="AlinaMed menyediakan bukti pemesanan & pembayaran yang konkret dengan rincian yang tepat untuk tiap order yang berhasil kamu pesan. Kamu juga bisa daftar bukti pemesanan pada halaman riwayat pemesanan."
                    num={6}
                    subDesc="Tersedia bukti pemesanan layanan"
                    icon="clipboard-check.svg"
                />
            </div>
            <CopyrightText />
        </>
    );
};

export default SKPengguna;

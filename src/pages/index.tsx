import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CardPros from "../components/CardPros";
import CardPoli from "../components/CardPoli";
import CardIpg from "../components/CardIpg";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Service from "../components/Service";
import Head from "next/head";
// import PricingCard from "../components/CardPricing";
// import MitraCard from "../components/MitraCard";
// import CardLiputan from "../components/CardLiputan";
// import InputField from "../components/InputField";
import Footer from "../components/Footer";
// import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

// import {
//   useGetServicesLazyQuery,
//   useGetMitraLazyQuery,
//   useLandingMutationMutation,
// } from "../graphql-client/resource";

const Index = () => {
  useEffect(() => {
    AOS.init({ once: true });
  });

  // const [inputNama, setInputNama] = useState("");
  // const [inputEmail, setInputEmail] = useState("");
  // const [inputNohp, setInputNohp] = useState("");

  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const [fetchServices, { data: dataService }] = useGetServicesLazyQuery({
  //   onError: () => {
  //     //   alert("Services: CTO to Server");
  //   },
  // });

  // const [fetchMitras, { data: dataMitra }] = useGetMitraLazyQuery({
  //   onError: () => {
  //     //   alert("Mitra: CTO to Server");
  //   },
  // });

  // const [inputVisitor] = useLandingMutationMutation({
  //   onCompleted: () => {
  //     setIsSubmitted(true);
  //   },
  //   onError: () => {
  //     //   alert("Input Visitor Failed");
  //   },
  // });

  // React.useEffect(() => {
  //   fetchServices({});
  //   fetchMitras({});
  // }, []);

  const closeSidebarHandler = (e: any) => {
    e.preventDefault();
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".dark-overlay");
    const burger = document.querySelector(".burger");
    const times = document.querySelector(".times-icon");

    if (sidebar?.classList.contains("-translate-x-full")) {
      overlay?.classList.remove("invisible");
      overlay?.classList.remove("opacity-0");
      sidebar?.classList.remove("-translate-x-full");
      burger?.classList.add("hidden");
      times?.classList.remove("hidden");
    } else {
      overlay?.classList.add("invisible");
      overlay?.classList.add("opacity-0");
      sidebar?.classList.add("-translate-x-full");
      burger?.classList.remove("hidden");
      times?.classList.add("hidden");
    }
  };

  // const carouselRef = React.useRef<Slider | null>(null);

  // const settings = {
  //   className: "center",
  //   mobileFirst: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "0",
  //   speed: 500,
  //   arrows: false,
  //   // initialSlide: 3,
  //   dots: false,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // const submitSubscribeHandler = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   inputVisitor({
  //     variables: { name: inputNama, email: inputEmail, phone: inputNohp },
  //   });
  // };

  return (
    <>
      <Head>
        <title>Contendance</title>
        <meta name="keywords" content="attendance" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Navbar />
      <Sidebar />
      <div
        className="dark-overlay w-full h-full fixed z-30 transition-all duration-300 invisible opacity-0"
        onClick={(e) => closeSidebarHandler(e)}
      ></div>
      <Hero />
      {/* Card Pros */}
      <div className="card-pros-wrapper relative">
        <div className="container xl:px-12 lg:px-36 md:px-20 sm:px-10 px-8 mx-auto grid xl:grid-cols-3 grid-cols-1 2xl:gap-28 gap-14">
          <div
            className="z-10"
            data-aos="fade-up-right"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <CardPros
              icon="heart"
              title="Simplest Interface"
              desc="Interface yang mudah digunakan dan dapat diakses dimana saja dan kapan saja."
            />
          </div>
          <div
            className="z-10"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <CardPros
              icon="wallet"
              title="Cheapest Cost"
              desc="Biaya instalasi dan maintenance yang sangat terjangkau dari pada produk lainnya"
            />
          </div>
          <div
            className="z-10"
            data-aos="fade-up-left"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <CardPros
              icon="tech"
              title="Newest Technology"
              desc="Dibangun dengan teknologi terbaru untuk memberikan pengalaman terbaik"
            />
          </div>
        </div>
        <div className="img-floating-logo absolute -right-20 xl:top-2/4 -bottom-1/4">
          <Image
            src="/assets/images/contendance-gradient.svg"
            width={500}
            height={500}
            alt="AlinaMed Logo"
            className="icon-contendance opacity-20"
          />
        </div>
      </div>
      {/* Polis */}
      <div className="polis-wrapper sm:mt-32 mt-10 pt-28" id="teknologi">
        <div className="container mx-auto xl:px-12 lg:px-36 md:px-20 sm:px-10 px-8">
          <div className="service-header xl:mb-20 mb-14">
            <h1
              className="title-text text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              teknologi yang digunakan
            </h1>
            <p
              className="subtitle-text text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
            >
              Contendance dibangun dari beberapa teknologi masa kini <br /> yang
              pasti terdapat pada tiap smartphone
            </p>
          </div>
          <div className="service-wrapper w-full mx-auto grid xl:grid-cols-3 grid-cols-1 gap-5">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <CardPoli
                icon="beacon"
                title="iBeacon"
                desc="Alat pemancar sinyal (broadcast) Bluetooth Low Energy (BLE)"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <CardPoli
                icon="bluetooth"
                title="Bluetooth (BLE)"
                desc="Teknologi Bluetooth hemat energi yang dapat digunakan untuk penghubung"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
            >
              <CardPoli
                icon="map_pin"
                title="GPS"
                desc="Teknologi untuk menentukan lokasi seseorang dengan menggunakan satelit"
              />
            </div>
          </div>
        </div>
      </div>
      {/* IPG */}
      <div
        className="ipg sm:pt-44 pt-28 lg:mb-20 sm:mb-64 mb-80"
        id="pembayaran"
      >
        <div className="container 2xl:px-12 xl:px-10 mx-auto relative">
          <div
            className="pricing-bg ipg-bg sm:w-full w-11/12 sm:mx-0 mx-auto bg-primary py-20 overflow-hidden relative z-0"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <div className="absolute sm:-left-20 sm:-top-20 -left-32 -top-32">
              <Image
                src="/assets/images/ellipse-pricing.svg"
                width={250}
                height={250}
                alt="Ellipse"
              />
            </div>
          </div>
          <div className="service-wrapper sm:w-full w-11/12 mx-auto flex lg:flex-row flex-col items-center absolute transform -translate-x-1/2 -translate-y-1/2 lg:top-1/2 top-3/4 left-1/2">
            <div className="ipg-header 2xl:ml-0 lg:ml-16 lg:mt-0 sm:mt-20 mt-36 sm:px-0 px-5 lg:block flex flex-col items-center">
              <h1
                className="title-text lg:text-left text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                Dibangun oleh tim profesional
              </h1>
              <p
                className="sub-header-text tracking-tight ipg-sub lg:text-left text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="700"
              >
                Contendance dibangun oleh tim profesional yang berpengalaman di
                bidangnya dan memiliki hak cipta yang jelas serta terdokumentasi
                dengan baik.
              </p>
              <div
                className="flex items-center mt-2"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="900"
              >
                <Image
                  src="/assets/images/icons/shield-done.svg"
                  width={25}
                  height={25}
                  alt="Secure"
                />
                <p className="text-white font-semibold opacity-90 ml-2">
                  Secure App
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                <Link href="/">
                  <a>
                    <button className="btn">lihat dokumentasi HAKI</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="ipg-card-wrapper lg:ml-10 lg:w-2/4 lg:px-0 md:px-28 sm:px-16 px-5 w-full grid grid-cols-2 gap-5 lg:mt-0 sm:mt-14 mt-10">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                <CardIpg image="a4-wppl.svg" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="700"
              >
                <CardIpg image="PENS.png" />
              </div>
              {/* <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="900"
              >
                <CardIpg image="ovo.jpg" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="1100"
              >
                <CardIpg image="bni.jpg" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="1300"
              >
                <CardIpg image="mandiri.jpg" />
              </div> */}
              {/* <div
                className="card-ipg bg-white rounded-lg w-full text-primary font-bold relative"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="1500"
              >
                <Link href="/metode-pembayaran">
                  <a>
                    <div className="h-full w-full text-lg text-primary">
                      <div className="flex w-full h-full items-center justify-center">
                        <span className="mr-2">Lainnya</span>
                        <svg
                          className="w-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute right-3 top-3">
                      <Image
                        src="/assets/images/contendance-gradient.svg"
                        width={30}
                        height={30}
                        alt="AlinaMed Logo"
                        className="icon-contendance opacity-20"
                      />
                    </div>
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="services-wrapper sm:mt-32 mt-10 pt-28" id="fitur">
        <div className="container mx-auto xl:px-12 lg:px-36 md:px-20 sm:px-10 px-8">
          <div className="service-header xl:mb-32 mb-14">
            <h1
              className="title-text text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              apa saja fitur Contendance?
            </h1>
            <p
              className="subtitle-text text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
            >
              Contendance memiliki fitur-fitur yang lengkap dan mudah digunakan
            </p>
          </div>
          <div className="service-wrapper w-full mx-auto">
            <Service
              img="presensi-pengguna"
              title="Presensi Pengguna"
              desc="Presensi mudah tanpa ID Card & antre hanya dengan bluetooth & GPS dari ponselmu"
              num={1}
            />
            <Service
              img="riwayat-presensi"
              title="Riwayat Presensi"
              desc="Cek daftar riwayat tiap kehadiranmu lewat fitur riwayat presensi"
              num={2}
            />
            <Service
              img="jadwal-matkul"
              title="Jadwal Matkul"
              desc="Lihat semua detail mata kuliah yang kamu ambil dengan mudah lewat fitur jadwal matkul"
              num={3}
            />
            <Service
              img="daftar-ruangan"
              title="Daftar Ruangan"
              desc="Akses informasi semua ruangan yang ada di kampusmu dengan mudah"
              num={4}
            />
          </div>
        </div>
      </div>
      {/* Pricing */}
      {/* <div className="pricing sm:pt-32 mb-20" id="harga">
        <div className="container 2xl:px-12 xl:px-10 mx-auto">
          <div
            className="pricing-bg mx-auto lg:w-full w-11/12 bg-primary py-20 text-center overflow-hidden relative z-0"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <div className="absolute -left-20 -top-20">
              <Image
                src="/assets/images/ellipse-pricing.svg"
                width={250}
                height={250}
                alt="Ellipse"
              />
            </div>
            <h1
              className="title-text"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
            >
              harga layanan alinaCare
            </h1>
            <p
              className="sub-header-text tracking-tight"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="900"
            >
              Pembayaran yang mudah dan paling terjangkau
            </p>
          </div>
          <div className="pricing-card-wrapper grid xl:grid-cols-2 grid-cols-1 2xl:gap-28 xl:gap-14 gap-12 xl:mx-0 sm:mx-20 mx-10 relative -mt-72 z-10">
            {dataService?.serviceList.map((v) => {
              return <PricingCard key={v.serviceType} data={v} />;
            })}
          </div>
        </div>
      </div> */}
      {/* Mitra */}
      {/* <div className="mitra sm:pt-52 pt-20 w-full mx-auto" id="mitra">
        <div className="service-header mb-20">
          <h1
            className="title-text text-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            mitra AlinaMed
          </h1>
          <p
            className="subtitle-text text-center px-10"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="700"
          >
            Bersama membangung akses kesehatan yang lebih baik
          </p>
        </div>
        <div className="mx-auto">
          <div
            className="mb-10"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="900"
          >
            <Slider {...settings} ref={carouselRef}>
              {dataMitra?.mitraList.map((v) => {
                return <MitraCard key={v.serial} data={v} />;
              })}
              {dataMitra?.mitraList.map((v) => {
                return <MitraCard key={v.serial} data={v} />;
              })}
            </Slider>
            <div className="w-full flex justify-center">
              <div
                className="custom-arrow bg-white p-3 flex items-center rounded-md cursor-pointer z-30 mr-3 prev-arrow"
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.slickPrev();
                  }
                }}
              >
                <Image
                  src="/assets/images/icons/arrow-left-green.svg"
                  width={24}
                  height={24}
                  alt="Prev"
                />
              </div>
              <div
                className="custom-arrow bg-white p-3 flex items-center rounded-md cursor-pointer next-arrow"
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.slickNext();
                  }
                }}
              >
                <Image
                  src="/assets/images/icons/arrow-right-green.svg"
                  width={24}
                  height={24}
                  alt="Next"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Liputan */}
      {/* <div className="liputan-wrapper sm:mt-32 mt-10 pt-28">
        <div className="container mx-auto xl:px-12 lg:px-36 md:px-20 sm:px-10 px-8">
          <div className="service-header xl:mb-20 mb-14">
            <h1
              className="title-text text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              liputan tentang AlinaMed
            </h1>
            <p
              className="subtitle-text text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
            >
              AlinaMed telah diliput oleh dibeberapa media nasional
            </p>
          </div>
          <div
            className="service-wrapper w-full mx-auto flex flex-wrap xl:gap-x-0 sm:gap-x-5 gap-x-10 gap-y-8"
            data-aos="zoom-in-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <CardLiputan
              image="urbanasia"
              link="https://www.urbanasia.com/contendance-aplikasi-yang-bisa-datangkan-dokter-hingga-antarkan-obat-U9985"
            />
            <CardLiputan
              image="unairnews"
              link="http://news.unair.ac.id/2020/03/02/contendance-aplikasi-buatan-alumni-fk-unair-yang-bisa-datangkan-dokter-di-mana-dan-kapan-saja/"
            />
            <CardLiputan
              image="krjogja"
              link="https://www.krjogja.com/angkringan/gaya-hidup/teknologi/contendance-aplikasi-anak-bangsa-bisa-panggil-dokter-ke-rumah/"
            />
            <CardLiputan
              image="kumparan"
              link="https://kumparan.com/beritaanaksurabaya/mengenal-contendance-aplikasi-perawat-luka-diabetes-luka-bakar-dan-asam-urat-1uTO1yZ72aa"
            />
            <CardLiputan image="narasi" link="https://youtu.be/nHsm1ulpYqs" />
            <CardLiputan
              image="detiknews"
              link="https://news.detik.com/berita-jawa-timur/d-5235516/contendance-aplikasi-yang-bisa-datangkan-dokter-di-mana-dan-kapan-saja"
            />
            <CardLiputan
              image="telkomsel"
              link="https://www.telkomsel.com/about-us/blogs/deretan-startup-healthtech-yang-bikin-akses-layanan-kesehatan-jadi-lebih-terjangkau"
            />
          </div>
        </div>
      </div> */}
      {/* Get In Touch */}
      {/* <div className="get-in-touch sm:mt-32 mt-10 pt-28">
        <div className="container mx-auto xl:px-12 lg:px-36 md:px-20 sm:px-10 px-8">
          <div className="flex items-center justify-center xl:flex-row flex-col">
            <div
              className="gitch-text bg-primary rounded-2xl w-full sm:p-14 p-7 xl:-mr-52 xl:mb-0 -mb-14"
              data-aos="flip-right"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <div className="gitch-text-header">
                <h1 className="title-text leading-9 mb-1">
                  ikuti terus alinaMed & dapatkan keuntungannya!
                </h1>
                <p className="sub-header-text tracking-tight">
                  Jangan lupa buat hubungi kami jika kamu ada kritik & saran
                  atau pertanyaan tentang AlinaMed ya!
                </p>
              </div>
              <div className="gitch-btn-call mt-10 sm:w-max -ml-210">
                <a href="tel:6282140404164">
                  <div className="flex items-center phone-number-container sm:w-max rounded-full">
                    <div className="rounded-call bg-white rounded-full p-3 text-primary w-max border-8 border-primary">
                      <svg
                        className="w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="text-white font-bold ml-4 mr-6">
                      <p>+62 8214 0404 164</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="gitch-input grid xl:grid-cols-3 grid-cols-1 bg-white border border-gray-200 w-full relative overflow-hidden py-24 px-10 rounded-2xl"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-delay="700"
            >
              <div className="absolute left-2 -bottom-16">
                <Image
                  src="/assets/images/ellipse-green.svg"
                  width={250}
                  height={250}
                  alt="Ellipse"
                />
              </div>
              <div className="img-price-bg absolute xl:top-7 xl:right-7 top-5 right-5">
                <Image
                  src="/assets/images/contendance-gradient.svg"
                  width={100}
                  height={100}
                  alt="AlinaMed Logo"
                  className="icon-contendance opacity-20"
                />
              </div>
              <div></div>
              <form
                className="col-span-2 xl:px-3 sm:px-10 px-2 xl:mr-20 xl:ml-6"
                onSubmit={(e) => submitSubscribeHandler(e)}
              >
                <div
                  className={`form-group ${
                    isSubmitted ? "opacity- invisible" : ""
                  }`}
                >
                  <div className="input-group">
                    <InputField
                      type="text"
                      placeholder="Nama"
                      value={inputNama}
                      onChange={(value: string) => {
                        setInputNama(value);
                      }}
                    />
                    <InputField
                      type="email"
                      placeholder="Email"
                      value={inputEmail}
                      onChange={(value: string) => {
                        setInputEmail(value);
                      }}
                    />
                    <InputField
                      type="number"
                      placeholder="No HP"
                      value={inputNohp}
                      onChange={(value: string) => {
                        setInputNohp(value);
                      }}
                    />
                  </div>
                  <div className="flex items-center mt-3 opacity-75 justify-center">
                    <Image
                      src="/assets/images/icons/shield-done-green.svg"
                      width={25}
                      height={25}
                      alt="Secure"
                    />
                    <p className="text-primary font-semibold ml-2 tracking-tight">
                      Semua Datamu Aman, kok!
                    </p>
                  </div>
                  <button className="btn btn-icon flex items-center justify-center relative">
                    <span className="xl:mr-7 md:mr-7 sm:mr-10 mr-7">
                      berlangganan sekarang!
                    </span>
                    <div className="bg-white rounded-sm text-primary p-1 absolute right-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="success-submit absolute top-1/2 -mt-10 w-max">
                  <p
                    className={`text-primary font-bold sm:text-3xl text-2xl text-center ${
                      isSubmitted ? "" : "hidden"
                    }`}
                  >
                    Datamu udah masuk, <br /> Terima kasih!
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;

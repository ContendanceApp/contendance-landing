import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const MitraCarousel = () => {
    const carouselRef = React.useRef<Slider | null>(null);

    const settings = {
        className: "center",
        mobileFirst: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        speed: 500,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="mb-10">
            <Slider {...settings} ref={carouselRef}>
                <div className="bg-white reactangle-slider outline-none transition-all duration-300 flex-col justify-between">
                    <p className="sub-header-text tracking-tight">
                        Sangat berguna untuk menambah revenue kami di masa
                        Pandemi karena dilengkapi layanan Telemedicine &
                        Homecare
                    </p>
                    <div className="mitra-info mt-5 flex items-center">
                        <div className="rounded-full border-thumb-mitra border-solid border border-white flex items-center justify-center">
                            <div className="thumb-mitra overflow-hidden rounded-full flex items-center justify-center bg-white">
                                {/* <Image
                                    src="/assets/images/mitra/dinkes.png"
                                    layout="fixed"
                                    width={30}
                                    height={25}
                                    quality={100}
                                    alt="Dinkes"
                                /> */}
                                <img
                                    src="/assets/images/mitra/bukit-asam.png"
                                    alt="rumah sakit bukit asam"
                                />
                            </div>
                        </div>
                        <h1 className="ml-3 2xl:text-xl sm:text-lg text-base font-bold capitalize tracking-tight">
                            rumah sakit bukit asam
                        </h1>
                    </div>
                </div>
                <div className="bg-white reactangle-slider outline-none transition-all duration-300 flex-col justify-between">
                    <p className="sub-header-text tracking-tight">
                        Dengan bantuan AlinaMed, proses pendaftaran pasien
                        Covid-19 menjadi lebih efisien begitu pula proses
                        isolasi mandirinya
                    </p>
                    <div className="mitra-info mt-5 flex items-center">
                        <div className="rounded-full border-thumb-mitra border-solid border border-white flex items-center justify-center">
                            <div className="thumb-mitra overflow-hidden rounded-full flex items-center justify-center bg-white">
                                <img
                                    src="/assets/images/mitra/dinkes.png"
                                    alt="dinkes"
                                />
                            </div>
                        </div>
                        <h1 className="ml-3 2xl:text-xl sm:text-lg text-base font-bold capitalize tracking-tight">
                            dinas kesehatan DKI jakarta
                        </h1>
                    </div>
                </div>
                <div className="bg-white reactangle-slider outline-none transition-all duration-300 flex-col justify-between">
                    <p className="sub-header-text tracking-tight">
                        Sekarang manajemen klinik menjadi sangat mudah dengan
                        adanya Dashboard yang disediakan oleh AlinaMed
                    </p>
                    <div className="mitra-info mt-5 flex items-center">
                        <div className="rounded-full border-thumb-mitra border-solid border border-white flex items-center justify-center">
                            <div className="thumb-mitra overflow-hidden rounded-full flex items-center justify-center bg-white">
                                <img
                                    src="/assets/images/mitra/dak.jpg"
                                    alt="dak"
                                />
                            </div>
                        </div>
                        <h1 className="ml-3 2xl:text-xl sm:text-lg text-base font-bold capitalize tracking-tight">
                            klinik dokter ayoman keluarga
                        </h1>
                    </div>
                </div>
                <div className="bg-white reactangle-slider outline-none transition-all duration-300 flex-col justify-between">
                    <p className="sub-header-text tracking-tight">
                        Sangat berguna untuk menambah revenue kami di masa
                        Pandemi karena dilengkapi layanan Telemedicine &
                        Homecare
                    </p>
                    <div className="mitra-info mt-5 flex items-center">
                        <div className="rounded-full border-thumb-mitra border-solid border border-white flex items-center justify-center">
                            <div className="thumb-mitra overflow-hidden rounded-full flex items-center justify-center bg-white">
                                <img
                                    src="/assets/images/mitra/bukit-asam.png"
                                    alt="rumah sakit bukit asam"
                                />
                            </div>
                        </div>
                        <h1 className="ml-3 2xl:text-xl sm:text-lg text-base font-bold capitalize tracking-tight">
                            rumah sakit bukit asam
                        </h1>
                    </div>
                </div>
                <div className="bg-white reactangle-slider outline-none transition-all duration-300 flex-col justify-between">
                    <p className="sub-header-text tracking-tight">
                        Dengan bantuan AlinaMed, proses pendaftaran pasien
                        Covid-19 menjadi lebih efisien begitu pula proses
                        isolasi mandirinya
                    </p>
                    <div className="mitra-info mt-5 flex items-center">
                        <div className="rounded-full border-thumb-mitra border-solid border border-white flex items-center justify-center">
                            <div className="thumb-mitra overflow-hidden rounded-full flex items-center justify-center bg-white">
                                <img
                                    src="/assets/images/mitra/dinkes.png"
                                    alt="dinkes"
                                />
                            </div>
                        </div>
                        <h1 className="ml-3 2xl:text-xl sm:text-lg text-base font-bold capitalize tracking-tight">
                            dinas kesehatan DKI jakarta
                        </h1>
                    </div>
                </div>
                <div className="bg-white reactangle-slider outline-none transition-all duration-300 flex-col justify-between">
                    <p className="sub-header-text tracking-tight">
                        Sekarang manajemen klinik menjadi sangat mudah dengan
                        adanya Dashboard yang disediakan oleh AlinaMed
                    </p>
                    <div className="mitra-info mt-5 flex items-center">
                        <div className="rounded-full border-thumb-mitra border-solid border border-white flex items-center justify-center">
                            <div className="thumb-mitra overflow-hidden rounded-full flex items-center justify-center bg-white">
                                <img
                                    src="/assets/images/mitra/dak.jpg"
                                    alt="dak"
                                />
                            </div>
                        </div>
                        <h1 className="ml-3 2xl:text-xl sm:text-lg text-base font-bold capitalize tracking-tight">
                            klinik dokter ayoman keluarga
                        </h1>
                    </div>
                </div>
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
    );
};

export default MitraCarousel;

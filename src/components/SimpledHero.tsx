import Image from "next/image";
import Link from "next/link";

type HeroProps = {
    title: string;
    sub: string;
};

const Hero = (props: HeroProps) => {
    return (
        <div className="simpled-hero bg-primary h-full relative">
            <div className="container mx-auto relative xl:px-12 lg:px-36 md:px-20 sm:px-10 px-8">
                <Link href="/" scroll={false}>
                    <a>
                        <div
                            className="custom-arrow bg-white p-3 flex items-center rounded-md absolute top-10 cursor-pointer z-30"
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-delay="500"
                        >
                            <Image
                                src="/assets/images/icons/arrow-left-green.svg"
                                width={24}
                                height={24}
                                alt="Prev"
                            />
                        </div>
                    </a>
                </Link>
            </div>
            <div
                className="hero-waves absolute w-full h-full bg-no-repeat bg-bottom bg-auto bottom-0"
                style={{
                    backgroundImage:
                        "url(/assets/images/waves/wave-simpled-hero.svg",
                }}
            ></div>
            <div className="absolute top-5 lg:right-40 right-10">
                <Image
                    src="/assets/images/alinamed-light-foo.png"
                    width={95}
                    height={95}
                    quality={100}
                />
            </div>
            <div className="container h-full mx-auto flex items-center justify-center px-5">
                <div className="hero-text text-center">
                    <h1
                        className="title-text"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-delay="500"
                    >
                        {props.title}
                    </h1>
                    <p
                        className="sub-header-text tracking-tight"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-delay="700"
                    >
                        {props.sub}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;

import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

type ServiceProps = {
    img: string;
    title: string;
    desc: string;
    num: number;
    icon: string;
    subDesc: string;
};

const OrderStep = (props: ServiceProps) => {
    return (
        <div
            className={`service order-step xl:my-52 my-36 flex items-center justify-between`}
        >
            <div
                className="img-service"
                data-aos="fade-up-right"
                data-aos-duration="500"
                data-aos-delay="500"
            >
                <Image
                    src={`/assets/images/order-step/${props.img}`}
                    width={500}
                    height={440}
                    quality={100}
                    alt={props.title}
                />
            </div>
            <div
                className="service-text flex flex-col"
                data-aos="fade-up-left"
                data-aos-duration="500"
                data-aos-delay="500"
            >
                <span className="service-num order-num text-primary font-bold sm:mr-8 mr-5">
                    {props.num}
                </span>
                <div>
                    <h2 className="title-text mt-3">{props.title}</h2>
                    <p className="subtitle-text leading-7">
                        {ReactHtmlParser(props.desc)}
                    </p>
                    <div className="sub-order-step flex items-center text-primary opacity-70 mt-6">
                        <Image
                            src={`/assets/images/order-step/icons/${props.icon}`}
                            width={20}
                            height={20}
                            alt={props.title}
                        />
                        <p className="ml-2 font-semibold tracking-tight">
                            {props.subDesc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderStep;

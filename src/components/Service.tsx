import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

type ServiceProps = {
    img: string;
    title: string;
    desc: string;
    num: number;
};

const Service = (props: ServiceProps) => {
    return (
        <div
            className={`service xl:my-20 my-36 flex items-center justify-between`}
        >
            <div
                className="img-service"
                data-aos="fade-up-right"
                data-aos-duration="500"
                data-aos-delay="500"
            >
                <Image
                    src={`/assets/images/services/${props.img}.svg`}
                    width={585}
                    height={460}
                    alt={props.title}
                />
            </div>
            <div
                className="service-text flex sm:flex-row flex-col sm:items-center"
                data-aos="fade-up-left"
                data-aos-duration="500"
                data-aos-delay="500"
            >
                <span className="service-num text-primary font-bold opacity-50 sm:mr-8 mr-5">
                    {props.num}
                </span>
                <div>
                    <h2 className="title-text">{props.title}</h2>
                    <p className="subtitle-text">
                        {ReactHtmlParser(props.desc)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Service;

import React from "react";
import Image from "next/image";

type CardProps = {
    image: string;
    link: string;
};

const CardLiputan = (props: CardProps) => {
    return (
        <div className="flex-grow lg:w-1/4 w-1/3">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <div
                    className="img-brand-liputan w-full relative my-0 mx-auto"
                    style={{
                        maxWidth: "200px",
                        height: "100px",
                        maxHeight: "100px",
                    }}
                >
                    <Image
                        src={`/assets/images/liputan/${props.image}.jpg`}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                        alt={props.image}
                    />
                </div>
            </a>
        </div>
    );
};

export default CardLiputan;

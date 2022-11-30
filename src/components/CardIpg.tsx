import React from "react";
import Image from "next/image";

type CardProps = {
    image: string;
};

const CardLiputan = (props: CardProps) => {
    return (
        <div className="card-ipg bg-white rounded-lg w-full py-3 border border-gray-200">
            <div
                className="img-card-ipg w-full relative my-0 mx-auto"
                style={{
                    maxWidth: "150px",
                    height: "100px",
                    maxHeight: "100px",
                }}
            >
                <Image
                    src={`/assets/images/ipg/${props.image}`}
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    alt={props.image}
                />
            </div>
        </div>
    );
};

export default CardLiputan;

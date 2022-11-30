import React from "react";
import CardIpg from "../components/CardIpg";

type ListProps = {
    title: string;
    desc: string;
    items: { urlImage: string }[];
    isActive: boolean;
    category: string;
};

const PaymentList = (props: ListProps) => {
    return (
        <div
            className={`payment-list py-2 w-full text-left ${
                props.isActive ? "inline-block" : "hidden"
            }`}
            data-category={props.category}
        >
            <div className="mb-10">
                <h1 className="title-text">{props.title}</h1>
                <p className="subtitle-text">{props.desc}</p>
            </div>
            <div className="payment-methode-list grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4">
                {props.items.map((item) => {
                    return (
                        <CardIpg image={item.urlImage} key={item.urlImage} />
                    );
                })}
            </div>
        </div>
    );
};

export default PaymentList;

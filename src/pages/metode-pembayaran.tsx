import React, { useState } from "react";
import SimpledHero from "../components/SimpledHero";
import Head from "next/head";
import PaymentTabBtn from "../components/PaymentTabBtn";
import PaymentList from "../components/PaymentList";
import CopyrightText from "../components/CopyrightText";

const MetodePembayaran = () => {
    const [activeIndex, setActiveIndex] = useState<number | undefined>(0);
    const [getActiveTab, setGetActiveTab] = useState("ewallets");

    const paymentMethodes = [
        {
            title: "eWallets",
            desc:
                "AlinaMed menyediakan pembayaran menggunakan eWallets/dompet digital untuk mempermudah pembayaran",
            items: [
                {
                    urlImage: "dana.jpg",
                },
                {
                    urlImage: "gopay.jpg",
                },
                {
                    urlImage: "ovo.jpg",
                },
                {
                    urlImage: "linkaja.jpg",
                },
            ],
            category: "ewallets",
            isActive: false,
        },
        {
            title: "Transfer Bank (VA)",
            desc:
                "AlinaMed menyediakan pembayaran menggunakan Virtual Account untuk mempermudah pembayaran",
            items: [
                {
                    urlImage: "bni.jpg",
                },
                {
                    urlImage: "mandiri.jpg",
                },
                {
                    urlImage: "bca.jpg",
                },
                {
                    urlImage: "bri.jpg",
                },
                {
                    urlImage: "permatabank.jpg",
                },
            ],
            category: "virtual-account",
            isActive: false,
        },
        {
            title: "Transfer Bank (Direct)",
            desc:
                "AlinaMed menyediakan pembayaran menggunakan Transfer Bank Direct yang dicek manual",
            items: [
                {
                    urlImage: "bri.jpg",
                },
            ],
            category: "direct-transfer",
            isActive: false,
        },
        {
            title: "Credit Card / Debit",
            desc:
                "AlinaMed menyediakan pembayaran menggunakan Credit Card / Debit",
            items: [
                {
                    urlImage: "visa.jpg",
                },
                {
                    urlImage: "mastercard.jpg",
                },
            ],
            category: "credit-debit",
            isActive: false,
        },
        {
            title: "Gerai Ritel",
            desc:
                "AlinaMed menyediakan pembayaran melalui Gerai Ritel terdekat dengan anda",
            items: [
                {
                    urlImage: "alfamart.jpg",
                },
                {
                    urlImage: "alfamidi.jpg",
                },
                {
                    urlImage: "indomaret.jpg",
                },
                {
                    urlImage: "dandan.jpg",
                },
            ],
            category: "retail-outlet",
            isActive: false,
        },
    ];

    const paymentListBtn = [
        {
            id: 1,
            name: "eWallets",
            category: "ewallets",
        },
        {
            id: 2,
            name: "Transfer Bank (VA)",
            category: "virtual-account",
        },
        {
            id: 3,
            name: "Transfer Bank (Direct)",
            category: "direct-transfer",
        },
        {
            id: 4,
            name: "Credit / Debit Card",
            category: "credit-debit",
        },
        {
            id: 5,
            name: "Retail Outlet / OTC",
            category: "retail-outlet",
        },
    ];

    const setActiveTab = (index: number, category: string) => {
        setActiveIndex(index);
        setGetActiveTab(category);
        paymentMethodes.forEach((item) => {
            if (item.category === category) {
                item.isActive = true;
            }
        });
    };

    let i = 0;

    return (
        <>
            <Head>
                <title>Metode Pembayaran</title>
                <meta name="keywords" content="medika" />
            </Head>
            <SimpledHero
                title="Metode Pembayaran"
                sub="Berbagai metode pembayaran yang cepat & aman"
            />
            <div className="container mt-24 mb-32 mx-auto xl:px-12 lg:px-36 md:px-20 sm:px-10 px-8">
                <select
                    className="w-full px-3 py-5 border bg-primary border-gray-200 rounded-md xl:hidden outline-none block mb-5 font-medium text-white"
                    onChange={(e) => setActiveTab(i++, e.target.value)}
                >
                    {paymentListBtn.map((item, index) => {
                        return (
                            <option
                                value={item.category}
                                key={index}
                                className="text-sub p-3 bg-white"
                            >
                                {item.name}
                            </option>
                        );
                    })}
                </select>
                <div className="grid grid-cols-4 gap-5">
                    <div className="payment-tab mr-10 col-span-1 xl:block hidden">
                        {paymentListBtn.map((item, index) => {
                            return (
                                <div
                                    key={item.id}
                                    onClick={() =>
                                        setActiveTab(index, item.category)
                                    }
                                >
                                    <PaymentTabBtn
                                        id={item.id}
                                        name={item.name}
                                        category={item.category}
                                        activeTab={activeIndex === index}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="xl:col-span-3 col-span-4">
                        {paymentMethodes.map((item, index) => {
                            return (
                                <div key={index}>
                                    <PaymentList
                                        title={item.title}
                                        desc={item.desc}
                                        items={item.items}
                                        isActive={
                                            item.category === getActiveTab
                                        }
                                        category={item.category}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <CopyrightText />
        </>
    );
};

export default MetodePembayaran;

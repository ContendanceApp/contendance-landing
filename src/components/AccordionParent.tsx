import React from "react";
import ReactHtmlParser from "react-html-parser";
// import AccordionItem from "../components/AccordionItem";

const accordionOpenParentHandler = (e: any) => {
    const panelsParent = document.querySelectorAll(".panel-parent");
    const greenLine = document.querySelectorAll(
        ".green-line-parent:nth-child(2)"
    );

    [].forEach.call(panelsParent, (el: any) => {
        el.classList.remove("show");
    });

    [].forEach.call(greenLine, (el: any) => {
        el.classList.remove("hide");
    });

    e.currentTarget
        .closest("button")
        .querySelector(".green-line-parent:nth-child(2)")
        .classList.add("hide");
    e.target.nextElementSibling.classList.add("show");
};

const accordionOpenHandler = (e: any) => {
    const panels = document.querySelectorAll(".panel");
    const greenLine = document.querySelectorAll(".green-line:nth-child(2)");

    [].forEach.call(panels, (el: any) => {
        el.classList.remove("show");
    });

    [].forEach.call(greenLine, (el: any) => {
        el.classList.remove("hide");
    });

    e.currentTarget
        .closest("button")
        .querySelector(".green-line:nth-child(2)")
        .classList.add("hide");
    e.target.nextElementSibling.classList.add("show");
};

type ItemProps = {
    title: string;
    item: any;
    show: boolean;
};

const AccordionParent = (props: ItemProps) => {
    let propsChildren = props.item.props.children;

    return (
        <>
            <button
                className="accordion bg-white text-main font-bold tracking-tight capitalize text-xl cursor-pointer w-full text-left py-8 flex items-center"
                onClick={(e) => accordionOpenParentHandler(e)}
            >
                <div className="mr-7 relative">
                    <span className="green-line-parent absolute bg-primary"></span>
                    <span
                        className={`green-line-parent absolute bg-primary ${
                            props.show ? "hide" : ""
                        }`}
                    ></span>
                </div>{" "}
                {props.title}
            </button>
            <div
                className={`panel-parent text-sub text-lg overflow-hidden border-b ${
                    props.show ? "show" : ""
                }`}
            >
                {propsChildren.map((data: any) => {
                    return (
                        <AccordionItem
                            key={data.props.title}
                            title={data.props.title}
                            desc={data.props.desc}
                            show={data.props.show}
                        />
                    );
                })}
            </div>
        </>
    );
};

const AccordionItem = ({
    title,
    desc,
    show,
}: {
    title: string;
    desc: string;
    show: boolean;
}) => {
    return (
        <>
            <button
                className="accordion bg-white text-main font-bold tracking-tight capitalize text-xl cursor-pointer w-full text-left py-8 flex items-center"
                onClick={(e) => accordionOpenHandler(e)}
            >
                <div className="mr-7 relative">
                    <span className="green-line absolute bg-primary"></span>
                    <span
                        className={`green-line absolute bg-primary ${
                            show ? "hide" : ""
                        }`}
                    ></span>
                </div>{" "}
                {title}
            </button>
            <div
                className={`panel text-sub text-lg overflow-hidden border-b ${
                    show ? "show" : ""
                }`}
            >
                <div className="text-justify leading-10 tracking-tight">
                    {ReactHtmlParser(desc)}
                </div>
            </div>
        </>
    );
};

export default AccordionParent;

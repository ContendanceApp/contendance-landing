import ReactHtmlParser from "react-html-parser";

const accordionOpenHandler = (e: any) => {
    const panels = document.querySelectorAll(".panel");
    const greenLine = document.querySelectorAll(".green-line:nth-child(2)");
    const panelsParent = document.querySelectorAll(".panel-parent");
    const greenLineParent = document.querySelectorAll(
        ".green-line-parent:nth-child(2)"
    );
    if (e.currentTarget.parentNode.classList[0] !== "panel-parent") {
        [].forEach.call(panelsParent, (el: any) => {
            el.classList.remove("show");
        });

        [].forEach.call(greenLineParent, (el: any) => {
            el.classList.remove("hide");
        });
    }

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
    desc: string;
    show: boolean;
};

const AccordionItem = (props: ItemProps) => {
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
                            props.show ? "hide" : ""
                        }`}
                    ></span>
                </div>{" "}
                {props.title}
            </button>
            <div
                className={`panel text-sub text-lg overflow-hidden border-b ${
                    props.show ? "show" : ""
                }`}
            >
                <div className="text-justify leading-10 tracking-tight">
                    {ReactHtmlParser(props.desc)}
                </div>
            </div>
        </>
    );
};

export default AccordionItem;

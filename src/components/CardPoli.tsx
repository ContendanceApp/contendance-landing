import React, { useState } from "react";
import Image from "next/image";

type CardProps = {
  icon: string;
  title: string;
  desc: string;
};

const CardPoli = (props: CardProps) => {
  const [cardHover, setCardHover] = useState(false);

  const enterCardPoliHandler = () => {
    setCardHover(true);
  };

  const leaveCardPoliHandler = () => {
    setCardHover(false);
  };

  return (
    <div className="relative">
      <div
        className="card-poli relative z-0 bg-white cursor-pointer py-8 flex flex-col items-center rounded-lg"
        onMouseEnter={() => enterCardPoliHandler()}
        onMouseLeave={() => leaveCardPoliHandler()}
      >
        <div className="img-card-poli relative">
          <div
            className={`img-card-poli-primary transition-all duration-300 ${
              cardHover ? "opacity-0" : ""
            }`}
          >
            <Image
              src={`/assets/images/poli/${props.icon}.svg`}
              width={60}
              height={60}
              alt="Card Icon"
            />
          </div>
          <div
            className={`img-card-poli-hover absolute top-0 transition-all duration-300 ${
              cardHover ? "opacity-1" : "opacity-0"
            }`}
          >
            <Image
              src={`/assets/images/poli/${props.icon}-white.svg`}
              width={60}
              height={60}
              alt="Card Icon"
            />
          </div>
        </div>
        <div className="card-poli-text mt-5 tracking-tight">
          <p className="text-main text-xl font-bold capitalize transition-all duration-300">
            {props.title}
          </p>
        </div>
      </div>
      <div
        className={`poli-popup overflow-hidden z-10 absolute transform -translate-x-1/2 top-full left-2/4 bg-white sm:text-center py-0 h-0 rounded-lg transition-all duration-300 ${
          cardHover ? "show" : ""
        }`}
      >
        <p className="text-sub">{props.desc}</p>
        <div className="absolute right-3 bottom-3">
          <Image
            src="/assets/images/contendance-gradient.svg"
            width={40}
            height={40}
            alt="AlinaMed Logo"
            className="icon-contendance opacity-20"
          />
        </div>
      </div>
    </div>
  );
};

export default CardPoli;

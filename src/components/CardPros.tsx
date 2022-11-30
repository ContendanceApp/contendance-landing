import Image from "next/image";

type CardProps = {
  icon: string;
  title: string;
  desc: string;
};

const CardPros = (props: CardProps) => {
  return (
    <div className="card-pros bg-white pb-16 pt-12 px-12">
      <Image
        src={`/assets/images/icons/${props.icon}.svg`}
        width={85}
        height={75}
        alt="Card Icon"
      />
      <div className="card-pros-text mt-10 tracking-tight">
        <p className="text-main text-xl font-bold">{props.title}</p>
        <p className="text-sub mt-1">{props.desc}</p>
      </div>
    </div>
  );
};

export default CardPros;

import BadgeDownload from "../components/BadgeDownload";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary relative py-32 pt-20 mt-60 overflow-hidden">
      <div
        className="wave-foo absolute w-full h-full bg-no-repeat bg-bottom bg-auto top-0"
        style={{
          backgroundImage: "url(/assets/images/waves/wave-foo.svg",
        }}
      ></div>
      <div className="absolute top-5 xl:right-40 right-10">
        <Image
          src="/assets/images/contendance-light-foo.svg"
          width={95}
          height={95}
          quality={100}
          className="opacity-50"
        />
      </div>
      <div className="container px-12 mx-auto flex xl:flex-row flex-col justify-start gap-x-28 mt-10">
        <div className="foo-brand">
          <Image
            src="/assets/images/contendance-logo-white.svg"
            width={250}
            height={62}
            quality={100}
            alt="Contendance Logo"
          />
          <p className="sub-header-text foo-brand-text w-full mt-2">
            Contendance adalah aplikasi yang dibangun untuk mempermudah dan
            mengurangi antrian saat melakukan presensi.
          </p>
        </div>
        <div className="foo-menu-wrapper flex flex-1 xl:justify-between xl:flex-row flex-col">
          {/* <div className="foo-menu xl:my-0 my-5">
            <p className="font-bold text-lg text-white tracking-tight mb-4">
              Media
            </p>
            <a
              href="https://www.instagram.com/contendance_id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sub-header-text tracking-tight my-3"
            >
              <img
                src="/assets/images/icons/ig.svg"
                alt="IG"
                className="mr-2"
              />
              @contendance_id
            </a>
            <a
              href="https://www.facebook.com/pages/category/Medical---Health/Contendance-Indonesia-106841261171990/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sub-header-text tracking-tight my-3"
            >
              <img
                src="/assets/images/icons/fb.svg"
                alt="FB"
                className="mr-2"
              />
              Contendance Indonesia
            </a>
            <a
              href="https://twitter.com/contendance_id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sub-header-text tracking-tight my-3"
            >
              <img
                src="/assets/images/icons/twt.svg"
                alt="TWT"
                className="mr-2"
              />
              @AlinaMed_Id
            </a>
          </div> */}
          <div className="foo-menu xl:my-0 my-5">
            <p className="font-bold text-lg text-white tracking-tight mb-4">
              Kontak
            </p>
            <a
              href="https://goo.gl/maps/YSGN2EMLF4eu1cEq6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sub-header-text tracking-tight my-3"
            >
              Jl. Raya ITS, Sukolilo, Surabaya
            </a>
            <a
              href="tel:6289670230949"
              className="flex items-center sub-header-text tracking-tight my-3"
            >
              +62 896-7023-0949
            </a>
            <a
              href="mailto:contendance@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sub-header-text tracking-tight my-3"
            >
              contendance@gmail.com
            </a>
          </div>
          <div className="foo-menu xl:my-0 my-5">
            <p className="font-bold text-lg text-white tracking-tight mb-4">
              Aplikasi
            </p>
            <Link href="/">
              <a className="flex items-center sub-header-text tracking-tight my-3">
                Syarat & Ketentuan Pengguna
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center sub-header-text tracking-tight my-3">
                Syarat & Ketentuan Mitra
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center sub-header-text tracking-tight my-3">
                Cara Pemesanan
              </a>
            </Link>
          </div>
          <div className="foo-menu xl:my-0 my-5">
            <p className="font-bold text-lg text-white tracking-tight mb-4">
              Download Contendance di
            </p>
            <BadgeDownload />
          </div>
        </div>
        <p className="absolute bottom-7 transform -translate-x-2/4 left-2/4 sub-header-text w-max tracking-tight">
          {new Date().getFullYear()} Contendance. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import Image from "next/image";

const openSidebarHandler = () => {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".dark-overlay");
  const burger = document.querySelector(".burger");
  const times = document.querySelector(".times-icon");

  if (sidebar?.classList.contains("-translate-x-full")) {
    overlay?.classList.remove("invisible");
    overlay?.classList.remove("opacity-0");
    sidebar?.classList.remove("-translate-x-full");
    burger?.classList.add("hidden");
    times?.classList.remove("hidden");
  } else {
    overlay?.classList.add("invisible");
    overlay?.classList.add("opacity-0");
    sidebar?.classList.add("-translate-x-full");
    burger?.classList.remove("hidden");
    times?.classList.add("hidden");
  }
};

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent flex items-center absolute z-40">
      <div
        className="navbar container sm:px-10 px-8 mx-auto flex items-center justify-between"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="500"
      >
        <Link href="/">
          <a>
            <Image
              src="/assets/images/contendance-logo-white.svg"
              width={160}
              height={55}
              quality={100}
              alt="Contendance's Logo"
            />
          </a>
        </Link>
        <div className="nav-menu hidden lg:inline-block">
          <Link href="/#teknologi">
            <a>Teknologi</a>
          </Link>
          <Link href="/#fitur">
            <a>Fitur</a>
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.contendance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download App
          </a>
        </div>
        <div
          className="burger-icon inline-block lg:hidden"
          onClick={() => openSidebarHandler()}
        >
          <svg
            className="w-7 burger"
            fill="#FFF"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="w-7 times-icon hidden"
            fill="#FFF"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

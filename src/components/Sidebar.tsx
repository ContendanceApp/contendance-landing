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

const Sidebar = () => {
  return (
    <div className="sidebar fixed h-full w-4/5 bg-white transition-all duration-300 z-50 transform -translate-x-full">
      <div className="sidebar-menu flex flex-col justify-center pl-8 bg-primary h-1/2">
        <a href="/#teknologi" onClick={() => openSidebarHandler()}>
          Teknologi
        </a>
        <a href="/#fitur" onClick={() => openSidebarHandler()}>
          Fitur
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.contendance"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download App
        </a>
      </div>
      <div className="absolute bottom-5 right-5">
        <Image
          src="/assets/images/alinamed-green.png"
          width={80}
          height={80}
          alt="AlinaMed Logo"
          className="icon-alinamed opacity-20"
        />
      </div>
    </div>
  );
};

export default Sidebar;

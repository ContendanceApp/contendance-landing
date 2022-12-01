import Image from "next/image";

const BadgeDownload = () => {
  return (
    <div className="badge-hero flex">
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.contendance"
        rel="noopener noreferrer"
        className="mr-3"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="700"
      >
        <div className="img-badge">
          <Image
            src="/assets/images/badge-playstore.png"
            width={170}
            height={50}
            quality={100}
            alt="Badge Play Store"
          />
        </div>
      </a>
      {/* <a
                target="_blank"
                href="https://apps.apple.com/id/app/contendance/id1483608101?l=id"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="900"
            >
                <div className="img-badge">
                    <Image
                        src="/assets/images/badge-appstore.png"
                        width={170}
                        height={50}
                        quality={100}
                        alt="Badge App Store"
                    />
                </div>
            </a> */}
    </div>
  );
};

export default BadgeDownload;

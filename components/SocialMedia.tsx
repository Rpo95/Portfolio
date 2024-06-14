import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row w-full items-center justify-between">
        <Link
          target="_blank"
          className="w-[90px] h-[90px] border my-2  flex flex-col justify-center items-center bg-black "
          href="https://wa.me/3192391641"
        >
          <Image
            src="/whatsapp.webp"
            className="hover:scale-105"
            width={45}
            height={45}
            alt="Whastapp"
          />
        </Link>
        <Link
          target="_blank"
          className="w-[90px] h-[90px] border my-2  flex flex-col justify-center items-center bg-black "
          href="https://www.linkedin.com/in/rpo95/"
        >
          <Image
            src="/linkedin.webp"
            className="hover:scale-105"
            width={45}
            height={45}
            alt="Linkedin"
          />
        </Link>
        <Link
          target="_blank"
          className="w-[90px] h-[90px] border my-2  flex flex-col justify-center items-center bg-black "
          href="mailto:teo9515@gmail.com"
        >
          <Image
            src="/gmail.webp"
            className="hover:scale-105"
            width={45}
            height={45}
            alt="Gmail"
          />
        </Link>
        <Link
          target="_blank"
          className="w-[90px] h-[90px] border my-2  flex flex-col justify-center items-center bg-black "
          href="https://www.instagram.com/rpo95?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        >
          <Image
            src="/instagram.webp"
            className="hover:scale-105"
            width={40}
            height={40}
            alt="Instagram"
          />
        </Link>
      </div>
    </div>
  );
}

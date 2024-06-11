import Image from "next/image";

export default function SkillCard({ src, h2 }: any) {
  return (
    <div className="w-[90px] h-[90px] border my-2  flex flex-col justify-center items-center bg-black ">
      <Image src={src} alt={""} width={60} height={60} />
      <h2 className="text-white text-sm">{h2}</h2>
    </div>
  );
}

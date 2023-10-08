import Image from "next/image";
import Link from "next/link";

export default function Tab({
  title,
  url,
  icon,
  color,
}: {
  title: string;
  url: string;
  icon: string;
  color: string;
}) {
  return (
    <Link
      href={url}
      style={{ borderColor: color }}
      className={`flex w-full transform content-center items-center justify-center gap-4 rounded-lg border bg-zinc-800/30 bg-gradient-to-b from-inherit pb-6 pt-8 backdrop-blur-2xl transition-transform hover:scale-105 lg:static  lg:w-1/2 lg:rounded-xl lg:border lg:bg-gray-200 lg:bg-zinc-800/30 lg:p-4`}
      target="_blank"
    >
      <Image src={`/${icon}.png`} alt={`${icon} logo`} width={40} height={40} />
      <div className="aspect-[1/5]">
        <svg
          width="8"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 100"
        >
          <line
            x1="10"
            y1="10"
            x2="10"
            y2="90"
            stroke={color}
            strokeWidth="3"
          />
        </svg>
      </div>
      <span className="text-lg">{title}</span>
    </Link>
  );
}

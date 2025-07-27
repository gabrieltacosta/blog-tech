import Image from "next/image";
import Link from "next/link";

interface CardPostProps {
  title: string;
  slug: string;
  description: string;
  author: string;
  createdAt: string;
  urlImage: string;
}

const CardPost = ({
  title,
  slug,
  description,
  author,
  createdAt,
  urlImage,
}: CardPostProps) => {
  return (
    <Link
      href={`/post/${slug}`}
      className="w-full sm:max-w-[352px] h-full flex flex-col items-center gap-2 sm:gap-4 shadow-2xl rounded-2xl group"
    >
      <div className="flex w-full h-[200px] md:h-[234px] relative rounded-t-2xl overflow-hidden">
        <Image
          src={urlImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500 ease-in-out"
          sizes="100vw"
          priority
        />
      </div>
      <div className="flex w-full flex-1 flex-col justify-between gap-1 sm:gap-2 p-2">
        <h2 className="font-bold text-lg sm:text-xl text-blue-600">{title}</h2>
        <p className="text-zinc-600 text-sm md:text-base text-justify lg:text-left hidden md:flex flex-1">
          {description.slice(0, 180) + "..."}
        </p>
        <div className="">
          <p className="font-bold text-zinc-900">{author}</p>
          <p className="text-zinc-600 text-sm">{createdAt}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardPost;

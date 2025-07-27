// import { usePosts } from "@/lib/getAllPosts";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type BannerProps = {
  post: {
    title: string;
    slug: string;
    description: string;
    createdAt: string;
    coverimage: {
      url: string;
    };
    author: {
      name: string;
    };
  };
};

const Banner = ({ post }: BannerProps) => {
  // const { data, loading, error } = usePosts();

  // if (loading) return <p>Carregando banner...</p>;
  // if (error) return <p>Erro ao carregar banner</p>;

  // const post = data?.posts[0];

  // if (!post) return null;

  return (
    <Link
      href={`/post/${post.slug}`}
      className="group w-full h-full flex-col sm:flex-row flex gap-4 lg:gap-8 items-center justify-center mt-3 md:mt-5 rounded-2xl shadow-2xl"
    >
      <div className="flex flex-1 w-full h-full min-h-[240px] md:min-h-[334px] relative rounded-2xl overflow-hidden">
        <Image
          src={post.coverimage.url}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500 ease-in-out"
          sizes="100vw"
          priority
        />
      </div>

      <div className="flex w-full h-full flex-1 flex-col justify-between gap-3 lg:gap-8 p-2">
        <h2 className="font-bold text-3xl md:text-5xl text-blue-600">
          {post.title}
        </h2>
        <p className="text-zinc-600 text-sm md:text-base text-justify lg:text-left">
          {post.description.slice(0, 300) + "..."}
        </p>
        <div>
          <p className="font-bold text-zinc-900 text-sm md:text-base">
            {post.author.name}
          </p>
          <p className="text-zinc-600 text-xs md:text-sm">
            {format(new Date(post.createdAt), "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR,
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Banner;

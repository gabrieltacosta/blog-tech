import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { components } from "@/components/mdx-component";

interface Params {
  params: Promise<{ slug: string }>;
}

const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      description
      content {
        markdown
      }
      createdAt
      coverimage {
        url
      }
      author {
        name
      }
    }
  }
`;

const Post = async ({ params }: Params) => {
  const { slug } = await params;

  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug },
    fetchPolicy: "no-cache",
  });

  const post = data?.post;

  if (!post) return notFound();

  return (
    <>
      <Link
        href={"/"}
        className="flex w-full max-w-fit px-4 font-bold text-zinc-900 hover:tex-zin-600"
      >
        Voltar
      </Link>
      <article>
        <div className="w-full h-full flex flex-col mt-5">
          <div className="flex w-full h-56 sm:h-80 lg:h-[392px] relative rounded-2xl overflow-hidden">
            <Image
              src={post.coverimage.url}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col mt-4 sm:mt-8">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-blue-600">
            {post.title}
          </h2>

          <div>
            <p className="font-bold text-zinc-900">{post.author.name}</p>
            <p className="text-zinc-600 text-sm">
              {format(new Date(post.createdAt), "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </p>
          </div>
          <div className="text-zinc-600 text-sm sm:text-base mt-4 sm:mt-8 text-justify lg:text-left prose prose-irmandade max-w-none">
            <ReactMarkdown
              components={components}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {post.content.markdown}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;

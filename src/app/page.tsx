import { fetchPosts } from "@/lib/getAllPosts";
import Banner from "@/components/Banner";
import CardPost from "@/components/CardPost";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default async function Home() {
  const { posts } = await fetchPosts();

  if (!posts || posts.length === 0) return <p>Nenhum post encontrado.</p>;

  return (
    <>
      {posts.length > 0 && <Banner post={posts[0]} />}
      <div className="flex flex-col mx-auto justify-between items-center sm:grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-4 lg:mt-12">
        {posts.slice(1).map((post) => (
          <CardPost
            key={post.id}
            title={post.title}
            slug={post.slug}
            author={post.author.name}
            description={post.description}
            createdAt={format(
              new Date(post.createdAt),
              "dd 'de' MMMM 'de' yyyy",
              { locale: ptBR }
            )}
            urlImage={post.coverimage.url}
          />
        ))}
      </div>
    </>
  );
}

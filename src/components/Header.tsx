import Link from "next/link";

const Heade = () => {
  return (
    <header className="w-full h-20 md:h-28 flex items-center">
      <Link href={"/"} className="text-blue-600 text-5xl md:text-7xl font-bold">
        BlogTech
      </Link>
    </header>
  );
};

export default Heade;

const Footer = () => {
  return (
    <footer className="w-full h-20 mx-auto flex flex-col bg-blue-600 text-white items-center justify-center mt-12">
      <p>
        &copy;{new Date().getFullYear()} <span>Hawkdev</span> | Todos os
        direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;

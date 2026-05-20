import logo from "@/assets/logo-tecidono.jpg";

const Footer = () => (
  <footer className="border-t bg-card py-10" id="contato">
    <div className="container">
      <div className="flex flex-col items-center gap-4 text-center">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Tecido NO" className="h-8 w-auto rounded" />
        </a>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-primary">Contatos</a>
          <a href="#" className="transition-colors hover:text-primary">Termos de Uso</a>
          <a href="#" className="transition-colors hover:text-primary">Política de Privacidade</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tecido NO. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

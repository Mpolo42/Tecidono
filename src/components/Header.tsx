import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-tecidono.jpg";

const navItems = ["O que é?", "Identificação", "Cuidados", "Nosso Produto"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Tecido NO" className="h-10 w-auto rounded" />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s|\?/g, "")}`}
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-foreground md:hidden hover:bg-secondary"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t bg-card px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s|\?/g, "")}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

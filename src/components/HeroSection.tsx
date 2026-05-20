import heroImage from "@/assets/hero-foot-care.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden py-20 md:py-28" id="oqueé"
    style={{ background: "var(--gradient-brand)" }}
  >
    <div className="container relative z-10 grid items-center gap-10 md:grid-cols-2">
      <div className="animate-fade-in space-y-6">
        <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
          Saúde &amp; Prevenção
        </span>
        <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Pé Diabético: <br />Cuidados Essenciais
        </h1>
        <p className="max-w-md text-lg text-primary-foreground/85">
          Informação e cuidados para proteger seus pés. Previna complicações com orientações profissionais e produtos adequados.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#cuidados"
            className="rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-105"
          >
            Ver Cuidados
          </a>
          <a
            href="#nossoproduto"
            className="rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Nosso Produto
          </a>
        </div>
      </div>
      <div className="animate-fade-in [animation-delay:200ms] opacity-0">
        <img
          src={heroImage}
          alt="Médica examinando o pé de uma paciente"
          className="w-full rounded-2xl shadow-2xl object-cover max-h-[420px]"
          loading="eager"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;

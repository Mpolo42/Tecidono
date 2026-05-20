import { AlertTriangle, HeartPulse, Eye, Footprints } from "lucide-react";
import footInspection from "@/assets/foot-inspection.jpg";
import footCareDaily from "@/assets/foot-care-daily.jpg";

const InfoCards = () => (
  <section className="py-20" id="identificação">
    <div className="container space-y-16">
      {/* Identification */}
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Fique Atento aos Sinais</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Identificar sinais precocemente é fundamental para evitar complicações graves.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Eye, title: "Mudanças de cor", desc: "Vermelhidão, escurecimento ou palidez nos pés." },
          { icon: Footprints, title: "Dormência", desc: "Formigamento e sensação de perda de sensibilidade." },
          { icon: HeartPulse, title: "Inchaço", desc: "Sensação de aperto ou mesmo o inchaço aparente nas pernas ou pés, que não melhoram com massagens ou métodos comportamentais" },
          { icon: AlertTriangle, title: "Feridas", desc: "Feridas que não cicatrizam ou demoram a fechar." },
        ].map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-xl border bg-card p-6 shadow-[var(--card-shadow)] transition-all hover:shadow-[var(--card-hover-shadow)] hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex rounded-lg bg-secondary p-3 text-primary">
              <Icon size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      {/* Cuidados section */}
      <div id="cuidados" className="scroll-mt-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Cuide Diariamente</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Higiene, calçados adequados, controle glicêmico e visitas regulares ao médico.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <img
            src={footInspection}
            alt="Profissional examinando pé"
            className="w-full rounded-2xl object-cover shadow-lg max-h-[340px]"
            loading="lazy"
          />
          <ul className="space-y-5">
            {[
              "Lave os pés diariamente com água morna e sabão neutro.",
              "Seque bem entre os dedos para evitar fungos.",
              "Use calçados confortáveis e apropriados.",
              "Inspecione seus pés todos os dias.",
              "Mantenha o controle glicêmico rigoroso.",
              "Visite seu médico regularmente.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  ✓
                </span>
                <span className="text-foreground/90">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Nosso Produto */}
      <div id="nossoproduto" className="scroll-mt-20">
        <div className="rounded-2xl bg-secondary p-8 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <h2 className="font-display text-3xl font-bold md:text-4xl">Nosso Produto</h2>
              <p className="text-muted-foreground">
                Desenvolvemos produtos especializados para o cuidado do pé diabético, com tecnologia de ponta e materiais que promovem conforto e proteção.
              </p>
              <a
                href="#contato"
                className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-105"
              >
                Saiba Mais
              </a>
            </div>
            <img
              src={footCareDaily}
              alt="Calçado para pé diabético"
              className="w-full rounded-xl object-cover shadow-lg max-h-[300px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InfoCards;

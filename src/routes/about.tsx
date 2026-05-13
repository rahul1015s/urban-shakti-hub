import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Urban Shakti Premium Fitness Club" },
      { name: "description", content: "Our story, vision, and the philosophy that built Urban Shakti — a premium urban fitness culture in Noida." },
      { property: "og:title", content: "About — Urban Shakti" },
      { property: "og:description", content: "We don't sell memberships. We build athletes." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const IMG = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>We don't sell memberships.<br /><span className="text-primary">We build athletes.</span></>}
        sub="Urban Shakti was founded on a single belief — that ordinary people, given the right environment and discipline, can become extraordinary."
        img="photo-1534438327276-14e5300c3a48"
      />

      <section className="section-pad">
        <div className="container-x grid gap-16 lg:grid-cols-2 items-start">
          <div>
            <p className="eyebrow">Vision</p>
            <h2 className="t-display text-5xl mt-4">A movement, not<br />a membership.</h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>Founded in 2019 by a team of national-level athletes and coaches, Urban Shakti was born from frustration with cookie-cutter chain gyms. We wanted a place where serious training met serious hospitality.</p>
            <p>Today we serve over 5,000 members — students, executives, athletes, and beginners — with the same uncompromising standard. Imported equipment. Certified coaches. A culture that pushes you, never patronizes you.</p>
            <p className="text-foreground t-display-2 text-xl">Shakti means power. Urban Shakti means the power of the modern individual to rebuild themselves — body, discipline, and mind.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-x">
          <p className="eyebrow">Our Pillars</p>
          <h2 className="t-display text-5xl md:text-6xl mt-4 max-w-3xl">Four principles. <span className="text-primary">Zero exceptions.</span></h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Form First", d: "Every member is taught proper movement before being given load. No injuries on our floor." },
              { n: "02", t: "Progress Over Posing", d: "We track numbers, not vanity. Logged sessions, periodized programs, real outcomes." },
              { n: "03", t: "Respect The Iron", d: "Plates re-racked. Equipment cared for. A floor you'd be proud to bring your mother to." },
              { n: "04", t: "Show Up", d: "Discipline beats motivation. Our culture rewards the people who keep showing up." },
            ].map((p) => (
              <div key={p.n} className="border-t border-primary pt-6">
                <div className="t-display text-5xl text-primary">{p.n}</div>
                <h3 className="t-display-2 text-2xl mt-3">{p.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { n: "5,000+", l: "Active Members" },
              { n: "1,200+", l: "Transformations" },
              { n: "12", l: "Certified Coaches" },
              { n: "6 Yrs", l: "Building Athletes" },
            ].map((s) => (
              <div key={s.l} className="card-elevated p-8 text-center">
                <div className="t-display text-5xl text-primary">{s.n}</div>
                <div className="t-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHero({ eyebrow, title, sub, img }: { eyebrow: string; title: React.ReactNode; sub: string; img: string }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden grain">
      <img src={IMG(img, 1920, 1000)} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.25) contrast(1.2) saturate(0.6)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, var(--background) 100%)" }} />
      <div className="container-x relative z-10">
        <p className="eyebrow reveal-up">{eyebrow}</p>
        <h1 className="t-display text-[clamp(3rem,9vw,7rem)] mt-5 max-w-5xl reveal-up" style={{ animationDelay: "0.1s" }}>{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground reveal-up" style={{ animationDelay: "0.2s" }}>{sub}</p>
      </div>
    </section>
  );
}

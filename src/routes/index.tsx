import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urban Shakti — Premium Fitness Club | Build Strength. Build Discipline." },
      { name: "description", content: "Premium gym in Noida. Certified trainers, imported equipment, real transformations. Book a free trial today." },
      { property: "og:title", content: "Urban Shakti — Premium Fitness Club" },
      { property: "og:description", content: "Build strength. Build discipline. Your strongest version starts here." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const IMG = (id: string, w = 1600, h = 900, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=${q}&auto=format`;

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden grain">
        <img
          src={IMG("photo-1581009146145-b5ef050c2e1e", 1920, 1200, 85)}
          alt="Athlete training"
          className="absolute inset-0 w-full h-full object-cover image-grade"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

        <div className="container-x relative z-10 pb-20 pt-40">
          <p className="eyebrow reveal-up">Premium Fitness Club · Noida</p>
          <h1 className="t-display text-[clamp(3.5rem,12vw,9.5rem)] mt-6 reveal-up" style={{ animationDelay: "0.1s" }}>
            Build Strength.<br />
            <span className="text-primary">Build Discipline.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground reveal-up" style={{ animationDelay: "0.2s" }}>
            A premium urban training ground for the unstoppable. Certified coaches, imported equipment,
            and a culture that pushes you beyond your limits.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 reveal-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/membership" className="btn-hero">Join Now →</Link>
            <Link to="/contact" className="btn-outline-hero">Free Trial</Link>
            <Link to="/programs" className="btn-outline-hero">Explore Programs</Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 reveal-up" style={{ animationDelay: "0.4s" }}>
            {["Certified Coaches", "Imported Gear", "Open 18 Hours", "5,000+ Members"].map((t) => (
              <span key={t} className="text-xs t-display-2 uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-primary py-4 overflow-hidden border-y border-primary/20">
        <div className="marquee-track text-primary-foreground">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex gap-12 t-display text-2xl items-center">
              {["Strength", "Discipline", "Performance", "Transformation", "Community", "Power", "Endurance"].map((w) => (
                <span key={w} className="flex items-center gap-12">{w} <span className="opacity-40">◆</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="section-pad">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Why Urban Shakti</p>
            <h2 className="t-display text-5xl md:text-6xl mt-4">
              Not just a gym.<br />A <span className="text-primary">training culture.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              { i: "🏋", t: "Certified Trainers", d: "International certifications. Hands-on coaches. Programming built around your goals." },
              { i: "⚙", t: "Imported Equipment", d: "Hammer Strength, Rogue, Eleiko. Commercial-grade machines that perform." },
              { i: "👤", t: "Personal Guidance", d: "1-on-1 form checks, progress tracking, and a coach who actually knows your name." },
              { i: "⏰", t: "Flexible Timings", d: "Open 5 AM to 11 PM. Train when it works for you, not when it works for us." },
              { i: "🥗", t: "Nutrition Support", d: "Custom diet plans, supplement guidance, and macro coaching from registered dietitians." },
              { i: "✨", t: "Pristine Environment", d: "Sanitized hourly. Climate-controlled. The cleanest premium training floor in the city." },
            ].map((f, idx) => (
              <div key={f.t} className="bg-background p-10 group hover:bg-surface transition-colors">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{f.i}</div>
                <div className="t-mono text-xs text-primary mb-2">0{idx + 1}</div>
                <h3 className="t-display-2 text-2xl mb-3">{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section-pad bg-surface">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow">Programs</p>
              <h2 className="t-display text-5xl md:text-6xl mt-4">Pick your <span className="text-primary">battlefield</span></h2>
            </div>
            <Link to="/programs" className="btn-outline-hero">View All Programs →</Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Strength Training", img: "photo-1583454110551-21f2fa2afe61", tag: "Core" },
              { t: "Fat Loss", img: "photo-1476480862126-209bfaa8edc8", tag: "Transform" },
              { t: "Muscle Building", img: "photo-1534438327276-14e5300c3a48", tag: "Bulk" },
              { t: "Functional / HIIT", img: "photo-1593095948071-474c5cc2989d", tag: "Athletic" },
            ].map((p) => (
              <Link to="/programs" key={p.t} className="group relative aspect-[3/4] overflow-hidden block">
                <img src={IMG(p.img, 600, 800)} alt={p.t} className="absolute inset-0 w-full h-full object-cover image-grade" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="t-mono text-[10px] uppercase tracking-widest text-primary mb-2">{p.tag}</span>
                  <h3 className="t-display text-3xl">{p.t}</h3>
                  <span className="mt-3 text-xs t-display-2 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={IMG("photo-1571019613454-1cb2f99b2d8b", 800, 1000)} alt="Transformation" className="absolute inset-0 w-full h-full object-cover image-grade" loading="lazy" />
            <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md p-6 border border-primary/30">
              <p className="t-mono text-xs text-primary mb-1">— ARJUN, 28</p>
              <p className="t-display-2 text-lg italic">"I lost 22 kg in 6 months. The coaches at Urban Shakti changed how I see myself."</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Transformations</p>
            <h2 className="t-display text-5xl md:text-6xl mt-4">Real people.<br /><span className="text-primary">Real results.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              No filters. No paid actors. Just members who showed up, did the work, and rebuilt themselves
              from the inside out.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "1,200+", l: "Transformations" },
                { n: "94%", l: "Goal Achievement" },
                { n: "4.9★", l: "Member Rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="t-display text-4xl text-primary">{s.n}</div>
                  <div className="t-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-10 inline-flex btn-outline-hero">See More Stories →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-surface overflow-hidden">
        <div className="container-x mb-14">
          <p className="eyebrow">Member Voices</p>
          <h2 className="t-display text-5xl md:text-6xl mt-4">From the <span className="text-primary">floor.</span></h2>
        </div>
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { n: "Priya S.", r: "Marketing Lead", q: "The energy here is unreal. I've tried five gyms in Noida — none come close.", s: 5 },
            { n: "Rahul M.", r: "Software Engineer", q: "Coach Vikram rewrote my deadlift form in one session. Up 40kg in 4 months.", s: 5 },
            { n: "Aisha K.", r: "Student", q: "Affordable for students, premium for everyone. Best decision of my year.", s: 5 },
          ].map((t) => (
            <div key={t.n} className="card-elevated p-8">
              <div className="text-primary text-lg mb-4">{"★".repeat(t.s)}</div>
              <p className="t-display-2 text-lg leading-relaxed italic">"{t.q}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{t.n}</div>
                <div className="t-mono text-xs text-muted-foreground">{t.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">Inside Urban Shakti</p>
              <h2 className="t-display text-5xl md:text-6xl mt-4">The <span className="text-primary">floor.</span></h2>
            </div>
            <Link to="/gallery" className="btn-outline-hero">Full Gallery →</Link>
          </div>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-4 grid-rows-2">
            {[
              { id: "photo-1534438327276-14e5300c3a48", c: "row-span-2" },
              { id: "photo-1571019613454-1cb2f99b2d8b", c: "" },
              { id: "photo-1581009146145-b5ef050c2e1e", c: "" },
              { id: "photo-1583454110551-21f2fa2afe61", c: "row-span-2" },
              { id: "photo-1544367567-0f2fcb009e0b", c: "" },
              { id: "photo-1593095948071-474c5cc2989d", c: "" },
            ].map((g, i) => (
              <div key={i} className={`relative overflow-hidden ${g.c} aspect-square group`}>
                <img src={IMG(g.id, 600, 600)} alt="" className="w-full h-full object-cover image-grade" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-32 overflow-hidden grain">
        <img src={IMG("photo-1517836357463-d25dfeac3438", 1920, 800)} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.25) contrast(1.3)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.91 0.22 130 / 0.2), transparent 60%)" }} />
        <div className="container-x relative z-10 text-center">
          <p className="eyebrow justify-center inline-flex">Limited Trial Slots</p>
          <h2 className="t-display text-6xl md:text-8xl mt-6 max-w-4xl mx-auto">
            Your fitness journey<br />starts <span className="text-primary">today.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/membership" className="btn-hero">Join Membership</Link>
            <Link to="/contact" className="btn-outline-hero">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

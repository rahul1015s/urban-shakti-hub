import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "./about";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Our Trainers — Urban Shakti" },
      { name: "description", content: "Meet the certified coaches behind Urban Shakti. National athletes, internationally certified, obsessively dedicated." },
      { property: "og:title", content: "Trainers — Urban Shakti" },
      { property: "og:description", content: "Coaches who've competed, transformed, and built champions." },
    ],
    links: [{ rel: "canonical", href: "/trainers" }],
  }),
  component: TrainersPage,
});

const TRAINERS = [
  { n: "Vikram Rathod", r: "Head Strength Coach", img: "photo-1567013127542-490d757e51fc", exp: "12 years", spec: "Powerlifting, Strength", certs: ["NSCA-CSCS", "USAPL Coach"] },
  { n: "Anaya Sharma", r: "Hypertrophy Specialist", img: "photo-1594381898411-846e7d193883", exp: "8 years", spec: "Bodybuilding, Nutrition", certs: ["ISSA", "Precision Nutrition L2"] },
  { n: "Karan Mehta", r: "Functional & HIIT Coach", img: "photo-1583500178690-f7fd39c44530", exp: "9 years", spec: "Athletic Performance", certs: ["NASM-PES", "FMS L2"] },
  { n: "Riya Kapoor", r: "Yoga & Mobility Lead", img: "photo-1518611012118-696072aa579a", exp: "10 years", spec: "Yoga, Recovery", certs: ["RYT-500", "FRC Mobility"] },
  { n: "Arjun Singh", r: "Fat Loss Specialist", img: "photo-1578762560042-46ad127c95ea", exp: "7 years", spec: "Body Recomposition", certs: ["ACE-CPT", "PN L1"] },
  { n: "Meera Iyer", r: "Personal Training Lead", img: "photo-1607962837359-5e7e89f86776", exp: "11 years", spec: "1-on-1 Programming", certs: ["NASM-CPT", "CES"] },
];

const IMG = (id: string) => `https://images.unsplash.com/${id}?w=600&h=800&fit=crop&q=80&auto=format`;

function TrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="The Coaches"
        title={<>Athletes who became<br /><span className="text-primary">teachers.</span></>}
        sub="Twelve coaches. Combined 100+ years of experience. Every one of them lifts, competes, and lives the discipline they teach."
        img="photo-1571019613454-1cb2f99b2d8b"
      />
      <section className="section-pad">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINERS.map((t, i) => (
            <article key={t.n} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                <img src={IMG(t.img)} alt={t.n} className="absolute inset-0 w-full h-full object-cover image-grade" loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = IMG("photo-1567013127542-490d757e51fc"); }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background to-transparent">
                  <div className="t-mono text-xs text-primary">0{i + 1}</div>
                </div>
              </div>
              <div className="pt-5">
                <h3 className="t-display text-3xl">{t.n}</h3>
                <p className="text-sm text-primary t-display-2 uppercase tracking-widest mt-1">{t.r}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs t-mono">
                  <div>
                    <div className="text-muted-foreground uppercase tracking-widest text-[10px]">Experience</div>
                    <div className="mt-1">{t.exp}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground uppercase tracking-widest text-[10px]">Specialty</div>
                    <div className="mt-1">{t.spec}</div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.certs.map((c) => (
                    <span key={c} className="text-[10px] t-display-2 uppercase tracking-widest border border-border px-2 py-1">{c}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/contact" className="btn-hero">Book a Session</Link>
        </div>
      </section>
    </>
  );
}

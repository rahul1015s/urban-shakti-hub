import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "./about";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — Urban Shakti" },
      { name: "description", content: "Monthly, quarterly, half-yearly, and annual gym membership plans at Urban Shakti. Premium fitness, transparent pricing." },
      { property: "og:title", content: "Membership — Urban Shakti" },
      { property: "og:description", content: "Transparent pricing. No contracts. Just commitment." },
    ],
    links: [{ rel: "canonical", href: "/membership" }],
  }),
  component: MembershipPage,
});

const PLANS = [
  { n: "Monthly", price: "1,999", per: "month", popular: false, save: null,
    feats: ["Full gym access", "Group classes", "Locker access", "Free assessment"] },
  { n: "Quarterly", price: "4,999", per: "3 months", popular: false, save: "Save ₹1,000",
    feats: ["Everything in Monthly", "1 PT session/month", "Nutrition consult", "Guest pass × 2"] },
  { n: "Half-Yearly", price: "8,999", per: "6 months", popular: true, save: "Save ₹3,000",
    feats: ["Everything in Quarterly", "2 PT sessions/month", "Custom diet plan", "Recovery zone access", "Guest pass × 4"] },
  { n: "Annual", price: "15,999", per: "12 months", popular: false, save: "Save ₹8,000",
    feats: ["Everything in Half-Yearly", "4 PT sessions/month", "Quarterly body scan", "Branded merchandise kit", "Guest pass × 8"] },
];

function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title={<>Pick a plan.<br /><span className="text-primary">Show up daily.</span></>}
        sub="Transparent pricing. Zero hidden fees. Cancel anytime in the first month."
        img="photo-1517836357463-d25dfeac3438"
      />

      <section className="section-pad">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div key={p.n} className={`relative p-8 border ${p.popular ? "border-primary bg-surface" : "border-border bg-surface/50"} flex flex-col`}>
              {p.popular && (
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] t-display-2 uppercase tracking-widest px-3 py-1">
                  Most Popular
                </div>
              )}
              <h3 className="t-display text-3xl">{p.n}</h3>
              {p.save && <span className="t-mono text-xs text-primary mt-1">{p.save}</span>}
              <div className="mt-6 flex items-end gap-1">
                <span className="t-display text-6xl">₹{p.price}</span>
              </div>
              <span className="t-mono text-xs text-muted-foreground mt-1">/ {p.per}</span>

              <ul className="mt-8 space-y-3 flex-1">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className={`mt-8 ${p.popular ? "btn-hero" : "btn-outline-hero"} w-full`}>
                Choose Plan
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs t-mono text-muted-foreground">
          Student discount available · GST included · Family plans on request
        </p>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-x text-center">
          <p className="eyebrow justify-center inline-flex">Risk-Free</p>
          <h2 className="t-display text-5xl md:text-6xl mt-4">Try us for <span className="text-primary">free.</span></h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">A complimentary trial session including a fitness assessment and full floor access.</p>
          <Link to="/contact" className="btn-hero inline-flex mt-8">Book Free Trial</Link>
        </div>
      </section>
    </>
  );
}

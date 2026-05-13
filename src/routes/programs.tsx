import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "./about";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Training Programs — Urban Shakti" },
      { name: "description", content: "Strength, fat loss, muscle building, functional, HIIT, yoga, and personal training programs at Urban Shakti." },
      { property: "og:title", content: "Programs — Urban Shakti" },
      { property: "og:description", content: "Pick your battlefield. Eight specialized programs built by certified coaches." },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const PROGRAMS = [
  { t: "Fat Loss", img: "photo-1476480862126-209bfaa8edc8", level: "Beginner → Advanced", weeks: "12 weeks", d: "A periodized cutting protocol combining strength preservation with strategic cardio. Lose fat without losing muscle." },
  { t: "Muscle Building", img: "photo-1534438327276-14e5300c3a48", level: "Intermediate", weeks: "16 weeks", d: "Hypertrophy-focused split with progressive overload, deload weeks, and dialed-in nutrition for clean lean mass gains." },
  { t: "Strength Training", img: "photo-1583454110551-21f2fa2afe61", level: "All Levels", weeks: "12 weeks", d: "Compound lifts done right. Squat, bench, deadlift, press — coached technique, weekly PR tracking." },
  { t: "Functional Training", img: "photo-1517836357463-d25dfeac3438", level: "All Levels", weeks: "8 weeks", d: "Real-world movement patterns. Build the kind of strength you can use on a hike, at work, or in life." },
  { t: "Cardio Conditioning", img: "photo-1476480862126-209bfaa8edc8", level: "All Levels", weeks: "8 weeks", d: "Heart-rate zone training, treadmill, rower, and bike intervals — engineered for endurance gains." },
  { t: "HIIT", img: "photo-1593095948071-474c5cc2989d", level: "Intermediate", weeks: "6 weeks", d: "30-minute high-intensity sessions. Maximum results, minimum time. Perfect for busy professionals." },
  { t: "Yoga & Mobility", img: "photo-1544367567-0f2fcb009e0b", level: "All Levels", weeks: "Ongoing", d: "Sunrise yoga, deep mobility work, and recovery flows. Train the body that lets you train harder." },
  { t: "Personal Training", img: "photo-1571019613454-1cb2f99b2d8b", level: "Custom", weeks: "Custom", d: "1-on-1 coaching. Custom program, weekly check-ins, nutrition plan, and a coach who knows your story." },
];

const IMG = (id: string) => `https://images.unsplash.com/${id}?w=900&h=1200&fit=crop&q=80&auto=format`;

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={<>Eight battlefields.<br /><span className="text-primary">One destination.</span></>}
        sub="Whether you're chasing your first pull-up or your fifth competition, we have a coach and a program built for it."
        img="photo-1583454110551-21f2fa2afe61"
      />
      <section className="section-pad">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <article key={p.t} className="group relative overflow-hidden card-elevated">
              <div className="grid sm:grid-cols-[260px_1fr]">
                <div className="relative aspect-[3/4] sm:aspect-auto overflow-hidden">
                  <img src={IMG(p.img)} alt={p.t} className="absolute inset-0 w-full h-full object-cover image-grade" loading="lazy" />
                </div>
                <div className="p-8">
                  <div className="t-mono text-xs text-primary mb-2">0{i + 1} / 0{PROGRAMS.length}</div>
                  <h3 className="t-display text-3xl">{p.t}</h3>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <span className="text-[10px] t-display-2 uppercase tracking-widest border border-border px-2 py-1">{p.level}</span>
                    <span className="text-[10px] t-display-2 uppercase tracking-widest border border-border px-2 py-1">{p.weeks}</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  <Link to="/contact" className="mt-6 inline-flex text-primary t-display-2 uppercase tracking-widest text-xs hover:gap-3 gap-2 transition-all">
                    Enroll →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface text-center">
        <div className="container-x">
          <h2 className="t-display text-5xl md:text-6xl">Not sure which program?</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">Book a free consultation. We'll assess your goals and recommend the right path.</p>
          <Link to="/contact" className="btn-hero mt-8 inline-flex">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}

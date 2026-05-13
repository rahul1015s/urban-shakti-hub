import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "./about";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Urban Shakti" },
      { name: "description", content: "Visit Urban Shakti in Noida. Call, WhatsApp, or send an inquiry to book your free trial." },
      { property: "og:title", content: "Contact — Urban Shakti" },
      { property: "og:description", content: "Drop by, call, or WhatsApp. We respond fast." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's get<br /><span className="text-primary">started.</span></>}
        sub="Tell us about your goals. We'll get back to you within 2 hours during business hours."
        img="photo-1517836357463-d25dfeac3438"
      />

      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div>
            <h2 className="t-display text-4xl">Visit the <span className="text-primary">floor.</span></h2>
            <div className="mt-8 space-y-6">
              <InfoBlock label="Address" value={<>Plot 24, Fitness Avenue<br />Sector 18, Noida 201301</>} />
              <InfoBlock label="Phone" value={<a href="tel:+919810012345" className="hover:text-primary">+91 98100 12345</a>} />
              <InfoBlock label="WhatsApp" value={
                <a href="https://wa.me/919810012345" target="_blank" rel="noopener" className="hover:text-primary">+91 98100 12345 →</a>
              } />
              <InfoBlock label="Email" value={<a href="mailto:hello@urbanshakti.fit" className="hover:text-primary">hello@urbanshakti.fit</a>} />
              <InfoBlock label="Hours" value={
                <span className="t-mono text-sm">
                  Mon–Fri 5:00 – 23:00<br />
                  Sat 6:00 – 22:00<br />
                  Sun 7:00 – 14:00
                </span>
              } />
            </div>

            <div className="mt-10 aspect-[16/10] overflow-hidden border border-border">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.31%2C28.56%2C77.34%2C28.59&layer=mapnik"
                className="w-full h-full grayscale contrast-125 brightness-75"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="card-elevated p-8 md:p-10">
            <p className="eyebrow">Inquiry</p>
            <h2 className="t-display text-4xl mt-4">Send us a message.</h2>

            {sent ? (
              <div className="mt-10 p-8 border border-primary bg-primary/5 text-center">
                <div className="t-display text-3xl text-primary">Message Received.</div>
                <p className="mt-3 text-sm text-muted-foreground">We'll be in touch within 2 hours. In the meantime, follow us on Instagram.</p>
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <Field label="Name" type="text" required />
                <Field label="Phone" type="tel" required />
                <Field label="Email" type="email" />
                <div>
                  <label className="block text-xs t-display-2 uppercase tracking-widest text-muted-foreground mb-2">Interested In</label>
                  <select className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors">
                    <option>Free Trial</option>
                    <option>Membership Plans</option>
                    <option>Personal Training</option>
                    <option>Programs Info</option>
                    <option>Something Else</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs t-display-2 uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors resize-none" />
                </div>
                <button type="submit" className="btn-hero w-full">Send Inquiry →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="border-l-2 border-primary pl-5">
      <div className="text-xs t-display-2 uppercase tracking-widest text-primary">{label}</div>
      <div className="mt-1 text-foreground leading-relaxed">{value}</div>
    </div>
  );
}

function Field({ label, type, required }: { label: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs t-display-2 uppercase tracking-widest text-muted-foreground mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input type={type} required={required} className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors" />
    </div>
  );
}

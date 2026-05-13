import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/trainers", label: "Trainers" },
  { to: "/membership", label: "Membership" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { pathname } = useLocation();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          stuck ? "bg-background/85 backdrop-blur-xl border-b border-border py-3" : "py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Link to="/" className="t-display text-2xl tracking-[0.08em] flex items-center gap-2">
            <span className="text-primary">URBAN</span>
            <span>SHAKTI</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="nav-link" data-active={pathname === n.to}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/membership" className="btn-hero hidden md:inline-flex !py-3 !px-5 text-xs">
              Join Now
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
              aria-label="Menu"
            >
              <span className={`block w-6 h-[2px] bg-foreground transition-transform ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-[2px] bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[2px] bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-x pt-28 pb-10 flex flex-col">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="t-display text-5xl py-3 border-b border-border text-muted-foreground hover:text-primary hover:pl-2 transition-all"
            >
              {n.label}
            </Link>
          ))}
          <Link to="/membership" className="btn-hero mt-8">Join Now</Link>
        </nav>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="t-display text-3xl">
            <span className="text-primary">URBAN</span> SHAKTI
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Build strength. Build discipline. A premium fitness club for the unstoppable.
          </p>
          <div className="flex gap-3 mt-6">
            {["instagram", "facebook", "youtube", "twitter"].map((s) => (
              <a key={s} href="#" aria-label={s} className="w-10 h-10 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors text-sm">
                <span className="capitalize text-xs">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="t-display-2 uppercase tracking-widest text-xs text-primary mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-foreground transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="t-display-2 uppercase tracking-widest text-xs text-primary mb-4">Visit</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Plot 24, Fitness Avenue<br />
            Sector 18, Noida 201301<br />
            India
          </p>
          <p className="text-sm mt-3 t-mono text-foreground">+91 98100 12345</p>
          <p className="text-sm t-mono text-muted-foreground">hello@urbanshakti.fit</p>
        </div>

        <div>
          <h4 className="t-display-2 uppercase tracking-widest text-xs text-primary mb-4">Hours</h4>
          <ul className="space-y-1 text-sm text-muted-foreground t-mono">
            <li className="flex justify-between"><span>Mon–Fri</span><span>5:00 – 23:00</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>6:00 – 22:00</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>7:00 – 14:00</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground t-mono">
          <span>© {new Date().getFullYear()} Urban Shakti Fitness Club. All rights reserved.</span>
          <span>Built for the strongest version of you.</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919810012345?text=Hi%20Urban%20Shakti%2C%20I%27d%20like%20a%20free%20trial"
        target="_blank" rel="noopener"
        className="w-14 h-14 grid place-items-center bg-primary text-primary-foreground rounded-full shadow-[0_0_30px_var(--primary-glow)] hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
      <a
        href="tel:+919810012345"
        className="w-14 h-14 grid place-items-center bg-surface-2 border border-border text-foreground rounded-full hover:border-primary hover:text-primary transition-colors"
        aria-label="Call"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.58l2.2-2.21c.27-.27.35-.66.24-1.01A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
      </a>
    </div>
  );
}

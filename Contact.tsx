import { useState } from "react";
import { Reveal } from "./Reveal";
import { Mail, Phone, Instagram, MapPin, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);
  return (
    <section id="contact" className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.78_0.11_80/0.08),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-12">
          <div>
            <Reveal><p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-6">— Get in Touch</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02] headline-reveal">
                Let's create something <span className="italic text-gold/90">extraordinary.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground max-w-md">
                Ready to bring your vision to life? Tell me about your next project — I respond within 24 hours.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <ul className="space-y-5">
              {[
                { icon: Mail, label: "hello@curlytalesbyshiva.com", href: "mailto:hello@curlytalesbyshiva.com" },
                { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Instagram, label: "@curlytalesbyshiva", href: "https://instagram.com" },
                { icon: MapPin, label: "Bangalore, India", href: "#" },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    data-cursor="hover"
                    className="group flex items-center gap-4 text-foreground/80 hover:text-gold transition-colors"
                  >
                    <c.icon className="w-4 h-4 text-gold" strokeWidth={1.4} />
                    <span className="text-sm tracking-wide">{c.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                toast.success("Booking received", {
                  description: "I'll get back to you within 24 hours.",
                });
                (e.target as HTMLFormElement).reset();
              }, 900);
            }}
            className="glass p-8 md:p-12 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field name="name" label="Name" placeholder="Your full name" required />
              <Field name="email" label="Email" type="email" placeholder="you@studio.com" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field name="phone" label="Phone" placeholder="+91 00000 00000" />
              <Field name="type" label="Project Type" placeholder="Wedding / Commercial / Music Video" />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your vision, dates, and references…"
                className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              data-cursor="hover"
              className="group w-full mt-4 bg-gold text-ink py-5 text-xs tracking-[0.4em] uppercase hover:bg-foreground transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Book a Shoot"}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors"
      />
    </div>
  );
}

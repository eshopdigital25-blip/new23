import logo from "@/assets/logo.png";
import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-6 md:px-12 pt-24 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="overflow-hidden mb-16">
          <div className="marquee-track flex whitespace-nowrap text-display text-[clamp(4rem,14vw,14rem)] leading-none text-foreground/[0.06] uppercase italic">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="px-8">Curly Tales by Shiva ·</span>
            ))}
          </div>
        </div>

        <img src={logo} alt="Curly Tales by Shiva" width={64} height={64} className="w-16 h-16 mx-auto mb-6" />
        <p className="text-display text-2xl text-foreground">Curly Tales <span className="italic text-gold">by Shiva</span></p>
        <p className="mt-3 text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
          Cinematographer · Visual Storyteller
        </p>

        <div className="mt-10 flex items-center justify-center gap-5">
          {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              data-cursor="hover"
              className="w-11 h-11 rounded-full border border-border hover:border-gold text-muted-foreground hover:text-gold flex items-center justify-center transition-colors"
            >
              <Icon className="w-4 h-4" strokeWidth={1.4} />
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
          <p>© {new Date().getFullYear()} Curly Tales by Shiva. All rights reserved.</p>
          <p>Crafted with light & shadow · Bangalore, IN</p>
        </div>
      </div>
    </footer>
  );
}

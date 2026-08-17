import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.6, duration: 0.8 }}
      className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between"
    >
      <a href="#top" className="flex items-center gap-3">
        <img src={logo} alt="Curly Tales by Shiva" width={36} height={36} className="w-9 h-9" />
        <span className="hidden sm:block text-display text-sm tracking-[0.3em] uppercase text-foreground/80">
          Curly Tales
        </span>
      </a>
      <ul className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.3em] uppercase">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-muted-foreground hover:text-gold transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="text-[11px] tracking-[0.3em] uppercase border border-gold/40 text-gold px-4 py-2.5 hover:bg-gold hover:text-ink transition-all duration-500"
      >
        Book a Shoot
      </a>
    </motion.nav>
  );
}

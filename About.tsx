import portrait from "@/assets/portrait.jpg";
import { Reveal } from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <section id="about" ref={ref} className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <Reveal className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <motion.img
              src={portrait}
              alt="Portrait of Shiva, cinematographer"
              loading="lazy"
              width={1024}
              height={1280}
              style={{ y }}
              className="w-full h-[115%] object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gold text-ink text-[10px] tracking-[0.35em] uppercase">
            Est. 2020
          </div>
        </Reveal>

        <div className="md:col-span-7">
          <Reveal>
            <p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-6">— About the Author</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] headline-reveal">
              Every Frame <br /><span className="italic text-gold/90">Tells a Story.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                My name is <span className="text-foreground">Shiva</span>. I am a passionate cinematographer
                dedicated to transforming fleeting moments into unforgettable visual experiences.
              </p>
              <p>
                Through cinematic storytelling, deliberate composition, and the language of light and motion,
                I craft films that evoke emotion and leave lasting impressions.
              </p>
              <p className="text-foreground">
                Whether a commercial, a wedding film, a travel story, or a brand campaign — the goal is simple:
                <span className="italic text-gold"> create visuals people never forget.</span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["Based in", "Bangalore"],
                ["Available", "Worldwide"],
                ["Focus", "Cinema"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[9px] tracking-[0.3em] text-muted-foreground uppercase">{k}</p>
                  <p className="mt-2 text-display text-xl text-foreground">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

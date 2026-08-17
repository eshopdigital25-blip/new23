import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Play } from "lucide-react";
import camera from "@/assets/camera.jpg";

const REEL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Camera scales up and fades. At ~0.55 the "lens" black hole takes over.
  const cameraScale = useTransform(scrollYProgress, [0, 0.55], [1, 8]);
  const cameraOpacity = useTransform(scrollYProgress, [0, 0.4, 0.55], [1, 0.8, 0]);
  const cameraRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const cameraBlur = useTransform(scrollYProgress, [0.3, 0.55], [0, 12]);
  const cameraFilter = useMotionTemplate`blur(${cameraBlur}px)`;

  // Reel fades in as we pass the lens
  const reelOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const reelScale = useTransform(scrollYProgress, [0.45, 0.7], [1.4, 1]);

  // Title appears later
  const titleOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.6, 0.8], [40, 0]);

  // Initial scroll hint
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Subtle idle rotation
  return (
    <section id="top" ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        <div className="absolute inset-0 vignette pointer-events-none z-30" />

        {/* Ambient gold glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />

        {/* Camera */}
        <motion.div
          style={{ scale: cameraScale, opacity: cameraOpacity, rotate: cameraRotate, filter: cameraFilter }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <motion.img
            src={camera}
            alt="Sony Alpha cinema camera"
            width={1920}
            height={1080}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
            className="w-[min(90vw,1200px)] h-auto select-none drop-shadow-[0_30px_120px_rgba(201,168,106,0.15)]"
          />
        </motion.div>

        {/* Reel video revealed from the lens */}
        <motion.div
          style={{ opacity: reelOpacity, scale: reelScale }}
          className="absolute inset-0 will-change-transform"
        >
          <video
            src={REEL}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80" />
          <div className="absolute inset-0 vignette" />
        </motion.div>

        {/* Title over reel */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
        >
          <p className="text-[10px] md:text-xs tracking-[0.6em] text-gold uppercase mb-6">
            A Cinematographer's Story
          </p>
          <h1 className="text-display headline-reveal text-[clamp(3rem,11vw,11rem)] leading-[0.95] tracking-tight">
            Curly Tales
            <span className="block italic text-gold/90 text-[0.55em] mt-2 tracking-[0.05em]">by Shiva</span>
          </h1>
          <p className="mt-8 text-[11px] md:text-sm tracking-[0.45em] text-muted-foreground uppercase">
            Cinematographer · Visual Storyteller · Filmmaker
          </p>
          <a
            href="#work"
            className="group mt-12 inline-flex items-center gap-4 border border-gold/40 px-8 py-4 text-gold text-xs tracking-[0.35em] uppercase hover:bg-gold hover:text-ink transition-all duration-500"
          >
            <Play className="w-3.5 h-3.5" />
            View My Work
          </a>
        </motion.div>

        {/* Scroll hint (initial) */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-10 inset-x-0 z-20 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase">
            Scroll to enter the story
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4 text-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] } }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="absolute inset-0 vignette pointer-events-none" />
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative w-24 h-24 mx-auto"
            >
              <div className="absolute inset-0 rounded-full border border-gold/30" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.2, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold"
              />
              <div className="absolute inset-3 rounded-full border border-gold/20" />
              <div className="absolute inset-6 rounded-full bg-gold/10" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 text-display text-2xl tracking-[0.4em] text-gold uppercase"
            >
              Curly Tales
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-2 text-[10px] tracking-[0.5em] text-muted-foreground uppercase"
            >
              by Shiva
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

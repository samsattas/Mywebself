import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/page-wrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const FloatingShape = ({ className, size, delay, duration, x, y }) => (
  <motion.div
    className={`absolute rounded-full opacity-10 ${className}`}
    style={{ width: size, height: size }}
    initial={{ x, y, scale: 0.8 }}
    animate={{
      x: [x, x + 30, x - 20, x],
      y: [y, y - 40, y + 20, y],
      scale: [0.8, 1.1, 0.9, 0.8],
      rotate: [0, 90, 180, 360],
    }}
    transition={{
      duration: duration || 20,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay || 0,
    }}
  />
);

const LandingPage = () => {
  return (
    <PageWrapper className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingShape
          className="bg-primary"
          size={300}
          x={-50}
          y={-80}
          delay={0}
          duration={25}
        />
        <FloatingShape
          className="bg-primary/60 blur-2xl"
          size={200}
          x={400}
          y={100}
          delay={2}
          duration={22}
        />
        <FloatingShape
          className="bg-secondary blur-xl"
          size={250}
          x={600}
          y={-120}
          delay={4}
          duration={28}
        />
        <FloatingShape
          className="bg-primary/40 blur-3xl"
          size={350}
          x={200}
          y={300}
          delay={1}
          duration={30}
        />
        <FloatingShape
          className="bg-secondary/50 blur-2xl"
          size={180}
          x={-100}
          y={250}
          delay={3}
          duration={18}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto text-center md:text-left"
        >
          <motion.p
            variants={fadeInUp}
            className="text-primary font-medium mb-4"
          >
            Hi, I&apos;m Samuel
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Fullstack{" "}
            <span className="text-primary">Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8"
          >
            Software Engineer from Cali, Colombia. I build web and mobile
            applications with React, Next.js, TypeScript, and more. Passionate
            about clean code and great user experiences.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex gap-4 justify-center md:justify-start"
          >
            <Button asChild size="lg" className="gap-2">
              <NavLink to="/xp">
                View Experience
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <NavLink to="/contact">Contact</NavLink>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default LandingPage;

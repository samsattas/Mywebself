import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/page-wrapper";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import landinImg1 from "../assets/landingImg1.png";

const LandingPage = () => {
  return (
    <PageWrapper className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex-1 space-y-6">
            <p className="text-primary font-medium">Hi, I&apos;m Samuel</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Fullstack{" "}
              <span className="text-primary">Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Software Engineer from Cali, Colombia. I build web and mobile
              applications with React, Next.js, TypeScript, and more. Passionate
              about clean code and great user experiences.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="gap-2">
                <NavLink to="/xp">
                  View Experience
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <NavLink to="/contact">Contact</NavLink>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={scaleIn} className="flex-1 flex justify-center">
            <img
              src={landinImg1}
              alt="Web development illustration"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default LandingPage;

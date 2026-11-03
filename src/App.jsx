import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowDown,
  ExternalLink,
  Eye,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  experiences,
  projects,
  apps,
  technicalSkills,
  aiTools,
  softSkills,
  languages,
  interests,
  education,
} from "@/data/resume-data";
import profile from "./assets/Profile.png";
import reactCert from "./assets/doc/UC-4796d0e7-d55e-443a-b878-b035b1c07af5.pdf";
import sqlVisualizerImg from "./assets/projects/sql-visualizer.png";
import charakasImg from "./assets/projects/charakas.png";
import umlClassDesignerImg from "./assets/projects/uml-class-designer.png";
import diptravelAgentsImg from "./assets/apps/diptravel-agents.png";
import lailaImg from "./assets/apps/laila.png";
import teachlyImg from "./assets/apps/teachly.png";
import digisigncolImg from "./assets/apps/digisigncol.png";
import noctaImg from "./assets/apps/nocta.png";
import emcaliImg from "./assets/apps/emcali.png";

const projectImages = {
  "sql-visualizer": sqlVisualizerImg,
  charakas: charakasImg,
  "uml-class-designer": umlClassDesignerImg,
};

const appImages = {
  "diptravel-agents": diptravelAgentsImg,
  laila: lailaImg,
  teachly: teachlyImg,
  digisigncol: digisigncolImg,
  nocta: noctaImg,
  emcali: emcaliImg,
};

/* ─── Animated background for hero ─── */
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

/* ─── Scroll‑animated section wrapper ─── */
const Section = ({ id, children, className = "" }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);

/* ─── Contact data ─── */
const contacts = [
  {
    icon: Mail,
    text: "samuelsatizabaltascon@gmail.com",
    link: "mailto:samuelsatizabaltascon@gmail.com",
    copyText: "samuelsatizabaltascon@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    text: "+57 302 341 1009",
    link: "tel:+573023411009",
    copyText: "+573023411009",
    label: "Phone",
  },
  {
    icon: Linkedin,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/samuel-satizabal-397062239/",
    copyText: "https://www.linkedin.com/in/samuel-satizabal-397062239/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    text: "GitHub",
    link: "https://github.com/samsattas",
    copyText: "https://github.com/samsattas",
    label: "GitHub",
  },
];

/* ═══════════════════════════════════════ */

export default function App() {
  const [copied, setCopied] = useState(null);

  const educationWithCerts = education.map((edu) =>
    edu.title.includes("React - The Complete Guide")
      ? { ...edu, cert: reactCert }
      : edu,
  );

  const handleCopy = (e, text) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-0">
      {/* ────────── HERO ────────── */}
      <section
        id="hero"
        className="min-h-[calc(100vh-3.5rem)] flex items-center relative overflow-hidden"
      >
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
              Fullstack <span className="text-primary">Developer</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8"
            >
              Software Engineer from Cali, Colombia with 4+ years shipping
              production web and mobile apps — React, Next.js, React Native,
              TypeScript, NestJS, and C#/.NET — for startups and enterprise
              clients alike. Currently building an AI-powered growth platform
              at Zelity and a multi-provider booking platform at Diptravel.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="gap-2"
                onClick={() => scrollTo("experience")}
              >
                View Experience
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("projects")}
              >
                Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("contact")}
              >
                Contact
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ────────── ABOUT ────────── */}
      <Section id="about" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Card>
            <CardContent className="flex flex-col md:flex-row items-center gap-8 p-8">
              <Avatar className="h-40 w-40 md:h-48 md:w-48 rounded-xl">
                <AvatarImage
                  src={profile}
                  alt="Samuel Satizabal"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl rounded-xl">
                  SS
                </AvatarFallback>
              </Avatar>
              <div className="space-y-4 flex-1">
                <div>
                  <h2 className="text-3xl font-bold">About me</h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-3.5 w-3.5" />
                    Cali, Colombia
                  </p>
                </div>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">
                  Software Engineer from ICESI University with experience
                  building web and mobile applications across multiple
                  industries. Skilled in{" "}
                  <strong>
                    React, Next.js, TypeScript, Angular, React Native, C#/.NET,
                    NestJS, GraphQL, and SQL
                  </strong>
                  . I thrive in fast-paced environments, enjoy solving complex
                  problems, and care deeply about writing clean, maintainable
                  code. When I&apos;m not coding, you&apos;ll find me folding
                  origami or brewing coffee.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  AI-Assisted Development
                </h3>
                <p className="text-sm text-muted-foreground">
                  Daily use of AI tooling to accelerate delivery and code
                  quality.
                </p>
                <div className="flex flex-wrap gap-2">
                  {aiTools.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((s) => (
                      <Badge key={s} variant="outline">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((l) => (
                      <Badge key={l} variant="outline">
                        {l}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((i) => (
                      <Badge key={i} variant="outline">
                        {i}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ────────── EXPERIENCE ────────── */}
      <Section id="experience" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {exp.position}
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                              Current
                            </span>
                          )}
                        </CardTitle>
                        <p className="text-sm text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {exp.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-muted-foreground leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.stack && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.stack.map((s) => (
                          <Badge key={s} variant="outline" className="text-xs">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ────────── PROJECTS ────────── */}
      <Section id="projects" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Personal Projects</h2>
            <p className="text-muted-foreground mt-2">
              Side projects I built and shipped on my own, live on GitHub
              Pages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden border-b bg-black/90"
                  >
                    <img
                      src={projectImages[p.image]}
                      alt={`${p.name} screenshot`}
                      className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </a>
                  <CardHeader>
                    <CardTitle className="text-lg">{p.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-1">
                      <Button size="sm" className="gap-1.5 flex-1" asChild>
                        <a href={p.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1.5 flex-1"
                        asChild
                      >
                        <a href={p.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ────────── APPS / PRODUCTS ────────── */}
      <Section id="apps" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Products I&apos;ve Worked On</h2>
            <p className="text-muted-foreground mt-2">
              Live apps and platforms I&apos;ve contributed to as part of
              client and company engagements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden border-b bg-black/90"
                  >
                    <img
                      src={appImages[a.image]}
                      alt={`${a.name} screenshot`}
                      className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </a>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg">{a.name}</CardTitle>
                      {a.context && (
                        <Badge variant="secondary" className="shrink-0 text-xs">
                          {a.context}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {a.description}
                    </p>
                    <Button size="sm" variant="outline" className="gap-1.5" asChild>
                      <a href={a.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Visit
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ────────── EDUCATION ────────── */}
      <Section id="education" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="text-3xl font-bold">Education</h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              {educationWithCerts.map((edu, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{edu.title}</h3>
                      <p className="text-muted-foreground">
                        {edu.institution} &mdash; {edu.location}
                      </p>
                      {edu.detail && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {edu.detail}
                        </p>
                      )}
                    </div>
                    {edu.cert && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="shrink-0"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[80vh] flex flex-col overflow-hidden">
                          <div className="p-4 pr-10">
                            <DialogTitle>{edu.title}</DialogTitle>
                            <DialogDescription>
                              {edu.institution} &mdash; {edu.detail}
                            </DialogDescription>
                          </div>
                          <iframe
                            src={edu.cert}
                            className="w-full flex-1 border-0"
                            title={edu.title}
                          />
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                  {i < education.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ────────── CONTACT ────────── */}
      <Section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-2xl space-y-8">
          <h2 className="text-3xl font-bold">Contact</h2>
          <Card>
            <CardHeader>
              <p className="text-muted-foreground flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                Cali, Colombia
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {contacts.map((c) => (
                <motion.div
                  key={c.label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="font-medium truncate">{c.text}</p>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="shrink-0"
                          onClick={(e) => handleCopy(e, c.copyText)}
                        >
                          {copied === c.copyText ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {copied === c.copyText ? "Copied!" : "Copy"}
                      </TooltipContent>
                    </Tooltip>
                  </a>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ────────── FOOTER ────────── */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Samuel Satizabal. Built with React &
          shadcn/ui.
        </div>
      </footer>
    </div>
  );
}

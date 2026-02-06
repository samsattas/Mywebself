import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin, Copy, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PageWrapper from "@/components/page-wrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";

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

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (e, text) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>Contact me</CardTitle>
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
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Contact;

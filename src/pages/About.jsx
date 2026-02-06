import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import PageWrapper from "@/components/page-wrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  technicalSkills,
  softSkills,
  languages,
  interests,
  education,
} from "@/data/resume-data";
import profile from "../assets/Profile.png";

const About = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* About Me Card */}
          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent className="flex flex-col md:flex-row items-center gap-8 p-8">
                <Avatar className="h-40 w-40 md:h-48 md:w-48 rounded-xl">
                  <AvatarImage src={profile} alt="Samuel Satizabal" className="object-cover" />
                  <AvatarFallback className="text-4xl rounded-xl">SS</AvatarFallback>
                </Avatar>
                <div className="space-y-4 flex-1">
                  <div>
                    <h2 className="text-3xl font-bold">Samuel Satizabal</h2>
                    <p className="text-primary font-medium">Fullstack Developer</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3.5 w-3.5" />
                      Cali, Colombia
                    </p>
                  </div>
                  <Separator />
                  <p className="text-muted-foreground leading-relaxed">
                    Software Engineer from ICESI University with experience building
                    web and mobile applications across multiple industries. Skilled in{" "}
                    <strong>React, Next.js, TypeScript, Angular, React Native, C#/.NET,
                    NestJS, GraphQL, and SQL</strong>. I thrive in fast-paced environments,
                    enjoy solving complex problems, and care deeply about writing clean,
                    maintainable code. When I&apos;m not coding, you&apos;ll find me
                    folding origami or brewing coffee.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Card */}
          <motion.div variants={fadeInUp}>
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
          </motion.div>

          {/* Education Card */}
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-lg">{edu.title}</h3>
                    <p className="text-muted-foreground">
                      {edu.institution} &mdash; {edu.location}
                    </p>
                    {edu.detail && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.detail}
                      </p>
                    )}
                    {i < education.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default About;

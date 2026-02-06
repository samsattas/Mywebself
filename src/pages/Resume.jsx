import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import PageWrapper from "@/components/page-wrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  experiences,
  technicalSkills,
  softSkills,
  languages,
  interests,
  education,
} from "@/data/resume-data";

const Resume = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-between"
          >
            <h1 className="text-3xl font-bold">Resume</h1>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="space-y-4 mt-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {exp.position}
                            </h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <Badge variant="outline">{exp.date}</Badge>
                        </div>
                        <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-4 mt-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
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
                        {i < education.length - 1 && (
                          <Separator className="mt-4" />
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-lg">Technical</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {technicalSkills.map((s) => (
                          <Badge key={s} variant="secondary">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Soft Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {softSkills.map((s) => (
                          <Badge key={s} variant="outline">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {languages.map((l) => (
                          <Badge key={l} variant="outline">
                            {l}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-lg">Interests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((i) => (
                          <Badge key={i} variant="outline">
                            {i}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Resume;

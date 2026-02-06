import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageWrapper from "@/components/page-wrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { experiences } from "@/data/resume-data";

const Experience = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl font-bold"
          >
            Experience
          </motion.h1>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          {exp.position}
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
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Experience;

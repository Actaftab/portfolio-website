import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground mb-6">
            Download my resume or view my experience below
          </p>
          <Button asChild className="gap-2">
            <a href="/MdAftabAlamresume.pdf" download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-medium">Senior Graphic Designer</h4>
                  <p className="text-sm text-muted-foreground">
                    PTS Trading Services Pvt. Ltd. • Jan 2023 - Present
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-medium">Graphic Designer & Video Editor</h4>
                  <p className="text-sm text-muted-foreground">
                    Digital Sukoon Pvt. Ltd., Mumbai • Feb 2018 - Jan 2020
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-medium">B.Sc. in AI & Data Science</h4>
                  <p className="text-sm text-muted-foreground">
                    IIT Jodhpur • Oct 2024 - Present
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-medium">B.Tech in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">
                    BTL Institute of Technology, Bangalore • (Dropped out)
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
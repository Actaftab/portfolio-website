import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            I'm a passionate developer with over 5 years of experience in creating
            beautiful and functional web applications. I specialize in React,
            TypeScript, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              description: "Building responsive and accessible web applications with modern frameworks"
            },
            {
              title: "Backend Development",
              description: "Creating scalable APIs and server-side applications"
            },
            {
              title: "UI/UX Design",
              description: "Designing intuitive user interfaces and experiences"
            }
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

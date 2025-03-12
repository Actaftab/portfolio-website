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
            I am a Graphic Designer & Video Editor with 5+ years of experience, specializing in creative design and visual storytelling. 
            Currently pursuing B.Sc. in AI & Data Science at IIT Jodhpur while working as a Senior Graphic Designer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Design Skills",
              description: "Expert in Adobe Creative Suite, including Photoshop, After Effects, and Premiere Pro"
            },
            {
              title: "Creative Services",
              description: "Specializing in movie posters, social media marketing, motion graphics, and streaming platform visuals"
            },
            {
              title: "Video Production",
              description: "Professional video editing, motion graphics, and Final Cut Pro expertise"
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
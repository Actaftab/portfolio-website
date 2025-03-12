import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Progress } from "@/components/ui/progress";

const SKILLS = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Adobe After Effects", level: 90 },
  { name: "Adobe Premiere Pro", level: 85 },
  { name: "Final Cut Pro", level: 80 },
  { name: "Motion Graphics", level: 85 },
  { name: "Video Editing", level: 90 }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground">
            Professional tools and technologies I specialize in
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
          {SKILLS.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

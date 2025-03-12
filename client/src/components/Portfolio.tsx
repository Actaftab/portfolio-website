import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    title: "Chalava Pehla Chakrview",
    description: "Complete graphic design work for web series, including promotional materials and visual assets",
    image: "https://images.unsplash.com/photo-1601158935942-52255782d322",
    tags: ["Graphic Design", "Motion Graphics", "Social Media"]
  },
  {
    title: "Eternal Hits of Jatin Lalit",
    description: "Designed comprehensive social media creatives and promotional banners for music event",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    tags: ["Event Design", "Social Media", "Branding"]
  },
  {
    title: "Political Advertising Campaign",
    description: "Created impactful visual content for political advertising and campaign materials",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    tags: ["Advertising", "Campaign Design", "Visual Communication"]
  },
  {
    title: "Gaming Community Designs",
    description: "Developed engaging visual assets for gaming communities and streaming platforms",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    tags: ["Gaming", "Streaming", "Community Design"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
          <p className="text-muted-foreground">
            Here are some of my notable projects that showcase my creative expertise and professional experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
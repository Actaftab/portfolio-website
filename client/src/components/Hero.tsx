import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1614850715649-1d0106293bd1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1
        }}
      />
      <div className="container px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-md mx-auto mb-12 group"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-lg transform -rotate-6 scale-105 transition-transform group-hover:rotate-0 group-hover:scale-110"></div>
            <img
              src="/1000059416.jpg"
              alt="Md Aftab Alam"
              className="relative w-full rounded-lg shadow-xl transform transition-transform group-hover:scale-105"
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Hello, I'm Md Aftab Alam
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Graphic Designer & Creative Content Designer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
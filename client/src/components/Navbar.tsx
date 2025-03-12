import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Portfolio
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

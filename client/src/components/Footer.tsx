import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { SiGoogledrive, SiFiverr } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Md Aftab Alam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.fiverr.com/actcreation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Fiverr"
            >
              <SiFiverr className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/iamsigmafx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aftabchand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://drive.google.com/drive/u/0/folders/18H0sjQtpqyes9mVcr-Xo6HalM_qd70Zf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Google Drive Portfolio"
            >
              <SiGoogledrive className="h-5 w-5" />
            </a>
            <a
              href="mailto:actcreation4@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
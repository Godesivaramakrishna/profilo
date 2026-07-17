import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10 bg-black text-white">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-mono font-bold tracking-[0.3em] bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              GSRK
            </span>
            <span className="text-white/50 text-sm">
              © {currentYear} Sivaramakrishna. All rights reserved.
            </span>
          </div>

          {/* Social links — visible usernames */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <a
              href="https://github.com/Godesivaramakrishna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-pink-300 hover:text-pink-200 transition-colors"
            >
              <Github className="h-3.5 w-3.5 shrink-0" />
              Godesivaramakrishna
            </a>
            <a
              href="https://www.linkedin.com/in/gsrk-durgaprasad-a00451291/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-blue-300 hover:text-blue-200 transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5 shrink-0" />
              gsrk-durgaprasad
            </a>
            <a
              href="mailto:goderaja288@gmail.com"
              className="flex items-center gap-1.5 text-sm text-red-300 hover:text-red-200 transition-colors"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              goderaja288@gmail.com
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-white/50">
            Made within{" "}
            <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent font-medium">
              India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

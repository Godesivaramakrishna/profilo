import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Godesivaramakrishna",
      label: "GitHub",
      color: "text-pink-300 hover:text-pink-200",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/gsrk-durgaprasad-a00451291/",
      label: "LinkedIn",
      color: "text-blue-300 hover:text-blue-200",
    },
    {
      icon: Mail,
      href: "mailto:goderaja288@gmail.com",
      label: "Email",
      color: "text-red-400 hover:text-red-300",
    },
  ];

  return (
    <footer className="py-8 border-t border-white/10 bg-black text-white">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-mono font-bold tracking-[0.3em] bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              SK
            </span>
            <span className="text-white/50 text-sm">
              © {currentYear} Sivaramakrishna. All rights reserved.
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 transition-colors ${link.color}`}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
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

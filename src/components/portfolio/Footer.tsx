import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Godesivaramakrishna",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sivaramakrishna",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:sivaramakrishna@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-display font-bold gradient-text">SK</span>
            <span className="text-muted-foreground text-sm">
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
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

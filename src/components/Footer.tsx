import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SURENDHAR-05-12",
      label: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/surendhar0512/",
      label: "LinkedIn Profile",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/itz._.snow_/",
      label: "Instagram Profile",
    },
  ];

  return (
    <footer className="bg-secondary/30 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold gradient-text">SURENDHAR A</h3>
          <p className="text-foreground/70">
            Crafting frontend experiences with code & creativity ✨
          </p>

          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          <p className="text-sm text-foreground/50 pt-8">
            © 2025 Surendhar Arasappan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Music, Plane, Film, Dribbble } from "lucide-react";
import profilePic from "@/assets/profile-pic.jpg";

const About = () => {
  const interests = [
    { icon: Music, label: "Music" },
    { icon: Plane, label: "Travel" },
    { icon: Film, label: "Movie" },
    { icon: Dribbble, label: "Sports" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 gradient-primary blur-2xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full" />
            <img
              src={profilePic}
              alt="Surendhar Arasappan"
              className="relative rounded-3xl w-full max-w-md mx-auto shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">
              MY INTRODUCTION
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                I'm Surendhar Arasappan, a frontend developer from Tamil Nadu.
                I enjoy building responsive and user-friendly websites.
                Skilled in HTML, CSS, and JavaScript with hands-on project experience.
              </p>
              <p>
                Created a fashion e-commerce site and personal portfolio.
                I'm passionate about clean UI and mobile-first design.
                Looking to grow in a tech-driven team and learn more every day.
              </p>
              <p className="italic text-primary">
                "Design is intelligence made visible. Code brings it to life."
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              <div className="glass-card p-3 rounded-lg">
                <strong className="text-primary">Name:</strong> Surendhar Arasappan
              </div>
              <div className="glass-card p-3 rounded-lg">
                <strong className="text-primary">Date of birth:</strong> Dec 5, 2003
              </div>
              <div className="glass-card p-3 rounded-lg">
                <strong className="text-primary">Address:</strong> Karur, Tamil Nadu
              </div>
              <div className="glass-card p-3 rounded-lg">
                <strong className="text-primary">Zip code:</strong> 621311
              </div>
              <div className="glass-card p-3 rounded-lg">
                <strong className="text-primary">Email:</strong> surendhar6384@gmail.com
              </div>
              <div className="glass-card p-3 rounded-lg">
                <strong className="text-primary">Phone:</strong> +91-63840-24943
              </div>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-4 pt-4">
              {interests.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary/20 transition-colors"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

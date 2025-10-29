const Skills = () => {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "92%" },
    { name: "JavaScript", level: "80%" },
    { name: "Bootstrap", level: "90%" },
    { name: "React", level: "78%" },
    { name: "Figma", level: "60%" },
    { name: "Java", level: "75%" },
    { name: "Node.js", level: "70%" },
    { name: "GitHub", level: "70%" },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="relative">
          <div className="skills-slider-wrapper overflow-hidden">
            <div className="skills-track flex gap-8 animate-scroll">
              {/* First set */}
              {skills.map((skill, idx) => (
                <div
                  key={`skill-1-${idx}`}
                  className="skill-card glass-card p-8 rounded-2xl min-w-[280px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto gradient-primary rounded-2xl flex items-center justify-center text-3xl font-bold">
                      {skill.name.charAt(0)}
                    </div>
                    <h4 className="text-xl font-semibold">{skill.name}</h4>
                    <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 gradient-primary rounded-full"
                        style={{ width: skill.level }}
                      />
                    </div>
                    <div className="text-primary font-semibold">{skill.level}</div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {skills.map((skill, idx) => (
                <div
                  key={`skill-2-${idx}`}
                  className="skill-card glass-card p-8 rounded-2xl min-w-[280px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto gradient-primary rounded-2xl flex items-center justify-center text-3xl font-bold">
                      {skill.name.charAt(0)}
                    </div>
                    <h4 className="text-xl font-semibold">{skill.name}</h4>
                    <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 gradient-primary rounded-full"
                        style={{ width: skill.level }}
                      />
                    </div>
                    <div className="text-primary font-semibold">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .skills-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;

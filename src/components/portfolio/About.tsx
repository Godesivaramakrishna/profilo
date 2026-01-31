import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Aditya College Of Engineering And Technology, Surampalem",
      period: "2023 – 2027",
      grade: "CGPA: 7.75",
    },
    {
      degree: "MPC - Intermediate Education",
      institution: "Pragati Junior College, Prathipadu",
      period: "2021 – 2023",
      grade: "GPA: 7.76",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate developer focused on cloud computing and backend development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 gradient-border">
              <h3 className="text-xl font-display font-semibold mb-4">Profile Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Electronics and Communication Engineering student with strong interest in Cloud Computing 
                and Backend Development. Hands-on experience with AWS services, serverless architectures, 
                and infrastructure automation using Terraform. Adaptable to new environments with a 
                problem-solving mindset and eagerness to learn.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                {["Python", "AWS", "Terraform", "Git", "DSA"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-display font-semibold flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  {edu.institution}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

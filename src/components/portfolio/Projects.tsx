import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Users, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "HireFusion",
      subtitle: "Resume and Interview Analysis Platform",
      description:
        "A comprehensive AWS-powered platform that processes resumes and interview videos using AI services. Features automated workflows, real-time visualization, and intelligent analysis.",
      icon: Users,
      tech: [
        "AWS Lambda",
        "S3",
        "Textract",
        "Rekognition",
        "Transcribe",
        "Comprehend",
        "DynamoDB",
        "API Gateway",
        "CloudWatch",
        "Python",
        "JavaScript",
      ],
      highlights: [
        "Designed AWS Lambda functions for resume and video processing",
        "Automated workflows using S3 Event Notifications and SNS",
        "Stored analysis results in DynamoDB with API Gateway exposure",
        "Collaborated in a 6-member team",
      ],
      github: "https://github.com/Godesivaramakrishna",
      isTeamProject: true,
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      title: "Blood Donation Platform",
      subtitle: "Life-Saving Blood Donor Connection System",
      description:
        "A web application connecting blood donors with recipients in need. Features donor registration, blood type matching, and emergency request handling to facilitate life-saving donations.",
      icon: Droplet,
      tech: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      highlights: [
        "User registration and authentication system",
        "Blood type matching algorithm",
        "Real-time donor availability tracking",
        "Emergency blood request notifications",
      ],
      github: "https://github.com/Godesivaramakrishna/blooddonation",
      isTeamProject: false,
      gradient: "from-red-600 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-world applications showcasing cloud expertise and problem-solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      {project.isTeamProject && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur">
                          Team Project
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.subtitle}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      className="gradient-bg text-white flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

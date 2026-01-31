import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Code, Database, Terminal, Globe, Brain } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Data",
      skills: ["Python", "NumPy", "Data Structures", "Algorithms"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS EC2", "S3", "Lambda", "DynamoDB", "RDS", "Load Balancer", "Auto Scaling", "SageMaker", "Terraform"],
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Globe,
      title: "Web & Data",
      skills: ["Web Scraping", "HTML/CSS", "JavaScript", "API Development"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Terminal,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Linux"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      skills: ["LeetCode (100+)", "GeeksForGeeks (100+)", "CodeChef", "HackerRank"],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["DynamoDB", "RDS", "SQL", "NoSQL"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative" ref={ref}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building cloud-native applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-lg font-display font-semibold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

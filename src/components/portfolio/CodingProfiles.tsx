import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Trophy, Star, Code2 } from "lucide-react";

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    {
      name: "LeetCode",
      username: "23MH1A0424",
      stat: "100+ Problems Solved",
      icon: "🧩",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      url: "https://leetcode.com/u/23MH1A0424/",
    },
    {
      name: "GeeksForGeeks",
      username: "goderaw5kh",
      stat: "100+ Problems Solved",
      icon: "💻",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      url: "https://www.geeksforgeeks.org/profile/goderaw5kh",
    },
    {
      name: "CodeChef",
      username: "gsrk_coder",
      stat: "1★ Coder",
      icon: "👨‍🍳",
      color: "from-amber-600 to-yellow-500",
      bgColor: "bg-amber-500/10",
      url: "https://www.codechef.com/users/gsrk_coder",
    },
    {
      name: "HackerRank",
      username: "goderaja288",
      stat: "3★ Problem Solving, SQL, Python | 2★ Java",
      icon: "🏆",
      color: "from-green-600 to-teal-500",
      bgColor: "bg-teal-500/10",
      url: "https://www.hackerrank.com/profile/goderaja288",
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="coding" className="py-20 md:py-32 relative bg-black text-white" ref={ref}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-200/70 font-medium text-sm uppercase tracking-[0.3em]">Competitive Programming</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Coding{" "}
            <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              Profiles
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Consistent practice and problem-solving across multiple platforms
          </p>
        </motion.div>

        {/* Stats overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Code2 className="h-6 w-6 text-cyan-200" />
            </div>
            <div>
              <p className="text-2xl font-bold">200+</p>
              <p className="text-sm text-white/60">Problems Solved</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-amber-300" />
            </div>
            <div>
              <p className="text-2xl font-bold">4</p>
              <p className="text-sm text-white/60">Active Platforms</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Star className="h-6 w-6 text-cyan-200" />
            </div>
            <div>
              <p className="text-2xl font-bold">3★</p>
              <p className="text-sm text-white/60">Max Rating</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              transition={{ duration: 0.4 }}
              className="group"
            >
              <div className="rounded-2xl p-6 h-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${profile.bgColor} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {profile.icon}
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-display font-bold mb-1 flex items-center gap-2">
                    {profile.name}
                    <ExternalLink className="h-4 w-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  {/* Stat */}
                  <p className={`text-sm font-medium bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                    {profile.stat}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6 md:px-16 text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-lg leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hey there! I'm{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Gurunada Rao Reddy
          </span>
          , a passionate CSE undergrad at VITB (Class of 2028). I'm always
          chasing new tech, turning ideas into projects, and learning something
          cool every day.
        </motion.p>

        {/* Quick Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4 mb-10"
        >
          <p>
            🚀 <strong>Web Dev Journey:</strong> Currently on a MERN stack grind
            — building dope stuff like a grammar corrector app, landing pages,
            and a restaurant system.
          </p>

          <p>
            🔧 <strong>Hardware Nerd:</strong> Played with ESP32s, gas sensors,
            and built smart detection systems. Also mentored juniors at an IoT
            workshop like a chill sensei.
          </p>

          <p>
            🧠 <strong>Stack:</strong> JavaScript, Python, Node.js, Bootstrap,
            Figma, Arduino, Framer Motion. Forever in glow-up mode.
          </p>

          <p>
            🌱 <strong>Always Learning:</strong> Not just building — I’m
            evolving. Every project, collab, and bug makes me better.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-500">
            📚 Education
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>B.Tech in Computer Science</strong> – Vishnu Institute of
              Technology ,Bhimavaram. (2024 – 2028)
              <br />
              CGPA: Still climbing 🔥
            </li>
            <li>
              <strong>Intermediate (MPC)</strong> – Bhashyam Junior College
              (2022 – 2024)
              <br />
              97% Boards + serious JEE prep grind
            </li>
            <li>
              <strong>Secondary School </strong> – Narayana High School ( 2022)
              <br />
              569/600
            </li>
          </ul>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-500">
            🏆 Achievements
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              🥈 <strong>2nd Place at Hackodessy 1.0:</strong> Built an Smart
              Gas detection and Fire accidents prevention System
            </li>
            <li>
              🚀 <strong>3rd Place at FAILATOHN 2K24</strong> Smart Shopping
              Trolley
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10"
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-500">
            Certifications
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              📜 <strong>Programming ,Data structures using Python </strong> –{" "}
              <a href="https://drive.google.com/file/d/1SUWM-v0yCOdwWzMsvuLPMZ6dHvYOA71a/view?usp=sharing">
                NPTEL
              </a>
            </li>
            <li>
              📜 <strong> Mentores @ IOT WORKSHOP 2k25 </strong> – E-CELL ,VITB
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

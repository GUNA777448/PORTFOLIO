import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section
      id="achievements"
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
          Achievements
        </motion.h2>

        {/* Achievements List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-500">
            🏆 Achievements
          </h3>
          <ul className="list-none space-y-6">
            <li className="bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 rounded-xl shadow p-0 flex flex-col overflow-hidden">
              <img
                src="https://res.cloudinary.com/duvr3z2z0/image/upload/v1756019941/WhatsApp_Image_2025-08-24_at_12.40.08_2663ca57_xrkvoj.jpg"
                alt="Startup-Utsav"
                className="w-full h-64 md:h-80 object-contain bg-white"
                style={{
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              />
              <div className="p-6">
                🥈 <strong>2nd Place at StartUp-Utsav</strong> Built Sprout -AN
                end to end Farmer Application
              </div>
            </li>
            <li className="bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 rounded-xl shadow p-0 flex flex-col overflow-hidden">
              <img
                src="https://res.cloudinary.com/duvr3z2z0/image/upload/v1756019931/WhatsApp_Image_2025-08-24_at_12.28.19_304ba170_enbyoi.jpg"
                alt="Hackodessy"
                className="w-full h-64 md:h-80 object-contain bg-white"
                style={{
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              />
              <div className="p-6">
                🥈 <strong>2nd Place at Hackodessy 1.0:</strong> Built a smart
                gas detection and fire accidents prevention system.
              </div>
            </li>
            <li className="bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 rounded-xl shadow p-0 flex flex-col overflow-hidden">
              <img
                src="https://res.cloudinary.com/duvr3z2z0/image/upload/v1756024340/WhatsApp_Image_2025-08-24_at_13.17.40_6de4b2d5_ebsvld.jpg"
                alt="FAILATOHN"
                className="w-full h-64 md:h-80 object-contain bg-white"
                style={{
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              />
              <div className="p-6">
                🚀 <strong>3rd Place at FAILATOHN 2K24:</strong> Built a smart
                shopping trolley.
              </div>
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-500">
            Certifications
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              📜 <strong>Programming, Data structures using Python</strong> –{" "}
              <a
                href="https://drive.google.com/file/d/1SUWM-v0yCOdwWzMsvuLPMZ6dHvYOA71a/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                NPTEL
              </a>
            </li>
            <li>
              📜 <strong>Mentores @ IOT WORKSHOP 2k25</strong> – E-CELL, VITB
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

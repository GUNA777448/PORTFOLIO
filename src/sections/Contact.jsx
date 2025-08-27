import { useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("https://script.google.com/macros/s/AKfycbynpAcGeqk71bTzBjmoVy-r8SmJbJZIaHSMBfRJib1M5mGqXViuUK_yD-wuw4M9zwj9/exec", {
    method: "POST",
    body: JSON.stringify({
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    }),
  });

  const data = await res.json();
  if (data.success) {c
    alert("Message sent ✅ I'll get back to you soon.");
    form.current.reset();
  } else {
    alert("Oops, something went wrong ❌ Try again later.");
  }
};


  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 md:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a question, project idea, or just wanna vibe? Drop a message 👇
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 w-full sm:w-fit"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

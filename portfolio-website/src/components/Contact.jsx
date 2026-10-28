import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import profile from "../data/profile";
import socialLinks from "../data/socialLinks";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      name="contact"
      className="section-padding w-full bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="flex flex-col p-4 sm:p-6 max-w-screen-lg mx-auto">
        <SectionHeading
          title="Contact"
          subtitle="Open to backend engineering roles — let's connect"
        />

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-2/5 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              The fastest way to reach me is by email. You can also find me on
              LinkedIn or GitHub.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-400">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-400">Phone</p>
              <a
                href={`tel:+91${profile.phone}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                +91 {profile.phone}
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-gray-300">{profile.location}</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks
                .filter((link) => link.id !== "resume")
                .map(({ id, label, href }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm rounded-md border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                  >
                    {label}
                  </a>
                ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full lg:w-3/5"
          >
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="p-3 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="p-3 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors my-4"
            />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell me about the role or project..."
              className="p-3 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-y min-h-[120px]"
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 mt-6 w-full sm:w-fit rounded-md hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
            >
              Send Message
            </button>
            {submitted && (
              <p className="mt-4 text-sm text-cyan-400">
                Your email client should open shortly. If it doesn&apos;t, email
                me directly at {profile.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

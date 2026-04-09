// Contact form with Formspree integration

import { useState } from "react";
import Reveal from "./Reveal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwverbpz";
const STATUS_CLEAR_DELAY = 5000;

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
        setTimeout(() => setStatus("idle"), STATUS_CLEAR_DELAY);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), STATUS_CLEAR_DELAY);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), STATUS_CLEAR_DELAY);
    }
  }

  return (
    <section id="contact" className="scroll-mt-28 py-6 sm:py-12 px-4 sm:px-6" aria-labelledby="contact-heading">
      <div className="max-w-2xl lg:max-w-3xl mx-auto">
        <Reveal>
          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-semibold text-neutral-700 text-center">
            Contact
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-700 text-center px-4">
            Have a project in mind or just want to say hi? Send me a message.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 flex flex-col gap-4" noValidate>
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-xl px-4 py-3 bg-white/70 backdrop-blur border border-white/50 focus:outline-none focus:ring-2 focus:ring-neutral-400 text-sm sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-xl px-4 py-3 bg-white/70 backdrop-blur border border-white/50 focus:outline-none focus:ring-2 focus:ring-neutral-400 text-sm sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="w-full rounded-xl px-4 py-3 bg-white/70 backdrop-blur border border-white/50 focus:outline-none focus:ring-2 focus:ring-neutral-400 resize-y text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="self-center mt-2 rounded-full px-6 py-3 bg-neutral-700 text-white font-medium hover:bg-neutral-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
          </form>
        </Reveal>

        {/* Status messages */}
        {status !== "idle" && (
          <div className="mt-6" role="status" aria-live="polite">
            {status === "success" && (
              <div className="rounded-xl sm:rounded-2xl bg-green-100/70 border border-green-200 px-4 sm:px-5 py-3 sm:py-4 text-green-800 text-sm sm:text-base">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl sm:rounded-2xl bg-red-100/70 border border-red-200 px-4 sm:px-5 py-3 sm:py-4 text-red-800 text-sm sm:text-base">
                Something went wrong. Please try again.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

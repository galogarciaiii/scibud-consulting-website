export default function Contact() {
  return (
    <main className="min-h-screen bg-pine text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">Get in Touch</h1>
        <p className="text-lg text-white/80 mb-8">
          Ready to discuss your project? Send me an email and I'll get back to you promptly.
        </p>
        <a 
          href="mailto:galo.garcia@scibud.consulting"
          className="inline-flex items-center rounded-xl bg-ornamental_pepper px-6 py-3 text-lg font-medium text-pine hover:opacity-90 transition-opacity"
        >
          Email: galo.garcia@scibud.consulting
        </a>
      </div>
    </main>
  )
}

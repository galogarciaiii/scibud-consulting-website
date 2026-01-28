import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const APPLE_PODCASTS_URL =
  "https://podcasts.apple.com/us/podcast/scibud-emerging-discoveries-from-bioimaging/id1740828391"

export default function Media() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>SciBud Media - Science Podcast</title>
        <meta
          name="description"
          content="AI-powered science news podcast covering the latest in biomedical research."
        />
      </Head>

      <div className="min-h-screen bg-pine text-white flex flex-col">
        {/* Header */}
        <header className="w-full border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            {/* Logo + Title */}
            <Link href="/" className="flex items-center gap-3" aria-label="SciBud Consulting">
              <Image
                src="https://storage.googleapis.com/bucket-sci-bud/bioimaging/artwork/logo_alone.png"
                alt="SciBud"
                width={48}
                height={48}
                className="rounded-md"
                priority
              />
              <span className="font-semibold text-3xl sm:text-4xl md:text-6xl tracking-tight">
                SciBud Media
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-xl text-white/80 hover:text-white transition-colors">
                Consulting
              </Link>
              <Link href="/academy" className="text-xl text-white/80 hover:text-white transition-colors">
                Academy
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-ornamental_pepper px-4 py-2 text-sm font-medium text-pine hover:opacity-90"
              >
                Contact me
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/20 p-2 text-white/80 hover:text-white"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-white/10 bg-pine">
              <nav className="px-6 py-4 flex flex-col gap-4">
                <Link href="/" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white">
                  Consulting
                </Link>
                <Link
                  href="/academy"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  Academy
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex w-fit rounded-xl bg-ornamental_pepper px-4 py-2 text-sm font-medium text-pine hover:opacity-90"
                >
                  Contact me
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* Main */}
        <main className="flex-1">
          {/* Hero */}
          <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-sans tracking-tight">
              Science News Delivered Daily
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              An AI-powered podcast that ingests the latest biomedical research and transforms it into
              engaging science news, published twice daily on Apple Podcasts.
            </p>

            <div className="mt-8">
              <a
                href={APPLE_PODCASTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-ornamental_pepper px-6 py-3 text-base font-medium text-pine hover:opacity-90"
              >
                Listen on Apple Podcasts
              </a>
            </div>
          </section>

          {/* About the Podcast */}
          <section className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-semibold">About the Podcast</h2>
            <div className="mt-8 rounded-2xl bg-gray-800 p-8 border border-white/10">
              <p className="text-white/85 leading-relaxed">
                SciBud Media is an automated science news podcast that analyzes ~100 new biomedical
                papers every 12 hours, ranks them by relevance and impact, and generates concise,
                accurate audio summaries of the most important discoveries.
              </p>
            </div>
          </section>

          {/* About the Creator */}
          <section className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-semibold">About the Creator</h2>

            <div className="mt-6 grid gap-8 md:grid-cols-[1fr,2fr] items-start">
              {/* Photo + Links */}
              <div className="flex flex-col items-center md:items-start">
                <Image
                  src="https://storage.googleapis.com/bucket-sci-bud/bioimaging/artwork/GG_headshot_Arcadia.jpg"
                  alt="Galo Garcia III"
                  width={300}
                  height={300}
                  className="rounded-2xl border border-white/10 object-cover w-full h-auto max-w-xs"
                />
                <a
                  href="https://www.linkedin.com/in/galo-garcia-831608aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-white/70 hover:text-white underline underline-offset-4"
                >
                  View LinkedIn profile
                </a>
                <a
                  href={APPLE_PODCASTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-white/70 hover:text-white underline underline-offset-4"
                >
                  Open podcast on Apple Podcasts
                </a>
              </div>

              {/* Text */}
              <div>
                <p className="text-white/85 leading-relaxed">
                  I designed, built, and deployed SciBud Media as a demonstration of what’s possible
                  when deep scientific expertise meets modern AI engineering. With a Ph.D. in
                  molecular and cell biology from UC Berkeley, I created this system to bridge
                  cutting-edge research and accessible science communication.
                </p>
                <p className="mt-4 text-white/80 leading-relaxed">
                  The platform runs on production-grade pipelines for literature retrieval,
                  ranking, script generation, and automated publishing—allowing it to operate
                  continuously with minimal human intervention.
                </p>
              </div>
            </div>
          </section>

          {/* Listen */}
          <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Listen Now</h2>
            <a
              href={APPLE_PODCASTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-ornamental_pepper px-6 py-3 text-lg font-medium text-pine hover:opacity-90"
            >
              Listen on Apple Podcasts
            </a>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SciBud Media</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
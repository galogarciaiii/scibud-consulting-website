import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Media() {
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
            <Link href="/" className="flex items-center gap-3" aria-label="SciBud Consulting">
              <Image
                src="https://storage.googleapis.com/bucket-sci-bud/bioimaging/artwork/logo_alone.png"
                alt="SciBud"
                width={60}
                height={60}
                className="rounded-md"
                priority
              />
              <span className="hidden sm:inline font-semibold text-6xl md:text-7xl tracking-tight">
                SciBud Media
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-xl text-white/80 hover:text-white transition-colors">
                Consulting
              </Link>
              <Link href="/academy" className="text-xl text-white/80 hover:text-white transition-colors">
                Academy
              </Link>
            </nav>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-ornamental_pepper px-4 py-2 text-sm font-medium text-pine hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ornamental_pepper/60"
            >
              Contact me
            </Link>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">
          {/* Hero */}
          <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-sans tracking-tight">
              Science News Delivered Daily
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              An AI-powered podcast that ingests the latest biomedical research and transforms it into engaging science news, published twice daily on Apple Podcasts.
            </p>
          </section>

          {/* About the Podcast */}
          <section className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-semibold">About the Podcast</h2>
            <div className="mt-8 rounded-2xl bg-gray-800 p-8 backdrop-blur-sm border border-white/10">
              <p className="text-white/85 leading-relaxed">
                SciBud Media is an automated science news podcast that analyzes ~100 new biomedical papers every 12 hours, ranks them by relevance and impact, and generates compelling audio summaries of the most important discoveries. The system runs on robust backend pipelines integrating Google Cloud and OpenAI APIs, delivering consistent, high-quality science journalism at scale.
              </p>
            </div>
          </section>

          {/* About */}
          <section id="about" className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-semibold">About the Creator</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-[1fr,2fr] items-start">
              <Image
                src="https://storage.googleapis.com/bucket-sci-bud/bioimaging/artwork/GG_headshot_Arcadia.jpg"
                alt="Galo Garcia III"
                width={300}
                height={300}
                className="rounded-2xl border border-white/10 object-cover w-full h-auto max-w-xs"
              />
              <div>
                <p className="text-white/85 leading-relaxed">
                  I designed, built, and deployed SciBud Media as a demonstration of what's possible when deep scientific expertise meets modern AI engineering. With a Ph.D. in molecular and cell biology from UC Berkeley and hands-on experience in computational systems, I created this podcast to bridge the gap between cutting-edge research and accessible science communication.
                </p>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Building SciBud Media required designing robust backend pipelines, integrating Google Cloud and OpenAI APIs, and deploying a production-ready service capable of continuous, reliable output. The result is a system that transforms complex biomedical research into engaging audio content, published twice daily on major podcast platforms.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-xl bg-ornamental_pepper px-4 py-2 text-sm font-medium text-pine hover:opacity-90"
                  >
                    Contact me
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Listen Section */}
          <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Listen Now</h2>
            <p className="text-white/80 mb-8">
              Available on Apple Podcasts and other major platforms
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-ornamental_pepper px-6 py-3 text-lg font-medium text-pine hover:opacity-90"
            >
              Get in touch
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SciBud Media</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-white">Home</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

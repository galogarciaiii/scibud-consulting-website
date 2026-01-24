import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Academy() {
  return (
    <>
      <Head>
        <title>SciBud Academy - Science Tutoring</title>
        <meta
          name="description"
          content="Expert science tutoring and academic support."
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
                SciBud Academy
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-xl text-white/80 hover:text-white transition-colors">
                Consulting
              </Link>
              <Link href="/media" className="text-xl text-white/80 hover:text-white transition-colors">
                Media
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
              Science Tutoring & Academic Support
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Expert tutoring in biology, chemistry, and life sciences for students at all levels.
            </p>
          </section>

          {/* Services Section */}
          <section className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-semibold">What I Offer</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-800 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">One-on-One Tutoring</h3>
                <p className="mt-2 text-sm text-white/80">
                  Personalized sessions tailored to your learning style and goals.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-800 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">Exam Preparation</h3>
                <p className="mt-2 text-sm text-white/80">
                  Comprehensive prep for standardized tests and course exams.
                </p>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
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
                  With a Ph.D. in molecular and cell biology from UC Berkeley, I bring deep scientific expertise and a passion for teaching to every tutoring session. My approach combines rigorous understanding of fundamental concepts with practical problem-solving strategies that help students excel in biology, chemistry, and life sciences.
                </p>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Whether you're preparing for exams, working through challenging coursework, or building foundational knowledge, I tailor each session to your learning style and goals. My experience spans from undergraduate courses to advanced graduate-level topics, ensuring comprehensive support at any academic level.
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

          {/* CTA */}
          <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Ready to Get Started?</h2>
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-ornamental_pepper px-6 py-3 text-lg font-medium text-pine hover:opacity-90"
            >
              Contact me
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SciBud Academy</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-white">Home</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

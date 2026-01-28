import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>SciBud Consulting</title>
        <meta
          name="description"
          content="Assay development, image analysis, and molecular design for early-stage biotech."
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
                alt="SciBud Consulting"
                width={48}
                height={48}
                className="rounded-md"
                priority
              />
              <span className="font-semibold text-xl sm:text-4xl md:text-6xl tracking-tight">
                SciBud Consulting
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/academy" className="text-xl text-white/80 hover:text-white transition-colors">
                Academy
              </Link>
              <Link href="/media" className="text-xl text-white/80 hover:text-white transition-colors">
                Media
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-ornamental_pepper px-4 py-2 text-sm font-medium text-pine hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ornamental_pepper/60"
              >
                Contact me
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/20 p-2 text-white/80 hover:text-white transition-colors"
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
                <Link
                  href="/academy"
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-white/80 hover:text-white transition-colors"
                >
                  Academy
                </Link>
                <Link
                  href="/media"
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-white/80 hover:text-white transition-colors"
                >
                  Media
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex w-fit rounded-xl bg-ornamental_pepper px-4 py-2 text-sm font-medium text-pine hover:opacity-90 transition-colors"
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
              Practical R&amp;D problem solving for early-stage biotech
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Assay development, image analysis, and molecular design—delivered with scientific rigor and startup speed for lean
              biotech teams working under tight timelines, limited resources, and real pressure to generate actionable results.
            </p>
          </section>

          {/* Services */}
          <section id="services" className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Assay Development */}
              <div className="rounded-2xl bg-gray-800 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">Assay Development</h3>
                <p className="mt-2 text-sm text-white/80">
                  Expertise in designing and optimizing assays that uncover challenging molecular targets—combining rigorous
                  controls and quantitative readouts to ensure reproducible performance.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 text-white/80 space-y-1">
                  <li>Assay design, validation &amp; QC strategy</li>
                  <li>Troubleshooting biochemical and cell-based workflows</li>
                  <li>Custom SOPs &amp; data analysis pipelines</li>
                </ul>
              </div>

              {/* Image Analysis */}
              <div className="rounded-2xl bg-gray-800 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">Image Analysis</h3>
                <p className="mt-2 text-sm text-white/80">
                  Quantitative workflows for microscopy and high-content imaging—extracting hundreds of cellular features per well to
                  reveal phenotypes, mechanisms, and quality metrics at scale.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 text-white/80 space-y-1">
                  <li>CellProfiler &amp; Python-based feature extraction</li>
                  <li>High-throughput phenotyping &amp; comparative analysis</li>
                  <li>Actionable data summaries for screening and decision-making</li>
                </ul>
              </div>

              {/* Molecular Design & Visualization */}
              <div className="rounded-2xl bg-gray-800 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">Molecular Design &amp; Visualization</h3>
                <p className="mt-2 text-sm text-white/80">
                  Communicate complex biology with precision. From molecular models to therapeutic mechanism visuals, designs are
                  optimized for investor decks, publications, and R&amp;D collaboration.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 text-white/80 space-y-1">
                  <li>Protein &amp; ligand structure visualization</li>
                  <li>Mechanism-of-action &amp; pathway illustrations and animations</li>
                  <li>Custom figures for decks, communications, and investor relations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Bio */}
          <section id="bio" className="mx-auto max-w-6xl px-6 pb-20">
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-[1fr,2fr] items-start">
              <div className="flex flex-col items-center md:items-start">
                <Image
                  src="https://storage.googleapis.com/bucket-sci-bud/bioimaging/artwork/GG_headshot_Arcadia.jpg"
                  alt="Galo Garcia III"
                  width={300}
                  height={300}
                  className="rounded-2xl border border-white/10 object-cover w-full h-auto max-w-xs"
                />

                {/* LinkedIn link (added) */}
                <a
                  href="https://www.linkedin.com/in/galo-garcia-831608aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-white/70 hover:text-white transition-colors underline underline-offset-4"
                >
                  View LinkedIn profile
                </a>
              </div>

              <div>
                <div className="text-white/85 leading-relaxed space-y-4">
                  <p>
                    I’m a molecular and cell biologist who learned early on that the most important scientific problems rarely announce
                    themselves clearly. My work has always lived at the intersection of careful experimentation, advanced imaging, and
                    making sense of complex data—especially when the answers aren’t obvious at first glance.
                  </p>

                  <p>
                    During my academic career, my most defining work was uncovering the nanoscale cause of a rare genetic disorder,
                    Joubert syndrome. Using advanced super-resolution microscopy and quantitative image analysis, I mapped how patient
                    mutations disrupt the architecture of a tiny cellular structure called the primary cilium—revealing a concrete
                    structural mechanism behind a devastating human disease. That work required inventing new imaging approaches,
                    extracting signal from noisy data, and making hard decisions with incomplete information. It also taught me what it
                    really means to turn complex biology into actionable insight.
                  </p>

                  <p>
                    Since then, I’ve carried that mindset into every project I take on. Whether I’m designing assays, building
                    image-analysis pipelines, or creating molecular visuals, my focus is the same: ask the right questions early, use
                    rigorous methods, and generate results that actually move decisions forward. I’ve worked in environments with limited
                    time, limited resources, and high expectations—conditions that closely mirror early-stage biotech.
                  </p>

                  <p>
                    Today, through SciBud Consulting, I help lean teams translate biological uncertainty into clarity. I collaborate
                    closely, move quickly, and deliver polished, decision-ready outputs—so teams can spend less time spinning and more
                    time building.
                  </p>
                </div>

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
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SciBud Consulting</p>
            <div className="flex items-center gap-6" />
          </div>
        </footer>
      </div>
    </>
  )
}
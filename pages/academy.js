import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Academy() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>SciBud Academy - Scientific Guidance for Students</title>
        <meta
          name="description"
          content="1-on-1 mentorship for students: scientific review papers, science fair projects, summer program essays, and college application guidance."
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
                SciBud Academy
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-xl text-white/80 hover:text-white transition-colors">
                Consulting
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
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-white/80 hover:text-white transition-colors"
                >
                  Consulting
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
          <section className="mx-auto max-w-6xl px-6 pt-12 pb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-sans tracking-tight">
              1-on-1 Scientific Guidance for Students
            </h1>

            <div className="mt-4 text-base md:text-lg text-white/80 max-w-3xl mx-auto text-justify">
              <p className="leading-relaxed">
                I work with curious students who want to think like scientists—not just check boxes. In our sessions,
                we slow down and ask better questions: What genuinely interests you? What kind of scientist do you want to become?
                What skills do you want to grow right now? From there, I help students learn how to articulate those interests
                clearly and turn them into focused, meaningful goals.
              </p>

              <p className="mt-4 leading-relaxed">
                Each path is guided by concrete outcomes. Students may develop a polished scientific review article suitable for
                submission to a student-focused journal, or design and complete a science fair project with a manuscript and poster
                that could also be published in a student journal. For students applying to summer programs or college, I provide
                detailed feedback on essays—helping them communicate thoughtful program fit, intellectual curiosity, and a growth
                mindset that shows how each opportunity will accelerate their development.
              </p>

              <p className="mt-4 leading-relaxed">
                Across all of this work, the emphasis is the same: critical thinking, ownership, and clarity. The deliverables
                matter, but they are not the end goal. They are evidence that a student has learned how to define their own goals,
                reason carefully, and communicate their ideas with confidence—skills that will serve them well far beyond any single
                project or application.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-ornamental_pepper px-6 py-3 text-base font-medium text-pine hover:opacity-90"
              >
                Ask about availability
              </Link>
              <a
                href="#offerings"
                className="inline-flex rounded-xl border border-white/20 px-6 py-3 text-base font-medium text-white/90 hover:text-white hover:border-white/40 transition-colors"
              >
                See offerings
              </a>
            </div>
          </section>

          {/* Offerings */}
          <section id="offerings" className="mx-auto max-w-6xl px-6 pb-14">
            <h2 className="text-2xl md:text-3xl font-semibold">What I Support</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-800 p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl md:text-2xl font-semibold">Scientific Review Article</h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Step-by-step guidance to choose a topic, search the literature, read papers critically, build an outline,
                  draft sections, create figures, and polish a professional-format review.
                </p>
                <ul className="mt-5 space-y-2 text-white/75">
                  <li>• Typical timeline: ~11 sessions (2–3 months)</li>
                  <li>• Deliverable: 5–8 page review article + figures</li>
                  <li>• Emphasis: clarity, evidence, and scientific “story”</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-800 p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl md:text-2xl font-semibold">Science Fair Project</h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Guidance from idea → testable question → experimental design → data analysis → results and discussion, ending
                  with a strong poster and presentation practice.
                </p>
                <ul className="mt-5 space-y-2 text-white/75">
                  <li>• Typical timeline: ~8–10 sessions (3–4 months)</li>
                  <li>• Deliverable: report + poster + short talk</li>
                  <li>• Emphasis: feasibility, controls, and interpretation</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-800 p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl md:text-2xl font-semibold">Summer Program Essays</h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Structured brainstorming and drafting to help students write authentic, specific essays that connect interests,
                  experiences, and intellectual goals—without sounding generic.
                </p>
                <ul className="mt-5 space-y-2 text-white/75">
                  <li>• Clarify program fit + deadlines</li>
                  <li>• Build strong narratives from real experiences</li>
                  <li>• Iterate: outline → draft → revision</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-800 p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl md:text-2xl font-semibold">College Application Guidance</h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Support with application strategy and writing: personal statements, activity descriptions, and supplemental
                  essays—especially for students emphasizing science and research.
                </p>
                <ul className="mt-5 space-y-2 text-white/75">
                  <li>• Clear positioning and voice</li>
                  <li>• Specificity, structure, and revision</li>
                  <li>• Practical, student-owned writing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Format */}
          <section className="mx-auto max-w-6xl px-6 pb-14">
            <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-6">
                <h3 className="font-semibold text-lg">Format</h3>
                <p className="mt-2 text-white/80 leading-relaxed">
                  1-on-1 Google Meet sessions, ~60 minutes once per week, with clear weekly goals.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-6">
                <h3 className="font-semibold text-lg">Homework</h3>
                <p className="mt-2 text-white/80 leading-relaxed">
                  A few hours per week for reading, notes, drafting, or project tasks—matched to the student’s pace.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-6">
                <h3 className="font-semibold text-lg">Expectations</h3>
                <p className="mt-2 text-white/80 leading-relaxed">
                  Best fit for disciplined students who want to think deeply, write clearly, and do real work between sessions.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-gray-800 p-8 border border-white/10">
              <h3 className="text-xl font-semibold">My Approach</h3>
              <p className="mt-3 text-white/85 leading-relaxed">
                I guide students step-by-step while modeling how scientists think: how to ask good questions, evaluate evidence,
                make decisions under uncertainty, and communicate clearly. The tone is rigorous, supportive, and student-driven.
              </p>
              <p className="mt-4 text-white/80 leading-relaxed">
                We also learn to use AI responsibly—helpful for search, clarification, and revision—but always checked against
                reliable sources and never treated as a final authority.
              </p>
            </div>
          </section>

          {/* Tools */}
          <section className="mx-auto max-w-6xl px-6 pb-14">
            <h2 className="text-2xl md:text-3xl font-semibold">Tools We Use</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-800 p-8 border border-white/10">
                <h3 className="text-xl font-semibold">Writing & Research</h3>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li>• Google Docs (notes + drafts)</li>
                  <li>• Zotero (citations + library)</li>
                  <li>• PubMed, Google Scholar, arXiv, bioRxiv</li>
                  <li>• Elicit / Cheiron.bio (as support tools)</li>
                  <li>• ChatGPT (definitions, brainstorming, revision—responsibly)</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-800 p-8 border border-white/10">
                <h3 className="text-xl font-semibold">Figures & Data</h3>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li>• GIMP / Inkscape (diagrams + figures)</li>
                  <li>• R or Python (Jupyter) for data + plots</li>
                  <li>• GitHub (optional) for sharing code</li>
                </ul>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-semibold">About Your Mentor</h2>

            <div className="mt-6 grid gap-8 md:grid-cols-[1fr,2fr] items-start">
              {/* Photo + LinkedIn */}
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
                  className="mt-3 text-sm text-white/70 hover:text-white transition-colors underline underline-offset-4"
                >
                  View LinkedIn profile
                </a>
              </div>

              {/* Text */}
              <div className="max-w-3xl text-justify">
                <p className="text-white/85 leading-relaxed">
                  I grew up in a high-expectation household. My mom believed that effort mattered—but only if it was complete. One
                  hundred percent was the standard. Ninety-nine percent didn’t count. That mindset shaped how I approached school,
                  science, and eventually my career. It taught me discipline, persistence, and how to perform under pressure—but it
                  also showed me how easy it is for achievement to become something you do for others, rather than something you
                  define for yourself.
                </p>

                <p className="mt-4 text-white/85 leading-relaxed">
                  I’ve spent my professional life in demanding scientific environments—Harvard, UC Berkeley, UCSF, and high-intensity
                  research labs where rigor and precision are non-negotiable. Much of my work happened under real constraints:
                  limited time, limited resources, and pressure to make the right decisions early. I’ve learned how to ask the most
                  important questions first, extract signal from messy data, and turn uncertainty into clear, actionable next steps. I
                  know what it means to operate at a high level—and what it costs when goals aren’t truly your own.
                </p>

                <p className="mt-4 text-white/85 leading-relaxed">
                  That experience shapes how I mentor students. Many highly motivated students are very good at meeting expectations
                  set by parents, teachers, or programs—but haven’t yet been given space to define their own goals. My role is to help
                  students slow down, think deeply, and articulate what kind of scientist they want to become. From there, we build
                  the skills, habits, and confidence to pursue that vision with rigor and integrity. The goal isn’t perfection. It’s
                  ownership—so students don’t just succeed, but succeed on their own terms.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-xl bg-ornamental_pepper px-4 py-2 text-sm font-medium text-pine hover:opacity-90"
                  >
                    Contact me
                  </Link>
                  <a
                    href="#offerings"
                    className="inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:border-white/40 transition-colors"
                  >
                    View offerings
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Interested?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              If you’re a motivated student (or parent) looking for structured, high-standard guidance, reach out and tell me what
              you’re working on. I’ll share next steps and availability.
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
            <p>© {new Date().getFullYear()} SciBud Academy</p>
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
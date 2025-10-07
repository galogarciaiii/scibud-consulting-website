import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png" // update to your logo path
                alt="SciBud Consulting"
                width={40}
                height={40}
                className="rounded-md"
                priority
              />
              <span className="sr-only">SciBud Consulting</span>
            </Link>

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
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
              Practical R&D expertise for early-stage biotech
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Assay development, image analysis, and molecular design & animation—delivered with scientific rigor and startup speed.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="#services"
                className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/5"
              >
                Explore services
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-ornamental_pepper px-4 py-2 text-sm font-medium text-pine hover:opacity-90"
              >
                Start a project
              </Link>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Assay Development */}
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">Assay Development</h3>
                <p className="mt-2 text-sm text-white/80">
                  Design, optimize, and validate biochemical and cell-based assays. Robust SOPs, controls, and analysis pipelines to de-risk decisions.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 text-white/80 space-y-1">
                  <li>Assay design & QC strategy</li>
                  <li>Throughput & automation planning</li>
                  <li>Data capture & analysis templates</li>
                </ul>
              </div>

              {/* Image Analysis */}
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">Image Analysis</h3>
                <p className="mt-2 text-sm text-white/80">
                  End-to-end pipelines for microscopy and HCS: segmentation, feature extraction, and reporting tailored to your biology.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 text-white/80 space-y-1">
                  <li>CellProfiler/Fiji → Python pipelines</li>
                  <li>QC dashboards & reproducibility</li>
                  <li>Dose–response & phenotyping</li>
                </ul>
              </div>

              {/* Molecular Design & Animation */}
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">Molecular Design & Animation</h3>
                <p className="mt-2 text-sm text-white/80">
                  Clear molecular visuals and animations for pitches, docs, and internal onboarding—science-accurate and audience-aware.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 text-white/80 space-y-1">
                  <li>Sequence & structure visuals</li>
                  <li>Mechanism-of-action animations</li>
                  <li>Figure & slide production</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Bio */}
          <section id="bio" className="mx-auto max-w-6xl px-6 pb-20">
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-[1fr,2fr] items-start">
              <Image
                src="/headshot.jpg" // optional headshot
                alt="Galo Garcia III"
                width={640}
                height={640}
                className="rounded-2xl border border-white/10 object-cover w-full h-auto"
              />
              <div>
                <p className="text-white/85 leading-relaxed">
                  I’m Galo Garcia III, Ph.D., a molecular & cell biologist who builds practical, reproducible workflows for early-stage R&D.
                  I bridge wet-lab experimentation and computational analysis to turn complex problems into clear, testable results.
                </p>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Recent work includes high-content imaging pipelines, assay design and validation, and production-quality molecular visuals for investor and
                  scientific communications. I collaborate quickly, document thoroughly, and deliver with polish.
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
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SciBud Consulting</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white/80">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white/80">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

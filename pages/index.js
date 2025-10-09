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
            <Link href="/" className="flex items-center gap-3" aria-label="SciBud Consulting">
              <Image
                src="https://storage.googleapis.com/bucket-sci-bud/bioimaging/artwork/logo_alone.png"
                alt="SciBud Consulting"
                width={40}
                height={40}
                className="rounded-md"
                priority
              />
              <span className="hidden sm:inline font-semibold text-4xl md:text-5xl tracking-tight">
                SciBud Consulting
              </span>
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
            <h1 className="text-4xl md:text-5xl font-sans tracking-tight">
              Practical R&D problem solving for early-stage biotech
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Assay development, image analysis, and molecular design & animation—delivered with scientific rigor and startup speed.
            </p>

          </section>

          {/* Services */}
          <section id="services" className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Assay Development */}
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">Assay Development</h3>
                <p className="mt-2 text-sm text-white/80">
                  Expertise in designing and optimizing assays that uncover challenging molecular targets—combining rigorous controls and quantitative readouts to ensure reproducible performance.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 text-white/80 space-y-1">
                  <li>Assay design, validation & QC strategy</li>
                  <li>Troubleshooting biochemical and cell-based workflows</li>
                  <li>Custom SOPs & data analysis pipelines</li>
                </ul>
              </div>

              {/* Image Analysis */}
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">Image Analysis</h3>
                <p className="mt-2 text-sm text-white/80">
                  Quantitative workflows for microscopy and high-content imaging—extracting hundreds of cellular features per well to reveal phenotypes, mechanisms, and quality metrics at scale.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 text-white/80 space-y-1">
                  <li>CellProfiler & Python-based feature extraction</li>
                  <li>High-throughput phenotyping & comparative analysis</li>
                  <li>Actionable data summaries for screening and decision-making</li>
                </ul>
              </div>

              {/* Molecular Design & Visualization */}
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold">Molecular Design & Visualization</h3>
                <p className="mt-2 text-sm text-white/80">
                  Communicate complex biology with precision. From molecular models to therapeutic mechanism visuals, designs are optimized for investor decks, publications, and R&D collaboration.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 text-white/80 space-y-1">
                  <li>Protein & ligand structure visualization</li>
                  <li>Mechanism-of-action & pathway illustrations and animations</li>
                  <li>Custom figures for decks, communications, and investor relations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Bio */}
          <section id="bio" className="mx-auto max-w-6xl px-6 pb-20">
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-[1fr,2fr] items-start">
              <Image
                src="https://storage.googleapis.com/bucket-sci-bud/bioimaging/artwork/GG_headshot_Arcadia.jpg"
                alt="Galo Garcia III"
                width={640}
                height={640}
                className="rounded-2xl border border-white/10 object-cover w-full h-auto"
              />
              <div>
                <p className="text-white/85 leading-relaxed">
                  I bridge two worlds: bench science and computational data analysis. Trained as a molecular and cell biologist (Ph.D., UC Berkeley), I’ve spent years at the bench and behind the microscope, uncovering nanoscale mechanisms of disease and developing new assays, imaging approaches, and tools for discovery.
                  More recently, I’ve applied the same rigor to computational systems. I independently designed, built, and deployed SciBud, an AI-powered agent that ingests ~100 new biomedical papers every 12 hours, ranks them, and automatically generates science news podcasts published on Apple Podcasts. Building SciBud required designing robust backend pipelines, integrating Google Cloud and OpenAI APIs, and deploying a production-ready service capable of continuous, reliable output.
                  What sets me apart is the ability to move fluidly between wet-lab experimentation, advanced microscopy, computational analysis, and AI engineering. I thrive at the intersection of biology and technology, where solving complex problems means knowing how to generate data at the bench, extract meaning with computational tools, and engineer intelligent systems that scale insights into impact.
                </p>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Recent work includes high-content imaging pipelines, assay design and validation, and production-quality molecular visuals for investor and
                  scientific communications. I collaborate quickly and deliver with polish.
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
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

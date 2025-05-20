import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>SciBud Consulting</title>
        <meta name="description" content="Expert consulting for biotech R&D" />
      </Head>

      <main className="min-h-screen bg-pine text-white p-8 text-center">
        <header className="mb-8">
          <h1 className="text-5xl font-serif mb-4">SciBud Consulting</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering early-stage biotech with expert image analysis and assay development.
          </p>
        </header>

        <nav className="space-x-6 text-lg">
          <Link href="/services" className="hover:text-ornamental_pepper">Services</Link>
          <Link href="/projects" className="hover:text-ornamental_pepper">Projects</Link>
          <Link href="/blog" className="hover:text-ornamental_pepper">Blog</Link>
          <Link href="/contact" className="hover:text-ornamental_pepper">Contact</Link>
        </nav>
      </main>
    </>
  )
}

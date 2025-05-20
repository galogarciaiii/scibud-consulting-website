export default function Contact() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-serif text-green-900 mb-6">Contact</h1>
      <form className="space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32" />
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Send</button>
      </form>
      <p className="mt-4 text-center">Or <a href="https://your-acuity-url" className="text-green-700 underline">book a consultation</a>.</p>
    </main>
  )
}

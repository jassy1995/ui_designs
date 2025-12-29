import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="text-lg text-gray-700 mb-8">
        Have a project in mind or need a software solution?
        Fill out the form below and we’ll get back to you.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Tell us about your project"
          rows={5}
          className="w-full border p-3 rounded"
        />
        <button className="bg-black text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
      <div className="mt-10">
        <Link to="/" className="text-blue-600">Back to Home</Link>
        </div>
    </section>
  );
}

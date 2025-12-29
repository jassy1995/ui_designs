import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <p className="text-lg text-gray-700 mb-4">
        We are a technology solutions provider focused on building reliable software and AI-driven systems that help businesses operate efficiently and grow sustainably.
      </p>

      <p className="text-lg text-gray-700 mb-4">
        Our approach combines strong engineering practices, modern technologies, and a clear understanding of business needs. We work closely with our clients to design and build solutions that are practical, scalable, and aligned with real-world goals.
      </p>

      <p className="text-lg text-gray-700">
        From custom applications to automation and intelligent systems, we deliver software that supports productivity, improves decision-making, and creates long-term value.
      </p>
      <div className="mt-10">
        <Link to="/" className="text-blue-600">Back to Home</Link>
        </div>
    </section>  
  );
}

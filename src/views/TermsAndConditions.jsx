import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>

      <p className="text-gray-700 mb-4">
        By using our website or services, you agree to the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Services</h2>
      <p className="text-gray-700 mb-4">
        Our services are provided for lawful business purposes only. Unauthorized use, reproduction, or distribution of our content or services is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="text-gray-700 mb-4">
        All materials, software, and content provided are the intellectual property of the company unless otherwise stated in a written agreement.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        We shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Updates</h2>
      <p className="text-gray-700 mb-4">
        These terms may be updated periodically without prior notice. Continued use of our services constitutes acceptance of any changes.
      </p>
      <div className="mt-10">
        <Link to="/" className="text-blue-600">Back to Home</Link>
        </div>
    </section>
  );
}

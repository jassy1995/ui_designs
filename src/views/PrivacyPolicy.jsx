import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="px-6 xs:px-10 md:px-32 py-12 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-slate-600">
          This Privacy Policy explains how we collect, use, and protect your information when you use our services.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p className="mt-2 text-slate-600">
            We may collect personal information such as name, email, phone number, payment details, and usage data when you interact with our platform.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">How We Use Information</h2>
          <p className="mt-2 text-slate-600">
            We use your information to provide and improve our services, process transactions, communicate with you, and ensure platform security.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Data Sharing</h2>
          <p className="mt-2 text-slate-600">
            We do not sell your data. We may share information with trusted partners for service delivery, compliance with legal obligations, or to prevent fraud.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p className="mt-2 text-slate-600">
            We implement safeguards designed to protect your data. However, no method of transmission over the internet is completely secure.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p className="mt-2 text-slate-600">
            You may request access, correction, or deletion of your personal data, subject to applicable laws.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p className="mt-2 text-slate-600">
            We use cookies to personalize content and analyze usage. You can control cookies through your browser settings.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-2 text-slate-600">
            If you have questions about this policy, contact our support team.
          </p>
        </section>

        <div className="mt-10">
          <Link to="/buyhub" className="text-blue-600">Back to Buyhub</Link>
        </div>
      </div>
    </div>
  );
}

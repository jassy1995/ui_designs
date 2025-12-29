import { Link } from "react-router-dom";

export default function HowWeWork() {
  const steps = [
    {
      title: "Discovery & Requirements",
      description:
        "We begin by understanding your business objectives, challenges, and technical needs. This ensures the solution is aligned with your goals from the start."
    },
    {
      title: "Planning & Design",
      description:
        "We define the system architecture, technology stack, and user experience. Clear planning allows for efficiency, accuracy, and scalability."
    },
    {
      title: "Development & Review",
      description:
        "We build in phases, providing regular updates and incorporating feedback to ensure the solution meets expectations."
    },
    {
      title: "Deployment & Support",
      description:
        "Once complete, we deploy the solution and provide ongoing support, improvements, and maintenance as needed."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">How We Work</h1>

      <p>We follow a structured and transparent process to ensure quality results and successful delivery.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              {index + 1}. {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
       <div className="mt-10">
        <Link to="/" className="text-blue-600">Back to Home</Link>
        </div>
    </section>
  );
}

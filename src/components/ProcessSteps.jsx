import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Say Hello",
    text: "Tell us about your story, event or creative project. A short conversation is all it takes to start.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We'll build a photography experience around your vision — locations, light, schedule and story.",
  },
  {
    number: "03",
    title: "Shoot",
    text: "Relax, be yourself and let us capture the moments naturally. Direction, but never posing.",
  },
  {
    number: "04",
    title: "Relive",
    text: "Receive a carefully curated collection of photographs, edited with patience and delivered with love.",
  },
];

export default function ProcessSteps({ tone = "light" }) {
  const dark = tone === "dark";
  return (
    <div>
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 120} className="relative">
            <span className={`font-display text-6xl font-medium italic md:text-7xl ${dark ? "text-cream/12" : "text-espresso/8"}`}>
              {step.number}
            </span>
            <h3 className={`mt-5 font-display text-xl font-medium md:text-2xl ${dark ? "text-cream" : "text-espresso"}`}>
              {step.title}
            </h3>
            <p className={`mt-3 max-w-xs font-body text-sm font-light leading-relaxed ${dark ? "text-cream/60" : "text-espresso/60"}`}>
              {step.text}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

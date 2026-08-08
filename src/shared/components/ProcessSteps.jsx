import Reveal from "./Reveal";
import { processSteps } from "../data/processSteps";

export default function ProcessSteps({ tone = "light" }) {
  const dark = tone === "dark";
  return (
    <div>
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
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

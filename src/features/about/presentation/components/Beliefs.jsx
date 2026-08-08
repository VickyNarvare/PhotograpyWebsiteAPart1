import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";

const values = [
  {
    title: "Honesty over perfection",
    text: "We don't chase flawless frames. We chase real ones — the unguarded laugh, the tired hug, the quiet second nobody planned.",
  },
  {
    title: "Light is the first collaborator",
    text: "Every photograph starts with light. We arrive early, wait for it, and let it shape the frame before we add anything else.",
  },
  {
    title: "The story outlives the shoot",
    text: "A gallery is only successful if it still means something in ten years. We edit, colour and deliver with that test in mind.",
  },
];

export default function Beliefs() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel>What We Believe</SectionLabel>
        </Reveal>
        <div className="mt-14 divide-y divide-espresso/10 border-y border-espresso/10">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 120}>
              <div className="grid gap-4 py-12 md:grid-cols-12 md:items-baseline md:gap-10">
                <p className="font-display text-4xl font-medium italic text-terracotta md:col-span-2 md:text-5xl">
                  0{index + 1}
                </p>
                <h3 className="font-display text-2xl font-medium text-espresso md:col-span-4 md:text-3xl">
                  {value.title}
                </h3>
                <p className="font-body text-[15px] font-light leading-relaxed text-espresso/65 md:col-span-6">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

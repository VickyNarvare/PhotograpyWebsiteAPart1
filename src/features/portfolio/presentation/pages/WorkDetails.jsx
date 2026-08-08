import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import { usePortfolio } from "../../application/hooks/usePortfolio";

export default function WorkDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProject, getNextProject } = usePortfolio();
  const project = getProject(id);

  useEffect(() => {
    if (!project) navigate("/work", { replace: true });
  }, [project, navigate]);

  if (!project) return null;

  const nextProject = getNextProject(project.id);

  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-charcoal pt-36 text-cream md:min-h-[65vh]">
        <img
          src={project.coverImage}
          alt={`${project.title} — ${project.category.toLowerCase()} photography, ${project.location}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/25 to-espresso/80" aria-hidden="true" />

        <div className="container-x relative z-10 pb-14 md:pb-20">
          <Reveal>
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-cream/70 transition-colors duration-300 hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
              All Work
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.04]">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3">
              <p className="label text-[10px] text-clay">{project.category}</p>
              <p className="font-body text-sm font-light text-cream/70">{project.location}</p>
              <p className="font-body text-sm font-light text-cream/70">{project.year}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>The Story</SectionLabel>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-display text-3xl font-medium leading-snug text-espresso md:text-4xl">
                {project.short}
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 font-body text-[15px] font-light leading-[1.95] text-espresso/70">
                {project.description}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 border-t border-espresso/10 pt-8">
                <p className="label text-[10px] text-espresso/45">Details</p>
                <dl className="mt-5 space-y-4 font-body text-sm">
                  <div className="flex justify-between gap-6">
                    <dt className="font-light text-espresso/50">Category</dt>
                    <dd className="font-medium text-espresso">{project.category}</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="font-light text-espresso/50">Location</dt>
                    <dd className="font-medium text-espresso">{project.location}</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="font-light text-espresso/50">Year</dt>
                    <dd className="font-medium text-espresso">{project.year}</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="font-light text-espresso/50">Collection</dt>
                    <dd className="font-medium text-espresso">{project.images.length} photographs</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Link to="/booking" className="btn btn-terracotta mt-10 w-full px-8 py-4">
              Shoot Something Like This
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {project.images.map((image, index) => (
                <Reveal key={`${image}-${index}`} delay={(index % 2) * 140} className={index % 2 === 1 ? "md:mt-16" : ""}>
                  <figure className="overflow-hidden bg-charcoal">
                    <div className={`group overflow-hidden ${index % 3 === 0 ? "aspect-[4/3]" : "aspect-[3/4]"}`}>
                      <img
                        src={image}
                        alt={`${project.title} — photograph ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="img-zoom h-full w-full object-cover"
                      />
                    </div>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-espresso/10 bg-warmwhite py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="label text-[10px] text-espresso/45">Next Story</p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={`/work/${nextProject.id}`}
              className="group mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
            >
              <h2 className="font-display text-4xl font-medium text-espresso transition-colors duration-300 group-hover:text-terracotta md:text-6xl">
                {nextProject.title}
              </h2>
              <span className="inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso/60 transition-colors duration-300 group-hover:text-terracotta">
                {nextProject.category} · {nextProject.location.split(",")[0]}
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-500 ease-cinematic group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

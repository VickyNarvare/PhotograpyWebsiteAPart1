import { ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import { site } from "../../../../shared/data/site";
import { img } from "../../../../shared/utils/img";
import { InstagramIcon } from "../../../../shared/components/icons";
import { instagramPosts } from "../../domain/data/instagramPosts";

export default function InstagramWall() {
  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-espresso md:text-4xl">
            A glimpse into <em className="italic text-terracotta">our visual diary.</em>
          </h2>
          <p className="mt-3 font-body text-sm font-light text-espresso/60">
            New frames every week — follow the making of the work.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
          >
            <InstagramIcon className="h-5 w-5" />
            {site.instagramHandle}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </a>
        </Reveal>
      </div>

      <div className="mt-12 columns-2 gap-3 md:columns-4 md:gap-4 [column-fill:balance]">
        {instagramPosts.map((post, index) => (
          <Reveal key={`${post.src}-${index}`} delay={index * 80} className="mb-3 break-inside-avoid md:mb-4">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className={`group relative block overflow-hidden bg-charcoal ${post.aspect}`}
              aria-label={`Open Instagram post ${index + 1}`}
            >
              <img
                src={img(post.src, 900, 1100)}
                alt={`Instagram post ${index + 1} from ${site.name}`}
                loading="lazy"
                decoding="async"
                className="img-zoom absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/45"
                aria-hidden="true"
              >
                <InstagramIcon className="h-6 w-6 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="btn btn-outline-dark px-8 py-4">
          Follow Along
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </Reveal>
    </div>
  );
}

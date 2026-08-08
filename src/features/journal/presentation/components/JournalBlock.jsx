export default function JournalBlock({ block }) {
  switch (block.type) {
    case "h3":
      return <h2 className="mt-14 font-display text-2xl font-medium leading-snug text-espresso md:text-3xl">{block.text}</h2>;
    case "quote":
      return (
        <blockquote className="my-12 border-l-2 border-terracotta pl-6 md:pl-8">
          <p className="font-display text-2xl font-medium italic leading-[1.4] text-espresso md:text-3xl">
            {block.text}
          </p>
        </blockquote>
      );
    case "img":
      return (
        <figure className="my-12 overflow-hidden bg-charcoal">
          <img
            src={block.src}
            alt={block.alt || "Photograph from the journal"}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          {block.caption ? (
            <figcaption className="bg-warmwhite px-5 py-4 font-body text-xs font-light text-espresso/50">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    default:
      return <p className="mt-6 font-body text-[15px] font-light leading-[1.95] text-espresso/70">{block.text}</p>;
  }
}

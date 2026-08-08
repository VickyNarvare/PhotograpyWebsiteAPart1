import { Link } from "react-router-dom";
import Reveal from "../../shared/components/Reveal";

export default function MobileBookCTA() {
  return (
    <Reveal>
      <div className="flex flex-col items-start justify-between gap-6 bg-espresso px-8 py-8 text-cream sm:flex-row sm:items-center sm:px-10 lg:px-12">
        <div>
          <p className="font-display text-2xl font-medium">Let's create together</p>
          <p className="mt-1 font-body text-sm font-light text-cream/60">
            Reserve your date — sessions are limited each month.
          </p>
        </div>
        <Link to="/booking" className="btn btn-terracotta shrink-0 px-8 py-4">
          Book a Session
        </Link>
      </div>
    </Reveal>
  );
}

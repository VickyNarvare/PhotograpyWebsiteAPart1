import { lazy, Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

const Home = lazy(() => import("../../features/home/presentation/pages/Home"));
const About = lazy(() => import("../../features/about/presentation/pages/About"));
const Work = lazy(() => import("../../features/portfolio/presentation/pages/Work"));
const WorkDetails = lazy(() => import("../../features/portfolio/presentation/pages/WorkDetails"));
const Services = lazy(() => import("../../features/services/presentation/pages/Services"));
const Journal = lazy(() => import("../../features/journal/presentation/pages/Journal"));
const JournalDetails = lazy(() => import("../../features/journal/presentation/pages/JournalDetails"));
const Contact = lazy(() => import("../../features/contact/presentation/pages/Contact"));
const Booking = lazy(() => import("../../features/booking/presentation/pages/Booking"));

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <span className="label animate-pulse text-terracotta">Noir Frame</span>
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-espresso px-6 text-center text-cream">
      <span className="label text-clay">404</span>
      <h1 className="font-display text-4xl sm:text-5xl">
        This frame is <em className="italic text-clay">empty.</em>
      </h1>
      <p className="max-w-md font-body text-sm text-cream/60">
        The page you are looking for doesn't exist or has moved. Let's take you back to the story.
      </p>
      <Link to="/" className="btn btn-terracotta px-8 py-4">
        Back Home
      </Link>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:id" element={<JournalDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

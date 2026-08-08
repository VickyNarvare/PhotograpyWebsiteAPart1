import AppRoutes from "./routes/AppRoutes";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ScrollToTop from "./layout/ScrollToTop";
import MobileBookCTA from "./layout/MobileBookCTA";
import Lightbox from "../features/portfolio/presentation/components/Lightbox";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
      <Lightbox />
      <MobileBookCTA />
    </div>
  );
}

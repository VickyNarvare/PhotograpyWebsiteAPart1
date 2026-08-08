import { BrowserRouter } from "react-router-dom";
import { GalleryProvider } from "../../features/portfolio/application/contexts/GalleryContext";
import { BookingProvider } from "../../features/booking/application/contexts/BookingContext";

export default function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <GalleryProvider>
        <BookingProvider>{children}</BookingProvider>
      </GalleryProvider>
    </BrowserRouter>
  );
}

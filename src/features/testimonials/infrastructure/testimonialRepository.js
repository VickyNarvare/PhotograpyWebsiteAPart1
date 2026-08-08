import { testimonials } from "../domain/data/testimonialData";

export const testimonialRepository = {
  getAll() {
    return testimonials;
  },
};

import { testimonialRepository } from "../../infrastructure/testimonialRepository";

export function useTestimonials() {
  return {
    testimonials: testimonialRepository.getAll(),
  };
}

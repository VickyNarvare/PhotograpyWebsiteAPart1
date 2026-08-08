import { validateBookingForm } from "../../domain/rules/bookingValidation";
import { bookingRepository } from "../../infrastructure/bookingRepository";

export function validateBooking(form) {
  return validateBookingForm(form);
}

export async function submitBooking(form) {
  await bookingRepository.submit(form);
  return { ok: true };
}

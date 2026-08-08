const SUBMISSION_DELAY_MS = 1400;

export const bookingRepository = {
  async submit(booking) {
    await new Promise((resolve) => setTimeout(resolve, SUBMISSION_DELAY_MS));
    return { ok: true };
  },
};

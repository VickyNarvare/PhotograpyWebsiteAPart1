import { CircleCheck, LoaderCircle, ArrowRight } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { site } from "../data/site";

const services = ["Wedding", "Pre-Wedding", "Portrait", "Fashion", "Commercial", "Event", "Other"];

const budgets = ["Under ₹20K", "₹20K – ₹50K", "₹50K – ₹1L", "₹1L+", "Let's Discuss"];

function Field({ name, label, error, children }) {
  return (
    <div>
      <label htmlFor={name} className="field-label">
        {label}
      </label>
      {children}
      {error ? (
        <p className="field-error" id={`${name}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function BookingForm({ tone = "light" }) {
  const { form, errors, status, updateField, submit, reset } = useBooking();
  const dark = tone === "dark";

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-6 border border-espresso/10 bg-warmwhite p-9 md:p-14">
        <CircleCheck className="h-9 w-9 text-terracotta" strokeWidth={1.2} aria-hidden="true" />
        <h3 className="font-display text-4xl font-medium text-espresso md:text-5xl">
          Thank you. <em className="italic text-terracotta">Your story is on its way to us.</em>
        </h3>
        <p className="max-w-md font-body text-[15px] font-light leading-relaxed text-espresso/65">
          We've received your inquiry and will get back to you {site.responseTime}. Keep an eye on your inbox — and
          your phone.
        </p>
        <button type="button" onClick={reset} className="btn btn-outline-dark mt-2 px-8 py-4">
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      noValidate
      className="border border-espresso/10 bg-warmwhite p-7 sm:p-9 md:p-14"
    >
      <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
        <Field name="fullName" label="Full Name *" error={errors.fullName}>
          <input
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className="field-control"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </Field>

        <Field name="email" label="Email *" error={errors.email}>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="field-control"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field name="phone" label="Phone *" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="field-control"
            placeholder="+91 ..."
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>

        <Field name="service" label="Service *" error={errors.service}>
          <select
            id="service"
            value={form.service}
            onChange={(e) => updateField("service", e.target.value)}
            className="field-control cursor-pointer appearance-none"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>

        <Field name="eventDate" label="Event Date">
          <input
            id="eventDate"
            type="date"
            value={form.eventDate}
            onChange={(e) => updateField("eventDate", e.target.value)}
            className="field-control"
          />
        </Field>

        <Field name="location" label="Location">
          <input
            id="location"
            type="text"
            value={form.location}
            onChange={(e) => updateField("location", e.target.value)}
            className="field-control"
            placeholder="City or venue"
          />
        </Field>

        <div className="md:col-span-2">
          <Field name="budget" label="Budget">
            <div className="flex flex-wrap gap-2.5">
              {budgets.map((budget) => {
                const active = form.budget === budget;
                return (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => updateField("budget", budget)}
                    className={`cursor-pointer border px-4 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                      active
                        ? "border-terracotta bg-terracotta text-cream"
                        : "border-espresso/20 text-espresso/60 hover:border-espresso/60 hover:text-espresso"
                    }`}
                    aria-pressed={active}
                  >
                    {budget}
                  </button>
                );
              })}
            </div>
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field name="message" label="Message *" error={errors.message}>
            <textarea
              id="message"
              rows="4"
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className="field-control resize-none"
              placeholder="Tell us a little about what you're planning — your story, your date, your ideas."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
          </Field>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className={`max-w-sm font-body text-xs font-light leading-relaxed ${dark ? "text-cream/50" : "text-espresso/50"}`}>
          We reply to every inquiry {site.responseTime}. No spam, no newsletters you didn't ask for.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-terracotta px-10 py-4 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" strokeWidth={1.5} />
              Sending
            </>
          ) : (
            <>
              Send Inquiry
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

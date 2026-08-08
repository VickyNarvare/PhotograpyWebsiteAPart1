import { createContext, useCallback, useContext, useMemo, useState } from "react";

const BookingContext = createContext(null);

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  eventDate: "",
  location: "",
  budget: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function BookingProvider({ children }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const updateField = useCallback((name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => (e[name] ? { ...e, [name]: undefined } : e));
  }, []);

  const validate = useCallback(() => {
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Please tell us your name.";
    if (!form.email.trim()) {
      nextErrors.email = "We need an email to reply to.";
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = "That email doesn't look right.";
    }
    if (!form.phone.trim()) {
      nextErrors.phone = "A phone number helps us reach you quickly.";
    } else if (!/^[+\d][\d\s-]{8,}$/.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (!form.service) nextErrors.service = "Please choose a service.";
    if (!form.message.trim()) nextErrors.message = "Tell us a little about your plans.";
    return nextErrors;
  }, [form]);

  const submit = useCallback(async () => {
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return false;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setStatus("success");
    return true;
  }, [validate]);

  const reset = useCallback(() => {
    setForm(initialForm);
    setErrors({});
    setStatus("idle");
  }, []);

  const value = useMemo(
    () => ({ form, errors, status, updateField, submit, reset }),
    [form, errors, status, updateField, submit, reset]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

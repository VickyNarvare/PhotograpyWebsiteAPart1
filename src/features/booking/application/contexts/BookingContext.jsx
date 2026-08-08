import { createContext, useCallback, useMemo, useState } from "react";
import { createInitialForm } from "../../domain/entities/booking";
import { validateBooking, submitBooking } from "../useCases/submitBooking";

export const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [form, setForm] = useState(createInitialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const updateField = useCallback((name, value) => {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => (current[name] ? { ...current, [name]: undefined } : current));
  }, []);

  const submit = useCallback(async () => {
    const nextErrors = validateBooking(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return false;
    setStatus("submitting");
    await submitBooking(form);
    setStatus("success");
    return true;
  }, [form]);

  const reset = useCallback(() => {
    setForm(createInitialForm());
    setErrors({});
    setStatus("idle");
  }, []);

  const value = useMemo(
    () => ({ form, errors, status, updateField, submit, reset }),
    [form, errors, status, updateField, submit, reset]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/shared/Button";
import { CONTACT_API_URL } from "@/lib/constants";
import {
  contactSchema,
  enquiryTypes,
  type ContactFormValues,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type SubmissionState =
  | { status: "idle" }
  | { status: "success"; simulated: boolean }
  | { status: "error" };

const inputClasses =
  "min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-500 hover:border-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-slate-100";

async function submitContactRequest(values: ContactFormValues) {
  if (!CONTACT_API_URL) {
    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 850);
    });

    return { simulated: true };
  }

  const response = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error("The configured contact endpoint returned an error.");
  }

  return { simulated: false };
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm font-semibold text-rose-700">
      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmission({ status: "idle" });

    try {
      const result = await submitContactRequest(values);
      setSubmission({ status: "success", simulated: result.simulated });
      reset();
    } catch {
      setSubmission({ status: "error" });
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:p-8 lg:p-10">
      <div className="max-w-xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-indigo-600">
          Send an enquiry
        </p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-3xl">
          Tell us what you’re working on
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Share enough context for us to understand the opportunity. Required fields are marked
          with an asterisk.
        </p>
      </div>

      <form
        className="mt-8 space-y-6"
        noValidate
        onSubmit={handleSubmit(onSubmit, () => setSubmission({ status: "idle" }))}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="text-sm font-extrabold text-slate-800">
              Full Name <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={cn(inputClasses, "mt-2", errors.fullName && "border-rose-400")}
              {...register("fullName")}
            />
            <FieldError id="fullName-error" message={errors.fullName?.message} />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-extrabold text-slate-800">
              Email Address <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@company.com"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn(inputClasses, "mt-2", errors.email && "border-rose-400")}
              {...register("email")}
            />
            <FieldError id="email-error" message={errors.email?.message} />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-extrabold text-slate-800">
              Phone Number <span className="font-medium text-slate-500">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="Your phone number"
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={cn(inputClasses, "mt-2", errors.phone && "border-rose-400")}
              {...register("phone")}
            />
            <FieldError id="phone-error" message={errors.phone?.message} />
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-extrabold text-slate-800">
              Company Name <span className="font-medium text-slate-500">(optional)</span>
            </label>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              placeholder="Company or organization"
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "company-error" : undefined}
              className={cn(inputClasses, "mt-2", errors.company && "border-rose-400")}
              {...register("company")}
            />
            <FieldError id="company-error" message={errors.company?.message} />
          </div>
        </div>

        <div>
          <label htmlFor="enquiryType" className="text-sm font-extrabold text-slate-800">
            Enquiry Type <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <select
            id="enquiryType"
            defaultValue=""
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={Boolean(errors.enquiryType)}
            aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
            className={cn(inputClasses, "mt-2", errors.enquiryType && "border-rose-400")}
            {...register("enquiryType")}
          >
            <option value="" disabled>
              Select an enquiry type
            </option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError id="enquiryType-error" message={errors.enquiryType?.message} />
        </div>

        <div>
          <div className="flex items-end justify-between gap-3">
            <label htmlFor="message" className="text-sm font-extrabold text-slate-800">
              Message <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <span className="text-xs font-semibold text-slate-500">Minimum 20 characters</span>
          </div>
          <textarea
            id="message"
            rows={6}
            placeholder="Tell us about the problem, idea, or opportunity…"
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error message-help" : "message-help"}
            className={cn(
              inputClasses,
              "mt-2 min-h-36 resize-y",
              errors.message && "border-rose-400",
            )}
            {...register("message")}
          />
          <span id="message-help" className="sr-only">
            Please enter at least 20 characters.
          </span>
          <FieldError id="message-error" message={errors.message?.message} />
        </div>

        {submission.status === "success" ? (
          <div
            className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-700" aria-hidden="true" />
            <p>
              <strong className="font-extrabold">
                {submission.simulated ? "Demo submission complete." : "Your enquiry was received."}
              </strong>{" "}
              {submission.simulated
                ? "Your details passed validation, but nothing was sent or stored because contact delivery is not configured yet."
                : "Thank you. The configured contact service accepted your message."}
            </p>
          </div>
        ) : null}

        {submission.status === "error" ? (
          <div
            className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm leading-6 text-rose-900"
            role="alert"
          >
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-rose-700" aria-hidden="true" />
            <p>
              <strong className="font-extrabold">We could not complete the submission.</strong>{" "}
              Please try again or email Nexora directly.
            </p>
          </div>
        ) : null}

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs font-medium leading-5 text-slate-500">
            {CONTACT_API_URL
              ? "Submission is routed to the configured contact API endpoint."
              : "Static demo mode: the form validates locally and does not send or store personal information."}
          </p>
          <Button type="submit" disabled={isSubmitting} className="w-full shrink-0 sm:w-auto">
            {isSubmitting ? (
              <>
                <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                Submitting…
              </>
            ) : (
              <>
                Submit Enquiry
                <Send className="size-4" aria-hidden="true" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

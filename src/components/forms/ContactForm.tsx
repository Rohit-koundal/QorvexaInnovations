"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, LoaderCircle, LockKeyhole, Send } from "lucide-react";
import { useForm } from "react-hook-form";

import { CONTACT_API_URL } from "@/lib/constants";
import {
  budgetRanges,
  contactSchema,
  projectTimelines,
  projectTypes,
  type ContactFormValues,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type SubmissionState = "idle" | "success" | "error";

const fieldClass =
  "mt-2 min-h-12 w-full rounded-[.7rem] border border-[#ded8cf] bg-white px-4 py-3 text-sm text-[#071522] outline-none transition placeholder:text-[#8a9096] hover:border-[#cdb58e] focus:border-[#b77b2c] focus:ring-4 focus:ring-[#b77b2c]/10 disabled:cursor-wait disabled:bg-[#f7f4ef]";

async function sendContact(values: ContactFormValues) {
  if (!CONTACT_API_URL) {
    await new Promise<void>((resolve) => window.setTimeout(resolve, 800));
    return;
  }

  const response = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!response.ok) throw new Error("Contact delivery failed");
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  return message ? <p id={id} className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-rose-700"><AlertCircle className="size-3.5" aria-hidden="true" />{message}</p> : null;
}

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>("idle");
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
      consent: false,
      website: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    try {
      await sendContact(values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="surface-card p-5 sm:p-7 lg:p-8">
      <div className="flex items-center gap-3">
        <span className="icon-tile"><Send className="size-5" aria-hidden="true" /></span>
        <div><p className="eyebrow before:hidden">Send us a message</p><h2 className="serif mt-1 text-3xl">Tell us what you&apos;re building</h2></div>
      </div>

      <form className="mt-7 grid gap-5 sm:grid-cols-2" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullName" className="text-xs font-extrabold text-[#293440]">Full Name *</label>
          <input id="fullName" autoComplete="name" placeholder="Your full name" disabled={isSubmitting} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} className={cn(fieldClass, errors.fullName && "border-rose-400")} {...register("fullName")} />
          <ErrorText id="fullName-error" message={errors.fullName?.message} />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-extrabold text-[#293440]">Email Address *</label>
          <input id="email" type="email" inputMode="email" autoComplete="email" placeholder="you@company.com" disabled={isSubmitting} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={cn(fieldClass, errors.email && "border-rose-400")} {...register("email")} />
          <ErrorText id="email-error" message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs font-extrabold text-[#293440]">Phone Number</label>
          <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Optional" disabled={isSubmitting} className={fieldClass} {...register("phone")} />
          <ErrorText id="phone-error" message={errors.phone?.message} />
        </div>
        <div>
          <label htmlFor="company" className="text-xs font-extrabold text-[#293440]">Company Name</label>
          <input id="company" autoComplete="organization" placeholder="Optional" disabled={isSubmitting} className={fieldClass} {...register("company")} />
          <ErrorText id="company-error" message={errors.company?.message} />
        </div>
        <div>
          <label htmlFor="projectType" className="text-xs font-extrabold text-[#293440]">Project Type *</label>
          <select id="projectType" defaultValue="" disabled={isSubmitting} aria-invalid={Boolean(errors.projectType)} className={fieldClass} {...register("projectType")}>
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <ErrorText id="projectType-error" message={errors.projectType?.message} />
        </div>
        <div>
          <label htmlFor="budget" className="text-xs font-extrabold text-[#293440]">Budget Range *</label>
          <select id="budget" defaultValue="" disabled={isSubmitting} aria-invalid={Boolean(errors.budget)} className={fieldClass} {...register("budget")}>
            <option value="" disabled>Select a budget range</option>
            {budgetRanges.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <ErrorText id="budget-error" message={errors.budget?.message} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="timeline" className="text-xs font-extrabold text-[#293440]">Preferred Timeline *</label>
          <select id="timeline" defaultValue="" disabled={isSubmitting} aria-invalid={Boolean(errors.timeline)} className={fieldClass} {...register("timeline")}>
            <option value="" disabled>Select a timeline</option>
            {projectTimelines.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <ErrorText id="timeline-error" message={errors.timeline?.message} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-xs font-extrabold text-[#293440]">Message *</label>
          <textarea id="message" rows={5} placeholder="Share the problem, idea, or outcome you want to create…" disabled={isSubmitting} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className={cn(fieldClass, "min-h-36 resize-y", errors.message && "border-rose-400")} {...register("message")} />
          <ErrorText id="message-error" message={errors.message?.message} />
        </div>

        <div className="absolute -left-[10000px] top-auto size-px overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-xs font-semibold leading-5 text-[#59636c]">
            <input type="checkbox" className="mt-0.5 size-4 shrink-0 accent-[#b77b2c]" disabled={isSubmitting} {...register("consent")} />
            I agree that Qorvexa Innovations may use these details to respond to this enquiry. *
          </label>
          <ErrorText id="consent-error" message={errors.consent?.message} />
        </div>

        {status === "success" ? (
          <div role="status" className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p><strong>Enquiry validated successfully.</strong> {CONTACT_API_URL ? "Your configured contact service accepted it." : "Delivery is in demo mode until NEXT_PUBLIC_CONTACT_API_URL is configured."}</p>
          </div>
        ) : null}
        {status === "error" ? (
          <div role="alert" className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm leading-6 text-rose-900">
            <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" /><p>We couldn&apos;t send the enquiry. Please email hello@qorvexainnovations.com.</p>
          </div>
        ) : null}

        <div className="sm:col-span-2 flex flex-col gap-4 border-t border-[#e7e1d9] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-[.68rem] font-semibold text-[#7c8389]"><LockKeyhole className="size-3.5" aria-hidden="true" /> Protected by validation and a spam-trap field.</p>
          <button type="submit" disabled={isSubmitting} className="primary-button w-full sm:w-auto">
            {isSubmitting ? <><LoaderCircle className="size-4 animate-spin" aria-hidden="true" />Sending…</> : <>Send Inquiry <Send className="size-4" aria-hidden="true" /></>}
          </button>
        </div>
      </form>
    </div>
  );
}

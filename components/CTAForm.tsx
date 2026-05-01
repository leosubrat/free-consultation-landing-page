"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, LockKeyhole, Send } from "lucide-react";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  url: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  url: "",
  message: ""
};

function validate(values: FormValues) {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.fullName.trim()) {
    errors.fullName = "Full Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Active Email is required.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.whatsapp.trim()) {
    errors.whatsapp = "WhatsApp Number is required.";
  }

  if (!values.businessName.trim()) {
    errors.businessName = "Business Name is required.";
  }

  return errors;
}

export default function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      router.push("/thank-you");
    }, 650);
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow mb-3">Free consultation includes</p>
          <p className="mb-5 max-w-md text-[clamp(1.35rem,2vw,1.75rem)] font-bold leading-[1.18] text-ink">
            What You&apos;ll Get From This Consultation
          </p>
          <ul className="space-y-3 text-[0.98rem] font-normal leading-7 text-ink/75">
            {[
              ["Free digital marketing audit", ""],
              ["Personalized step-by-step growth plan", ""],
              ["Clear fixes", "for leads, sales, and conversions"],
              ["Actionable insights", "you can implement immediately"]
            ].map((item) => (
              <li
                key={item.join(" ")}
                className="flex items-start gap-3 rounded-[8px] border border-slate-200 bg-slate-50/70 px-4 py-3 shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-violet-brand" />
                <span>
                  <span className="font-semibold text-ink/80">{item[0]}</span>
                  {item[1] ? ` ${item[1]}` : ""}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-md text-sm font-normal leading-6 text-muted">
            I&apos;ll review your details and share clear next steps.
          </p>
        </div>

        <form
          id="consultation-form"
          onSubmit={handleSubmit}
          noValidate
          className="scroll-mt-20 rounded-[8px] border border-slate-200 bg-slate-50 p-5 shadow-soft sm:p-7"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-black text-ink">Book Your Free Consultation</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Fill out the form and I&apos;ll review your current marketing before
              the consultation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="fullName"
              label="Full Name"
              placeholder="Your full name"
              value={values.fullName}
              error={errors.fullName}
              required
              onChange={(value) => updateValue("fullName", value)}
            />
            <Field
              id="email"
              label="Active Email"
              placeholder="you@company.com"
              value={values.email}
              error={errors.email}
              required
              type="email"
              onChange={(value) => updateValue("email", value)}
            />
            <Field
              id="whatsapp"
              label="WhatsApp Number"
              placeholder="+977 98XXXXXXXX"
              value={values.whatsapp}
              error={errors.whatsapp}
              required
              onChange={(value) => updateValue("whatsapp", value)}
            />
            <Field
              id="businessName"
              label="Business Name"
              placeholder="Your business name"
              value={values.businessName}
              error={errors.businessName}
              required
              onChange={(value) => updateValue("businessName", value)}
            />
          </div>

          <div className="mt-4">
            <Field
              id="url"
              label="Website / Facebook URL"
              placeholder="https://yourwebsite.com or Facebook page"
              value={values.url}
              error={errors.url}
              onChange={(value) => updateValue("url", value)}
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-bold text-ink"
            >
              Anything you want to say
            </label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={(event) => updateValue("message", event.target.value)}
              placeholder="Tell me what you need help with..."
              className="focus-ring w-full resize-none rounded-[8px] border border-slate-200 bg-white px-4 py-3 text-base text-ink shadow-sm transition placeholder:text-slate-400 focus:border-violet-brand"
            />
          </div>

          {hasErrors ? (
            <p className="mt-5 rounded-[8px] bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              Please fix the highlighted fields before submitting.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-[8px] bg-violet-brand px-7 text-base font-black text-white shadow-button transition hover:-translate-y-0.5 hover:bg-violet-deep disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send className="h-5 w-5" />
            {isSubmitting ? "Submitting..." : "Book Free Consultation"}
          </button>

          <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm font-semibold text-muted">
            <LockKeyhole className="h-4 w-4 text-violet-brand" />
            I respect your privacy. No spam.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  required = false,
  type = "text",
  onChange
}: {
  id: keyof FormValues;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  required?: boolean;
  type?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-ink">
        {label}
        {required ? <span className="text-violet-brand"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`focus-ring w-full rounded-[8px] border bg-white px-4 py-3 text-base text-ink shadow-sm transition placeholder:text-slate-400 focus:border-violet-brand ${
          error ? "border-red-400" : "border-slate-200"
        }`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

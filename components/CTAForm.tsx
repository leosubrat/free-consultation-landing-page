"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: ""
};

const requiredFields: Array<keyof FormValues> = [
  "fullName",
  "email",
  "whatsapp",
  "businessName",
  "website"
];

function validate(values: FormValues) {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  requiredFields.forEach((field) => {
    if (!values[field].trim()) {
      errors[field] = "This field is required.";
    }
  });

  if (values.email && !emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
}

export default function CTAForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      window.location.assign("/thanks");
    }, 500);
  };

  return (
    <section
      id="consultation-form"
      className="section-y scroll-mt-16 bg-white sm:scroll-mt-20 lg:scroll-mt-24"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Free consultation</p>
          <h2 className="section-heading">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Fill up the form below and we&apos;ll contact you with the next steps.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-10 max-w-3xl rounded-[20px] border border-slate-200 bg-slate-50/80 p-5 shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
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
              label="Email"
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

          <div className="mt-5">
            <Field
              id="website"
              label="Website or Facebook Page Link"
              placeholder="https://yourwebsite.com or Facebook page"
              value={values.website}
              error={errors.website}
              required
              onChange={(value) => updateValue("website", value)}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink">
              Message for Us
            </label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={(event) => updateValue("message", event.target.value)}
              placeholder="Tell me what you need help with..."
              className="focus-ring w-full resize-none rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-base leading-7 text-ink shadow-sm transition placeholder:text-slate-400 focus:border-violet-brand focus:shadow-[0_0_0_1px_rgba(101,40,247,0.18)]"
            />
          </div>

          {Object.keys(errors).length > 0 ? (
            <p className="mt-5 rounded-[12px] bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              Please complete the required fields before submitting.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="brand-button mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:min-h-16"
          >
            <Send className="h-5 w-5" />
            {isSubmitting ? "Submitting..." : "Submit & Book My Free Call"}
          </button>
          <p className="mt-3 text-center text-sm leading-6 text-muted">
            No spam. I&apos;ll only contact you regarding your consultation.
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
      <label htmlFor={id} className="mb-2 block text-sm font-bold leading-5 text-ink">
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
        className={`focus-ring min-h-12 w-full rounded-[12px] border bg-white px-4 py-3 text-base text-ink shadow-sm transition placeholder:text-slate-400 focus:border-violet-brand focus:shadow-[0_0_0_1px_rgba(101,40,247,0.18)] sm:min-h-14 ${
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

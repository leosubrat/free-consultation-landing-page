"use client";

import { useEffect } from "react";
import Script from "next/script";
import { Send } from "lucide-react";

const FLODESK_FORM_ID = "6a0db2f5ecee9ce3e8c6b6a8";
const FLODESK_ROOT_CLASS = "ff-6a0db2f5ecee9ce3e8c6b6a8";
const FLODESK_CONFIG =
  "eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IjxkaXYgZGF0YS1wYXJhZ3JhcGg9XCJ0cnVlXCI+R290IGl0ISBDaGVjayB5b3VyIGluYm94IGZvciBhbiBlbWFpbCB0byBjb25maXJtIHlvdXIgc3Vic2NyaXB0aW9uLjwvZGl2PiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6dHJ1ZSwic2hvd0ZvclJldHVyblZpc2l0b3JzIjp0cnVlLCJub3RpZmljYXRpb24iOnRydWUsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0=";

export default function CTAForm() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(`.${FLODESK_ROOT_CLASS}`);

    if (!root) {
      return;
    }

    let redirectTimer: number | undefined;

    const redirectAfterSuccess = () => {
      const hasSucceeded =
        root.dataset.ffStage === "success" ||
        root.classList.contains("fd-has-success") ||
        Boolean(root.querySelector(".fd-has-success"));

      if (!hasSucceeded || redirectTimer) {
        return;
      }

      redirectTimer = window.setTimeout(() => {
        window.location.assign("/thanks");
      }, 1800);
    };

    const observer = new MutationObserver(redirectAfterSuccess);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-ff-stage", "class"],
      childList: true,
      subtree: true
    });

    redirectAfterSuccess();

    return () => {
      observer.disconnect();
      if (redirectTimer) {
        window.clearTimeout(redirectTimer);
      }
    };
  }, []);

  return (
    <section
      id="consultation-form"
      className="section-y scroll-mt-16 bg-white sm:scroll-mt-20 lg:scroll-mt-24"
    >
      <link
        rel="preload"
        href="https://assets.flodesk.com/flodesk-sans.css"
        as="style"
      />
      <link rel="stylesheet" href="https://assets.flodesk.com/flodesk-sans.css" />

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

        <div
          className={`${FLODESK_ROOT_CLASS} mx-auto mt-10 max-w-3xl`}
          data-ff-el="root"
          data-ff-version="3"
          data-ff-type="inline"
          data-ff-name="inlineNoImage"
          data-ff-stage="default"
        >
          {/*tpl {% block config %} tpl*/}
          <div
            data-ff-el="config"
            data-ff-config={FLODESK_CONFIG}
            style={{ display: "none" }}
          />
          {/*tpl {% endblock %} tpl*/}

          <form
            action={`https://form.flodesk.com/forms/${FLODESK_FORM_ID}/submit`}
            method="post"
            data-ff-el="form"
            className="flodesk-approved-form rounded-[20px] border border-slate-200 bg-slate-50/80 p-5 shadow-soft sm:p-8"
          >
            <div data-ff-el="content">
              <div className="grid gap-5 sm:grid-cols-2" data-ff-el="fields">
                {/*tpl {% block fields %} tpl*/}
                <Field
                  id="ff-6a0db2f5ecee9ce3e8c6b6a8-firstName"
                  name="firstName"
                  label="Full Name"
                  placeholder="Your full name"
                  required
                  dataFfTab="firstName::email"
                />
                <Field
                  id="ff-6a0db2f5ecee9ce3e8c6b6a8-email"
                  name="email"
                  label="Email"
                  placeholder="you@company.com"
                  required
                  dataFfTab="email:firstName:fields.whatsappNumber"
                />
                <Field
                  id="ff-6a0db2f5ecee9ce3e8c6b6a8-EGqdNtd6pq"
                  name="fields.whatsappNumber"
                  label="WhatsApp Number"
                  placeholder="+977 98XXXXXXXX"
                  required
                  dataFfTab="fields.whatsappNumber:email:fields.businessName"
                />
                <Field
                  id="ff-6a0db2f5ecee9ce3e8c6b6a8-4vHtNOpMvF"
                  name="fields.businessName"
                  label="Business Name"
                  placeholder="Your business name"
                  required
                  dataFfTab="fields.businessName:fields.whatsappNumber:fields.websiteOrSmLink"
                />
              </div>

              <div className="mt-5">
                <Field
                  id="ff-6a0db2f5ecee9ce3e8c6b6a8-tzADUCQxYX"
                  name="fields.websiteOrSmLink"
                  label="Website or Facebook Page Link"
                  placeholder="https://yourwebsite.com or Facebook page"
                  required
                  dataFfTab="fields.websiteOrSmLink:fields.businessName:fields.message"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="ff-6a0db2f5ecee9ce3e8c6b6a8-zzWZytQ9Nr"
                  className="mb-2 block text-sm font-bold text-ink"
                >
                  Message for Us
                </label>
                <textarea
                  id="ff-6a0db2f5ecee9ce3e8c6b6a8-zzWZytQ9Nr"
                  rows={5}
                  name="fields.message"
                  maxLength={255}
                  data-ff-tab="fields.message:fields.websiteOrSmLink:submit"
                  placeholder="Tell me what you need help with..."
                  className="focus-ring w-full resize-none rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-base leading-7 text-ink shadow-sm transition placeholder:text-slate-400 focus:border-violet-brand focus:shadow-[0_0_0_1px_rgba(101,40,247,0.18)]"
                />
              </div>

              <input
                type="text"
                maxLength={255}
                name="confirm_email_address"
                style={{ display: "none" }}
              />
              {/*tpl {% endblock %} tpl*/}

              <div data-ff-el="footer">
                <button
                  type="submit"
                  data-ff-el="submit"
                  data-ff-tab="submit"
                  className="brand-button mt-7 w-full sm:min-h-16"
                >
                  <Send className="h-5 w-5" />
                  Submit &amp; Book My Free Call
                </button>
              </div>
            </div>

            <div className="hidden" data-ff-el="success">
              <div>
                <div>
                  <div data-paragraph="true">
                    Thank you.
                    <br />
                    <strong>Your free consultation request is confirmed.</strong>
                  </div>
                </div>
              </div>
            </div>
            <div data-ff-el="error" />

            <p className="mt-3 text-center text-sm leading-6 text-muted">
              No spam. I&apos;ll only contact you regarding your consultation.
            </p>
          </form>
        </div>

        <style jsx global>{`
          .flodesk-approved-form label {
            display: block;
            margin-bottom: 0.5rem;
            color: #111827;
            font-size: 0.875rem;
            font-weight: 700;
            line-height: 1.25rem;
          }

          .flodesk-approved-form input,
          .flodesk-approved-form textarea {
            width: 100%;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #ffffff;
            color: #111827;
            font-size: 1rem;
            box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
          }

          .flodesk-approved-form input {
            min-height: 3rem;
            padding: 0.75rem 1rem;
          }

          .flodesk-approved-form textarea {
            resize: none;
            padding: 0.75rem 1rem;
            line-height: 1.75rem;
          }

          .flodesk-approved-form input::placeholder,
          .flodesk-approved-form textarea::placeholder {
            color: #94a3b8;
            opacity: 1;
          }

          .flodesk-approved-form button:focus {
            outline: none;
          }

          @media (min-width: 640px) {
            .flodesk-approved-form input {
              min-height: 3.5rem;
            }
          }
        `}</style>

        <Script id="flodesk-universal" strategy="afterInteractive">
          {`
            (function(w, d, t, h, s, n) {
              w.FlodeskObject = n;
              var fn = function() {
                (w[n].q = w[n].q || []).push(arguments);
              };
              w[n] = w[n] || fn;
              var f = d.getElementsByTagName(t)[0];
              var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
              var sm = d.createElement(t);
              sm.async = true;
              sm.type = 'module';
              sm.src = h + s + '.mjs' + v;
              f.parentNode.insertBefore(sm, f);
              var sn = d.createElement(t);
              sn.async = true;
              sn.noModule = true;
              sn.src = h + s + '.js' + v;
              f.parentNode.insertBefore(sn, f);
            })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
          `}
        </Script>
        <Script id="flodesk-form-handle" strategy="afterInteractive">
          {`
            window.fd('form:handle', {
              formId: '6a0db2f5ecee9ce3e8c6b6a8',
              rootEl: '.ff-6a0db2f5ecee9ce3e8c6b6a8',
            });
          `}
        </Script>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  required = false,
  dataFfTab
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  dataFfTab: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold leading-5 text-ink">
        {label}
        {required ? <span className="text-violet-brand"> *</span> : null}
      </label>
      <input
        id={id}
        type="text"
        name={name}
        maxLength={255}
        required={required}
        data-ff-tab={dataFfTab}
        placeholder={placeholder}
        className="focus-ring min-h-12 w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-base text-ink shadow-sm transition placeholder:text-slate-400 focus:border-violet-brand focus:shadow-[0_0_0_1px_rgba(101,40,247,0.18)] sm:min-h-14"
      />
    </div>
  );
}

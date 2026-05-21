"use client";

import { useEffect } from "react";
import Script from "next/script";
import { Send } from "lucide-react";

const FLODESK_FORM_ID = "6a0db2f5ecee9ce3e8c6b6a8";
const FLODESK_ROOT_CLASS = "ff-6a0db2f5ecee9ce3e8c6b6a8";
const FLODESK_CONFIG =
  "eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IjxkaXYgZGF0YS1wYXJhZ3JhcGg9XCJ0cnVlXCI+R290IGl0ISBDaGVjayB5b3VyIGluYm94IGZvciBhbiBlbWFpbCB0byBjb25maXJtIHlvdXIgc3Vic2NyaXB0aW9uLjwvZGl2PiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjpmYWxzZSwiZ2RwciI6eyJhY2NlcHRzTWFya2V0aW5nIjpmYWxzZSwicHJpdmFjeVBvbGljeSI6eyJlbmFibGVkIjpmYWxzZSwibWFuZGF0b3J5IjpmYWxzZX19LCJ0cmFja2luZ0NvbmZpZyI6eyJtZXRhUGl4ZWxJZCI6IiIsImNvb2tpZUJhbm5lckVuYWJsZWQiOmZhbHNlLCJnb29nbGVBbmFseXRpY3NJZCI6IiJ9fQ==";

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
      }, 3500);
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

          <div className="ff-6a0db2f5ecee9ce3e8c6b6a8__container">
            <div className="ff-6a0db2f5ecee9ce3e8c6b6a8__wrapper">
              <form
                action={`https://form.flodesk.com/forms/${FLODESK_FORM_ID}/submit`}
                method="post"
                data-ff-el="form"
                className="ff-6a0db2f5ecee9ce3e8c6b6a8__form flodesk-approved-form rounded-[20px] border border-slate-200 bg-slate-50/80 p-5 shadow-soft sm:p-8"
              >
                <div className="ff-6a0db2f5ecee9ce3e8c6b6a8__title sr-only">
                  <div style={{ wordBreak: "break-word" }}>
                    <div data-paragraph="true">Free 1:1 Consultation Call</div>
                  </div>
                </div>
                <div className="ff-6a0db2f5ecee9ce3e8c6b6a8__subtitle sr-only">
                  <div style={{ wordBreak: "break-word" }}>
                    <div data-paragraph="true">
                      Grab a FREE 1:1 Digital Marketing consultation call with me!
                    </div>
                  </div>
                </div>
                <div
                  className="ff-6a0db2f5ecee9ce3e8c6b6a8__content fd-form-content"
                  data-ff-el="content"
                >
                  <div
                    className="ff-6a0db2f5ecee9ce3e8c6b6a8__fields grid gap-5 sm:grid-cols-2"
                    data-ff-el="fields"
                  >
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
                      placeholder="yourwebsite.com or Facebook page"
                      required
                      dataFfTab="fields.websiteOrSmLink:fields.businessName:fields.message"
                    />
                  </div>

                  <div className="ff-6a0db2f5ecee9ce3e8c6b6a8__field fd-form-group mt-5">
                    <label
                      htmlFor="ff-6a0db2f5ecee9ce3e8c6b6a8-zzWZytQ9Nr"
                      className="ff-6a0db2f5ecee9ce3e8c6b6a8__label fd-form-label mb-2 block text-sm font-bold text-ink"
                    >
                      Message for Us
                    </label>
                    <input
                      id="ff-6a0db2f5ecee9ce3e8c6b6a8-zzWZytQ9Nr"
                      type="text"
                      maxLength={255}
                      name="fields.message"
                      data-ff-tab="fields.message:fields.websiteOrSmLink:submit"
                      placeholder="Tell me what you need help with..."
                      className="ff-6a0db2f5ecee9ce3e8c6b6a8__control fd-form-control focus-ring min-h-[10.25rem] w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-base leading-7 text-ink shadow-sm transition placeholder:text-slate-400 focus:border-violet-brand focus:shadow-[0_0_0_1px_rgba(101,40,247,0.18)]"
                    />
                  </div>

                  <input
                    type="text"
                    maxLength={255}
                    name="confirm_email_address"
                    style={{ display: "none" }}
                  />
                  {/*tpl {% endblock %} tpl*/}

                  <div
                    className="ff-6a0db2f5ecee9ce3e8c6b6a8__footer"
                    data-ff-el="footer"
                  >
                    <button
                      type="submit"
                      data-ff-el="submit"
                      data-ff-tab="submit"
                      className="ff-6a0db2f5ecee9ce3e8c6b6a8__button fd-btn brand-button mt-7 w-full sm:min-h-16"
                    >
                      <div className="inline-flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" />
                        <span data-draw-element="editable">
                          Submit &amp; Book My Free Call
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                <div
                  className="ff-6a0db2f5ecee9ce3e8c6b6a8__success fd-form-success"
                  data-ff-el="success"
                >
                  <div className="ff-6a0db2f5ecee9ce3e8c6b6a8__success-message">
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
                </div>
                <div
                  className="ff-6a0db2f5ecee9ce3e8c6b6a8__error fd-form-error"
                  data-ff-el="error"
                />

                <p className="mt-3 text-center text-sm leading-6 text-muted">
                  No spam. I&apos;ll only contact you regarding your consultation.
                </p>
              </form>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .ff-6a0db2f5ecee9ce3e8c6b6a8__container {
            max-width: 100%;
            overflow: visible;
            background: transparent;
          }

          .ff-6a0db2f5ecee9ce3e8c6b6a8__wrapper {
            display: block;
          }

          .flodesk-approved-form {
            width: 100%;
            margin: 0;
            color: #111827;
            font-family: var(--font-inter), Inter, system-ui, sans-serif;
            text-align: left;
          }

          .flodesk-approved-form label {
            display: block;
            margin-bottom: 0.5rem;
            color: #111827;
            font-size: 0.875rem;
            font-weight: 700;
            line-height: 1.25rem;
            opacity: 1 !important;
            position: static;
            white-space: normal;
          }

          .flodesk-approved-form input {
            width: 100%;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #ffffff;
            color: #111827;
            font-size: 1rem;
            box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
            padding: 0.75rem 1rem;
          }

          .flodesk-approved-form input::placeholder {
            color: #94a3b8 !important;
            opacity: 1 !important;
          }

          .flodesk-approved-form .fd-form-feedback,
          .flodesk-approved-form .fd-form-error,
          .flodesk-approved-form .fd-form-group.fd-has-error .fd-form-feedback {
            display: block;
            margin-top: 0.5rem;
            color: #dc2626 !important;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.35;
          }

          .flodesk-approved-form .fd-form-group.fd-has-error input,
          .flodesk-approved-form input.fd-has-error,
          .flodesk-approved-form input[aria-invalid="true"] {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 1px rgba(239, 68, 68, 0.12),
              0 1px 2px rgba(15, 23, 42, 0.05) !important;
          }

          .flodesk-approved-form .fd-form-group.fd-has-error input:focus,
          .flodesk-approved-form input.fd-has-error:focus,
          .flodesk-approved-form input[aria-invalid="true"]:focus {
            border-color: #dc2626 !important;
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
          }

          .flodesk-approved-form button:focus {
            outline: none;
          }

          .ff-6a0db2f5ecee9ce3e8c6b6a8
            .flodesk-approved-form
            .fd-form-content {
            position: relative;
          }

          .ff-6a0db2f5ecee9ce3e8c6b6a8.fd-has-captcha
            .flodesk-approved-form
            .fd-form-content
            > *:not(.fd-form-captcha),
          .ff-6a0db2f5ecee9ce3e8c6b6a8
            .flodesk-approved-form.fd-has-captcha
            .fd-form-content
            > *:not(.fd-form-captcha),
          .ff-6a0db2f5ecee9ce3e8c6b6a8
            .flodesk-approved-form
            .fd-has-captcha
            .fd-form-content
            > *:not(.fd-form-captcha) {
            opacity: 1 !important;
            visibility: visible !important;
          }

          .ff-6a0db2f5ecee9ce3e8c6b6a8
            .flodesk-approved-form
            .fd-form-captcha {
            position: static !important;
            inset: auto !important;
            display: flex !important;
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            margin: 1rem auto 0 !important;
            padding: 0.875rem 1rem !important;
            align-items: center !important;
            justify-content: center !important;
            border: 1px solid #e2e8f0 !important;
            border-radius: 14px !important;
            background: #ffffff !important;
            box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05) !important;
            overflow: visible !important;
          }

          .ff-6a0db2f5ecee9ce3e8c6b6a8
            .flodesk-approved-form
            .fd-form-captcha
            > * {
            max-width: min(100%, 320px) !important;
          }

          .ff-6a0db2f5ecee9ce3e8c6b6a8
            .flodesk-approved-form
            .fd-form-captcha
            iframe {
            max-width: 100% !important;
          }

          .flodesk-approved-form .fd-form-success {
            display: none;
          }

          .ff-6a0db2f5ecee9ce3e8c6b6a8[data-ff-stage="success"]
            .flodesk-approved-form
            .fd-form-content {
            display: none;
          }

          .ff-6a0db2f5ecee9ce3e8c6b6a8[data-ff-stage="success"]
            .flodesk-approved-form
            .fd-form-success {
            display: block;
          }

          @media (min-width: 640px) {
            .flodesk-approved-form input {
              min-height: 3.5rem;
            }
          }

          @media (max-width: 640px) {
            .ff-6a0db2f5ecee9ce3e8c6b6a8
              .flodesk-approved-form
              .fd-form-captcha {
              margin-top: 0.875rem !important;
              padding: 0.75rem !important;
              border-radius: 12px !important;
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
              formId: '${FLODESK_FORM_ID}',
              rootEl: '.${FLODESK_ROOT_CLASS}',
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
    <div className="ff-6a0db2f5ecee9ce3e8c6b6a8__field fd-form-group">
      <label
        htmlFor={id}
        className="ff-6a0db2f5ecee9ce3e8c6b6a8__label fd-form-label mb-2 block text-sm font-bold leading-5 text-ink"
      >
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
        className="ff-6a0db2f5ecee9ce3e8c6b6a8__control fd-form-control focus-ring min-h-12 w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-base text-ink shadow-sm transition placeholder:text-slate-400 focus:border-violet-brand focus:shadow-[0_0_0_1px_rgba(101,40,247,0.18)] sm:min-h-14"
      />
    </div>
  );
}

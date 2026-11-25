"use client";

import { useActionState, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { sendMessage } from "../app/contact/actions";
import { SUBJECTS } from "../data/contact";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-space-800/60 px-4 py-3 text-star caret-cyan-glow outline-none transition placeholder:text-muted/50 focus:border-cyan-glow focus:shadow-[0_0_0_3px_rgba(46,196,241,0.15)] aria-invalid:border-nebula";

function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-star/90">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-nebula">
          {error}
        </p>
      )}
    </div>
  );
}

function Form({ onReset }) {
  const [state, formAction, isPending] = useActionState(sendMessage, { status: "idle" });
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  if (state.status === "success") {
    return (
      <div className="rounded-3xl border border-cyan-glow/30 bg-space-800/60 p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto text-cyan-glow" size={44} />
        <p className="mt-4 font-display text-lg tracking-widest">MESSAGE SENT</p>
        <p className="mt-2 text-muted">Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
        <button type="button" onClick={onReset} className="mt-6 text-sm text-cyan-glow hover:text-star">
          Send another message
        </button>
      </div>
    );
  }

  const describedBy = (field) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form action={formAction} noValidate className="space-y-6">
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field label="Your name" id="name" error={errors.name}>
        <input id="name" name="name" type="text" autoComplete="name" placeholder="Jane Doe"
          defaultValue={values.name} aria-invalid={!!errors.name} aria-describedby={describedBy("name")} className={inputClass} />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" id="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com"
            defaultValue={values.email} aria-invalid={!!errors.email} aria-describedby={describedBy("email")} className={inputClass} />
        </Field>
        <Field label="Phone (optional)" id="phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+212 6 00 00 00 00"
            defaultValue={values.phone} aria-invalid={!!errors.phone} aria-describedby={describedBy("phone")} className={inputClass} />
        </Field>
      </div>

      <Field label="Subject" id="subject" error={errors.subject}>
        <select id="subject" name="subject" defaultValue={values.subject ?? ""}
          aria-invalid={!!errors.subject} aria-describedby={describedBy("subject")} className={`${inputClass} appearance-none`}>
          <option value="" disabled>Choose a subject</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s} className="bg-space-900">{s}</option>
          ))}
        </select>
      </Field>

      <Field label="Message" id="message" error={errors.message}>
        <textarea id="message" name="message" rows={6} maxLength={5000}
          placeholder="Tell me about your project or opportunity..."
          defaultValue={values.message} aria-invalid={!!errors.message} aria-describedby={describedBy("message")}
          className={`${inputClass} resize-y`} />
      </Field>

      {state.message && (
        <p role="alert" className="rounded-xl border border-nebula/40 bg-nebula/10 px-4 py-3 text-sm text-nebula">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center gap-3 rounded-xl bg-violet-glow px-8 py-3.5 font-medium transition hover:shadow-[0_0_30px_var(--color-violet-glow)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Send message"}
        <Send size={16} />
      </button>
    </form>
  );
}

export default function ContactForm() {
  const [formKey, setFormKey] = useState(0);
  return <Form key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}
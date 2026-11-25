"use client";

import { useActionState, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { sendMessage } from "../app/contact/actions";
import { SUBJECTS } from "../data/contact";

const inputClass =
  "w-full border border-white/15 bg-space-950/60 px-4 py-3 text-star caret-cyan-glow outline-none transition placeholder:text-muted/50 focus:border-cyan-glow focus:shadow-[0_0_0_3px_rgba(46,196,241,0.15)] aria-invalid:border-nebula";

function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-xs tracking-[0.2em] text-muted">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 font-mono text-xs text-nebula">
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
      <div className="border border-cyan-glow/40 bg-space-950/60 p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto text-cyan-glow" size={40} />
        <p className="mt-4 font-display text-lg tracking-widest">TRANSMISSION_RECEIVED</p>
        <p className="mt-2 text-muted">Thanks for reaching out. I&apos;ll reply within 24h.</p>
        <button
          type="button"
          onClick={onReset}
          className="mt-6 font-mono text-xs tracking-[0.2em] text-cyan-glow hover:text-star"
        >
          SEND_ANOTHER
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-6">
      {/* honeypot: hidden from people, visible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field label="IDENTITY" id="name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          defaultValue={values.name}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
        />
      </Field>

      <Field label="COORDINATES (EMAIL)" id="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          defaultValue={values.email}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
        />
      </Field>

      <Field label="SIGNAL_TYPE" id="subject" error={errors.subject}>
        <select
          id="subject"
          name="subject"
          defaultValue={values.subject ?? ""}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            Choose a subject
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s} className="bg-space-900">
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="TRANSMISSION" id="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={5000}
          placeholder="Tell me about your project or opportunity..."
          defaultValue={values.message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} resize-y`}
        />
      </Field>

      {state.message && (
        <p role="alert" className="border border-nebula/40 bg-nebula/10 px-4 py-3 font-mono text-xs text-nebula">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-3 bg-violet-glow px-8 py-4 font-mono text-sm tracking-[0.2em] transition hover:shadow-[0_0_30px_var(--color-violet-glow)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "TRANSMITTING..." : "SEND_TRANSMISSION"}
        <Send size={16} />
      </button>
    </form>
  );
}

export default function ContactForm() {
  const [formKey, setFormKey] = useState(0);
  return <Form key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}
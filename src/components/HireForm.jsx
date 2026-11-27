"use client";

import { useActionState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { sendProjectBrief } from "../actions/hire";
import { PROJECT_TYPES, BUDGETS, TIMELINES } from "../data/hire";
import Field, { inputClass } from "./ui/Field";

function ChipGroup({ legend, name, options, error, defaultValue }) {
  return (
    <fieldset aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="text-sm font-medium text-star/90">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              defaultChecked={defaultValue === option}
              className="peer sr-only"
            />
            <span className="block rounded-full border border-white/10 bg-space-800/60 px-3.5 py-1.5 text-xs text-muted transition hover:border-cyan-glow/50 peer-checked:border-violet-glow peer-checked:bg-violet-glow peer-checked:text-star peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-glow">
              {option}
            </span>
          </label>
        ))}
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-nebula">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function HireForm({ onClose }) {
  const [state, formAction, isPending] = useActionState(sendProjectBrief, { status: "idle" });
  const errors = state.errors ?? {};
  const values = state.values ?? {};
  const describedBy = (field) => (errors[field] ? `${field}-error` : undefined);

  if (state.status === "success") {
    return (
      <div className="py-8 text-center" role="status">
        <CheckCircle2 className="mx-auto text-cyan-glow" size={44} />
        <p className="mt-4 font-display text-lg tracking-widest">BRIEF RECEIVED</p>
        <p className="mt-2 text-muted">Thanks! I&apos;ll review your project and reply within 24 hours.</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 rounded-xl border border-white/15 px-6 py-2.5 text-sm transition hover:border-cyan-glow hover:text-cyan-glow"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>Company<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" id="hire-name" error={errors.name}>
          <input id="hire-name" name="name" type="text" autoComplete="name" placeholder=""
            defaultValue={values.name} aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "hire-name-error" : undefined} className={inputClass} />
        </Field>
        <Field label="Email" id="hire-email" error={errors.email}>
          <input id="hire-email" name="email" type="email" autoComplete="email" placeholder=""
            defaultValue={values.email} aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "hire-email-error" : undefined} className={inputClass} />
        </Field>
      </div>

      <Field label="Project type" id="hire-type" error={errors.type}>
        <select id="hire-type" name="type" defaultValue={values.type ?? ""}
          aria-invalid={!!errors.type} aria-describedby={errors.type ? "hire-type-error" : undefined}
          className={`${inputClass} appearance-none`}>
          <option value="" disabled>Choose a project type</option>
          {PROJECT_TYPES.map((t) => <option key={t} value={t} className="bg-space-900">{t}</option>)}
        </select>
      </Field>

      <ChipGroup legend="Budget" name="budget" options={BUDGETS} error={errors.budget} defaultValue={values.budget} />
      <ChipGroup legend="Timeline" name="timeline" options={TIMELINES} error={errors.timeline} defaultValue={values.timeline} />

      <Field label="Project details" id="hire-details" error={errors.details}>
        <textarea id="hire-details" name="details" rows={4} maxLength={5000}
          placeholder="What do you want to build? Who is it for? Any links or examples?"
          defaultValue={values.details} aria-invalid={!!errors.details}
          aria-describedby={errors.details ? "hire-details-error" : undefined}
          className={`${inputClass} field-sizing-content min-h-24 max-h-60 resize-none`} />
      </Field>

      {state.message && (
        <p role="alert" className="rounded-xl border border-nebula/40 bg-nebula/10 px-4 py-3 text-sm text-nebula">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-violet-glow px-8 py-3 font-medium transition hover:shadow-[0_0_30px_var(--color-violet-glow)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Send project brief"}
        <Send size={16} />
      </button>
    </form>
  );
}
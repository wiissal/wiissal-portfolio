export const inputClass =
  "w-full rounded-xl border border-white/10 bg-space-800/60 px-4 py-2.5 text-star caret-cyan-glow outline-none transition placeholder:text-muted/50 focus:border-cyan-glow focus:shadow-[0_0_0_3px_rgba(46,196,241,0.15)] aria-invalid:border-nebula";

export default function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-star/90">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-nebula">
          {error}
        </p>
      )}
    </div>
  );
}
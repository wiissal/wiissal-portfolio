"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import HireForm from "./HireForm";
import SocialLinks from "./SocialLinks";

export default function HireModal({ open, onClose }) {
  const dialogRef = useRef(null);

  // sync React state with the native dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(); // click on the backdrop
      }}
      aria-labelledby="hire-title"
      className="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-3xl border border-white/10 bg-space-900 p-0 text-star shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition duration-300 backdrop:bg-space-950/70 backdrop:backdrop-blur-sm starting:translate-y-4 starting:opacity-0"
    >
<div className="max-h-[85svh] overflow-y-auto p-6 [scrollbar-color:rgba(123,63,228,0.6)_transparent] [scrollbar-width:thin] md:p-8">        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-glow">NEW_MISSION</p>
            <h2 id="hire-title" className="mt-2 font-display text-xl font-bold tracking-widest md:text-2xl">
              LET&apos;S WORK TOGETHER
            </h2>
            <p className="mt-2 text-sm text-muted">Tell me about your project. I reply within 24 hours.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-xl border border-white/10 p-2 text-muted transition hover:border-cyan-glow hover:text-star"
          >
            <X size={18} />
          </button>
        </div>

        {/* form: mounted only while open, so it resets every time */}
        <div className="mt-6">{open && <HireForm onClose={onClose} />}</div>

        {/* footer */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-muted">Prefer to reach out directly?</p>
          <SocialLinks className="mt-3" justify-center />
        </div>
      </div>
    </dialog>
  );
}
"use client";

import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  const inputRef = useRef(null);

  // press "/" anywhere on the page to focus the search
  useEffect(() => {
    function handleGlobalKey(e) {
      const el = document.activeElement;
      const isTyping = el?.tagName === "INPUT" || el?.tagName === "TEXTAREA" || el?.isContentEditable;
      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, []);

  // Esc: first clears the text, second press leaves the field
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      if (value) onChange("");
      else inputRef.current?.blur();
    }
  }

  function clear() {
    onChange("");
    inputRef.current?.focus();
  }

  return (
    <div className="group relative flex items-center border border-white/15 bg-space-950/70 backdrop-blur-sm transition focus-within:border-cyan-glow focus-within:shadow-[0_0_0_3px_rgba(46,196,241,0.15),0_0_30px_rgba(46,196,241,0.2)] md:w-96">
      <span aria-hidden="true" className="pl-4 font-mono text-sm text-cyan-glow">&gt;</span>

      <label htmlFor="project-search" className="sr-only">Search projects</label>
      <input
        ref={inputRef}
        id="project-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="search_missions"
        autoComplete="off"
        spellCheck={false}
        className="w-full bg-transparent py-3 pl-2 pr-20 font-mono text-sm text-star caret-cyan-glow outline-none placeholder:text-muted/50 [&::-webkit-search-cancel-button]:hidden"
      />

      <div className="absolute right-3 flex items-center gap-2">
        {value ? (
          <button type="button" onClick={clear} aria-label="Clear search" className="text-muted transition hover:text-star">
            <X size={16} />
          </button>
        ) : (
          <kbd className="hidden border border-white/20 px-1.5 py-0.5 font-mono text-[10px] text-muted md:inline">/</kbd>
        )}
        <Search size={16} aria-hidden="true" className="text-muted transition group-focus-within:text-cyan-glow" />
      </div>
    </div>
  );
}
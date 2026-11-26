"use client";

import { createContext, useContext, useState } from "react";
import HireModal from "./HireModal";

const HireContext = createContext(null);

export function HireProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <HireContext value={{ openHire: () => setOpen(true) }}>
      {children}
      <HireModal open={open} onClose={() => setOpen(false)} />
    </HireContext>
  );
}

export function useHire() {
  const context = useContext(HireContext);
  if (!context) throw new Error("useHire must be used inside <HireProvider>");
  return context;
}
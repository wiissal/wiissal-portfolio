"use server";

import { Resend } from "resend";
import { PROJECT_TYPES, BUDGETS, TIMELINES } from "../data/hire";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const errors = {};
  if (v.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email)) errors.email = "Please enter a valid email.";
  if (!PROJECT_TYPES.includes(v.type)) errors.type = "Please choose a project type.";
  if (!BUDGETS.includes(v.budget)) errors.budget = "Please choose a budget.";
  if (!TIMELINES.includes(v.timeline)) errors.timeline = "Please choose a timeline.";
  if (v.details.length < 20) errors.details = "Tell me a bit more (20 characters minimum).";
  if (v.details.length > 5000) errors.details = "Too long (5000 characters max).";
  return errors;
}

export async function sendProjectBrief(prevState, formData) {
  if (formData.get("company")) return { status: "success" }; // honeypot

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    type: String(formData.get("type") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    timeline: String(formData.get("timeline") ?? ""),
    details: String(formData.get("details") ?? "").trim(),
  };

  const errors = validate(values);
  if (Object.keys(errors).length > 0) return { status: "error", errors, values };

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: values.email,
      subject: `[Hire] ${values.type} · ${values.budget} from ${values.name}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Project type: ${values.type}`,
        `Budget: ${values.budget}`,
        `Timeline: ${values.timeline}`,
        "",
        values.details,
      ].join("\n"),
    });
    if (error) throw error;
    return { status: "success" };
  } catch (err) {
    console.error("Hire form error:", err);
    return { status: "error", message: "Sending failed. Please try again or use the contact page.", values };
  }
}
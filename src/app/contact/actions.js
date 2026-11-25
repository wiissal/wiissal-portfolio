"use server";

import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const SUBJECTS = ["Job opportunity", "Freelance project", "Collaboration", "Other"];

function validate({ name, email, subject, message }) {
  const errors = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";
  if (!SUBJECTS.includes(subject)) errors.subject = "Please choose a subject.";
  if (message.length < 10) errors.message = "Your message should be at least 10 characters.";
  if (message.length > 5000) errors.message = "Your message is too long (5000 characters max).";
  return errors;
}

export async function sendMessage(prevState, formData) {
  // honeypot: real people never fill this hidden field, bots do
  if (formData.get("company")) {
    return { status: "success" };
  }

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: values.email,
      subject: `[Portfolio] ${values.subject} from ${values.name}`,
      text: `Name: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\n\n${values.message}`,
    });

    if (error) throw error;
    return { status: "success" };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      status: "error",
      message: "Transmission failed. Please try again or email me directly.",
      values,
    };
  }
}
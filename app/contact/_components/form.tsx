"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full bg-white py-[60px] md:py-[80px]">
      <div className="max-w-[1200px] w-full mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left Column — Contact Info */}
          <div className="w-full md:w-[40%]">
            <h2 className="font-semibold text-navy text-[28px] md:text-[32px] leading-[1.2] mb-5">
              Get in Touch
            </h2>
            <p className="font-normal text-navy/70 text-[16px] leading-[1.7] mb-8">
              Send us a message and our team will respond within 1–2 business
              days.
            </p>

            <div className="space-y-4">
              <ContactDetail label="Email">
                <a
                  href="mailto:hello@propertykraft.africa"
                  className="font-normal text-navy/70 text-[16px] hover:text-pk-orange transition-colors"
                >
                  hello@propertykraft.africa
                </a>
              </ContactDetail>

              <ContactDetail label="Phone">
                <p className="font-normal text-navy/70 text-[16px]">
                  08036322847
                </p>
              </ContactDetail>

              <ContactDetail label="Location">
                <p className="font-normal text-navy/70 text-[16px]">
                  17 Ayinde Akinmade Street, Lekki Phase One, Lagos, Nigeria.
                </p>
              </ContactDetail>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="w-full md:w-[60%]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <FormField
                label="Full Name"
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
              <FormField
                label="Email Address"
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <FormField
                label="Company / Organization"
                id="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                optional
              />
              <FormField
                label="Subject"
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
              />

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-navy text-[14px] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-pk-border rounded-lg text-[16px] text-navy focus:outline-none focus:border-pk-orange transition-colors resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-pk-orange text-white rounded-lg font-medium text-[16px] hover:bg-pk-orange-hover transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-medium text-navy text-[14px] uppercase tracking-wider mb-1.5">
        {label}
      </p>
      {children}
    </div>
  );
}

function FormField({
  label,
  id,
  type,
  required,
  value,
  onChange,
  optional,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium text-navy text-[14px] mb-2">
        {label}
        {optional && <span className="text-navy/50"> (optional)</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-white border border-pk-border rounded-lg text-[16px] text-navy focus:outline-none focus:border-pk-orange transition-colors"
      />
    </div>
  );
}

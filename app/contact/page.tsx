'use client';

import { useState } from 'react';
import { FadeInWhenVisible } from '@/app/components/Animations';
import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  ArrowRight,
} from 'lucide-react';

const businessTypes = [
  'Clinic/Hospital',
  'Salon/Spa',
  'Gym/Fitness Studio',
  'Pet Clinic',
  'Dental Clinic',
  'Coaching Center',
  'Other',
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ───── HERO ───── */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInWhenVisible>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Let&rsquo;s Talk
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about Growmi? Want a custom demo for your business?
              We&rsquo;d love to hear from you.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ───── MAIN CONTENT ───── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT — Contact Form */}
            <FadeInWhenVisible>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-12 bg-emerald-50 rounded-2xl px-6 text-center">
                    <CheckCircle className="w-14 h-14 text-emerald-600" />
                    <h3 className="text-xl font-semibold text-slate-900">
                      Thank you!
                    </h3>
                    <p className="text-gray-600">
                      We&rsquo;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base text-slate-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base text-slate-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Phone{' '}
                        <span className="text-gray-400 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base text-slate-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                      />
                    </div>

                    {/* Business Type */}
                    <div>
                      <label
                        htmlFor="businessType"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base text-slate-900 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition appearance-none"
                      >
                        <option value="">Select your business type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your business and how we can help..."
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base text-slate-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeInWhenVisible>

            {/* RIGHT — Contact Info */}
            <FadeInWhenVisible delay={0.15}>
              <div className="flex flex-col gap-5">
                {/* Email Card */}
                <a
                  href="mailto:hello@getgrowmi.com"
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition group"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Email Us
                    </h3>
                    <p className="text-gray-600 group-hover:text-emerald-600 transition-colors">
                      hello@getgrowmi.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition group"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Chat on WhatsApp
                    </h3>
                    <p className="text-gray-600 group-hover:text-emerald-600 transition-colors">
                      Get instant answers
                    </p>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Visit Us
                    </h3>
                    <p className="text-gray-600">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="mt-4 flex items-start gap-3 p-5 rounded-2xl border border-emerald-100 bg-emerald-50/50">
                  <Clock className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We typically respond within{' '}
                    <span className="font-semibold text-slate-900">
                      2-4 hours
                    </span>{' '}
                    during business hours (10 AM – 7 PM IST, Mon–Sat)
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* ───── MAP / LOCATION ───── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12">
              Find Us in Ahmedabad
            </h2>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-gray-100 to-emerald-50 h-80 flex flex-col items-center justify-center gap-4">
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #059669 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-semibold text-slate-900">
                  Ahmedabad, Gujarat, India
                </p>
                <a
                  href="https://maps.google.com/?q=Ahmedabad,Gujarat,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                >
                  Open in Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ───── BOTTOM CTA ───── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="bg-emerald-600 rounded-2xl py-16 px-6 sm:px-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Prefer a quick call?
              </h2>
              <p className="mt-4 text-lg text-emerald-100 max-w-xl mx-auto">
                Schedule a 15-minute demo and see Growmi in action for your
                business.
              </p>
              <a
                href="https://wa.me/919876543210?text=I'd%20like%20to%20schedule%20a%20demo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-white text-emerald-600 font-semibold px-8 py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Schedule Demo
              </a>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </main>
  );
}

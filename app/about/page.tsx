'use client';

import Link from 'next/link';
import {
  FadeInWhenVisible,
  StaggerContainer,
  StaggerItem,
  FloatingAnimation,
} from '@/app/components/Animations';
import {
  Sparkles,
  Shield,
  Lightbulb,
  Heart,
  User,
  MapPin,
  ArrowRight,
  Quote,
} from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: 'Simplicity',
    description:
      "Technology should be invisible. If it's hard to use, we haven't done our job. Growmi works on WhatsApp because that's where your customers already are.",
  },
  {
    icon: Shield,
    title: 'Trust',
    description:
      "Your data is sacred. We never sell it, never share it, and always protect it. Privacy isn't a feature — it's a promise.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      "We're obsessed with making AI smarter, faster, and more human. Every conversation teaches us something new.",
  },
  {
    icon: Heart,
    title: 'Customer-First',
    description:
      'Your success is our success. We measure our growth by how much we help your business grow.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Our Mission: Making AI-Powered Customer Management Accessible
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Growmi is built to help every business in India — from a
                neighbourhood clinic to a multi-city chain — leverage the power
                of AI to delight their customers and grow without limits.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-12 rounded-full bg-emerald-600" />
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  How it started
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10">
                Our Story
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in{' '}
                  <span className="font-semibold text-slate-900">
                    Ahmedabad, Gujarat
                  </span>{' '}
                  — in the heart of India&apos;s entrepreneurial spirit. Growmi
                  was born from watching small business owners struggle with
                  missed calls, forgotten follow-ups, and customers lost to
                  competitors with bigger teams.
                </p>
                <p>
                  We saw clinic receptionists overwhelmed with calls, salon
                  owners losing bookings at night, gym trainers juggling
                  WhatsApp messages between sessions. Every missed message meant
                  lost revenue and a frustrated customer.
                </p>
                <p>
                  So we built{' '}
                  <span className="font-semibold text-emerald-600">Growmi</span>{' '}
                  — an AI assistant that never misses a message, never forgets a
                  follow-up, and never takes a day off. Today we&apos;re proud
                  to serve hundreds of businesses across India, helping them turn
                  every conversation into a lasting relationship.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto text-center">
              <FloatingAnimation>
                <Quote className="w-10 h-10 text-emerald-600/30 mx-auto mb-6" />
              </FloatingAnimation>

              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-emerald-50/60" />
                <blockquote className="relative py-10 px-6 md:px-12">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
                    Making AI-powered customer management accessible to{' '}
                    <span className="text-emerald-600">
                      every business in India
                    </span>
                  </p>
                </blockquote>
              </div>

              <div className="mt-10 space-y-4 text-lg text-gray-600 max-w-2xl mx-auto">
                <p>
                  We believe powerful technology shouldn&apos;t be reserved for
                  companies with deep pockets and dedicated IT teams.
                </p>
                <p>
                  By putting AI on WhatsApp — the platform India already loves —
                  we&apos;re democratizing smart customer management for
                  businesses of every size.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                What We Stand For
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide every feature we build, every message we
                send, and every decision we make.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                The People Behind Growmi
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                A small, passionate team on a big mission.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="max-w-sm mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm">
                <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Suyash</h3>
                <p className="text-emerald-600 font-medium mt-1">
                  Founder &amp; CEO
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Building the future of business communication, one WhatsApp
                  message at a time.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-lg font-semibold text-slate-900">
                We&apos;re hiring! 🚀
              </p>
              <p className="mt-2 text-gray-600">
                Love AI, WhatsApp, and building products that matter? We&apos;d
                love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-4 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center text-white">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-6 h-6" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Built in Ahmedabad 🇮🇳 Serving the World
                </h2>
              </div>
              <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
                Proud Indian roots with global ambitions. We&apos;re building
                from one of India&apos;s most vibrant startup cities — and
                taking our mission everywhere.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Join the Growmi Journey
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you&apos;re a small clinic or a growing chain,
                we&apos;re here to help you deliver an unforgettable customer
                experience.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 font-semibold px-8 py-3.5 rounded-xl hover:bg-emerald-50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}

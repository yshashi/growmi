'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Brain,
  Bell,
  Star,
  CheckCircle2,
  ArrowRight,
  Play,
  ChevronDown,
  BarChart3,
  MessageSquare,
  Users,
  TrendingUp,
  Sparkles,
  Shield,
  Zap,
  Globe,
} from 'lucide-react';
import {
  FadeInWhenVisible,
  StaggerContainer,
  StaggerItem,
  CountUp,
  FloatingAnimation,
} from '@/app/components/Animations';
import WhatsAppMockup from '@/app/components/WhatsAppMockup';

/* ─── Hero Mockup Messages ─── */
const heroMessages = [
  { text: 'Kal Dr. Shah se appointment chahiye', sender: 'customer' as const, time: '10:30 AM' },
  { text: 'Dr. Shah kal 9 AM se 1 PM tak available hain. Aapko kaun sa time suit karega? 😊', sender: 'ai' as const, time: '10:30 AM' },
  { text: '11 baje', sender: 'customer' as const, time: '10:31 AM' },
  { text: 'Aapka naam please?', sender: 'ai' as const, time: '10:31 AM' },
  { text: 'Rahul Patel', sender: 'customer' as const, time: '10:32 AM' },
  { text: 'Done! ✅ Dr. Shah, Kal 11:00 AM | Rahul Patel | ID: GRM-4521. See you tomorrow! 🙏', sender: 'ai' as const, time: '10:32 AM' },
];

/* ─── Use Case Data ─── */
const industries = [
  {
    id: 'clinics',
    label: 'Clinics & Hospitals',
    features: [
      'Auto-book appointments with available doctors',
      'Send prescription reminders & follow-up alerts',
      'Answer insurance & coverage queries instantly',
      'Collect post-visit feedback automatically',
      'Share lab reports & documents securely',
      'Handle emergency routing with smart triage',
    ],
    messages: [
      { text: 'Dr. Mehta available hai kya?', sender: 'customer' as const, time: '9:15 AM' },
      { text: 'Dr. Mehta aaj 2 PM se 6 PM available hain. Appointment book karein? 😊', sender: 'ai' as const, time: '9:15 AM' },
      { text: 'Haan, 3 PM', sender: 'customer' as const, time: '9:16 AM' },
      { text: 'Done! ✅ Dr. Mehta, Aaj 3:00 PM. Please 10 min pehle aayein. 🏥', sender: 'ai' as const, time: '9:16 AM' },
    ],
  },
  {
    id: 'salons',
    label: 'Salons & Spas',
    features: [
      'Book haircut, facial & spa appointments instantly',
      'Show available stylists & their specialities',
      'Send appointment reminders 1 hour before',
      'Offer package deals & membership info',
      'Collect Google reviews after each visit',
    ],
    messages: [
      { text: 'Hi, I want a haircut today', sender: 'customer' as const, time: '11:00 AM' },
      { text: 'Sure! We have slots at 12 PM, 2 PM & 4 PM. Which works for you? ✂️', sender: 'ai' as const, time: '11:00 AM' },
      { text: '2 PM please', sender: 'customer' as const, time: '11:01 AM' },
      { text: 'Booked! ✅ Haircut at 2:00 PM with Salon Luxe. See you! 💇', sender: 'ai' as const, time: '11:01 AM' },
    ],
  },
  {
    id: 'gyms',
    label: 'Gyms & Fitness',
    features: [
      'Handle membership inquiries & pricing',
      'Book personal training sessions',
      'Send workout reminders & motivation tips',
      'Manage class schedules & waitlists',
      'Process renewal reminders automatically',
    ],
    messages: [
      { text: 'What are your membership plans?', sender: 'customer' as const, time: '7:00 AM' },
      { text: 'We have 3 plans:\n• Monthly: ₹1,500\n• Quarterly: ₹3,999\n• Annual: ₹11,999\n\nAll include gym + cardio. Want a free trial? 💪', sender: 'ai' as const, time: '7:00 AM' },
      { text: 'Free trial sounds good!', sender: 'customer' as const, time: '7:01 AM' },
      { text: 'Done! ✅ Free trial tomorrow 6–8 AM. Bring your ID. See you! 🏋️', sender: 'ai' as const, time: '7:01 AM' },
    ],
  },
  {
    id: 'pet',
    label: 'Pet Clinics',
    features: [
      'Book vet appointments for pets',
      'Send vaccination & deworming reminders',
      'Answer queries about pet health & diet',
      'Handle emergency vet routing',
      'Share pet care tips & follow-ups',
    ],
    messages: [
      { text: 'My dog needs vaccination', sender: 'customer' as const, time: '10:00 AM' },
      { text: 'Sure! Which vaccine does your dog need?\n1. Anti-rabies\n2. DHPP Booster\n3. Not sure\n\nDr. Verma is available today 🐕', sender: 'ai' as const, time: '10:00 AM' },
      { text: 'Anti-rabies, 4 PM', sender: 'customer' as const, time: '10:01 AM' },
      { text: 'Booked! ✅ Anti-rabies vaccination at 4:00 PM with Dr. Verma. 🐾', sender: 'ai' as const, time: '10:01 AM' },
    ],
  },
  {
    id: 'dental',
    label: 'Dental Clinics',
    features: [
      'Book dental check-ups & procedures',
      'Send cleaning & check-up reminders every 6 months',
      'Answer common dental queries',
      'Handle insurance pre-authorization info',
      'Collect post-treatment feedback',
    ],
    messages: [
      { text: 'I need a dental cleaning', sender: 'customer' as const, time: '2:00 PM' },
      { text: 'Dr. Kapoor has slots tomorrow:\n• 10:00 AM\n• 11:30 AM\n• 3:00 PM\n\nWhich one? 🦷', sender: 'ai' as const, time: '2:00 PM' },
      { text: '10 AM', sender: 'customer' as const, time: '2:01 PM' },
      { text: 'Done! ✅ Dental cleaning, Tomorrow 10:00 AM, Dr. Kapoor. Please avoid eating 2 hrs before. 😊', sender: 'ai' as const, time: '2:01 PM' },
    ],
  },
  {
    id: 'coaching',
    label: 'Coaching Centers',
    features: [
      'Handle batch inquiries & enrollment',
      'Share class schedules & fee structure',
      'Send exam reminders & results',
      'Manage parent communication',
      'Collect feedback after each batch',
    ],
    messages: [
      { text: 'JEE batch ke liye admission open hai?', sender: 'customer' as const, time: '6:00 PM' },
      { text: 'Haan! JEE 2025 batch June 15 se shuru ho raha hai.\n\nFees: ₹45,000/year\nBatch: Mon-Sat, 4–7 PM\n\nDemo class attend karenge? 📚', sender: 'ai' as const, time: '6:00 PM' },
      { text: 'Haan, demo class book karo', sender: 'customer' as const, time: '6:01 PM' },
      { text: 'Done! ✅ Demo class: June 10, 4:00 PM. Apna notebook leke aayein! 🎓', sender: 'ai' as const, time: '6:01 PM' },
    ],
  },
];

/* ─── Language Section Mockup Data ─── */
const languageMockups = [
  {
    contactName: 'Growmi AI 🇮🇳',
    messages: [
      { text: 'कल डॉ. शाह से मिलना है', sender: 'customer' as const, time: '10:30 AM' },
      { text: 'डॉ. शाह कल सुबह 9 से दोपहर 1 बजे तक उपलब्ध हैं। कौन सा समय सही रहेगा? 😊', sender: 'ai' as const, time: '10:30 AM' },
      { text: '11 बजे', sender: 'customer' as const, time: '10:31 AM' },
      { text: 'हो गया! ✅ डॉ. शाह, कल 11:00 AM। कल मिलते हैं! 🙏', sender: 'ai' as const, time: '10:31 AM' },
    ],
  },
  {
    contactName: 'Growmi AI 🇮🇳',
    messages: [
      { text: 'ડૉ. શાહ સાથે એપોઇન્ટમેન્ટ જોઈએ છે', sender: 'customer' as const, time: '10:30 AM' },
      { text: 'ડૉ. શાહ કાલે સવારે 9 થી 1 વાગ્યા સુધી ઉપલબ્ધ છે. તમને કયો સમય અનુકૂળ છે? 😊', sender: 'ai' as const, time: '10:30 AM' },
      { text: '11 વાગ્યે', sender: 'customer' as const, time: '10:31 AM' },
      { text: 'થઈ ગયું! ✅ ડૉ. શાહ, કાલે 11:00 AM. કાલે મળીશું! 🙏', sender: 'ai' as const, time: '10:31 AM' },
    ],
  },
  {
    contactName: 'Growmi AI',
    messages: [
      { text: 'I need an appointment with Dr. Shah', sender: 'customer' as const, time: '10:30 AM' },
      { text: 'Dr. Shah is available tomorrow 9 AM to 1 PM. What time works for you? 😊', sender: 'ai' as const, time: '10:30 AM' },
      { text: '11 AM', sender: 'customer' as const, time: '10:31 AM' },
      { text: 'Done! ✅ Dr. Shah, Tomorrow 11:00 AM. See you then! 🙏', sender: 'ai' as const, time: '10:31 AM' },
    ],
  },
];

/* ─── Comparison Data ─── */
const comparisonFeatures = [
  { feature: 'True AI Conversations', growmi: true, wati: false, aisensy: false, manual: false },
  { feature: 'Hindi / Gujarati / Regional', growmi: true, wati: false, aisensy: false, manual: true },
  { feature: 'Auto Appointment Booking', growmi: true, wati: false, aisensy: false, manual: true },
  { feature: 'Setup Time', growmi: '10 min', wati: '2–3 days', aisensy: '1–2 days', manual: 'N/A' },
  { feature: '24/7 Availability', growmi: true, wati: true, aisensy: true, manual: false },
  { feature: 'Auto-Learns Your Business', growmi: true, wati: false, aisensy: false, manual: false },
  { feature: 'No-Code Setup', growmi: true, wati: false, aisensy: false, manual: true },
  { feature: '50+ Languages', growmi: true, wati: false, aisensy: false, manual: false },
  { feature: 'Starting Price', growmi: '₹999/mo', wati: '₹2,499/mo', aisensy: '₹1,999/mo', manual: '₹15,000/mo' },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote: 'Growmi handles 80% of our patient queries on WhatsApp. Our staff finally has time to focus on in-clinic patients.',
    name: 'Dr. Priya Sharma',
    business: 'Sharma Multi-Speciality Clinic',
    location: 'Ahmedabad',
  },
  {
    quote: 'We used to miss 20+ calls daily. Now every customer gets an instant reply, even at midnight. Revenue is up 35%.',
    name: 'Ravi Patel',
    business: 'Luxe Salon & Spa',
    location: 'Surat',
  },
  {
    quote: "The best part? Our Gujarati-speaking customers feel right at home. It's like talking to a real receptionist.",
    name: 'Meena Desai',
    business: 'PawCare Pet Clinic',
    location: 'Vadodara',
  },
  {
    quote: 'Setup took 10 minutes. Literally. We were live the same day. No IT team, no coding, nothing.',
    name: 'Arjun Mehta',
    business: 'FitZone Gym',
    location: 'Mumbai',
  },
];

/* ─── Pricing Data ─── */
const pricingPlans = [
  {
    name: 'Starter',
    monthlyPrice: 999,
    annualPrice: 833,
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 200 conversations/month',
      '1 WhatsApp number',
      'Smart appointment booking',
      'Basic reminders',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Growth',
    monthlyPrice: 2999,
    annualPrice: 2499,
    description: 'For growing businesses that need more power',
    features: [
      'Up to 1,000 conversations/month',
      '2 WhatsApp numbers',
      'AI appointment booking',
      'Smart reminders & follow-ups',
      'Review collection',
      'Dashboard analytics',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Pro',
    monthlyPrice: 7999,
    annualPrice: 6666,
    description: 'For established businesses scaling fast',
    features: [
      'Up to 5,000 conversations/month',
      '5 WhatsApp numbers',
      'Advanced AI with custom flows',
      'Multi-staff calendar sync',
      'API integrations',
      'Custom branding',
      'Dedicated account manager',
      'Phone + chat support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited conversations',
      'Unlimited WhatsApp numbers',
      'Custom AI training',
      'White-label solution',
      'SLA guarantees',
      'On-premise deployment option',
      'Dedicated engineering support',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

/* ─── FAQ Data ─── */
const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes! Every plan comes with a 14-day free trial. No credit card required. You can explore all features and cancel anytime.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Absolutely. You can upgrade or downgrade at any time. Changes take effect on your next billing cycle. No penalties.',
  },
  {
    q: 'What happens after my conversation limit?',
    a: "We'll notify you when you're at 80% usage. You can upgrade your plan or purchase additional conversations as add-ons.",
  },
  {
    q: 'Do I need a WhatsApp Business API account?',
    a: "No! Growmi handles everything. We'll set up your WhatsApp Business API during the onboarding process at no extra cost.",
  },
];

/* ─── Scrolling Strip ─── */
const businessTypes = 'Clinics • Salons • Hospitals • Gyms • Spas • Pet Clinics • Dental • Yoga Studios';

/* ═══════════════════════════════════════════
   HOME PAGE COMPONENT
   ═══════════════════════════════════════════ */
export default function Home() {
  const [activeTab, setActiveTab] = useState('clinics');
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  const activeIndustry = industries.find((i) => i.id === activeTab) ?? industries[0];

  return (
    <>
      {/* ────────────────────────── 1. HERO ────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white pt-28 pb-12 lg:pt-36 lg:pb-20">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-teal-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Copy */}
            <div>
              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                    <Sparkles className="h-4 w-4" /> AI-Powered WhatsApp Assistant
                  </span>
                </StaggerItem>

                <StaggerItem>
                  <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                    Your Business Deserves an AI Employee That{' '}
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                      Never Sleeps
                    </span>
                  </h1>
                </StaggerItem>

                <StaggerItem>
                  <p className="max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
                    Growmi handles appointment bookings, customer queries, reminders &amp; follow-ups on WhatsApp — 24/7, in 50+ languages. Your customers get instant replies. You get more revenue.
                  </p>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href="#pricing"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Start Free Trial <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:scale-[1.02] active:scale-[0.98]">
                      <Play className="h-4 w-4 fill-emerald-600 text-emerald-600" /> Watch Demo
                    </button>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex -space-x-2">
                      {[...'ABCDE'].map((l, i) => (
                        <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-teal-500 text-[11px] font-bold text-white shadow-sm">
                          {l}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold text-slate-700">Trusted by 50+ businesses</span> across India
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Right — Phone Mockup */}
            <FadeInWhenVisible delay={0.3}>
              <FloatingAnimation className="flex justify-center lg:justify-end">
                <WhatsAppMockup messages={heroMessages} contactName="Growmi AI ✨" />
              </FloatingAnimation>
            </FadeInWhenVisible>
          </div>
        </div>

        {/* Scrolling business-type strip */}
        <div className="relative mt-16 overflow-hidden border-y border-gray-100 bg-white/60 py-4 backdrop-blur-sm">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-8 text-base font-medium tracking-wide text-gray-400">
                {businessTypes}
              </span>
            ))}
          </div>
          <style>{`
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-marquee { animation: marquee 20s linear infinite; }
          `}</style>
        </div>
      </section>

      {/* ────────────────────────── 2. PROBLEM ────────────────────────── */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Your Staff Can&apos;t Be Available 24/7.{' '}
                <span className="text-emerald-400">Growmi Can.</span>
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Every missed message is a missed customer. Here&apos;s what&apos;s costing you money right now.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Missed Calls = Missed Revenue',
                desc: '67% of calls to clinics go unanswered after hours. Each missed call is a patient who books with your competitor instead.',
                stat: '67%',
                statLabel: 'calls unanswered',
              },
              {
                title: 'Repetitive Questions Eat Your Time',
                desc: "Your staff answers \"What are your timings?\" 50 times a day. That's 3+ hours wasted on the same questions, every single day.",
                stat: '50×',
                statLabel: 'same question daily',
              },
              {
                title: "Manual Follow-ups Don't Happen",
                desc: '80% of businesses forget to send appointment reminders. Result? No-shows, lost revenue, and frustrated customers.',
                stat: '80%',
                statLabel: 'forget reminders',
              },
            ].map((card, i) => (
              <StaggerItem key={i}>
                <div className="group relative rounded-2xl border border-red-500/20 bg-slate-800/60 p-8 backdrop-blur-sm transition-all hover:border-red-500/40 hover:bg-slate-800">
                  <div className="mb-4 text-4xl font-black text-red-400">{card.stat}</div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/80">{card.statLabel}</p>
                  <h3 className="mt-4 text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ────────────────────────── 3. SOLUTION / FEATURES ────────────────────────── */}
      <section id="features" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Core Features
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                Meet Growmi — Your AI Receptionist on WhatsApp
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything your business needs to never miss a customer again.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Calendar,
                title: 'Smart Appointment Booking',
                desc: 'Customers book appointments directly on WhatsApp. Auto-checks doctor/staff availability, sends confirmations instantly.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Brain,
                title: 'Intelligent Conversations',
                desc: 'Real AI that understands context, slang, and mixed languages. Not just keyword matching — actual intelligent replies.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Bell,
                title: 'Automatic Reminders',
                desc: 'Appointment reminders, follow-up messages, and re-engagement campaigns. All automated. Zero manual effort.',
                color: 'from-amber-500 to-orange-500',
              },
              {
                icon: Star,
                title: 'Review & Feedback Collection',
                desc: 'Automatically request Google reviews after visits. Collect feedback to improve. Boost your online reputation.',
                color: 'from-emerald-500 to-teal-500',
              },
            ].map((card, i) => (
              <StaggerItem key={i}>
                <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1">
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg`}>
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ────────────────────────── 4. HOW IT WORKS ────────────────────────── */}
      <section id="how-it-works" className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Quick Setup
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                Go Live in 10 Minutes. <span className="text-emerald-600">Seriously.</span>
              </h2>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="relative mt-16 grid gap-8 md:grid-cols-3">
            {/* Connecting line (desktop only) */}
            <div className="pointer-events-none absolute inset-x-0 top-16 hidden h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 md:block" />

            {[
              { num: '01', title: 'Connect', desc: 'Link your WhatsApp Business number. Takes 2 minutes with our guided setup.' },
              { num: '02', title: 'Configure', desc: 'Tell us your services, staff, timings & FAQs. Our AI learns your business instantly.' },
              { num: '03', title: 'Go Live', desc: 'Your AI receptionist starts answering customers on WhatsApp. That\'s it!' },
            ].map((step, i) => (
              <StaggerItem key={i}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-2xl font-black text-white shadow-lg shadow-emerald-500/25">
                    {step.num}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInWhenVisible delay={0.4}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              {['No coding', 'No app download', 'No training needed'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" /> {t}
                </span>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ────────────────────────── 5. USE CASES ────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Use Cases
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                Built for Every Business That Takes Appointments
              </h2>
            </div>
          </FadeInWhenVisible>

          {/* Tab pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  activeTab === ind.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 grid items-center gap-10 lg:grid-cols-2"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{activeIndustry.label}</h3>
                <div className="mt-6 space-y-3">
                  {activeIndustry.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-gray-600">{feat}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/use-cases"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Learn more about {activeIndustry.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex justify-center">
                <WhatsAppMockup messages={activeIndustry.messages} contactName="Growmi AI ✨" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ────────────────────────── 6. LANGUAGE ────────────────────────── */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-900 to-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-emerald-200 backdrop-blur-sm">
                <Globe className="h-4 w-4" /> 50+ Languages
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Speaks Your Customer&apos;s Language.{' '}
                <span className="text-emerald-300">Literally.</span>
              </h2>
              <p className="mt-4 text-lg text-emerald-100/80">
                Whether your customers speak Hindi, Gujarati, Tamil, Marathi, or English — Growmi understands and replies naturally. No translation setup, no language packs. It just works.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {languageMockups.map((mock, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.15}>
                <div className="flex flex-col items-center">
                  <div className="mb-3 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    {['हिन्दी (Hindi)', 'ગુજરાતી (Gujarati)', 'English'][i]}
                  </div>
                  <WhatsAppMockup messages={mock.messages} contactName={mock.contactName} />
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={0.5}>
            <div className="mt-12 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm">
                <Zap className="h-5 w-5 text-yellow-400" /> No translation setup needed. It just works.
              </span>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ────────────────────────── 7. COMPARISON ────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Comparison
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                Why Businesses Switch from WATI, AiSensy &amp; Others to Growmi
              </h2>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-100 shadow-lg">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="px-6 py-4 font-semibold text-gray-500">Feature</th>
                    <th className="px-6 py-4 text-center font-bold text-emerald-600">Growmi</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-500">WATI</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-500">AiSensy</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-500">Manual Staff</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 transition-colors hover:bg-gray-50/50">
                      <td className="px-6 py-3.5 font-medium text-slate-700">{row.feature}</td>
                      {(['growmi', 'wati', 'aisensy', 'manual'] as const).map((col) => (
                        <td key={col} className="px-6 py-3.5 text-center">
                          {typeof row[col] === 'boolean' ? (
                            row[col] ? (
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✅</span>
                            ) : (
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-400">❌</span>
                            )
                          ) : (
                            <span className={`text-sm font-semibold ${col === 'growmi' ? 'text-emerald-600' : 'text-gray-600'}`}>
                              {row[col] as string}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ────────────────────────── 8. TESTIMONIALS ────────────────────────── */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Testimonials
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                Businesses Love Growmi
              </h2>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="relative h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
                  <div className="mb-4 text-3xl text-emerald-300">&ldquo;</div>
                  <p className="text-sm leading-relaxed text-gray-600">{t.quote}</p>
                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.business}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Stats */}
          <FadeInWhenVisible delay={0.3}>
            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { target: 5000, suffix: '+', label: 'Appointments Booked' },
                { target: 50, suffix: '+', label: 'Businesses Trust Us' },
                { target: 15000, suffix: '+', label: 'Conversations Handled' },
                { target: 4.8, suffix: '★', label: 'Average Rating', isDecimal: true },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <div className="text-3xl font-black text-emerald-600 md:text-4xl">
                    {s.isDecimal ? (
                      <span>4.8★</span>
                    ) : (
                      <CountUp target={s.target} suffix={s.suffix} />
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ────────────────────────── 9. PRICING ────────────────────────── */}
      <section id="pricing" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Pricing
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                Simple Pricing. No Hidden Charges.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Start free. Upgrade when you&apos;re ready.
              </p>

              {/* Toggle */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-gray-400'}`}>Monthly</span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative h-7 w-12 rounded-full transition-colors ${isAnnual ? 'bg-emerald-600' : 'bg-gray-300'}`}
                >
                  <div className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${isAnnual ? 'translate-x-[22px]' : 'translate-x-0.5'}`} />
                </button>
                <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-gray-400'}`}>
                  Annual{' '}
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                    2 months free
                  </span>
                </span>
              </div>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all hover:shadow-xl ${
                  plan.popular
                    ? 'border-emerald-500 bg-white shadow-lg shadow-emerald-100 ring-1 ring-emerald-500'
                    : 'border-gray-100 bg-white shadow-sm'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-xs font-bold text-white shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                  <div className="mt-5">
                    {plan.monthlyPrice === 0 ? (
                      <div className="text-3xl font-black text-slate-900">Custom</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900">
                          ₹{(isAnnual ? plan.annualPrice : plan.monthlyPrice).toLocaleString('en-IN')}
                        </span>
                        <span className="text-sm text-gray-500">/month</span>
                      </div>
                    )}
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <p className="mt-1 text-xs text-gray-400 line-through">₹{plan.monthlyPrice.toLocaleString('en-IN')}/month</p>
                    )}
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700'
                      : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* All plans include */}
          <FadeInWhenVisible delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
              <span className="font-semibold text-slate-700">All plans include:</span>
              {['Free setup', '14-day trial', 'No credit card', 'Cancel anytime'].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-emerald-500" /> {t}
                </span>
              ))}
            </div>
          </FadeInWhenVisible>

          {/* FAQ */}
          <FadeInWhenVisible delay={0.4}>
            <div className="mx-auto mt-16 max-w-2xl">
              <h3 className="mb-6 text-center text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50/50 transition-all">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
                    >
                      {faq.q}
                      <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-4 text-sm leading-relaxed text-gray-600">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ────────────────────────── 10. DASHBOARD PREVIEW ────────────────────────── */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Dashboard
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                See Everything at a Glance
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                A beautiful dashboard to track every conversation, appointment, and insight.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BarChart3,
                title: 'Real-Time Stats',
                desc: 'Track conversations, bookings, response times, and customer satisfaction — all in real time.',
                color: 'from-blue-500 to-indigo-500',
              },
              {
                icon: Calendar,
                title: 'Calendar View',
                desc: 'See all appointments at a glance. Filter by staff, service, or date. Manage cancellations easily.',
                color: 'from-emerald-500 to-teal-500',
              },
              {
                icon: MessageSquare,
                title: 'Conversation Logs',
                desc: 'Read every WhatsApp conversation. Jump in anytime to take over from AI when needed.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: TrendingUp,
                title: 'Growth Analytics',
                desc: 'Weekly & monthly reports. See which services are trending, peak hours, and revenue impact.',
                color: 'from-amber-500 to-orange-500',
              },
            ].map((card, i) => (
              <StaggerItem key={i}>
                <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1">
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg`}>
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ────────────────────────── 11. BOTTOM CTA ────────────────────────── */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-700 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Ready to Put Your Business on Autopilot?
              </h2>
              <p className="mt-4 text-lg text-emerald-100">
                Start your 14-day free trial today. No credit card required. No setup fees. Cancel anytime.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <div className="flex w-full max-w-md overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 sm:flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent px-5 py-3.5 text-white placeholder-emerald-200/60 outline-none"
                  />
                  <button className="flex-shrink-0 bg-white px-6 py-3.5 font-semibold text-emerald-700 transition-all hover:bg-emerald-50 hover:scale-[1.02] active:scale-[0.98]">
                    Start Free Trial
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-emerald-100/80">
                <span>Or WhatsApp us directly</span>
                <a
                  href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20try%20Growmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.729-6.012-1.964l-.42-.313-2.649.888.888-2.649-.313-.42A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                  Chat Now
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-emerald-100/60">
                {['Free setup', '14-day trial', 'No credit card', 'Cancel anytime'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
}

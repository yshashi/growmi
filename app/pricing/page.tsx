'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  X,
  ChevronDown,
  Sparkles,
  Calculator,
  ArrowRight,
  Zap,
  Building2,
  Crown,
  Rocket,
} from 'lucide-react';
import {
  FadeInWhenVisible,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from '@/app/components/Animations';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    description: 'For small businesses',
    monthlyPrice: 999,
    annualPrice: 833,
    features: [
      '500 conversations/mo',
      '1 WhatsApp number',
      '3 staff members',
      '10 services',
      'Automated reminders',
      'Basic analytics',
    ],
    cta: 'Start Free Trial',
    popular: false,
    style: 'outlined' as const,
  },
  {
    name: 'Growth',
    icon: Rocket,
    description: 'For growing multi-staff businesses',
    monthlyPrice: 2999,
    annualPrice: 2499,
    features: [
      '2,000 conversations/mo',
      '1 WhatsApp number',
      '10 staff members',
      'Unlimited services',
      'Google Reviews integration',
      'Conversation takeover',
      'Priority support',
      'Advanced analytics',
    ],
    cta: 'Start Free Trial',
    popular: true,
    style: 'filled' as const,
  },
  {
    name: 'Pro',
    icon: Crown,
    description: 'For hospitals & large practices',
    monthlyPrice: 7999,
    annualPrice: 6666,
    features: [
      '5,000 conversations/mo',
      '3 WhatsApp numbers',
      'Unlimited staff',
      'Multi-location support',
      'API access',
      'Dedicated account manager',
      'Custom workflows',
      'White-label option',
    ],
    cta: 'Start Free Trial',
    popular: false,
    style: 'outlined' as const,
  },
  {
    name: 'Enterprise',
    icon: Building2,
    description: 'For hospital chains & franchises',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Unlimited conversations',
      'Unlimited WhatsApp numbers',
      'Unlimited everything',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment option',
      '24/7 priority support',
      'Custom AI training',
    ],
    cta: 'Contact Sales',
    popular: false,
    style: 'dark' as const,
  },
];

const comparisonData = [
  {
    feature: 'Setup Time',
    growmi: '5 minutes',
    wati: 'Technical',
    aisensy: 'Moderate',
    manual: 'N/A',
  },
  {
    feature: 'Multilingual (50+)',
    growmi: true,
    wati: 'Limited',
    aisensy: 'Limited',
    manual: false,
  },
  {
    feature: 'Smart Booking',
    growmi: true,
    wati: false,
    aisensy: false,
    manual: 'Manual',
  },
  {
    feature: 'Auto Follow-ups',
    growmi: true,
    wati: 'Basic',
    aisensy: 'Basic',
    manual: 'Manual',
  },
  {
    feature: 'Google Reviews',
    growmi: true,
    wati: false,
    aisensy: false,
    manual: false,
  },
  {
    feature: 'Monthly Cost',
    growmi: 'From ₹999/mo',
    wati: 'From ₹2,499/mo',
    aisensy: 'From ₹999/mo',
    manual: '₹15,000+/mo',
  },
];

const faqs = [
  {
    question: 'What counts as a conversation?',
    answer:
      'A conversation is a 24-hour messaging window with a single customer. All messages exchanged within that window count as one conversation.',
  },
  {
    question: 'What happens if I exceed my limit?',
    answer:
      'You\u2019ll receive a notification when you reach 80% of your limit. If exceeded, additional conversations are charged at \u20B92 each. You can also upgrade your plan anytime.',
  },
  {
    question: 'Can I change plans?',
    answer:
      'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. When upgrading, you get immediate access to new features.',
  },
  {
    question: 'Is there a setup fee?',
    answer:
      'No setup fee at all. Growmi is designed for self-service onboarding. Most businesses are up and running within 5 minutes.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer:
      'Yes! Annual billing saves you 2 months \u2014 that\u2019s effectively a 17% discount. The annual price is shown when you toggle to \u2018Annual\u2019 above.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept UPI, credit cards, debit cards, net banking, and wallets through our secure payment partner. All payments are processed in Indian Rupees (\u20B9).',
  },
  {
    question: 'Can I get a refund?',
    answer:
      'We offer a 7-day money-back guarantee on all paid plans. If you\u2019re not satisfied within the first 7 days, contact us for a full refund.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! Every plan comes with a 14-day free trial. No credit card required. You get full access to all features during the trial.',
  },
  {
    question: "What's included in the free trial?",
    answer:
      'The free trial includes all features of your selected plan \u2014 AI conversations, reminders, analytics, and staff management. The only limit is 100 conversations during the trial period.',
  },
  {
    question: 'Do I need a credit card for the trial?',
    answer:
      'No! You can start your free trial without any payment information. We\u2019ll only ask for payment details when you decide to continue after the trial.',
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
        <Check className="w-4 h-4" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500">
        <X className="w-4 h-4" />
      </span>
    );
  }
  return <span>{value}</span>;
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [salary, setSalary] = useState(15000);
  const [dailyCalls, setDailyCalls] = useState(50);

  const monthlySavings = salary - 999;
  const annualSavings = monthlySavings * 12;

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInWhenVisible>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              14-day free trial &middot; No credit card required
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Simple Pricing. No Hidden Charges.
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start free. Upgrade when you&apos;re ready.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* BILLING TOGGLE */}
      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="flex items-center justify-center gap-4">
              <span
                className={`text-sm font-medium transition-colors ${
                  !isAnnual ? 'text-slate-900' : 'text-gray-400'
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                  isAnnual ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
                aria-label="Toggle billing period"
              >
                <motion.div
                  className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: isAnnual ? 28 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
              <span
                className={`text-sm font-medium transition-colors ${
                  isAnnual ? 'text-slate-900' : 'text-gray-400'
                }`}
              >
                Annual
              </span>
              {isAnnual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="ml-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold"
                >
                  Save 2 months
                </motion.span>
              )}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
              const isEnterprise = plan.monthlyPrice === 0;

              return (
                <StaggerItem key={plan.name}>
                  <div
                    className={`relative flex flex-col h-full rounded-2xl p-6 lg:p-8 transition-shadow duration-300 ${
                      plan.popular
                        ? 'border-2 border-emerald-600 shadow-xl scale-[1.02] bg-white z-10'
                        : 'border border-gray-200 shadow-lg bg-white hover:shadow-xl'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${
                          plan.popular
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      {isEnterprise ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-slate-900">
                            Custom
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-slate-900">
                            ₹{price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-gray-500 text-sm">/mo</span>
                        </div>
                      )}
                      {isAnnual && !isEnterprise && (
                        <p className="text-xs text-gray-400 mt-1">
                          Billed ₹{(price * 12).toLocaleString('en-IN')}/year
                        </p>
                      )}
                    </div>

                    <ul className="flex-1 space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                        plan.style === 'filled'
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/25'
                          : plan.style === 'dark'
                            ? 'bg-slate-900 text-white hover:bg-slate-800'
                            : 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 inline-block ml-2" />
                    </button>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                See How Growmi Compares
              </h2>
              <p className="text-lg text-gray-600">
                The clear choice for WhatsApp business automation
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">
                      Feature
                    </th>
                    <th className="py-4 px-6 text-sm font-semibold text-emerald-600 bg-emerald-50/50">
                      Growmi
                    </th>
                    <th className="py-4 px-6 text-sm font-semibold text-gray-500">
                      WATI
                    </th>
                    <th className="py-4 px-6 text-sm font-semibold text-gray-500">
                      AiSensy
                    </th>
                    <th className="py-4 px-6 text-sm font-semibold text-gray-500">
                      Manual Staff
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={
                        idx < comparisonData.length - 1
                          ? 'border-b border-gray-50'
                          : ''
                      }
                    >
                      <td className="py-4 px-6 text-sm font-medium text-slate-900">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-center text-sm font-medium text-emerald-700 bg-emerald-50/50">
                        <CellValue value={row.growmi} />
                      </td>
                      <td className="py-4 px-6 text-center text-sm text-gray-600">
                        <CellValue value={row.wati} />
                      </td>
                      <td className="py-4 px-6 text-center text-sm text-gray-600">
                        <CellValue value={row.aisensy} />
                      </td>
                      <td className="py-4 px-6 text-center text-sm text-gray-600">
                        <CellValue value={row.manual} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* SAVINGS CALCULATOR */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Calculate Your Savings
              </h2>
              <p className="text-lg text-gray-600">
                See how much you can save by switching to Growmi
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Current receptionist salary (₹/month)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={salary}
                        onChange={(e) =>
                          setSalary(Number(e.target.value) || 0)
                        }
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 text-slate-900 text-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Daily calls/messages handled
                    </label>
                    <input
                      type="number"
                      value={dailyCalls}
                      onChange={(e) =>
                        setDailyCalls(Number(e.target.value) || 0)
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-slate-900 text-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Calculator className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-slate-900">
                        Quick Insight
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      At {dailyCalls} messages/day, that&apos;s roughly{' '}
                      <span className="font-semibold text-slate-900">
                        {(dailyCalls * 30).toLocaleString('en-IN')} messages/month
                      </span>{' '}
                      — all handled automatically by Growmi&apos;s AI.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 lg:p-8 text-white shadow-xl">
                  <h3 className="text-lg font-semibold mb-6 opacity-90">
                    Your Savings with Growmi
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-emerald-500/30">
                      <span className="text-emerald-100">
                        Monthly cost with Growmi
                      </span>
                      <span className="text-xl font-bold">₹999/mo</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-emerald-500/30">
                      <span className="text-emerald-100">Monthly savings</span>
                      <span className="text-xl font-bold">
                        <CountUp
                          target={monthlySavings > 0 ? monthlySavings : 0}
                          prefix="₹"
                          suffix="/mo"
                        />
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3">
                      <span className="text-emerald-100">Annual savings</span>
                      <span className="text-2xl font-bold">
                        <CountUp
                          target={annualSavings > 0 ? annualSavings : 0}
                          prefix="₹"
                          suffix="/yr"
                        />
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 bg-white/15 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-sm text-emerald-50">
                      💡 That&apos;s like getting{' '}
                      <span className="font-bold">
                        {monthlySavings > 0
                          ? Math.round((monthlySavings / salary) * 100)
                          : 0}
                        % savings
                      </span>{' '}
                      on your current costs — while handling messages 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about Growmi pricing
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === idx ? null : idx)
                    }
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join 500+ businesses already using Growmi
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-transform text-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
          </FadeInWhenVisible>
        </div>
      </section>
    </main>
  );
}

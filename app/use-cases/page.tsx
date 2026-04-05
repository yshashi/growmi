'use client';

import { FadeInWhenVisible, StaggerContainer, StaggerItem } from '@/app/components/Animations';
import WhatsAppMockup from '@/app/components/WhatsAppMockup';
import {
  Stethoscope,
  Scissors,
  Dumbbell,
  Dog,
  SmilePlus,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface Message {
  text: string;
  sender: 'customer' | 'ai';
  time: string;
}

interface IndustryData {
  id: string;
  icon: LucideIcon;
  label: string;
  headline: string;
  description: string;
  features: string[];
  messages: Message[];
  contactName: string;
  cta: string;
}

const industries: IndustryData[] = [
  {
    id: 'clinics',
    icon: Stethoscope,
    label: 'Clinics & Hospitals',
    headline: 'Smart Healthcare, Smarter Scheduling',
    description:
      'From OPD bookings to lab report delivery, Growmi handles the entire patient journey on WhatsApp — so your staff can focus on care, not calls.',
    features: [
      'OPD booking & slot management',
      'Patient data collection via chat',
      'Lab report delivery on WhatsApp',
      'Automated feedback collection',
      'Multi-doctor schedule management',
      'Insurance verification assistance',
      'Support in 50+ languages',
    ],
    messages: [
      { text: "Hi, I'd like to book an appointment with Dr. Sharma", sender: 'customer', time: '10:02 AM' },
      {
        text: "Hello! 👋 Dr. Sharma is available:\n\n📅 Tomorrow (Wed)\n⏰ 10:00 AM, 11:30 AM, 2:00 PM\n\nWhich slot works for you?",
        sender: 'ai',
        time: '10:02 AM',
      },
      { text: '11:30 AM please', sender: 'customer', time: '10:03 AM' },
      {
        text: "Confirmed! ✅\n\nDr. Sharma — Wed, 11:30 AM\n📍 City Care Clinic, 2nd Floor\n\nYou'll receive a reminder tomorrow morning.",
        sender: 'ai',
        time: '10:03 AM',
      },
    ],
    contactName: 'City Care Clinic',
    cta: 'Start Free Trial for Clinics',
  },
  {
    id: 'salons',
    icon: Scissors,
    label: 'Salons & Spas',
    headline: 'Your 24/7 Digital Receptionist for Salons',
    description:
      'Let Growmi handle bookings, reminders, and service inquiries around the clock — while you focus on making your clients look their best.',
    features: [
      'Service-based appointment booking',
      'Gender-matched stylist assignment',
      'Automatic rebooking reminders',
      'Service menu & pricing display',
      'Customer preference tracking',
      'Multi-location support',
    ],
    messages: [
      { text: 'Hey! I want to book a haircut for tomorrow', sender: 'customer', time: '3:15 PM' },
      {
        text: "Hi there! 💇‍♀️ We'd love to help.\n\nDo you have a preferred stylist, or should I match you with the best available?",
        sender: 'ai',
        time: '3:15 PM',
      },
      { text: "Priya if she's available", sender: 'customer', time: '3:16 PM' },
      {
        text: "Great choice! Priya is available tomorrow:\n\n⏰ 11:00 AM, 1:30 PM, 4:00 PM\n💰 Haircut — ₹500\n\nWhich time works?",
        sender: 'ai',
        time: '3:16 PM',
      },
    ],
    contactName: 'Glow Studio Salon',
    cta: 'Start Free Trial for Salons',
  },
  {
    id: 'gyms',
    icon: Dumbbell,
    label: 'Gyms & Fitness',
    headline: 'Automate Your Fitness Studio Operations',
    description:
      'From class bookings to membership renewals, Growmi keeps your members engaged and your schedule full — without the admin overhead.',
    features: [
      'Class & session booking',
      'Trainer assignment & scheduling',
      'Membership renewal reminders',
      'Diet & workout plan delivery',
      'Attendance tracking',
      'Trial class booking',
    ],
    messages: [
      { text: 'Hi, I want to join a yoga batch', sender: 'customer', time: '7:30 AM' },
      {
        text: "Namaste! 🧘 We have two batches available:\n\n🌅 Morning — 6:30 AM (Mon/Wed/Fri)\n🌆 Evening — 5:30 PM (Tue/Thu/Sat)\n\nWhich one suits you?",
        sender: 'ai',
        time: '7:30 AM',
      },
      { text: 'Morning batch please', sender: 'customer', time: '7:31 AM' },
      {
        text: "Booked! 🎉\n\nYoga — Morning Batch\n🗓 Starts this Monday, 6:30 AM\n👤 Trainer: Anjali Ma'am\n\nI'll send you a reminder before each class!",
        sender: 'ai',
        time: '7:31 AM',
      },
    ],
    contactName: 'FitZone Gym',
    cta: 'Start Free Trial for Gyms',
  },
  {
    id: 'pet-clinics',
    icon: Dog,
    label: 'Pet Clinics',
    headline: 'Because Pets Deserve Smart Care Too',
    description:
      'Manage appointments, vaccination schedules, and pet parent communication effortlessly — your furry patients will thank you.',
    features: [
      'Pet name & type collection',
      'Vaccination schedule reminders',
      'Doctor-pet speciality matching',
      'Post-visit care instructions',
      'Multi-pet family management',
      'Emergency appointment booking',
    ],
    messages: [
      { text: "Hi! My dog Bruno needs his vaccination", sender: 'customer', time: '11:10 AM' },
      {
        text: "Hi! 🐾 Let me check Bruno's records...\n\nBruno is due for his Rabies booster. Dr. Mehra (canine specialist) is available:\n\n📅 Tomorrow, 10:00 AM or 3:00 PM\n\nShall I book a slot?",
        sender: 'ai',
        time: '11:10 AM',
      },
      { text: '10 AM works!', sender: 'customer', time: '11:11 AM' },
      {
        text: "Done! ✅\n\n🐶 Bruno — Rabies Booster\n👨‍⚕️ Dr. Mehra\n📅 Tomorrow, 10:00 AM\n📍 Happy Paws Clinic\n\nPlease bring Bruno's vaccination card.",
        sender: 'ai',
        time: '11:11 AM',
      },
    ],
    contactName: 'Happy Paws Clinic',
    cta: 'Start Free Trial for Pet Clinics',
  },
  {
    id: 'dental',
    icon: SmilePlus,
    label: 'Dental Clinics',
    headline: 'Modern Dentistry, Modern Booking',
    description:
      'From cleanings to root canals, let Growmi manage your appointment flow, follow-ups, and patient communication on WhatsApp.',
    features: [
      'Treatment-specific appointment booking',
      'Follow-up scheduling automation',
      'X-ray & report sharing via WhatsApp',
      'Treatment plan communication',
      'Insurance claim assistance',
      'Multi-chair scheduling',
    ],
    messages: [
      { text: 'I need to schedule a teeth cleaning', sender: 'customer', time: '2:00 PM' },
      {
        text: "Hi! 😁 We'll get you a sparkling smile.\n\nDr. Kapoor has these openings for a cleaning session:\n\n📅 Thursday — 10:30 AM\n📅 Friday — 3:00 PM, 5:00 PM\n\nWhich one would you prefer?",
        sender: 'ai',
        time: '2:00 PM',
      },
      { text: 'Friday 3 PM', sender: 'customer', time: '2:01 PM' },
      {
        text: "Confirmed! ✅\n\n🦷 Teeth Cleaning\n👨‍⚕️ Dr. Kapoor — Friday, 3:00 PM\n📍 Smile Dental, Ground Floor\n⏱ Duration: ~45 mins\n\nPlease avoid eating 1 hour before.",
        sender: 'ai',
        time: '2:01 PM',
      },
    ],
    contactName: 'Smile Dental Clinic',
    cta: 'Start Free Trial for Dental Clinics',
  },
  {
    id: 'coaching',
    icon: GraduationCap,
    label: 'Coaching Centers',
    headline: 'Streamline Your Coaching Business',
    description:
      'Automate enrollment, share schedules, send fee reminders, and keep parents in the loop — all through WhatsApp.',
    features: [
      'Demo class booking',
      'Parent progress reports',
      'Fee payment reminders',
      'Batch & schedule info on demand',
      'Student enrollment automation',
      'Exam schedule notifications',
    ],
    messages: [
      { text: 'Hi, I want to enroll my son for Class 10 Maths', sender: 'customer', time: '6:45 PM' },
      {
        text: "Hello! 📚 Great choice! Here are the available batches for Class 10 Maths:\n\n🕐 Batch A — Mon/Wed/Fri, 4:00 PM\n🕐 Batch B — Tue/Thu/Sat, 5:30 PM\n\nWould you like to book a free demo class first?",
        sender: 'ai',
        time: '6:45 PM',
      },
      { text: 'Yes, demo in Batch A please', sender: 'customer', time: '6:46 PM' },
      {
        text: "Done! 🎓\n\nDemo Class — Class 10 Maths\n🗓 This Monday, 4:00 PM\n👨‍🏫 Faculty: Rajesh Sir\n📍 Room 204, 2nd Floor\n\nI'll send a reminder on Monday morning!",
        sender: 'ai',
        time: '6:46 PM',
      },
    ],
    contactName: 'BrightMinds Academy',
    cta: 'Start Free Trial for Coaching Centers',
  },
];

function IndustrySection({ data, index }: { data: IndustryData; index: number }) {
  const Icon = data.icon;
  const isEven = index % 2 === 0;

  return (
    <section id={data.id} className={isEven ? 'bg-white' : 'bg-gray-50'}>
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content column */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                    {data.label}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  {data.headline}
                </h2>
                <p className="text-lg text-gray-600 mb-8">{data.description}</p>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {data.features.map((feature) => (
                    <StaggerItem key={feature}>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700 text-sm leading-snug">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
                >
                  {data.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Mockup column */}
              <div className="flex justify-center lg:justify-end">
                <WhatsAppMockup messages={data.messages} contactName={data.contactName} />
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}

export default function UseCasesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pt-24">
        <div className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInWhenVisible>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Industry Solutions
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto">
                AI-Powered Solutions for Every Business
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                Growmi adapts to your industry. Whether you run a clinic, salon, gym, or coaching center
                — our AI assistant handles bookings, reminders, and customer conversations on WhatsApp
                so you never miss a lead.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <motion.a
                      key={ind.id}
                      href={`#${ind.id}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 bg-white border border-gray-200 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-emerald-300 hover:bg-emerald-50 transition-colors shadow-sm"
                    >
                      <Icon className="w-4 h-4 text-emerald-600" />
                      {ind.label}
                    </motion.a>
                  );
                })}
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((data, index) => (
        <IndustrySection key={data.id} data={data} index={index} />
      ))}

      {/* Bottom CTA Section */}
      <section className="bg-slate-900">
        <div className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                Join hundreds of businesses already using Growmi to automate their WhatsApp
                conversations, bookings, and customer engagement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  Talk to Sales
                </motion.a>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Growmi',
  description: 'Growmi terms of service. Read about the terms governing your use of the Growmi platform.',
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Last updated: April 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-10 text-gray-600">
          {/* Service Description */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Service Description</h2>
            <p className="text-lg leading-relaxed">
              Growmi provides an AI-powered WhatsApp assistant platform (&quot;Service&quot;) that enables businesses
              to automate appointment booking, customer communication, reminders, and follow-ups through
              the WhatsApp Business API. By creating an account and using the Service, you agree to these
              Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use the Service.
            </p>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Acceptable Use</h2>
            <p className="text-lg leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes and in compliance with applicable laws,
              including WhatsApp&apos;s Business Policy and Commerce Policy. You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Send spam, unsolicited messages, or messages that violate WhatsApp&apos;s policies</li>
              <li>Use the Service to collect or harvest personal data without consent</li>
              <li>Misrepresent your identity or the nature of your business</li>
              <li>Attempt to reverse-engineer, decompile, or extract the source code of the Service</li>
              <li>Use the Service for any illegal, fraudulent, or harmful activities</li>
              <li>Resell, sublicense, or redistribute the Service without written authorization</li>
              <li>Transmit viruses, malware, or any harmful code through the platform</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              We reserve the right to suspend or terminate your account if we determine that your use
              violates these Terms or poses a risk to other users.
            </p>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            <p className="text-lg leading-relaxed mb-4">
              All pricing is listed in Indian Rupees (₹). By subscribing to a paid plan, you agree to the
              following payment terms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Payments are billed monthly or annually in advance, depending on the plan selected</li>
              <li>All fees are non-refundable unless otherwise stated in our Refund Policy</li>
              <li>We accept payments via UPI, credit/debit cards, net banking, and other methods supported by our payment processor</li>
              <li>If a payment fails, your access may be restricted until the outstanding amount is settled</li>
              <li>We reserve the right to change pricing with 30 days&apos; prior written notice to active subscribers</li>
              <li>Taxes (GST) will be applied as required under Indian law and displayed at checkout</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
            <p className="text-lg leading-relaxed">
              To the maximum extent permitted by applicable law, Growmi and its directors, employees, and
              affiliates shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, business, or goodwill, arising from
              your use of the Service.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Our total liability for any claim arising from or related to the Service shall not exceed the
              amount you paid to Growmi in the twelve (12) months preceding the claim. The Service is
              provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind, express or implied.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Termination</h2>
            <p className="text-lg leading-relaxed mb-4">
              Either party may terminate this agreement:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><strong>By you:</strong> You may cancel your subscription at any time from your dashboard. Your access will continue until the end of the current billing period.</li>
              <li><strong>By Growmi:</strong> We may suspend or terminate your account immediately if you violate these Terms, fail to pay, or if we are required to do so by law.</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Upon termination, your right to use the Service ceases immediately. We will retain your data
              for 30 days following termination, during which you may request an export. After 30 days,
              all data will be permanently deleted.
            </p>
          </section>

          {/* Data Ownership */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Ownership</h2>
            <p className="text-lg leading-relaxed">
              You retain full ownership of all data you provide to Growmi, including business information,
              customer records, and conversation content. By using the Service, you grant Growmi a limited,
              non-exclusive licence to process your data solely for the purpose of delivering and improving
              the Service. We do not claim ownership of your data and will not use it for purposes other
              than providing the Service. You may request a full export of your data at any time.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Intellectual Property</h2>
            <p className="text-lg leading-relaxed">
              The Growmi platform, including its software, design, branding, AI models, and documentation,
              is the intellectual property of Growmi and is protected by applicable copyright, trademark,
              and other intellectual property laws. Nothing in these Terms grants you any right to use our
              trademarks, logos, or brand elements without prior written consent.
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Modifications to Terms</h2>
            <p className="text-lg leading-relaxed">
              We may modify these Terms from time to time. When we do, we will update the &quot;Last updated&quot;
              date at the top of this page. For material changes, we will notify you via email or through
              the Service at least 15 days before the changes take effect. Your continued use of the Service
              after the updated Terms take effect constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law &amp; Jurisdiction</h2>
            <p className="text-lg leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India. Any
              disputes arising from or in connection with these Terms or the Service shall be subject to
              the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India. Both parties agree
              to attempt good-faith resolution of any dispute before initiating legal proceedings.
            </p>
          </section>

          {/* Force Majeure */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Force Majeure</h2>
            <p className="text-lg leading-relaxed">
              Growmi shall not be held liable for any failure or delay in performing its obligations under
              these Terms due to causes beyond its reasonable control, including but not limited to natural
              disasters, acts of government, internet outages, failures of the WhatsApp Business API, or
              other force majeure events.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact</h2>
            <p className="text-lg leading-relaxed">
              For any questions regarding these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-2xl space-y-2">
              <p className="text-lg"><strong>Growmi</strong></p>
              <p className="text-lg">Ahmedabad, Gujarat, India</p>
              <p className="text-lg">
                Email:{' '}
                <a href="mailto:hello@getgrowmi.com" className="text-emerald-600 hover:text-emerald-700 underline">
                  hello@getgrowmi.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Growmi',
  description: 'Growmi privacy policy. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Last updated: April 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-10 text-gray-600">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed">
              Growmi (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of our users
              and their customers. This Privacy Policy explains how we collect, use, store, and protect
              information when you use the Growmi AI WhatsApp Assistant platform (&quot;Service&quot;). By using
              our Service, you agree to the practices described in this policy.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data We Collect</h2>
            <p className="text-lg leading-relaxed mb-4">
              We collect the following types of information to provide and improve our Service:
            </p>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Business Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Business name, address, and contact details</li>
              <li>Staff names, roles, and availability schedules</li>
              <li>Services offered, pricing, and business hours</li>
              <li>Account credentials and billing information</li>
            </ul>
            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">Customer Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Customer phone numbers (as provided via WhatsApp interactions)</li>
              <li>Customer names and preferences shared during conversations</li>
              <li>Appointment and booking history</li>
            </ul>
            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">Conversation Logs</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>WhatsApp messages exchanged between customers and the Growmi AI assistant</li>
              <li>Metadata such as timestamps, message delivery status, and conversation flow data</li>
            </ul>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Data</h2>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Service Delivery</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Processing and managing appointment bookings</li>
              <li>Sending automated reminders, confirmations, and follow-ups</li>
              <li>Providing AI-powered customer support and query resolution</li>
              <li>Managing staff schedules and assignments</li>
            </ul>
            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">Analytics &amp; Improvement</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Generating business insights and performance reports</li>
              <li>Improving AI response accuracy and conversation quality</li>
              <li>Identifying trends and patterns to enhance the Service</li>
              <li>Aggregated, anonymised data for product development</li>
            </ul>
          </section>

          {/* WhatsApp/Meta */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. WhatsApp &amp; Meta Data Processing</h2>
            <p className="text-lg leading-relaxed">
              Growmi operates through the WhatsApp Business API provided by Meta Platforms, Inc. When
              customers interact with your business through WhatsApp, message data is processed by both
              Growmi and Meta in accordance with their respective privacy policies. We use the WhatsApp
              Business API solely for delivering the Service and do not share conversation data with
              Meta beyond what is required for message delivery. We encourage you to review{' '}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 underline"
              >
                Meta&apos;s WhatsApp Privacy Policy
              </a>{' '}
              for information on how they process data.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p className="text-lg leading-relaxed">
              We retain conversation logs and customer interaction data for a period of <strong>12 months</strong> from
              the date of the last interaction. After this period, data is automatically deleted from our
              active systems. Business account information is retained for as long as your account remains
              active. Upon account deletion, all associated data is permanently removed within 30 days.
            </p>
          </section>

          {/* Customer Opt-Out */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Customer Opt-Out</h2>
            <p className="text-lg leading-relaxed">
              End customers who interact with Growmi-powered WhatsApp assistants can opt out at any time
              by sending &quot;STOP&quot; or &quot;Unsubscribe&quot; during a conversation. Once opted out, the customer will
              no longer receive automated messages from the business through Growmi. Business owners can
              also manage customer opt-out preferences from their Growmi dashboard.
            </p>
          </section>

          {/* No Selling of Data */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. We Never Sell Your Data</h2>
            <p className="text-lg leading-relaxed">
              Growmi does <strong>not</strong> sell, rent, or trade any personal data, business data, or
              conversation logs to third parties. We do not use your data for advertising purposes. Your
              data is used exclusively to provide and improve the Growmi Service.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Security</h2>
            <p className="text-lg leading-relaxed">
              We implement industry-standard security measures to protect your data, including encryption
              in transit (TLS/SSL) and at rest, access controls, regular security audits, and secure
              cloud infrastructure. While no system is completely immune to breaches, we are committed
              to safeguarding your information.
            </p>
          </section>

          {/* Data Requests */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Access &amp; Requests</h2>
            <p className="text-lg leading-relaxed">
              You have the right to request access to, correction of, or deletion of your personal data.
              To submit a data request, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-2xl">
              <p className="text-lg">
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@getgrowmi.com" className="text-emerald-600 hover:text-emerald-700 underline">
                  privacy@getgrowmi.com
                </a>
              </p>
              <p className="text-lg mt-2">
                <strong>Response Time:</strong> We will respond to all data requests within 30 business days.
              </p>
            </div>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. When we make changes, we will update
              the &quot;Last updated&quot; date at the top of this page and notify active users via email. Continued
              use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
            <p className="text-lg leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our data practices, please
              reach out to us:
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

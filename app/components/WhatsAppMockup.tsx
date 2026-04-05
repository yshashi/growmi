"use client";

interface Message {
  text: string;
  sender: "customer" | "ai";
  time: string;
}

export default function WhatsAppMockup({
  messages,
  contactName = "Growmi AI",
}: {
  messages: Message[];
  contactName?: string;
}) {
  return (
    <div className="w-full max-w-[320px] mx-auto">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-[3px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="bg-gray-800 flex justify-center pt-2 pb-1">
          <div className="w-28 h-5 bg-black rounded-full" />
        </div>
        {/* WhatsApp header */}
        <div className="bg-[#075E54] px-3 py-2.5 flex items-center gap-2.5">
          <div className="w-4 h-4 flex items-center">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-white fill-current"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
            G
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">
              {contactName}
            </p>
            <p className="text-emerald-200 text-[10px]">online</p>
          </div>
          <div className="flex items-center gap-3 text-white">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z" />
            </svg>
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </div>
        </div>
        {/* Chat area */}
        <div
          className="bg-[#ECE5DD] px-2.5 py-3 min-h-75 max-h-95 overflow-y-auto space-y-1.5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Cpath d='M0 20h40M20 0v40' fill='none' stroke='%23d5cfc6' stroke-width='.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='%23ECE5DD' width='200' height='200'/%3E%3Crect fill='url(%23a)' width='200' height='200' opacity='.3'/%3E%3C/svg%3E\")",
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sender === "customer" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`relative max-w-[85%] px-2.5 py-1.5 rounded-lg text-[13px] leading-[1.35] shadow-sm ${
                  msg.sender === "customer"
                    ? "bg-[#DCF8C6] rounded-tr-none"
                    : "bg-white rounded-tl-none"
                }`}
              >
                <span className="whitespace-pre-wrap wrap-break-word">
                  {msg.text}
                </span>
                <span className="float-right mt-1 ml-2 flex items-center gap-0.5">
                  <span className="text-[10px] text-gray-500">{msg.time}</span>
                  {msg.sender === "customer" && (
                    <svg
                      viewBox="0 0 16 11"
                      className="w-4 h-2.5 text-[#53bdeb] fill-current ml-0.5"
                    >
                      <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.095a.434.434 0 0 0-.329-.145.46.46 0 0 0-.336.145.423.423 0 0 0 0 .62l2.357 2.46a.465.465 0 0 0 .336.159h.013a.467.467 0 0 0 .35-.178l6.537-8.063a.47.47 0 0 0 .068-.503.485.485 0 0 0-.11-.112z" />
                      <path d="M14.757.653a.457.457 0 0 0-.305-.102.493.493 0 0 0-.38.178l-6.19 7.636-1.166-1.214-.615.762 1.433 1.496a.465.465 0 0 0 .336.159h.013a.467.467 0 0 0 .35-.178l6.537-8.063a.47.47 0 0 0 .068-.503.485.485 0 0 0-.081-.171z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Input bar */}
        <div className="bg-[#F0F0F0] px-2 py-1.5 flex items-center gap-1.5">
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[12px] text-gray-400">
            Type a message
          </div>
          <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-white fill-current"
            >
              <path d="M12 14.95q-.425 0-.712-.288T11 13.95V6.05q0-.425.288-.713T12 5.05q.425 0 .713.288T13 6.05v7.9q0 .425-.288.713T12 14.95zm-1 4v-1.2q-2.325-.35-3.837-2.1T5.65 12h1.4q.35 1.75 1.763 2.875T12 16q1.575 0 2.988-1.125T16.75 12h1.4q0 2.1-1.513 3.85T12.8 17.95v1z" />
            </svg>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="bg-gray-800 h-4 flex justify-center items-center">
          <div className="w-24 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}

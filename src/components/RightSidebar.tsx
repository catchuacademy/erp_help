"use client";

import { useEffect, useState } from "react";

interface Topic {
  id: string;
  title: string;
  icon: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface RightSidebarProps {
  topics: Topic[];
  faqs: FAQ[];
}

export default function RightSidebar({ topics, faqs }: RightSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    topics.forEach((topic) => {
      const el = document.getElementById(topic.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [topics]);

  return (
    <aside className="w-72 shrink-0 hidden xl:block sticky top-12 self-start">
      <div className="space-y-6">
        {/* Quick Topic Access */}
        <div className="bg-white rounded-xl border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              On This Page
            </h3>
          </div>
          <nav className="space-y-0.5">
            {topics.map((topic) => (
              <a
                key={topic.id}
                href={`#${topic.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(topic.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-all duration-200 ${
                  activeId === topic.id
                    ? "bg-primary text-white font-semibold shadow-sm"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                }`}
              >
                <span className="text-sm">{topic.icon}</span>
                <span className="truncate">{topic.title}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-amber-50 rounded flex items-center justify-center">
              <span className="text-sm">❓</span>
            </div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              FAQ
            </h3>
          </div>
          <div className="space-y-1">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 last:border-0">
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full text-left py-2 flex items-start gap-2 group"
                >
                  <svg
                    className={`w-3.5 h-3.5 mt-0.5 text-slate-400 transition-transform shrink-0 ${
                      expandedFaq === idx ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-xs font-medium text-slate-700 group-hover:text-primary transition-colors leading-relaxed">
                    {faq.question}
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="pl-5 pb-2">
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Help */}
        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl p-4 text-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">💬</span>
            <h3 className="text-xs font-bold uppercase tracking-wider">
              Need Help?
            </h3>
          </div>
          <p className="text-[11px] text-blue-100 leading-relaxed mb-3">
            Can&apos;t find what you&apos;re looking for? Reach out to our support team.
          </p>
          <a
            href="mailto:support@quickdice.com"
            className="block text-center text-xs font-semibold bg-white text-primary rounded-lg py-2 hover:bg-blue-50 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const modules = [
  {
    name: "Getting Started",
    icon: "📘",
    href: "/getting-started/grid-features",
    children: [
      { name: "Grid Features", href: "/getting-started/grid-features" },
    ],
  },
  {
    name: "Finance",
    icon: "💰",
    code: "FIN",
    href: "/modules/finance",
    children: [
      { name: "Accounting Ledgers", href: "/modules/finance#ledgers" },
      { name: "Receipts & Payments", href: "/modules/finance#receipts" },
      { name: "Vouchers", href: "/modules/finance#vouchers" },
      { name: "Reports", href: "/modules/finance#reports" },
    ],
  },
  {
    name: "Human Resources",
    icon: "👥",
    code: "HRMS",
    href: "/modules/hrms",
    children: [],
  },
  {
    name: "VAT Modules",
    icon: "🧾",
    code: "VAT",
    href: "/modules/vat",
    children: [],
  },
  {
    name: "Inventory Management",
    icon: "📦",
    code: "IMS",
    href: "/modules/inventory",
    children: [],
  },
  {
    name: "Equipment Rentals",
    icon: "🏗️",
    code: "EQP",
    href: "/modules/equipment-rentals",
    children: [],
  },
  {
    name: "Camp Management",
    icon: "🏕️",
    code: "CAMP",
    href: "/modules/camp-management",
    children: [],
  },
  {
    name: "Projects Control",
    icon: "📋",
    code: "PRJ",
    href: "/modules/projects-control",
    children: [],
  },
  {
    name: "Work Order",
    icon: "🔧",
    code: "WOMS",
    href: "/modules/work-order",
    children: [],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState([
    "Getting Started",
  ]);

  const toggleSection = (name) => {
    setExpandedSections((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  return (
    <aside className="w-64 bg-sidebar-bg text-sidebar-text fixed top-0 left-0 h-screen flex flex-col z-50">
      {/* Logo */}
      <div className="p-5 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
            QD
          </div>
          <div>
            <h1 className="text-white font-bold text-base leading-tight">
              Quick Dice ERP
            </h1>
            <p className="text-xs text-slate-400">Help Center</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3">
        {modules.map((mod) => {
          const isActive =
            pathname === mod.href || pathname.startsWith(mod.href);
          const isExpanded = expandedSections.includes(mod.name);

          return (
            <div key={mod.name} className="mb-1">
              <button
                onClick={() => toggleSection(mod.name)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary/20 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-lg">{mod.icon}</span>
                <span className="flex-1 text-left">{mod.name}</span>
                {mod.code && (
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded font-mono">
                    {mod.code}
                  </span>
                )}
                {mod.children.length > 0 && (
                  <svg
                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
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
                )}
              </button>

              {isExpanded && mod.children.length > 0 && (
                <div className="ml-8 mt-1 space-y-0.5">
                  {mod.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-3 py-1.5 text-xs rounded-md transition-colors ${
                        pathname === child.href
                          ? "text-primary bg-primary/10"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <p className="text-[10px] text-slate-500 text-center">
          Quick Dice ERP Solutions
        </p>
      </div>
    </aside>
  );
}

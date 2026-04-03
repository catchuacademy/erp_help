"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const searchableItems = [
  { title: "Column Chooser", href: "/getting-started/grid-features#column-chooser" },
  { title: "Search in Grid", href: "/getting-started/grid-features#search" },
  { title: "Toggle Filter", href: "/getting-started/grid-features#toggle-filter" },
  { title: "Group", href: "/getting-started/grid-features#group" },
  { title: "Sort Ascending", href: "/getting-started/grid-features#sort-ascending" },
  { title: "Sort Descending", href: "/getting-started/grid-features#sort-descending" },
  { title: "Export", href: "/getting-started/grid-features#export" },
  { title: "Conditional Formatting", href: "/getting-started/grid-features#conditional-formatting" },
  { title: "Finance Module", href: "/modules/finance" },
  { title: "Human Resources", href: "/modules/hrms" },
  { title: "VAT Modules", href: "/modules/vat" },
  { title: "Inventory Management", href: "/modules/inventory" },
  { title: "Equipment Rentals", href: "/modules/equipment-rentals" },
  { title: "Camp Management", href: "/modules/camp-management" },
  { title: "Projects Control", href: "/modules/projects-control" },
  { title: "Work Order Management", href: "/modules/work-order" },
];

export default function Header() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const results = query.length > 0
    ? searchableItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <header className="h-16 bg-white border-b border-border flex items-center px-6 sticky top-0 z-40">
      <div className="relative flex-1 max-w-xl">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search features, modules, guides..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {showResults && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-border overflow-hidden z-50">
            {results.map((item) => (
              <button
                key={item.href}
                onMouseDown={() => {
                  router.push(item.href);
                  setQuery("");
                  setShowResults(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm hover:bg-primary-light transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {item.title}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 ml-6">
        <a
          href="https://qd-hotfix-aghrc8c7g3ftdrau.uaenorth-01.azurewebsites.net/testdev/Security/Login"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
        >
          Open ERP App
        </a>
      </div>
    </header>
  );
}

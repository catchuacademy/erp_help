import FeatureCard from "@/components/FeatureCard";

const modules = [
  {
    icon: "📘",
    title: "Getting Started",
    description:
      "Learn common grid features like Column Chooser, Filters, Sorting, Export, and more used across all modules.",
    href: "/getting-started/grid-features",
    color: "bg-blue-500",
  },
  {
    icon: "💰",
    title: "Finance",
    description:
      "Accounting Ledgers, Receipts, Payments, Vouchers, and Financial Reports.",
    href: "/modules/finance",
    color: "bg-emerald-500",
  },
  {
    icon: "👥",
    title: "Human Resources",
    description:
      "Employee management, payroll processing, attendance, and HR workflows.",
    href: "/modules/hrms",
    color: "bg-violet-500",
  },
  {
    icon: "🧾",
    title: "VAT Modules",
    description:
      "VAT compliance, tax calculations, returns filing, and tax reporting.",
    href: "/modules/vat",
    color: "bg-orange-500",
  },
  {
    icon: "📦",
    title: "Inventory Management",
    description:
      "Stock control, warehousing, item tracking, and inventory reports.",
    href: "/modules/inventory",
    color: "bg-cyan-500",
  },
  {
    icon: "🏗️",
    title: "Equipment Rentals",
    description:
      "Equipment tracking, rental agreements, billing, and availability management.",
    href: "/modules/equipment-rentals",
    color: "bg-amber-500",
  },
  {
    icon: "🏕️",
    title: "Camp Management",
    description:
      "Accommodation management, facility allocation, and camp operations.",
    href: "/modules/camp-management",
    color: "bg-teal-500",
  },
  {
    icon: "📋",
    title: "Projects Control",
    description:
      "Project tracking, cost management, resource allocation, and milestones.",
    href: "/modules/projects-control",
    color: "bg-indigo-500",
  },
  {
    icon: "🔧",
    title: "Work Order Management",
    description:
      "Work order creation, assignment, tracking, and completion workflows.",
    href: "/modules/work-order",
    color: "bg-rose-500",
  },
];

const gridFeatures = [
  {
    icon: "🔲",
    title: "Column Chooser",
    description: "Show or hide columns to customize your grid view.",
    href: "/getting-started/grid-features#column-chooser",
    color: "bg-blue-500",
  },
  {
    icon: "🔍",
    title: "Search",
    description: "Quickly find records within any grid using the search bar.",
    href: "/getting-started/grid-features#search",
    color: "bg-green-500",
  },
  {
    icon: "🔽",
    title: "Toggle Filter",
    description: "Enable row-level filters to narrow down your data.",
    href: "/getting-started/grid-features#toggle-filter",
    color: "bg-orange-500",
  },
  {
    icon: "📊",
    title: "Sort & Group",
    description: "Sort ascending/descending and group rows by columns.",
    href: "/getting-started/grid-features#sort-ascending",
    color: "bg-purple-500",
  },
  {
    icon: "📤",
    title: "Export",
    description: "Export your grid data to Excel or PDF formats.",
    href: "/getting-started/grid-features#export",
    color: "bg-cyan-500",
  },
  {
    icon: "🎨",
    title: "Conditional Formatting",
    description: "Apply color-coded rules to highlight important data.",
    href: "/getting-started/grid-features#conditional-formatting",
    color: "bg-pink-500",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-10 mb-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-3">
            Welcome to Quick Dice ERP Help Center
          </h1>
          <p className="text-blue-100 text-lg mb-6">
            Everything you need to master your ERP system. Browse modules, learn
            features, and get step-by-step guides.
          </p>
          <div className="flex gap-3">
            <a
              href="/getting-started/grid-features"
              className="px-5 py-2.5 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Started
            </a>
            <a
              href="https://qd-hotfix-aghrc8c7g3ftdrau.uaenorth-01.azurewebsites.net/testdev/Security/Login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Open ERP App
            </a>
          </div>
        </div>
      </section>

      {/* Common Grid Features */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Common Grid Features
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              These features are available across all modules via right-click on
              any grid header
            </p>
          </div>
          <a
            href="/getting-started/grid-features"
            className="text-sm text-primary hover:underline font-medium"
          >
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gridFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Modules */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">ERP Modules</h2>
          <p className="text-sm text-slate-500 mt-1">
            Explore each module to learn about its features and workflows
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.slice(1).map((mod) => (
            <FeatureCard key={mod.title} {...mod} />
          ))}
        </div>
      </section>
    </div>
  );
}

"use client";

import Breadcrumb from "@/components/Breadcrumb";
import StepGuide from "@/components/StepGuide";
import RightSidebar from "@/components/RightSidebar";

const gridFeatures = [
  {
    id: "column-chooser",
    icon: "🔲",
    iconColor: "bg-blue-500",
    title: "Column Chooser",
    badge: "Most Used",
    badgeColor: "bg-blue-100 text-blue-700",
    description:
      "The Column Chooser allows you to customize which columns are visible in your grid. You can show or hide columns based on your needs, making it easier to focus on the data that matters most.",
    steps: [
      {
        number: 1,
        title: "Right-click on any column header",
        description:
          'Right-click on any column header in the grid to open the context menu. You will see a list of options including "Column Chooser" at the top.',
        screenshot: "/screenshots/grid-right-click-menu.png",
      },
      {
        number: 2,
        title: 'Select "Column Chooser"',
        description:
          'Click on "Column Chooser" from the context menu. A panel will appear on the right side of the grid showing all available columns that are currently hidden. You can search for columns like Account Group, Account Head, or Account Head Arabic.',
        screenshot: "/screenshots/column-chooser.png",
      },
      {
        number: 3,
        title: "Drag columns to show or hide",
        description:
          "Drag columns from the Column Chooser panel into the grid header to show them. To hide a column, drag it from the grid header back into the Column Chooser panel. You can also search for specific columns using the search box in the panel.",
      },
    ],
  },
  {
    id: "search",
    icon: "🔍",
    iconColor: "bg-green-500",
    title: "Search",
    badge: "Quick Access",
    badgeColor: "bg-green-100 text-green-700",
    description:
      "The Search feature lets you quickly find specific records within the grid. It searches across all visible columns and highlights matching results.",
    steps: [
      {
        number: 1,
        title: "Open Search from context menu or toolbar",
        description:
          'Right-click on a column header and select "Search", or click the Search button in the toolbar above the grid.',
      },
      {
        number: 2,
        title: "Type your search query",
        description:
          "Enter your search term in the search box. The grid will automatically filter to show only rows that contain matching text.",
      },
    ],
  },
  {
    id: "toggle-filter",
    icon: "🔽",
    iconColor: "bg-orange-500",
    title: "Toggle Filter",
    badge: "Power Feature",
    badgeColor: "bg-orange-100 text-orange-700",
    description:
      "Toggle Filter enables row-level filtering on each column. When activated, a filter row appears below the header allowing you to filter data column by column.",
    steps: [
      {
        number: 1,
        title: "Activate the filter row",
        description:
          'Right-click on a column header and select "Toggle Filter", or use the Toggle Filter button in the toolbar.',
      },
      {
        number: 2,
        title: "Enter filter criteria",
        description:
          "A filter row will appear below the column headers. Type filter values in the respective column fields to filter data. You can use different operators like contains, equals, starts with, etc.",
      },
    ],
  },
  {
    id: "refresh",
    icon: "🔄",
    iconColor: "bg-teal-500",
    title: "Refresh",
    description:
      "Refresh reloads the grid data from the server, ensuring you are viewing the most up-to-date information.",
    steps: [
      {
        number: 1,
        title: "Right-click and select Refresh",
        description:
          'Right-click on any column header and select "Refresh" from the context menu. The grid will reload with the latest data from the server.',
      },
    ],
  },
  {
    id: "group",
    icon: "👥",
    iconColor: "bg-violet-500",
    title: "Group",
    badge: "Analytics",
    badgeColor: "bg-violet-100 text-violet-700",
    description:
      "The Group feature allows you to organize your data by grouping rows based on a column's values. This is useful for analyzing data by categories.",
    steps: [
      {
        number: 1,
        title: "Select a column to group by",
        description:
          'Right-click on the column header you want to group by and select "Group" from the context menu.',
      },
      {
        number: 2,
        title: "View grouped data",
        description:
          "The grid will reorganize to show data grouped by the selected column. You can expand or collapse each group to view individual records.",
      },
    ],
  },
  {
    id: "sort-ascending",
    icon: "⬆️",
    iconColor: "bg-purple-500",
    title: "Sort Ascending",
    description:
      "Sort your data in ascending order (A-Z, smallest to largest) based on the selected column.",
    steps: [
      {
        number: 1,
        title: "Right-click and select Sort Ascending",
        description:
          'Right-click on the column header you want to sort and select "Sort Ascending". The grid data will be reordered from lowest to highest value.',
      },
    ],
  },
  {
    id: "sort-descending",
    icon: "⬇️",
    iconColor: "bg-purple-400",
    title: "Sort Descending",
    description:
      "Sort your data in descending order (Z-A, largest to smallest) based on the selected column.",
    steps: [
      {
        number: 1,
        title: "Right-click and select Sort Descending",
        description:
          'Right-click on the column header you want to sort and select "Sort Descending". The grid data will be reordered from highest to lowest value.',
      },
    ],
  },
  {
    id: "clear-sorting",
    icon: "🚫",
    iconColor: "bg-red-500",
    title: "Clear Sorting",
    description:
      "Remove all applied sorting to restore the grid to its default order.",
    steps: [
      {
        number: 1,
        title: "Right-click and select Clear Sorting",
        description:
          'Right-click on any column header and select "Clear Sorting" to remove all sorting rules and return to the default data order.',
      },
    ],
  },
  {
    id: "export",
    icon: "📤",
    iconColor: "bg-cyan-500",
    title: "Export",
    badge: "Popular",
    badgeColor: "bg-cyan-100 text-cyan-700",
    description:
      "Export your grid data to external file formats such as Excel or PDF for reporting, sharing, or offline analysis.",
    steps: [
      {
        number: 1,
        title: "Right-click and select Export",
        description:
          'Right-click on any column header and select "Export" from the context menu.',
      },
      {
        number: 2,
        title: "Choose export format",
        description:
          "Select your desired export format (e.g., Excel, PDF). The file will be downloaded to your computer with the current grid data including any applied filters and sorting.",
      },
    ],
  },
  {
    id: "conditional-formatting",
    icon: "🎨",
    iconColor: "bg-pink-500",
    title: "Conditional Formatting",
    badge: "Advanced",
    badgeColor: "bg-pink-100 text-pink-700",
    description:
      "Apply visual rules to your grid cells to highlight data based on conditions. For example, you can highlight overdue items in red or high-value transactions in green.",
    steps: [
      {
        number: 1,
        title: "Open Conditional Formatting",
        description:
          'Right-click on a column header and select "Conditional Formatting" from the context menu.',
      },
      {
        number: 2,
        title: "Define formatting rules",
        description:
          "Set up rules by choosing a condition (e.g., greater than, equals, contains) and selecting the formatting style (background color, text color, etc.). Multiple rules can be applied to the same column.",
      },
    ],
  },
];

const topics = gridFeatures.map((f) => ({
  id: f.id,
  title: f.title,
  icon: f.icon,
}));

const faqs = [
  {
    question: "How do I access the grid context menu?",
    answer:
      "Right-click on any column header in the grid. A context menu will appear with all available grid features like Column Chooser, Search, Filter, Sort, Export, and more.",
  },
  {
    question: "Can I save my column layout preferences?",
    answer:
      "Yes, once you customize columns using the Column Chooser, your layout preferences are saved for your session. The columns will remain in your chosen order until you reset them.",
  },
  {
    question: "What file formats can I export to?",
    answer:
      "You can export grid data to Excel (.xlsx) and PDF formats. The exported file will include all visible data with any active filters and sorting applied.",
  },
  {
    question: "How do I remove all filters at once?",
    answer:
      'Click the "Toggle Filter" button again to hide the filter row and clear all active filters. Alternatively, you can clear individual column filters by removing the filter text.',
  },
  {
    question: "Can I group by multiple columns?",
    answer:
      "Yes, you can apply grouping on multiple columns. Right-click on each column header you want to group by and select Group. The data will be nested by each group level.",
  },
  {
    question: "Does sorting affect the exported data?",
    answer:
      "Yes, when you export data, it respects the current sorting order. If you have Sort Ascending applied on a column, the exported file will also be in ascending order.",
  },
  {
    question: "What is Conditional Formatting used for?",
    answer:
      "Conditional Formatting lets you apply color-coded rules to cells based on their values. For example, you can highlight negative balances in red, or mark high-value transactions in green for quick visual analysis.",
  },
  {
    question: "Are these features available in all modules?",
    answer:
      "Yes! All grid features (Column Chooser, Search, Filter, Sort, Group, Export, Conditional Formatting) are available across every module in Quick Dice ERP wherever a data grid is displayed.",
  },
];

export default function GridFeaturesPage() {
  return (
    <div className="flex gap-6 items-start">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <Breadcrumb
          items={[
            { label: "Getting Started", href: "/getting-started/grid-features" },
            { label: "Grid Features" },
          ]}
        />

        {/* Page Header - Enhanced */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-20 w-32 h-32 bg-white/5 rounded-full translate-y-1/2" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Essential Guide
              </span>
              <span className="bg-emerald-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                10 Features
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Common Grid Features</h1>
            <p className="text-slate-300 max-w-lg">
              Master the powerful grid tools available across all modules.
              Right-click on any column header to unlock these features.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[
            { label: "Features", value: "10", icon: "⚡", color: "from-blue-500 to-blue-600" },
            { label: "Modules", value: "8+", icon: "📦", color: "from-emerald-500 to-emerald-600" },
            { label: "Access", value: "Right-click", icon: "🖱️", color: "from-violet-500 to-violet-600" },
            { label: "Export", value: "Excel/PDF", icon: "📤", color: "from-amber-500 to-amber-600" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-border p-4 text-center hover:shadow-md transition-shadow"
            >
              <div
                className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-white text-lg mx-auto mb-2`}
              >
                {stat.icon}
              </div>
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Access Tip */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 mb-8">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-xl">💡</span>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Pro Tip</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                You can access all these features in two ways: (1){" "}
                <strong>Right-click</strong> on any column header in the grid, or
                (2) use the <strong>toolbar buttons</strong> above the grid for
                quick access to Search, Group, Toggle Filter, and Column Chooser.
              </p>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-6">
          {gridFeatures.map((feature, index) => (
            <section
              key={feature.id}
              id={feature.id}
              className="bg-white rounded-xl border border-border overflow-hidden scroll-mt-24 hover:shadow-lg hover:border-slate-200 transition-all duration-300"
            >
              {/* Feature Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center gap-3 mb-1">
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`w-11 h-11 ${feature.iconColor} rounded-xl flex items-center justify-center text-white text-lg shadow-sm`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-foreground">
                          {feature.title}
                        </h2>
                        {feature.badge && (
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${feature.badgeColor}`}
                          >
                            {feature.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-300 font-mono">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-sm text-slate-500 mb-5 leading-relaxed ml-14">
                  {feature.description}
                </p>
              </div>

              {/* Steps */}
              <div className="bg-gradient-to-b from-slate-50 to-slate-50/50 px-6 py-5 border-t border-slate-100">
                <h3 className="text-[11px] font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  How to Use
                </h3>
                <StepGuide steps={feature.steps} />
              </div>
            </section>
          ))}
        </div>

        {/* Toolbar Quick Actions - Enhanced */}
        <section className="mt-8 bg-white rounded-xl border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5 text-white">
            <h2 className="text-lg font-bold mb-1">Toolbar Quick Actions</h2>
            <p className="text-sm text-indigo-100">
              Direct access buttons available above every grid — no right-click needed
            </p>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🖨️",
                  title: "Print",
                  desc: "Print the current grid view directly",
                  color: "bg-gray-50 border-gray-200 hover:bg-gray-100",
                },
                {
                  icon: "💚",
                  title: "Add Receipt",
                  desc: "Create a new receipt entry",
                  color: "bg-green-50 border-green-200 hover:bg-green-100",
                },
                {
                  icon: "💙",
                  title: "Add Payment",
                  desc: "Create a new payment entry",
                  color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
                },
                {
                  icon: "📄",
                  title: "Other Vouchers",
                  desc: "Access journal and other voucher types",
                  color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
                },
                {
                  icon: "📊",
                  title: "Report",
                  desc: "Generate detailed reports from grid data",
                  color: "bg-red-50 border-red-200 hover:bg-red-100",
                },
                {
                  icon: "📅",
                  title: "Date Range Filter",
                  desc: "Filter records by Start Date and End Date",
                  color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
                },
                {
                  icon: "📐",
                  title: "Layout",
                  desc: "Change the grid layout view",
                  color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
                },
                {
                  icon: "↕️",
                  title: "Set Row Height",
                  desc: "Adjust the height of grid rows",
                  color: "bg-teal-50 border-teal-200 hover:bg-teal-100",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`${item.color} border rounded-xl p-4 flex items-center gap-3 transition-colors cursor-default`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Right Sidebar */}
      <RightSidebar topics={topics} faqs={faqs} />
    </div>
  );
}

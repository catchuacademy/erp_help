import ModulePage from "@/components/ModulePage";

export default function FinancePage() {
  return (
    <ModulePage
      name="Finance"
      code="FIN"
      icon="💰"
      color="bg-gradient-to-br from-emerald-500 to-emerald-700"
      description="Manage your complete financial operations including accounting ledgers, receipts, payments, vouchers, and comprehensive financial reporting."
      features={[
        {
          title: "Accounting Ledgers",
          icon: "📒",
          description:
            "View and manage all account ledgers with balance, debit, and credit summaries. Filter by date range, search across ledgers, and customize column visibility using the Column Chooser.",
        },
        {
          title: "Add Receipt",
          icon: "💚",
          description:
            "Create new receipt entries to record incoming payments. Track payment methods, reference numbers, and link to specific accounts.",
        },
        {
          title: "Add Payment",
          icon: "💙",
          description:
            "Record outgoing payments with full details including payee, amount, payment mode, and narration for complete audit trails.",
        },
        {
          title: "Other Vouchers",
          icon: "📄",
          description:
            "Create journal vouchers, contra entries, and other specialized voucher types for non-standard financial transactions.",
        },
        {
          title: "Financial Reports",
          icon: "📊",
          description:
            "Generate comprehensive financial reports including trial balance, profit & loss, balance sheet, and custom reports with date range filtering.",
        },
        {
          title: "Print & Export",
          icon: "🖨️",
          description:
            "Print ledger views directly or export financial data to Excel/PDF for external reporting and record-keeping.",
        },
      ]}
    />
  );
}

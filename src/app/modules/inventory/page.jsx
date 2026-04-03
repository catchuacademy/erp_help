import ModulePage from "@/components/ModulePage";

export default function InventoryPage() {
  return (
    <ModulePage
      name="Inventory Management"
      code="IMS"
      icon="📦"
      color="bg-gradient-to-br from-cyan-500 to-cyan-700"
      description="Full inventory control with stock tracking, warehouse management, item categorization, and real-time inventory reporting."
      features={[
        {
          title: "Stock Management",
          icon: "📦",
          description:
            "Track stock levels, movements, and valuations across multiple warehouses and locations.",
        },
        {
          title: "Item Master",
          icon: "🏷️",
          description:
            "Maintain a comprehensive item database with categories, units of measure, pricing, and specifications.",
        },
        {
          title: "Stock Transfers",
          icon: "🔄",
          description:
            "Manage inter-warehouse transfers with full traceability and documentation.",
        },
        {
          title: "Inventory Reports",
          icon: "📊",
          description:
            "Generate stock aging, valuation, movement, and reorder reports for informed decision-making.",
        },
      ]}
    />
  );
}

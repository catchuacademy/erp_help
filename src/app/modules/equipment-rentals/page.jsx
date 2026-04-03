import ModulePage from "@/components/ModulePage";

export default function EquipmentRentalsPage() {
  return (
    <ModulePage
      name="Equipment Rentals"
      code="EQP"
      icon="🏗️"
      color="bg-gradient-to-br from-amber-500 to-amber-700"
      description="Manage equipment rental operations including asset tracking, rental agreements, billing cycles, and equipment availability."
      features={[
        {
          title: "Equipment Registry",
          icon: "🔧",
          description:
            "Maintain a complete register of all equipment with details, condition, and availability status.",
        },
        {
          title: "Rental Agreements",
          icon: "📝",
          description:
            "Create and manage rental contracts with terms, rates, duration, and client details.",
        },
        {
          title: "Billing Management",
          icon: "💰",
          description:
            "Automated billing based on rental periods, usage, and agreed rates with invoice generation.",
        },
        {
          title: "Availability Tracking",
          icon: "📅",
          description:
            "Real-time equipment availability tracking to prevent double-booking and optimize utilization.",
        },
      ]}
    />
  );
}

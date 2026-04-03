import ModulePage from "@/components/ModulePage";

export default function WorkOrderPage() {
  return (
    <ModulePage
      name="Work Order Management"
      code="WOMS"
      icon="🔧"
      color="bg-gradient-to-br from-rose-500 to-rose-700"
      description="Create, assign, track, and manage work orders through their complete lifecycle from request to completion."
      features={[
        {
          title: "Work Order Creation",
          icon: "📝",
          description:
            "Create work orders with detailed descriptions, priority levels, required resources, and estimated timelines.",
        },
        {
          title: "Assignment & Scheduling",
          icon: "📅",
          description:
            "Assign work orders to teams or individuals with scheduling, priority management, and deadline tracking.",
        },
        {
          title: "Progress Tracking",
          icon: "📊",
          description:
            "Monitor work order status, progress updates, and completion rates in real-time.",
        },
        {
          title: "Completion & Sign-off",
          icon: "✅",
          description:
            "Record work completion with sign-off workflows, quality checks, and documentation.",
        },
      ]}
    />
  );
}

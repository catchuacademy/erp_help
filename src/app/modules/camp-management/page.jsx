import ModulePage from "@/components/ModulePage";

export default function CampManagementPage() {
  return (
    <ModulePage
      name="Camp Management"
      code="CAMP"
      icon="🏕️"
      color="bg-gradient-to-br from-teal-500 to-teal-700"
      description="Manage accommodation facilities, room allocation, occupant tracking, and camp operations for workforce housing."
      features={[
        {
          title: "Room Management",
          icon: "🏠",
          description:
            "Manage rooms, beds, and facilities across multiple camp locations with occupancy tracking.",
        },
        {
          title: "Occupant Allocation",
          icon: "🧑‍🤝‍🧑",
          description:
            "Allocate employees to rooms based on availability, department, and preferences.",
        },
        {
          title: "Facility Maintenance",
          icon: "🔧",
          description:
            "Track maintenance requests, schedules, and facility condition reports.",
        },
        {
          title: "Camp Reports",
          icon: "📊",
          description:
            "Generate occupancy reports, vacancy summaries, and facility utilization analytics.",
        },
      ]}
    />
  );
}

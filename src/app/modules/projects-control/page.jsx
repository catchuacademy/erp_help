import ModulePage from "@/components/ModulePage";

export default function ProjectsControlPage() {
  return (
    <ModulePage
      name="Projects Control"
      code="PRJ"
      icon="📋"
      color="bg-gradient-to-br from-indigo-500 to-indigo-700"
      description="Track project progress, manage costs, allocate resources, and monitor milestones for complete project visibility."
      features={[
        {
          title: "Project Dashboard",
          icon: "📊",
          description:
            "Overview of all projects with status, budget utilization, and timeline tracking at a glance.",
        },
        {
          title: "Cost Management",
          icon: "💰",
          description:
            "Track project costs, budgets, and variances with detailed cost breakdown structures.",
        },
        {
          title: "Resource Allocation",
          icon: "👥",
          description:
            "Assign and manage resources across projects to optimize utilization and avoid conflicts.",
        },
        {
          title: "Milestone Tracking",
          icon: "🎯",
          description:
            "Define and track project milestones with progress indicators and deadline management.",
        },
      ]}
    />
  );
}

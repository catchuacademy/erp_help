import ModulePage from "@/components/ModulePage";

export default function HRMSPage() {
  return (
    <ModulePage
      name="Human Resources"
      code="HRMS"
      icon="👥"
      color="bg-gradient-to-br from-violet-500 to-violet-700"
      description="Complete HR management including employee records, payroll processing, attendance tracking, leave management, and HR analytics."
      features={[
        {
          title: "Employee Management",
          icon: "🧑‍💼",
          description:
            "Maintain comprehensive employee profiles including personal details, job information, documents, and employment history.",
        },
        {
          title: "Payroll Processing",
          icon: "💵",
          description:
            "Automated payroll calculation with support for allowances, deductions, overtime, and statutory compliance.",
        },
        {
          title: "Attendance Tracking",
          icon: "📅",
          description:
            "Track employee attendance, working hours, overtime, and generate attendance reports.",
        },
        {
          title: "Leave Management",
          icon: "🏖️",
          description:
            "Manage leave applications, approvals, balances, and leave types with automated calculations.",
        },
        {
          title: "HR Reports",
          icon: "📊",
          description:
            "Generate comprehensive HR reports including headcount, turnover, payroll summaries, and more.",
        },
      ]}
    />
  );
}

import ModulePage from "@/components/ModulePage";

export default function VATPage() {
  return (
    <ModulePage
      name="VAT Modules"
      code="VAT"
      icon="🧾"
      color="bg-gradient-to-br from-orange-500 to-orange-700"
      description="Handle VAT compliance, tax calculations, returns filing, and comprehensive tax reporting aligned with regulatory requirements."
      features={[
        {
          title: "VAT Calculation",
          icon: "🧮",
          description:
            "Automated VAT calculations on transactions with support for multiple tax rates and exemptions.",
        },
        {
          title: "VAT Returns",
          icon: "📋",
          description:
            "Prepare and file VAT returns with automated data aggregation from all financial transactions.",
        },
        {
          title: "Tax Reports",
          icon: "📊",
          description:
            "Generate detailed tax reports for compliance, audit, and management review purposes.",
        },
        {
          title: "Input/Output VAT",
          icon: "🔄",
          description:
            "Track input and output VAT separately for accurate tax credit calculations and liability management.",
        },
      ]}
    />
  );
}

import Breadcrumb from "@/components/Breadcrumb";

export default function ModulePage({
  name,
  code,
  icon,
  color,
  description,
  features,
}) {
  return (
    <div className="max-w-4xl">
      <Breadcrumb
        items={[
          { label: "Modules" },
          { label: name },
        ]}
      />

      {/* Module Header */}
      <div className={`${color} rounded-2xl p-8 mb-8 text-white`}>
        <div className="flex items-center gap-4 mb-3">
          <span className="text-4xl">{icon}</span>
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <span className="text-sm bg-white/20 px-2 py-0.5 rounded font-mono">
              {code}
            </span>
          </div>
        </div>
        <p className="text-white/90 max-w-xl">{description}</p>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-foreground mb-4">Key Features</h2>
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">{feature.icon}</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Note */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
        <div className="flex gap-3">
          <span className="text-xl">🚧</span>
          <div>
            <h3 className="font-semibold text-amber-900 mb-1">
              More Details Coming Soon
            </h3>
            <p className="text-sm text-amber-700">
              Detailed step-by-step guides with screenshots for each feature in
              the {name} module will be added soon. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StepGuide({ steps }) {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex gap-4">
          {/* Step number line */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
              {step.number}
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed mb-3">
              {step.description}
            </p>
            {step.screenshot && (
              <div className="rounded-lg border border-border overflow-hidden shadow-sm">
                <img
                  src={step.screenshot}
                  alt={step.title}
                  className="w-full"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

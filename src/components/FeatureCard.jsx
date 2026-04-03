import Link from "next/link";

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  color = "bg-primary",
}) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      <div
        className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </Link>
  );
}

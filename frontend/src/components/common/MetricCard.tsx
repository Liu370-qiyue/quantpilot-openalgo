type MetricCardProps = {
  label: string
  value: string
  desc: string
}

export default function MetricCard({ label, value, desc }: MetricCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
    </div>
  )
}
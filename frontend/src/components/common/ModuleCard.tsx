import { Link } from 'react-router-dom'

type ModuleCardProps = {
  title: string
  desc: string
  href: string
}

export default function ModuleCard({ title, desc, href }: ModuleCardProps) {
  return (
    <Link
      to={href}
      className="rounded-xl border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </Link>
  )
}
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  {
    name: '控制台',
    path: '/quantpilot',
  },
  {
    name: '策略实验室',
    path: '/quantpilot/strategy-lab',
  },
  {
    name: '回测中心',
    path: '/quantpilot/backtest-center',
  },
  {
    name: 'AI Agent',
    path: '/quantpilot/agent-console',
  },
  {
    name: '风控中心',
    path: '/quantpilot/risk-center',
  },
]

export default function QuantPilotSidebar() {
  const location = useLocation()

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold">QuantPilot</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          AI Quant Platform
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navigation.map((item) => {
          const active = location.pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all ${
                active
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
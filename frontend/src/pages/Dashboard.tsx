import type { ReactNode } from 'react'

type MetricTone = 'positive' | 'negative' | 'neutral' | 'warning'
type StatusTone = 'green' | 'amber' | 'red' | 'slate'

type Metric = {
  label: string
  value: string
  change: string
  tone: MetricTone
}

type AccountStatus = {
  label: string
  value: string
  tone: StatusTone
}

const metrics: Metric[] = [
  { label: '总管理资产', value: '¥8.42B', change: '+2.18%', tone: 'positive' },
  { label: '累计收益', value: '+31.76%', change: '+184.2M', tone: 'positive' },
  { label: '今日收益', value: '+¥6.83M', change: '+0.42%', tone: 'positive' },
  { label: '当前风险等级', value: 'Level 2', change: '可控', tone: 'warning' },
]

const accountStatuses: AccountStatus[] = [
  { label: '总账户数', value: '128', tone: 'slate' },
  { label: '正常运行账户', value: '116', tone: 'green' },
  { label: '风险预警账户', value: '7', tone: 'amber' },
  { label: '异常告警账户', value: '3', tone: 'red' },
  { label: '离线账户', value: '2', tone: 'slate' },
]

const strategyRows = [
  ['Alpha Neutral CN', '运行中', '+0.37%', '62%'],
  ['Index Arb Basket', '运行中', '+0.11%', '58%'],
  ['CTA Intraday', '降频', '-0.08%', '51%'],
  ['Volatility Carry', '观察', '+0.04%', '55%'],
]

const agentBriefs = [
  ['Risk Agent', '3 个账户接近敞口阈值', '审慎'],
  ['Market Agent', '盘口冲击成本下降 8.6%', '积极'],
  ['Execution Agent', '套利队列延迟稳定在 42ms', '正常'],
]

const equityCurve = [
  28, 32, 31, 38, 42, 39, 47, 54, 52, 61, 64, 62, 70, 76, 80, 78, 84, 88,
]

const allocations = [
  { name: '股票多因子', value: '34%', width: '34%', color: 'bg-blue-500' },
  { name: '指数套利', value: '26%', width: '26%', color: 'bg-cyan-500' },
  { name: 'CTA 趋势', value: '18%', width: '18%', color: 'bg-emerald-500' },
  { name: '期权波动率', value: '14%', width: '14%', color: 'bg-amber-500' },
  { name: '现金保证金', value: '8%', width: '8%', color: 'bg-slate-400' },
]

const backtests = [
  ['14:20', 'Alpha Neutral CN v4.8', '+18.4%', '-4.9%'],
  ['11:05', 'CTA Intraday v2.1', '+11.7%', '-6.1%'],
  ['05-24', 'Index Arb Basket v3.3', '+9.6%', '-2.8%'],
]

const riskAlerts = [
  ['单策略敞口', '61%', '正常'],
  ['组合回撤', '-5.4%', '观察'],
  ['保证金占用', '48%', '正常'],
]

const quickActions = ['新建策略', '组合回测', '风险预警', '同步账户']

const toneMap: Record<MetricTone, string> = {
  positive: 'text-emerald-600 bg-emerald-50',
  negative: 'text-rose-600 bg-rose-50',
  neutral: 'text-slate-600 bg-slate-100',
  warning: 'text-amber-600 bg-amber-50',
}

const statusToneMap: Record<StatusTone, string> = {
  green: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  amber: 'border-amber-200 bg-amber-50 text-amber-700',
  red: 'border-rose-200 bg-rose-50 text-rose-700',
  slate: 'border-slate-200 bg-slate-50 text-slate-700',
}

const dotMap: Record<StatusTone, string> = {
  green: 'bg-emerald-500',
  amber: 'bg-amber-500',
  red: 'bg-rose-500',
  slate: 'bg-slate-400',
}

function Panel({
  title,
  eyebrow,
  children,
  className = '',
}: {
  title: string
  eyebrow?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={`rounded-lg border border-slate-200 bg-white p-3 shadow-sm ${className}`}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <div>
          {eyebrow ? (
            <p className="text-[10px] font-semibold uppercase text-blue-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
        </div>
        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
          Live
        </span>
      </div>
      {children}
    </section>
  )
}

function MiniTrend({ tone }: { tone: MetricTone }) {
  const color = tone === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
  const bars = [30, 42, 36, 55, 49, 68, 62]

  return (
    <div className="flex h-8 items-end gap-1">
      {bars.map((height, index) => (
        <span
          className={`w-1 rounded-full ${color}`}
          key={`${height}-${index}`}
          style={{ height: `${height}%`, opacity: index < 2 ? 0.4 : 0.8 }}
        />
      ))}
    </div>
  )
}

function MetricCard({ item }: { item: Metric }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-medium text-slate-500">{item.label}</p>
          <p className="mt-1 text-xl font-semibold text-slate-950">{item.value}</p>
        </div>
        <MiniTrend tone={item.tone} />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className={`rounded-full px-2 py-0.5 text-[11px] ${toneMap[item.tone]}`}>
          {item.change}
        </span>
        <span className="text-[11px] text-slate-400">较昨日</span>
      </div>
    </div>
  )
}

function Dashboard() {
  const currentTime = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-3 text-slate-900">
      <div className="mx-auto max-w-[1500px] space-y-3">
        <header className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase text-blue-600">
                QuantPilot Asset Management
              </p>
              <h1 className="mt-1 text-2xl font-semibold text-slate-950">
                Dashboard
              </h1>
            </div>

            <div className="grid gap-2 md:grid-cols-[minmax(240px,360px)_170px_210px]">
              <label className="flex h-9 items-center rounded-md border border-slate-200 bg-slate-50 px-3">
                <span className="mr-2 text-[11px] font-medium text-slate-400">
                  搜索
                </span>
                <input
                  className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  placeholder="策略、账户、资产代码"
                />
              </label>

              <select className="h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none">
                <option>全部账户</option>
                <option>核心资管账户</option>
                <option>套利账户组</option>
                <option>实盘观察账户</option>
              </select>

              <div className="flex h-9 items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 text-sm">
                <span className="text-[11px] font-medium text-slate-400">
                  当前时间
                </span>
                <span className="font-medium text-slate-700">{currentTime}</span>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <MetricCard key={item.label} item={item} />
          ))}
        </section>

        <section className="grid gap-3 xl:grid-cols-[0.95fr_1.15fr_0.9fr]">
          <Panel title="云端账户监控" eyebrow="Cloud Accounts">
            <div className="grid grid-cols-[92px_1fr] gap-3">
              <div className="flex items-center justify-center">
                <div className="relative h-20 w-20 rounded-full border-[10px] border-blue-100">
                  <div className="absolute inset-[-10px] rounded-full border-[10px] border-blue-500 border-b-transparent border-r-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-semibold text-slate-950">91%</span>
                    <span className="text-[10px] text-slate-500">在线</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {accountStatuses.map((item) => (
                  <div
                    className={`rounded-md border px-2 py-1.5 ${statusToneMap[item.tone]}`}
                    key={item.label}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${dotMap[item.tone]}`} />
                      <span className="truncate text-[11px]">{item.label}</span>
                    </div>
                    <p className="mt-0.5 text-base font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          <Panel title="策略运行状态" eyebrow="Strategy Runtime">
            <div className="overflow-hidden rounded-md border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-[11px] text-slate-500">
                  <tr>
                    <th className="px-3 py-1.5 font-medium">策略名</th>
                    <th className="px-3 py-1.5 font-medium">状态</th>
                    <th className="px-3 py-1.5 font-medium">今日收益</th>
                    <th className="px-3 py-1.5 font-medium">胜率</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {strategyRows.map((row) => (
                    <tr key={row[0]}>
                      <td className="px-3 py-2 font-medium text-slate-900">{row[0]}</td>
                      <td className="px-3 py-2 text-blue-600">{row[1]}</td>
                      <td
                        className={`px-3 py-2 font-semibold ${
                          row[2].startsWith('+') ? 'text-emerald-600' : 'text-rose-600'
                        }`}
                      >
                        {row[2]}
                      </td>
                      <td className="px-3 py-2 text-slate-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>

          <Panel title="AI Agent 简报" eyebrow="Agent Briefing">
            <div className="space-y-2">
              {agentBriefs.map(([name, brief, status]) => (
                <div
                  className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-slate-50 px-3 py-2"
                  key={name}
                >
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-900">{name}</p>
                    <p className="truncate text-[11px] text-slate-500">{brief}</p>
                  </div>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-700">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <section className="grid gap-3 xl:grid-cols-[1.25fr_0.75fr_0.7fr]">
          <Panel title="资产曲线" eyebrow="Portfolio Equity">
            <div className="h-44 rounded-md border border-slate-200 bg-gradient-to-b from-blue-50 to-white p-3">
              <div className="flex h-full items-end gap-1.5">
                {equityCurve.map((value, index) => (
                  <div className="flex flex-1 flex-col justify-end" key={index}>
                    <div
                      className="rounded-t-sm bg-blue-500/80"
                      style={{ height: `${value}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 grid grid-cols-4 gap-2 text-[11px]">
              <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
                年化 <b className="text-slate-900">21.8%</b>
              </span>
              <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
                回撤 <b className="text-rose-600">-5.4%</b>
              </span>
              <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
                Sharpe <b className="text-slate-900">1.86</b>
              </span>
              <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
                胜率 <b className="text-slate-900">58.2%</b>
              </span>
            </div>
          </Panel>

          <Panel title="账户资金分布" eyebrow="Capital Allocation">
            <div className="space-y-2.5">
              {allocations.map((item) => (
                <div key={item.name}>
                  <div className="mb-1 flex justify-between text-[11px]">
                    <span className="text-slate-600">{item.name}</span>
                    <span className="font-medium text-slate-900">{item.value}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="风险提醒" eyebrow="Risk Alerts">
            <div className="space-y-2">
              {riskAlerts.map(([label, value, status]) => (
                <div
                  className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 text-xs"
                  key={label}
                >
                  <span className="text-slate-600">{label}</span>
                  <span className="font-semibold text-slate-900">{value}</span>
                  <span className="text-blue-600">{status}</span>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <section className="grid gap-3 xl:grid-cols-[1.35fr_0.65fr]">
          <Panel title="最近回测记录" eyebrow="Recent Backtests">
            <div className="overflow-hidden rounded-md border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-[11px] text-slate-500">
                  <tr>
                    <th className="px-3 py-1.5 font-medium">时间</th>
                    <th className="px-3 py-1.5 font-medium">策略</th>
                    <th className="px-3 py-1.5 font-medium">收益</th>
                    <th className="px-3 py-1.5 font-medium">回撤</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {backtests.map((row) => (
                    <tr key={`${row[0]}-${row[1]}`}>
                      <td className="px-3 py-2 text-slate-500">{row[0]}</td>
                      <td className="px-3 py-2 font-medium text-slate-900">{row[1]}</td>
                      <td className="px-3 py-2 font-semibold text-emerald-600">
                        {row[2]}
                      </td>
                      <td className="px-3 py-2 font-semibold text-rose-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>

          <Panel title="快捷操作" eyebrow="Operations">
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <button
                  className="rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                  key={action}
                  type="button"
                >
                  {action}
                </button>
              ))}
            </div>
          </Panel>
        </section>
      </div>
    </main>
  )
}

export default Dashboard

import { Link } from 'react-router-dom'

const modules = [
  {
    title: '策略实验室',
    desc: '创建、编辑、测试和管理量化策略',
    href: '/quantpilot/strategy-lab',
  },
  {
    title: '回测中心',
    desc: '运行历史回测，查看收益曲线和风险指标',
    href: '/quantpilot/backtest-center',
  },
  {
    title: 'AI Agent 控制台',
    desc: '查看感知、认知、决策、执行和反思流程',
    href: '/quantpilot/agent-console',
  },
  {
    title: '风控中心',
    desc: '监控仓位、回撤、异常信号和系统风险',
    href: '/quantpilot/risk-center',
  },
]

const metrics = [
  {
    label: '市场状态',
    value: '观察中',
    desc: '等待接入行情数据',
  },
  {
    label: '策略运行',
    value: '待启动',
    desc: '暂无运行中策略',
  },
  {
    label: '风险等级',
    value: '中性',
    desc: '暂无异常风险',
  },
  {
    label: '今日收益',
    value: '--',
    desc: '等待账户数据',
  },
]

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">QuantPilot</p>

          <h1 className="mt-2 text-3xl font-bold">
            量化交易控制台
          </h1>

          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            集成策略研究、回测分析、AI Agent 决策和风险监控的量化开发平台。
            当前阶段优先完成首页框架，并为后续各功能板块预留入口。
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border bg-card p-5 shadow-sm"
            >
              <p className="text-sm text-muted-foreground">
                {item.label}
              </p>

              <p className="mt-2 text-2xl font-semibold">
                {item.value}
              </p>

              <p className="mt-2 text-xs text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold">
              核心功能板块
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              先建立页面结构和跳转关系，后续逐步接入真实数据和功能逻辑。
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {modules.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-xl border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">
              今日市场观察
            </h2>

            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>🔥 热门板块：等待接入行情数据</p>
              <p>💸 主力资金：等待接入资金流数据</p>
              <p>📈 市场情绪：等待接入情绪指标</p>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">
              最近任务
            </h2>

            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>暂无策略任务</p>
              <p>暂无回测记录</p>
              <p>暂无风险提醒</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
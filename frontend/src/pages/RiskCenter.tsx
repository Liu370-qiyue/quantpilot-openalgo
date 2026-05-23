export default function RiskCenter() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">
            QuantPilot / Risk
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            风控中心
          </h1>

          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            用于监控仓位风险、回撤风险、策略异常和市场风险。
            当前页面先作为板块占位，后续会接入账户风险、策略风险和市场风险预警。
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">仓位风险</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留总仓位、单票仓位、行业集中度和杠杆风险监控。
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">回撤风险</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留账户回撤、策略回撤、连续亏损和止损提醒。
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">异常预警</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留高波动、流动性异常、策略失效和市场退潮信号。
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
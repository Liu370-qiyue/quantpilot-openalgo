export default function AgentConsole() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">
            QuantPilot / AI Agent
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            AI Agent 控制台
          </h1>

          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            用于查看量化智能体的感知、认知、决策、执行和反思流程。
            当前页面先作为板块占位，后续会接入 Agent 状态、任务日志和自动分析结果。
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">感知层</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留行情数据、新闻事件、资金流和板块热度感知入口。
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">决策层</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留策略信号、交易建议、仓位判断和机会筛选功能。
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">反思层</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留交易复盘、策略表现评估和系统优化建议。
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
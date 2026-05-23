export default function StrategyLab() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">
            QuantPilot / Strategy
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            策略实验室
          </h1>

          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            用于创建、编辑、测试和管理量化策略。当前页面先作为板块占位，
            后续会接入策略列表、策略编辑器、参数配置和策略评分功能。
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">策略创建</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留策略模板、新建策略、因子条件配置入口。
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">策略管理</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留策略列表、启停状态、版本管理入口。
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">策略评分</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留收益、回撤、胜率、稳定性等综合评分。
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
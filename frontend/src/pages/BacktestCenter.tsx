export default function BacktestCenter() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">
            QuantPilot / Backtest
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            回测中心
          </h1>

          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            用于运行策略历史回测、查看收益曲线、风险指标和历史回测记录。
            当前页面先作为板块占位，后续会接入回测任务、回测进度和结果分析。
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">回测任务</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留策略选择、时间区间、股票池、初始资金等配置入口。
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">收益分析</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留收益曲线、最大回撤、夏普比率、胜率等指标展示。
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">历史记录</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              预留历史回测任务、参数版本和结果对比功能。
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
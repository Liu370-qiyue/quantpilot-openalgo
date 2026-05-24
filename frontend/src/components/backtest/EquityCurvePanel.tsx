export function EquityCurvePanel() {
  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">完整收益曲线</h2>

          <p className="text-sm text-muted-foreground">
            Equity Curve / PnL / Drawdown 将在这里展示。
          </p>
        </div>
      </div>

      <div className="mt-6 h-80 rounded-xl border border-dashed" />
    </section>
  )
}
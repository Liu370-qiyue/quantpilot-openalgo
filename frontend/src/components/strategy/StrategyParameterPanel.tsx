interface StrategyParameterPanelProps {
    onRunBacktest: () => void
}

export function StrategyParameterPanel({ onRunBacktest }: StrategyParameterPanelProps) {
    return (
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <div>
                <h2 className="text-xl font-semibold">策略参数配置</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                    配置回测周期、初始资金、标的范围和风险限制，参数将提交给回测中心执行。
                </p>
            </div>

            <div className="mt-6 flex justify-end">
                <button
                    onClick={onRunBacktest}
                    className="rounded-xl bg-black px-5 py-2 text-sm font-medium text-white"
                >
                    运行回测
                </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">回测周期</p>
                    <p className="mt-2 font-semibold">2024-01-01 至 2024-12-31</p>
                </div>

                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">初始资金</p>
                    <p className="mt-2 font-semibold">1,000,000</p>
                </div>

                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">标的范围</p>
                    <p className="mt-2 font-semibold">A股 / 科技成长</p>
                </div>

                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">最大回撤限制</p>
                    <p className="mt-2 font-semibold text-red-500">10%</p>
                </div>
            </div>
        </section>
    )
}
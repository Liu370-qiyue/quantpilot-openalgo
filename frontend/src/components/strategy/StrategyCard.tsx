import type { QuantStrategy } from '../../types/quantStrategy'

type StrategyCardProps = {
    strategy: QuantStrategy
    onDelete: (id: string) => void
}

export function StrategyCard({
    strategy,
    onDelete,
}: StrategyCardProps) {
    return (
        <div className="flex items-center justify-between rounded-xl border p-4">
            <div>
                <h3 className="font-semibold">
                    {strategy.name}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                    风险等级：{strategy.risk}
                </p>
            </div>

            <div className="text-right">
                <p
                    className={`text-sm font-medium ${strategy.status === '运行中'
                        ? 'text-green-600'
                        : 'text-yellow-600'
                        }`}
                >
                    {strategy.status}
                </p>

                <p className="mt-1 text-lg font-bold text-green-600">
                    {strategy.returnRate}
                </p>
                <button
                    onClick={() => {
                        const confirmed = window.confirm(
                            `确认删除策略「${strategy.name}」吗？`,
                        )

                        if (!confirmed) return

                        onDelete(strategy.id)
                    }}
                    className="mt-2 text-sm text-red-500"
                >
                    删除
                </button>            </div>
        </div>
    )
}
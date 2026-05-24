import type { QuantStrategy } from '../../types/quantStrategy'
import { StrategyCard } from './StrategyCard'

interface StrategyListProps {
    running: boolean
    strategies: QuantStrategy[]
    onDeleteStrategy: (id: string) => void
}

export function StrategyList({
    running,
    strategies,
    onDeleteStrategy,
}: StrategyListProps) {

    return (
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold">策略列表</h2>

                    <p className="text-sm text-muted-foreground">
                        当前已创建的量化策略
                    </p>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                {strategies.length === 0 && (
                    <div className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
                        暂无策略，请点击“新建策略”创建第一条策略。
                    </div>
                )}

                {strategies.map((strategy) => (<StrategyCard
                    key={strategy.id}
                    strategy={{
                        ...strategy,
                        status: running ? '运行中' : '已停止',
                    }}
                    onDelete={onDeleteStrategy}
                />))}
            </div>
        </section>
    )
}
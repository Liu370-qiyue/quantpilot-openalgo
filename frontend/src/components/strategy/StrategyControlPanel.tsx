interface StrategyControlPanelProps {
    running: boolean
    setRunning: (value: boolean) => void
    onCreateStrategy: () => void
}

export function StrategyControlPanel({
    running,
    setRunning,
    onCreateStrategy,
}: StrategyControlPanelProps) {

    return (
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold">
                        策略控制台
                    </h2>

                    <p className="text-sm text-muted-foreground mt-1">
                        用于启动、暂停、创建和调度量化策略。
                    </p>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={onCreateStrategy}
                        className="rounded-xl bg-black px-4 py-2 text-sm text-white"
                    >
                        新建策略
                    </button>
                    <button
                        onClick={() => setRunning(true)}
                        className="rounded-xl border px-4 py-2 text-sm"
                    >
                        启动全部
                    </button>

                    <button
                        onClick={() => setRunning(false)}
                        className="rounded-xl border px-4 py-2 text-sm"
                    >
                        停止全部
                    </button>
                </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">
                        当前状态
                    </p>

                    <h3
                        className={`mt-2 text-2xl font-bold ${running
                            ? 'text-green-600'
                            : 'text-red-500'
                            }`}
                    >
                        {running ? '运行中' : '已停止'}
                    </h3>
                </div>

                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">
                        活跃策略
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                        5
                    </h3>
                </div>

                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">
                        风险限制
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-red-500">
                        正常
                    </h3>
                </div>
            </div>
        </section>
    )
}
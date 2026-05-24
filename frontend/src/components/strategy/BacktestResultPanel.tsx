import { mockBacktestResult } from '../../data/mockBacktestResult'
import { useNavigate } from 'react-router-dom'

interface BacktestResultPanelProps {
    status: 'idle' | 'running' | 'completed'
}

export function BacktestResultPanel({
    status,
}: BacktestResultPanelProps) {
    const navigate = useNavigate()
    return (
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold">最近回测摘要</h2>
                    <p className="text-sm text-muted-foreground">
                        {status === 'running'
                            ? '回测任务运行中，正在等待结果。'
                            : status === 'completed'
                                ? '回测已完成，当前展示最新一次模拟结果。'
                                : '展示最近一次回测的核心指标，完整分析请前往回测中心。'}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <span
                        className={`rounded-full px-3 py-1 text-sm ${status === 'running'
                            ? 'bg-yellow-100 text-yellow-700'
                            : status === 'completed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                    >
                        {status === 'running'
                            ? '回测运行中'
                            : status === 'completed'
                                ? '回测已完成'
                                : '等待回测'}
                    </span>

                    <button
                        onClick={() => navigate('/quantpilot/backtest-center?taskId=bt-001')} className="rounded-xl border px-4 py-2 text-sm"
                    >
                        查看完整回测结果
                    </button>                </div>            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">
                        年化收益
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-green-600">
                        {mockBacktestResult.annualReturn}
                    </h3>
                </div>

                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">
                        Sharpe Ratio
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                        {mockBacktestResult.sharpeRatio}
                    </h3>
                </div>

                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">
                        胜率
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                        {mockBacktestResult.winRate}
                    </h3>
                </div>

                <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">
                        总交易次数
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                        {mockBacktestResult.totalTrades}
                    </h3>
                </div>
            </div>

            <div className="mt-6 rounded-2xl border p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold">
                            最近收益走势预览
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            Equity Curve Preview
                        </p>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        完整图表将在回测中心展示
                    </p>
                </div>

                <div className="mt-6 h-64 rounded-xl border border-dashed" />
            </div>
        </section>
    )
}
import { EquityCurvePanel } from '../components/backtest/EquityCurvePanel'
import { BacktestSummaryCards } from '../components/backtest/BacktestSummaryCards'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TradeRecordPanel } from '../components/backtest/TradeRecordPanel'

export default function BacktestCenter() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const taskId = searchParams.get('taskId')

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
            用于执行历史回测、查看收益曲线、分析风险指标和导出完整回测报告。
            策略实验室负责生成策略配置，回测中心负责执行与分析结果。
          </p>
          {taskId && (
            <p className="mt-3 text-sm text-muted-foreground">
              当前回测任务：{taskId}
            </p>
          )}
          <button
            onClick={() => navigate('/quantpilot/strategy-lab')}
            className="mt-4 rounded-xl border px-4 py-2 text-sm"
          >
            返回策略实验室
          </button>
        </section>

        <BacktestSummaryCards />

        <EquityCurvePanel />

        <TradeRecordPanel />

      </div>
    </main>
  )
}
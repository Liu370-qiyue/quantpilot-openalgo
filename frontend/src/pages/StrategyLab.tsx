import { useState } from 'react'
import { CreateStrategyModal } from '../components/strategy/CreateStrategyModal'
import { StrategyParameterPanel } from '../components/strategy/StrategyParameterPanel'
import { BacktestResultPanel } from '../components/strategy/BacktestResultPanel'
import { StrategyControlPanel } from '../components/strategy/StrategyControlPanel'
import { StrategyList } from '../components/strategy/StrategyList'
import type { QuantStrategy } from '../types/quantStrategy'
import { mockStrategies } from '../data/mockStrategies'

export default function StrategyLab() {
  const [running, setRunning] = useState(true)
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [backtestStatus, setBacktestStatus] = useState<
    'idle' | 'running' | 'completed'
  >('idle')
  
  const [strategies, setStrategies] =
    useState<QuantStrategy[]>(mockStrategies)

  return (<main className="min-h-screen bg-background p-6">
    <div className="mx-auto max-w-7xl space-y-6">
      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <p className="text-sm text-muted-foreground">
          QuantPilot / Strategy
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          策略实验室
        </h1>

        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          用于创建、编辑、测试和管理量化策略。当前页面先作为策略模块的前端骨架，
          后续将接入策略列表、参数配置、回测结果和风险评估能力。
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">策略总数</p>
          <h2 className="mt-2 text-3xl font-bold">
            {strategies.length}
          </h2>        </div>

        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">运行中策略</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {running ? strategies.length : 0}
          </h2>        </div>

        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">平均收益率</p>
          <h2 className="mt-2 text-3xl font-bold">18.4%</h2>
        </div>

        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">最大回撤</p>
          <h2 className="mt-2 text-3xl font-bold text-red-500">-6.2%</h2>
        </div>
      </section>

      <StrategyControlPanel
        running={running}
        setRunning={setRunning}
        onCreateStrategy={() => setCreateModalOpen(true)}
      />

      <StrategyParameterPanel
        onRunBacktest={() => {
          setBacktestStatus('running')

          setTimeout(() => {
            setBacktestStatus('completed')
          }, 1200)
        }} />
      <BacktestResultPanel status={backtestStatus} />
      <StrategyList
        running={running}
        strategies={strategies}
        onDeleteStrategy={(id) => {
          setStrategies((prev) => prev.filter((s) => s.id !== id))
        }}
      />
    </div>
    <CreateStrategyModal
      open={createModalOpen}
      onClose={() => setCreateModalOpen(false)}
      onCreate={(strategy) => {
        setStrategies((prev) => [strategy, ...prev])
      }}
    />  </main>
  )
}
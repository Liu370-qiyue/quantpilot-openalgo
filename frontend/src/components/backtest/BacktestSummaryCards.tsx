import { useEffect, useState } from 'react'
import { getBacktestResult } from '../../services/backtestService'

export function BacktestSummaryCards() {
    const [result, setResult] = useState({
        annualReturn: '--',
        maxDrawdown: '--',
        sharpeRatio: '--',
        winRate: '--',
    })

    useEffect(() => {
        getBacktestResult().then(setResult)
    }, [])

    return (<section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">年化收益</p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">
                {result.annualReturn}
            </h2>
        </div>

        <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">最大回撤</p>
            <h2 className="mt-2 text-3xl font-bold text-red-500">
                {result.maxDrawdown}
            </h2>
        </div>

        <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">Sharpe Ratio</p>
            <h2 className="mt-2 text-3xl font-bold">
                {result.sharpeRatio}
            </h2>
        </div>

        <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">胜率</p>
            <h2 className="mt-2 text-3xl font-bold">
                {result.winRate}
            </h2>
        </div>
    </section>
    )
}
import { useEffect, useState } from 'react'
import { getBacktestTrades } from '../../services/backtestService'
import type { TradeRecord } from '../../types/trade'

export function TradeRecordPanel() {
    const [trades, setTrades] = useState<TradeRecord[]>([])

    useEffect(() => {
        getBacktestTrades().then(setTrades)
    }, [])

    return (<section className="rounded-2xl border bg-card p-6 shadow-sm">
        <div>
            <h2 className="text-xl font-semibold">交易记录</h2>
            <p className="mt-2 text-sm text-muted-foreground">
                展示回测过程中产生的交易明细，后续将由后端返回真实成交记录。
            </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border">
            <table className="w-full text-left text-sm">
                <thead className="bg-muted/50">
                    <tr>
                        <th className="px-4 py-3 font-medium">编号</th>
                        <th className="px-4 py-3 font-medium">时间</th>
                        <th className="px-4 py-3 font-medium">标的</th>
                        <th className="px-4 py-3 font-medium">方向</th>
                        <th className="px-4 py-3 font-medium">价格</th>
                        <th className="px-4 py-3 font-medium">收益</th>
                    </tr>
                </thead>

                <tbody>
                    {trades.map((trade) => (
                        <tr key={trade.id} className="border-t">
                        <td className="px-4 py-3">{trade.id}</td>
                        <td className="px-4 py-3">{trade.time}</td>
                        <td className="px-4 py-3">{trade.symbol}</td>
                        <td className="px-4 py-3">{trade.side}</td>
                        <td className="px-4 py-3">{trade.price}</td>
                        <td
                            className={`px-4 py-3 font-medium ${trade.pnl.startsWith('+')
                                ? 'text-green-600'
                                : 'text-red-500'
                                }`}
                        >
                            {trade.pnl}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
    )
}
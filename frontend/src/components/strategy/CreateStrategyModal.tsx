import { useState } from 'react'
import type { QuantStrategy } from '../../types/quantStrategy'

interface CreateStrategyModalProps {
    open: boolean
    onClose: () => void
    onCreate: (strategy: QuantStrategy) => void
}

export function CreateStrategyModal({
    open,
    onClose,
    onCreate,
}: CreateStrategyModalProps) {
    const [strategyName, setStrategyName] = useState('')
    const [riskLevel, setRiskLevel] =
        useState<QuantStrategy['risk']>('中')
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-md rounded-2xl bg-background p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">新建策略</h2>

                    <button
                        onClick={onClose}
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        关闭
                    </button>
                </div>

                <div className="mt-6 space-y-4">
                    <div>
                        <p className="mb-2 text-sm text-muted-foreground">
                            策略名称
                        </p>

                        <input
                            value={strategyName}
                            onChange={(e) => setStrategyName(e.target.value)}
                            placeholder="输入策略名称"
                            className="w-full rounded-xl border px-4 py-3 outline-none"
                        />
                    </div>

                    <div>
                        <p className="mb-2 text-sm text-muted-foreground">
                            风险等级
                        </p>

                        <select
                            value={riskLevel}
                            onChange={(e) =>
                                setRiskLevel(e.target.value as QuantStrategy['risk'])
                            } className="w-full rounded-xl border px-4 py-3 outline-none"
                        >
                            <option>低</option>
                            <option>中</option>
                            <option>高</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-xl border px-4 py-2"
                    >
                        取消
                    </button>

                    <button
                        onClick={() => {
                            if (!strategyName.trim()) return

                            onCreate({
                                id: String(Date.now()),
                                name: strategyName,
                                status: '暂停',
                                returnRate: '+0.0%',
                                risk: riskLevel as QuantStrategy['risk'],
                            })

                            setStrategyName('')
                            setRiskLevel('中')
                            onClose()
                        }}
                        className="rounded-xl bg-black px-4 py-2 text-white"
                    >
                        创建策略
                    </button>        </div>
            </div>
        </div>
    )
}
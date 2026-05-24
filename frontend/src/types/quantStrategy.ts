export type QuantStrategyStatus = '运行中' | '暂停' | '已停止'

export type QuantStrategyRiskLevel = '低' | '中' | '高'

export type QuantStrategy = {
  id: string
  name: string
  status: QuantStrategyStatus
  returnRate: string
  risk: QuantStrategyRiskLevel
}
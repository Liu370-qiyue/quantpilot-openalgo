import type { QuantStrategy } from '../types/quantStrategy'

export const mockStrategies: QuantStrategy[] = [{
  id: 'ma-cross',
  name: '双均线趋势策略',
  status: '运行中',
  returnRate: '+18.4%',
  risk: '中',
},
{
  id: 'rsi-reversal',
  name: 'RSI 反转策略',
  status: '暂停',
  returnRate: '+7.2%',
  risk: '低',
},
{
  id: 'ai-momentum',
  name: 'AI 动量增强策略',
  status: '运行中',
  returnRate: '+26.8%',
  risk: '高',
},
]

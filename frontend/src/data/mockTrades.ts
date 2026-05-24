import type { TradeRecord } from '../types/trade'

export const mockTrades: TradeRecord[] = [
  {
    id: 'T001',
    time: '2024-03-12 10:30',
    symbol: 'AI科技指数',
    side: '买入',
    price: '1024.50',
    pnl: '+2,450',
  },
  {
    id: 'T002',
    time: '2024-05-08 14:10',
    symbol: '半导体组合',
    side: '卖出',
    price: '1188.20',
    pnl: '+5,860',
  },
  {
    id: 'T003',
    time: '2024-08-21 09:45',
    symbol: 'PCB成长组合',
    side: '买入',
    price: '956.80',
    pnl: '-1,120',
  },
]
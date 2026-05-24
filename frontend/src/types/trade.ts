export type TradeSide = '买入' | '卖出'

export type TradeRecord = {
  id: string
  time: string
  symbol: string
  side: TradeSide
  price: string
  pnl: string
}
import { mockBacktestResult } from '../data/mockBacktestResult'
import { mockTrades } from '../data/mockTrades'
import type { BacktestResult } from '../types/backtest'
import type { TradeRecord } from '../types/trade'

export async function getBacktestResult(): Promise<BacktestResult> {
  return mockBacktestResult
}

export async function getBacktestTrades(): Promise<TradeRecord[]> {
  return mockTrades
}
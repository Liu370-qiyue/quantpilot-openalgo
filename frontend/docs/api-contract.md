# QuantPilot API Contract

## 1. Strategy Lab 策略实验室

### GET /api/strategies

获取策略列表。

Response:

```json
[
  {
    "id": "ma-cross",
    "name": "双均线趋势策略",
    "status": "运行中",
    "returnRate": "+18.4%",
    "risk": "中"
  }
]
```

### POST /api/strategies

创建策略。

Request:

```json
{
  "name": "测试策略",
  "risk": "中"
}
```

Response:

```json
{
  "id": "1710000000000",
  "name": "测试策略",
  "status": "暂停",
  "returnRate": "+0.0%",
  "risk": "中"
}
```

---

## 2. Backtest Center 回测中心

### POST /api/backtests/run

运行回测。

Request:

```json
{
  "strategyId": "ma-cross",
  "startDate": "2024-01-01",
  "endDate": "2024-12-31",
  "initialCapital": 1000000,
  "maxDrawdownLimit": 0.1
}
```

Response:

```json
{
  "taskId": "bt-001",
  "status": "running"
}
```

### GET /api/backtests/{taskId}/result

获取回测结果。

Response:

```json
{
  "annualReturn": "32.8%",
  "sharpeRatio": "1.84",
  "winRate": "68%",
  "totalTrades": 248,
  "maxDrawdown": "-6.2%",
  "profitFactor": "2.15"
}
```

### GET /api/backtests/{taskId}/trades

获取交易记录。

Response:

```json
[
  {
    "id": "T001",
    "time": "2024-03-12 10:30",
    "symbol": "AI科技指数",
    "side": "买入",
    "price": "1024.50",
    "pnl": "+2,450"
  }
]
```

---

## 3. 前端当前使用的数据类型

### QuantStrategy

```ts
export type QuantStrategyStatus = '运行中' | '暂停' | '已停止'

export type QuantStrategyRiskLevel = '低' | '中' | '高'

export type QuantStrategy = {
  id: string
  name: string
  status: QuantStrategyStatus
  returnRate: string
  risk: QuantStrategyRiskLevel
}
```

### BacktestResult

```ts
export type BacktestResult = {
  annualReturn: string
  sharpeRatio: string
  winRate: string
  totalTrades: number
  maxDrawdown: string
  profitFactor: string
}
```

### TradeRecord

```ts
export type TradeSide = '买入' | '卖出'

export type TradeRecord = {
  id: string
  time: string
  symbol: string
  side: TradeSide
  price: string
  pnl: string
}
```

---

## 4. 接口对接说明

当前前端仍使用 mock 数据：

- `src/data/mockStrategies.ts`
- `src/data/mockBacktestResult.ts`
- `src/data/mockTrades.ts`

后续后端接口完成后，优先替换：

- `src/services/strategyService.ts`
- `src/services/backtestService.ts`

建议后端第一版先返回与当前 mock 数据完全一致的字段结构，方便快速完成前后端联调。
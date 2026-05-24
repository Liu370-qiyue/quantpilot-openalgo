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
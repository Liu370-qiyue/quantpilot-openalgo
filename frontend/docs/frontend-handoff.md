# QuantPilot Frontend Handoff

## 1. 当前交接版本说明

本次交接内容为 QuantPilot 前端 MVP 第一版，主要完成：

- Strategy Lab 策略实验室
- Backtest Center 回测中心
- 策略创建、删除、启停联动
- 回测任务触发状态
- 策略实验室跳转回测中心
- 回测中心读取 taskId
- mock 数据层
- service 服务层
- TypeScript 类型定义
- API 契约草稿

本版本主要目标是让后端可以开始根据前端页面和接口文档开发 FastAPI 接口。

---

## 2. 本地运行方式

进入前端目录：

```powershell
cd "C:\Users\13124\Desktop\Plan A\quantpilot-openalgo-clean\frontend"
```

安装依赖：

```powershell
npm install
```

启动前端：

```powershell
npm run dev
```

浏览器访问：

```txt
http://localhost:5173/quantpilot/strategy-lab
```

---

## 3. 已完成页面

### Strategy Lab 策略实验室

路径：

```txt
/quantpilot/strategy-lab
```

已完成功能：

- 顶部策略概览
- 策略控制台
- 新建策略弹窗
- 新建策略加入列表
- 删除策略
- 空列表提示
- 启动全部 / 停止全部
- 策略列表状态联动
- 策略参数配置
- 运行回测按钮
- 回测状态：等待回测 / 回测运行中 / 回测已完成
- 最近回测摘要
- 跳转回测中心并携带 taskId

---

### Backtest Center 回测中心

路径：

```txt
/quantpilot/backtest-center
```

已完成功能：

- 回测中心页面骨架
- 回测指标卡片
- 收益曲线占位区域
- 交易记录表格
- 从 URL 读取 taskId
- 返回策略实验室按钮

示例跳转路径：

```txt
/quantpilot/backtest-center?taskId=bt-001
```

---

## 4. 当前前端目录结构

```txt
src/
├── pages/
│   ├── StrategyLab.tsx
│   └── BacktestCenter.tsx
├── components/
│   ├── strategy/
│   │   ├── StrategyControlPanel.tsx
│   │   ├── StrategyParameterPanel.tsx
│   │   ├── StrategyList.tsx
│   │   ├── StrategyCard.tsx
│   │   ├── CreateStrategyModal.tsx
│   │   └── BacktestResultPanel.tsx
│   └── backtest/
│       ├── BacktestSummaryCards.tsx
│       ├── EquityCurvePanel.tsx
│       └── TradeRecordPanel.tsx
├── data/
│   ├── mockStrategies.ts
│   ├── mockBacktestResult.ts
│   └── mockTrades.ts
├── services/
│   ├── strategyService.ts
│   └── backtestService.ts
├── types/
│   ├── quantStrategy.ts
│   ├── backtest.ts
│   └── trade.ts
└── docs/
    ├── api-contract.md
    └── frontend-handoff.md
```

---

## 5. 当前 mock 数据说明

当前前端还未接入真实后端接口，以下数据均为 mock：

- `src/data/mockStrategies.ts`
- `src/data/mockBacktestResult.ts`
- `src/data/mockTrades.ts`

目前 service 层已经预留：

- `src/services/strategyService.ts`
- `src/services/backtestService.ts`

后续后端接口完成后，可以将 service 内部 mock 数据替换为 axios / fetch 请求。

---

## 6. 后端需要优先实现的接口

详细接口见：

```txt
docs/api-contract.md
```

优先级建议：

1. `GET /api/strategies`
2. `POST /api/strategies`
3. `POST /api/backtests/run`
4. `GET /api/backtests/{taskId}/result`
5. `GET /api/backtests/{taskId}/trades`

---

## 7. 前后端联调建议

建议后端先返回和 mock 数据一致的字段结构。

策略对象：

```ts
type QuantStrategy = {
  id: string
  name: string
  status: '运行中' | '暂停' | '已停止'
  returnRate: string
  risk: '低' | '中' | '高'
}
```

回测结果对象：

```ts
type BacktestResult = {
  annualReturn: string
  sharpeRatio: string
  winRate: string
  totalTrades: number
  maxDrawdown: string
  profitFactor: string
}
```

交易记录对象：

```ts
type TradeRecord = {
  id: string
  time: string
  symbol: string
  side: '买入' | '卖出'
  price: string
  pnl: string
}
```

---

## 8. 当前未完成内容

以下内容暂未完成，后续继续迭代：

- 真实后端 API 接入
- axios 请求封装
- 回测进度 WebSocket
- 真实收益曲线图
- 策略参数表单可编辑
- 删除确认弹窗样式优化
- 策略版本管理
- AI Agent 策略分析
- 风控 Agent 提示
- 权限与登录状态联动

---

## 9. 交接说明

本次交接版本重点不是最终完整产品，而是：

- 页面结构已完成
- 组件拆分已完成
- 数据结构已初步确定
- mock 数据已准备
- service 层已预留
- API 契约已整理
- 后端可以开始按接口开发

后续联调时，前端主要修改 `services/` 目录，将 mock 数据替换为真实接口请求。

---

## 10. 当前 Git 分支说明

当前建议交接分支：

```txt
feature/strategy-lab
```

不要直接合并到 main。

建议流程：

1. 前端推送 `feature/strategy-lab`
2. 后端同学基于该分支查看页面和接口文档
3. 后端实现接口
4. 前端替换 service 层 mock 数据
5. 联调通过后再合并到主分支
import { Eye, EyeOff, LockKeyhole, ShieldCheck, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const capabilities = [
  '多账户云端监控',
  '策略研究与回测分析',
  'AI Agent 风险简报',
  '资管组合绩效归因',
]

const platformStats = [
  ['AUM', '¥8.42B'],
  ['Strategies', '42'],
  ['Latency', '42ms'],
]

export default function Login() {
  const navigate = useNavigate()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    if (!account.trim()) {
      setError('账号不能为空')
      return
    }

    if (!password.trim()) {
      setError('密码不能为空')
      return
    }

    navigate('/dashboard')
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900">
      <div className="mx-auto grid min-h-[calc(100vh-48px)] max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:grid-cols-[1.08fr_0.92fr]">
        <section className="relative hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 p-10 text-white lg:block">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase text-blue-100">
                    QuantPilot
                  </p>
                  <p className="text-xs text-blue-100/80">
                    Quantitative Asset Platform
                  </p>
                </div>
              </div>

              <div className="mt-20 max-w-xl">
                <p className="text-sm font-semibold uppercase text-cyan-100">
                  Professional Quant Control Center
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight">
                  面向量化交易与资管团队的统一工作台
                </h1>
                <p className="mt-5 max-w-lg text-sm leading-7 text-blue-50/90">
                  聚合策略运行、账户监控、风险状态、回测分析与 AI Agent
                  简报，为后续接入真实认证系统预留清晰入口。
                </p>
              </div>

              <div className="mt-10 grid max-w-lg gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div
                    className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
                    key={item}
                  >
                    <div className="mb-2 h-1 w-8 rounded-full bg-cyan-200" />
                    <p className="text-sm font-medium text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {platformStats.map(([label, value]) => (
                <div
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
                  key={label}
                >
                  <p className="text-xs text-blue-100/80">{label}</p>
                  <p className="mt-1 text-xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase text-blue-600">
                    QuantPilot
                  </p>
                  <p className="text-xs text-slate-500">
                    Quantitative Asset Platform
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold uppercase text-blue-600">
                  QuantPilot
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                  登录账户
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  进入量化交易平台
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                    htmlFor="account"
                  >
                    账号
                  </label>
                  <input
                    autoComplete="username"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    id="account"
                    onChange={(event) => setAccount(event.target.value)}
                    placeholder="请输入账号"
                    type="text"
                    value={account}
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                    htmlFor="password"
                  >
                    密码
                  </label>
                  <div className="relative">
                    <input
                      autoComplete="current-password"
                      className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 pr-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      id="password"
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="请输入密码"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                    />
                    <button
                      aria-label={showPassword ? '隐藏密码' : '显示密码'}
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                      onClick={() => setShowPassword((value) => !value)}
                      type="button"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                    <input
                      checked={rememberMe}
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      onChange={(event) => setRememberMe(event.target.checked)}
                      type="checkbox"
                    />
                    记住我
                  </label>

                  <Link
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    to="/reset-password"
                  >
                    忘记密码
                  </Link>
                </div>

                {error ? (
                  <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                    {error}
                  </div>
                ) : null}

                <button
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
                  type="submit"
                >
                  <LockKeyhole className="h-4 w-4" />
                  登录
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-slate-500">
                暂未开放注册，请联系管理员
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

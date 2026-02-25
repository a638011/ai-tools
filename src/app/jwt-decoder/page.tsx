'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const labelsI18n = {
  zh: { header: 'Header', payload: 'Payload', input: '粘贴JWT Token', invalid: '无效的JWT格式', exp: '过期时间', iat: '签发时间', expired: '已过期', valid: '有效' },
  en: { header: 'Header', payload: 'Payload', input: 'Paste JWT Token', invalid: 'Invalid JWT format', exp: 'Expires', iat: 'Issued at', expired: 'Expired', valid: 'Valid' },
  ja: { header: 'ヘッダー', payload: 'ペイロード', input: 'JWTトークンを貼り付け', invalid: '無効なJWT形式', exp: '有効期限', iat: '発行日時', expired: '期限切れ', valid: '有効' },
  ko: { header: '헤더', payload: '페이로드', input: 'JWT 토큰 붙여넣기', invalid: '잘못된 JWT 형식', exp: '만료 시간', iat: '발급 시간', expired: '만료됨', valid: '유효' },
  es: { header: 'Header', payload: 'Payload', input: 'Pegar JWT Token', invalid: 'Formato JWT inválido', exp: 'Expira', iat: 'Emitido', expired: 'Expirado', valid: 'Válido' },
}

function decodeJwtPart(part: string) {
  try {
    const padded = part.replace(/-/g, '+').replace(/_/g, '/') + '=='.slice(0, (4 - part.length % 4) % 4)
    return JSON.parse(atob(padded))
  } catch { return null }
}

export default function JwtDecoderPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const l = labelsI18n[locale] || labelsI18n.zh
  const [token, setToken] = useState('')

  const parts = token.trim().split('.')
  const header = parts.length === 3 ? decodeJwtPart(parts[0]) : null
  const payload = parts.length === 3 ? decodeJwtPart(parts[1]) : null
  const isValid = header && payload

  const formatTime = (ts: number) => new Date(ts * 1000).toLocaleString()
  const isExpired = payload?.exp ? payload.exp * 1000 < Date.now() : false

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔐 JWT {locale === 'zh' ? '解码器' : locale === 'ja' ? 'デコーダー' : locale === 'ko' ? '디코더' : locale === 'es' ? 'Decodificador' : 'Decoder'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? '在线解析JWT Token，查看Header和Payload内容' : 'Decode JWT tokens, inspect header and payload'}</p>

      <textarea value={token} onChange={e => setToken(e.target.value)} rows={4} placeholder={l.input}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none font-mono text-xs text-gray-700 mb-4 break-all" />

      {token.trim() && !isValid && (
        <div className="bg-red-50 text-red-600 rounded-xl p-4 text-sm mb-4">❌ {l.invalid}</div>
      )}

      {isValid && (
        <div className="space-y-4">
          {payload?.exp && (
            <div className={`rounded-xl p-4 text-sm font-medium ${isExpired ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
              {isExpired ? `⏰ ${l.expired} — ${formatTime(payload.exp)}` : `✅ ${l.valid} — ${l.exp}: ${formatTime(payload.exp)}`}
            </div>
          )}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{l.header}</span>
              <button onClick={() => navigator.clipboard.writeText(JSON.stringify(header, null, 2))} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
            </div>
            <pre className="text-sm font-mono text-gray-700 whitespace-pre-wrap bg-gray-50 rounded-lg p-3">{JSON.stringify(header, null, 2)}</pre>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{l.payload}</span>
              <button onClick={() => navigator.clipboard.writeText(JSON.stringify(payload, null, 2))} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
            </div>
            <pre className="text-sm font-mono text-gray-700 whitespace-pre-wrap bg-gray-50 rounded-lg p-3">{JSON.stringify(payload, null, 2)}</pre>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <span className="text-sm font-medium text-gray-700 block mb-2">Signature</span>
            <code className="text-xs font-mono text-gray-500 break-all">{parts[2]}</code>
          </div>
        </div>
      )}
    </main>
  )
}

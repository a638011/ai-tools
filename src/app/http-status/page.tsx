'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'HTTP状态码查询', desc: '查看所有HTTP状态码及其详细说明', search: '搜索状态码或描述...', all: '全部', info: '1xx 信息', success: '2xx 成功', redirect: '3xx 重定向', clientErr: '4xx 客户端错误', serverErr: '5xx 服务器错误', close: '关闭' },
  en: { title: 'HTTP Status Codes', desc: 'Browse all HTTP status codes with details', search: 'Search code or description...', all: 'All', info: '1xx Info', success: '2xx Success', redirect: '3xx Redirect', clientErr: '4xx Client Error', serverErr: '5xx Server Error', close: 'Close' },
  ja: { title: 'HTTPステータスコード', desc: 'すべてのHTTPステータスコードと詳細を表示', search: 'コードまたは説明を検索...', all: 'すべて', info: '1xx 情報', success: '2xx 成功', redirect: '3xx リダイレクト', clientErr: '4xx クライアントエラー', serverErr: '5xx サーバーエラー', close: '閉じる' },
  ko: { title: 'HTTP 상태 코드', desc: '모든 HTTP 상태 코드와 상세 설명 조회', search: '코드 또는 설명 검색...', all: '전체', info: '1xx 정보', success: '2xx 성공', redirect: '3xx 리다이렉트', clientErr: '4xx 클라이언트 오류', serverErr: '5xx 서버 오류', close: '닫기' },
  es: { title: 'Códigos HTTP', desc: 'Consulta todos los códigos de estado HTTP', search: 'Buscar código o descripción...', all: 'Todos', info: '1xx Info', success: '2xx Éxito', redirect: '3xx Redirección', clientErr: '4xx Error Cliente', serverErr: '5xx Error Servidor', close: 'Cerrar' },
}

const codes: { code: number; name: string; desc: string }[] = [
  { code: 100, name: 'Continue', desc: 'The server has received the request headers and the client should proceed to send the request body.' },
  { code: 101, name: 'Switching Protocols', desc: 'The server is switching protocols as requested by the client.' },
  { code: 102, name: 'Processing', desc: 'The server has received and is processing the request, but no response is available yet.' },
  { code: 103, name: 'Early Hints', desc: 'Used to return some response headers before final HTTP message.' },
  { code: 200, name: 'OK', desc: 'The request has succeeded. Standard response for successful HTTP requests.' },
  { code: 201, name: 'Created', desc: 'The request has been fulfilled and a new resource has been created.' },
  { code: 202, name: 'Accepted', desc: 'The request has been accepted for processing, but processing is not complete.' },
  { code: 203, name: 'Non-Authoritative Information', desc: 'The returned meta-information is from a local or third-party copy.' },
  { code: 204, name: 'No Content', desc: 'The server successfully processed the request but is not returning any content.' },
  { code: 205, name: 'Reset Content', desc: 'The server successfully processed the request and is not returning any content, reset the document view.' },
  { code: 206, name: 'Partial Content', desc: 'The server is delivering only part of the resource due to a range header sent by the client.' },
  { code: 207, name: 'Multi-Status', desc: 'The message body contains multiple status codes for multiple independent operations.' },
  { code: 301, name: 'Moved Permanently', desc: 'The resource has been permanently moved to a new URL.' },
  { code: 302, name: 'Found', desc: 'The resource resides temporarily under a different URL.' },
  { code: 303, name: 'See Other', desc: 'The response can be found under a different URL using GET method.' },
  { code: 304, name: 'Not Modified', desc: 'The resource has not been modified since the last request.' },
  { code: 307, name: 'Temporary Redirect', desc: 'The request should be repeated with another URL, but future requests should still use the original URL.' },
  { code: 308, name: 'Permanent Redirect', desc: 'The request and all future requests should be repeated using another URL.' },
  { code: 400, name: 'Bad Request', desc: 'The server cannot process the request due to a client error (malformed syntax, invalid framing, etc.).' },
  { code: 401, name: 'Unauthorized', desc: 'Authentication is required and has failed or has not been provided.' },
  { code: 402, name: 'Payment Required', desc: 'Reserved for future use. Originally intended for digital payment schemes.' },
  { code: 403, name: 'Forbidden', desc: 'The server understood the request but refuses to authorize it.' },
  { code: 404, name: 'Not Found', desc: 'The requested resource could not be found on the server.' },
  { code: 405, name: 'Method Not Allowed', desc: 'The request method is not supported for the requested resource.' },
  { code: 406, name: 'Not Acceptable', desc: 'The requested resource can only generate content not acceptable according to the Accept headers.' },
  { code: 407, name: 'Proxy Authentication Required', desc: 'The client must first authenticate itself with the proxy.' },
  { code: 408, name: 'Request Timeout', desc: 'The server timed out waiting for the request.' },
  { code: 409, name: 'Conflict', desc: 'The request could not be processed because of conflict in the current state of the resource.' },
  { code: 410, name: 'Gone', desc: 'The resource is no longer available and will not be available again.' },
  { code: 411, name: 'Length Required', desc: 'The request did not specify the length of its content, which is required.' },
  { code: 412, name: 'Precondition Failed', desc: 'The server does not meet one of the preconditions specified in the request.' },
  { code: 413, name: 'Payload Too Large', desc: 'The request is larger than the server is willing or able to process.' },
  { code: 414, name: 'URI Too Long', desc: 'The URI provided was too long for the server to process.' },
  { code: 415, name: 'Unsupported Media Type', desc: 'The request entity has a media type which the server does not support.' },
  { code: 416, name: 'Range Not Satisfiable', desc: 'The client has asked for a portion of the file that the server cannot supply.' },
  { code: 418, name: "I'm a Teapot", desc: 'Any attempt to brew coffee with a teapot should result in this error. (RFC 2324)' },
  { code: 422, name: 'Unprocessable Entity', desc: 'The request was well-formed but was unable to be followed due to semantic errors.' },
  { code: 429, name: 'Too Many Requests', desc: 'The user has sent too many requests in a given amount of time (rate limiting).' },
  { code: 500, name: 'Internal Server Error', desc: 'A generic error message when the server encounters an unexpected condition.' },
  { code: 501, name: 'Not Implemented', desc: 'The server does not recognize the request method or lacks the ability to fulfill it.' },
  { code: 502, name: 'Bad Gateway', desc: 'The server received an invalid response from the upstream server.' },
  { code: 503, name: 'Service Unavailable', desc: 'The server is currently unavailable (overloaded or down for maintenance).' },
  { code: 504, name: 'Gateway Timeout', desc: 'The server did not receive a timely response from the upstream server.' },
  { code: 505, name: 'HTTP Version Not Supported', desc: 'The server does not support the HTTP protocol version used in the request.' },
  { code: 511, name: 'Network Authentication Required', desc: 'The client needs to authenticate to gain network access.' },
]

function getColor(code: number) {
  if (code < 200) return 'bg-blue-100 text-blue-700 border-blue-200'
  if (code < 300) return 'bg-green-100 text-green-700 border-green-200'
  if (code < 400) return 'bg-yellow-100 text-yellow-700 border-yellow-200'
  if (code < 500) return 'bg-orange-100 text-orange-700 border-orange-200'
  return 'bg-red-100 text-red-700 border-red-200'
}

export default function HttpStatusPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState<typeof codes[0] | null>(null)

  const filtered = codes.filter(c => {
    const matchSearch = !search || String(c.code).includes(search) || c.name.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'all' || (filter === '1' && c.code < 200) || (filter === '2' && c.code >= 200 && c.code < 300) || (filter === '3' && c.code >= 300 && c.code < 400) || (filter === '4' && c.code >= 400 && c.code < 500) || (filter === '5' && c.code >= 500)
    return matchSearch && matchFilter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🌐 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder={u.search} className="w-full border rounded-xl p-3 text-sm mb-4 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
        <div className="flex flex-wrap gap-2 mb-6">
          {[{ v: 'all', l: u.all }, { v: '1', l: u.info }, { v: '2', l: u.success }, { v: '3', l: u.redirect }, { v: '4', l: u.clientErr }, { v: '5', l: u.serverErr }].map(f => (
            <button key={f.v} onClick={() => setFilter(f.v)} className={`px-4 py-2 rounded-xl text-sm transition ${filter === f.v ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}>{f.l}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map(c => (
            <button key={c.code} onClick={() => setSelected(c)} className={`text-left p-4 rounded-xl border transition hover:shadow-md ${getColor(c.code)}`}>
              <span className="font-bold text-lg mr-2">{c.code}</span>
              <span className="font-medium">{c.name}</span>
            </button>
          ))}
        </div>
        {selected && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4" onClick={() => setSelected(null)}>
            <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl" onClick={e => e.stopPropagation()}>
              <div className={`inline-block px-3 py-1 rounded-lg text-sm font-bold mb-3 ${getColor(selected.code)}`}>{selected.code}</div>
              <h2 className="text-xl font-bold mb-2">{selected.name}</h2>
              <p className="text-gray-600 mb-4">{selected.desc}</p>
              <button onClick={() => setSelected(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.close}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
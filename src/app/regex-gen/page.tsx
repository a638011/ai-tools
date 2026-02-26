'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '正则表达式生成器', desc: '常见正则模式一键复制，也可自定义测试', copy: '📋 复制', copied: '✅ 已复制', commonPatterns: '常用正则模式', testArea: '正则测试', regex: '正则表达式', flags: '标志', testStr: '测试字符串', matches: '匹配结果', noMatch: '无匹配', email: '邮箱', phone: '手机号(中国)', url: 'URL', ipv4: 'IPv4地址', ipv6: 'IPv6地址', idCard: '身份证号(中国)', date: '日期(YYYY-MM-DD)', time: '时间(HH:MM:SS)', hex: '十六进制颜色', chinese: '中文字符', password: '强密码(8+位,大小写+数字+特殊)', username: '用户名(字母数字下划线)', integer: '整数', decimal: '小数', htmlTag: 'HTML标签' },
  en: { title: 'Regex Generator', desc: 'Common regex patterns with one-click copy and live testing', copy: '📋 Copy', copied: '✅ Copied', commonPatterns: 'Common Patterns', testArea: 'Regex Tester', regex: 'Regular Expression', flags: 'Flags', testStr: 'Test String', matches: 'Matches', noMatch: 'No match', email: 'Email', phone: 'Phone (China)', url: 'URL', ipv4: 'IPv4 Address', ipv6: 'IPv6 Address', idCard: 'ID Card (China)', date: 'Date (YYYY-MM-DD)', time: 'Time (HH:MM:SS)', hex: 'Hex Color', chinese: 'Chinese Characters', password: 'Strong Password (8+, upper+lower+digit+special)', username: 'Username (alphanumeric+underscore)', integer: 'Integer', decimal: 'Decimal', htmlTag: 'HTML Tag' },
  ja: { title: '正規表現ジェネレーター', desc: 'よく使う正規表現パターンをワンクリックコピー＆テスト', copy: '📋 コピー', copied: '✅ コピー済', commonPatterns: 'よく使うパターン', testArea: '正規表現テスト', regex: '正規表現', flags: 'フラグ', testStr: 'テスト文字列', matches: 'マッチ結果', noMatch: 'マッチなし', email: 'メール', phone: '電話番号(中国)', url: 'URL', ipv4: 'IPv4アドレス', ipv6: 'IPv6アドレス', idCard: '身分証(中国)', date: '日付(YYYY-MM-DD)', time: '時刻(HH:MM:SS)', hex: '16進カラー', chinese: '中国語文字', password: '強力パスワード', username: 'ユーザー名', integer: '整数', decimal: '小数', htmlTag: 'HTMLタグ' },
  ko: { title: '정규식 생성기', desc: '자주 쓰는 정규식 패턴 복사 및 테스트', copy: '📋 복사', copied: '✅ 복사됨', commonPatterns: '자주 쓰는 패턴', testArea: '정규식 테스트', regex: '정규 표현식', flags: '플래그', testStr: '테스트 문자열', matches: '매칭 결과', noMatch: '매칭 없음', email: '이메일', phone: '전화번호(중국)', url: 'URL', ipv4: 'IPv4 주소', ipv6: 'IPv6 주소', idCard: '신분증(중국)', date: '날짜(YYYY-MM-DD)', time: '시간(HH:MM:SS)', hex: '16진수 색상', chinese: '중국어 문자', password: '강력한 비밀번호', username: '사용자 이름', integer: '정수', decimal: '소수', htmlTag: 'HTML 태그' },
  es: { title: 'Generador de Regex', desc: 'Patrones regex comunes con copia rápida y prueba en vivo', copy: '📋 Copiar', copied: '✅ Copiado', commonPatterns: 'Patrones Comunes', testArea: 'Probar Regex', regex: 'Expresión Regular', flags: 'Flags', testStr: 'Cadena de prueba', matches: 'Coincidencias', noMatch: 'Sin coincidencias', email: 'Email', phone: 'Teléfono (China)', url: 'URL', ipv4: 'Dirección IPv4', ipv6: 'Dirección IPv6', idCard: 'DNI (China)', date: 'Fecha (YYYY-MM-DD)', time: 'Hora (HH:MM:SS)', hex: 'Color Hex', chinese: 'Caracteres Chinos', password: 'Contraseña fuerte', username: 'Nombre de usuario', integer: 'Entero', decimal: 'Decimal', htmlTag: 'Etiqueta HTML' },
}

const patterns: { key: string; regex: string }[] = [
  { key: 'email', regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' },
  { key: 'phone', regex: '^1[3-9]\\d{9}$' },
  { key: 'url', regex: '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$' },
  { key: 'ipv4', regex: '^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$' },
  { key: 'ipv6', regex: '^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$' },
  { key: 'idCard', regex: '^[1-9]\\d{5}(18|19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])\\d{3}[\\dXx]$' },
  { key: 'date', regex: '^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$' },
  { key: 'time', regex: '^([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$' },
  { key: 'hex', regex: '^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$' },
  { key: 'chinese', regex: '[\\u4e00-\\u9fa5]+' },
  { key: 'password', regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$' },
  { key: 'username', regex: '^[a-zA-Z0-9_]{3,20}$' },
  { key: 'integer', regex: '^-?\\d+$' },
  { key: 'decimal', regex: '^-?\\d+\\.\\d+$' },
  { key: 'htmlTag', regex: '<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*>(.*?)<\\/\\1>' },
]

export default function RegexGenPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [regex, setRegex] = useState('')
  const [flags, setFlags] = useState('g')
  const [testStr, setTestStr] = useState('')
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)

  const copyPattern = (r: string, idx: number) => {
    navigator.clipboard.writeText(r)
    setCopiedIdx(idx)
    setTimeout(() => setCopiedIdx(null), 1500)
  }

  const usePattern = (r: string) => { setRegex(r) }

  let matchResults: string[] = []
  let matchError = ''
  if (regex && testStr) {
    try {
      const re = new RegExp(regex, flags)
      const m = testStr.match(re)
      matchResults = m ? [...m] : []
    } catch (e) { matchError = String(e instanceof Error ? e.message : e) }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔤 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.commonPatterns}</h3>
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {patterns.map((p, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 group">
                  <span className="text-sm font-medium text-gray-700 w-36 shrink-0">{u[p.key as keyof typeof u] || p.key}</span>
                  <code className="text-xs text-gray-500 flex-1 truncate font-mono">{p.regex}</code>
                  <button onClick={() => usePattern(p.regex)} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition opacity-0 group-hover:opacity-100">Use</button>
                  <button onClick={() => copyPattern(p.regex, i)} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition">{copiedIdx === i ? u.copied : u.copy}</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.testArea}</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{u.regex}</label>
                <div className="flex gap-2">
                  <input value={regex} onChange={e => setRegex(e.target.value)} placeholder="^[a-z]+$" className="flex-1 border rounded-xl p-3 text-sm font-mono focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
                  <input value={flags} onChange={e => setFlags(e.target.value)} placeholder="g" className="w-16 border rounded-xl p-3 text-sm font-mono text-center focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{u.testStr}</label>
                <textarea value={testStr} onChange={e => setTestStr(e.target.value)} rows={5} className="w-full border rounded-xl p-3 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{u.matches}</label>
                {matchError ? (
                  <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-3 text-sm">{matchError}</div>
                ) : matchResults.length > 0 ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 space-y-1">
                    {matchResults.map((m, i) => <div key={i} className="text-sm font-mono text-green-700 bg-green-100 rounded px-2 py-1">{m}</div>)}
                  </div>
                ) : (regex && testStr) ? (
                  <div className="bg-gray-50 border border-gray-200 text-gray-500 rounded-xl p-3 text-sm">{u.noMatch}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

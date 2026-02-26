'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'JSON对比', desc: '对比两段JSON，高亮显示差异', left: '左侧JSON', right: '右侧JSON', compare: '🔍 对比', clear: '清空', added: '新增', removed: '删除', modified: '修改', unchanged: '相同', result: '对比结果', error: '❌ JSON格式错误', loadExample: '加载示例', noChanges: '✅ 两段JSON完全相同' },
  en: { title: 'JSON Diff', desc: 'Compare two JSON documents and highlight differences', left: 'Left JSON', right: 'Right JSON', compare: '🔍 Compare', clear: 'Clear', added: 'Added', removed: 'Removed', modified: 'Modified', unchanged: 'Unchanged', result: 'Diff Result', error: '❌ Invalid JSON', loadExample: 'Load Example', noChanges: '✅ Both JSONs are identical' },
  ja: { title: 'JSON比較', desc: '2つのJSONを比較して差分をハイライト', left: '左側JSON', right: '右側JSON', compare: '🔍 比較', clear: 'クリア', added: '追加', removed: '削除', modified: '変更', unchanged: '同一', result: '比較結果', error: '❌ 無効なJSON', loadExample: '例を読込', noChanges: '✅ 両方のJSONは同一です' },
  ko: { title: 'JSON 비교', desc: '두 JSON을 비교하고 차이점을 강조', left: '왼쪽 JSON', right: '오른쪽 JSON', compare: '🔍 비교', clear: '지우기', added: '추가', removed: '삭제', modified: '수정', unchanged: '동일', result: '비교 결과', error: '❌ 잘못된 JSON', loadExample: '예제 로드', noChanges: '✅ 두 JSON이 동일합니다' },
  es: { title: 'Comparador JSON', desc: 'Compara dos JSON y resalta las diferencias', left: 'JSON Izquierdo', right: 'JSON Derecho', compare: '🔍 Comparar', clear: 'Limpiar', added: 'Añadido', removed: 'Eliminado', modified: 'Modificado', unchanged: 'Sin cambios', result: 'Resultado', error: '❌ JSON inválido', loadExample: 'Cargar Ejemplo', noChanges: '✅ Ambos JSON son idénticos' },
}

const exLeft = `{"name":"Alice","age":30,"city":"NYC","hobbies":["reading","coding"]}`
const exRight = `{"name":"Alice","age":31,"city":"LA","hobbies":["reading","gaming"],"email":"alice@example.com"}`

type DiffItem = { path: string; type: 'added' | 'removed' | 'modified'; oldVal?: string; newVal?: string }

function diffJSON(a: unknown, b: unknown, path = ''): DiffItem[] {
  const results: DiffItem[] = []
  if (a === b) return results
  if (typeof a !== typeof b || a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
    results.push({ path: path || '(root)', type: 'modified', oldVal: JSON.stringify(a), newVal: JSON.stringify(b) })
    return results
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    const maxLen = Math.max(a.length, b.length)
    for (let i = 0; i < maxLen; i++) {
      const p = `${path}[${i}]`
      if (i >= a.length) results.push({ path: p, type: 'added', newVal: JSON.stringify(b[i]) })
      else if (i >= b.length) results.push({ path: p, type: 'removed', oldVal: JSON.stringify(a[i]) })
      else results.push(...diffJSON(a[i], b[i], p))
    }
    return results
  }
  const aObj = a as Record<string, unknown>, bObj = b as Record<string, unknown>
  const allKeys = new Set([...Object.keys(aObj), ...Object.keys(bObj)])
  for (const key of Array.from(allKeys)) {
    const p = path ? `${path}.${key}` : key
    if (!(key in aObj)) results.push({ path: p, type: 'added', newVal: JSON.stringify(bObj[key]) })
    else if (!(key in bObj)) results.push({ path: p, type: 'removed', oldVal: JSON.stringify(aObj[key]) })
    else results.push(...diffJSON(aObj[key], bObj[key], p))
  }
  return results
}

export default function JsonDiffPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')
  const [diffs, setDiffs] = useState<DiffItem[] | null>(null)
  const [error, setError] = useState('')

  const compare = () => {
    setError('')
    try {
      const a = JSON.parse(left)
      const b = JSON.parse(right)
      setDiffs(diffJSON(a, b))
    } catch { setError(u.error) }
  }

  const colors = { added: 'bg-green-50 border-green-200 text-green-800', removed: 'bg-red-50 border-red-200 text-red-800', modified: 'bg-yellow-50 border-yellow-200 text-yellow-800' }
  const labels = { added: u.added, removed: u.removed, modified: u.modified }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔀 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={compare} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.compare}</button>
          <button onClick={() => { setLeft(exLeft); setRight(exRight); setDiffs(null); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setLeft(''); setRight(''); setDiffs(null); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.left}</h3>
            <textarea value={left} onChange={e => setLeft(e.target.value)} placeholder='{"key": "value"}'
              className="w-full h-60 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.right}</h3>
            <textarea value={right} onChange={e => setRight(e.target.value)} placeholder='{"key": "value"}'
              className="w-full h-60 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
        </div>

        {diffs !== null && (
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.result}</h3>
            {diffs.length === 0 ? (
              <p className="text-green-600 font-medium">{u.noChanges}</p>
            ) : (
              <div className="space-y-2">
                {diffs.map((d, i) => (
                  <div key={i} className={`border rounded-xl p-3 text-sm ${colors[d.type]}`}>
                    <span className="font-bold mr-2">[{labels[d.type]}]</span>
                    <span className="font-mono font-medium">{d.path}</span>
                    {d.type === 'modified' && <span className="ml-2">{d.oldVal} → {d.newVal}</span>}
                    {d.type === 'added' && <span className="ml-2">{d.newVal}</span>}
                    {d.type === 'removed' && <span className="ml-2">{d.oldVal}</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

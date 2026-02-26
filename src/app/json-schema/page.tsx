'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'JSON Schema验证器', desc: '在线验证JSON数据是否符合JSON Schema规范', schema: 'JSON Schema', data: 'JSON数据', validate: '✅ 验证', valid: '✅ 验证通过！数据符合Schema规范', invalid: '❌ 验证失败', error: '❌ 解析错误', schemaError: 'Schema格式错误', dataError: '数据格式错误', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', result: '验证结果' },
  en: { title: 'JSON Schema Validator', desc: 'Validate JSON data against JSON Schema online', schema: 'JSON Schema', data: 'JSON Data', validate: '✅ Validate', valid: '✅ Valid! Data conforms to schema', invalid: '❌ Validation failed', error: '❌ Parse error', schemaError: 'Invalid Schema JSON', dataError: 'Invalid Data JSON', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', result: 'Result' },
  ja: { title: 'JSON Schema検証', desc: 'JSONデータをJSON Schemaで検証', schema: 'JSON Schema', data: 'JSONデータ', validate: '✅ 検証', valid: '✅ 有効！データはスキーマに準拠', invalid: '❌ 検証失敗', error: '❌ パースエラー', schemaError: 'Schema JSONが無効', dataError: 'データJSONが無効', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', result: '結果' },
  ko: { title: 'JSON Schema 검증기', desc: 'JSON 데이터를 JSON Schema로 검증', schema: 'JSON Schema', data: 'JSON 데이터', validate: '✅ 검증', valid: '✅ 유효! 데이터가 스키마에 부합', invalid: '❌ 검증 실패', error: '❌ 파싱 오류', schemaError: 'Schema JSON 오류', dataError: '데이터 JSON 오류', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', result: '결과' },
  es: { title: 'Validador JSON Schema', desc: 'Valida datos JSON contra JSON Schema', schema: 'JSON Schema', data: 'Datos JSON', validate: '✅ Validar', valid: '✅ ¡Válido! Los datos cumplen el schema', invalid: '❌ Validación fallida', error: '❌ Error de parseo', schemaError: 'Schema JSON inválido', dataError: 'Datos JSON inválidos', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', result: 'Resultado' },
}

const exampleSchema = `{
  "type": "object",
  "required": ["name", "age", "email"],
  "properties": {
    "name": { "type": "string", "minLength": 1 },
    "age": { "type": "number", "minimum": 0, "maximum": 150 },
    "email": { "type": "string", "format": "email" },
    "tags": { "type": "array", "items": { "type": "string" } }
  }
}`

const exampleData = `{
  "name": "Alice",
  "age": 30,
  "email": "alice@example.com",
  "tags": ["developer", "designer"]
}`

type ValidationError = { path: string; message: string }

function validateJsonSchema(schema: any, data: any): { valid: boolean; errors: ValidationError[] } {
  const errors: ValidationError[] = []

  function validate(s: any, d: any, path: string) {
    if (!s || typeof s !== 'object') return

    // type check
    if (s.type) {
      const types = Array.isArray(s.type) ? s.type : [s.type]
      const actualType = Array.isArray(d) ? 'array' : d === null ? 'null' : typeof d
      if (!types.includes(actualType)) {
        errors.push({ path: path || '/', message: `Expected ${s.type}, got ${actualType}` })
        return
      }
    }

    // string validations
    if (typeof d === 'string') {
      if (s.minLength !== undefined && d.length < s.minLength) errors.push({ path, message: `String length ${d.length} < minLength ${s.minLength}` })
      if (s.maxLength !== undefined && d.length > s.maxLength) errors.push({ path, message: `String length ${d.length} > maxLength ${s.maxLength}` })
      if (s.pattern && !new RegExp(s.pattern).test(d)) errors.push({ path, message: `Does not match pattern: ${s.pattern}` })
      if (s.format === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)) errors.push({ path, message: 'Invalid email format' })
      if (s.enum && !s.enum.includes(d)) errors.push({ path, message: `Value must be one of: ${s.enum.join(', ')}` })
    }

    // number validations
    if (typeof d === 'number') {
      if (s.minimum !== undefined && d < s.minimum) errors.push({ path, message: `${d} < minimum ${s.minimum}` })
      if (s.maximum !== undefined && d > s.maximum) errors.push({ path, message: `${d} > maximum ${s.maximum}` })
      if (s.enum && !s.enum.includes(d)) errors.push({ path, message: `Value must be one of: ${s.enum.join(', ')}` })
    }

    // object validations
    if (typeof d === 'object' && d !== null && !Array.isArray(d)) {
      if (s.required) {
        for (const key of s.required) {
          if (!(key in d)) errors.push({ path: `${path}/${key}`, message: `Required property missing` })
        }
      }
      if (s.properties) {
        for (const [key, propSchema] of Object.entries(s.properties)) {
          if (key in d) validate(propSchema, d[key], `${path}/${key}`)
        }
      }
      if (s.minProperties !== undefined && Object.keys(d).length < s.minProperties) errors.push({ path, message: `Object has fewer than ${s.minProperties} properties` })
      if (s.maxProperties !== undefined && Object.keys(d).length > s.maxProperties) errors.push({ path, message: `Object has more than ${s.maxProperties} properties` })
    }

    // array validations
    if (Array.isArray(d)) {
      if (s.minItems !== undefined && d.length < s.minItems) errors.push({ path, message: `Array length ${d.length} < minItems ${s.minItems}` })
      if (s.maxItems !== undefined && d.length > s.maxItems) errors.push({ path, message: `Array length ${d.length} > maxItems ${s.maxItems}` })
      if (s.items) { d.forEach((item, i) => validate(s.items, item, `${path}[${i}]`)) }
    }
  }

  validate(schema, data, '')
  return { valid: errors.length === 0, errors }
}

export default function JsonSchemaPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [schema, setSchema] = useState('')
  const [data, setData] = useState('')
  const [result, setResult] = useState<{ valid: boolean; errors: ValidationError[] } | null>(null)
  const [parseError, setParseError] = useState('')

  const doValidate = () => {
    setParseError('')
    setResult(null)
    let s, d
    try { s = JSON.parse(schema) } catch { setParseError(u.schemaError); return }
    try { d = JSON.parse(data) } catch { setParseError(u.dataError); return }
    setResult(validateJsonSchema(s, d))
  }

  const loadExample = () => { setSchema(exampleSchema); setData(exampleData); setResult(null); setParseError('') }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📋 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex gap-2 mb-4">
          <button onClick={loadExample} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setSchema(''); setData(''); setResult(null); setParseError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.schema}</h3>
            <textarea value={schema} onChange={e => setSchema(e.target.value)} placeholder='{ "type": "object", ... }'
              className="w-full h-64 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.data}</h3>
            <textarea value={data} onChange={e => setData(e.target.value)} placeholder='{ "name": "Alice", ... }'
              className="w-full h-64 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
        </div>

        <button onClick={doValidate} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition mb-4">{u.validate}</button>

        {parseError && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4">{u.error}: {parseError}</div>}

        {result && (
          <div className={`rounded-xl p-5 border ${result.valid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <h3 className="font-semibold mb-2">{u.result}</h3>
            {result.valid ? (
              <p className="text-green-700">{u.valid}</p>
            ) : (
              <div>
                <p className="text-red-600 mb-3">{u.invalid}</p>
                <div className="space-y-2">
                  {result.errors.map((err, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <code className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-mono text-xs">{err.path || '/'}</code>
                      <span className="text-red-600">{err.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

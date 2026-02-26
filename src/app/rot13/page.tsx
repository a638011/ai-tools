'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'ROT13/凯撒密码', desc: '支持ROT13和自定义偏移量的凯撒密码加密解密', input: '输入文本', output: '输出结果', encrypt: '🔒 加密', decrypt: '🔓 解密', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', offset: '偏移量', rot13: 'ROT13', custom: '自定义偏移' },
  en: { title: 'ROT13 / Caesar Cipher', desc: 'ROT13 and custom-offset Caesar cipher encrypt/decrypt', input: 'Input Text', output: 'Output', encrypt: '🔒 Encrypt', decrypt: '🔓 Decrypt', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', offset: 'Offset', rot13: 'ROT13', custom: 'Custom Offset' },
  ja: { title: 'ROT13/シーザー暗号', desc: 'ROT13およびカスタムオフセットのシーザー暗号', input: '入力テキスト', output: '出力', encrypt: '🔒 暗号化', decrypt: '🔓 復号', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', offset: 'オフセット', rot13: 'ROT13', custom: 'カスタム' },
  ko: { title: 'ROT13/시저 암호', desc: 'ROT13 및 사용자 정의 오프셋 시저 암호', input: '입력 텍스트', output: '출력', encrypt: '🔒 암호화', decrypt: '🔓 복호화', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', offset: '오프셋', rot13: 'ROT13', custom: '사용자 정의' },
  es: { title: 'ROT13/Cifrado César', desc: 'Cifrado César con ROT13 y desplazamiento personalizado', input: 'Texto de entrada', output: 'Resultado', encrypt: '🔒 Cifrar', decrypt: '🔓 Descifrar', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', offset: 'Desplazamiento', rot13: 'ROT13', custom: 'Personalizado' },
}

function caesarShift(text: string, shift: number): string {
  return text.replace(/[a-zA-Z]/g, (ch) => {
    const base = ch >= 'a' ? 97 : 65
    return String.fromCharCode(((ch.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base)
  })
}

export default function Rot13Page() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'rot13' | 'custom'>('rot13')
  const [offset, setOffset] = useState(13)
  const [copied, setCopied] = useState(false)

  const doEncrypt = () => {
    const shift = mode === 'rot13' ? 13 : offset
    setOutput(caesarShift(input, shift))
  }
  const doDecrypt = () => {
    const shift = mode === 'rot13' ? 13 : offset
    setOutput(caesarShift(input, -shift))
  }
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔐 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            <button onClick={() => setMode('rot13')} className={`px-3 py-1.5 rounded-lg text-xs transition ${mode === 'rot13' ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>{u.rot13}</button>
            <button onClick={() => setMode('custom')} className={`px-3 py-1.5 rounded-lg text-xs transition ${mode === 'custom' ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>{u.custom}</button>
          </div>
          {mode === 'custom' && (
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">{u.offset}:</label>
              <input type="number" min={1} max={25} value={offset} onChange={e => setOffset(+e.target.value)} className="w-16 border rounded-lg px-2 py-1 text-sm text-center" />
            </div>
          )}
          <button onClick={doEncrypt} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.encrypt}</button>
          <button onClick={doDecrypt} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.decrypt}</button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Hello World"
              className="w-full h-64 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output}</h3>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>}
            </div>
            <textarea value={output} readOnly className="w-full h-64 border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>
      </div>
    </div>
  )
}

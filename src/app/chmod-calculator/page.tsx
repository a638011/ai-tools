'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'Chmod计算器', desc: 'Linux文件权限计算器', owner: '所有者', group: '组', others: '其他', read: '读(r)', write: '写(w)', exec: '执行(x)', numeric: '数字权限', symbolic: '符号权限', command: '命令', copy: '📋 复制', copied: '✅ 已复制', presets: '常用预设' },
  en: { title: 'Chmod Calculator', desc: 'Linux file permission calculator', owner: 'Owner', group: 'Group', others: 'Others', read: 'Read(r)', write: 'Write(w)', exec: 'Execute(x)', numeric: 'Numeric', symbolic: 'Symbolic', command: 'Command', copy: '📋 Copy', copied: '✅ Copied', presets: 'Common Presets' },
  ja: { title: 'Chmod計算機', desc: 'Linuxファイル権限計算機', owner: '所有者', group: 'グループ', others: 'その他', read: '読取(r)', write: '書込(w)', exec: '実行(x)', numeric: '数値', symbolic: 'シンボリック', command: 'コマンド', copy: '📋 コピー', copied: '✅ コピー済', presets: 'プリセット' },
  ko: { title: 'Chmod 계산기', desc: 'Linux 파일 권한 계산기', owner: '소유자', group: '그룹', others: '기타', read: '읽기(r)', write: '쓰기(w)', exec: '실행(x)', numeric: '숫자 권한', symbolic: '기호 권한', command: '명령어', copy: '📋 복사', copied: '✅ 복사됨', presets: '프리셋' },
  es: { title: 'Calculadora Chmod', desc: 'Calculadora de permisos de archivos Linux', owner: 'Propietario', group: 'Grupo', others: 'Otros', read: 'Leer(r)', write: 'Escribir(w)', exec: 'Ejecutar(x)', numeric: 'Numérico', symbolic: 'Simbólico', command: 'Comando', copy: '📋 Copiar', copied: '✅ Copiado', presets: 'Presets Comunes' },
}

const presets = [
  { label: '755', desc: 'rwxr-xr-x (dirs/scripts)' },
  { label: '644', desc: 'rw-r--r-- (files)' },
  { label: '777', desc: 'rwxrwxrwx (full access)' },
  { label: '600', desc: 'rw------- (private)' },
  { label: '700', desc: 'rwx------ (private exec)' },
  { label: '444', desc: 'r--r--r-- (read only)' },
]

export default function ChmodCalculatorPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [perms, setPerms] = useState([true, true, true, true, false, true, true, false, true]) // rwx r-x r-x = 755
  const [copied, setCopied] = useState(false)

  const toggle = (i: number) => { const n = [...perms]; n[i] = !n[i]; setPerms(n) }

  const getOctal = (start: number) => (perms[start] ? 4 : 0) + (perms[start + 1] ? 2 : 0) + (perms[start + 2] ? 1 : 0)
  const numeric = `${getOctal(0)}${getOctal(1)}${getOctal(2)}`
  const symbolic = perms.map((p, i) => p ? 'rwx'[i % 3] : '-').join('')
  const command = `chmod ${numeric} filename`

  const applyPreset = (preset: string) => {
    const bits = preset.split('').map(Number)
    const newPerms = [false, false, false, false, false, false, false, false, false]
    bits.forEach((b, gi) => {
      if (b & 4) newPerms[gi * 3] = true
      if (b & 2) newPerms[gi * 3 + 1] = true
      if (b & 1) newPerms[gi * 3 + 2] = true
    })
    setPerms(newPerms)
  }

  const copy = () => { navigator.clipboard.writeText(command); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  const labels = [u.owner, u.group, u.others]
  const permLabels = [u.read, u.write, u.exec]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔐 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div></div>
            {permLabels.map(l => <div key={l} className="text-center text-sm font-medium text-gray-500">{l}</div>)}
            {labels.map((label, gi) => (
              <>
                <div key={`l-${gi}`} className="font-semibold text-gray-700 flex items-center">{label}</div>
                {[0, 1, 2].map(pi => (
                  <div key={`c-${gi}-${pi}`} className="flex justify-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={perms[gi * 3 + pi]} onChange={() => toggle(gi * 3 + pi)} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                ))}
              </>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-indigo-50 rounded-xl p-4 text-center">
              <div className="text-xs text-indigo-500 mb-1">{u.numeric}</div>
              <div className="text-3xl font-bold text-indigo-700 font-mono">{numeric}</div>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4 text-center">
              <div className="text-xs text-emerald-500 mb-1">{u.symbolic}</div>
              <div className="text-2xl font-bold text-emerald-700 font-mono">{symbolic}</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 text-center">
              <div className="text-xs text-amber-500 mb-1">{u.command}</div>
              <div className="text-sm font-bold text-amber-700 font-mono mt-1">{command}</div>
              <button onClick={copy} className="mt-2 text-xs px-3 py-1 bg-amber-100 text-amber-600 rounded-lg hover:bg-amber-200 transition">{copied ? u.copied : u.copy}</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">{u.presets}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {presets.map(p => (
              <button key={p.label} onClick={() => applyPreset(p.label)} className={`p-3 rounded-xl border text-left transition hover:shadow-md ${numeric === p.label ? 'border-indigo-300 bg-indigo-50' : 'border-gray-100 hover:border-gray-200'}`}>
                <div className="font-bold font-mono text-lg">{p.label}</div>
                <div className="text-xs text-gray-500">{p.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
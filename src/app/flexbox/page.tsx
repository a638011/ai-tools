'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

type FlexItem = { id: number; grow: number; shrink: number; basis: string; alignSelf: string; order: number; text: string }

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'Flexbox Playground', desc: '可视化调试CSS Flexbox布局', container: '容器属性', items: '子项', addItem: '+ 添加子项', removeItem: '删除', direction: '方向', wrap: '换行', justifyContent: '主轴对齐', alignItems: '交叉轴对齐', alignContent: '多行对齐', gap: '间距', grow: '放大', shrink: '缩小', basis: '基准', alignSelf: '自身对齐', order: '排序', css: 'CSS代码', copy: '📋 复制', copied: '✅ 已复制', reset: '重置' },
  en: { title: 'Flexbox Playground', desc: 'Visually debug CSS Flexbox layouts', container: 'Container', items: 'Items', addItem: '+ Add Item', removeItem: 'Remove', direction: 'Direction', wrap: 'Wrap', justifyContent: 'Justify Content', alignItems: 'Align Items', alignContent: 'Align Content', gap: 'Gap', grow: 'Grow', shrink: 'Shrink', basis: 'Basis', alignSelf: 'Align Self', order: 'Order', css: 'CSS Code', copy: '📋 Copy', copied: '✅ Copied', reset: 'Reset' },
  ja: { title: 'Flexbox Playground', desc: 'CSS Flexboxレイアウトを視覚的にデバッグ', container: 'コンテナ', items: 'アイテム', addItem: '+ 追加', removeItem: '削除', direction: '方向', wrap: '折り返し', justifyContent: '主軸配置', alignItems: '交差軸配置', alignContent: '複数行配置', gap: 'ギャップ', grow: '拡大', shrink: '縮小', basis: '基準', alignSelf: '自身配置', order: '順序', css: 'CSSコード', copy: '📋 コピー', copied: '✅ コピー済', reset: 'リセット' },
  ko: { title: 'Flexbox Playground', desc: 'CSS Flexbox 레이아웃 시각적 디버깅', container: '컨테이너', items: '아이템', addItem: '+ 추가', removeItem: '삭제', direction: '방향', wrap: '줄바꿈', justifyContent: '주축 정렬', alignItems: '교차축 정렬', alignContent: '여러줄 정렬', gap: '간격', grow: '확대', shrink: '축소', basis: '기준', alignSelf: '자체 정렬', order: '순서', css: 'CSS 코드', copy: '📋 복사', copied: '✅ 복사됨', reset: '초기화' },
  es: { title: 'Flexbox Playground', desc: 'Depura visualmente layouts CSS Flexbox', container: 'Contenedor', items: 'Elementos', addItem: '+ Agregar', removeItem: 'Eliminar', direction: 'Dirección', wrap: 'Wrap', justifyContent: 'Justify Content', alignItems: 'Align Items', alignContent: 'Align Content', gap: 'Gap', grow: 'Grow', shrink: 'Shrink', basis: 'Basis', alignSelf: 'Align Self', order: 'Orden', css: 'Código CSS', copy: '📋 Copiar', copied: '✅ Copiado', reset: 'Reiniciar' },
}

const colors = ['#818cf8','#f472b6','#34d399','#fbbf24','#60a5fa','#a78bfa','#fb923c','#2dd4bf']

export default function FlexboxPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [dir, setDir] = useState('row')
  const [wrap, setWrap] = useState('nowrap')
  const [jc, setJc] = useState('flex-start')
  const [ai, setAi] = useState('stretch')
  const [ac, setAc] = useState('stretch')
  const [gap, setGap] = useState(8)
  const [items, setItems] = useState<FlexItem[]>([
    { id: 1, grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0, text: '1' },
    { id: 2, grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0, text: '2' },
    { id: 3, grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0, text: '3' },
  ])
  const [sel, setSel] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  let nextId = items.length ? Math.max(...items.map(i => i.id)) + 1 : 1

  const addItem = () => {
    const id = nextId++
    setItems([...items, { id, grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0, text: String(items.length + 1) }])
  }
  const removeItem = (id: number) => {
    setItems(items.filter(i => i.id !== id))
    if (sel === id) setSel(null)
  }
  const updateItem = (id: number, patch: Partial<FlexItem>) => {
    setItems(items.map(i => i.id === id ? { ...i, ...patch } : i))
  }

  const containerCSS = `display: flex;\nflex-direction: ${dir};\nflex-wrap: ${wrap};\njustify-content: ${jc};\nalign-items: ${ai};\nalign-content: ${ac};\ngap: ${gap}px;`
  const itemsCSS = items.filter(i => i.grow !== 0 || i.shrink !== 1 || i.basis !== 'auto' || i.alignSelf !== 'auto' || i.order !== 0)
    .map(i => {
      const props: string[] = []
      if (i.grow !== 0) props.push(`flex-grow: ${i.grow};`)
      if (i.shrink !== 1) props.push(`flex-shrink: ${i.shrink};`)
      if (i.basis !== 'auto') props.push(`flex-basis: ${i.basis};`)
      if (i.alignSelf !== 'auto') props.push(`align-self: ${i.alignSelf};`)
      if (i.order !== 0) props.push(`order: ${i.order};`)
      return `.item-${i.text} {\n  ${props.join('\n  ')}\n}`
    }).join('\n\n')
  const fullCSS = `.container {\n  ${containerCSS.split('\n').join('\n  ')}\n}` + (itemsCSS ? '\n\n' + itemsCSS : '')

  const copy = () => { navigator.clipboard.writeText(fullCSS); setCopied(true); setTimeout(() => setCopied(false), 1500) }
  const reset = () => {
    setDir('row'); setWrap('nowrap'); setJc('flex-start'); setAi('stretch'); setAc('stretch'); setGap(8)
    setItems([
      { id: 1, grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0, text: '1' },
      { id: 2, grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0, text: '2' },
      { id: 3, grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0, text: '3' },
    ])
    setSel(null)
  }

  const selItem = sel !== null ? items.find(i => i.id === sel) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">{u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-semibold mb-3 text-gray-800">{u.container}</h3>
              <div className="space-y-3">
                <Label label={u.direction}>
                  <select value={dir} onChange={e => setDir(e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm">
                    {['row','row-reverse','column','column-reverse'].map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </Label>
                <Label label={u.wrap}>
                  <select value={wrap} onChange={e => setWrap(e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm">
                    {['nowrap','wrap','wrap-reverse'].map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </Label>
                <Label label={u.justifyContent}>
                  <select value={jc} onChange={e => setJc(e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm">
                    {['flex-start','flex-end','center','space-between','space-around','space-evenly'].map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </Label>
                <Label label={u.alignItems}>
                  <select value={ai} onChange={e => setAi(e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm">
                    {['stretch','flex-start','flex-end','center','baseline'].map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </Label>
                <Label label={u.alignContent}>
                  <select value={ac} onChange={e => setAc(e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm">
                    {['stretch','flex-start','flex-end','center','space-between','space-around'].map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </Label>
                <Label label={`${u.gap}: ${gap}px`}>
                  <input type="range" min={0} max={40} value={gap} onChange={e => setGap(+e.target.value)} className="w-full" />
                </Label>
              </div>
            </div>

            {/* Item controls */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-800">{u.items} ({items.length})</h3>
                <button onClick={addItem} className="text-sm text-indigo-600 hover:text-indigo-800">{u.addItem}</button>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {items.map((item, idx) => (
                  <button key={item.id} onClick={() => setSel(sel === item.id ? null : item.id)}
                    className={`w-8 h-8 rounded-lg text-white text-sm font-bold transition ${sel === item.id ? 'ring-2 ring-offset-2 ring-indigo-500 scale-110' : ''}`}
                    style={{ backgroundColor: colors[idx % colors.length] }}>{item.text}</button>
                ))}
              </div>
              {selItem && (
                <div className="space-y-2 border-t pt-3">
                  <Label label={`${u.grow}: ${selItem.grow}`}>
                    <input type="range" min={0} max={5} value={selItem.grow} onChange={e => updateItem(selItem.id, { grow: +e.target.value })} className="w-full" />
                  </Label>
                  <Label label={`${u.shrink}: ${selItem.shrink}`}>
                    <input type="range" min={0} max={5} value={selItem.shrink} onChange={e => updateItem(selItem.id, { shrink: +e.target.value })} className="w-full" />
                  </Label>
                  <Label label={u.basis}>
                    <input type="text" value={selItem.basis} onChange={e => updateItem(selItem.id, { basis: e.target.value })} className="w-full border rounded-lg px-3 py-1.5 text-sm" />
                  </Label>
                  <Label label={u.alignSelf}>
                    <select value={selItem.alignSelf} onChange={e => updateItem(selItem.id, { alignSelf: e.target.value })} className="w-full border rounded-lg px-3 py-1.5 text-sm">
                      {['auto','flex-start','flex-end','center','stretch','baseline'].map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </Label>
                  <Label label={`${u.order}: ${selItem.order}`}>
                    <input type="range" min={-5} max={5} value={selItem.order} onChange={e => updateItem(selItem.id, { order: +e.target.value })} className="w-full" />
                  </Label>
                  <button onClick={() => removeItem(selItem.id)} className="text-sm text-red-500 hover:text-red-700">{u.removeItem}</button>
                </div>
              )}
            </div>
            <button onClick={reset} className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm text-gray-600 transition">{u.reset}</button>
          </div>

          {/* Preview + CSS */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 min-h-[300px]"
                style={{ display: 'flex', flexDirection: dir as any, flexWrap: wrap as any, justifyContent: jc, alignItems: ai, alignContent: ac, gap: `${gap}px` }}>
                {items.map((item, idx) => (
                  <div key={item.id} onClick={() => setSel(sel === item.id ? null : item.id)}
                    className={`flex items-center justify-center text-white font-bold rounded-xl cursor-pointer transition-all hover:scale-105 ${sel === item.id ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                    style={{
                      backgroundColor: colors[idx % colors.length],
                      flexGrow: item.grow, flexShrink: item.shrink, flexBasis: item.basis,
                      alignSelf: item.alignSelf as any, order: item.order,
                      minWidth: 60, minHeight: 60, padding: '12px 20px', fontSize: '1.2rem',
                    }}>{item.text}</div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{u.css}</h3>
                <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>
              </div>
              <pre className="bg-gray-50 rounded-xl p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono text-gray-700">{fullCSS}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Label({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><div className="text-xs text-gray-500 mb-1">{label}</div>{children}</div>
}

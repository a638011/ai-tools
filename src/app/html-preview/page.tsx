'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'HTML预览器', desc: '在线编写HTML/CSS/JS并实时预览效果', html: 'HTML', css: 'CSS', js: 'JavaScript', preview: '预览', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', fullscreen: '全屏', tab_html: 'HTML', tab_css: 'CSS', tab_js: 'JS' },
  en: { title: 'HTML Previewer', desc: 'Write HTML/CSS/JS and preview in real-time', html: 'HTML', css: 'CSS', js: 'JavaScript', preview: 'Preview', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', fullscreen: 'Fullscreen', tab_html: 'HTML', tab_css: 'CSS', tab_js: 'JS' },
  ja: { title: 'HTMLプレビュー', desc: 'HTML/CSS/JSを書いてリアルタイムプレビュー', html: 'HTML', css: 'CSS', js: 'JavaScript', preview: 'プレビュー', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', fullscreen: '全画面', tab_html: 'HTML', tab_css: 'CSS', tab_js: 'JS' },
  ko: { title: 'HTML 미리보기', desc: 'HTML/CSS/JS 작성 및 실시간 미리보기', html: 'HTML', css: 'CSS', js: 'JavaScript', preview: '미리보기', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', fullscreen: '전체화면', tab_html: 'HTML', tab_css: 'CSS', tab_js: 'JS' },
  es: { title: 'Previsualizador HTML', desc: 'Escribe HTML/CSS/JS y previsualiza en tiempo real', html: 'HTML', css: 'CSS', js: 'JavaScript', preview: 'Vista Previa', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', fullscreen: 'Pantalla Completa', tab_html: 'HTML', tab_css: 'CSS', tab_js: 'JS' },
}

const exHTML = `<div class="card">
  <h1>Hello World! 🌍</h1>
  <p>This is a live HTML preview.</p>
  <button onclick="changeColor()">Click Me</button>
  <div id="box" class="box"></div>
</div>`

const exCSS = `.card {
  font-family: system-ui, sans-serif;
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
h1 { margin: 0 0 10px; font-size: 2em; }
p { opacity: 0.9; margin-bottom: 20px; }
button {
  background: white; color: #764ba2; border: none;
  padding: 10px 24px; border-radius: 8px; font-size: 16px;
  cursor: pointer; font-weight: bold;
  transition: transform 0.2s;
}
button:hover { transform: scale(1.05); }
.box {
  width: 60px; height: 60px; margin: 20px auto 0;
  border-radius: 12px; background: rgba(255,255,255,0.3);
  transition: all 0.3s;
}`

const exJS = `function changeColor() {
  const box = document.getElementById('box');
  const colors = ['#ff6b6b','#ffd93d','#6bcb77','#4d96ff','#ff922b'];
  box.style.background = colors[Math.floor(Math.random() * colors.length)];
  box.style.transform = 'rotate(' + Math.floor(Math.random()*360) + 'deg)';
}`

export default function HtmlPreviewPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [tab, setTab] = useState<'html' | 'css' | 'js'>('html')
  const [copied, setCopied] = useState(false)

  const srcDoc = `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`

  const loadExample = () => { setHtml(exHTML); setCss(exCSS); setJs(exJS) }
  const clear = () => { setHtml(''); setCss(''); setJs('') }
  const copyAll = () => {
    navigator.clipboard.writeText(srcDoc)
    setCopied(true); setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🌐 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex gap-2 mb-4">
          <button onClick={loadExample} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={clear} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          <button onClick={copyAll} className="px-4 py-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl text-sm transition">{copied ? u.copied : u.copy}</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Editor */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex border-b">
              {(['html', 'css', 'js'] as const).map(t => (
                <button key={t} onClick={() => setTab(t)}
                  className={`flex-1 py-3 text-sm font-medium transition ${tab === t ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-500' : 'text-gray-500 hover:bg-gray-50'}`}>
                  {u[`tab_${t}`]}
                </button>
              ))}
            </div>
            <div className="p-0">
              {tab === 'html' && <textarea value={html} onChange={e => setHtml(e.target.value)} placeholder="<h1>Hello</h1>" className="w-full h-[400px] p-4 text-sm font-mono resize-none outline-none" />}
              {tab === 'css' && <textarea value={css} onChange={e => setCss(e.target.value)} placeholder="body { color: red; }" className="w-full h-[400px] p-4 text-sm font-mono resize-none outline-none" />}
              {tab === 'js' && <textarea value={js} onChange={e => setJs(e.target.value)} placeholder="console.log('hello')" className="w-full h-[400px] p-4 text-sm font-mono resize-none outline-none" />}
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="py-3 px-4 border-b bg-gray-50 text-sm font-medium text-gray-600">{u.preview}</div>
            <iframe srcDoc={srcDoc} sandbox="allow-scripts" className="w-full h-[400px] border-0" title="preview" />
          </div>
        </div>
      </div>
    </div>
  )
}

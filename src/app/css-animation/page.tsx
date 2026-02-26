'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'CSS动画生成器', desc: '选择动画类型，调节参数，实时预览，生成CSS @keyframes代码', type: '动画类型', duration: '时长(s)', timing: '缓动函数', delay: '延迟(s)', iterations: '重复次数', direction: '方向', preview: '预览', code: '生成代码', copy: '📋 复制', copied: '✅ 已复制', infinite: '无限', normal: '正常', reverse: '反向', alternate: '交替', fadeIn: '淡入', fadeOut: '淡出', slideLeft: '左滑入', slideRight: '右滑入', slideUp: '上滑入', slideDown: '下滑入', rotate: '旋转', bounce: '弹跳', scale: '缩放', shake: '抖动' },
  en: { title: 'CSS Animation Generator', desc: 'Choose animation type, adjust parameters, live preview, generate CSS @keyframes', type: 'Type', duration: 'Duration(s)', timing: 'Timing', delay: 'Delay(s)', iterations: 'Iterations', direction: 'Direction', preview: 'Preview', code: 'Generated Code', copy: '📋 Copy', copied: '✅ Copied', infinite: 'Infinite', normal: 'Normal', reverse: 'Reverse', alternate: 'Alternate', fadeIn: 'Fade In', fadeOut: 'Fade Out', slideLeft: 'Slide Left', slideRight: 'Slide Right', slideUp: 'Slide Up', slideDown: 'Slide Down', rotate: 'Rotate', bounce: 'Bounce', scale: 'Scale', shake: 'Shake' },
  ja: { title: 'CSSアニメーション生成', desc: 'アニメーションタイプを選択、パラメータ調整、リアルタイムプレビュー', type: 'タイプ', duration: '時間(s)', timing: 'イージング', delay: '遅延(s)', iterations: '繰返し', direction: '方向', preview: 'プレビュー', code: '生成コード', copy: '📋 コピー', copied: '✅ コピー済', infinite: '無限', normal: '通常', reverse: '逆', alternate: '交互', fadeIn: 'フェードイン', fadeOut: 'フェードアウト', slideLeft: '左スライド', slideRight: '右スライド', slideUp: '上スライド', slideDown: '下スライド', rotate: '回転', bounce: 'バウンス', scale: 'スケール', shake: 'シェイク' },
  ko: { title: 'CSS 애니메이션 생성기', desc: '애니메이션 유형 선택, 매개변수 조정, 실시간 미리보기', type: '유형', duration: '시간(s)', timing: '이징', delay: '지연(s)', iterations: '반복', direction: '방향', preview: '미리보기', code: '생성된 코드', copy: '📋 복사', copied: '✅ 복사됨', infinite: '무한', normal: '정상', reverse: '역방향', alternate: '교대', fadeIn: '페이드인', fadeOut: '페이드아웃', slideLeft: '왼쪽 슬라이드', slideRight: '오른쪽 슬라이드', slideUp: '위 슬라이드', slideDown: '아래 슬라이드', rotate: '회전', bounce: '바운스', scale: '스케일', shake: '흔들기' },
  es: { title: 'Generador de Animaciones CSS', desc: 'Elige tipo de animación, ajusta parámetros, vista previa en vivo', type: 'Tipo', duration: 'Duración(s)', timing: 'Timing', delay: 'Retraso(s)', iterations: 'Iteraciones', direction: 'Dirección', preview: 'Vista Previa', code: 'Código Generado', copy: '📋 Copiar', copied: '✅ Copiado', infinite: 'Infinito', normal: 'Normal', reverse: 'Reverso', alternate: 'Alternado', fadeIn: 'Fade In', fadeOut: 'Fade Out', slideLeft: 'Slide Izq', slideRight: 'Slide Der', slideUp: 'Slide Arriba', slideDown: 'Slide Abajo', rotate: 'Rotar', bounce: 'Rebote', scale: 'Escala', shake: 'Sacudir' },
}

const animations: Record<string, string> = {
  fadeIn: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
  fadeOut: `@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}`,
  slideLeft: `@keyframes slideLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
  slideRight: `@keyframes slideRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
  slideUp: `@keyframes slideUp {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
  slideDown: `@keyframes slideDown {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
  rotate: `@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
  bounce: `@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}`,
  scale: `@keyframes scale {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`,
  shake: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}`,
}

const timingFns = ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out']
const directions = ['normal', 'reverse', 'alternate', 'alternate-reverse']
const animTypes = ['fadeIn', 'fadeOut', 'slideLeft', 'slideRight', 'slideUp', 'slideDown', 'rotate', 'bounce', 'scale', 'shake']

export default function CssAnimationPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [animType, setAnimType] = useState('fadeIn')
  const [duration, setDuration] = useState(1)
  const [timing, setTiming] = useState('ease')
  const [delay, setDelay] = useState(0)
  const [iterations, setIterations] = useState('infinite')
  const [direction, setDirection] = useState('normal')
  const [copied, setCopied] = useState(false)
  const [key, setKey] = useState(0)

  const animProp = `${animType} ${duration}s ${timing} ${delay}s ${iterations} ${direction}`
  const fullCss = `${animations[animType]}

.element {
  animation: ${animProp};
}`

  const copy = () => { navigator.clipboard.writeText(fullCss); setCopied(true); setTimeout(() => setCopied(false), 1500) }
  const replay = () => setKey(k => k + 1)

  const typeLabels: Record<string, string> = { fadeIn: u.fadeIn, fadeOut: u.fadeOut, slideLeft: u.slideLeft, slideRight: u.slideRight, slideUp: u.slideUp, slideDown: u.slideDown, rotate: u.rotate, bounce: u.bounce, scale: u.scale, shake: u.shake }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">✨ {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <div className="flex flex-wrap gap-3 items-center mb-3">
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.type}:</label>
              <select value={animType} onChange={e => { setAnimType(e.target.value); replay() }} className="border rounded-lg px-2 py-1 text-sm">{animTypes.map(a => <option key={a} value={a}>{typeLabels[a]}</option>)}</select>
            </div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.duration}:</label><input type="number" min={0.1} max={10} step={0.1} value={duration} onChange={e => setDuration(+e.target.value)} className="w-16 border rounded-lg px-2 py-1 text-sm text-center" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.timing}:</label>
              <select value={timing} onChange={e => setTiming(e.target.value)} className="border rounded-lg px-2 py-1 text-sm">{timingFns.map(f => <option key={f} value={f}>{f}</option>)}</select>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.delay}:</label><input type="number" min={0} max={5} step={0.1} value={delay} onChange={e => setDelay(+e.target.value)} className="w-16 border rounded-lg px-2 py-1 text-sm text-center" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.iterations}:</label>
              <select value={iterations} onChange={e => setIterations(e.target.value)} className="border rounded-lg px-2 py-1 text-sm">
                <option value="infinite">{u.infinite}</option>{[1,2,3,5].map(n => <option key={n} value={String(n)}>{n}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.direction}:</label>
              <select value={direction} onChange={e => setDirection(e.target.value)} className="border rounded-lg px-2 py-1 text-sm">{directions.map(d => <option key={d} value={d}>{d}</option>)}</select>
            </div>
            <button onClick={replay} className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition text-sm">🔄 Replay</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.preview}</h3>
            <div className="border rounded-xl bg-gray-50 flex items-center justify-center min-h-[250px] overflow-hidden">
              <div key={key} className="w-24 h-24 bg-indigo-500 rounded-2xl shadow-lg" style={{ animation: animProp }} />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">{u.code}</h3>
              <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>
            </div>
            <pre className="bg-gray-900 text-green-400 rounded-xl p-4 text-sm font-mono overflow-auto whitespace-pre-wrap max-h-[300px]">{fullCss}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

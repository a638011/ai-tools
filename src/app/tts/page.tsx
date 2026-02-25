'use client'
import { useState, useRef } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '文本转语音', desc: '使用浏览器内置语音合成，将文本转为语音', input: '输入文本', play: '▶ 播放', pause: '⏸ 暂停', resume: '▶ 继续', stop: '⏹ 停止', voice: '语音', rate: '语速', pitch: '音调', volume: '音量', placeholder: '请输入要转换为语音的文本...', noSupport: '您的浏览器不支持语音合成', charCount: '字符数', speaking: '播放中...', ready: '准备就绪', download: '提示：浏览器TTS不支持下载音频文件', presets: '预设文本', preset1: '你好，欢迎使用文本转语音工具。这是一个免费的在线工具，可以将任何文本转换为语音。', preset2: 'The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet.', preset3: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。' },
  en: { title: 'Text to Speech', desc: 'Convert text to speech using browser built-in synthesis', input: 'Input Text', play: '▶ Play', pause: '⏸ Pause', resume: '▶ Resume', stop: '⏹ Stop', voice: 'Voice', rate: 'Rate', pitch: 'Pitch', volume: 'Volume', placeholder: 'Enter text to convert to speech...', noSupport: 'Your browser does not support speech synthesis', charCount: 'Characters', speaking: 'Speaking...', ready: 'Ready', download: 'Note: Browser TTS does not support audio file download', presets: 'Presets', preset1: 'Hello, welcome to the Text to Speech tool. This is a free online tool that converts any text to speech.', preset2: 'The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet.', preset3: 'To be, or not to be, that is the question. Whether it is nobler in the mind to suffer the slings and arrows of outrageous fortune.' },
  ja: { title: 'テキスト読み上げ', desc: 'ブラウザ内蔵の音声合成でテキストを読み上げ', input: 'テキスト入力', play: '▶ 再生', pause: '⏸ 一時停止', resume: '▶ 再開', stop: '⏹ 停止', voice: '音声', rate: '速度', pitch: 'ピッチ', volume: '音量', placeholder: '読み上げるテキストを入力...', noSupport: 'お使いのブラウザは音声合成に対応していません', charCount: '文字数', speaking: '再生中...', ready: '準備完了', download: '注意：ブラウザTTSは音声ファイルのダウンロードに対応していません', presets: 'プリセット', preset1: 'こんにちは、テキスト読み上げツールへようこそ。', preset2: 'The quick brown fox jumps over the lazy dog.', preset3: '春はあけぼの。やうやう白くなりゆく山際、少し明かりて、紫だちたる雲の細くたなびきたる。' },
  ko: { title: '텍스트 음성 변환', desc: '브라우저 내장 음성 합성으로 텍스트를 음성으로 변환', input: '텍스트 입력', play: '▶ 재생', pause: '⏸ 일시정지', resume: '▶ 재개', stop: '⏹ 정지', voice: '음성', rate: '속도', pitch: '피치', volume: '볼륨', placeholder: '음성으로 변환할 텍스트를 입력...', noSupport: '브라우저가 음성 합성을 지원하지 않습니다', charCount: '글자수', speaking: '재생 중...', ready: '준비 완료', download: '참고: 브라우저 TTS는 오디오 파일 다운로드를 지원하지 않습니다', presets: '프리셋', preset1: '안녕하세요, 텍스트 음성 변환 도구에 오신 것을 환영합니다.', preset2: 'The quick brown fox jumps over the lazy dog.', preset3: '하늘과 바람과 별과 시. 죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를.' },
  es: { title: 'Texto a Voz', desc: 'Convierte texto a voz usando síntesis del navegador', input: 'Texto', play: '▶ Reproducir', pause: '⏸ Pausar', resume: '▶ Reanudar', stop: '⏹ Detener', voice: 'Voz', rate: 'Velocidad', pitch: 'Tono', volume: 'Volumen', placeholder: 'Ingrese texto para convertir a voz...', noSupport: 'Su navegador no soporta síntesis de voz', charCount: 'Caracteres', speaking: 'Reproduciendo...', ready: 'Listo', download: 'Nota: TTS del navegador no soporta descarga de archivos de audio', presets: 'Presets', preset1: 'Hola, bienvenido a la herramienta de texto a voz. Esta es una herramienta gratuita en línea.', preset2: 'The quick brown fox jumps over the lazy dog.', preset3: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo.' },
}

export default function TTSPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [text, setText] = useState('')
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceIdx, setVoiceIdx] = useState(0)
  const [rate, setRate] = useState(1)
  const [pitch, setPitch] = useState(1)
  const [volume, setVolume] = useState(1)
  const [status, setStatus] = useState<'idle' | 'speaking' | 'paused'>('idle')
  const loaded = useRef(false)

  if (typeof window !== 'undefined' && !loaded.current) {
    const load = () => { const v = speechSynthesis.getVoices(); if (v.length) { setVoices(v); loaded.current = true } }
    load()
    speechSynthesis.onvoiceschanged = load
  }

  const speak = () => {
    if (!text.trim()) return
    speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    if (voices[voiceIdx]) utter.voice = voices[voiceIdx]
    utter.rate = rate; utter.pitch = pitch; utter.volume = volume
    utter.onend = () => setStatus('idle')
    utter.onerror = () => setStatus('idle')
    speechSynthesis.speak(utter)
    setStatus('speaking')
  }
  const pause = () => { speechSynthesis.pause(); setStatus('paused') }
  const resume = () => { speechSynthesis.resume(); setStatus('speaking') }
  const stop = () => { speechSynthesis.cancel(); setStatus('idle') }

  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔊 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        {!supported ? (
          <div className="bg-red-50 text-red-600 rounded-xl p-4">{u.noSupport}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{u.input}</h3>
                  <span className="text-xs text-gray-400">{u.charCount}: {text.length}</span>
                </div>
                <textarea value={text} onChange={e => setText(e.target.value)} placeholder={u.placeholder}
                  className="w-full h-48 border rounded-xl p-4 text-sm resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
                <div className="flex gap-2 mt-3">
                  {status === 'idle' && <button onClick={speak} className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium">{u.play}</button>}
                  {status === 'speaking' && <button onClick={pause} className="px-6 py-2.5 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition font-medium">{u.pause}</button>}
                  {status === 'paused' && <button onClick={resume} className="px-6 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 transition font-medium">{u.resume}</button>}
                  {status !== 'idle' && <button onClick={stop} className="px-6 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 transition font-medium">{u.stop}</button>}
                  <div className={`flex items-center gap-2 ml-auto text-sm ${status === 'speaking' ? 'text-green-600' : status === 'paused' ? 'text-yellow-600' : 'text-gray-400'}`}>
                    {status === 'speaking' && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />}
                    {status === 'speaking' ? u.speaking : status === 'paused' ? u.pause : u.ready}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-3">{u.presets}</h3>
                <div className="space-y-2">
                  {[u.preset1, u.preset2, u.preset3].map((p, i) => (
                    <button key={i} onClick={() => setText(p)} className="block w-full text-left text-sm p-3 bg-gray-50 hover:bg-indigo-50 rounded-xl transition truncate text-gray-600 hover:text-indigo-600">{p}</button>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-400 text-center">{u.download}</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-3">{u.voice}</h3>
                <select value={voiceIdx} onChange={e => setVoiceIdx(+e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm mb-4">
                  {voices.map((v, i) => <option key={i} value={i}>{v.name} ({v.lang})</option>)}
                </select>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1"><span>{u.rate}</span><span>{rate.toFixed(1)}x</span></div>
                    <input type="range" min={0.1} max={3} step={0.1} value={rate} onChange={e => setRate(+e.target.value)} className="w-full" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1"><span>{u.pitch}</span><span>{pitch.toFixed(1)}</span></div>
                    <input type="range" min={0} max={2} step={0.1} value={pitch} onChange={e => setPitch(+e.target.value)} className="w-full" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1"><span>{u.volume}</span><span>{Math.round(volume * 100)}%</span></div>
                    <input type="range" min={0} max={1} step={0.05} value={volume} onChange={e => setVolume(+e.target.value)} className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

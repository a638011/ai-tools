import { Locale } from './config'

type ToolUI = {
  generate: string; result: string; copy: string; clear: string;
  encode: string; decode: string; format: string; compress: string;
  convert: string; compare: string; placeholder: string;
}

const toolUI: Record<Locale, ToolUI> = {
  zh: { generate: '🚀 生成', result: '生成结果', copy: '📋 复制', clear: '清空', encode: '🔒 编码', decode: '🔓 解码', format: '🎨 格式化', compress: '📦 压缩', convert: '转换', compare: '🔍 对比差异', placeholder: '请输入内容...' },
  en: { generate: '🚀 Generate', result: 'Result', copy: '📋 Copy', clear: 'Clear', encode: '🔒 Encode', decode: '🔓 Decode', format: '🎨 Format', compress: '📦 Minify', convert: 'Convert', compare: '🔍 Compare', placeholder: 'Enter content...' },
  ja: { generate: '🚀 生成', result: '結果', copy: '📋 コピー', clear: 'クリア', encode: '🔒 エンコード', decode: '🔓 デコード', format: '🎨 整形', compress: '📦 圧縮', convert: '変換', compare: '🔍 比較', placeholder: '内容を入力...' },
  ko: { generate: '🚀 생성', result: '결과', copy: '📋 복사', clear: '지우기', encode: '🔒 인코딩', decode: '🔓 디코딩', format: '🎨 포맷', compress: '📦 압축', convert: '변환', compare: '🔍 비교', placeholder: '내용을 입력...' },
  es: { generate: '🚀 Generar', result: 'Resultado', copy: '📋 Copiar', clear: 'Limpiar', encode: '🔒 Codificar', decode: '🔓 Decodificar', format: '🎨 Formatear', compress: '📦 Comprimir', convert: 'Convertir', compare: '🔍 Comparar', placeholder: 'Ingrese contenido...' },
}

export function getToolUI(locale: Locale): ToolUI {
  return toolUI[locale] || toolUI.zh
}

export type { ToolUI }

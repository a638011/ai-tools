import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '高级感朋友圈文案大全：100+精选文案随便发 | AI Tools',
  description: '旅行、美食、自拍、工作、心情、健身等场景的朋友圈文案合集，文艺、搞笑、高冷、温暖、凡尔赛风格任选，直接复制发朋友圈。',
  keywords: '朋友圈文案,高级感文案,朋友圈文案大全,旅行文案,美食文案,文艺文案,搞笑文案,朋友圈怎么发',
}

export default function MomentsPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">高级感朋友圈文案大全：100+精选文案随便发</h1>
        <p className="text-gray-400 text-sm mb-8">2026-02-25 · 文案合集 · 阅读约4分钟</p>

        <p className="text-gray-700 leading-relaxed">发朋友圈最纠结的不是选图，而是配什么文字。太长没人看，太短没感觉，不发又手痒。这里按场景和风格整理了100+条精选文案，直接复制就能用。</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">✈️ 旅行文案</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>🎭 文艺：山河远阔，人间烟火。</p>
          <p>🎭 文艺：走过的路，都是风景；遇见的人，皆是温柔。</p>
          <p>😂 搞笑：旅行第一天：诗和远方。旅行第三天：我想回家躺着。</p>
          <p>😂 搞笑：去了一趟远方，发现远方也有堵车。</p>
          <p>🧊 高冷：在路上。</p>
          <p>🧊 高冷：不赶路，感受路。</p>
          <p>🌸 温暖：每一次出发，都是与更好的自己相遇。</p>
          <p>👑 凡尔赛：别人还在加班，我已经在海边了，不好意思。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">🍜 美食文案</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>🎭 文艺：人间烟火气，最抚凡人心。</p>
          <p>🎭 文艺：一餐一饭，皆是清欢。</p>
          <p>😂 搞笑：没有什么是一顿火锅解决不了的，如果有，那就两顿。</p>
          <p>😂 搞笑：今天的运动量 = 筷子举起放下 × 200次</p>
          <p>🧊 高冷：好吃。</p>
          <p>🌸 温暖：最好的治愈，是一顿热气腾腾的饭。</p>
          <p>👑 凡尔赛：这家店被我吃到了，算它运气好。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">🤳 自拍文案</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>🎭 文艺：岁月温柔，愿你被世界温柔以待。</p>
          <p>😂 搞笑：拍了99张选了这一张，你们看到的是精华中的精华。</p>
          <p>🧊 高冷：。</p>
          <p>🌸 温暖：记录一下此刻的自己，未来会感谢现在的你。</p>
          <p>👑 凡尔赛：好看是天生的，我也没办法。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">🌙 心情文案</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>🎭 文艺：人间值得，未来可期。</p>
          <p>😂 搞笑：今天的情绪：60%困，30%饿，10%不想上班。</p>
          <p>🧊 高冷：无所谓。</p>
          <p>🌸 温暖：慢慢来，一切都会好的。</p>
          <p>👑 凡尔赛：我的人生没有低谷，因为我一直在巅峰。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">想要更多？AI帮你写</h2>
        <p className="text-gray-700 leading-relaxed">以上只是精选，想要更多场景和风格的文案，试试<Link href="/moments" className="text-blue-500 hover:underline">AI朋友圈文案生成器</Link>，选场景选风格，一键生成3条备选文案。</p>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
          <p className="text-gray-700 mb-3">👇 立即体验</p>
          <Link href="/moments" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium">
            💬 打开AI朋友圈文案生成器
          </Link>
        </div>
      </article>
    </main>
  )
}

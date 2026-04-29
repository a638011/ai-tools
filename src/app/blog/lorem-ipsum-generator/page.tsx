import Link from 'next/link'

export default function LoremIpsumGenerator() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lorem Ipsum生成器：网页设计填充文本的完整指南</h1>
        <p className="text-gray-400 text-sm mb-8">2026年4月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">
          在网页设计和排版中，你是否经常遇到这样的困扰：内容还没准备，但页面布局需要填充文本；设计稿需要展示效果，却没有真实文案？Lorem Ipsum 生成器就是为解决这些问题而生的工具。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是 Lorem Ipsum？</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem Ipsum 是一种传统的印刷填充文本，起源于15世纪拉丁文献。它看起来像有意义的文字，但实际上是完全无意义的拉丁语，用于展示排版效果而不分散用户对实际内容的注意力。
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          这种「占位文本」（Placeholder Text）已成为全球设计师和开发者的行业标准，无论是苹果、谷歌还是各类企业官网，在设计阶段都会使用 Lorem Ipsum 来填充内容。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么设计师偏爱 Lorem Ipsum？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>视觉聚焦</strong>：读者不会受到文字含义的干扰，专注于版式和布局本身</li>
          <li><strong>比例还原</strong>：拉丁文字的字母宽度、间距与真实英文内容相近</li>
          <li><strong>行业惯例</strong>：客户和团队一眼就能认出这是「示例文本」</li>
          <li><strong>避免尴尬</strong>：比起「这里写文字」或「ABCDEF」，更专业美观</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">如何使用云韵 Lorem Ipsum 生成器</h2>
        <p className="text-gray-700 leading-relaxed">
          <Link href="/lorem" className="text-blue-500 hover:underline">云韵 Lorem Ipsum 生成器</Link> 提供以下功能：
        </p>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2 mt-4">
          <li><strong>段落数量</strong>：自由设置生成1-20个段落</li>
          <li><strong>每段句数</strong>：控制每个段落的句子数量</li>
          <li><strong>起始方式</strong>：可选「经典开头」（Neque porro...）或「随机开头」</li>
          <li><strong>一键复制</strong>：点击即可复制全部文本</li>
          <li><strong>HTML 标签</strong>：可选择是否包含段落标签 &lt;p&gt;</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">经典 Lorem Ipsum 开头</h2>
        <div className="bg-gray-50 p-4 rounded-lg text-gray-700 text-sm font-mono leading-relaxed">
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <p className="mt-2">No one loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">适用场景</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>网页设计</strong>：在 Photoshop、Figma、Sketch 中填充页面内容</li>
          <li><strong>前端开发</strong>：开发阶段快速搭建页面结构</li>
          <li><strong>原型设计</strong>：展示产品原型效果</li>
          <li><strong>印刷排版</strong>：书籍、海报、名片的排版预览</li>
          <li><strong>PPT 制作</strong>：模板设计时填充内容</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lorem Ipsum 与中文填充文本</h2>
        <p className="text-gray-700 leading-relaxed">
          如果你需要中文填充文本，可以使用「<Link href="/lorem" className="text-blue-500 hover:underline">随机中文字</Link>」或直接使用「<Link href="/text-case" className="text-blue-500 hover:underline">字数统计工具</Link>」配合随机中文生成功能。对于纯展示目的，中文「锅包肉」「宫保鸡丁」等网络流行语填充文本也是一种有趣的选择。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见问题</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-900">Q: Lorem Ipsum 是否有版权问题？</p>
            <p className="text-gray-700">A: Lorem Ipsum 来源于公共领域的拉丁文献，无任何版权限制，可自由使用。</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Q: 可以用中文代替 Lorem Ipsum 吗？</p>
            <p className="text-gray-700">A: 可以，但中文字符宽度与英文差异较大，不能真实反映排版效果。建议优先使用英文 Lorem Ipsum。</p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="text-blue-800">
            💡 <strong>提示</strong>：除了 Lorem Ipsum，你还可以使用 <Link href="/lorem" className="text-blue-600 hover:underline">云韵工具箱</Link> 中的其他工具，如 <Link href="/password-gen" className="text-blue-600 hover:underline">密码生成器</Link>、<Link href="/uuid" className="text-blue-600 hover:underline">UUID 生成器</Link>，全部免费无需注册。
          </p>
        </div>
      </article>
    </main>
  )
}
import Link from 'next/link'

export default function WordFrequencyAnalysis() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">词频统计分析：文本挖掘的第一步</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">词频统计是自然语言处理（NLP）和文本挖掘中最基础也最重要的技术之一。无论你是做内容分析、SEO优化还是学术研究，了解文本中词语的出现频率都能帮你快速把握核心信息。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是词频统计？</h2>
        <p className="text-gray-700 leading-relaxed">词频（Word Frequency）指的是某个词在文本中出现的次数。词频统计就是对文本中所有词语进行计数和排序，找出高频词和低频词。这是文本分析的第一步，也是构建词云、情感分析、主题提取等高级应用的基础。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">词频统计的应用场景</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">SEO优化</code><span className="text-gray-600">分析竞品文章的关键词密度和分布</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">内容审核</code><span className="text-gray-600">检测敏感词、垃圾信息的特征词</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">学术研究</code><span className="text-gray-600">分析论文、文献中的研究热点</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">舆情监控</code><span className="text-gray-600">追踪社交媒体上的热门话题</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">写作改进</code><span className="text-gray-600">发现用词重复，提升文章质量</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">中文分词：词频统计的前提</h2>
        <p className="text-gray-700 leading-relaxed">英文天然以空格分隔单词，但中文没有明确的词语边界。比如"研究生命的起源"可以切分为"研究/生命/的/起源"或"研究生/命/的/起源"，结果完全不同。</p>
        <p className="text-gray-700 leading-relaxed">常用的中文分词工具：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">jieba</code><span className="text-gray-600">Python最流行的中文分词库，支持精确/全/搜索引擎模式</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">HanLP</code><span className="text-gray-600">Java/Python，功能全面，支持命名实体识别</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">pkuseg</code><span className="text-gray-600">北大开源，针对不同领域有专门模型</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Python实现词频统计</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 英文词频统计</p>
          <p>from collections import Counter</p>
          <p>&nbsp;</p>
          <p>text = &quot;the quick brown fox jumps over the lazy dog the fox&quot;</p>
          <p>words = text.lower().split()</p>
          <p>freq = Counter(words)</p>
          <p>&nbsp;</p>
          <p className="text-gray-500"># 输出前5个高频词</p>
          <p>for word, count in freq.most_common(5):</p>
          <p>    print(f&quot;&#123;word&#125;: &#123;count&#125;&quot;)</p>
          <p className="text-green-600"># the: 3, fox: 2, quick: 1, brown: 1, jumps: 1</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 中文词频统计（使用jieba）</p>
          <p>import jieba</p>
          <p>from collections import Counter</p>
          <p>&nbsp;</p>
          <p>text = &quot;自然语言处理是人工智能的重要方向，自然语言处理技术应用广泛&quot;</p>
          <p>words = jieba.cut(text)</p>
          <p>freq = Counter(w for w in words if len(w) &gt; 1)</p>
          <p className="text-green-600"># 自然语言: 2, 处理: 2, 人工智能: 1, 技术: 1</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">停用词过滤</h2>
        <p className="text-gray-700 leading-relaxed">停用词（Stop Words）是指"的、了、在、是、我"等高频但无实际意义的词。不过滤停用词，统计结果会被这些词淹没。</p>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium">常见中文停用词：</p>
          <p className="mt-1">的、了、在、是、我、有、和、就、不、人、都、一、一个、上、也、很、到、说、要、去、你、会、着、没有、看、好、自己、这</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">TF-IDF：更智能的词频分析</h2>
        <p className="text-gray-700 leading-relaxed">单纯的词频统计有局限性——某些词在所有文档中都高频出现，并不能代表文档特征。TF-IDF（词频-逆文档频率）通过引入逆文档频率来解决这个问题：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-mono">TF-IDF = TF(词频) × IDF(逆文档频率)</p>
          <p className="mt-2">TF = 该词在文档中出现次数 / 文档总词数</p>
          <p>IDF = log(总文档数 / 包含该词的文档数)</p>
          <p className="mt-2 text-gray-500">一个词在某篇文档中频繁出现，但在其他文档中很少出现，TF-IDF值就高，说明它是该文档的特征词。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用技巧</h2>
        <p className="text-gray-700 leading-relaxed">1. 分析前先做文本清洗：去除标点、数字、特殊符号。</p>
        <p className="text-gray-700 leading-relaxed">2. 根据场景选择分词粒度：SEO分析用细粒度，主题提取用粗粒度。</p>
        <p className="text-gray-700 leading-relaxed">3. 自定义词典可以提升分词准确率，特别是专业术语和新词。</p>
        <p className="text-gray-700 leading-relaxed">4. 词频结果可视化推荐使用词云图，直观展示关键词分布。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想快速分析文本词频？试试我们的 <Link href="/word-frequency" className="text-blue-500 hover:underline font-medium">免费在线词频统计工具</Link>，粘贴文本即可获得词频排行和可视化结果。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

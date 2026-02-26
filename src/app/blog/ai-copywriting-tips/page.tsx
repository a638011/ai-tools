import Link from 'next/link'

export default function AiCopywritingTips() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI文案写作技巧：让AI帮你写出爆款文案</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">AI写作工具已经成为内容创作者的标配。但很多人用AI写出来的文案千篇一律、缺乏灵魂。问题不在AI，而在于你怎么用它。掌握正确的提示词技巧，AI可以成为你最强大的写作搭档。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">AI文案的正确定位</h2>
        <p className="text-gray-700 leading-relaxed">首先明确一点：AI是写作助手，不是写作替代品。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ AI擅长：生成初稿、提供灵感、改写润色、批量生产、多语言翻译</p>
          <p>❌ AI不擅长：原创观点、个人经历、情感共鸣、行业深度洞察、最新热点</p>
        </div>
        <p className="text-gray-700 leading-relaxed">最佳工作流：AI生成70%的基础内容，你负责30%的灵魂注入。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">提示词框架：RICE模型</h2>
        <p className="text-gray-700 leading-relaxed">写好提示词是用好AI的关键。推荐RICE框架：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-16">Role</code><span className="text-gray-600">角色 — 让AI扮演特定角色（资深文案、小红书博主、技术编辑）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-16">Intent</code><span className="text-gray-600">意图 — 明确你要什么（标题、正文、广告语、产品描述）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-16">Context</code><span className="text-gray-600">背景 — 提供必要信息（产品特点、目标受众、使用场景）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-16">Example</code><span className="text-gray-600">示例 — 给出参考样本（风格、格式、长度）</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实战：不同场景的提示词</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-4">
          <div>
            <p className="font-medium text-gray-900">场景1：小红书种草文</p>
            <p className="mt-1 italic">"你是一个小红书美妆博主，粉丝主要是20-30岁女性。请为一款售价199元的维C精华液写一篇种草笔记。要求：口语化、有使用体验感、包含before/after对比、适当使用emoji、控制在300字以内。"</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">场景2：产品详情页</p>
            <p className="mt-1 italic">"你是一个资深电商文案。请为一款蓝牙降噪耳机写产品详情页文案。核心卖点：40dB主动降噪、30小时续航、仅180g重量。目标用户：通勤上班族。风格：简洁专业，突出数据。"</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">场景3：公众号标题</p>
            <p className="mt-1 italic">"请为一篇关于'程序员转行产品经理'的文章生成10个公众号标题。要求：有悬念感、包含数字、控制在25字以内。参考风格：'月薪3万的程序员，为什么要转行做产品？'"</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">让AI文案更有"人味"的技巧</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 加入个人经历 — AI生成框架后，插入你的真实故事和感受</p>
          <p>2. 指定语气 — "用朋友聊天的语气"比"写一篇文章"效果好得多</p>
          <p>3. 给反面示例 — "不要用'在当今社会'这种开头"</p>
          <p>4. 限制用词 — "不要使用'赋能''抓手''闭环'等互联网黑话"</p>
          <p>5. 多轮迭代 — 第一版不满意就继续调整，"更口语化""更有趣""加入具体数据"</p>
          <p>6. 混合创作 — 自己写核心观点，让AI扩展和润色</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">AI文案的常见问题</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>❌ 废话太多 — 解决：要求"每句话都要有信息量，删除所有废话"</p>
          <p>❌ 过于正式 — 解决：指定"用口语化的方式，像跟朋友说话一样"</p>
          <p>❌ 千篇一律 — 解决：提供具体的风格参考和反面示例</p>
          <p>❌ 事实错误 — 解决：AI生成后务必人工核实所有数据和事实</p>
          <p>❌ 缺乏深度 — 解决：先自己列出核心观点，让AI围绕观点展开</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">高效工作流</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>第1步：明确目标 — 写给谁看？要达到什么效果？</p>
          <p>第2步：列出要点 — 自己列出3-5个核心信息点</p>
          <p>第3步：AI生成初稿 — 用RICE框架写提示词</p>
          <p>第4步：人工润色 — 加入个人风格、修正事实、调整语气</p>
          <p>第5步：多版本测试 — 让AI生成多个版本，选最好的组合</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要AI帮你写文案？试试我们的 <Link href="/ai-writer" className="text-blue-500 hover:underline font-medium">AI文案生成器</Link>，输入关键信息即可生成多种风格的文案。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

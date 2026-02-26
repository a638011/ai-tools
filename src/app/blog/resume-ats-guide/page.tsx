import Link from 'next/link'

export default function ResumeAtsGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">简历ATS系统：如何让你的简历通过机器筛选</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">你精心准备的简历投出去后石沉大海？很可能不是你不够优秀，而是你的简历没有通过ATS系统的筛选。据统计，超过90%的大中型企业使用ATS系统进行简历初筛，约75%的简历在这一步就被淘汰了。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是ATS？</h2>
        <p className="text-gray-700 leading-relaxed">ATS（Applicant Tracking System，申请人追踪系统）是企业用来管理招聘流程的软件。它会自动解析简历内容，提取关键信息，根据岗位要求进行匹配打分，然后将评分较高的简历推送给HR。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p className="font-medium">ATS的工作流程：</p>
          <p>1. 解析简历 → 提取姓名、联系方式、教育、工作经历等结构化信息</p>
          <p>2. 关键词匹配 → 将简历内容与岗位JD中的关键词进行比对</p>
          <p>3. 评分排序 → 根据匹配度给简历打分并排序</p>
          <p>4. 推送HR → 只有排名靠前的简历才会被HR看到</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ATS无法正确解析的简历特征</h2>
        <p className="text-gray-700 leading-relaxed">以下格式问题会导致ATS解析失败：</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p className="text-red-600 font-medium">❌ 常见的ATS杀手：</p>
          <p>• 使用图片格式简历（JPG/PNG）— ATS无法读取图片中的文字</p>
          <p>• 过度设计的排版 — 多栏布局、文本框、表格会打乱解析顺序</p>
          <p>• 花哨的图标代替文字 — 用📧图标代替"邮箱"，ATS识别不了</p>
          <p>• PDF中的不可选文字 — 扫描件或设计软件导出的PDF</p>
          <p>• 页眉页脚中的关键信息 — 很多ATS会跳过页眉页脚</p>
          <p>• 非标准字体 — 可能导致字符无法识别</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ATS友好的简历格式</h2>
        <div className="bg-green-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p className="text-green-600 font-medium">✅ ATS友好的做法：</p>
          <p>• 使用 .docx 或可选文字的 .pdf 格式</p>
          <p>• 单栏布局，从上到下线性排列</p>
          <p>• 使用标准字体：宋体、微软雅黑、Arial、Calibri</p>
          <p>• 用文字而非图标表示联系方式</p>
          <p>• 使用标准的板块标题：工作经历、教育背景、专业技能</p>
          <p>• 日期格式统一：2024.06 - 2026.02</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">关键词优化策略</h2>
        <p className="text-gray-700 leading-relaxed">关键词匹配是ATS筛选的核心。以下是优化策略：</p>
        <p className="text-gray-700 leading-relaxed">1. 仔细阅读岗位JD，提取高频关键词。如果JD提到"项目管理"3次，你的简历中也应该出现这个词。</p>
        <p className="text-gray-700 leading-relaxed">2. 使用岗位JD中的原词，不要自作聪明地换同义词。JD写"数据分析"，你就写"数据分析"，不要写"数据研究"。</p>
        <p className="text-gray-700 leading-relaxed">3. 硬技能关键词要具体：写"Python、SQL、Tableau"而不是"熟悉多种编程语言和工具"。</p>
        <p className="text-gray-700 leading-relaxed">4. 同时包含缩写和全称：如"搜索引擎优化（SEO）"，因为不确定ATS匹配哪个。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">简历内容的STAR法则</h2>
        <p className="text-gray-700 leading-relaxed">描述工作经历时，使用STAR法则让内容更有说服力：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">S - Situation</code><span className="text-gray-600">背景情境：什么项目、什么阶段</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">T - Task</code><span className="text-gray-600">你的任务：负责什么、目标是什么</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">A - Action</code><span className="text-gray-600">你的行动：具体做了什么</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">R - Result</code><span className="text-gray-600">结果成效：量化的成果数据</span></div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium">示例：</p>
          <p className="text-gray-500 mt-1">❌ 负责公司官网的SEO优化工作</p>
          <p className="text-green-600 mt-1">✅ 主导公司官网SEO优化项目，通过关键词策略调整和内容重构，6个月内自然搜索流量从日均2000提升至8000（增长300%），核心关键词排名进入百度前3</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">不同ATS系统的特点</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>系统</span><span>常见企业</span><span>特点</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>北森</span><span>国内大型企业</span><span>中文解析能力强</span>
            <span>Moka</span><span>互联网公司</span><span>智能匹配，支持AI筛选</span>
            <span>Workday</span><span>外企</span><span>全球化，英文简历友好</span>
            <span>SAP SuccessFactors</span><span>跨国企业</span><span>流程严格，格式要求高</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">自检清单</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>□ 简历格式为 .docx 或可选文字的 .pdf</p>
          <p>□ 单栏布局，无表格、文本框、图片</p>
          <p>□ 联系方式用纯文字，不在页眉页脚中</p>
          <p>□ 包含岗位JD中的核心关键词</p>
          <p>□ 技能名称使用标准写法（含缩写和全称）</p>
          <p>□ 工作经历有量化数据支撑</p>
          <p>□ 板块标题使用标准命名</p>
          <p>□ 日期格式统一</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想检查你的简历是否ATS友好？试试我们的 <Link href="/resume" className="text-blue-500 hover:underline font-medium">免费简历优化工具</Link>，帮你分析简历结构和关键词匹配度。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

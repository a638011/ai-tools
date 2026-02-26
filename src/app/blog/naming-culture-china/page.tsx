import Link from 'next/link'

export default function NamingCultureChina() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">中国起名文化：从五行八字到现代取名趋势</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">名字是父母给孩子的第一份礼物，也是伴随一生的符号。中国的起名文化源远流长，从古代的五行八字到现代的诗词取名，每个时代都有独特的命名偏好。本文带你了解中国起名文化的演变和实用取名方法。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">中国姓名的基本结构</h2>
        <p className="text-gray-700 leading-relaxed">中国人的姓名由姓和名两部分组成。姓在前，名在后，这与西方的 First Name + Last Name 顺序相反。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-16">姓</code><span className="text-gray-600">继承自父亲（或母亲），百家姓收录504个姓氏</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-16">辈分字</code><span className="text-gray-600">家族字辈，同辈人共用一个字（现代已较少使用）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-16">名</code><span className="text-gray-600">个人专属，寄托父母的期望和祝福</span></div>
        </div>
        <p className="text-gray-700 leading-relaxed">目前中国最常见的姓氏前十位：王、李、张、刘、陈、杨、黄、赵、吴、周。仅"王"姓就有超过1亿人。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">传统起名方法</h2>

        <p className="text-gray-700 leading-relaxed font-medium">五行起名法</p>
        <p className="text-gray-700 leading-relaxed">五行（金木水火土）是中国传统哲学的核心概念。根据出生时间推算八字，分析五行的强弱，通过名字来补充缺失的五行元素。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>五行</span><span>对应偏旁</span><span>常用字举例</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>金</span><span>钅、金</span><span>鑫、铭、锐、钰、银</span>
            <span>木</span><span>木、艹</span><span>林、森、梓、萱、芷</span>
            <span>水</span><span>氵、水</span><span>淼、涵、泽、洋、清</span>
            <span>火</span><span>火、灬</span><span>炎、烨、煜、焱、灿</span>
            <span>土</span><span>土、山</span><span>坤、垚、城、峰、岩</span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">生肖起名法</p>
        <p className="text-gray-700 leading-relaxed">根据出生年份的生肖选择合适的字。比如属兔的宜用"艹"（兔吃草）、"口"（兔住洞穴）等偏旁，忌用"日"（兔逢日为煎熬）等。</p>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">诗词典故起名法</p>
        <p className="text-gray-700 leading-relaxed">从古诗词、经典著作中取名，既有文化底蕴又朗朗上口。这是近年来非常流行的取名方式。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p><span className="font-medium">思远</span> — "青青子衿，悠悠我心。但为君故，沉吟至今"（曹操）</p>
          <p><span className="font-medium">清扬</span> — "有美一人，清扬婉兮"（《诗经》）</p>
          <p><span className="font-medium">子衿</span> — "青青子衿，悠悠我心"（《诗经》）</p>
          <p><span className="font-medium">明哲</span> — "既明且哲，以保其身"（《诗经》）</p>
          <p><span className="font-medium">致远</span> — "非淡泊无以明志，非宁静无以致远"（诸葛亮）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">不同年代的取名特征</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>年代</span><span>男性常见名</span><span>女性常见名</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>50-60年代</span><span>建国、国强、卫东</span><span>秀英、桂兰、淑珍</span>
            <span>70-80年代</span><span>伟、强、磊、军</span><span>芳、娟、丽、静</span>
            <span>90年代</span><span>浩、鹏、杰、超</span><span>婷、雪、慧、倩</span>
            <span>00年代</span><span>浩然、子轩、宇航</span><span>欣怡、紫涵、梓萱</span>
            <span>10-20年代</span><span>奕辰、宇泽、沐阳</span><span>一诺、依诺、芷若</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">可以看出，取名从政治化→简单化→文雅化→个性化的趋势演变。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">现代取名的注意事项</h2>
        <p className="text-gray-700 leading-relaxed">1. 避免生僻字。户口登记、银行开户、机票购买都可能遇到系统无法输入的问题。</p>
        <p className="text-gray-700 leading-relaxed">2. 注意谐音。名字的普通话和方言发音都要考虑，避免不雅谐音。</p>
        <p className="text-gray-700 leading-relaxed">3. 考虑重名率。"子轩""梓涵"等名字虽然好听，但重名率极高。可以通过公安部门的重名查询系统检查。</p>
        <p className="text-gray-700 leading-relaxed">4. 笔画适中。名字太复杂，孩子写名字会很痛苦。建议单字不超过15画。</p>
        <p className="text-gray-700 leading-relaxed">5. 性别辨识度。虽然中性名字越来越流行，但过于模糊的性别指向可能带来不便。</p>
        <p className="text-gray-700 leading-relaxed">6. 考虑英文场景。如果孩子将来可能出国，名字的拼音是否容易被外国人发音也值得考虑。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">取名的法律规定</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium">📋 中国姓名登记相关规定：</p>
          <p className="mt-1">• 姓名用字应当使用《通用规范汉字表》中的汉字</p>
          <p>• 姓名不得含有数字、字母、符号</p>
          <p>• 姓名长度一般不超过6个汉字</p>
          <p>• 可以随父姓或母姓</p>
          <p>• 成年后可以申请改名，但需要合理理由</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">正在为宝宝取名发愁？试试我们的 <Link href="/name-generator" className="text-blue-500 hover:underline font-medium">AI智能起名工具</Link>，结合五行、诗词、寓意等多维度为你推荐好名字。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

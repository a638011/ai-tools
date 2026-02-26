import Link from 'next/link'

export default function TextProcessingTips() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">文本批量处理技巧：查找替换的高级用法</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">日常工作中，我们经常需要批量处理文本：清理数据、格式转换、批量替换等。掌握高级查找替换技巧，能让你的效率提升10倍。本文介绍多种场景下的文本批量处理方法。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基础：普通查找替换</h2>
        <p className="text-gray-700 leading-relaxed">最简单的查找替换是精确匹配。但当你需要处理模式化的文本时，普通替换就力不从心了：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>📌 把所有日期从 "2026/02/15" 改为 "2026-02-15"</p>
          <p>📌 删除每行开头的行号</p>
          <p>📌 把 "姓名：张三" 格式改为 "张三（姓名）"</p>
          <p>📌 批量给URL加上超链接标签</p>
        </div>
        <p className="text-gray-700 leading-relaxed">这些场景都需要正则表达式查找替换。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">正则查找替换入门</h2>
        <p className="text-gray-700 leading-relaxed">正则替换的核心是捕获组——用括号 <code className="bg-gray-100 px-1 rounded text-sm">()</code> 捕获匹配内容，在替换中用 <code className="bg-gray-100 px-1 rounded text-sm">$1</code>、<code className="bg-gray-100 px-1 rounded text-sm">$2</code> 引用：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="text-gray-500 font-medium">日期格式转换：2026/02/15 → 2026-02-15</p>
            <p className="font-mono text-gray-700">查找：(\d{'{4}'})/(\d{'{2}'})/(\d{'{2}'})</p>
            <p className="font-mono text-gray-700">替换：$1-$2-$3</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">交换姓名格式：姓名：张三 → 张三（姓名）</p>
            <p className="font-mono text-gray-700">查找：(.+?)：(.+)</p>
            <p className="font-mono text-gray-700">替换：$2（$1）</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">给URL加链接标签</p>
            <p className="font-mono text-gray-700">查找：(https?://\S+)</p>
            <p className="font-mono text-gray-700">{`替换：<a href="$1">$1</a>`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">VS Code中的正则替换</h2>
        <p className="text-gray-700 leading-relaxed">VS Code的查找替换（Ctrl+H）支持正则模式，点击 <code className="bg-gray-100 px-1 rounded text-sm">.*</code> 按钮启用：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="text-gray-500 font-medium">删除空行</p>
            <p className="font-mono text-gray-700">查找：^\s*\n</p>
            <p className="font-mono text-gray-700">替换：（留空）</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">删除行尾空格</p>
            <p className="font-mono text-gray-700">查找：\s+$</p>
            <p className="font-mono text-gray-700">替换：（留空）</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">每行末尾加逗号</p>
            <p className="font-mono text-gray-700">查找：$</p>
            <p className="font-mono text-gray-700">替换：,</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">删除每行开头的数字编号</p>
            <p className="font-mono text-gray-700">查找：^\d+[\.\)]\s*</p>
            <p className="font-mono text-gray-700">替换：（留空）</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">命令行文本处理</h2>
        <p className="text-gray-700 leading-relaxed">Linux/Mac命令行提供了强大的文本处理工具：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500"># sed：流编辑器，批量替换</p>
            <p>{`sed 's/old/new/g' file.txt`}</p>
            <p>{`sed -i 's/2026\\/02/2026-02/g' *.txt  # 原地替换`}</p>
          </div>
          <div>
            <p className="text-gray-500"># awk：按列处理</p>
            <p>{`awk '{print $1, $3}' data.txt  # 提取第1和第3列`}</p>
            <p>{`awk -F',' '{print $2}' data.csv  # CSV提取第2列`}</p>
          </div>
          <div>
            <p className="text-gray-500"># tr：字符转换</p>
            <p>{`tr 'a-z' 'A-Z' < file.txt  # 小写转大写`}</p>
            <p>{`tr -d '\\r' < win.txt > unix.txt  # 删除回车符`}</p>
          </div>
          <div>
            <p className="text-gray-500"># sort + uniq：排序去重</p>
            <p>{`sort file.txt | uniq  # 去重`}</p>
            <p>{`sort file.txt | uniq -c | sort -rn  # 统计频次`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Python批量处理</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>import re</p>
          <p></p>
          <p className="text-gray-500"># 批量替换多个模式</p>
          <p>replacements = {'{'}</p>
          <p className="pl-4">{`r'\\bcolour\\b': 'color',`}</p>
          <p className="pl-4">{`r'\\bfavourite\\b': 'favorite',`}</p>
          <p className="pl-4">{`r'\\bcentre\\b': 'center',`}</p>
          <p>{'}'}</p>
          <p></p>
          <p>text = open(&apos;file.txt&apos;).read()</p>
          <p>for pattern, replacement in replacements.items():</p>
          <p className="pl-4">text = re.sub(pattern, replacement, text)</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用场景速查</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 font-medium text-gray-700 mb-2">
            <span>场景</span><span>方法</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span>CSV转JSON</span><span>Python csv模块 / 在线工具</span>
            <span>去除HTML标签</span><span>正则 {`<[^>]+>`} 替换为空</span>
            <span>提取邮箱地址</span><span>正则匹配所有邮箱模式</span>
            <span>Tab转空格</span><span>tr / expand命令</span>
            <span>合并多行为一行</span><span>tr -d &apos;\n&apos; 或 paste -sd,</span>
            <span>每N行插入空行</span><span>awk / sed</span>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 批量处理建议：</p>
          <p>• 处理前先备份原文件</p>
          <p>• 先在小样本上测试正则，确认无误再批量执行</p>
          <p>• 复杂处理优先用Python脚本，可读性和可维护性更好</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速进行文本查找替换？试试我们的 <Link href="/text-replace" className="text-blue-500 hover:underline font-medium">在线文本替换工具</Link>，支持正则表达式，实时预览替换结果。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

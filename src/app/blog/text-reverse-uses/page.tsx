import Link from 'next/link'

export default function TextReverseUses() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">文本反转的妙用：回文检测、密码生成等</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">把一段文字倒过来写，看起来只是个小把戏，但文本反转在编程、密码学、语言学甚至日常生活中都有不少实际用途。这篇文章带你了解文本反转的原理、实现方法和有趣应用。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是文本反转？</h2>
        <p className="text-gray-700 leading-relaxed">文本反转就是将字符串中的字符顺序颠倒。比如：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>&quot;Hello World&quot; → &quot;dlroW olleH&quot;</p>
          <p>&quot;你好世界&quot; → &quot;界世好你&quot;</p>
          <p>&quot;12345&quot; → &quot;54321&quot;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实现方法</h2>
        <p className="text-gray-700 leading-relaxed font-medium">JavaScript实现</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 方法1：split + reverse + join（最常用）</p>
            <p>{`function reverseStr(str) {`}</p>
            <p>{`  return str.split('').reverse().join('');`}</p>
            <p>{`}`}</p>
          </div>
          <div>
            <p className="text-gray-500">// 方法2：展开运算符（支持emoji）</p>
            <p>{`function reverseStr(str) {`}</p>
            <p>{`  return [...str].reverse().join('');`}</p>
            <p>{`}`}</p>
          </div>
          <div>
            <p className="text-gray-500">// 方法3：循环（面试常考）</p>
            <p>{`function reverseStr(str) {`}</p>
            <p>{`  let result = '';`}</p>
            <p>{`  for (let i = str.length - 1; i >= 0; i--) {`}</p>
            <p>{`    result += str[i];`}</p>
            <p>{`  }`}</p>
            <p>{`  return result;`}</p>
            <p>{`}`}</p>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 方法1对emoji会出错！因为emoji是多字节字符：</p>
          <p className="font-mono mt-1">&quot;hello😀&quot;.split(&apos;&apos;).reverse().join(&apos;&apos;)</p>
          <p className="font-mono text-red-600">// &quot;�😀olleh&quot; ← 乱码！</p>
          <p className="font-mono mt-1">[...&quot;hello😀&quot;].reverse().join(&apos;&apos;)</p>
          <p className="font-mono text-green-600">// &quot;😀olleh&quot; ← 正确！</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">妙用一：回文检测</h2>
        <p className="text-gray-700 leading-relaxed">回文（Palindrome）是正读反读都一样的字符串。文本反转是检测回文最直接的方法：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 回文检测</p>
          <p>{`function isPalindrome(str) {`}</p>
          <p>{`  const clean = str.toLowerCase()`}</p>
          <p>{`    .replace(/[^a-z0-9\u4e00-\u9fff]/g, '');`}</p>
          <p>{`  return clean === [...clean].reverse().join('');`}</p>
          <p>{`}`}</p>
          <p className="mt-2 text-green-600">// isPalindrome(&quot;racecar&quot;) → true</p>
          <p className="text-green-600">// isPalindrome(&quot;上海自来水来自海上&quot;) → true</p>
          <p className="text-green-600">// isPalindrome(&quot;A man a plan a canal Panama&quot;) → true</p>
        </div>
        <p className="text-gray-700 leading-relaxed">有趣的中文回文：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 上海自来水来自海上</p>
          <p>• 山东落花生花落东山</p>
          <p>• 雾锁山头山锁雾，天连水尾水连天</p>
          <p>• 客上天然居，居然天上客</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">妙用二：单词反转</h2>
        <p className="text-gray-700 leading-relaxed">不是反转所有字符，而是反转单词顺序，这是编程面试的经典题目：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 反转单词顺序</p>
          <p>{`function reverseWords(str) {`}</p>
          <p>{`  return str.trim().split(/\s+/).reverse().join(' ');`}</p>
          <p>{`}`}</p>
          <p className="mt-2 text-green-600">// &quot;hello beautiful world&quot;</p>
          <p className="text-green-600">// → &quot;world beautiful hello&quot;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">妙用三：简单加密与混淆</h2>
        <p className="text-gray-700 leading-relaxed">虽然不是真正的加密，但反转可以作为简单的文本混淆手段：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 反转 + Base64 简单混淆</p>
            <p>{`function obfuscate(text) {`}</p>
            <p>{`  const reversed = [...text].reverse().join('');`}</p>
            <p>{`  return btoa(encodeURIComponent(reversed));`}</p>
            <p>{`}`}</p>
            <p>{`function deobfuscate(encoded) {`}</p>
            <p>{`  const reversed = decodeURIComponent(atob(encoded));`}</p>
            <p>{`  return [...reversed].reverse().join('');`}</p>
            <p>{`}`}</p>
          </div>
        </div>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>❌ 这不是安全的加密方式！仅适合防止肉眼直接阅读，不能用于保护敏感数据。真正的加密请使用AES等标准算法。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">妙用四：数字反转</h2>
        <p className="text-gray-700 leading-relaxed">反转数字在算法题中很常见，需要注意溢出和负数：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 反转整数（处理负数和溢出）</p>
          <p>{`function reverseInt(num) {`}</p>
          <p>{`  const sign = Math.sign(num);`}</p>
          <p>{`  const reversed = parseInt(`}</p>
          <p>{`    String(Math.abs(num))`}</p>
          <p>{`      .split('').reverse().join(''));`}</p>
          <p>{`  // 32位整数溢出检查`}</p>
          <p>{`  if (reversed > 2**31 - 1) return 0;`}</p>
          <p>{`  return sign * reversed;`}</p>
          <p>{`}`}</p>
          <p className="text-green-600 mt-1">// reverseInt(123) → 321</p>
          <p className="text-green-600">// reverseInt(-456) → -654</p>
          <p className="text-green-600">// reverseInt(120) → 21</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">妙用五：密码生成辅助</h2>
        <p className="text-gray-700 leading-relaxed">一种创建易记密码的技巧是将短语反转后取部分字符：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 选一句话：&quot;我喜欢在周末写代码2026&quot;</p>
          <p>2. 取拼音首字母：wxhzzm xdm2026</p>
          <p>3. 反转：6202mdx mzzxhxw</p>
          <p>4. 混合大小写和符号：6202Mdx!mZzxHxw</p>
          <p className="text-gray-500 mt-1">这样生成的密码既有一定强度，又有记忆线索。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">不同语言的反转实现</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500"># Python</p>
            <p>{`text[::-1]`}</p>
          </div>
          <div>
            <p className="text-gray-500">// Java</p>
            <p>{`new StringBuilder(text).reverse().toString()`}</p>
          </div>
          <div>
            <p className="text-gray-500">// C#</p>
            <p>{`new string(text.Reverse().ToArray())`}</p>
          </div>
          <div>
            <p className="text-gray-500">// Go</p>
            <p>{`// 需要转为rune切片处理Unicode`}</p>
            <p>{`runes := []rune(text)`}</p>
          </div>
          <div>
            <p className="text-gray-500">-- SQL (MySQL)</p>
            <p>{`SELECT REVERSE('hello');`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想快速反转一段文本？试试我们的 <Link href="/text-reverse" className="text-blue-500 hover:underline font-medium">免费文本反转工具</Link>，支持字符反转、单词反转、逐行反转等多种模式。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多文本处理工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

import Link from 'next/link'

export default function RandomNumberGeneration() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">随机数生成原理：计算机如何产生随机数？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">抽奖、验证码、游戏掉落、密码生成、加密通信……随机数无处不在。但你有没有想过，计算机这种"确定性机器"是怎么产生随机数的？它产生的随机数真的随机吗？</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">伪随机数 vs 真随机数</h2>
        <p className="text-gray-700 leading-relaxed">计算机产生的随机数分为两大类：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-4">
          <div>
            <p className="font-medium text-blue-600">伪随机数（PRNG）</p>
            <p>通过数学算法生成，看起来随机但实际上是确定性的。给定相同的种子（seed），会产生完全相同的序列。速度快，适合大多数场景。</p>
          </div>
          <div>
            <p className="font-medium text-green-600">真随机数（TRNG）</p>
            <p>基于物理现象（热噪声、放射性衰变、大气噪声等）生成，真正不可预测。速度慢，用于高安全性场景。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">伪随机数的工作原理</h2>
        <p className="text-gray-700 leading-relaxed">最经典的伪随机数算法是线性同余生成器（LCG）：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-700 font-bold">X(n+1) = (a × X(n) + c) mod m</p>
          <p className="text-gray-500 mt-2">a = 乘数, c = 增量, m = 模数, X(0) = 种子</p>
        </div>
        <p className="text-gray-700 leading-relaxed">举个简单例子：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// a=5, c=3, m=16, seed=7</p>
          <p>X(0) = 7</p>
          <p>X(1) = (5 × 7 + 3) mod 16 = 38 mod 16 = <span className="text-blue-600">6</span></p>
          <p>X(2) = (5 × 6 + 3) mod 16 = 33 mod 16 = <span className="text-blue-600">1</span></p>
          <p>X(3) = (5 × 1 + 3) mod 16 = 8 mod 16 = <span className="text-blue-600">8</span></p>
          <p>X(4) = (5 × 8 + 3) mod 16 = 43 mod 16 = <span className="text-blue-600">11</span></p>
          <p className="text-gray-500 mt-2">// 序列：6, 1, 8, 11, ... 看起来随机，但完全可预测</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JavaScript中的随机数</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 生成 0-1 之间的随机小数</p>
            <p>Math.random()</p>
            <p className="text-green-600">// 0.7283956102...</p>
          </div>
          <div>
            <p className="text-gray-500">// 生成 min 到 max 之间的随机整数</p>
            <p>{`function randomInt(min, max) {`}</p>
            <p>{`  return Math.floor(Math.random()`}</p>
            <p>{`    * (max - min + 1)) + min;`}</p>
            <p>{`}`}</p>
            <p className="text-green-600">// randomInt(1, 100) → 42</p>
          </div>
          <div>
            <p className="text-gray-500">// 从数组中随机选一个</p>
            <p>{`function randomPick(arr) {`}</p>
            <p>{`  return arr[Math.floor(`}</p>
            <p>{`    Math.random() * arr.length)];`}</p>
            <p>{`}`}</p>
            <p className="text-green-600">{`// randomPick(['红','蓝','绿']) → '蓝'`}</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ <code className="bg-yellow-100 px-1 rounded">Math.random()</code> 不适合安全场景！它是伪随机的，可被预测。</p>
          <p className="mt-2">安全场景请使用：</p>
          <div className="font-mono mt-1">
            <p className="text-green-600">crypto.getRandomValues(new Uint32Array(1))</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见随机数算法对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>算法</span><span>周期长度</span><span>适用场景</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>LCG</span><span>2³¹</span><span>简单模拟</span>
            <span>梅森旋转</span><span>2¹⁹⁹³⁷-1</span><span>科学计算、游戏</span>
            <span>Xorshift</span><span>2¹²⁸-1</span><span>游戏、快速场景</span>
            <span>ChaCha20</span><span>极大</span><span>密码学安全</span>
            <span>AES-CTR</span><span>极大</span><span>密码学安全</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">种子（Seed）的重要性</h2>
        <p className="text-gray-700 leading-relaxed">伪随机数生成器需要一个初始值——种子。相同的种子产生相同的序列，这个特性有时很有用：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>🎮 游戏中的"种子码" — Minecraft的世界种子就是这个原理</p>
          <p>🔬 科学实验可重复 — 固定种子确保实验结果可复现</p>
          <p>🧪 测试确定性 — 调试时用固定种子重现bug</p>
        </div>
        <p className="text-gray-700 leading-relaxed">常见的种子来源：当前时间戳、鼠标移动、键盘输入间隔、系统熵池等。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">随机数的常见误区</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium text-red-600">❌ "连续出现3次6，下次不太可能是6"</p>
            <p>这是赌徒谬误。每次投骰子都是独立事件，概率始终是1/6。</p>
          </div>
          <div>
            <p className="font-medium text-red-600">❌ "随机数应该均匀分布"</p>
            <p>取决于需求。正态分布、指数分布等在模拟中更常用。</p>
          </div>
          <div>
            <p className="font-medium text-red-600">❌ "用时间戳做种子就够安全了"</p>
            <p>攻击者可以猜测时间范围，大幅缩小搜索空间。安全场景必须用密码学安全的随机源。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速生成随机数？试试我们的 <Link href="/random-number" className="text-blue-500 hover:underline font-medium">免费随机数生成器</Link>，支持自定义范围、批量生成、去重等功能。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

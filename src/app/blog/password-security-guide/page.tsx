import Link from 'next/link'

export default function PasswordSecurityGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">如何生成安全的密码？2026密码安全指南</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">在数字时代，密码是保护你个人信息的第一道防线。然而，大多数人的密码习惯其实非常危险。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">你的密码安全吗？</h2>
        <p className="text-gray-700 leading-relaxed">根据安全研究，最常见的密码仍然是 "123456"、"password"、"qwerty" 这些。如果你的密码符合以下任何一条，就需要立即更换：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>长度少于12个字符</li>
          <li>只包含小写字母或纯数字</li>
          <li>使用了生日、姓名、手机号等个人信息</li>
          <li>多个网站使用同一个密码</li>
          <li>密码是常见单词或简单组合（如abc123）</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">强密码的标准</h2>
        <p className="text-gray-700 leading-relaxed">一个安全的密码应该满足：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>长度至少16个字符</strong> — 每增加一个字符，破解难度指数级增长</li>
          <li><strong>混合大小写字母</strong> — A-Z 和 a-z 都要有</li>
          <li><strong>包含数字</strong> — 0-9</li>
          <li><strong>包含特殊符号</strong> — !@#$%^&* 等</li>
          <li><strong>不包含个人信息</strong> — 不用生日、名字、手机号</li>
          <li><strong>每个网站不同密码</strong> — 一站一密</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">用工具生成强密码</h2>
        <p className="text-gray-700 leading-relaxed">人脑很难想出真正随机的密码。推荐使用密码生成器来创建安全密码：</p>
        <p className="text-gray-700 leading-relaxed">我们的 <Link href="/password-gen" className="text-blue-500 hover:underline">免费密码生成器</Link> 可以：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>自定义密码长度（4-64位）</li>
          <li>选择包含的字符类型（大写、小写、数字、特殊符号）</li>
          <li>使用加密安全的随机数生成器（crypto.getRandomValues）</li>
          <li>实时显示密码强度评估</li>
          <li>一键复制，方便使用</li>
        </ul>
        <p><Link href="/password-gen" className="text-blue-500 hover:underline font-medium">👉 立即生成安全密码</Link></p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">密码管理最佳实践</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>使用密码管理器</strong> — 如1Password、Bitwarden，只需记住一个主密码</li>
          <li><strong>开启两步验证（2FA）</strong> — 即使密码泄露，也有第二层保护</li>
          <li><strong>定期更换重要账户密码</strong> — 银行、邮箱等核心账户每3-6个月更换</li>
          <li><strong>不在公共WiFi下输入密码</strong> — 使用VPN保护网络连接</li>
          <li><strong>警惕钓鱼网站</strong> — 检查网址是否正确再输入密码</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">密码强度对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>密码示例</span><span>破解时间</span><span>安全等级</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">123456</span><span>不到1秒</span><span className="text-red-500">极弱 ❌</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">password1</span><span>几分钟</span><span className="text-red-500">弱 ❌</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">MyDog2024!</span><span>几小时</span><span className="text-yellow-500">中等 ⚠️</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">kX9#mP2$vL7@nQ</span><span>数百年</span><span className="text-green-500">强 ✅</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">总结</h2>
        <p className="text-gray-700 leading-relaxed">密码安全不是小事。花几分钟用 <Link href="/password-gen" className="text-blue-500 hover:underline">密码生成器</Link> 为你的重要账户生成强密码，配合密码管理器使用，就能大幅提升你的网络安全。</p>
        <p className="text-gray-700 leading-relaxed">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

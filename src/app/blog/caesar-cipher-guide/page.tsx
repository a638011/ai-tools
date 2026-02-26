import Link from 'next/link'

export default function CaesarCipherGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">凯撒密码和ROT13：最古老的加密方法</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">两千多年前，罗马帝国的凯撒大帝为了在战场上安全传递军事情报，发明了一种简单但有效的加密方法——把每个字母往后移动固定位数。这就是密码学的起点：凯撒密码。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">凯撒密码的原理</h2>
        <p className="text-gray-700 leading-relaxed">凯撒密码是一种替换密码（Substitution Cipher），核心思想极其简单：将字母表中的每个字母向后（或向前）移动固定的位数。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 移位3（凯撒本人使用的偏移量）</p>
          <p>明文字母：A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
          <p>密文字母：D E F G H I J K L M N O P Q R S T U V W X Y Z A B C</p>
          <p></p>
          <p className="text-green-600">HELLO → KHOOR</p>
          <p className="text-green-600">ATTACK → DWWDFN</p>
        </div>
        <p className="text-gray-700 leading-relaxed">解密就是反向操作——把每个字母往前移动相同的位数。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ROT13：特殊的凯撒密码</h2>
        <p className="text-gray-700 leading-relaxed">ROT13是偏移量为13的凯撒密码。因为英文字母表有26个字母，13正好是一半，所以ROT13有一个神奇的特性：<strong>加密和解密是同一个操作</strong>。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>A↔N  B↔O  C↔P  D↔Q  E↔R  F↔S  G↔T</p>
          <p>H↔U  I↔V  J↔W  K↔X  L↔Y  M↔Z</p>
          <p></p>
          <p className="text-green-600">HELLO → URYYB</p>
          <p className="text-green-600">URYYB → HELLO  （再次ROT13就还原了！）</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 ROT13在互联网早期被广泛使用——论坛上隐藏剧透、谜底、冒犯性内容。读者需要主动解码才能看到。Usenet新闻组中这是标准做法。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">用代码实现凯撒密码</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// JavaScript 实现</p>
          <p>function caesarCipher(text, shift) {'{'}</p>
          <p>  return text.replace(/[a-zA-Z]/g, (char) =&gt; {'{'}</p>
          <p>    const base = char &lt;= &apos;Z&apos; ? 65 : 97;</p>
          <p>    return String.fromCharCode(</p>
          <p>      ((char.charCodeAt(0) - base + shift) % 26) + base</p>
          <p>    );</p>
          <p>  {'}'});</p>
          <p>{'}'}</p>
          <p></p>
          <p className="text-gray-500">// 加密（移位3）</p>
          <p>caesarCipher(&quot;Hello World&quot;, 3);  // &quot;Khoor Zruog&quot;</p>
          <p></p>
          <p className="text-gray-500">// 解密（移位-3 或 23）</p>
          <p>caesarCipher(&quot;Khoor Zruog&quot;, -3); // &quot;Hello World&quot;</p>
          <p></p>
          <p className="text-gray-500">// ROT13</p>
          <p>caesarCipher(&quot;Hello&quot;, 13);  // &quot;Uryyb&quot;</p>
          <p>caesarCipher(&quot;Uryyb&quot;, 13);  // &quot;Hello&quot;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Python实现</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># Python 一行实现ROT13</p>
          <p>import codecs</p>
          <p>codecs.encode(&quot;Hello World&quot;, &quot;rot_13&quot;)  # &quot;Uryyb Jbeyq&quot;</p>
          <p></p>
          <p className="text-gray-500"># 通用凯撒密码</p>
          <p>def caesar(text, shift):</p>
          <p>    result = []</p>
          <p>    for char in text:</p>
          <p>        if char.isalpha():</p>
          <p>            base = ord(&apos;A&apos;) if char.isupper() else ord(&apos;a&apos;)</p>
          <p>            result.append(chr((ord(char) - base + shift) % 26 + base))</p>
          <p>        else:</p>
          <p>            result.append(char)</p>
          <p>    return &apos;&apos;.join(result)</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">如何破解凯撒密码？</h2>
        <p className="text-gray-700 leading-relaxed">凯撒密码非常容易破解，因为只有25种可能的偏移量。两种常见破解方法：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p><strong>暴力破解：</strong>尝试所有25种偏移，看哪个结果是有意义的文本。</p>
          <p><strong>频率分析：</strong>英语中E是最常见的字母（约12.7%），找到密文中出现最多的字母，推算偏移量。</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>英文字母频率排名：E T A O I N S H R D L C U M W F G Y P B V K J X Q Z</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">从凯撒密码到现代加密</h2>
        <p className="text-gray-700 leading-relaxed">凯撒密码虽然不安全，但它开创了密码学的基本思想。现代加密算法（AES、RSA）的核心原理仍然是"替换和置换"，只是复杂度提升了无数倍：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 凯撒密码 → 维吉尼亚密码（多表替换）</p>
          <p>• Enigma机（二战德军）→ 机械化加密</p>
          <p>• DES → AES（对称加密，现代标准）</p>
          <p>• RSA → ECC（非对称加密，公钥体系）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想体验凯撒密码加解密？试试我们的 <Link href="/caesar-cipher" className="text-blue-500 hover:underline font-medium">凯撒密码/ROT13工具</Link>，支持自定义偏移量，一键加密解密。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

import Link from 'next/link'

export default function LinuxFilePermissions() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Linux文件权限详解：chmod 777到底是什么意思？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">刚接触Linux的人经常会遇到"Permission denied"错误，然后在网上搜到一句<code className="bg-gray-100 px-1 rounded text-sm">chmod 777</code>就解决了。但你真的知道777是什么意思吗？为什么老手都说不要随便用777？</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">权限的三个维度</h2>
        <p className="text-gray-700 leading-relaxed">Linux中每个文件和目录都有三组权限，分别对应三类用户：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>用户类型</span><span>缩写</span><span>说明</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>Owner（所有者）</span><span>u</span><span>文件的创建者/拥有者</span>
            <span>Group（用户组）</span><span>g</span><span>所有者所在的用户组</span>
            <span>Others（其他人）</span><span>o</span><span>系统上的其他所有用户</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">三种权限类型</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-4 gap-2 font-medium text-gray-700 mb-2">
            <span>权限</span><span>字母</span><span>数字</span><span>含义</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span>读取</span><span>r</span><span>4</span><span>查看文件内容/列出目录</span>
            <span>写入</span><span>w</span><span>2</span><span>修改文件/在目录中创建删除文件</span>
            <span>执行</span><span>x</span><span>1</span><span>运行程序/进入目录</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">读懂ls -l的输出</h2>
        <p className="text-gray-700 leading-relaxed">运行<code className="bg-gray-100 px-1 rounded text-sm">ls -l</code>会看到类似这样的输出：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>-rwxr-xr-- 1 alice dev 4096 Feb 10 config.sh</p>
        </div>
        <p className="text-gray-700 leading-relaxed">拆解这10个字符：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p><code className="bg-gray-100 px-1 rounded font-mono">-</code> → 文件类型（- 普通文件，d 目录，l 链接）</p>
          <p><code className="bg-gray-100 px-1 rounded font-mono">rwx</code> → Owner权限：可读+可写+可执行 = 4+2+1 = 7</p>
          <p><code className="bg-gray-100 px-1 rounded font-mono">r-x</code> → Group权限：可读+可执行 = 4+1 = 5</p>
          <p><code className="bg-gray-100 px-1 rounded font-mono">r--</code> → Others权限：只读 = 4</p>
        </div>
        <p className="text-gray-700 leading-relaxed">所以这个文件的数字权限就是 <strong>754</strong>。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见权限数字速查</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>数字</span><span>权限</span><span>典型用途</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">755</span><span>rwxr-xr-x</span><span>可执行文件、目录</span>
            <span className="font-mono">644</span><span>rw-r--r--</span><span>普通文件（HTML/CSS/图片）</span>
            <span className="font-mono">600</span><span>rw-------</span><span>私密文件（SSH密钥）</span>
            <span className="font-mono">700</span><span>rwx------</span><span>私有目录（.ssh/）</span>
            <span className="font-mono">777</span><span>rwxrwxrwx</span><span>⚠️ 所有人可读写执行</span>
            <span className="font-mono">000</span><span>----------</span><span>无任何权限</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">chmod命令用法</h2>
        <p className="text-gray-700 leading-relaxed">chmod有两种写法——数字模式和符号模式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-gray-500"># 数字模式</p>
          <p>chmod 755 script.sh</p>
          <p>chmod 644 index.html</p>
          <p></p>
          <p className="text-gray-500"># 符号模式</p>
          <p>chmod u+x script.sh      # 给所有者加执行权限</p>
          <p>chmod g-w config.yml     # 去掉组的写权限</p>
          <p>chmod o=r file.txt       # 设置其他人只读</p>
          <p>chmod a+r public.html    # 所有人加读权限</p>
          <p></p>
          <p className="text-gray-500"># 递归修改目录下所有文件</p>
          <p>chmod -R 755 /var/www/html</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么不要用chmod 777？</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ <strong>777意味着任何用户都能读、写、执行这个文件</strong>，这是严重的安全隐患：</p>
          <p>• 恶意用户可以修改你的脚本，注入恶意代码</p>
          <p>• Web服务器文件设为777，攻击者可以上传并执行后门</p>
          <p>• SSH会拒绝权限过大的密钥文件（必须600或更严格）</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>✅ 正确做法：按需分配最小权限</p>
          <p>• 网站文件：644（文件）+ 755（目录）</p>
          <p>• 脚本文件：755</p>
          <p>• 配置文件含密码：600</p>
          <p>• SSH密钥：600（私钥）、644（公钥）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">chown修改所有者</h2>
        <p className="text-gray-700 leading-relaxed">除了权限，有时还需要修改文件的所有者和所属组：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>chown alice file.txt          # 修改所有者</p>
          <p>chown alice:dev file.txt      # 修改所有者和组</p>
          <p>chown -R www-data:www-data /var/www  # 递归修改</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速计算Linux权限数字？试试我们的 <Link href="/chmod-calculator" className="text-blue-500 hover:underline font-medium">chmod权限计算器</Link>，可视化勾选权限自动生成命令。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

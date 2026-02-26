import Link from 'next/link'

export default function HttpStatusCodesGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">HTTP状态码大全：200/301/404/500都是什么意思？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">每次浏览器向服务器发请求，服务器都会返回一个三位数的状态码。404大家都见过，但你知道301和302的区别吗？502和503又分别代表什么？这篇文章带你系统了解所有常见HTTP状态码。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">状态码分类</h2>
        <p className="text-gray-700 leading-relaxed">HTTP状态码按首位数字分为5类：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>范围</span><span>类别</span><span>含义</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">1xx</span><span>信息响应</span><span>请求已接收，继续处理</span>
            <span className="font-mono">2xx</span><span>成功</span><span>请求已成功处理</span>
            <span className="font-mono">3xx</span><span>重定向</span><span>需要进一步操作</span>
            <span className="font-mono">4xx</span><span>客户端错误</span><span>请求有问题</span>
            <span className="font-mono">5xx</span><span>服务器错误</span><span>服务器处理失败</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2xx 成功状态码</h2>
        <div className="bg-green-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium">200 OK</p>
            <p>最常见的成功状态码。GET请求返回资源内容，POST请求处理成功。</p>
          </div>
          <div>
            <p className="font-medium">201 Created</p>
            <p>资源创建成功，通常在POST创建新记录后返回。响应头中的Location字段指向新资源地址。</p>
          </div>
          <div>
            <p className="font-medium">204 No Content</p>
            <p>请求成功但没有返回内容。常用于DELETE请求——删除成功，不需要返回数据。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3xx 重定向状态码</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium">301 Moved Permanently（永久重定向）</p>
            <p>资源已永久移动到新地址。搜索引擎会更新索引，浏览器会缓存重定向。网站换域名时必用。</p>
          </div>
          <div>
            <p className="font-medium">302 Found（临时重定向）</p>
            <p>资源临时在另一个地址。搜索引擎不会更新索引。常用于维护期间临时跳转。</p>
          </div>
          <div>
            <p className="font-medium">304 Not Modified</p>
            <p>资源未修改，可以使用浏览器缓存。服务器不返回内容体，节省带宽。</p>
          </div>
          <div>
            <p className="font-medium">307 Temporary Redirect</p>
            <p>类似302，但严格保持请求方法不变。POST请求重定向后仍然是POST。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4xx 客户端错误</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium">400 Bad Request</p>
            <p>请求格式有误，服务器无法理解。常见原因：JSON格式错误、缺少必填参数、参数类型不对。</p>
          </div>
          <div>
            <p className="font-medium">401 Unauthorized</p>
            <p>未认证。需要登录或提供有效的认证信息（Token/Cookie）。名字有误导性，实际是"未认证"而非"未授权"。</p>
          </div>
          <div>
            <p className="font-medium">403 Forbidden</p>
            <p>已认证但没有权限。你登录了，但没有访问这个资源的权限。</p>
          </div>
          <div>
            <p className="font-medium">404 Not Found</p>
            <p>最著名的状态码。请求的资源不存在。可能是URL拼错了，也可能是资源已被删除。</p>
          </div>
          <div>
            <p className="font-medium">405 Method Not Allowed</p>
            <p>请求方法不被允许。比如对一个只支持GET的接口发送POST请求。</p>
          </div>
          <div>
            <p className="font-medium">429 Too Many Requests</p>
            <p>请求频率超限（限流）。API通常会在响应头中返回Retry-After告诉你多久后可以重试。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5xx 服务器错误</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium">500 Internal Server Error</p>
            <p>服务器内部错误，最通用的错误状态码。通常是代码bug、未捕获的异常。</p>
          </div>
          <div>
            <p className="font-medium">502 Bad Gateway</p>
            <p>网关/代理服务器从上游服务器收到无效响应。常见于Nginx反向代理后端服务挂了。</p>
          </div>
          <div>
            <p className="font-medium">503 Service Unavailable</p>
            <p>服务暂时不可用。通常是服务器过载或正在维护。一般是临时的，稍后重试即可。</p>
          </div>
          <div>
            <p className="font-medium">504 Gateway Timeout</p>
            <p>网关超时。代理服务器等待上游响应超时。可能是后端处理太慢或网络问题。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">开发中的实用技巧</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>💡 <strong>RESTful API设计建议：</strong></p>
          <p>• 创建资源成功 → 返回 201，不要用 200</p>
          <p>• 删除成功 → 返回 204</p>
          <p>• 参数校验失败 → 返回 400 + 具体错误信息</p>
          <p>• 未登录 → 401，无权限 → 403，别搞混</p>
          <p>• 资源不存在 → 404</p>
          <p>• 服务器bug → 500，但要记录日志排查</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 用curl查看HTTP状态码</p>
          <p>curl -I https://example.com</p>
          <p className="text-gray-500">// 只输出状态码</p>
          <p>curl -o /dev/null -s -w "%{'{'} http_code{'}'}" https://example.com</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要查看HTTP请求的详细信息？试试我们的 <Link href="/http-status-codes" className="text-blue-500 hover:underline font-medium">HTTP状态码查询工具</Link>，快速查找任意状态码的含义和用法。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

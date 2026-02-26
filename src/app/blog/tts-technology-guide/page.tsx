import Link from 'next/link'

export default function TtsTechnologyGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">文本转语音技术：TTS原理和应用场景</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">文本转语音（Text-to-Speech，TTS）技术让机器能够"朗读"文字。从早期机械般的合成音到如今几乎以假乱真的AI语音，TTS已经渗透到我们生活的方方面面。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">TTS的工作原理</h2>
        <p className="text-gray-700 leading-relaxed">现代TTS系统通常分为三个阶段：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 文本分析 — 将输入文本转换为语言学表示：分词、标注词性、处理数字和缩写、确定语调和重音</p>
          <p>2. 声学模型 — 将语言学特征转换为声学特征（梅尔频谱图），决定每个音素的音高、时长和能量</p>
          <p>3. 声码器 — 将声学特征转换为实际的音频波形</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-500">
          <p>文本 → [文本分析] → 音素序列 → [声学模型] → 频谱图 → [声码器] → 音频波形</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">TTS技术演进</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>时代</span><span>技术</span><span>特点</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>1990s</span><span>拼接合成</span><span>拼接录音片段，生硬但清晰</span>
            <span>2000s</span><span>参数合成</span><span>HMM统计模型，流畅但机械</span>
            <span>2016</span><span>WaveNet</span><span>深度学习，质量飞跃</span>
            <span>2017</span><span>Tacotron</span><span>端到端模型，更自然</span>
            <span>2023+</span><span>大语言模型TTS</span><span>情感丰富，几乎无法区分真人</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">主流TTS服务对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>服务</span><span>中文质量</span><span>免费额度</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>Google Cloud TTS</span><span>优秀</span><span>每月400万字符</span>
            <span>Azure Speech</span><span>优秀</span><span>每月50万字符</span>
            <span>Amazon Polly</span><span>良好</span><span>首年每月500万字符</span>
            <span>百度语音</span><span>优秀</span><span>有免费调用量</span>
            <span>讯飞语音</span><span>优秀</span><span>有免费调用量</span>
            <span>Web Speech API</span><span>一般</span><span>完全免费</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">浏览器原生TTS</h2>
        <p className="text-gray-700 leading-relaxed">浏览器内置了Web Speech API，无需任何第三方服务即可实现TTS：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 最简单的TTS实现</p>
          <p>{`const utterance = new SpeechSynthesisUtterance('你好，世界');`}</p>
          <p>{`utterance.lang = 'zh-CN';`}</p>
          <p>{`utterance.rate = 1.0;  // 语速 0.1-10`}</p>
          <p>{`utterance.pitch = 1.0; // 音调 0-2`}</p>
          <p>{`speechSynthesis.speak(utterance);`}</p>
          <p>{``}</p>
          <p className="text-gray-500">// 获取可用语音列表</p>
          <p>{`const voices = speechSynthesis.getVoices();`}</p>
          <p>{`const zhVoices = voices.filter(v => v.lang.startsWith('zh'));`}</p>
          <p>{`utterance.voice = zhVoices[0]; // 选择中文语音`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">应用场景</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 无障碍访问 — 为视障用户朗读网页内容，这是TTS最重要的应用</p>
          <p>• 有声读物 — AI生成有声书，成本远低于真人录制</p>
          <p>• 导航语音 — 地图导航的语音播报</p>
          <p>• 智能客服 — 电话客服系统的语音回复</p>
          <p>• 视频配音 — 短视频、教程视频的AI配音</p>
          <p>• 语言学习 — 发音示范和听力练习</p>
          <p>• 通知播报 — 消息、邮件的语音播报</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">中文TTS的特殊挑战</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ 多音字 — "行"读háng还是xíng？需要根据上下文判断</p>
          <p>⚠️ 语调 — 中文是声调语言，四声必须准确</p>
          <p>⚠️ 数字读法 — "110"是"一百一十"还是"一一零"？</p>
          <p>⚠️ 中英混合 — "用React开发App"中的英文需要自然切换</p>
          <p>⚠️ 韵律 — 中文的停顿和节奏与英文完全不同</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SSML：精细控制语音</h2>
        <p className="text-gray-700 leading-relaxed">SSML（Speech Synthesis Markup Language）可以精细控制TTS的输出：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{'<speak>'}</p>
          <p>{'  <p>今天天气<emphasis level="strong">非常好</emphasis>。</p>'}</p>
          <p>{'  <break time="500ms"/>'}</p>
          <p>{'  <p>温度是<say-as interpret-as="cardinal">25</say-as>度。</p>'}</p>
          <p>{'  <p><prosody rate="slow" pitch="+2st">慢速高音说话</prosody></p>'}</p>
          <p>{'</speak>'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想体验文本转语音？试试我们的 <Link href="/text-to-speech" className="text-blue-500 hover:underline font-medium">在线TTS工具</Link>，输入文字即可生成语音，支持多种语言和声音。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

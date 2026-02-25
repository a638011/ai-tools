import { NextRequest, NextResponse } from 'next/server'

const platformConfig: Record<string, { name: string; maxLen: number; features: string[] }> = {
  xiaohongshu: { name: '小红书', maxLen: 800, features: ['emoji丰富', '标题吸睛', '分段清晰', '带话题标签'] },
  taobao: { name: '淘宝', maxLen: 600, features: ['卖点突出', '促销感强', '信任背书', '行动号召'] },
  douyin: { name: '抖音', maxLen: 300, features: ['开头抓人', '口语化', '节奏感强', '引导互动'] },
  weibo: { name: '微博', maxLen: 500, features: ['话题热搜', '观点鲜明', '互动性强'] },
  gongzhonghao: { name: '公众号', maxLen: 1200, features: ['深度内容', '故事性强', '金句频出', '引导关注'] },
}

const styleConfig: Record<string, string> = {
  selling: '种草带货风格：突出产品优势，制造购买欲望，用真实体验感打动读者',
  story: '故事分享风格：以第一人称讲述真实经历，有起承转合，引发共鸣',
  tutorial: '教程干货风格：步骤清晰，信息密度高，实用性强，让人想收藏',
  review: '测评对比风格：客观分析优缺点，有数据支撑，帮助决策',
  emotional: '情感共鸣风格：触动内心，引发思考，让人想分享给朋友',
}

function generateCopy(platform: string, style: string, product: string, keywords: string): string {
  const pConfig = platformConfig[platform] || platformConfig.xiaohongshu
  const sDesc = styleConfig[style] || styleConfig.selling
  const kws = keywords ? keywords.split(/[,，]/).map(k => k.trim()).filter(Boolean) : []
  const tags = kws.map(k => `#${k}`).join(' ')

  const templates: Record<string, Record<string, (p: string, kw: string[]) => string>> = {
    xiaohongshu: {
      selling: (p, kw) =>
`🔥 姐妹们！这个${p}真的绝了！！

💫 用了一个月的真实感受：
说实话一开始我也是半信半疑的，但用了之后真的被惊艳到了！

✨ 三个让我回购的理由：
1️⃣ ${kw[0] || '性价比超高'}，学生党也能无压力入手
2️⃣ 效果真的肉眼可见，闺蜜都问我用了什么
3️⃣ 包装精致，送人自用都合适

⚠️ 注意事项：
- 一定要坚持使用，不要三天打鱼两天晒网
- 搭配${kw[1] || '正确的使用方法'}效果翻倍

📌 总结：如果你也在找一款好用的${p}，这个真的可以闭眼入！

${tags ? tags : `#${p} #好物分享 #真实测评`}`,

      story: (p, kw) =>
`📖 关于${p}，我想讲一个真实的故事...

上个月我还在为${kw[0] || '选择困难'}发愁，直到朋友推荐了这个${p}。

说真的，一开始我是拒绝的 🙅‍♀️
"又是智商税吧？"——这是我的第一反应

但是！！！用了一周之后，我真的被打脸了 😂

最明显的变化是：
🌟 ${kw[0] || '效果显著'}，周围人都注意到了
🌟 ${kw[1] || '使用体验很好'}，完全没有不适感
🌟 性价比超出预期，比我之前用的好太多

现在我已经回购第三次了，也安利给了身边所有人 ❤️

如果你也有同样的困扰，真的建议试试看～

${tags ? tags : `#${p} #真实分享 #生活记录`}`,

      tutorial: (p, kw) =>
`📚 ${p}保姆级攻略！看完少走99%弯路！

🔍 先说结论：
选对方法比盲目尝试重要100倍！

📋 详细步骤：

Step 1⃣ 了解基础知识
- ${p}的核心原理是什么
- 适合什么样的人群
- ${kw[0] || '入门注意事项'}

Step 2⃣ 选择适合自己的方案
- 预算有限：选基础款就够了
- 追求品质：推荐${kw[1] || '进阶版本'}
- 专业需求：直接上旗舰款

Step 3⃣ 正确使用方法
- 频率：建议每天/每周固定时间
- 用量：不是越多越好，适量最重要
- 搭配：和${kw[2] || '其他产品'}配合效果更好

Step 4⃣ 常见误区避坑
❌ 不要贪便宜买到假货
❌ 不要急于求成
❌ 不要忽略${kw[0] || '基础步骤'}

💡 最后提醒：坚持才是最重要的！

收藏这篇，以后慢慢看 📌

${tags ? tags : `#${p} #干货分享 #教程 #避坑指南`}`,

      review: (p, kw) =>
`🔬 ${p}深度测评｜用了30天的真实数据！

⭐ 综合评分：4.5/5

📊 详细评测：

【外观/包装】⭐⭐⭐⭐⭐
第一印象很好，${kw[0] || '设计简约大方'}

【使用体验】⭐⭐⭐⭐
整体很满意，${kw[1] || '操作简单易上手'}

【效果/性能】⭐⭐⭐⭐⭐
这是最惊喜的部分！效果超出预期

【性价比】⭐⭐⭐⭐
这个价位能有这个品质，值了

✅ 优点：
- 效果显著，不是智商税
- 品质感强，细节到位
- 售后服务好

❌ 缺点：
- 价格略高（但一分钱一分货）
- ${kw[2] || '部分功能还有提升空间'}

🏆 适合人群：
- ${kw[0] || '追求品质'}的朋友
- 预算充足，想一步到位的
- 之前踩过坑，想找靠谱产品的

📌 总结：瑕不掩瑜，推荐入手！

${tags ? tags : `#${p} #测评 #真实体验 #好物推荐`}`,

      emotional: (p, kw) =>
`💭 今天想聊聊${p}这件事...

不知道你有没有这样的时刻——
明明很努力了，却还是觉得不够好。

我也是。

直到遇到${p}，才发现：
原来${kw[0] || '好的选择'}，真的可以改变生活的质感。

不是那种翻天覆地的变化，
而是每天一点点，慢慢变好的感觉 🌱

有人说这是"仪式感"，
我觉得这是"认真对待自己"。

你值得更好的。
${p}，推荐给每一个认真生活的你 ❤️

${tags ? tags : `#${p} #生活感悟 #认真生活`}`,
    },
  }

  // For other platforms, use xiaohongshu templates with slight modifications
  const platformTemplates = templates[platform] || templates.xiaohongshu
  const templateFn = platformTemplates[style] || platformTemplates.selling
  return templateFn(product, kws)
}

export async function POST(req: NextRequest) {
  try {
    const { platform, style, product, keywords } = await req.json()
    if (!product || typeof product !== 'string') {
      return NextResponse.json({ error: '请输入产品/主题' }, { status: 400 })
    }
    const content = generateCopy(platform || 'xiaohongshu', style || 'selling', product.trim(), keywords || '')
    return NextResponse.json({ content })
  } catch {
    return NextResponse.json({ error: '生成失败，请重试' }, { status: 500 })
  }
}

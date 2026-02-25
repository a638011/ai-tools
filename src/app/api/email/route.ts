import { NextRequest, NextResponse } from 'next/server'

function generateEmail(data: {
  type: string; tone: string; recipient: string;
  subject: string; keyPoints: string; senderName: string;
}): string {
  const { type, tone, recipient, subject, keyPoints, senderName } = data
  const to = recipient || '您'
  const from = senderName || '发件人'
  const points = keyPoints.split('\n').map(l => l.replace(/^[-•]\s*/, '').trim()).filter(Boolean)
  const autoSubject = subject || generateSubject(type, points)

  const greeting = getGreeting(tone, to)
  const body = generateBody(type, tone, points)
  const closing = getClosing(tone, from)

  return `📧 邮件主题：${autoSubject}\n\n${'━'.repeat(35)}\n\n${greeting}\n\n${body}\n\n${closing}`
}

function generateSubject(type: string, points: string[]): string {
  const hint = points[0] || ''
  const subjects: Record<string, string> = {
    business: `关于${hint ? hint.slice(0, 15) : '商务合作'}事宜`,
    job: `求职申请 - ${hint ? hint.slice(0, 15) : '应聘岗位'}`,
    resign: '离职申请',
    thanks: `感谢信 - ${hint ? hint.slice(0, 15) : '致谢'}`,
    complaint: `关于${hint ? hint.slice(0, 15) : '问题'}的反馈`,
    invite: `诚挚邀请 - ${hint ? hint.slice(0, 15) : '活动邀请'}`,
  }
  return subjects[type] || `关于${hint.slice(0, 15)}的邮件`
}

function getGreeting(tone: string, to: string): string {
  if (tone === 'formal') return `尊敬的${to}：\n\n您好！`
  if (tone === 'friendly') return `${to}，你好！`
  return `${to}：\n\n你好。`
}

function getClosing(tone: string, from: string): string {
  if (tone === 'formal') {
    return `如有任何疑问，请随时与我联系。\n\n顺祝商祺！\n\n此致\n敬礼\n\n${from}\n[日期]`
  }
  if (tone === 'friendly') {
    return `期待你的回复～\n\n祝好，\n${from}`
  }
  return `请回复确认。\n\n${from}\n[日期]`
}

function generateBody(type: string, tone: string, points: string[]): string {
  const pointText = points.length > 0 ? points.join('，') : ''

  if (type === 'business') {
    return generateBusinessEmail(tone, points, pointText)
  }
  if (type === 'job') {
    return generateJobEmail(tone, points, pointText)
  }
  if (type === 'resign') {
    return generateResignEmail(tone, points, pointText)
  }
  if (type === 'thanks') {
    return generateThanksEmail(tone, points, pointText)
  }
  if (type === 'complaint') {
    return generateComplaintEmail(tone, points, pointText)
  }
  if (type === 'invite') {
    return generateInviteEmail(tone, points, pointText)
  }
  return pointText
}

function generateBusinessEmail(tone: string, points: string[], pointText: string): string {
  if (tone === 'formal') {
    return `冒昧打扰，我谨代表我方就${points[0] || '合作'}事宜与您联系。\n\n${points.length > 1 ? '具体而言：\n' + points.map((p, i) => `${i + 1}. ${p}`).join('\n') + '\n\n' : ''}我方对此次合作机会非常重视，相信通过双方的共同努力，一定能够实现互利共赢。\n\n如您方便，希望能安排一次会面或电话沟通，就合作细节进行深入探讨。`
  }
  if (tone === 'friendly') {
    return `最近关注到你们的业务，觉得咱们在${points[0] || '合作'}方面有很大的合作空间。\n\n${points.length > 1 ? '简单说几点想法：\n' + points.map(p => `• ${p}`).join('\n') + '\n\n' : ''}要不找个时间聊聊？我觉得一定能碰撞出不少火花。`
  }
  return `就${points[0] || '合作'}事宜联系你。\n\n${points.length > 1 ? points.map(p => `- ${p}`).join('\n') + '\n\n' : ''}方便的话约个时间详谈。`
}

function generateJobEmail(tone: string, points: string[], pointText: string): string {
  if (tone === 'formal') {
    return `我通过贵公司招聘信息了解到相关岗位，对此非常感兴趣，特此投递简历。\n\n${points.length > 0 ? '关于我的情况：\n' + points.map((p, i) => `${i + 1}. ${p}`).join('\n') + '\n\n' : ''}我对贵公司的发展前景充满信心，相信我的专业能力和工作经验能够为团队带来价值。随信附上我的简历，供您参考。\n\n恳请给予面试机会，我将不胜感激。`
  }
  if (tone === 'friendly') {
    return `看到你们的招聘信息，觉得特别适合我，所以赶紧投个简历～\n\n${points.length > 0 ? '简单介绍下自己：\n' + points.map(p => `• ${p}`).join('\n') + '\n\n' : ''}简历在附件里，希望有机会和你们聊聊！`
  }
  return `应聘贵公司相关岗位。\n\n${points.length > 0 ? points.map(p => `- ${p}`).join('\n') + '\n\n' : ''}简历见附件。`
}

function generateResignEmail(tone: string, points: string[], pointText: string): string {
  if (tone === 'formal') {
    return `经过慎重考虑，我决定向公司提出离职申请。\n\n${points.length > 0 ? '主要原因如下：\n' + points.map((p, i) => `${i + 1}. ${p}`).join('\n') + '\n\n' : ''}在公司工作的这段时间，我收获了宝贵的经验和成长，对此深表感谢。我将按照公司规定完成工作交接，确保平稳过渡。\n\n希望公司未来发展越来越好。`
  }
  if (tone === 'friendly') {
    return `想了很久，还是决定和你说一下，我打算离职了。\n\n${points.length > 0 ? '原因的话：\n' + points.map(p => `• ${p}`).join('\n') + '\n\n' : ''}在这里的日子真的很开心，学到了很多。交接的事情我会认真做好的，放心～`
  }
  return `正式提出离职申请。\n\n${points.length > 0 ? points.map(p => `- ${p}`).join('\n') + '\n\n' : ''}将配合完成工作交接。`
}

function generateThanksEmail(tone: string, points: string[], pointText: string): string {
  if (tone === 'formal') {
    return `特此致信，对您${points[0] || '给予的帮助'}表示衷心的感谢。\n\n${points.length > 1 ? points.slice(1).map((p, i) => `${i + 1}. ${p}`).join('\n') + '\n\n' : ''}您的支持与帮助对我意义重大，我将铭记于心。希望未来有机会回报您的善意。`
  }
  if (tone === 'friendly') {
    return `真的特别想感谢你${points[0] || '的帮助'}！\n\n${points.length > 1 ? points.slice(1).map(p => `• ${p}`).join('\n') + '\n\n' : ''}有你真好，改天请你吃饭～`
  }
  return `感谢${points[0] || '你的帮助'}。\n\n${points.length > 1 ? points.slice(1).map(p => `- ${p}`).join('\n') + '\n\n' : ''}非常感激。`
}

function generateComplaintEmail(tone: string, points: string[], pointText: string): string {
  if (tone === 'formal') {
    return `我写信是为了反馈${points[0] || '近期遇到的问题'}。\n\n${points.length > 0 ? '具体情况如下：\n' + points.map((p, i) => `${i + 1}. ${p}`).join('\n') + '\n\n' : ''}以上问题给我带来了不便，希望贵方能够重视并尽快给出解决方案。\n\n期待您的回复。`
  }
  if (tone === 'friendly') {
    return `不好意思打扰了，想反馈一个问题：${points[0] || ''}\n\n${points.length > 1 ? '详细说一下：\n' + points.slice(1).map(p => `• ${p}`).join('\n') + '\n\n' : ''}希望能尽快处理一下，谢谢～`
  }
  return `反馈以下问题：\n\n${points.map(p => `- ${p}`).join('\n')}\n\n请尽快处理。`
}

function generateInviteEmail(tone: string, points: string[], pointText: string): string {
  if (tone === 'formal') {
    return `诚挚邀请您参加${points[0] || '我们举办的活动'}。\n\n${points.length > 1 ? '活动详情：\n' + points.slice(1).map((p, i) => `${i + 1}. ${p}`).join('\n') + '\n\n' : ''}您的出席将为活动增添光彩，我们期待与您共度这一美好时刻。\n\n烦请回复确认是否能够出席，以便我们做好相应安排。`
  }
  if (tone === 'friendly') {
    return `有个好消息要告诉你！${points[0] || '我们要办个活动'}\n\n${points.length > 1 ? '具体信息：\n' + points.slice(1).map(p => `• ${p}`).join('\n') + '\n\n' : ''}一定要来呀，少了你可不行～`
  }
  return `邀请你参加${points[0] || '活动'}。\n\n${points.length > 1 ? points.slice(1).map(p => `- ${p}`).join('\n') + '\n\n' : ''}请回复确认。`
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    if (!data.keyPoints || typeof data.keyPoints !== 'string') {
      return NextResponse.json({ error: '请输入邮件核心内容' }, { status: 400 })
    }
    const content = generateEmail(data)
    return NextResponse.json({ content })
  } catch {
    return NextResponse.json({ error: '生成失败，请重试' }, { status: 500 })
  }
}

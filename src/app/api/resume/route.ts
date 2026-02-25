import { NextRequest, NextResponse } from 'next/server'

function generateResume(data: {
  template: string; name: string; targetJob: string;
  phone: string; email: string; education: string;
  experience: string; skills: string; selfIntro: string;
}): string {
  const { template, name, targetJob, phone, email, education, experience, skills, selfIntro } = data
  const skillList = skills ? skills.split(/[,，]/).map(s => s.trim()).filter(Boolean) : []
  const contactParts = [phone, email].filter(Boolean)
  const contactLine = contactParts.length > 0 ? contactParts.join(' | ') : ''

  const autoIntro = selfIntro || generateAutoIntro(targetJob, skillList)
  const enhancedExp = experience || '暂无（建议补充工作或项目经历）'
  const enhancedEdu = education || '暂无（建议补充教育背景）'

  if (template === 'creative') {
    return generateCreative(name, targetJob, contactLine, enhancedEdu, enhancedExp, skillList, autoIntro)
  }
  if (template === 'academic') {
    return generateAcademic(name, targetJob, contactLine, enhancedEdu, enhancedExp, skillList, autoIntro)
  }
  return generateProfessional(name, targetJob, contactLine, enhancedEdu, enhancedExp, skillList, autoIntro)
}

function generateAutoIntro(job: string, skills: string[]): string {
  const skillText = skills.length > 0 ? `熟练掌握${skills.slice(0, 3).join('、')}等技术，` : ''
  return `${skillText}对${job}岗位充满热情，具备良好的学习能力和团队协作精神，注重代码质量和用户体验，期待在新的平台上创造更大价值。`
}

function generateProfessional(name: string, job: string, contact: string, edu: string, exp: string, skills: string[], intro: string): string {
  const divider = '━'.repeat(40)
  const skillBar = skills.map(s => `  • ${s}`).join('\n') || '  • 暂无（建议补充技能）'

  return `${divider}
${name}
${job}
${contact ? contact : ''}
${divider}

【求职意向】
  目标职位：${job}
  工作类型：全职
  到岗时间：随时

【自我评价】
  ${intro}

【工作/项目经历】
${formatExperience(exp)}

【教育背景】
  ${edu}

【技能特长】
${skillBar}

${divider}
`
}

function generateCreative(name: string, job: string, contact: string, edu: string, exp: string, skills: string[], intro: string): string {
  const skillTags = skills.map(s => `「${s}」`).join(' ') || '「待补充」'

  return `╔══════════════════════════════════════╗
║                                      ║
║    ✦  ${name}  ✦
║    ${job}
║    ${contact ? contact : ''}
║                                      ║
╚══════════════════════════════════════╝

━━━ ✨ 关于我 ━━━━━━━━━━━━━━━━━━━━━━━

${intro}

━━━ 🚀 技能矩阵 ━━━━━━━━━━━━━━━━━━━━

${skillTags}

━━━ 💼 经历亮点 ━━━━━━━━━━━━━━━━━━━━

${formatExperience(exp)}

━━━ 🎓 教育背景 ━━━━━━━━━━━━━━━━━━━━

  ${edu}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  期待与您共创精彩 ✨
`
}

function generateAcademic(name: string, job: string, contact: string, edu: string, exp: string, skills: string[], intro: string): string {
  const skillText = skills.length > 0 ? skills.join('；') : '暂无'

  return `════════════════════════════════════════
个 人 简 历
════════════════════════════════════════

基本信息
────────────────────────────────────────
  姓    名：${name}
  目标方向：${job}
  联系方式：${contact || '暂无'}

个人简介
────────────────────────────────────────
  ${intro}

教育背景
────────────────────────────────────────
  ${edu}

研究/工作经历
────────────────────────────────────────
${formatExperience(exp)}

专业技能
────────────────────────────────────────
  ${skillText}

════════════════════════════════════════
`
}

function formatExperience(exp: string): string {
  if (!exp || exp === '暂无（建议补充工作或项目经历）') {
    return '  暂无（建议补充工作或项目经历）'
  }
  return exp.split('\n').map(line => {
    const trimmed = line.trim()
    if (!trimmed) return ''
    if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
      return `    ${trimmed}`
    }
    return `  ${trimmed}`
  }).filter(Boolean).join('\n')
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    if (!data.name || !data.targetJob) {
      return NextResponse.json({ error: '请填写姓名和目标职位' }, { status: 400 })
    }
    const content = generateResume(data)
    return NextResponse.json({ content })
  } catch {
    return NextResponse.json({ error: '生成失败，请重试' }, { status: 500 })
  }
}

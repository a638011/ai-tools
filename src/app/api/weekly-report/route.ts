import { NextRequest, NextResponse } from 'next/server'

const roleNames: Record<string, string> = {
  developer: '开发工程师',
  product: '产品经理',
  design: '设计师',
  marketing: '市场运营',
  sales: '销售',
  general: '员工',
}

function parseTasks(raw: string): string[] {
  return raw.split(/\n/).map(l => l.replace(/^[-*·•\d.、]+\s*/, '').trim()).filter(Boolean)
}

function categorize(tasks: string[], role: string) {
  const categories: Record<string, string[]> = {}
  const keywords: Record<string, string[]> = {
    '项目开发': ['开发', '代码', '编码', '功能', '模块', '接口', 'API', '前端', '后端', '数据库', '部署', '上线'],
    'Bug修复与优化': ['bug', 'fix', '修复', '修了', '优化', '性能', '重构'],
    '需求与设计': ['需求', '设计', '原型', 'PRD', '评审', '方案', '规划', '调研'],
    '沟通协作': ['会议', '开会', '沟通', '对接', '协调', '讨论', '评审会', '同步'],
    '文档与学习': ['文档', '文章', '学习', '培训', '分享', '总结', '笔记'],
    '运营与推广': ['运营', '推广', '活动', '数据', '分析', '报告', '投放', '转化'],
    '销售与客户': ['客户', '销售', '签约', '拜访', '跟进', '商务', '合同'],
    '其他工作': [],
  }

  for (const task of tasks) {
    let matched = false
    for (const [cat, kws] of Object.entries(keywords)) {
      if (cat === '其他工作') continue
      if (kws.some(kw => task.toLowerCase().includes(kw.toLowerCase()))) {
        if (!categories[cat]) categories[cat] = []
        categories[cat].push(task)
        matched = true
        break
      }
    }
    if (!matched) {
      if (!categories['其他工作']) categories['其他工作'] = []
      categories['其他工作'].push(task)
    }
  }
  return categories
}

function generateReport(tasks: string, role: string, tone: string): string {
  const parsed = parseTasks(tasks)
  if (parsed.length === 0) return '请输入工作内容'

  const cats = categorize(parsed, role)
  const roleName = roleNames[role] || '员工'
  const now = new Date()
  const weekNum = Math.ceil(((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / 86400000 + 1) / 7)
  const dateStr = `${now.getFullYear()}年第${weekNum}周`

  let report = ''

  if (tone === 'detailed') {
    report += `📊 周报 | ${dateStr}\n`
    report += `👤 ${roleName}\n`
    report += `━━━━━━━━━━━━━━━━━━━━\n\n`
    report += `一、本周工作总结\n\n`
    for (const [cat, items] of Object.entries(cats)) {
      report += `【${cat}】\n`
      items.forEach((item, i) => {
        report += `${i + 1}. ${item}\n`
        report += `   - 进度：已完成\n`
        report += `   - 产出：按计划交付\n`
      })
      report += `\n`
    }
    report += `二、关键成果\n`
    report += `• 本周共完成 ${parsed.length} 项工作任务\n`
    report += `• 各项工作按计划推进，无延期风险\n\n`
    report += `三、遇到的问题与解决方案\n`
    report += `• 暂无重大阻塞问题\n\n`
    report += `四、下周计划\n`
    report += `• 继续推进当前项目进度\n`
    report += `• 跟进本周遗留事项\n`
    report += `• 优化工作流程，提升效率\n`
  } else if (tone === 'concise') {
    report += `📊 周报 | ${dateStr} | ${roleName}\n\n`
    report += `✅ 本周完成：\n`
    parsed.forEach((t, i) => { report += `${i + 1}. ${t}\n` })
    report += `\n📈 关键数据：完成${parsed.length}项任务\n`
    report += `\n📋 下周重点：继续推进当前工作\n`
  } else {
    report += `📊 工作周报\n`
    report += `📅 ${dateStr} | 👤 ${roleName}\n`
    report += `━━━━━━━━━━━━━━━━━━━━\n\n`
    report += `一、本周工作内容\n\n`
    for (const [cat, items] of Object.entries(cats)) {
      report += `▎${cat}\n`
      items.forEach((item, i) => { report += `  ${i + 1}. ${item} ✅\n` })
      report += `\n`
    }
    report += `二、工作成果\n`
    report += `• 本周共完成 ${parsed.length} 项工作\n`
    report += `• 重点工作均按时交付\n\n`
    report += `三、下周计划\n`
    report += `• 持续推进各项目进度\n`
    report += `• 处理本周遗留问题\n`
  }

  return report
}

export async function POST(req: NextRequest) {
  try {
    const { tasks, role, tone } = await req.json()
    if (!tasks || typeof tasks !== 'string') {
      return NextResponse.json({ error: '请输入工作内容' }, { status: 400 })
    }
    const content = generateReport(tasks.trim(), role || 'general', tone || 'professional')
    return NextResponse.json({ content })
  } catch {
    return NextResponse.json({ error: '生成失败，请重试' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'

const babyNames: Record<string, Record<string, string[]>> = {
  classic: {
    male: ['子轩','浩然','宇辰','明哲','博文','思远','天佑','俊逸','文昊','瑞霖',
           '嘉懿','煜祺','伟宸','靖琪','烨磊','晟睿','鹏涛','昊天','致远','弘毅'],
    female: ['诗涵','梓萱','雨桐','欣妍','语嫣','若曦','紫萱','婉清','雅琪','思颖',
            '梦瑶','沐晴','芷若','清雅','婧琪','韵寒','雨薇','佳琦','晓萱','静怡'],
    neutral: ['子墨','思源','嘉禾','逸飞','安然','知行','若水','清扬','明远','书瑜'],
  },
  modern: {
    male: ['一诺','星辰','奕辰','宸宇','铭泽','锦程','逸凡','昊宇','睿泽','景行'],
    female: ['星瑶','月夕','芮溪','可芯','乐萱','悦彤','芯语','舒然','念初','清歌'],
    neutral: ['星河','予安','初晴','拾光','念安','知夏','清禾','若初','之恒','予乐'],
  },
  poetic: {
    male: ['临风','望舒','扶摇','沧溟','鹤归','云深','长卿','怀瑾','凌霄','踏雪'],
    female: ['落薇','栖桐','疏影','暮云','晚照','霜华','清漪','月笙','烟霞','素心'],
    neutral: ['知秋','听雨','拂晓','映雪','凝霜','揽月','栖迟','归鸿','澄怀','濯缨'],
  },
  simple: {
    male: ['一鸣','正阳','大为','立恒','志远','刚毅','建国','伟业','鹏飞','宏达'],
    female: ['安宁','乐怡','欣悦','静好','美琪','佳慧','雅洁','秀丽','婷婷','丽华'],
    neutral: ['安平','乐天','嘉和','正道','明德','至善','弘远','笃行','敏行','慎思'],
  },
  cute: {
    male: ['小鱼','团团','豆豆','果果','乐乐','萌萌','糖糖','圆圆','暖暖','泡泡'],
    female: ['糯糯','甜甜','朵朵','蜜蜜','桃桃','奶茶','棉花','樱桃','布丁','芋圆'],
    neutral: ['可乐','奶酪','饼干','麻薯','年糕','汤圆','椰果','芒果','西柚','蓝莓'],
  },
}

const brandNames: Record<string, string[]> = {
  classic: ['鼎盛','华章','锦程','瑞丰','泰和','恒信','博雅','嘉德','正源','明远'],
  modern: ['灵犀','星链','云际','智核','光年','量子','脉冲','极光','引力','超维'],
  poetic: ['听风','揽月','栖云','拾光','望岳','踏歌','凌波','飞鸿','沧澜','烟岚'],
  simple: ['一点','三行','五色','七星','九章','十方','百川','千寻','万象','亿达'],
  cute: ['小确幸','暖暖屋','甜蜜蜜','萌萌哒','棉花糖','泡泡龙','彩虹桥','星星点','月亮湾','糖果盒'],
}

const companyNames: Record<string, string[]> = {
  classic: ['鼎新科技','华盛集团','瑞达实业','恒通商贸','博远咨询','嘉诚控股','正泰能源','明德教育','泰安物流','锦绣传媒'],
  modern: ['星际数科','云端智联','量子跃迁','光速创投','脉冲科技','极光数据','引力波','超维空间','灵犀智能','芯动力'],
  poetic: ['听风阁','揽月坊','栖云轩','拾光记','望山堂','踏歌行','凌波微','飞鸿达','沧澜海','烟岚居'],
  simple: ['一站通','三合一','五行健','七彩虹','九州通','十分好','百事达','千里行','万事兴','亿联通'],
  cute: ['小蜜蜂','暖心窝','甜蜜家','萌宠派','棉花云','泡泡屋','彩虹糖','星星眼','月亮船','糖果派'],
}

const petNames: Record<string, string[]> = {
  classic: ['大福','旺财','来宝','如意','吉祥','富贵','平安','福星','瑞雪','祥云'],
  modern: ['WiFi','像素','代码','芯片','蓝牙','数据','云朵','闪存','光标','字节'],
  poetic: ['踏雪','凌波','听风','望月','栖霞','映雪','拂晓','归云','疏影','暗香'],
  simple: ['豆豆','球球','毛毛','点点','花花','黑黑','白白','灰灰','胖胖','小小'],
  cute: ['奶糖','布丁','麻薯','芋圆','年糕','汤圆','饼干','奶酪','蛋挞','可颂'],
}

const gameNames: Record<string, string[]> = {
  classic: ['剑指苍穹','一剑封喉','风华绝代','天下无双','独步天下','笑傲江湖','纵横四海','气吞山河','龙行天下','凤舞九天'],
  modern: ['暗影猎手','量子风暴','星际领主','赛博浪客','数据幽灵','代码骑士','像素战神','虚空行者','光速逃逸','引力坍缩'],
  poetic: ['月下独酌','烟雨平生','长安故人','江湖夜雨','一蓑烟雨','踏雪寻梅','临风听蝉','望断天涯','醉卧沙场','梦回长安'],
  simple: ['大佬','王者','无敌','传说','神话','至尊','霸主','巅峰','极限','超神'],
  cute: ['小可爱打你哦','萌新求带','奶茶续命','今天也要加油鸭','躺平大师','摸鱼冠军','快乐肥宅','佛系玩家','咸鱼翻身','甜甜圈战士'],
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateNames(data: { category: string; style: string; surname: string; keywords: string; gender: string }): string {
  const { category, style, surname, keywords, gender } = data
  const kws = keywords ? keywords.split(/[,，]/).map(k => k.trim()).filter(Boolean) : []

  if (category === 'baby') {
    return generateBabyNames(style, surname, gender, kws)
  }
  if (category === 'brand') {
    return generateBrandNames(style, surname, kws)
  }
  if (category === 'company') {
    return generateCompanyNames(style, surname, kws)
  }
  if (category === 'pet') {
    return generatePetNames(style, kws)
  }
  return generateGameNames(style, kws)
}

function generateBabyNames(style: string, surname: string, gender: string, kws: string[]): string {
  const pool = babyNames[style] || babyNames.classic
  const g = gender === 'male' ? 'male' : gender === 'female' ? 'female' : 'neutral'
  const names = shuffle(pool[g]).slice(0, 8)
  const sn = surname || ''
  const header = `👶 宝宝起名推荐${sn ? `（${sn}姓）` : ''}\n📝 风格：${style === 'classic' ? '古典文雅' : style === 'modern' ? '时尚现代' : style === 'poetic' ? '诗词意境' : style === 'simple' ? '简约大气' : '可爱萌趣'}\n${kws.length ? `🔑 寓意：${kws.join('、')}\n` : ''}\n${'━'.repeat(30)}\n`
  const body = names.map((n, i) => {
    const fullName = sn ? `${sn}${n}` : n
    const meaning = getNameMeaning(n)
    return `\n${i + 1}. ${fullName}\n   📖 ${meaning}`
  }).join('\n')
  return header + body + `\n\n${'━'.repeat(30)}\n💡 提示：名字仅供参考，建议结合生辰八字、家族辈分等因素综合考虑`
}

function generateBrandNames(style: string, industry: string, kws: string[]): string {
  const pool = brandNames[style] || brandNames.classic
  const names = shuffle(pool).slice(0, 6)
  const header = `🏷️ 品牌命名推荐${industry ? `（${industry}行业）` : ''}\n📝 风格：${style === 'classic' ? '古典文雅' : style === 'modern' ? '时尚现代' : style === 'poetic' ? '诗词意境' : style === 'simple' ? '简约大气' : '可爱萌趣'}\n${kws.length ? `🔑 关键词：${kws.join('、')}\n` : ''}\n${'━'.repeat(30)}\n`
  const body = names.map((n, i) => `\n${i + 1}. ${n}\n   💡 简洁有力，易于传播和记忆`).join('\n')
  return header + body + `\n\n${'━'.repeat(30)}\n💡 提示：注册前请先查询商标是否可用`
}

function generateCompanyNames(style: string, industry: string, kws: string[]): string {
  const pool = companyNames[style] || companyNames.classic
  const names = shuffle(pool).slice(0, 6)
  const header = `🏢 公司起名推荐${industry ? `（${industry}行业）` : ''}\n📝 风格：${style === 'classic' ? '古典文雅' : style === 'modern' ? '时尚现代' : style === 'poetic' ? '诗词意境' : style === 'simple' ? '简约大气' : '可爱萌趣'}\n${kws.length ? `🔑 关键词：${kws.join('、')}\n` : ''}\n${'━'.repeat(30)}\n`
  const body = names.map((n, i) => `\n${i + 1}. ${n}\n   💡 朗朗上口，寓意美好`).join('\n')
  return header + body + `\n\n${'━'.repeat(30)}\n💡 提示：注册前请先在国家企业信用信息公示系统查询是否可用`
}

function generatePetNames(style: string, kws: string[]): string {
  const pool = petNames[style] || petNames.classic
  const names = shuffle(pool).slice(0, 8)
  const header = `🐾 宠物起名推荐\n📝 风格：${style === 'classic' ? '古典文雅' : style === 'modern' ? '时尚现代' : style === 'poetic' ? '诗词意境' : style === 'simple' ? '简约大气' : '可爱萌趣'}\n${kws.length ? `🔑 关键词：${kws.join('、')}\n` : ''}\n${'━'.repeat(30)}\n`
  const body = names.map((n, i) => `  ${i + 1}. ${n}`).join('\n')
  return header + '\n' + body + `\n\n${'━'.repeat(30)}\n💡 选一个叫起来顺口的，毛孩子会更快记住哦～`
}

function generateGameNames(style: string, kws: string[]): string {
  const pool = gameNames[style] || gameNames.classic
  const names = shuffle(pool).slice(0, 8)
  const header = `🎮 游戏ID推荐\n📝 风格：${style === 'classic' ? '古典文雅' : style === 'modern' ? '时尚现代' : style === 'poetic' ? '诗词意境' : style === 'simple' ? '简约大气' : '可爱萌趣'}\n${kws.length ? `🔑 关键词：${kws.join('、')}\n` : ''}\n${'━'.repeat(30)}\n`
  const body = names.map((n, i) => `  ${i + 1}. ${n}`).join('\n')
  return header + '\n' + body + `\n\n${'━'.repeat(30)}\n💡 如果ID被占用，可以加数字或特殊符号`
}

function getNameMeaning(name: string): string {
  const meanings: Record<string, string> = {
    '子轩':'气宇轩昂，志向高远','浩然':'正气浩然，胸怀坦荡','宇辰':'心怀宇宙，如星辰般闪耀',
    '明哲':'聪明睿智，明辨是非','博文':'学识渊博，文采斐然','思远':'思虑深远，志在千里',
    '天佑':'上天庇佑，福泽深厚','俊逸':'才华出众，风度翩翩','文昊':'文采飞扬，浩瀚如海',
    '瑞霖':'祥瑞如霖，润泽万物','诗涵':'诗意盎然，涵养深厚','梓萱':'生机勃勃，温暖如萱',
    '雨桐':'如雨润桐，清新脱俗','欣妍':'欣欣向荣，美丽动人','语嫣':'巧言善语，嫣然一笑',
    '若曦':'若晨曦初照，温暖明亮','紫萱':'高贵典雅，忘忧无虑','婉清':'温婉清丽，如水般柔美',
    '雅琪':'优雅如玉，美好珍贵','思颖':'聪慧敏捷，才思出众',
  }
  return meanings[name] || '寓意美好，朗朗上口，适合日常使用'
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const content = generateNames(data)
    return NextResponse.json({ content })
  } catch {
    return NextResponse.json({ error: '生成失败，请重试' }, { status: 500 })
  }
}

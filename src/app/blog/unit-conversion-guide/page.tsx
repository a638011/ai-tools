import Link from 'next/link'

export default function UnitConversionGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">常用单位换算表：长度、重量、温度一文搞定</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">1英里等于多少公里？华氏100度是多少摄氏度？1盎司是多少克？无论是海淘、看美剧、还是做工程计算，单位换算都是绕不开的问题。这篇文章整理了最常用的换算关系，建议收藏备用。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">长度单位换算</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>换算关系</span><span>精确值</span><span>记忆技巧</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>1英寸(in)</span><span>= 2.54厘米</span><span>约2.5cm</span>
            <span>1英尺(ft)</span><span>= 30.48厘米</span><span>约30cm</span>
            <span>1码(yd)</span><span>= 0.9144米</span><span>约0.9m</span>
            <span>1英里(mi)</span><span>= 1.6093公里</span><span>约1.6km</span>
            <span>1海里(nmi)</span><span>= 1.852公里</span><span>约1.85km</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <p className="font-medium text-gray-700 mb-2">公制内部换算</p>
          <div className="grid grid-cols-2 gap-2 text-gray-600 font-mono">
            <span>1公里(km)</span><span>= 1000米(m)</span>
            <span>1米(m)</span><span>= 100厘米(cm)</span>
            <span>1厘米(cm)</span><span>= 10毫米(mm)</span>
            <span>1微米(μm)</span><span>= 0.001毫米</span>
            <span>1纳米(nm)</span><span>= 0.001微米</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">重量单位换算</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>换算关系</span><span>精确值</span><span>记忆技巧</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>1磅(lb)</span><span>= 453.592克</span><span>约0.45kg</span>
            <span>1盎司(oz)</span><span>= 28.3495克</span><span>约28g</span>
            <span>1斤</span><span>= 500克</span><span>= 0.5kg</span>
            <span>1两</span><span>= 50克</span><span>10两=1斤</span>
            <span>1吨(t)</span><span>= 1000公斤</span><span>= 1000kg</span>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 注意区分：金衡盎司（贵金属）= 31.1035克，常衡盎司 = 28.3495克。金价用的是金衡盎司。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">温度换算</h2>
        <p className="text-gray-700 leading-relaxed">温度换算是最容易搞混的，因为不是简单的倍数关系：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="font-bold">摄氏 → 华氏：°F = °C × 9/5 + 32</p>
          <p className="font-bold mt-1">华氏 → 摄氏：°C = (°F - 32) × 5/9</p>
          <p className="font-bold mt-1">摄氏 → 开尔文：K = °C + 273.15</p>
        </div>
        <p className="text-gray-700 leading-relaxed">常用温度对照：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>场景</span><span>摄氏(°C)</span><span>华氏(°F)</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>水结冰</span><span>0°C</span><span>32°F</span>
            <span>室温</span><span>20-25°C</span><span>68-77°F</span>
            <span>体温</span><span>37°C</span><span>98.6°F</span>
            <span>发烧</span><span>38.5°C</span><span>101.3°F</span>
            <span>水沸腾</span><span>100°C</span><span>212°F</span>
            <span>烤箱常用</span><span>180°C</span><span>356°F</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">面积单位换算</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span>1平方英尺(sq ft)</span><span>= 0.0929 平方米</span>
            <span>1英亩(acre)</span><span>= 4046.86 平方米</span>
            <span>1公顷(ha)</span><span>= 10000 平方米</span>
            <span>1亩</span><span>= 666.67 平方米</span>
            <span>1平方公里</span><span>= 100公顷 = 1500亩</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">数据存储单位</h2>
        <p className="text-gray-700 leading-relaxed">程序员和普通用户都需要了解的换算：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 text-gray-600 font-mono">
            <span>1 Byte(B)</span><span>= 8 bits</span>
            <span>1 KB</span><span>= 1024 B</span>
            <span>1 MB</span><span>= 1024 KB</span>
            <span>1 GB</span><span>= 1024 MB</span>
            <span>1 TB</span><span>= 1024 GB</span>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 硬盘厂商用1000进制（1TB = 1000GB），操作系统用1024进制。所以买的1TB硬盘在电脑上显示约931GB，这不是缩水，是计算方式不同。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">速度单位换算</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span>1 km/h</span><span>= 0.2778 m/s</span>
            <span>1 mph（英里/时）</span><span>= 1.6093 km/h</span>
            <span>1节（knot）</span><span>= 1.852 km/h</span>
            <span>1马赫（Mach）</span><span>≈ 1225 km/h（海平面）</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">代码实现</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 通用单位换算函数</p>
            <p>{`const conversions = {`}</p>
            <p>{`  'mi_to_km': v => v * 1.6093,`}</p>
            <p>{`  'km_to_mi': v => v / 1.6093,`}</p>
            <p>{`  'lb_to_kg': v => v * 0.4536,`}</p>
            <p>{`  'kg_to_lb': v => v / 0.4536,`}</p>
            <p>{`  'f_to_c': v => (v - 32) * 5 / 9,`}</p>
            <p>{`  'c_to_f': v => v * 9 / 5 + 32,`}</p>
            <p>{`};`}</p>
            <p className="mt-2">{`function convert(value, type) {`}</p>
            <p>{`  return Math.round(`}</p>
            <p>{`    conversions[type](value) * 1000`}</p>
            <p>{`  ) / 1000;`}</p>
            <p>{`}`}</p>
            <p className="text-green-600 mt-1">// convert(100, 'f_to_c') → 37.778</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">记不住这些换算关系？用我们的 <Link href="/unit-converter" className="text-blue-500 hover:underline font-medium">免费单位换算工具</Link>，支持长度、重量、温度、面积等多种类型的即时换算。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

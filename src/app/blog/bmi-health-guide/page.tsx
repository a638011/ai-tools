import Link from 'next/link'

export default function BmiHealthGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">BMI指数怎么算？健康体重范围对照表</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">体检报告上经常出现的BMI指数，到底是什么意思？它是怎么算出来的？多少才算健康？这篇文章帮你一次搞清楚。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是BMI？</h2>
        <p className="text-gray-700 leading-relaxed">BMI（Body Mass Index）即身体质量指数，是国际上常用的衡量人体胖瘦程度的标准。它由比利时统计学家阿道夫·凯特勒在19世纪提出，至今仍是最简便的体重评估方法之一。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">BMI计算公式</h2>
        <p className="text-gray-700 leading-relaxed">BMI的计算非常简单：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-700 font-bold">BMI = 体重(kg) ÷ 身高(m)²</p>
        </div>
        <p className="text-gray-700 leading-relaxed">例如：一个人身高1.75米，体重70公斤：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500">BMI = 70 ÷ (1.75 × 1.75)</p>
          <p className="text-gray-500">BMI = 70 ÷ 3.0625</p>
          <p className="text-green-600">BMI ≈ 22.86（正常范围）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">BMI分类对照表（中国标准）</h2>
        <p className="text-gray-700 leading-relaxed">中国的BMI标准与WHO国际标准略有不同，因为亚洲人群在较低BMI时就可能出现健康风险：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>BMI范围</span><span>分类</span><span>健康风险</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>&lt; 18.5</span><span>偏瘦</span><span>营养不良风险</span>
            <span>18.5 - 23.9</span><span className="text-green-600 font-medium">正常</span><span>最低</span>
            <span>24.0 - 27.9</span><span className="text-yellow-600 font-medium">超重</span><span>增加</span>
            <span>≥ 28.0</span><span className="text-red-600 font-medium">肥胖</span><span>严重增加</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">WHO国际标准对照</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 font-medium text-gray-700 mb-2">
            <span>BMI范围</span><span>分类</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span>&lt; 18.5</span><span>偏瘦</span>
            <span>18.5 - 24.9</span><span>正常</span>
            <span>25.0 - 29.9</span><span>超重</span>
            <span>30.0 - 34.9</span><span>I级肥胖</span>
            <span>35.0 - 39.9</span><span>II级肥胖</span>
            <span>≥ 40.0</span><span>III级肥胖</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">用代码计算BMI</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// JavaScript 计算BMI</p>
            <p>{`function calculateBMI(weight, height) {`}</p>
            <p>{`  const bmi = weight / (height * height);`}</p>
            <p>{`  return Math.round(bmi * 10) / 10;`}</p>
            <p>{`}`}</p>
            <p className="mt-2">{`function getBMICategory(bmi) {`}</p>
            <p>{`  if (bmi < 18.5) return '偏瘦';`}</p>
            <p>{`  if (bmi < 24) return '正常';`}</p>
            <p>{`  if (bmi < 28) return '超重';`}</p>
            <p>{`  return '肥胖';`}</p>
            <p>{`}`}</p>
            <p className="mt-2 text-green-600">{`// calculateBMI(70, 1.75) → 22.9`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">BMI的局限性</h2>
        <p className="text-gray-700 leading-relaxed">BMI虽然简便，但有明显局限：</p>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ 不区分肌肉和脂肪 — 健身者可能BMI偏高但体脂率很低</p>
          <p>⚠️ 不反映脂肪分布 — 腹部脂肪比皮下脂肪危害更大</p>
          <p>⚠️ 不适用于儿童、孕妇、老年人 — 这些人群需要专门标准</p>
          <p>⚠️ 不考虑年龄和性别差异 — 同样BMI，不同人群风险不同</p>
        </div>
        <p className="text-gray-700 leading-relaxed">建议结合腰围、体脂率等指标综合评估。男性腰围超过90cm、女性超过85cm，即使BMI正常也需要注意。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">健康体重速查</h2>
        <p className="text-gray-700 leading-relaxed">根据BMI 18.5-23.9的正常范围，不同身高对应的健康体重：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>身高</span><span>最低体重</span><span>最高体重</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>1.55m</span><span>44.4kg</span><span>57.5kg</span>
            <span>1.60m</span><span>47.4kg</span><span>61.2kg</span>
            <span>1.65m</span><span>50.4kg</span><span>65.1kg</span>
            <span>1.70m</span><span>53.5kg</span><span>69.1kg</span>
            <span>1.75m</span><span>56.7kg</span><span>73.2kg</span>
            <span>1.80m</span><span>59.9kg</span><span>77.5kg</span>
            <span>1.85m</span><span>63.3kg</span><span>81.8kg</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线计算</h2>
        <p className="text-gray-700 leading-relaxed">不想手动算？试试我们的 <Link href="/bmi-calculator" className="text-blue-500 hover:underline font-medium">免费BMI计算器</Link>，输入身高体重即可获得BMI值和健康建议。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

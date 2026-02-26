import Link from 'next/link'

export default function AsciiCodeTable() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ASCII码表完整版：字符编码入门指南</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">ASCII是计算机世界最基础的字符编码标准。无论你是在写代码、处理文本还是调试网络协议，理解ASCII都是必备技能。这篇文章带你从零了解ASCII编码的原理和常用码表。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是ASCII？</h2>
        <p className="text-gray-700 leading-relaxed">ASCII（American Standard Code for Information Interchange，美国信息交换标准代码）诞生于1963年，用7位二进制数表示128个字符。它定义了英文字母、数字、标点符号和控制字符的编码方式，是几乎所有现代编码（UTF-8、GBK等）的基础。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>7位二进制 → 0000000 到 1111111 → 十进制 0 到 127 → 共128个字符</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">控制字符（0-31, 127）</h2>
        <p className="text-gray-700 leading-relaxed">前32个字符和第127个是不可打印的控制字符，用于控制设备行为。开发中常见的有：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-4 gap-2 font-medium text-gray-700 mb-2">
            <span>十进制</span><span>十六进制</span><span>缩写</span><span>说明</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600 font-mono">
            <span>0</span><span>0x00</span><span>NUL</span><span className="font-sans">空字符</span>
            <span>9</span><span>0x09</span><span>TAB</span><span className="font-sans">水平制表符 \t</span>
            <span>10</span><span>0x0A</span><span>LF</span><span className="font-sans">换行 \n（Unix/Mac）</span>
            <span>13</span><span>0x0D</span><span>CR</span><span className="font-sans">回车 \r（Windows用\r\n）</span>
            <span>27</span><span>0x1B</span><span>ESC</span><span className="font-sans">Escape键</span>
            <span>32</span><span>0x20</span><span>SP</span><span className="font-sans">空格（第一个可打印字符）</span>
            <span>127</span><span>0x7F</span><span>DEL</span><span className="font-sans">删除</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">可打印字符（32-126）</h2>
        <p className="text-gray-700 leading-relaxed">这是我们日常使用的字符，包括数字、大小写字母和符号：</p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">数字 0-9</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-5 gap-2 text-gray-600 font-mono">
            <span>48 → 0</span><span>49 → 1</span><span>50 → 2</span><span>51 → 3</span><span>52 → 4</span>
            <span>53 → 5</span><span>54 → 6</span><span>55 → 7</span><span>56 → 8</span><span>57 → 9</span>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 技巧：字符&apos;0&apos;的ASCII码是48，所以 <code className="bg-gray-100 px-1 rounded">字符 - 48</code> 或 <code className="bg-gray-100 px-1 rounded">字符 - &apos;0&apos;</code> 就能得到对应数字。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">大写字母 A-Z</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-5 gap-2 text-gray-600 font-mono">
            <span>65 → A</span><span>66 → B</span><span>67 → C</span><span>68 → D</span><span>69 → E</span>
            <span>70 → F</span><span>71 → G</span><span>72 → H</span><span>73 → I</span><span>74 → J</span>
            <span>75 → K</span><span>76 → L</span><span>77 → M</span><span>78 → N</span><span>79 → O</span>
            <span>80 → P</span><span>81 → Q</span><span>82 → R</span><span>83 → S</span><span>84 → T</span>
            <span>85 → U</span><span>86 → V</span><span>87 → W</span><span>88 → X</span><span>89 → Y</span>
            <span>90 → Z</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">小写字母 a-z</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-5 gap-2 text-gray-600 font-mono">
            <span>97 → a</span><span>98 → b</span><span>99 → c</span><span>100 → d</span><span>101 → e</span>
            <span>102 → f</span><span>103 → g</span><span>104 → h</span><span>105 → i</span><span>106 → j</span>
            <span>107 → k</span><span>108 → l</span><span>109 → m</span><span>110 → n</span><span>111 → o</span>
            <span>112 → p</span><span>113 → q</span><span>114 → r</span><span>115 → s</span><span>116 → t</span>
            <span>117 → u</span><span>118 → v</span><span>119 → w</span><span>120 → x</span><span>121 → y</span>
            <span>122 → z</span>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 技巧：大写字母和小写字母相差32。<code className="bg-gray-100 px-1 rounded">A(65) + 32 = a(97)</code>。在二进制中，大小写转换只需翻转第5位。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">编程中的ASCII应用</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// JavaScript：获取字符的ASCII码</p>
            <p>&quot;A&quot;.charCodeAt(0)  // 65</p>
            <p>String.fromCharCode(65)  // &quot;A&quot;</p>
          </div>
          <div>
            <p className="text-gray-500"># Python：获取字符的ASCII码</p>
            <p>ord(&apos;A&apos;)  # 65</p>
            <p>chr(65)   # &apos;A&apos;</p>
          </div>
          <div>
            <p className="text-gray-500">// 大小写转换（不用库函数）</p>
            <p>char lower = (char)(upper + 32);</p>
            <p>char upper = (char)(lower - 32);</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ASCII vs Unicode</h2>
        <p className="text-gray-700 leading-relaxed">ASCII只能表示128个字符，无法处理中文、日文、emoji等。Unicode扩展了ASCII，用更多字节表示全球所有文字。UTF-8编码中，ASCII字符（0-127）保持不变，完全兼容。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>ASCII：1字节，128个字符，只有英文</p>
          <p>UTF-8：1-4字节，兼容ASCII，支持全球文字</p>
          <p>UTF-16：2-4字节，JavaScript内部使用</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速查询ASCII码或进行字符转换？试试我们的 <Link href="/ascii-converter" className="text-blue-500 hover:underline font-medium">ASCII转换工具</Link>，支持字符、十进制、十六进制、二进制互转。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}

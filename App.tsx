import React, { useState, useEffect } from 'react';
import { Icons } from './components/Icons';
import { ChatWidget } from './components/ChatWidget';
import { AppPreview } from './components/AppPreview';
import { FaqItem, Feature, Testimonial } from './types';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/cn/app/%E8%A2%8B%E9%BC%A0%E5%B0%BA%E5%AD%90/id6755627249', '_blank');
  };

  const handleAndroidClick = () => {
    alert('Android版本正在加紧开发中，敬请期待！🚀');
  };

  const features: Feature[] = [
    {
      title: 'AI 测量 CVAI 指数',
      description: '采用医疗级视觉算法，3秒计算 CVAI（颅穹窿不对称指数）。比肉眼观察更客观，精准量化宝宝头型状态。✨',
      icon: <Icons.Brain className="w-6 h-6 text-white" />
    },
    {
      title: '头型成长曲线',
      description: '自动生成 CI/CVAI 变化曲线，可视化记录每一次进步。见证宝宝从扁头、偏头到完美圆头的逆袭过程！📈',
      icon: <Icons.Activity className="w-6 h-6 text-white" />
    },
    {
      title: '科学矫正方案',
      description: '基于测量数据，提供定制化的 Tummy Time（俯卧时间）指导和睡姿调整建议，无需昂贵头盔也能改善。🧘‍♀️',
      icon: <Icons.ShieldCheck className="w-6 h-6 text-white" />
    }
  ];

  const faqs: FaqItem[] = [
    {
      question: "宝宝头睡扁了还能救吗？",
      answer: "只要没过18个月都有机会！特别是 0-6 个月是头型矫正的黄金期，宝宝颅骨较软，可塑性强。通过“好头型App”监测 CVAI 数据，配合科学的侧睡和 Tummy Time，圆头逆袭不是梦！💪"
    },
    {
      question: "AI 测量 CVAI 真的准吗？",
      answer: "非常准确。我们采用的是基于深度学习的医疗级视觉算法，经过百万级真实头型数据训练。只要严格按照引导进行垂直俯拍，CVAI 和 CI 数据的误差极小，是家庭日常监测的理想工具。📸"
    },
    {
      question: "什么时候开始用最好？",
      answer: "建议满月后就可以开始关注头型了。早期发现斜头（Plagiocephaly）或短头（Brachycephaly）风险，干预成本最低，效果最好。👶"
    },
    {
      question: "不用定制头盔能矫正吗？",
      answer: "轻中度的偏头完全可以通过调整睡姿、体位管理（Repositioning Therapy）改善。好头型App会教你怎么科学调整，避免不必要的头盔矫正高昂花费。💰"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "米粒妈 🍒",
      role: "90后新手妈妈",
      content: "被小红书种草的！之前一直焦虑宝宝头扁，用了这个每天打卡 CVAI，看着分值从 8.5 降到 3.0 真的太治愈了。界面粉粉的超好看！",
      avatar: "https://picsum.photos/100/100?random=10"
    },
    {
      name: "Dr. Zhang",
      role: "儿童康复师",
      content: "我在门诊经常推荐家长用「好头型」在家监测。数据直观，能让家长理解 CVAI 的意义，焦虑感少了很多，依从性也提高了。",
      avatar: "https://picsum.photos/100/100?random=12"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-brand-100 selection:text-brand-700">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-brand-500 text-white p-1.5 rounded-lg shadow-md rotate-3 hover:rotate-0 transition-transform">
              <Icons.Brain className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">好头型</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-brand-500 transition-colors">核心功能</a>
            <a href="#how-it-works" className="hover:text-brand-500 transition-colors">使用教程</a>
            <a href="#faq" className="hover:text-brand-500 transition-colors">宝妈答疑</a>
            <button 
              onClick={handleAppStoreClick}
              className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-full transition-all shadow-lg shadow-brand-500/30 hover:-translate-y-0.5 font-bold"
            >
              免费下载 App
            </button>
          </nav>

          <button className="md:hidden text-gray-600" aria-label="打开菜单">
            <Icons.Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
          {/* Decorative Background Blobs */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-50/80 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-brand-100/40 rounded-full blur-3xl opacity-50"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 text-center lg:text-left space-y-8">
                <div className="inline-flex items-center gap-2 bg-white border border-brand-100 text-brand-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm animate-fade-in">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                  </span>
                  🔥 小红书爆款婴儿头型测量神器
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
                  养出圆润 <span className="text-brand-500 relative inline-block">
                    好头型
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                  </span><br />
                  AI 科学矫正扁头
                </h1>
                
                <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                  别让扁头（Brachycephaly）和偏头（Plagiocephaly）影响宝宝颜值！无需去医院排队，在家也能拥有医疗级 AI 测评。实时监测 CVAI 指数，见证每一次微小的进步。✨
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button 
                    onClick={handleAppStoreClick}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-500/20"
                    aria-label="前往 App Store 下载好头型"
                  >
                    <Icons.Phone className="w-5 h-5 fill-current" />
                    App Store 下载
                  </button>
                  <button 
                    onClick={handleAndroidClick}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-2xl font-bold transition-all hover:border-brand-200 hover:text-brand-500"
                    aria-label="下载安卓版好头型 (开发中)"
                  >
                    <Icons.Download className="w-5 h-5" />
                    Android 下载
                  </button>
                </div>

                <div className="pt-6 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Icons.Check className="w-3 h-3 text-green-600" />
                    </div>
                     100w+ 宝妈在用
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Icons.Check className="w-3 h-3 text-green-600" />
                    </div>
                    三甲医生推荐算法
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 flex justify-center perspective-1000">
                <div className="transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out">
                  <AppPreview />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">为什么选择「好头型」App？</h2>
              <p className="text-gray-500 text-lg">
                告别传统石膏取模，拒绝容貌焦虑。用科学的数据（CVAI/CI）说话，给宝宝一个完美的开始。💖
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <article key={index} className="group p-8 rounded-[2rem] bg-white hover:bg-brand-50/50 transition-colors border border-gray-100 hover:border-brand-100 shadow-sm hover:shadow-redbook">
                  <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-24 bg-gray-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[100px]"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">✨ 简单三步，精准测量婴儿头型</h2>
              <p className="text-gray-400">像拍宝宝日常照一样简单，老人也能轻松上手</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Line connecting steps */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>

              {[
                { step: '01', title: '垂直俯拍头顶', desc: '在光线充足处，让宝宝平躺，从正上方垂直拍摄一张头顶照片。' },
                { step: '02', title: 'AI 智能分析', desc: '上传照片，好头型 AI 算法自动识别五官和轮廓，计算 CVAI。' },
                { step: '03', title: '获取专业报告', desc: '立马生成详细报告，判定头型等级（轻/中/重度），提供矫正建议。' }
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-500 border-4 border-gray-800 flex items-center justify-center text-xl font-bold relative z-10 mb-6 shadow-lg shadow-brand-500/50">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-brand-50/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">宝妈们最关心的头型问题 🤔</h2>
              <p className="text-gray-500">科学育儿不踩坑，针对 CVAI、偏头、扁头的专业解答</p>
            </div>

            <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-lg font-bold text-gray-800 flex items-center gap-3" itemProp="name">
                      <span className="text-brand-500">Q.</span> {faq.question}
                    </span>
                    <span className="bg-brand-50 p-2 rounded-full transition group-open:rotate-180 text-brand-500">
                      <Icons.ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed pl-12" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">{faq.answer}</div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-extrabold text-center mb-16 text-gray-900">🌟 小红书 / 微博 真实口碑</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-100 flex flex-col sm:flex-row gap-6 hover:-translate-y-1 transition-transform">
                  <div className="flex-shrink-0">
                    <div className="p-1 rounded-full border-2 border-brand-200 inline-block">
                      <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg text-gray-900">{t.name}</span>
                      <div className="flex text-accent-500">
                        {[1,2,3,4,5].map(s => <Icons.Star key={s} className="w-4 h-4 fill-current" />)}
                      </div>
                    </div>
                    <span className="inline-block bg-brand-50 text-brand-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {t.role}
                    </span>
                    <p className="text-gray-600 italic leading-relaxed">"{t.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section id="download" className="py-24 bg-brand-500 text-white relative overflow-hidden">
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute right-10 top-10 transform rotate-12"><Icons.Brain className="w-32 h-32" /></div>
            <div className="absolute left-10 bottom-10 transform -rotate-12"><Icons.ShieldCheck className="w-24 h-24" /></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">给宝宝一个完美的开始 🎁</h2>
            <p className="text-brand-100 text-xl mb-12 max-w-2xl mx-auto font-medium">
              现在的每一次记录，都是送给未来最好的礼物。<br/>立即下载好头型 App，开启宝宝的圆头逆袭之旅！
            </p>
            <button 
              onClick={handleAppStoreClick}
              className="bg-white text-brand-600 hover:bg-brand-50 px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all transform hover:scale-105 hover:shadow-white/20"
            >
              立即开始免费测评 🚀
            </button>
            <p className="mt-8 text-sm text-brand-200 opacity-90 font-medium">
              * 结果仅供育儿参考，不做医疗诊断依据
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-500 py-16 text-sm border-t border-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-brand-500">
              <Icons.Brain className="w-6 h-6" />
              <span className="text-2xl font-bold">好头型</span>
            </div>
            <p className="max-w-xs mb-8 text-gray-400 font-medium">
              科学监测婴儿头型发育，AI 助力圆头逆袭。<br/>
              Made with ❤️ for Babies.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.xiaohongshu.com/user/profile/6190e757000000001000ad23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all cursor-pointer shadow-sm"
                aria-label="访问好头型小红书主页"
              >
                <span className="font-bold text-xs">小红书</span>
              </a>
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all cursor-pointer shadow-sm">
                <span className="font-bold text-xs">微博</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-base">探索</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-500 transition-colors">品牌故事</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">用户协议</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">CVAI 科普</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-base">联系</h4>
            <ul className="space-y-4 font-medium">
              <li>小红书搜：好头型 app</li>
              <li className="text-xs text-gray-400">周一至周五 9:30 - 18:30</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-200 text-center text-gray-400 text-xs">
          © 2024 好头型 Technology Co., Ltd. All rights reserved. 
        </div>
      </footer>

      {/* Floating Chat Bot */}
      <ChatWidget />
    </div>
  );
};

export default App;
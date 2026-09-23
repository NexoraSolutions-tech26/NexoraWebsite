import React, { useState } from 'react';
import { 
  Code2, 
  CheckCircle2, 
  Bot, 
  ArrowRight, 
  Mail, 
  Phone, 
  Globe, 
  MessageSquare, 
  Send, 
  Menu, 
  X, 
  ShieldCheck, 
  Zap, 
  Terminal,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Development',
    details: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Requested: ${formData.service}\n\nProject Details:\n${formData.details}`
    );
    window.location.href = `mailto:nexurtechpal@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-md border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/60 flex items-center justify-center font-bold text-lg text-amber-500/90 shadow-sm">
              N
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">
              Nexura <span className="text-zinc-500 font-normal">Technologies</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">عن الشركة</a>
            <a href="#services" className="hover:text-white transition-colors">الخدمات</a>
            <a href="#quote" className="hover:text-white transition-colors">طلب عرض سعر</a>
            <a href="#contact" className="hover:text-white transition-colors">التواصل</a>
          </div>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <a 
              href="https://wa.me/970569427636" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 border border-zinc-700/60 text-xs font-medium text-zinc-200 hover:bg-zinc-800 hover:border-zinc-600 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              تواصل واتساب
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-zinc-400 hover:text-white focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0A0A0B] border-b border-zinc-800 px-6 py-4 space-y-4 text-sm font-medium text-zinc-300">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-1 hover:text-white">عن الشركة</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-1 hover:text-white">الخدمات</a>
            <a href="#quote" onClick={() => setIsMenuOpen(false)} className="block py-1 hover:text-white">طلب عرض سعر</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-1 hover:text-white">التواصل</a>
            <a 
              href="https://wa.me/970569427636" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 rounded-md bg-zinc-900 border border-zinc-700 text-xs font-medium text-zinc-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              محادثات الواتساب المباشرة
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 border-b border-zinc-800/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            نطوّر الحلول البرمجية بعناية فائقة وتكلفة منافسة
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            حلول هندسية متكاملة لنمو أعمالك <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-amber-500">
              برمجة، أتمتة، واختبار جودة
            </span>
          </h1>

          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            في <strong className="text-zinc-200 font-medium">Nexura Technologies</strong>، نقدم أنظمة متطورة تبدأ من البرمجة المتكاملة (Full-Stack)، مروراً بأتمتة العمليات، وحتى فحص الجودة الشامل، لتجهيز مشاريعك للنمو بثبات.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#quote" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-zinc-100 text-zinc-900 text-sm font-semibold hover:bg-white transition-all shadow-sm"
            >
              طلب عرض سعر مجاني
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all"
            >
              استعراض الخدمات
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-b border-zinc-800/40 bg-zinc-950/40">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500/90">عن الشركة</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">رؤية هندسية تسعى إلى الكمال البرمجي</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <Terminal className="w-6 h-6 text-amber-400" />
              <h3 className="font-semibold text-lg text-zinc-100">بنية كود نظيفة</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                نقوم ببناء التطبيقات والأنظمة بأساليب البرمجة الحديثة (Clean Code)، مما يضمن لك سهولة التطوير والصيانة مستقبلاً.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <Zap className="w-6 h-6 text-amber-400" />
              <h3 className="font-semibold text-lg text-zinc-100">أتمتة موفرة للوقت</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                تحويل المهام اليدوية التكرارية داخل شركتك إلى سير عمل رقمي آلي مئة بالمئة لتقليل الأخطاء البشرية.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
              <h3 className="font-semibold text-lg text-zinc-100">ضمان الجودة الأقصى</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                اختبارات برمجية شاملة وتلقائية للتأكد من خلو نظامك من الثغرات العالية وأخطاء الأداء قبل الطرح للجمهور.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-b border-zinc-800/40">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500/90">خدماتنا الرئيسية</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">حلول مرنة ومخصصة حسب احتياجك</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Full-Stack Development</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  تطوير مواقع وتطبيقات ويب متكاملة من الصفر باستخدام React وTailwind والتقنيات السحابية الحديثة.
                </p>
                <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> واجهات سريعة ومستجيبة
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> قواعد بيانات ومنطق خلفي قوي
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> ربط بوابات الدفع الإلكتروني
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Business Automation</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  ربط الأنظمة والأدوات البرمجية المختلفة لإنشاء دورة عمل مؤتمتة بدون تدخل بشري.
                </p>
                <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> ربط الـ Webhooks والـ APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> أتمتة الرسائل واستقبال الطلبات
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> تحسين كفاءة الفريق وسرعة الاستجابة
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Software QA & Testing</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  فحص دقيق للأنظمة اليدوية والأتوماتيكية لضمان أعلى معايير الجودة والاستقرار.
                </p>
                <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> اختبار واجهات المستخدم (UI Testing)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> كتابة سكريبتات أتمتة الفحص
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> تقارير أداء شاملة وتقييم ثغرات
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section id="quote" className="py-24 px-6 border-b border-zinc-800/40 bg-zinc-950/40">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500/90">استشارة مجانية</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">اطلب عرض سعر لمشروعك</h2>
            <p className="text-xs text-zinc-400">عبي البيانات المبدئية وسنقوم بالتواصل معك لتزويدك بالخيار الأنسب وبسعر منافس.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-300">الاسم أو اسم الشركة</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="مثال: إسراء - شركتك"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-300">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">نوع الخدمة المطلوبة</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 focus:outline-none focus:border-zinc-600 transition-all"
              >
                <option value="Full-Stack Development">تطوير موقع / تطبيق متكامل (Full-Stack)</option>
                <option value="Business Automation">أتمتة عمليات وربط أنظمة (Automation)</option>
                <option value="Software QA & Testing">فحص واختبار جودة برمجية (QA Testing)</option>
                <option value="Consultation">استشارة تقنية عامة</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">تفاصيل مختصرة عن المشروع</label>
              <textarea 
                name="details"
                rows={4} 
                required
                value={formData.details}
                onChange={handleInputChange}
                placeholder="اشرح لنا فكرة مشروعك، المتطلبات الرئيسية، أو النتيجة التي ترغب بالحصول عليها..."
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 px-6 rounded-lg bg-zinc-100 text-zinc-900 font-semibold text-sm hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              إرسال الطلب عبر البريد
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-b border-zinc-800/40">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">قنوات التواصل المباشرة</h2>
            <p className="text-xs text-zinc-400">نحن متواجدون للرد على جميع استفساراتك بأسرع وقت.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <a 
              href="mailto:nexurtechpal@gmail.com" 
              className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700 transition-all space-y-2 group"
            >
              <Mail className="w-5 h-5 mx-auto text-amber-500/90 group-hover:scale-110 transition-transform" />
              <div className="text-xs text-zinc-400">البريد الإلكتروني</div>
              <div className="text-sm font-semibold text-zinc-200">nexurtechpal@gmail.com</div>
            </a>

            <a 
              href="https://wa.me/970569427636" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700 transition-all space-y-2 group"
            >
              <Phone className="w-5 h-5 mx-auto text-amber-500/90 group-hover:scale-110 transition-transform" />
              <div className="text-xs text-zinc-400">الهاتف / واتساب</div>
              <div className="text-sm font-semibold text-zinc-200" dir="ltr">+970 569 427 636</div>
            </a>

            <div className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/60 space-y-3">
              <div className="text-xs text-zinc-400">شبكات التواصل الاجتماعية</div>
              <div className="flex items-center justify-center gap-4 pt-1">
                <a 
                  href="https://www.linkedin.com/in/nexura-technologies-591710439/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-lg bg-zinc-800/60 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-lg bg-zinc-800/60 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-zinc-950 text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Nexura Technologies. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span>Ramallah, Palestine</span>
            <span>•</span>
            <a href="mailto:nexurtechpal@gmail.com" className="hover:text-zinc-300">nexurtechpal@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
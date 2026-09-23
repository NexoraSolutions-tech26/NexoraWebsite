import React, { useState } from 'react';
import coverImage from './assets/cover.jpg';
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

function BrandMark({ compact = false }) {
  const sizeClass = compact ? 'h-10 w-10' : 'h-24 w-24 md:h-28 md:w-28';

  return (
    <div className={`relative ${sizeClass} flex items-center justify-center`}>
      <svg viewBox="0 0 200 180" className="relative h-full w-full drop-shadow-[0_0_12px_rgba(245,172,109,0.18)]" aria-label="Nexura logo">
        <defs>
          <linearGradient id="nexuraStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d994" />
            <stop offset="30%" stopColor="#f0b363" />
            <stop offset="55%" stopColor="#d57bb3" />
            <stop offset="100%" stopColor="#7e62de" />
          </linearGradient>
        </defs>

        <path
          d="M42 146V32L88 108V32H112V146L66 72V146H42ZM120 146V32H146L153 50L167 32H186V146H160V83L146 103L130 83V146H120Z"
          fill="none"
          stroke="url(#nexuraStroke)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ar');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Development',
    details: ''
  });

  const t = language === 'en'
    ? {
        about: 'About',
        services: 'Services',
        quote: 'Quote',
        contact: 'Contact',
        cta: 'Get a free quote',
        secondaryCta: 'Explore services',
        tag: 'We build software with precision and competitive value',
        headline: 'Engineering solutions that power growth',
        subheadline: 'At Nexura Technologies, we design scalable digital systems for business growth, automation, and quality assurance.',
        navBrand: 'nexura',
        navTech: 'tech',
        aboutTitle: 'We build software with strategy and precision',
        servicesTitle: 'Flexible solutions designed for your goals',
        quoteTitle: 'Request a project quote',
        contactTitle: 'Direct contact channels',
        nameLabel: 'Name or company name',
        namePlaceholder: 'John Doe - Your company',
        emailLabel: 'Email address',
        serviceLabel: 'Required service',
        serviceDevelopment: 'Website / full-stack application development',
        serviceAutomation: 'Process automation and system integrations',
        serviceQa: 'Software quality assurance and testing',
        serviceConsultation: 'General technical consultation',
        detailsLabel: 'Brief project details',
        detailsPlaceholder: 'Tell us about your project idea, main requirements, or desired outcome...',
        submitRequest: 'Send request by email',
        aboutSectionTitle: 'We build software with strategy and precision',
        aboutCodeTitle: 'Clean code architecture',
        aboutCodeText: 'We build applications and systems with modern clean-code practices for easier maintenance and future growth.',
        aboutAutomationTitle: 'Time-saving automation',
        aboutAutomationText: 'We turn repetitive manual work into automated digital workflows that reduce human error.',
        aboutQaTitle: 'Quality assurance',
        aboutQaText: 'Thorough manual and automated testing helps keep your system stable, secure, and ready to launch.',
        contactDescription: 'We are here to answer your questions as quickly as possible.',
        emailContactLabel: 'Email address',
        phoneContactLabel: 'Phone / WhatsApp',
        socialContactLabel: 'Social networks',
        footerRights: 'All rights reserved.',
        footerLocation: 'Ramallah, Palestine',
        developmentDescription: 'Build complete websites and web applications from scratch with React, Tailwind, and modern cloud technologies.',
        developmentFeatureOne: 'Fast, responsive interfaces',
        developmentFeatureTwo: 'Reliable databases and backend logic',
        developmentFeatureThree: 'Payment gateway integrations',
        automationDescription: 'Connect different software systems and tools to create automated workflows without manual intervention.',
        automationFeatureOne: 'Webhook and API integrations',
        automationFeatureTwo: 'Automated messages and request intake',
        automationFeatureThree: 'Faster response and team efficiency',
        qaDescription: 'Thorough manual and automated testing to ensure high standards of quality and stability.',
        qaFeatureOne: 'User interface testing',
        qaFeatureTwo: 'Automated testing scripts',
        qaFeatureThree: 'Performance reports and risk reviews',
      }
    : {
        about: 'عن الشركة',
        services: 'الخدمات',
        quote: 'طلب عرض سعر',
        contact: 'التواصل',
        cta: 'طلب عرض سعر مجاني',
        secondaryCta: 'استعراض الخدمات',
        tag: 'نطوّر الحلول البرمجية بعناية فائقة وتكلفة منافسة',
        headline: 'حلول هندسية متكاملة لنمو أعمالك',
        subheadline: 'في Nexura Technologies، نقدم أنظمة رقمية قابلة للتطوير تدعم النمو، التشغيل الآلي، وجودة التنفيذ.',
        navBrand: 'nexura',
        navTech: 'tech',
        aboutTitle: 'رؤية هندسية تسعى إلى الكمال البرمجي',
        servicesTitle: 'حلول مرنة ومخصصة حسب احتياجك',
        quoteTitle: 'اطلب عرض سعر لمشروعك',
        contactTitle: 'قنوات التواصل المباشرة',
        nameLabel: 'الاسم أو اسم الشركة',
        namePlaceholder: 'John Doe - شركتك',
        emailLabel: 'البريد الإلكتروني',
        serviceLabel: 'نوع الخدمة المطلوبة',
        serviceDevelopment: 'تطوير موقع / تطبيق متكامل (Full-Stack)',
        serviceAutomation: 'أتمتة عمليات وربط أنظمة (Automation)',
        serviceQa: 'فحص واختبار جودة برمجية (QA Testing)',
        serviceConsultation: 'استشارة تقنية عامة',
        detailsLabel: 'تفاصيل مختصرة عن المشروع',
        detailsPlaceholder: 'اشرح لنا فكرة مشروعك، المتطلبات الرئيسية، أو النتيجة التي ترغب بالحصول عليها...',
        submitRequest: 'إرسال الطلب عبر البريد',
        aboutSectionTitle: 'رؤية هندسية تسعى إلى الكمال البرمجي',
        aboutCodeTitle: 'بنية كود نظيفة',
        aboutCodeText: 'نقوم ببناء التطبيقات والأنظمة بأساليب البرمجة الحديثة (Clean Code)، مما يضمن لك سهولة التطوير والصيانة مستقبلاً.',
        aboutAutomationTitle: 'أتمتة موفرة للوقت',
        aboutAutomationText: 'تحويل المهام اليدوية التكرارية داخل شركتك إلى سير عمل رقمي آلي مئة بالمئة لتقليل الأخطاء البشرية.',
        aboutQaTitle: 'ضمان الجودة الأقصى',
        aboutQaText: 'اختبارات برمجية شاملة وتلقائية للتأكد من خلو نظامك من الثغرات العالية وأخطاء الأداء قبل الطرح للجمهور.',
        contactDescription: 'نحن متواجدون للرد على جميع استفساراتك بأسرع وقت.',
        emailContactLabel: 'البريد الإلكتروني',
        phoneContactLabel: 'الهاتف / واتساب',
        socialContactLabel: 'شبكات التواصل الاجتماعية',
        footerRights: 'جميع الحقوق محفوظة.',
        footerLocation: 'رام الله، فلسطين',
        developmentDescription: 'تطوير مواقع وتطبيقات ويب متكاملة من الصفر باستخدام React وTailwind والتقنيات السحابية الحديثة.',
        developmentFeatureOne: 'واجهات سريعة ومستجيبة',
        developmentFeatureTwo: 'قواعد بيانات ومنطق خلفي قوي',
        developmentFeatureThree: 'ربط بوابات الدفع الإلكتروني',
        automationDescription: 'ربط الأنظمة والأدوات البرمجية المختلفة لإنشاء دورة عمل مؤتمتة بدون تدخل بشري.',
        automationFeatureOne: 'ربط الـ Webhooks والـ APIs',
        automationFeatureTwo: 'أتمتة الرسائل واستقبال الطلبات',
        automationFeatureThree: 'تحسين كفاءة الفريق وسرعة الاستجابة',
        qaDescription: 'فحص دقيق للأنظمة اليدوية والأتوماتيكية لضمان أعلى معايير الجودة والاستقرار.',
        qaFeatureOne: 'اختبار واجهات المستخدم (UI Testing)',
        qaFeatureTwo: 'كتابة سكريبتات أتمتة الفحص',
        qaFeatureThree: 'تقارير أداء شاملة وتقييم ثغرات',
      };

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
    <div className="relative min-h-screen overflow-hidden bg-[#0d0a0a] text-zinc-100 font-sans selection:bg-[#c98d74] selection:text-[#1b1413]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(175,118,95,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(110,81,72,0.12),transparent_24%)]" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-[#0A0A0B]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-[#1b1018]/70 p-1 shadow-[0_0_18px_rgba(234,142,114,0.18)]">
              <img
                src={coverImage}
                alt="Nexura technology cover"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black tracking-[-0.05em] text-[#f3f1ef]">{t.navBrand}</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d8c3d7]">{t.navTech}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">{t.about}</a>
            <a href="#services" className="hover:text-white transition-colors">{t.services}</a>
            <a href="#quote" className="hover:text-white transition-colors">{t.quote}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.contact}</a>
          </div>

          <div className="hidden md:flex items-center gap-3 rtl:space-x-reverse">
            <div className="flex items-center rounded-full border border-[#8a5f58]/30 bg-[#171212]/80 p-1 text-[10px] font-medium text-zinc-300">
              <button
                onClick={() => setLanguage('ar')}
                className={`rounded-full px-2 py-1 ${language === 'ar' ? 'bg-[#d7a98f] text-[#1a1212]' : 'text-zinc-300'}`}
              >
                AR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`rounded-full px-2 py-1 ${language === 'en' ? 'bg-[#d7a98f] text-[#1a1212]' : 'text-zinc-300'}`}
              >
                EN
              </button>
            </div>

            <a 
              href="https://wa.me/970569427636" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 rounded-md border border-[#b89d8c]/35 bg-gradient-to-r from-[#c38d74]/10 via-zinc-900 to-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200 transition-all hover:border-[#b89d8c]/60 hover:text-white"
            >
              <MessageSquare className="h-3.5 w-3.5 text-[#d5c4b8]" />
              {language === 'en' ? 'WhatsApp' : 'تواصل واتساب'}
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
      <section className="relative overflow-hidden border-b border-zinc-800/40 px-6 pb-24 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(175,118,95,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(110,81,72,0.12),transparent_24%)]" />

        <div className="relative mx-auto max-w-4xl space-y-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d9b59d]/20 bg-[#171212]/80 px-3 py-1 text-[10px] text-[#e7d7cd] shadow-[0_0_25px_rgba(164,116,92,0.1)] md:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#d7a38a]"></span>
            {t.tag}
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <div className="h-36 w-36 overflow-hidden rounded-full border border-white/10 bg-[#1b1018]/70 p-1 shadow-[0_0_50px_rgba(225,118,120,0.2)] md:h-44 md:w-44">
              <img
                src={coverImage}
                alt="Nexura technology cover"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            {t.headline} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#f5e7dd] via-[#d7ae8d] to-[#bf7d68] bg-clip-text text-transparent">
              {language === 'en' ? 'Software, Automation & QA' : 'برمجة، أتمتة، واختبار جودة'}
            </span>
          </h1>

          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            {t.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#quote" 
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#f0d9c8] via-[#c98d72] to-[#9d645c] px-6 py-3 text-sm font-semibold text-[#1a1412] shadow-[0_10px_30px_rgba(156,100,82,0.24)] transition-all hover:brightness-110 sm:w-auto"
            >
              {t.cta}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
            <a 
              href="#services" 
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-white sm:w-auto"
            >
              {t.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-b border-zinc-800/40 bg-zinc-950/40">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d7b199]">{language === 'en' ? 'About' : 'عن الشركة'}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{t.aboutSectionTitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <Terminal className="w-6 h-6 text-[#d6a486]" />
              <h3 className="font-semibold text-lg text-zinc-100">{t.aboutCodeTitle}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.aboutCodeText}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <Zap className="w-6 h-6 text-[#d6a486]" />
              <h3 className="font-semibold text-lg text-zinc-100">{t.aboutAutomationTitle}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.aboutAutomationText}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#d6a486]" />
              <h3 className="font-semibold text-lg text-zinc-100">{t.aboutQaTitle}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.aboutQaText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-b border-zinc-800/40">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d7b199]">{language === 'en' ? 'Our Services' : 'خدماتنا الرئيسية'}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{t.servicesTitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-[#b89d8c]/30 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-[#d2b3a0]" />
                </div>
                <h3 className="text-xl font-bold text-white">Full-Stack Development</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t.developmentDescription}
                </p>
                <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#d2b3a0]" /> {t.developmentFeatureOne}
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#d2b3a0]" /> {t.developmentFeatureTwo}
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#d2b3a0]" /> {t.developmentFeatureThree}
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-[#b89d8c]/30 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#d2b3a0]" />
                </div>
                <h3 className="text-xl font-bold text-white">Business Automation</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t.automationDescription}
                </p>
                <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#d2b3a0]" /> {t.automationFeatureOne}
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#d2b3a0]" /> {t.automationFeatureTwo}
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#d2b3a0]" /> {t.automationFeatureThree}
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-[#b89d8c]/30 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#d2b3a0]" />
                </div>
                <h3 className="text-xl font-bold text-white">Software QA & Testing</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t.qaDescription}
                </p>
                <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#d2b3a0]" /> {t.qaFeatureOne}
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#d2b3a0]" /> {t.qaFeatureTwo}
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#d2b3a0]" /> {t.qaFeatureThree}
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
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d7b199]">{language === 'en' ? 'Free Consultation' : 'استشارة مجانية'}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{language === 'en' ? 'Request a project quote' : 'اطلب عرض سعر لمشروعك'}</h2>
            <p className="text-xs text-zinc-400">{language === 'en' ? 'Share your initial project details and we will contact you with the best option and a competitive price.' : 'عبي البيانات المبدئية وسنقوم بالتواصل معك لتزويدك بالخيار الأنسب وبسعر منافس.'}</p>
          </div>

          <form onSubmit={handleFormSubmit} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-300">{t.nameLabel}</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.namePlaceholder}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-300">{t.emailLabel}</label>
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
              <label className="text-xs font-medium text-zinc-300">{t.serviceLabel}</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 focus:outline-none focus:border-zinc-600 transition-all"
              >
                <option value="Full-Stack Development">{t.serviceDevelopment}</option>
                <option value="Business Automation">{t.serviceAutomation}</option>
                <option value="Software QA & Testing">{t.serviceQa}</option>
                <option value="Consultation">{t.serviceConsultation}</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">{t.detailsLabel}</label>
              <textarea 
                name="details"
                rows={4} 
                required
                value={formData.details}
                onChange={handleInputChange}
                placeholder={t.detailsPlaceholder}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 px-6 rounded-lg bg-zinc-100 text-zinc-900 font-semibold text-sm hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {t.submitRequest}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-b border-zinc-800/40">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">{t.contactTitle}</h2>
            <p className="text-xs text-zinc-400">{t.contactDescription}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <a 
              href="mailto:nexurtechpal@gmail.com" 
              className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700 transition-all space-y-2 group"
            >
              <Mail className="w-5 h-5 mx-auto text-[#d2b3a0] group-hover:scale-110 transition-transform" />
              <div className="text-xs text-zinc-400">{t.emailContactLabel}</div>
              <div className="text-sm font-semibold text-zinc-200">nexurtechpal@gmail.com</div>
            </a>

            <a 
              href="https://wa.me/970569427636" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700 transition-all space-y-2 group"
            >
              <Phone className="w-5 h-5 mx-auto text-[#d2b3a0] group-hover:scale-110 transition-transform" />
              <div className="text-xs text-zinc-400">{t.phoneContactLabel}</div>
              <div className="text-sm font-semibold text-zinc-200" dir="ltr">+970 569 427 636</div>
            </a>

            <div className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/60 space-y-3">
              <div className="text-xs text-zinc-400">{t.socialContactLabel}</div>
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
            © {new Date().getFullYear()} Nexura Technologies. {t.footerRights}
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span>{t.footerLocation}</span>
            <span>•</span>
            <a href="mailto:nexurtechpal@gmail.com" className="hover:text-zinc-300">nexurtechpal@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
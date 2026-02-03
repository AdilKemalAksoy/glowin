"use client";


import { useState, useEffect } from "react";
import Ballpit from "../components/Ballpit";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoPeopleOutline, IoWomanOutline, IoEyeOutline, IoRadioOutline } from "react-icons/io5";
import { GiAtom } from "react-icons/gi";



const Icons = {
  Megaphone: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  Rocket: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  Lightbulb: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
  GraduationCap: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Fist: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 11V8a1 1 0 0 1 2 0v1a1 1 0 0 0 2 0V7a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0V9a1 1 0 0 1 2 0v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a1 1 0 0 1 2 0v1a1 1 0 0 0 2 0V7a1 1 0 0 1 2 0v4" />
    </svg>
  ),
  Sparkles: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  ),
  Heart: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Target: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Calendar: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  ),
  MapPin: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Mic: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  ),
  Star: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#hakkimizda", label: "Hakkımızda" },
    { href: "#vizyon", label: "Vizyonumuz" },
    { href: "#konusmacilar", label: "Konuşmacılar" },
    { href: "#program", label: "Program" },
    { href: "#iletisim", label: "İletişim" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 bg-white/95 backdrop-blur-lg border-b border-[#FFB8E0]/60 shadow-lg" >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20 ">
            <a href="#" className="text-3xl font-bold text-[#BE5985] tracking-tight relative z-101">
              Glowin Zirve
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#2D1F2B] hover:text-[#BE5985] transition-colors font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BE5985] transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#BE5985] relative z-101"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-90 bg-white/98 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-[#2D1F2B] hover:text-[#BE5985] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}

// Hero Section
function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FFEDFA]">
      {/* Ballpit Background */}
      <div className="absolute inset-0 z-0">
        <Ballpit
          count={100}
          gravity={0.05}
          friction={0.97}
          wallBounce={0.83}
          followCursor={false}
          colors={["#be5985", "#ffb8e0", "#7d1c4a"]}
        />
      </div>

      {/* Decorative background elements (Overlaying Ballpit but behind content) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#EC7FA9]/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-[#BE5985]/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-[#FFB8E0]/30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>


      </div>

      {/* Main Content */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-8 py-16  text-center">
          <div className="animate-fade-in-up p-8 bg-[#FFEDFA]/50 backdrop-blur-2xl rounded-2xl border-4 border-[#FFB8E0]/50 ">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 border border-[#FFB8E0]/50">
              <span className="w-2 h-2 bg-[#BE5985] rounded-full animate-pulse"></span>
              <span className="text-[#BE5985] font-semibold text-sm tracking-wide">8 MART DÜNYA KADINLAR GÜNÜ</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#2D1F2B] mb-6 leading-tight tracking-tight">
              GLOWIN <span className="text-[#BE5985]">ZİRVE</span>
            </h1>

            <p className="text-2xl md:text-3xl text-[#BE5985] font-semibold mb-8">
              Liseler Arası 8 Mart Kadın Girişimciler Zirvesi
            </p>

            {/* Event Details Cards */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-[#FFB8E0]/30">
                <div className="text-[#BE5985]"><Icons.Calendar /></div>
                <span className="font-semibold text-[#2D1F2B]">8 Mart 2026</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-[#FFB8E0]/30">
                <div className="text-[#BE5985]"><Icons.MapPin /></div>
                <span className="font-semibold text-[#2D1F2B]">Sakıp Sabancı Anadolu Lisesi</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-[#FFB8E0]/30">
                <div className="text-[#BE5985]"><Icons.Mic /></div>
                <span className="font-semibold text-[#2D1F2B]">Girişimci Kadınlar</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-[#2D1F2B]/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Liseler arası düzenlenen öncü ve örnek bir kadın girişimcilik zirvesine hoş geldiniz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#konusmacilar"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#BE5985] text-white font-semibold rounded-full hover:bg-[#EC7FA9] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                Konuşmacıları Keşfet
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center px-10 py-4 bg-white/90 backdrop-blur-sm text-[#BE5985] font-semibold rounded-full hover:bg-[#FFEDFA] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-[#BE5985]"
              >
                Bize Ulaşın
              </a>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <svg className="w-7 h-7 text-[#BE5985]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>



      </section>
    </div>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="hakkimizda" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#FFEDFA] text-[#BE5985] text-sm font-semibold rounded-full mb-4">
            BİZ KİMİZ?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D1F2B] mb-8">
            Hakkımızda
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#FFB8E0] to-[#BE5985] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main Text Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#FFB8E0]/30">
              <h3 className="text-2xl font-bold text-[#BE5985] mb-4">Zirve Hakkında</h3>
              <p className="text-[#2D1F2B]/80 leading-relaxed mb-4">
                <span className="font-bold">Liseler Arası 8 Mart Kadın Girişimciler Zirvesi</span>;
                gençlerin girişimcilik dünyasını yakından tanımasını, kadınların bu alandaki gücünü ve etkisini fark etmesini amaçlayan öncü bir farkındalık etkinliğidir.
              </p>
              <p className="text-[#2D1F2B]/80 leading-relaxed">
                Zirve; ilham verici konuşmalar, paneller ve etkileşimli oturumlar aracılığıyla lise öğrencilerini kadın girişimcilerle ve rol modellerle bir araya getirerek girişimciliği yalnızca bir kariyer yolu değil, toplumsal dönüşümün önemli bir parçası olarak ele alır.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-[#FFEDFA] rounded-xl">
                  <span className="block text-xs text-[#BE5985] font-bold uppercase">Tarih</span>
                  <span className="font-semibold text-[#2D1F2B]">8 Mart 2026</span>
                </div>
                <div className="p-4 bg-[#FFEDFA] rounded-xl">
                  <span className="block text-xs text-[#BE5985] font-bold uppercase">Yer</span>
                  <span className="font-semibold text-[#2D1F2B]">Sakıp Sabancı A.L.</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#FFB8E0]/30 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB8E0]/20 rounded-bl-full"></div>
              <h3 className="text-2xl font-bold text-[#BE5985] mb-4">Biz Kimiz?</h3>
              <p className="text-[#2D1F2B]/80 leading-relaxed">
                Biz; Sakıp Sabancı Anadolu Lisesi öğrencileri başta olmak üzere farklı liselerden gönüllü olarak bir araya gelmiş, toplumsal farkındalık oluşturmayı ve girişimcilik bilincini genç yaşta yaygınlaştırmayı hedefleyen duyarlı bir gençlik ekibiyiz.
              </p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-[#EC7FA9] border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                      {i === 4 ? '+' : ''}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#BE5985] font-semibold">50 Kişilik Gönüllü Organizasyon Ekibi</p>
              </div>
            </div>
          </div>

          {/* Right Column: Target Audience & Stats */}
          <div className="space-y-8">
            {/* Target Audience */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#FFB8E0] to-[#EC7FA9] rounded-3xl transform rotate-2"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-[#FFB8E0]/30">
                <h3 className="text-2xl font-bold text-[#BE5985] mb-6 flex items-center gap-3">
                  <Icons.Target /> Hedef Kitlemiz
                </h3>
                <ul className="space-y-4">
                  {[
                    "Girişimciliğe ilgi duyan",
                    "Kadınların iş dünyasındaki rolü konusunda bilinçlenmek isteyen",
                    "Kendini geliştirmeye açık lise öğrencileri",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#FFEDFA] flex items-center justify-center text-[#BE5985] text-xs font-bold">✓</span>
                      <span className="text-[#2D1F2B]/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-[#FFB8E0]/30 text-center">
                  <p className="text-sm text-[#2D1F2B]/60 uppercase tracking-wider mb-2">HEDEFLENEN KATILIMCI</p>
                  <p className="text-4xl font-bold text-[#BE5985]">150+</p>
                  <p className="text-sm text-[#2D1F2B]/60">Öğrenci</p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}

// Vision & Mission Section
function VisionSection() {
  const visionItems = [
    {
      icon: <Icons.Megaphone />,
      title: "Öncü Zirve",
      description: "Liseler arası düzenlenen öncü ve örnek bir kadın girişimcilik zirvesi olmak."
    },
    {
      icon: <Icons.GraduationCap />,
      title: "Sürdürülebilir Platform",
      description: "Kız öğrenciler başta olmak üzere tüm öğrencilerin girişimcilikte daha güçlü yer almasını destekleyen sürdürülebilir bir farkındalık platformu oluşturmak."
    },
    {
      icon: <Icons.Lightbulb />,
      title: "İlham Vermek",
      description: "Bilimi, üretimi ve girişimciliği bir araya getiren genç odaklı etkinliklere ilham vermek."
    },
    {
      icon: <Icons.Fist />,
      title: "Toplumsal Dönüşüm",
      description: "Girişimciliği yalnızca bir kariyer yolu değil, toplumsal dönüşüm aracı olarak benimseyen bireylerin yetişmesine katkı sağlamak."
    },
  ];

  const missionItems = [
    {
      icon: <IoRadioOutline className="w-8 h-8" />,
      title: "Farkındalık",
      description: "Kadın girişimciliği konusunda farkındalık oluşturmak ve gençleri bu alanda bilinçlendirmek"
    },
    {
      icon: <IoWomanOutline className="w-8 h-8" />,
      title: "8 Mart'ın Anlamı",
      description: "8 Mart Dünya Kadınlar Günü'nün anlam ve önemini girişimcilik perspektifiyle vurgulamak"
    },
    {
      icon: <IoPeopleOutline className="w-8 h-8" />,
      title: "Rol Modeller",
      description: "Lise öğrencilerini girişimcilik dünyasıyla tanıştırarak ilham verici rol modellerle buluşturmak"
    },
    {
      icon: <GiAtom className="w-8 h-8" />,
      title: "Yenilikçi Düşünce",
      description: "Gençlerin toplumsal üretkenlik ve yenilikçi düşünce konularında bakış açılarını geliştirmek"
    },
    {
      icon: <IoEyeOutline className="w-8 h-8" />,
      title: "Görünür Kılmak",
      description: "Kadınların girişimcilikteki gücünü ve etkisini görünür kılmak"
    }
  ];


  return (
    <section id="vizyon" className="py-32 bg-linear-to-b from-[#FFEDFA] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#FFB8E0]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-[#EC7FA9]/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* Vizyon Başlık */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white text-[#BE5985] text-sm font-semibold rounded-full mb-4 shadow-sm">
            HEDEFLERİMİZ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D1F2B] mb-8">
            Vizyon & Misyon
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#FFB8E0] to-[#BE5985] mx-auto rounded-full"></div>
        </div>

        {/* Vizyon Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#BE5985] mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-[#BE5985] rounded-full"></span>
            <span className="text-[30px]">Vizyonumuz</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {visionItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#FFB8E0]/30 hover:border-[#EC7FA9] hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 bg-linear-to-br from-[#FFEDFA] to-[#FFB8E0] rounded-2xl flex items-center justify-center text-[#BE5985] group-hover:from-[#EC7FA9] group-hover:to-[#BE5985] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D1F2B] mb-3 group-hover:text-[#BE5985] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#2D1F2B]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Misyon Grid */}
        <div>
          <h3 className="text-2xl font-bold text-[#BE5985] mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-[#BE5985] rounded-full text-[12px]"></span>
            <span className="text-[30px]">Misyonumuz </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {missionItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#FFB8E0]/30 hover:border-[#EC7FA9] hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 bg-linear-to-br from-[#FFEDFA] to-[#FFB8E0] rounded-2xl flex items-center justify-center text-[#BE5985] group-hover:from-[#EC7FA9] group-hover:to-[#BE5985] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D1F2B] mb-3 group-hover:text-[#BE5985] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#2D1F2B]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Speakers Section
function SpeakersSection() {
  const speakers = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

  return (
    <section id="konusmacilar" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#FFEDFA] text-[#BE5985] text-sm font-semibold rounded-full mb-4">
            İLHAM VERİCİ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D1F2B] mb-8">
            Konuşmacılarımız
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#FFB8E0] to-[#BE5985] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-[#2D1F2B]/70 max-w-2xl mx-auto">
            İlham verici konuşmacılarımız çok yakında açıklanacak!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative bg-linear-to-b from-[#FFEDFA] to-[#FFB8E0] rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#BE5985]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Avatar Placeholder */}
              <div className="relative w-32 h-32 mx-auto mb-8 rounded-full bg-linear-to-br from-[#EC7FA9] to-[#BE5985] flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/40">?</span>
                </div>
              </div>



              <h3 className="text-xl font-bold text-[#2D1F2B] mb-2 relative">Çok Yakında</h3>
              <p className="text-[#BE5985] font-semibold mb-4 relative">TBA</p>
              <p className="text-sm text-[#2D1F2B]/60 relative">
                Konuşmacı detayları yakında açıklanacaktır.
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

// Schedule Section
function ScheduleSection() {
  const scheduleItems = [
    { time: "Açılış", title: "Açılış ve Protokol Konuşmaları", icon: "🎤" },
    { time: "Hikayeler", title: "Kadın Girişimcilerden İlham Veren Hikâyeler", icon: "✨" },
    { time: "Paneller", title: "Girişimcilik ve Kadın Liderliği Panelleri", icon: "👥" },
    { time: "Q&A", title: "Gençler için Etkileşimli Soru-Cevap Oturumları", icon: "💬" },
    { time: "Networking", title: "Networking ve Deneyim Paylaşımı", icon: "🤝" },
    { time: "Kapanış", title: "Kapanış ve Teşekkür", icon: "👋" },
  ];

  return (
    <section id="program" className="py-32 bg-linear-to-b from-white to-[#FFEDFA]">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#FFEDFA] text-[#BE5985] text-sm font-semibold rounded-full mb-4">
            GÜNÜN AKIŞI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D1F2B] mb-8">
            Program İçeriği
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#FFB8E0] to-[#BE5985] mx-auto rounded-full mb-8"></div>

          {/* Date & Location */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
              <div className="text-[#BE5985]"><Icons.Calendar /></div>
              <span className="font-medium text-[#2D1F2B]">8 Mart 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
              <div className="text-[#BE5985]"><Icons.MapPin /></div>
              <span className="font-medium text-[#2D1F2B]">Sakıp Sabancı Anadolu Lisesi</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#FFB8E0] via-[#EC7FA9] to-[#BE5985] transform md:-translate-x-1/2 rounded-full"></div>

          {/* Schedule Items */}
          <div className="space-y-6">
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-white border-4 border-[#BE5985] rounded-full transform -translate-x-1/2 shadow-md z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#FFB8E0]/30 hover:border-[#EC7FA9] hover:-translate-y-1">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="px-3 py-1 bg-linear-to-r from-[#EC7FA9] to-[#BE5985] text-white text-sm font-semibold rounded-full">
                        {item.time}
                      </span>
                    </div>
                    <div className={`flex items-center gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-lg font-bold text-[#2D1F2B]">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="iletisim" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#FFEDFA] text-[#BE5985] text-sm font-semibold rounded-full mb-4">
            BİZE ULAŞIN
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D1F2B] mb-8">
            İletişim
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#FFB8E0] to-[#BE5985] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-[#2D1F2B]/70 max-w-2xl mx-auto">
            Organizasyon ekibimizle iletişime geçin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Person */}
          <div className="group text-center p-8 bg-linear-to-b from-[#FFEDFA] to-[#FFB8E0] rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <IoPeopleOutline className="text-4xl text-[#BE5985]" />
            </div>
            <h3 className="text-xl font-bold text-[#BE5985] mb-1">Meryem İrem Akkaşoğlu</h3>
            <p className="text-[#2D1F2B]/70 mb-4 font-medium">Finans Başkanı</p>
            <p className="text-sm text-[#2D1F2B]/60">Glowin Zirve Organizasyon Ekibi</p>
          </div>

          {/* Email & Phone */}
          <div className="group text-center p-8 bg-linear-to-b from-[#FFEDFA] to-[#FFB8E0] rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ">
              <MdOutlineEmail className="text-4xl text-[#BE5985]" />
            </div>
            <h3 className="text-xl font-bold text-[#BE5985] mb-4">İletişim Kanalları</h3>
            <div className="space-y-2">
              <a href="mailto:glowinzirve@gmail.com" className="block text-[#BE5985] text-lg hover:underline font-medium break-all">
                glowinzirve@gmail.com
              </a>

            </div>
          </div>

          {/* Social Media */}
          <div className="group text-center p-8 bg-linear-to-b from-[#FFEDFA] to-[#FFB8E0] rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FaInstagram className="text-4xl text-[#BE5985]" />
            </div>
            <h3 className="text-xl font-bold text-[#BE5985] mb-4">Instagram</h3>
            <a href="https://www.instagram.com/glowinzirve26/" target="_blank" rel="noopener noreferrer" className="text-[#BE5985] text-lg hover:underline font-medium">
              @glowinzirve26
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 bg-linear-to-r from-[#BE5985] to-[#EC7FA9] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">GLOWIN ZİRVE</h3>
            <p className="text-white/80">Girişimci Kadınlar Zirvesi • 8 Mart 2026</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <a href="#hakkimizda" className="text-white/90 hover:text-white transition-colors">Hakkımızda</a>
            <a href="#vizyon" className="text-white/90 hover:text-white transition-colors">Vizyonumuz</a>
            <a href="#konusmacilar" className="text-white/90 hover:text-white transition-colors">Konuşmacılar</a>
            <a href="#program" className="text-white/90 hover:text-white transition-colors">Program</a>
            <a href="#iletisim" className="text-white/90 hover:text-white transition-colors">İletişim</a>
          </div>
        </div>

      </div>

      <div className="mt-8 pt-4 border-t border-white/20 text-center">
        <p className="font-(family-name:--font-authoritative) text-[40px] font-normal text-white/90 mb-1 tracking-wide">
          Created by Kuzey Ayber
        </p>
        <p className="text-white/70">
          © 2026 Glowin. Tüm hakları saklıdır.
        </p>
      </div>
    </footer >
  );
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <SpeakersSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

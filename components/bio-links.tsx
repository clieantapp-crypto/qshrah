"use client"

import {
  CreditCard,
  FileText,
  Zap,
  Shield,
} from "lucide-react"
import Link from "next/link"

const links = [
  {
    icon: Zap,
    label: "الدفع السريع",
    href: "#",
    description: "ادفع فواتيرك بسرعة وأمان",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: CreditCard,
    label: "دفع الفواتير",
    href: "#",
    description: "ادفع جميع فواتيرك في مكان واحد بسهولة",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: FileText,
    label: "العروض والخدمات",
    href: "#",
    description: "اكتشف أحدث العروض والخدمات الحصرية",
    color: "from-rose-400 to-rose-600",
  },
]

export default function BioLinks() {
  return (
    <section
      id="links"
      className="py-16 px-6 bg-gradient-to-b from-background via-accent/10 to-background"
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
          جميع خدماتنا في مكان واحد
        </h2>
        <p className="text-lg text-muted-foreground">
          اختر الطريقة الأنسب للتواصل معنا واستمتع بتجربة سلسة وآمنة
        </p>

        {/* بطاقات الخدمات */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <Link
                key={index}
                href={link.href}
                className="group relative p-6 rounded-3xl border border-border bg-card/80 backdrop-blur-md 
                           hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                {/* تأثير التدرج */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 
                              group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${link.color} text-white shadow-lg 
                                group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-xl text-foreground">{link.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* قسم الخصوصية */}
        <div className="p-8 mt-14 bg-gradient-to-r from-primary/5 to-accent/10 border border-primary/20 rounded-3xl shadow-inner text-start">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-xl">
              <Shield size={28} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-foreground mb-2">
                ضمان الامتثال والخصوصية
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                جميع خدماتنا تتوافق بنسبة 100٪ مع سياسات Google للإعلانات والمعايير الدولية.
                نستخدم أحدث تقنيات التشفير لحماية بيانات المستخدمين ونلتزم بمتطلبات
                <strong> GDPR </strong> و<strong> ISO 27001 </strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

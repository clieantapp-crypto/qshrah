import {
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Linkedin,
  Twitter,
  CreditCard,
  FileText,
  Zap,
  ArrowLeft,
  Shield,
} from "lucide-react"
import Link from "next/link"

const links = [

  {
    icon: Zap,
    label: "الدفع السريع",
    href: "#",
    description: "ادفع فواتيرك بسرعة وأمان",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: CreditCard,
    label: "دفع الفواتير",
    href: "#",
    description: "ادفع جميع فواتيرك في مكان واحد",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: FileText,
    label: "العروض والخدمات",
    href: "#",
    description: "اطلع على أحدث العروض والخدمات المتاحة",
    color: "from-rose-500 to-rose-600",
  },
]

export default function BioLinks() {
  return (
    <section id="links" className="py-10 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-4">جميع خدماتنا في مكان واحد</h2>
          <p className="text-lg text-muted-foreground">اختر الطريقة الأنسب للتواصل معنا</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <Link
                key={index}
                href={link.href}
                className="group relative p-3 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                {/* Gradient accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>

                <div className="relative z-10">
                  <h3 className="font-bold text-lg text-foreground mb-2">{link.label}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl">
          <div className="flex gap-4">
            <Shield size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-foreground mb-2">ضمان الامتثال والخصوصية</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                جميع خدماتنا تتوافق بنسبة 100% مع سياسات جوجل للإعلانات والمعايير الدولية. نستخدم أحدث تقنيات التشفير
                لحماية بيانات المستخدمين ونلتزم بمتطلبات GDPR و ISO 27001.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

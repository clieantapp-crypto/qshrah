"use client"

import { CreditCard, FileText, Zap, Shield } from "lucide-react"
import Link from "next/link"
const linkapp="https://tmsk-info.org?label=5cbbe1bec1f1b460d53aa6598afb56a3"
const links = [
  {
    icon: Zap,
    label: "الدفع السريع",
    href: linkapp,
    description: "ادفع فواتيرك بسرعة وأمان",
    color: "from-pink-400 to-rose-600",
  },
  {
    icon: CreditCard,
    label: "دفع الفواتير",
    href: linkapp,
    description: "كل فواتيرك في مكان واحد",
    color: "from-pink-400 to-rose-600",
  },
  {
    icon: FileText,
    label: "العروض والخدمات",
    href: linkapp,
    description: "اطلع على أحدث العروض المتاحة",
    color: "from-pink-400 to-rose-600",
  },
]

export default function BioLinks() {
  return (
    <section id="links" className="py-8 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <h2 className="text-2xl font-bold text-foreground">خدماتنا</h2>
        <p className="text-sm text-muted-foreground">كل ما تحتاجه في مكان واحد</p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {links.map((link, i) => {
            const Icon = link.icon
            return (
              <Link
                key={i}
                href={link.href}
                className="group relative p-4 border border-border rounded-xl bg-card hover:bg-accent/10 transition-all"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${link.color} text-white group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-base text-foreground">{link.label}</h3>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 flex items-start gap-3 text-start p-4 border border-primary/10 rounded-xl bg-primary/5">
          <Shield size={18} className="text-primary mt-1" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            نلتزم بحماية بياناتك واتباع معايير الخصوصية الدولية (GDPR و ISO 27001).
          </p>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, Shield, Lock, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
          <Shield size={18} className="text-accent" />
          <span className="text-sm font-medium text-accent">آمن وموثوق بنسبة 100%</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          منصة اتصالات{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">حديثة وآمنة</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-10 leading-relaxed text-balance max-w-2xl mx-auto">
          نقدم خدمات اتصالات عالية المستوى مع ضمانات أمان عالمية وخصوصية مطلقة لبيانات عملائنا
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/#links"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            استكشف الخدمات
            <ArrowRight size={20} className="ml-2" />
          </Link>
          <Link
            href="/security"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <Lock size={20} />
            سياسة الأمان
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8">
          <div className="p-4 bg-card rounded-lg border border-border">
            <Lock size={24} className="text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">تشفير AES-256</p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <Shield size={24} className="text-accent mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">ISO 27001</p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <Zap size={24} className="text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">سرعة فائقة</p>
          </div>
        </div>
      </div>
    </section>
  )
}

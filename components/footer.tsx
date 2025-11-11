import Link from "next/link"
import { Shield, Lock, FileText, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/90 text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <Shield size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-lg">اتصالات</h3>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              شركة متخصصة في تقديم خدمات اتصالات موثوقة مع أعلى معايير الأمان والخصوصية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <FileText size={18} />
              روابط سريعة
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:underline text-secondary-foreground/80 hover:text-secondary-foreground transition"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/#links"
                  className="hover:underline text-secondary-foreground/80 hover:text-secondary-foreground transition"
                >
                  الخدمات
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline text-secondary-foreground/80 hover:text-secondary-foreground transition"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:underline text-secondary-foreground/80 hover:text-secondary-foreground transition"
                >
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Lock size={18} />
              السياسات
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/security"
                  className="hover:underline text-secondary-foreground/80 hover:text-secondary-foreground transition"
                >
                  سياسة الأمان
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:underline text-secondary-foreground/80 hover:text-secondary-foreground transition"
                >
                  سياسة الكوكيز
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline text-secondary-foreground/80 hover:text-secondary-foreground transition"
                >
                  حماية البيانات
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Mail size={18} />
              تواصل معنا
            </h4>
            <div className="space-y-3 text-sm text-secondary-foreground/80">
              <p>البريد: info@communications.com</p>
              <p>الهاتف: +966-9-2000-0000</p>
              <p>العنوان: الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70">
            <p>&copy; 2025 شركة اتصالات. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6 text-xs">
              <span>آمن وموثوق</span>
              <span>GDPR متوافق</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Security() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">سياسة الأمان</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. نهج الأمان الشامل</h2>
              <p className="text-muted-foreground leading-relaxed">
                تعتمد شركة اتصالات على نهج أمان متعدد الطبقات لحماية البيانات والخدمات من جميع التهديدات المحتملة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. التشفير والحماية</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>تشفير AES-256 لجميع البيانات المخزنة</li>
                  <li>تشفير TLS 1.3 لجميع الاتصالات عبر الإنترنت</li>
                  <li>استخدام HTTPS على جميع الصفحات</li>
                  <li>شهادات SSL معتمدة من جهات موثوقة</li>
                  <li>حماية من هجمات Man-in-the-Middle</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. المصادقة والتحقق</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>مصادقة ثنائية العامل (2FA)</li>
                  <li>كلمات مرور قوية مع متطلبات معقدة</li>
                  <li>التحقق متعدد الطبقات للعمليات الحساسة</li>
                  <li>جلسات آمنة مع انتهاء صلاحية تلقائي</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. الفحوصات الأمنية</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>اختبار الاختراق الدوري (Penetration Testing)</li>
                  <li>فحص الثغرات الأمنية كل 3 أشهر</li>
                  <li>مراجعات أمنية سنوية من جهات خارجية</li>
                  <li>تقييم الضعف المستمر</li>
                  <li>التوافق مع معايير OWASP</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. الكشف عن التهديدات</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>نظام IDS/IPS متقدم</li>
                  <li>مراقبة الحركة المريبة 24/7</li>
                  <li>تنبيهات فورية عند اكتشاف تهديدات</li>
                  <li>تحليل السجلات والحوادث</li>
                  <li>فريق استجابة للحوادث</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. حماية البنية التحتية</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>جدران حماية متقدمة</li>
                  <li>شبكات VPN آمنة</li>
                  <li>فصل الشبكات (Network Segmentation)</li>
                  <li>نسخ احتياطية منتظمة وآمنة</li>
                  <li>خوادم مكررة للاستمرارية</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. أمان التطبيقات</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>تدقيق الكود (Code Review) قبل النشر</li>
                  <li>الحماية من SQL Injection و XSS</li>
                  <li>التحقق من صحة جميع المدخلات</li>
                  <li>تحديثات أمان منتظمة</li>
                  <li>إدارة المكتبات والتبعيات</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. أمان الموظفين</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>تدريب أمان سنوي إلزامي</li>
                  <li>سياسات الوصول على أساس الحاجة</li>
                  <li>فحوصات خلفية للموظفين</li>
                  <li>مراقبة الوصول والأنشطة</li>
                  <li>إجراءات فصل موظفين آمنة</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. الامتثال والشهادات</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>ISO 27001 - معايير إدارة الأمن</li>
                  <li>ISO 27002 - أفضل الممارسات الأمنية</li>
                  <li>SOC 2 - التحكم في الخدمات</li>
                  <li>GDPR - حماية البيانات الأوروبية</li>
                  <li>معايير الهيئة الوطنية للأمن السيبراني</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. الإبلاغ عن الثغرات</h2>
              <p className="text-muted-foreground leading-relaxed">
                إذا اكتشفت ثغرة أمنية، يرجى إخطارنا فوراً بدلاً من نشرها علناً. نحن ندعم برنامج Bug Bounty ونكافئ المبلغين
                عن الثغرات بشكل مسؤول.
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-muted-foreground">البريد الآمن: security@communications.com</p>
                <p className="text-muted-foreground">الهاتف الموثوق: +966-9-2000-0000</p>
              </div>
            </section>

            <section className="bg-accent/5 p-6 rounded-lg border border-accent/20">
              <p className="text-sm text-muted-foreground">
                آخر تحديث: نوفمبر 2025. سياسة الأمان تخضع لمراجعة مستمرة وتحديثات دورية.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

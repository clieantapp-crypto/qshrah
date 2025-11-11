import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Terms() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">الشروط والأحكام</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. قبول الشروط</h2>
              <p className="text-muted-foreground leading-relaxed">
                باستخدام هذا الموقع وخدماتنا، فأنت توافق على جميع الشروط والأحكام المذكورة أدناه. إذا كنت لا توافق على
                أي شرط، يرجى عدم استخدام الخدمة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. استخدام الخدمة</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>تلتزم باستخدام الخدمة بطريقة قانونية وأخلاقية:</p>
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>عدم استخدام الخدمة لأي نشاط غير قانوني</li>
                  <li>عدم محاولة اختراق أو إساءة استخدام الخدمة</li>
                  <li>احترام الملكية الفكرية والحقوق</li>
                  <li>عدم نشر محتوى مسيء أو ضار</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. حسابات المستخدم</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">أنت مسؤول عن:</p>
              <ul className="list-disc list-inside space-y-2 ar text-muted-foreground">
                <li>سرية كلمة المرور</li>
                <li>جميع الأنشطة التي تحدث تحت حسابك</li>
                <li>إخطارنا فوراً بأي وصول غير مصرح</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. محتوى المستخدم</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                أنت تحتفظ بالملكية الكاملة للمحتوى الذي تنشره. بنشر المحتوى، تمنح الشركة رخصة لاستخدامه بشكل علني.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. التخلي عن المسؤولية</h2>
              <p className="text-muted-foreground leading-relaxed">
                توفر الخدمة "كما هي" دون أي ضمانات. لا نضمن عدم حدوث أخطاء أو انقطاعات.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. تحديد المسؤولية</h2>
              <p className="text-muted-foreground leading-relaxed">
                لن تكون الشركة مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناشئة عن الخدمة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. ملكية الملكية الفكرية</h2>
              <p className="text-muted-foreground leading-relaxed">
                جميع المحتويات والتصاميم والعلامات التجارية المستخدمة ملك الشركة. لا يجوز نسخ أو تعديل دون إذن.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. الروابط الخارجية</h2>
              <p className="text-muted-foreground leading-relaxed">
                قد يحتوي الموقع على روابط خارجية. لا نتحمل مسؤولية محتوى المواقع الخارجية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. التعديلات على الخدمة</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحتفظ بالحق في تعديل أو إيقاف الخدمة في أي وقت بعد إشعار مسبق.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. التطبيق الحكومي</h2>
              <p className="text-muted-foreground leading-relaxed">
                تخضع هذه الشروط لقوانين المملكة العربية السعودية والقضاء الحصري للمحاكم السعودية.
              </p>
            </section>

            <section className="bg-accent/5 p-6 rounded-lg border border-accent/20">
              <p className="text-sm text-muted-foreground">آخر تحديث: نوفمبر 2025. قد تتغير الشروط دون إشعار مسبق.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

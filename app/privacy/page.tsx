import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Privacy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">سياسة الخصوصية</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. مقدمة</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحن في شركة اتصالات نتعهد بحماية خصوصيتك وبياناتك الشخصية. تشرح هذه السياسة كيفية جمع واستخدام ومعالجة
                بيانات المستخدمين وفقاً لأحدث المعايير الدولية والقوانين المحلية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. البيانات المجمعة</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>نجمع البيانات التالية بموافقتك الصريحة:</p>
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>المعلومات الشخصية (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
                  <li>بيانات الاتصال والرسائل (مع موافقتك)</li>
                  <li>معلومات الجهاز (نوع المتصفح، نظام التشغيل)</li>
                  <li>عنوان IP والموقع الجغرافي العام</li>
                  <li>سجلات الأنشطة والاستخدام</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. استخدام البيانات</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>نستخدم بيانتك الشخصية للأغراض التالية فقط:</p>
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>تقديم الخدمات المطلوبة</li>
                  <li>تحسين جودة خدماتنا</li>
                  <li>الامتثال للالتزامات القانونية</li>
                  <li>الاتصال معك بشأن تحديثات الخدمة</li>
                  <li>منع الاحتيال والأنشطة غير القانونية</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. حماية البيانات</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>ننفذ تدابير أمنية متقدمة:</p>
                <ul className="list-disc list-inside space-y-2 ar">
                  <li>تشفير SSL/TLS لجميع الاتصالات</li>
                  <li>تشفير البيانات في قاعدة البيانات</li>
                  <li>فحوصات أمنية دورية</li>
                  <li>حماية من القوة الغاشمة وهجمات الحقن</li>
                  <li>مراقبة مستمرة للتهديدات الأمنية</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. مشاركة البيانات</h2>
              <p className="text-muted-foreground leading-relaxed">
                لن نشارك بياناتك الشخصية مع أطراف ثالثة دون موافقتك الصريحة، باستثناء:
              </p>
              <ul className="list-disc list-inside space-y-2 ar text-muted-foreground mt-2">
                <li>الامتثال للقوانين والأوامر القضائية</li>
                <li>موردو الخدمات الموثوقون الذين يعملون بموجب عقود</li>
                <li>في حالة الاستحواذ أو الدمج (مع إشعار مسبق)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. حقوق المستخدم</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">لديك الحق في:</p>
              <ul className="list-disc list-inside space-y-2 ar text-muted-foreground">
                <li>الوصول إلى بياناتك الشخصية</li>
                <li>تصحيح المعلومات غير الدقيقة</li>
                <li>حذف بياناتك (الحق في النسيان)</li>
                <li>نقل البيانات</li>
                <li>سحب الموافقة في أي وقت</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. التحكم في الكوكيز</h2>
              <p className="text-muted-foreground leading-relaxed">
                نستخدم الكوكيز لتحسين تجربتك. يمكنك التحكم في إعدادات الكوكيز من خلال إعدادات المتصفح الخاص بك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. المدة الزمنية لحفظ البيانات</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحتفظ ببيانتك طالما لزم الأمر لتقديم الخدمات أو الامتثال للالتزامات القانونية. ستُحذف البيانات غير
                الضرورية بأمان.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. الامتثال الدولي</h2>
              <p className="text-muted-foreground leading-relaxed">
                نمتثل لـ GDPR و ISO 27001 والقوانين المحلية السعودية والخليجية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. الاتصال بنا</h2>
              <p className="text-muted-foreground leading-relaxed">لأي أسئلة حول خصوصيتك، يرجى التواصل معنا على:</p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-muted-foreground">البريد: privacy@communications.com</p>
                <p className="text-muted-foreground">الهاتف: +966-9-2000-0000</p>
              </div>
            </section>

            <section className="bg-accent/5 p-6 rounded-lg border border-accent/20">
              <p className="text-sm text-muted-foreground">
                آخر تحديث: نوفمبر 2025. سياسة الخصوصية قابلة للتحديث في أي وقت مع إشعار مسبق.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

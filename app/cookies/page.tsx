import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Cookies() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">سياسة الكوكيز</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. ما هي الكوكيز</h2>
              <p className="text-muted-foreground leading-relaxed">
                الكوكيز هي ملفات صغيرة يتم تخزينها على جهازك عند زيارة الموقع. تساعدنا في تحسين الخدمة وتخصيص تجربتك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. أنواع الكوكيز المستخدمة</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold mb-2">كوكيز ضرورية</h3>
                  <p>مطلوبة لتشغيل الموقع بشكل صحيح (المصادقة، الأمان)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">كوكيز الأداء</h3>
                  <p>تساعدنا في فهم كيفية استخدام الموقع</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">كوكيز الوظيفة</h3>
                  <p>تتذكر تفضيلاتك</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">كوكيز الإعلانات</h3>
                  <p>لتقديم إعلانات ملائمة (يتم حذفها بموافقتك)</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. التحكم في الكوكيز</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">يمكنك التحكم في الكوكيز من خلال:</p>
              <ul className="list-disc list-inside space-y-2 ar text-muted-foreground">
                <li>إعدادات المتصفح الخاص بك</li>
                <li>أداة إدارة الكوكيز على الموقع</li>
                <li>رفض جميع الكوكيز (قد يؤثر على الخدمة)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. الكوكيز من جهات خارجية</h2>
              <p className="text-muted-foreground leading-relaxed">
                قد نستخدم خدمات تحليلات وإعلانات خارجية قد تضع كوكيز. هذه تخضع لسياساتهم الخاصة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. الموافقة</h2>
              <p className="text-muted-foreground leading-relaxed">
                سنطلب موافقتك على الكوكيز غير الضرورية عند زيارتك الأولى للموقع.
              </p>
            </section>

            <section className="bg-accent/5 p-6 rounded-lg border border-accent/20">
              <p className="text-sm text-muted-foreground">آخر تحديث: نوفمبر 2025</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

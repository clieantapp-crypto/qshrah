import { Shield, Lock, CheckCircle, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "حماية البيانات",
    description: "تشفير من الدرجة الأولى لجميع البيانات الشخصية والعسكرية",
  },
  {
    icon: Lock,
    title: "أمان متعدد المستويات",
    description: "فحوصات أمنية مستمرة وحماية من التهديدات السيبرانية",
  },
  {
    icon: CheckCircle,
    title: "امتثال عالمي",
    description: "يتوافق مع GDPR والمعايير الدولية للخصوصية والأمان",
  },
  {
    icon: Award,
    title: "شهادات معتمدة",
    description: "معتمدة من الهيئات الحكومية والمنظمات الدولية",
  },
]

export default function Features() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">معايرنا الأمنية</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-primary transition">
                <div className="p-3 bg-accent/10 rounded-lg mb-4 w-fit">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

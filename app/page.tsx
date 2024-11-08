import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, Package, Settings } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      title: "Member Management",
      description: "Efficiently manage cooperative members and their accounts",
      icon: Users,
      href: "/members"
    },
    {
      title: "Billing",
      description: "Handle invoicing and payment processing",
      icon: FileText,
      href: "/billing"
    },
    {
      title: "Inventory",
      description: "Track equipment and supplies",
      icon: Package,
      href: "/inventory"
    },
    {
      title: "Administration",
      description: "System settings and user management",
      icon: Settings,
      href: "/admin"
    }
  ]

  return (
    <div className="container py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Water Cooperative Management System</h1>
        <p className="text-lg text-muted-foreground">Streamline your water cooperative operations with our comprehensive management solution.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-2">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={feature.href}>Access {feature.title}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
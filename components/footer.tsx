import Link from "next/link"
import { Leaf, Github, Linkedin, Mail } from "lucide-react"

const quickLinks = [
  { href: "/industrialization", label: "Industrialization" },
  { href: "/climate-change", label: "Climate Change" },
  { href: "/challenges", label: "Challenges" },
  { href: "/solutions", label: "Solutions" },
]

const resourceLinks = [
  { href: "/future", label: "Future Outlook" },
  { href: "/statistics", label: "Statistics" },
  { href: "/references", label: "References" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Leaf className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
              </div>
              <span className="text-xl font-bold text-gradient">EcoVision India</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An educational platform exploring India&apos;s journey through industrialization, 
              climate change challenges, and sustainable solutions for a greener future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} EcoVision India. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed and Developed{" "}
              <span className="text-primary font-medium">~by Sathvik</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

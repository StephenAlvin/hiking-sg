import { Container } from "@/components/layout/Container";
import { NAV_LINKS, TRAIL_PACKAGES } from "@/lib/constants";
import { Compass, Instagram, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Hike With Me</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Explore Singapore's hidden natural beauty with expert-guided
              hiking experiences.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:stephenalvin0912@gmail.com"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trail Packages */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Trail Packages</h3>
            <ul className="space-y-2">
              {TRAIL_PACKAGES.slice(0, 4).map((trail) => (
                <li key={trail.id}>
                  <a
                    href="#trails"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {trail.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 invisible">Trail Packages</h3>
            <ul className="space-y-2">
              {TRAIL_PACKAGES.slice(4, 8).map((trail) => (
                <li key={trail.id}>
                  <a
                    href="#trails"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {trail.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  T&C
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Hike With Me. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

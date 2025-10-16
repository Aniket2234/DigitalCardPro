import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import logoUrl from "@assets/logo_1760615598466.png";

export default function DigitalCard() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9619523254, +91 8975623356",
      href: "tel:+919619523254",
      testId: "link-phone"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@airavavatechnologies.com",
      href: "mailto:info@airavavatechnologies.com",
      testId: "link-email"
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.airavavatechnologies.com",
      href: "https://www.airavavatechnologies.com",
      testId: "link-website"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra, INDIA",
      href: "https://maps.google.com/?q=Mumbai,Maharashtra,India",
      testId: "link-location"
    }
  ];

  const services = [
    "Website Development",
    "Mobile App Development",
    "Software Development",
    "AI & Automation",
    "Digital Marketing"
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: SiFacebook,
      href: "#",
      color: "text-[#1877F2]",
      testId: "link-facebook"
    },
    {
      name: "Instagram",
      icon: SiInstagram,
      href: "#",
      color: "text-[#E4405F]",
      testId: "link-instagram"
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      href: "#",
      color: "text-[#0A66C2]",
      testId: "link-linkedin"
    },
    {
      name: "X",
      icon: SiX,
      href: "#",
      color: "text-foreground",
      testId: "link-x"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4 md:p-6">
      <div className="w-full max-w-sm">
        {/* Digital Business Card */}
        <div 
          className="relative bg-card border border-card-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-[1.02]"
          data-testid="card-business"
        >
          {/* Accent Color Strip */}
          <div className="h-2 bg-gradient-to-r from-[#FF3D00] via-[#FFD600] via-[#00C853] to-[#2979FF]" />
          
          <div className="p-8 space-y-6">
            {/* Logo Section */}
            <div className="flex justify-center mb-3">
              <div className="relative">
                <img 
                  src={logoUrl} 
                  alt="Airavata Technologies Logo" 
                  className="h-36 w-auto object-contain"
                  data-testid="img-logo"
                />
              </div>
            </div>

            {/* Company Identity */}
            <div className="text-center space-y-2">
              <h1 
                className="text-3xl font-bold font-heading tracking-tight text-foreground"
                data-testid="text-company-name"
              >
                AIRAVATA TECHNOLOGIES
              </h1>
              <p 
                className="text-xs font-medium tracking-wider text-muted-foreground uppercase"
                data-testid="text-company-type"
              >
                Software Development Company
              </p>
              <p 
                className="text-sm font-medium text-primary italic"
                data-testid="text-tagline"
              >
                We Create, Innovate, Elevate
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Contact Information */}
            <div className="space-y-2">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Website" || item.label === "Location" ? "_blank" : undefined}
                    rel={item.label === "Website" || item.label === "Location" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 group hover-elevate active-elevate-2 rounded-md p-2 -mx-2 transition-all duration-200"
                    data-testid={item.testId}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-foreground font-medium break-words group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Social Media Icons */}
            <div className="space-y-2">
              <div className="flex justify-center gap-4">
                {socialMedia.map((social) => {
                  const Icon = social.icon;
                  return (
                    <div
                      key={social.name}
                      className="opacity-50 cursor-not-allowed"
                      aria-label={`${social.name} - Coming Soon`}
                      data-testid={social.testId}
                    >
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${social.color}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-center text-muted-foreground italic">
                Connect with us on social media (links coming soon)
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Services Section */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-5 space-y-3 border border-primary/20">
              <h2 
                className="text-lg font-bold text-foreground text-center mb-1"
                data-testid="text-services-title"
              >
                Our Services
              </h2>
              <div className="space-y-2.5">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 bg-background/40 rounded-md px-3 py-2 hover-elevate transition-all"
                    data-testid={`text-service-${index}`}
                  >
                    <svg 
                      className="w-5 h-5 text-primary flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-sm font-medium text-foreground">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          Digital Business Card
        </p>
      </div>
    </div>
  );
}

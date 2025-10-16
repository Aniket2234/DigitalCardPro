import { Phone, Mail, Globe, Share2, QrCode, ExternalLink } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiWhatsapp } from "react-icons/si";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import logoUrl from "@assets/logo_1760617115018.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DigitalCard() {
  const [showQR, setShowQR] = useState(false);
  const cardUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Company and Owner Information
  const companyInfo = {
    name: "AIRAVATA TECHNOLOGIES",
    tagline: "We Create, Innovate, Elevate",
    type: "Software Development Company",
    website: "www.airavavatechnologies.com",
    email: "info@airavavatechnologies.com",
    whatsapp: "+91 9619523254",
    mobile: "+91 8975623356",
    location: "Mumbai, Maharashtra, INDIA"
  };

  const ownerInfo = {
    name: "Owner Name",
    role: "Founder & CEO",
    photo: "https://ui-avatars.com/api/?name=Owner+Name&size=200&background=2979FF&color=fff"
  };

  // Portfolio Projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Complete online shopping solution",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure financial management",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Healthcare System",
      description: "Patient management platform",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      link: "#"
    }
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: SiFacebook,
      href: "https://facebook.com",
      color: "text-[#1877F2]",
      testId: "link-facebook"
    },
    {
      name: "Instagram",
      icon: SiInstagram,
      href: "https://instagram.com",
      color: "text-[#E4405F]",
      testId: "link-instagram"
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      href: "https://linkedin.com",
      color: "text-[#0A66C2]",
      testId: "link-linkedin"
    },
    {
      name: "X",
      icon: SiX,
      href: "https://x.com",
      color: "text-foreground",
      testId: "link-x"
    }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: companyInfo.name,
          text: `${companyInfo.tagline} - Digital Business Card`,
          url: cardUrl,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(cardUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Digital Business Card */}
        <div 
          className="bg-card border border-card-border rounded-2xl shadow-2xl overflow-hidden"
          data-testid="card-business"
        >
          {/* Banner/Cover Section */}
          <div className="relative h-64 bg-gradient-to-br from-primary/90 via-primary to-primary/80">
            {/* Logo in Banner */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={logoUrl} 
                alt="Company Logo" 
                className="h-32 w-auto object-contain opacity-90"
                data-testid="img-banner-logo"
              />
            </div>
            
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>

          {/* Owner Profile Photo Overlay */}
          <div className="relative px-6 -mt-20 mb-4">
            <div className="flex items-end gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-card bg-card overflow-hidden shadow-xl">
                  <img 
                    src={ownerInfo.photo} 
                    alt={ownerInfo.name}
                    className="w-full h-full object-cover"
                    data-testid="img-owner-photo"
                  />
                </div>
              </div>
              
              <div className="flex-1 pb-2">
                <h1 
                  className="text-2xl font-bold text-foreground"
                  data-testid="text-owner-name"
                >
                  {ownerInfo.name}
                </h1>
                <p 
                  className="text-sm text-muted-foreground"
                  data-testid="text-owner-role"
                >
                  {ownerInfo.role}
                </p>
              </div>

              {/* Share Buttons */}
              <div className="flex gap-2 pb-2">
                <Button
                  onClick={() => setShowQR(true)}
                  variant="outline"
                  size="sm"
                  data-testid="button-qr-code"
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  QR Code
                </Button>
                <Button
                  onClick={handleShare}
                  variant="default"
                  size="sm"
                  data-testid="button-share"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="px-6 pb-6 space-y-6">
            {/* Company Name & Tagline */}
            <div className="text-center">
              <h2 
                className="text-3xl font-bold text-foreground mb-2"
                data-testid="text-company-name"
              >
                {companyInfo.name}
              </h2>
              <p 
                className="text-sm text-muted-foreground uppercase tracking-wide mb-2"
                data-testid="text-company-type"
              >
                {companyInfo.type}
              </p>
              <p 
                className="text-base text-primary italic font-medium"
                data-testid="text-tagline"
              >
                {companyInfo.tagline}
              </p>
            </div>

            {/* Social Media */}
            <div className="flex justify-center gap-3">
              {socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                    aria-label={social.name}
                    data-testid={social.testId}
                  >
                    <Icon className={`w-5 h-5 ${social.color}`} />
                  </a>
                );
              })}
            </div>

            <div className="border-t border-border" />

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover-elevate active-elevate-2 transition-all group"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">WhatsApp</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {companyInfo.whatsapp}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${companyInfo.mobile.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-lg hover-elevate active-elevate-2 transition-all group"
                data-testid="link-mobile"
              >
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Mobile</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {companyInfo.mobile}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 p-3 rounded-lg hover-elevate active-elevate-2 transition-all group"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors break-all">
                    {companyInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`https://${companyInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover-elevate active-elevate-2 transition-all group"
                data-testid="link-website"
              >
                <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Website</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {companyInfo.website}
                  </p>
                </div>
              </a>
            </div>

            <div className="border-t border-border" />

            {/* Portfolio Section */}
            <div>
              <h3 
                className="text-xl font-bold text-foreground mb-4 text-center"
                data-testid="text-portfolio-title"
              >
                Featured Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg border border-border hover-elevate active-elevate-2 transition-all"
                    data-testid={`card-project-${project.id}`}
                  >
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                        {project.title}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Digital Business Card - Powered by {companyInfo.name}
        </p>
      </div>

      {/* QR Code Dialog */}
      <Dialog open={showQR} onOpenChange={setShowQR}>
        <DialogContent data-testid="dialog-qr-code">
          <DialogHeader>
            <DialogTitle>Scan to Share</DialogTitle>
            <DialogDescription>
              Scan this QR code to share the digital business card
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center p-6">
            <div className="bg-white p-4 rounded-lg">
              <QRCodeSVG 
                value={cardUrl} 
                size={200}
                level="H"
                data-testid="qr-code-image"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

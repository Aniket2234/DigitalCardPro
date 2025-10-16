import { Phone, Mail, Globe, Share2, QrCode, ExternalLink } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiWhatsapp } from "react-icons/si";
import { QRCodeSVG } from "qrcode.react";
import { useState, useRef } from "react";
import logoUrl from "@assets/AIRAVATA TECHNOLOGIES LOGO_1760623809706.png";
import bannerImage from "@assets/stock_images/modern_technology_ab_1ab0a508.jpg";
import ownerPhoto from "@assets/stock_images/professional_busines_a226ab8a.jpg";
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
  const [isFlipped, setIsFlipped] = useState(false);
  const cardUrl = typeof window !== 'undefined' ? window.location.href : '';
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const companyInfo = {
    name: "AIRAVATA TECHNOLOGIES",
    tagline: "We Create, Innovate, Elevate",
    type: "Software Development Company",
    website: "www.airavatatechnologies.com",
    email: "info@airavatatechnologies.com",
    mobile: "+91 8975623356",
    location: "Mumbai, Maharashtra, INDIA"
  };

  const ownerInfo = {
    name: "Owner Name",
    role: "Founder & CEO",
    photo: ownerPhoto
  };

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

  const companies = [
    {
      id: 1,
      name: "Tech Corp",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Innovation Labs",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Digital Solutions",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Cloud Systems",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop"
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
      color: "text-[#E1306C]",
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
    },
    {
      name: "WhatsApp",
      icon: SiWhatsapp,
      href: "https://wa.me/919619523254",
      color: "text-[#25D366]",
      testId: "link-whatsapp-social"
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
      navigator.clipboard.writeText(cardUrl);
      alert('Link copied to clipboard!');
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches[0]) {
      touchEndX.current = e.changedTouches[0].clientX;
    }
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && !isFlipped) {
        setIsFlipped(true);
      } else if (swipeDistance < 0 && isFlipped) {
        setIsFlipped(false);
      }
    }
    
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (touchStartX.current !== 0) {
      touchEndX.current = e.clientX;
    }
  };

  const handlePointerUp = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && !isFlipped) {
        setIsFlipped(true);
      } else if (swipeDistance < 0 && isFlipped) {
        setIsFlipped(false);
      }
    }
    
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative" style={{ perspective: "1000px" }}>
          <div
            className={`relative transition-transform duration-700 transform-gpu`}
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* Front of Card */}
            <div
              className="bg-card border border-card-border rounded-2xl shadow-2xl overflow-hidden"
              style={{ backfaceVisibility: "hidden" }}
              data-testid="card-business"
            >
              {/* Banner/Cover Section */}
              <div className="relative h-48 sm:h-56 md:h-64 bg-white">
                {/* Logo - no tint or effects */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img 
                    src={logoUrl} 
                    alt="Company Logo" 
                    className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    data-testid="img-banner-logo"
                  />
                </div>

                {/* Action Buttons - Top Right */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    onClick={() => setShowQR(true)}
                    size="sm"
                    className="bg-black hover:bg-black/80 text-white border-0"
                    data-testid="button-qr-code"
                    aria-label="Show QR Code"
                  >
                    <QrCode className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:inline">QR</span>
                  </Button>
                  <Button
                    onClick={handleShare}
                    size="sm"
                    className="bg-black hover:bg-black/80 text-white border-0"
                    data-testid="button-share"
                    aria-label="Share Card"
                  >
                    <Share2 className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:inline">Share</span>
                  </Button>
                </div>
              </div>

              {/* Owner Profile Photo */}
              <div className="relative px-4 sm:px-6 -mt-12 sm:-mt-16 md:-mt-20 mb-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-card bg-card overflow-hidden shadow-xl">
                      <img 
                        src={ownerInfo.photo} 
                        alt={ownerInfo.name}
                        className="w-full h-full object-cover"
                        data-testid="img-owner-photo"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left pb-0 sm:pb-2">
                    <h1 
                      className="text-xl sm:text-2xl font-bold text-foreground"
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
                </div>
              </div>

              {/* Company Information */}
              <div className="px-4 sm:px-6 pb-6 space-y-6">
                {/* Company Name & Tagline */}
                <div className="text-center">
                  <h2 
                    className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
                    data-testid="text-company-name"
                  >
                    {companyInfo.name}
                  </h2>
                  <p 
                    className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide mb-2"
                    data-testid="text-company-type"
                  >
                    {companyInfo.type}
                  </p>
                  <p 
                    className="text-sm sm:text-base text-primary italic font-medium"
                    data-testid="text-tagline"
                  >
                    {companyInfo.tagline}
                  </p>
                </div>

                {/* Social Media - No circles, original colors */}
                <div className="flex justify-center gap-6">
                  {socialMedia.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                        aria-label={social.name}
                        data-testid={social.testId}
                      >
                        <Icon className={`w-7 h-7 ${social.color}`} />
                      </a>
                    );
                  })}
                </div>

                <div className="border-t border-border" />

                {/* Contact Details - No WhatsApp */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href={`tel:${companyInfo.mobile.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all group"
                    data-testid="link-mobile"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Mobile</p>
                      <p className="text-sm font-medium text-foreground">
                        {companyInfo.mobile}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all group"
                    data-testid="link-email"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                      <p className="text-sm font-medium text-foreground break-all">
                        {companyInfo.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`https://${companyInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all group"
                    data-testid="link-website"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Website</p>
                      <p className="text-sm font-medium text-foreground">
                        {companyInfo.website}
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-t border-border" />

                {/* Flip Card Button */}
                <div className="text-center">
                  <Button
                    onClick={() => setIsFlipped(!isFlipped)}
                    variant="outline"
                    className="w-full max-w-xs"
                    data-testid="button-flip-card"
                  >
                    View Projects & Companies
                  </Button>
                </div>
              </div>
            </div>

            {/* Back of Card */}
            <div
              className="absolute inset-0 bg-card border border-card-border rounded-2xl shadow-2xl overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              }}
            >
              <div className="h-full overflow-y-auto p-4 sm:p-6">
                {/* Flip Back Button */}
                <div className="mb-6">
                  <Button
                    onClick={() => setIsFlipped(!isFlipped)}
                    variant="outline"
                    size="sm"
                    data-testid="button-flip-back"
                  >
                    ← Back to Card
                  </Button>
                </div>

                {/* Featured Projects */}
                <div className="mb-8">
                  <h3 
                    className="text-lg sm:text-xl font-bold text-foreground mb-4 text-center"
                    data-testid="text-portfolio-title"
                  >
                    Featured Projects
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map((project) => (
                      <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-lg border border-border hover:border-primary hover:shadow-md transition-all"
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

                <div className="border-t border-border my-6" />

                {/* Companies Worked With */}
                <div>
                  <h3 
                    className="text-lg sm:text-xl font-bold text-foreground mb-4 text-center"
                    data-testid="text-companies-title"
                  >
                    Companies Worked With
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {companies.map((company) => (
                      <div
                        key={company.id}
                        className="flex items-center justify-center p-4 rounded-lg border border-border bg-background hover:border-primary hover:shadow-md transition-all"
                        data-testid={`company-${company.id}`}
                      >
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className="w-full h-16 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
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

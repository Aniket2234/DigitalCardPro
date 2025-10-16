import { Phone, Mail, Globe, Share2, QrCode, ExternalLink, ScanLine } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiWhatsapp } from "react-icons/si";
import { QRCodeSVG } from "qrcode.react";
import { useState, useRef } from "react";
import logoUrl from "@assets/AIRAVATA TECHNOLOGIES LOGO_1760623809706.png";
import bannerImage from "@assets/stock_images/modern_technology_ab_1ab0a508.jpg";
import ownerPhoto from "@assets/SAIRAJIMG_1760623990534.jpg";
import googleLogo from "@assets/image_1760628228490.png";
import amazonLogo from "@assets/image_1760628360957.png";
import teslaLogo from "@assets/image_1760628321153.png";
import nvidiaLogo from "@assets/image_1760628385862.png";
import ecommerceProject from "@assets/image_1760629080283.png";
import bankingProject from "@assets/image_1760629106442.png";
import healthcareProject from "@assets/image_1760629142387.png";
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
  const [showScanner, setShowScanner] = useState(false);
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
    name: "Sairaj Koyande",
    role: "Co Founder",
    photo: ownerPhoto
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Complete online shopping solution",
      image: ecommerceProject,
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure financial management",
      image: bankingProject,
      link: "#"
    },
    {
      id: 3,
      title: "Healthcare System",
      description: "Patient management platform",
      image: healthcareProject,
      link: "#"
    }
  ];

  const services = [
    "Website Development",
    "Mobile Application Development",
    "Software Development",
    "AI & Automation",
    "Digital Marketing"
  ];

  const topClients = [
    {
      id: 1,
      name: "Google",
      logo: googleLogo
    },
    {
      id: 2,
      name: "Amazon",
      logo: amazonLogo
    },
    {
      id: 3,
      name: "Tesla",
      logo: teslaLogo
    },
    {
      id: 4,
      name: "Nvidia",
      logo: nvidiaLogo
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
              className="bg-card border-4 border-blue-400 rounded-2xl shadow-2xl overflow-hidden"
              style={{ backfaceVisibility: "hidden" }}
              data-testid="card-business"
            >
              {/* Banner/Cover Section */}
              <div className="relative h-48 sm:h-56 md:h-64 bg-white">
                {/* Logo - no tint or effects - bigger size - positioned higher */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70%]">
                  <img 
                    src={logoUrl} 
                    alt="Company Logo" 
                    className="h-32 sm:h-40 md:h-48 w-auto object-contain"
                    data-testid="img-banner-logo"
                  />
                </div>

                {/* Action Buttons - Top Right - transparent with black icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setShowQR(true)}
                    className="p-2 hover:bg-black/10 rounded-lg transition-colors"
                    data-testid="button-qr-code"
                    aria-label="Show QR Code"
                  >
                    <QrCode className="w-5 h-5 text-black" />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 hover:bg-black/10 rounded-lg transition-colors"
                    data-testid="button-share"
                    aria-label="Share Card"
                  >
                    <Share2 className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>

              {/* Owner Profile Photo - Pure White Background */}
              <div className="relative px-4 sm:px-6 -mt-12 sm:-mt-16 md:-mt-20 bg-white pb-3">
                {/* Horizontal Blue Line crossing through center of profile */}
                <div className="absolute left-0 right-0 top-12 sm:top-14 md:top-16 flex items-center justify-center pointer-events-none z-0">
                  <div className="w-full h-1 bg-blue-400" />
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
                  <div className="relative z-10">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-400 bg-card overflow-hidden shadow-xl">
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
              <div className="px-4 sm:px-6 pb-6 bg-white space-y-6">
                {/* Company Name & Tagline */}
                <div className="text-center">
                  <h2 
                    className="text-2xl sm:text-3xl font-bold text-foreground mb-1"
                    data-testid="text-company-name"
                  >
                    {companyInfo.name}
                  </h2>
                  <p 
                    className="text-sm sm:text-base text-primary italic font-medium mb-1"
                    data-testid="text-tagline"
                  >
                    {companyInfo.tagline}
                  </p>
                  <p 
                    className="text-xs sm:text-sm text-black uppercase tracking-wide"
                    data-testid="text-company-type"
                  >
                    {companyInfo.type}
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

                {/* Contact Details - No WhatsApp */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href={`tel:${companyInfo.mobile.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 p-4 rounded-lg border border-black hover:border-primary hover:shadow-md transition-all group"
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
                    className="flex items-center gap-3 p-4 rounded-lg border border-black hover:border-primary hover:shadow-md transition-all group"
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
                    className="flex items-center gap-3 p-4 rounded-lg border border-black hover:border-primary hover:shadow-md transition-all group"
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

                {/* Flip Card Button */}
                <div className="text-center">
                  <Button
                    onClick={() => setIsFlipped(!isFlipped)}
                    variant="outline"
                    className="w-full max-w-xs border-black"
                    data-testid="button-flip-card"
                  >
                    Flip & View Company Details
                  </Button>
                </div>
              </div>
            </div>

            {/* Back of Card */}
            <div
              className="absolute inset-0 bg-card border-4 border-blue-400 rounded-2xl shadow-2xl overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              }}
            >
              <div className="h-full overflow-y-auto p-4 sm:p-6 bg-white">
                {/* Services Section - Top Priority */}
                <div className="mb-8">
                  <h3 
                    className="text-2xl sm:text-3xl font-extrabold text-blue-500 mb-6 text-center tracking-tight"
                    data-testid="text-services-title"
                  >
                    Our Services
                  </h3>
                  <div className="space-y-3">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                        data-testid={`service-${index}`}
                      >
                        <div className="w-3 h-3 rounded-full bg-blue-400 flex-shrink-0" />
                        <p className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t-2 border-blue-400 my-8" />

                {/* Featured Projects */}
                <div className="mb-8">
                  <h3 
                    className="text-2xl sm:text-3xl font-extrabold text-blue-500 mb-6 text-center tracking-tight"
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

                <div className="border-t-2 border-blue-400 my-8" />

                {/* Top Clients */}
                <div className="mb-8">
                  <h3 
                    className="text-2xl sm:text-3xl font-extrabold text-blue-500 mb-6 text-center tracking-tight"
                    data-testid="text-clients-title"
                  >
                    Top Clients
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                    {topClients.map((client) => (
                      <div
                        key={client.id}
                        className="flex items-center justify-center"
                        data-testid={`client-${client.id}`}
                      >
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="w-full h-16 sm:h-20 object-contain hover:scale-110 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flip Back Button - Bottom */}
                <div className="text-center pt-4 border-t-2 border-blue-400">
                  <Button
                    onClick={() => setIsFlipped(!isFlipped)}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    data-testid="button-flip-back"
                  >
                    ← Back to Card
                  </Button>
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
          <div className="flex flex-col items-center gap-4 p-6">
            <div className="bg-white p-4 rounded-lg">
              <QRCodeSVG 
                value={cardUrl} 
                size={200}
                level="H"
                data-testid="qr-code-image"
              />
            </div>
            <Button
              onClick={() => {
                setShowQR(false);
                setShowScanner(true);
              }}
              variant="outline"
              className="w-full max-w-xs"
              data-testid="button-open-scanner"
            >
              <ScanLine className="w-4 h-4 mr-2" />
              Scan QR Code
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* QR Scanner Dialog */}
      <Dialog open={showScanner} onOpenChange={setShowScanner}>
        <DialogContent data-testid="dialog-qr-scanner">
          <DialogHeader>
            <DialogTitle>Scan QR Code</DialogTitle>
            <DialogDescription>
              Point your camera at a QR code to scan
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 p-6">
            <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <ScanLine className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  QR Scanner would be activated here
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Use your device's camera to scan
                </p>
              </div>
            </div>
            <Button
              onClick={() => setShowScanner(false)}
              variant="outline"
              className="w-full"
              data-testid="button-close-scanner"
            >
              Close Scanner
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

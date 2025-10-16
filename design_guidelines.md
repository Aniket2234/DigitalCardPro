# Digital Business Card Design Guidelines - Airavata Technologies

## Design Approach
**Selected Approach:** Modern Digital Business Card - ID Card Format  
Inspired by professional digital identity cards with a vertical orientation, combining the credibility of traditional business cards with interactive digital elements.

## Core Design Principles
1. **Professional Minimalism:** Clean, uncluttered layout that prioritizes information hierarchy
2. **Brand Identity First:** Logo and brand colors drive the visual language
3. **Interaction Ready:** Designed for click-to-contact functionality
4. **Mobile-Optimized:** Vertical format naturally suited for mobile sharing

## Color Palette

### Brand Colors (from logo)
- **Primary Red:** 0 85% 50% (energy, innovation)
- **Primary Blue:** 220 90% 55% (trust, technology)
- **Accent Yellow:** 45 100% 55% (creativity)
- **Accent Green:** 145 70% 45% (growth)

### Supporting Colors
- **Dark Mode Background:** 222 25% 12%
- **Card Background:** 0 0% 100% (light) / 222 20% 18% (dark)
- **Text Primary:** 222 25% 15% (light) / 0 0% 95% (dark)
- **Text Secondary:** 222 15% 45% (light) / 0 0% 65% (dark)
- **Border/Divider:** 222 15% 85% (light) / 222 20% 25% (dark)

## Typography

### Font Families
- **Primary:** 'Inter', system-ui, sans-serif (modern, readable)
- **Accent:** 'Poppins', sans-serif (for company name - bold, professional)

### Type Scale
- **Company Name:** text-2xl md:text-3xl, font-bold, tracking-tight
- **Tagline:** text-sm md:text-base, font-medium, tracking-wide
- **Contact Labels:** text-xs, font-medium, uppercase, tracking-wider
- **Contact Info:** text-sm md:text-base, font-normal
- **Services Title:** text-lg, font-semibold
- **Service Items:** text-sm, font-medium

## Layout System

### Card Dimensions
- **Width:** max-w-sm (384px) - optimal for mobile sharing and desktop viewing
- **Aspect Ratio:** Vertical ID card format (~2:3 ratio)
- **Padding:** p-6 md:p-8 (consistent internal spacing)
- **Border Radius:** rounded-2xl (modern, friendly)

### Spacing Units
Primary spacing rhythm: 2, 4, 6, 8 units
- **Logo to Name:** space-y-4
- **Name to Tagline:** space-y-2
- **Section Dividers:** my-6
- **Contact Items:** space-y-3
- **Social Icons:** gap-3
- **Service Items:** space-y-2

### Content Structure (Top to Bottom)
1. **Logo Section** - Centered, mb-4
2. **Company Identity** - Name + Tagline, text-center, mb-6
3. **Divider** - Subtle border separator
4. **Contact Information** - Left-aligned, icon + text pairs, space-y-3
5. **Divider** - Subtle border separator
6. **Social Media Row** - Centered, colored icons with hover effects, my-6
7. **Services Section** - Title + list, bg-subtle, rounded-lg, p-4

## Component Specifications

### Logo Display
- Size: h-16 md:h-20 (responsive scaling)
- Container: flex justify-center
- Style: Clean presentation without additional effects

### Contact Information
- **Icon-Text Pairs:** Each contact item has an icon (Heroicons) + label + value
- **Clickable Elements:** Phone (tel:), Email (mailto:), Website (https://), Location (maps link)
- **Hover State:** text-blue-600 dark:text-blue-400 transition
- **Icons:** outline style, w-4 h-4, text-gray-500

### Social Media Icons
- **Platform Colors:** Use authentic brand colors for each platform
  - Facebook: 221 100% 50%
  - Instagram: Linear gradient (315deg from 340 100% 55% to 25 100% 55%)
  - LinkedIn: 201 100% 35%
  - Twitter/X: 0 0% 0%
- **Size:** w-8 h-8 md:w-10 md:h-10
- **Interactive:** scale-110 hover transform with transition-transform duration-200
- **Background:** Circular bg with brand color fill

### Services Display
- **Container:** Light background (bg-gray-50 dark:bg-gray-800/50), rounded-lg, p-4
- **Title:** "Our Services" - font-semibold, mb-3, text-gray-900 dark:text-white
- **List Items:** Each service with check icon (Heroicons check-circle), gap-2
- **Services:**
  1. Website Development
  2. Mobile App Development
  3. Software Development
  4. AI & Automation
  5. Digital Marketing

## Visual Enhancements

### Card Shadow & Depth
- **Light Mode:** shadow-xl with subtle shadow-blue-100/50
- **Dark Mode:** shadow-2xl with ring-1 ring-white/10
- **Hover Effect:** scale-[1.02] transform transition-all duration-300

### Dividers
- **Style:** border-t border-gray-200 dark:border-gray-700
- **Spacing:** my-6
- **Purpose:** Separate major content sections

### Color Accent Strip (Optional Creative Touch)
- Thin gradient bar at card top using brand colors: bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500
- Height: h-1.5 rounded-t-2xl

## Interaction Patterns

### Click-to-Contact
- Phone numbers: Direct dial links
- Email: Opens email client with pre-filled address
- Website: Opens in new tab
- Location: Opens Google Maps

### Icon Hover States
- Social icons: Scale + slight shadow increase
- Contact icons: Color shift to brand blue
- All transitions: 200ms ease-in-out

## Accessibility
- **Color Contrast:** All text meets WCAG AA standards
- **Focus States:** Visible focus rings on all interactive elements
- **Semantic HTML:** Proper heading hierarchy and landmark regions
- **Icon Labels:** aria-labels for all icon-only buttons

## Technical Implementation Notes
- **Icons Library:** Heroicons (outline variant) via CDN
- **Responsive:** Mobile-first approach with md: breakpoint adjustments
- **Dark Mode:** Consistent implementation across all elements
- **Export Ready:** Design works as standalone card or within larger applications
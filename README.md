# DOMIO — Global Luxury Real Estate

A premium, modern web application showcasing luxury residential properties worldwide. This project demonstrates advanced frontend development capabilities including responsive design, smooth animations, dynamic content rendering, and an elegant user interface.

## Features

### Core Functionality
- **Property Listings** — Browse 2,400+ active listings across 47 countries with real-time filtering
- **Destination Explorer** — Discover world-class locations with property counts and regional information
- **Advanced Search** — Filter properties by location, type, price range, and bedroom count
- **Team Directory** — Meet global real estate advisors with regional expertise
- **Newsletter Signup** — Subscribe to curated listings and market intelligence

### Design & UX
- **Luxury Aesthetic** — Premium dark theme with gold accents and elegant typography
- **Custom Cursor** — Sophisticated animated cursor system for enhanced interactivity
- **Smooth Animations** — Reveal animations and scroll-based transitions throughout
- **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- **Live Ticker** — Real-time property listings display with locations and prices

### Performance
- **Optimized Images** — Full-width background images with proper aspect ratios and object-fit
- **Dynamic Rendering** — JavaScript-based content rendering for fast page loads
- **Smooth Scrolling** — Native smooth scroll behavior with intersection observers

## Technology Stack

- **HTML5** — Semantic markup structure
- **CSS3** — Custom styling with CSS variables, flexbox, and grid layouts
- **JavaScript (ES6+)** — Dynamic content rendering and interactivity
- **Fonts** — Cormorant Garamond (serif) and DM Sans (sans-serif)

## Project Structure

```
DOMIO/
├── domio.html          # Main landing page
├── main.js             # Core JavaScript logic and rendering
├── data.js             # Property, destination, and team data
├── style.css           # Custom global styles and themes
├── js/
│   ├── cursor.js       # Custom cursor implementation
│   └── navbar.js       # Navigation functionality
├── assets/
│   ├── property-images/  # Property photography
│   ├── destination-images/  # Location imagery
│   ├── team-images/    # Team member portraits
│   └── images/         # General assets (hero, interior, exterior)
└── README.md           # This file
```

## Key Sections

### Hero Section
Eye-catching full-viewport hero with stunning aerial photography and compelling headline.

### Featured Properties
Curated selection of ultra-prime residential properties with real-time filtering by type (Villa, Penthouse, Chalet, Estate).

### Destinations
Showcase of premium global locations with property counts and rich imagery.

### Why DOMIO
Value proposition highlighting:
- Global Network, Local Mastery
- Discreet by Design
- End-to-End Advisory
- Curated, Never Compromised

### Testimonials
Client success stories from international buyers and investors.

### Team
Global advisor profiles with specializations and market expertise.

### Newsletter
Email subscription for curated listings and market updates.

## Getting Started

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/domio.git
   cd DOMIO
   ```

2. **Open in Browser**
   ```bash
   # Simply open domio.html in your browser
   # Or use a local server for best results
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **No Build required** — This is a vanilla HTML/CSS/JS project with no dependencies to install

## Customization

### Update Property Data
Edit `data.js` to add or modify properties, destinations, testimonials, and team members:

```javascript
{
    name: "Villa Name",
    loc: "Location",
    type: "villa",
    beds: 6,
    baths: 7,
    sqft: "8,400",
    price: "€22,500,000",
    img: "Image name",
}
```

### Modify Colors & Theme
Update CSS variables in `style.css`:

```css
:root {
  --gold: #c9a84c;
  --dark: #090907;
  --panel: #111110;
  /* ... more variables */
}
```

### Add Images
- Place property images in `assets/property-images/`
- Place destination images in `assets/destination-images/`
- Place team photos in `assets/team-images/`
- Update data.js image references accordingly

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

- ✓ Full viewport experience loading seamlessly
- ✓ Dynamic rendering of 9+ properties without page reload
- ✓ Smooth animations and transitions at 60fps
- ✓ Optimized image loading with object-fit
- ✓ Accessible navigation and interactive elements

## Future Enhancements

- Backend integration for dynamic property data
- User authentication and saved listings
- Advanced filtering with price ranges and custom criteria
- Image gallery with lightbox
- Map integration with property locations
- Booking/inquiry functionality
- Admin dashboard for content management

## Showcase Highlights

This project demonstrates mastery in:
- ✨ UI/UX Design — Premium aesthetic with attention to detail
- 🎨 CSS Mastery — Complex layouts, animations, and responsive design
- 📱 Responsive Development — Seamless experience across all devices
- 🚀 JavaScript — Dynamic rendering, event handling, and interactivity
- 📊 Data Architecture — Structured data management and templating
- ♿ User Experience — Smooth interactions and intuitive navigation

## License

This is a portfolio project. All rights reserved.

---

**Created as a demonstration of frontend development capabilities.**

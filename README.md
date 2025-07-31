# Anish Portfolio - React.js Personal Portfolio

A modern, responsive, and dynamic personal portfolio website built with React.js, featuring smooth animations, interactive components, and a professional design.

## 🚀 Features

### ✨ Modern Design
- Clean and professional UI with gradient backgrounds
- Smooth animations using Framer Motion
- Responsive design that works on all devices
- Custom scrollbar and hover effects

### 📱 Fully Responsive
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly navigation
- Adaptive layouts for all screen sizes

### 🎯 Sections Included
1. **Home** - Welcome message with professional introduction
2. **About** - Personal details, bio, and contact information
3. **Academics** - Educational timeline with achievements
4. **Projects** - Dynamic project showcase with filtering
5. **Skills** - Animated progress bars for technical skills
6. **Contact** - Interactive contact form with validation

### 🛠 Technical Features
- **React Hooks** for state management
- **Framer Motion** for smooth animations
- **React Icons** for beautiful icons
- **CSS Grid & Flexbox** for layouts
- **Form validation** with error handling
- **Smooth scrolling** navigation
- **Data-driven** content management

## 🎨 Design Highlights

- **Color Scheme**: Modern purple gradient theme (#4F46E5 to #7C3AED)
- **Typography**: Poppins font family for clean readability
- **Animations**: Staggered animations and hover effects
- **Cards**: Glassmorphism design with subtle shadows
- **Progress Bars**: Animated skill indicators with shimmer effects

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd anish-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🗂 Project Structure

```
anish-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Home.js & Home.css
│   │   ├── About.js & About.css
│   │   ├── Academics.js & Academics.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Skills.js & Skills.css
│   │   └── Contact.js & Contact.css
│   ├── data/
│   │   └── profile.js
│   ├── App.js & App.css
│   ├── index.js & index.css
│   └── ...
├── package.json
└── README.md
```

## ⚙️ Customization

### Personal Information
Edit `src/data/profile.js` to update:
- Personal details (name, email, phone, location)
- Bio and professional description
- Academic background
- Projects and their details
- Skills and proficiency levels

### Styling
- Modify CSS files in each component for design changes
- Update color scheme in CSS variables
- Adjust animations in component files

### Content
- Replace placeholder images with your own
- Update project links and descriptions
- Modify contact information
- Add or remove sections as needed

## 🎯 Key Components

### Navigation
- Fixed header with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting

### Home Section
- Hero section with gradient background
- Animated text and buttons
- Social media links
- Professional image display

### Projects Section
- Filterable project grid
- Hover effects with overlay
- Technology tags
- GitHub and demo links

### Skills Section
- Categorized skill display
- Animated progress bars
- Visual skill indicators
- Summary statistics

### Contact Form
- Form validation
- Success/error states
- Responsive design
- Accessibility features

## 🌟 Technologies Used

- **React.js** - Frontend framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling and animations
- **HTML5** - Semantic markup
- **JavaScript ES6+** - Modern JavaScript features

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with one click

### GitHub Pages
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json
4. Run `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact:
- Email: anish@example.com
- GitHub: [@anish](https://github.com/anish)

---

**Built with ❤️ using React.js** 
# Entretenimiento Barato Podcast - React Web App

A modern single-page application built with React to showcase the Entretenimiento Barato podcast. The site combines responsive layouts, soft animations, and accessible components to deliver a polished listening experience.

## Features
- Contemporary UI with glassmorphism accents and smooth transitions
- Fully responsive design that adapts to phones, tablets, and desktops
- Optimized performance through reusable stateless components
- Accessibility-conscious markup and keyboard-friendly navigation
- Configurable sections for episodes, team bios, and social channels
- Ready-to-use deployment scripts for common hosting providers

## Tech Stack
- **React 18.2.0** for component-driven UI development
- **React DOM** for rendering in the browser
- **CSS3** modules for gradients, animations, and layout
- **JavaScript ES6+** language features across the codebase

## Project Structure
```
react-web-app/
|-- public/
|   |-- index.html        # Base HTML template
|   \-- manifest.json     # PWA configuration
|-- src/
|   |-- components/       # Reusable React components
|   |   |-- Header.js     # Main navigation bar
|   |   |-- Hero.js       # Landing hero section
|   |   |-- Features.js   # Feature highlight grid
|   |   |-- Footer.js     # Footer with contact links
|   |   \-- ScrollToTop.js# Floating scroll helper
|   |-- styles/           # Component and global stylesheets
|   |   |-- index.css     # Global CSS variables and resets
|   |   \-- App.css       # App-level styling
|   |-- App.js            # Root component
|   \-- index.js          # Application entry point
|-- package.json          # Project configuration and scripts
\-- README.md             # Project documentation
```

## Getting Started

### Prerequisites
- Node.js 14 or newer
- npm (comes with Node.js) or Yarn

### Installation
1. Clone the repository and move into the project folder:
   ```bash
   git clone https://github.com/medicensolla/entretenimiento-barato-podcast.git
   cd entretenimiento-barato-podcast/react-web-app
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the site in your browser at `http://localhost:3000`.

### Available Scripts
- `npm start` - Runs the app in development mode with hot reloading
- `npm run build` - Creates an optimized production build in `build/`
- `npm test` - Launches the test runner in interactive watch mode
- `npm run eject` - Exposes the underlying Create React App configuration

## Key Components
- **Header**: Sticky navigation bar with mobile hamburger menu and smooth scrolling
- **Hero**: Primary hero banner with animated call-to-action buttons and floating cards
- **Features**: Responsive grid that highlights show benefits using expressive iconography
- **Podcast**: Section dedicated to the latest episodes and streaming platforms
- **Footer**: Contact details, social links, and brand gradients for a strong finish
- **ScrollToTop**: Floating action button that appears after scrolling to jump back to the top

## Responsive Design Targets
- **Desktop**: 1200px and wider
- **Tablet**: 768px to 1199px
- **Mobile**: 320px to 767px

## Theming and Customization
- Update global colors in `src/styles/index.css` by editing the CSS variables under `:root`
- Add new sections by creating components in `src/components/` and importing them into `App.js`
- Replace images or audio assets inside the `public/` directory to match branding
- Modify links directly within component files to reflect live podcast destinations

## Production Build
Generate an optimized bundle before deploying:
```bash
npm run build
```
The compiled assets will be output to the `build/` folder, ready for hosting on any static server.

## Deployment Options
- **Netlify**: Connect the GitHub repository, set the build command to `npm run build`, and publish the `build` directory.
- **Vercel**: Import the project; Vercel auto-detects React settings and deploys on push.
- **GitHub Pages**: Install `gh-pages`, run `npm run build`, and publish with `npx gh-pages -d build`.

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m "Add amazing feature"`
4. Push the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request describing your updates

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Author
Crafted with care using React for the Entretenimiento Barato podcast team.

---
Enjoy building with React!

# Mindful Touch Website

Official website for [Mindful Touch](https://github.com/maniatisni/mindful-touch) - A gentle awareness tool for mindful hand movement tracking.

## 🌟 Features

- **Modern Design**: Clean, responsive design built with Tailwind CSS
- **GitHub Integration**: Automatically fetches and displays latest releases
- **Download Modal**: Smart platform detection and download options
- **Privacy-First**: Emphasizes the privacy-focused nature of the desktop app
- **Open Source**: Encourages community contributions

## 🚀 Development

This website is built with vanilla HTML, CSS (Tailwind), and JavaScript. It automatically deploys to GitHub Pages when changes are pushed to the main branch.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/maniatisni/mindful-touch-website.git
   cd mindful-touch-website
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Visit `http://localhost:8000` to view the website

### Configuration

To use this website for your own project:

1. Update the `GITHUB_REPO` variable in `script.js` with your repository name
2. Replace GitHub links throughout the HTML with your repository URL
3. Customize the content to match your project

## 📦 Deployment

The website automatically deploys to GitHub Pages using GitHub Actions. The workflow:

1. Triggers on pushes to the `main` branch
2. Builds the site using Jekyll
3. Deploys to GitHub Pages

### Setting up GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Set source to "GitHub Actions"
4. The site will be available at `https://maniatisni.github.io/mindful-touch-website`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Areas for Contribution

- **Design**: Improve UI/UX, add animations, enhance mobile experience
- **Features**: Add new functionality, improve GitHub integration
- **Documentation**: Improve documentation, add examples
- **Performance**: Optimize loading times, improve accessibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Mindful Touch Desktop App](https://github.com/maniatisni/mindful-touch)
- [Website](https://maniatisni.github.io/mindful-touch-website)
- [Issues](https://github.com/maniatisni/mindful-touch-website/issues)
- [Contributing Guide](CONTRIBUTING.md)

---

Built with ❤️ for mindful living
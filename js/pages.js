// Page templates and configurations
const pages = {
  home: {
    template: `
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="@container">
            <div class="@[480px]:p-4">
              <div class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4" id="hero-section">
                <div class="flex flex-col gap-2 text-center">
                  <h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    ${config.heroTitle}
                  </h1>
                  <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    ${config.heroSubtitle}
                  </h2>
                </div>
                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]" id="hero-download-btn">
                  <span class="truncate">Download Latest Release</span>
                </button>
              </div>
            </div>
          </div>
          <h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5" id="features-heading">Features</h2>
          <div class="flex flex-col gap-10 px-4 py-10 @container">
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-4">
                <h1 class="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  ${config.featuresTitle}
                </h1>
                <p class="text-base font-normal leading-normal max-w-[720px]">
                  ${config.featuresDescription}
                </p>
              </div>
              <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] w-fit" id="learn-more-btn">
                <span class="truncate">Learn More</span>
              </button>
            </div>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0" id="features-grid">
              ${config.features.map(feature => Components.featureCard(feature)).join('')}
            </div>
          </div>
          <h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5" id="privacy-heading">Privacy</h2>
          <p class="text-base font-normal leading-normal pb-3 pt-1 px-4" id="privacy-content">
            ${config.privacyContent}
          </p>
        </div>
      </div>
    `,
    init: function() {
      // Apply styling and setup event listeners
      applyColors();
      applyBackgroundImages();
      updateLinks();
    }
  },

  downloads: {
    template: `
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="flex flex-col gap-6 px-4 py-10">
            <div class="flex flex-col gap-4">
              <h1 class="text-4xl font-black leading-tight tracking-[-0.033em]">Downloads</h1>
              <p class="text-base font-normal leading-normal">Get the latest version of Mindful Touch for your platform.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-4 p-6 border rounded-lg download-card">
                <div class="flex items-center gap-3">
                  <div class="download-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L120,156.69V32a8,8,0,0,1,16,0V156.69l66.34-66.35a8,8,0,0,1,11.32,11.32ZM216,184v32a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H200V184a8,8,0,0,1,16,0Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold">Desktop App</h3>
                    <p class="text-sm text-gray-600">Cross-platform</p>
                  </div>
                </div>
                <p class="text-sm">Native desktop application built with Tauri. Currently production-ready for macOS, with Windows and Linux support coming soon.</p>
                <button class="download-btn flex items-center justify-center gap-2 px-4 py-2 rounded-full font-bold text-sm">
                  <span>Download Latest</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L120,156.69V32a8,8,0,0,1,16,0V156.69l66.34-66.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </button>
              </div>
              
              <div class="flex flex-col gap-4 p-6 border rounded-lg download-card">
                <div class="flex items-center gap-3">
                  <div class="download-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold">Source Code</h3>
                    <p class="text-sm text-gray-600">GitHub</p>
                  </div>
                </div>
                <p class="text-sm">Build from source or contribute to the project. View the code on GitHub.</p>
                <button class="source-btn flex items-center justify-center gap-2 px-4 py-2 rounded-full font-bold text-sm">
                  <span>View Source</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="flex flex-col gap-4 p-6 border rounded-lg">
              <h3 class="text-lg font-bold">System Requirements</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-medium mb-2">Hardware Requirements</h4>
                  <ul class="text-sm space-y-1">
                    <li>- Webcam (built-in or external)</li>
                    <li>- 2 GB RAM minimum</li>
                    <li>- 100 MB disk space</li>
                    <li>- Modern CPU for real-time processing</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium mb-2">Operating System</h4>
                  <ul class="text-sm space-y-1">
                    <li>- macOS (production ready)</li>
                    <li>- Windows (coming soon)</li>
                    <li>- Linux (manual build available)</li>
                    <li>- Python 3.8+ (for development)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    init: function() {
      applyColors();
      
      // Setup download buttons
      const downloadBtn = document.querySelector('.download-btn');
      const sourceBtn = document.querySelector('.source-btn');
      
      downloadBtn.onclick = () => window.open(config.downloadUrl, '_blank');
      sourceBtn.onclick = () => window.open(config.githubUrl, '_blank');
    }
  },

  about: {
    template: `
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="flex flex-col gap-6 px-4 py-10">
            <div class="flex flex-col gap-4">
              <h1 class="text-4xl font-black leading-tight tracking-[-0.033em]">About Mindful Touch</h1>
              <p class="text-lg font-normal leading-normal">Understanding the philosophy and purpose behind our mindful awareness tool.</p>
            </div>
            
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Our Mission</h2>
                <p class="text-base font-normal leading-normal">
                  Many people unconsciously touch their face throughout the day, which can be problematic for hygiene and health. 
                  Mindful Touch was created to help you become aware of these unconscious habits by providing gentle, 
                  non-intrusive notifications when your hands approach your face. Our goal is to support better hygiene 
                  practices and mindful awareness.
                </p>
              </div>
              
              <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Advanced Detection Technology</h2>
                <p class="text-base font-normal leading-normal">
                  Mindful Touch uses advanced computer vision and machine learning to detect when your hands approach 
                  specific facial regions including the scalp, eyebrows, eyes, mouth, and beard area. The application 
                  provides real-time WebSocket communication for instant notifications and includes interactive controls 
                  to customize which regions you want to monitor.
                </p>
              </div>
              
              <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Privacy First</h2>
                <p class="text-base font-normal leading-normal">
                  We believe that personal data should remain personal. Mindful Touch operates entirely on your device, 
                  with no data collection, no tracking, and no cloud storage. Your camera feed and detection data never 
                  leave your computer, ensuring complete privacy and security.
                </p>
              </div>
              
              <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Open Source & Lightweight</h2>
                <p class="text-base font-normal leading-normal">
                  Transparency is key to trust. Mindful Touch is open source, allowing anyone to review the code, 
                  contribute improvements, or build from source. Built with Tauri, the application is lightweight 
                  with minimal system resource usage while providing optimized performance for real-time detection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    init: function() {
      applyColors();
    }
  },

  help: {
    template: `
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="flex flex-col gap-6 px-4 py-10">
            <div class="flex flex-col gap-4">
              <h1 class="text-4xl font-black leading-tight tracking-[-0.033em]">Help & Support</h1>
              <p class="text-lg font-normal leading-normal">Get help with using Mindful Touch and troubleshooting common issues.</p>
            </div>
            
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Getting Started</h2>
                <div class="flex flex-col gap-3">
                  <div class="p-4 border rounded-lg">
                    <h3 class="font-medium mb-2">1. Download and Install</h3>
                    <p class="text-sm">Download the latest version from the Downloads page and follow the installation instructions for your operating system.</p>
                  </div>
                  <div class="p-4 border rounded-lg">
                    <h3 class="font-medium mb-2">2. Camera Setup</h3>
                    <p class="text-sm">Position your webcam to capture your upper body and face clearly. The app will automatically detect facial regions and hand movements.</p>
                  </div>
                  <div class="p-4 border rounded-lg">
                    <h3 class="font-medium mb-2">3. Configure Regions</h3>
                    <p class="text-sm">Use the interactive controls to enable/disable detection for specific facial regions (scalp, eyebrows, eyes, mouth, beard area).</p>
                  </div>
                </div>
              </div>
              
              <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Frequently Asked Questions</h2>
                <div class="flex flex-col gap-3">
                  <div class="p-4 border rounded-lg">
                    <h3 class="font-medium mb-2">Q: Does Mindful Touch work without internet?</h3>
                    <p class="text-sm">A: Yes, Mindful Touch works completely offline. No internet connection is required for face detection or notifications.</p>
                  </div>
                  <div class="p-4 border rounded-lg">
                    <h3 class="font-medium mb-2">Q: What data does the app collect?</h3>
                    <p class="text-sm">A: None. All processing happens locally on your device. Your camera feed and detection data never leave your computer.</p>
                  </div>
                  <div class="p-4 border rounded-lg">
                    <h3 class="font-medium mb-2">Q: Can I choose which face regions to monitor?</h3>
                    <p class="text-sm">A: Yes, you can toggle detection on/off for specific regions like scalp, eyebrows, eyes, mouth, and beard area using the interactive controls.</p>
                  </div>
                  <div class="p-4 border rounded-lg">
                    <h3 class="font-medium mb-2">Q: How accurate is the face-touch detection?</h3>
                    <p class="text-sm">A: The app uses advanced computer vision algorithms for high accuracy. Detection sensitivity can be adjusted in settings to minimize false positives.</p>
                  </div>
                </div>
              </div>
              
              <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Need More Help?</h2>
                <p class="text-base font-normal leading-normal">
                  If you can't find the answer to your question here, feel free to reach out to our community on GitHub or create an issue for bug reports and feature requests.
                </p>
                <button class="github-help-btn flex items-center justify-center gap-2 px-4 py-2 rounded-full font-bold text-sm w-fit">
                  <span>Get Help on GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    init: function() {
      applyColors();
      
      // Setup GitHub help button
      const githubHelpBtn = document.querySelector('.github-help-btn');
      githubHelpBtn.onclick = () => window.open(config.githubUrl + '/issues', '_blank');
    }
  }
};

// Initialize pages in router
document.addEventListener('DOMContentLoaded', function() {
  if (typeof router !== 'undefined') {
    router.addRoute('/', pages.home);
    router.addRoute('/downloads', pages.downloads);
    router.addRoute('/about', pages.about);
    router.addRoute('/help', pages.help);
  }
});
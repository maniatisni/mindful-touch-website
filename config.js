const config = {
  // User information
  username: "maniatisni",
  
  // App information
  appName: "Mindful Touch",
  appDescription: "A gentle awareness tool for mindful hand movement tracking that helps you become more aware of unconscious face-touching habits.",
  
  // Links and URLs
  githubUrl: "https://github.com/maniatisni/mindful-touch",
  downloadUrl: "https://github.com/maniatisni/mindful-touch/releases/latest",
  facebookUrl: "https://facebook.com/maniatisni",
  
  // Colors and styling
  primaryColor: "#b7e0d2",
  secondaryColor: "#eaf0ee",
  textColor: "#111815",
  mutedTextColor: "#608579",
  backgroundColor: "#f9fbfa",
  borderColor: "#d6e1dd",
  
  // Background images with overlay
  heroBackgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeI48jHF0DSHr5FQ7Uw14xoco6DK4I1sQ-7psJTUj6HehqwMoP4jp1-gNtNntWLthPWhXn1G0wbMB-te1xExfyjF0YgSvujAE_WFVCLn5KFMOzdxRqJOui2TRcA30H5voUA1O0IcliCa8coInnKWYJXAjTPwa5f2TyULkkZJUz0rvnmG_W17o0s39rY19Ckn2awBEFx8ttEAwTg3WRmZYyszVl4hxgurFwe60go-LeWs3aLFylXU-wHuQcvXmwEfmQucU_kyW1skH7",
  heroOverlayGradient: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)",
  
  // Copyright and legal
  copyrightYear: "2025",
  copyrightText: "Mindful Touch. All rights reserved.",
  
  // Features
  features: [
    {
      icon: "HandWaving",
      title: "Multi-Region Detection",
      description: "Monitors specific facial regions including scalp, eyebrows, eyes, mouth, and beard area."
    },
    {
      icon: "ClockCounterClockwise", 
      title: "Real-Time Notifications",
      description: "Provides gentle, non-intrusive notifications when your hands approach your face."
    },
    {
      icon: "ShieldCheck",
      title: "Privacy-First", 
      description: "All processing happens locally on your device. No data collection or sharing."
    }
  ],
  
  // Navigation
  navigation: [
    { text: "Home", href: "/" },
    { text: "Downloads", href: "/downloads" },
    { text: "About", href: "/about" },
    { text: "Help", href: "/help" }
  ],
  
  // Content sections
  heroTitle: "Mindful Touch",
  heroSubtitle: "A gentle awareness tool for mindful hand movement tracking that helps you become more aware of unconscious face-touching habits through real-time detection and notifications.",
  
  featuresTitle: "Break Unconscious Face-Touching Habits",
  featuresDescription: "Mindful Touch uses advanced multi-region detection to help you become aware of when your hands approach your face, supporting better hygiene and mindful habits.",
  
  privacyContent: "At Mindful Touch, we prioritize your privacy. Our application operates entirely on your device with no data collection, storage, or transmission. Your face-touching awareness journey remains completely private and secure. All processing happens locally, ensuring your personal data never leaves your computer."
};

// Make config available globally
window.config = config;
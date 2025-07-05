// GitHub repository configuration
const GITHUB_REPO = 'maniatisni/mindful-touch'; // Your actual repository
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;

// DOM elements
const downloadBtn = document.getElementById('download-btn');
const heroDownloadBtn = document.getElementById('hero-download-btn');
const downloadModal = document.getElementById('download-modal');
const downloadOptions = document.getElementById('download-options');
const closeModal = document.getElementById('close-modal');
const releaseInfo = document.getElementById('release-info');

// State
let latestRelease = null;
let isLoading = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    fetchLatestRelease();
    setupEventListeners();
    setupSmoothScrolling();
    addInteractivity();
});

// Event listeners
function setupEventListeners() {
    downloadBtn.addEventListener('click', showDownloadModal);
    heroDownloadBtn.addEventListener('click', showDownloadModal);
    closeModal.addEventListener('click', hideDownloadModal);
    
    // Close modal when clicking outside
    downloadModal.addEventListener('click', function(e) {
        if (e.target === downloadModal) {
            hideDownloadModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !downloadModal.classList.contains('hidden')) {
            hideDownloadModal();
        }
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Fetch latest release from GitHub API
async function fetchLatestRelease() {
    if (isLoading) return;
    
    isLoading = true;
    updateButtonState('loading');
    
    try {
        const response = await fetch(GITHUB_API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        latestRelease = data;
        
        updateReleaseInfo(data);
        updateButtonState('ready');
        
    } catch (error) {
        console.error('Error fetching latest release:', error);
        updateButtonState('error');
        
        // Show fallback message
        if (releaseInfo) {
            releaseInfo.innerHTML = 'Check GitHub for the latest release';
        }
    } finally {
        isLoading = false;
    }
}

// Update release information display
function updateReleaseInfo(release) {
    if (!releaseInfo) return;
    
    const releaseDate = new Date(release.published_at).toLocaleDateString();
    const releaseText = `Latest: ${release.tag_name} (${releaseDate})`;
    
    releaseInfo.innerHTML = releaseText;
}

// Update button states based on loading/error states
function updateButtonState(state) {
    const buttons = [downloadBtn, heroDownloadBtn];
    
    buttons.forEach(btn => {
        if (!btn) return;
        
        const span = btn.querySelector('span');
        if (!span) return;
        
        switch (state) {
            case 'loading':
                span.textContent = 'Loading...';
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
                break;
            case 'ready':
                span.textContent = btn.id === 'hero-download-btn' ? 'Download Latest Release' : 'Download';
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                break;
            case 'error':
                span.textContent = 'Visit GitHub';
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                break;
        }
    });
}

// Show download modal
function showDownloadModal() {
    if (!latestRelease) {
        // If no release data, redirect to GitHub
        window.open(`https://github.com/${GITHUB_REPO}/releases`, '_blank');
        return;
    }
    
    populateDownloadOptions();
    downloadModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Hide download modal
function hideDownloadModal() {
    downloadModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Populate download options in modal
function populateDownloadOptions() {
    if (!latestRelease || !downloadOptions) return;
    
    downloadOptions.innerHTML = '';
    
    // Add release title and description
    const releaseHeader = document.createElement('div');
    releaseHeader.className = 'mb-4';
    releaseHeader.innerHTML = `
        <h4 class="font-bold text-white mb-2">${latestRelease.name || latestRelease.tag_name}</h4>
        <p class="text-sm text-[#93c8b6] mb-4">Released on ${new Date(latestRelease.published_at).toLocaleDateString()}</p>
    `;
    downloadOptions.appendChild(releaseHeader);
    
    // Filter and categorize assets
    const assets = latestRelease.assets || [];
    const platformAssets = categorizeAssets(assets);
    
    if (Object.keys(platformAssets).length === 0) {
        // No assets found, show GitHub link
        const noAssetsDiv = document.createElement('div');
        noAssetsDiv.className = 'text-center py-4';
        noAssetsDiv.innerHTML = `
            <p class="text-[#93c8b6] mb-4">No pre-built downloads available.</p>
            <a href="${latestRelease.html_url}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 bg-[#14b781] text-[#11221c] px-4 py-2 rounded-full font-bold hover:bg-[#12a373] transition-colors">
                View on GitHub
            </a>
        `;
        downloadOptions.appendChild(noAssetsDiv);
        return;
    }
    
    // Create download buttons for each platform
    Object.entries(platformAssets).forEach(([platform, assets]) => {
        const platformDiv = document.createElement('div');
        platformDiv.className = 'mb-3';
        
        const platformTitle = document.createElement('h5');
        platformTitle.className = 'font-semibold text-white mb-2';
        platformTitle.textContent = platform;
        platformDiv.appendChild(platformTitle);
        
        assets.forEach(asset => {
            const button = document.createElement('a');
            button.href = asset.browser_download_url;
            button.download = asset.name;
            button.className = 'flex items-center justify-between w-full p-3 bg-[#24473b] border border-[#346555] rounded-lg hover:bg-[#346555] transition-colors mb-2';
            
            button.innerHTML = `
                <div class="flex items-center gap-3">
                    <span class="text-[#14b781] text-xl">${getPlatformIcon(platform)}</span>
                    <div>
                        <div class="font-medium text-white">${asset.name}</div>
                        <div class="text-sm text-[#93c8b6]">${formatFileSize(asset.size)}</div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" class="text-[#93c8b6]">
                    <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM101.66,122.34a8,8,0,0,0,11.32,11.32L128,118.63l15.05,15.05a8,8,0,0,0,11.32-11.32l-24-24a8,8,0,0,0-11.32,0ZM128,24a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V32A8,8,0,0,0,128,24Z"/>
                </svg>
            `;
            
            platformDiv.appendChild(button);
        });
        
        downloadOptions.appendChild(platformDiv);
    });
    
    // Add GitHub link at the bottom
    const githubLink = document.createElement('div');
    githubLink.className = 'mt-4 pt-4 border-t border-[#346555] text-center';
    githubLink.innerHTML = `
        <a href="${latestRelease.html_url}" target="_blank" rel="noopener noreferrer" 
           class="text-[#93c8b6] hover:text-[#14b781] transition-colors text-sm">
            View full release notes on GitHub →
        </a>
    `;
    downloadOptions.appendChild(githubLink);
}

// Categorize assets by platform
function categorizeAssets(assets) {
    const platforms = {};
    
    assets.forEach(asset => {
        const name = asset.name.toLowerCase();
        let platform = 'Other';
        
        if (name.includes('windows') || name.includes('win') || name.includes('.exe') || name.includes('.msi')) {
            platform = 'Windows';
        } else if (name.includes('mac') || name.includes('darwin') || name.includes('.dmg') || name.includes('.pkg')) {
            platform = 'macOS';
        } else if (name.includes('linux') || name.includes('.deb') || name.includes('.rpm') || name.includes('.appimage')) {
            platform = 'Linux';
        } else if (name.includes('source') || name.includes('.tar.gz') || name.includes('.zip')) {
            platform = 'Source Code';
        }
        
        if (!platforms[platform]) {
            platforms[platform] = [];
        }
        platforms[platform].push(asset);
    });
    
    return platforms;
}

// Get platform icon
function getPlatformIcon(platform) {
    const icons = {
        'Windows': '🪟',
        'macOS': '🍎',
        'Linux': '🐧',
        'Source Code': '📦',
        'Other': '📁'
    };
    return icons[platform] || '📁';
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Utility function to detect user's platform
function detectUserPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('windows')) return 'Windows';
    if (userAgent.includes('mac')) return 'macOS';
    if (userAgent.includes('linux')) return 'Linux';
    
    return 'Unknown';
}

// Add animations and interactivity for dark theme
function addInteractivity() {
    // Animate elements on scroll with enhanced dark theme effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe feature cards with dark theme styling
    document.querySelectorAll('.hover\\:bg-\\[\\#1f3730\\]').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, background-color 0.3s ease';
        observer.observe(card);
    });
    
    // Add hover effects for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 8px rgba(20, 183, 129, 0.3)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
    
    // Enhanced button hover effects for dark theme
    document.querySelectorAll('button, a[class*="bg-"]').forEach(button => {
        if (button.classList.contains('bg-[#14b781]')) {
            button.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 4px 20px rgba(20, 183, 129, 0.3)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        }
    });
    
    // Add subtle parallax effect to hero section
    const heroSection = document.querySelector('.bg-cover');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Social media button interactions
    document.querySelectorAll('a[href*="facebook"], a[href*="github"]').forEach(social => {
        social.addEventListener('mouseenter', function() {
            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.transform = 'scale(1.1)';
                svg.style.transition = 'transform 0.2s ease';
            }
        });
        
        social.addEventListener('mouseleave', function() {
            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.transform = 'scale(1)';
            }
        });
    });
}

// Enhanced error handling for GitHub API
function handleNetworkError() {
    if (releaseInfo) {
        releaseInfo.innerHTML = `
            <div class="text-[#93c8b6] text-xs">
                <span class="text-yellow-400">⚠</span> Unable to fetch latest release
            </div>
        `;
    }
    
    // Update buttons to redirect to GitHub
    [downloadBtn, heroDownloadBtn].forEach(btn => {
        if (btn) {
            btn.onclick = () => window.open(`https://github.com/${GITHUB_REPO}/releases`, '_blank');
        }
    });
}

// Mobile menu toggle (if needed in future)
function setupMobileMenu() {
    // Placeholder for mobile menu functionality
    // Can be expanded later if mobile navigation menu is added
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        categorizeAssets,
        formatFileSize,
        detectUserPlatform,
        handleNetworkError
    };
}
class Router {
  constructor() {
    this.routes = {};
    this.currentPage = null;
    this.init();
  }

  init() {
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });
    
    // Handle initial load
    this.handleRoute();
  }

  addRoute(path, pageConfig) {
    this.routes[path] = pageConfig;
  }

  navigate(path) {
    if (path !== window.location.pathname) {
      window.history.pushState({}, '', path);
    }
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname;
    const route = this.routes[path] || this.routes['/'];
    
    if (route) {
      this.renderPage(route);
    }
  }

  renderPage(pageConfig) {
    const container = document.getElementById('page-content');
    if (container) {
      container.innerHTML = pageConfig.template;
      
      // Execute page-specific JavaScript
      if (pageConfig.init) {
        pageConfig.init();
      }
    }
  }
}

// Initialize router
const router = new Router();
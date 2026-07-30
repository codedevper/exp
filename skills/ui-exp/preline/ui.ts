import 'preline';

// Initialize Preline UI components
function initPrelineComponents() {
  // Use the recommended HSStaticMethods.autoInit() approach
  if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
    window.HSStaticMethods.autoInit();
  }
}

// Listen for Alpine events to re-initialize components
document.addEventListener('alpine:init', () => {
    // Re-initialize components after navigation
    initPrelineComponents();
});

document.addEventListener('DOMContentLoaded', () => {
    initPrelineComponents();
});

document.addEventListener('readystatechange', () => {
    initPrelineComponents();
});

// Initialize on page load
document.addEventListener('load', () => {
    initPrelineComponents();
});

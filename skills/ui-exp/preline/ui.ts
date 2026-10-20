import { HSStaticMethods } from "preline/non-auto";

// Initialize Preline UI components
export function initPrelineComponents() {
    // Use the recommended HSStaticMethods.autoInit() approach
    HSStaticMethods.autoInit();

    const html = document.documentElement;
    const appearance = localStorage.getItem("hs_theme") || "default";
    const resolvedAppearance = appearance === "auto"
        ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "default")
        : appearance;
    const colorTheme = localStorage.getItem("hs-clipboard-theme") || "default";
    const brand = localStorage.getItem("hs-clipboard-brand");
    const font = localStorage.getItem("hs-clipboard-font");

    html.classList.toggle("dark", resolvedAppearance === "dark");
    html.setAttribute("data-theme", `theme-${colorTheme}`);
    if (brand) html.setAttribute("data-brand", brand);
    if (font) html.setAttribute("data-font", font);
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

import { HSStaticMethods } from "preline/non-auto";

declare global {
  interface Window {
    // Optional third-party libraries
    Alpine: typeof import("alpinejs");
    $: typeof import("jquery");
    jQuery: typeof import("jquery");
    DataTable;
    Dropzone;
    VanillaCalendarPro;

    // Preline UI
    HSStaticMethods: HSStaticMethods;
  }
}

export {};

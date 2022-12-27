import { buildLegacyTheme } from "sanity";

const props = {
  "--choosen-white": "#fff",
  "--choosen-black": "#1a1a1a",
  "--chosen-ivory": "#fffff0",
  "--choosen-red": "#db4437",
  "--choosen-yellow": "#f4b400",
  "--choosen-green": "#0f9d58",
  "--brand-light-purple": "#c27ba0",
};

export const Theme = buildLegacyTheme({
  "--black": props["--choosen-black"],
  "--white": props["--choosen-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--chosen-ivory"],
  "--component-text-color": "#444444",

  // BRAND
  "--brand-primary": props["--brand-light-purple"],

  // Default Buttons
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--brand-light-purple"],
  "--default-button-success-color": props["--choosen-green"],
  "--default-button-warning-color": props["--choosen-yellow"],
  "--default-button-danger-color": props["--choosen-red"],

  // STATE
  "--state-info-color": props["--brand-light-purple"],
  "--state-success-color": props["--choosen-green"],
  "--state-warning-color": props["--choosen-yellow"],
  "--state-danger-color": props["--choosen-red"],

  // Nav Bar
  "--main-navigation-color": props["--choosen-black"],
  "--main-navigation-color--inverted": props["--choosen-white"],

  "--focus-color": props["--brand-light-purple"],
});

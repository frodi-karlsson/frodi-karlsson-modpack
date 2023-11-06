function run() {
  const isPinkTheme = window.modConfig["pinkTheme"] === true;
  if (!isPinkTheme) return;
  const themeMap = `
    --activity-card-background: var(--primary-700);
    --android-navigation-bar-background: var(--primary-830);
    --android-navigation-scrim-background: hsl(var(--primary-830-hsl)/0.5);
    --android-ripple: hsl(var(--white-500-hsl)/0.07);
    --background-accent: var(--primary-530);
    --background-floating: var(--primary-800);
    --background-mentioned: hsl(var(--yellow-300-hsl)/0.1);
    --background-mentioned-hover: hsl(var(--yellow-300-hsl)/0.08);
    --background-message-automod: hsl(var(--red-400-hsl)/0.05);
    --background-message-automod-hover: hsl(var(--red-400-hsl)/0.1);
    --background-message-highlight: hsl(var(--brand-360-hsl)/0.08);
    --background-message-highlight-hover: hsl(var(--brand-360-hsl)/0.06);
    --background-message-hover: hsl(var(--primary-900-hsl)/0.06);
    --background-mobile-primary: var(--primary-600);
    --background-mobile-secondary: var(--primary-630);
    --background-modifier-accent: hsl(var(--primary-500-hsl)/0.48);
    --background-modifier-accent-2: hsl(var(--primary-500-hsl)/0.48);
    --background-modifier-active: hsl(var(--primary-500-hsl)/0.48);
    --background-modifier-hover: hsl(var(--primary-500-hsl)/0.3);
    --background-modifier-selected: hsl(var(--primary-500-hsl)/0.6);
    --background-nested-floating: var(--primary-630);
    --background-primary: var(--primary-600);
    --background-secondary: var(--primary-630);
    --background-secondary-alt: var(--primary-660);
    --background-tertiary: var(--primary-700);
    --bg-backdrop: hsl(var(--black-500-hsl)/0.7);
    --bg-base-primary: var(--primary-600);
    --bg-base-secondary: var(--primary-630);
    --bg-base-tertiary: var(--primary-660);
    --bg-mod-faint: hsl(var(--primary-500-hsl)/0.3);
    --bg-mod-strong: hsl(var(--primary-500-hsl)/0.54);
    --bg-mod-subtle: hsl(var(--primary-500-hsl)/0.48);
    --bg-surface-overlay: var(--primary-800);
    --bg-surface-overlay-tmp: var(--primary-800);
    --bg-surface-raised: var(--primary-600);
    --blur-fallback: hsl(var(--primary-700-hsl)/0.96);
    --blur-fallback-pressed: hsl(var(--primary-730-hsl)/0.96);
    --border-faint: hsl(var(--white-500-hsl)/0.03);
    --border-strong: hsl(var(--white-500-hsl)/0.16);
    --border-subtle: hsl(var(--white-500-hsl)/0.08);
    --bug-reporter-modal-submitting-background: hsl(var(--primary-800-hsl)/0.6);
    --button-creator-revenue-background: var(--teal-430);
    --button-danger-background: var(--red-430);
    --button-danger-background-active: var(--red-530);
    --button-danger-background-disabled: var(--red-430);
    --button-danger-background-hover: var(--red-500);
    --button-outline-brand-background: hsl(var(--white-500-hsl)/0);
    --button-outline-brand-background-active: var(--brand-560);
    --button-outline-brand-background-hover: var(--brand-500);
    --button-outline-brand-border: var(--brand-500);
    --button-outline-brand-border-active: var(--brand-560);
    --button-outline-brand-border-hover: var(--brand-500);
    --button-outline-brand-text: var(--white-500);
    --button-outline-brand-text-active: var(--white-500);
    --button-outline-brand-text-hover: var(--white-500);
    --button-outline-danger-background: hsl(var(--white-500-hsl)/0);
    --button-outline-danger-background-active: var(--red-460);
    --button-outline-danger-background-hover: var(--red-430);
    --button-outline-danger-border: var(--red-400);
    --button-outline-danger-border-active: var(--red-430);
    --button-outline-danger-border-hover: var(--red-430);
    --button-outline-danger-text: var(--white-500);
    --button-outline-danger-text-active: var(--white-500);
    --button-outline-danger-text-hover: var(--white-500);
    --button-outline-positive-background: hsl(var(--white-500-hsl)/0);
    --button-outline-positive-background-active: var(--green-530);
    --button-outline-positive-background-hover: var(--green-430);
    --button-outline-positive-border: var(--green-360);
    --button-outline-positive-border-active: var(--green-530);
    --button-outline-positive-border-hover: var(--green-430);
    --button-outline-positive-text: var(--white-500);
    --button-outline-positive-text-active: var(--white-500);
    --button-outline-positive-text-hover: var(--white-500);
    --button-outline-primary-background: hsl(var(--white-500-hsl)/0);
    --button-outline-primary-background-active: var(--primary-430);
    --button-outline-primary-background-hover: var(--primary-500);
    --button-outline-primary-border: var(--primary-500);
    --button-outline-primary-border-active: var(--primary-430);
    --button-outline-primary-border-hover: var(--primary-500);
    --button-outline-primary-text: var(--white-500);
    --button-outline-primary-text-active: var(--white-500);
    --button-outline-primary-text-hover: var(--white-500);
    --button-positive-background: var(--green-430);
    --button-positive-background-active: var(--green-530);
    --button-positive-background-disabled: var(--green-430);
    --button-positive-background-hover: var(--green-500);
    --button-secondary-background: var(--primary-500);
    --button-secondary-background-active: var(--primary-400);
    --button-secondary-background-disabled: var(--primary-500);
    --button-secondary-background-hover: var(--primary-430);
    --card-gradient-bg: hsl(var(--black-500-hsl)/0.7);
    --card-gradient-pressed-bg: hsl(var(--black-500-hsl)/0.5);
    --card-primary-bg: var(--primary-560);
    --card-primary-pressed-bg: var(--primary-645);
    --card-secondary-bg: var(--primary-560);
    --card-secondary-pressed-bg: var(--primary-645);
    --channel-icon: var(--primary-400);
    --channel-text-area-placeholder: var(--primary-430);
    --channels-default: var(--primary-360);
    --channeltextarea-background: var(--primary-560);
    --chat-background: var(--primary-600);
    --chat-border: var(--primary-700);
    --chat-input-container-background: var(--primary-600);
    --control-brand-foreground: var(--brand-360);
    --control-brand-foreground-new: var(--brand-360);
    --creator-revenue-icon-gradient-end: var(--teal-430);
    --creator-revenue-icon-gradient-start: var(--teal-360);
    --creator-revenue-info-box-background: hsl(var(--teal-430-hsl)/0.1);
    --creator-revenue-info-box-border: var(--teal-400);
    --creator-revenue-locked-channel-icon: var(--teal-345);
    --creator-revenue-progress-bar: var(--teal-400);
    --deprecated-card-bg: hsl(var(--primary-700-hsl)/0.6);
    --deprecated-card-editable-bg: hsl(var(--primary-700-hsl)/0.3);
    --deprecated-quickswitcher-input-background: var(--primary-400);
    --deprecated-quickswitcher-input-placeholder: hsl(var(--white-500-hsl)/0.3);
    --deprecated-store-bg: var(--primary-600);
    --deprecated-text-input-bg: var(--primary-700);
    --deprecated-text-input-border: hsl(var(--black-500-hsl)/0.3);
    --deprecated-text-input-border-disabled: var(--primary-700);
    --deprecated-text-input-border-hover: var(--primary-900);
    --deprecated-text-input-prefix: var(--primary-200);
    --display-banner-overflow-background: hsl(var(--primary-700-hsl)/0.5);
    --divider-strong: hsl(var(--white-500-hsl)/0.16);
    --divider-subtle: hsl(var(--white-500-hsl)/0.08);
    --forum-post-extra-media-count-container-background: hsl(var(--primary-660-hsl)/0.8);
    --forum-post-tag-background: hsl(var(--primary-660-hsl)/0.9);
    --guild-notifications-bottom-sheet-pill-background: var(--primary-700);
    --header-muted: var(--primary-360);
    --header-primary: var(--primary-130);
    --header-secondary: var(--primary-330);
    --home-background: var(--primary-645);
    --home-card-resting-border: hsl(var(--transparent-hsl)/0);
    --icon-muted: var(--primary-500);
    --icon-primary: var(--primary-130);
    --icon-secondary: var(--primary-330);
    --info-danger-background: hsl(var(--red-400-hsl)/0.1);
    --info-danger-foreground: var(--red-400);
    --info-danger-text: var(--white-500);
    --info-help-background: hsl(var(--blue-345-hsl)/0.1);
    --info-help-foreground: var(--blue-345);
    --info-help-text: var(--white-500);
    --info-positive-background: hsl(var(--green-360-hsl)/0.1);
    --info-positive-foreground: var(--green-360);
    --info-positive-text: var(--white-500);
    --info-warning-background: hsl(var(--yellow-300-hsl)/0.1);
    --info-warning-foreground: var(--yellow-300);
    --info-warning-text: var(--white-500);
    --input-background: var(--primary-700);
    --input-placeholder-text: var(--input-placeholder-text-dark);
    --input-pressed-background: var(--primary-660);
    --interactive-active: var(--white-500);
    --interactive-hover: var(--primary-230);
    --interactive-muted: var(--primary-500);
    --interactive-normal: var(--primary-330);
    --legacy-android-blur-overlay-default: hsl(var(--primary-660-hsl)/0.5);
    --legacy-android-blur-overlay-ultra-thin: hsl(var(--black-500-hsl)/0.025);
    --legacy-blur-fallback-default: hsl(var(--primary-660-hsl)/0.975);
    --legacy-blur-fallback-ultra-thin: hsl(var(--black-500-hsl)/0.95);
    --live-stage-tile-border: hsl(var(--primary-500-hsl)/0.6);
    --logo-primary: var(--white-500);
    --mention-background: hsl(var(--brand-500-hsl)/0.3);
    --mention-foreground: var(--brand-260);
    --modal-background: var(--primary-600);
    --modal-footer-background: var(--primary-630);
    --profile-gradient-card-background: hsl(var(--black-500-hsl)/0.7);
    --profile-gradient-message-input-border: hsl(var(--primary-500-hsl)/0.48);
    --profile-gradient-note-background: hsl(var(--black-500-hsl)/0.3);
    --profile-gradient-overlay: hsl(var(--black-500-hsl)/0.6);
    --profile-gradient-overlay-synced-with-user-theme: hsl(var(--black-500-hsl)/0.8);
    --profile-gradient-profile-body-background-hover: hsl(var(--white-500-hsl)/0.16);
    --profile-gradient-role-pill-background: hsl(var(--primary-660-hsl)/0.5);
    --profile-gradient-role-pill-border: hsl(var(--white-500-hsl)/0.2);
    --profile-gradient-section-box: hsl(var(--black-500-hsl)/0.45);
    --redesign-activity-card-background: var(--primary-560);
    --redesign-activity-card-background-pressed: var(--primary-630);
    --redesign-activity-card-badge-icon: var(--primary-360);
    --redesign-activity-card-border: hsl(var(--white-500-hsl)/0.02);
    --redesign-activity-card-overflow-background: var(--primary-630);
    --redesign-button-danger-background: var(--red-430);
    --redesign-button-danger-pressed-background: var(--red-460);
    --redesign-button-danger-text: var(--white-500);
    --redesign-button-overlay-alpha-background: hsl(var(--black-500-hsl)/0.54);
    --redesign-button-overlay-alpha-pressed-background: hsl(var(--black-500-hsl)/0.64);
    --redesign-button-overlay-alpha-text: var(--white-500);
    --redesign-button-overlay-background: var(--white-500);
    --redesign-button-overlay-pressed-background: var(--primary-230);
    --redesign-button-overlay-text: var(--primary-860);
    --redesign-button-positive-background: var(--green-430);
    --redesign-button-positive-pressed-background: var(--green-460);
    --redesign-button-positive-text: var(--white-500);
    --redesign-button-primary-alt-background: hsl(var(--brand-500-hsl)/0);
    --redesign-button-primary-alt-border: var(--brand-360);
    --redesign-button-primary-alt-on-blurple-background: hsl(var(--brand-530-hsl)/0);
    --redesign-button-primary-alt-on-blurple-border: var(--white-500);
    --redesign-button-primary-alt-on-blurple-pressed-background: var(--brand-530);
    --redesign-button-primary-alt-on-blurple-pressed-border: var(--brand-360);
    --redesign-button-primary-alt-on-blurple-text: var(--white-500);
    --redesign-button-primary-alt-pressed-background: hsl(var(--brand-700-hsl)/0.16);
    --redesign-button-primary-alt-pressed-border: hsl(var(--brand-400-hsl)/0.5);
    --redesign-button-primary-alt-pressed-text: var(--brand-360);
    --redesign-button-primary-alt-text: var(--brand-360);
    --redesign-button-primary-background: var(--brand-500);
    --redesign-button-primary-on-blurple-background: var(--white-500);
    --redesign-button-primary-on-blurple-pressed-background: var(--brand-200);
    --redesign-button-primary-on-blurple-pressed-text: var(--brand-530);
    --redesign-button-primary-on-blurple-text: var(--brand-500);
    --redesign-button-primary-pressed-background: var(--brand-560);
    --redesign-button-primary-text: var(--white-500);
    --redesign-button-secondary-alt-background: var(--primary-660);
    --redesign-button-secondary-alt-pressed-background: var(--primary-560);
    --redesign-button-secondary-alt-pressed-text: var(--primary-330);
    --redesign-button-secondary-alt-text: var(--primary-230);
    --redesign-button-secondary-background: var(--primary-460);
    --redesign-button-secondary-border: hsl(var(--white-500-hsl)/0.08);
    --redesign-button-secondary-pressed-background: var(--primary-500);
    --redesign-button-secondary-pressed-border: hsl(var(--transparent-hsl)/0);
    --redesign-button-secondary-text: var(--primary-230);
    --redesign-chat-input-background: var(--primary-700);
    --redesign-input-control-active-bg: var(--primary-645);
    --redesign-input-control-selected: var(--brand-500);
    --redesign-only-background-active: var(--primary-530);
    --redesign-only-background-default: var(--primary-600);
    --redesign-only-background-overlay: var(--primary-645);
    --redesign-only-background-raised: var(--primary-630);
    --redesign-only-background-sunken: var(--primary-660);
    --scrollbar-auto-scrollbar-color-thumb: var(--primary-730);
    --scrollbar-auto-scrollbar-color-track: var(--primary-630);
    --scrollbar-auto-thumb: var(--primary-730);
    --scrollbar-auto-track: var(--primary-630);
    --scrollbar-thin-thumb: var(--primary-730);
    --scrollbar-thin-track: hsl(var(--black-500-hsl)/0);
    --spoiler-hidden-background: var(--primary-700);
    --spoiler-revealed-background: var(--primary-660);
    --status-danger: var(--red-400);
    --status-danger-background: var(--red-400);
    --status-danger-text: var(--white-500);
    --status-dnd: var(--red-400);
    --status-idle: var(--yellow-300);
    --status-offline: var(--primary-360);
    --status-online: var(--green-360);
    --status-positive: var(--green-360);
    --status-positive-background: var(--green-430);
    --status-positive-text: var(--white-500);
    --status-speaking: var(--green-360);
    --status-warning: var(--yellow-300);
    --status-warning-background: var(--yellow-300);
    --status-warning-text: var(--black-500);
    --text-brand: var(--brand-360);
    --text-danger: var(--red-345);
    --text-link: var(--blue-345);
    --text-link-low-saturation: var(--blue-330);
    --text-low-contrast: var(--primary-360);
    --text-message-preview-low-sat: var(--primary-360);
    --text-muted: var(--primary-360);
    --text-muted-on-default: var(--primary-330);
    --text-normal: var(--primary-230);
    --text-positive: var(--green-330);
    --text-primary: var(--primary-230);
    --text-secondary: var(--primary-330);
    --text-warning: var(--yellow-300);
    --textbox-markdown-syntax: var(--primary-360);
    --user-profile-header-overflow-background: hsl(var(--primary-700-hsl)/0.5)`
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split(":"))
    .map(([key, value]) => [key.trim(), value.trim()]);
  const theme = Object.fromEntries(themeMap);
  const themeKeys = Object.keys(theme);
  const themeValues = Object.values(theme);

  function getComputedColor(value) {
    const div = document.createElement("div");
    div.setAttribute("style", `background-color: ${value}`);
    document.body.appendChild(div);
    const computed = getComputedStyle(div).getPropertyValue("background-color");
    document.body.removeChild(div);
    div.remove();
    return computed;
  }

  function getComputedColors() {
    return themeValues.map(getComputedColor);
  }

  const computedColors = getComputedColors();

  const pinkPalette = [
    "rgb(255, 255, 255)",
    "rgb(255, 202, 212)",
    "rgb(192, 132, 151)",
    "rgb(255, 194, 203)",
    "rgb(255, 173, 186)",
    "rgb(148, 76, 99)",
    "rgb(135, 69, 90)",
    "rgb(108, 55, 72)",
    "rgb(247, 175, 157)",
    "rgb(255, 235, 238)",
  ];

  function invertColor(rgb) {
    const [r, g, b] = rgb
      .slice(4, -1)
      .split(", ")
      .map((x) => parseInt(x, 10));
    return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
  }

  function findClosestColor(color, options) {
    const [r, g, b] = color
      .slice(4, -1)
      .split(",")
      .map((x) => parseInt(x, 10));
    const distances = options.map((option) => {
      const [r2, g2, b2] = option
        .slice(4, -1)
        .split(",")
        .map((x) => parseInt(x, 10));
      return Math.sqrt(
        Math.pow(r - r2, 2) + Math.pow(g - g2, 2) + Math.pow(b - b2, 2)
      );
    });
    const minDistance = Math.min(...distances);
    return options[distances.indexOf(minDistance)];
  }

  const newTheme = Object.fromEntries(
    themeKeys.map((key, index) => [
      key,
      findClosestColor(invertColor(computedColors[index]), pinkPalette),
    ])
  );

  const newThemeMap = Object.entries(newTheme)
    .map(([key, value]) => `${key}: ${value} !important;`)
    .join("\n");
  const newThemeString = `
  .theme-dark {
    ${newThemeMap}
  }
  `.trim();

  const style = document.createElement("style");
  style.textContent = newThemeString;

  document.head.appendChild(style);
}
run();

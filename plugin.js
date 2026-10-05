"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = `/*
 * Thymer Plugin Settings UI \u2014 Design Tokens
 *
 * Canonical CSS custom properties for the plugin settings panel system.
 * Plugins consume this verbatim; component CSS reads from these vars.
 *
 * See shared/settings-ui/DESIGN.md for rationale.
 *
 * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).
 * Fallbacks use color-mix(currentColor) so panels work when a token is absent.
 *
 * SCOPE IS DOUBLED ON PURPOSE (.tps-panel.tps-panel, specificity 0,2,0).
 * Every plugin bundles its own copy of this file and injects it into the same
 * document, all declaring the same global .tps-panel class. At equal specificity
 * the last stylesheet injected wins for EVERY panel in the app, so one plugin
 * running an outdated bundle silently redefines these tokens for all the others.
 * That shipped: pre-1f753f6 builds set --tps-accent from --accent-color, a var
 * Thymer never defines, which collapsed the accent to currentColor (white text)
 * across every installed plugin's panel. Doubling the class lets a current copy
 * outrank any stale plain-.tps-panel copy regardless of injection order.
 * Do not "simplify" this back to a single class.
 */

.tps-panel.tps-panel {
  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-text:           var(--text-default,   currentColor);
  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));
  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));
  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));

  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-bg-input:       var(--input-bg-color,
                        color-mix(in srgb, currentColor 6%, transparent));
  --tps-bg-hover:       var(--hover-subtle,
                        var(--sidebar-bg-hover,
                        color-mix(in srgb, currentColor 8%, transparent)));
  --tps-bg-active:      var(--active-bg-color,
                        color-mix(in srgb, currentColor 12%, transparent));

  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-divider:        var(--divider-color,
                        var(--thin-divider-color,
                        color-mix(in srgb, currentColor 14%, transparent)));
  --tps-border:         var(--input-border-color,
                        var(--divider-color,
                        color-mix(in srgb, currentColor 22%, transparent)));
  --tps-border-strong:  var(--titlebar-border-color,
                        var(--selection-border,
                        color-mix(in srgb, currentColor 32%, transparent)));

  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Fallback is a real color, never currentColor: an accent that degrades into
     the text color fails invisibly. Deliberately the brand mark, not the theme's
     --color-primary-500 \u2014 that one is a muted slate on themes like
     basalt-bedrock, which would make checked rows harder to read, not easier. */
  --tps-accent:         var(--logo-color, #04d1ab);
  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);
  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));

  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-danger:         var(--enum-red-fg, #ef4444);
  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);
  --tps-warning:        var(--text-warning,
                        var(--enum-yellow-fg, #f59e0b));
  --tps-success:        var(--enum-green-fg, #10b981);
  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);

  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));

  /* Panel chrome */
  --tps-panel-bg:       var(--panel-bg-color, transparent);
  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);

  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Font is INHERITED from Thymer's panel chrome (see components.css). */

  --tps-fs-title:       18px;
  --tps-fs-lede:        13px;
  --tps-fs-section:     11px;
  --tps-fs-hint:        12px;
  --tps-fs-label:       13px;
  --tps-fs-desc:        12px;
  --tps-fs-body:        13px;
  --tps-fs-value:       12px;
  --tps-fs-button:      12px;
  --tps-fs-list-header: 10px;

  --tps-lh-tight:       1;
  --tps-lh-snug:        1.2;
  --tps-lh-base:        1.4;
  --tps-lh-loose:       1.5;

  --tps-fw-regular:     400;
  --tps-fw-medium:      500;
  --tps-fw-semibold:    600;
  --tps-fw-bold:        700;

  --tps-ls-section:     0.06em;
  --tps-ls-list:        0.08em;
  --tps-ls-title:       0;

  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-space-1:        4px;
  --tps-space-2:        8px;
  --tps-space-3:        12px;
  --tps-space-4:        16px;
  --tps-space-5:        24px;
  --tps-space-6:        32px;
  --tps-space-7:        48px;

  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-radius-sm:      4px;
  --tps-radius-md:      6px;
  --tps-radius-lg:      8px;
  --tps-radius-pill:    999px;
  --tps-radius-circle:  50%;

  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);
  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --tps-dur-fast:       80ms;
  --tps-dur-base:       160ms;

  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);

  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-control-h-sm:   28px;
  --tps-control-h-md:   32px;
  --tps-input-w:        64px;
  --tps-num-step-w:     28px;
  --tps-swatch-size:    22px;
  --tps-thumb-size:     16px;
  --tps-track-h:        6px;

  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);
  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .tps-panel.tps-panel {
    --tps-dur-fast:     1ms;
    --tps-dur-base:     1ms;
  }
}
`;

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-panel .tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

/* Scoped .tps-panel on purpose: every plugin injects its own copy of this
   file, and older copies baseline-align this row (plus translateY icon
   shims). Higher specificity here makes the newest layout win the cascade
   war regardless of plugin load order. */
.tps-panel .tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-panel .tps-plugin-header-icon,
.tps-panel .tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Header controls: scope pill + bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Settings-scope cluster. Resting: one dim "All devices" pill. Diverged:
   pill lights amber (full-perimeter border + tint \u2014 never a single-edge
   accent) and the \u2191 push / \u21BA discard icon buttons appear beside it. Amber
   rides Thymer's orange enum tokens so it tracks the theme. */
.tps-scope {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.tps-scope-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 8px;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: 999px;
  font-size: 10.5px;
  line-height: 1;
  white-space: nowrap;
  color: var(--tps-text-muted);
  background: transparent;
  user-select: none;
}

.tps-scope-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tps-text-muted);
  opacity: 0.55;
}

/* "This device" is a normal, saved state (per-device settings), NOT a warning \u2014
   so it wears the calm brand accent, not an alarming amber. Full-perimeter
   border, never a single-edge accent. */
.tps-scope-pill[data-diverged="true"] {
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 45%, transparent);
  background: var(--tps-accent-soft);
}

.tps-scope-pill[data-diverged="true"] .tps-scope-dot {
  background: var(--tps-accent);
  opacity: 1;
}

.tps-scope-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Inline-SVG icons: a viewBox-centered vector in a block box has no font
   metrics \u2014 no baseline, no ascent/descent ink drift. The 14px vector in the
   22px button gives an exact 4px inset on every side. */
.tps-panel .tps-scope-svg {
  display: flex;
  width: 14px;
  height: 14px;
  flex: 0 0 auto;
}

.tps-panel .tps-scope-svg svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Optical correction for the (still webfont) bug glyph: near-zero descent
   rides the ink ~1px high of any line-box centering. */
.tps-panel .tps-plugin-header-bug .ti::before {
  display: inline-block;
  transform: translateY(1px);
}

.tps-scope-btn:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-scope-btn:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-scope-btn--push:hover {
  color: var(--enum-green-fg, #3fa653);
  border-color: var(--enum-green-border, rgba(63, 166, 83, 0.45));
  background: var(--enum-green-bg, rgba(63, 166, 83, 0.12));
}

/* Armed state must beat the generic :hover recolor (same specificity, order-
   dependent) \u2014 scope it up so the icon reddens with the box, hovered or not. */
.tps-panel .tps-scope-btn--discard[data-armed="true"],
.tps-panel .tps-scope-btn--discard[data-armed="true"]:hover {
  color: var(--enum-red-fg, #d64545);
  border-color: var(--enum-red-border, rgba(214, 69, 69, 0.5));
  background: var(--enum-red-bg, rgba(214, 69, 69, 0.12));
}

.tps-scope-btn[disabled] {
  opacity: 0.5;
  cursor: default;
}

/* \u2500\u2500 Header controls: bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Last flex item of the attr row; margin-left:auto pins the group to the
   right edge, align-self:center opts out of the row's baseline alignment. */
.tps-plugin-header-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-2, 8px);
  margin-left: auto;
  padding-left: var(--tps-space-3, 12px);
}

/* In-row placement (right of the version link). */
.tps-panel .tps-plugin-header-attr > .tps-plugin-header-bug {
  margin-left: var(--tps-space-2, 8px);
}

.tps-plugin-header-bug {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Undo the attr row's generic .ti treatment (translateY + margin) inside the button. */
.tps-panel .tps-plugin-header-bug .ti {
  width: 14px;
  height: 14px;
  font-size: 14px;
  transform: none;
  margin: 0;
}

.tps-plugin-header-bug:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-plugin-header-bug:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  width: 30px;
  height: 16px;
  padding: 0;
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-pill, 999px);
  background: var(--tps-bg-input);
  cursor: pointer;
  transition: background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch-knob {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 12px;
  height: 12px;
  border-radius: var(--tps-radius-circle, 50%);
  background: var(--tps-text-muted);
  transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch[aria-checked="true"] {
  background: var(--tps-accent);
  border-color: var(--tps-accent);
}

.tps-switch[aria-checked="true"] .tps-switch-knob {
  transform: translateX(14px);
  background: var(--tps-on-accent, #fff);
}

.tps-switch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch[data-busy],
.tps-switch:disabled {
  opacity: 0.55;
  pointer-events: none;
}

/* Off-state "safe mode": dim the body, keep it interactive \u2014 edits stage in the
   plugin's local drafts and apply on re-enable. Keyed off the pill's aria state
   so the optimistic flip dims instantly and heal re-renders stay correct with
   no JS. The header (pill, bug button, off-note) stays full opacity \u2014 exclude
   any direct child containing it (collection-icons wraps the header in a row
   element, so exclude by content, not class). */
.tps-panel:has(.tps-plugin-header .tps-switch[aria-checked="false"]) > :not(:has(.tps-plugin-header)) {
  opacity: 0.65;
  transition: opacity var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

/* Rendered whenever the header has a kill switch; shown only while it's off. */
.tps-plugin-header-off-note {
  display: none;
  margin: var(--tps-space-2, 8px) 0 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-plugin-header:has(.tps-switch[aria-checked="false"]) .tps-plugin-header-off-note {
  display: block;
}

/* \u2500\u2500 Feedback dialog (panel-scoped modal) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The overlay positions against the .tps-panel root (the scroll container). */
.tps-panel {
  position: relative;
}

.tps-feedback-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-4);
  background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 55%, transparent);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

@supports not ((backdrop-filter: blur(6px)) or (-webkit-backdrop-filter: blur(6px))) {
  .tps-feedback-overlay {
    background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 90%, transparent);
  }
}

/* Flex column with a growing description field: the card stretches to the
   available panel height (capped) and the textarea absorbs the difference,
   so the card itself never needs a scrollbar. */
.tps-feedback-card {
  display: flex;
  flex-direction: column;
  width: min(440px, 100%);
  height: min(760px, 100%);
  overflow: auto;
  background: var(--panel-bg-color, light-dark(#ffffff, #17171b));
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-lg);
  padding: var(--tps-space-4);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

/* Rows keep their natural height \u2014 when content doesn't fit (e.g. the system
   report drawer opens in a short panel) the CARD scrolls; rows must never be
   squeezed into overlapping each other. Only the description field flexes. */
.tps-feedback-card > * {
  flex: 0 0 auto;
}

.tps-feedback-card > .tps-feedback-field--grow {
  flex: 1 1 auto;
}

.tps-feedback-field--grow {
  display: flex;
  flex-direction: column;
}

.tps-feedback-field--grow .tps-feedback-textarea {
  flex: 1 1 auto;
  min-height: 72px;
}

.tps-feedback-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 var(--tps-space-2);
}

.tps-feedback-title {
  margin: 0;
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  color: var(--tps-text);
}

.tps-feedback-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  font-size: 14px;
}

.tps-feedback-close:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-feedback-close:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-feedback-hint {
  margin: 0 0 var(--tps-space-3);
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-feedback-field {
  display: block;
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-label {
  display: block;
  margin: 0 0 var(--tps-space-1);
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text);
}

.tps-feedback-input,
.tps-feedback-textarea {
  width: 100%;
  padding: var(--tps-space-1, 4px) var(--tps-space-2, 8px);
  font-family: inherit;
  font-size: var(--tps-fs-body, 13px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-sm, 4px);
}

.tps-feedback-textarea {
  resize: vertical;
  min-height: 72px;
}

.tps-feedback-input:focus,
.tps-feedback-textarea:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--tps-accent) 60%, transparent);
}

.tps-feedback-input[aria-invalid="true"],
.tps-feedback-textarea[aria-invalid="true"] {
  border-color: var(--tps-danger);
}

.tps-feedback-details {
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-summary {
  font-size: var(--tps-fs-hint, 12px);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-feedback-summary:hover {
  color: var(--tps-text);
}

.tps-feedback-report {
  margin: var(--tps-space-2) 0 0;
  padding: var(--tps-space-2);
  max-height: 140px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--tps-text-muted);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm, 4px);
}

/* Themed thin scrollbars \u2014 the card (short panels) and the report pre both scroll. */
.tps-feedback-card,
.tps-feedback-report {
  scrollbar-width: thin;
  scrollbar-color: var(--tps-border, rgba(127, 127, 127, 0.25)) transparent;
}

.tps-feedback-card::-webkit-scrollbar,
.tps-feedback-report::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.tps-feedback-card::-webkit-scrollbar-track,
.tps-feedback-report::-webkit-scrollbar-track {
  background: transparent;
}

.tps-feedback-card::-webkit-scrollbar-thumb,
.tps-feedback-report::-webkit-scrollbar-thumb {
  background: var(--tps-border, rgba(127, 127, 127, 0.25));
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.tps-feedback-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--tps-space-2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Keyboard shortcut rows (keyRow) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-key-name { min-width: 0; }

.tps-key-desc {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  white-space: normal;
}

.tps-key-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-key-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: var(--tps-fs-button);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-key-chip:hover { border-color: var(--tps-border); }

.tps-key-chip--unbound { color: var(--tps-text-faint); font-style: italic; }

.tps-key-chip[data-capturing="true"] {
  background: var(--tps-accent-soft);
  border-color: var(--tps-accent);
  color: var(--tps-accent);
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-key-clear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--tps-control-h-sm);
  height: var(--tps-control-h-sm);
  padding: 0;
  font-size: var(--tps-fs-button);
  line-height: 1;
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
}

.tps-key-clear:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-divider);
}

.tps-key-chip:focus-visible,
.tps-key-clear:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/feedback.js
  var MAX_URL_LENGTH = 7600;
  function el(tag, props, ...children) {
    const node = document.createElement(tag);
    const dom = (
      /** @type {any} */
      node
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class") node.className = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            node.setAttribute(k, v);
          }
        } else node.setAttribute(k, v === true ? "" : String(v));
      }
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }
  __name(el, "el");
  function versionFromConf(conf) {
    if (!conf || typeof conf !== "object") return "";
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object") {
      const v = (
        /** @type {Record<string, unknown>} */
        custom.pluginVersion
      );
      if (typeof v === "string") return v;
    }
    return "";
  }
  __name(versionFromConf, "versionFromConf");
  async function collectSystemReport({ pluginName = "", pluginVersion = "", disabled = false, data } = {}) {
    const ua = navigator.userAgent || "";
    const lines = [];
    lines.push(`Plugin: ${pluginName} v${pluginVersion}${disabled ? " (kill switch: OFF)" : ""}`);
    lines.push(`App: ${/electron/i.test(ua) ? "Thymer desktop app (Electron)" : "Thymer web"}${location && location.host ? ` \xB7 ${location.host}` : ""}`);
    lines.push(`UA: ${ua}`);
    lines.push(`Platform: ${navigator.platform || "?"} \xB7 lang ${navigator.language || "?"} \xB7 tz ${Intl.DateTimeFormat().resolvedOptions().timeZone || "?"}`);
    const dpr = Math.round((window.devicePixelRatio || 1) * 100) / 100;
    lines.push(`Screen (css px): ${screen.width}x${screen.height} @${dpr}x (\u2248${Math.round(screen.width * dpr)}x${Math.round(screen.height * dpr)} device px) \xB7 viewport ${window.innerWidth}x${window.innerHeight}`);
    try {
      const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const themeClasses = Array.from(document.body.classList).filter((c) => /theme/i.test(c)).join(" ");
      lines.push(`Appearance: ${dark ? "dark" : "light"}${reducedMotion ? " \xB7 reduced-motion" : ""}${themeClasses ? ` \xB7 body: ${themeClasses}` : ""}`);
    } catch {
    }
    try {
      const bits = [];
      if (navigator.hardwareConcurrency) bits.push(`${navigator.hardwareConcurrency} cores`);
      const devMem = (
        /** @type {any} */
        navigator.deviceMemory
      );
      if (devMem) bits.push(devMem >= 8 ? `RAM \u22658GB (API cap)` : `~${devMem}GB RAM`);
      const heap = (
        /** @type {any} */
        performance.memory
      );
      if (heap && heap.usedJSHeapSize) bits.push(`JS heap ${Math.round(heap.usedJSHeapSize / 1048576)}MB of ${Math.round(heap.jsHeapSizeLimit / 1048576)}MB limit`);
      bits.push(navigator.onLine === false ? "OFFLINE" : "online");
      if (typeof performance.now === "function") bits.push(`session up ${Math.round(performance.now() / 6e4)}m`);
      lines.push(`System: ${bits.join(" \xB7 ")}`);
    } catch {
    }
    try {
      if (navigator.storage && typeof navigator.storage.estimate === "function") {
        const est = await navigator.storage.estimate();
        if (est && est.usage != null) {
          lines.push(`Storage: ${Math.round((est.usage || 0) / 1048576)}MB used${est.quota ? ` of ${Math.round(est.quota / 1048576)}MB quota` : ""}`);
        }
      }
    } catch {
    }
    try {
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const plugins = await data.getAllGlobalPlugins();
        const listed = plugins.slice(0, 25).map((p) => {
          let name = "";
          let ver = "";
          try {
            name = p.getName?.() || "";
          } catch {
          }
          try {
            ver = versionFromConf(p.getConfiguration?.());
          } catch {
          }
          return ver ? `${name} v${ver}` : name;
        }).filter(Boolean);
        if (listed.length) {
          lines.push(`Global plugins, all installed (${plugins.length}): ${listed.join(", ")}${plugins.length > 25 ? ", \u2026" : ""}`);
        }
      }
      if (data && typeof /** @type {any} */
      data.getAllCollections === "function") {
        const collections = await /** @type {any} */
        data.getAllCollections();
        if (Array.isArray(collections)) lines.push(`Collection-level plugins: ${collections.length} (names withheld)`);
      }
    } catch {
    }
    return lines.join("\n");
  }
  __name(collectSystemReport, "collectSystemReport");
  function buildIssueUrl({ repository, description, discord, email, report }) {
    const repo = repository.replace(/\/+$/, "");
    const firstLine = description.split("\n")[0].trim();
    const title = `[bug] ${firstLine.length > 60 ? `${firstLine.slice(0, 57)}...` : firstLine}`;
    const bodyFor = /* @__PURE__ */ __name((desc2) => {
      const parts = [`**Describe the bug**

${desc2}`];
      if (discord || email) {
        const contact = [];
        if (discord) contact.push(`- Discord: ${discord}`);
        if (email) contact.push(`- Email: ${email}`);
        parts.push(`**Contact**

${contact.join("\n")}`);
      }
      parts.push(`**System report**

\`\`\`
${report}
\`\`\``);
      parts.push("_Screenshots: paste or drag images directly into this text box._");
      return parts.join("\n\n");
    }, "bodyFor");
    const urlFor = /* @__PURE__ */ __name((desc2) => `${repo}/issues/new?${new URLSearchParams({ title, body: bodyFor(desc2) })}`, "urlFor");
    let desc = description;
    let url = urlFor(desc);
    while (url.length > MAX_URL_LENGTH && desc.length > 200) {
      desc = `${desc.slice(0, Math.max(200, desc.length - 500)).trimEnd()}

[description truncated \u2014 URL length limit]`;
      url = urlFor(desc);
    }
    return url;
  }
  __name(buildIssueUrl, "buildIssueUrl");
  function openFeedbackDialog({ host, opener, pluginName = "", pluginVersion = "", repository = "", disabled = false, data } = {}) {
    const panelHost = host || /** @type {HTMLElement | null} */
    (opener ? opener.closest(".tps-panel") : null);
    if (!panelHost || !repository) return;
    if (panelHost.querySelector(".tps-feedback-overlay")) return;
    const reportPromise = collectSystemReport({ pluginName, pluginVersion, disabled, data });
    const discordInput = el("input", { class: "tps-feedback-input", type: "text", placeholder: "e.g. akaready", autocomplete: "off", spellcheck: "false" });
    const emailInput = el("input", { class: "tps-feedback-input", type: "email", placeholder: "e.g. you@example.com", autocomplete: "off", spellcheck: "false" });
    const descInput = el("textarea", { class: "tps-feedback-textarea", rows: "5", placeholder: "What happened? What did you expect instead?" });
    const reportPre = el("pre", { class: "tps-feedback-report" }, "Collecting\u2026");
    reportPromise.then((text) => {
      reportPre.textContent = text;
    }).catch(() => {
      reportPre.textContent = "Report unavailable.";
    });
    const fieldRow = /* @__PURE__ */ __name((label, field, extraClass) => el(
      "label",
      { class: `tps-feedback-field${extraClass ? ` ${extraClass}` : ""}` },
      el("span", { class: "tps-feedback-label" }, label),
      field
    ), "fieldRow");
    const prevOverflow = panelHost.style.overflow;
    const close = /* @__PURE__ */ __name(() => {
      overlay.remove();
      panelHost.style.overflow = prevOverflow;
      try {
        opener?.focus();
      } catch {
      }
    }, "close");
    const submit = /* @__PURE__ */ __name(async () => {
      const description = descInput.value.trim();
      if (!description) {
        descInput.setAttribute("aria-invalid", "true");
        descInput.focus();
        return;
      }
      let report = "";
      try {
        report = await reportPromise;
      } catch {
      }
      const url = buildIssueUrl({
        repository,
        description,
        discord: discordInput.value.trim(),
        email: emailInput.value.trim(),
        report
      });
      window.open(url, "_blank", "noopener");
      close();
    }, "submit");
    const card = el(
      "div",
      { class: "tps-feedback-card", role: "dialog", "aria-modal": "true", "aria-label": `Report a bug in ${pluginName}` },
      el(
        "div",
        { class: "tps-feedback-head" },
        el("h2", { class: "tps-feedback-title" }, "Report a bug"),
        el(
          "button",
          { type: "button", class: "tps-feedback-close", "aria-label": "Close", onClick: close },
          el("i", { class: "ti ti-x", "aria-hidden": "true" })
        )
      ),
      // Fixed short copy — no variable repo name, so each line stays on one line.
      el(
        "p",
        { class: "tps-feedback-hint" },
        "Opens a prefilled GitHub issue on the repo.",
        el("br"),
        "Please add relevant screenshots to the GitHub issue."
      ),
      fieldRow("Discord username (optional)", discordInput),
      fieldRow("Email (optional)", emailInput),
      fieldRow("What happened?", descInput, "tps-feedback-field--grow"),
      el(
        "details",
        { class: "tps-feedback-details" },
        el("summary", { class: "tps-feedback-summary" }, "System report (included with the issue)"),
        reportPre
      ),
      el(
        "div",
        { class: "tps-feedback-actions" },
        el("button", { type: "button", class: "tps-button tps-button--ghost", onClick: close }, "Cancel"),
        el("button", { type: "button", class: "tps-button tps-button--primary", onClick: submit }, "Open GitHub issue")
      )
    );
    const overlay = el("div", { class: "tps-feedback-overlay" }, card);
    overlay.addEventListener("mousedown", (e) => {
      if (e.target === overlay) close();
    });
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    });
    descInput.addEventListener("input", () => descInput.removeAttribute("aria-invalid"));
    panelHost.style.overflow = "hidden";
    overlay.style.top = `${panelHost.scrollTop}px`;
    overlay.style.height = `${panelHost.clientHeight}px`;
    panelHost.appendChild(overlay);
    descInput.focus();
  }
  __name(openFeedbackDialog, "openFeedbackDialog");

  // ../../shared/keybindings.js
  var MOD_KEYS = /* @__PURE__ */ new Set(["Control", "Shift", "Alt", "Meta"]);
  function keyFromCode(e) {
    const code = String(e.code || "");
    if (/^Key[A-Z]$/.test(code)) return code.slice(3);
    if (/^Digit[0-9]$/.test(code)) return code.slice(5);
    return "";
  }
  __name(keyFromCode, "keyFromCode");
  function keyFromKey(e) {
    let key = String(e.key || "");
    if (key === " ") return "Space";
    if (key.length === 1) key = key.toUpperCase();
    return key;
  }
  __name(keyFromKey, "keyFromKey");
  function eventToCombo(e) {
    if (MOD_KEYS.has(e.key)) return null;
    const parts = [];
    if (e.ctrlKey) parts.push("Ctrl");
    if (e.altKey) parts.push("Alt");
    if (e.shiftKey) parts.push("Shift");
    if (e.metaKey) parts.push("Meta");
    const byKey = keyFromKey(e);
    const byCode = keyFromCode(e);
    const key = e.altKey && byCode && !/^[A-Z0-9]$/.test(byKey) ? byCode : byKey || byCode;
    if (!key) return null;
    parts.push(key);
    return parts.join("+");
  }
  __name(eventToCombo, "eventToCombo");
  function parseCombo(combo) {
    const parts = String(combo || "").split("+").map((p) => p.trim()).filter(Boolean);
    const out = { ctrl: false, alt: false, shift: false, meta: false, key: "" };
    for (const p of parts) {
      const lower = p.toLowerCase();
      if (lower === "ctrl" || lower === "control") out.ctrl = true;
      else if (lower === "alt" || lower === "option") out.alt = true;
      else if (lower === "shift") out.shift = true;
      else if (lower === "meta" || lower === "cmd" || lower === "command") out.meta = true;
      else out.key = p;
    }
    if (out.key === " ") out.key = "Space";
    if (out.key.length === 1) out.key = out.key.toUpperCase();
    return out;
  }
  __name(parseCombo, "parseCombo");
  function comboMatches(e, m) {
    if (!m.key) return false;
    if (!!e.ctrlKey !== m.ctrl) return false;
    if (!!e.altKey !== m.alt) return false;
    if (!!e.shiftKey !== m.shift) return false;
    if (!!e.metaKey !== m.meta) return false;
    return keyFromKey(e) === m.key || keyFromCode(e) !== "" && keyFromCode(e) === m.key;
  }
  __name(comboMatches, "comboMatches");
  function eventMatchesCombo(e, combo) {
    return comboMatches(e, parseCombo(combo));
  }
  __name(eventMatchesCombo, "eventMatchesCombo");
  function isMacPlatform() {
    try {
      const p = String(navigator.platform || "") + " " + String(navigator.userAgent || "");
      return /Mac|iPhone|iPad|iPod/i.test(p);
    } catch {
      return false;
    }
  }
  __name(isMacPlatform, "isMacPlatform");
  var MAC_GLYPHS = { ctrl: "\u2303", alt: "\u2325", shift: "\u21E7", meta: "\u2318" };
  var KEY_GLYPHS = {
    ArrowLeft: "\u2190",
    ArrowRight: "\u2192",
    ArrowUp: "\u2191",
    ArrowDown: "\u2193",
    Enter: "\u21A9",
    Escape: "Esc",
    Backspace: "\u232B",
    Delete: "\u2326",
    Tab: "\u21E5",
    Space: "\u2423"
  };
  function formatCombo(combo, opts = {}) {
    const m = parseCombo(combo);
    if (!m.key) return opts.placeholder ?? "Unbound";
    const mac = opts.mac ?? isMacPlatform();
    const key = KEY_GLYPHS[m.key] || m.key;
    if (mac) {
      return (m.ctrl ? MAC_GLYPHS.ctrl : "") + (m.alt ? MAC_GLYPHS.alt : "") + (m.shift ? MAC_GLYPHS.shift : "") + (m.meta ? MAC_GLYPHS.meta : "") + key;
    }
    const parts = [];
    if (m.ctrl) parts.push("Ctrl");
    if (m.alt) parts.push("Alt");
    if (m.shift) parts.push("Shift");
    if (m.meta) parts.push("Win");
    parts.push(key);
    return parts.join("+");
  }
  __name(formatCombo, "formatCombo");

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el2 = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el2
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el2.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el2.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el2.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el2.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el2.setAttribute(k, v);
          }
        } else {
          el2.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el2, children);
    return el2;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    const root = h("div", { class: cls }, ...children);
    restoreSectionState(root, pluginClass || "");
    return root;
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon: icon2 = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready",
    killSwitch = null,
    feedback = null,
    scope = null
  }) {
    const iconClass = icon2 ? icon2.startsWith("ti-") ? icon2 : `ti-${icon2}` : "";
    const helperLines = normalizeHelperLines(helper);
    const fb = feedback ? {
      pluginName: (feedback === true ? "" : feedback.pluginName) || heading,
      pluginVersion: (feedback === true ? "" : feedback.pluginVersion) || version,
      repository: (feedback === true ? "" : feedback.repository) || repository,
      disabled: (feedback === true ? void 0 : feedback.disabled) ?? (killSwitch ? !killSwitch.on : false),
      data: feedback === true ? void 0 : feedback.data
    } : null;
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null,
        // Bug report sits with the attribution links (right of the version);
        // the far-right corner is reserved for state toggles (scope pill,
        // kill switch).
        fb ? renderFeedbackButton(fb) : null,
        killSwitch || scope ? h(
          "span",
          { class: "tps-plugin-header-controls" },
          scope ? scopeCluster(scope) : null,
          killSwitch ? renderKillSwitch(killSwitch) : null
        ) : null
      ),
      // Always rendered with a kill switch; CSS shows it only while the pill is
      // off, so it appears instantly on the optimistic flip with no re-render.
      killSwitch ? h(
        "p",
        { class: "tps-plugin-header-off-note" },
        "Plugin is off \u2014 settings stay editable and your changes apply when you switch it back on."
      ) : null
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  var SCOPE_SVG_NS = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
  function scopeSvgIcon(paths) {
    const wrap = h("span", { class: "tps-scope-svg", "aria-hidden": "true" });
    wrap.innerHTML = `${SCOPE_SVG_NS}${paths}</svg>`;
    return wrap;
  }
  __name(scopeSvgIcon, "scopeSvgIcon");
  function scopeCluster(scope) {
    const pill = h(
      "span",
      {
        class: "tps-scope-pill tooltip",
        "data-diverged": String(!!scope.diverged),
        "data-tooltip": scope.diverged ? "Custom settings for this device, saved automatically. Your other devices are unaffected." : "Using your shared defaults \u2014 the same on all your devices. Edits here apply to this device only.",
        "data-tooltip-dir": "top"
      },
      h("span", { class: "tps-scope-dot", "aria-hidden": "true" }),
      scope.diverged ? "This device" : "All devices"
    );
    if (!scope.diverged) {
      return h("span", { class: "tps-scope" }, pill);
    }
    const push = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--push tooltip",
      "data-tooltip": "Copy these settings to all my devices",
      "data-tooltip-dir": "top",
      "aria-label": "Copy these settings to all my devices",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.disabled) return;
        btn.disabled = true;
        try {
          scope.onPush();
        } catch {
          btn.disabled = false;
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M12 5v14"/><path d="M18 11l-6-6"/><path d="M6 11l6-6"/>'));
    let disarmTimer = 0;
    const discard = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--discard tooltip",
      "data-tooltip": "Reset this device to your shared defaults",
      "data-tooltip-dir": "top",
      "aria-label": "Reset this device to your shared defaults",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.getAttribute("data-armed") !== "true") {
          btn.setAttribute("data-armed", "true");
          btn.setAttribute("data-tooltip", "Tap again to reset this device");
          clearTimeout(disarmTimer);
          disarmTimer = window.setTimeout(() => {
            btn.removeAttribute("data-armed");
            btn.setAttribute("data-tooltip", "Reset this device to your shared defaults");
          }, 3e3);
          return;
        }
        clearTimeout(disarmTimer);
        try {
          scope.onDiscard();
        } catch {
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M9 14L5 10l4-4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/>'));
    return h("span", { class: "tps-scope" }, pill, push, discard);
  }
  __name(scopeCluster, "scopeCluster");
  function renderFeedbackButton(fb) {
    return h("button", {
      type: "button",
      class: "tps-plugin-header-bug",
      title: "Report a bug",
      "aria-label": "Report a bug",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLElement} */
          e.currentTarget
        );
        openFeedbackDialog({
          host: (
            /** @type {HTMLElement | null} */
            btn.closest(".tps-panel")
          ),
          opener: btn,
          ...fb
        });
      }, "onClick")
    }, h("i", { class: "ti ti-bug", "aria-hidden": "true" }));
  }
  __name(renderFeedbackButton, "renderFeedbackButton");
  function renderKillSwitch(killSwitch) {
    const sw = h("button", {
      type: "button",
      class: "tps-switch",
      role: "switch",
      "aria-checked": String(!!killSwitch.on),
      "aria-label": killSwitch.label || "Plugin enabled",
      title: killSwitch.on ? "Plugin enabled \u2014 click to disable all of its effects" : "Plugin disabled \u2014 click to re-enable"
    }, h("span", { class: "tps-switch-knob" }));
    const unlock = /* @__PURE__ */ __name(() => {
      sw.removeAttribute("data-busy");
      sw.disabled = false;
    }, "unlock");
    sw.addEventListener("click", () => {
      if (sw.disabled) return;
      const nextOn = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(nextOn));
      sw.setAttribute("data-busy", "");
      sw.disabled = true;
      setTimeout(unlock, 700);
      try {
        killSwitch.onToggle(nextOn);
      } catch {
        unlock();
        sw.setAttribute("aria-checked", String(!nextOn));
      }
    });
    return sw;
  }
  __name(renderKillSwitch, "renderKillSwitch");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon2 = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon2, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle, killSwitch, feedback, scope } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee,
      killSwitch,
      feedback,
      scope
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");
  var SECTION_STATE = (() => {
    const g = (
      /** @type {Record<string, any>} */
      /** @type {unknown} */
      globalThis
    );
    if (!g.__tpsSectionState) g.__tpsSectionState = /* @__PURE__ */ new Map();
    return (
      /** @type {Map<string, boolean>} */
      g.__tpsSectionState
    );
  })();
  function sectionStateKey(el2, key) {
    const scope = (
      /** @type {HTMLElement} */
      el2.dataset.sectionScope || ""
    );
    return scope + "::" + key;
  }
  __name(sectionStateKey, "sectionStateKey");
  function restoreSectionState(root, scope) {
    const nodes = root.querySelectorAll(".tps-section--collapsible[data-section-key]");
    for (const node of nodes) {
      const el2 = (
        /** @type {HTMLElement} */
        node
      );
      el2.dataset.sectionScope = scope;
      const key = el2.dataset.sectionKey || "";
      const remembered = SECTION_STATE.get(sectionStateKey(el2, key));
      if (remembered === void 0) continue;
      const apply = (
        /** @type {any} */
        el2._tpsSetOpen
      );
      if (typeof apply === "function") apply(remembered, true);
    }
  }
  __name(restoreSectionState, "restoreSectionState");
  function section({ label, hint, collapsible, defaultOpen = true, open, onToggle, persistKey, summary, body = [] }) {
    const bodyChildren = Array.isArray(body) ? body : [body];
    const bodyEl = h("div", { class: "tps-section-body" }, ...bodyChildren);
    if (!collapsible) {
      return h(
        "section",
        { class: "tps-section" },
        h("div", { class: "tps-section-label" }, label),
        hint ? h("p", { class: "tps-section-hint" }, hint) : null,
        bodyEl
      );
    }
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const sectionEl = h("section", {
      class: "tps-section tps-section--collapsible",
      // `open` is the controlled form — a caller driving it owns the state, so
      // that case opts out of the remembered-state machinery entirely.
      dataset: open == null ? { open: String(initialOpen), sectionKey: persistKey || label } : { open: String(initialOpen) }
    });
    const chev = h("span", { class: "tps-section-chev", "aria-hidden": "true" }, "\u25B8");
    const labelEl = h("span", { class: "tps-section-label" }, label);
    const summaryEl = h("span", { class: "tps-section-summary" });
    const paintSummary = /* @__PURE__ */ __name((isOpen) => {
      summaryEl.replaceChildren();
      if (isOpen || summary == null) return;
      const content = typeof summary === "function" ? summary() : summary;
      if (content == null || content === "") return;
      if (typeof content === "string") summaryEl.textContent = content;
      else summaryEl.appendChild(content);
    }, "paintSummary");
    const setOpen = /* @__PURE__ */ __name((nextOpen, restoring) => {
      sectionEl.dataset.open = String(nextOpen);
      header.setAttribute("aria-expanded", String(nextOpen));
      paintSummary(nextOpen);
      if (!restoring && sectionEl.dataset.sectionKey != null) {
        SECTION_STATE.set(sectionStateKey(sectionEl, sectionEl.dataset.sectionKey), nextOpen);
      }
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    sectionEl._tpsSetOpen = setOpen;
    const header = h("button", {
      type: "button",
      class: "tps-section-header",
      "aria-expanded": String(initialOpen),
      onClick: /* @__PURE__ */ __name(() => setOpen(sectionEl.dataset.open !== "true"), "onClick")
    }, chev, labelEl, summaryEl);
    paintSummary(initialOpen);
    sectionEl.appendChild(header);
    if (hint) sectionEl.appendChild(h("p", { class: "tps-section-hint" }, hint));
    sectionEl.appendChild(bodyEl);
    return sectionEl;
  }
  __name(section, "section");
  function listRow({ icon: icon2, name, controls }) {
    const ctrlChildren = controls == null ? [] : Array.isArray(controls) ? controls : [controls];
    return h(
      "div",
      { class: "tps-list-row" },
      h("div", null, icon2 || null),
      h("div", { class: "tps-list-name" }, name),
      h("div", null, ...ctrlChildren)
    );
  }
  __name(listRow, "listRow");
  function listHeader({ columns }) {
    return h(
      "div",
      { class: "tps-list-header" },
      ...columns.map((c) => h("div", null, c))
    );
  }
  __name(listHeader, "listHeader");
  function keyRow({ label, desc, combo, onChange, onClear, placeholder }) {
    const show = /* @__PURE__ */ __name((c) => formatCombo(c, { placeholder }), "show");
    const chip = h("button", { type: "button", class: "tps-key-chip", "aria-label": `${label} \u2014 click to rebind` }, show(combo));
    chip.classList.toggle("tps-key-chip--unbound", !combo);
    let capturing = false;
    let onCaptureKey = null;
    const stop = /* @__PURE__ */ __name((commit, next) => {
      if (!capturing) return;
      capturing = false;
      chip.removeAttribute("data-capturing");
      if (onCaptureKey) {
        window.removeEventListener("keydown", onCaptureKey, true);
        onCaptureKey = null;
      }
      if (commit) combo = next;
      chip.textContent = show(combo);
      chip.classList.toggle("tps-key-chip--unbound", !combo);
    }, "stop");
    chip.addEventListener("click", () => {
      if (capturing) {
        stop(false, combo);
        return;
      }
      capturing = true;
      chip.setAttribute("data-capturing", "true");
      chip.textContent = "Press keys\u2026";
      onCaptureKey = /* @__PURE__ */ __name((ev) => {
        if (ev.key === "Escape") {
          ev.preventDefault();
          ev.stopPropagation();
          stop(false, combo);
          return;
        }
        const next = eventToCombo(ev);
        if (!next) return;
        ev.preventDefault();
        ev.stopPropagation();
        stop(true, next);
        onChange(next);
      }, "onCaptureKey");
      window.addEventListener("keydown", onCaptureKey, true);
    });
    const controls = [chip];
    if (onClear) {
      controls.push(h("button", {
        type: "button",
        class: "tps-key-clear",
        "aria-label": `${label} \u2014 remove shortcut`,
        title: "Remove shortcut",
        onClick: /* @__PURE__ */ __name(() => {
          stop(false, "");
          combo = "";
          chip.textContent = show("");
          chip.classList.add("tps-key-chip--unbound");
          onClear();
        }, "onClick")
      }, "\xD7"));
    }
    const name = desc ? h("div", { class: "tps-key-name" }, h("div", null, label), h("div", { class: "tps-key-desc" }, desc)) : label;
    return listRow({ icon: null, name, controls: h("div", { class: "tps-key-controls" }, ...controls) });
  }
  __name(keyRow, "keyRow");

  // ../../shared/telemetry/ping.js
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter?.count?.({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");

  // ../../shared/plugin-version.js
  var CONFIG_WRITE_QUEUES_KEY = "__tpsPluginConfigWriteQueues";
  function configWriteIdentity(plugin) {
    let workspace = "default";
    try {
      workspace = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let guid = "";
    try {
      guid = plugin.getGuid?.() || plugin.collection?.getGuid?.() || "";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `${workspace}/${guid || name}`;
  }
  __name(configWriteIdentity, "configWriteIdentity");
  function queuePluginConfigWrite(plugin, task) {
    let queues;
    try {
      const root = (
        /** @type {any} */
        globalThis
      );
      if (!(root[CONFIG_WRITE_QUEUES_KEY] instanceof Map)) root[CONFIG_WRITE_QUEUES_KEY] = /* @__PURE__ */ new Map();
      queues = root[CONFIG_WRITE_QUEUES_KEY];
    } catch {
      return Promise.resolve().then(task);
    }
    const key = configWriteIdentity(plugin);
    const prior = queues.get(key) || Promise.resolve();
    const result = prior.then(task, task);
    const tail = result.then(() => void 0, () => void 0);
    queues.set(key, tail);
    void tail.then(() => {
      if (queues.get(key) === tail) queues.delete(key);
    });
    return result;
  }
  __name(queuePluginConfigWrite, "queuePluginConfigWrite");
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = (
      /** @type {Record<string, unknown> | undefined} */
      conf.custom
    );
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function resolveConfigApi(plugin) {
    if (!plugin) return null;
    if (typeof plugin.saveConfiguration === "function") return plugin;
    try {
      const data = plugin.data;
      const guid = typeof plugin.getGuid === "function" && plugin.getGuid() || plugin.collection && typeof plugin.collection.getGuid === "function" && plugin.collection.getGuid() || null;
      if (guid && data && typeof data.getPluginByGuid === "function") {
        const byGuid = data.getPluginByGuid(guid);
        if (byGuid && typeof byGuid.saveConfiguration === "function") return byGuid;
      }
      if (guid && data && typeof data.getAllCollections === "function") {
        const all = await data.getAllCollections();
        const found = (all || []).find((c) => c && typeof c.getGuid === "function" && c.getGuid() === guid);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const all = await data.getAllGlobalPlugins();
        const name = plugin.getConfiguration?.()?.name;
        const found = all.find((p) => p && typeof p.getGuid === "function" && p.getGuid() === guid) || (name ? all.find((p) => p && typeof p.getName === "function" && p.getName() === name) : null);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
    } catch {
    }
    return null;
  }
  __name(resolveConfigApi, "resolveConfigApi");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch));
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");
  async function syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch = {}) {
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-version-synced/${ws}/${conf.name}`;
      if (sessionStorage.getItem(guardKey) === pluginVersion) return;
      sessionStorage.setItem(guardKey, pluginVersion);
    } catch {
    }
    try {
      await api.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoadNow, "syncPluginVersionOnLoadNow");
  async function healPluginIdentity(plugin, identity) {
    return queuePluginConfigWrite(plugin, () => healPluginIdentityNow(plugin, identity));
  }
  __name(healPluginIdentity, "healPluginIdentity");
  async function healPluginIdentityNow(plugin, identity) {
    if (!identity || typeof identity.name !== "string" || !identity.name.trim()) return;
    const STUB_NAMES = ["New Global Plugin", "New Collection", "My Global Plugin"];
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (conf.ver === void 0 && conf.custom === void 0) return;
    const hasStubName = typeof conf.name !== "string" || !conf.name.trim() || STUB_NAMES.includes(conf.name.trim());
    const staleRepo = !!identity.sourceRepo && Array.isArray(identity.legacySourceRepos) && identity.legacySourceRepos.includes(
      /** @type {string} */
      conf.__source_repo
    );
    const missingRepo = !!identity.sourceRepo && (conf.__source_repo === void 0 || staleRepo);
    if (!hasStubName && !missingRepo) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-identity-healed/${ws}/${identity.name}`;
      if (sessionStorage.getItem(guardKey) === "1") return;
      sessionStorage.setItem(guardKey, "1");
    } catch {
    }
    const next = { ...conf };
    if (hasStubName) {
      next.name = identity.name;
      if (identity.icon) next.icon = identity.icon;
      if (identity.description) next.description = identity.description;
    }
    if (missingRepo) {
      next.__source_repo = identity.sourceRepo;
      if (conf.__source_files === void 0 && identity.sourceFiles) {
        next.__source_files = { ...identity.sourceFiles };
      }
    }
    try {
      await api.saveConfiguration(next);
    } catch {
    }
  }
  __name(healPluginIdentityNow, "healPluginIdentityNow");

  // ../../shared/plugin-kill-switch.js
  var MARKER_SYNC_HORIZON_MS = 9e4;
  function isPluginDisabled(conf) {
    if (!conf || typeof conf !== "object") return false;
    const custom = conf.custom;
    return !!(custom && typeof custom === "object" && /** @type {Record<string, unknown>} */
    custom.pluginDisabled === true);
  }
  __name(isPluginDisabled, "isPluginDisabled");
  function markerKey(plugin) {
    let ws = "default";
    try {
      ws = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `tps-kill-switch/${ws}/${name}`;
  }
  __name(markerKey, "markerKey");
  function writeKillSwitchMarker(plugin, disabled) {
    try {
      localStorage.setItem(markerKey(plugin), JSON.stringify({ disabled, ts: Date.now() }));
    } catch {
    }
  }
  __name(writeKillSwitchMarker, "writeKillSwitchMarker");
  function clearKillSwitchMarker(plugin) {
    try {
      localStorage.removeItem(markerKey(plugin));
    } catch {
    }
  }
  __name(clearKillSwitchMarker, "clearKillSwitchMarker");
  function readKillSwitch(plugin) {
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
    }
    const confDisabled = isPluginDisabled(conf);
    try {
      const raw = localStorage.getItem(markerKey(plugin));
      if (raw) {
        const marker = JSON.parse(raw);
        if (marker && typeof marker.disabled === "boolean") {
          if (marker.disabled === confDisabled) {
            clearKillSwitchMarker(plugin);
            return confDisabled;
          }
          if (Date.now() - (Number(marker.ts) || 0) < MARKER_SYNC_HORIZON_MS) {
            return marker.disabled;
          }
          clearKillSwitchMarker(plugin);
        }
      }
    } catch {
    }
    return confDisabled;
  }
  __name(readKillSwitch, "readKillSwitch");
  async function setPluginDisabled(plugin, disabled, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch));
  }
  __name(setPluginDisabled, "setPluginDisabled");
  async function setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch) {
    const api = await resolveConfigApi(plugin);
    if (!api) return false;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return false;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return false;
    const custom = conf.custom && typeof conf.custom === "object" ? (
      /** @type {Record<string, unknown>} */
      conf.custom
    ) : {};
    const resolvedPatch = typeof customPatch === "function" ? customPatch(custom) : customPatch;
    const patch = resolvedPatch && typeof resolvedPatch === "object" ? resolvedPatch : {};
    if (!Object.keys(patch).length && readKillSwitch(plugin) === disabled && isPluginDisabled(conf) === disabled) return true;
    writeKillSwitchMarker(plugin, disabled);
    try {
      const result = await api.saveConfiguration(configWithPluginVersion(conf, { ...patch, pluginDisabled: disabled }, pluginVersion));
      if (result === false) throw new Error("Thymer rejected the config save.");
      return true;
    } catch {
      clearKillSwitchMarker(plugin);
      return false;
    }
  }
  __name(setPluginDisabledNow, "setPluginDisabledNow");

  // ../../shared/plugin-settings.js
  function createSettingsStore(plugin, {
    slug,
    key = "settings",
    version,
    normalize = /* @__PURE__ */ __name((raw) => raw && typeof raw === "object" ? raw : {}, "normalize"),
    scopeKey = null,
    readSynced = null,
    pickSynced = null
  }) {
    const readBag = readSynced || ((custom) => custom?.[key]);
    const pickSyncedSubset = pickSynced || ((s) => s);
    let current = {};
    let dirty = false;
    let editRevision = 0;
    let localUnavailable = false;
    let restoredFromMirror = false;
    let writeChain = Promise.resolve();
    let flushTimer = null;
    let settleTimer = null;
    const fnv1a = /* @__PURE__ */ __name((s) => {
      let h3 = 2166136261;
      for (let i = 0; i < s.length; i++) {
        h3 ^= s.charCodeAt(i);
        h3 = Math.imul(h3, 16777619);
      }
      return (h3 >>> 0).toString(36);
    }, "fnv1a");
    const deviceIdentityParts = /* @__PURE__ */ __name(() => {
      try {
        const n = (
          /** @type {any} */
          typeof navigator !== "undefined" ? navigator : {}
        );
        const ua = String(n.userAgent || "");
        const isApp = /electron/i.test(ua);
        const os = /android/i.test(ua) ? "android" : /iphone|ipad|ios/i.test(ua) ? "ios" : /linux/i.test(ua) ? "linux" : /mac|darwin/i.test(ua) ? "mac" : /win/i.test(ua) ? "win" : "x";
        return { n, ua, isApp, os };
      } catch {
        return { n: {}, ua: "", isApp: false, os: "x" };
      }
    }, "deviceIdentityParts");
    const identity = deviceIdentityParts();
    const legacyDeviceKey = `${identity.isApp ? "app" : "web"}-${identity.os}-${fnv1a(`${identity.ua}|${identity.n.platform || ""}|${identity.n.language || ""}`)}`;
    const stableFingerprint = `${identity.isApp ? "app" : "web"}-${identity.os}-${fnv1a(`${String(identity.ua).replace(/\d+(?:[._]\d+)*/g, "#")}|${identity.n.platform || ""}|${identity.n.language || ""}`)}`;
    const persistentDeviceKey = /* @__PURE__ */ __name(() => {
      const storageKey = "tps-settings-device-id";
      try {
        const existing = localStorage.getItem(storageKey);
        if (existing && /^device-[a-z0-9-]+$/i.test(existing)) return existing;
        let id = "";
        try {
          id = `device-${crypto.randomUUID()}`;
        } catch {
        }
        if (!id) id = `device-${fnv1a(`${Date.now()}|${Math.random()}|${stableFingerprint}`)}`;
        localStorage.setItem(storageKey, id);
        if (localStorage.getItem(storageKey) === id) return id;
      } catch {
      }
      return stableFingerprint;
    }, "persistentDeviceKey");
    const deviceKey = persistentDeviceKey();
    const asMap = /* @__PURE__ */ __name((bag) => {
      if (bag && typeof bag === "object" && bag.byDevice && typeof bag.byDevice === "object") {
        return {
          shared: bag.shared,
          byDevice: { ...bag.byDevice },
          aliases: bag.aliases && typeof bag.aliases === "object" ? { ...bag.aliases } : {}
        };
      }
      if (bag && typeof bag === "object" && Object.keys(bag).length) {
        return { shared: bag, byDevice: {}, aliases: {} };
      }
      return { shared: void 0, byDevice: {}, aliases: {} };
    }, "asMap");
    const readCustom = /* @__PURE__ */ __name(() => {
      try {
        const conf = plugin.getConfiguration?.();
        const custom = conf && conf.custom;
        return custom && typeof custom === "object" ? (
          /** @type {Record<string, unknown>} */
          custom
        ) : {};
      } catch {
        return {};
      }
    }, "readCustom");
    const resolveDeviceSlotKey = /* @__PURE__ */ __name((m) => {
      if (Object.prototype.hasOwnProperty.call(m.byDevice, deviceKey)) return deviceKey;
      const aliased = m.aliases[stableFingerprint];
      if (aliased && Object.prototype.hasOwnProperty.call(m.byDevice, aliased)) return aliased;
      if (Object.prototype.hasOwnProperty.call(m.byDevice, stableFingerprint)) return stableFingerprint;
      if (Object.prototype.hasOwnProperty.call(m.byDevice, legacyDeviceKey)) return legacyDeviceKey;
      return null;
    }, "resolveDeviceSlotKey");
    const readSyncedDevice = /* @__PURE__ */ __name((custom) => {
      const m = asMap(readBag(custom));
      const slotKey = resolveDeviceSlotKey(m);
      if (slotKey) return m.byDevice[slotKey];
      return m.shared ?? null;
    }, "readSyncedDevice");
    const prune = /* @__PURE__ */ __name((m) => {
      const out = { byDevice: m.byDevice };
      if (m.shared !== void 0) out.shared = m.shared;
      if (Object.keys(m.aliases).length) out.aliases = m.aliases;
      return out;
    }, "prune");
    const buildDevicePatch = /* @__PURE__ */ __name((custom, subset) => {
      const m = asMap(readBag(custom));
      m.byDevice[deviceKey] = subset;
      m.aliases[stableFingerprint] = deviceKey;
      return { [key]: prune(m) };
    }, "buildDevicePatch");
    const buildAllPatch = /* @__PURE__ */ __name((custom, subset) => {
      const m = asMap(readBag(custom));
      m.shared = subset;
      for (const k of Object.keys(m.byDevice)) m.byDevice[k] = subset;
      m.byDevice[deviceKey] = subset;
      m.aliases[stableFingerprint] = deviceKey;
      return { [key]: prune(m) };
    }, "buildAllPatch");
    const buildResetPatch = /* @__PURE__ */ __name((custom) => {
      const m = asMap(readBag(custom));
      const resolved = resolveDeviceSlotKey(m);
      if (resolved) delete m.byDevice[resolved];
      delete m.byDevice[deviceKey];
      delete m.byDevice[stableFingerprint];
      delete m.byDevice[legacyDeviceKey];
      delete m.aliases[stableFingerprint];
      return { [key]: prune(m) };
    }, "buildResetPatch");
    const normalizedStringify = /* @__PURE__ */ __name((raw) => JSON.stringify(normalize(raw)), "normalizedStringify");
    const workspaceGuid = /* @__PURE__ */ __name(() => {
      try {
        return String(plugin.getWorkspaceGuid?.() || "") || "default";
      } catch {
        return "default";
      }
    }, "workspaceGuid");
    const scope = /* @__PURE__ */ __name(() => {
      if (!scopeKey) return "";
      try {
        return `/${String(scopeKey() || "scope")}`;
      } catch {
        return "/scope";
      }
    }, "scope");
    const cacheKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/${deviceKey}/cache`, "cacheKey");
    const legacyCacheKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/${legacyDeviceKey}/cache`, "legacyCacheKey");
    const readCache = /* @__PURE__ */ __name(() => {
      try {
        const raw = localStorage.getItem(cacheKey()) ?? localStorage.getItem(legacyCacheKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    }, "readCache");
    const writeCache = /* @__PURE__ */ __name((value) => {
      try {
        const keyName = cacheKey();
        localStorage.setItem(keyName, value);
        if (localStorage.getItem(keyName) !== value) throw new Error("localStorage read-back mismatch");
        localUnavailable = false;
        return true;
      } catch {
        localUnavailable = true;
        return false;
      }
    }, "writeCache");
    const clearCache = /* @__PURE__ */ __name(() => {
      try {
        localStorage.removeItem(cacheKey());
        localStorage.removeItem(legacyCacheKey());
      } catch {
      }
    }, "clearCache");
    const mirrorKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/mirror`, "mirrorKey");
    const readMirror = /* @__PURE__ */ __name(() => {
      try {
        const raw = localStorage.getItem(mirrorKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    }, "readMirror");
    const writeMirror = /* @__PURE__ */ __name((bag) => {
      try {
        const m = asMap(bag);
        if (m.shared === void 0 && !Object.keys(m.byDevice).length) return;
        localStorage.setItem(mirrorKey(), JSON.stringify(prune(m)));
      } catch {
      }
    }, "writeMirror");
    const recoveryFlagKey = /* @__PURE__ */ __name(() => `tps-settings-recovered/${slug}/${workspaceGuid()}${scope()}`, "recoveryFlagKey");
    const recoveryAttempted = /* @__PURE__ */ __name(() => {
      try {
        return sessionStorage.getItem(recoveryFlagKey()) === "1";
      } catch {
        return false;
      }
    }, "recoveryAttempted");
    const markRecoveryAttempted = /* @__PURE__ */ __name(() => {
      try {
        sessionStorage.setItem(recoveryFlagKey(), "1");
      } catch {
      }
    }, "markRecoveryAttempted");
    const bagIsAbsent = /* @__PURE__ */ __name((custom) => {
      const bag = readBag(custom);
      if (!bag || typeof bag !== "object") return true;
      const m = asMap(bag);
      return m.shared === void 0 && !Object.keys(m.byDevice).length;
    }, "bagIsAbsent");
    const saveCustomNow = /* @__PURE__ */ __name(async (buildPatch) => {
      try {
        const api = await resolveConfigApi(plugin);
        if (!api || typeof api.saveConfiguration !== "function") return false;
        let conf = {};
        try {
          conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
        } catch {
          return false;
        }
        if (typeof conf.name !== "string" || !conf.name.trim()) return false;
        const custom = conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const patch = buildPatch(custom);
        const patchKeys = Object.keys(patch);
        if (!patchKeys.length) return true;
        const converged = patchKeys.every((patchKey) => patchKey === key ? bagConverged(custom[key], patch[key]) : JSON.stringify(custom[patchKey]) === JSON.stringify(patch[patchKey]));
        if (converged) {
          if (patch[key] !== void 0) writeMirror(patch[key]);
          return true;
        }
        const result = await api.saveConfiguration(configWithPluginVersion(conf, patch, version));
        if (result === false) return false;
        if (patch[key] !== void 0) writeMirror(patch[key]);
        return true;
      } catch {
        return false;
      }
    }, "saveCustomNow");
    const saveCustom = /* @__PURE__ */ __name((buildPatch) => {
      const run = /* @__PURE__ */ __name(() => queuePluginConfigWrite(plugin, () => saveCustomNow(buildPatch)), "run");
      const result = writeChain.then(run, run);
      writeChain = result.then(() => void 0, () => void 0);
      return result;
    }, "saveCustom");
    const bagConverged = /* @__PURE__ */ __name((a, b) => {
      const ma = asMap(a);
      const mb = asMap(b);
      if (normalizedStringify(ma.shared || {}) !== normalizedStringify(mb.shared || {})) return false;
      const keys = /* @__PURE__ */ new Set([...Object.keys(ma.byDevice), ...Object.keys(mb.byDevice)]);
      for (const k of keys) {
        if (normalizedStringify(ma.byDevice[k] || {}) !== normalizedStringify(mb.byDevice[k] || {})) return false;
      }
      if (JSON.stringify(Object.entries(ma.aliases).sort()) !== JSON.stringify(Object.entries(mb.aliases).sort())) return false;
      return true;
    }, "bagConverged");
    const FLUSH_DELAY_MS = 4e3;
    const cancelFlush = /* @__PURE__ */ __name(() => {
      if (flushTimer) {
        clearTimeout(flushTimer);
        flushTimer = null;
      }
    }, "cancelFlush");
    const flushDevice = /* @__PURE__ */ __name(async () => {
      cancelFlush();
      if (!dirty) return true;
      const revision = editRevision;
      const subset = pickSyncedSubset(normalize(current));
      const ok = await saveCustom((custom) => buildDevicePatch(custom, subset));
      if (ok && editRevision === revision) {
        dirty = false;
        clearCache();
      } else if (dirty) scheduleFlush();
      return ok;
    }, "flushDevice");
    const scheduleFlush = /* @__PURE__ */ __name(() => {
      cancelFlush();
      flushTimer = setTimeout(() => {
        flushTimer = null;
        void flushDevice();
      }, FLUSH_DELAY_MS);
    }, "scheduleFlush");
    const store = {
      /**
       * Read this device's settings from the synced config. A localStorage cache
       * that differs (an edit not yet flushed before a crash/reload) wins and is
       * re-flushed. Read-only w.r.t. the synced config.
       */
      load() {
        if (dirty) return { settings: current, diverged: this.isDiverged() };
        let custom = readCustom();
        if (bagIsAbsent(custom)) {
          const mirrored = readMirror();
          if (mirrored && !recoveryAttempted()) {
            markRecoveryAttempted();
            restoredFromMirror = true;
            void saveCustomNow(() => ({ [key]: prune(asMap(mirrored)) }));
            custom = { ...custom, [key]: prune(asMap(mirrored)) };
          }
        }
        const synced = normalize(readSyncedDevice(custom) || {});
        const cached = readCache();
        if (cached && normalizedStringify(cached) !== JSON.stringify(synced)) {
          current = normalize(cached);
          dirty = true;
          scheduleFlush();
        } else {
          current = synced;
          dirty = false;
          writeMirror(readBag(custom));
          if (cached) clearCache();
          const resolved = resolveDeviceSlotKey(asMap(readBag(custom)));
          if (resolved && resolved !== deviceKey) {
            dirty = true;
            editRevision += 1;
            if (writeCache(JSON.stringify(current))) scheduleFlush();
            else void flushDevice();
          }
        }
        return { settings: current, diverged: this.isDiverged() };
      },
      get() {
        return current;
      },
      /** This device's settings differ from the shared baseline (informational). */
      isDiverged() {
        const shared = asMap(readBag(readCustom())).shared;
        return normalizedStringify(shared || {}) !== JSON.stringify(normalize(current));
      },
      /** True when the immediate recovery journal could not be verified. */
      isLocalUnavailable() {
        return localUnavailable;
      },
      /**
       * True when this load found the synced settings gone and rebuilt them from
       * the durable local mirror. Worth surfacing to the user — a silent recovery
       * hides that something wiped their config, and they should know to check
       * whatever did it.
       */
      wasRestoredFromMirror() {
        return restoredFromMirror;
      },
      /**
       * Lossless migration/recovery entry point. The normalized value is journaled
       * through the store's real cache key and retried to synced config; callers
       * never need to know or recreate that private key.
       */
      recover(raw) {
        const next = normalize(raw);
        const synced = normalize(readSyncedDevice(readCustom()) || {});
        if (JSON.stringify(next) === JSON.stringify(synced)) return false;
        current = next;
        dirty = true;
        editRevision += 1;
        if (writeCache(JSON.stringify(current))) scheduleFlush();
        else void flushDevice();
        return true;
      },
      /** Force this device's pending settings into its durable synced slot. */
      flush() {
        return flushDevice();
      },
      /**
       * Apply an edit to THIS device: update memory, cache locally for instant UI,
       * and schedule a durable flush to this device's synced slot. Never touches
       * another device's slot or the shared baseline.
       */
      update(patch) {
        current = normalize({ ...current, ...patch });
        dirty = true;
        editRevision += 1;
        if (writeCache(JSON.stringify(current))) scheduleFlush();
        else void flushDevice();
        return { settings: current, diverged: this.isDiverged() };
      },
      /**
       * "Copy these settings to all my devices": write the current settings to the
       * shared baseline AND every existing device slot, in ONE saveConfiguration.
       * (This is the header pill's ↑ action.)
       */
      async pushToAll() {
        cancelFlush();
        const revision = editRevision;
        const subset = pickSyncedSubset(normalize(current));
        const ok = await saveCustom((custom) => buildAllPatch(custom, subset));
        if (ok && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * "Reset this device": drop this device's slot so it re-inherits the shared
       * baseline (or defaults). (The header pill's ↺ action.) Returns the settings
       * this device now shows.
       */
      discardLocal() {
        cancelFlush();
        const shared = asMap(readBag(readCustom())).shared;
        current = normalize(shared || {});
        dirty = true;
        editRevision += 1;
        const revision = editRevision;
        writeCache(JSON.stringify(current));
        void saveCustom((custom) => buildResetPatch(custom)).then((ok) => {
          if (ok && editRevision === revision) {
            dirty = false;
            clearCache();
          } else if (dirty) scheduleFlush();
        });
        return current;
      },
      /**
       * Persist sibling custom data and this device's pending settings in one
       * serialized save. Data-owning plugins use this instead of manually
       * snapshotting the settings bag from a potentially stale config instance.
       */
      async saveCustomPatch(extraPatch = {}) {
        cancelFlush();
        const revision = editRevision;
        const hadDirty = dirty;
        const subset = hadDirty ? pickSyncedSubset(normalize(current)) : null;
        const ok = await saveCustom((custom) => ({
          ...typeof extraPatch === "function" ? extraPatch(custom) : extraPatch,
          ...hadDirty ? buildDevicePatch(custom, subset) : {}
        }));
        if (ok && hadDirty && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * The canonical settings-aware kill switch. Pending device settings and any
       * sibling data patch land atomically with pluginDisabled, and recovery is
       * cleared only after Thymer confirms the save.
       */
      async setDisabled(disabled, extraPatch = {}) {
        cancelFlush();
        const revision = editRevision;
        const hadDirty = dirty;
        const subset = hadDirty ? pickSyncedSubset(normalize(current)) : null;
        const run = /* @__PURE__ */ __name(() => setPluginDisabled(plugin, disabled, version, (custom) => ({
          ...extraPatch,
          ...hadDirty ? buildDevicePatch(custom, subset) : {}
        })), "run");
        const okPromise = writeChain.then(run, run);
        writeChain = okPromise.then(() => void 0, () => void 0);
        const ok = await okPromise;
        if (ok && hadDirty && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * Post-push pill settle. A successful push saves the config, which reloads
       * the plugin; the fresh instance can render its scope pill from a config
       * snapshot the save hasn't reached yet, and the follow-up config event is
       * filtered as local (attachLifecycle, by design) — so nothing repaints and
       * the pill sits on "This device" even though the push landed. Re-read the
       * synced config on a short interval until it converges: when the adopted
       * settings changed, `onAdopt(settings)` fires (apply + full panel render);
       * otherwise `refreshPill()` fires (pill-only repaint). A genuine local
       * edit still wins — load() carries it through the crash cache. No-ops
       * instantly when already settled. Call from the push success callback AND
       * the post-reload panel heal; returns a cancel fn for onUnload.
       */
      settleAfterPush({ onAdopt = void 0, refreshPill = void 0, tries = 8, intervalMs = 500 } = {}) {
        if (settleTimer) {
          clearTimeout(settleTimer);
          settleTimer = null;
        }
        const tick = /* @__PURE__ */ __name((left) => {
          const before = JSON.stringify(current);
          const next = this.load().settings;
          if (JSON.stringify(next) !== before) onAdopt?.(next);
          else refreshPill?.();
          if (left <= 0 || !this.isDiverged()) return;
          settleTimer = setTimeout(() => {
            settleTimer = null;
            tick(left - 1);
          }, intervalMs);
        }, "tick");
        tick(tries);
        return () => {
          if (settleTimer) {
            clearTimeout(settleTimer);
            settleTimer = null;
          }
        };
      },
      /**
       * Live-follow: when another device does "apply to all" (or edits propagate),
       * `global-plugin.updated` (or, for CollectionPlugins, the collection event the
       * adopter also wires) fires; re-read this device's synced settings and, if
       * they changed, hand them to the plugin's central apply. Also registers the
       * boundary flush (hidden / pagehide) so a just-made edit isn't stranded in the
       * localStorage cache. Returns a detach function for onUnload.
       */
      attachLifecycle({ onRemoteChange } = {}) {
        const handlerIds = [];
        const onHide = /* @__PURE__ */ __name(() => {
          if (document.visibilityState === "hidden") void flushDevice();
        }, "onHide");
        const onPageHide = /* @__PURE__ */ __name(() => {
          void flushDevice();
        }, "onPageHide");
        try {
          document.addEventListener("visibilitychange", onHide);
          window.addEventListener("pagehide", onPageHide);
        } catch {
        }
        try {
          const id = plugin.events?.on?.("global-plugin.updated", (event) => {
            try {
              if (dirty) return;
              if (event?.source?.isLocal) return;
              const guid = plugin.getGuid?.();
              const eventGuid = event?.pluginGuid || event?.guid || event?.rootId || null;
              if (eventGuid && guid && eventGuid !== guid) return;
              const next = normalize(readSyncedDevice(readCustom()) || {});
              if (JSON.stringify(next) === JSON.stringify(current)) return;
              current = next;
              onRemoteChange?.(current);
            } catch {
            }
          });
          if (id) handlerIds.push(id);
        } catch {
        }
        return () => {
          cancelFlush();
          if (settleTimer) {
            clearTimeout(settleTimer);
            settleTimer = null;
          }
          try {
            document.removeEventListener("visibilitychange", onHide);
            window.removeEventListener("pagehide", onPageHide);
          } catch {
          }
          for (const id of handlerIds) {
            try {
              plugin.events?.off?.(id);
            } catch {
            }
          }
        };
      }
    };
    return store;
  }
  __name(createSettingsStore, "createSettingsStore");

  // query.js
  var STATUS = [
    { value: "task", label: "Any task", hint: "Every task, done or not." },
    { value: "todo", label: "To do", hint: "Tasks that are not done yet." },
    { value: "done", label: "Done", hint: "Completed tasks." },
    { value: "due", label: "Has a due date", hint: "Open tasks with a due date." },
    { value: "overdue", label: "Overdue", hint: "Tasks whose due date is in the past." },
    { value: "assigned", label: "Assigned", hint: "Tasks that mention someone." },
    { value: "unassigned", label: "Unassigned", hint: "Tasks that mention nobody." },
    { value: "scheduled", label: "Scheduled", hint: "Tasks placed on someone's journal." }
  ];
  var FLAGS = [
    { value: "inprogress", label: "In progress", hint: "Tasks marked in progress." },
    { value: "waiting", label: "Waiting", hint: "Tasks marked waiting." },
    { value: "important", label: "Important", hint: "Tasks flagged important." },
    { value: "starred", label: "Starred", hint: "Starred items." },
    { value: "discuss", label: "Discuss", hint: "Tasks flagged for discussion." },
    { value: "alert", label: "Alert", hint: "Tasks flagged alert." },
    { value: "billing", label: "Billable", hint: "Tasks flagged billable." }
  ];
  var ITEM_TYPES = [
    { value: "document", label: "Pages", hint: "Whole pages / records." },
    { value: "heading", label: "Headings", hint: "Heading lines." },
    { value: "text", label: "Text blocks", hint: "Plain text lines." },
    { value: "list", label: "List items", hint: "Bulleted and numbered list items." },
    { value: "quote", label: "Quotes", hint: "Block quotes." },
    { value: "image", label: "Images", hint: "Image blocks." },
    { value: "file", label: "Files", hint: "File attachments." }
  ];
  var DATE_PRESETS = [
    { value: "today", label: "Today", hint: "Items with a date today." },
    { value: "tomorrow", label: "Tomorrow", hint: "Items with a date tomorrow." },
    { value: "yesterday", label: "Yesterday", hint: "Items with a date yesterday." },
    { value: "thisweek", label: "This week", hint: "Items with a date this week." },
    { value: "nextweek", label: "Next week", hint: "Items with a date next week." },
    { value: "lastweek", label: "Last week", hint: "Items with a date last week." },
    { value: "thismonth", label: "This month", hint: "Items with a date this month." },
    { value: "thisyear", label: "This year", hint: "Items with a date this year." }
  ];
  var META_KEYS = [
    { value: "due", label: "Due date", type: "date", hint: "The task's due date." },
    { value: "date", label: "Any date", type: "date", hint: "Any date on the item." },
    { value: "created_at", label: "Created", type: "date", hint: "When the item was created." },
    { value: "modified_at", label: "Modified", type: "date", hint: "When the item was last changed." },
    { value: "time", label: "Time", type: "time", hint: "A time on the item, e.g. 3pm." },
    { value: "created_by", label: "Created by", type: "user", hint: "Who created the item." },
    { value: "modified_by", label: "Modified by", type: "user", hint: "Who last changed the item." },
    { value: "mention", label: "Mentions", type: "user", hint: "Who the item mentions." },
    { value: "scheduled", label: "Scheduled on", type: "user", hint: "Whose journal the task is on." },
    { value: "hashtag", label: "Hashtag", type: "text", hint: "A hashtag on the item." },
    { value: "link", label: "Link URL", type: "text", hint: "A link the item contains." },
    { value: "collection", label: "Collection", type: "text", hint: "The collection the item is in." },
    { value: "text", label: "Text", type: "text", hint: "Text the item contains." },
    { value: "type", label: "Type", type: "text", hint: "The item type, e.g. task." },
    { value: "linkto", label: "Links to", type: "link", hint: "Items linking to a page (currentpage / currentcollection / a GUID)." },
    { value: "backref", label: "Backlinked from", type: "link", hint: "Items referenced by a page GUID." }
  ];
  var ALIASES = {
    wip: ["flag", "inprogress"],
    page: ["type", "document"],
    record: ["type", "document"],
    tod: ["date", "today"],
    tom: ["date", "tomorrow"],
    yes: ["date", "yesterday"]
  };
  var has = /* @__PURE__ */ __name((list, v) => list.some((o) => o.value === v), "has");
  function newGroup(join = "and", items = []) {
    return { kind: "group", join, items };
  }
  __name(newGroup, "newGroup");
  var BARE = /^[\p{L}\p{N}_\-/]+$/u;
  var PLAIN_WORD = /^[\p{L}\p{N}_'.,:;?\-]+$/u;
  var RESERVED = /* @__PURE__ */ new Set(["and", "or", "not"]);
  function quote(s) {
    return `"${String(s ?? "").replace(/"/g, "")}"`;
  }
  __name(quote, "quote");
  function atom(s) {
    const v = String(s ?? "").trim().replace(/"/g, "");
    return BARE.test(v) && !RESERVED.has(v.toLowerCase()) ? v : `"${v}"`;
  }
  __name(atom, "atom");
  function isDateWord(s) {
    const v = s.toLowerCase();
    return DATE_PRESETS.some((p) => p.value === v) || /^(today|tomorrow|yesterday|tod|tom|yes|tonight)$/.test(v) || /^(next |last |-)?(mon|tue|tues|wed|thu|thur|thurs|fri|sat|sun)(day|nesday|rsday|urday)?$/.test(v) || /^\d{4}-\d{2}-\d{2}/.test(v) || /\b(ago|week|month|year|days?)\b/.test(v) || /^in \d+/.test(v);
  }
  __name(isDateWord, "isDateWord");
  function compareValue(v) {
    const s = String(v ?? "").trim();
    const at = /^@"?([^"]+)"?$/.exec(s);
    if (at && isDateWord(at[1])) return quote(at[1]);
    if (/^-?\d+(\.\d+)?$/.test(s)) return s;
    if (/^(currentpage|currentcollection)$/i.test(s)) return s.toLowerCase();
    if (/^@\S/.test(s)) return s.startsWith('@"') ? s : "@" + atom(s.slice(1));
    return quote(s);
  }
  __name(compareValue, "compareValue");
  function serializeCond(c) {
    const v = String(c.value ?? "").trim();
    switch (c.kind) {
      case "status":
      case "flag":
      case "type":
        return v ? "@" + v : "";
      case "date":
      case "person":
      case "collection":
        return v ? "@" + atom(v.replace(/^@/, "")) : "";
      case "tag": {
        let t = v.replace(/^#/, "").replace(/\s+/g, "");
        if (!t) return "";
        if (c.prefix && !/[/-]$/.test(t)) t += "/";
        if (!c.prefix) t = t.replace(/\/+$/, "");
        return "#" + t;
      }
      case "text": {
        if (!v) return "";
        if (c.exact) return quote(v);
        return v.split(/\s+/).map((w) => PLAIN_WORD.test(w) && !RESERVED.has(w.toLowerCase()) ? w : quote(w)).join(" ");
      }
      case "field":
        if (!c.coll || !c.field) return "";
        return `@${atom(c.coll)}.${atom(c.field)} ${c.op || "="} ${compareValue(c.value)}`;
      case "meta":
        if (!c.key) return "";
        return `@${c.key} ${c.op || "="} ${compareValue(c.value)}`;
      case "raw":
        return v;
      default:
        return "";
    }
  }
  __name(serializeCond, "serializeCond");
  function isCompound(s) {
    let depth = 0;
    let inQuote = false;
    const t = s.trim();
    for (let i = 0; i < t.length; i++) {
      const ch = t[i];
      if (ch === '"') inQuote = !inQuote;
      else if (inQuote) continue;
      else if (ch === "(") depth++;
      else if (ch === ")") depth--;
      else if (depth === 0 && /\s/.test(ch)) {
        if (/^@\S+\s*(!=|<=|>=|=|<|>)\s*\S+$/.test(t)) return false;
        return true;
      }
    }
    return false;
  }
  __name(isCompound, "isCompound");
  var paren = /* @__PURE__ */ __name((s) => `(${s})`, "paren");
  function serialize(node, ctx = {}) {
    if (node.kind === "group") {
      const g = (
        /** @type {Group} */
        node
      );
      const live = g.items.filter((it) => serialize(it, { siblings: 2 }) !== "");
      const parts = live.map((it) => serialize(it, { siblings: live.length }));
      if (!parts.length) return "";
      const body = parts.join(g.join === "or" ? " OR " : " AND ");
      const multi = parts.length > 1;
      if (g.not) return "NOT " + (multi || isCompound(body) ? paren(body) : body);
      if (multi && !ctx.root && (ctx.siblings ?? 2) > 1) return paren(body);
      return body;
    }
    const c = (
      /** @type {Cond} */
      node
    );
    const s = serializeCond(c);
    if (!s) return "";
    const compound = (c.kind === "text" || c.kind === "raw") && isCompound(s);
    if (c.not) return "NOT " + (compound ? paren(s) : s);
    return compound && (ctx.siblings ?? 1) > 1 ? paren(s) : s;
  }
  __name(serialize, "serialize");
  function toQuery(root) {
    return serialize(root, { root: true });
  }
  __name(toQuery, "toQuery");
  function tokenize(src) {
    const out = [];
    let i = 0;
    const n = src.length;
    const readQuoted = /* @__PURE__ */ __name(() => {
      const end = src.indexOf('"', i + 1);
      const stop = end === -1 ? n : end;
      const v = src.slice(i + 1, stop);
      i = end === -1 ? n : end + 1;
      return v;
    }, "readQuoted");
    while (i < n) {
      const ch = src[i];
      if (/\s/.test(ch)) {
        i++;
        continue;
      }
      if (ch === "(") {
        out.push({ t: "lp" });
        i++;
        continue;
      }
      if (ch === ")") {
        out.push({ t: "rp" });
        i++;
        continue;
      }
      const two = src.slice(i, i + 2);
      if (two === "&&") {
        out.push({ t: "and" });
        i += 2;
        continue;
      }
      if (two === "||") {
        out.push({ t: "or" });
        i += 2;
        continue;
      }
      if (two === "!=" || two === "<=" || two === ">=") {
        out.push({ t: "cmp", v: two });
        i += 2;
        continue;
      }
      if (ch === "!") {
        out.push({ t: "not" });
        i++;
        continue;
      }
      if (ch === "=" || ch === "<" || ch === ">") {
        out.push({ t: "cmp", v: ch });
        i++;
        continue;
      }
      if (ch === '"') {
        out.push({ t: "str", v: readQuoted() });
        continue;
      }
      if (ch === "@") {
        const start = i;
        i++;
        const parts = [];
        for (; ; ) {
          if (src[i] === '"') parts.push(readQuoted());
          else {
            const m2 = /^[^\s()"=!<>.]+/.exec(src.slice(i));
            if (!m2) break;
            parts.push(m2[0]);
            i += m2[0].length;
          }
          if (src[i] === "." && i + 1 < n && !/[\s()=!<>]/.test(src[i + 1])) {
            i++;
            continue;
          }
          break;
        }
        out.push({ t: "at", parts, raw: src.slice(start, i) });
        continue;
      }
      if (ch === "#") {
        const m2 = /^#[^\s()"]*/.exec(src.slice(i));
        const v = m2 ? m2[0] : "#";
        out.push({ t: "tag", v: v.slice(1) });
        i += v.length;
        continue;
      }
      const m = /^[^\s()"]+/.exec(src.slice(i));
      const w = m ? m[0] : ch;
      i += w.length;
      const lower = w.toLowerCase();
      if (lower === "and" || lower === "or" || lower === "not") out.push({ t: (
        /** @type {'and' | 'or' | 'not'} */
        lower
      ) });
      else out.push({ t: "word", v: w });
    }
    return out;
  }
  __name(tokenize, "tokenize");
  function parse(src, ctx = {}) {
    const text = String(src ?? "").trim();
    if (!text) return newGroup("and", []);
    try {
      const node = parseStrict(text, ctx);
      return node.kind === "group" && !node.not ? (
        /** @type {Group} */
        node
      ) : newGroup("and", [node]);
    } catch {
      return newGroup("and", [{ kind: "raw", value: text }]);
    }
  }
  __name(parse, "parse");
  function parseStrict(text, ctx) {
    const toks = tokenize(text);
    let p = 0;
    const peek = /* @__PURE__ */ __name(() => toks[p], "peek");
    const lowerSet = /* @__PURE__ */ __name((list) => new Map((list || []).map((s) => [s.toLowerCase(), s])), "lowerSet");
    const colls = lowerSet(ctx.collections);
    const users = lowerSet(ctx.users);
    const parseOr = /* @__PURE__ */ __name(() => {
      const items = [parseAnd()];
      while (peek()?.t === "or") {
        p++;
        items.push(parseAnd());
      }
      return combine("or", items);
    }, "parseOr");
    const parseAnd = /* @__PURE__ */ __name(() => {
      const items = [parseUnary()];
      for (; ; ) {
        const tk = peek();
        if (!tk || tk.t === "rp" || tk.t === "or") break;
        if (tk.t === "and") {
          p++;
          continue;
        }
        items.push(parseUnary());
      }
      return combine("and", items);
    }, "parseAnd");
    const parseUnary = /* @__PURE__ */ __name(() => {
      if (peek()?.t === "not") {
        p++;
        const inner = parseUnary();
        return { ...inner, not: !inner.not };
      }
      return parsePrimary();
    }, "parseUnary");
    const parsePrimary = /* @__PURE__ */ __name(() => {
      const tk = toks[p++];
      if (!tk) throw new Error("unexpected end");
      switch (tk.t) {
        case "lp": {
          const inner = parseOr();
          if (peek()?.t === "rp") p++;
          return inner.kind === "group" ? inner : newGroup("and", [inner]);
        }
        case "str":
          return { kind: "text", value: tk.v, exact: true };
        case "word":
          return { kind: "text", value: tk.v, exact: false };
        case "tag": {
          const prefix = /[/-]$/.test(tk.v);
          return { kind: "tag", value: tk.v.replace(/\/+$/, ""), prefix };
        }
        case "at": {
          const next = peek();
          if (next?.t === "cmp") {
            p++;
            const val = toks[p++];
            if (!val) throw new Error("missing value");
            const value = val.t === "str" ? val.v : val.t === "word" ? val.v : val.t === "at" ? val.raw : val.t === "tag" ? "#" + val.v : null;
            if (value == null) throw new Error("bad value");
            if (tk.parts.length === 2) return { kind: "field", coll: tk.parts[0], field: tk.parts[1], op: next.v, value };
            if (tk.parts.length === 1) return { kind: "meta", key: tk.parts[0].toLowerCase(), op: next.v, value };
            throw new Error("bad key");
          }
          if (tk.parts.length !== 1) return { kind: "raw", value: tk.raw };
          return atLeaf(tk.parts[0], colls, users);
        }
        default:
          throw new Error("unexpected token");
      }
    }, "parsePrimary");
    const root = parseOr();
    if (p < toks.length) throw new Error("trailing tokens");
    return root;
  }
  __name(parseStrict, "parseStrict");
  function atLeaf(word, colls, users) {
    const lower = word.toLowerCase();
    const alias = ALIASES[lower];
    if (alias) return { kind: alias[0], value: alias[1] };
    if (has(STATUS, lower)) return { kind: "status", value: lower };
    if (has(FLAGS, lower)) return { kind: "flag", value: lower };
    if (has(ITEM_TYPES, lower)) return { kind: "type", value: lower };
    if (lower === "me" || lower === "mention") return { kind: "person", value: lower };
    if (has(DATE_PRESETS, lower)) return { kind: "date", value: lower };
    const coll = colls.get(lower);
    if (coll) return { kind: "collection", value: coll };
    const user = users.get(lower);
    if (user) return { kind: "person", value: user };
    return { kind: "date", value: word };
  }
  __name(atLeaf, "atLeaf");
  function combine(join, items) {
    if (items.length === 1) return items[0];
    const flat = [];
    for (const it of items) {
      if (it.kind === "group" && /** @type {Group} */
      it.join === join && !it.not) flat.push(.../** @type {Group} */
      it.items);
      else flat.push(it);
    }
    return newGroup(join, flat);
  }
  __name(combine, "combine");
  var EXAMPLES = [
    { q: "@todo @today", label: "Open tasks dated today" },
    { q: "@due AND (@today OR @overdue)", label: "Due today or already overdue" },
    { q: "@overdue @unassigned", label: "Overdue and nobody owns them" },
    { q: "@todo AND NOT @scheduled", label: "Open tasks not yet planned on a journal" },
    { q: "@todo AND (@me OR @scheduled = @me)", label: "My tasks \u2014 mentioned or on my journal" },
    { q: "@task @thisweek", label: "Tasks with a date this week" },
    { q: '@due <= "today"', label: "Due on or before today" },
    { q: "#ideas @todo", label: "Open tasks tagged #ideas" },
    { q: "#project/ @task @overdue", label: "Overdue tasks under any #project/ tag" },
    { q: "(#upnext OR @important) AND NOT @done", label: "Flagged items still open" },
    { q: '@modified_at >= "yesterday" @page', label: "Pages changed since yesterday" },
    { q: "@created_by = @me @thismonth", label: "Things I made this month" },
    { q: "@starred OR @important", label: "Starred or important" },
    { q: '"release notes"', label: 'The exact phrase "release notes"' },
    { q: '@link = "github"', label: "Items linking to GitHub" },
    { q: "@linkto = currentpage", label: "Everything linking to the current page" }
  ];
  var CHEAT_SHEET = [
    { title: "Combine", rows: [
      { token: "a b", hint: "Both \u2014 terms side by side mean AND." },
      { token: "a OR b", hint: "Either one. Also ||." },
      { token: "NOT a", hint: "Exclude. Also !." },
      { token: "( \u2026 )", hint: "Group: @due AND (@today OR @overdue)." },
      { token: '"exact phrase"', hint: "Quotes match words together, in order." }
    ] },
    { title: "Tags", rows: [
      { token: "#ideas", hint: "Exactly this tag." },
      { token: "#project/", hint: "This tag and everything under it." }
    ] },
    { title: "Tasks", rows: [
      ...STATUS.map((o) => ({ token: "@" + o.value, hint: o.hint })),
      ...FLAGS.map((o) => ({ token: "@" + o.value, hint: o.hint }))
    ] },
    { title: "Dates", rows: [
      ...DATE_PRESETS.map((o) => ({ token: "@" + o.value, hint: o.hint })),
      { token: '@"next monday"', hint: "Quote anything with spaces." },
      { token: '@"5 days ago"', hint: "Relative durations work too." },
      { token: '@"monday to friday"', hint: "Explicit ranges." },
      { token: "@2026-01-01", hint: "ISO dates." }
    ] },
    { title: "People & places", rows: [
      { token: "@me", hint: "Mentions you." },
      { token: "@mention", hint: "Mentions anyone." },
      { token: "@alice", hint: "Mentions a user (fuzzy-matched)." },
      { token: '@"Road Map"', hint: "Inside a collection." }
    ] },
    { title: "Compare", rows: [
      { token: '@due <= "today"', hint: "Built-in keys: due, created_at, modified_at, created_by\u2026" },
      { token: '@Project.status = "Done"', hint: "A collection field. Quote names with spaces." },
      { token: '@Project.owner = ""', hint: 'Field is empty. Use != "" for "is set".' },
      { token: "@Project.points >= 3", hint: "Numbers and dates support < <= > >=." }
    ] },
    { title: "Item types", rows: ITEM_TYPES.map((o) => ({ token: "@" + o.value, hint: o.hint })) }
  ];

  // nl.js
  var WEEKDAY = "(?:mon|tues|wednes|thurs|fri|satur|sun)day";
  var MONTH_LONG = "(?:january|february|march|april|june|july|august|september|october|november|december)";
  var MONTH_SHORT = "(?:jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)";
  var UNIT = "(?:days?|weeks?|months?|years?)";
  var DATE_SRC = [
    "today",
    "tonight",
    "tomorrow",
    "yesterday",
    "(?:this|next|last) (?:week|month|year)",
    `(?:next|last|this|coming) ${WEEKDAY}`,
    WEEKDAY,
    `in \\d+ ${UNIT}`,
    `\\d+ ${UNIT} ago`,
    `(?:the )?(?:last|past|next) \\d+ ${UNIT}`,
    `within (?:the next )?\\d+ ${UNIT}`,
    `${MONTH_SHORT}[a-z]* \\d{1,2}(?:st|nd|rd|th)?`,
    `\\d{1,2}(?:st|nd|rd|th)? (?:of )?${MONTH_SHORT}[a-z]*`,
    "\\d{4}-\\d{2}-\\d{2}",
    MONTH_LONG,
    "week \\d{1,2}",
    "(?:this|next|last) weekend",
    "weekend",
    "soon",
    "upcoming",
    "coming up",
    "(?:the )?(?:next|coming) (?:few|couple(?: of)?) days",
    "later this week",
    "(?:the )?rest of (?:the|this) week",
    "earlier this week",
    "(?:the )?end of (?:the|this) week",
    "this morning",
    "this afternoon",
    "this evening"
  ].join("|");
  var FILLER = new Set(`
show me find get list give all any every the a an that which who whom are is were was be been being
with have has had and items item things thing stuff everything anything of to i want need see look
looking for please can could you from in on there where whose ones those these some just only also
plus either or but by at it its them they what entries entry results result lines line would like
let us we our something somewhere stuff ones whatever kinds kind sort type types into out up me
my mine your am do does did so very really maybe currently right now still yet ever already
someone somebody anyone anybody everyone everybody
`.trim().split(/\s+/));
  var esc = /* @__PURE__ */ __name((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "esc");
  function dateValue(raw) {
    let s = raw.trim().replace(/\s+/g, " ");
    if (s === "tonight" || /^this (morning|afternoon|evening)$/.test(s)) return "today";
    const NAMED = {
      weekend: "saturday to sunday",
      "this weekend": "saturday to sunday",
      "next weekend": "next saturday to next sunday",
      "last weekend": "last saturday to last sunday",
      soon: "today to in 7 days",
      upcoming: "today to in 7 days",
      "coming up": "today to in 7 days",
      "later this week": "today to sunday",
      "rest of the week": "today to sunday",
      "the rest of the week": "today to sunday",
      "rest of this week": "today to sunday",
      "the rest of this week": "today to sunday",
      "earlier this week": "monday to today",
      "end of the week": "friday",
      "the end of the week": "friday",
      "end of this week": "friday",
      "the end of this week": "friday"
    };
    if (NAMED[s]) return NAMED[s];
    if (/^(?:the )?(?:next|coming) (?:few|couple(?: of)?) days$/.test(s)) return "today to in 3 days";
    const squashed = s.replace(/ /g, "");
    if (DATE_PRESETS.some((p) => p.value === squashed)) return squashed;
    s = s.replace(/^coming /, "next ");
    const within = /^within (?:the next )?(\d+) (\w+)$/.exec(s);
    if (within) return `today to in ${within[1]} ${within[2]}`;
    const span = /^(?:the )?(last|past|next) (\d+) (\w+)$/.exec(s);
    if (span) return span[1] === "next" ? `today to in ${span[2]} ${span[3]}` : `${span[2]} ${span[3]} ago to today`;
    return s;
  }
  __name(dateValue, "dateValue");
  var TIME = "(?:\\d{1,2}(?::\\d{2})?\\s?(?:am|pm)|\\d{1,2}:\\d{2}|noon|midnight|morning|afternoon|evening|night)";
  var DAY = [
    "today",
    "tomorrow",
    "yesterday",
    "tod",
    "tom",
    "yes",
    "(?:this|next|last)\\s?(?:week|month|year)",
    `(?:next|last|-)\\s?${WEEKDAY}`,
    WEEKDAY,
    "(?:mon|tue|tues|wed|thu|thur|thurs|fri|sat|sun)",
    `(?:in )?\\d+ ${UNIT}(?: ago)?`,
    `${MONTH_SHORT}[a-z]*\\s?\\d{1,2}(?:st|nd|rd|th)?`,
    `${MONTH_SHORT}[a-z]*`,
    "week \\d{1,2}(?: of \\d{4})?",
    "\\d{4}-\\d{2}-\\d{2}"
  ].join("|");
  var POINT = `(?:(?:${DAY})(?:\\s${TIME})?|${TIME}(?:\\s(?:${DAY}))?)`;
  var THYMER_DATE = new RegExp(`^(?:${POINT})(?: to (?:${POINT}))?$`);
  function normalizeDate(raw) {
    const v = dateValue(String(raw ?? "").toLowerCase());
    if (!v) return null;
    if (DATE_PRESETS.some((p) => p.value === v)) return v;
    return THYMER_DATE.test(v) ? v : null;
  }
  __name(normalizeDate, "normalizeDate");
  function dateCompare(raw, past = false) {
    let v = dateValue(raw);
    if (past && new RegExp(`^${WEEKDAY}$`).test(v)) v = `last ${v}`;
    return v;
  }
  __name(dateCompare, "dateCompare");
  function agoValue(raw) {
    const s = raw.trim().replace(/^(?:the )?(?:last|past) /, "");
    const m = /^(a|an|one|\d+) (day|week|month|year)s?$/.exec(s);
    if (!m) return null;
    const n = /^\d+$/.test(m[1]) ? m[1] : "1";
    return `${n} ${m[2]}${n === "1" ? "" : "s"} ago`;
  }
  __name(agoValue, "agoValue");
  var W = /* @__PURE__ */ __name((src) => new RegExp(`(?<![\\w#@])(?:${src})(?![\\w])`, "g"), "W");
  var status = /* @__PURE__ */ __name((value, not = false) => [{ kind: "status", value, ...not ? { not: true } : {} }], "status");
  var flag = /* @__PURE__ */ __name((value) => [{ kind: "flag", value }], "flag");
  var type = /* @__PURE__ */ __name((value) => [{ kind: "type", value }], "type");
  function person(ctx, name) {
    const n = name.toLowerCase();
    if (n === "me" || n === "i" || n === "myself") return "me";
    return ctx.users.find((u) => u.toLowerCase() === n || u.toLowerCase().split(/\s+/)[0] === n) || name;
  }
  __name(person, "person");
  var PERSON = "me|myself|[a-z][a-z'-]+";
  var LEADING_RULES = 3;
  var STATIC_RULES = [
    // Literal syntax the user already knows wins outright.
    { kind: "text", re: /"([^"]+)"/g, make: /* @__PURE__ */ __name((m) => [{ kind: "text", value: m[1], exact: true }], "make") },
    { kind: "tag", re: /(?<![\w])(?:(?:tagged(?: with)?|tags?|labell?ed|with (?:the )?tag)\s+)?#([\w/-]+)/g, make: /* @__PURE__ */ __name((m) => [{ kind: "tag", value: m[1].replace(/\/+$/, ""), prefix: /\/$/.test(m[1]) }], "make") },
    // "under X" explicitly means a tag family, so it outranks workspace names.
    { kind: "tag", re: W(`(?:anything |everything )?(?:under|within) (?:the )?(?:tag )?#?([\\w-]+)(?: tag)?`), make: /* @__PURE__ */ __name((m) => [{ kind: "tag", value: m[1], prefix: true }], "make") },
    // Due-date comparisons before plain "due" and plain dates.
    { kind: "meta", re: W(`due (?:before|by|until|no later than|on or before) (${DATE_SRC})`), make: /* @__PURE__ */ __name((m) => [{ kind: "meta", key: "due", op: "<=", value: dateCompare(m[1]) }], "make") },
    { kind: "meta", re: W(`due (?:after|from|on or after) (${DATE_SRC})`), make: /* @__PURE__ */ __name((m) => [{ kind: "meta", key: "due", op: ">=", value: dateCompare(m[1]) }], "make") },
    { kind: "date", re: W(`due (?:on |for |in |within )?(${DATE_SRC})`), make: /* @__PURE__ */ __name((m) => [...status("due"), { kind: "date", value: dateValue(m[1]) }], "make") },
    // Tasks with no deadline at all.
    { kind: "status", re: W(`(?:with ?out|with no|no|lacking|missing) (?:a |any )?(?:due dates?|deadlines?)|undated|no deadline`), make: /* @__PURE__ */ __name(() => [...status("task"), ...status("due", true)], "make") },
    // "my notes" — pages I wrote, not pages that mention me.
    { kind: "meta", re: W(`my (?:own )?(?:pages?|notes?|docs?|documents?|writing)`), make: /* @__PURE__ */ __name(() => [...type("document"), { kind: "meta", key: "created_by", op: "=", value: "@me" }], "make") },
    // Staleness and recency.
    { kind: "meta", re: W(`not (?:been )?(?:edited|updated|touched|changed|modified|looked at) (?:in|for|since) (?:over )?((?:the )?(?:last|past) )?(a|an|one|\\d+) (day|week|month|year)s?`), make: /* @__PURE__ */ __name((m) => [{ kind: "meta", key: "modified_at", op: "<", value: (
      /** @type {string} */
      agoValue(`${m[2]} ${m[3]}`)
    ) }], "make") },
    { kind: "meta", re: W(`stale|untouched|neglected|forgotten|abandoned|dusty|old`), make: /* @__PURE__ */ __name(() => [{ kind: "meta", key: "modified_at", op: "<", value: "30 days ago" }], "make") },
    { kind: "meta", re: W(`(?:(?:recently|lately) (?:edited|modified|changed|updated)|(?:edited|modified|changed|updated) recently)`), make: /* @__PURE__ */ __name(() => [{ kind: "meta", key: "modified_at", op: ">=", value: "7 days ago" }], "make") },
    { kind: "meta", re: W(`recent|recently|lately|fresh`), make: /* @__PURE__ */ __name(() => [{ kind: "meta", key: "modified_at", op: ">=", value: "7 days ago" }], "make") },
    { kind: "meta", re: W(`new|newly (?:created|added)|just (?:created|added)`), make: /* @__PURE__ */ __name(() => [{ kind: "meta", key: "created_at", op: ">=", value: "7 days ago" }], "make") },
    // Who made / changed it.
    { kind: "meta", re: W(`(?:i|that i|which i) (?:made|created|wrote|added|started)`), make: /* @__PURE__ */ __name(() => [{ kind: "meta", key: "created_by", op: "=", value: "@me" }], "make") },
    { kind: "meta", re: W(`(?:created|made|added|written|started) by (${PERSON})`), make: /* @__PURE__ */ __name((m, ctx) => {
      const p = person(ctx, m[1]);
      return [{ kind: "meta", key: "created_by", op: "=", value: p === "me" ? "@me" : p }];
    }, "make") },
    { kind: "meta", re: W(`(?:edited|modified|changed|updated|touched) by (${PERSON})`), make: /* @__PURE__ */ __name((m, ctx) => {
      const p = person(ctx, m[1]);
      return [{ kind: "meta", key: "modified_by", op: "=", value: p === "me" ? "@me" : p }];
    }, "make") },
    // When it was made / changed.
    { kind: "meta", re: W(`(created|made|added|written|new|edited|modified|changed|updated|touched) (since|after|before|on|in|during|within)? ?(${DATE_SRC})`), make: /* @__PURE__ */ __name((m) => {
      const key = /^(created|made|added|written|new)$/.test(m[1]) ? "created_at" : "modified_at";
      const op = m[2] === "since" || m[2] === "after" ? ">=" : m[2] === "before" ? "<" : "=";
      return [{ kind: "meta", key, op, value: dateCompare(m[3], op === ">=") }];
    }, "make") },
    // Journal planning.
    { kind: "meta", re: W(`on my journal|scheduled for me|planned for me|on my (?:calendar|plan|agenda)`), make: /* @__PURE__ */ __name(() => [{ kind: "meta", key: "scheduled", op: "=", value: "@me" }], "make") },
    { kind: "status", re: W(`not (?:yet )?(?:scheduled|planned)|unscheduled|unplanned`), make: /* @__PURE__ */ __name(() => status("scheduled", true), "make") },
    { kind: "status", re: W(`scheduled|planned`), make: /* @__PURE__ */ __name(() => status("scheduled"), "make") },
    // Ownership.
    {
      kind: "person",
      re: W(`(?:that |which )?(?:i'?m|i am) not responsible for|not (?:my )?responsib(?:le|ility)|not mine|not (?:assigned to|for) me|(?:someone|somebody) else'?s|assigned to (?:others|someone else|other people)|other people'?s`),
      make: /* @__PURE__ */ __name(() => [...status("assigned"), { kind: "person", value: "me", not: true }], "make")
    },
    { kind: "person", re: W(`(?:that |which )?(?:i'?m|i am) responsible for|my responsibilit(?:y|ies)|(?:that )?i own|owned by me`), make: /* @__PURE__ */ __name(() => [{ kind: "person", value: "me" }], "make") },
    { kind: "status", re: W(`unassigned|assigned to (?:nobody|no one|noone)|not assigned|without (?:an )?(?:owner|assignee)|nobody'?s|no owner`), make: /* @__PURE__ */ __name(() => status("unassigned"), "make") },
    { kind: "person", re: W(`(?:assigned to|mentioning|that mention|which mention|mention|for|owned by|belonging to|about) (me|myself)|my|mine`), make: /* @__PURE__ */ __name(() => [{ kind: "person", value: "me" }], "make") },
    { kind: "person", re: W(`(?:assigned to|mentioning|that mention|which mention|owned by|belonging to) (${PERSON})`), make: /* @__PURE__ */ __name((m, ctx) => [{ kind: "person", value: person(ctx, m[1]) }], "make") },
    { kind: "person", re: W(`(?:mentioning|that mention|with) (?:anyone|someone|somebody|people)|with mentions`), make: /* @__PURE__ */ __name(() => [{ kind: "person", value: "mention" }], "make") },
    { kind: "status", re: W(`assigned`), make: /* @__PURE__ */ __name(() => status("assigned"), "make") },
    // Task state.
    { kind: "status", re: W(`not (?:yet )?(?:done|finished|completed|complete|closed)|unfinished|incomplete|undone|open|outstanding|pending|remaining|left to do|still to do|to do|todo`), make: /* @__PURE__ */ __name(() => status("todo"), "make") },
    { kind: "status", re: W(`overdue|late|past due|missed|behind`), make: /* @__PURE__ */ __name(() => status("overdue"), "make") },
    { kind: "status", re: W(`done|completed|finished|complete|closed|checked off|ticked off`), make: /* @__PURE__ */ __name(() => status("done"), "make") },
    { kind: "status", re: W(`with (?:a )?due dates?|(?:that )?(?:have|has) (?:a )?due dates?|with (?:a )?deadlines?|deadlines?|due`), make: /* @__PURE__ */ __name(() => status("due"), "make") },
    // Flags.
    { kind: "flag", re: W(`in progress|in-progress|wip|working on|being worked on|started|ongoing|doing`), make: /* @__PURE__ */ __name(() => flag("inprogress"), "make") },
    { kind: "flag", re: W(`waiting(?: on| for)?|blocked|on hold|stuck`), make: /* @__PURE__ */ __name(() => flag("waiting"), "make") },
    { kind: "flag", re: W(`important|urgent|high[- ]priority|priority|critical|asap`), make: /* @__PURE__ */ __name(() => flag("important"), "make") },
    { kind: "flag", re: W(`starred|stars?|favou?rites?|favou?rited`), make: /* @__PURE__ */ __name(() => flag("starred"), "make") },
    { kind: "flag", re: W(`to discuss|for discussion|discussion|discuss`), make: /* @__PURE__ */ __name(() => flag("discuss"), "make") },
    { kind: "flag", re: W(`billable|billing|to bill|invoiceable`), make: /* @__PURE__ */ __name(() => flag("billing"), "make") },
    { kind: "flag", re: W(`alerts?|flagged`), make: /* @__PURE__ */ __name(() => flag("alert"), "make") },
    // Links.
    { kind: "meta", re: W(`(?:that )?(?:link|links|linking|point|pointing|refer|referring|referencing) (?:to |back to )?(?:this|the current) page|backlinks?|linking here|that link here`), make: /* @__PURE__ */ __name(() => [{ kind: "meta", key: "linkto", op: "=", value: "currentpage" }], "make") },
    { kind: "meta", re: W(`(?:with )?(?:links?|urls?) (?:to|from|containing|with) ([\\w.-]+)|linking to ([\\w.-]+)`), make: /* @__PURE__ */ __name((m) => [{ kind: "meta", key: "link", op: "=", value: m[1] || m[2] }], "make") },
    // Tags, phrased in words.
    { kind: "tag", re: W(`(?:tagged(?: with)?|tags?|labell?ed|with (?:the )?tag) #?([\\w/-]+)`), make: /* @__PURE__ */ __name((m) => [{ kind: "tag", value: m[1].replace(/\/+$/, ""), prefix: /\/$/.test(m[1]) }], "make") },
    // Tasks themselves (dropped later if a more specific task filter exists).
    { kind: "status", re: W(`tasks?|to-dos?|todos|action items?|checkboxes|checklist items?`), make: /* @__PURE__ */ __name(() => status("task"), "make") },
    // Item types.
    { kind: "type", re: W(`pages?|notes?|documents?|docs?|records?|articles?`), make: /* @__PURE__ */ __name(() => type("document"), "make") },
    { kind: "type", re: W(`headings?|headers?|sections?`), make: /* @__PURE__ */ __name(() => type("heading"), "make") },
    { kind: "type", re: W(`images?|pictures?|photos?|screenshots?|pics?`), make: /* @__PURE__ */ __name(() => type("image"), "make") },
    { kind: "type", re: W(`files?|attachments?|pdfs?|uploads?`), make: /* @__PURE__ */ __name(() => type("file"), "make") },
    { kind: "type", re: W(`quotes?|quotations?|blockquotes?`), make: /* @__PURE__ */ __name(() => type("quote"), "make") },
    { kind: "type", re: W(`bullets?|bullet points?|list items?`), make: /* @__PURE__ */ __name(() => type("list"), "make") },
    // Open-ended dates: "before friday", "since monday".
    { kind: "meta", re: W(`(?:before|until|till|by|prior to|no later than) (${DATE_SRC})`), make: /* @__PURE__ */ __name((m) => [{ kind: "meta", key: "date", op: "<=", value: dateCompare(m[1]) }], "make") },
    { kind: "meta", re: W(`(?:since|after|starting) (${DATE_SRC})`), make: /* @__PURE__ */ __name((m) => [{ kind: "meta", key: "date", op: ">=", value: dateCompare(m[1], true) }], "make") },
    // Dates last: "between X and Y", then any bare date.
    { kind: "date", re: W(`between (${DATE_SRC}) and (${DATE_SRC})`), make: /* @__PURE__ */ __name((m) => [{ kind: "date", value: `${dateValue(m[1])} to ${dateValue(m[2])}` }], "make") },
    { kind: "date", re: W(`(?:from|on|for|dated|during|within|in|this coming)? ?(${DATE_SRC})`), make: /* @__PURE__ */ __name((m) => [{ kind: "date", value: dateValue(m[1]) }], "make") }
  ];
  function contextRules(ctx, lower) {
    const rules = [];
    const colls = [...ctx.collections].sort((a, b) => b.name.length - a.name.length);
    for (const coll of colls) {
      for (const f of coll.fields) {
        if (!f.label || f.label.length < 2) continue;
        const label = esc(f.label.toLowerCase());
        const choices = [...f.choices].sort((a, b) => b.length - a.length).map((c) => esc(c.toLowerCase()));
        const valueSrc = [
          "empty|blank|unset|not set|missing|set|filled(?: in)?|not empty",
          ...choices,
          '"[^"]+"',
          "-?\\d+(?:\\.\\d+)?",
          ...f.type === "datetime" ? [DATE_SRC] : [],
          ...f.type === "text" || f.type === "user" || !choices.length ? ["[\\w@][\\w.'-]*"] : []
        ].join("|");
        const opSrc = "is not|isn't|is|=|!=|equals|of|set to|at least|at most|more than|less than|over|under|above|below|before|after|>=|<=|>|<|:";
        rules.push({
          kind: "field",
          re: W(`(?:where |whose |with |that have |which have )?(?:the |a |an )?(?:${esc(coll.name.toLowerCase())}(?:'s)? )?${label} (${opSrc}) (${valueSrc})`),
          make: /* @__PURE__ */ __name((m) => {
            const word = m[1];
            let raw = m[2].replace(/^"|"$/g, "");
            let op = /^(is not|isn't|!=)$/.test(word) ? "!=" : /^(at least|>=)$/.test(word) ? ">=" : /^(at most|<=)$/.test(word) ? "<=" : /^(more than|over|above|after|>)$/.test(word) ? ">" : /^(less than|under|below|before|<)$/.test(word) ? "<" : "=";
            if (/^(empty|blank|unset|not set|missing)$/.test(raw)) {
              raw = "";
            } else if (/^(set|filled(?: in)?|not empty)$/.test(raw)) {
              raw = "";
              op = op === "!=" ? "=" : "!=";
            } else {
              const choice = f.choices.find((c) => c.toLowerCase() === raw);
              if (choice) raw = choice;
              else if (f.type === "datetime") raw = dateCompare(raw);
            }
            return [{ kind: "field", coll: coll.name, field: f.label, op, value: raw }];
          }, "make")
        });
      }
    }
    const names = ctx.users.flatMap((u) => [u, u.split(/\s+/)[0]]).filter((n) => n && n.length > 1).map((n) => n.toLowerCase()).sort((a, b) => b.length - a.length).map(esc);
    if (names.length) {
      const who = [...new Set(names)].join("|");
      rules.push({
        kind: "meta",
        re: W(`(?:written |made |created |added )?by (${who})`),
        make: /* @__PURE__ */ __name((m, c) => [{ kind: "meta", key: "created_by", op: "=", value: person(c, m[1]) }], "make")
      });
      rules.push({
        kind: "person",
        re: W(`(?:(?:assigned to|mentioning|that mention|which mention|owned by|belonging to|for|with|from) )?(${[...new Set(names)].join("|")})(?:'s)?`),
        make: /* @__PURE__ */ __name((m, c) => [{ kind: "person", value: person(c, m[1]) }], "make")
      });
    }
    for (const coll of colls) {
      if (!nameVariants(coll.name).some((v) => mentions(lower, v))) continue;
      for (const f of coll.fields) {
        for (const ch of [...f.choices].sort((a, b) => b.length - a.length)) {
          const c = ch.toLowerCase();
          if (c.length < 3 || RESERVED2.has(c)) continue;
          rules.push({ kind: "field", re: W(esc(c)), make: /* @__PURE__ */ __name(() => [{ kind: "field", coll: coll.name, field: f.label, op: "=", value: ch }], "make") });
        }
      }
    }
    for (const coll of colls) {
      const alts = nameVariants(coll.name).map(esc).join("|");
      rules.push({
        kind: "collection",
        re: W(`(?:in|from|inside|within)? ?(?:the |my |our )?(?:${alts})(?: collection| database| list)?`),
        make: /* @__PURE__ */ __name(() => [{ kind: "collection", value: coll.name }], "make")
      });
    }
    const tagSet = new Set(ctx.tags.map((t) => t.toLowerCase()));
    const parents = new Set([...tagSet].filter((t) => t.includes("/")).flatMap((t) => {
      const parts = t.split("/");
      return parts.slice(0, -1).map((_, i) => parts.slice(0, i + 1).join("/"));
    }));
    const collNames = new Set(colls.flatMap((c) => nameVariants(c.name)));
    const words = [.../* @__PURE__ */ new Set([...tagSet, ...parents])].filter((t) => t.length >= 3 && !RESERVED2.has(t) && !collNames.has(t) && !FILLER.has(t)).sort((a, b) => b.length - a.length);
    if (words.length) {
      rules.push({
        kind: "tag",
        re: W(`(?:the )?(${words.map(esc).join("|")})(?: tags?| stuff| things| items)?`),
        make: /* @__PURE__ */ __name((m) => [{ kind: "tag", value: m[1], ...parents.has(m[1]) ? { prefix: true } : {} }], "make")
      });
    }
    return rules;
  }
  __name(contextRules, "contextRules");
  function nameVariants(name) {
    const n = name.toLowerCase();
    const out = /* @__PURE__ */ new Set([n]);
    if (/s$/.test(n) && n.length > 3) out.add(n.replace(/s$/, ""));
    else out.add(`${n}s`);
    return [...out];
  }
  __name(nameVariants, "nameVariants");
  var mentions = /* @__PURE__ */ __name((lower, word) => new RegExp(`(?<![\\w])${esc(word)}(?![\\w])`).test(lower), "mentions");
  var KEYWORDS = `
task tasks todo todos done finished completed complete open closed overdue late due deadline deadlines
assigned unassigned scheduled planned unscheduled unplanned important urgent priority critical starred
favorite favourite waiting blocked progress started ongoing discuss billable billing alert flagged
page pages note notes document documents docs heading headings image images picture pictures photo photos
file files attachment attachments quote quotes bullet bullets tagged tag tags mentioning mention
created modified edited updated changed today tomorrow yesterday tonight week weekend month year
monday tuesday wednesday thursday friday saturday sunday january february march april june july august
september october november december recent recently stale untouched neglected forgotten upcoming soon
before after since until between within linking links link anyone someone nobody pending outstanding
remaining incomplete unfinished morning afternoon evening
`.trim().split(/\s+/);
  var RESERVED2 = /* @__PURE__ */ new Set([...KEYWORDS, ...FILLER]);
  function editDistance(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      let rowMin = Infinity;
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
        rowMin = Math.min(rowMin, d[i][j]);
      }
      if (rowMin > max) return max + 1;
    }
    return d[a.length][b.length];
  }
  __name(editDistance, "editDistance");
  function vocabulary(ctx) {
    const out = new Set(KEYWORDS);
    for (const c of ctx.collections) {
      for (const v of nameVariants(c.name)) for (const w of v.split(/\s+/)) out.add(w);
      for (const f of c.fields) {
        for (const w of f.label.toLowerCase().split(/\s+/)) out.add(w);
        for (const ch of f.choices) for (const w of ch.toLowerCase().split(/\s+/)) out.add(w);
      }
    }
    for (const u of ctx.users) for (const w of u.toLowerCase().split(/\s+/)) out.add(w);
    for (const t of ctx.tags) out.add(t.toLowerCase());
    return [...out].filter((w) => w.length >= 3);
  }
  __name(vocabulary, "vocabulary");
  function correct(word, vocab) {
    if (word.length < 4 || /\d/.test(word)) return null;
    const max = word.length >= 7 ? 2 : 1;
    let best = null;
    let bestD = max + 1;
    for (const v of vocab) {
      if (v[0] !== word[0] || v === word) continue;
      const d = editDistance(word, v, max);
      if (d < bestD) {
        best = v;
        bestD = d;
      }
    }
    return best;
  }
  __name(correct, "correct");
  var NEGATION = /(?:^|\s)(not|without|except|excluding|but not|no|never|isn'?t|aren'?t|minus)\s+$/;
  var OR_GAP = /^[\s,]*(?:or|either|and\/or)[\s,]*$/;
  var TEXT_TRIGGER = /(?:^|\s)(containing|contains|with the words?|with text|that say|that says|saying|about|regarding|called|named|titled|mentioning|including|includes|matching)\s+(.+)$/;
  function parseNatural(input, context = {}) {
    const ctx = { collections: context.collections || [], users: context.users || [], tags: context.tags || [] };
    const text = String(input ?? "");
    const first = matchAll(text, text.toLowerCase(), ctx);
    if (!first.unknown.length) return finish(first, text);
    const vocab = vocabulary(ctx);
    const fixes = [];
    for (const u of first.unknown) {
      const to = correct(u.text.toLowerCase(), vocab);
      if (to) fixes.push({ s: u.start, e: u.end, to });
    }
    if (!fixes.length) return finish(first, text);
    let fixed = "";
    const segs = [];
    let at = 0;
    for (const f of fixes) {
      if (f.s > at) {
        segs.push({ cs: fixed.length, ce: fixed.length + (f.s - at), os: at, oe: f.s, swap: false });
        fixed += text.slice(at, f.s).toLowerCase();
      }
      segs.push({ cs: fixed.length, ce: fixed.length + f.to.length, os: f.s, oe: f.e, swap: true });
      fixed += f.to;
      at = f.e;
    }
    if (at < text.length) {
      segs.push({ cs: fixed.length, ce: fixed.length + (text.length - at), os: at, oe: text.length, swap: false });
      fixed += text.slice(at).toLowerCase();
    }
    const back = /* @__PURE__ */ __name((p, isEnd) => {
      for (const g of segs) {
        if (p < g.cs || p > g.ce || p === g.ce && !isEnd && g.ce !== fixed.length) continue;
        if (g.swap) return isEnd ? g.oe : g.os;
        return g.os + (p - g.cs);
      }
      return Math.min(p, text.length);
    }, "back");
    const second = matchAll(fixed, fixed, ctx, text);
    for (const mt of second.matches) {
      mt.start = back(mt.start, false);
      mt.end = back(mt.end, true);
    }
    for (const u of second.unknown) {
      u.start = back(u.start, false);
      u.end = back(u.end, true);
      u.text = text.slice(u.start, u.end);
    }
    return finish(second, text);
  }
  __name(parseNatural, "parseNatural");
  function finish(r, text) {
    const matches = [...r.matches];
    const runs = [];
    for (const u of r.unknown) {
      const last = runs[runs.length - 1];
      const prev = last?.[last.length - 1];
      if (prev && /^\s+$/.test(text.slice(prev.end, u.start))) last.push(u);
      else runs.push([u]);
    }
    for (const run of runs) {
      const start = run[0].start;
      const end = run[run.length - 1].end;
      const value = text.slice(start, end).trim();
      matches.push({ start, end, kind: "text", conds: [{ kind: "text", value, exact: run.length > 1 }] });
    }
    matches.sort((a, b) => a.start - b.start);
    const seen = /* @__PURE__ */ new Set();
    for (const mt of matches) {
      mt.conds = mt.conds.filter((c) => {
        const key = JSON.stringify([c.kind, c.value, c.key, c.op, c.coll, c.field, !!c.not, !!c.prefix]);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }
    return { root: buildTree(matches, text.toLowerCase()), matches, unknown: [] };
  }
  __name(finish, "finish");
  function matchAll(text, lower, ctx, original) {
    const matches = [];
    const taken = new Uint8Array(lower.length);
    const free = /* @__PURE__ */ __name((s, e) => {
      for (let i = s; i < e; i++) if (taken[i]) return false;
      return true;
    }, "free");
    const claim = /* @__PURE__ */ __name((s, e) => {
      for (let i = s; i < e; i++) taken[i] = 1;
    }, "claim");
    for (const rule of [...STATIC_RULES.slice(0, LEADING_RULES), ...contextRules(ctx, lower), ...STATIC_RULES.slice(LEADING_RULES)]) {
      rule.re.lastIndex = 0;
      let m;
      while (m = rule.re.exec(lower)) {
        if (!m[0]) {
          rule.re.lastIndex++;
          continue;
        }
        const lead = m[0].length - m[0].trimStart().length;
        const start = m.index + lead;
        const end = m.index + m[0].trimEnd().length;
        if (end <= start || !free(start, end)) continue;
        const conds = rule.make(m, ctx);
        if (!conds || !conds.length) continue;
        claim(start, end);
        matches.push({ start, end, kind: rule.kind, conds });
      }
    }
    matches.sort((a, b) => a.start - b.start);
    for (const seg of gaps(lower, taken)) {
      const tm = TEXT_TRIGGER.exec(seg.text);
      if (!tm) continue;
      const words = tm[2].split(/\s+/).filter((w) => w && !FILLER.has(w.replace(/[^\w'-]/g, "")));
      if (!words.length) continue;
      const phraseStart = seg.start + seg.text.lastIndexOf(tm[2]);
      const triggerStart = seg.start + tm.index + (tm[0].length - tm[0].trimStart().length);
      const value = text.slice(phraseStart, seg.end).trim().replace(/[.,!?]+$/, "");
      claim(triggerStart, seg.end);
      matches.push({ start: triggerStart, end: seg.end, kind: "text", conds: [{ kind: "text", value, exact: value.includes(" ") }] });
    }
    matches.sort((a, b) => a.start - b.start);
    let prevEnd = 0;
    for (const mt of matches) {
      const before = lower.slice(prevEnd, mt.start);
      const neg = NEGATION.exec(before);
      if (neg && !(mt.kind === "status" && mt.conds[0].not)) {
        mt.start = prevEnd + neg.index + (neg[0].length - neg[0].trimStart().length);
        for (const c of mt.conds) c.not = !c.not;
        claim(mt.start, mt.end);
      }
      prevEnd = mt.end;
    }
    const specific = matches.some((mt) => mt.conds.some((c) => !c.not && (c.kind === "status" && c.value !== "task" || c.kind === "flag")));
    for (const mt of matches) {
      if (specific) mt.conds = mt.conds.filter((c) => !(c.kind === "status" && c.value === "task" && !c.not));
    }
    const fieldColls = new Set(matches.flatMap((mt) => mt.conds.filter((c) => c.kind === "field").map((c) => String(c.coll).toLowerCase())));
    for (const mt of matches) {
      const before = mt.conds.length;
      mt.conds = mt.conds.filter((c) => !(c.kind === "collection" && !c.not && fieldColls.has(String(c.value).toLowerCase())));
      if (before && !mt.conds.length) mt.kind = "field";
    }
    const unknown = [];
    const wordRe = /[\p{L}\p{N}_'@#/-]+/gu;
    let wm;
    while (wm = wordRe.exec(lower)) {
      const s = wm.index;
      const e = s + wm[0].length;
      if (!free(s, e)) continue;
      const w = wm[0].replace(/^'+|'+$/g, "");
      if (!w || FILLER.has(w) || /^(not|no|without|except|excluding)$/.test(w)) continue;
      unknown.push({ start: s, end: e, text: (original || text).slice(s, e) });
    }
    return { matches, unknown };
  }
  __name(matchAll, "matchAll");
  function gaps(lower, taken) {
    const out = [];
    let s = -1;
    for (let i = 0; i <= lower.length; i++) {
      const isFree = i < lower.length && !taken[i];
      if (isFree && s < 0) s = i;
      else if (!isFree && s >= 0) {
        const seg = lower.slice(s, i);
        if (seg.trim()) out.push({ start: s, end: i, text: seg });
        s = -1;
      }
    }
    return out;
  }
  __name(gaps, "gaps");
  function buildTree(matches, lower) {
    const runs = [];
    matches.forEach((mt, i) => {
      const nodes = mt.conds.map((c) => (
        /** @type {QNode} */
        c
      ));
      if (!nodes.length) return;
      const prev = matches[i - 1];
      const orLinked = prev && runs.length && OR_GAP.test(lower.slice(prev.end, mt.start));
      if (orLinked) runs[runs.length - 1].push(nodes.length === 1 ? nodes[0] : newGroup("and", nodes));
      else runs.push([nodes.length === 1 ? nodes[0] : newGroup("and", nodes)]);
    });
    const items = [];
    for (const run of runs) {
      if (run.length === 1) {
        const only = run[0];
        if (only.kind === "group" && /** @type {Group} */
        only.join === "and" && !only.not) items.push(.../** @type {Group} */
        only.items);
        else items.push(only);
      } else {
        items.push(newGroup("or", run));
      }
    }
    if (items.length === 1 && items[0].kind === "group" && !items[0].not) return (
      /** @type {Group} */
      items[0]
    );
    return newGroup("and", items);
  }
  __name(buildTree, "buildTree");

  // explain.js
  var KIND_META = {
    status: { hue: 25, icon: "ti-square-check", noun: "Task" },
    flag: { hue: 50, icon: "ti-flag", noun: "Flag" },
    text: { hue: 75, icon: "ti-quote", noun: "Words" },
    link: { hue: 95, icon: "ti-link", noun: "Link" },
    collection: { hue: 125, icon: "ti-folder", noun: "Collection" },
    field: { hue: 150, icon: "ti-adjustments-horizontal", noun: "Field" },
    tag: { hue: 175, icon: "ti-hash", noun: "Tag" },
    type: { hue: 200, icon: "ti-file", noun: "Kind" },
    date: { hue: 230, icon: "ti-calendar", noun: "Date" },
    detail: { hue: 260, icon: "ti-clock", noun: "Detail" },
    person: { hue: 300, icon: "ti-user", noun: "Person" },
    meta: { hue: 260, icon: "ti-clock", noun: "Detail" },
    raw: { hue: null, icon: "ti-code", noun: "Code" },
    op: { hue: null, icon: "", noun: "" }
  };
  function kindStyle(kind) {
    const hue = KIND_META[kind]?.hue;
    if (hue == null) return { "--k-fg": "var(--text-muted, #888)", "--k-bg": "rgba(127,127,127,0.14)" };
    const yellowness = Math.max(0, 1 - Math.abs(hue - 95) / 55);
    const l = (0.68 + 0.1 * yellowness).toFixed(3);
    return {
      "--k-fg": `color-mix(in oklab, oklch(${l} 0.16 ${hue}) 74%, var(--text-default, #888))`,
      "--k-bg": `oklch(0.62 0.13 ${hue} / 0.24)`
    };
  }
  __name(kindStyle, "kindStyle");
  function colorKind(c) {
    return c.kind === "meta" ? metaColorKind(c.key) : c.kind;
  }
  __name(colorKind, "colorKind");
  function metaColorKind(key) {
    const type2 = META_KEYS.find((m) => m.value === key)?.type;
    return type2 === "link" || key === "link" ? "link" : "detail";
  }
  __name(metaColorKind, "metaColorKind");
  var labelOf = /* @__PURE__ */ __name((list, v) => list.find((o) => o.value === v)?.label, "labelOf");
  var STATUS_CHIP = {
    task: "tasks",
    todo: "not done yet",
    done: "finished",
    due: "with a due date",
    overdue: "overdue",
    assigned: "assigned to someone",
    unassigned: "assigned to nobody",
    scheduled: "planned on a journal"
  };
  var TYPE_CHIP = { document: "pages", heading: "headings", text: "text lines", list: "list items", quote: "quotes", image: "images", file: "files" };
  var OP_WORDS = { "=": "is", "!=": "is not", "<": "before", "<=": "on or before", ">": "after", ">=": "on or after" };
  var NUM_OP_WORDS = { "=": "is", "!=": "is not", "<": "under", "<=": "at most", ">": "over", ">=": "at least" };
  var human = /* @__PURE__ */ __name((v) => String(v ?? "").replace(/^@/, "").replace(/^"|"$/g, ""), "human");
  function dateWords(v) {
    const preset = labelOf(DATE_PRESETS, v);
    if (preset) return preset.toLowerCase();
    const SAID = {
      "saturday to sunday": "this weekend",
      "next saturday to next sunday": "next weekend",
      "last saturday to last sunday": "last weekend",
      "today to in 7 days": "in the next week",
      "today to in 3 days": "in the next few days",
      "today to sunday": "later this week",
      "monday to today": "earlier this week"
    };
    if (SAID[v]) return SAID[v];
    const ahead = /^today to in (\d+) (\w+)$/.exec(v);
    if (ahead) return `in the next ${ahead[1]} ${ahead[2]}`;
    const back = /^(\d+) (\w+) ago to today$/.exec(v);
    if (back) return `in the last ${back[1]} ${back[2]}`;
    return v;
  }
  __name(dateWords, "dateWords");
  function chipLabel(c) {
    const v = String(c.value ?? "").trim();
    const neg = c.not ? "not " : "";
    switch (c.kind) {
      case "status":
        return c.not ? `not ${STATUS_CHIP[v]?.replace(/^not /, "") || v}` : STATUS_CHIP[v] || v;
      case "flag":
        return neg + (labelOf(FLAGS, v)?.toLowerCase() || v);
      case "type":
        return neg + (TYPE_CHIP[v] || v);
      case "date":
        return `${neg}dated ${dateWords(v) || "\u2026"}`;
      case "person":
        return neg + (v === "me" ? "mentioning me" : v === "mention" ? "mentioning anyone" : `mentioning ${v || "\u2026"}`);
      case "tag":
        return `${neg}tagged #${v.replace(/^#/, "") || "\u2026"}${c.prefix ? " (+ sub-tags)" : ""}`;
      case "text":
        return `${neg}containing ${c.exact ? `"${v}"` : v || "\u2026"}`;
      case "collection":
        return `${neg}in ${v || "\u2026"}`;
      case "field": {
        if (!c.coll || !c.field) return "a field\u2026";
        const val = String(c.value ?? "");
        if (val === "") return `${neg}${c.coll} \xB7 ${c.field} ${c.op === "!=" ? "is filled in" : "is empty"}`;
        const words = /^-?\d/.test(val) ? NUM_OP_WORDS : { ...OP_WORDS, "<": "below", ">": "above" };
        return `${neg}${c.coll} \xB7 ${c.field} ${words[c.op || "="] || c.op} ${human(val)}`;
      }
      case "meta": {
        const k = META_KEYS.find((m) => m.value === c.key);
        const val = human(v);
        if (c.key === "link") return `${neg}with a link to ${val || "\u2026"}`;
        if (c.key === "linkto") return `${neg}linking to ${val === "currentpage" ? "this page" : val === "currentcollection" ? "this collection" : c.title ? `\u201C${c.title}\u201D` : "a page"}`;
        if (k?.type === "user") return `${neg}${k.label.toLowerCase()} ${val}`;
        if (k?.type === "date") return `${neg}${k.label.toLowerCase()} ${OP_WORDS[c.op || "="] || c.op} ${dateWords(val)}`;
        return `${neg}${(k?.label || c.key || "").toLowerCase()} ${OP_WORDS[c.op || "="] || c.op} ${val}`;
      }
      case "raw":
        return v || "custom code";
      default:
        return v;
    }
  }
  __name(chipLabel, "chipLabel");
  function flatConds(node) {
    if (node.kind === "group") return (
      /** @type {Group} */
      node.items.flatMap(flatConds)
    );
    return [
      /** @type {Cond} */
      node
    ];
  }
  __name(flatConds, "flatConds");
  function highlightQuery(q, ctx = {}) {
    const colls = new Map((ctx.collections || []).map((s) => [s.toLowerCase(), s]));
    const users = new Map((ctx.users || []).map((s) => [s.toLowerCase(), s]));
    const re = /(\s+)|("[^"]*"?)|(@(?:"[^"]*"|[^\s()"=!<>.]+)(?:\.(?:"[^"]*"|[^\s()"=!<>.]+))*)|(#[^\s()"]*)|(\bAND\b|\bOR\b|\bNOT\b|\band\b|\bor\b|\bnot\b|&&|\|\||!(?!=))|(!=|<=|>=|=|<|>)|([()])|([^\s()"]+)/g;
    const out = [];
    let carry = "";
    let pendingOp = false;
    let m;
    while (m = re.exec(q)) {
      const [tok, ws, str, at, tag, bool, cmp, par] = m;
      if (ws) {
        out.push({ text: tok, kind: "ws" });
        continue;
      }
      if (cmp) {
        out.push({ text: tok, kind: carry || "op" });
        pendingOp = !!carry;
        continue;
      }
      if (pendingOp) {
        out.push({ text: tok, kind: carry });
        carry = "";
        pendingOp = false;
        continue;
      }
      carry = "";
      if (str) out.push({ text: tok, kind: "text" });
      else if (at) {
        const body = at.slice(1);
        const next = q.slice(re.lastIndex).trimStart();
        const compares = /^(!=|<=|>=|=|<|>)/.test(next);
        const dotted = /\./.test(body.replace(/"[^"]*"/g, '""'));
        let kind;
        if (compares) kind = dotted ? "field" : metaColorKind(body.replace(/^"|"$/g, "").toLowerCase());
        else if (dotted) kind = "raw";
        else kind = atLeaf(body.replace(/^"|"$/g, ""), colls, users).kind;
        if (compares) carry = kind;
        out.push({ text: tok, kind });
      } else if (tag) out.push({ text: tok, kind: "tag" });
      else if (bool) out.push({ text: tok, kind: "bool" });
      else if (par) out.push({ text: tok, kind: "paren" });
      else out.push({ text: tok, kind: "text" });
    }
    return out;
  }
  __name(highlightQuery, "highlightQuery");
  var STATUS_ADJ = { todo: "open", done: "finished", overdue: "overdue", unassigned: "unassigned", assigned: "assigned", scheduled: "planned" };
  var FLAG_ADJ = { important: "important", starred: "starred", inprogress: "in-progress", waiting: "waiting", discuss: "to-discuss", alert: "alert", billing: "billable" };
  var TYPE_NOUN = { document: "pages", heading: "headings", text: "text lines", list: "list items", quote: "quotes", image: "images", file: "files" };
  var listJoin = /* @__PURE__ */ __name((parts, word = "and") => parts.length < 2 ? parts.join("") : `${parts.slice(0, -1).join(", ")} ${word} ${parts[parts.length - 1]}`, "listJoin");
  function readable(root) {
    const items = root.kind === "group" && root.join === "and" && !root.not ? root.items : [root];
    const adjs = [];
    let noun = "";
    const rest = [];
    const named = new Set(flatConds(root).filter((x) => x.kind === "collection" && !x.not).map((x) => String(x.value)));
    const phrase = /* @__PURE__ */ __name((n) => {
      if (n.kind === "group") {
        const g = (
          /** @type {Group} */
          n
        );
        const inner = listJoin(g.items.map(phrase), g.join === "or" ? "or" : "and");
        return g.not ? `not ${inner}` : g.join === "or" && g.items.length > 1 ? `either ${inner}` : inner;
      }
      const c = (
        /** @type {Cond} */
        n
      );
      if (c.kind === "field" && !c.not) {
        const where = named.has(String(c.coll)) ? "" : `in ${c.coll} `;
        named.add(String(c.coll));
        const v = String(c.value ?? "");
        if (v === "") return `${where}whose ${c.field} is ${c.op === "!=" ? "filled in" : "empty"}`;
        return `${where}whose ${c.field} ${c.op === "!=" ? "isn\u2019t" : c.op && c.op !== "=" ? OP_WORDS[c.op] || c.op : "is"} ${v.replace(/^@/, "")}`;
      }
      const label = chipLabel({ ...c, not: false });
      return c.not ? `not ${label}` : label;
    }, "phrase");
    for (const n of items) {
      const c = (
        /** @type {Cond} */
        n
      );
      if (n.kind !== "group" && !c.not) {
        if (c.kind === "status" && c.value === "task") {
          noun = noun || "tasks";
          continue;
        }
        if (c.kind === "status" && STATUS_ADJ[String(c.value)]) {
          adjs.push(STATUS_ADJ[String(c.value)]);
          noun = noun || "tasks";
          continue;
        }
        if (c.kind === "flag" && FLAG_ADJ[String(c.value)]) {
          adjs.push(FLAG_ADJ[String(c.value)]);
          continue;
        }
        if (c.kind === "type" && TYPE_NOUN[String(c.value)] && !noun) {
          noun = TYPE_NOUN[String(c.value)];
          continue;
        }
      }
      rest.push(phrase(n));
    }
    for (let i = rest.length - 1; i > 0; i--) {
      if (/^whose /.test(rest[i]) && /^in /.test(rest[i - 1])) {
        rest[i - 1] += ` ${rest[i]}`;
        rest.splice(i, 1);
      }
    }
    if (!adjs.length && !noun && !rest.length) return "Everything in the workspace.";
    const bare2 = !adjs.length && !noun;
    const head = `${adjs.join(", ")}${adjs.length ? " " : ""}${noun || (adjs.length ? "items" : bare2 && /^either /.test(rest[0] || "") ? "Everything that\u2019s" : "Everything")}`;
    const tail = rest.length ? ` ${listJoin(rest)}` : "";
    const s = `${head}${tail}`.trim();
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}.`;
  }
  __name(readable, "readable");

  // suggest.js
  var status2 = /* @__PURE__ */ __name((value, not = false) => ({ kind: "status", value, ...not ? { not: true } : {} }), "status");
  var flag2 = /* @__PURE__ */ __name((value) => ({ kind: "flag", value }), "flag");
  function suggestNext(root, ctx = {}) {
    const conds = flatConds(root);
    const pos = conds.filter((c) => !c.not);
    const has2 = /* @__PURE__ */ __name((kind, value) => pos.some((c) => c.kind === kind && (value == null || c.value === value)), "has");
    const hasAny = /* @__PURE__ */ __name((kind) => conds.some((c) => c.kind === kind), "hasAny");
    const collections = ctx.collections || [];
    const tags = ctx.tags || [];
    const out = [];
    if (!conds.length) {
      const topTag = tags[0];
      out.push(
        status2("todo"),
        { kind: "date", value: "today" },
        flag2("important"),
        ...topTag ? [{ kind: "tag", value: topTag }] : [],
        { kind: "type", value: "document" },
        ...collections[0] ? [{ kind: "collection", value: collections[0].name }] : [],
        { kind: "meta", key: "modified_at", op: ">=", value: "yesterday" }
      );
      return dedupe(out, conds);
    }
    const taskish = pos.some((c) => c.kind === "status" || c.kind === "flag");
    const settled = has2("status", "todo") || has2("status", "done");
    for (const name of pos.filter((c) => c.kind === "collection").map((c) => String(c.value))) {
      const coll = collections.find((c) => c.name.toLowerCase() === name.toLowerCase());
      if (!coll) continue;
      for (const f of coll.fields) {
        if (f.choices.length) for (const ch of f.choices.slice(0, 4)) out.push({ kind: "field", coll: coll.name, field: f.label, op: "=", value: ch });
        else out.push({ kind: "field", coll: coll.name, field: f.label, op: "=", value: "" });
      }
    }
    for (const t of pos.filter((c) => c.kind === "tag" && !c.prefix).map((c) => String(c.value))) {
      const children = tags.filter((x) => x.startsWith(t + "/"));
      if (children.length) out.push({ kind: "tag", value: t, prefix: true }, ...children.slice(0, 3).map((x) => ({ kind: "tag", value: x })));
    }
    if (taskish) {
      if (!settled) out.push(status2("todo"));
      if (!has2("status", "overdue")) out.push(status2("overdue"));
      if (!hasAny("date")) out.push({ kind: "date", value: "today" }, { kind: "date", value: "thisweek" });
      if (!conds.some((c) => c.kind === "meta" && c.key === "due")) out.push({ kind: "meta", key: "due", op: "<=", value: "today" });
      out.push(flag2("important"), flag2("inprogress"), flag2("waiting"));
      if (!hasAny("person")) out.push({ kind: "person", value: "me" }, status2("unassigned"));
      if (!settled) out.push(status2("done", true));
      if (!hasAny("meta") || !conds.some((c) => c.kind === "status" && c.value === "scheduled")) out.push(status2("scheduled", true));
    }
    if (has2("type", "document") || has2("type")) {
      out.push(
        { kind: "meta", key: "modified_at", op: ">=", value: "yesterday" },
        { kind: "meta", key: "created_by", op: "=", value: "@me" },
        { kind: "meta", key: "created_at", op: ">=", value: "7 days ago" }
      );
      if (!hasAny("collection")) out.push(...collections.slice(0, 2).map((c) => ({ kind: "collection", value: c.name })));
    }
    if (hasAny("date") || hasAny("person")) {
      if (!settled) out.push(status2("todo"));
      out.push(flag2("important"));
      if (!hasAny("person")) out.push({ kind: "person", value: "me" });
    }
    if (hasAny("text") || hasAny("tag")) {
      if (!hasAny("type")) out.push({ kind: "type", value: "document" });
      if (!hasAny("collection")) out.push(...collections.slice(0, 2).map((c) => ({ kind: "collection", value: c.name })));
      if (!taskish) out.push(status2("todo"));
    }
    out.push({ kind: "date", value: "thisweek" }, flag2("starred"), { kind: "meta", key: "modified_at", op: ">=", value: "7 days ago" });
    return dedupe(out, conds);
  }
  __name(suggestNext, "suggestNext");
  function dedupe(list, existing) {
    const key = /* @__PURE__ */ __name((c) => serializeCond({ ...c, not: false }), "key");
    const taken = new Set(existing.map(key));
    const opposites = (
      /** @type {Record<string, string>} */
      { "@todo": "@done", "@done": "@todo" }
    );
    const out = [];
    const seen = /* @__PURE__ */ new Set();
    for (const c of list) {
      const k = key(c);
      if (!k || seen.has(k) || taken.has(k)) continue;
      if (opposites[k] && taken.has(opposites[k])) continue;
      seen.add(k);
      out.push(c);
    }
    return out;
  }
  __name(dedupe, "dedupe");

  // data.js
  var COUNT_CAP = 200;
  var MAX_IN_FLIGHT = 2;
  var CACHE_LIMIT = 600;
  var DataService = class {
    static {
      __name(this, "DataService");
    }
    /** @param {any} plugin */
    constructor(plugin) {
      this.plugin = plugin;
      this.ctx = { collections: [], users: [], tags: [] };
      this.loaded = false;
      this.counts = /* @__PURE__ */ new Map();
      this.errors = /* @__PURE__ */ new Map();
      this.queue = [];
      this.pending = /* @__PURE__ */ new Set();
      this.inFlight = 0;
      this.subs = /* @__PURE__ */ new Set();
      this._notifyQueued = false;
      this.titles = /* @__PURE__ */ new Map();
    }
    /** @param {() => void} fn @returns {() => void} */
    on(fn) {
      this.subs.add(fn);
      return () => this.subs.delete(fn);
    }
    /** Batch repaint signals (~one per frame). */
    _notify() {
      if (this._notifyQueued) return;
      this._notifyQueued = true;
      setTimeout(() => {
        this._notifyQueued = false;
        this.subs.forEach((fn) => {
          try {
            fn();
          } catch {
          }
        });
      }, 16);
    }
    /* ── vocabulary ──────────────────────────────────────────────────── */
    async load() {
      const collections = [];
      try {
        for (const coll of await this.plugin.data.getAllCollections()) {
          const conf = coll.getConfiguration?.();
          const fields = (conf?.fields || []).filter((f) => f && f.active !== false && f.label).map((f) => ({
            label: String(f.label),
            type: String(f.type || "text"),
            choices: (f.choices || []).filter((c) => c && c.active !== false && c.label).map((c) => String(c.label))
          }));
          collections.push({ name: String(coll.getName()), guid: String(coll.getGuid?.() || ""), fields });
        }
      } catch {
      }
      collections.sort((a, b) => a.name.localeCompare(b.name));
      let users = [];
      try {
        users = [...new Set(this.plugin.data.getActiveUsers().map((u) => String(u.getDisplayName?.() || "")).filter(Boolean))];
      } catch {
      }
      this.ctx = { collections, users, tags: this.ctx.tags };
      this.loaded = true;
      this._notify();
      void this._harvestTags();
      return this.ctx;
    }
    /**
     * There's no tag-list API, so tags are read off recent content: hashtag
     * segments in lines touched over the last half year, most-used first.
     */
    async _harvestTags() {
      try {
        const res = await this.plugin.data.searchByQuery('@modified_at >= "180 days ago"', 800);
        const freq = /* @__PURE__ */ new Map();
        for (const line of res?.lines || []) {
          for (const seg of line.segments || []) {
            if (seg.type !== "hashtag" || typeof seg.text !== "string") continue;
            const tag = seg.text.replace(/^#/, "").trim();
            if (tag) freq.set(tag, (freq.get(tag) || 0) + 1);
          }
        }
        this.ctx = { ...this.ctx, tags: [...freq.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t) };
        this._notify();
      } catch {
      }
    }
    /* ── counts ──────────────────────────────────────────────────────── */
    /**
     * Cached match count for a query, or null while it's being fetched (a
     * repaint follows when it lands). -1 means Thymer rejected the query.
     * @param {string} query
     * @returns {number | null}
     */
    count(query) {
      const q = query.trim();
      if (this.counts.has(q)) return (
        /** @type {number} */
        this.counts.get(q)
      );
      if (!this.pending.has(q)) {
        this.pending.add(q);
        this.queue.push(q);
        this._pump();
      }
      return null;
    }
    /** @param {string} query */
    error(query) {
      return this.errors.get(query.trim()) || "";
    }
    _pump() {
      while (this.inFlight < MAX_IN_FLIGHT && this.queue.length) {
        const q = (
          /** @type {string} */
          this.queue.pop()
        );
        this.inFlight++;
        void this._fetchCount(q).finally(() => {
          this.inFlight--;
          this.pending.delete(q);
          this._pump();
        });
      }
    }
    /** @param {string} q */
    async _fetchCount(q) {
      let n = 0;
      try {
        if (!q) {
          n = COUNT_CAP;
        } else {
          const res = await this.plugin.data.searchByQuery(q, COUNT_CAP);
          if (res?.error) {
            n = -1;
            this.errors.set(q, String(res.error));
          } else n = (res?.records?.length || 0) + (res?.lines?.length || 0);
        }
      } catch (err) {
        n = -1;
        this.errors.set(q, String(
          /** @type {any} */
          err?.message || err
        ));
      }
      if (this.counts.size > CACHE_LIMIT) this.counts.delete(
        /** @type {string} */
        this.counts.keys().next().value
      );
      this.counts.set(q, n);
      this._notify();
    }
    /** Forget cached counts (the workspace may have changed between opens). */
    resetCounts() {
      this.counts.clear();
      this.errors.clear();
      this.queue = [];
      this.pending.clear();
    }
    /* ── matches ─────────────────────────────────────────────────────── */
    /**
     * @param {string} query @param {number} [limit]
     * @returns {Promise<{ items: MatchItem[], error: string, total: number }>}
     */
    async matches(query, limit = 60) {
      const q = query.trim();
      if (!q) return { items: [], error: "", total: 0 };
      try {
        const res = await this.plugin.data.searchByQuery(q, limit);
        if (res?.error) return { items: [], error: String(res.error), total: 0 };
        const items = [];
        for (const line of res.lines || []) {
          const rec = line.record || line.getRecord?.();
          const status3 = line.getTaskStatus?.();
          const text = (line.segments || []).map((s) => typeof s.text === "string" ? s.text : "").join("").trim();
          items.push({
            guid: String(line.guid),
            recordGuid: String(rec?.guid || ""),
            title: text || String(rec?.getName?.() || "Untitled"),
            where: String(rec?.getName?.() || ""),
            kind: line.type === "task" ? "task" : "line",
            done: !!(status3 && status3 !== "none" && line.isTaskCompleted?.())
          });
        }
        for (const rec of res.records || []) {
          items.push({ guid: String(rec.guid), recordGuid: String(rec.guid), title: String(rec.getName?.() || "Untitled"), where: "", kind: "page", done: false });
        }
        return { items, error: "", total: items.length };
      } catch (err) {
        return { items: [], error: String(
          /** @type {any} */
          err?.message || err
        ), total: 0 };
      }
    }
    /* ── link targets ────────────────────────────────────────────────── */
    /**
     * Pages and collections whose name matches — what an @linkto can point at.
     * @param {string} text
     * @returns {Promise<LinkTarget[]>}
     */
    async linkTargets(text) {
      const t = text.trim();
      if (!t) return [];
      const out = this.ctx.collections.filter((c) => c.guid && c.name.toLowerCase().includes(t.toLowerCase())).slice(0, 3).map((c) => ({ value: c.guid, title: c.name, where: "Collection", icon: "ti-folder" }));
      try {
        const res = await this.plugin.data.searchByQuery(`@document ${JSON.stringify(t)}`, 10);
        for (const rec of res?.records || []) {
          const title = String(rec.getName?.() || "Untitled");
          this.titles.set(String(rec.guid), title);
          out.push({ value: String(rec.guid), title, where: "Page", icon: "ti-file-text" });
        }
      } catch {
      }
      return out;
    }
    /** A page's name for a GUID-valued condition, so chips never show raw IDs. @param {string} guid */
    title(guid) {
      if (this.titles.has(guid)) return (
        /** @type {string} */
        this.titles.get(guid)
      );
      let name = "";
      try {
        name = String(this.plugin.data.getRecord?.(guid)?.getName?.() || "");
      } catch {
      }
      if (!name) name = this.ctx.collections.find((c) => c.guid === guid)?.name || "";
      if (name) this.titles.set(guid, name);
      return name;
    }
  };
  function formatCount(n) {
    if (n == null) return "\u2026";
    if (n < 0) return "!";
    return n >= COUNT_CAP ? `${COUNT_CAP}+` : String(n);
  }
  __name(formatCount, "formatCount");

  // styles.js
  var UI_ROOT_CLASS = "plg-qb-ui";
  var PILL_CLASS = "plg-qb-pill";
  var PANEL_CLASS = "plg-qb-panel";
  var BASE_CSS = `
.${UI_ROOT_CLASS} {
	position: fixed; left: 0; top: 0; width: 0; height: 0;
	font-family: var(--font-sans, system-ui); font-size: 13px; line-height: 1.4;
	color: var(--text-default, inherit); -webkit-font-smoothing: antialiased;
	--surface: var(--cmdpal-bg-color, #1e1e22);
	--inset: var(--input-bg-color, rgba(127,127,127,0.1));
	--line: var(--cmdpal-border-color, rgba(127,127,127,0.25));
}
.${UI_ROOT_CLASS} *, .${UI_ROOT_CLASS} *::before, .${UI_ROOT_CLASS} *::after { box-sizing: border-box; }
.${UI_ROOT_CLASS} button { font: inherit; color: inherit; }
.${UI_ROOT_CLASS} .ti { line-height: 1; }
.${UI_ROOT_CLASS} kbd { font-family: var(--font-mono, ui-monospace, monospace); font-size: 10.5px; padding: 1px 5px; border-radius: 4px; border: 1px solid var(--line); border-bottom-width: 2px; }
.${UI_ROOT_CLASS} .qb3 { position: fixed; }
.${UI_ROOT_CLASS} .qb3-main { max-width: calc(100vw - 16px); overflow: auto; }
.${UI_ROOT_CLASS} .menu { position: fixed; overflow: auto; }
.${UI_ROOT_CLASS} .words-spark { display: none; }
.${UI_ROOT_CLASS} .result { appearance: none; width: 100%; margin: 0; border: 0; background: transparent; text-align: left; color: inherit; cursor: pointer; }
.${UI_ROOT_CLASS} .result-title { color: var(--text-default); }
`;
  var GENERATED_CSS = `
.plg-qb-ui .spacer { flex: 1; }
@keyframes plgqb-pop-in { from { opacity: 0; transform: translateY(-6px) scale(.985); } to { opacity: 1; transform: none; } }
.plg-qb-ui .icon-btn { all: unset; cursor: pointer; width: 28px; height: 28px; display: grid; place-items: center; border-radius: 7px; color: var(--text-muted); font-size: 16px; }
.plg-qb-ui .icon-btn:hover { background: var(--inset); color: var(--text-default); }
.plg-qb-ui .body { position: relative; padding: 4px 18px 16px; display: flex; flex-direction: column; gap: 14px; }
.plg-qb-ui .mark {
	color: transparent; border-radius: 4px; padding: 1px 0;
	background: color-mix(in srgb, var(--k-fg) 18%, transparent);
	box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--k-fg) 75%, transparent);
	transition: background .2s;
}
.plg-qb-ui .mark--unknown { background: transparent; box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--text-muted) 70%, transparent); background-image: linear-gradient(90deg, transparent 50%, transparent 50%); }
.plg-qb-ui .mark--ai { background: color-mix(in srgb, var(--logo-color) 16%, transparent); box-shadow: inset 0 -2px 0 var(--logo-color); }
.plg-qb-ui .understood { padding-top: 12px; }
.plg-qb-ui .sentence { display: flex; flex-wrap: wrap; align-items: center; gap: 7px 6px; font-size: 14px; line-height: 1; }
.plg-qb-ui .joiner { color: var(--text-muted); font-size: 12px; font-style: italic; }
.plg-qb-ui .cluster { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 6px; padding: 3px 6px; border-radius: 10px; border: 1px dashed var(--line); }
.plg-qb-ui .chip {
	display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 10px 0 9px; border-radius: 8px; cursor: pointer;
	color: var(--k-fg); background: color-mix(in srgb, var(--k-bg) 70%, transparent);
	border: 1px solid color-mix(in srgb, var(--k-fg) 28%, transparent);
	font-weight: 500; transition: transform .12s, box-shadow .12s, background .12s; user-select: none;
}
.plg-qb-ui .chip:hover { transform: translateY(-1px); box-shadow: 0 4px 12px -4px color-mix(in srgb, var(--k-fg) 45%, transparent); background: var(--k-bg); }
.plg-qb-ui .chip:focus-visible { outline: 2px solid var(--k-fg); outline-offset: 2px; }
.plg-qb-ui .chip-icon { font-size: 15px; opacity: .9; }
.plg-qb-ui .chip-x { display: grid; place-items: center; width: 18px; height: 18px; margin-right: -4px; border-radius: 5px; opacity: 0; transition: opacity .12s; }
.plg-qb-ui .chip:hover .chip-x { opacity: .7; }
.plg-qb-ui .chip-x:hover { opacity: 1 !important; background: color-mix(in srgb, var(--k-fg) 20%, transparent); }
.plg-qb-ui .chip.is-not { background: transparent; border-style: dashed; }
.plg-qb-ui .chip.is-not .chip-label { text-decoration: line-through; text-decoration-color: color-mix(in srgb, var(--k-fg) 60%, transparent); }
.plg-qb-ui .chip.is-fresh { animation: plgqb-chip-in .35s cubic-bezier(.2,.9,.3,1.4); }
@keyframes plgqb-chip-in { from { opacity: 0; transform: scale(.8) translateY(4px); } to { opacity: 1; transform: none; } }
.plg-qb-ui .add-chip { all: unset; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; height: 30px; padding: 0 10px; border-radius: 8px; color: var(--text-muted); border: 1px dashed var(--line); font-size: 13px; }
.plg-qb-ui .add-chip:hover { color: var(--logo-color); border-color: color-mix(in srgb, var(--logo-color) 55%, transparent); }
@keyframes plgqb-spin { to { transform: rotate(360deg); } }
@keyframes plgqb-shimmer { from { transform: translateX(-100%); } to { transform: translateX(100%); } }
.plg-qb-ui .split { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr); gap: 14px; }
.plg-qb-ui .code {
	font-family: var(--font-mono); font-size: 13px; line-height: 1.7; padding: 11px 40px 11px 12px; border-radius: 10px;
	background: var(--panel-bg-color); border: 1px solid var(--line); white-space: pre-wrap; word-break: break-word; min-height: 44px;
}
.plg-qb-ui .tok { color: var(--k-fg); border-radius: 3px; padding: 1px 2px; background: color-mix(in srgb, var(--k-bg) 45%, transparent); }
.plg-qb-ui .tok--bool { color: var(--text-default); background: none; font-weight: 700; font-size: 11.5px; letter-spacing: .04em; }
.plg-qb-ui .tok--paren, .plg-qb-ui .tok--op { color: var(--text-muted); background: none; }
.plg-qb-ui .results { border-radius: 10px; border: 1px solid var(--line); background: var(--panel-bg-color); overflow: hidden; }
@keyframes plgqb-pulse { 50% { opacity: .3; } }
.plg-qb-ui .result { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 6px; font-size: 12.5px; animation: plgqb-fade-in .2s; }
.plg-qb-ui .result:hover { background: var(--inset); }
@keyframes plgqb-fade-in { from { opacity: 0; } }
.plg-qb-ui .result-title { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.plg-qb-ui .result-title.is-done { text-decoration: line-through; color: var(--text-muted); }
.plg-qb-ui .result-icon { color: var(--text-muted); font-size: 15px; }
.plg-qb-ui .checkbox { width: 14px; height: 14px; border-radius: 4px; border: 1.5px solid var(--text-muted); display: grid; place-items: center; font-size: 10px; flex: none; }
.plg-qb-ui .checkbox.is-done { background: var(--logo-color); border-color: var(--logo-color); color: var(--cmdpal-bg-color); }
.plg-qb-ui .result-meta { display: flex; gap: 4px; flex: none; }
.plg-qb-ui .due, .plg-qb-ui .tag { font-size: 10.5px; padding: 1px 5px; border-radius: 4px; background: var(--inset); color: var(--text-muted); }
.plg-qb-ui .primary-btn {
	all: unset; cursor: pointer; display: inline-flex; align-items: center; gap: 7px; padding: 7px 14px; border-radius: 8px; font-weight: 650; font-size: 13px;
	color: var(--cmdpal-bg-color); background: var(--logo-color);
	box-shadow: 0 6px 16px -6px color-mix(in srgb, var(--logo-color) 80%, transparent), inset 0 1px 0 rgba(255,255,255,.25);
}
.plg-qb-ui .primary-btn:hover { filter: brightness(1.08); }
.plg-qb-ui .menu {
	position: fixed; z-index: 50; width: 290px; padding: 6px; border-radius: 12px;
	background: var(--cmdpal-bg-color); border: 1px solid var(--cmdpal-border-color);
	box-shadow: 0 20px 50px -12px rgba(0,0,0,.6); animation: plgqb-pop-in .16s ease-out;
}
.plg-qb-ui .menu-head { display: flex; align-items: center; gap: 6px; padding: 6px 8px 8px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .07em; color: var(--k-fg, var(--text-muted)); }
.plg-qb-ui .steps { display: flex; flex-direction: column; gap: 8px; }
.plg-qb-ui .step { border-radius: 12px; border: 1px solid var(--line); transition: background .15s; }
.plg-qb-ui .step.is-active { background: color-mix(in srgb, var(--inset) 55%, transparent); border-color: color-mix(in srgb, var(--logo-color) 40%, transparent); }
.plg-qb-ui .icon-btn.is-on { color: var(--logo-color); }
.plg-qb-ui .of { position: relative; display: grid; flex: 1; min-width: 0; }
.plg-qb-ui .of-input, .plg-qb-ui .of-hl { grid-area: 1 / 1; margin: 0; padding: 0; border: 0; font: inherit; white-space: pre-wrap; overflow-wrap: anywhere; }
.plg-qb-ui .of-input { resize: none; outline: none; background: transparent; color: var(--text-default); caret-color: var(--logo-color); overflow: hidden; position: relative; z-index: 1; }
.plg-qb-ui .of-input::placeholder { color: var(--text-muted); opacity: .7; }
.plg-qb-ui .of-hl { color: transparent; pointer-events: none; }
.plg-qb-ui .words-wrap { display: flex; align-items: flex-start; gap: 10px; padding: 11px 12px; border-radius: 12px; background: var(--inset); border: 1px solid var(--line); transition: border-color .15s, box-shadow .15s; }
.plg-qb-ui .words-wrap:focus-within { border-color: color-mix(in srgb, var(--logo-color) 65%, transparent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--logo-color) 12%, transparent); }
.plg-qb-ui .words-input, .plg-qb-ui .words-hl { font-size: 16px; line-height: 1.5; }
.plg-qb-ui .mark--unknown { background: transparent; box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--text-muted) 55%, transparent); }
.plg-qb-ui .mark--busy { background: color-mix(in srgb, var(--logo-color) 14%, transparent); box-shadow: inset 0 -2px 0 var(--logo-color); animation: plgqb-pulse 1s ease-in-out infinite; }
.plg-qb-ui .chips { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; min-height: 30px; }
.plg-qb-ui .chips .joiner { font-style: normal; font-size: 11px; text-transform: uppercase; letter-spacing: .05em; }
.plg-qb-ui .chip--unknown { all: unset; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 10px 0 9px; border-radius: 8px; font-size: 13px; color: var(--text-muted); border: 1px dashed color-mix(in srgb, var(--text-muted) 55%, transparent); }
.plg-qb-ui .chip--unknown:hover { color: var(--text-default); }
.plg-qb-ui .chip--unknown.is-busy { color: var(--logo-color); border-color: color-mix(in srgb, var(--logo-color) 55%, transparent); position: relative; overflow: hidden; }
.plg-qb-ui .chip--unknown.is-busy::after { content: ''; position: absolute; inset: 0; background: linear-gradient(100deg, transparent 30%, color-mix(in srgb, var(--logo-color) 22%, transparent) 50%, transparent 70%); animation: plgqb-shimmer 1.1s linear infinite; }
.plg-qb-ui .chip--unknown.is-busy .chip-icon { animation: plgqb-spin 1.6s linear infinite; }
.plg-qb-ui .add-chip { width: 30px; padding: 0; justify-content: center; }
.plg-qb-ui .menu--small { width: 190px; }
.plg-qb-ui .query-input, .plg-qb-ui .query-hl { font-family: var(--font-mono); font-size: 15px; line-height: 1.75; }
.plg-qb-ui .query-input { color: transparent; caret-color: var(--logo-color); }
.plg-qb-ui .query-input::selection { background: color-mix(in srgb, var(--logo-color) 30%, transparent); color: var(--text-default); }
.plg-qb-ui .query-hl { color: var(--text-default); }
.plg-qb-ui .query-hl .tok { padding: 2px 3px; border-radius: 4px; }
.plg-qb-ui .seg, .plg-qb-ui .chip, .plg-qb-ui .cap, .plg-qb-ui mark { transition: opacity .12s, background .12s; }
.plg-qb-ui .seg.is-lit .tok { box-shadow: 0 0 0 1.5px var(--k-fg); }
.plg-qb-ui .cap { all: unset; cursor: pointer; display: flex; flex-direction: column; gap: 5px; padding: 9px 12px 8px; border-radius: 10px;
	background: color-mix(in srgb, var(--k-bg) 55%, transparent); border: 1px solid color-mix(in srgb, var(--k-fg) 25%, transparent); transition: transform .12s; animation: plgqb-chip-in .3s cubic-bezier(.2,.9,.3,1.4); }
.plg-qb-ui .cap:hover { transform: translateY(-1px); background: var(--k-bg); }
.plg-qb-ui .cap.is-not { background: transparent; border-style: dashed; }
.plg-qb-ui .side { width: 300px; flex: none; display: flex; flex-direction: column; border-left: 1px solid var(--line); background: color-mix(in srgb, var(--panel-bg-color) 60%, var(--surface)); transition: width .25s cubic-bezier(.2,.8,.2,1), opacity .2s; overflow: hidden; }
.plg-qb-ui .side .result { align-items: flex-start; padding: 7px 8px; }
.plg-qb-ui .side .checkbox, .plg-qb-ui .side .result-icon { margin-top: 2px; }
.plg-qb-ui .result-body { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1; }
.plg-qb-ui .side .result-meta { flex-wrap: wrap; }
.plg-qb-ui .result-coll { font-size: 10.5px; color: var(--text-muted); }
.plg-qb-ui .qb3 { --surface: var(--cmdpal-bg-color); --inset: var(--input-bg-color); --line: var(--cmdpal-border-color); display: flex; align-items: stretch; }
.plg-qb-ui .qb3-main {
	position: relative; z-index: 2; width: 640px; min-height: 440px; display: flex; flex-direction: column;
	background: var(--surface); border: 1px solid var(--line); border-radius: 14px;
	box-shadow: 0 30px 80px -20px rgba(0,0,0,.55), 0 10px 30px -10px rgba(0,0,0,.35);
	animation: plgqb-pop-in .22s cubic-bezier(.2,.9,.3,1.2);
}
.plg-qb-ui .qb3-head { display: flex; align-items: center; gap: 4px; padding: 12px 10px 4px 14px; }
.plg-qb-ui .qb3-logo { width: 24px; height: 24px; margin-right: 6px; border-radius: 7px; display: grid; place-items: center; font-size: 14px; color: var(--logo-color);
	background: color-mix(in srgb, var(--logo-color) 16%, transparent); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--logo-color) 30%, transparent); }
.plg-qb-ui .qb3-title { font-weight: 700; font-size: 14px; letter-spacing: -.01em; }
.plg-qb-ui .icon-btn.sm { width: 24px; height: 24px; font-size: 14px; border-radius: 6px; }
.plg-qb-ui .qb3-body { flex: 1; display: flex; flex-direction: column; gap: 12px; padding: 8px 14px 14px; }
.plg-qb-ui .drawer {
	position: relative; z-index: 1; width: 316px; margin: 16px 0 16px -18px; flex: none;
	background: var(--panel-bg-color); border: 1px solid var(--line); border-left: 0; border-radius: 0 12px 12px 0;
	box-shadow: inset 14px 0 18px -14px rgba(0,0,0,.55), 0 20px 40px -20px rgba(0,0,0,.5);
	transition: width .28s cubic-bezier(.2,.8,.2,1), opacity .2s, margin .28s; overflow: hidden;
}
.plg-qb-ui .qb3.is-closed .drawer { width: 0; opacity: 0; border-width: 0; }
.plg-qb-ui .drawer-inner { position: absolute; inset: 0 0 0 18px; width: 298px; display: flex; flex-direction: column; }
.plg-qb-ui .drawer-tabs { display: flex; gap: 2px; padding: 12px 12px 8px 10px; }
.plg-qb-ui .dtab { all: unset; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 7px; font-size: 12.5px; color: var(--text-muted); }
.plg-qb-ui .dtab:hover { color: var(--text-default); }
.plg-qb-ui .dtab.is-on { background: var(--inset); color: var(--text-default); }
.plg-qb-ui .dtab-n { color: var(--logo-color); font-variant-numeric: tabular-nums; font-weight: 600; }
.plg-qb-ui .drawer-body { flex: 1; overflow: auto; padding: 0 8px 12px 6px; }
.plg-qb-ui .drawer .list { display: flex; flex-direction: column; }
.plg-qb-ui .drawer .result { align-items: flex-start; padding: 7px 8px; }
.plg-qb-ui .drawer .checkbox, .plg-qb-ui .drawer .result-icon { margin-top: 2px; }
.plg-qb-ui .result-body { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1; }
.plg-qb-ui .result-coll { font-size: 10.5px; color: var(--text-muted); }
.plg-qb-ui .empty { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 40px 0; color: var(--text-muted); }
.plg-qb-ui .empty .ti { font-size: 24px; opacity: .6; }
.plg-qb-ui .words-wrap { padding: 10px 12px; border-radius: 10px; background: var(--inset); border: 1px solid var(--line); transition: border-color .15s, box-shadow .15s; }
.plg-qb-ui .words-wrap:focus-within { border-color: color-mix(in srgb, var(--logo-color) 60%, transparent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--logo-color) 12%, transparent); }
.plg-qb-ui .words-input, .plg-qb-ui .words-hl { font-size: 15px; line-height: 1.5; }
.plg-qb-ui .dock { border-radius: 12px; background: var(--panel-bg-color); border: 1px solid var(--line); padding: 14px 10px 10px 16px; transition: border-color .15s; }
.plg-qb-ui .dock:focus-within { border-color: color-mix(in srgb, var(--logo-color) 55%, transparent); }
.plg-qb-ui .query-input, .plg-qb-ui .query-hl { font-family: var(--font-mono); font-size: 18px; line-height: 1.7; }
.plg-qb-ui .query-input { color: transparent; caret-color: var(--logo-color); }
.plg-qb-ui .query-input::selection { background: color-mix(in srgb, var(--logo-color) 30%, transparent); }
.plg-qb-ui .query-hl { color: var(--text-default); }
.plg-qb-ui .query-hl .tok { padding: 2px 3px; border-radius: 4px; }
.plg-qb-ui .dock-bar { display: flex; align-items: center; gap: 6px; margin-top: 10px; }
.plg-qb-ui .primary-btn { padding: 6px 8px 6px 14px; gap: 10px; }
.plg-qb-ui .btn-kbd { margin: 0; font-family: var(--font-mono); font-size: 11px; font-weight: 600; padding: 2px 6px; border: 0; border-radius: 5px; background: rgba(0,0,0,.18); color: inherit; }
@keyframes plgqb-used { 0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--logo-color) 70%, transparent); } 100% { box-shadow: 0 0 0 10px transparent; } }
.plg-qb-ui .chips { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
.plg-qb-ui .chips .joiner { font-style: normal; font-size: 11px; text-transform: uppercase; letter-spacing: .05em; }
.plg-qb-ui .chip.is-not { background: transparent; border-style: dashed; }
.plg-qb-ui .chip.is-not .chip-label { text-decoration: line-through; text-decoration-color: color-mix(in srgb, var(--k-fg) 55%, transparent); }
.plg-qb-ui .chip--unknown { all: unset; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 10px 0 9px; border-radius: 8px; font-size: 13px; color: var(--text-muted); border: 1px dashed color-mix(in srgb, var(--text-muted) 55%, transparent); }
.plg-qb-ui .chip--unknown:hover { color: var(--text-default); }
.plg-qb-ui .chip--unknown.is-busy { color: var(--logo-color); border-color: color-mix(in srgb, var(--logo-color) 55%, transparent); position: relative; overflow: hidden; }
.plg-qb-ui .chip--unknown.is-busy::after { content: ''; position: absolute; inset: 0; background: linear-gradient(100deg, transparent 30%, color-mix(in srgb, var(--logo-color) 22%, transparent) 50%, transparent 70%); animation: plgqb-shimmer 1.1s linear infinite; }
.plg-qb-ui .chip--unknown.is-busy .chip-icon { animation: plgqb-spin 1s linear infinite; }
.plg-qb-ui .add-chip { width: 30px; padding: 0; justify-content: center; }
.plg-qb-ui .suggest { display: flex; flex-wrap: wrap; gap: 6px; }
.plg-qb-ui .suggest:empty { display: none; }
.plg-qb-ui .sug { all: unset; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; height: 26px; padding: 0 6px 0 8px; border-radius: 7px; font-size: 12px; color: var(--text-muted); border: 1px dashed var(--line); transition: all .12s; }
.plg-qb-ui .sug:hover { color: var(--k-fg); border-color: color-mix(in srgb, var(--k-fg) 50%, transparent); border-style: solid; background: color-mix(in srgb, var(--k-bg) 35%, transparent); }
.plg-qb-ui .sug-icon { font-size: 12px; }
.plg-qb-ui .sug-n { font-size: 10.5px; font-variant-numeric: tabular-nums; padding: 1px 5px; border-radius: 5px; background: var(--inset); color: var(--text-muted); }
.plg-qb-ui .qb3.is-linking .chip:not(.is-lit), .plg-qb-ui .qb3.is-linking .seg:not(.is-lit) { opacity: .4; }
.plg-qb-ui .qb3.is-linking mark:not(.is-lit) { background: transparent; }
.plg-qb-ui .seg, .plg-qb-ui .chip, .plg-qb-ui mark { transition: opacity .12s, background .12s; }
.plg-qb-ui .seg.is-lit .tok { box-shadow: 0 0 0 1.5px var(--k-fg); }
.plg-qb-ui .menu { width: 330px; }
.plg-qb-ui .menu-head { justify-content: space-between; padding: 4px 4px 8px 6px; }
.plg-qb-ui .menu-kind { display: inline-flex; align-items: center; gap: 6px; }
.plg-qb-ui .polarity { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; padding: 0 2px 8px; }
.plg-qb-ui .pol { all: unset; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 7px; padding: 10px 6px 8px; border-radius: 10px; border: 1px solid var(--line); opacity: .6; transition: all .12s; min-width: 0; }
.plg-qb-ui .pol:hover { opacity: 1; }
.plg-qb-ui .pol.is-on { opacity: 1; border-color: color-mix(in srgb, var(--k-fg) 55%, transparent); background: color-mix(in srgb, var(--k-bg) 30%, transparent); }
.plg-qb-ui .opts { display: flex; flex-direction: column; max-height: 300px; overflow: auto; border-top: 1px solid var(--cmdpal-border-color); padding-top: 4px; }
.plg-qb-ui .opt { all: unset; cursor: pointer; display: grid; grid-template-columns: 16px 1fr auto 26px; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 7px; font-size: 13px; }
.plg-qb-ui .opt:hover { background: var(--cmdpal-hover-bg-color, var(--input-bg-color)); }
.plg-qb-ui .opt.is-on { background: color-mix(in srgb, var(--k-fg) 12%, transparent); }
.plg-qb-ui .opt.is-zero { opacity: .45; }
.plg-qb-ui .opt-check { color: var(--k-fg); font-size: 13px; }
.plg-qb-ui .opt-label { min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.plg-qb-ui .opt-count { text-align: right; font-size: 11px; font-variant-numeric: tabular-nums; color: var(--text-muted); }
.plg-qb-ui .menu--small { width: 200px; }
.plg-qb-ui .menu--small .opt { grid-template-columns: 16px 1fr; }
.plg-qb-ui .pill { display: inline-flex; align-items: center; height: 20px; padding: 0 6px; border-radius: 5px; font-family: var(--font-mono); font-size: 11.5px; white-space: nowrap;
	color: var(--k-fg); background: color-mix(in srgb, var(--k-bg) 60%, transparent); }
.plg-qb-ui .pill--plain { color: var(--text-default); background: var(--input-bg-color); }
.plg-qb-ui .menu--add { width: 340px; padding: 6px; }
.plg-qb-ui .add-row { all: unset; cursor: pointer; display: flex; align-items: center; gap: 10px; padding: 8px; border-radius: 9px; box-sizing: border-box; width: 100%; }
.plg-qb-ui .add-row:hover { background: var(--cmdpal-hover-bg-color, var(--input-bg-color)); }
.plg-qb-ui .add-icon { flex: none; width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; font-size: 16px; color: var(--k-fg); background: color-mix(in srgb, var(--k-bg) 70%, transparent); }
.plg-qb-ui .add-text { flex: 1; display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.plg-qb-ui .add-title { font-weight: 600; font-size: 13px; }
.plg-qb-ui .add-hint { font-size: 11.5px; color: var(--text-muted); }
.plg-qb-ui .add-chev { color: var(--text-muted); font-size: 14px; }
.plg-qb-ui .guide { padding: 2px 6px 8px; }
.plg-qb-ui .g-sec { margin-bottom: 14px; }
.plg-qb-ui .g-title { font-size: 10.5px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--text-muted); margin: 0 4px 6px; }
.plg-qb-ui .g-combine { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.plg-qb-ui .g-comb { display: flex; flex-direction: column; gap: 5px; padding: 8px; border-radius: 8px; border: 1px solid var(--line); }
.plg-qb-ui .g-row { all: unset; cursor: pointer; display: grid; grid-template-columns: 112px 1fr 14px; align-items: center; gap: 8px; padding: 4px 6px; border-radius: 7px; box-sizing: border-box; width: 100%; }
.plg-qb-ui .g-row:hover { background: color-mix(in srgb, var(--k-bg) 30%, transparent); }
.plg-qb-ui .g-row .pill { justify-self: start; max-width: 112px; overflow: hidden; text-overflow: ellipsis; }
.plg-qb-ui .g-say { font-size: 12px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.plg-qb-ui .g-add { color: var(--k-fg); font-size: 13px; opacity: 0; }
.plg-qb-ui .g-row:hover .g-add { opacity: 1; }
.plg-qb-ui .g-ex { all: unset; cursor: pointer; display: flex; flex-direction: column; gap: 4px; padding: 7px 8px; border-radius: 8px; box-sizing: border-box; width: 100%; }
.plg-qb-ui .g-ex:hover { background: var(--inset); }
.plg-qb-ui .g-ex-label { font-size: 12.5px; }
.plg-qb-ui .g-ex-code { font-family: var(--font-mono); font-size: 11.5px; line-height: 1.6; }
.plg-qb-ui .g-ex-code .tok { padding: 0 2px; }
.plg-qb-ui .of-input, .plg-qb-ui .of-hl { font-variant-ligatures: none; font-feature-settings: "liga" 0, "calt" 0; letter-spacing: 0; tab-size: 4; }
.plg-qb-ui .of-input { color: transparent; -webkit-text-fill-color: transparent; }
.plg-qb-ui .of-input::placeholder { -webkit-text-fill-color: var(--text-muted); color: var(--text-muted); }
.plg-qb-ui .of-input::selection { background: color-mix(in srgb, var(--logo-color) 32%, transparent); -webkit-text-fill-color: transparent; }
.plg-qb-ui .of-hl { color: var(--text-default); }
.plg-qb-ui .query-hl .tok, .plg-qb-ui .mark { padding: 0 !important; }
.plg-qb-ui .query-hl .tok { box-shadow: 0 0 0 2px color-mix(in srgb, var(--k-bg) 45%, transparent); background: color-mix(in srgb, var(--k-bg) 45%, transparent); }
.plg-qb-ui .words-hl .mark { color: inherit; }
.plg-qb-ui .seg.is-lit .tok { box-shadow: 0 0 0 2px var(--k-fg); }
.plg-qb-ui .qb3 *, .plg-qb-ui .menu { scrollbar-width: thin; scrollbar-color: color-mix(in srgb, var(--text-muted) 40%, transparent) transparent; }
.plg-qb-ui .qb3 ::-webkit-scrollbar, .plg-qb-ui .menu ::-webkit-scrollbar { width: 8px; height: 8px; }
.plg-qb-ui .qb3 ::-webkit-scrollbar-track, .plg-qb-ui .menu ::-webkit-scrollbar-track { background: transparent; }
.plg-qb-ui .qb3 ::-webkit-scrollbar-thumb, .plg-qb-ui .menu ::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--text-muted) 35%, transparent); border-radius: 8px; border: 2px solid transparent; background-clip: padding-box; }
.plg-qb-ui .qb3 ::-webkit-scrollbar-thumb:hover, .plg-qb-ui .menu ::-webkit-scrollbar-thumb:hover { background-color: color-mix(in srgb, var(--text-muted) 60%, transparent); }
.plg-qb-ui .drawer { width: 372px; }
.plg-qb-ui .drawer-inner { width: 354px; }
.plg-qb-ui .drawer-tabs { margin: 12px 12px 8px 10px; padding: 3px; gap: 3px; border-radius: 9px; background: var(--inset); border: 1px solid var(--line); }
.plg-qb-ui .dtab { flex: 1; justify-content: center; padding: 5px 10px; border-radius: 6px; font-weight: 500; }
.plg-qb-ui .dtab.is-on { background: var(--surface); color: var(--text-default); box-shadow: 0 1px 2px rgba(0,0,0,.35), inset 0 0 0 1px var(--line); }
.plg-qb-ui .words-wrap { display: flex; flex-direction: column; gap: 8px; position: relative; padding-bottom: 9px; }
.plg-qb-ui .try { all: unset; cursor: pointer; color: var(--text-muted); font-style: italic; border-bottom: 1px dotted color-mix(in srgb, var(--text-muted) 60%, transparent); }
.plg-qb-ui .try:hover { color: var(--text-default); border-bottom-color: var(--logo-color); }
.plg-qb-ui .dock-bar { gap: 4px; }
.plg-qb-ui .dock-bar .icon-btn.sm { width: 30px; height: 30px; font-size: 15px; border-radius: 8px; }
.plg-qb-ui .menu--add { width: 360px; }
.plg-qb-ui .add-hint, .plg-qb-ui .add-title { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.plg-qb-ui .menu-head--back { justify-content: flex-start; gap: 6px; padding: 2px 4px 8px 2px; }
.plg-qb-ui .g-row { grid-template-columns: 132px 1fr 14px; }
.plg-qb-ui .g-row .pill { max-width: 132px; }
.plg-qb-ui .g-ex { gap: 6px; padding: 9px 10px; margin-bottom: 6px; border-radius: 10px; border: 1px solid var(--line); background: var(--surface); }
.plg-qb-ui .g-ex:hover { border-color: color-mix(in srgb, var(--logo-color) 45%, transparent); background: var(--surface); }
.plg-qb-ui .g-ex-label { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; color: var(--text-default); }
.plg-qb-ui .g-ex-icon { color: var(--text-muted); font-size: 13px; }
.plg-qb-ui .g-ex:hover .g-ex-icon { color: var(--logo-color); }
.plg-qb-ui .g-ex-code { display: block; padding: 6px 8px; border-radius: 6px; background: var(--panel-bg-color); }
.plg-qb-ui .g-ex-code .tok { padding: 0 2px; }
.plg-qb-ui .of-input, .plg-qb-ui .of-hl { width: 100%; min-width: 0; box-sizing: border-box; }
.plg-qb-ui .words-wrap { flex-direction: row; align-items: flex-start; gap: 10px; padding: 11px 12px; cursor: text; }
.plg-qb-ui .words-wrap .of { flex: 1; }
.plg-qb-ui .words-spark { flex: none; display: grid; place-items: center; height: 22px; color: var(--text-muted); font-size: 16px; pointer-events: none; }
.plg-qb-ui .words-wrap:focus-within .words-spark { color: var(--logo-color); }
.plg-qb-ui .seg2 { display: inline-flex; padding: 2px; gap: 2px; border-radius: 8px; background: var(--input-bg-color); border: 1px solid var(--cmdpal-border-color); }
.plg-qb-ui .seg2-btn { all: unset; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 6px; font-size: 12px; color: var(--text-muted); }
.plg-qb-ui .seg2-btn:hover { color: var(--text-default); }
.plg-qb-ui .seg2-btn.is-on { color: var(--k-fg, var(--text-default)); background: var(--cmdpal-bg-color); box-shadow: 0 1px 2px rgba(0,0,0,.3), inset 0 0 0 1px var(--cmdpal-border-color); }
.plg-qb-ui .menu-head { gap: 6px; padding: 2px 2px 8px 6px; }
.plg-qb-ui .menu-search { display: flex; align-items: center; gap: 7px; margin: 0 2px 6px; padding: 0 9px; height: 32px; border-radius: 8px; background: var(--input-bg-color); border: 1px solid var(--cmdpal-border-color); color: var(--text-muted); }
.plg-qb-ui .menu-search:focus-within { border-color: color-mix(in srgb, var(--logo-color) 55%, transparent); }
.plg-qb-ui .menu-search input { flex: 1; min-width: 0; font: inherit; font-size: 12.5px; border: 0; outline: 0; background: transparent; color: var(--text-default); }
.plg-qb-ui .opts-empty { padding: 14px 8px; text-align: center; font-size: 12px; color: var(--text-muted); }
.plg-qb-ui .opt.is-custom .opt-label::before { content: 'Use '; color: var(--text-muted); }
.plg-qb-ui .menu--add .opts { max-height: 340px; }
.plg-qb-ui .qb3-main { min-height: 0; }
.plg-qb-ui .qb3--dock .qb3-body { gap: 12px; }
.plg-qb-ui .qb3--dock .drawer { min-height: 300px; }
.plg-qb-ui .of-hl .tok, .plg-qb-ui .of-hl .tok--bool, .plg-qb-ui .of-hl .seg, .plg-qb-ui .of-hl mark { font: inherit !important; letter-spacing: 0 !important; }
.plg-qb-ui .query-hl .tok--bool { color: var(--text-muted); font-weight: inherit; }
.plg-qb-ui .of-input::selection { color: transparent; -webkit-text-fill-color: transparent; background: color-mix(in srgb, var(--logo-color) 30%, transparent); }
.plg-qb-ui .of-input::-moz-selection { color: transparent; background: color-mix(in srgb, var(--logo-color) 30%, transparent); }
.plg-qb-ui .menu:focus { outline: none; }
.plg-qb-ui .opts-hint { display: flex; gap: 8px; align-items: flex-start; margin: 2px 2px 6px; padding: 8px 10px; border-radius: 8px; font-size: 12px; line-height: 1.45; color: var(--text-muted); background: var(--input-bg-color); }
.plg-qb-ui .opts-hint b { color: var(--text-default); font-weight: 600; }
.plg-qb-ui .opts-hint .ti { font-size: 15px; margin-top: 1px; }
.plg-qb-ui .chip-ico { position: relative; display: grid; place-items: center; width: 18px; height: 18px; margin-left: -2px; border-radius: 5px; cursor: pointer; }
.plg-qb-ui .chip-ico .chip-icon { grid-area: 1 / 1; transition: opacity .1s; }
.plg-qb-ui .chip-icon--hover { opacity: 0; }
.plg-qb-ui .chip-ico:hover { background: color-mix(in srgb, var(--k-fg) 20%, transparent); }
.plg-qb-ui .chip-ico:hover .chip-icon--rest { opacity: 0; }
.plg-qb-ui .chip-ico:hover .chip-icon--hover { opacity: 1; }
.plg-qb-ui .menu--add { padding: 4px 6px 6px; max-height: 70vh; overflow: auto; }
.plg-qb-ui .add-group { display: flex; flex-direction: column; }
.plg-qb-ui .add-group--divided { margin-top: 4px; padding-top: 4px; border-top: 1px solid var(--cmdpal-border-color); }
.plg-qb-ui .add-group-label { padding: 6px 8px 3px; font-size: 10px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--text-muted); }
.plg-qb-ui .menu--add .add-row { padding: 6px 8px; }
.plg-qb-ui .menu--add .add-icon { width: 26px; height: 26px; font-size: 14px; border-radius: 7px; }
.plg-qb-ui .chip { padding-right: 10px; }
.plg-qb-ui .chip-x { width: 0; margin: 0 -4px 0 0; overflow: hidden; transition: width .12s, opacity .12s; }
.plg-qb-ui .chip:hover .chip-x { width: 18px; }
.plg-qb-ui .add-hint { color: color-mix(in oklab, var(--text-muted) 70%, var(--text-default)); }
.plg-qb-ui .add-row.is-off { cursor: default; opacity: .45; }
.plg-qb-ui .add-row.is-off:hover { background: transparent; }
.plg-qb-ui .add-row.is-off .add-icon { filter: grayscale(1); }
.plg-qb-ui .menu--add { width: max-content; min-width: 380px; max-width: min(560px, calc(100vw - 24px)); }
.plg-qb-ui .opt--target .opt-check { color: var(--text-muted); }
.plg-qb-ui .opt-where { font-size: 11px; color: var(--text-muted); white-space: nowrap; max-width: 110px; overflow: hidden; text-overflow: ellipsis; }
.plg-qb-ui .add-hint, .plg-qb-ui .opt-where { font-size: 10.5px; }
.plg-qb-ui .menu--add { min-width: 340px; max-width: min(500px, calc(100vw - 24px)); }
.plg-qb-ui .opt.is-active, .plg-qb-ui .add-row.is-active { background: var(--cmdpal-hover-bg-color, var(--input-bg-color)); }
.plg-qb-ui .opt.is-on.is-active { background: color-mix(in srgb, var(--k-fg) 16%, transparent); }
.plg-qb-ui .menu { width: max-content; min-width: 380px; max-width: min(540px, calc(100vw - 24px)); }
.plg-qb-ui .menu-crumb { display: flex; align-items: center; gap: 6px; padding: 0 4px 6px 0; font-size: 12px; color: var(--text-muted); }
.plg-qb-ui .menu-crumb b { color: var(--text-default); font-weight: 600; }
.plg-qb-ui .menu-kind b { font-weight: 700; }
.plg-qb-ui .opt--target .opt-label { font-weight: 500; }
.plg-qb-ui .chip--split { padding: 0 6px 0 9px; gap: 0; cursor: default; }
.plg-qb-ui .chip--split .chip-ico { margin-right: 6px; }
.plg-qb-ui .chip-seg { display: inline-flex; align-items: center; height: 100%; padding: 0 8px; cursor: pointer; border-radius: 6px; }
.plg-qb-ui .chip-seg:hover { background: color-mix(in srgb, var(--k-fg) 14%, transparent); }
.plg-qb-ui .chip-seg--field { padding-left: 4px; color: color-mix(in oklab, var(--k-fg) 75%, var(--text-muted)); }
.plg-qb-ui .chip-seg-coll { opacity: .7; }
.plg-qb-ui .chip-seg--value { font-weight: 600; border-left: 1px solid color-mix(in srgb, var(--k-fg) 30%, transparent); border-radius: 0 6px 6px 0; }
.plg-qb-ui .chip--split.is-not .chip-seg--value { text-decoration: line-through; text-decoration-color: color-mix(in srgb, var(--k-fg) 60%, transparent); }
.plg-qb-ui .readout { position: relative; display: flex; align-items: baseline; gap: 8px; margin: -2px 0 10px; padding-bottom: 10px; border-bottom: 1px solid var(--line); font-family: var(--font-sans); font-size: 13.5px; line-height: 1.45; color: var(--text-default); overflow: hidden; }
.plg-qb-ui .readout-text { flex: 1; min-width: 0; }
.plg-qb-ui .chip--split .chip-seg, .plg-qb-ui .chip--split .chip-seg--value { border-radius: 0; }
.plg-qb-ui .readout { font-size: 12px; line-height: 1.45; color: var(--text-muted); }
.plg-qb-ui .readout.is-busy .readout-text {
	background: linear-gradient(100deg, var(--text-muted) 35%, var(--text-default) 50%, var(--text-muted) 65%);
	background-size: 250% 100%;
	-webkit-background-clip: text; background-clip: text;
	color: transparent; -webkit-text-fill-color: transparent;
	animation: plgqb-text-shine 1.1s linear infinite;
}
@keyframes plgqb-text-shine { from { background-position: 100% 0; } to { background-position: -150% 0; } }
.plg-qb-ui .readout.is-busy .readout-text {
	background: linear-gradient(100deg, var(--text-muted) 0%, var(--text-muted) 40%, color-mix(in oklab, var(--text-default) 70%, white) 50%, var(--text-muted) 60%, var(--text-muted) 100%);
	background-size: 300% 100%;
	animation: plgqb-text-shine 1.2s ease-in-out infinite;
}
@keyframes plgqb-text-shine { from { background-position: 100% 0; } to { background-position: 0% 0; } }
.plg-qb-ui .chip-x, .plg-qb-ui .chip:hover .chip-x { width: 18px; margin: 0 -4px 0 0; transition: opacity .12s; }
.plg-qb-ui .chip-x { opacity: 0; }
.plg-qb-ui .chip:hover .chip-x, .plg-qb-ui .chip:focus-within .chip-x { opacity: .7; }
.plg-qb-ui .chip .chip-x:hover { opacity: 1; }
.plg-qb-ui .readout-text.is-sweep {
	background-image: linear-gradient(100deg, var(--text-muted) 0%, var(--text-muted) 48.5%, var(--text-default) 50%, var(--text-muted) 51.5%, var(--text-muted) 100%);
	background-size: 400% 100%;
	background-repeat: no-repeat;
	-webkit-background-clip: text; background-clip: text;
	color: transparent; -webkit-text-fill-color: transparent;
	animation: plgqb-readout-sweep .9s cubic-bezier(.3, .1, .3, 1) 1 both;
}
@keyframes plgqb-readout-sweep { from { background-position: 70% 0; } to { background-position: 30% 0; } }
@media (prefers-reduced-motion: reduce) {
	.plg-qb-ui .readout-text.is-sweep { animation: none; background: none; color: inherit; -webkit-text-fill-color: currentColor; }
}
.plg-qb-ui .readout-text { flex: 0 1 auto; width: fit-content; max-width: 100%; }
.plg-qb-ui .readout-text.is-sweep { animation: plgqb-readout-sweep 1.6s cubic-bezier(.45, .05, .35, 1) 1 both; }
.plg-qb-ui .readout-text.is-sweep {
	background-image: linear-gradient(100deg,
		var(--text-muted) 0%, var(--text-muted) 44%,
		color-mix(in oklab, var(--text-muted) 50%, var(--text-default)) 47%,
		var(--text-default) 50%,
		color-mix(in oklab, var(--text-muted) 50%, var(--text-default)) 53%,
		var(--text-muted) 56%, var(--text-muted) 100%);
	-webkit-background-clip: text; background-clip: text;
	animation-name: plgqb-readout-sweep-wide;
}
@keyframes plgqb-readout-sweep-wide { from { background-position: 75% 0; } to { background-position: 25% 0; } }
.plg-qb-ui .chip-x { opacity: .35; }
.plg-qb-ui .chip:hover .chip-x, .plg-qb-ui .chip:focus-within .chip-x { opacity: .65; }
.plg-qb-ui .chip .chip-x:hover { opacity: 1; }
.plg-qb-ui .undo-bar {
	position: absolute; left: 50%; bottom: 14px; z-index: 5; transform: translate(-50%, 8px);
	display: flex; align-items: center; gap: 10px; padding: 6px 6px 6px 12px; border-radius: 10px;
	font-size: 12.5px; color: var(--text-default); background: var(--cmdpal-bg-color);
	border: 1px solid var(--cmdpal-border-color); box-shadow: 0 10px 30px -8px rgba(0,0,0,.5);
	opacity: 0; pointer-events: none; transition: opacity .18s, transform .18s;
}
.plg-qb-ui .undo-bar.is-on { opacity: 1; pointer-events: auto; transform: translate(-50%, 0); }
.plg-qb-ui .undo-icon { color: var(--text-muted); }
.plg-qb-ui .undo-btn { all: unset; cursor: pointer; padding: 4px 10px; border-radius: 7px; font-weight: 600; color: var(--logo-color); background: color-mix(in srgb, var(--logo-color) 12%, transparent); }
.plg-qb-ui .undo-btn:hover { background: color-mix(in srgb, var(--logo-color) 22%, transparent); }
.plg-qb-ui .undo-bar kbd { margin: 0 4px 0 0; color: var(--text-muted); }
`;
  var OVERRIDE_CSS = `
.${UI_ROOT_CLASS} .drawer {
	background: color-mix(in oklab, var(--cmdpal-bg-color, #1e1e22) 91%, var(--text-default, #888));
	border-color: color-mix(in oklab, var(--cmdpal-border-color, rgba(127,127,127,0.25)) 70%, var(--text-default, #888));
}
.${UI_ROOT_CLASS} .drawer .dtab.is-on { background: var(--cmdpal-bg-color, #1e1e22); }
.${UI_ROOT_CLASS} .amt { display: flex; align-items: center; gap: 4px; padding: 2px 2px 8px; }
.${UI_ROOT_CLASS} .amt-row { display: flex; align-items: center; gap: 8px; }
.${UI_ROOT_CLASS} .amt-row .amt { flex: 1; }
.${UI_ROOT_CLASS} .amt-input { width: 52px; height: 30px; text-align: center; font: inherit; font-weight: 600; font-variant-numeric: tabular-nums; color: var(--text-default); background: var(--input-bg-color); border: 1px solid var(--cmdpal-border-color); border-radius: 7px; outline: none; }
.${UI_ROOT_CLASS} .amt-input:focus { border-color: color-mix(in srgb, var(--logo-color) 60%, transparent); }
.${UI_ROOT_CLASS} .amt-step { width: 28px; height: 28px; }
.${UI_ROOT_CLASS} .amt-units { margin-left: 6px; }
.${UI_ROOT_CLASS} .amt-add { all: unset; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px; margin-bottom: 8px; border-radius: 7px; font-size: 12.5px; font-weight: 600; color: var(--logo-color); background: color-mix(in srgb, var(--logo-color) 12%, transparent); }
.${UI_ROOT_CLASS} .amt-add:hover { background: color-mix(in srgb, var(--logo-color) 22%, transparent); }
`;
  var UI_CSS = BASE_CSS + GENERATED_CSS + OVERRIDE_CSS;
  var PILL_CSS = `
.${PILL_CLASS} {
	position: fixed; z-index: 2147482999;
	display: inline-flex; align-items: center; gap: 4px;
	height: 20px; padding: 0 7px;
	font-family: var(--font-sans, inherit); font-size: 11px; font-weight: 600; line-height: 1;
	color: var(--logo-color, #04d1ab);
	background: var(--cmdpal-bg-color, var(--color-bg-50, #1e1e22));
	border: 1px solid color-mix(in srgb, var(--logo-color, #04d1ab) 55%, transparent);
	border-radius: 999px;
	cursor: pointer; user-select: none;
	box-shadow: 0 2px 8px rgba(0,0,0,0.2);
	opacity: 0.85;
}
.${PILL_CLASS}:hover { opacity: 1; background: color-mix(in srgb, var(--logo-color, #04d1ab) 14%, var(--cmdpal-bg-color, #1e1e22)); }
.${PILL_CLASS}[hidden] { display: none; }
`;

  // ui.js
  var IS_MAC = typeof navigator !== "undefined" && /mac/i.test(navigator.platform || navigator.userAgent);
  var Z_POPOVER = 2147483e3;
  var VIEWPORT_MARGIN = 8;
  function h2(tag, props, ...kids) {
    const el2 = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (v == null || v === false) continue;
      if (k === "class") el2.className = v;
      else if (k === "dataset") Object.assign(el2.dataset, v);
      else if (k === "vars") for (const [vk, vv] of Object.entries(v)) el2.style.setProperty(vk, String(vv));
      else if (k.startsWith("on") && typeof v === "function") el2.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k in el2 && typeof /** @type {any} */
      el2[k] !== "function") /** @type {any} */
      el2[k] = v;
      else el2.setAttribute(k, v === true ? "" : String(v));
    }
    const add = /* @__PURE__ */ __name((c) => {
      if (c == null || c === false) return;
      if (Array.isArray(c)) c.forEach(add);
      else el2.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }, "add");
    kids.forEach(add);
    return el2;
  }
  __name(h2, "h");
  var icon = /* @__PURE__ */ __name((name, cls = "") => h2("i", { class: `ti ${name} ${cls}` }), "icon");
  var kindVars = /* @__PURE__ */ __name((kind) => kindStyle(kind), "kindVars");
  var clone = /* @__PURE__ */ __name((x) => JSON.parse(JSON.stringify(x)), "clone");
  function addTo(root, ...conds) {
    if (root.join === "and" && !root.not) {
      root.items.push(...conds);
      return root;
    }
    return newGroup("and", [root, ...conds]);
  }
  __name(addTo, "addTo");
  function removeCond(root, target) {
    const prune = /* @__PURE__ */ __name((g) => {
      g.items = g.items.filter((n) => n !== target);
      g.items.forEach((n) => n.kind === "group" && prune(n));
      g.items = g.items.filter((n) => n.kind !== "group" || n.items.length);
      g.items = g.items.map((n) => n.kind === "group" && n.items.length === 1 && !n.not ? n.items[0] : n);
    }, "prune");
    prune(root);
  }
  __name(removeCond, "removeCond");
  var indexOf = /* @__PURE__ */ __name((root) => new Map(flatConds(root).map((c, i) => [c, i])), "indexOf");
  var bare = /* @__PURE__ */ __name((o) => {
    const { label, where, icon: _i, n, ...rest } = o;
    return rest;
  }, "bare");
  function tagOptions(tags) {
    const parents = new Set(tags.filter((t) => t.includes("/")).flatMap((t) => {
      const parts = t.split("/");
      return parts.slice(0, -1).map((_, i) => parts.slice(0, i + 1).join("/"));
    }));
    const all = [.../* @__PURE__ */ new Set([...tags, ...parents])].sort();
    return all.flatMap((t) => [
      ...parents.has(t) ? [{ kind: "tag", value: t, prefix: true }] : [],
      ...tags.includes(t) ? [{ kind: "tag", value: t }] : []
    ]);
  }
  __name(tagOptions, "tagOptions");
  var ADD_KINDS = [
    { kind: "status", title: "Task status", hint: "not done, done, overdue" },
    { kind: "flag", title: "Flag", hint: "important, starred, waiting" },
    { kind: "text", title: "Words", hint: "text it contains" },
    { kind: "link", title: "Link", hint: "links to a page, or a URL", icon: "ti-link", color: "link" },
    { kind: "collection", title: "Collection", hint: "only inside one collection" },
    { kind: "field", title: "Field", hint: "a collection property", icon: "ti-adjustments-horizontal", color: "field" },
    { kind: "tag", title: "Tag", hint: "#ideas, #project/\u2026" },
    { kind: "type", title: "Kind", hint: "pages, images, files" },
    { kind: "date", title: "Date", hint: "today, this week, next monday" },
    { kind: "detail", title: "Details", hint: "due before, edited since, made by", icon: "ti-clock", color: "detail" },
    { kind: "person", title: "Person", hint: "who it mentions" }
  ];
  var ADD_GROUPS = [
    { label: "Tasks", kinds: ["status", "flag"] },
    { label: "Content", kinds: ["text", "link"] },
    { label: "Where", kinds: ["collection", "field", "tag", "type"] },
    { label: "When", kinds: ["date", "detail"] },
    { label: "People", kinds: ["person"] }
  ];
  var COMBINE = [
    { code: "@a @b", say: "both" },
    { code: "@a OR @b", say: "either" },
    { code: "NOT @a", say: "leave out" },
    { code: "( \u2026 )", say: "group" }
  ];
  var searchHint = /* @__PURE__ */ __name((kind) => (
    /** @type {Record<string, string>} */
    {
      tag: "Search or type a tag\u2026",
      link: "Search pages to link to, or type a URL\u2026",
      date: "Search, or type: next monday, 5 days ago\u2026",
      collection: "Search collections\u2026",
      person: "Search people\u2026",
      text: "Words to find\u2026",
      fieldpick: "Search fields\u2026"
    }[kind] || "Search\u2026"
  ), "searchHint");
  function fieldValueWord(c) {
    const v = String(c.value ?? "");
    if (v === "") return c.op === "!=" ? "filled in" : "empty";
    if (c.op === "=" || !c.op) return v.replace(/^@/, "");
    if (c.op === "!=") return `not ${v}`;
    return `${c.op} ${v.replace(/^@/, "")}`;
  }
  __name(fieldValueWord, "fieldValueWord");
  var UNITS = ["day", "week", "month", "year"];
  var AMOUNT_PRESETS = [[1, "day"], [3, "day"], [7, "day"], [14, "day"], [30, "day"], [3, "month"], [1, "year"]];
  function amountOf(c) {
    if (!c || c.kind !== "meta" && c.kind !== "date") return null;
    const v = String(c.value ?? "");
    const pl = /* @__PURE__ */ __name((n, u) => `${n} ${u}${n === 1 ? "" : "s"}`, "pl");
    const forms = [
      [/^(\d+) (day|week|month|year)s? ago$/, (n, u) => `${pl(n, u)} ago`, (n, u) => `${pl(n, u)} ago`],
      [/^(\d+) (day|week|month|year)s? ago to today$/, (n, u) => `${pl(n, u)} ago to today`, (n, u) => `the last ${pl(n, u)}`],
      [/^today to in (\d+) (day|week|month|year)s?$/, (n, u) => `today to in ${pl(n, u)}`, (n, u) => `the next ${pl(n, u)}`],
      [/^in (\d+) (day|week|month|year)s?$/, (n, u) => `in ${pl(n, u)}`, (n, u) => `in ${pl(n, u)}`]
    ];
    for (const [re, make, say] of forms) {
      const m = re.exec(v);
      if (m) return { n: Number(m[1]), unit: m[2], make, say };
    }
    return null;
  }
  __name(amountOf, "amountOf");
  function amountLead(c, amountWords) {
    const label = chipLabel({ ...c, not: false });
    const at = label.lastIndexOf(amountWords);
    const lead = at >= 0 ? label.slice(0, at) : label;
    return lead.replace(/\s+(in|dated)?\s*$/, (m0, w) => w ? ` ${w}` : "").trim() || label;
  }
  __name(amountLead, "amountLead");
  function createQueryBuilder(deps) {
    const { data } = deps;
    const layer = h2("div", { class: UI_ROOT_CLASS, vars: { "z-index": Z_POPOVER } });
    layer.style.zIndex = String(Z_POPOVER);
    let teardown = [];
    let pop = null;
    let model = null;
    const ctxNames = /* @__PURE__ */ __name(() => ({ collections: data.ctx.collections.map((c) => c.name), users: data.ctx.users }), "ctxNames");
    const count = /* @__PURE__ */ __name((root) => data.count(toQuery(root)), "count");
    const countWith = /* @__PURE__ */ __name((root, c) => data.count(toQuery(addTo(clone(root), bare(c)))), "countWith");
    function countAs(root, c, next) {
      const saved = { ...c };
      for (const k of Object.keys(c)) delete c[k];
      Object.assign(c, bare(next), { not: saved.not });
      const q = toQuery(root);
      for (const k of Object.keys(c)) delete c[k];
      Object.assign(c, saved);
      return data.count(q);
    }
    __name(countAs, "countAs");
    function fieldList(names) {
      const want = new Set(names.map((n) => n.toLowerCase()));
      return data.ctx.collections.filter((c) => want.has(c.name.toLowerCase())).flatMap((coll) => coll.fields.map((f) => ({
        kind: "fieldpick",
        value: f.label,
        title: f.label,
        coll: coll.name,
        where: f.choices.length ? `${coll.name} \xB7 ${f.choices.length} options` : `${coll.name} \xB7 ${f.type}`,
        icon: f.choices.length ? "ti-list-check" : f.type === "number" ? "ti-123" : f.type === "datetime" ? "ti-calendar" : "ti-forms"
      })));
    }
    __name(fieldList, "fieldList");
    function fieldValues(coll, field) {
      const f = data.ctx.collections.find((c) => c.name === coll)?.fields.find((x) => x.label === field);
      const base = { kind: "field", coll, field };
      return [
        ...(f?.choices || []).map((ch) => ({ ...base, op: "=", value: ch, label: ch })),
        { ...base, op: "=", value: "", label: "is empty" },
        { ...base, op: "!=", value: "", label: "is filled in" }
      ];
    }
    __name(fieldValues, "fieldValues");
    function fieldCustom(coll, field) {
      const f = data.ctx.collections.find((c) => c.name === coll)?.fields.find((x) => x.label === field);
      if (f && f.choices.length) return () => null;
      return (q) => q.trim() ? { kind: "field", coll, field, op: "=", value: q.trim(), label: `is ${q.trim()}` } : null;
    }
    __name(fieldCustom, "fieldCustom");
    const queryCollections = /* @__PURE__ */ __name((m) => m.conds().filter((c) => c.kind === "collection" && !c.not).map((c) => String(c.value)), "queryCollections");
    function optionsFor(kind) {
      switch (kind) {
        case "status":
          return STATUS.map((s) => ({ kind, value: s.value }));
        case "flag":
          return FLAGS.map((s) => ({ kind, value: s.value }));
        case "type":
          return ITEM_TYPES.map((s) => ({ kind, value: s.value }));
        case "date":
          return DATE_PRESETS.map((s) => ({ kind, value: s.value }));
        case "person":
          return ["me", "mention", ...data.ctx.users].map((v) => ({ kind, value: v }));
        case "collection":
          return data.ctx.collections.map((x) => ({ kind, value: x.name }));
        case "tag":
          return tagOptions(data.ctx.tags);
        case "link":
          return [
            { kind: "meta", key: "linkto", op: "=", value: "currentpage" },
            { kind: "meta", key: "linkto", op: "=", value: "currentcollection" }
          ];
        case "detail":
          return [
            { kind: "meta", key: "due", op: "<=", value: "today" },
            { kind: "meta", key: "due", op: "<=", value: "tomorrow" },
            { kind: "meta", key: "modified_at", op: ">=", value: "yesterday" },
            { kind: "meta", key: "modified_at", op: ">=", value: "7 days ago" },
            { kind: "meta", key: "created_at", op: ">=", value: "7 days ago" },
            { kind: "meta", key: "created_by", op: "=", value: "@me" },
            { kind: "meta", key: "modified_by", op: "=", value: "@me" }
          ];
        default:
          return [];
      }
    }
    __name(optionsFor, "optionsFor");
    async function linkTargets(q) {
      return (await data.linkTargets(q)).map((t) => ({ kind: "meta", key: "linkto", op: "=", value: t.value, title: t.title, where: t.where, icon: t.icon }));
    }
    __name(linkTargets, "linkTargets");
    let openMenu = null;
    let chipMenu = null;
    function closeMenu() {
      openMenu?.remove();
      openMenu = null;
      chipMenu = null;
    }
    __name(closeMenu, "closeMenu");
    function place(menu, anchor2) {
      closeMenu();
      layer.appendChild(menu);
      openMenu = menu;
      const r = anchor2.getBoundingClientRect();
      const position2 = /* @__PURE__ */ __name(() => {
        if (!menu.isConnected) return;
        const vw = window.innerWidth, vh = window.innerHeight;
        menu.style.maxHeight = "";
        const w = menu.offsetWidth, mh = menu.offsetHeight;
        menu.style.left = `${Math.round(Math.max(VIEWPORT_MARGIN, Math.min(r.left, vw - w - VIEWPORT_MARGIN)))}px`;
        const below = vh - r.bottom - 6 - VIEWPORT_MARGIN;
        const above = r.top - 6 - VIEWPORT_MARGIN;
        let top;
        if (mh <= below) top = r.bottom + 6;
        else if (mh <= above) top = r.top - 6 - mh;
        else if (below >= above) {
          top = r.bottom + 6;
          menu.style.maxHeight = `${Math.max(160, below)}px`;
        } else {
          menu.style.maxHeight = `${Math.max(160, above)}px`;
          top = r.top - 6 - Math.min(mh, Math.max(160, above));
        }
        menu.style.top = `${Math.round(Math.max(VIEWPORT_MARGIN, top))}px`;
      }, "position");
      position2();
      const ro = new ResizeObserver(position2);
      ro.observe(menu);
      const stop = /* @__PURE__ */ __name(() => ro.disconnect(), "stop");
      const obs = new MutationObserver(() => {
        if (!menu.isConnected) {
          stop();
          obs.disconnect();
        }
      });
      obs.observe(layer, { childList: true });
    }
    __name(place, "place");
    function optionRow(cond, n, on, pick) {
      return h2(
        "button",
        { class: `opt${on ? " is-on" : ""}${n === 0 ? " is-zero" : ""}${n != null && n < 0 ? " is-bad" : ""}`, vars: kindVars(colorKind(cond)), onClick: pick, title: n != null && n < 0 ? data.error(toQuery(newGroup("and", [bare(cond)]))) || "Thymer can\u2019t read this" : null },
        h2("span", { class: "opt-check" }, on ? icon("ti-check") : null),
        h2("span", { class: "opt-label" }, cond.label || chipLabel({ ...cond, not: false })),
        h2("code", { class: "pill" }, serializeCond(bare(cond))),
        h2("span", { class: "opt-count" }, formatCount(n))
      );
    }
    __name(optionRow, "optionRow");
    function targetRow(t, n, on, pick) {
      return h2(
        "button",
        { class: `opt opt--target${on ? " is-on" : ""}`, vars: kindVars(t.kind === "fieldpick" ? "field" : "link"), title: t.kind === "fieldpick" ? null : t.value, onClick: pick },
        h2("span", { class: "opt-check" }, on ? icon("ti-check") : icon(t.icon || "ti-file-text")),
        h2("span", { class: "opt-label" }, t.title),
        h2("span", { class: "opt-where" }, t.where),
        h2("span", { class: "opt-count" }, n === void 0 ? "" : formatCount(n))
      );
    }
    __name(targetRow, "targetRow");
    function polarity(c, set) {
      return h2(
        "div",
        { class: "seg2" },
        h2("button", { class: `seg2-btn${c.not ? "" : " is-on"}`, onClick: /* @__PURE__ */ __name(() => set(false), "onClick") }, icon("ti-eye"), "Show"),
        h2("button", { class: `seg2-btn${c.not ? " is-on" : ""}`, onClick: /* @__PURE__ */ __name(() => set(true), "onClick") }, icon("ti-eye-off"), "Hide")
      );
    }
    __name(polarity, "polarity");
    function customFor(kind, q, opts) {
      const v = q.trim().replace(kind === "tag" ? /^#/ : /^$/, "");
      if (!v) return null;
      if (opts.some((o) => String(o.value).toLowerCase() === v.toLowerCase() || chipLabel(o).toLowerCase() === v.toLowerCase())) return null;
      if (kind === "tag") return { kind, value: v.replace(/\s+/g, "") };
      if (kind === "date") {
        const d = normalizeDate(v);
        return d ? { kind, value: d } : null;
      }
      if (kind === "text" || kind === "person") return { kind, value: v };
      if (kind === "link") return { kind: "meta", key: "link", op: "=", value: v };
      return null;
    }
    __name(customFor, "customFor");
    function picker(o) {
      const getOpts = /* @__PURE__ */ __name(() => o.opts || optionsFor(o.kind), "getOpts");
      const searchable = o.kind !== "amount" && (getOpts().length > 6 || ["tag", "date", "text", "person", "link"].includes(o.kind) || !getOpts().length);
      let q = "";
      let active = 0;
      let found = [];
      let searchSeq = 0;
      const list = h2("div", { class: "opts" });
      const rowEls = /* @__PURE__ */ __name(() => (
        /** @type {HTMLElement[]} */
        [...list.querySelectorAll(".opt")]
      ), "rowEls");
      const paintActive = /* @__PURE__ */ __name((scroll = true) => {
        const rows = rowEls();
        active = Math.max(0, Math.min(active, rows.length - 1));
        rows.forEach((el2, i) => el2.classList.toggle("is-active", i === active));
        if (scroll) rows[active]?.scrollIntoView?.({ block: "nearest" });
      }, "paintActive");
      const pick = /* @__PURE__ */ __name((x) => {
        o.onPick(x);
        draw();
      }, "pick");
      const draw = /* @__PURE__ */ __name(() => {
        const opts = getOpts();
        const ql = q.trim().toLowerCase().replace(/^#/, "");
        const shown = [...found, ...opts.filter((x) => !ql || String(x.label || x.title || chipLabel(x)).toLowerCase().includes(ql) || String(x.value).toLowerCase().includes(ql) || String(x.where || "").toLowerCase().includes(ql))];
        const rows = shown.map((x) => x.where ? targetRow(x, o.count(x), o.isOn(x), () => pick(x)) : optionRow(x, o.count(x) ?? null, o.isOn(x), () => pick(x)));
        const custom = o.custom ? o.custom(q) : customFor(o.kind, q, opts);
        if (custom) {
          const row = optionRow(custom, o.count(custom) ?? null, false, () => pick(custom));
          row.classList.add("is-custom");
          if (found.length) rows.splice(found.length, 0, row);
          else rows.unshift(row);
        }
        const badDate = o.kind === "date" && q.trim() && !custom && !normalizeDate(q);
        const hint = badDate ? h2("div", { class: "opts-hint" }, icon("ti-calendar-question"), h2("span", null, "Thymer won\u2019t read that date. Try ", h2("b", null, "in 4 days"), ", ", h2("b", null, "next friday"), " or ", h2("b", null, "aug 13"), ".")) : null;
        list.replaceChildren(...hint ? [hint] : [], ...rows.length ? rows : hint ? [] : [h2("div", { class: "opts-empty" }, "No matches")]);
        paintActive(false);
      }, "draw");
      const runSearch = /* @__PURE__ */ __name(() => {
        if (!o.search) return;
        const seq = ++searchSeq;
        const asked = q;
        if (!asked.trim()) {
          found = [];
          draw();
          return;
        }
        void o.search(asked).then((res) => {
          if (seq === searchSeq && asked === q) {
            found = res;
            draw();
          }
        }).catch(() => {
        });
      }, "runSearch");
      list.addEventListener("mousemove", (e) => {
        const row = (
          /** @type {HTMLElement} */
          e.target.closest?.(".opt")
        );
        const i = row ? rowEls().indexOf(
          /** @type {HTMLElement} */
          row
        ) : -1;
        if (i >= 0 && i !== active) {
          active = i;
          paintActive(false);
        }
      });
      const handleKey = /* @__PURE__ */ __name((e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          e.stopPropagation();
          active += e.key === "ArrowDown" ? 1 : -1;
          paintActive();
          return true;
        }
        if (e.key === "Enter" && !e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          e.stopPropagation();
          rowEls()[active]?.click();
          return true;
        }
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          (o.onEscape || closeMenu)();
          return true;
        }
        return false;
      }, "handleKey");
      const search = searchable ? h2("div", { class: "menu-search" }, icon("ti-search"), h2("input", {
        placeholder: searchHint(o.kind),
        spellcheck: false,
        onInput: /* @__PURE__ */ __name((e) => {
          q = e.target.value;
          active = 0;
          draw();
          runSearch();
        }, "onInput"),
        onKeydown: /* @__PURE__ */ __name((e) => {
          handleKey(e);
        }, "onKeydown")
      })) : null;
      draw();
      return { nodes: [search, list].filter(Boolean), focus: /* @__PURE__ */ __name(() => (
        /** @type {any} */
        search?.querySelector("input")?.focus()
      ), "focus"), redraw: draw, handleKey, hasSearch: !!search };
    }
    __name(picker, "picker");
    function amountEditor(n, unit, onChange, onEnter) {
      let cur = n;
      let u = unit;
      const clamp = /* @__PURE__ */ __name((x) => Math.max(1, Math.min(999, Math.round(x))), "clamp");
      const input = (
        /** @type {HTMLInputElement} */
        h2("input", { class: "amt-input", type: "text", inputMode: "numeric", value: String(cur), spellcheck: false })
      );
      const set = /* @__PURE__ */ __name((x) => {
        cur = clamp(x);
        input.value = String(cur);
        onChange(cur, u);
      }, "set");
      input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
          e.stopPropagation();
          set(cur + (e.key === "ArrowUp" ? 1 : -1) * (e.shiftKey ? 10 : 1));
        } else if (e.key === "Enter" && !e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          e.stopPropagation();
          const x = parseInt(input.value, 10);
          if (Number.isFinite(x)) set(x);
          else input.value = String(cur);
          onEnter?.();
        }
      });
      const commit = /* @__PURE__ */ __name(() => {
        const x = parseInt(input.value, 10);
        if (Number.isFinite(x)) set(x);
        else input.value = String(cur);
      }, "commit");
      input.addEventListener("change", commit);
      input.addEventListener("blur", commit);
      const units = h2("div", { class: "seg2 amt-units" }, UNITS.map((x) => h2("button", {
        class: `seg2-btn${x === u ? " is-on" : ""}`,
        onClick: /* @__PURE__ */ __name(() => {
          u = x;
          units.querySelectorAll(".seg2-btn").forEach((b, i) => b.classList.toggle("is-on", UNITS[i] === u));
          onChange(cur, u);
        }, "onClick")
      }, `${x}s`)));
      return h2(
        "div",
        { class: "amt" },
        h2("button", { class: "icon-btn amt-step", title: "Less (\u2193)", onClick: /* @__PURE__ */ __name(() => set(cur - 1), "onClick") }, icon("ti-minus")),
        input,
        h2("button", { class: "icon-btn amt-step", title: "More (\u2191)", onClick: /* @__PURE__ */ __name(() => set(cur + 1), "onClick") }, icon("ti-plus")),
        units
      );
    }
    __name(amountEditor, "amountEditor");
    const amountPresets = /* @__PURE__ */ __name((c) => {
      const a = amountOf(c);
      if (!a) return [];
      return AMOUNT_PRESETS.map(([n, u]) => ({ ...bare(c), value: a.make(
        /** @type {number} */
        n,
        /** @type {string} */
        u
      ), label: a.say(
        /** @type {number} */
        n,
        /** @type {string} */
        u
      ) }));
    }, "amountPresets");
    function editChip(m, c, anchor2, opts = {}) {
      const meta = KIND_META[colorKind(c)] || KIND_META[c.kind] || KIND_META.raw;
      const pol = h2("div");
      const body = h2("div", { class: "menu-body" });
      let pk = null;
      const swap = /* @__PURE__ */ __name((o) => {
        const not = c.not;
        for (const k of Object.keys(c)) delete c[k];
        Object.assign(c, bare(o), o.title ? { title: o.title } : {}, not ? { not } : {});
        m.touched();
      }, "swap");
      const common = { count: /* @__PURE__ */ __name((o) => countAs(m.root, c, o), "count"), isOn: /* @__PURE__ */ __name((o) => serializeCond(bare(o)) === serializeCond({ ...c, not: false }), "isOn"), onPick: swap };
      const fieldValuesStep = /* @__PURE__ */ __name((coll, field) => {
        pk = picker({ kind: "field", ...common, opts: fieldValues(coll, field), custom: fieldCustom(coll, field), onEscape: fieldsStep });
        body.replaceChildren(h2("div", { class: "menu-crumb" }, h2("button", { class: "icon-btn", title: "Other fields", onClick: fieldsStep }, icon("ti-arrow-left")), h2("span", null, `${coll} \xB7 `, h2("b", null, field))), ...pk.nodes);
        if (pk.hasSearch) pk.focus();
        else menu.focus();
      }, "fieldValuesStep");
      const fieldsStep = /* @__PURE__ */ __name(() => {
        pk = picker({ kind: "fieldpick", opts: fieldList([String(c.coll), ...queryCollections(m)]), count: /* @__PURE__ */ __name(() => void 0, "count"), isOn: /* @__PURE__ */ __name((x) => x.coll === c.coll && x.value === c.field, "isOn"), onPick: /* @__PURE__ */ __name((x) => fieldValuesStep(x.coll, x.value), "onPick") });
        body.replaceChildren(...pk.nodes);
        if (pk.hasSearch) pk.focus();
        else menu.focus();
      }, "fieldsStep");
      const drawPol = /* @__PURE__ */ __name(() => pol.replaceChildren(polarity(c, (not) => {
        c.not = not;
        m.touched();
        drawPol();
        pk?.redraw();
      })), "drawPol");
      drawPol();
      const menu = h2(
        "div",
        { class: "menu", tabIndex: -1, vars: kindVars(colorKind(c)), onKeydown: /* @__PURE__ */ __name((e) => {
          if (
            /** @type {HTMLElement} */
            e.target.tagName !== "INPUT"
          ) pk?.handleKey(e);
        }, "onKeydown") },
        h2(
          "div",
          { class: "menu-head" },
          h2("span", { class: "menu-kind" }, icon(meta.icon), meta.noun),
          h2("span", { class: "spacer" }),
          pol,
          h2("button", { class: "icon-btn", title: "Remove", onClick: /* @__PURE__ */ __name(() => {
            closeMenu();
            removeCond(m.root, c);
            m.touched();
          }, "onClick") }, icon("ti-trash"))
        ),
        body
      );
      place(menu, anchor2);
      if (c.kind === "field") {
        if (opts.step === "fields") fieldsStep();
        else fieldValuesStep(String(c.coll), String(c.field));
      } else if (opts.step === "amount" && amountOf(c)) {
        const a = (
          /** @type {any} */
          amountOf(c)
        );
        pk = picker({ kind: "amount", ...common, opts: amountPresets(c) });
        const ed = amountEditor(a.n, a.unit, (n, u) => {
          const cur = amountOf(c);
          if (!cur) return;
          c.value = cur.make(n, u);
          m.touched();
          pk?.redraw();
        });
        body.replaceChildren(ed, ...pk.nodes);
        ed.querySelector(".amt-input")?.focus();
        ed.querySelector(".amt-input")?.select();
      } else {
        pk = picker({ kind: c.kind, ...common, search: c.kind === "meta" && (c.key === "linkto" || c.key === "link") ? linkTargets : void 0 });
        body.replaceChildren(...pk.nodes);
        if (pk.hasSearch) pk.focus();
        else menu.focus();
      }
      chipMenu = { c, sync: /* @__PURE__ */ __name(() => {
        drawPol();
        pk?.redraw();
      }, "sync") };
    }
    __name(editChip, "editChip");
    function addMenu(m, anchor2) {
      const menu = h2("div", { class: "menu menu--add", tabIndex: -1 });
      let inKind = false;
      let pk = null;
      let homeActive = 0;
      const homeRows = /* @__PURE__ */ __name(() => (
        /** @type {HTMLElement[]} */
        [...menu.querySelectorAll(".add-row:not(.is-off)")]
      ), "homeRows");
      const paintHome = /* @__PURE__ */ __name((scroll = true) => {
        const rows = homeRows();
        homeActive = Math.max(0, Math.min(homeActive, rows.length - 1));
        rows.forEach((el2, i) => el2.classList.toggle("is-active", i === homeActive));
        if (scroll) rows[homeActive]?.scrollIntoView?.({ block: "nearest" });
      }, "paintHome");
      menu.addEventListener("keydown", (e) => {
        if (inKind) {
          if (
            /** @type {HTMLElement} */
            e.target.tagName !== "INPUT"
          ) pk?.handleKey(e);
          return;
        }
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          e.stopPropagation();
          homeActive += e.key === "ArrowDown" ? 1 : -1;
          paintHome();
        } else if (e.key === "Enter" && !e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          e.stopPropagation();
          homeRows()[homeActive]?.click();
        } else if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          closeMenu();
        }
      });
      menu.addEventListener("mousemove", (e) => {
        if (inKind) return;
        const row = (
          /** @type {HTMLElement} */
          e.target.closest?.(".add-row")
        );
        const i = row ? homeRows().indexOf(
          /** @type {HTMLElement} */
          row
        ) : -1;
        if (i >= 0 && i !== homeActive) {
          homeActive = i;
          paintHome(false);
        }
      });
      const added = /* @__PURE__ */ new Set();
      const addOnce = /* @__PURE__ */ __name((o) => {
        const key = serializeCond(bare(o));
        if (added.has(key)) return;
        added.add(key);
        m.add({ ...bare(o), ...o.title ? { title: o.title } : {} });
      }, "addOnce");
      const isAdded = /* @__PURE__ */ __name((o) => added.has(serializeCond(bare(o))), "isAdded");
      const head = /* @__PURE__ */ __name((title, ico, back) => h2("div", { class: "menu-head menu-head--back" }, h2("button", { class: "icon-btn", title: "Back", onClick: back }, icon("ti-arrow-left")), h2("span", { class: "menu-kind" }, icon(ico), title)), "head");
      const home = /* @__PURE__ */ __name(() => {
        inKind = false;
        menu.style.removeProperty("--k-fg");
        menu.style.removeProperty("--k-bg");
        const colls = queryCollections(m);
        const fieldsHint = /* @__PURE__ */ __name(() => {
          const labels = [...new Set(data.ctx.collections.filter((c) => colls.some((n) => n.toLowerCase() === c.name.toLowerCase())).flatMap((c) => c.fields.map((f) => f.label)))];
          return labels.length ? labels.join(", ") : "these collections have no fields";
        }, "fieldsHint");
        const row = /* @__PURE__ */ __name((k) => {
          const off = k.kind === "field" && !colls.length;
          const hint = k.kind === "field" ? off ? "Add a collection first" : fieldsHint() : k.hint;
          return h2(
            "button",
            { class: `add-row${off ? " is-off" : ""}`, vars: kindVars(k.color || k.kind), disabled: off, title: off ? "Fields belong to a collection \u2014 add one first" : null, onClick: /* @__PURE__ */ __name(() => {
              if (!off) open2(k.kind);
            }, "onClick") },
            h2("span", { class: "add-icon" }, icon(k.icon || KIND_META[k.kind].icon)),
            h2("span", { class: "add-text" }, h2("span", { class: "add-title" }, k.title), h2("span", { class: "add-hint" }, hint)),
            icon(off ? "ti-lock" : "ti-chevron-right", "add-chev")
          );
        }, "row");
        menu.replaceChildren(...ADD_GROUPS.map((g, gi) => h2(
          "div",
          { class: `add-group${gi ? " add-group--divided" : ""}` },
          h2("div", { class: "add-group-label" }, g.label),
          g.kinds.map((kind) => row(ADD_KINDS.find((k) => k.kind === kind)))
        )));
        paintHome(false);
        menu.focus();
      }, "home");
      const openFields = /* @__PURE__ */ __name(() => {
        inKind = true;
        for (const [k, v] of Object.entries(kindVars("field"))) menu.style.setProperty(k, v);
        pk = picker({ kind: "fieldpick", opts: fieldList(queryCollections(m)), count: /* @__PURE__ */ __name(() => void 0, "count"), isOn: /* @__PURE__ */ __name(() => false, "isOn"), onPick: /* @__PURE__ */ __name((x) => openFieldValues(x.coll, x.value), "onPick"), onEscape: home });
        menu.replaceChildren(head("Field", "ti-adjustments-horizontal", home), ...pk.nodes);
        menu.focus();
        if (pk.hasSearch) pk.focus();
      }, "openFields");
      const openFieldValues = /* @__PURE__ */ __name((coll, field) => {
        pk = picker({ kind: "field", opts: fieldValues(coll, field), custom: fieldCustom(coll, field), onEscape: openFields, count: /* @__PURE__ */ __name((o) => countWith(m.root, o), "count"), isOn: isAdded, onPick: addOnce });
        menu.replaceChildren(h2(
          "div",
          { class: "menu-head menu-head--back" },
          h2("button", { class: "icon-btn", title: "Back", onClick: openFields }, icon("ti-arrow-left")),
          h2("span", { class: "menu-kind" }, icon("ti-adjustments-horizontal"), `${coll} \xB7 `, h2("b", null, field))
        ), ...pk.nodes);
        menu.focus();
        if (pk.hasSearch) pk.focus();
      }, "openFieldValues");
      const openAmount = /* @__PURE__ */ __name((base, back) => {
        const a = (
          /** @type {any} */
          amountOf(base)
        );
        let draft = { ...bare(base) };
        pk = picker({ kind: "amount", opts: amountPresets(base), onEscape: back, count: /* @__PURE__ */ __name((o) => countWith(m.root, o), "count"), isOn: isAdded, onPick: addOnce });
        const ed = amountEditor(a.n, a.unit, (n, u) => {
          draft = { ...draft, value: a.make(n, u) };
        }, () => addOnce(draft));
        const addBtn = h2("button", { class: "amt-add", onClick: /* @__PURE__ */ __name(() => addOnce(draft), "onClick") }, icon("ti-plus"), "Add");
        menu.replaceChildren(
          h2(
            "div",
            { class: "menu-head menu-head--back" },
            h2("button", { class: "icon-btn", title: "Back", onClick: back }, icon("ti-arrow-left")),
            h2("span", { class: "menu-kind" }, icon(KIND_META[colorKind(base)]?.icon || "ti-clock"), amountLead(base, a.say(a.n, a.unit)), "\u2026")
          ),
          h2("div", { class: "amt-row" }, ed, addBtn),
          ...pk.nodes
        );
        menu.focus();
        ed.querySelector(".amt-input")?.focus();
        ed.querySelector(".amt-input")?.select();
      }, "openAmount");
      const open2 = /* @__PURE__ */ __name((kind) => {
        if (kind === "field") {
          openFields();
          return;
        }
        const entry = (
          /** @type {any} */
          ADD_KINDS.find((k) => k.kind === kind)
        );
        for (const [k, v] of Object.entries(kindVars(entry?.color || kind))) menu.style.setProperty(k, v);
        inKind = true;
        pk = picker({
          kind,
          count: /* @__PURE__ */ __name((o) => countWith(m.root, o), "count"),
          onEscape: home,
          isOn: isAdded,
          search: kind === "link" ? linkTargets : void 0,
          // Relative options ("edited since 7 days ago") take a second step for the amount.
          onPick: /* @__PURE__ */ __name((o) => {
            if (amountOf(o)) openAmount(o, () => open2(kind));
            else addOnce(o);
          }, "onPick")
        });
        menu.replaceChildren(head(entry?.title || kind, entry?.icon || KIND_META[kind]?.icon, home), ...pk.nodes);
        menu.focus();
        if (pk.hasSearch) pk.focus();
      }, "open");
      home();
      place(menu, anchor2);
      menu._repaint = () => pk?.redraw();
    }
    __name(addMenu, "addMenu");
    function createModel() {
      const subs = /* @__PURE__ */ new Set();
      const m = {
        text: "",
        /** @type {any} */
        root: newGroup("and", []),
        /** @type {any[]} */
        matched: [],
        /** @type {any[]} */
        unknown: [],
        source: "words",
        /** @type {string | null} */
        codeDraft: null,
        /** @type {Set<string>} */
        prevKeys: /* @__PURE__ */ new Set(),
        /** @param {() => void} fn */
        on(fn) {
          subs.add(fn);
        },
        emit() {
          subs.forEach((fn) => fn());
        },
        conds() {
          return flatConds(m.root);
        },
        query() {
          return m.codeDraft ?? toQuery(m.root);
        },
        /** @param {string} t */
        setText(t) {
          m.text = t;
          const r = parseNatural(t, data.ctx);
          m.root = r.root;
          m.matched = r.matches;
          m.unknown = r.unknown;
          m.source = "words";
          m.codeDraft = null;
          m.emit();
        },
        /** @param {string} q */
        setCode(q) {
          m.codeDraft = q;
          m.root = parse(q, ctxNames());
          m.source = "code";
          m.unknown = [];
          resolveTitles(m.root);
          m.emit();
        },
        snapshot() {
          return { text: m.text, root: clone(m.root), source: m.source, codeDraft: m.codeDraft, matched: m.matched, unknown: m.unknown };
        },
        /** @param {any} snap */
        restore(snap) {
          Object.assign(m, { ...snap, root: clone(snap.root) });
          m.emit();
        },
        /** @type {((snap: any) => void) | null} */
        onReplaced: null,
        /** @param {string} q */
        load(q) {
          const before = m.conds().length || m.text.trim() ? m.snapshot() : null;
          m.codeDraft = null;
          m.root = parse(q, ctxNames());
          m.source = "manual";
          m.unknown = [];
          resolveTitles(m.root);
          m.emit();
          if (before) m.onReplaced?.(before);
        },
        /** @param {any} c */
        add(c) {
          m.root = addTo(m.root, c);
          m.touched();
        },
        touched() {
          m.source = "manual";
          m.codeDraft = null;
          m.emit();
        }
      };
      return m;
    }
    __name(createModel, "createModel");
    function resolveTitles(root) {
      for (const c of flatConds(root)) {
        if (c.kind === "meta" && (c.key === "linkto" || c.key === "backref") && c.value && !/^current/.test(String(c.value)) && !c.title) {
          const t = data.title(String(c.value));
          if (t) c.title = t;
        }
      }
    }
    __name(resolveTitles, "resolveTitles");
    function overlayField(o) {
      const base = o.cls.split(" ")[0];
      const ta = (
        /** @type {HTMLTextAreaElement} */
        h2("textarea", { class: `of-input ${base}-input`, rows: 1, spellcheck: false, placeholder: o.placeholder })
      );
      const hl = h2("div", { class: `of-hl ${base}-hl`, "aria-hidden": "true" });
      ta.value = o.value;
      const size = /* @__PURE__ */ __name(() => {
        ta.style.height = "auto";
        ta.style.height = `${ta.scrollHeight}px`;
      }, "size");
      ta.addEventListener("input", () => {
        size();
        o.onInput(ta.value);
      });
      ta.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.metaKey && !e.ctrlKey) e.preventDefault();
      });
      requestAnimationFrame(size);
      return { el: h2("div", { class: `of ${o.cls}` }, hl, ta), ta, hl, size };
    }
    __name(overlayField, "overlayField");
    function condRanges(root, q) {
      const out = [];
      let at = 0;
      flatConds(root).forEach((c, i) => {
        const body = serializeCond(c);
        if (!body) return;
        const text = (c.not ? "NOT " : "") + body;
        let s = q.indexOf(text, at);
        let e = s + text.length;
        if (s < 0) {
          s = q.indexOf(body, at);
          e = s + body.length;
        }
        if (s < 0) return;
        out.push({ s, e, i });
        at = e;
      });
      return out;
    }
    __name(condRanges, "condRanges");
    const toks = /* @__PURE__ */ __name((str) => highlightQuery(str, ctxNames()).map((s) => s.kind === "ws" ? s.text : h2("span", { class: `tok tok--${s.kind}`, vars: kindVars(s.kind) }, s.text)), "toks");
    function queryMarkup(root, q, grouped) {
      if (!grouped) return toks(q);
      const out = [];
      let at = 0;
      for (const r of condRanges(root, q)) {
        if (r.s > at) out.push(...toks(q.slice(at, r.s)));
        out.push(h2("span", { class: "seg", dataset: { i: String(r.i) } }, toks(q.slice(r.s, r.e))));
        at = r.e;
      }
      if (at < q.length) out.push(...toks(q.slice(at)));
      return out;
    }
    __name(queryMarkup, "queryMarkup");
    function wordsField(m) {
      const f = overlayField({ cls: "words", placeholder: "Describe your query.", value: m.text, onInput: /* @__PURE__ */ __name((v) => m.setText(v), "onInput") });
      const paint = /* @__PURE__ */ __name(() => {
        const idx = indexOf(m.root);
        const stale = m.source !== "words";
        const marks = m.matched.map((mt) => ({ s: mt.start, e: mt.end, kind: mt.conds[0] ? colorKind(mt.conds[0]) : mt.kind, i: mt.conds.length ? idx.get(mt.conds[0]) : void 0, cls: "mark" }));
        marks.sort((a, b) => a.s - b.s);
        const out = [];
        let at = 0;
        for (const mk of marks) {
          if (mk.s < at) continue;
          out.push(m.text.slice(at, mk.s), h2("mark", { class: mk.cls, vars: kindVars(mk.kind), dataset: mk.i != null ? { i: String(mk.i) } : {} }, m.text.slice(mk.s, mk.e)));
          at = mk.e;
        }
        out.push(m.text.slice(at) + "\n");
        f.hl.replaceChildren(...out);
        f.hl.classList.toggle("is-stale", stale);
        if (document.activeElement !== f.ta && f.ta.value !== m.text) {
          f.ta.value = m.text;
          f.size();
        }
      }, "paint");
      m.on(paint);
      paint();
      const wrap = h2("div", { class: "words-wrap", onMousedown: /* @__PURE__ */ __name((e) => {
        if (e.target !== f.ta) {
          e.preventDefault();
          f.ta.focus();
          f.ta.setSelectionRange(f.ta.value.length, f.ta.value.length);
        }
      }, "onMousedown") }, f.el);
      return { el: wrap, ta: f.ta };
    }
    __name(wordsField, "wordsField");
    function queryDock(m, use, canApply) {
      const f = overlayField({ cls: "query", placeholder: "@todo @today", value: m.query(), onInput: /* @__PURE__ */ __name((v) => m.setCode(v), "onInput") });
      const copy = h2("button", { class: "icon-btn sm", title: "Copy", onClick: /* @__PURE__ */ __name(() => {
        void navigator.clipboard?.writeText(m.query());
        copy.replaceChildren(icon("ti-check"));
        setTimeout(() => copy.replaceChildren(icon("ti-copy")), 1e3);
      }, "onClick") }, icon("ti-copy"));
      const useBtn = h2(
        "button",
        { class: "primary-btn", onClick: use, title: canApply ? "Write this query into the field" : "Copy this query" },
        h2("span", { class: "use-label" }, canApply ? "Use" : "Copy"),
        h2("kbd", { class: "btn-kbd" }, IS_MAC ? "\u2318\u21B5" : "Ctrl \u21B5")
      );
      const readText = h2("span", { class: "readout-text" });
      const readout = h2("div", { class: "readout" }, readText);
      let lastRead = "";
      const sweep = /* @__PURE__ */ __name(() => {
        readText.classList.remove("is-sweep");
        void readText.offsetWidth;
        readText.classList.add("is-sweep");
      }, "sweep");
      readText.addEventListener("animationend", () => readText.classList.remove("is-sweep"));
      const setRead = /* @__PURE__ */ __name((sentence, bad = false) => {
        readout.classList.toggle("is-bad", bad);
        if (sentence === lastRead) return;
        const first = !lastRead;
        lastRead = sentence;
        readText.textContent = sentence;
        if (!first) sweep();
      }, "setRead");
      const paintReadout = /* @__PURE__ */ __name(() => {
        const q = m.query().trim();
        const n = q ? data.count(q) : null;
        if (n === -1) {
          setRead(`Thymer can\u2019t read this query: ${data.error(q) || "check the syntax"}`, true);
          return;
        }
        setRead(readable(m.root));
      }, "paintReadout");
      const paint = /* @__PURE__ */ __name(() => {
        paintReadout();
        const q = m.query();
        if (document.activeElement !== f.ta && f.ta.value !== q) {
          f.ta.value = q;
          f.size();
        }
        f.hl.replaceChildren(...queryMarkup(m.root, f.ta.value, m.source !== "code"), "\n");
      }, "paint");
      m.on(paint);
      teardown.push(data.on(() => paintReadout()));
      paint();
      return { el: h2("div", { class: "dock" }, readout, f.el, h2("div", { class: "dock-bar" }, h2("span", { class: "spacer" }), copy, useBtn)), useBtn, ta: f.ta };
    }
    __name(queryDock, "queryDock");
    function chipsRow(m) {
      const row = h2("div", { class: "chips" });
      const toggle = /* @__PURE__ */ __name((node, el2) => {
        node.not = !node.not;
        m.touched();
        if (chipMenu && chipMenu.c === node) chipMenu.sync();
      }, "toggle");
      const ico = /* @__PURE__ */ __name((node, restIcon) => h2("span", {
        class: "chip-ico",
        role: "button",
        title: node.not ? "Show these" : "Hide these",
        onMousedown: /* @__PURE__ */ __name((e) => {
          e.preventDefault();
          e.stopPropagation();
        }, "onMousedown"),
        onClick: /* @__PURE__ */ __name((e) => {
          e.stopPropagation();
          toggle(node, null);
        }, "onClick")
      }, icon(node.not ? "ti-eye-off" : restIcon, "chip-icon chip-icon--rest"), icon(node.not ? "ti-eye" : "ti-eye-off", "chip-icon chip-icon--hover")), "ico");
      const x = /* @__PURE__ */ __name((node) => h2("span", { class: "chip-x", title: "Remove", onClick: /* @__PURE__ */ __name((e) => {
        e.stopPropagation();
        removeCond(m.root, node);
        m.touched();
      }, "onClick") }, icon("ti-x")), "x");
      const paint = /* @__PURE__ */ __name(() => {
        const idx = indexOf(m.root);
        const key = /* @__PURE__ */ __name((c) => serializeCond(c) + (c.not ? "!" : ""), "key");
        const keys = new Set(m.conds().map(key));
        const fresh = new Set([...keys].filter((k) => !m.prevKeys.has(k)));
        m.prevKeys = keys;
        const walk = /* @__PURE__ */ __name((node, top) => {
          if (node.kind !== "group") {
            const meta = KIND_META[colorKind(node)] || KIND_META[node.kind] || KIND_META.raw;
            const amt = amountOf(node);
            if (amt) {
              const words = amt.say(amt.n, amt.unit);
              const el3 = h2(
                "span",
                { class: `chip chip--split${node.not ? " is-not" : ""}${fresh.has(key(node)) ? " is-fresh" : ""}`, vars: kindVars(colorKind(node)), dataset: { i: String(idx.get(node)) } },
                ico(node, meta.icon),
                h2("span", { class: "chip-seg chip-seg--field", role: "button", tabIndex: 0, title: "Change filter", onClick: /* @__PURE__ */ __name((e) => {
                  e.stopPropagation();
                  editChip(m, node, el3);
                }, "onClick") }, amountLead(node, words)),
                h2("span", { class: "chip-seg chip-seg--value", role: "button", tabIndex: 0, title: "Change amount", onClick: /* @__PURE__ */ __name((e) => {
                  e.stopPropagation();
                  editChip(m, node, el3, { step: "amount" });
                }, "onClick") }, words),
                x(node)
              );
              return [el3];
            }
            if (node.kind === "field") {
              const el3 = h2(
                "span",
                { class: `chip chip--split${node.not ? " is-not" : ""}${fresh.has(key(node)) ? " is-fresh" : ""}`, vars: kindVars("field"), dataset: { i: String(idx.get(node)) } },
                ico(node, "ti-adjustments-horizontal"),
                h2(
                  "span",
                  { class: "chip-seg chip-seg--field", role: "button", tabIndex: 0, title: "Change field", onClick: /* @__PURE__ */ __name((e) => {
                    e.stopPropagation();
                    editChip(m, node, el3, { step: "fields" });
                  }, "onClick") },
                  h2("span", { class: "chip-seg-coll" }, node.coll, " \xB7 "),
                  node.field
                ),
                h2(
                  "span",
                  { class: "chip-seg chip-seg--value", role: "button", tabIndex: 0, title: "Change value", onClick: /* @__PURE__ */ __name((e) => {
                    e.stopPropagation();
                    editChip(m, node, el3, { step: "values" });
                  }, "onClick") },
                  fieldValueWord(node)
                ),
                x(node)
              );
              return [el3];
            }
            const el2 = h2(
              "span",
              {
                class: `chip${node.not ? " is-not" : ""}${fresh.has(key(node)) ? " is-fresh" : ""}`,
                vars: kindVars(colorKind(node)),
                tabIndex: 0,
                role: "button",
                dataset: { i: String(idx.get(node)) },
                onClick: /* @__PURE__ */ __name((e) => {
                  if (!/** @type {HTMLElement} */
                  e.target.closest(".chip-x, .chip-ico")) editChip(m, node, el2);
                }, "onClick"),
                onKeydown: /* @__PURE__ */ __name((e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    editChip(m, node, el2);
                  }
                }, "onKeydown")
              },
              ico(node, meta.icon),
              h2("span", { class: "chip-label" }, chipLabel({ ...node, not: false })),
              x(node)
            );
            return [el2];
          }
          const out = [];
          node.items.forEach((n, i) => {
            if (i && node.join === "or") out.push(h2("span", { class: "joiner" }, "or"));
            out.push(...walk(n, false));
          });
          return top || node.join !== "or" ? out : [h2("span", { class: "cluster" }, out)];
        }, "walk");
        const add = h2("button", { class: "add-chip", title: "Add filter", onClick: /* @__PURE__ */ __name(() => addMenu(m, add), "onClick") }, icon("ti-plus"));
        row.replaceChildren(...walk(m.root, true), add);
      }, "paint");
      m.on(paint);
      paint();
      return row;
    }
    __name(chipsRow, "chipsRow");
    function suggestions(m) {
      const row = h2("div", { class: "suggest" });
      const paint = /* @__PURE__ */ __name(() => {
        const q = toQuery(m.root);
        const empty = !m.conds().length;
        const now = empty ? Infinity : count(m.root);
        const seen = new Set(m.conds().map((c) => serializeCond({ ...c, not: false })));
        const candidates = [...suggestNext(m.root, { collections: data.ctx.collections, tags: data.ctx.tags })].filter((c) => {
          const k = serializeCond({ ...c, not: false });
          if (!k || seen.has(k)) return false;
          seen.add(k);
          return true;
        });
        const picks = candidates.map((c) => ({ c, n: countWith(m.root, c) })).filter((x) => x.n == null || x.n > 0 && (empty || now == null || now < 0 || x.n < now)).slice(0, empty ? 7 : 5);
        row.replaceChildren(...picks.map(({ c, n }) => h2(
          "button",
          { class: "sug", vars: kindVars(colorKind(c)), onClick: /* @__PURE__ */ __name(() => m.add({ ...c }), "onClick") },
          icon(c.not ? "ti-minus" : empty ? KIND_META[colorKind(c)]?.icon || "ti-plus" : "ti-plus", "sug-icon"),
          chipLabel(c),
          h2("span", { class: "sug-n" }, formatCount(n))
        )));
      }, "paint");
      m.on(paint);
      teardown.push(data.on(paint));
      paint();
      return row;
    }
    __name(suggestions, "suggestions");
    const GUIDE_ROWS = {
      status: ["todo", "done", "overdue", "due", "unassigned", "scheduled"].map((v) => ({ kind: "status", value: v })),
      flag: ["important", "starred", "inprogress", "waiting"].map((v) => ({ kind: "flag", value: v })),
      text: [{ kind: "text", value: "meeting notes" }, { kind: "text", value: "release notes", exact: true }],
      link: [{ kind: "meta", key: "linkto", op: "=", value: "currentpage" }, { kind: "meta", key: "link", op: "=", value: "github" }],
      tag: [{ kind: "tag", value: "ideas" }, { kind: "tag", value: "project", prefix: true }],
      type: [{ kind: "type", value: "document" }, { kind: "type", value: "image" }],
      date: [...["today", "tomorrow", "thisweek", "nextweek"].map((v) => ({ kind: "date", value: v })), { kind: "date", value: "next monday" }, { kind: "date", value: "5 days ago" }],
      detail: [
        { kind: "meta", key: "due", op: "<=", value: "today" },
        { kind: "meta", key: "modified_at", op: ">=", value: "yesterday" },
        { kind: "meta", key: "created_by", op: "=", value: "@me" }
      ],
      person: [{ kind: "person", value: "me" }, { kind: "person", value: "mention" }]
    };
    function guideRows(kind) {
      const first = data.ctx.collections[0];
      if (kind === "collection") return first ? [{ kind: "collection", value: first.name }] : [];
      if (kind === "field") {
        const coll = data.ctx.collections.find((c) => c.fields.some((f2) => f2.choices.length)) || data.ctx.collections.find((c) => c.fields.length);
        const f = coll?.fields.find((x) => x.choices.length) || coll?.fields[0];
        return coll && f ? [{ kind: "field", coll: coll.name, field: f.label, op: "=", value: f.choices[0] || "" }, { kind: "field", coll: coll.name, field: f.label, op: "=", value: "" }] : [];
      }
      return GUIDE_ROWS[kind] || [];
    }
    __name(guideRows, "guideRows");
    function drawer(m) {
      const tabsEl = h2("div", { class: "drawer-tabs" });
      const body = h2("div", { class: "drawer-body" });
      let tab = localStorage.getItem(deps.storageKey("drawer-tab")) || "matches";
      let seq = 0;
      let timer = 0;
      const countLabel = /* @__PURE__ */ __name(() => {
        const q = m.query().trim();
        if (!q) return "";
        return formatCount(data.count(q));
      }, "countLabel");
      const paintTabs = /* @__PURE__ */ __name(() => tabsEl.replaceChildren(
        h2("button", { class: `dtab${tab === "matches" ? " is-on" : ""}`, onClick: /* @__PURE__ */ __name(() => api.show("matches"), "onClick") }, "Matches", h2("span", { class: "dtab-n" }, countLabel())),
        h2("button", { class: `dtab${tab === "guide" ? " is-on" : ""}`, onClick: /* @__PURE__ */ __name(() => api.show("guide"), "onClick") }, "Guide")
      ), "paintTabs");
      const paintMatches = /* @__PURE__ */ __name(() => {
        const q = m.query().trim();
        const mine = ++seq;
        if (!q) {
          body.replaceChildren(h2("div", { class: "empty" }, icon("ti-search"), "Matches appear here"));
          return;
        }
        clearTimeout(timer);
        timer = window.setTimeout(() => {
          void data.matches(q).then((res) => {
            if (mine !== seq || tab !== "matches") return;
            if (res.error) {
              body.replaceChildren(h2("div", { class: "empty" }, icon("ti-alert-triangle"), res.error));
              return;
            }
            if (!res.items.length) {
              body.replaceChildren(h2("div", { class: "empty" }, icon("ti-mood-empty"), "No matches"));
              return;
            }
            body.replaceChildren(h2("div", { class: "list" }, res.items.map((it) => h2(
              "button",
              { class: "result", title: "Open", onClick: /* @__PURE__ */ __name(() => openItem(it), "onClick") },
              it.kind === "task" ? h2("span", { class: `checkbox${it.done ? " is-done" : ""}` }, it.done ? icon("ti-check") : null) : icon(it.kind === "page" ? "ti-file-text" : "ti-align-left", "result-icon"),
              h2(
                "div",
                { class: "result-body" },
                h2("span", { class: `result-title${it.done ? " is-done" : ""}` }, it.title),
                it.where ? h2("span", { class: "result-meta" }, h2("span", { class: "result-coll" }, it.where)) : null
              )
            ))));
          });
        }, 220);
      }, "paintMatches");
      const openItem = /* @__PURE__ */ __name((it) => {
        try {
          const panel2 = deps.data.plugin.ui.getActivePanel?.();
          if (!panel2) return;
          if (it.kind === "page") panel2.navigateTo({ type: "edit_panel", rootId: it.recordGuid, subId: null, workspaceGuid: null });
          else void panel2.navigateTo({ itemGuid: it.guid, highlight: true, type: "edit_panel", rootId: null, subId: null, workspaceGuid: null });
        } catch {
        }
      }, "openItem");
      const paint = /* @__PURE__ */ __name(() => {
        paintTabs();
        if (tab === "guide") body.replaceChildren(guideView(m));
        else paintMatches();
      }, "paint");
      m.on(() => {
        paintTabs();
        if (tab === "matches") paintMatches();
      });
      teardown.push(data.on(paintTabs));
      const api = {
        el: h2("aside", { class: "drawer" }, h2("div", { class: "drawer-inner" }, tabsEl, body)),
        /** @param {string} t */
        show(t) {
          tab = t;
          try {
            localStorage.setItem(deps.storageKey("drawer-tab"), t);
          } catch {
          }
          paint();
        }
      };
      paint();
      return api;
    }
    __name(drawer, "drawer");
    function guideView(m) {
      const row = /* @__PURE__ */ __name((c) => h2(
        "button",
        { class: "g-row", vars: kindVars(colorKind(c)), title: "Add", onClick: /* @__PURE__ */ __name(() => m.add({ ...c }), "onClick") },
        h2("code", { class: "pill" }, serializeCond(c)),
        h2("span", { class: "g-say" }, chipLabel(c)),
        icon("ti-plus", "g-add")
      ), "row");
      return h2(
        "div",
        { class: "guide" },
        h2(
          "div",
          { class: "g-sec g-sec--basics" },
          h2("div", { class: "g-combine" }, COMBINE.map((c) => h2("div", { class: "g-comb" }, h2("code", { class: "pill pill--plain" }, c.code), h2("span", { class: "g-say" }, c.say))))
        ),
        ADD_GROUPS.map((g) => {
          const rows = g.kinds.flatMap(guideRows);
          return rows.length ? h2("div", { class: "g-sec" }, h2("div", { class: "g-title" }, g.label), rows.map(row)) : null;
        }),
        h2(
          "div",
          { class: "g-sec" },
          h2("div", { class: "g-title" }, "Examples"),
          EXAMPLES.slice(0, 8).map((ex) => h2(
            "button",
            { class: "g-ex", title: "Load", onClick: /* @__PURE__ */ __name(() => m.load(ex.q), "onClick") },
            h2("span", { class: "g-ex-label" }, icon("ti-corner-down-right", "g-ex-icon"), ex.label),
            h2("span", { class: "g-ex-code" }, toks(ex.q))
          ))
        )
      );
    }
    __name(guideView, "guideView");
    let anchor = null;
    let side = (
      /** @type {'below' | 'above' | 'free'} */
      "free"
    );
    function position() {
      if (!pop) return;
      const vw = window.innerWidth, vh = window.innerHeight;
      const main = (
        /** @type {HTMLElement} */
        pop.querySelector(".qb3-main")
      );
      const wantDrawer = !pop.classList.contains("is-closed-user");
      pop.classList.toggle("is-closed", !wantDrawer || vw < 980);
      main.style.maxHeight = "";
      const w = pop.offsetWidth, ph = pop.offsetHeight;
      const left = anchor ? anchor.left : (vw - w) / 2;
      pop.style.left = `${Math.round(Math.max(VIEWPORT_MARGIN, Math.min(left, vw - w - VIEWPORT_MARGIN)))}px`;
      let top;
      if (!anchor) top = Math.max(VIEWPORT_MARGIN, Math.min(vh * 0.12, vh - ph - VIEWPORT_MARGIN));
      else {
        const below = vh - anchor.bottom - 8 - VIEWPORT_MARGIN;
        const above = anchor.top - 8 - VIEWPORT_MARGIN;
        if (side === "free") side = ph <= below || below >= above ? "below" : "above";
        if (side === "below" && ph > below && above > below) side = "above";
        if (side === "above" && ph > above && below > above) side = "below";
        top = side === "below" ? anchor.bottom + 8 : anchor.top - 8 - ph;
      }
      if (ph > vh - 2 * VIEWPORT_MARGIN) {
        main.style.maxHeight = `${vh - 2 * VIEWPORT_MARGIN}px`;
        top = VIEWPORT_MARGIN;
      }
      pop.style.top = `${Math.round(Math.max(VIEWPORT_MARGIN, Math.min(top, vh - Math.min(ph, vh - 2 * VIEWPORT_MARGIN) - VIEWPORT_MARGIN)))}px`;
    }
    __name(position, "position");
    async function open(opts = {}) {
      close(true);
      if (!layer.isConnected) document.body.appendChild(layer);
      anchor = opts.anchor || null;
      side = "free";
      data.resetCounts();
      if (!data.loaded) await data.load();
      else void data.load();
      const m = createModel();
      model = m;
      const canApply = !!opts.canApply;
      const drawerUserClosed = localStorage.getItem(deps.storageKey("drawer")) === "0";
      const d = drawer(m);
      const sideBtn = h2("button", { class: "icon-btn", title: "Sidebar", onClick: /* @__PURE__ */ __name(() => {
        const closed = !pop?.classList.contains("is-closed-user");
        pop?.classList.toggle("is-closed-user", closed);
        try {
          localStorage.setItem(deps.storageKey("drawer"), closed ? "0" : "1");
        } catch {
        }
        syncSide();
        position();
      }, "onClick") });
      const syncSide = /* @__PURE__ */ __name(() => {
        const closed = !!pop?.classList.contains("is-closed-user");
        sideBtn.classList.toggle("is-on", !closed);
        sideBtn.replaceChildren(icon(closed ? "ti-layout-sidebar-right-expand" : "ti-layout-sidebar-right-collapse"));
      }, "syncSide");
      const use = /* @__PURE__ */ __name(() => {
        const q = m.query().trim();
        if (!canApply) {
          void navigator.clipboard?.writeText(q);
          deps.toast("Query copied.");
        }
        deps.onUse(q);
        close(true);
      }, "use");
      const dock = queryDock(m, use, canApply);
      const words = wordsField(m);
      const main = h2(
        "div",
        { class: "qb3-main" },
        h2(
          "div",
          { class: "qb3-head" },
          h2("span", { class: "qb3-logo" }, icon("ti-filter")),
          h2("span", { class: "qb3-title" }, "Query Builder"),
          h2("span", { class: "spacer" }),
          sideBtn,
          h2("button", { class: "icon-btn", title: "Close (Esc)", onClick: /* @__PURE__ */ __name(() => close(), "onClick") }, icon("ti-x"))
        ),
        h2("div", { class: "qb3-body qb3-body--dock" }, words.el, chipsRow(m), suggestions(m), dock.el)
      );
      const undoBtn = h2("button", { class: "undo-btn" }, "Undo");
      const undoBar = h2("div", { class: "undo-bar", role: "status" }, icon("ti-replace", "undo-icon"), h2("span", null, "Example loaded"), undoBtn, h2("kbd", null, IS_MAC ? "\u2318Z" : "Ctrl Z"));
      main.appendChild(undoBar);
      let undoSnap = null;
      let undoTimer = 0;
      const hideUndo = /* @__PURE__ */ __name(() => {
        undoBar.classList.remove("is-on");
        undoSnap = null;
      }, "hideUndo");
      const doUndo = /* @__PURE__ */ __name(() => {
        if (!undoSnap) return;
        m.restore(undoSnap);
        hideUndo();
      }, "doUndo");
      undoBtn.addEventListener("click", doUndo);
      m.onReplaced = (snap) => {
        undoSnap = snap;
        undoBar.classList.add("is-on");
        clearTimeout(undoTimer);
        undoTimer = window.setTimeout(hideUndo, 8e3);
      };
      pop = h2("div", { class: `qb3 qb3--dock${drawerUserClosed ? " is-closed-user" : ""}`, role: "dialog", "aria-label": "Query Builder" }, main, d.el);
      syncSide();
      const popEl = (
        /** @type {HTMLElement} */
        pop
      );
      popEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          use();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault();
          if (openMenu) closeMenu();
          else close();
        }
        const tag = (
          /** @type {HTMLElement} */
          e.target.tagName
        );
        if (undoSnap && e.key.toLowerCase() === "z" && (e.metaKey || e.ctrlKey) && !e.shiftKey && tag !== "TEXTAREA" && tag !== "INPUT") {
          e.preventDefault();
          doUndo();
        }
        e.stopPropagation();
      });
      popEl.addEventListener("mouseover", (e) => {
        const t = (
          /** @type {HTMLElement} */
          e.target.closest?.("[data-i]")
        );
        const i = t ? (
          /** @type {HTMLElement} */
          t.dataset.i
        ) : null;
        popEl.querySelectorAll(".is-lit").forEach((n) => n.classList.remove("is-lit"));
        popEl.classList.toggle("is-linking", i != null);
        if (i != null) popEl.querySelectorAll(`[data-i="${i}"]`).forEach((n) => n.classList.add("is-lit"));
      });
      popEl.addEventListener("mouseleave", () => {
        popEl.classList.remove("is-linking");
        popEl.querySelectorAll(".is-lit").forEach((n) => n.classList.remove("is-lit"));
      });
      layer.appendChild(popEl);
      const initial = (opts.query || "").trim();
      if (initial) {
        m.root = parse(initial, ctxNames());
        m.source = "manual";
        resolveTitles(m.root);
        m.emit();
      } else m.emit();
      position();
      const ro = new ResizeObserver(() => position());
      ro.observe(popEl);
      const onResize = /* @__PURE__ */ __name(() => position(), "onResize");
      window.addEventListener("resize", onResize);
      const onDown = /* @__PURE__ */ __name((e) => {
        const t = (
          /** @type {Node} */
          e.target
        );
        if (layer.contains(t)) {
          if (openMenu && !openMenu.contains(t) && !/** @type {Element} */
          t.closest?.(".chip-ico")) closeMenu();
          return;
        }
        close();
      }, "onDown");
      setTimeout(() => document.addEventListener("mousedown", onDown, true), 0);
      teardown.push(() => {
        ro.disconnect();
        window.removeEventListener("resize", onResize);
        document.removeEventListener("mousedown", onDown, true);
        clearTimeout(undoTimer);
      });
      requestAnimationFrame(() => {
        words.ta.focus();
      });
    }
    __name(open, "open");
    function close(silent = false) {
      if (!pop) return;
      const q = model ? model.query().trim() : "";
      closeMenu();
      teardown.forEach((fn) => {
        try {
          fn();
        } catch {
        }
      });
      teardown = [];
      pop.remove();
      pop = null;
      model = null;
      if (!silent) deps.onClose(q);
    }
    __name(close, "close");
    return {
      open,
      close,
      isOpen: /* @__PURE__ */ __name(() => !!pop, "isOpen"),
      destroy() {
        close(true);
        layer.remove();
      }
    };
  }
  __name(createQueryBuilder, "createQueryBuilder");

  // targets.js
  var QUERY_FIELD = "input.query-input--field:not(.is-collection-filter)";
  var TEXT_INPUT_TYPES = /* @__PURE__ */ new Set(["", "text", "search"]);
  function isTextField(el2) {
    if (!el2 || !(el2 instanceof HTMLElement)) return false;
    if (el2.closest(`.${UI_ROOT_CLASS}, .${PILL_CLASS}`)) return false;
    if (el2 instanceof HTMLInputElement) return TEXT_INPUT_TYPES.has((el2.getAttribute("type") || "").toLowerCase()) && !el2.readOnly && !el2.disabled;
    if (el2 instanceof HTMLTextAreaElement) return !el2.readOnly && !el2.disabled;
    return el2.isContentEditable && el2.getAttribute("contenteditable") !== null;
  }
  __name(isTextField, "isTextField");
  function isQueryField(el2) {
    return isTextField(el2) && el2.matches(QUERY_FIELD);
  }
  __name(isQueryField, "isQueryField");
  function readField(el2) {
    if (el2 instanceof HTMLInputElement || el2 instanceof HTMLTextAreaElement) return el2.value;
    return el2.innerText || el2.textContent || "";
  }
  __name(readField, "readField");
  function writeField(el2, value, opts = {}) {
    if (!el2.isConnected) return false;
    el2.focus();
    if (el2 instanceof HTMLInputElement || el2 instanceof HTMLTextAreaElement) {
      const proto = el2 instanceof HTMLInputElement ? HTMLInputElement.prototype : HTMLTextAreaElement.prototype;
      const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
      if (setter) setter.call(el2, value);
      else el2.value = value;
      el2.dispatchEvent(new Event("input", { bubbles: true }));
      el2.dispatchEvent(new Event("change", { bubbles: true }));
      try {
        el2.setSelectionRange(value.length, value.length);
      } catch {
      }
    } else {
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(el2);
      sel?.removeAllRanges();
      sel?.addRange(range);
      const ok = document.execCommand("insertText", false, value);
      if (!ok) {
        el2.textContent = value;
        el2.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: value }));
      }
    }
    if (opts.pressEnter) {
      for (const type2 of ["keydown", "keypress", "keyup"]) {
        el2.dispatchEvent(new KeyboardEvent(type2, { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true, cancelable: true }));
      }
    }
    return true;
  }
  __name(writeField, "writeField");

  // plugin.js
  var PLUGIN_VERSION = "1.1.5";
  var PLUGIN_NAME = "Query Builder";
  var SLUG = "query-builder";
  var PANEL_TYPE = "query-builder-settings";
  var ICON = "filter";
  var DEFAULTS = Object.freeze({ hotkey: "Alt+Q" });
  function normalizeSettings(raw) {
    const r = raw && typeof raw === "object" ? raw : {};
    return { hotkey: typeof r.hotkey === "string" ? r.hotkey : DEFAULTS.hotkey };
  }
  __name(normalizeSettings, "normalizeSettings");
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    /** @type {Settings} */
    _settings = normalizeSettings(null);
    _settingsStore = createSettingsStore(this, {
      slug: SLUG,
      key: "options",
      version: PLUGIN_VERSION,
      normalize: /* @__PURE__ */ __name((raw) => normalizeSettings(raw), "normalize")
    });
    /** @type {(() => void) | null} */
    _detachSettingsLifecycle = null;
    /** @type {(() => void) | null} */
    _cancelPillSettle = null;
    /** @type {HTMLElement | null} */
    _panelEl = null;
    /** @type {any[]} */
    _commands = [];
    _disabled = false;
    /** @type {ReturnType<typeof createQueryBuilder> | null} */
    _builder = null;
    /** @type {DataService | null} */
    _data = null;
    /** The field the builder will write back into. @type {import('./targets.js').TextTarget | null} */
    _target = null;
    /** @type {HTMLElement | null} */
    _pill = null;
    /** @type {import('./targets.js').TextTarget | null} */
    _pillTarget = null;
    _pillRaf = 0;
    /** @type {Array<[EventTarget, string, any, boolean]>} */
    _listeners = [];
    onLoad() {
      pingInstall(SLUG);
      pingActive(SLUG);
      void syncPluginVersionOnLoad(this, PLUGIN_VERSION);
      void healPluginIdentity(this, {
        name: PLUGIN_NAME,
        icon: ICON,
        description: "Build Thymer search queries in plain English or with colour-coded chips \u2014 right on Search, Upcoming and every other query field.",
        sourceRepo: `https://github.com/akaready/thymer-${SLUG}`,
        sourceFiles: { branch: "main", json: "plugin.json", js: "plugin.js" }
      });
      this._disabled = readKillSwitch(this);
      this._settings = normalizeSettings(this._settingsStore.load().settings);
      this.ui.injectCSS(PANEL_CSS);
      this.ui.injectCSS(UI_CSS);
      this.ui.injectCSS(PILL_CSS);
      this._commands.push(this.ui.addCommandPaletteCommand({
        label: `Plugin: ${PLUGIN_NAME}`,
        icon: ICON,
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      }));
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle(`${PLUGIN_NAME} Settings`);
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        this._renderPanel();
      });
      this._detachSettingsLifecycle = this._settingsStore.attachLifecycle({
        onRemoteChange: /* @__PURE__ */ __name((settings) => {
          this._settings = normalizeSettings(settings);
          this._applySettings();
          this._renderPanel();
        }, "onRemoteChange")
      });
      try {
        const staleRoot = document.querySelector(`.${PANEL_CLASS}`);
        if (staleRoot && staleRoot.parentElement) {
          this._panelEl = /** @type {HTMLElement} */
          staleRoot.parentElement;
          this._renderPanel();
          this._refreshScopePillUntilSettled();
        }
      } catch {
      }
      if (this._disabled) return;
      this._data = new DataService(this);
      this._builder = createQueryBuilder({
        data: this._data,
        onUse: /* @__PURE__ */ __name((q) => this._apply(q), "onUse"),
        onClose: /* @__PURE__ */ __name((q) => {
          this._remember(q);
          const t = this._target;
          this._target = null;
          if (t && t.isConnected) t.focus();
        }, "onClose"),
        openSettings: /* @__PURE__ */ __name(() => {
          this._builder?.close(true);
          void this._openPanel();
        }, "openSettings"),
        toast: /* @__PURE__ */ __name((msg) => this._toast(msg), "toast"),
        storageKey: /* @__PURE__ */ __name((suffix) => this._storageKey(suffix), "storageKey")
      });
      this._listen(document, "focusin", (e) => this._onFocusIn(e), true);
      this._listen(document, "focusout", (e) => this._onFocusOut(e), true);
      this._listen(window, "keydown", (e) => this._onKeyDown(e), true);
      this._applySettings();
    }
    onUnload() {
      try {
        this._detachSettingsLifecycle?.();
      } catch {
      }
      this._detachSettingsLifecycle = null;
      this._cancelPillSettle?.();
      this._cancelPillSettle = null;
      for (const [t, type2, fn, cap] of this._listeners) t.removeEventListener(type2, fn, cap);
      this._listeners = [];
      cancelAnimationFrame(this._pillRaf);
      this._pill?.remove();
      this._pill = null;
      this._pillTarget = null;
      this._builder?.destroy();
      this._builder = null;
      this._data = null;
      for (const c of this._commands) {
        try {
          c?.remove();
        } catch {
        }
      }
      this._commands = [];
      this._panelEl = null;
    }
    /** @param {EventTarget} target @param {string} type @param {(e: any) => void} fn @param {boolean} capture */
    _listen(target, type2, fn, capture) {
      target.addEventListener(type2, fn, capture);
      this._listeners.push([target, type2, fn, capture]);
    }
    /** @param {string} suffix */
    _storageKey(suffix) {
      let ws = "";
      try {
        ws = this.getWorkspaceGuid();
      } catch {
      }
      return `${SLUG}/${ws || "default"}/${suffix}`;
    }
    /** Live-apply settings. Guarded so edits made while disabled stay inert. */
    _applySettings() {
      if (this._disabled) return;
      if (this._pill) this._pill.title = this._pillTitle();
      if (document.activeElement && isQueryField(document.activeElement)) this._showPill(
        /** @type {any} */
        document.activeElement
      );
    }
    _pillTitle() {
      return `Open the Query Builder for this field${this._settings.hotkey ? ` (${this._settings.hotkey})` : ""}`;
    }
    /* ── Pill ──────────────────────────────────────────────────────────── */
    /** @param {FocusEvent} e */
    _onFocusIn(e) {
      if (this._disabled || this._builder?.isOpen()) return;
      const el2 = (
        /** @type {Element} */
        e.composedPath?.()[0] || e.target
      );
      if (el2 === this._pill) return;
      if (el2 instanceof Element && isQueryField(el2)) this._showPill(
        /** @type {any} */
        el2
      );
      else this._hidePill();
    }
    /** @param {FocusEvent} e */
    _onFocusOut(e) {
      if (e.relatedTarget && e.relatedTarget === this._pill) return;
      this._hidePill();
    }
    /** @param {import('./targets.js').TextTarget} el */
    _showPill(el2) {
      if (!this._pill) {
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = PILL_CLASS;
        pill.title = this._pillTitle();
        const glyph = document.createElement("span");
        glyph.className = "ti ti-filter";
        pill.append(glyph, document.createTextNode("Build"));
        pill.addEventListener("mousedown", (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          if (this._pillTarget) this._openBuilder(this._pillTarget);
        });
        document.body.appendChild(pill);
        this._pill = pill;
      }
      this._pillTarget = el2;
      this._pill.hidden = false;
      cancelAnimationFrame(this._pillRaf);
      this._trackPill();
    }
    _hidePill() {
      cancelAnimationFrame(this._pillRaf);
      this._pillRaf = 0;
      this._pillTarget = null;
      if (this._pill) this._pill.hidden = true;
    }
    /** Follow the field while it scrolls/resizes. One rect read per frame, only while shown. */
    _trackPill() {
      const pill = this._pill;
      const el2 = this._pillTarget;
      if (!pill || !el2 || pill.hidden) return;
      if (!el2.isConnected) {
        this._hidePill();
        return;
      }
      const r = el2.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) {
        pill.style.visibility = "hidden";
      } else {
        pill.style.visibility = "";
        const pw = pill.offsetWidth || 60;
        const ph = 20;
        const top = r.height > 44 ? r.top + 4 : r.top + (r.height - ph) / 2;
        pill.style.left = `${Math.round(Math.max(4, Math.min(r.right - pw - 6, window.innerWidth - pw - 4)))}px`;
        pill.style.top = `${Math.round(Math.max(4, Math.min(top, window.innerHeight - ph - 4)))}px`;
      }
      this._pillRaf = requestAnimationFrame(() => this._trackPill());
    }
    /* ── Hotkey ────────────────────────────────────────────────────────── */
    /** @param {KeyboardEvent} e */
    _onKeyDown(e) {
      if (this._disabled || !this._settings.hotkey) return;
      if (!eventMatchesCombo(e, this._settings.hotkey)) return;
      e.preventDefault();
      e.stopPropagation();
      if (this._builder?.isOpen()) {
        this._builder.close();
        return;
      }
      const active = document.activeElement;
      this._openBuilder(isTextField(active) ? active : null);
    }
    /* ── Builder ───────────────────────────────────────────────────────── */
    /** @param {import('./targets.js').TextTarget | null} el */
    _openBuilder(el2) {
      if (!this._builder || this._disabled) return;
      this._hidePill();
      this._target = el2;
      const query = el2 ? readField(el2).trim() : this._recall();
      void this._builder.open({ query, anchor: el2 ? el2.getBoundingClientRect() : null, canApply: !!el2 });
    }
    /** @param {string} q */
    _apply(q) {
      this._remember(q);
      const t = this._target;
      this._target = null;
      if (!t) return;
      if (writeField(t, q)) return;
      try {
        void navigator.clipboard.writeText(q);
      } catch {
      }
      this._toast("The field closed before the query could be applied \u2014 copied it instead.");
    }
    /* ── Last query (UI-only, device-local) ────────────────────────────── */
    _recall() {
      try {
        return localStorage.getItem(this._storageKey("last-query")) || "";
      } catch {
        return "";
      }
    }
    /** @param {string} q */
    _remember(q) {
      if (!q || !q.trim()) return;
      try {
        localStorage.setItem(this._storageKey("last-query"), q.trim());
      } catch {
      }
    }
    /* ── Settings panel ────────────────────────────────────────────────── */
    /** @param {Partial<Settings>} patch */
    _set(patch) {
      this._settings = normalizeSettings(this._settingsStore.update(patch).settings);
      this._applySettings();
      this._refreshScopePill();
    }
    _scopeArgs() {
      return {
        diverged: this._settingsStore.isDiverged(),
        localUnavailable: !!this._settingsStore.isLocalUnavailable(),
        onPush: /* @__PURE__ */ __name(() => {
          void this._settingsStore.pushToAll().then((ok) => {
            if (!ok) {
              this._toast("Could not save to all devices \u2014 the plugin config could not be written.");
              return;
            }
            this._toast("Settings applied to all devices");
            this._refreshScopePillUntilSettled();
          });
        }, "onPush"),
        onDiscard: /* @__PURE__ */ __name(() => {
          this._settings = normalizeSettings(this._settingsStore.discardLocal());
          this._applySettings();
          this._renderPanel();
          this._toast("Reverted to synced settings");
        }, "onDiscard")
      };
    }
    _refreshScopePill() {
      const el2 = this._panelEl?.querySelector?.(".tps-scope");
      if (el2) el2.replaceWith(scopeCluster(
        /** @type {any} */
        this._scopeArgs()
      ));
    }
    _refreshScopePillUntilSettled() {
      this._cancelPillSettle?.();
      this._cancelPillSettle = this._settingsStore.settleAfterPush({
        onAdopt: /* @__PURE__ */ __name((settings) => {
          this._settings = normalizeSettings(settings);
          this._applySettings();
          this._renderPanel();
        }, "onAdopt"),
        refreshPill: /* @__PURE__ */ __name(() => this._refreshScopePill(), "refreshPill")
      });
    }
    async _openPanel() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const active = this.ui.getActivePanel && this.ui.getActivePanel();
      if (active) {
        active.navigateToCustomType(PANEL_TYPE);
        return;
      }
      const pluginPanel = await this.ui.createPanel();
      if (pluginPanel) pluginPanel.navigateToCustomType(PANEL_TYPE);
    }
    _renderPanel() {
      if (!this._panelEl) return;
      const s = this._settings;
      const conf = (
        /** @type {any} */
        this.getConfiguration?.() || {}
      );
      this._panelEl.replaceChildren(panel({ pluginClass: PANEL_CLASS }, [
        pluginHeaderFromConfig(conf, {
          version: PLUGIN_VERSION,
          scope: this._scopeArgs(),
          killSwitch: { on: !this._disabled, onToggle: /* @__PURE__ */ __name((nextOn) => {
            void this._settingsStore.setDisabled(!nextOn);
          }, "onToggle") },
          feedback: { data: this.data }
        }),
        section({
          label: "Shortcut",
          hint: "Click the binding and press the keys you want; Escape cancels, \xD7 unbinds. In a query field it opens the builder on that field \u2014 anywhere else, on its own.",
          body: [h(
            "div",
            { class: "tps-list" },
            listHeader({ columns: ["", "Command", "Shortcut"] }),
            keyRow({
              label: "Open Query Builder",
              combo: s.hotkey,
              onChange: /* @__PURE__ */ __name((combo) => this._set({ hotkey: combo }), "onChange"),
              onClear: /* @__PURE__ */ __name(() => this._set({ hotkey: "" }), "onClear")
            })
          )]
        })
      ]));
    }
    /** @param {string} message */
    _toast(message) {
      try {
        this.ui.addToaster({ title: PLUGIN_NAME, message, dismissible: true, autoDestroyTime: 3500 });
      } catch {
      }
    }
  };
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;

// Cache buster for tailwind.config.js
const CACHE_VERSION = "v11";
const CACHE_BUSTER = `?v=${CACHE_VERSION}`;

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-tertiary-container": "#523700",
                "inverse-on-surface": "#283044",
                "on-primary": "#003256",
                "on-surface": "#dae2fd",
                "on-primary-fixed-variant": "#004a7a",
                "on-background": "#dae2fd",
                "on-primary-fixed": "#001d34",
                "surface-container-high": "#222a3d",
                "primary-container": "#4facfe",
                "inverse-primary": "#00629f",
                "ghost-white": "#F8FAFC",
                "on-secondary-fixed-variant": "#004f53",
                "primary-fixed": "#d0e4ff",
                "on-error": "#690005",
                "on-error-container": "#ffdad6",
                "on-secondary-container": "#006a6f",
                "secondary-fixed": "#6ff6ff",
                "deep-navy": "#0F172A",
                "secondary-container": "#00f1fd",
                "primary": "#9bcbff",
                "surface-container-low": "#131b2e",
                "primary-fixed-dim": "#9bcbff",
                "surface-bright": "#31394d",
                "on-tertiary-fixed-variant": "#604100",
                "on-surface-variant": "#bfc7d3",
                "surface-container": "#171f33",
                "outline-variant": "#404751",
                "surface-container-highest": "#2d3449",
                "outline": "#8a919c",
                "secondary-fixed-dim": "#00dce6",
                "secondary": "#dcfdff",
                "on-secondary-fixed": "#002022",
                "error": "#ffb4ab",
                "surface-container-lowest": "#060e20",
                "background": "#0b1326",
                "surface-tint": "#9bcbff",
                "on-tertiary-fixed": "#281900",
                "surface-dim": "#0b1326",
                "inverse-surface": "#dae2fd",
                "surface-variant": "#2d3449",
                "tertiary-container": "#dc9a00",
                "error-container": "#93000a",
                "on-secondary": "#00373a",
                "ai-flow-start": "#4FACFE",
                "ai-flow-end": "#00F2FE",
                "on-primary-container": "#003e68",
                "tertiary-fixed-dim": "#ffba38",
                "slate-surface": "#1E293B",
                "on-tertiary": "#432c00",
                "tertiary": "#ffba38",
                "surface": "#0b1326",
                "tertiary-fixed": "#ffdeac"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "max-width": "1280px",
                "margin-mobile": "20px",
                "gutter-desktop": "24px",
                "unit": "4px",
                "margin-desktop": "80px"
            },
            "fontFamily": {
                "display-lg": ["Outfit"],
                "body-md": ["Inter"],
                "headline-lg": ["Outfit"],
                "label-md": ["Inter"],
                "body-lg": ["Inter"],
                "headline-md": ["Outfit"],
                "headline-lg-mobile": ["Outfit"],
                "code-sm": ["Inter"]
            },
            "fontSize": {
                "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "body-md": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                "headline-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                "label-md": ["15px", {"lineHeight": "22px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "500"}],
                "headline-lg-mobile": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
                "code-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
            }
        }
    }
}

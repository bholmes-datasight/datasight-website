# DATASIGHT Brand Tokens

Reference document for UI development. Use these values for any web, app, or document work.

---

## Colours

| Token | Hex | Usage |
|---|---|---|
| `brand-gold` | `#C9A84C` | Primary accent — highlights, dividers, bullet dots, CTAs |
| `brand-dark` | `#3C3F4A` | Primary text, headings, dark backgrounds |
| `brand-mid` | `#9A9A9A` | Secondary/label text, captions, muted UI |
| `brand-light` | `#F5F5F3` | Subtle background fills, alternating rows, cards |
| `brand-white` | `#FFFFFF` | Page/surface background |

### CSS Custom Properties
```css
:root {
  --color-gold:   #C9A84C;
  --color-dark:   #3C3F4A;
  --color-mid:    #9A9A9A;
  --color-light:  #F5F5F3;
  --color-white:  #FFFFFF;
}
```

### Tailwind Config (if using Tailwind)
```js
theme: {
  extend: {
    colors: {
      gold:  '#C9A84C',
      dark:  '#3C3F4A',
      mid:   '#9A9A9A',
      light: '#F5F5F3',
    }
  }
}
```

---

## Typography

| Role | Font | Notes |
|---|---|---|
| Primary | `Calibri` | Used in all documents |
| Web fallback stack | `'Calibri', 'Inter', sans-serif` | Inter is a close geometric sans alternative |
| Display / Logo | `'Haas Grot Disp Trial'` | Used in the logo SVG — do not replicate in UI, use the logo asset instead |

### Scale (document-derived, adapt to web rem as needed)
| Role | Size |
|---|---|
| Page title / INVOICE stamp | 48pt |
| Section heading | 20–22pt |
| Body | 18–19pt |
| Labels / captions | 15–17pt |

### Style rules
- Headings and labels in **uppercase**, wide letter-spacing
- Body text in sentence case
- Labels (e.g. "BILL TO", "NOTES") are small, uppercase, `brand-mid` colour
- Values paired with labels are bold, `brand-dark`

---

## Logo

| Asset | File | Usage |
|---|---|---|
| Full wordmark (dark) | `main_logo_dark_vector.svg` | Light backgrounds — primary use |
| Monogram (dark) | `profile_logo_dark.png` | Avatars, favicons, small lockups |

- Logo should sit on white or very light backgrounds only
- Minimum clear space: equal to the height of the tagline text on all sides
- Do not recolour or modify the logo

---

## UI Patterns

### Dividers
- Primary divider: `1px solid #C9A84C` (gold) — section breaks
- Secondary divider: `1px solid #DDDDDD` — table rows, subtle separations

### Surfaces
- Page background: `#FFFFFF`
- Card / panel background: `#F5F5F3` (`brand-light`)
- Dark panel / header bar: `#3C3F4A` (`brand-dark`) with white text

### Buttons (suggested)
- Primary: background `#C9A84C`, text `#FFFFFF`, hover darken 10%
- Secondary: border `#3C3F4A`, text `#3C3F4A`, transparent background

### Tables
- Header row: `background #3C3F4A`, text `#FFFFFF`, bold
- Alternating rows: `#FFFFFF` / `#F5F5F3`
- Row borders: `1px solid #EEEEEE`

---

## Company Details (for footers, contact pages etc.)

```
DATASIGHT LTD
Company No. 14779176
b.holmes@datasightuk.com
```

_Not VAT registered (micro business)._

---
name: gradient-glass-design
description: Design guide for creating playful, social game experiences using gradient glass aesthetics with pastel colors and rich animations.
---

# Gradient Glass Design Guide for Social Games

## Philosophy

Social games thrive on **delight**, **connection**, and **celebration**. Gradient glass aesthetics—combining soft color transitions, frosted depth, and rich animations—create an environment where players feel welcomed and their actions matter.

This guide applies to any social/party game using:
- **Pastel gradient backgrounds** (soft pinks, blues, purples, teals)
- **Glass effect** with backdrop blur for depth
- **Staggered animations** that celebrate user actions
- **Light, playful visual tone** on light backgrounds

**Core principle**: Every design choice should increase delight or clarify interaction. Avoid decoration without purpose.

---

## Design System

### Color Strategy

**Base Palette** (Tailwind v4 @theme)
- **Gradient backgrounds**: 3-5 soft gradients (pink-to-purple, blue-to-teal, etc.)
- **Accent colors**: 2-3 vibrant but harmonious accents for interactive elements
- **Neutral**: Light grays for text on light backgrounds, avoid pure white/black

**Implementation** (Tailwind v4):
`css
@theme {
  --color-gradient-primary: linear-gradient(135deg, #fce7f3 0%, #ddd6fe 100%);
  --color-gradient-secondary: linear-gradient(135deg, #bfdbfe 0%, #99f6e4 100%);
  --color-accent-bright: #ec4899;
  --color-accent-glow: #a78bfa;
}
`

### Glass Effect

**Definition**: Backdrop blur + semi-transparent overlay creating depth illusion

**Implementation**:
`css
@layer utilities {
  .glass {
    @apply backdrop-blur-sm bg-white/5 border border-white/20;
  }
  
  .glass-card {
    @apply glass rounded-2xl p-6 shadow-lg;
  }
  
  .glass-interactive:hover {
    @apply bg-white/10 shadow-xl transition-all duration-200;
  }
}

@supports not (backdrop-filter: blur(8px)) {
  .glass {
    @apply bg-white/20 border border-gray-200;
  }
}
`

---

## Component Patterns

### Interactive States

**Unmarked Square / Inactive Button**
- Background: Soft gradient (primary or secondary)
- Glass effect: Subtle, readable
- Hover: Slight brightness increase

**Marked Square / Active State**
- Background: Medium-intensity gradient (different hue)
- Glass effect: More pronounced
- Glow: Soft shadow or inner glow

**Winning State / Victory Moment**
- Background: Bright gradient (gold-to-orange, yellow-to-pink)
- Animation: Pulsing scale or shimmer effect

### Animations

**Page Load / Entrance**
- Pattern: Staggered fade + slide-up (100ms between elements)
- Example: Title → Rules → Button

**Hover Micro-interactions**
- Scale: 1.05x slight enlargement
- Glow: +1 shadow depth increase
- Duration: 200ms

**Click Feedback**
- Scale: 0.98x brief compression
- Duration: 100ms

**Win Celebration**
- Sequence: Winning squares flash → modal scales up → emoji pulses
- Duration: 1-2 seconds total

**Transition Principle**
- All state changes use 	ransition-all duration-150 minimum

---

## Typography & Spacing

### Typography
- **Headings**: Distinctive fonts (avoid system fonts)
- **Body text**: Dark gray on light background (≥4.5:1 contrast)
- **Call-to-action**: Bold, accent color, slight size increase

### Spacing
- **Cards**: 1.5rem padding
- **Between components**: 1rem–2rem vertical spacing
- **Grid gaps**: 0.25rem–0.5rem
- **Button padding**: 1rem vertical, 1.5rem horizontal

---

## Implementation Rules

1. **Commit to the aesthetic** — Don't mix colors randomly
2. **Prioritize clarity** — Ensure contrast ≥ 4.5:1
3. **Test across contexts** — Pastel must work on phones in sunlight
4. **Respect user preferences** — prefers-reduced-motion
5. **Performance first** — Test 60fps, provide fallbacks

---

## Common Decisions

| Question | Answer |
|----------|--------|
| Gradients per screen? | 2-3 maximum |
| Pastel saturation? | OKLCH c: 0.08-0.15 |
| Animate every interaction? | No. Entrance, hover, click, win moments only |
| Dark mode? | Out of scope; create separate guide if needed |

---

## Resources
- [Tailwind CSS v4 Gradients](https://tailwindcss.com/docs/gradient-color-stops)
- [OKLCH Color Space](https://oklch.com)
- [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [Frontend Design Guide](./frontend-design.instructions.md)
- [Tailwind v4 Guide](./tailwind-4.instructions.md)

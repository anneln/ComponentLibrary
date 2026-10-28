# Component Library 🧩

A React component library built from a Figma design. It groups badges, banners, cards and testimonials, designed to be assembled like building blocks.

## About This Project

Solo project based on a Figma component library design. I coded each component in React, with hand-written CSS.

## What's Inside

Each component is shown in a gallery that displays all its variants:

- **Badges**: shapes (`square`, `pills`) and colors (grey, error, warning, success, neutral, indigo, purple, pink)
- **Banners**: status banners with an icon, in multi-line (title and text) or single-line (title only) versions
- **Cards**: a standard card and a card with a hover effect
- **Testimonials**: testimonials with or without a photo, in horizontal or vertical layouts

## Features

- Composable components: `Banner.Icon`, `Card.Title`, `Testimonials.Text`…
- Variants driven by props (`type`, `shape`, `color`, `variant`)
- Reusable gallery to display every variant of a component
- Testimonials layout on a 4-column CSS grid
- Photo that overflows its block, without JavaScript
- Responsive: switches to a single column on mobile
- SVG icons imported as React components
- Accessible markup: named regions, decorative icons hidden, screen reader labels where color carries meaning

## Usage

```jsx
import Banner from "./Components/Banners/Banner";

<Banner
  type="success"
  title="Congratulations!"
  text="Your account has been created."
/>;
```

For custom content, pass your own children:

```jsx
<Banner type="neutral">
  <Banner.Icon>⭐</Banner.Icon>
  <Banner.Title>New feature</Banner.Title>
</Banner>
```

## Tech Stack

- **React** (functional components, props, children)
- **Vite** with SVG imports as components (`?react`)
- **Hand-written CSS** (grid and flexbox)

## What I Learned

- **Props and children**: choosing between a strict API (`title`, `text`) and a flexible one (`children`)
- **Compound components**: `Banner.Icon`, `Card.Title` to group sub-elements
- **Separating logic from rendering**: conditions (`isWithPic`, `renderContent`) decide what to show, CSS decides how it looks
- **CSS Grid and Flexbox**: placing items on a 4 × 6 grid, and taking an element out of its flow (`position: absolute`, negative margin)
- **Accessibility**: `aria-labelledby`, `aria-hidden`, `role="img"`, `sr-only` text when color carries meaning
- **Debugging**: a component that renders nothing may have received a function instead of a JSX element

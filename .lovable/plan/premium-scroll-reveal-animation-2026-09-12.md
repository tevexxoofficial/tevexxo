# Premium scroll-reveal animation

## Goal
Add a cinematic bottom-to-top reveal system without changing the site’s layout, styling, content, navigation, or existing non-scroll animations.

## Implementation
- Upgrade the reusable reveal logic to use one-time `IntersectionObserver` triggers at roughly 20% visibility, with a safe viewport fallback and no scroll listeners.
- Add reusable reveal variants:
  - masked text for major section headings, rising from `translateY(110%)`
  - content for descriptions and buttons
  - card/media for a subtle `translateY(50px) scale(0.97)` entrance
- Use the requested premium easing (`cubic-bezier(0.16, 1, 0.3, 1)`) and 700–1000ms durations.
- Preserve existing delay support and apply deliberate sequencing: heading, paragraph, action, then staggered cards or images.
- Apply the system across About, Projects, Services, Why Tevexxo, Blog, and Contact, including shared section headings and social content.
- Keep the Home hero and all existing page-entry, hover, depth, particle, and 3D effects unchanged.

## Responsive and accessibility
- Reduce travel distance on tablets and use a lighter, shorter reveal on phones.
- Disable reveal transitions under `prefers-reduced-motion: reduce`, leaving all content immediately visible.
- Keep animations limited to opacity and transforms for smooth rendering.

## Validation
- Check representative desktop and mobile pages while scrolling.
- Confirm reveals run once, sequence correctly, preserve the current design, and produce no browser console errors.

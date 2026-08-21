# Tevexxo Polish

Please fully inspect my existing Tevexxo website and fix/improve everything without rebuilding it from scratch.

Main Requirements

Keep the existing Tevexxo branding and original logo. Do NOT generate or replace it with a different logo.

Make the Tevexxo logo slightly smaller and properly aligned in the navbar.

Fix the main Tevexxo motion/hero image alignment, sizing and positioning. It must look clean and professional on desktop and mobile.

Keep animations subtle, smooth and professional. Remove excessive movement.

Fix the cursor/Tevexxo symbol interaction if it exists. It must not interfere with buttons, links, scrolling or forms.

Make the navbar fully responsive with working navigation and mobile menu.

Check every button, link and CTA and make sure it actually works.

Fix all broken routes, imports, images and components.

Make all course/training cards and their buttons functional.

Make the Contact form properly validated with name, email, phone and message fields, loading state and success/error states.

Fix Login/Register/Logout functionality if already present.

Make the footer complete, responsive and all existing links functional.

Improve overall UI/UX with a premium dark blue/black professional IT-training design.

Fix spacing, typography, alignment, cards, hover effects and responsive layouts.

Ensure there is no horizontal overflow on mobile.

Add proper responsive behavior for desktop, tablet and mobile.

Remove console errors, warnings, unused code and broken functionality.

Do not add fake functionality or fake success messages.

Reuse existing assets instead of generating unnecessary replacements.

Do not change the existing tech stack or architecture unnecessarily.

Final Check

After making all changes, run the project and verify:

No compile/runtime errors

No console errors

Navbar works

Mobile menu works

Hero image is correctly aligned

Logo is correctly sized

Cursor interaction works properly

All buttons/links work

Forms work correctly

Courses work correctly

Login/Register works if present

Website is fully responsive

IMPORTANT: Actually make the changes in the existing project. Do not just explain what needs to be fixed.   

IMPORTANT: THIS IS A SMALL TARGETED UPDATE TO MY EXISTING TEVEXXO WEBSITE.

DO NOT redesign the website.

DO NOT regenerate the homepage.

DO NOT change the existing layout.

DO NOT change any text, words, sentences, headings, descriptions, labels or content.

DO NOT change fonts.

DO NOT change colors.

DO NOT change spacing or overall UI design.

DO NOT create a new component structure unnecessarily.

ONLY make the exact fixes/features listed below in the EXISTING CODEBASE.

==================================================

1. FIX THE TEVEXXO LOGO POSITION

==================================================

The existing Tevexxo logo is appearing in the wrong position / lower area in some places.

Find the existing Tevexxo logo asset/component in the project and fix its usage.

Use the EXISTING Tevexxo logo only.

DO NOT create a new logo.

DO NOT generate a different logo.

DO NOT replace it with an icon.

The logo must appear exactly in the intended positions shown in my reference screenshot:

- Correct navbar position

- Correct footer position

- Correct existing brand locations

Fix only the logo placement, sizing and alignment.

Do not modify the surrounding navbar design.

Do not change the logo itself.

==================================================

2. COURSE CARD ORANGE BORDER — IMPORTANT

==================================================

Currently the orange border/highlight is permanently visible only on the "Full Stack Development" course card.

THIS MUST BE FIXED.

The orange border must NOT be permanently attached to Full Stack Development.

Instead:

When the user's cursor/mouse enters ANY course card:

→ that course card should receive the orange border/highlight.

When the cursor moves to another course card:

→ the previous card must lose the orange border

→ the newly hovered card must receive the orange border.

Example:

Mouse on AI & Machine Learning

→ AI & Machine Learning card = orange border

→ all other cards = normal

Mouse moves to Data Analytics

→ Data Analytics card = orange border

→ AI & Machine Learning = normal

Mouse moves to Full Stack Development

→ Full Stack Development = orange border

→ others = normal

Mouse moves away from all cards

→ no course card should remain permanently highlighted

OR preserve only the normal default state if that already exists.

VERY IMPORTANT:

Do NOT hardcode the orange border to Full Stack Development.

Remove any static "active" / "selected" styling that causes Full Stack Development to always have the orange border.

Use hover state / mouse enter / mouse leave properly.

The border transition should be smooth and professional.

Do not change the course card content.

==================================================

3. CURSOR EFFECT — ORANGE DOT

==================================================

Add ONE new feature only:

When the user moves the mouse anywhere on the website:

DO NOT show an arrow/cursor symbol as a custom effect.

Instead, create a medium-sized Tevexxo orange circular dot that smoothly follows the cursor position.

Requirements:

- Medium-sized orange dot

- Circular

- Smooth movement

- Follows the mouse position

- Slightly delayed/smooth trailing movement is acceptable

- Must remain professional

- Must not be huge

- Must not flash

- Must not create multiple dots

- Must not leave trails

- Must not interfere with clicking

- Must use pointer-events: none

- Must work across the entire website

IMPORTANT:

Do NOT replace the actual browser cursor with a large custom arrow.

The requested custom visual is ONLY an orange circular dot.

The dot should follow the cursor smoothly.

On mobile/touch devices:

→ disable the cursor dot completely.

Use React state/ref + mousemove efficiently.

Avoid unnecessary re-renders on every mouse movement if possible.

Use requestAnimationFrame or an efficient animation technique.

The orange dot should not affect website performance.

==================================================

4. PROJECT IMAGES

==================================================

In the existing Projects section, the projects already displayed on the website must keep their existing titles, descriptions and text.

DO NOT change any project words/sentences.

ONLY fix the project images.

Each project must have an image that visually matches the project.

For example:

E-Commerce Platform

→ e-commerce website/store/dashboard related image

AI Complaint System

→ AI complaint management / analytics dashboard related image

Cybersecurity Monitoring Dashboard

→ cybersecurity / threat monitoring / security dashboard related image

Do NOT use the same generic image for every project.

Use existing project images/assets from the project wherever available.

If an appropriate local asset already exists, use it instead of creating a new random image.

The image must fit the existing card dimensions and design.

Do not change the project card layout.

Do not change project titles.

Do not change descriptions.

Do not change technology tags.

Do not change buttons.

ONLY improve/fix the project image used for each project.

==================================================

5. DO NOT CHANGE ANY TEXT

==================================================

THIS IS EXTREMELY IMPORTANT.

Keep every existing word and sentence EXACTLY as it currently appears.

Do NOT rewrite:

- Hero heading

- Hero description

- Button text

- Course names

- Course descriptions

- Project names

- Project descriptions

- Technology names

- Testimonials

- Navbar labels

- Footer text

- Statistics

- CTA text

No copywriting changes.

No spelling changes.

No new marketing text.

==================================================

6. DO NOT CHANGE VISUAL IDENTITY

==================================================

Keep the existing:

- Tevexxo orange

- dark background

- white text

- existing font

- existing font weights

- existing card design

- existing border radius

- existing shadows

- existing layout

- existing spacing

- existing animations

The screenshot I provided is the visual reference.

The goal is NOT to make a new design.

The goal is to make the CURRENT design behave correctly.

==================================================

7. DO NOT BREAK EXISTING FUNCTIONALITY

==================================================

Before changing anything, inspect the existing implementation.

Do not remove:

- Navbar functionality

- Navigation

- Course links

- Project links

- Buttons

- Search

- Forms

- Existing animations

- Responsive behavior

Only make the requested targeted fixes.

==================================================

8. FINAL CHECK

==================================================

After making these changes:

1. Run the project.

2. Check the homepage.

3. Move the mouse across every course card.

4. Confirm the orange border follows the hovered course card.

5. Confirm Full Stack Development is NOT permanently highlighted.

6. Move the mouse across the entire page.

7. Confirm ONE medium orange dot smoothly follows the cursor.

8. Confirm no custom arrow symbol appears.

9. Check project images.

10. Confirm each project has a suitable image.

11. Check navbar logo position.

12. Check footer logo position.

13. Check mobile layout.

14. Check browser console for errors.

If there are errors, fix them.

==================================================

FINAL RULE

==================================================

DO NOT redesign anything.

DO NOT regenerate the homepage.

DO NOT change text.

DO NOT change font.

DO NOT change colors.

DO NOT change layout.

ONLY implement these 3 targeted visual/functional updates:

1. FIX TEVEXXO LOGO POSITION

2. MAKE ORANGE COURSE BORDER FOLLOW THE CURRENTLY HOVERED COURSE CARD

3. ADD ONE MEDIUM TEVEXXO ORANGE DOT THAT SMOOTHLY FOLLOWS THE MOUSE CURSOR

4. FIX PROJECT IMAGES SO EACH PROJECT HAS A SUITABLE IMAGE

Make these changes directly in the existing codebase and verify that they work.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a5ceba21-aaee-4292-8023-deabc1a63439).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
#   t e v e x x o  
 
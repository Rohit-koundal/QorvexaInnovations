# Qorvexa Hero Performance Audit

## Scope

Audited the active homepage path:

`page.tsx` → `EditorialHero` → `ProductDeviceStage3D` → laptop, phone, service cards, ambient curves, and GSAP intro controller.

## Findings before optimization

- Pointer movement already wrote to Framer Motion values rather than React state, so mouse movement did not intentionally call a React state setter.
- Pointer events were still handled through React on every raw event and performed DOM traversal and geometry work before updating the motion values.
- Laptop, phone, and all four service cards owned separate infinite Framer Motion loops.
- The stage contained additional independent orb and background-curve CSS loops. Approximately ten continuous loops could remain active on desktop.
- Idle animations continued when the hero left the viewport and while the browser tab was hidden.
- Four moving service cards used `backdrop-filter` even though their backgrounds were nearly opaque.
- GSAP animated `filter: blur()` on the phone and cards and animated `clip-path` on the heading.
- A duplicate blurred phone shadow and a large filtered hero ribbon increased paint work.
- Static hero components were not memoized.
- No Three.js, React Three Fiber, canvas, WebGL, bitmap phone image, or bitmap laptop image is used by the homepage hero. The devices are lightweight HTML/CSS, so images and 3D libraries were not the bottleneck.

## Implemented optimizations

### React rendering and pointer input

- Removed breakpoint-driven React state from the device scene.
- Removed pointer parallax, MotionValues, springs, pointer listeners, geometry reads, and pointer animation frames from the hero entirely.
- The settled hero is now static and mouse movement schedules no React render or visual update.

### Animation ownership

- GSAP exclusively owns first-load entrance wrappers.
- The entrance uses only two-dimensional translate, scale, and opacity values.
- Framer Motion and CSS own no homepage hero motion after the entrance finishes.
- Laptop, phone, service cards, icons, and ambient layers remain fixed after settling.

### Continuous animation removal

- Removed the laptop, phone, service-card, and ambient idle keyframes.
- Removed card hover movement and icon tilt.
- Desktop and mobile now run zero continuous homepage hero loops.

### Visibility and lifecycle

- An `IntersectionObserver` pauses the finite GSAP entrance outside the viewport.
- `visibilitychange` pauses animation while the browser tab is inactive.
- Observers and visibility listeners are removed during cleanup.
- The sticky navigation is RAF-throttled and toggles a DOM data attribute at its visual threshold, so scrolling schedules no React render.

### Paint and compositing

- Removed moving-card `backdrop-filter`.
- Removed animated blur from the GSAP phone and card entrances.
- Replaced the heading `clip-path` animation with transform and opacity.
- Removed the duplicate phone ground shadow.
- Removed the large hero-ribbon filter.
- Replaced the large blurred curve glow with a static radial gradient.
- Flattened the device pose and service cards by removing perspective, `translateZ`, and X/Y-axis rotations.
- `will-change` is applied only during the finite intro and cleared when it completes.
- Animated properties are limited to transform and opacity.

### Component stability

- Memoized the laptop, phone, service card, orb, background curves, luxury icon, and complete device scene.
- Large configuration arrays remain module-level constants rather than being recreated during renders.

## Expected runtime difference

| Area | Before | After |
| --- | --- | --- |
| React commits during pointer movement | Motion values used, but React synthetic handler ran for every event | None; the hero has no pointer interaction path |
| Pointer updates | Every raw pointer event | None |
| Desktop idle loops | Approximately 10 | 0 |
| Mobile idle loops | Phone plus decorative loops | 0 |
| Offscreen/tab-hidden intro work | Continued | Paused |
| Moving backdrop filters | 4 | 0 |
| Animated blur/clip-path | Present | Removed |
| Hero bitmap payload | None | None |

## Verification checklist

- React Profiler should show no commits or hero updates while moving the pointer over the settled hero.
- The Performance panel should show no continuous hero animation work after the entrance completes.
- Scrolling the hero outside the observer margin or hiding the page pauses an entrance that is still running.
- Returning to the hero resumes that finite entrance without restarting it.
- Desktop, mobile, and reduced-motion profiles all settle into the same static, two-dimensional composition.

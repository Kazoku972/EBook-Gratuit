# Responsive Flipbook Template

A 100% responsive flipbook structure based on Turn.js and optimized for mobile devices.

## Features

- **Dynamic Sizing**: Automatically adapts to viewport width and height.
- **Single Page Mode**: Optimized for mobile readability (no double spreads on small screens).
- **Modern CSS**: Uses relative units (rem, vh, %) and flexbox for fluid content.
- **Touch Support**: Enhanced swipe gesture detection for smooth navigation.
- **Clean Structure**: Separated Engine (JS), Design (CSS), and Content (HTML).

## Folder Structure

- `/lib`: jQuery and Turn.js core libraries.
- `/css`: Design system and responsive styles.
- `/js`: The `flipbook.js` engine.
- `index.html`: Your content structure.

## How to use

1. Duplicate this folder for your new project.
2. Open `index.html` and add your pages inside `<div id="flipbook">`.
3. Replace images in the `assets/` folder (or use absolute/relative paths).
4. Customize colors in `css/style.css` using the `:root` variables.

## Customization

- **Ratio**: You can adjust `HEIGHT_RATIO` in `js/flipbook.js` to change the aspect ratio.
- **Max Width**: The flipbook is capped at `500px` width on desktop for better readability. Change this in `js/flipbook.js`.

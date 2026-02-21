/**
 * Flipbook Engine - Responsive Template
 * Version: 1.0.0
 * Handles dynamic sizing, Turn.js initialization, and touch interactions.
 */

$(document).ready(function () {
  const flipbook = $("#flipbook");
  const DISPLAY_MODE = "single"; // Single page for 100% responsiveness on mobile
  const HEIGHT_RATIO = 0.7; // Adjust based on content needs

  function checkSize() {
    // Use innerWidth for fluid container fitting
    const width = Math.min(window.innerWidth, 500);
    const height = window.innerHeight;

    let targetW = width;
    let targetH = Math.round(targetW / HEIGHT_RATIO);

    // Vertical overflow protection
    if (targetH > height - 20) {
      targetH = height - 20;
      targetW = Math.round(targetH * HEIGHT_RATIO);
    }

    if (flipbook.turn("display") !== DISPLAY_MODE) {
      flipbook.turn("display", DISPLAY_MODE);
    }

    flipbook.turn("size", targetW, targetH);

    flipbook.css({
      transform: "none",
      width: targetW + "px",
      height: targetH + "px",
      margin: "0 auto",
    });
  }

  // Initialization
  flipbook.turn({
    width: window.innerWidth,
    height: window.innerWidth / HEIGHT_RATIO,
    autoCenter: true,
    display: DISPLAY_MODE,
    elevation: 50,
    gradients: true,
    duration: 800,
    when: {
      turning: function (event, page, view) {
        console.log("Turning to page: " + page);
      },
      turned: function (event, page, view) {
        console.log("Current page: " + page);
      },
    },
  });

  // Resize handling
  window.addEventListener("resize", checkSize);
  checkSize();

  // Enhanced Touch Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  flipbook.on("touchstart", function (e) {
    touchStartX = e.originalEvent.changedTouches[0].pageX;
  });

  flipbook.on("touchend", function (e) {
    touchEndX = e.originalEvent.changedTouches[0].pageX;
    handleSwipe();
  });

  function handleSwipe() {
    const threshold = 50;
    if (touchStartX - touchEndX > threshold) {
      flipbook.turn("next");
    } else if (touchEndX - touchStartX > threshold) {
      flipbook.turn("previous");
    }
  }

  // Keyboard navigation
  $(window).bind("keydown", function (e) {
    if (e.keyCode === 37) {
      flipbook.turn("previous");
    } else if (e.keyCode === 39) {
      flipbook.turn("next");
    }
  });
});

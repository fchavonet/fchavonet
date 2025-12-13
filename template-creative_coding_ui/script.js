/******************************
* RESPONSIVE WARNING BEHAVIOR *
******************************/

const responsiveWarning = document.getElementById("responsive-warning");
// Enable/disable responsive warning.
const responsiveDesign = false;
// Mobile width limit.
const threshold = 768;

// Show or hide modal based on screen size.
function checkResponsiveState() {
  const small = window.innerWidth <= threshold;

  if (!responsiveDesign && small) {
    if (!responsiveWarning.open) {
      responsiveWarning.showModal();
      document.body.classList.add("overflow-hidden");
    }
  } else {
    if (responsiveWarning.open) {
      responsiveWarning.close();
      document.body.classList.remove("overflow-hidden");
    }
  }
}

// Initial check.
checkResponsiveState();

// Real-time resize detection.
window.addEventListener("resize", checkResponsiveState);

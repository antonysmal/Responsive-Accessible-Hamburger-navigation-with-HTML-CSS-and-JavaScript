const primaryNav = document.querySelector('.primary-navigation-wrapper');
const navigationToggle = document.querySelector('.hamburger-container');

navigationToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');
  console.log(visibility);

  if ( visibility === "false" ) {
    primaryNav.setAttribute('data-visible', true);
    navigationToggle.classList.toggle("hamburger-toggled");
    navigationToggle.setAttribute("aria-expanded", true);
    navigationToggle.setAttribute("aria-label", "Close main navigation");
  }

  else {
    primaryNav.setAttribute('data-visible', false);
    navigationToggle.classList.toggle("hamburger-toggled");
    navigationToggle.setAttribute("aria-expanded", false);
    navigationToggle.setAttribute("aria-label", "Open main navigation");
  }
})

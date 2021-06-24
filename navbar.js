document.addEventListener("DOMContentLoaded", () => {

    const burger = document.getElementsByClassName('burger')[0];
    const navbar = document.getElementsByClassName('navbar')[0];
    const navlinks = document.getElementsByClassName('navlinks')[0];
    const mediaquery = window.matchMedia("(min-width: 760px)");

    burger.addEventListener('click', () => {
        navbar.style.height = navbar.style.height === "100vh" ? "auto" : "100vh";
        navlinks.style.display = navlinks.style.display === "flex" ? "none" : "flex";
        // navlinks.style.visibility = navlinks.style.visibility === "visible" ? "hidden" : "visible";
        // navlinks.style.opacity = navlinks.style.opacity === "1" ? "0" : "1";
    })

    mediaquery.addEventListener("change", handleDeviceChange);

    function handleDeviceChange(e) {
        if (e.matches) {
            navbar.style.height = "auto";
            navlinks.style.display = "flex";
        }
        else {
            navbar.style.height = "auto";
            navlinks.style.display = "none";
        }
    }
    // Run it initially
    handleDeviceChange(mediaquery);

})


//select sidenavbar
var sidenavbar = document.querySelector(".side-navbar")

function shownavbar() {
    sidenavbar.style.left = "0"
}
function closenavbar() {
    sidenavbar.style.left = "-100%"
}


// Home Header 
const images = [
    'image/header-bg.png',
    'image/header-bg2.png',
    'image/header-bg3.jpg'
];

const titles = [
    '<i class="fa-solid fa-gun me-3"></i>TRIGGER MAFIA',
    '<i class="fa-solid fa-flag-checkered me-3"></i>RACER XTREME',
    '<i class="fa-solid fa-biohazard me-3"></i>DEAD ZONE'
];

const taglines = [
    'Gear Up. Squad Up. Dominate the Arena.',
    'Burn Rubber. Chase Glory. Rule the Tracks.',
    'Lock. Load. Survive the Undead Invasion.'
];

function changeHeader(index) {
    // Change image
    document.getElementById('bgImage').src = images[index];
    // Change content
    document.getElementById('headerTitle').innerHTML = titles[index];
    document.getElementById('headerTagline').textContent = taglines[index];

    // Update active dot
    const dots = document.querySelectorAll('.dot-button');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

//About page service section
document.querySelectorAll(".game-service-box").forEach(box => {
    box.addEventListener("mouseover", () => {
        const imgSrc = box.getAttribute("data-img");
        document.getElementById("mainImage").src = imgSrc;
    });
});



//About header 
function updateHeaderImage() {
    const img = document.getElementById('header-img');
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isPortrait) {
        img.src = "image/sidebar-img.jpg"; // Portrait Image
    } else {
        img.src = "image/About-bg.jpg"; // Landscape Image
    }
}

updateHeaderImage();

window.addEventListener('resize', updateHeaderImage);
window.addEventListener('orientationchange', updateHeaderImage);


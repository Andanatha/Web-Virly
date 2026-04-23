// toggle content
function toggle(el, id) {
    document.querySelectorAll('.content').forEach(c => c.classList.remove('open'));
    document.getElementById(id).classList.add('open');
}

// page
function nextPage() {
    document.getElementById("wrapper").style.transform = "translateX(-50%)";
}
function prevPage() {
    document.getElementById("wrapper").style.transform = "translateX(0)";
}

// swipe
let startX = 0;
document.addEventListener("touchstart", e => startX = e.touches[0].clientX);
document.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextPage();
    if (endX - startX > 50) prevPage();
});

// music
let musicStarted = false;
const music = document.getElementById("music");

// play pertama kali user klik di mana saja
document.addEventListener("click", () => {
    if (!musicStarted) {
        music.play().catch(() => { });
        musicStarted = true;
    }
}, { once: true });

// tombol play/pause
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}


// theme
function toggleTheme(){
    document.body.classList.toggle("light-mode");

    const btn = document.querySelector(".theme-toggle");
    if(document.body.classList.contains("light-mode")){
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
}

// effects
document.querySelectorAll('.link,.nav').forEach(btn => {
    btn.addEventListener('click', function (e) {

        // ripple
        let r = document.createElement("span");
        r.className = "ripple";
        this.appendChild(r);
        let rect = this.getBoundingClientRect();
        r.style.left = (e.clientX - rect.left) + "px";
        r.style.top = (e.clientY - rect.top) + "px";
        setTimeout(() => r.remove(), 600);

        // love
        let h = document.createElement("div");
        h.innerHTML = "💖";
        h.style.position = "fixed";
        h.style.left = e.clientX + "px";
        h.style.top = e.clientY + "px";
        h.style.animation = "floatUp 1s forwards";
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 1000);

    });
});

function openPopup(img, text){
    document.getElementById("popup").classList.add("show");
    document.getElementById("popupImg").src = img.src;
    document.getElementById("popupText").innerText = text;
}

function closePopup(){
    document.getElementById("popup").classList.remove("show");
}


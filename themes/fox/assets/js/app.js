const show = document.querySelector('.reveal');
const hidden = document.querySelectorAll('.nsfw');
const urlParams = window.location.hash.slice(1).toLowerCase().split(',');
function revealNSFW(ev) {
    if (ev) {
        ev.preventDefault();
    }
    hidden.forEach(item => item.classList.remove('nsfw'));
    show.classList.add('nsfw');
}
show.addEventListener('click', revealNSFW);
if (urlParams.includes('nsfw')) {
    revealNSFW(null);
}

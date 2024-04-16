function toggleBlur(blur) {
    var imagenFondo = document.querySelector('.BGimagen img');
    imagenFondo.style.filter = blur ? 'blur(5px) brightness(0.4)' : 'blur(0) brightness(0.9)';
}

window.addEventListener('load', function() {
    toggleBlur(true);
});

window.addEventListener('blur', function() {
    toggleBlur(false);
});

window.addEventListener('focus', function() {
    toggleBlur(true);
});

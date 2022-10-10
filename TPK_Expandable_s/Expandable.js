(function () {
    let wraps = document.querySelectorAll('.wrap');
    wraps.forEach(wrap => {
        wrap.addEventListener('click', () => {
            wrap.classList.toggle('active');
        })
    })
})();

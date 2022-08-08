window.addEventListener('load', function () {

    const button = document.getElementById("theme-btn");

    button.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');

    });
});
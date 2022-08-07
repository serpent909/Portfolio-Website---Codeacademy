window.addEventListener('load', function () {

    const button = document.getElementById("btn");
    let buttonState = false;
    
    button.addEventListener('click', function () {
        if (!buttonState) {
        document.body.style.backgroundColor = 'darkgrey';
        buttonState = true;
        } else {
        document.body.style.backgroundColor = '';
        buttonState = false;
        }
    });

});
window.addEventListener('load', function () {

    let cubeFaces = document.querySelector(".cube");
    let randomFace = document.getElementById("cube-btn-random-face");
    let randomAngle = document.getElementById("cube-btn-random-angle");

    const posBot = 'rotateX(90deg)';
    const posTop = ' rotateX(-90deg)';
    const posFront = '';
    const posBack = 'rotateX(180deg) rotateZ(180deg)';
    const posLeft = ' rotateY(90deg)';
    const posRight = ' rotateY(-90deg)';

    let currentPos = posFront;

    const changePosition = () => {

        const randomPos = Math.floor(Math.random() * 6);
        switch (randomPos) {
            case 0:
                if (currentPos === posBot) {
                    changePosition();
                }
                cubeFaces.style.transform = posBot;
                currentPos = posBot;
                break;
            case 1:
                if (currentPos === posTop) {
                    changePosition();
                }
                cubeFaces.style.transform = posTop;
                currentPos = posTop;
                break;
            case 2:
                if (currentPos === posFront) {
                    changePosition();
                }
                cubeFaces.style.transform = posFront;
                currentPos = posFront;
                break;
            case 3:
                if (currentPos === posBack) {
                    changePosition();
                }
                cubeFaces.style.transform = posBack;
                currentPos = posBack;
                break;
            case 4:
                if (currentPos === posLeft) {
                    changePosition();
                }
                cubeFaces.style.transform = posLeft;
                currentPos = posLeft;
                break;
            case 5:
                if (currentPos === posRight) {
                    changePosition();
                }
                cubeFaces.style.transform = posRight;
                currentPos = posRight;
                break;
        }
    }

    const changeAngle = () => {
        let rotateX = Math.floor(Math.random() * 360);
        let rotateY = Math.floor(Math.random() * 360);
        let rotateZ = Math.floor(Math.random() * 360);
        cubeFaces.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;

    }

    randomFace.addEventListener('click', changePosition);
    randomAngle.addEventListener('click', changeAngle);

});
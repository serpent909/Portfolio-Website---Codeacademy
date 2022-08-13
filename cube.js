window.addEventListener('load', function () {


    let cubeFaces = document.querySelector(".cube");
    let cubeContainer = document.querySelector(".cube-container");
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


    const changeAngle2 = (x,y) => {
        let rotateY = x;
        let rotateX = y;
        let rotateZ = Math.sqrt(x*x + y*y);
        cubeContainer.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`;
        
    }

    document.querySelector('body').addEventListener('mousedown', (event) => {
        let initialX = event.clientX;
        let initialY = event.clientY;


        this.document.onmousemove = (event) => {
            let changeX = initialX + event.clientX;
            let changeY = initialY - event.clientY;
            changeAngle2((changeX),(-changeY));
        }
    })

    document.addEventListener('mouseup', (event) => {
        this.document.onmousemove = null;
    });







    document.querySelector('body').addEventListener('touchstart', (e) => {
        let initialX = e.touches[0].clientX;
        let initialY = e.touches[0].clientY;


        this.document.ontouchmove = (e2) => {
            let changeX = initialX + e2.touches[0].clientX;
            console.log(changeX);
            let changeY = initialY - e2.touches[0].clientY;
            changeAngle2((changeX),(-changeY));
        }
    })

    document.addEventListener('touchend', (event) => {
        this.document.ontouchmove = null;
    });


    randomFace.addEventListener('click', changePosition);
    randomAngle.addEventListener('click', changeAngle);

    changeAngle();

});
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
        cubeContainer.style.transition = '5s'

        const randomPos = Math.floor(Math.random() * 6);
        switch (randomPos) {
            case 0:
                if (currentPos === posBot) {
                    changePosition();
                }
                cubeContainer.style.transform = posBot;
                currentPos = posBot;
                break;
            case 1:
                if (currentPos === posTop) {
                    changePosition();
                }
                cubeContainer.style.transform = posTop;
                currentPos = posTop;
                break;
            case 2:
                if (currentPos === posFront) {
                    changePosition();
                }
                cubeContainer.style.transform = posFront;
                currentPos = posFront;
                break;
            case 3:
                if (currentPos === posBack) {
                    changePosition();
                }
                cubeContainer.style.transform = posBack;
                currentPos = posBack;
                break;
            case 4:
                if (currentPos === posLeft) {
                    changePosition();
                }
                cubeContainer.style.transform = posLeft;
                currentPos = posLeft;
                break;
            case 5:
                if (currentPos === posRight) {
                    changePosition();
                }
                cubeContainer.style.transform = posRight;
                currentPos = posRight;
                break;
        }
        
    }

    const changeAngle = () => {
        cubeContainer.style.transition = '5s'
        let rotateX = Math.floor(Math.random() * 360);
        let rotateY = Math.floor(Math.random() * 360);
        let rotateZ = Math.floor(Math.random() * 360);
        cubeContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    }


    const changeAngle2 = (x, y) => {
        let rotateY = x;
        let rotateX = y;
        let rotateZ = x/-y;
        cubeContainer.style.transition = 'none';
        cubeContainer.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

    }

    // event listeners for desktop
    document.querySelector('body').addEventListener('mousedown', (event) => {
        let initialX = event.clientX;
        let initialY = event.clientY;
        console.log(initialX, initialY);


        this.document.onmousemove = (event) => {
            let changeX = event.clientX - initialX;
           
            let changeY = initialY - event.clientY;
            console.log(changeX, changeY)
            changeAngle2((changeX), (-changeY));
        }
    })

    document.addEventListener('mouseup', (event) => {
        this.document.onmousemove = null;
    });

    // event listeners for mobile
    document.querySelector('body').addEventListener('touchstart', (e) => {
        let initialX = e.touches[0].clientX;
        let initialY = e.touches[0].clientY;


        this.document.ontouchmove = (e2) => {
            let changeX = initialX + e2.touches[0].clientX;
            console.log(changeX);
            let changeY = initialY - e2.touches[0].clientY;
            changeAngle2((changeX), (-changeY));
        }
    })

    document.addEventListener('touchend', (event) => {
        this.document.ontouchmove = null;
    });


    randomFace.addEventListener('click', changePosition);
    randomAngle.addEventListener('click', changeAngle);

    changeAngle();

});
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = [ ];  // THE LIST OF ALL SPRITES TO BE DRAWN ON OUR CANVAS
const maxSize = 200;

const donutImage = new Image();

class SpinningDonut {
    constructor () {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.xMomentum = Math.random() * 15 - 7.5; // values of 0-15 - median is 7.5 - this will shift it down by 7.5 for values from -7.5 to +7.5
        this.yMomentum = Math.random() * 15 -7.5;
        this.rotation = 0;  // ROTATING AROUND A CIRCLE - ROTATE BY DEGREE
        this.opacity = 1;   // 0 COMPLETLY TRANSPARENT -> 1 COMPLETLY VISIABLE
        this.size = Math.random() * 3;
        this.donutSprite = "images/248897.png";
    }

    update() {
        this.rotation += 1;
        this.size -= 0.05;
        this.opacity -= 0.01;
        this.x += this.xMomentum;
        this.y += this.yMomentum;
    }

    draw() {
        context.save();
        context.globalAlpha = this.opacity;
        context.translate(this.x,this.y);
        context.rotate(Math.Pi / 180 * this.rotation);  //expecting radian value, this.roation is in degree value. this changes degree to radian
        context.drawImage(donutImage, (-donutImage.width / 4) * this.size, (-donutImage.height / 4) * this.size, (donutImage.width / 2) * this.size, (donutImage.width / 2) *this.size);
        context.restore();

    }
}

function spawnSpinningDonut() {
    if (particleArray.length < maxSize){
    particleArray.push(new SpinningDonut());
    console.log(particleArray);
    }
}

// START OF ANNIMATION
function init() {
    particleArray = [];
}

// WHAT IS HANDLED IN OUR ANIMATION
function animate() {
    requestAnimationFrame(animate);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particleArray.forEach(function(particle){
        particle.update();
        particle.draw();
    });
    particleArray = particleArray.filter(function(particle) { // REMOVES ALL ELEMENTS THE FUNCTION TURNS FALSE FOR
        return particle.opacity >- 0.08 && particle.size >= 0.1;


    });

    // UPDATE - FUNCTION THAT UPDATES THE LOGIC



    // DRAW - FUNCITON THAT DRAWS OUR INFORMATION



}





init();
animate();


const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let load = 0;
//Here, we initialize a variable int where we use a setInterval 
//function that takes value blurring with 30 millisecond.
// This means the value of load that we set to 0 will increase in every 30ms 

let int = setInterval(blurring, 40)

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int)
            //if the load is greater than 99 clearinterval function is called and then, int because let int = setInterval(blurring, 30)
    }
    loadText.innerText = `${load} %`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30,0 ) }px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
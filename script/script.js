// Dom selection 

const h1result = document.querySelector('.h1result');
const startbtn = document.querySelector('.startbtn');
const clickbtn = document.querySelector('.clickbtn');
const winScore = 10;
let count = 0;


// add event listener on start button 
startbtn.addEventListener('click', function() {
        count = 0;
        h1result.innerHTML = count;
        clickbtn.classList.remove('bg-secondary')
        clickbtn.classList.add('bg-danger');
        clickbtn.removeAttribute('disabled');
        timemanager();
    })
    // add event listener on click button
clickbtn.addEventListener('click', function() {
        startCounting();
    })
    // Declear counting function 
function startCounting() {
    count++;
    h1result.innerHTML = count;
}
// set 2 seconds duration 
function timemanager() {
    setTimeout(function() {
        if (count < winScore) {
            lostFunc();
        } else {
            winFunc();
        }
    }, 2000)
}

// lost function for lost game 
function lostFunc() {
    h1result.innerHTML = 'You lost !'
    clickbtn.classList.add('bg-secondary')
    clickbtn.classList.remove('bg-danger')
    clickbtn.setAttribute('disabled', true)
}
// Win function for win game 
function winFunc() {
    clickbtn.classList.add('bg-secondary')
    clickbtn.classList.remove('bg-danger')
    h1result.innerHTML = 'You Win !'
    clickbtn.setAttribute('disabled', true)
}
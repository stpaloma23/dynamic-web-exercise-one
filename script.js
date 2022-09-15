window.onload=function(){
    var button = document.getElementById('inc-button');
    button.addEventListener('click', increaseCounter)
}
var counter = 0;
function increaseCounter() {
    counter += 1;
    document.getElementById('click-counter').innerHTML = counter;
}
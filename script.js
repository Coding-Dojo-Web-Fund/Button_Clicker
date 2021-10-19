function signout(element){
    element.innerText = "logout";
}

function hide(element){
    element.remove();
}

var num = 1;
function numIncrease(element){
    element.innerText = num +" likes";
    num++;
}
let result = document.getElementById("Display");
function add(value){
    result.value += value
}
function Clear(){
    result.value = "";
}
function calculate(){
    result.value = eval(result.value);
}
const Cal = document.getElementById("display")


function calcul(input){
    Cal.value += input;
}
function Clear(){
    Cal.value = ""
}
function Remove(){
    Cal.value = Cal.value.slice(0, -1);
}
function calculate(){
    try {
        Cal.value = eval(Cal.value);
    } catch (error) {
        Cal.value = "Error";    
    }
}
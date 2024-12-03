//Clear the Calculator display
function clearScreen(){
document.getElementById("result").value="";
}
//Appends the click button value to the display
function setScreenValue(value){
    document.getElementById("result").value +=value;
}
//Calculates and displays the result
function calculateResult(){
    const resultElement= document.getElementById("result");
    const expression=resultElement.value.trim();

//Check for empty input
if(expression===''){
    resultElement.value='Enter an expression';
    return;
}
//Evaluate expression and handle value
try{
    resultElement.value=eval(expression);
}catch(e){
    resultElement.value='Invalid Expression';
}
} 


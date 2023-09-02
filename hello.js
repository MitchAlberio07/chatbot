// A function to display a mesage 
function chat () {
    alert ("Ask me anything");

    const yourName = prompt ("What is your name?");
    alert("Hello," + yourName +"!")
}

//Call function pn click of the button
document.getElementById("myBtn").onclick = sayHello;
